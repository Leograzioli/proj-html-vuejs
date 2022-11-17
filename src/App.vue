<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
        return {
            navLinks: [
                {
                    name: 'Home',
                    href: '/home'
                },
                {
                    name: 'Order Online',
                    href: '/order-online'
                },
                {
                    name: 'About',
                    href: '/about'
                },
                {
                    name: 'News',
                    href: '/news'
                },
                {
                    name: 'Contact us',
                    href: '/contact-us'
                },
                {
                    name: 'cart',
                    href: '/home'
                },
            ],
        }
    }
}
</script>

<template>
  <AppHeader :links="navLinks" />
  <AppMain />
</template>

<style lang="scss">
@use "./styles/general.scss"
</style>