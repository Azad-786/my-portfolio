import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  // typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  mysql,
  nextjs,
  // figma,
  // docker,
  // meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  // threejs,
} from "../assets";



export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "NextJS Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "nextjs",
    icon: nextjs,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Front End Developer",
    company_name: "Meon Technologies",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Feb 2024 - Sep 2024",
    points: [
      "Developed a WhatsApp Business chatbot workflow with React-flow,improving visual design and flow management by 40%.",
      "Developed the IPV face recognition feature using React.js and WebSocket,achieving 95% accuracy in detection and image capture for KYC.",
      "Built an API consumer in JavaScript for flexible data validation and conditional logic, enhancing application functionality.",
      "Developed an API pusher using JavaScript for backend JSON updates,ensuring 100% synchronization accuracy and faster update times.",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "Loratis SetMyCareer",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Oct 2023",
    points: [
      "Developed full website pages, including landing, blog, and event pages,enhancing site aesthetics and functionality by 100%.",
      "Achieved 100% SEO performance, ensuring optimal search engine.",
      "Developed a dashboard with React.js and Redux Toolkit, enabling users toadd details, select counseling types, and choose counselors by location",
      "Integrated Razorpay payment gateway for secure online transactions.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Calpion Software technology Pvt. Ltd.",
    icon: shopify,
    iconBg: "#383E56",
    date: "Oct 2022 - Jan 2023",
    points: [
      "Developed web pages with HTML, CSS, and JavaScript, improvingperformance and cross-device compatibility ",
      "Designed and deployed client landing pages on Hostinger, enhancing UIaesthetics and integration efficiency by 90%.",
      "Developed various types of e-commerce websites, enhancing user experience and expanding product offerings to meet diverse customer needs.",
      // "collaboration with backend developers to integrate payment gateways, enabling secure transactions and improving overall site functionality.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to develop an API consumer and pusher for Meon Technologies, but Azad did it! He also developed the IPV and was incredibly supportive in setting up our WhatsApp business chatbot.",
    name: "Shyam Arora",
    designation: "CEO",
    company: "Meon Technologies",
    image: "https://cdn-icons-png.flaticon.com/128/6770/6770638.png",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Azad does. He developed the entire frontend of our website and dashboard, incorporating stunning animations and a beautiful design that truly elevates our user experience.",
    name: "Dr. Nandkishore Rathi",
    designation: "CEO",
    company: "Loratis SetMyCareer",
    image: "https://cdn-icons-png.flaticon.com/128/6770/6770638.png",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Azad does. He was a great team member who not only carried the eCommerce website but also developed multiple web pages for the company",
    name: "Ramin",
    designation: "Head of Department",
    company: "Calpion Software Technologies",
    image: "https://cdn-icons-png.flaticon.com/128/10461/10461129.png",
  },
];

const projects = [
  {
    name: "Loratis SetMyCareer Website",
    description:
      "SetMyCareer is a Bangalore-based career counseling platform that provides tailored guidance for students, working professionals, and those on a career break. It offers expert advice on career choices, job transitions, and psychological counseling, empowering users to make informed decisions and achieve their career goals.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "css3",
        color: "green-text-gradient",
      },
      {
        name: "javaScript",
        color: "pink-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "jQuery",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://setmycareer.com/",
  },
  {
    name: "Loratis SetMyCareer Dashboard",
    description:
      "The SetMyCareer dashboard allows users to securely log in via mobile or Google. It offers tailored counseling packages for students and professionals, the option to select a preferred counselor, and location-based services. Users can easily book appointment slots, providing a seamless and personalized experience for their career development journey.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux-toolkit",
        color: "green-text-gradient",
      },
      {
        name: "prime-react",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://setmycareer.com/client_login.html",
  },
  {
    name: "Simfly",
    description:
      "Simfly is a travel and telecommunications platform that allows users to purchase electronic SIM cards. Users can select their destination country, choose the appropriate SIM plan, and easily add it to their cart. The platform also provides the option to delete items from the cart and offers a seamless payment gateway through Razorpay for secure transactions. This ensures travelers stay connected effortlessly during their journeys.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "redux-toolkit",
          color: "green-text-gradient",
        },
        {
          name: "css3",
          color: "pink-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
       
      ],
    image: tripguide,
    source_code_link: "https://uat.simfly.co.in/",
  },
];

export { services, technologies, experiences, testimonials, projects };
