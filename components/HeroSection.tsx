import React from "react";
import PlayIcon from "./icons/PlayIcon";
import StarMascot from "./icons/StarMascot";
import LightbulbIcon from "./icons/LightbulbIcon";
import StarIcon from "./icons/StarIcon";
import CertificateIcon from "./icons/CertificateIcon";
import KnowledgeIcon from "./icons/KnowledgeIcon";
import NetworkIcon from "./icons/NetworkIcon";
import ImpactIcon from "./icons/ImpactIcon";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";

const FeatureCard = ({ icon, title, children }) => (
  <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 text-center md:text-left flex flex-col md:flex-row items-center gap-6 shadow-lg shadow-indigo-100/50 border border-white/50 hover:bg-white transition-all duration-300 transform hover:-translate-y-2">
    <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/40">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-bold text-slate-800">{title}</h3>
      <p className="mt-1 text-slate-600">{children}</p>
    </div>
  </div>
);

const HeroSection: React.FC = () => {
  const [featuresRef, featuresAreVisible] = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-b from-indigo-50 via-purple-50 to-white">
      <div className="absolute -top-38   left-0 w-full h-48 z-0 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-indigo-200"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-indigo-200"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight">
              Empowering <span className="text-indigo-600">youths</span> beyond{" "}
              <span className="text-indigo-600">learning.</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-lg mx-auto lg:mx-0">
              First Indonesian super-app about all things youth empowerment,
              built for youth, students, and achievers. Discover your purpose
              and make groundbreaking impact.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-full shadow-lg shadow-indigo-500/40 transform transition-all duration-300 hover:scale-105">
                Join Now
              </button>
              <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 font-bold text-indigo-600 bg-white/70 rounded-full shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-white">
                <PlayIcon className="w-6 h-6" />
                <span>Behind Advanteens</span>
              </button>
            </div>
          </div>

          <div className="relative h-96 lg:h-auto flex items-center justify-center">
            {/* Mascot and floating items */}
            <div
              className="absolute animate-pulse"
              style={{ animationDuration: "4s", animationDelay: "0.5s" }}
            >
              <LightbulbIcon className="w-24 h-24 text-yellow-400 opacity-80 transform -rotate-12" />
            </div>

            <StarMascot className="w-[450px] h-auto relative z-10" />

            <div className="absolute inset-0 bg-indigo-200/50 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div
          ref={featuresRef}
          className={`mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ease-out ${
            featuresAreVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <FeatureCard
            title="Official Certificates"
            icon={<CertificateIcon className="w-10 h-10" />}
          >
            Obtain official certificates by completing courses/projects.
          </FeatureCard>
          <FeatureCard
            title="Knowledge Upgrade"
            icon={<KnowledgeIcon className="w-10 h-10" />}
          >
            Develop knowledge towards your dream career & education.
          </FeatureCard>
          <FeatureCard
            title="Meaningful Network"
            icon={<NetworkIcon className="w-10 h-10" />}
          >
            Bond and grow alongside people who share the same vision.
          </FeatureCard>
          <FeatureCard
            title="Accessible Impact"
            icon={<ImpactIcon className="w-10 h-10" />}
          >
            Mutual public benefits between projects and courses.
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
