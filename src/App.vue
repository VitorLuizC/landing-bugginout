<template>
  <main class="main-container">
    <app-header class="header" />
    <app-section id="game" class="section" />
    <app-section id="history" class="section" />
    <app-section id="screenshots" class="section" />
  </main>
</template>

<script>
  import AppHeader from './components/AppHeader'
  import AppSection from './components/AppSection'

  export default {
    components: { AppHeader, AppSection }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');

  body { margin: 0; }

  .main-container { position: relative; }

  .main-container > .header {
    position: absolute;
    top: 0;
    left: 0;
  }

  .main-container > .section:nth-child(2) {
    box-sizing: border-box;
    padding-top: 120px;
    background-image: linear-gradient(-180deg, #6A52A2 0%, #A5509F 98%);
  }
</style>