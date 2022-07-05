// this function call in every component where you need counter functionality
import { ref } from "vue";
//initialSize and stepParameter argument we also use
// export default function useCounter() {
export default function useCounter(initialCount = 0, stepSize = 1) {
  //for variable we use ref function
  const count = ref(initialCount);

  function incrementCount() {
    count.value += stepSize;
  }

  return {
    count,
    incrementCount,
  };
}
