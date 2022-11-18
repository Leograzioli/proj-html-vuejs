import { reactive } from "vue";

export const store = reactive({
    orderOnlineLinks: [
        {
          name: 'Appetizers',
          href: '/appetizers',
          active: false
        },
        {
          name: 'Burgers',
          href: '/burgers',
          active: false
        },
        {
          name: 'Pizza',
          href: '/pizza',
          active: false
        },
        {
          name: 'Fries',
          href: '/fries',
          active: false
        },
        {
          name: 'Sides',
          href: '/sides',
          active: false
        },
        {
          name: 'Deserts',
          href: '/deserts',
          active: false
        },
        {
          name: 'Beverages',
          href: '/beverages',
          active: false
        },
        {
          name: 'Specials',
          href: '/specials',
          active: false
        },

      ],
      navigateLinks: [
        {
          name: 'Home',
          href:'/home'
        },
        {
          name: 'Alternate Home',
          href:'/alternate-home'
        },
        {
          name: 'Menu',
          href:'/menu'
        },
        {
          name: 'About',
          href:'/about'
        },
        {
          name: 'News',
          href:'/news'
        },
        {
          name: 'Contact us',
          href:'/contact-us'
        },
        {
          name: 'Cart',
          href:'/cart'
        }
      ],
      informationLinks: [
        {
          name: 'My Account',
          href: '/my-account'
        },
        {
          name: 'Terms of Service',
          href: '/terms-of-service'
        },
        {
          name: 'Privacy Policy',
          href: '/privacy-policy'
        },
      ],
      openingHoursLink: [
        {
          name: 'Mon - 10AM to 11PM',
          href: '/monday'
        },
        {
          name: 'Tue - 10AM to 11PM',
          href: '/tuesday'
        },
        {
          name: 'Wed - 10AM to 11PM',
          href: '/wednesday'
        },
        {
          name: 'Thur - 10AM to 11PM',
          href: '/thursday'
        },
        {
          name: 'Fri - 10AM to 11PM',
          href: '/'
        },
        {
          name: 'Sat - 10AM to 11PM',
          href: '/saturday'
        },
        {
          name: 'Sun - 10AM to 11PM',
          href: '/sunday'
        },
      ]
})