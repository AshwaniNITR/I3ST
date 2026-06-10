// RegistrationCalc.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";

// Constants
const EARLY_BIRD_CUTOFF = new Date("2026-06-17");

// Fee structure
const fees = {
  indian: {
    student: {
      early: {
        ieee: 5500,
        nonIeee: 6500,
      },
      regular: {
        ieee: 7000,
        nonIeee: 8000,
      },
    },
    academia: {
      early: {
        ieee: 7500,
        nonIeee: 8500,
      },
      regular: {
        ieee: 9500,
        nonIeee: 10500,
      },
    },
    industry: {
      early: {
        ieee: 9500,
        nonIeee: 10500,
      },
      regular: {
        ieee: 12000,
        nonIeee: 13000,
      },
    },
  },
  foreign: {
    student: {
      early: {
        ieee: 350,
        nonIeee: 450,
      },
      regular: {
        ieee: 450,
        nonIeee: 550,
      },
    },
    academia: {
      early: {
        ieee: 450,
        nonIeee: 550,
      },
      regular: {
        ieee: 600,
        nonIeee: 700,
      },
    },
    industry: {
      early: {
        ieee: 600,
        nonIeee: 700,
      },
      regular: {
        ieee: 750,
        nonIeee: 850,
      },
    },
  },
};

// Helper function to calculate papers fee with 60% discount on even-numbered papers
const calcPapersFee = (baseAmount: number, numPapers: number): number => {
  let total = 0;
  for (let i = 1; i <= numPapers; i++) {
    if (i % 2 === 0) {
      total += Math.round(baseAmount * 0.6);
    } else {
      total += baseAmount;
    }
  }
  return total;
};

// Get page surcharge based on author type
const getPageSurcharge = (pages: number, authorType: string): number => {
  if (pages <= 6) return 0;
  const extraPages = pages - 6;
  const perPageCharge = authorType === "indian" ? 1000 : 50;
  return extraPages * perPageCharge;
};

