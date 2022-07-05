<template>
  <div>
    <h3>REPLACING PROVIDE INJECT</h3>
    <h4>Parent Component count {{ count }}</h4>
    <h4>Parent Component hero {{ firstName }} {{ lastName }}</h4>

    <button @click="incrementCount">Increment Count</button>
    <ChildA />
  </div>
</template>

<script>
import { provide, ref, reactive, toRefs } from "vue";
import ChildA from "./ChildA.vue";

export default {
  name: "ReplacingProvideInject",
  components: {
    ChildA,
  },

  setup() {
    // 1 st argument label for the value
    // 2 nd argument is the actual value we want to provide
    provide("c_username", "Ruhan");

    //through REF
    const count = ref(10);
    function incrementCount() {
      count.value++;
    }
    provide("c_count", count);
    provide("incrementCount", incrementCount);
    //Though  and Reactive
    const state = reactive({
      firstName: "ruhan",
      lastName: "harwani",
    });
    provide("c_hero", state);

    return {
      count,
      ...toRefs(state),
      incrementCount,
    };
  },
};
</script>

<style scoped></style>
