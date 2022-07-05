<template>
  <div>
    <h3>REPLACING METHODS</h3>
    <h4>{{ name }}</h4>
    <button @click="setName">Change Name</button>

    <h4>{{ count }}</h4>
    <button @click="incrementCount">Increment Count</button>

    <h4>{{ first }} {{ last }}</h4>
    <button @click="chnageName">Change Both Name</button>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
export default {
  name: "ReplacingMethods",
  setup() {
    //with REf
    const count = ref(0);

    function incrementCount() {
      count.value++;
    }

    //with REactive
    const state = reactive({
      first: "shlok",
      last: "ganglani",
    });
    function chnageName() {
      state.first = "muskan";
      state.last = "alik";
    }
    return {
      count,
      incrementCount,
      ...toRefs(state),
      chnageName,
    };
  },
  //    with OPTION API
  //   data() {
  //     return {
  //       name: "mansi",
  //     };
  //   },
  //   methods: {
  //     setName() {
  //       this.name = "manvi";
  //     },
  //   },
};
</script>

<style scoped></style>
