/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly BASE_URL: string;
  // add other VITE_XXX variables here if you have them
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
