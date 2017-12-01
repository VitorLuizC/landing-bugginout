<template>
  <nav class="app-menu">
    <ul class="items">
      <li
        v-for="(item, index) in items"
        class="item"
        :key="index"
      >
        <a
          v-smooth-scroll
          class="link"
          :href="item.link"
        >{{ item.text }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            text: 'O Jogo',
            link: '#game'
          },
          {
            text: 'História',
            link: '#history'
          },
          {
            text: 'Screenshots',
            link: '#screenshots'
          }
        ]
      }
    }
  }
</script>

<style>
  .app-menu > .items {
    list-style: none;
    display: flex;
    flex-direction: column;
  }

  .app-menu > .items > .item { color: #fff; }

  @media screen and (min-width: 769px) {
    .app-menu {
      position: absolute;
      top: 0;

    }
  }

  @media screen and (min-width: 769px) {
    .app-menu {
      height: 100%;
    }

    .app-menu > .items {
      flex-direction: row;
    }

    .app-menu > .items > .item {
      color: #fff;
      margin-right: 15px;
      margin-left: 15px;
    }

    .app-menu > .items > .item {

    }
  }
</style>

