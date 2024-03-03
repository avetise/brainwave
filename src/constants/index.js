import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "About",
    url: "#how-to-use",
  },
  {
    id: "2",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Data-Driven Insights",
  "Process Automation",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "2",
    title: "Chatbot Customization",
    text: "Enable users to personalize the chatbot's appearance and behavior for a more engaging interaction.",
    date: "3 clients",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "4",
    title: "Advanced Analytics Integration",
    text: "Incorporate AI-driven analytics to track user interactions, providing insights into user behavior and preferences.",
    date: "5 clients",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "5",
    title: "Predictive Analytics for Business Insights",
    text: "Implement predictive analytics to forecast trends, user behavior, and business outcomes, enabling proactive decision-making.",
    date: "2 clients",
    status: "progress",
    imageUrl: roadmap3,
  },
  {
    id: "7",
    title: "Automated Content Creation",
    text: "Deploy AI to generate relevant and engaging content automatically, improving efficiency and scalability.",
    date: "Planned for 8 clients",
    status: "progress",
    imageUrl: roadmap4,
  }
];



export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Discovery",
    description: "AI Strategy and Opportunity Assessment",
    price: "350",
    features: [
      "Initial assessment to identify AI opportunities",
      "Basic strategy development for AI integration",
      "Recommendations for automated workflow enhancements",
    ],
  },
  {
    id: "1",
    title: "Growth",
    description: "Comprehensive AI Solution Implementation",
    price: "6999",
    features: [
      "Custom AI solution design and implementation",
      "Data analytics and insight generation for decision making",
      "Ongoing support and system integration",
      "Priority access to new features and updates",
    ],
  },
  {
    id: "2",
    title: "Transformation",
    description: "End-to-End AI Transformation Partnership",
    price: "Custom",
    features: [
      "Strategic planning for full-scale AI business transformation",
      "Advanced AI analytics, reporting, and insights",
      "Dedicated account and project management",
      "Custom AI development for complex business needs",
      "Long-term partnership for continuous innovation and growth",
    ],
  },
];



export const benefits = [
  {
    id: "0",
    title: "Streamlined Operations",
    text: "Automate routine tasks and processes to increase efficiency and allow your team to focus on strategic initiatives.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Data-Driven Decisions",
    text: "Leverage advanced analytics and AI-driven insights to make informed decisions that drive business growth.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Enhanced Customer Experience",
    text: "Use AI to personalize customer interactions, improve response times, and enhance overall satisfaction.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Scalability",
    text: "Easily scale your operations with AI solutions that grow with your business, adapting to your changing needs.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Innovation",
    text: "Stay ahead of the competition with cutting-edge AI technology that drives innovation and opens new business opportunities.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Cost Reduction",
    text: "Reduce operational costs by automating manual processes and optimizing resource allocation with AI efficiency.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];


export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
 /* {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
   {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  }, */
];
