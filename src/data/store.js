import { reactive } from 'vue';

let store = reactive({
  // sezione dei data generali che serviranno più o meno a tutti possibilmente da non toccare
  posts: {
    rice: {
      title: 'Hygenic Recipe To Prepare Rice',
      date: 'December 26, 2022',
      badge: ['Food'],
      img: 'food-3.webp',
    },
    meal: {
      title: 'The Best Time To Have A Meal',
      date: 'December 26, 2022',
      badge: ['Food'],
      img: 'food-2.webp',
    },
    healthy: {
      title: 'The Best Healty Foods',
      date: 'December 26, 2022',
      badge: ['Food'],
      img: 'food.webp',
    },
    winter: {
      title: 'The Best Winter Outfits',
      date: 'December 26, 2022',
      badge: ['Fashion'],
      img: 'winter.webp',
    },
    photographer: {
      title: "Beginner Photographer's Mistakes",
      date: 'December 26, 2022',
      badge: ['Fashion'],
      img: 'photographer.webp',
    },
    ideas: {
      title: 'Live Ideas You Might Be Anime',
      date: 'December 26, 2022',
      badge: ['Culture', 'Stories'],
      img: 'stories.webp',
    },
    visit: {
      title: 'Reasons To Visit France',
      date: 'December 26, 2022',
      badge: ['Lifestyle', 'Travel'],
      img: 'visit.webp',
    },
    travel: {
      title: 'Traveling Alone Is Awesome',
      date: 'December 26, 2022',
      badge: ['Stories', 'Travel'],
      img: 'travel.webp',
    },
    success: {
      title: 'The Best Success Stories',
      date: 'December 26, 2022',
      badge: ['Culture', 'Stories'],
      img: 'success.webp',
    },
    trip: {
      title: 'Places For A Road Trip',
      date: 'December 26, 2022',
      badge: ['Lifestyle', 'Stories', 'Travel'],
      img: 'landscape.webp',
    },
    music: {
      title: 'Music The Love Of My Life',
      date: 'December 26, 2022',
      badge: ['Culture', 'Lifestyle'],
      img: 'music.webp',
    },
    fashion: {
      title: 'Fashion Trend Now A Days',
      date: 'December 26, 2022',
      badge: ['Fashion', 'Lifestyle'],
      img: 'fashion.webp',
    },
  },
  logos: {
    logoImg: 'anime-logo.webp',
    logoImgWhite: 'anime-logo-white.webp',
    icon: 'logo-icon.webp',
    channel: 'channel.webp',
  },
  banners: {
    headerBanner: 'header-banner.webp',
    pageBanner: 'page-banner.webp',
  },
  imgTrailer: {
    trailerImg1: 'trailer-img-1.webp',
    trailerImg2: 'trailer-img-2.webp',
  },
  error: {
    errorImg: '404.webp',
  },
  // ---------------> sezione dedicata ad header e footer di Francesco <--------------
  navLinks: [
    { href: '#', icon: 'fas fa-home', text: 'HOME', active: true },
    { href: '#', icon: 'fas fa-user', text: 'ABOUT US', active: false },
  ],
  dropdowns: [
    {
      text: 'LIFESTYLE',
      icon: 'fa-solid fa-suitcase',
    },
    {
      text: 'STORIES',
      icon: 'fa-solid fa-book-open-reader',
    },
    {
      text: 'PAGES',
      icon: 'fa-solid fa-book',
      items: [
        { href: '#', icon: 'fas fa-search', text: 'SEARCH RESULTS' },
        {
          href: '#',
          icon: 'fa-solid fa-box-archive',
          text: 'CATEGORY ARCHIVE',
        },
        { href: '#', icon: 'fas fa-user', text: 'AUTHOR ARCHIVE' },
        { href: '#', icon: 'fa-solid fa-calendar-days', text: 'DATE ARCHIVE' },
        { href: '#', icon: 'fa-solid fa-bug', text: 'ERROR 404' },
      ],
    },
  ],
  bottomLinks: [
    { href: '#', icon: 'fa-solid fa-envelope', text: 'CONTACT US' },
  ],

  header: {
    rice: {
      title: 'Hygenic Recipe To Prepare Rice',
      time: '05:35',
      img: 'food-3-150x150.webp',
    },
    meal: {
      title: 'The Best Time To Have A Meal',
      time: '05:32',
      img: 'food-2.webp',
    },
    healthy: {
      title: 'The Best Healty Foods',
      time: '05:37',
      img: 'food-150x150.webp',
    },
    winter: {
      title: 'The Best Winter Outfits',
      time: '05:29',
      img: 'winter-150x150.webp',
    },
  },
  footerData: [
    {
      title: 'GET STARTED',
      links: ['Resources', 'Tutorials', 'Examples', 'Docs'],
    },
    {
      title: 'ABOUT',
      links: ['Stories', 'Community', 'Blog', 'Brand Assets'],
    },
    {
      title: 'FEATURES',
      links: ['Overview', 'Design', 'Code', 'Collaborate'],
    },
    {
      title: 'QUICK LINKS',
      links: ['Stories', 'Community', 'Blog', 'Brand Assets'],
    },
    {
      title: 'SUBSCRIBE TO NEWSLETTER',
      links: [],
    },
  ],
  // ---------------> sezione dedicata ai caroselli di Arnaldo <--------------
  carousel: {
    // da riempire all'occorrenza
  },
  // ---------------> sezione dedicata al main di Giacomo <--------------
  main: {
    mainPost: '',
    temporaryPost: [
      {
        title: 'Live Ideas You Might Be Anime',
        date: 'December 26, 2022',
        badge: ['Culture', 'Stories'],
        img: 'stories.webp',
      },
      {
        title: 'Reasons To Visit France',
        date: 'December 26, 2022',
        badge: ['Lifestyle', 'Travel'],
        img: 'visit.webp',
      },
      {
        title: 'Traveling Alone Is Awesome',
        date: 'December 26, 2022',
        badge: ['Stories', 'Travel'],
        img: 'travel.webp',
      },
      {
        title: 'The Best Success Stories',
        date: 'December 26, 2022',
        badge: ['Culture', 'Stories'],
        img: 'success.webp',
      },
      {
        title: 'Places For A Road Trip',
        date: 'December 26, 2022',
        badge: ['Lifestyle', 'Stories', 'Travel'],
        img: 'landscape.webp',
      },
      {
        title: 'Music The Love Of My Life',
        date: 'December 26, 2022',
        badge: ['Culture', 'Lifestyle'],
        img: 'music.webp',
      },
      {
        title: 'Fashion Trend Now A Days',
        date: 'December 26, 2022',
        badge: ['Fashion', 'Lifestyle'],
        img: 'fashion.webp',
      },
    ],
  },
  // ---------------> sezione dedicata ai video trailer di Samian <--------------
  trailers: [
    {
      id: 1,
      title: 'Eternal Cultivation Anime',
      embedUrl: 'https://www.youtube.com/embed/9rYkZlt2hHE',
      videoId: '9rYkZlt2hHE',
    },
    {
      id: 2,
      title: "Sun's Out, Guns Out",
      embedUrl: 'https://www.youtube.com/embed/zlwQERpksnw',
      videoId: 'zlwQERpksnw',
    },
    {
      id: 3,
      title: 'Top 10 Vinland Saga Moments',
      embedUrl: 'https://www.youtube.com/embed/itQnUDMMhaU',
      videoId: 'itQnUDMMhaU',
    },
    {
      id: 4,
      title: 'Everytime Sukuna Appears',
      embedUrl: 'https://www.youtube.com/embed/IrU2dklT11s',
      videoId: 'IrU2dklT11s',
    },
    {
      id: 5,
      title: 'Wizard King (Julius) vs Licht (Patri) Full Fight',
      embedUrl: 'https://www.youtube.com/embed/H5qupR6YQpQ',
      videoId: 'H5qupR6YQpQ',
    },
    {
      id: 6,
      title: 'Vinland Saga | SHATTERED',
      embedUrl: 'https://www.youtube.com/embed/ICt1jYfucec',
      videoId: 'ICt1jYfucec',
    },
    {
      id: 7,
      title: 'Konan Arranges',
      embedUrl: 'https://www.youtube.com/embed/CkC5CtabT1Y',
      videoId: 'CkC5CtabT1Y',
    },
  ],
});

export default store;
