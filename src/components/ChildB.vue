<template>
  <div>
    <h3>CHILD B</h3>
    <ChildC />
  </div>
</template>

<script>
import ChildC from "./ChildC.vue";

export default {
  name: "ChildB",
  components: {
    ChildC,
  },
};
</script>

<style scoped></style>
