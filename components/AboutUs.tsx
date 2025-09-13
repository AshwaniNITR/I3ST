// const AboutUs = () => {
//   return (
//     <div id="aboutus" className="p-6 sm:p-10 md:p-16">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
//         <div>
//           <h1 className="md:text-5xl text-3xl font-bold underline text-[#ffb803] mb-4 sm:mb-6 text-left relative">
//             About INSTCon 2026
//           </h1>

//           <p className="md:mt-16 lg:text-xl font-medium text-center tracking-wide md:text-left mb-4 sm:mb-6 lg:mb-16">
//             It is with great pride that the{" "}
//             <strong>
//               IEEE Instrumentation and Measurement Society – Rourkela Chapter
//             </strong>{" "}
//             and the{" "}
//             <strong>
//               IEEE Robotics and Automation Society Student Chapter – NIT
//               Rourkela
//             </strong>{" "}
//             announce the{" "}
//             <strong>
//               1st IEEE International Conference on Intelligent Instrumentation
//               for Sustainable Technology (INSTCon 2026)
//             </strong>
//             , to be held at the{" "}
//             <strong>National Institute of Technology, Rourkela, India</strong>.
//           </p>

//           <p className="lg:text-xl font-medium text-center tracking-wide md:text-left mb-4 sm:mb-6 lg:mb-16">
//             INSTCon 2026 is a premier international forum dedicated to advancements
//             in intelligent instrumentation, sustainable engineering solutions,
//             and cutting-edge automation technologies. The conference aims to
//             bring together researchers, engineers, scientists, academicians,
//             industry leaders, entrepreneurs, and policymakers from across the
//             globe to advance the frontiers of measurement, sensing, control, and
//             automation for a sustainable future.
//           </p>

//           <p className="lg:text-xl font-medium text-center tracking-wide md:text-left mb-4 sm:mb-6 lg:mb-16">
//             With rapid advancements in smart sensing, intelligent control, and
//             data-driven decision making, the conference will provide a vibrant
//             platform to exchange ideas, showcase cutting-edge developments, and
//             explore solutions that bridge science, engineering, and societal
//             needs.
//           </p>

//           <p className="lg:text-xl font-medium text-center tracking-wide md:text-left mb-4 sm:mb-6 lg:mb-16">
//             Hosted in the vibrant academic and research environment of{" "}
//             <strong>NIT Rourkela</strong>, INSTCon 2026 will feature a highly
//             selective technical program, including peer-reviewed papers and
//             invited contributions from renowned experts in instrumentation,
//             measurement, robotics, automation, and sustainable systems.
//             Technically sponsored by the IEEE Instrumentation & Measurement
//             Society – Rourkela Chapter and IEEE Robotics & Automation Society
//             Student Branch Chapter – NIT Rourkela, the conference aims to foster
//             collaboration across diverse domains such as precision agriculture,
//             healthcare diagnostics, industrial automation, environmental
//             monitoring, and renewable energy systems.
//           </p>

//           <p className="lg:text-xl font-medium text-center tracking-wide md:text-left mb-4 sm:mb-6 lg:mb-16">
//             By integrating advancements in AI/ML, quantum devices,
//             cyber-physical security, and sustainable hardware design, the event
//             will serve as a showcase of technical excellence and as a call to
//             action for academia, industry, and policymakers to accelerate the
//             adoption of intelligent instrumentation as a cornerstone of global
//             sustainability initiatives.
//           </p>

//           <p className="lg:text-xl font-medium text-center tracking-wide md:text-left lg:mb-16">
//             With sustainability as its driving vision, INSTCon 2026 will serve as a
//             global platform to exchange knowledge, foster interdisciplinary
//             collaborations, and showcase innovations that can accelerate
//             progress toward a more sustainable future. We look forward to
//             welcoming you to NIT Rourkela for an intellectually stimulating and
//             inspiring event that merges technological excellence with societal
//             responsibility.
//           </p>
//         </div>

//         <div className="flex flex-col items-center gap-4 lg:mt-20 md:mt-24">
//           <img
//             src="./image 7.png"
//             alt="Conference Venue 1"
//             className="rounded-lg shadow-lg w-full sm:h-56 lg:h-64 object-cover"
//           />
//           <img
//             src="/image 3.png"
//             alt="Conference Venue 2"
//             className="rounded-lg shadow-lg w-full sm:h-56 lg:h-64 object-cover"
//           />
//           <img
//             src="/image 8.png"
//             alt="Conference Venue 3"
//             className="rounded-lg shadow-lg w-full sm:h-56 lg:h-64 object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;
"use client";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";



