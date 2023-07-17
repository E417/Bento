// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Alexander.',
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'God morgon,',
  greetingAfternoon: 'God eftermiddag,',
  greetingEvening: 'God kväll,',
  greetingNight: 'Gå och lägg dig,',

  // Weather
  weatherKey: 'InsertYourAPIKeyHere123456', 
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White' 
  weatherUnit: 'C', // 'F', 'C' 
  language: 'en', // More languages in https://openweathermap.org/current#multi 

  trackLocation: false, // If false or an error occurs, the app will use the lat/lon below 
  defaultLatitude: '37.775', 
  defaultLongitude: '-122.419', 

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://gmail.com',
    },
    {
      id: '3',
      name: 'Lines',
      icon: 'align-justify',
      link: 'https://llllllll.co/',
    },
    {
      id: '4',
      name: 'Nyaa',
      icon: 'download',
      link: 'https://nyaa.si/',
    },
    {
      id: '5',
      name: 'YouTube',
      icon: 'youtube',
      link: 'https://youtube.com/',
    },
    {
      id: '6',
      name: '/r/unixporn',
      icon: 'camera',
      link: 'https://reddit.com/r/unixporn',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'coffee',
  secondListIcon: 'dollar-sign',

  // Links
  lists: {
    firstList: [
      {
        name: 'cdm',
        link: 'https://cdm.link/',
      },
      {
        name: 'synthtopia',
        link: 'https://synthtopia.com/',
      },
      {
        name: 'Castle',
        link: 'https://castledkp.com//',
      },
      {
        name: 'p99 wiki',
        link: 'https://wiki.project1999.com/',
      },
    ],
    secondList: [
      {
        name: '99:an',
        link: 'https://www.99musik.se/',
      },
      {
        name: 'vend',
        link: 'https://vend.se/',
      },
      {
        name: 'efn',
        link: 'https://escapefromnoise.com/',
      },
      {
        name: 'One Piece',
        link: 'https://ww5.read-onepiece.net/manga/category/manga/',
      },
    ],
  },
};
