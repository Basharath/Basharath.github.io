import eventLogger from './assets/event-logger.png';
import techBreeze from './assets/tech-breeze.png';
import calendar from './assets/calendar.png';
import typingGame from './assets/typing-game.png';
// import analogClock from './assets/analog-clock.png';
import fireworks from './assets/fireworks.png';
import portfolio from './assets/portfolio1.png';
import blog from './assets/tech-blog.png';
import countries from './assets/countries.png';
import countdown from './assets/newyear-countdown.png';
import todo from './assets/todo_data.png';
import emart from './assets/emart.png';
import moviedb from './assets/moviedb.png';
import ip from './assets/ip-location.png';
import copyText from './assets/copy-text-easily.png';
import colorChanger from './assets/color-changer.png';

const projects = [
  {
    image: emart,
    title: 'eMart',
    description:
      'A full-stack MERN ecommerce site where users and vendors can signup to buy and sell their products.',
    demoUrl: 'https://emart2shop.netlify.app/',
    git: 'https://github.com/Basharath/eMart',
  },
  {
    image: copyText,
    title: 'Copy Text Easily',
    description:
      'A simple chrome extension that helps to copy text, paragraphs, sentences and custom selections in browser.',
    demoUrl:
      'https://chrome.google.com/webstore/detail/copy-text-easily/fagmaopcbeobbfhkeodicjekiniefdlo',
    git: 'https://chrome.google.com/webstore/detail/copy-text-easily/fagmaopcbeobbfhkeodicjekiniefdlo',
  },
  {
    image: moviedb,
    title: 'MovieDB',
    description:
      'A NextJS site that helps to find the details of any movie. Homepage is static and the search page is dynamically rendered.',
    demoUrl: 'https://moviedb-world.vercel.app/',
    git: 'https://github.com/Basharath/moviedb',
  },
  {
    image: blog,
    title: 'Tech blog',
    description:
      'A simple tech blog site with two sections, posts and sidebar. Post can be listed based on author & category.',
    demoUrl: 'https://tech-blog-react.netlify.app/',
    git: 'https://github.com/Basharath/tech-blog',
  },
  {
    image: ip,
    title: 'IP location finder',
    description:
      'A simple Next JS site that shows the IP address and geo location of the client or the IP address searched.',
    demoUrl: 'https://ip-geolocate.vercel.app/',
    git: 'https://github.com/Basharath/ip-location',
  },
  {
    image: todo,
    title: 'Todo App',
    description:
      "It's a todo app made using react with authentication, firebase db, and with PWA support. Todos can be CRUD-ed.",
    demoUrl: 'https://quicktodoapp.netlify.app/',
    git: 'https://github.com/Basharath/todo',
  },
  {
    image: countries,
    title: 'Countries',
    description:
      'A glassmorhpic design of a single page site showcasing the details of various countries, having a sidebar & main section.',
    demoUrl: 'https://countries-details.netlify.app/',
    git: 'https://github.com/Basharath/countries',
  },
  {
    image: portfolio,
    title: 'Portfolio site',
    description:
      'A portfolio site showcasing the various details and projects of the developer John Doe.',
    demoUrl: 'https://portfolio-jd-one.netlify.app/',
    git: 'https://github.com/Basharath/portfolio-design1',
  },
  {
    image: eventLogger,
    title: 'Event Logger',
    description:
      'A quick event logger webapp made using react. Events dates can be adjusted, deleted and counted.',
    demoUrl: 'https://event-logger.netlify.app/',
    git: 'https://github.com/Basharath/event-logger',
  },
  {
    image: techBreeze,
    title: 'Tech Breeze',
    description:
      'A simple tech solutions company site made using react which shows various details & services of the company.',
    demoUrl: 'https://tech-breeze.netlify.app/',
    git: 'https://github.com/Basharath/tech-breeze',
  },
  {
    image: calendar,
    title: 'Calendar',
    description:
      'A simple calendar app made using react that shows calendar of any year and can be switched to month view as well.',
    demoUrl: 'https://simple-calendar-app.netlify.app/',
    git: 'https://github.com/Basharath/Calendar',
  },
  {
    image: typingGame,
    title: 'Typing Game',
    description:
      'A typing game with three levels that gives user a score based on the correct number of words typed.',
    demoUrl: 'https://easy-typing-game.netlify.app/',
    git: 'https://github.com/Basharath/typing-game',
  },
  {
    image: colorChanger,
    title: 'Color changer & picker',
    description:
      'A simple color changing screen on mouse movement. Just with one click the color gets copied to the clipboard.',
    demoUrl: 'https://color-changer-picker.netlify.app/',
    git: 'https://github.com/Basharath/color-changer',
  },
  {
    image: countdown,
    title: 'New year countdown',
    description:
      'A simple countdown page app counts the number of days left for the upcoming new year upto seconds.',
    demoUrl: 'https://new-year-count.netlify.app/',
    git: 'https://github.com/Basharath/new-year-countdown',
  },
  // {
  //   image: analogClock,
  //   title: 'Analog Clock',
  //   description:
  //     'An analog clock made using React which shows the current time with three clock hands.',
  //   demoUrl: 'https://simple-analog-clock.netlify.app/',
  //   git: 'https://github.com/Basharath/analog-clock',
  // },
  {
    image: fireworks,
    title: 'Canvas Fireworks',
    description:
      'A simple fireworks art made using HTML5 canvas which gives the fireworks effect on clicking the canvas.',
    demoUrl: 'https://fireworks-canvas.netlify.app/',
    git: 'https://github.com/Basharath/fireworks',
  },
];

export default projects;
