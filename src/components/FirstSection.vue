<template>
  <section id="first-section"
    class="relative near-full-height">
    <div id="brand" class="flex flex-col absolute z-10">
      <img src="../assets/logo.svg" alt="Viblo Logo" id="logo" class="mb-3">
      <div class="text-center select-auto text-lg md:text-2xl"><strong>Free</strong> service for technical knowledge <strong>sharing</strong></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  #first-section {
    background: radial-gradient(#003dbd, #01001e);
    height: 90vh;

    &:after {
      content: "";
      background: url(../assets/v-pattern.svg) left bottom no-repeat;
      mix-blend-mode: screen;
      opacity: 0.3;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
    }

    #brand {
      left: 50%;
      top: 32%;
      transform: translateX(-50%);
      color: #7acaff;
    }
  }

  @media (max-width: 800px) {
    #first-section {
      height: 45vh;

      #brand {
        left: 50%;
      }
    }
  }
</style>
