<template>
  <!-- this file is the parent component -->
  <div>
    <h3>PROPS WITH COMPOSITION API</h3>
    <input type="text" placeholder="First Name" v-model="firstName" />
    <input type="text" placeholder="Last Name" v-model="lastName" />
  </div>

  <!-- we pass firstName and lastName as props -->
  <PropsCompositionApiChild
    :firstName="firstName"
    :lastName="lastName"
    @callHeros="callHeros"
  />
</template>

<script>
import { ref } from "vue";
import PropsCompositionApiChild from "./PropsCompositionApiChild.vue";
export default {
  name: "PropsCompositionApi",
  components: {
    PropsCompositionApiChild,
  },

  setup() {
    const firstName = ref("");
    const lastName = ref("");

    function callHeros(hero) {
      alert(`calling hero ${hero}`);
    }
    return {
      firstName,
      lastName,
      callHeros,
    };
  },
};
</script>

<style lang="scss" scoped></style>
