import socialMedia from "../images/projects/socialMedia.png";
import ecommerce from "../images/projects/ecommerce.png";
import portfolio from "../images/projects/portfolio.png";
import staticPage from "../images/projects/staticPage.png";
import googleHomepage from "../images/projects/googleHomepage.png";

export const projects = [
  {
    title: "Social Media Website - Spectrum",
    desc: "This platform allows users to create profiles,share posts,follow unfollow other users and interact through likes.",
    image: socialMedia,
    techStack: "React JS,Redux JS,Node JS,Express JS,MongoDB",
    github: "https://github.com/Gokul-R07/Social-media-website-Frontend",
    liveUrl: "https://spectrum-media.vercel.app",
  },
  {
    title: "Ecommerce Website - ShopQuick",
    desc: "This website enables users to make online purchases,with integrated Stripe payment functionality.Admin can add new products to the platform.",
    image: ecommerce,
    techStack: "React JS,Node JS,Express JS,MongoDB,Stripe",
    github: "https://github.com/Gokul-R07/Ecommerce-website-Frontend",
    liveUrl: "https://shopquick.vercel.app",
  },
  {
    title: "Portfolio Website",
    desc: "Created a visually engaging portfolio that demonstrates my expertise and abilities.",
    image: portfolio,
    techStack: "React JS,Redux JS",
    github: "https://github.com/Gokul-R07/Portfolio",
    liveUrl: "https://gokulr-portfolio.vercel.app", 
  },
  {
    title: "Static Page",
    desc: "A static webpage with mobile responsiveness was developed using React JS.",
    image: staticPage,
    techStack: "React JS,CSS",
    github: "https://github.com/Gokul-R07/sample-Airbnb-webpage",
    liveUrl: "https://sample-airbnb-webpage.netlify.app",
  },
  {
    title: "Google Homepage",
    desc: "A mobile-responsive clone of the Google homepage was built using HTML.",
    image: googleHomepage,
    techStack: "Html,CSS,JS",
    github: "https://github.com/Gokul-R07/Google-Homepage",
    liveUrl: "https://gokul-r07.github.io/Google-Homepage",
  },
];
