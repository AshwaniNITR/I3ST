"use client";
import React, { useState, useEffect } from "react";
import { Megaphone } from "lucide-react";

// Simple Carousel Component (unchanged)
const SimpleCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}
    </div>
  );
};

// --- Registration Fee Calculator ---
const fees = {
  indian: {
    student:  { early: { ieee: 7500,  nonIeee: 8500  }, regular: { ieee: 8000,  nonIeee: 9000  } },
    academia: { early: { ieee: 10000, nonIeee: 11000 }, regular: { ieee: 11000, nonIeee: 12000 } },
    industry: { early: { ieee: 15000, nonIeee: 16000 }, regular: { ieee: 16000, nonIeee: 17000 } },
  },
  foreign: {
    student:  { early: { ieee: 250, nonIeee: 350 }, regular: { ieee: 300, nonIeee: 400 } },
    academia: { early: { ieee: 400, nonIeee: 450 }, regular: { ieee: 450, nonIeee: 500 } },
    industry: { early: { ieee: 500, nonIeee: 550 }, regular: { ieee: 550, nonIeee: 600 } },
  },
};

const EARLY_BIRD_CUTOFF = new Date("2026-06-17");

// Papers fee logic:
// Paper 1 (odd) → base, Paper 2 (even) → base*0.6,
// Paper 3 (odd) → base, Paper 4 (even) → base*0.6, ...
// Total = sum of all papers
function calcPapersFee(base, numPapers) {
  let total = 0;
  for (let i = 1; i <= numPapers; i++) {
    total += i % 2 === 0 ? base * 0.6 : base;
  }
  return Math.round(total);
}

// Pages surcharge: 6 → +0, 7 → +1000, 8 → +2000
const PAGE_SURCHARGE = { 6: 0, 7: 1000, 8: 2000 };

