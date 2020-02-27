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
      <SectionCTF />
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer'
import SectionAbout from './components/SectionAbout'
import SectionAbility from './components/SectionAbility'
import SectionMilestone from './components/SectionMilestone'
import SectionCode from './components/SectionCode'
import SectionCTF from './components/SectionCTF'
import FirstSection from './components/FirstSection'
import TopSection from './components/TopSection'
import MachineLearningSection from './components/MachineLearningSection'
import SectionEvent from './components/SectionEvent'
import CounterSection from './components/CounterSection'

export default {
  name: 'App',
  components: {
    Footer,
    SectionAbout,
    SectionAbility,
    SectionMilestone,
    SectionCode,
    SectionCTF,
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
