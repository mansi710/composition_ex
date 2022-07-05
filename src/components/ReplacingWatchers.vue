<template>
  <div>
    <h4>OptionAPI Watchers</h4>
    <input type="text" placeholder="Name" v-model="name" />

    <h4>Composition API Watchers with Ref</h4>
    <input type="text" placeholder="First Name" v-model="firstName" />
    <input type="text" placeholder="Last Name" v-model="lastName" />

    <h4>Composition API Watchers With Reactive</h4>
    <input type="text" placeholder="Reactive First Name" v-model="fName" />
    <input type="text" placeholder="Reactive Last Name" v-model="lName" />
    <input
      type="text"
      placeholder="Reactive Option Hero Name"
      v-model="options.heroName"
    />
  </div>
</template>

<script>
import { ref, watch, reactive, toRefs } from "vue";
import _ from "lodash";
export default {
  name: "ReplacingWatchers",
  setup() {
    const firstName = ref("");
    const lastName = ref("twin");

    //the function accepts 2 argument
    // 1 st arguments data stores to watch
    // 2 nd argument function which  is pretty much as same we use our data option
    //it receives oldvalue and new value as argument
    // watch(firstName, (newValue, oldValue) => {
    //   console.log("old value", oldValue);
    //   console.log("new value", newValue);
    // });

    //watch function also expects an array of data sources as well
    //also uses multiple sources using array
    watch(
      [firstName, lastName],
      (newValues, oldValues) => {
        console.log("first name old value", oldValues[0]);
        console.log("first name new value", newValues[0]);
        console.log("last name old value", oldValues[1]);
        console.log("last name new value", newValues[1]);
      },
      { immediate: true }
    );

    //if watcher run on initial value as well as subsequent value you need to specify 3 rd argument
    // to the object

    // WATCHERS WITH REACTIVE
    const state = reactive({
      fName: "",
      lName: "",
      options: {
        heroName: "",
      },
    });

    //when you passing reactive object as a data source the old and new value will be the same
    //and that is inteded behaviour
    // instead of state we use arrow function
    // watch(
    //   () => {
    //     return {
    //       ...state,
    //     };
    //   },
    //   function (newValue, oldValue) {
    //     console.log("fName old value", oldValue.fName);
    //     console.log("fName new value", newValue.fName);
    //     console.log("lName old value", oldValue.lName);
    //     console.log("lName new value", oldValue.lName);
    //   }
    // );

    //when watching individual properties is in reactive object as well we need to use getter function
    watch(
      () => state.fName,
      function (newValue, oldValue) {
        console.log("fname old value", oldValue);
        console.log("fname new value", newValue);
      }
    );

    watch(
      () => _.cloneDeep(state.options),
      function (newValue, oldValue) {
        console.log("heroName old value", oldValue);
        console.log("heroName new value", newValue);
      },
      {
        deep: true,
      }
    );
    return {
      firstName,
      lastName,
      ...toRefs(state),
    };
  },
  data() {
    return {
      name: "",
    };
  },
  watch: {
    name(newValue, oldValue) {
      console.log("Old Value", oldValue);
      console.log("New Value", newValue);
    },
  },
};
</script>

<style scoped></style>
