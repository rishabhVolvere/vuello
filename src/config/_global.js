import Vue from 'vue'
import { camelCase, upperFirst } from 'lodash'

const requireComponent = require.context(
  '@/components',
  false,
  /App[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  const componentName = upperFirst(
    camelCase(
      fileName
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )
  )

  Vue.component(componentName, componentConfig.default || componentConfig)
})
