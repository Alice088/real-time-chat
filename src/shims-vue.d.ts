/* eslint-disable */
import { Store } from "vuex"

declare module '@vue/runtime-core' {
  declare module "*.vue"

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
