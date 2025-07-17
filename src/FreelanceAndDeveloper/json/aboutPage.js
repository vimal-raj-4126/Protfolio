import about from '../assets/about.jpg';

const aboutPage = [
  {
    leftCards: [
      { icon: "fas fa-code", title: "Developer" },
      { icon: "fas fa-paint-brush", title: "Designer" },
      { icon: "fas fa-paint-brush", title: "Designer" },
    ],
    rightCards: [
      { icon: "fas fa-rocket", title: "Fast Learner" },
      { icon: "fas fa-users", title: "Team Player" },
      { icon: "fas fa-users", title: "Team Player" },
    ],
    description:
      "I am a passionate front-end developer with experience in building responsive web applications using React, CSS, and JavaScript. I love clean design and functional UI",
    resume: "/resume.pdf",
    additional:[{icon: "fas fa-code",name: "experience" , count:2}, {icon: "fas fa-paint-brush",name: "projects" , count:15}, {icon: "fas fa-rocket",name: "Hours Of Support" , count:12}, {icon: "fas fa-users",name: "Hard Workers" , count:21} ],
    heading:"UI/UX Designer & Web Developer.",
    heading_description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    heading_end:"Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore.",
    aboutImg:about
  },
];

export default aboutPage;