const RegistrationCalculator = () => {
  const [authorType, setAuthorType] = useState("indian");
  const [membership, setMembership] = useState("nonIeee");
  const [category, setCategory] = useState("student");
  const [regDate, setRegDate] = useState("");
  const [numPapers, setNumPapers] = useState(1);
  const [numPages, setNumPages] = useState(6);

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
  const pageSurcharge = baseAmount ? PAGE_SURCHARGE[numPages] : null;
  const totalAmount = baseAmount ? papersSubtotal + pageSurcharge : null;

  const currency = authorType === "indian" ? "₹" : "$";

  const radioBase =
    "flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border cursor-pointer text-base font-medium transition-all duration-200 select-none lg:text-lg lg:py-3.5";
  const radioActive = "bg-blue-50 border-blue-400 text-blue-700";
  const radioInactive = "bg-white border-gray-200 text-gray-500 hover:border-gray-300";

  return (
    <div className=" border-t border-gray-100 pt-8 lg:pt-10">
      <p className="text-center text-xl font-bold text-gray-800 mb-2 lg:text-2xl">
        Calculate your registration amount
      </p>
      <p className="text-center text-base text-gray-500 mb-6 lg:text-lg">
        Fill in the details below to get your fee estimate
      </p>

      <div className="space-y-6 lg:space-y-8">
        {/* Author Type */}
        <div>
          <p className="text-base text-gray-500 mb-2 font-medium lg:text-lg">Author type</p>
          <div className="flex gap-3">
            {[
              { value: "indian", label: "Indian author" },
              { value: "foreign", label: "Foreign author" },
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
          <p className="text-base text-gray-500 mb-2 font-medium lg:text-lg">Registration date</p>
          <input
            type="date"
            value={regDate}
            onChange={(e) => setRegDate(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all lg:text-lg lg:py-3.5"
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
          <p className="text-base text-gray-500 mb-2 font-medium lg:text-lg">Category</p>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 transition-all bg-white lg:text-lg lg:py-3.5"
          >
            <option value="student">Student (UG / PG / Ph.D)</option>
            <option value="academia">Academia / R&D organization</option>
            <option value="industry">Industry professional</option>
          </select>
        </div>

        {/* Membership */}
        <div>
          <p className="text-base text-gray-500 mb-2 font-medium lg:text-lg">Membership</p>
          <div className="flex gap-3">
            {[
              { value: "ieee", label: "IEEE member" },
              { value: "nonIeee", label: "Non-IEEE member" },
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
            <div className="border-t border-gray-100 pt-6 lg:pt-8">
              <p className="text-base text-gray-500 mb-1 font-medium lg:text-lg">Number of papers</p>
              <p className="text-base text-gray-400 mb-3 lg:text-lg">
                2nd, 4th… papers are charged at 60% of the base fee.
              </p>
              <div className="flex items-center gap-5">
                <button
                  onClick={() => setNumPapers((p) => Math.max(1, p - 1))}
                  className="w-11 h-11 rounded-xl border border-gray-200 bg-white text-gray-600 font-bold text-xl flex items-center justify-center hover:border-blue-300 hover:text-blue-600 transition-all lg:w-12 lg:h-12 lg:text-2xl"
                >
                  −
                </button>
                <span className="text-3xl font-black text-gray-800 w-10 text-center lg:text-4xl lg:w-12">{numPapers}</span>
                <button
                  onClick={() => setNumPapers((p) => Math.min(10, p + 1))}
                  className="w-11 h-11 rounded-xl border border-gray-200 bg-white text-gray-600 font-bold text-xl flex items-center justify-center hover:border-blue-300 hover:text-blue-600 transition-all lg:w-12 lg:h-12 lg:text-2xl"
                >
                  +
                </button>
                <span className="text-base text-gray-400 ml-2 lg:text-lg">
                  {numPapers === 1 ? "paper" : "papers"}
                </span>
              </div>

              {/* Per-paper breakdown */}
              {numPapers > 1 && (
                <div className="mt-4 space-y-2 lg:mt-5 lg:space-y-2.5">
                  {paperBreakdown.map(({ paperNum, fee }) => (
                    <div key={paperNum} className="flex justify-between items-center text-base px-4 py-2 rounded-lg bg-gray-50 border border-gray-100 lg:text-lg lg:px-5 lg:py-2.5">
                      <span className="text-gray-500">
                        Paper {paperNum}
                        {paperNum % 2 === 0 && (
                          <span className="ml-2 text-purple-500 font-medium lg:ml-2.5">
                            (60% rate)
                          </span>
                        )}
                      </span>
                      <span className="font-semibold text-gray-700 lg:text-lg">
                        {currency}{fee.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Number of Pages */}
            <div>
              <p className="text-base text-gray-500 mb-1 font-medium lg:text-lg">Number of pages</p>
              <p className="text-base text-gray-400 mb-3 lg:text-lg">
                Pages beyond 6 incur an additional charge of {currency}1,000 per extra page.
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
                  + {currency}{PAGE_SURCHARGE[numPages].toLocaleString()} extra page charge
                </p>
              )}
            </div>
          </>
        )}
      </div>

      {/* Result */}
      {totalAmount !== null ? (
        <>
          <div className="mt-6 bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 rounded-2xl px-6 py-6 lg:mt-8 lg:px-8 lg:py-7">
            <p className="text-base text-gray-500 mb-4 font-medium text-center lg:text-lg lg:mb-5">
              {isEarly ? "Early bird" : "Regular"} fee breakdown
            </p>

            {/* Breakdown rows */}
            <div className="space-y-3 mb-5 lg:space-y-4 lg:mb-6">
              <div className="flex justify-between text-base lg:text-lg">
                <span className="text-gray-500">
                  Base fee × {numPapers} {numPapers === 1 ? "paper" : "papers"}
                </span>
                <span className="font-semibold text-gray-700 lg:text-lg">
                  {currency}{papersSubtotal.toLocaleString()}
                </span>
              </div>
              {pageSurcharge > 0 && (
                <div className="flex justify-between text-base lg:text-lg">
                  <span className="text-gray-500">Extra page charge ({numPages} pages)</span>
                  <span className="font-semibold text-gray-700 lg:text-lg">
                    + {currency}{pageSurcharge.toLocaleString()}
                  </span>
                </div>
              )}
              <div className="border-t border-blue-100 pt-3 flex justify-between items-baseline lg:pt-4">
                <span className="text-lg font-bold text-gray-700 lg:text-xl">Total</span>
                <span className="text-4xl font-black bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent lg:text-5xl">
                  {currency}{totalAmount.toLocaleString()}
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-400 text-center lg:text-base">
              {authorType === "indian"
                ? "Amount in INR. GST or other taxes may apply."
                : "Amount in USD. Taxes may apply."}
            </p>
          </div>

         
        </>
      ) : (
        <p className="text-center text-base text-gray-400 mt-6 lg:text-lg lg:mt-8">
          Select a registration date to see your fee
        </p>
      )}
    </div>
  );
};

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const announcements = [
    {
      title: "⏳ Deadline Approaching!",
      description: "Submit your papers before the deadline: MARCH 31, 2026.",
    },
    {
      title: "Travel Grants",
      description:
        "Limited Travel Grants will be awarded to the selected student presenters.",
    },
    {
      title: "Best Paper Award in Each Track",
      description: "One best paper award in each track",
    },
    {
      title: "Journal Publication Opportunity",
      description:
        "Authors of papers accepted and presented at INSTCon 2026 may submit technically extended versions of their work to IEEE Transactions on Instrumentation and Measurement (TIM) and IEEE Open Journal of Instrumentation and Measurement (OJIM), in accordance with the journals' policies for extended versions of conference papers (https://ieee-ims.org/publication/ieee-tim/information-authors, https://ieee-ims.org/publication/ieee-ojim/author-information). All such submissions will be handled as regular journal submissions and will undergo the standard peer-review process.",
    },
  ];

  const [animationStates, setAnimationStates] = useState({
    desktopLayout: false,
    carousel: false,
    content: false,
    logo: false,
    text: false,
    dateBadge: false,
    locationSection: false,
    bottomImages: [] as boolean[],
    announcementsSection: false,
    submissionSection: false,
  });

  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const targetTime = new Date("2026-03-31T23:59:00");
  const isDeadlinePassed = now >= targetTime;
  if (isDeadlinePassed) {
    announcements[0].title = "Notification of Acceptance Sent!";
    announcements[0].description =
      "The decisions of the manuscripts have been communicated to the Primary Authors through email notifications. The authors whose papers got ACCEPTED can check their review comments in the CMT portal and are suggested to address the queries in the Camera Ready version of the manuscript. The review comments of the REJECTED papers have also been made available in CMT portal for further improvement of the work. Some papers are DESK REJECTED due to either inadequate technical novelty, AI content or Plagiarism or being submitted in an inappropriate format";
  }

  const images = [
    "/nitfrontgate3.jpg",
    "/nitmainbuilding2.jpg",
    "/la1.jpg",
    "/ecdeptNew.jpeg",
  ];

  const bottomImages = [
    "/ieeekolk-removebg-preview.png",
    "/WomenInEng-removebg-preview.png",
    "/ieeerklsub-removebg-preview.png",
    "https://res.cloudinary.com/dd11bvhdi/image/upload/v1741620262/logo_I3ST_camy9q.jpg",
  ];

  useEffect(() => {
    const hasSeen = localStorage.getItem("seenPopup");
    if (!hasSeen) {
      const timer = setTimeout(() => {
        setShowModal(true);
        localStorage.setItem("seenPopup", "true");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => setAnimationStates((p) => ({ ...p, desktopLayout: true })), 100);
    setTimeout(() => setAnimationStates((p) => ({ ...p, carousel: true })), 200);
    setTimeout(() => setAnimationStates((p) => ({ ...p, content: true })), 300);
    setTimeout(() => setAnimationStates((p) => ({ ...p, logo: true })), 400);
    setTimeout(() => setAnimationStates((p) => ({ ...p, text: true })), 500);
    setTimeout(() => setAnimationStates((p) => ({ ...p, dateBadge: true })), 600);
    setTimeout(() => setAnimationStates((p) => ({ ...p, locationSection: true })), 700);
    bottomImages.forEach((_, index) => {
      setTimeout(() => {
        setAnimationStates((prev) => {
          const newImages = [...prev.bottomImages];
          newImages[index] = true;
          return { ...prev, bottomImages: newImages };
        });
      }, 800 + index * 120);
    });
    setTimeout(
      () => setAnimationStates((p) => ({ ...p, announcementsSection: true })),
      800 + bottomImages.length * 120 + 50
    );
    setTimeout(
      () => setAnimationStates((p) => ({ ...p, submissionSection: true })),
      800 + bottomImages.length * 120 + 150
    );
  }, []);

  return (
    <div id="home" className="relative overflow-hidden">
      {/* Desktop Layout */}
      <div
        className={`hidden xl:block transition-all duration-700 ease-out ${
          animationStates.desktopLayout ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex h-[700px]">
          {/* Left - Carousel */}
          <section
            className={`w-[65%] h-full transition-all duration-700 ease-out ${
              animationStates.carousel
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <SimpleCarousel images={images} />
          </section>

          {/* Right - Content */}
          <section
            className={`relative w-[35%] h-full bg-gradient-to-br transition-all duration-700 ease-out ${
              animationStates.content
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl animate-pulse"></div>
              <div
                className="absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>

            <div className="flex flex-col justify-start items-center w-full h-full pt-16 pb-2 relative z-10">
              <div
                className={`flex justify-center items-center w-full mb-0 transition-all duration-500 ease-out ${
                  animationStates.logo ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
              >
                <div className="relative w-64 h-44 rounded-2xl overflow-hidden">
                  <img
                    src="/IEEE_Instcon-removebg-preview (1).png"
                    alt="NIT Rourkela Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div
                className={`text-center w-full px-6 space-y-2 transition-all duration-500 ease-out ${
                  animationStates.text
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
              >
                <div className="space-y-2">
                  <p className="text-xl lg:text-2xl text-blue-900 font-extrabold leading-tight tracking-tight">
                    1st IEEE International Conference on Instrumentation
                  </p>
                  <h4 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent leading-none animate-fade-in">
                    INSTCon 2026
                  </h4>
                </div>

                <div
                  className={`inline-block relative group mt-2 transition-all duration-500 ease-out delay-100 ${
                    animationStates.dateBadge
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                >
                  <div className="relative bg-gradient-to-r backdrop-blur-sm px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <div className="flex items-center justify-center gap-3">
                      <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-black text-xl bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent tracking-wider">
                        JULY 24-25, 2026
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className={`relative group mt-8 transition-all duration-500 ease-out delay-200 ${
                    animationStates.locationSection
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                >
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-32 h-32 rounded-full p-2">
                      <img src="/nitlogo-removebg-preview.png" alt="NIT Rourkela Logo" className="w-full h-full object-contain" />
                    </div>
                  </div>
                  <div className="pt-20 pb-4 px-6 bg-gradient-to-br rounded-2xl">
                    <div className="flex flex-row items-start justify-between max-w-md mx-auto">
                      <div className="flex items-start flex-1">
                        <div className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl flex items-center justify-center shadow-lg">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div className="text-center flex-1">
                          <p className="font-extrabold text-gray-900 text-lg mb-1 leading-tight tracking-tight">
                            Department of Electronics and Communication Engineering
                          </p>
                          <p className="font-bold text-gray-700 leading-relaxed">
                            National Institute of Technology, Rourkela
                            <br />
                            Rourkela, Odisha, India - 769008
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Bottom logos */}
        <div className="w-full bg-gradient-to-br py-8">
          <div className="w-full px-12">
            <div className="flex justify-center items-center gap-8 w-full">
              {bottomImages.map((src, index) => (
                <div
                  key={index}
                  className={`relative group flex-1 transition-all duration-500 ease-out ${
                    animationStates.bottomImages[index]
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-8 scale-95"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden flex justify-center items-center h-36">
                    <img
                      src={src}
                      alt={`Partner ${index + 1}`}
                      className="h-full w-auto object-contain max-h-28 transition-all duration-300 group-hover:scale-110"
                      style={{ maxWidth: "100%", objectFit: "contain" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Announcements + Registration Section */}
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row w-full py-8 items-start gap-6 lg:gap-10">

            {/* Announcements */}
            <div
              className={`relative bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 rounded-2xl p-6 shadow-lg sm:max-w-lg sm:mx-auto sm:p-8 h-[750px] flex flex-col transition-all duration-700 ease-out ${
                animationStates.announcementsSection
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="text-center mb-6 sm:mb-8 flex items-center justify-center gap-2">
                <span className="text-red-500 animate-bounce text-xl">
                  <Megaphone size={30} />
                </span>
                <h3 className="text-2xl font-black bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent sm:text-3xl">
                  Announcements
                </h3>
              </div>

              <div className="overflow-hidden relative flex-1">
                <div className="animate-scroll flex flex-col space-y-4 sm:space-y-6">
                  {[...announcements, ...announcements].map((item, index) => {
                    const isJournal = item.title.toLowerCase().includes("journal");
                    const isDeadline = item.title.toLowerCase().includes("deadline");

                    return (
                      <div
                        key={index}
                        className={`p-4 rounded-xl border transition-all duration-300
                          ${isJournal ? "bg-yellow-100 border-yellow-400 shadow-md animate-glow" : "bg-white/70 border-blue-100 shadow-sm"}
                          ${isDeadline ? "border-red-500 bg-red-100 shadow-lg animate-pulse" : ""}`}
                      >
                        <h4
                          className={`text-lg font-bold sm:text-xl flex items-center gap-2 justify-center
                            ${isJournal ? "text-yellow-800" : "text-blue-700"}`}
                        >
                          {isJournal && <span className="text-red-500 animate-bounce text-lg">🚨</span>}
                          {!isJournal && (
                            <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-semibold bg-red-500 text-white rounded-full shadow-sm animate-bounce">
                              New
                            </span>
                          )}
                          {item.title}
                        </h4>

                        {!isDeadline ? (
                          <p className={`mt-1 justify-center text-sm sm:text-base text-center ${isJournal ? "text-yellow-900 font-semibold" : "text-gray-700"}`}>
                            {item.description}
                          </p>
                        ) : (
                          <div className="mt-1 text-sm sm:text-base text-center">
                            {!isDeadlinePassed ? (
                              <>
                                <p>Submit your papers before the deadline:</p>
                                <p className="text-red-600 font-extrabold text-md sm:text-xl">March 31, 2026</p>
                              </>
                            ) : (
                              <>
                                <p>Submit your papers before the deadline:</p>
                                <p className="text-red-600 line-through font-extrabold text-md sm:text-xl">March 31, 2026</p>
                                <p className="text-green-600 font-extrabold text-md sm:text-xl">
                                  April 10, 2026{" "}
                                  <span className="text-red-500 font-extrabold">(Hard Deadline)</span>
                                </p>
                              </>
                            )}
                          </div>
                        )}

                        {isJournal && (
                          <div className="mt-2 flex flex-row gap-4 justify-center">
                            <button className="text-xs font-bold px-2 py-1 bg-red-500 text-white rounded">
                              <a href="https://ieee-ims.org/publication/ieee-tim/information-authors" target="_blank" rel="noopener noreferrer">IEEE TIM</a>
                            </button>
                            <button className="text-xs font-bold px-2 py-1 bg-red-500 text-white rounded">
                              <a href="https://ieee-ims.org/publication/ieee-ojim/author-information" target="_blank" rel="noopener noreferrer">IEEE OJIM</a>
                            </button>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Registration Section — now taller to fit calculator */}
            <div
              className={`relative overflow-hidden rounded-2xl mx-auto max-w-4xl flex-1 flex flex-col transition-all duration-700 ease-out ${
                animationStates.submissionSection
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-10"></div>
              <div className="relative bg-gradient-to-br backdrop-blur-lg border-2 border-transparent bg-clip-padding rounded-2xl p-1 shadow-xl h-full">
                <div className="relative bg-gradient-to-r from-blue-50 via-white to-purple-50 rounded-xl p-8">

                  {/* Header */}
                  <div className="space-y-2 mb-4 text-center">
                    <h3 className="text-4xl font-black bg-gradient-to-r from-blue-700 via-purple-700 to-blue-700 bg-clip-text text-transparent">
                      Registration is Now Open!
                    </h3>
                    <p className="text-gray-600 font-semibold text-lg">
                      To view the registration guidelines, click{" "}
                      <a href="/RegDet" className="text-blue-600 hover:text-blue-800 font-extrabold underline">
                        Here
                      </a>
                    </p>
                  </div>

                  {/* Calculator */}
                  <RegistrationCalculator />
                   <div className="mt-5 text-center">
            <p className="text-sm text-gray-600 mb-3 font-medium">
              Ready to register? Fill in the Google Form below to complete your registration.
            </p>
            <a
              href="https://forms.gle/JNV1r8Sf2e8fPRpC6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-base px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Fill Registration Form
            </a>
          </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Nest Hub Layout (1024x600) */}
      <div className="hidden lg:block xl:hidden">
        <div className="h-[600px] flex flex-col">
          <div className="flex flex-1 min-h-0">
            <div className="w-[95%] h-full">
              <SimpleCarousel images={images} />
            </div>
            <section className="relative w-[45%] h-full">
              <div className="flex flex-col items-center justify-center w-full h-full px-2 pt-10">
                <div className="mb-2 flex justify-center">
                  <div className="w-44 h-28">
                    <img src="/IEEE_Instcon-removebg-preview (1).png" alt="IEEE Logo" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div className="text-center w-full px-1 space-y-1">
                  <p className="text-xs font-bold text-blue-900 leading-tight mb-1 text-center">
                    1st IEEE International Conference on Instrumentation
                  </p>
                  <h4 className="text-2xl font-black bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent mb-2 text-center">
                    INSTCon 2026
                  </h4>
                  <div className="flex justify-center mb-2">
                    <div className="relative px-3 py-1 rounded-lg inline-block">
                      <div className="flex items-center justify-center gap-1">
                        <svg className="w-3 h-3 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="font-bold text-xs bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                          JULY 24-25, 2026
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="relative mt-2 flex justify-center">
                    <div className="flex flex-col items-center max-w-[90%]">
                      <div className="mb-1 flex justify-center">
                        <div className="w-20 h-20">
                          <img src="/nitlogo-removebg-preview.png" alt="NIT Logo" className="w-full h-full object-contain" />
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-gray-900 text-[12px] leading-tight mb-0.5">
                          Dept. of Electronics & Communication Engg.
                        </p>
                        <p className="text-[10px] font-bold text-gray-700 leading-tight">
                          National Institute of Technology, Rourkela
                          <br />Rourkela, Odisha, India - 769008
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="h-16 bg-gradient-to-br py-1">
            <div className="w-full px-2 h-full flex items-center justify-center">
              <div className="grid grid-cols-4 gap-2 h-full w-full max-w-[95%]">
                {bottomImages.map((src, index) => (
                  <div key={index} className="relative flex justify-center items-center h-full">
                    <img src={src} alt={`Partner ${index + 1}`} className="h-full w-auto object-contain max-h-16" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="px-2 py-1 flex justify-center">
            <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-2 w-full max-w-[95%]">
              <div className="text-center mb-1">
                <h3 className="text-xs font-black bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent mb-0.5">
                  Registration is Now Open!
                </h3>
                <p className="text-gray-700 font-semibold text-[10px]">
                  View the registration guidelines and calculate your fee below.
                </p>
              </div>
              <div className="space-y-1">
                <a href="/announcements" className="block w-full border border-blue-600 text-blue-600 font-bold py-1 px-2 rounded text-center text-[10px]">
                  View Announcements
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden relative">
        <div className="relative h-screen">
          <div className="absolute inset-0">
            <SimpleCarousel images={images} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-transparent"></div>
          <div className="relative z-10 h-full flex flex-col justify-end px-5 pb-6 space-y-5 pt-16 sm:justify-center sm:pt-20 sm:pb-20 sm:space-y-6">
            <div className="text-center backdrop-blur-sm bg-white/20 rounded-lg space-y-3 sm:space-y-4 sm:px-4 sm:py-3">
              <p className="text-md sm:text-lg md:text-xl font-bold text-white/95 drop-shadow-2xl leading-tight">
                1st IEEE International Conference on Instrumentation
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight drop-shadow-2xl tracking-tight">
                INSTCon 2026
              </h1>
            </div>
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-3 px-5 py-3 bg-white/20 backdrop-blur-lg rounded-xl sm:px-6 sm:py-3">
                <svg className="w-5 h-5 text-white drop-shadow-2xl sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="font-black text-lg sm:text-xl text-white tracking-wider drop-shadow-2xl">
                  JULY 24-25, 2026
                </span>
              </div>
            </div>
            <div className="px-3 backdrop-blur-sm bg-white/20 rounded-lg py-4 sm:px-4 sm:py-4 sm:max-w-md sm:mx-auto">
              <div className="flex items-start gap-3 sm:flex-col sm:items-center sm:gap-4">
                <svg className="w-6 h-6 text-white drop-shadow-2xl flex-shrink-0 mt-1 sm:w-7 sm:h-7 sm:mt-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-left flex-1 sm:text-center sm:w-full">
                  <p className="font-extrabold text-white text-sm mb-1 leading-snug drop-shadow-2xl tracking-tight sm:text-base sm:mb-2 sm:leading-tight">
                    Department of Electronics and Communication Engineering
                  </p>
                  <p className="font-bold text-xs text-white/95 leading-relaxed drop-shadow-2xl sm:text-sm sm:leading-snug">
                    National Institute of Technology, Rourkela
                    <br />Rourkela, Odisha, India - 769008
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 px-3 mt-4 sm:mt-6 sm:gap-4 sm:px-6 sm:max-w-lg sm:mx-auto">
              {bottomImages.map((src, index) => (
                <div key={index} className="relative group">
                  <div className="relative rounded-xl overflow-hidden group-hover:bg-black/90 transition-all duration-300 group-hover:scale-105 h-28 sm:h-36">
                    <img src={src} alt={`Partner ${index + 1}`} className="w-full h-full object-contain p-2 sm:p-3" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Announcements + Registration with Calculator */}
        <div className="w-full flex flex-col px-4 py-8 sm:px-8 sm:py-10 gap-10">
          {/* Announcements */}
          <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 rounded-2xl p-6 shadow-lg sm:max-w-lg sm:mx-auto sm:p-8 h-[450px] flex flex-col">
            <div className="text-center mb-6 sm:mb-8 flex items-center justify-center gap-2">
              <span className="text-red-500 animate-bounce text-xl">
                <Megaphone size={30} />
              </span>
              <h3 className="text-2xl font-black bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent sm:text-3xl">
                Announcements
              </h3>
            </div>
            <div className="overflow-hidden relative flex-1">
              <div className="animate-scroll flex flex-col space-y-4 sm:space-y-6">
                {[...announcements, ...announcements].map((item, index) => {
                  const isJournal = item.title.toLowerCase().includes("journal");
                  const isDeadline = item.title.toLowerCase().includes("deadline");
                  return (
                    <div
                      key={index}
                      className={`p-4 rounded-xl border transition-all duration-300
                        ${isJournal ? "bg-yellow-100 border-yellow-400 shadow-md animate-glow" : "bg-white/70 border-blue-100 shadow-sm"}
                        ${isDeadline ? "border-red-500 bg-red-100 shadow-lg animate-pulse" : ""}`}
                    >
                      <h4 className={`text-md font-bold sm:text-xl flex items-center gap-2 justify-center ${isJournal ? "text-yellow-800" : "text-blue-700"}`}>
                        {isJournal && <span className="text-red-500 animate-bounce text-lg">🚨</span>}
                        {!isJournal && (
                          <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-semibold bg-red-500 text-white rounded-full shadow-sm animate-bounce">
                            New
                          </span>
                        )}
                        {item.title}
                      </h4>
                      {!isDeadline ? (
                        <p className={`mt-1 justify-center text-sm sm:text-base text-center ${isJournal ? "text-yellow-900 font-semibold" : "text-gray-700"}`}>
                          {item.description}
                        </p>
                      ) : (
                        <div className="mt-1 text-sm sm:text-base text-center">
                          {!isDeadlinePassed ? (
                            <>
                              <p>Submit your papers before the deadline:</p>
                              <p className="text-red-600 font-extrabold text-md sm:text-xl">March 31, 2026</p>
                            </>
                          ) : (
                            <>
                              <p>Submit your papers before the deadline:</p>
                              <p className="text-red-600 line-through font-extrabold text-md sm:text-xl">March 31, 2026</p>
                              <p className="text-green-600 font-extrabold text-md sm:text-xl">
                                April 10, 2026{" "}
                                <span className="text-red-500 font-extrabold">(Hard Deadline)</span>
                              </p>
                            </>
                          )}
                        </div>
                      )}
                      {isJournal && (
                        <div className="mt-2 flex flex-row gap-4 justify-center">
                          <button className="text-xs font-bold px-2 py-1 bg-red-500 text-white rounded">
                            <a href="https://ieee-ims.org/publication/ieee-tim/information-authors" target="_blank" rel="noopener noreferrer">IEEE TIM</a>
                          </button>
                          <button className="text-xs font-bold px-2 py-1 bg-red-500 text-white rounded">
                            <a href="https://ieee-ims.org/publication/ieee-ojim/author-information" target="_blank" rel="noopener noreferrer">IEEE OJIM</a>
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Registration + Calculator */}
          <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 rounded-2xl p-6 shadow-lg sm:max-w-lg sm:mx-auto sm:p-8">
            <div className="text-center space-y-2 mb-6 sm:space-y-3 sm:mb-8">
              <h3 className="text-2xl font-black bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent sm:text-3xl">
                Registration is Now Open!
              </h3>
              <p className="text-gray-700 font-semibold text-base sm:text-lg">
                To view the registration guidelines, click{" "}
                <a href="/RegDet" className="text-blue-600 hover:text-blue-800 font-extrabold underline">
                  Here
                </a>
              </p>
            </div>
            <a
              href="/announcements"
              className="group flex items-center justify-center gap-2 w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-xl text-center shadow-sm transition-all duration-300"
            >
              <Megaphone size={20} />
              <span>View Announcements</span>
            </a>
            <RegistrationCalculator />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
      `}</style>
    </div>
  );
};

export default Hero;