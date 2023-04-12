require('dotenv').config()
import Vue from 'vue'
import Bugsnag from '@bugsnag/js'
import BugsnagPluginVue from '@bugsnag/plugin-vue'

const bugsnagClient = Bugsnag.start({
  apiKey: process.env.BUGSNAG_API_KEY,
  plugins: [new BugsnagPluginVue(Vue)],
  enabledReleaseStages: ['production'],
  releaseStage: process.env.NODE_ENV,
})

export default (_, inject) => {
  inject('bugsnag', bugsnagClient)
}
