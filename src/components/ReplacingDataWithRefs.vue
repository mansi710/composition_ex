<template>
  <div>
    <h3>REPLACING DATA WITH REFS</h3>
    <h4>composition api:- {{ c_firstName }}</h4>
    <!-- template however the value property -->
    <h4>{{ greet }}</h4>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "ReplacingDataWithRefs",
  //setup() method is the entry point of composition API
  setup() {
    //ref() is an attribute gives us reference to a Html DOM element or a child component
    //returns reactive reference to a value
    //store that reference in constant

    // ref is function which returns reactive and mutable object that servers as reactive refernce
    // to the internal value it is holding
    const c_firstName = ref("mansi");
    c_firstName.value = "Ruhan";
    const greet = `heloo ${c_firstName.value}`;
    console.log(c_firstName);

    // we neeed to return an object from the setup method
    //and specifies the properties we want to expose
    return {
      c_firstName,
      greet,
    };
  },
};
</script>

<style scoped></style>
