import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { dts } from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import terser  from '@rollup/plugin-terser'; // Update import for terser

const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: {
      file: packageJson.main,
      format: 'esm',
      sourcemap: true,
    },
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
        // Set include option to include CSS files in TypeScript bundle
        include: [/\.tsx?$/, /\.css$/],
      }),
      resolve(),
      commonjs(),
      postcss({
        extract: false, // Disable CSS extraction
        inject: true, // Inject CSS into the bundle
        minimize: true,
        // Add any additional postcss plugins if needed
      }),
      terser(),
      
    ],
    external: ["react", "react-dom"],
  },
  {
    input: 'dist/cjs/types/src/index.d.ts',
    output: { file: 'dist/index.d.ts', format: 'esm' },
    plugins: [dts()],
    external: [/\.css$/],
  },
];
