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
  yourlogo


} from "../components/assets";
import rounded1 from "../components/assets/roadmap/rounded-1.jpg"
import rounded3 from "../components/assets/roadmap/rounded3.jpg"
import youtube from "../components/assets/socials/youtube.svg"

interface NavigationItem {
  id: string;
  title: string;
  url: string;
  onlyMobile?: boolean;
}

export const navigation: NavigationItem[] = [
  {
    id: "0",
    title: "About",
    url: "#roadmap",
  },
  {
    id: "1",
    title: "Courses",
    url: "#features",
  },
  {
    id: "2",
    title: "Papers",
    url: "#",
  },
  {
    id: "3",
    title: "Contact us",
    url: "#",
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

export const companyLogos= [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices= [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons: string[] = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

interface RoadmapItem {
  id: string;
  title: string;
  text: string;
  date: string;
  imageUrl?: any;
  colorful?: boolean;
}

export const roadmap: RoadmapItem[] = [
  {
    id: "0",
    title: "G. JAGADEESH KANNA",
    text: "Jagadeesh Kanna, CEO of Vaayusastra Aerospace, merges aeronautical expertise with artistic flair, democratizing aerospace education in India. A versatile talent in stage acting, film direction, and writing, his innovative approach blends arts and science, showcased in The Hindu Young World Magazine",
    date: "CEO/Founder",
    imageUrl: rounded1,
    colorful: true,
  },
  {
    id: "1",
    title: "S Pooja",
    text: "Pooja - Manager of vaayusastra aerospace.She is an experienced content creator & specialize in crafting engaging visuals and stories that inspire the audience. She have been completed her space training in Russia and developed a strong passion for space exploration and research.She is the student of Dr. Sivathanupillai (father of brahmos missile).As a space enthusiast, she got a chance to be in ISRO programs and successfully made satellites and launched them into space.",
    date: "Manager",
    imageUrl:rounded3,
  },
  
  {
    id: "2",
    title: "TIMOTHY A GONSALVES",
    text: "Founding Director,IIT MANDI, & PROF CSE RETD,IIT Madras",
    date: "Mentors",
  },
  {
    id: "3",
    title: "Dr. A. KAVIYARASU",
    text: "Asst. Professor, Department of Aerospace, MIT, Anna University.",
    date: "Mentors",
  },
  {
    id: "4",
    title: "Prof. KANNAN",
    text: "Prof of practice, Engg design dept.,  IIT-MADRAS, Founder, VORTEX Engineering.",
    date: "Mentors",
  },
  {
    id: "5",
    title: "Mr.RAVICHANDRAN",
    text: "Former MD, TTK Prestige Group & Mentor IIT IC.",
    date: "Mentors",
  },
  {
    id: "6",
    title: "Dr. VIDYA MURALI",
    text: "co-Founder, Kubos Consultancy & Mentor IIT IC",
    date: "Mentors",
  },
  {
    id: "7",
    title: "YOG JEPPE",
    text: "Actor, Founder Theatre",
    date: "Mentors",
  },
  {
    id: "8",
    title: "KRISHNAKUMAR BALASUBRAMANIAM",
    text: "Actor, Creative Director 'The Little Theatre'",
    date: "Mentors",
  },
  {
    id: "9",
    title: "Dr. K JAYARAMAN",
    text: " METU Ankara Research Professor",
    date: " Mentors",

  },
];

export const collabText: string =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

interface CollabContentItem {
  id: string;
  title: string;
  text?: string;
}

export const collabContent: CollabContentItem[] = [
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

interface CollabAppItem {
  id: string;
  title: string;
  icon: any;
  width: number;
  height: number;
}

export const collabApps: CollabAppItem[] = [
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
interface PricingItem {
  id: string;
  title: string;
  description: string;
  price: string | null;
  features: string[];
}

export const pricing: PricingItem[] = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

interface BenefitItem {
  id: string;
  title: string;
  text: string;
  backgroundUrl: string;
  iconUrl: string;
  imageUrl: any;
  light?: boolean;
  url:string
}

export const benefits: BenefitItem[] = [
  {
    id: "0",
    title: "Weekend Batches",
    text: "Engaging tales, theater illuminate aeronautics, teaching rocket, satellite, drone physics",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    url: "https://docs.google.com/forms/d/e/1FAIpQLSebE2XSGVP4iR9xD97bYDVoW3npARfH6TaN6cc7lNPJv0PqqA/viewform",
  },
  {
    id: "1",
    title: "10-Days Camp",
    text: "Integrating arts with academics cultivates a holistic skill set, driving both achievement and innovation.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
    url: "https://docs.google.com/forms/d/e/1FAIpQLSd8hAT8Ja9qqPpM_vPuu-gU-O8X859HlBsryVpo6SyX9PO1Zw/viewform",
  },
  {
    id: "2",
    title: "Online-Air Science through Mythology",
    text: "Unique curriculum integrates stories, theater to teach aeronautics, aerospace physics.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    url: "https://docs.google.com/forms/d/e/1FAIpQLSd8hAT8Ja9qqPpM_vPuu-gU-O8X859HlBsryVpo6SyX9PO1Zw/viewform",
  },
  {
    id: "3",
    title: "Advanced Level - College Program",
    text: "Industry-led hands-on Aeronautics/Aerospace programs tackle college knowledge transfer challenges.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
    url: "https://docs.google.com/forms/d/e/1FAIpQLSe4UNinNksujeVkuf21jgEjz-juJzOHE46G5qkJQTwW55rB4Q/viewform",
  },
  {
    id: "4",
    title: "AASSC Certification Program",
    text: "Integrates CBSE, ICSE, NASA curriculum, hands-on models for aerospace education.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    url: "https://docs.google.com/forms/d/e/1FAIpQLSe-a_kLr4c_cIgHCzBUIE1VzF75KVZW_4Y-E-7O9e_DJ81AaQ/viewform",
  },
  {
    id: "5",
    title: "Summer Camp - 2024",
    text: "Integrating creative disciplines enriches education beyond traditional theoretical learning and marks-based assessment.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    url: "https://docs.google.com/forms/d/e/1FAIpQLSd8hAT8Ja9qqPpM_vPuu-gU-O8X859HlBsryVpo6SyX9PO1Zw/viewform",

  },
];



interface SocialItem {
  id: string;
  title: string;
  iconUrl: string;
  url: string;
}

export const socials: SocialItem[] = [
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
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/vaayusastra/",
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
    url: "https://www.facebook.com/vaayusastra",
  },
  {
    id: "5",
    title: "youtube",
    iconUrl: youtube,
    url: "https://www.youtube.com/channel/UCEyY2OX6I4D9ij7lAQIcyJg",
  },
];
