<template>
  <div>
    <!-- when you are using reusable function with composition api
     thay are call hooks and composables -->
    <h3>REUSABILITY WITH COMPOSABLE EXAMPLE</h3>
    <button @click="incrementCount">Click {{ count }} times</button>
  </div>
</template>

<script>
import useCounter from "../composables/useCounter";
export default {
  name: "ClickCounterExample",

  setup() {
    //useCounter() returns an object with count and incrementCount which we can destructured
    const { count, incrementCount } = useCounter(100, 10);

    return {
      count,
      incrementCount,
    };
  },
};
</script>

<style scoped></style>
