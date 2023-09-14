/* eslint-disable */
import { Store } from "vuex"

declare module '@vue/runtime-core' {
  declare module '*.vue';

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}