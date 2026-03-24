"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import { CommitteesBackground } from "../../components/Background";
import { CheckCircle, Calendar, Trophy, Plane, FileText } from "lucide-react";
import CombinedBackground from "../../components/CombinedBackground";

const announcements = [
  {
    title: "⏳ Deadline Approaching!",
    description: "Submit your papers before the deadline: MARCH 31, 2026.",
    icon: Calendar,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Travel Grants",
    description:
      "Limited Travel Grants will be awarded to the selected student presenters.",
    icon: Plane,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Best Paper Award in Each Track",
    description: "One best paper award in each track",
    icon: Trophy,
    color: "from-yellow-500 to-amber-500",
  },
  {
    title: "Journal Publication Opportunity",
    description:
      "Authors of papers accepted and presented at INSTCon 2026 may submit technically extended versions of their work to IEEE Transactions on Instrumentation and Measurement (TIM) and IEEE Open Journal of Instrumentation and Measurement (OJIM), in accordance with the journals' policies for extended versions of conference papers. All such submissions will be handled as regular journal submissions and will undergo the standard peer-review process.",
    icon: FileText,
    color: "from-blue-500 to-indigo-500",
  },
];

const Page = () => {
  return (
    <div className="relative min-h-screen">
      {/* <Navbar /> */}
      <CombinedBackground/>

      <section className="relative py-20 flex flex-col items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Modern Header */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#003366] to-[#0066cc] bg-clip-text text-transparent">
              Important<span className="font-extrabold"> Announcements</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#003366] to-[#0066cc] mx-auto mb-6 rounded-full"></div>
          </div>

          {/* Content Section */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-200/50">
              <div className="flex flex-col space-y-4 sm:space-y-6">
                {announcements.map((announcement, index) => {
                  const isJournal = announcement.title
                    .toLowerCase()
                    .includes("journal");
                  const isDeadline = announcement.title
                    .toLowerCase()
                    .includes("deadline");

                  return (
                    <div
                      key={index}
                      className={`p-4 rounded-xl border transition-all duration-300
                        ${
                          isJournal
                            ? "bg-yellow-100 border-yellow-400 shadow-md"
                            : "bg-white/70 border-blue-100 shadow-sm"
                        }
                        ${
                          isDeadline
                            ? "border-red-500 bg-red-100 shadow-lg"
                            : ""
                        }`}
                    >
                      {/* Title */}
                      <h4
                        className={`text-lg font-bold sm:text-xl flex items-center gap-2 justify-center
                          ${
                            isJournal
                              ? "text-yellow-800"
                              : isDeadline
                              ? "text-red-700"
                              : "text-blue-700"
                          }`}
                      >
                        {isJournal && (
                          <span className="text-red-500 text-lg">🚨</span>
                        )}
                        {!isJournal && !isDeadline && (
                          <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-semibold bg-red-500 text-white rounded-full shadow-sm">
                            New
                          </span>
                        )}
                        {announcement.title}
                      </h4>

                      {/* Description */}
                      {!isDeadline ? (
                        <p
                          className={`mt-1 justify-center text-sm sm:text-base text-center
                            ${
                              isJournal
                                ? "text-yellow-900 font-semibold"
                                : "text-gray-700"
                            }`}
                        >
                          {announcement.description}
                        </p>
                      ) : (
                        <div className="mt-1 text-sm sm:text-base text-center">
                          <p>Submit your papers before the deadline:</p>
                          <p className="text-red-600 font-extrabold text-md sm:text-xl">
                            March 31, 2026
                          </p>
                        </div>
                      )}

                      {/* Badge */}
                      {isJournal && (
                        <div className="mt-2 flex flex-row gap-4 justify-center">
                          <button className="text-xs font-bold px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">
                            <a
                              href="https://ieee-ims.org/publication/ieee-tim/information-authors"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              IEEE TIM
                            </a>
                          </button>
                          <button className="text-xs font-bold px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">
                            <a
                              href="https://ieee-ims.org/publication/ieee-ojim/author-information"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              IEEE OJIM
                            </a>
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom spacing */}
            <div className="h-20"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;