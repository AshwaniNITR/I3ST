// "use client";
// import Link from "next/link";
// import { Menu } from "lucide-react";
// import { Button } from "../components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
// //import Image from "next/image";

// const navigation = [
//   { name: "Committee", href: "/" },
//   { name: "Keynote", href: "/" },
//   { name: "Call for Papers", href: "/" },
//   { name: "Paper Submission", href: "/" },
//   { name: "Accepted Papers", href: "/" },
//   { name: "Registration", href: "/" },
//   { name: "PhD Colloquium", href: "/" },
//   { name: "Sponsors", href: "/" },
// ];

// export default function Navbar() {
//   return (
//     <nav className="bg-white border-b border-gray-200 fixed w-full rounded-b-3xl z-50 top-0 left-0">
//       <div className="max-w-full px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0 flex items-center">
//             {/* <Link href="/" className="flex items-center space-x-2 h-full">
//               <Image
//                 src="https://res.cloudinary.com/dd11bvhdi/image/upload/v1741620262/logo_INSTCon_camy9q.jpg"
//                 alt="Logo"
//                 width={0} // will be overridden by style
//                 height={0}
//                 sizes="100vw"
//                 className="max-h-12 w-auto object-contain" // max-h-12 = 48px, adjust as needed
//               />
//             </Link> */}
//             <Link href="/" className="flex items-center space-x-2 h-full">
//               <span className="text-2xl font-bold">
//                 <span className="text-blue-900">IEEE INSTCon</span>{" "}
//                 <span className="text-yellow-500">2026</span>
//               </span>
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-1">
//             {navigation.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="text-gray-600 hover:text-primary px-3 rounded-md text-sm font-medium transition-colors"
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>

//           {/* Mobile Navigation */}
//           <div className="lg:hidden">
//             <Sheet>
//               <SheetTrigger asChild>
//                 <Button variant="ghost" size="icon" className="lg:hidden">
//                   <Menu className="h-6 w-6" />
//                   <span className="sr-only">Open menu</span>
//                 </Button>
//               </SheetTrigger>
//               <SheetContent
//                 side="left"
//                 className="w-[300px] bg-white sm:w-[400px]"
//               >
//                 <nav className="flex flex-col gap-4 mt-6">
//                   {navigation.map((item) => {
//                     return (
//                       <Link
//                         key={item.name}
//                         href={item.href}
//                         className="flex items-center gap-2 text-lg font-medium text-gray-600 hover:text-primary transition-colors"
//                       >
//                         {item.name}
//                       </Link>
//                     );
//                   })}
//                 </nav>
//               </SheetContent>
//             </Sheet>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "../components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Committee", href: "/commitee" },
  { name: "Keynote", href: "/" },
  { name: "Call for Papers", href: "/callforpapers.pdf" },
  { name: "Paper Submission", href: "/" },
  { name: "Accepted Papers", href: "/" },
  { name: "Sponsors", href: "/" },
  
];

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-50 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold">
                <span className="text-blue-900">IEEE INSTCon</span>{" "}
                <span className="text-yellow-600">2026</span>
              </span>
            </Link>
          </div>

          {/* Center Navigation - Desktop */}
          <div className="hidden lg:flex items-center justify-center flex-1 space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Register Button - Desktop */}
          <div className="hidden lg:flex rounded-lg">
            <Button className="bg-blue-900 hover:bg-blue-700 text-white rounded-lg">
              Register Now
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[260px] bg-white flex flex-col justify-between"
              >
                <nav className="flex flex-col gap-4 mt-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                {/* Register Button inside sidebar */}
                <div className="mb-6 rounded-lg">
                  <Button className="w-full bg-blue-900 hover:bg-blue-800 text-white rounded-lg">
                    Register Now
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
