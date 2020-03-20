import Vue from 'vue'
import 'normalize.css/normalize.css'
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons/regular/keyboard'
import 'vue-awesome/icons/regular/trash-alt'
import 'vue-awesome/icons/regular/clone'
import 'vue-awesome/icons/regular/dot-circle'
import 'vue-awesome/icons/regular/check-square'
import 'vue-awesome/icons/bars'
import 'vue-awesome/icons/regular/calendar-alt'
import 'vue-awesome/icons/regular/clock'
import 'vue-awesome/icons/th'
import 'vue-awesome/icons/sort-numeric-up'
import 'vue-awesome/icons/regular/star'
import 'vue-awesome/icons/palette'
import 'vue-awesome/icons/regular/caret-square-down'
import 'vue-awesome/icons/toggle-off'
import 'vue-awesome/icons/sliders-h'
import 'vue-awesome/icons/regular/image'
import 'vue-awesome/icons/chalkboard'

import WidgetForm from './components/WidgetForm'
import MakingForm from './components/Container.vue'
import GenerateForm from './components/GenerateForm.vue'
import GenerateFormH5 from './components/h5/GenerateFormH5.vue'

Vue.component('icon', Icon)

/*移动端组件*/
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

MakingForm.install = function (Vue) {
  Vue.component(MakingForm.name, MakingForm)
}

WidgetForm.install = function (Vue) {
  Vue.component('WidgetForm', WidgetForm);
}

GenerateForm.install = function (Vue) {
  Vue.component(GenerateForm.name, GenerateForm)
}
GenerateForm.install = function (Vue) {
  Vue.component(GenerateFormH5.name, GenerateFormH5)
}

const components = [
  MakingForm,
  WidgetForm,
  GenerateForm,
  GenerateFormH5
]

const install = function (Vue, opts = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  MakingForm,
  WidgetForm,
  GenerateForm,
  GenerateFormH5
}

export default {
  install,
  MakingForm,
  GenerateForm,
  WidgetForm,
  GenerateFormH5
}
