import Spline from '@splinetool/react-spline';

export const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-screen text-white">
      <Spline
        className="absolute inset-0 w-full h-full z-0 scale-[1.2]"
        scene="https://prod.spline.design/E0GZ9JW-EGejenZP/scene.splinecode"
      />

      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center min-h-screen z-10">
          <h1 className="mb-4 -mt-20 text-6xl md:text-7xl font-bold tracking-tighter">
            Hi, I am <span className="text-emerald-400">Mikhail</span>
          </h1>

          <p className="text-xl text-white/80 max-w-lg mx-auto leading-relaxed mb-6">
            Show me your data and I will tell you who you are
          </p>
        </div>
      </div>
    </div>
  );
};