const AboutUs = () => {
  // Animation controls
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  // Container animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  // Text item animation variants
  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 0.77, 0.47, 0.97],
      },
    },
  };

  // Image animation variants
  const imageVariants: Variants = {
    hidden: { scale: 0.95, opacity: 0, y: 20 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 0.77, 0.47, 0.97],
      },
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.3 },
    },
  };

  // Trigger animations when in view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div
      id="aboutus"
      className="bg-white p-6 sm:p-10 md:p-16 lg:p-20 overflow-hidden"
    >
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
           
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
             
          {/* Left Column - Text Content */}
          <div>
               
            <motion.div variants={itemVariants}>
              <div className="relative inline-block">
                <h1 className="md:text-5xl text-3xl font-bold text-[#ffb803] mb-6 sm:mb-8 text-left">
                  About INSTCon 2026
                </h1>
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#ffb803] to-transparent"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </div>
            </motion.div>

            {[
              `It is with great pride that the IEEE Instrumentation and Measurement Society – Rourkela Chapter and the IEEE Robotics and Automation Society Student Chapter – NIT Rourkela announce the 1st IEEE International Conference on Intelligent Instrumentation for Sustainable Technology (INSTCon 2026), to be held at the National Institute of Technology, Rourkela, India.`,
              `INSTCon 2026 is a premier international forum dedicated to advancements in intelligent instrumentation, sustainable engineering solutions, and cutting-edge automation technologies. The conference aims to bring together researchers, engineers, scientists, academicians, industry leaders, entrepreneurs, and policymakers from across the globe to advance the frontiers of measurement, sensing, control, and automation for a sustainable future.`,
              `With rapid advancements in smart sensing, intelligent control, and data-driven decision making, the conference will provide a vibrant platform to exchange ideas, showcase cutting-edge developments, and explore solutions that bridge science, engineering, and societal needs.`,
              `Hosted in the vibrant academic and research environment of NIT Rourkela, INSTCon 2026 will feature a highly selective technical program, including peer-reviewed papers and invited contributions from renowned experts in instrumentation, measurement, robotics, automation, and sustainable systems. Technically sponsored by the IEEE Instrumentation & Measurement Society – Rourkela Chapter and IEEE Robotics & Automation Society Student Branch Chapter – NIT Rourkela, the conference aims to foster collaboration across diverse domains such as precision agriculture, healthcare diagnostics, industrial automation, environmental monitoring, and renewable energy systems.`,
              `By integrating advancements in AI/ML, quantum devices, cyber-physical security, and sustainable hardware design, the event will serve as a showcase of technical excellence and as a call to action for academia, industry, and policymakers to accelerate the adoption of intelligent instrumentation as a cornerstone of global sustainability initiatives.`,
              `With sustainability as its driving vision, INSTCon 2026 will serve as a global platform to exchange knowledge, foster interdisciplinary collaborations, and showcase innovations that can accelerate progress toward a more sustainable future. We look forward to welcoming you to NIT Rourkela for an intellectually stimulating and inspiring event that merges technological excellence with societal responsibility.`,
            ].map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-lg font-medium text-gray-700 mb-6 leading-relaxed"
                variants={itemVariants}
                custom={index}
              >
                {paragraph.split(/(<strong>.*?<\/strong>)/g).map((text, i) => {
                  if (text.startsWith("<strong>")) {
                    const content = text.replace(/<\/?strong>/g, "");
                    return (
                      <span key={i} className="font-bold text-gray-900">
                        {content}
                      </span>
                    );
                  }
                  return text;
                })}
              </motion.p>
            ))}
              <Link href="/about">
              <Button className="text-lg text-blue-800 hover:cursor-pointer">Learn More</Button>
            </Link>
          </div>
          

          {/* Right Column - Images */}
          <div className="flex flex-col items-center gap-6 lg:mt-8">
            <motion.div
              variants={imageVariants}
              whileHover="hover"
              className="w-full rounded-xl shadow-xl overflow-hidden"
            >
              <img
                src="./ieeerklsub.jpg"
                alt="Conference Venue 1"
                className="w-full h-64 sm:h-72 lg:h-80 object-contain"
              />
            </motion.div>

            <motion.div
              variants={imageVariants}
              whileHover="hover"
              className="w-full rounded-xl shadow-xl overflow-hidden"
            >
              <img
                src="/ieeeims.png"
                alt="Conference Venue 2"
                className="w-full h-64 sm:h-72 lg:h-80 object-cover"
              />
            </motion.div>

            <motion.div
              variants={imageVariants}
              whileHover="hover"
              className="w-full rounded-xl shadow-xl overflow-hidden"
            >
              <img
                src="/ieeeimsrkl.jpg"
                alt="Conference Venue 3"
                className="w-full h-64 sm:h-72 lg:h-80 object-fill"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
