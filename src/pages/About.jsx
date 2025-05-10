import Header from "../components/Header";
import SocialMedia from "../components/SocialMedia";

const About = () => {
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden bg-github">
        <Header />
        <div className="flex flex-col relative w-full h-screen overflow-auto pb-36"></div>
        <footer className="absolute bottom-0 w-full z-10 flex items-center justify-center py-3">
          <SocialMedia />
        </footer>
      </div>
    </>
  );
};

export default About;
