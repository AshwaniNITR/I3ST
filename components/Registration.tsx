import { motion } from "framer-motion";
import React from "react";

export default function FeesPage() {
  const rows = [
  {
    left: "All registration fees are inclusive of 18% GST",
    right:
      "For more than one accepted paper, a 40% discount will be given on the registration of the 2nd paper only (e.g. for two papers in the student category, registration fees will be ₹12000 (1st Reg. ₹7500 + 2nd Reg. ₹7500×60%) instead of ₹15000).",
    highlightLeft: false,
    highlightRight: true,
  },
  {
    left:
      "Author registration fee includes- Registration Kit, Conference Lunch and Banquet Dinner.",
    right: "Registration fees, once paid, are non-refundable.",
  },
  {
    left:
      "Papers exceeding 6 pages will be charged at ₹1000 (USD 50) per additional page, up to a maximum of 8 pages. Beyond 8 pages, the charge will be ₹4000 (USD 200) per page",
    right:
      "Registration fees for attendees (co-author/non-author/accompanying person) is ₹3500 (without any Registration Kit).",
    highlightLeft: true,
  },
];

  const indianTableData = [
    [
      "Category",
      "IEEE Member",
      "Non-IEEE Member",
      "IEEE Member",
      "Non-IEEE Member",
    ],
    ["Student(UG/PG/Ph.D)", "7500", "8500", "8000", "9000"],
    ["Academia/R&D Organization", "10,000", "11,000", "11,000", "12,000"],
    ["Industry Professionals", "15,000", "16,000", "16,000", "17,000"],
  ];

  const foreignTableData = [
    [
      "Category",
      "IEEE Member",
      "Non-IEEE Member",
      "IEEE Member",
      "Non-IEEE Member",
    ],
    ["Student(UG/PG/Ph.D)", "250", "350", "300", "400"],
    ["Academia/R&D Organization", "400", "450", "450", "500"],
    ["Industry Professionals", "500", "550", "550", "600"],
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8">
      <motion.h2
        className="mt-12 font-extrabold sm:mt-10 text-4xl md:text-5xl text-center  leading-[1.25] pb-[0.15em] bg-gradient-to-r from-[#003366] to-[#0066cc] bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Registration Details
      </motion.h2>
      <div className="w-32 h-2 bg-gradient-to-r from-[#003366] to-[#0066cc] mx-auto mb-8 rounded-full"></div>

      {/* Indian Authors Table */}
      <motion.div
        className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl overflow-hidden mb-12 border border-blue-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-5">
          <h2 className="text-2xl font-bold text-white text-center">
            Indian Author (INR)
          </h2>
          <p className="text-blue-200 text-center text-sm mt-1">
            Registration Fee Details
          </p>
        </div>

        <div className="hidden lg:block p-6">
          <div className="overflow-x-auto rounded-xl border border-blue-200 shadow-inner">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th
                    className="bg-gradient-to-b from-blue-900 to-blue-800 text-white p-5 text-center text-lg font-bold border border-blue-500 rounded-tl-xl"
                    rowSpan={2}
                  >
                    Category
                  </th>
                  <th
                    colSpan={2}
                    className="bg-gradient-to-b from-blue-900 to-blue-950 text-white p-4 text-center border-r border-blue-500"
                  >
                    <div className="font-bold text-lg">Early Bird</div>
                    <div className="text-blue-100 text-sm font-medium mt-1">
                      (On or before 30.06.2025)
                    </div>
                  </th>
                  <th
                    colSpan={2}
                    className="bg-gradient-to-b from-blue-900 to-blue-950 text-white p-4 text-center border border-blue-500"
                  >
                    <div className="font-bold text-lg">Regular</div>
                    <div className="text-blue-100 text-sm font-medium mt-1">
                      (16.06.2026 - 22.06.2026)
                    </div>
                  </th>
                </tr>
                <tr className="bg-gradient-to-b from-blue-800 to-blue-900">
                  <th className="text-white p-4 text-center font-semibold border border-blue-500">
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-3 h-3 bg-blue-300 rounded-full"></span>
                      IEEE Member
                    </span>
                  </th>
                  <th className="text-white p-4 text-center font-semibold border border-blue-500">
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                      Non-IEEE Member
                    </span>
                  </th>
                  <th className="text-white p-4 text-center font-semibold border border-blue-500">
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-3 h-3 bg-blue-300 rounded-full"></span>
                      IEEE Member
                    </span>
                  </th>
                  <th className="text-white p-4 text-center font-semibold border border-blue-500">
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
                    className={`${
                      rowIndex % 2 === 0 ? "bg-white" : "bg-blue-50"
                    } ${rowIndex === indianTableData.length - 2 ? "rounded-b-xl" : ""}`}
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className={`p-4 border border-blue-500 ${
                          cellIndex === 0
                            ? "font-semibold text-blue-900 pl-6"
                            : "text-gray-800 text-center font-medium"
                        }`}
                      >
                        {cellIndex === 0 ? (
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            {cell}
                          </div>
                        ) : (
                          <span
                            className={`inline-block px-3 py-1.5 rounded-lg ${
                              cellIndex % 2 === 1
                                ? "bg-blue-100 text-blue-800 border border-blue-200"
                                : "bg-blue-50 text-blue-900 border border-blue-100"
                            }`}
                          >
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
              className={`
                border-t border-blue-300 first:border-t-0
                ${rowIndex % 2 === 0 ? "bg-white" : "bg-blue-50"}
              `}
            >
              {/* Category Header */}
              <div className="bg-gradient-to-r from-blue-700 to-blue-800 p-3 border-b border-blue-500">
                <h3 className="font-bold text-white text-lg flex items-center">
                  <span className="w-3 h-3 bg-white rounded-full mr-3"></span>
                  {row[0]}
                </h3>
              </div>
              
              <div className="p-4">
                {/* Early Bird Section */}
                <div className="mb-4">
                  <div className="bg-gradient-to-r from-blue-900 to-blue-950 p-2 rounded-t-lg border border-blue-500 border-b-0">
                    <h4 className="font-bold text-white text-center">
                      Early Bird
                    </h4>
                    <p className="text-blue-200 text-xs text-center mt-0.5">
                      On or before 30.06.2025
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-0 border border-blue-500 rounded-b-lg overflow-hidden">
                    <div className="bg-gradient-to-b from-blue-800 to-blue-900 p-3 border-r border-blue-500">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <span className="w-3 h-3 bg-blue-300 rounded-full"></span>
                        <span className="text-white font-medium">IEEE Member</span>
                      </div>
                      <div className="text-2xl font-bold text-white text-center">
                        ₹{row[1]}
                      </div>
                    </div>
                    <div className="bg-gradient-to-b from-blue-700 to-blue-800 p-3">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                        <span className="text-white font-medium">Non-IEEE Member</span>
                      </div>
                      <div className="text-2xl font-bold text-white text-center">
                        ₹{row[2]}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Regular Section */}
                <div>
                  <div className="bg-gradient-to-r from-blue-900 to-blue-950 p-2 rounded-t-lg border border-blue-500 border-b-0">
                    <h4 className="font-bold text-white text-center">
                      Regular
                    </h4>
                    <p className="text-blue-200 text-xs text-center mt-0.5">
                      16.06.2026 - 22.06.2026
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-0 border border-blue-500 rounded-b-lg overflow-hidden">
                    <div className="bg-gradient-to-b from-blue-800 to-blue-900 p-3 border-r border-blue-500">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <span className="w-3 h-3 bg-blue-300 rounded-full"></span>
                        <span className="text-white font-medium">IEEE Member</span>
                      </div>
                      <div className="text-2xl font-bold text-white text-center">
                        ₹{row[3]}
                      </div>
                    </div>
                    <div className="bg-gradient-to-b from-blue-700 to-blue-800 p-3">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                        <span className="text-white font-medium">Non-IEEE Member</span>
                      </div>
                      <div className="text-2xl font-bold text-white text-center">
                        ₹{row[4]}
                      </div>
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
          <h2 className="text-2xl font-bold text-white text-center">
            Foreign Author (USD)
          </h2>
          <p className="text-blue-200 text-center text-sm mt-1">
            Registration Fee Details
          </p>
        </div>

        <div className="hidden lg:block p-6">
          <div className="overflow-x-auto rounded-xl border border-blue-200 shadow-inner">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th
                    className="bg-gradient-to-b from-blue-900 to-blue-800 text-white p-5 text-center text-lg font-bold border border-blue-500 rounded-tl-xl"
                    rowSpan={2}
                  >
                    Category
                  </th>
                  <th
                    colSpan={2}
                    className="bg-gradient-to-b from-blue-900 to-blue-950 text-white p-4 text-center border-r border-blue-500"
                  >
                    <div className="font-bold text-lg">Early Bird</div>
                    <div className="text-blue-100 text-sm font-medium mt-1">
                      (On or before 30.06.2025)
                    </div>
                  </th>
                  <th
                    colSpan={2}
                    className="bg-gradient-to-b from-blue-900 to-blue-950 text-white p-4 text-center border border-blue-500"
                  >
                    <div className="font-bold text-lg">Regular</div>
                    <div className="text-blue-100 text-sm font-medium mt-1">
                      (16.06.2026 - 22.06.2026)
                    </div>
                  </th>
                </tr>
                <tr className="bg-gradient-to-b from-blue-800 to-blue-900">
                  <th className="text-white p-4 text-center font-semibold border-r border-blue-500">
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-3 h-3 bg-blue-300 rounded-full"></span>
                      IEEE Member
                    </span>
                  </th>
                  <th className="text-white p-4 text-center font-semibold border-r border-blue-500">
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                      Non-IEEE Member
                    </span>
                  </th>
                  <th className="text-white p-4 text-center font-semibold border-r border-blue-500">
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-3 h-3 bg-blue-300 rounded-full"></span>
                      IEEE Member
                    </span>
                  </th>
                  <th className="text-white p-4 text-center font-semibold border-r border-blue-500">
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
                    className={`${
                      rowIndex % 2 === 0 ? "bg-white" : "bg-blue-50"
                    } ${rowIndex === foreignTableData.length - 2 ? "rounded-b-xl" : ""}`}
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className={`p-4 border border-blue-500 ${
                          cellIndex === 0
                            ? "font-semibold text-blue-900 pl-6"
                            : "text-gray-800 text-center font-medium"
                        }`}
                      >
                        {cellIndex === 0 ? (
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            {cell}
                          </div>
                        ) : (
                          <span
                            className={`inline-block px-3 py-1.5 rounded-lg ${
                              cellIndex % 2 === 1
                                ? "bg-blue-100 text-blue-800 border border-blue-200"
                                : "bg-blue-50 text-blue-900 border border-blue-100"
                            }`}
                          >
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
              className={`
                border-t border-blue-300 first:border-t-0
                ${rowIndex % 2 === 0 ? "bg-white" : "bg-blue-50"}
              `}
            >
              {/* Category Header */}
              <div className="bg-gradient-to-r from-blue-700 to-blue-800 p-3 border-b border-blue-500">
                <h3 className="font-bold text-white text-lg flex items-center">
                  <span className="w-3 h-3 bg-white rounded-full mr-3"></span>
                  {row[0]}
                </h3>
              </div>
              
              <div className="p-4">
                {/* Early Bird Section */}
                <div className="mb-4">
                  <div className="bg-gradient-to-r from-blue-900 to-blue-950 p-2 rounded-t-lg border border-blue-500 border-b-0">
                    <h4 className="font-bold text-white text-center">
                      Early Bird
                    </h4>
                    <p className="text-blue-200 text-xs text-center mt-0.5">
                      On or before 30.06.2025
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-0 border border-blue-500 rounded-b-lg overflow-hidden">
                    <div className="bg-gradient-to-b from-blue-800 to-blue-900 p-3 border-r border-blue-500">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <span className="w-3 h-3 bg-blue-300 rounded-full"></span>
                        <span className="text-white font-medium">IEEE Member</span>
                      </div>
                      <div className="text-2xl font-bold text-white text-center">
                        ${row[1]}
                      </div>
                    </div>
                    <div className="bg-gradient-to-b from-blue-700 to-blue-800 p-3">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                        <span className="text-white font-medium">Non-IEEE Member</span>
                      </div>
                      <div className="text-2xl font-bold text-white text-center">
                        ${row[2]}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Regular Section */}
                <div>
                  <div className="bg-gradient-to-r from-blue-900 to-blue-950 p-2 rounded-t-lg border border-blue-500 border-b-0">
                    <h4 className="font-bold text-white text-center">
                      Regular
                    </h4>
                    <p className="text-blue-200 text-xs text-center mt-0.5">
                      16.06.2026 - 22.06.2026
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-0 border border-blue-500 rounded-b-lg overflow-hidden">
                    <div className="bg-gradient-to-b from-blue-800 to-blue-900 p-3 border-r border-blue-500">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <span className="w-3 h-3 bg-blue-300 rounded-full"></span>
                        <span className="text-white font-medium">IEEE Member</span>
                      </div>
                      <div className="text-2xl font-bold text-white text-center">
                        ${row[3]}
                      </div>
                    </div>
                    <div className="bg-gradient-to-b from-blue-700 to-blue-800 p-3">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <span className="w-3 h-3 bg-blue-400 rounded-full"></span>
                        <span className="text-white font-medium">Non-IEEE Member</span>
                      </div>
                      <div className="text-2xl font-bold text-white text-center">
                        ${row[4]}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Additional Information Card */}
      <motion.div
        className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl overflow-hidden border border-blue-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-5">
          <h2 className="text-2xl font-bold text-white text-center">
            Additional Information
          </h2>
          <p className="text-blue-200 text-sm mt-1 text-center">
            Important registration guidelines and policies
          </p>
        </div>

      <div className="p-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
    {rows.map((row, index) => (
      <React.Fragment key={index}>
        {/* LEFT CELL */}
        <div className="flex items-start p-3 rounded-lg hover:bg-blue-50 transition">
          <div
            className={`w-6 h-6 aspect-square shrink-0 rounded-full
  flex items-center justify-center mr-3 leading-none ${
              row.highlightLeft ? "bg-red-100" : "bg-blue-100"
            }`}
          >
            <span
              className={`text-sm font-bold leading-none ${
                row.highlightLeft ? "text-red-600" : "text-blue-600"
              }`}
            >
              •
            </span>
          </div>
          <p
            className={`${
              row.highlightLeft
                ? "text-red-600 font-semibold"
                : "text-gray-700"
            }`}
          >
            {row.left}
          </p>
        </div>

        {/* RIGHT CELL */}
        <div className="flex items-start p-3 rounded-lg hover:bg-blue-50 transition">
          <div
            className={`w-6 h-6 aspect-square shrink-0 rounded-full
  flex items-center justify-center mr-3 leading-none ${
              row.highlightRight ? "bg-red-100" : "bg-blue-100"
            }`}
          >
            <span
              className={`text-sm font-bold leading-none ${
                row.highlightRight ? "text-red-600" : "text-blue-600"
              }`}
            >
              •
            </span>
          </div>
          <p
            className={`${
              row.highlightRight
                ? "text-red-600 font-semibold"
                : "text-gray-700"
            }`}
          >
            {row.right}
          </p>
        </div>
      </React.Fragment>
    ))}
  </div>
</div>

      </motion.div>
    </div>
  );
}