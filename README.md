# Reproduction example for vue bug

## Problem

When importing types in component, it fails in jest environment. To reproduce run:
```
npm run test
```

You should see an error:

```
[@vue/compiler-sfc] No fs option provided to `compileScript` in non-Node environment. File system access is required for resolving imported types.
```

### Files used to reproduce the problem:
- `src/components/Example.vue`
- `src/components/Example.spec.ts`
- `src/components/ExampleProps.ts`

In `Example.vue` comment out the defineProps and use the type for a normal variable to see this issue only occurs when using types with Vue generics: 
```vue
<script setup lang="ts">
import type {ExampleProps} from "@/components/ExampleProps";

const data = defineProps<ExampleProps>();

// Uncomment the following line to see that types work if not used in defineProps()
// const data: ExampleProps = {
//   text: 'Hello World'
}
</script>
```