import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
    const {progress} = useProgress();
  return (
    <Html center className="text-2xl text-center text-black">{progress} % Loaded </Html>
  )
}

export default Loader