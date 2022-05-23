<template>
  <footer class="relative">
    <div class="mx-auto max-w-screen-xl px-4 py-12 md:py-24 z-10 text-sm text-blue-200">
      <div class="grid grid-cols-1 md:grid-cols-3 justify-between gap-6">
        <div class="link-box">
          <div class="box-title">{{$t('footer.resource.title')}}</div>
          <div class="box-items">
            <div class="box-link"><a href="https://about.viblo.asia/organization-feature" target="_blank" rel="noopener noreferrer">{{$t('footer.resource.organization')}}</a></div>
            <div class="box-link"><a href="https://viblo.asia/questions" target="_blank" rel="noopener noreferrer">{{$t('footer.resource.questions_an')}}</a></div>
            <div class="box-link"><a href="https://machine-learning.viblo.asia/" target="_blank" rel="noopener noreferrer">{{$t('footer.resource.machine_learn')}}</a></div>
            <switch-language/>
          </div>
        </div>

        <div class="link-box">
          <div class="box-title">{{$t('footer.services')}}</div>
          <div class="box-items">
            <div class="box-link"><a href="https://viblo.asia/" target="_blank" rel="noopener noreferrer">Viblo</a></div>
            <div class="box-link"><a href="https://code.viblo.asia/" target="_blank" rel="noopener noreferrer">Viblo Code</a></div>
            <div class="box-link"><a href="https://ctf.viblo.asia/" target="_blank" rel="noopener noreferrer">Viblo CTF</a></div>
            <div class="box-link"><a href="https://cv.viblo.asia/" target="_blank" rel="noopener noreferrer">Viblo CV</a></div>
            <div class="box-link"><a href="https://learn.viblo.asia/" target="_blank" rel="noopener noreferrer">Viblo Learning</a></div>
            <div class="box-link"><a href="https://accounts.viblo.asia/" target="_blank" rel="noopener noreferrer">Viblo Accounts</a></div>
          </div>
        </div>

        <div class="link-box">
          <div class="box-title">{{$t('footer.contact_us')}}</div>
          <div class="box-items">
            <div class="box-link">
              <a href="mailto:contact@viblo.asia" target="_blank" rel="noopener noreferrer" class="flex items-center">
                <MdMailIcon w="16px" h="16px" class="inline mr-2" />contact@viblo.asia
              </a>
            </div>
          </div>

          <div class="box-title mt-4">Links</div>
          <div class="box-items flex flex-row">
            <a class="box-link block mr-2" href="https://github.com/viblo-asia" target="_blank" rel="noopener noreferrer">
              <LogoGithubIcon w="36px" h="36px" />
            </a>
            <a class="box-link block" href="https://facebook.com/viblo.asia" target="_blank" rel="noopener noreferrer">
              <LogoFacebookIcon w="36px" h="36px" />
            </a>
          </div>
        </div>
      </div>
      <hr class="my-4" style="border-top: 1px solid rgba(255, 255, 255, 0.2)" />
      <div class="copy flex justify-between">
        <div class="copy-text z-10">© 2022 <strong>Viblo</strong>. All rights reserved.</div>
        <div class="copy-link z-10">
          <a href="https://viblo.asia/feedback" class="mr-4">{{$t('footer.feedback')}}</a>
          <a href="https://viblo.asia/terms">{{$t('footer.terms')}}</a>
        </div>
      </div>
    </div>
    </footer>
</template>

<script>
import LogoGithubIcon from 'vue-ionicons/dist/logo-github'
import LogoFacebookIcon from 'vue-ionicons/dist/logo-facebook'
import MdMailIcon from 'vue-ionicons/dist/md-mail.vue'
import switchLanguage from './switchLanguage'

export default {
  components: {
    LogoGithubIcon,
    LogoFacebookIcon,
    MdMailIcon,
    switchLanguage
  }
}
</script>

<style lang="scss" scoped>
  footer {
    &:before {
      content: "";
      background: url(../assets/v-pattern-footer.png) right bottom no-repeat;
      background-size: contain;
      mix-blend-mode: screen;
      opacity: 0.5;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
    }

    .link-box {
      @apply z-10;

      .box-title {
        @apply col-span-2 uppercase font-bold text-lg mb-4;
      }

      .box-items {
        .box-link {
          @apply mb-2 fill-current;
        }
      }
    }
  }
</style>
