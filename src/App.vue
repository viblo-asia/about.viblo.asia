<template>
  <div id="app">
    <FirstSection />
    <main id="content">
      <SectionAbout />
      <SectionAbility />
      <SectionMilestone />
      <CounterSection />
      <MachineLearningSection />
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer'
import SectionAbout from './components/SectionAbout'
import SectionAbility from './components/SectionAbility'
import SectionMilestone from './components/SectionMilestone'
import FirstSection from './components/FirstSection'
import MachineLearningSection from './components/MachineLearningSection'
import CounterSection from './components/CounterSection'

export default {
  name: 'App',
  components: {
    Footer,
    SectionAbout,
    SectionAbility,
    SectionMilestone,
    FirstSection,
    MachineLearningSection,
    CounterSection
  }
}
</script>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700&display=swap&subset=vietnamese');
@import './scss/_variable.scss';

body {
  background: #01001e;
  font-family: 'Roboto',-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
}

#app {
  background: $bg_color;
  color: $text_primary;
}

.section-head {
  h3 {
    padding: 10px 30px;
    display: inline-block;
    margin-bottom: 20px;
    background: rgba(24,42,192,.4);
    color: #FFF
  }
}
</style>
