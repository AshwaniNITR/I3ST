"use client";

import { motion } from "framer-motion";
import { type FC } from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";

interface Section {
  title: string;
  content: string;
  image: string;
}

const AboutUs: FC = () => {
  const sections: Section[] = [
    {
      title: "About NIT ROURKELA",
      content: `The National Institute of Technology (NIT) Rourkela, established in 1961 as the Regional Engineering College, Rourkela, is one of India’s most distinguished institutions, acclaimed for excellence in engineering, science, and research. With a legacy of fostering academic rigor, innovation, and national integration, the institute brings together a diverse community of scholars, industry leaders, and innovators committed to advancing knowledge for societal benefit. Its state-of-the-art infrastructure, strong industry collaborations, and vibrant research culture empower transformative work in both fundamental and applied domains. As the proud host of the 1st IEEE International Conference on Intelligent Instrumentation for Sustainable Technology, NIT Rourkela reaffirms its role as a global hub for interdisciplinary dialogue, technological innovation, and the pursuit of sustainable solutions that address the challenges of our time.`,
      image: "/nitlogo.png",
    },

    {
      title: "About IEEE Rourkela Subsection",
      content:
        "The IEEE Rourkela Subsection, established on 10th December 2020 under the IEEE India Council (GEO Code: R0013703), is dedicated to advancing technology, fostering innovation, and promoting knowledge sharing in the region. As part of the world’s largest technical professional organization, it serves as a hub for engineers, researchers, academicians, industry professionals, and students to collaborate and grow. Through conferences, seminars, workshops, exhibitions, and student development programs, IEEE Rourkela strives to bridge the gap between academia and industry, empowering individuals to create impactful solutions and shape the future of technology.",
      image: "/ieeerklsub.jpg",
    },
    {
      title: "About IEEE Kolkata Subsection",
      content: `The history of the IEEE Calcutta Section dates back to 1971, when professionals from the Eastern and North-Eastern parts of India came together to establish what was then known as the Eastern Regional Sub-Section of IEEE, led by its first Chairman, Mr. Alak Ghose. After the formation of the IEEE India Council, this body was renamed the Calcutta Sub-Section and placed under the Delhi Section. In 1974, with the dedicated efforts of Mr. K.B. Subramaniam and Mr. Kalyan K. Dasgupta, the Sub-Section reached a significant milestone, gaining recognition as a full Section on 28 September 1978. Expansion continued in 1983 with the creation of the Kharagpur Sub-Section at IIT Kharagpur, which attained full Section status in 1985, bringing the Midnapur district of West Bengal into the Calcutta Section’s jurisdiction. Over time, the Section’s activities have flourished, reaching multiple cities and state capitals. Today, it comprises eleven technical society chapters, two affinity groups, and more than fifteen student branches, with membership steadily increasing. Known for maintaining a healthy balance between student and professional members, the Section works closely with its chapters and affinity groups to advance technical knowledge, support education, encourage membership growth, and engage in impactful outreach programs — continuing its legacy as a hub of innovation, collaboration, and service to society.`,
      image: "/ieeekolk.png",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hover: { scale: 1.03 },
    rest: { scale: 1 },
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 ">
      <Navbar />
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-yellow-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About I³ST 2026
      </motion.h2>

      <div className="max-w-6xl mx-auto space-y-24">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center gap-8 lg:gap-12`}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <motion.div
              className="relative w-full lg:w-1/2 overflow-hidden rounded-xl shadow-lg"
              variants={imageVariants}
              whileHover="hover"
              initial="rest"
              transition={{ duration: 0.3 }}
            >
              <Image
                src={section.image}
                alt={section.title}
                width={800}
                height={450}
                className={`w-full ${
                  section.image === "/AboutTheTheme.jpg"
                    ? "object-fill"
                    : "object-contain"
                } h-64`}
                priority={index < 2}
              />
            </motion.div>

            <div
              className={`w-full lg:w-1/2 ${
                index % 2 === 0 ? "lg:pl-6" : "lg:pr-6"
              }`}
            >
              <h3 className="text-3xl md:text-3xl font-bold text-gray-900 mb-4">
                {section.title}
              </h3>
              <p className="text-slate-900 font-semibold leading-relaxed text-justify">
                {section.content}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
