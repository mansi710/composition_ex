<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <HelloWorld msg="Welcome to Your Vue.js App" />

  <ReplacingDataWithRefs />

  <ReplacingDataWithReactive />
  <ReactivityAndtoRefs />

  <ReactivityAndtoRefsB />

  <ReplacingMethods />

  <VModelAndCompositionApi />

  <ReplacingComputedProperties />

  <ReplacingWatchers />

  <ReplacingProvideInject />

  <TemplateRef/>

  <PropsCompositionApi/>

  <ClickCounterExample/>

  <MouseOverExample/>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import ReplacingDataWithRefs from "./components/ReplacingDataWithRefs.vue";
import ReplacingDataWithReactive from "./components/ReplacingDataWithReactive.vue";
import ReactivityAndtoRefs from "./components/ReactivityAndtoRefs.vue";
import ReactivityAndtoRefsB from "./components/ReactivityAndtoRefsB.vue";
import ReplacingMethods from "./components/ReplacingMethods.vue";
import VModelAndCompositionApi from "./components/VModelAndCompositionApi.vue";
import ReplacingComputedProperties from "./components/ReplacingComputedProperties.vue";
import ReplacingWatchers from "./components/ReplacingWatchers.vue";
import ReplacingProvideInject from "./components/ReplacingProvideInject.vue";
import TemplateRef from "./components/TemplateRef.vue";
import PropsCompositionApi from "./components/PropsCompositionApi.vue";
import ClickCounterExample from "./components/ClickCounterExample.vue";
import MouseOverExample from "./components/MouseOverExample.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    ReplacingDataWithRefs,
    ReplacingDataWithReactive,
    ReactivityAndtoRefs,
    ReactivityAndtoRefsB,
    ReplacingMethods,
    VModelAndCompositionApi,
    ReplacingComputedProperties,
    ReplacingWatchers,
    ReplacingProvideInject,
    TemplateRef,
    PropsCompositionApi,
    ClickCounterExample,
    MouseOverExample,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
