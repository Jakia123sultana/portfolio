import { Briefcase, Code, User } from "lucide-react";

const AboutSection = () => {
  return (
    <div id="about" className="py-4 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
             Aspiring Fornt-End Developer and Lifelong learner
            </h3>

            <p className="text-base-content/70">
           I'm a junior web developer with 2 years of hand-on learing and project experience. My focus lies in front-end developer where I bring idaes to life using modern technologies like HTML, CSS, JavaScript, and React.
            </p>

            <p className="text-base-content/70">
              I'm passionate about creating elegant solutions to complex
              problems and constantly learning new technologies to stay ahead in
              the ever-evolving web landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
              {/* <a href="" className="btn btn-outline btn-primary">
                Download CV
              </a> */}
            </div>
          </div>

          {/* Right Column - Skills/Features */}
          <div className="grid grid-cols-1 gap-6">
            <div className="card bg-base-200 shadow-md">
              <div className="card-body flex-row items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-base-content/70">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>

            <div className="card bg-base-200 shadow-md">
              <div className="card-body flex-row items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-base-content/70">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="card bg-base-200 shadow-md">
              <div className="card-body flex-row items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-base-content/70">
                    Leading projects from conception to completion with agile
                    methodologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;