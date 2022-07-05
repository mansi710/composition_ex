<template>
  <div>
    <h3>With Options API</h3>
    <input type="text" ref="inputRef" />
    <h3>TEMPLATE REF WITH COMPOSITION API EXAMPLE</h3>
    <!-- input element with ref attribute = inputRef and inside script block we have 
    mounted lifecycle hook where we access the refs using .$refs and on the input ref
    we call the focus method -->
    <input type="text" ref="inputRef" />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  name: "TemplateRef",
  mounted() {
    this.$refs.inputRef.focus();
  },

  setup() {
    const inputRef = ref(null);

    //then call onMounted hook

    //accepts a function as argument
    //with that function we call focus method on the input ref constsnt
    onMounted(() => {
      inputRef.value.focus();
    });
    return {
      inputRef,
    };
  },
};
</script>

<style scoped></style>
