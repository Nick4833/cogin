import SimpleStep from "./SimpleSteps";
import { motion } from "framer-motion";
import { container, item } from "../../animations/pageTrans";
import DetailStep from "./DetailStep";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { BiUserCheck } from "react-icons/bi";
import { BsClockHistory } from "react-icons/bs";


const Steps = () => {
  const steps = [
    {
      icon: <MdOutlineConnectWithoutContact />,
      desc: "Get a meeting with us and start creating tasks",
    },
    {
      icon: <BiUserCheck />,
      desc: "Get matched with a pro designer that is designed to fulfil your needs",
    },
    {
      icon: <BsClockHistory />,
      desc: "Get design updates every 24 business hours",
    },
  ];

  const detaileds = [
    {
      title: "01 - Ideation & Evaluation",
      firstP:
        "There is no active cooperation without deep knowledge of each other. Therefore we start every project by understanding the background of your business, your goals, target groups, and the vision for future development.",
      secondP:
        "With most new web design and logo design projects, we work through a somewhat humorous questionnaire with you specifically designed to help us view your brand through your own eyes. This exercise helps us weave your personality into our creative design work to realize your vision.",
      img: "./step1.jpg",
    },
    {
        title: "02 - Discovery & Research",
        firstP:
          "We look at your top few competitors to gauge their marketing efforts and understand industry-specific design queues or trends to communicate with your audience more effectively. This research helps us plan and execute any on-site search engine optimization to ensure you’re ready to compete out of the gate.",
        secondP:
          "We do this through quantitative and qualitative research methods that help us revise assumptions and validate them into factual statements. We then use this information to understand what we've learned by identifying trends and patterns among our findings. Those insights allow us to define your product's direction moving forward.",
        img: "./step2.jpg",
      },
      {
          title: "03 - UX Design",
          firstP:
            "Once we know our target group and users, we know their goals, motivations, and problems, and we understand how to solve these problems with our product - it's time to start creating the website's skeleton.",
          secondP:
            "At this stage in design projects, we review initial concept work with you before expanding the concept into the full suite of wireframes we developed together during our strategy phase. In some cases, we may take a mobile-first design approach if your existing website analytics suggest mobile as the priority device for your audience.",
          img: "./step3.jpg",
        },
        {
            title: "04 - Development",
            firstP:
              "Development is an integral part of the entire process, which helps our ideas come alive. We've been working with professional development since 2018 under the Bejamas brand. ",
            secondP:
              "We host the beta website on our private development server allowing you time to experience the working prototype before rolling out the new website design to your audience. This opportunity allows us to put the website through final testing and address any bugs.",
            img: "./step4.jpg",
          },
          {
              title: "05 - Support and Growth",
              firstP:
                "Many people believe a design project is finished after step four, but not us! We prepare a customised tutorial to help you manage your new website and guide you through a list of best practices for the continued search engine optimisation of your website. ",
              secondP:
                "Sustainability is not a finished product. It is a process. Technology, possibilities, and knowledge about it are constantly changing. Therefore, even after the launch of the website or app, we continuously search for improvement. That means we are together with you looking for the best solutions for diminishing the impact of the web on the environment, supporting you in growth and your positive force.",
              img: "./step5.jpg",
            },
  ];

  return (
    <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{once: true}}>
      <div className="p-6 md:p-5 grid grid-cols-1 lg:grid-cols-3 gap-5">
        {steps.map((step, index) => (
          <SimpleStep icon={step.icon} desc={step.desc} key={index} />
        ))}
      </div>
      <div className="p-6 md:p-20 flex flex-col gap-10">
        {detaileds.map((detail, index) => (
          <DetailStep detail={detail} key={index} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

export default Steps;
