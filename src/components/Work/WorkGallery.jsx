import { motion } from "framer-motion";
import { container, item } from "../../animations/pageTrans";

const GalleryBox = ({ title, tags, desc, link, index, photo }) => {

  const Tag = ({ tag }) => {
    return (
      <motion.div className="p-2 bg-purple-300 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20" variants={item}>
        {tag}
      </motion.div>
    );
  };

  return (
    <>
    <motion.div
      className={`order-first ${
        (index + 1) % 2 === 0 && "lg:order-last"
      } w-full max-h-[600px]`}
      variants={item}
    >
      <img src={photo} className="rounded-lg" width="800px" height="600px" alt={title}/>
    </motion.div>
      <div className="flex flex-col gap-7 self-center">
        <motion.p className="text-3xl font-medium" variants={item}>{title}</motion.p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Tag tag={tag} key={index}/>
          ))}
        </div>
        <motion.p className="max-w-[25em] text-lg" variants={item}>{desc}</motion.p>
        <motion.a href={link} variants={item}>
          <button className="w-[250px] md:w-[250px] font-medium border-2 p-3 text-lg border-white hover:border-yellow-300 rounded-md transition-all hover:text-yellow-300">
            Visit Site
          </button>
        </motion.a>
      </div>
    </>
  );
};

const WorkGallery = () => {
  const works = [
    {
      title: "MemoryOS",
      tags: ["Web", "UI Design", "Development"],
      desc: "memoryOS is a cutting-edge US startup. This ed-tech company, which is co-founded by the 2X World Memory Champion Jonas von Essen, developed a gamified app for memory improvement.",
      link: "https://www.memoryos.com",
      photo: "./15.webp",
    },
    {
      title: "Beebole",
      tags: ["Web", "UI Design", "Development", "Management"],
      desc: "Beebole is an all-in-one time management tool for companies. The Dodonut team's work on their new web design resolved several challenges they struggled with, including branding, improving page speed, and supporting multiple languages, by conducting thorough research and utilizing our expertise and modern technology.",
      link: "https://www.beebole.com",
      photo: "./16.webp",
    },
    {
      title: "Adek",
      tags: ["Web", "UI Design", "Development"],
      desc: "ADEK, as a leading computer manufacturer, tailors solutions to their customers by designing and building customized computer systems. However, they also needed our solutions for how they presented content on their website.",
      link: "https://www.adek.com",
      photo: "./17.webp",
    },
    {
      title: "Climate Central",
      tags: ["Web", "UI Design", "Development"],
      desc: "Climate Central is a well-known and valued organization that reports and analyzes climate science. It has an impressive database of content used by many journalists and scientists to promote knowledge about climate change. However, its previous way of filtering was difficult and not user-friendly.",
      link: "https://www.climate-central.com",
      photo: "./18.webp",
    },
  ];
  return (
    <>
      {works.map((work, index) => (
        
    <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-10  lg:mt-24" variants={container} initial="hidden" whileInView="visible" viewport={{once: true}} key={index}>
        <GalleryBox
          title={work.title}
          tags={work.tags}
          desc={work.desc}
          link={work.link}
          index={index}
          photo={work.photo}
        />
        
    </motion.div>
      ))}
      </>
  );
};

export default WorkGallery;
