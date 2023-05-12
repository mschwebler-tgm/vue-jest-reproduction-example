module.exports = {
  moduleFileExtensions: ["js", "jsx", "json", "vue", "ts", "tsx"],
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    // Uncomment to see tests working
    // "^.+\\.vue$": "./vue3JestHack.js",
    "^.+\\.(ts|tsx)$": ["ts-jest", { tsconfig: `./tsconfig.node.json` }],
  },
  testEnvironment: "jsdom",
  // https://stackoverflow.com/a/72955178/8610142
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
  globals: {
    "vue-jest": { tsConfig: `./tsconfig.node.json` },
  },
};
