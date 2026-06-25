import { motion } from "framer-motion";
import React from "react";
import RegistrationCalculator from "./RegistrationCalc";
import PaymentRegistration from "./PayementRegistration";

export default function FeesPage() {
  const indianTableData = [
    ["Category", "IEEE Member", "Non-IEEE Member", "IEEE Member", "Non-IEEE Member"],
    ["Student(UG/PG/Ph.D)", "7500", "8500", "8000", "9000"],
    ["Academia/R&D Organization", "10,000", "11,000", "11,000", "12,000"],
    ["Industry Professionals", "15,000", "16,000", "16,000", "17,000"],
  ];

  const foreignTableData = [
    ["Category", "IEEE Member", "Non-IEEE Member", "IEEE Member", "Non-IEEE Member"],
    ["Student(UG/PG/Ph.D)", "250", "350", "300", "400"],
    ["Academia/R&D Organization", "400", "450", "450", "500"],
    ["Industry Professionals", "500", "550", "550", "600"],
  ];

  const guidelines = [
    "All registration fees are inclusive of 18% GST",
    "The Registering Author should be an Active IEEE member to avail the IEEE Membership discount.",
    "Registering Author should be a Student (UG/PG/Ph.D) to do the registration in the 'Student Category'",
    "In 'Academia/R&D Organization' category, to avail IEEE Membership discount the Registering Author must be an Active Full Member of IEEE",
    "A paper registered in 'Academia/R&D Organization' category, can be presented by a Student Co-author but vise-versa is not applicable.",
    "Author registration fee includes- Registration Kit, Conference Lunch and Banquet Dinner.",
    "Registration fees, once paid, are non-refundable.",
    "Papers exceeding 6 pages will be charged at ₹1000 (USD 50) per additional page, up to a maximum of 8 pages.",
    "Registration fees for Attendees (co-author/non-author/accompanying person) is ₹3500 (without any Registration Kit, including Conference Lunch and Gala Dinner). Registration for Attendees will Open soon.",
  ];

  // Helper function to highlight amounts in text

const RegularDeadline = () => {
  const showExtendedDeadline =
    new Date() >= new Date("2026-06-26T00:00:00+05:30"); // IST

  return (
    <>
      21.06.2026 -{" "}
      {showExtendedDeadline ? (
        <>
          <span className="line-through decoration-red-500 text-red-500 mr-2">
            25.06.2026
          </span>
          <span>30.06.2026</span>
        </>
      ) : (
        <span>25.06.2026</span>
      )}
    </>
  );
};

 const highlightAmounts = (text) => {
    const parts = [];
    let lastIndex = 0;
    
    // Regex to find ₹ amounts, $ amounts, and the word "attendees"
    const highlightRegex = /(₹\d+(?:,\d+)*(?:\.\d+)?|\$\d+(?:,\d+)*(?:\.\d+)?|attendees)/gi;
    let match;
    
    while ((match = highlightRegex.exec(text)) !== null) {
      // Add text before the match
      if (match.index > lastIndex) {
        parts.push(<span key={`text-${lastIndex}`}>{text.substring(lastIndex, match.index)}</span>);
      }
      
      // Check if it's an amount or the word "attendees"
      const isAmount = match[0].match(/[₹$]/);
      
      parts.push(
        <strong 
          key={`highlight-${match.index}`} 
          className={isAmount ? "text-red-600 bg-red-50 px-1.5 py-0.5 rounded-md inline-block mx-0.5 text-base" : "text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded-md inline-block mx-0.5 text-base"}
        >
          {match[0]}
        </strong>
      );
      lastIndex = match.index + match[0].length;
    }
    
    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(<span key={`text-${lastIndex}`}>{text.substring(lastIndex)}</span>);
    }
    
    return parts.length ? parts : <span>{text}</span>;
  };

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8">
      <motion.h2
        className="mt-12 font-extrabold sm:mt-10 text-4xl md:text-5xl text-center leading-[1.25] pb-[0.15em] bg-gradient-to-r from-[#003366] to-[#0066cc] bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Registration Details
      </motion.h2>
      <div className="w-32 h-2 bg-gradient-to-r from-[#003366] to-[#0066cc] mx-auto mb-8 rounded-full"></div>

      {/* Registration Guidelines - Enhanced with larger fonts and highlighted amounts */}
      <motion.div
        className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl overflow-hidden mb-8 border border-blue-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-5">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Registration Guidelines</h2>
          <p className="text-blue-200 text-sm md:text-base mt-1 text-center">Important registration guidelines and policies</p>
        </div>

        <div className="p-6 md:p-8">
          {/* Multi-paper discount card - Featured section with larger text */}
          <div className="mb-8 p-5 md:p-6 bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl border-l-4 border-blue-600 shadow-md">
            <h3 className="font-bold text-blue-900 text-xl md:text-2xl mb-4">For more than one accepted paper:</h3>
            <div className="space-y-3 ml-4">
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-xl">➢</span>
                <span className="text-gray-800 text-base md:text-lg">
                  <strong className="font-bold text-blue-700 text-lg md:text-xl">40% discount</strong> will be given on the registration of the{" "}
                  <strong className="font-bold text-blue-700">2nd paper only</strong>
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-xl">➢</span>
                <span className="text-gray-800 text-base md:text-lg">
                  The <strong className="font-bold text-blue-700">3rd Paper</strong> should be registered with{" "}
                  <strong className="font-bold">Full Registration Fees</strong> of the corresponding category (with Two Registration Kits)
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-600 font-bold text-xl">➢</span>
                <span className="text-gray-800 text-base md:text-lg">
                  For the registration of the <strong className="font-bold text-blue-700">4th paper</strong>,{" "}
                  <strong className="font-bold text-blue-700">40% discount</strong> will be given
                </span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-blue-200 shadow-sm">
                <p className="text-base md:text-lg font-bold text-gray-800 mb-2">Example (Student, Two papers):</p>
                <p className="text-gray-700">
                  Fees: <strong className="text-red-600 bg-red-50 px-2 py-0.5 rounded-md text-lg md:text-xl">₹12,000</strong>{" "}
                  <span className="line-through text-gray-400 ml-2">₹15,000</span>
                </p>
                <p className="text-sm text-gray-500 mt-2">(₹7,500 + ₹7,500×60% )</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-200 shadow-sm">
                <p className="text-base md:text-lg font-bold text-gray-800 mb-2">Example (Student, Three papers):</p>
                <p className="text-gray-700">
                  Fees: <strong className="text-red-600 bg-red-50 px-2 py-0.5 rounded-md text-lg md:text-xl">₹19,500</strong>{" "}
                  <span className="line-through text-gray-400 ml-2">₹22,500</span>
                </p>
                <p className="text-sm text-gray-500 mt-2">(₹7,500 + ₹4,500 + ₹7,500)</p>
              </div>
            </div>
          </div>

          {/* Regular guidelines in a responsive grid - ALL points bolded with larger text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            {guidelines.map((guideline, index) => (
              <div key={index} className="flex items-start p-3 rounded-lg hover:bg-blue-50 transition group">
                <div className="w-7 h-7 shrink-0 rounded-full bg-blue-100 flex items-center justify-center mr-3 mt-0.5 group-hover:bg-blue-200 transition">
                  <span className="text-sm font-bold text-blue-600">•</span>
                </div>
                <p className="text-gray-800 text-base md:text-lg font-semibold leading-relaxed">
                  {highlightAmounts(guideline)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Indian Authors Table */}
      <motion.div
        className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl overflow-hidden mb-12 border border-blue-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-5">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Indian Author (INR)</h2>
          <p className="text-blue-200 text-sm md:text-base text-center mt-1">Registration Fee Details</p>
        </div>

        <div className="hidden lg:block p-6">
          <div className="overflow-x-auto rounded-xl border border-blue-200 shadow-inner">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="bg-gradient-to-b from-blue-900 to-blue-800 text-white p-5 text-center text-lg font-bold border border-blue-500 rounded-tl-xl" rowSpan={2}>
                    Category
                  </th>
                  <th colSpan={2} className="bg-gradient-to-b from-blue-900 to-blue-950 text-white p-4 text-center border-r border-blue-500">
                    <div className="font-bold text-lg md:text-xl">Early Bird</div>
                    <div className="text-blue-100 text-sm md:text-base font-medium mt-1">(On or before <span className="line-through text-red-500 mr-2">17.06.2026</span> 20.06.2026)</div>
                  </th>
                  <th colSpan={2} className="bg-gradient-to-b from-blue-900 to-blue-950 text-white p-4 text-center border border-blue-500">
                    <div className="font-bold text-lg md:text-xl">Regular</div>
                    <div className="text-blue-100 text-sm md:text-base font-medium mt-1"><RegularDeadline /></div>
                  </th>
                </tr>
                <tr className="bg-gradient-to-b from-blue-800 to-blue-900">
                  <th className="text-white p-4 text-center font-semibold border border-blue-500 text-base">
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-3 h-3 bg-blue-300 rounded-full"></span>
                      IEEE Member
                    </span>
                  </th>
                  <th className="text-white p-4 text-center font-semibold border border-blue-500 text-base">
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                      Non-IEEE Member
                    </span>
                  </th>
                  <th className="text-white p-4 text-center font-semibold border border-blue-500 text-base">
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-3 h-3 bg-blue-300 rounded-full"></span>
                      IEEE Member
                    </span>
                  </th>
                  <th className="text-white p-4 text-center font-semibold border border-blue-500 text-base">
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                      Non-IEEE Member
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {indianTableData.slice(1).map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={`${rowIndex % 2 === 0 ? "bg-white" : "bg-blue-50"}`}
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className={`p-4 border border-blue-500 ${
                          cellIndex === 0 ? "font-bold text-blue-900 pl-6 text-base" : "text-gray-800 text-center font-semibold text-base"
                        }`}
                      >
                        {cellIndex === 0 ? (
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            {cell}
                          </div>
                        ) : (
                          <span className={`inline-block px-3 py-1.5 rounded-lg font-bold ${
                            cellIndex % 2 === 1 ? "bg-blue-100 text-blue-800 border border-blue-200" : "bg-blue-50 text-blue-900 border border-blue-100"
                          }`}>
                            ₹{cell}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile View for Indian Authors */}
        <div className="lg:hidden">
          {indianTableData.slice(1).map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: rowIndex * 0.1 }}
              className={`border-t border-blue-300 first:border-t-0 ${rowIndex % 2 === 0 ? "bg-white" : "bg-blue-50"}`}
            >
              <div className="bg-gradient-to-r from-blue-700 to-blue-800 p-4 border-b border-blue-500">
                <h3 className="font-bold text-white text-xl flex items-center">
                  <span className="w-3 h-3 bg-white rounded-full mr-3"></span>
                  {row[0]}
                </h3>
              </div>
              <div className="p-4">
                <div className="mb-4">
                  <div className="bg-gradient-to-r from-blue-900 to-blue-950 p-3 rounded-t-lg border border-blue-500 border-b-0">
                    <h4 className="font-bold text-white text-lg text-center">Early Bird</h4>
                    <p className="text-blue-200 text-xs text-center mt-0.5">On or before <span className="line-through text-red-500 mr-2">17.06.2026</span> 20.06.2026  </p>
                  </div>
                  <div className="grid grid-cols-2 gap-0 border border-blue-500 rounded-b-lg overflow-hidden">
                    <div className="bg-gradient-to-b from-blue-800 to-blue-900 p-4 border-r border-blue-500">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="w-3 h-3 bg-blue-300 rounded-full"></span>
                        <span className="text-white font-semibold">IEEE Member</span>
                      </div>
                      <div className="text-2xl font-bold text-white text-center">₹{row[1]}</div>
                    </div>
                    <div className="bg-gradient-to-b from-blue-700 to-blue-800 p-4">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                        <span className="text-white font-semibold">Non-IEEE Member</span>
                      </div>
                      <div className="text-2xl font-bold text-white text-center">₹{row[2]}</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-gradient-to-r from-blue-900 to-blue-950 p-3 rounded-t-lg border border-blue-500 border-b-0">
                    <h4 className="font-bold text-white text-lg text-center">Regular</h4>
                    <p className="text-blue-200 text-xs text-center mt-0.5"><RegularDeadline /></p>
                  </div>
                  <div className="grid grid-cols-2 gap-0 border border-blue-500 rounded-b-lg overflow-hidden">
                    <div className="bg-gradient-to-b from-blue-800 to-blue-900 p-4 border-r border-blue-500">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="w-3 h-3 bg-blue-300 rounded-full"></span>
                        <span className="text-white font-semibold">IEEE Member</span>
                      </div>
                      <div className="text-2xl font-bold text-white text-center">₹{row[3]}</div>
                    </div>
                    <div className="bg-gradient-to-b from-blue-700 to-blue-800 p-4">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                        <span className="text-white font-semibold">Non-IEEE Member</span>
                      </div>
                      <div className="text-2xl font-bold text-white text-center">₹{row[4]}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Foreign Authors Table */}
      <motion.div
        className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl overflow-hidden mb-12 border border-blue-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-5">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center">Foreign Author (USD)</h2>
          <p className="text-blue-200 text-sm md:text-base text-center mt-1">Registration Fee Details</p>
        </div>

        <div className="hidden lg:block p-6">
          <div className="overflow-x-auto rounded-xl border border-blue-200 shadow-inner">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="bg-gradient-to-b from-blue-900 to-blue-800 text-white p-5 text-center text-lg font-bold border border-blue-500 rounded-tl-xl" rowSpan={2}>
                    Category
                  </th>
                  <th colSpan={2} className="bg-gradient-to-b from-blue-900 to-blue-950 text-white p-4 text-center border-r border-blue-500">
                    <div className="font-bold text-lg md:text-xl">Early Bird</div>
                    <div className="text-blue-100 text-sm md:text-base font-medium mt-1">(On or before <span className="line-through text-red-500 mr-2">17.06.2026</span> 20.06.2026)</div>
                  </th>
                  <th colSpan={2} className="bg-gradient-to-b from-blue-900 to-blue-950 text-white p-4 text-center border border-blue-500">
                    <div className="font-bold text-lg md:text-xl">Regular</div>
                    <div className="text-blue-100 text-sm md:text-base font-medium mt-1"><RegularDeadline /></div>
                  </th>
                </tr>
                <tr className="bg-gradient-to-b from-blue-800 to-blue-900">
                  <th className="text-white p-4 text-center font-semibold border-r border-blue-500 text-base">
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-3 h-3 bg-blue-300 rounded-full"></span>
                      IEEE Member
                    </span>
                  </th>
                  <th className="text-white p-4 text-center font-semibold border-r border-blue-500 text-base">
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                      Non-IEEE Member
                    </span>
                  </th>
                  <th className="text-white p-4 text-center font-semibold border-r border-blue-500 text-base">
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-3 h-3 bg-blue-300 rounded-full"></span>
                      IEEE Member
                    </span>
                  </th>
                  <th className="text-white p-4 text-center font-semibold border-r border-blue-500 text-base">
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                      Non-IEEE Member
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {foreignTableData.slice(1).map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={`${rowIndex % 2 === 0 ? "bg-white" : "bg-blue-50"}`}
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className={`p-4 border border-blue-500 ${
                          cellIndex === 0 ? "font-bold text-blue-900 pl-6 text-base" : "text-gray-800 text-center font-semibold text-base"
                        }`}
                      >
                        {cellIndex === 0 ? (
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            {cell}
                          </div>
                        ) : (
                          <span className={`inline-block px-3 py-1.5 rounded-lg font-bold ${
                            cellIndex % 2 === 1 ? "bg-blue-100 text-blue-800 border border-blue-200" : "bg-blue-50 text-blue-900 border border-blue-100"
                          }`}>
                            ${cell}
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile View for Foreign Authors */}
        <div className="lg:hidden">
          {foreignTableData.slice(1).map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: rowIndex * 0.1 }}
              className={`border-t border-blue-300 first:border-t-0 ${rowIndex % 2 === 0 ? "bg-white" : "bg-blue-50"}`}
            >
              <div className="bg-gradient-to-r from-blue-700 to-blue-800 p-4 border-b border-blue-500">
                <h3 className="font-bold text-white text-xl flex items-center">
                  <span className="w-3 h-3 bg-white rounded-full mr-3"></span>
                  {row[0]}
                </h3>
              </div>
              <div className="p-4">
                <div className="mb-4">
                  <div className="bg-gradient-to-r from-blue-900 to-blue-950 p-3 rounded-t-lg border border-blue-500 border-b-0">
                    <h4 className="font-bold text-white text-lg text-center">Early Bird</h4>
                    <p className="text-blue-200 text-xs text-center mt-0.5">On or before <span className="line-through text-red-500 mr-2">17.06.2026</span> 20.06.2026</p>
                  </div>
                  <div className="grid grid-cols-2 gap-0 border border-blue-500 rounded-b-lg overflow-hidden">
                    <div className="bg-gradient-to-b from-blue-800 to-blue-900 p-4 border-r border-blue-500">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="w-3 h-3 bg-blue-300 rounded-full"></span>
                        <span className="text-white font-semibold">IEEE Member</span>
                      </div>
                      <div className="text-2xl font-bold text-white text-center">${row[1]}</div>
                    </div>
                    <div className="bg-gradient-to-b from-blue-700 to-blue-800 p-4">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                        <span className="text-white font-semibold">Non-IEEE Member</span>
                      </div>
                      <div className="text-2xl font-bold text-white text-center">${row[2]}</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-gradient-to-r from-blue-900 to-blue-950 p-3 rounded-t-lg border border-blue-500 border-b-0">
                    <h4 className="font-bold text-white text-lg text-center">Regular</h4>
                    <p className="text-blue-200 text-xs text-center mt-0.5"><RegularDeadline /></p>
                  </div>
                  <div className="grid grid-cols-2 gap-0 border border-blue-500 rounded-b-lg overflow-hidden">
                    <div className="bg-gradient-to-b from-blue-800 to-blue-900 p-4 border-r border-blue-500">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="w-3 h-3 bg-blue-300 rounded-full"></span>
                        <span className="text-white font-semibold">IEEE Member</span>
                      </div>
                      <div className="text-2xl font-bold text-white text-center">${row[3]}</div>
                    </div>
                    <div className="bg-gradient-to-b from-blue-700 to-blue-800 p-4">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                        <span className="text-white font-semibold">Non-IEEE Member</span>
                      </div>
                      <div className="text-2xl font-bold text-white text-center">${row[4]}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <RegistrationCalculator />
      <PaymentRegistration
        googleFormLink="https://forms.gle/JNV1r8Sf2e8fPRpC6"
        qrCodeImageUrl="/path-to-your-qr-code_page-0001.jpg"/>
    </div>
  );
}
