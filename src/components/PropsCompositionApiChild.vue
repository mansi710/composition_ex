<template>
  <!-- this file is the child component -->
  <div>
    <h4>PropsCompositionApiChild</h4>
    <!-- <h5>Hello Child Props {{ firstName }} {{ lastName }}</h5> -->
    <h5>Hello Child props with computed {{ fullName }}</h5>

    <!-- the better way to define our template replace the first 
    and last name with a signle computed properties -->

    <!-- COMPOSITION API EVENT  -->
    <button @click="sendEvent">CALL HEROS</button>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  name: "PropsCompositionApiChild",
  props: ["firstName", "lastName"],

  //recives an argument which is the props for this component
  //context is expose the emit event

        //context object explore a 3 properties
            //1 
  setup(props, context) {
    const fullName = computed(() => {
      return `${props.firstName} ${props.lastName}`;
    });

    //how to emit a custom event in teh setup method
    function sendEvent() {
      //1 st argument custom event name
      //2 nd argument is any value that we would like to send back to the parent
      context.emit("callHeros", fullName.value);
    }
    return {
      fullName,
      sendEvent,
    };
  },
};
</script>

<style scoped></style>
