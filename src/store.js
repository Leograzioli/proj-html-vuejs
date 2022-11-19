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
        {
          name: '',
          href: '/app-store',
          img: '/app-store-badge-200x67.png'
        },
        {
          name: '',
          href: '/google-play',
          img: '/play-store-badge-200x67.png'
        },
      ],
      openingHoursLink: [
        {
          day: 'Mon',
          hour: '- 10AM to 11PM',
          href: '/monday'
        },
        {
          day: 'Tue',
          hour: '- 10AM to 11PM',
          href: '/tuesday'
        },
        {
          day: 'Wed',
          hour: '- 10AM to 11PM',
          href: '/wednesday'
        },
        {
          day: 'Thur',
          hour: '- 10AM to 11PM',
          href: '/thursday'
        },
        {
          day: 'Fri',
          hour: '- 10AM to 11PM',
          href: '/'
        },
        {
          day: 'Sat',
          hour: '- 10AM to 11PM',
          href: '/saturday'
        },
        {
          day: 'Sun',
          hour: '- 10AM to 11PM',
          href: '/sunday'
        },
      ],
      socialIcons: [
        {
          name: 'Facebook',
          href: '/facebook',
          iconClass: 'fa-brands fa-facebook-f',
          tag: 'fb'
        },
        {
          name: 'Twitter',
          href: '/twitter',
          iconClass: 'fa-brands fa-twitter',
          tag: 'tw'
        },
        {
          name: 'Instagram',
          href: '/instagram',
          iconClass: 'fa-brands fa-instagram',
          tag: 'insta'
        },
        {
          name: 'Linkedin',
          href: '/linkedin',
          iconClass: 'fa-brands fa-linkedin-in',
          tag: 'in'
        },
        {
          name: 'Rss',
          href: '/rss',
          iconClass: 'fa-solid fa-rss',
          tag: 'rss'
        },
        {
          name: 'Youtube',
          href: '/youtube',
          iconClass: 'fa-brands fa-youtube',
          tag: 'yt'
        },
        {
          name: 'Email',
          href: '/femail',
          iconClass: 'fa-regular fa-envelope',
          tag: 'mail'
        },
      ]
})