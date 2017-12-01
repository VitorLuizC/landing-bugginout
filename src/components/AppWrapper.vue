<template>
  <div class="app-wrapper">
    <slot />
  </div>
</template>

<style>
  .app-wrapper {
    box-sizing: border-box;
    margin-right: auto;
    margin-left: auto;
    padding-right: 20px;
    padding-left: 20px;
  }

  @media screen and (min-width: 1024px) {
    .app-wrapper {
      width: 90%;
    }
  }
</style>
