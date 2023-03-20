const Footer = () => {
  return (
    <div className="p-6 md:px-20 flex flex-col gap-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-10 lg:gap-28  border-t-2 border-gray-300 pt-10">
        <div>
          <p className="text-gray-500 font-medium">Get In Touch</p>
          <a href="mailto:nickelion2000@gmail.com" target="_blank">business@cogin.com</a>
          <br></br>
          <a href="mailto:nickelion2000@gmail.com" target="_blank">hello@cogin.com</a>
        </div>
        <div>
          <p className="text-gray-500 font-medium">Connect</p>
          <a href="https://www.twitter.com" target="_blank">Twitter</a>
          <br></br>
          <a href="https://www.linkedin.com" target="_blank">LinkedIn</a>
        </div>
        <div>
          <p className="text-gray-500 font-medium">Design Services</p>
          <p>Cogin Design Services, Str. 22, 1099 Yangon, Myanmar</p>
        </div>
        <div>
          <p className="text-gray-500 font-medium">Ventures</p>
          <p>Cogin Ventures Services, Str. 22, 1099 Yangon, Myanmar</p>
        </div>
      </div>
      <div><small>Copyright © 2023 Cogin Labs, Inc. All rights reserved.</small></div>
    </div>
  );
};

export default Footer;
