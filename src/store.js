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
      ],
      menuCategories: [
        {
          name: 'APPETIZERS',
          img: '/appetizers-menu-background.jpg',
        },
        {
          name: 'BURGERS',
          img: '/burgers-menu-background.jpg',
        },
        {
          name: 'PIZZAS',
          img: '/pizza-menu-background.jpg',
        },
        {
          name: 'FRIES',
          img: '/fries-menu-background.jpg',
        },
        {
          name: 'SIDES',
          img: '/sides-menu-background.jpg',
        },
        {
          name: 'DESSERTS',
          img: '/desserts-menu-background.jpg',
        },
        {
          name: 'BEVERAGES',
          img: '/beverages-menu-background.jpg',
        },
        {
          name: 'SPECIALS',
          img: '/specials-menu-background.jpg',
        },
        {
          name: 'Vegetarian',
          class: 'fa-solid fa-seedling ms_color-dgreen'
        },
        {
          name: 'Gluten Free',
          class: 'fa-solid fa-wheat-awn ms_color-yellow'
        },
        {
          name: 'Dairy Free',
          class: 'fa-solid fa-bottle-droplet ms_color-lblue'
        },
        {
          name: 'Keto Friendly',
          class: 'fa-solid fa-drumstick-bite ms_color-brown'
        },
      ]
})