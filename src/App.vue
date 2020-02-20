<template>
  <div id="app">
    <FirstSection />
    <IntroSection />
    <MachineLearningSection />
  </div>
</template>

<script>
import FirstSection from './components/FirstSection'
import IntroSection from './components/IntroSection'
import MachineLearningSection from './components/MachineLearningSection'

export default {
  name: 'App',
  components: {
    FirstSection,
    IntroSection,
    MachineLearningSection
  }
}
</script>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  background: #01001e;
  font-family: 'Roboto',-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
}
</style>
