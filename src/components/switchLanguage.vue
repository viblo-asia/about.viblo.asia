<template>
    <div class="mt-16 h-8 flex flex-row " id="switchLanguage">
      <span>
        <img v-if ="i18n == 'en'" src="../assets/en-flag-32x48.png" class="h-6 mr-2" alt="">
        <img v-else src="../assets/vi-flag-32x48.png" class="h-6 mr-2" alt="">
        </span>
        <select class="bg-white h-6 text-black ml-9 w-1/2 rounded grow" v-model="$i18n.locale" @change="onChange">
            <option
                v-for="lang in langs"
                :key="lang.key"
                :value="lang.key"
            >
            <i class="fa fa-globe lead text-body"></i>
                {{ lang.label }}
            </option>
        </select>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'SwitchLocale',
  data () {
    return {
      langs: [
        {
          label: 'Tiếng Việt',
          key: 'vi'
        },
        {
          label: 'English',
          key: 'en'
        }
      ]
    }
  },
  computed: {
    ...mapState(['i18n'])
  },
  methods: {
    onChange () {
      this.$store.commit('setI18', this.$i18n.locale)
    }
  }
}
</script>
<style lang="scss">
#switchLanguage{
  border-radius: 5px;
}
</style>
