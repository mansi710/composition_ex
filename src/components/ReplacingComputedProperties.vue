<template>
  <div>
    <h4>OptionAPI Fullname is {{ fullName }}</h4>
    <input type="text" placeholder="first name" v-model="fName" />
    <input type="text" placeholder="last name" v-model="lName" />

    <h3>REPLACING COMPUTED PROPERTIES</h3>
    <input type="text" placeholder="first name" v-model="refFirstName" />
    <input type="text" placeholder="last name" v-model="refLastName" />
    <h4>Compposition with REF API Fullname is {{ refFullName }}</h4>

    <input type="text" placeholder="first name" v-model="reactiveFirstName" />
    <input type="text" placeholder="last name" v-model="reactiveLastName" />
    <h4>Compposition with toRef API Fullname is {{ reactiveFullName }}</h4>
  </div>
</template>

<script>
import { ref, reactive, computed, toRefs } from "vue";
export default {
  name: "ReplacingComputedProperties",
  setup() {
    //WITH REF
    const refFirstName = ref("");
    const refLastName = ref("");
    //this functions accepts a function as it's argument which returns computed value
    const refFullName = computed(function () {
      return `${refFirstName.value} ${refLastName.value}`;
    });

    //WITH REACTIVE
    const state = reactive({
      reactiveFirstName: "",
      reactiveLastName: "",
    });

    const reactiveFullName = computed(function () {
      return `${state.reactiveFirstName} ${state.reactiveLastName}`;
    });

    return {
      refFullName,
      refFirstName,
      refLastName,
      ...toRefs(state),
      reactiveFullName,
    };
  },
  data() {
    return {
      fName: "",
      lName: "",
    };
  },
  computed: {
    fullName() {
      return `${this.fName} ${this.lName}`;
    },
  },
};
</script>

<style scoped></style>
