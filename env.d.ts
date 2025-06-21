/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    OPENWEATHERMAP_API_KEY: string;
    // add other env vars here as needed
  }
}
