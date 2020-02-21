<template>
  <section id="machine-learning">
    <div id="ml-container"
      class="relative max-w-screen-xl ml-auto mr-auto h-full flex items-center justify-center md:justify-end">
      <div class="flex flex-col justify-end p-2 md:p-5 z-10">
        <div class="flex justify-end">
          <span class="p-2 md:p-5 bg-blue-600 text-white text-lg md:text-3xl uppercase">
            <span class="font-thin">Viblo</span> <span class="text-red-600">♥</span> <strong>Machine Learning</strong>
          </span>
        </div>
        <div id="ml-intro" class="md:mt-12 mt-8 text-blue-100 max-w-lg text-justify">
          <p>Viblo ứng dụng các kỹ thuật trong Machine Learning, Deep Learning và đặc biệt là
            Natural Language Processing để giải quyết các vấn đề nhằm cải thiện trải nghiệm
            người dùng, cũng như thúc đẩy hơn nữa sự phát triển của Viblo trong tương lai.</p>

          <p>Các ứng dụng sử dụng kỹ thuật Machine Learning của Viblo được publish tại
            <a class="text-blue-400" href="https://machine-learning.viblo.asia">
              machine-learning.viblo.asia</a>.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  #machine-learning {
    height: auto;
    background: linear-gradient(90deg, rgba(1,0,30,1) 0%, rgba(0,61,189,1) 100%);
    background-size: contain;

    #ml-container {
      padding: 4rem 0;

      &:after {
        content: "";
        background: url(../assets/skull.svg) left bottom no-repeat;
        background-size: contain;
        mix-blend-mode: screen;
        opacity: 0.35;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        position: absolute;
      }
    }

    #ml-intro {
      & > * + *,  & li + li, & li > p + p {
        @apply mt-6;
      }
    }
  }

  @media (min-width: 1024px) {
    #machine-learning {
      height: 80vh;

      #ml-container {
        padding: 0;

        &:after {
          opacity: 1;
        }
      }
    }
  }
</style>
