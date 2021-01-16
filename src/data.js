import eventLogger from './assets/event-logger.png';
import techBreeze from './assets/tech-breeze.png';
import calendar from './assets/calendar.png';
import typingGame from './assets/typing-game.png';
import analogClock from './assets/analog-clock.png';
import fireworks from './assets/fireworks.png';
import portfolio from './assets/portfolio1.png';
import blog from './assets/tech-blog.png';
import countries from './assets/countries.png';
import countdown from './assets/newyear-countdown.png';

const projects = [
  {
    image: blog,
    title: 'Tech blog',
    description:
      'A simple tech blog site with two sections, posts and sidebar. Post can be listed based on author & category.',
    demoUrl: 'https://tech-blog-react.netlify.app/',
    git: 'https://github.com/Basharath/tech-blog',
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
    image: countdown,
    title: 'New year countdown',
    description:
      'A simple countdown page app counts the number of days left for the upcoming new year upto seconds.',
    demoUrl: 'https://new-year-count.netlify.app/',
    git: 'https://github.com/Basharath/new-year-countdown',
  },

  {
    image: analogClock,
    title: 'Analog Clock',
    description:
      'An analog clock made using React which shows the current time with three clock hands.',
    demoUrl: 'https://simple-analog-clock.netlify.app/',
    git: 'https://github.com/Basharath/analog-clock',
  },
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
