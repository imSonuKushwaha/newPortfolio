import { useEffect, useState } from "react";
import DSA from "../components/DSA";
import Skill from "../components/Skill";
import SocialMedia from "../components/SocialMedia";
import { useInView } from "../components/UseInView";

const Intro = () => {
  const [activeTab, setActiveTab] = useState(false);
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
      setActiveTab(false);
    }

    if (isRightSwipe) {
      setActiveTab(true);
    }
  };

  // hover effect on scroll
  const [introRef, introInView] = useInView();
  const [academicsRef, academicsInView] = useInView();
  const [skillsRef, skillsInView] = useInView();

  useEffect(() => {
    if (skillsInView) {
      setActiveTab(true);
    } else {
      setActiveTab(false);
    }
  }, [skillsInView]);

  return (
    <>
      <div className="w-full h-[calc(100dvh-40px)] overflow-auto p-4 flex flex-col items-center gap-5 sm:gap-10">
        {/* Introduction */}
        <div className="max-w-2xl">
          <div
            ref={introRef}
            className={`flex flex-col justify-center items-start gap-3 border-8 border-gray-600 rounded-3xl p-6 mt-2 transition duration-500 ease-in-out  shadow-gray-800 ${
              introInView ? "-translate-y-2 shadow-2xl shadow-gray-800" : ""
            }`}
          >
            <strong className="text-xl sm:text-2xl text-orange-200">
              Hello, I'm Sonu Kr. Kushwaha
            </strong>
            <hr className="w-full border-dashed border-t-2 border-gray-700" />
            <p className="text-pretty text-white">
              I'm a results-driven Software Developer with a B.Tech in Computer
              Engineering, backed by hands-on experience at multiple startups
              and tech firms across India and Nepal.
              <br />
              <br />
              My previous roles include working on hospital management software,
              CRM system and e-commerce solutions, where I built responsive UIs,
              integrated RESTful APIs, and automated key workflows.
              <br />
              <br />
              I'm a strong problem solver with a passion for building
              high-performance, user-focused software. I write clean, efficient
              code and deliver reliable solutions that drive impactful,
              real-time results.
            </p>
          </div>
        </div>
        {/* Academics */}
        <div className="max-w-2xl">
          <div
            ref={academicsRef}
            className={`flex flex-col justify-center items-start gap-3 border-8 border-gray-600 rounded-3xl p-6 mt-2 transition duration-500 ease-in-out shadow-gray-800 ${
              academicsInView ? "-translate-y-2 shadow-2xl shadow-gray-800" : ""
            }`}
          >
            <strong className="text-blue-300 text-lg sm:text-xl">
              B.Tech in Computer Engineering
            </strong>
            <strong className="text-xl sm:text-2xl text-orange-200">
              Delhi Technological University (DTU), formerly Delhi College of
              Engineering (DCE), India
            </strong>
            <div className="w-full flex justify-between items-center">
              <strong className="text-xl">8.43 GPA</strong>
              <p className="text-sm text-orange-400">2019 – 2023</p>
            </div>
            <hr className="w-full border-dashed border-t-2 border-gray-700" />
            <p className="text-pretty text-white">
              Awarded with General Scholarship Scheme (GSS), funded by Indian
              Council for Cultural Relations (ICCR).
            </p>
          </div>
        </div>
        {/* skills */}
        <div
          ref={skillsRef}
          className={`max-w-2xl flex flex-col items-center border-8 border-gray-600 rounded-3xl p-6 ${
            skillsInView ? "-translate-y-2 shadow-2xl shadow-gray-800" : ""
          } transition duration-500 ease-in-out`}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="flex flex-row justify-center">
            <button
              className={`${
                activeTab ? "" : "rounded-2xl hover:bg-gray-700"
              } text-center text-xl p-1 px-5`}
              onClick={() => {
                setActiveTab(true);
              }}
            >
              Skills
            </button>
            <button
              className={`${
                !activeTab ? "" : "rounded-2xl hover:bg-gray-700"
              } text-center text-xl p-1 px-5`}
              onClick={() => {
                setActiveTab(false);
              }}
            >
              DSA
            </button>
          </div>
          <div
            className={`ml-28 px-10 border-2 rounded-full border-orange-300 transition-all delay-0 duration-500 ${
              activeTab ? "-translate-x-24" : "-translate-x-2"
            }`}
          ></div>
          {activeTab === true ? <Skill /> : <DSA />}
        </div>
        <div className="flex items-center justify-center py-3 mb-5">
          {/* social media */}
          <SocialMedia />
        </div>
      </div>
      {/*  */}
    </>
  );
};

export default Intro;
