// import eventLogger from './assets/event-logger.png';
import techBreeze from './assets/tech-breeze.png';
// import calendar from './assets/calendar.png';
import typingGame from './assets/typing-game.png';
// import analogClock from './assets/analog-clock.png';
import fireworks from './assets/fireworks.png';
import portfolio from './assets/portfolio1.png';
import blog from './assets/tech-blog.png';
import countries from './assets/countries.png';
// import countdown from './assets/newyear-countdown.png';
import todo from './assets/todo_data.png';
import emart from './assets/emart.png';
import moviedb from './assets/moviedb.png';
import ip from './assets/ip-location.png';
import copyText from './assets/copy-text-easily.png';
import colorChanger from './assets/color-changer.png';
import tweetlet from './assets/tweetlet.png';
import textImage from './assets/text-image.png';
import threadReader from './assets/thread-reader.png';
import formeasy from './assets/formeasy.png';
import formify from './assets/formify.png';
import bookmarker from './assets/bookmarker.png';
import codelet from './assets/codelet.png';
import linktransformer from './assets/link-transformer.png';
import twittercounter from './assets/twitter-counter.png';
import viaNotion from './assets/viaNotion.png';
import quickyAi from './assets/quickyai.png';

const projects = [
  {
    image: quickyAi,
    title: 'Quicky AI',
    description:
      'Quicky AI is a Chrome extension that helps to use AI quickly and productively on any website just by selecting text',
    demoUrl: 'https://quickyai.com',
    info: 'https://quickyai.com',
  },
  {
    image: viaNotion,
    title: 'viaNotion',
    description:
      'viaNotion helps you manage and schedule content from Notion to Twitter and LinkedIn seamlessly',
    demoUrl: 'https://vianotion.com',
    info: 'https://twitter.com/viaNotion',
  },
  {
    image: codelet,
    title: 'CodeLet',
    description:
      'CodeLet is a free tool that lets you create beautiful and attention grabbing code snippet images in a snap.',
    demoUrl: 'https://tweetlet.net/code',
    info: 'https://www.producthunt.com/posts/codelet',
  },
  {
    image: formify,
    title: 'Formify',
    description:
      'Formify is an open source tool that lets you create, manage and embed contact forms on any site with nocode.',
    demoUrl: 'https://formify.vercel.app/',
    git: 'https://github.com/Basharath/Formify',
  },
  {
    image: tweetlet,
    title: 'Tweetlet',
    description:
      'Tweetlet is an amazing tool to create beautiful images from tweets, text and any other images in a snap.',
    demoUrl: 'https://tweetlet.net/',
    info: 'https://devapt.com/create-images-tweetlet',
  },
  {
    image: bookmarker,
    title: 'Bookmarker',
    description:
      'Bookmarker is a free tool that lets you bookmark web pages and use them productively without leaving the tab.',
    demoUrl:
      'https://chrome.google.com/webstore/detail/bookmarker/nkjpfijmpllhakjbbmeoedlcmaakhokg',
    info: 'https://devapt.com/bookmarker',
  },
  {
    image: formeasy,
    title: 'FormEasy',
    description:
      'FormEasy is a free and open source apps script library that lets you receive forms from your static sites very easily.',
    demoUrl: 'https://devapt.com/formeasy',
    git: 'https://github.com/Basharath/FormEasy',
  },
  {
    image: linktransformer,
    title: 'Link transformer',
    description:
      'Link transformer is a free tool that lets you transform your clickable links on social media to plain text.',
    demoUrl: 'https://tools.devapt.com/link-transformer',
    info: 'https://www.producthunt.com/posts/link-transformer',
  },
  {
    image: twittercounter,
    title: 'Twitter character counter',
    description:
      'Twitter counter is a free tool that lets you count the characters of a tweet, bio and profile name just same as Twitter.',
    demoUrl: 'https://tools.devapt.com/twitter-counter',
    // info: 'https://www.producthunt.com/posts/link-transformer',
  },
  {
    image: textImage,
    title: 'Text to image',
    description:
      'Text to image is a chrome extension that lets you create images instantly just from the text selection.',
    demoUrl:
      'https://chrome.google.com/webstore/detail/text-to-image/nkljaohokglebeljcgchmehnhdieakda',
    info: 'https://www.producthunt.com/products/text-to-image',
  },
  {
    image: copyText,
    title: 'Copy Text Easily',
    description:
      'A simple chrome extension that helps to copy text, paragraphs, sentences and custom selections in browser.',
    demoUrl:
      'https://chrome.google.com/webstore/detail/copy-text-easily/fagmaopcbeobbfhkeodicjekiniefdlo',
    info: 'https://devapt.com/copy-text-easily',
  },
  {
    image: threadReader,
    title: 'Thread reader',
    description:
      'Thread reader is a chrome extension that helps you read Twitter threads like an article without any distraction.',
    demoUrl:
      'https://chrome.google.com/webstore/detail/thread-reader/hjepbdajiiflfinpefagdanephmgajnh',
    info: 'https://www.producthunt.com/products/thread-reader-2#thread-reader-3',
  },
  {
    image: emart,
    title: 'eMart',
    description:
      'A full-stack MERN ecommerce site where users and vendors can signup to buy and sell their products.',
    demoUrl: 'https://emart2shop.netlify.app/',
    git: 'https://github.com/Basharath/eMart',
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
  // {
  //   image: eventLogger,
  //   title: 'Event Logger',
  //   description:
  //     'A quick event logger webapp made using react. Events dates can be adjusted, deleted and counted.',
  //   demoUrl: 'https://event-logger.netlify.app/',
  //   git: 'https://github.com/Basharath/event-logger',
  // },
  {
    image: techBreeze,
    title: 'Tech Breeze',
    description:
      'A simple tech solutions company site made using react which shows various details & services of the company.',
    demoUrl: 'https://tech-breeze.netlify.app/',
    git: 'https://github.com/Basharath/tech-breeze',
  },
  // {
  //   image: calendar,
  //   title: 'Calendar',
  //   description:
  //     'A simple calendar app made using react that shows calendar of any year and can be switched to month view as well.',
  //   demoUrl: 'https://simple-calendar-app.netlify.app/',
  //   git: 'https://github.com/Basharath/Calendar',
  // },
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
  // {
  //   image: countdown,
  //   title: 'New year countdown',
  //   description:
  //     'A simple countdown page app counts the number of days left for the upcoming new year upto seconds.',
  //   demoUrl: 'https://new-year-count.netlify.app/',
  //   git: 'https://github.com/Basharath/new-year-countdown',
  // },
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
