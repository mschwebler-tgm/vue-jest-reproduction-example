<template>
  <div>{{ data.text }}</div>
</template>

<script setup lang="ts">
import type {ExampleProps} from "@/components/ExampleProps";

const data = defineProps<ExampleProps>();

// Uncomment the following line to see that types work if not used in defineProps()
// const data: ExampleProps = {
//   text: 'Hello World'
// }
</script>
