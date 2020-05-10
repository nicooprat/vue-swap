import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'vue-swap',
    file: 'dist/vue-swap.umd.js',
    format: 'umd',
    sourcemap: true,
  },
})

export default config
