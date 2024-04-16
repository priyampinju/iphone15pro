import { View } from "@react-three/drei";

import * as THREE from "three";
import Lights from "./Lights";
import Loader from "./Loader";
import Iphone from "./Iphone";
import { Suspense } from "react";

const ModelView = ({ index }) => {
  return (
    <div className="modelview flex justify-center items-center h-full">
      Your browser does not support 3D models.
    </div>

    // <View
    //   index={index}
    //   id={gsapType}
    //   className={` border-2 border-red-500 w-full h-full absolute ${
    //     index === 2 ? "right-[-100%]" : ""
    //   }`}
    // >
    /* Ambient Light */
    /* <ambientLight intensity={0.3} /> */

    /* <PerspectiveCamera makeDefault position={[0, 0, 4]} /> */

    /* <Lights /> */

    /* <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
      />

      <group
        ref={groupRef}
        name={`${index === 1} ? 'small' : 'large`}
        position={[0, 0, 0]}
      >
        <Suspense fallback={<Loader />}>
          <Iphone
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group> */
    // </View>
  );
};

export default ModelView;
