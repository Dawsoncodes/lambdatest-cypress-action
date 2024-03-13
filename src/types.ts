export interface LambdaTestAuth {
  username: string
  access_key: string
}

export interface Browser {
  browser: string
  platform: string
  versions: string[]
}

export interface RunSettings {
  reporter_config_file: string
  build_name: string
  parallels: number
  specs: string
  ignore_files: string
  network: boolean
  headless: boolean
  npm_dependencies: {
    [key: string]: string
  }
}

export interface TunnelSettings {
  tunnel: boolean
  tunnel_name: string | null
}

export interface LambdaTestConfig {
  lambdatest_auth: LambdaTestAuth
  browsers: Browser[]
  run_settings: RunSettings
  tunnel_settings: TunnelSettings
}

export interface PackageJson {
  devDependencies: Record<string, string>
  dependencies: Record<string, string>
  [key: string]: unknown
}

export interface CommandOptions {}

export interface ActionInputs {
  LT_USERNAME: string
  LT_ACCESS_KEY: string
  include_deps: boolean

  /**
   * The directory where the lambdatest-config.json is located
   */
  base_path?: string
  lambdatest_config_file?: string
  build_name?: string
}
