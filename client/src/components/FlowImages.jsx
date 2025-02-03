import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import imag_1 from "../assets/images/robo_1.png";
import imag_2 from "../assets/images/robo_2.jpg";
import imag_3 from "../assets/images/robo_3.jpg";
import imag_4 from "../assets/images/robo_4.png";

const profiles = [
  { id: 1, src: imag_1, alt: "Profile 1" },
  { id: 2, src: imag_2, alt: "Profile 2" },
  { id: 3, src: imag_3, alt: "Profile 3" },
  { id: 4, src: imag_4, alt: "Profile 4" },
];

export default function ProfileFlow() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ translateX: "-50%" });
  }, [controls]);

  return (
    <div className="overflow-hidden p-4 w-full profile-flow">
      <motion.div
        className="flex space-x-4 w-max"
        animate={controls}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        onHoverStart={() => controls.stop()} // Stop animation on hover
        onHoverEnd={() => controls.start({ translateX: "-50%" })} // Resume on hover out
      >
        {[...profiles, ...profiles].map((profile, index) => (
          <img
            key={index}
            src={profile.src}
            alt={profile.alt}
            className="w-24 h-24 rounded-full shadow-lg"
          />
        ))}
      </motion.div>
    </div>
  );
}
