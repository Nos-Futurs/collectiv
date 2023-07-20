import dts from "rollup-plugin-dts";
import typescript from "@rollup/plugin-typescript";

const config = [
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.js",
      format: "umd",
      name: "index.umd.js",
    },
    plugins: [typescript()],
  },
  {
    // path to your declaration files root
    input: "./dist/dts/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "umd" }],
    plugins: [dts()],
  },
];
export default config;
