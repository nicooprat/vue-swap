import Swap from './Swap.vue'

export {
  Swap,
}

function registerComponents (Vue, prefix) {
  Vue.component(`${prefix}swap`, Swap)
  Vue.component(`${prefix}Swap`, Swap)
}

const plugin = {
  // eslint-disable-next-line no-undef
  version: VERSION,
  install (Vue, options) {
    const finalOptions = Object.assign({}, {
      installComponents: true,
      componentsPrefix: '',
    }, options)

    if (finalOptions.installComponents) {
      registerComponents(Vue, finalOptions.componentsPrefix)
    }
  },
}

export default plugin

// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}
