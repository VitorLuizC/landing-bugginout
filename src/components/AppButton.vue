<template>
  <button :class="classes">
    <span class="text">
      <slot />
    </span>
    <span class="icon">
      <slot name="icon" />
    </span>
  </button>
</template>

<script>
  export default {
    props: {
      alternative: Boolean
    },
    computed: {
      classes () {
        const classes = ['app-button', { '-alternative': this.alternative }]
        return classes
      }
    }
  }
</script>

<style>
  .app-button {
    width: 240px;
    height: 80px;
    border: 0 none transparent;
    border-radius: 20px;
    font-weight: 700;
    font-size: 2.25em;
    letter-spacing: -1.3px;
  }

  .app-button.-alternative {
    color: #7452a1;
    background-color: #f8f8f8;
  }
</style>
