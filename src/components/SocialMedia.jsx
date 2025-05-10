const SocialMedia = () => {
  const links = [
    {
      name: "github",
      url: "https://github.com/imSonuKushwaha",
      bg: "bg-[url(./assets/github.svg)]",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/im-sonu/",
      bg: "bg-[url(./assets/linkedin-circle.svg)]",
    },
    {
      name: "Insta",
      url: "https://www.instagram.com/imsonu_11/",
      bg: "bg-[url(./assets/instagram.svg)]",
    },
    {
      name: "Gmail",
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=sonukumarkushwaha267@gmail.com",
      bg: "bg-[url(./assets/gmail.svg)]",
    },
  ];

  return (
    <div className="flex justify-center md:justify-end md:me-5 items-center gap-5 text-gray-600 pr-2 w-full">
      {links.map((link, index) => {
        return (
          <a
            key={index}
            href={link.url}
            target="_blank"
            className={`h-16 w-16 p-2  rounded-lg  transition-all ease-in-out delay-150 duration-700 flex justify-center items-end ${link.bg} border-none text-transparent bg-transparent`}
          >
            {link.name}
          </a>
        );
      })}
    </div>
  );
};

export default SocialMedia;
