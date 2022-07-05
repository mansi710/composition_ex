<template>
  <!-- ref and reactive function which returns reactive refrence that can be store in a constant  -->
  <div>
    <h3>REACTIVITY AND TO REFS</h3>
    <h4>{{ name }}</h4>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "ReactivityAndtoRefs",
  setup() {
    //vue doesn't know how to changes on value
    // let name = "mansi";
    const name = ref("mansi");
    setTimeout(() => {
      name.value = "rushan";
      // ui is not refalcing that so  ref function and vue's
      // distinct reactivity comes under to the picture
      console.log(name);
    }, 2000);
    return {
      name,
    };
  },
};
</script>

<style scoped></style>
