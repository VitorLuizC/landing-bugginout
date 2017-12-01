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

<style lang="scss">
  .app-menu > .items {
    list-style: none;
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 768px) {
    .app-menu {
      position: absolute;
      top: 0;
    }
  }

  @media screen and (min-width: 769px) {
    .app-menu > .items {
      flex-direction: row;
      margin: 0;
      padding: 0;

      & > .item {
        height: 120px;
        margin-right: 15px;
        margin-left: 15px;

        & > .link {
          line-height: 120px;
          font-size: 2.25em;
          color: #fff;
        }
      }
    }
  }
</style>

