"use client";
import Link from "next/link";
import { Menu, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "../components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "../components/ui/sheet";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { 
    name: "About", 
    href: "/about",
  },
  { 
    name: "Committee", 
    href: "/committee",
    dropdown: [
      { name: "Organizing Committee", href: "/organizing" },
      { name: "Technical Committee", href: "/technical" },
      { name: "Advisory Committee", href: "/advisory" },
    ]
  },
  {
    name: "Author's Information",
    href: "/authors",
    dropdown:[
      { name: "Call for Papers", href: "/INSTCon_Flyer2.pdf" },
      { name: "Submit Paper", href: "/submitPaper" },
      {name:"Registration Details",href:"/updatedsoon"}
    ]
  },
  {name:"Tracks",href:"/track-chairs"},
  { name: "Keynote", href: "/updatedsoon" },
  { name: "Events", href: "/updatedsoon" },,
  { name: "Sponsors", href: "/Sponsorship" },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRefs = useRef({});
  const router = useRouter();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedOutside = Object.values(dropdownRefs.current).every(
        ref => !ref || !(ref as Node).contains(event.target)
      );
      
      if (clickedOutside) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [activeDropdown]);

  const toggleDropdown = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const handleDropdownItemClick = () => {
    setActiveDropdown(null);
  };

  return (
    <nav 
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50' 
          : 'bg-white/70 backdrop-blur-md border-b border-gray-200/30'
      }`}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-transparent to-purple-50/30 pointer-events-none"></div>
      
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Extreme Left */}
          <div className="flex-shrink-0 mr-8">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                {/* Logo Container */}
                <div className="flex items-center justify-center">
                  <div className="relative h-12 w-auto transition-all duration-300 group-hover:scale-105">
                    <Image
                      src="/IEEE_Instcon-removebg-preview (1).png"
                      alt="IEEE INSTCon 2026 Logo"
                      width={70}
                      height={50}
                      className="object-cover"
                      priority
                    />
                    
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Center Navigation - Desktop */}
          <div className="hidden lg:flex items-center justify-center flex-1 space-x-10 lg:space-x-3">
            {navigation.map((item) => (
              item.dropdown ? (
                <div
                  key={item.name}
                  className="relative"
                  ref={(el) => { dropdownRefs.current[item.name] = el; }}
                >
                  <button 
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105 focus:outline-none group px-2 py-1"
                  >
                    <span className="relative">
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                    </span>
                    {activeDropdown === item.name ? (
                      <ChevronUp className="ml-1 h-4 w-4 transition-transform duration-200 text-blue-600" />
                    ) : (
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200" />
                    )}
                  </button>
                  
                  {activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-xl shadow-2xl z-50 animate-in fade-in-0 zoom-in-95 duration-200 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 pointer-events-none"></div>
                      <div className="py-2 relative">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 transition-all duration-200"
                            onClick={handleDropdownItemClick}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105 group px-2 py-1"
                >
                  <span className="relative">
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              )
            ))}
          </div>

          {/* Register Button - Desktop */}
          <div className="hidden lg:flex ml-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <Button
              onClick={()=>{router.push("/submitPaper")}}  className="relative bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-800/50 px-6">
                Register Now
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
<div className="lg:hidden flex items-center">
  <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
    <SheetTrigger asChild>
      <Button variant="ghost" size="icon" className="hover:bg-blue-50/50 transition-colors">
        <Menu className="h-6 w-6 text-gray-700" />
      </Button>
    </SheetTrigger>
    <SheetContent
      side="right"
      className="w-[300px] bg-white/95 backdrop-blur-xl border-l border-gray-200/50 flex flex-col justify-between"
    >
      {/* Add SheetTitle for accessibility - visually hidden but available for screen readers */}
      <SheetTitle className="sr-only">
        IEEE INSTCon 2026 Navigation Menu
      </SheetTitle>
      
      {/* Gradient overlay for mobile menu */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 pointer-events-none"></div>
      
      <nav className="flex flex-col gap-4 mt-6 relative z-10">
        {navigation.map((item) => (
          item.dropdown ? (
            <div key={item.name} className="space-y-2">
              <div className="text-lg font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                {item.name}
              </div>
              <div className="pl-4 space-y-2 border-l-2 border-blue-200">
                {item.dropdown.map((subItem) => (
                  <Link
                    key={subItem.name}
                    href={subItem.href}
                    className="block text-sm text-gray-600 hover:text-blue-600 transition-colors py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={item.name}
              href={item.href}
              className="text-lg font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent hover:from-blue-600 hover:to-purple-600 transition-all duration-300 py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          )
        ))}
      </nav>

      {/* Register Button inside sidebar */}
      <div className="mb-6 relative z-10">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
          <Button 
            className="relative w-full bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-800/50"
            onClick={() => {router.push("/submitPaper")}}
          >
            Register Now
          </Button>
        </div>
      </div>
    </SheetContent>
  </Sheet>
</div>
        </div>
      </div>
    </nav>
  );
}