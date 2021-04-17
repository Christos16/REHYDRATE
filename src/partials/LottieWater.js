import { useLottie } from "lottie-react";
import lottie from "./lottie.json";
 
const LottieAddress = () => {
  const options = {
    animationData: lottie,
    loop: true,
    autoplay: true,
  };
 
  const { View } = useLottie(options);
 
  return View;
};
 
export default LottieAddress;