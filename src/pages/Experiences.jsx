import { useState } from "react";

const Experiences = () => {
  const experienceData = [
    {
      role: "Frontend Developer",
      company: "KRM Ayurveda Pvt. Ltd.",
      location: "Delhi, India",
      duration: "December 2024 - Present",
      points: [
        "Led the front-end development of a deployed CRM platform used by 400+ active users across 20+ departments, improving interdepartmental coordination by 40%.",
        "Built a modular, scalable UI with ReactJS and Bootstrap, turning complex workflows into real-time, role-based dashboards—cutting manual tasks by 50% and boosting task speed by 35%.",
        "Integrated four disconnected systems—call management, sales logistics, order processing, and manual tools (Excel, WhatsApp, phone logs)—into a unified platform, improving workflow efficiency by 60%.",
        "Mentored a frontend intern, managing task distribution, code reviews, and ensuring quality delivery across the project lifecycle.",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Nagarik Solution Pvt. Ltd.",
      location: "Kathmandu, Nepal",
      duration: "April 2024 - August 2024",
      points: [
        "Designed and implemented a responsive, accessible UI for the Central Hospital System using ReactJS and Tailwind CSS, improving overall usability for healthcare staff.",
        "Integrated REST APIs with real-time data updates following NHMIS compliance, increasing data accuracy and significantly improving system performance and reliability.",
        "Collaborated directly with doctors, nurses, and admin staff to gather user requirements and translate them into intuitive frontend components, resulting in higher user satisfaction and fewer support tickets.",
        "Diagnosed and resolved critical production bugs and ensured consistent platform stability under real-time hospital operations.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Maroon Engineering Solution",
      location: "Pokhara, Nepal",
      duration: "July 2023 - March 2024",
      points: [
        "Engineered a full-featured, responsive web application with 17+ core functionalities using ReactJS, NodeJS (Express), Tailwind CSS, Material UI, and MongoDB, enabling seamless navigation and optimized performance across devices.",
        "Focused on mobile responsiveness and accessibility, ensuring a smooth experience on smartphones and tablets to support mobile web app users, leading to a 40% improvement in user retention on mobile devices.",
        "Developed a product-ready mobile application, ePasal, using Flutter, designed for both Android and iOS with a dynamic UI, real-time API integration, and smooth navigation across screens and features.",
      ],
    },
    {
      role: "Front-End Web Developer Intern",
      company: "Khudra Corporation",
      location: "Kathmandu, Nepal",
      duration: "June 2022 - August 2022",
      points: [
        "Built an E-commerce Card Page with 5 reusable React components using ReactJS and Bootstrap, fully aligned with design guidelines to enhance user experience, optimizing performance and responsiveness across devices.",
        "Gained hands-on experience with component-based architecture, improved problem-solving skills, and developed a deeper understanding of front-end performance optimization.",
      ],
    },
    {
      role: "Image Synthesis Using GANs and Diffusion Models",
      company: "",
      location: "Research Publication, IEEE Xplore",
      duration: "Sept 2023",
      points: [
        "Co-authored a research paper reviewing state-of-the-art deep learning methods for image synthesis, including GANs and Diffusion Models, highlighting their architectures, strengths, limitations, and real-world applications in generating high-quality, realistic images.",
        "Explored evaluation techniques such as Inception Score (IS) and Frechet Inception Distance (FID) and discussed the need for human evaluation alongside quantitative metrics to more accurately assess model performance.",
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState("right");

  const handleTabChange = (newIndex) => {
    if (!isAnimating) {
      setIsAnimating(true);
      // Determine slide direction based on index change
      setSlideDirection(newIndex > activeTab ? "left" : "right");
      setTimeout(() => {
        setActiveTab(newIndex);
        setIsAnimating(false);
      }, 500); // Duration of the animation 0.5s
    }
  };
  // swipe actions
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;
  const onTouchStart = (e) => {
    setTouchEnd(null); // reset on new touch
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      const newIndex = (activeTab + 1) % experienceData.length;
      handleTabChange(newIndex);
    }
    if (isRightSwipe) {
      const newIndex =
        activeTab === 0 ? experienceData.length - 1 : activeTab - 1;
      handleTabChange(newIndex);
    }
  };

  return (
    <>
      <div className="w-full h-[calc(100dvh-40px)] overflow-hidden p-4 flex items-start justify-center">
        <div
          className="relative w-full max-w-2xl"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className={`w-full flex flex-col justify-center items-start gap-3 border-8 border-gray-600 rounded-3xl p-6 mt-4 transition-all duration-500 ease-in-out shadow-gray-800 shadow-2xl ${
              isAnimating
                ? `slide-exit-${slideDirection}`
                : `slide-enter-${slideDirection}`
            }`}
          >
            <strong className="text-xl sm:text-2xl text-orange-200">
              {experienceData[activeTab].role}
              {experienceData[activeTab].company &&
                `, ${experienceData[activeTab].company}`}
            </strong>
            <span className="text-sm text-blue-300">
              {experienceData[activeTab].location} : [{" "}
              {experienceData[activeTab].duration} ]
            </span>
            <hr className="w-full border-dashed border-t-2 border-gray-700" />
            <ul className="list-none list-inside text-white text-pretty space-y-2">
              {experienceData[activeTab].points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="absolute bottom-10 flex justify-center items-center gap-3">
          <button
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-l-full me-10 hidden sm:block"
            onClick={() =>
              handleTabChange(
                activeTab === 0 ? experienceData.length - 1 : activeTab - 1
              )
            }
          >
            Prev
          </button>
          {experienceData.map((_, index) => (
            <button
              key={index}
              className={`rounded-full transition-all duration-500 ease-in-out
                ${
                  activeTab === index
                    ? "bg-[#e76a10] w-9 h-3"
                    : "bg-gray-600 hover:bg-gray-700 w-3 h-3"
                }`}
              onClick={() => handleTabChange(index)}
            ></button>
          ))}
          <button
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-r-full ms-10  hidden sm:block"
            onClick={() =>
              handleTabChange((activeTab + 1) % experienceData.length)
            }
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Experiences;
