<template>
  <!-- // how to replace data and methods option and then how to replace computed option -->
  <div>
    <input type="text" placeholder="first name" v-model="fName" />
    <input type="text" placeholder="last name" v-model="lName" />
    <h3>VMODEL AND COMPOSITION API</h3>
    <input type="text" placeholder="name" v-model="name" />
    <input type="text" placeholder="first name" v-model="firstName" />
    <input type="text" placeholder="last name" v-model="lastName " />
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
export default {
  name: "VModelAndCompositionApi",
  setup() {
    const name = ref("");
    const state = reactive({
      firstName: "",
      lastName: "",
    });

    return {
      name,
      ...toRefs(state),
    };
  },
  //option API
  //   data() {
  //     return {
  //       fName: "",
  //       lName: "",
  //     };
  //   },
};
</script>

<style scoped></style>
