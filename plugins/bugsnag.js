import Vue from 'vue'
import Bugsnag from '@bugsnag/js'
import BugsnagPluginVue from '@bugsnag/plugin-vue'

const bugsnagClient = Bugsnag.start({
  apiKey: '945d438235e53a52bf36473606733754',
  plugins: [new BugsnagPluginVue(Vue)],
  enabledReleaseStages: ['production'],
  releaseStage: 'production',
})

export default (_, inject) => {
  inject('bugsnag', bugsnagClient)
}
