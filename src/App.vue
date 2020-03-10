<template>
  <div id="app">
    <Menu />
    <FirstSection />
    <main id="content">
      <SectionAbout />
      <SectionMilestone />
      <CounterSection />
      <TopSection />
      <SectionService />
      <MachineLearningSection />
      <SectionEvent />
    </main>
    <Footer />
  </div>
</template>

<script>
import Menu from './components/Menu'
import Footer from './components/Footer'
import SectionAbout from './components/SectionAbout'
import SectionService from './components/SectionService'
import SectionMilestone from './components/SectionMilestone'
import FirstSection from './components/FirstSection'
import TopSection from './components/TopSection'
import MachineLearningSection from './components/MachineLearningSection'
import SectionEvent from './components/SectionEvent'
import CounterSection from './components/CounterSection'

export default {
  name: 'App',

  components: {
    Menu,
    Footer,
    SectionAbout,
    SectionService,
    SectionMilestone,
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
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  @import './scss/_variable.scss';
  @import '../node_modules/magic.css/dist/magic.min.css';

  body {
    background: #01001e;
    font-family: 'Roboto',-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  }

  #app {
    background: $bg_color;
    color: $text_primary;
    overflow-x: hidden;
  }
</style>
