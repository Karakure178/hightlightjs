<script setup>
import { ref } from "vue";

const classList = defineProps({
  className: {
    type: String,
    default: "",
  },
  buttonText: {
    type: String,
    default: "",
  },
  href: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <a class="commonButton" :class="classList.className" :href="classList.href">
    <span>
      {{ classList.buttonText }}
    </span>
  </a>
</template>

<style lang="scss" scoped>
.commonButton {
  display: flex;
  justify-content: center;
  font-family: $abrilFatface;
  background-color: $blackColor;
  border: 2px solid $blackColor;
  border-radius: 3px;
  transition: background-color 0.3s ease-out;

  @include MQ-BETWEEN(769, 1174) {
    width: 190px;
  }

  @include MQ-UP(1175) {
    width: 243px;
  }

  @include L-XL {
    height: 80px;
    padding-top: 10px;
  }

  @include S-M {
    width: 129px;
    height: 44px;
  }

  & span {
    color: #dcdcdc;
    transition: color 0.3s ease-out;

    @include MQ-BETWEEN(769, 1174) {
      font-size: 30px;
    }

    @include MQ-UP(1175) {
      font-size: 40px;
    }

    @include L-XL {
      line-height: calc(60 / 44);
    }

    @include S-M {
      font-size: 20px;
      line-height: calc(27 / 20);
    }
  }

  @include hover-and-active {
    background-color: #707070;

    & span {
      color: $blackColor;
    }
  }
}
</style>
