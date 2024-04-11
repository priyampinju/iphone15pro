import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {
  // useGSAP(() => {
  // gsap.to("#blue-box", {
  //   x: "1200%",
  //   repeat: -1,
  //   yoyo: true,
  //   rotation: 360,
  //   duration: 1,
  //   ease: "sine.in",
  // });
  // gsap.from("#blue-box", {
  //   x: 750,
  //   repeat: -1,
  //   yoyo: true,
  //   rotation: 360,
  //   duration: 1,
  //   ease: "sine.in",
  // });

  // // //

  // gsap.fromTo(
  //   "#blue-box",
  //   {
  //     x: 0,
  //   },
  //   {
  //     x: "1200%",
  //     repeat: -1,
  //     yoyo: true,
  //     // rotation: 360,
  //     duration: 2,
  //     // ease: "sine.in",
  //     borderRadius: "100%",
  //   }
  // );

  // }, []);

  // // // GSAP timeline

  // const timeline = gsap.timeline({
  //   repeat: -1,
  //   repeatDelay: 1,
  //   yoyo: true,
  // });

  // useGSAP(() => {
  //   timeline.to("#blue-box", {
  //     x: 500,
  //     rotation: 360,
  //     borderRadius: "100%",
  //     duration: 1,
  //     ease: "back.inOut",
  //   });

  //   // // lets put third gsap animation
  //   timeline.to("#blue-box", {
  //     y: -100,
  //     scale: 1,
  //     borderRadius: 0,
  //     rotation: 360,
  //     duration: 2,
  //     ease: "back.inOut",
  //   });

  //   timeline.to("#blue-box", {
  //     y: 100,
  //     scale: 1,
  //     borderRadius: "100%",
  //     rotation: 360,
  //     duration: 2,
  //     ease: "back.inOut",
  //   });

  //   timeline.to("#blue-box", {
  //     x: 1000,
  //     scale: 1,
  //     rotation: 720,
  //     borderRadius: 0,
  //     duration: 1,
  //     ease: "back.inOut",
  //   });
  // });

  // // // gsap Stagger

  useGSAP(() => {
    gsap.to(".stagger-box", {
      y: 250,
      rotation: 360,
      borderRadius: "100%",
      repeat: -1,
      yoyo: true,
      stagger: 0.05,
      ease: "circ.inOut",
    });
  }, []);

  return (
    <main>
      <h1>GsapTo</h1>

      <div className="mt-10 rounded-3xl w-[1150px] p-5 bg-slate-500">
        <div id="blue-box" className="w-20 h-20 bg-blue-500 " />
      </div>
      <div className="mt-10 ml-5 pl-3">
        <button
          onClick={() => {
            if (timeline.paused()) {
              timeline.play();
            } else {
              timeline.pause();
            }
          }}
          className="border-2 pr-2 pl-2 pt-1 pb-1"
        >
          Play/Pause
        </button>
      </div>

      <div className="mt-10">
        <div className="flex gap-5">
          <div className="w-20 h-20 bg-indigo-200 rounded-lg stagger-box"></div>
          <div className="w-20 h-20 bg-indigo-300 rounded-lg stagger-box"></div>
          <div className="w-20 h-20 bg-indigo-400 rounded-lg stagger-box"></div>
          <div className="w-20 h-20 bg-indigo-500 rounded-lg stagger-box"></div>
          <div className="w-20 h-20 bg-indigo-600 rounded-lg stagger-box"></div>
          <div className="w-20 h-20 bg-indigo-700 rounded-lg stagger-box"></div>
          <div className="w-20 h-20 bg-indigo-800 rounded-lg stagger-box"></div>
          <div className="w-20 h-20 bg-indigo-900 rounded-lg stagger-box"></div>
        </div>
      </div>
    </main>
  );
};

export default App;
