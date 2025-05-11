import { useState } from "react";

const Experiences = () => {
  const experienceData = [
    {
      role: "Frontend Developer",
      company: "KRM Ayurveda Pvt. Ltd.",
      location: "Delhi, India",
      duration: "Dec 2024 - Present",
      points: [
        "Leading the front-end development of a CRM for a medical sales corporation, improving interdepartmental coordination by 40%.",
        "Developed scalable, component-based UI with ReactJS and Bootstrap, automating workflows and reducing manual tasks by 50%.",
        "Integrated call management, sales logistics, order handling, and manual processes into one CRM, boosting workflow efficiency by 60%.",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Nagarik Solution Pvt. Ltd.",
      location: "Kathmandu, Nepal",
      duration: "Apr 2024 - Aug 2024",
      points: [
        "Co-designed a responsive UI, reducing task completion time by 25%.",
        "Integrated 20+ RESTful APIs, improving data exchange and system response time.",
        "Implemented real-time updates and collaborated with healthcare professionals to build a reliable UI aligned with NHMIS standards.",
      ],
    },
    {
      role: "Software Engineer",
      company: "Maroon Engineering Solution",
      location: "Pokhara, Nepal",
      duration: "Jul 2023 - Mar 2024",
      points: [
        "Built a responsive website with 17 features using ReactJS, NodeJS, Tailwind CSS, Material UI, and MongoDB.",
        "Optimized responsiveness for mobile devices and developed a product-ready Flutter app named 'ePasal'.",
      ],
    },
    {
      role: "Front-End Web Developer Intern",
      company: "Khudra Corporation",
      location: "Kathmandu, Nepal",
      duration: "Jun 2022 - Aug 2022",
      points: [
        "Built an E-commerce Card Page with 5 reusable components using ReactJS and Bootstrap.",
        "Ensured alignment with design guidelines to deliver a seamless user experience.",
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
      }, 500);
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
      <div className="w-full h-[calc(100vh-40px)] overflow-auto p-4 flex items-start justify-center">
        {/* Experiences */}
        <div
          className="max-w-2xl"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className={`flex flex-col justify-center items-start gap-3 border-8 border-gray-600 rounded-3xl p-6 mt-4 transition duration-500 ease-in-out shadow-gray-800 shadow-2xl ${
              isAnimating
                ? `slide-exit-${slideDirection}`
                : `slide-enter-${slideDirection}`
            }`}
          >
            <strong className="text-xl sm:text-2xl text-orange-200">
              {experienceData[activeTab].role},{" "}
              {experienceData[activeTab].company}
            </strong>
            <span className="text-sm text-blue-300">
              {experienceData[activeTab].location} --{" "}
              {experienceData[activeTab].duration}
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
        </div>
      </div>
    </>
  );
};

export default Experiences;
