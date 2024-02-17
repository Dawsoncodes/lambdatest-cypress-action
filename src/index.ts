import { setFailed, getBooleanInput } from "@actions/core"
import { exec } from "@actions/exec"
import path from "path"

import { updateCredentials } from "./ltAuth"
import { moveDeps } from "./utils"

const main = async () => {
  try {
    await updateCredentials()

    const includeDeps = getBooleanInput("include_deps")

    if (includeDeps) {
      await moveDeps()
    }

    await exec(
      "git clone https://github.com/Dawsoncodes/lambdatest-cypress-cli"
    )

    // Install deps
    await exec("npm install", [], {
      cwd: path.join(process.cwd(), "lambdatest-cypress-cli"),
    })

    // Link the package
    await exec("npm link", [], {
      cwd: path.join(process.cwd(), "lambdatest-cypress-cli"),
    })

    await exec("lambdatest-cypress run")
  } catch (error) {
    if (error instanceof Error) {
      return setFailed(error.message)
    }

    setFailed(`Error: ${error}`)
  }
}

main()