const RegistrationCalculator: React.FC = () => {
  const [authorType, setAuthorType] = useState<"indian" | "foreign">("indian");
  const [membership, setMembership] = useState<"ieee" | "nonIeee">("nonIeee");
  const [category, setCategory] = useState<"student" | "academia" | "industry">("student");
  const [regDate, setRegDate] = useState<string>("");
  const [numPapers, setNumPapers] = useState<number>(1);
  const [numPages, setNumPages] = useState<number>(6);

  const isEarly = regDate ? new Date(regDate) < EARLY_BIRD_CUTOFF : null;
  const tier = isEarly ? "early" : "regular";
  const baseAmount = regDate ? fees[authorType][category][tier][membership] : null;

  // Per-paper breakdown for display
  const paperBreakdown = baseAmount
    ? Array.from({ length: numPapers }, (_, i) => {
        const paperNum = i + 1;
        const fee = paperNum % 2 === 0 ? Math.round(baseAmount * 0.6) : baseAmount;
        return { paperNum, fee };
      })
    : [];

  const papersSubtotal = baseAmount ? calcPapersFee(baseAmount, numPapers) : null;
  const pageSurcharge = baseAmount ? getPageSurcharge(numPages, authorType) : null;
  const totalAmount = baseAmount ? papersSubtotal! + pageSurcharge! : null;

  const currency = authorType === "indian" ? "₹" : "$";

  const radioBase =
    "flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border cursor-pointer text-base font-medium transition-all duration-200 select-none lg:text-lg lg:py-3.5";
  const radioActive = "bg-blue-100 border-blue-400 text-blue-700";
  const radioInactive = "bg-white border-gray-200 text-gray-500 hover:border-gray-300";

  return (
    <motion.div
      className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl overflow-hidden border border-blue-200 mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
    >
      <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-5">
        <h2 className="text-2xl font-bold text-white text-center">
          Registration Fee Calculator
        </h2>
        <p className="text-blue-200 text-center text-sm mt-1">
          Calculate your registration amount instantly
        </p>
      </div>

      <div className="p-6">
        <div className="space-y-6 lg:space-y-8">
          {/* Author Type */}
          <div>
            <p className="text-base text-gray-700 mb-2 font-semibold lg:text-lg">Author type</p>
            <div className="flex gap-3">
              {[
                { value: "indian" as const, label: "Indian author" },
                { value: "foreign" as const, label: "Foreign author" },
              ].map(({ value, label }) => (
                <label
                  key={value}
                  className={`${radioBase} ${authorType === value ? radioActive : radioInactive}`}
                >
                  <input
                    type="radio"
                    name="authorType"
                    value={value}
                    checked={authorType === value}
                    onChange={() => setAuthorType(value)}
                    className="sr-only"
                  />
                  {label}
                </label>
              ))}
            </div>
          </div>

          {/* Registration Date */}
          <div>
            <p className="text-base text-gray-700 mb-2 font-semibold lg:text-lg">Registration date</p>
            <input
              type="date"
              value={regDate}
              onChange={(e) => setRegDate(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all lg:text-lg lg:py-3.5 bg-white"
            />
            {regDate && (
              <p className={`text-base mt-2 font-medium lg:text-lg ${isEarly ? "text-green-600" : "text-amber-600"}`}>
                {isEarly
                  ? "✓ Early bird rate applies (before 17 Jun 2026)"
                  : "Regular rate applies (17 Jun 2026 or later)"}
              </p>
            )}
          </div>

          {/* Category */}
          <div>
            <p className="text-base text-gray-700 mb-2 font-semibold lg:text-lg">Category</p>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value as typeof category)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all bg-white lg:text-lg lg:py-3.5"
            >
              <option value="student">Student (UG / PG / Ph.D)</option>
              <option value="academia">Academia / R&D organization</option>
              <option value="industry">Industry professional</option>
            </select>
          </div>

          {/* Membership */}
          <div>
            <p className="text-base text-gray-700 mb-2 font-semibold lg:text-lg">Membership</p>
            <div className="flex gap-3">
              {[
                { value: "ieee" as const, label: "IEEE member" },
                { value: "nonIeee" as const, label: "Non-IEEE member" },
              ].map(({ value, label }) => (
                <label
                  key={value}
                  className={`${radioBase} ${membership === value ? radioActive : radioInactive}`}
                >
                  <input
                    type="radio"
                    name="membership"
                    value={value}
                    checked={membership === value}
                    onChange={() => setMembership(value)}
                    className="sr-only"
                  />
                  {label}
                </label>
              ))}
            </div>
          </div>

          {/* Number of Papers — only shown once base is determined */}
          {baseAmount !== null && (
            <>
              <div className="border-t border-blue-200 pt-6 lg:pt-8">
                <p className="text-base text-gray-700 mb-1 font-semibold lg:text-lg">Number of papers</p>
                <p className="text-sm text-gray-500 mb-3 lg:text-base">
                  2nd, 4th… papers are charged at 60% of the base fee.
                </p>
                <div className="flex items-center gap-5">
                  <button
                    onClick={() => setNumPapers((p) => Math.max(1, p - 1))}
                    className="w-11 h-11 rounded-xl border border-gray-200 bg-white text-gray-600 font-bold text-xl flex items-center justify-center hover:border-blue-300 hover:text-blue-600 transition-all lg:w-12 lg:h-12 lg:text-2xl"
                  >
                    −
                  </button>
                  <span className="text-3xl font-black text-gray-800 w-10 text-center lg:text-4xl lg:w-12">
                    {numPapers}
                  </span>
                  <button
                    onClick={() => setNumPapers((p) => Math.min(10, p + 1))}
                    className="w-11 h-11 rounded-xl border border-gray-200 bg-white text-gray-600 font-bold text-xl flex items-center justify-center hover:border-blue-300 hover:text-blue-600 transition-all lg:w-12 lg:h-12 lg:text-2xl"
                  >
                    +
                  </button>
                  <span className="text-base text-gray-500 ml-2 lg:text-lg">
                    {numPapers === 1 ? "paper" : "papers"}
                  </span>
                </div>

                {/* Per-paper breakdown */}
                {numPapers > 1 && (
                  <div className="mt-4 space-y-2 lg:mt-5 lg:space-y-2.5">
                    {paperBreakdown.map(({ paperNum, fee }) => (
                      <div
                        key={paperNum}
                        className="flex justify-between items-center text-base px-4 py-2 rounded-lg bg-white border border-blue-200 lg:text-lg lg:px-5 lg:py-2.5"
                      >
                        <span className="text-gray-600">
                          Paper {paperNum}
                          {paperNum % 2 === 0 && (
                            <span className="ml-2 text-purple-600 font-medium lg:ml-2.5">
                              (60% rate)
                            </span>
                          )}
                        </span>
                        <span className="font-semibold text-blue-700 lg:text-lg">
                          {currency}
                          {fee.toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Number of Pages */}
              <div>
                <p className="text-base text-gray-700 mb-1 font-semibold lg:text-lg">Number of pages</p>
                <p className="text-sm text-gray-500 mb-3 lg:text-base">
                  Pages beyond 6 incur an additional charge of{" "}
                  {authorType === "indian" ? "₹1,000" : "$50"} per extra page.
                </p>
                <div className="flex gap-3">
                  {[6, 7, 8].map((pg) => (
                    <label
                      key={pg}
                      className={`${radioBase} ${numPages === pg ? radioActive : radioInactive}`}
                    >
                      <input
                        type="radio"
                        name="numPages"
                        value={pg}
                        checked={numPages === pg}
                        onChange={() => setNumPages(pg)}
                        className="sr-only"
                      />
                      <span className="font-bold text-base lg:text-lg">{pg}</span>
                      <span className="text-xs opacity-70 lg:text-sm">pages</span>
                    </label>
                  ))}
                </div>
                {numPages > 6 && (
                  <p className="text-base mt-2 text-purple-600 font-medium lg:text-lg lg:mt-2.5">
                    + {currency}
                    {pageSurcharge!.toLocaleString()} extra page charge
                    {numPages - 6 > 1 && ` (${numPages - 6} extra pages)`}
                  </p>
                )}
              </div>
            </>
          )}
        </div>

        {/* Result */}
        {totalAmount !== null ? (
          <motion.div
            className="mt-6 bg-gradient-to-br from-blue-100 to-purple-100 border border-blue-300 rounded-2xl px-6 py-6 lg:mt-8 lg:px-8 lg:py-7"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-base text-gray-700 mb-4 font-semibold text-center lg:text-lg lg:mb-5">
              {isEarly ? "Early bird" : "Regular"} fee breakdown
            </p>

            {/* Breakdown rows */}
            <div className="space-y-3 mb-5 lg:space-y-4 lg:mb-6">
              <div className="flex justify-between text-base lg:text-lg">
                <span className="text-gray-600">
                  Base fee × {numPapers} {numPapers === 1 ? "paper" : "papers"}
                </span>
                <span className="font-semibold text-gray-800 lg:text-lg">
                  {currency}
                  {papersSubtotal!.toLocaleString()}
                </span>
              </div>
              {pageSurcharge! > 0 && (
                <div className="flex justify-between text-base lg:text-lg">
                  <span className="text-gray-600">
                    Extra page charge ({numPages} pages)
                    {numPages - 6 > 0 &&
                      ` (${numPages - 6} extra page${numPages - 6 > 1 ? "s" : ""})`}
                  </span>
                  <span className="font-semibold text-gray-800 lg:text-lg">
                    + {currency}
                    {pageSurcharge!.toLocaleString()}
                  </span>
                </div>
              )}
              <div className="border-t border-blue-300 pt-3 flex justify-between items-baseline lg:pt-4">
                <span className="text-lg font-bold text-gray-800 lg:text-xl">Total</span>
                <span className="text-4xl font-black bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent lg:text-5xl">
                  {currency}
                  {totalAmount.toLocaleString()}
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-500 text-center lg:text-base">
              {authorType === "indian"
                ? "Amount in INR. GST or other taxes may apply."
                : "Amount in USD. Taxes may apply."}
            </p>
          </motion.div>
        ) : (
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-2xl px-6 py-8 text-center lg:mt-8">
            <p className="text-base text-gray-600 lg:text-lg">
              📅 Select a registration date to see your fee
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default RegistrationCalculator;