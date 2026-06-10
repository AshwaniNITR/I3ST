// CameraReady.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { CommitteesBackground } from "../../components/Background";

const CameraReady: React.FC = () => {
  const guidelines = [
    {
      title: "IEEE Formatting & Referencing",
      content: "Please make sure that your paper strictly complies with IEEE formatting and referencing styles.",
      link: "https://www.ieee.org/conferences/publishing/templates",
      linkText: "IEEE Templates",
    },
    {
      title: "Proofreading & Revisions",
      content: "Proofread your source document thoroughly and address reviewer comments suitably to confirm that it will require no revision.",
      link: null,
    },
    {
      title: "IEEE PDF eXpress Compatibility",
      content: "Camera ready paper PDF should pass compatibility check in IEEE PDF eXpress.",
      steps: [
        "Create account at IEEE PDF eXpress",
        "Enter 69741X for the Conference ID, your email and choose password",
        "Continue to enter information as prompted. Verify your email.",
        "Final version of your camera ready paper should show 'pass' as status",
      ],
      link: "https://ieee-pdf-express.org/account/signup",
      linkText: "Create PDF eXpress Account",
    },
    {
      title: "Copyright Transfer",
      content: "Corresponding author will soon receive an email from IEEE for copyright transfer. After online transfer of copyright download the copyright transfer pdf.",
      link: null,
    },
    {
      title: "Final Submission on CMT",
      content: "For final camera-ready submission you have to again login to CMT and upload PDF eXpress passed final manuscript and IEEE copyright transfer PDF.",
      link: null,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8">
     <CommitteesBackground />
      <motion.h2
        className="mt-12 font-extrabold sm:mt-10 text-4xl md:text-5xl text-center leading-[1.25] pb-[0.15em] bg-gradient-to-r from-[#003366] to-[#0066cc] bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Camera Ready Submission
      </motion.h2>
      <div className="w-32 h-2 bg-gradient-to-r from-[#003366] to-[#0066cc] mx-auto mb-8 rounded-full"></div>

      <motion.div
        className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl overflow-hidden border border-blue-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-5">
          <h2 className="text-2xl font-bold text-white text-center">
            Camera Ready Submission Guidelines
          </h2>
          <p className="text-blue-200 text-center text-sm mt-1">
            After at least one author registers for the conference, follow these steps for camera ready submission
          </p>
        </div>

        <div className="p-6">
          <div className="space-y-6">
            {/* Guideline 1 */}
            <motion.div
              className="bg-white rounded-xl p-5 border border-blue-200 hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {guidelines[0].title}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {guidelines[0].content}
                  </p>
                  <a
                    href={guidelines[0].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                  >
                    {guidelines[0].linkText}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Guideline 2 */}
            <motion.div
              className="bg-white rounded-xl p-5 border border-blue-200 hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.25 }}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {guidelines[1].title}
                  </h3>
                  <p className="text-gray-600">
                    {guidelines[1].content}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Guideline 3 - PDF eXpress with steps */}
            <motion.div
              className="bg-white rounded-xl p-5 border border-blue-200 hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {guidelines[2].title}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {guidelines[2].content}
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4 mb-3 border border-blue-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Steps to follow:</h4>
                    <ul className="space-y-2">
                      {guidelines[2].steps?.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={guidelines[2].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
                  >
                    {guidelines[2].linkText}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Guideline 4 */}
            <motion.div
              className="bg-white rounded-xl p-5 border border-blue-200 hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.35 }}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {guidelines[3].title}
                  </h3>
                  <p className="text-gray-600">
                    {guidelines[3].content}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Guideline 5 */}
            <motion.div
              className="bg-white rounded-xl p-5 border border-blue-200 hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">5</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {guidelines[4].title}
                  </h3>
                  <p className="text-gray-600">
                    {guidelines[4].content}
                  </p>
                  <div className="mt-4 flex gap-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      PDF eXpress Passed Manuscript
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                      IEEE Copyright Transfer PDF
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Important Notes */}
          <div className="mt-8 bg-yellow-50 rounded-xl p-4 border border-yellow-200">
            <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Important Note
            </h4>
            <p className="text-sm text-gray-600 ml-7">
              All camera ready submissions must be completed by the deadline. Papers that do not comply with IEEE formatting or fail PDF eXpress compatibility check will not be included in the conference proceedings.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CameraReady;