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
import rounded2 from "../components/assets/roadmap/rounded2.jpg"
import rounded3 from "../components/assets/roadmap/rounded 3.jpg"
import rounded4 from "../components/assets/roadmap/rounded 4.jpg"
import rounded5 from "../components/assets/roadmap/rounded 5.jpg"
import rounded6 from "../components/assets/roadmap/rounded 6.jpg"
import rounded7 from "../components/assets/roadmap/rounded 7.jpg"
import rounded8 from "../components/assets/roadmap/rounded 8.jpg"
import rounded9 from "../components/assets/roadmap/rounded9.jpg"
import rounded10 from "../components/assets/roadmap/rounded10.jpg"

import grid from "../components/assets/grid.png"

import youtube from "../components/assets/socials/youtube.svg"
import { text } from "node:stream/consumers";

interface NavigationItem {
  id: string;
  title: string;
  url: any;
  onlyMobile?: boolean; 
  link:any;
}

export const navigation: NavigationItem[] = [
  {
    id: "0",
    title: "About",
    url: "#roadmap",
    link:null
  },
  {
    id: "1",
    title: "Courses",
    url: "#features",
    link:null
  },
  {
    id: "2",
    title: "Papers",
    url: "#",
    link:null
  },
  {
    id: "3",
    title: "Recognitions",
    url: "#",
    link:"/recognitions"
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
    link:null,
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
    text: "CEO of Vaayusastra Aerospace, merges aeronautical expertise with artistic flair, democratizing aerospace education in India. A versatile talent in stage acting, film direction, writing, theatre trainer, lyricist whose work has primarily been in Chennai based productions, independent films. His innovative approach blends arts and science, showcased in The Hindu Young World Magazine. ",
    date: "CEO/Founder",
    imageUrl: rounded1,
    colorful: true,
  },
  {
    id: "1",
    title: "Dr.Mohana Lakshmi",
    text: "Founder at American World School,associate executive director/board of directors at american international accrediation association of school and college ",
    date: "Mentors",
    imageUrl: rounded10,
    colorful: false,
  },
  {
    id: "2",
    title: "TIMOTHY A GONSALVES",
    text: "Founding Director,IIT MANDI, & PROF CSE RETD,IIT Madras",
    date: "Mentors",
    imageUrl: rounded5,
    colorful: false,
  },
  {
    id: "3",
    title: "Dr. A. KAVIYARASU",
    text: "Asst. Professor, Department of Aerospace, MIT, Anna University.",
    date: "Mentors",
    colorful: false,
  },
  {
    id: "4",
    title: "Prof. KANNAN",
    text: "Prof of practice, Engg design dept.,  IIT-MADRAS, Founder, VORTEX Engineering.",
    date: "Mentors",
    colorful: false,
  },
  {
    id: "5",
    title: "Mr.RAVICHANDRAN",
    text: "Former MD, TTK Prestige Group & Mentor IIT IC.",
    date: "Mentors",
    colorful: false,
  },
  {
    id: "6",
    title: "Dr. VIDYA MURALI",
    text: "co-Founder, Kubos Consultancy & Mentor IIT IC",
    date: "Mentors",
    imageUrl: rounded9,
    colorful: false,
  },
  {
    id: "7",
    title: "YOG JEPPE",
    text: "Actor, Founder Theatre",
    date: "Mentors",
    imageUrl: rounded4,
    colorful: false,
  },
  {
    id: "8",
    title: "KRISHNAKUMAR BALASUBRAMANIAM",
    text: "Actor, Creative Director 'The Little Theatre'",
    date: "Mentors",
    imageUrl: rounded3,
    colorful: false,
  },
  {
    id: "9",
    title: "Dr. K JAYARAMAN",
    text: " METU Ankara Research Professor",
    date: " Mentors",
    imageUrl: rounded2,
    colorful: false,

  },
];
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
export const cards = [
  { id: 1, image: grid, text: "ISRO" },
  { id: 2, image: grid, text: "CIAA & AIAASC" },
  { id: 3, image: grid, text: "LEAP-IIT IC" },
  { id: 4, image: grid, text: "NAAN MUDHALVAN-TNSDC" },
  { id: 5, image: grid, text: "KNOWLEDGE PARTNER-NITTTR" },
  { id: 6, image: grid, text: "KNOWLEDGE PARTNER-ICT ACADEMY" },
  { id: 7, image: grid, text: "DPIIT RECOGNISED STARTUP" },
  { id: 8, image: grid, text: "FIRST FRANCHISE IN BANGALORE" },
  { id: 9, image: grid, text: "HUMAN CENTRIC EMERGING" },
  { id: 10, image: grid, text: "IIT MADRAS IC & IIT MADRAS RTBI" },
  { id: 11, image: grid, text: "FORTNIGHT SERIES IN HINDU YOUNG WORLD" },
  { id: 12, image: grid, text: "VAAYUSASTRA-CENTER FOR EXCELLENCE" },
];
export const testmon = [
  { id: 1, image: grid, text: "Kids have a beautiful mind. What they see and hear can inspire them I a very different way. Every child can imagine things with uniqueness. It is very easy to inspire and motivate them to find their dreams through Vaayusastra's teaching model. Let it be practical model, ancient history, fun activities and VAAYUSASTRA CAN DO IT.", name:"Abhi Dharshan",designation:"Pilot/Aeronautical engineer Founding member",company:"Vaayusastra Aerospace"},
  { id: 2, image: grid, text: "When I was little I so wished subjects were as interesting as watching a movie, the fact that Vaayusastra uses arts to teach science is almost like a wish come true to people like me. This method will bring both the scientist and artist in a kid. I am so happy that kids this generation are given an opportunity to experience science ",name:"Gayathri MS",designation:"  Founding Member",company:"Aerospace (PDM UniversityMilan, Italy)" },
  { id: 3, image: grid, text: "Aviation has a special place for itself in the emerging courses. Our Vaayusastra gives such a study in a very beautiful form in the form of drama. This quality educational system is in the form of a play by the best trainers to make it easy for children to understand. They have been doing this endeavor for the last 2 years with excellent teaching skills", name:"Nivash",designation:"Customer Agent",company:"AIAPSL Chennai International Airport"},
  {id: 4, image: grid, text: "AeroSpace, that subject itself is an extreme and infinity. When we try to learn it we keep on learning them. Through theatre we can show and express the most emotions and great messages to public and also learn. You mixed up these two with a perfect balance and have been running it very successfully for last few years. I am following you day by day, how the students are learning and their feedback was totally great. Everything is updating day by day like wise vayusastra have updated their teaching skills and promoting the future sciences where we will find very minimum in our country. Making the students to learn aerospace and aeronautical from earlier stage is a marvelous work. Hope vayusastra will reach all parts of India",name:"David Moses Kodamanchili",designation:"Aviation security incharge",company:"Trujet Airlines"},
  {id : 5,image: grid, text:"I hated science as a kid. Yes, I said it. But read this till the end. This is because in my time there was no culture of effort being taken to make the actual experience of studying exciting. I remember the moment I knew Vaayusastra deserved every bit of praise and every student they were getting. Standing on top of a chair with 40 kids around me, a black shawl for wings and kajal on. If you ask those kids they won't know my name. But you can bet they'll remember ashta the crow that explored the atmosphere with his friend bushta to get vadas from the moon. The day I performed that bit with my colleague for the first time, we were leaving the school at the end of the day when we saw some kids pretending to be ashta and bushta themselves. They loved what they learnt so much that they wanted to be the people who taught it to them.",name:"Gayathri Pradeep ",designation:"Performer, Vocal Coach, Actor M.A. Musical Theater '21",company:" Royal Conservatory of Scotland"},
  {id: 6,image: grid,text: "At Vaayusastra, I believe that every child is unique learner who deserves a flexible, customized, and personalised educational environment. This Organization works with children to ensure that they meet their induvidual needs and feed their interests through our teaching and assessment strategies. It may be unusual to combine the two words science and theatre in the same phrase.",name:"Syed Khadri",designation:"Pilot/Safety Manager"},
  {id: 7,image: grid, text: "In a world addicted to technology, theatre provides an outlet for making creative choices, thinking new ideas, and interpreting the material in expressive ways that are the essence of drama and science. Though this was a new technique for me back then, I understood the impact of this method through the years",name:"Anbuselvan G",designation:"Senior Trainer"},
  {id: 8,image: grid, text: "Science is systematic and logical approach to discovering how things in the universe work. True to this definition, science aims for measurable results through testing and analysis. Science is based on fact, not opinion or differences. The process of science is designed to challenge ideas through research. At Vaayusastra we go through immense research before creating course modules for kids.",name:"Divya Raj",designation:"Technical associate with Accounting and Administration, Trainer",company:"Vaayusastra Aerospace"},
  {id: 9,image: grid, text: "Every time I climb the stage, I bypass my mind to cheat my audience and make them believe the unbelievable. But here at Vaayusastra, its double the work, 'to make the children believe the unbelievable', you got to go terrific and perform bypass surgeries! Even if they forget the science, the stories will help them recollect the science. Thats the trick of the trade",name:"Vignesh",designation:"Theatre Artist/Trainer",company:"Vaayusastra Aerospace"},
  {id: 10,image: grid,text: "Using drama in educational step is the most important way of expressing the persons feeling in an healthy manner. It helps to enable the child to think and act independent, to improve social awareness and cooperative awareness",name:"R. Madan Sharma",designation:"Senior Trainer",company:"Vaayusastra Aerospace"},
  {id: 11,image: grid, text: "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.I let my students to their imagination, that way they learn easier.",name:"Vijay",desigination:"Senior Trainer",company:"Vaayusastra Aerospace"},
  {id: 12,image: grid, text: "More important than the curriculum is the question of the methods of teaching and the spirit in which the teaching is given,says Bertrand Russell. The concept of fusing Aerospace and theatre arts is a great and successful initiative. A single spark of interest made many remarkable changes in this world, now Vaayusastra gives that spark",name:"Bharani",designation:"Research Intern (B.tech Aero)"},
  {id: 13,image: grid, text: "A child's brain is like a computer's CPU. What I do is create a folder by telling them a story about how Ravana kidnapped Sita using his aircraft, the Pushpak Viman. The child may forget the technical terms but the story registers in their mind, and that is all that is needed to create the spark",name:"Jagadeesh Kanna",designation:"Founder & CEO",company:"Vaayusastra Aerospace"},
  {id: 14,image: grid, text: "I always tell this to my students,inside every person there are two extremes. One is all things good (exploration, imagination, visualization, be a path finder). The other is all things evil (fear to explore a new thing, negativity, follow others path, comparison, fear of failure, safe zone).If a student asks me which one will win, my answer will be-The one you feed",name:"Karthik Sundharesan",designation:"Senior Trainer",company:"Vaayusastra Aerospace"},
  {id: 15,image: grid, text: "There is a famous American proverb,Tell me, and I'll forget. Show me, and I may not remember. Involve me, and I'll understand.This is exactly what I have followed throughout my journey as a theatre artist at Vaayusastra. We make sure the student leaves the class understanding the concepts. Involving them makes it easier to grasp scientific concepts",name:"Sathish",designation:"Theatre artist/trainer"},
  {id: 16,image: grid, text: "I have worked with Vaayusastra as a theatre artist and its been an experience which I learnt a lot from. Children teach you how to look at things in various diefferent ways. Vaayusasm new things",name:"Harshitha Kaartic",designation:"Theatre artist/Entreprneur, Trainer",company:"Vaayusastra Aerospace"},
  {id: 17,image: grid, text: "Instead of teaching students the technical terms of a motion detector, if you explain it to them through a story, it will register in their minds. it makes learning easier. that is the teaching method i prefer.",name:"Balajiram.S",designation:"Trainer",company:"Vaayusastra Aerospace"},
  {id :18,image: grid, text: "By using drama as a learning tool, young people can add purpose and value to their creativity. It lets them find their own unique ways to discover the answers for themselves. It was fun mixing theatre and science.",name:"Shivakumar KM ",designation:"Theatre artist"},
  {id :19,image: grid, text: "When everything seems to be going against you, remember that an airplane takes off against the wind, not with it and sky is the limit. To those who love Aviation and Aerospace, Sky is the home! That i learned from Vaayusastra.",name:"Aravind Muruganandam",designation:"Aeronautical Engineer/Research intern",company:"Vaayusastra Aerospace"},
  {id :20,image: grid, text: "Legends, myths, poems, stories, and plays used in our stories teach students about social issues and conflicts from cultures past, present, all over the world as well as help them grasp concepts easily. Apart from that, the hands on models we work on is the most interesting part. We never stop researching and developing new ideas",name:"Gopal Research",designation:"Intern",company:"Vaayusastra Aerospace"},
  {id :21,image: grid, text: "Theatre in Education encourages young people to develop enquiry skills. It questions what influences are around them, which in turn impacts on behaviours and attitude as well as inspires them to make informed, healthy life choices. The ability to portray topics in a very visual way and to provide a context for the information given is identified as a strength of Theatre in Education in that it allows young people to make inferences about what the information provided means for themselves in everyday life",name:"Puviyarasu Manikandan ",designation:"Trainer",company:"Vaayusastra Aerospace"},
  {id :22,image: grid, text: "First, we just started with Set1. We didnt know much about Vaayusastra but we knew about our daughter's interest in science. Set1 completed and it continued upto Set8 and that's where Jagadeesh Sir identified my daughter's talent and provoked her to do a PPT which received good appreciation from Jagadeesh sir and she started with a complete project study on the same topic. Now, she has been constantly researching more topics like Cobots, Nibiru etc., which always makes her think differently. She also started attending her Level1 in Vayusastra campus and I confidently tell that my daughter will reach her dreams through this team.",name:"Bhairavi KΗ Vivekananda",designation:"Level II"},
  {id :23,image: grid, text: "Very much useful course for beginners to learn about Aeronautical and Space",name:"Aswin",designation:"3rd year Electronic and communication",company:"Rajalakshmi institute of technology"},
  {id :24,image: grid, text: "Feeling great. One of the most useful program designed in a way to interest the kid and make them learn. Story mode is very interesting and funny. It makes them understand the concepts better and remember them for a long time. My personal feel is that it will also help them in school.",name:"Vyas Sriram",designation:"TIPS Level I"},
  {id :24,image: grid, text: "Mira started attending Vaayusatra Aerospace programmes at a tender ager of 5. The teachers at Vaayusastra are not only excellent in teaching science concepts but also at handling young children. They have made sure to simplify and break down concepts. They make classes enjoyable.Mira has been and is still ecstatic to attend all the classes. They have encouraged her to be more imaginative and bring out new ideas. Mira has reached a level now to understand the concepts like black hole, escape velocity, neuroscience. All thanks to Team Vaayusastra",name:"Mira Abhishek",designation:"Level III",company:"Sunshine Senior Secondary School"},
  {id :25,image: grid, text: "It was an innocuous email by fag end of Apr '19 from my son Adhrit's school listing out summer camp options. Bridge, sailing, choir & Vaayusastra Aerospace. My wife & I jumped at the odd one out. We registered Adhrit for the first 10 day summer camp. Since then It has been an exhilarating journey for Adhrit with Vaayusastra. The 10 day Air Science programme was all fun, model making with paper and wonderful interaction. Teaching methodology was the reason behind the success of fun & science sessions of Vaayusastra. Jagadish arranged for a Ex-ISRO scientist to talk about PSLV and hand over Excellence certificates to all the children at RTBi centre",name:"Adhrit Narayanan Dav",designation:" Level III",company:"gopalapuram"},
  {id :26,image: grid, text: "Personally I really loved the,Basic Aerodynamics program as it was a very innovative as well as informative method of teaching topics of Aerodynamics by allowing the students to make their own simple paper models and pratically understanding the concepts in a easy and fun way. I would like to thank the entire Vaayusastra team for this wonderful experience and I would always like to know and join any further sessions planned on this topic.Thanks and regards",name:"Riyansh Vora",designation:"Grade:- 8",company:"Avalon Heights International School, Vashi"},
  {id :27,image: grid, text: "Rithvik, who started the first set of Vaayusastra without even knowing the basics of aerospace. However he liked the course so very much that he went on to complete the entire 8 sets of the program and went on to become a part of Vaayusastra Young Researchers Crew. Each set kindled his curiosity, thereby motivating him to attend the next set and so on. He enjoyed it very much and cherished each moment of each set. Thanks Team Vaayusastra for this awesome course!",name:"Rithvik Bhadri",designation:"@ Estancial Set 8",company:"Bhadri Vidya Mandir"},
  {id :26,image: grid, text: "Interest in astro physics has grown multifold. Keen to know new concepts. Self learning using Google and youtube has been developed...able to present and talk in peer group",name:"N Prasanna Venkatesan ",company:" PSBB Sr sec school K K Nagar"},
  {id :27,image: grid, text: "First my father got to know about Vaayusastra in Facebook and shared the information with me about the same. Since I am interested in aerospace science, I got enrolled in it. At the first day I was kind of nervous but later on I found that the teachers are very friendly which made me comfortable. They have silly nick names for addressing them like mottu, pathlu, Jaggu, psycho.. which gave me a feel as if they're my friends and helped me interact with them freely and share my ideas with them. In Vaayusastra they relate each concepts to stories which help us to remember and understand the concept without memorising it, which makes me really look forward for every session eagerly and crave for a daily class",name:"Yugavartha S",designation:"Level III"},
  {id :28,image: grid, text: "I think a word can sum up on what I am saying. AMAZING! The Trigger the Spark modules did trigger the little spark inside my body. I have been researching on many topics since I have attended set-7 and All these started, when I got a topic, which was taught during the 2nd Last class of Set-7, I researched a lot. Calculated a lot. And finally, all these calculations were jotted down in a PPT, and after presenting, that day, I felt myself being successful telling me do another research. So, I started doing my second one, and whenever I wanted to present, I used to create a topic quickly and present about it. Vaayusastra Aerospace is a good place for kids who love Science, Space and Aerospace. And now, I have presented more than 10-11 Researches, that I have done. And I feel I need to sum up now by saying tthat,VAAYUSASTRA AERSOPACE'S TRIGGER THE SPARK MODULE WILL TRIGGER A SPARK IN YOUR BODY TO GIVE YOUR IDEAS.",name:"Avinash",company:"Shraddha Children's Academy"},
  {id :29,image: grid, text: "I enjoyed the ,Basic Aerodynamics program which was Innovative, Insightful and helped me to upgrade my knowledge in the field of Aerodynamics. The concepts were explained using prototypes and in a gamified approach which helped in easy understanding of complex topics. Thanks to Vaayusastra and team for the fun filled blended approach and I look forward to sign up for the upcoming levels.",name:"Rakshansai Shivakumar",designation:"Grade:-8",company:"DAV Adambakkam"}

  
  
  
  
  


  

];