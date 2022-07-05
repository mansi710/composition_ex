<template>
  <div>
    <h3>REPLACING DATA WITH REACTIVE</h3>
    <h4>{{ c_firstName }} {{ c_lastName }} {{ c_heroName }}</h4>
    <h4>{{ greet }}</h4>
    <h4>Reactive {{ firstName }} {{ lastName }} {{ heroName }}</h4>
    <h4>Reactive Greet {{ reactiveGreetHero }}</h4>
  </div>

  <!-- use ref when dealing with premitive types string , boolean ,  number so on -->
  <!-- reavctive can only accept object -->
</template>


<script>
import { ref, reactive } from "vue";
export default {
  name: "ReplacingDataWithReactive",
  setup() {
    //for every property we invoke ref function or
    //when accessing the value or assiging a new value we would to need .value every single time.
    //so reactive function can comes under picture
    const c_firstName = ref("arrav");
    const c_lastName = ref("ganglani");
    const c_heroName = ref("niraj");

    const greet = `hello ${c_firstName.value} ${c_lastName.value} ${c_heroName.value}`;

    // unlike the ref function  reactive accepts an object as its argument
    // and within an object we can define the different properties
    const state = reactive({
      firstName: "dimpi",
      lastName: "ganglani",
      heroName: "Dinesh",

      // reactive return the reactive reference which we can store in a constant
    });

    // we can create new greet msg using the const state
    const reactiveGreetHero = `Reactive ${state.firstName} ${state.lastName} ${state.heroName}`;

    return {
      c_firstName,
      c_lastName,
      c_heroName,
      greet,
      state,
      reactiveGreetHero,
    };
  },
};
</script>

<style scoped></style>
