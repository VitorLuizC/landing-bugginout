<template>
  <header class="app-header">
    <app-wrapper class="wrapper">
      <img class="logo" src="logo.svg" alt="Buggin'Out!">
      <app-menu class="menu" />
      <app-button class="button" alternative>Jogar Agora</app-button>
    </app-wrapper>
  </header>
</template>

<script>
  import AppMenu from './AppMenu'
  import AppButton from './AppButton'
  import AppWrapper from './AppWrapper'

  export default {
    components: { AppMenu, AppButton, AppWrapper }
  }
</script>

<style>
  .app-header {
    width: 100%;
    height: 120px;
    background-color: rgba(255,255,255, .12);
  }

  .app-header > .wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin-left: auto;
  }

  .app-header > .wrapper > .logo {
    position: absolute;
    top: 22px;
    left: 0;
    display: block;
  }

  .app-header > .wrapper > .menu { margin-left: auto; }
</style>
