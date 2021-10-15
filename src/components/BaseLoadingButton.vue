<template>
  <button class="bb-btn bb-btn-dark relative" :class="{ loading: loading }" :disabled="loading" type="button">
    <slot>Submit</slot>
    <span class="spinner">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </span>
  </button>
</template>

<script lang="ts">
export default {
  name: "BaseLoadingButton",
  props: {
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
    styled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>


.spinner {
  line-height: 1.15;
  position: absolute;
  top: 50%;
  left: auto;
  right: 1.7rem;
  margin: -0.5em;
  opacity: 0;
  transition-property: padding, opacity;
  transition-duration: 0.2s, 0.2s;
  transition-timing-function: ease-in, ease;
   transition-delay: 0s, 0.2s;

  span {
    box-sizing: border-box;
    display: inline-block;
    position: absolute;
    right: 0;
    top: 0.15rem;
    width: 1rem;
    height: 1rem;
    opacity: 1;
    border: 3.4px solid #888;
    border-radius: 50%;
    animation: spinner 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #888 transparent transparent transparent;

    &:nth-child(1) {
      animation-delay: 0.45s;
    }
    &:nth-child(2) {
      animation-delay: 0.3s;
    }
    &:nth-child(3) {
      animation-delay: 0.15s;
    }
  }
}
.loading {
  padding-right: 3rem !important;
  .spinner {
    opacity: 1;
    span {
      opacity: 1;
    }
  }
}

button:not(:disabled) .spinner span {
  box-shadow: 0 0 0 0.2rem #888 inset;
  border: 7.4px solid transparent;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
}
button:not(:disabled) .spinner span:nth-child(1) {
  transform: rotate(0deg) !important;
}
button:not(:disabled) .spinner span:nth-child(2) {
  transform: rotate(90deg) !important;
}
button:not(:disabled) .spinner span:nth-child(3) {
  transform: rotate(180deg) !important;
}
button:not(:disabled) .spinner span:nth-child(4) {
  transform: rotate(270deg) !important;
}
@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
