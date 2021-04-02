import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postCss from 'rollup-plugin-postcss';
import typescript from '@rollup/plugin-typescript';
import visualizer from 'rollup-plugin-visualizer';
import { terser } from 'rollup-plugin-terser';

const extensions = ['.js', '.ts', '.jsx', '.tsx'];

export default {
  input: [
    './src/index.ts',
  ],
  output: {
    dir: 'dist',
    format: 'esm',
    preserveModules: true,
    preserveModulesRoot: 'src',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    commonjs(),
    postCss(),
    typescript({
      tsconfig: './tsconfig.build.json',
      declaration: true,
      declarationDir: 'dist',
    }),
    terser(),
    visualizer({
      filename: 'bundle-analysis.html',
      open: true,
    }),
  ],
  external: ['react', 'react-dom'],
};
