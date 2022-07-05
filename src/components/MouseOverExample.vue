<template>
  <div>
    <h3>REUSABILITY WITH COMPOSABLE EXAMPLE</h3>
    <h4 @mouseover="incrementCount">Hovered {{ count }} times</h4>
  </div>
</template>

<script>
import useCounter from "../composables/useCounter";
export default {
  name: "MouseOverExample",
  setup() {
    //useCounter() returns an object with count and incrementCount which we can destructured
    const { count, incrementCount } = useCounter();

    return {
      count,
      incrementCount,
    };
  },
};
</script>

<style scoped></style>
