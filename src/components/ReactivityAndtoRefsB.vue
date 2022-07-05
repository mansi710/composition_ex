<template>
  <div>
    <h3>REACTIVITY AND TO REFS</h3>
    <!-- <h4>{{ state.firstName }} {{ state.lastName }}</h4> -->
    <h4>{{ firstName }} {{ lastName }}</h4>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  name: "ReactivityAndtoRefsB",
  setup() {
    const state = reactive({
      firstName: "ruhan",
      lastName: "harwani",
    });

    setTimeout(() => {
      (state.firstName = "hetal"), (state.lastName = "heena");
    }, 2000);

    // preservs the reactivity for the individual properties in this state   object
    return toRefs(state);
    // return {
    //   //   state,
    //   firstName: state.firstName,
    //   lastName: state.lastName,
    // };
  },
};
</script>

<style scoped></style>
