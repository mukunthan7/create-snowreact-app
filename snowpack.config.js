// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

const dotenv = require("dotenv");

module.exports = {
  mount: {
    public: { url: "/", static: true },
    src: { url: "/src" },
  },
  env: {
    ...dotenv.config().parsed,
  },
  plugins: [
    "@snowpack/plugin-react-refresh",
    "@snowpack/plugin-sass",
    "@snowpack/plugin-dotenv",
    [
      "@snowpack/plugin-babel",
      {
        input: [".js", ".jsx", ".ts", ".tsx"],
        transformOptions: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: "> 0.25%, not dead",
              },
            ],
            "@babel/preset-react",
          ],
        },
      },
    ],
  ],
  packageOptions: {},
  devOptions: {
    port: 3000,
    hmr: true,
    out: "build",
  },
  buildOptions: {
    out: "build",
    sourcemap: true,
    clean: true,
  },
  alias: {
    "@assets": "./src/assets",
    "@components": "./src/components",
    "@pages": "./src/pages",
  },
  knownEntrypoints: ["react", "react-dom"],
};
