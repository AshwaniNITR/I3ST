"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import { CommitteesBackground } from "../../components/Background";
import { CheckCircle } from "lucide-react";

const Page = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <CommitteesBackground />

      <section className="relative py-20 flex flex-col items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Modern Header */}
          <div className="mb-16 text-center animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#003366] to-[#0066cc] bg-clip-text text-transparent">
              Important<span className="font-extrabold"> Guidelines</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#003366] to-[#0066cc] mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 font-extrabold text-lg max-w-3xl mx-auto">
              Important guidelines and policies for paper submission and
              publication
            </p>
          </div>

          {/* Content Section */}
          <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-200/50">
            {/* Registration Requirement */}
            <div className="mb-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                Initial Full Paper Preparation
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed justify-center">
                Please note that{" "}
                <span className="font-bold">
                  at least one author of each accepted paper must register for
                  the conference, attend the event, and present the paper for it
                  to be included in the proceedings.{" "}
                </span>
                Papers that do not meet these requirements will not be published
                - no exceptions.
              </p>
            </div>

            {/* Paper Submission Section */}
            <div className="mb-12 justify-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b border-gray-200">
                Paper Submission via Microsoft CMT
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Prospective authors are invited to submit a{" "}
                <span className="font-semibold text-blue-700">
                  FULL PAPER (4–6 pages)
                </span>{" "}
                through the Microsoft CMT submission portal.{" "}
                <span className="font-bold text-blue-600 mb-6 items-center gap-2">
                  Here is the{" "}
                  <a
                    href="https://cmt3.research.microsoft.com/INSTCON2026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-800"
                  >
                     Submission Link
                  </a>
                  <svg
                    className="w-4 h-4 inline"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </span>
                . Manuscripts must present a complete and original description
                of the proposed technical contribution, including relevant
                research results.
                <span className="font-semibold text-red-600">
                  {" "}
                  Submissions shorter than 4 pages may be rejected
                  automatically.
                </span>
              </p>

              <p>
                Acknowledgement: The Microsoft CMT service was used for managing
                the peer-reviewing process for this conference. This service was
                provided for free by Microsoft and they bear all expenses,
                including costs for Azure cloud services as well as for software
                development and support.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  Each manuscript should clearly demonstrate:
                </h4>
                <ul className="space-y-3 pl-5">
                  {[
                    "Alignment with the scope of the conference",
                    "Originality and technical quality",
                    "Sound organization and writing clarity",
                    "Significance of the contribution",
                    "Adequate references to prior work",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-r">
                <p className="text-gray-800 italic">
                  By submitting a paper, authors indicate their willingness to
                  register for and present the work at the Conference if
                  accepted.
                </p>
              </div>
            </div>

            {/* Review Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-3 border-b border-gray-200">
                Review and Final Submission
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                All submissions will undergo peer review by the Technical
                Program Committee. Authors of accepted papers must{" "}
                <span className="font-bold">
                  upload a final version (maximum 6 pages)
                </span>{" "}
                conforming to the publication guidelines, complete the
                registration process, and present the work at the conference.
              </p>
              <p className="text-gray-700 leading-relaxed">
                All accepted and presented papers will be submitted for
                inclusion in IEEE Xplore. However, IEEE reserves the right to
                exclude a submission from distribution after the conference,
                including exclusion from IEEE Xplore, if the submission does not
                meet IEEE standards for scope and/or quality.
              </p>
            </div>

            {/* Template & Revision Section */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Template Section */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Template
                </h3>
                <p className="text-gray-700 mb-4">
                  Conference paper templates in multiple formats are available
                  through the following link:
                </p>
                <a
                  href="https://www.ieee.org/conferences/publishing/templates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                >
                  Paper Templates
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>

              {/* Revision Policy */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Revision Policy
                </h3>
                <p className="text-gray-700">
                  If minor revisions are requested, acceptance is contingent
                  upon satisfactorily addressing all reviewer comments in the
                  final submission. Papers may still be rejected at the final
                  stage if reviewer remarks are not properly addressed.
                </p>
              </div>
            </div>

            {/* Important Note */}
            <div className="mt-12 p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-200">
              <div className="flex items-start gap-4">
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">
                    Important Notes
                  </h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      Early submission is strongly encouraged
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      All deadlines are firm and strictly enforced
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">•</span>
                      Ensure your paper meets all formatting requirements
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom spacing */}
          <div className="mt-20"></div>
        </div>
      </section>
    </div>
  );
};

export default Page;
