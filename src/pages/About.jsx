import Spline from '@splinetool/react-spline';

export const About = () => {

  return (
    <section id="about" className="text-white p-8">
      <h2 className="text-5xl font-bold mb-8">
        About <span className="text-emerald-300">Me</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

        <div className="border border-white/20 rounded-lg p-6 flex flex-col">
          <h3 className="text-2xl font-bold mb-2">Background</h3>
          <p className="text-white/50 mb-6">
            Currently I am studying Applied Math & Data Science at Hochschule Hannover. At my core I enjoy unpacking complex problems by approaching each with my knowledge and the attention it deserves.
          </p>
          <p className="text-white/50 mb-3">
            Not so currently I am competing in LeetCode contests and training for the Berlin Marathon next year (although I do a lot of LeetCode now).
          </p>
          <div className="rounded-lg p-4 border border-white/20 mt-3">
            <h3 className="text-emerald-200/50">Important Documents</h3>
          </div>
        </div>
          
        <div className="border border-white/20 rounded-lg relative overflow-hidden h-[600px]">
          <Spline
            scene="https://prod.spline.design/mNSPKUc1B1AJVRhL/scene.splinecode"
            className="absolute top-0 left-0 h-full scale-[1.2]"
          />
        </div>

        <div className="border border-white/20 rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-2">Skills</h3>
            <div className="grid grid-cols-1 text-center gap-4">
              <div className="border border-white/20 rounded-lg p-3 mb-3">

              <h4 className="text-emerald-300 font-medium mb-2">Mathematics</h4>
              <ul className="text-white/50 text-sm space-y-1">
                <li>Linear Algebra</li>
                <li>Calculus</li>
                <li>Differential Equations</li>
                <li>Data Analysis</li>
              </ul>
              </div>
            </div>
              
            <div className="grid grid-cols-1 text-center gap-4">
              <div className="border border-white/20 rounded-lg p-3 mb-3">

              <h4 className="text-emerald-300 font-medium mb-2">Machine Learning & AI</h4>
              <ul className="text-white/50 space-y-1 text-sm">
                <li className="skill">Computer Vision</li>
                <li>NLP</li>
                <li>PyTorch</li>
                <li>TensorFlow</li>
              </ul>
            </div>
          </div>

              <div className="grid grid-cols-1 text-center gap-4">
              <div className="border border-white/20 rounded-lg p-3">

              <h4 className="text-emerald-300 font-medium mb-2">Software Development</h4>
              <ul className="text-white/50 space-y-1 text-sm">
                <li>Python</li>
                <li>SQL</li>
                <li>Git</li>
                <li>Docker</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">

  <div className="border border-white/20 rounded-lg p-6 flex flex-col">
    <h3 className="text-2xl font-bold mb-4">Languages</h3>
    <div className="space-y-4 flex-1">

      <div>
        <label className="block text-sm font-medium mb-1">Python</label>
        <div className="w-full bg-white/10 rounded-full h-2">
          <div
            className="bg-emerald-300 h-2 rounded-full"
            style={{ width: "70%" }}
          ></div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">C++</label>
        <div className="w-full bg-white/10 rounded-full h-2">
          <div
            className="bg-emerald-300 h-2 rounded-full"
            style={{ width: "60%" }}
          ></div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Java</label>
        <div className="w-full bg-white/10 rounded-full h-2">
          <div
            className="bg-emerald-300 h-2 rounded-full"
            style={{ width: "30%" }}
          ></div>
        </div>
      </div>
    </div>
  </div>

  <div className="border border-white/20 rounded-lg p-6 flex flex-col">
    <h3 className="text-2xl font-bold mb-2">Goals</h3>
    
    <p className="text-white/50">
    My goal is to continue growing as a data scientist and contsantly working towards advancing my education. Beyond that, my family has always been with me throughout my journey - their support drives me to keep passion in every aspect of life and become the best version of myself.
    </p>
  </div>


</div>

     </section>
  );
};
