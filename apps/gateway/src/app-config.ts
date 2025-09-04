export class AppConfig {
  public readonly port = Number(process.env.PORT) || 4000;

  public readonly generatorBaseUrl =
    process.env.GENERATOR_BASE_URL ?? "http://localhost:4001";

  public readonly nodeEnv = process.env.NODE_ENV ?? "production";
}

export const appConfig = new AppConfig();
