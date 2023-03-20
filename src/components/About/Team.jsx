const TeamBox = ({ image, name, position }) => {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <img src={image} alt={name} width="300px" height="300px"/>
      </div>
      <div>
        <p className="text-xl font-medium">{name}</p>
        <small>{position}</small>
      </div>
    </div>
  );
};

const Team = () => {
  const teams = [
    {
      image: "./team/1.webp",
      name: "Landyn Sage",
      position: "Founder & CEO",
    },
    {
      image: "./team/2.webp",
      name: "Navy Jo",
      position: "Founder & CCO",
    },
    {
      image: "./team/3.webp",
      name: "Cameron Sage",
      position: "Founder & CTO",
    },
    {
      image: "./team/4.webp",
      name: "Scout Taylor",
      position: "UI/UX Designer",
    },
    {
      image: "./team/5.webp",
      name: "Lane Sterling",
      position: "Logo Designer",
    },
    {
      image: "./team/6.webp",
      name: "Ramsey Hanley",
      position: "Frontend Developer",
    },
    {
      image: "./team/7.webp",
      name: "Miller Reilly",
      position: "Backend Developer",
    },
    {
      image: "./team/8.webp",
      name: "Sawyer Holland",
      position: "Fullstack Developer",
    },
  ];

  return (
    <div
      className="flex flex-col gap-20"
    >
      <h2 className="text-5xl font-medium">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {teams.map((team, index) => (
          <TeamBox key={index} image={team.image} name={team.name} position={team.position} />
        ))}
      </div>
      <div
        className="grid grid-cols-1 gap-5 lg:grid-cols-2 justify-between p-10 bg-purple-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 rounded-lg"
        
      >
        <div className="flex flex-col gap-4">
          <p className="text-5xl font-semibold">Join Our Team</p>
        </div>
        <div className="self-end justify-self-end flex flex-col gap-5">
          <p className="max-w-[600px]">
            We believe it takes great people to make a great products. That's
            why we hire not only the perfect professional fits, but people who
            embody our values.
          </p>
          <a
            href="mailto:nickelion2000@gmail.com"
            className="hover:text-yellow-500 transition-all underline"
          >
            Send Us Your CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Team;
