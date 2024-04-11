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

  const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true,
  });

  useGSAP(() => {
    timeline.to("#blue-box", {
      x: 500,
      rotation: 360,
      borderRadius: "100%",
      duration: 1,
      ease: "back.inOut",
    });

    timeline.to("#blue-box", {
      x: 1000,
      scale: 1,
      rotation: 720,
      borderRadius: 0,
      duration: 1,
      ease: "back.inOut",
    });
  });

  return (
    <main>
      <h1>GsapTo</h1>

      <div className="mt-20 rounded-3xl w-[1150px] p-5 bg-slate-500">
        <div id="blue-box" className="w-20 h-20 bg-blue-500 " />
      </div>
    </main>
  );
};

export default App;
