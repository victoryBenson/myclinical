declare const process: { env: { API_URL?: string } } | undefined;

const envApiUrl = typeof process !== "undefined" && process?.env?.API_URL ? process.env.API_URL : undefined;

export const API_URL = envApiUrl || "http://localhost:3000";