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

## Solution

See `vue3JestHack.js` file.

In `jest.config.js` uncomment the transform option to use vue3JestHack, and run test again. You should see tests passing