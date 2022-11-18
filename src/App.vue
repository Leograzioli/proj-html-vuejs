<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  data() {
        return {
            navLinks: [
                {
                    name: 'Home',
                    href: '/home',
                    active: true,
                    id: 1
                },
                {
                    name: 'Order Online',
                    href: '/order-online',
                    active: false,
                    id: 2
                },
                {
                    name: 'About',
                    href: '/about',
                    active: false,
                    id: 3
                },
                {
                    name: 'News',
                    href: '/news',
                    active: false,
                    id: 4
                },
                {
                    name: 'Contact us',
                    href: '/contact-us',
                    active: false,
                    id: 5
                },
                {
                    name: 'cart',
                    href: '/home',
                    active: false,
                    id: 6
                }
            ]
        }
    },
    methods: {
      handleClick (id) {
        this.navLinks.forEach((item) => {
          item.active = false;
        })
        this.navLinks[id - 1].active = true;
      }
    }
}
</script>

<template>
  <AppHeader :links="navLinks" @clicked-link="handleClick" />
  <AppMain />
  <AppFooter />
</template>

<style lang="scss">
@use "./styles/general.scss"
</style>