<template>
  <div id="app">
    <FirstSection />
    <IntroSection />
  </div>
</template>

<script>
import FirstSection from './components/FirstSection'
import IntroSection from './components/IntroSection'

export default {
  name: 'App',
  components: {
    FirstSection,
    IntroSection
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

.blend-screen {
  mix-blend-mode: screen;
}
</style>
