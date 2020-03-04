<template>
  <div class="section-head text-center">
    <h3 class="uppercase text-4xl" v-html="section_title"></h3>
  </div>
</template>

<script>
export default {
  props: ['section_title']
}
</script>

<style lang="scss">
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
