<template>
  <div>
    <h3>CHILD C</h3>
    <h4>Child Component C composition c_username {{ childUserName }}</h4>

    <h4>Child Component C count {{ childCount }}</h4>
    <h4>Child Component C hero {{ firstName }} {{ lastName }}</h4>
    <button @click="incrementCount">Increment Count From The Child</button>
  </div>
</template>

<script>
import { inject, toRefs } from "vue";
export default {
  name: "ChildC",
  //   inject: ["username"],

  setup() {
    //1 st argument label of the value that is provioded
    //2 nd argument is optional and default value if there is no value provided from the parent
    //which we will store in constant and bind with template
    const childUserName = inject("c_username", "Default Username");
    const childCount = inject("c_count", 0);
    const childHero = inject("c_hero", {});
    const incrementCount=inject('incrementCount')

    return {
      childUserName,
      childCount,
      ...toRefs(childHero),
      incrementCount,
    };
  },
};
</script>

<style scoped></style>