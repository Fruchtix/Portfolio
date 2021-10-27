import eyeyoga from "../assets/images/eyeyoga.png";
import breakup from "../assets/images/breakup_app.png";
import suns from "../assets/images/1000SUNS.png";

export const projects = [
  {
    id: 0,
    name: "Breakup",
    description:
      "This App helps people with their breakup and lovesickness. It guides you through a four week programm with audio lessons each day and additional information about relationships in general. Afterwards you will probably still be lovesick but you have the tools to overcome your heartbreak.",
    technologys: ["React.js", "React Native", "Firebase"],
    direction: "row",
    backgroundPosition: "top left",
    githubLink: "https://github.com/Fruchtix/Breakup",
    projectLink:
      "https://play.google.com/store/apps/details?id=com.fruchtiapps.breakup",
    imageUrl: breakup,
  },
  {
    id: 1,
    name: "EyeYoga",
    description:
      "This App gives people the opportunity to do yoga for their eyes. You can train the muscles in your eyes the same way as you train the rest of your body: by daily exercise and a good programm. Eyeyoga gives you the opportunity to improve your eyesight through a guided 30 day audio course and other exercises.",
    technologys: ["React.js", "React Native", "Firebase"],
    direction: "row-reverse",
    githubLink: "https://github.com/Fruchtix/EyeYoga",
    projectLink:
      "https://play.google.com/store/apps/details?id=com.fruchtiapps.eyeyoga",
    imageUrl: eyeyoga,
  },
  {
    id: 2,
    name: "Yoga online Summit",
    description:
      "Worked for one of the biggest yoga retreats in spain (Suryalila) and supported a team of 8 people to organize an online yoga summit. I was responsible for the marketing and building the website as well as the actual livestreaming of the event.",
    technologys: ["Wordpress", "HTML", "CSS"],
    direction: "row",
    githubLink: "",
    projectLink: "https://1000suns.online/",
    imageUrl: suns,
  },
  {
    id: 3,
    name: "BSH Project",
    description:
      "I have worked several month for the BSH group and contributed to nearly all Frontend components that are in use on bosch-home.com, siemens-home.com, neff-home.com and many more BSH brands.",
    technologys: ["JavaScript", "HTML", "SCSS", "jQuery"],
    direction: "row-reverse",
    projectLink: "https://bosch-home.com",
    imageUrl:
      "https://www.drugcos.de/media/image/c6/59/d3/160_ManufacturerqrkOaPhjxEz0X.jpg",
  },
];
