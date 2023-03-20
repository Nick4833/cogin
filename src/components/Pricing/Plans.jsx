import { AiFillCheckCircle } from "react-icons/ai";

const PlanBox = ({ title, price, desc, features }) => {
  const FeaturesList = ({ text }) => {
    return (
      <li className="flex items-center gap-2">
        <AiFillCheckCircle className="text-yellow-500"/> {text}
      </li>
    );
  };

  return (
    <div
      className="flex p-6 h-full rounded-lg bg-purple-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 flex-col gap-5"
    >
      <div className="flex justify-between items-end">
        <p className="text-3xl font-medium">{title}</p>
        <p className="text-lg xl:text-xl font-medium">
          ${price}<span className="font-medium text-sm ml-1">/Month</span>
        </p>
      </div>
      <div className="flex justify-between text-sm text-gray-300">
        <p>Part Time</p>
        <p>Billed Monthly</p>
      </div>
      <p>
        {desc}
      </p>
      <button
        className="font-medium p-3 text-center bg-purple-300 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20
          hover:bg-gradient-to-r from-yellow-500 to-pink-600 hover:translate-y-[-5px] transition-all cursor-pointer"
      >
        Start a Trail
      </button>
      <ul className="flex flex-col gap-5">
        {features.map((feature, index) => (
          <FeaturesList text={feature} key={index} />
        ))}
      </ul>
    </div>
  );
};

const Plans = () => {
  const featuresLight = [
    "Social Media Creatives",
    "Banners & Ads",
    "Packaging & Merch Design",
    "Web Design",
    "Photo Editing",
    "Web Development (Up to 6 pages)",
    "Slack Integration",
  ];
  const featuresPro = [
    "Social Media Creatives",
    "Banners & Ads",
    "Packaging & Merch Design",
    "Web Design",
    "Photo Editing",
    "Web Development (Up to 10 pages)",
    "Ecommerce Designs",
    "Presentation Designs",
    "Slack Integration",
  ];
  
  const featuresOne = [
    "1 to 1 Dedicated Designer",
    "Social Media Creatives",
    "Banners & Ads",
    "Packaging & Merch Design",
    "Web Design",
    "Photo Editing",
    "Web Development (Up to 25 pages)",
    "Ecommerce Designs",
    "Presentation Designs",
    "Choose Your Workspace",
  ];

  return (
    <div className="flex flex-col gap-10 p-6">
    <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-10">
      <PlanBox title="LIGHT" price="399" desc="Best fit for your marketing and content creation needs. Achieve fast & high-quality graphic design results that will take your business to the next level!" features={featuresLight}/>
      <div className="w-full h-full rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
        <div className="h-full w-full bg-primary rounded-lg">
      <PlanBox title="PRO" price="599" desc="Perfect match for startups and enterprise companies. Full range of design projects to help you leverage a design solution your brand can rely on." features={featuresPro}/>
      </div>
      </div>
      <PlanBox title="1 to 1" price="999" desc="Ideal for businesses looking for an in-house designer. Forget the hassle of hiring and managing. Accomplish any of your design projects with a top designer!" features={featuresOne}/>
    </div>
    <div className="flex flex-col text-center lg:text-start gap-10 lg:flex-row justify-between p-10 bg-purple-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 rounded-lg">
        <div className="flex flex-col gap-4">
            <p className="text-4xl font-semibold">Not sure what to choose?</p>
            <p>Don't worry, we will help you decide.</p>
        </div>
        <a href="https://www.jicoo.com/en/t/iYI_G2yk9eep/e/cogin-demo" target="_blank" className="h-full" >
        <button
        className="lg:w-[400px] font-medium text-lg p-3 text-center bg-yellow-500 rounded-xl text-black hover:text-white
          hover:bg-gradient-to-r from-yellow-500 to-pink-600 hover:translate-y-[-5px] transition-all cursor-pointer"
      >
        Book a Demo
      </button>
      </a>
    </div>
    </div>
  );
};

export default Plans;
