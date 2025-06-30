import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center bg-base-100 px-4"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-4xl font-bold">
          <span className="block mb-2">Hey there, I'm</span>
          <span className="text-blue-900"> Jakia </span>
          <span className="text-blue-900">Sultana</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-base-content/70">
         I design and develop inmersive web experiences with mordern  tools and frameworks.Focused on front-end development,I bring beautiful,responsive, and performant interfaces to life -where design meets functionality.
        </p>

        {/* CTA Button */}
        <div>
          <a href="#projects" className="btn btn-primary">
            Explore My Work
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce"> */}
        {/* <span className="text-sm text-base-content/60 mb-1">keep Scrolling</span> */}
        {/* <ArrowDown className="h-5 w-5 text-primary" /> */}
      {/* </div> */}
    </section>
  );
};

export default HeroSection;