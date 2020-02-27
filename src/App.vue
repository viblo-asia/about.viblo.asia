<template>
  <div id="app">
    <FirstSection />
    <main id="content">
      <SectionAbout />
      <SectionAbility />
      <SectionMilestone />
      <CounterSection />
      <TopSection />
      <MachineLearningSection />
      <SectionEvent />
      <SectionCode />
    </main>
    <Footer />
  </div>
</template>

<script>
const Footer = () => import('./components/Footer')
const SectionAbout = () => import('./components/SectionAbout')
const SectionAbility = () => import('./components/SectionAbility')
const SectionMilestone = () => import('./components/SectionMilestone')
const SectionCode = () => import('./components/SectionCode')
const FirstSection = () => import('./components/FirstSection')
const TopSection = () => import('./components/TopSection')
const MachineLearningSection = () => import('./components/MachineLearningSection')
const SectionEvent = () => import('./components/SectionEvent')
const CounterSection = () => import('./components/CounterSection')

export default {
  name: 'App',
  components: {
    Footer,
    SectionAbout,
    SectionAbility,
    SectionMilestone,
    SectionCode,
    FirstSection,
    TopSection,
    MachineLearningSection,
    SectionEvent,
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
