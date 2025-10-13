// export type Member = {
//   id: number;
//   name: string;
//   role?: string;
//   imageUrl: string;
// };

// export type Committee = {
//   title: string;
//   members: Member[];
// };

// // Patron committees (Patrons and Co-Patrons)
// export const patronCommittees: Committee[] = [
//   {
//     title: "Chief Patron",
//     members: [
//       {
//         id: 1,
//         name: "Prof. K. Umamaheswar Rao",
//         role: "Director, NIT Rourkela",
//         imageUrl: "/director.jpg",
//       },
//     ],
//   },
// ];

// // Other committees
// export const otherCommittees: Committee[] = [
//   {
//     title: "Honorary Chairs",
//     members: [
//       {
//         id: 2,
//         name: "Suparna Kar Chowdhury",
//         role: "Chair, IEEE Kolkata Section",
//         imageUrl: "/Suparna-Kar-Chowdhury.jpg",
//       },
//       {
//         id: 22,
//         name: "Poonam Singh",
//         role: "Chair, IEEE Rourkela Subsection",
//         imageUrl: "/Poonam-Singh.jpg",
//       },
//     ],
//   },
//   {
//     title: "General Chair",
//     members: [
//       {
//         id: 3,
//         name: "Prof. Umesh Chandra Pati",
//         role: "NIT Rourkela",
//         imageUrl: "/UCPati.jpg",
//       },
//     ],
//   },
//   {
//     title: "General Co-Chairs",
//     members: [
//       {
//         id: 4,
//         name: "Prof. Manas Kumar Bera",
//         role: "NIT Rourkela",
//         imageUrl: "/MBera.jpg",
//       },
//     ],
//   },
//   {
//     title: "Organizing Chairs",
//     members: [
//       {
//         id: 5,
//         name: "Prof. Sougata Kumar Kar",
//         role: "NIT Rourkela",
//         imageUrl: "/SougataKar.jpeg",
//       },
//       {
//         id: 6,
//         name: "Prof. Saptarshi Chatterjee",
//         role: "NIT Rourkela",
//         imageUrl: "/SaptarshiChaterjee.jpeg",
//       },
//       {
//         id: 23,
//         name: "Tridibesh Nag",
//         role: "Secretary, IEEE Kolkata Section",
//         imageUrl: "/Tridibesh-Bagh.jpeg",
//       },
//     ],
//   },
//   {
//     title: "Technical Program Chairs",
//     members: [
//       {
//         id: 7,
//         name: "Prof. Ayaskant Swain",
//         role: "NIT Rourkela",
//         imageUrl: "/AyashKantaSwain.jpg",
//       },
//       {
//         id: 8,
//         name: "Prof. Anusha A S",
//         role: "NIT Rourkela",
//         imageUrl: "/AnushaMam.jpg",
//       },
//       {
//         id: 24,
//         name: "Prof. Debangshu Dey",
//         role: "Jadavpur University",
//         imageUrl: "/placeholder.jpg",
//       },
//     ],
//   },
//   {
//     title: "Publication Chairs",
//     members: [
//       {
//         id: 9,
//         name: "Prof. Santanu Sarkar",
//         role: "NIT Rourkela",
//         imageUrl: "/SantanuSarkar.jpeg",
//       },
//       {
//         id: 10,
//         name: "Prof. Abhishek Dey",
//         role: "NIT Rourkela",
//         imageUrl: "/AbhishekDey.jpeg",
//       },
//       {
//         id: 25,
//         name: "Prof. Banibrata Mukherjee",
//         role: "IIT Kharagpur",
//         imageUrl: "/placeholder.jpg",
//       },
//     ],
//   },
//   {
//     title: "Finance Chairs",
//     members: [
//       {
//         id: 11,
//         name: "Prof. Anwesha Sengupta",
//         role: "NIT Rourkela",
//         imageUrl:
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYwVRtoCiNAgwhKf9SKWwmFud7-RmUvKVktA&s",
//       },
//       {
//         id: 12,
//         name: "Prof. Rashmi Achla Minz",
//         role: "NIT Rourkela",
//         imageUrl: "/RMinz.jpg",
//       },
//       {
//         id: 26,
//         name: "Susanta Ray",
//         role: "Treasurer, IEEE Kolkata Section",
//         imageUrl: "/placeholder.jpg",
//       },
//     ],
//   },
//   {
//     title: "Hospitality Chairs",
//     members: [
//       {
//         id: 13,
//         name: "Prof. Sudip Kundu",
//         role: "NIT Rourkela",
//         imageUrl: "/citations2.jpg",
//       },
//       {
//         id: 14,
//         name: "Prof. Rajiv Kumar Mishra",
//         role: "NIT Rourkela",
//         imageUrl: "/RKM.jpg",
//       },
//     ],
//   },
//   {
//     title: "Publicity Chairs",
//     members: [
//       {
//         id: 17,
//         name: "Prof. Ramvath P Naik",
//         role: "NIT Rourkela",
//         imageUrl: "/PrasadSir.jpg",
//       },
//       {
//         id: 27,
//         name: "Prof. Tanmoy Roy Chowdhury",
//         role: "NIT Rourkela",
//         imageUrl: "/placeholder.jpg",
//       },
//       {
//         id: 28,
//         name: "Prof. K C Ray",
//         role: "IIT Patna",
//         imageUrl: "/placeholder.jpg",
//       },
//     ],
//   },
//   {
//     title: "Sponsorship Chairs",
//     members: [
//       {
//         id: 18,
//         name: "Prof. S. M. Hiremath",
//         role: "NIT Rourkela",
//         imageUrl: "/citations1.jpg",
//       },
//       {
//         id: 19,
//         name: "Prof. Alok Prakash",
//         role: "NIT Rourkela",
//         imageUrl: "/AlokP.jpeg",
//       },
//       {
//         id: 29,
//         name: "FCRI",
//         role: "",
//         imageUrl: "/placeholder.jpg",
//       },
//     ],
//   },
//   {
//     title: "Industry Relationship Chairs",
//     members: [
//       {
//         id: 20,
//         name: "Prof. L.P Roy",
//         role: "NIT Rourkela",
//         imageUrl:
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9hoiEIURlxPKME_2RYMHfKlsCh__poWcKQ&s",
//       },
//       {
//         id: 21,
//         name: "Prof. Sandip Ghosal",
//         role: "NIT Rourkela",
//         imageUrl: "/SandipGhosal.jpeg",
//       },
//       {
//         id: 30,
//         name: "RSP Rourkela",
//         role: "",
//         imageUrl: "/placeholder.jpg",
//       },
//     ],
//   },
//   {
//     title: "Web Chairs",
//     members: [
//       {
//         id: 15,
//         name: "Prof. Atin Mukherjee",
//         role: "NIT Rourkela",
//         imageUrl: "/AtinMukherjee.jpeg",
//       },
//       {
//         id: 16,
//         name: "Prof. Anirban Bhowal",
//         role: "NIT Rourkela",
//         imageUrl:
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZM5o7owWopsWVdTgws4wa-BoGHi69WNBrAg&s",
//       },
//       {
//         id: 31,
//         name: "Prof. Arunagshu Ghosh",
//         role: "NIT Patna",
//         imageUrl: "/placeholder.jpg",
//       },
//     ],
//   },
//   {
//     title: "WIE Chairs",
//     members: [
//       {
//         id: 32,
//         name: "Prof. Situ Rani Patre",
//         role: "NIT Rourkela",
//         imageUrl: "/placeholder.jpg",
//       },
//       {
//         id: 33,
//         name: "Prof. Anwesha Sengupta",
//         role: "NIT Rourkela",
//         imageUrl:
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYwVRtoCiNAgwhKf9SKWwmFud7-RmUvKVktA&s",
//       },
//       {
//         id: 34,
//         name: "Prof. Karabi Biswas",
//         role: "IIT Kharagpur",
//         imageUrl: "/placeholder.jpg",
//       },
//     ],
//   },
//   {
//     title: "Student Activity Chairs",
//     members: [
//       {
//         id: 35,
//         name: "Soumyajeet Mahapatra",
//         role: "NIT Rourkela",
//         imageUrl: "/placeholder.jpg",
//       },
//     ],
//   },
// ];
export type Member = {
  id: number;
  name: string;
  role?: string;
  imageUrl: string;
};

export type Committee = {
  title: string;
  members: Member[];
};

// Patron committees (Patrons and Co-Patrons)
export const patronCommittees: Committee[] = [
  {
    title: "Chief Patron",
    members: [
      {
        id: 1,
        name: "Prof. K. Umamaheswar Rao",
        role: "Director, NIT Rourkela",
        imageUrl: "/director.jpg",
      },
    ],
  },
];
export const trackChairs: Committee[] = [
  {
    title: "Track Chairs",
    members: [
      {
        id: 1,
        name: "Prof.Siraz Sohail ",
        role: "NIT Trichy",
        imageUrl: "/siraz-sohail-1.jpg",
      },
        {
        id: 2,
        name: "Prof. Rashmi Achla Minz",
        role: "NIT Rourkela",
        imageUrl: "/RMinz.jpg",
      },
      {
        id: 3,
        name: "Prof. Sougata Kumar Kar",
        role: "NIT Rourkela",
        imageUrl: "/SougataKar.jpeg",
      },
      {
        id:4,
        name:"Prof.Siddharth Deshmukh",
        role:"NIT Raipur",
        imageUrl:"/siddharth-deshmukh-4.jpg"
      },
      {
        id:5,
        name:"Prof. Sadanand Behera",
        role:"NIT Rourkela",
        imageUrl:"/sadanand-behera.jpg"
      },
      {
        id:6,
        name:"Prof. R P Prasad",
        role:"NIT Rourkela",
        imageUrl:"/PrasadSir.jpg"
      },
      {
        id:7,
        name:"Prof. Munmun Khanra",
        role:"NIT Silchar",
        imageUrl:"/munmun-khanra-7.jpg"
      },
      {
        id:8,
        name:"Prof. Rajiv Mishra",
        role:"NIT Rourkela",
        imageUrl:"/RKM.jpg"
      },
      {
        id:9,
        name:"Prof. Ashim Naskar",
        role:"NIT Rourkela",
        imageUrl:"/asim-nashkar.jpg"
      },
      {
        id:10,
        name:"Prof. Debashis Mandal",
        role:"IIT Kharagpur",
        imageUrl:"/debashis-mandal-10.jpg"
      },
      {
        id:11,
        name:"Prof. Santanu Sarkar",
        role:"NIT Rourkela",
        imageUrl:"/SantanuSarkar.jpeg"
      },
      {
        id:12,
        name:"Prof. Sovan Dalai",
        role:"Javadpur University",
        imageUrl:"/sovan-dalai-12.jpg"
      },
      {
        id:13,
        name:"Prof. Ananyo Sengupta",
        role:"NIT Roukela",
        imageUrl:"/ananyo-sengupta-9.png"
      },
      {
        id:14,
        name:"Arijit Guha",
        role:"NIT Rourkela",
        imageUrl:"/arijit-guha-10.jpg"
      },
      {
        id:15,
        name:"Prof. Shihabudheen KV",
        role:"NIT Calicut",
        imageUrl:"/shihabudheen-kv-15.jpg"
      },
      {
        id:16,
        name:"Prof. Saptarshi Chaterjee",
        role:"NIT Rourkela",
        imageUrl:"/SaptarshiChaterjee.jpeg"
      },
      {
        id:17,
        name:"Prof. Anusha AS",
        role:"NIT Rourkela",
        imageUrl:"/AnushaMam.jpg"
      },
      {
        id:18,
        name:"Prof. Alok Prakash",
        role:"NIT Rourkela",
        imageUrl:"/AlokP.jpeg"
      },
      {
        id:20,
        name:"Sudip Kundu",
        role:"NIT Rourkela",
        imageUrl:"/citations2.jpg"
      },
     
    ],
  },
];


// Other committees
export const otherCommittees: Committee[] = [
  {
    title: "Honorary Chairs",
    members: [
      {
        id: 2,
        name: "Suparna Kar Chowdhury",
        role: "Chair, IEEE Kolkata Section",
        imageUrl: "/Suparna-Kar-Chowdhury.jpg",
      },
      {
        id: 22,
        name: "Poonam Singh",
        role: "Chair, IEEE Rourkela Subsection",
        imageUrl: "/Poonam-Singh.jpg",
      },
    ],
  },
  {
    title: "General Chair",
    members: [
      {
        id: 3,
        name: "Prof. Umesh Chandra Pati",
        role: "NIT Rourkela",
        imageUrl: "/UCPati.jpg",
      },
    ],
  },
  {
    title: "General Co-Chairs",
    members: [
      {
        id: 4,
        name: "Prof. Manas Kumar Bera",
        role: "NIT Rourkela",
        imageUrl: "/MBera.jpg",
      },
    ],
  },
  {
    title: "Organizing Chairs",
    members: [
      {
        id: 5,
        name: "Prof. Sougata Kumar Kar",
        role: "NIT Rourkela",
        imageUrl: "/SougataKar.jpeg",
      },
      {
        id: 6,
        name: "Prof. Saptarshi Chatterjee",
        role: "NIT Rourkela",
        imageUrl: "/SaptarshiChaterjee.jpeg",
      },
      {
        id: 23,
        name: "Tridibesh Nag",
        role: "Secretary, IEEE Kolkata Section",
        imageUrl: "/Tridibesh-Bagh.jpeg",
      },
    ],
  },
  {
    title: "Technical Program Chairs",
    members: [
      {
        id: 7,
        name: "Prof. Ayaskant Swain",
        role: "NIT Rourkela",
        imageUrl: "/AyashKantaSwain.jpg",
      },
      {
        id: 8,
        name: "Prof. Anusha A S",
        role: "NIT Rourkela",
        imageUrl: "/AnushaMam.jpg",
      },
      {
        id: 24,
        name: "Prof. Debangshu Dey",
        role: "Jadavpur University",
        imageUrl: "/debangshu-dey-24.jpg",
      },
    ],
  },
  {
    title: "Publication Chairs",
    members: [
      {
        id: 9,
        name: "Prof. Santanu Sarkar",
        role: "NIT Rourkela",
        imageUrl: "/SantanuSarkar.jpeg",
      },
      {
        id: 10,
        name: "Prof. Abhishek Dey",
        role: "NIT Rourkela",
        imageUrl: "/AbhishekDey.jpeg",
      },
      {
        id: 25,
        name: "Prof. Banibrata Mukherjee",
        role: "IIT Kharagpur",
        imageUrl: "/banibrata-mukherjee-25.jpg",
      },
    ],
  },
  {
    title: "Finance Chairs",
    members: [
      {
        id: 11,
        name: "Prof. Anwesha Sengupta",
        role: "NIT Rourkela",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYwVRtoCiNAgwhKf9SKWwmFud7-RmUvKVktA&s",
      },
      {
        id: 12,
        name: "Prof. Rashmi Achla Minz",
        role: "NIT Rourkela",
        imageUrl: "/RMinz.jpg",
      },
      {
        id: 26,
        name: "Susanta Ray",
        role: "Treasurer, IEEE Kolkata Section",
        imageUrl: "/susanta-ray-26.jpg",
      },
    ],
  },
  {
    title: "Hospitality Chairs",
    members: [
      {
        id: 13,
        name: "Prof. Sudip Kundu",
        role: "NIT Rourkela",
        imageUrl: "/citations2.jpg",
      },
      {
        id: 14,
        name: "Prof. Rajiv Kumar Mishra",
        role: "NIT Rourkela",
        imageUrl: "/RKM.jpg",
      },
    ],
  },
  {
    title: "Publicity Chairs",
    members: [
      {
        id: 17,
        name: "Prof. Ramvath P Naik",
        role: "NIT Rourkela",
        imageUrl: "/PrasadSir.jpg",
      },
      {
        id: 27,
        name: "Prof. Tanmoy Roy Chowdhury",
        role: "NIT Rourkela",
        imageUrl: "/tanmoy-roy-chowdhury-27.jpg",
      },
      {
        id: 28,
        name: "Prof. K C Ray",
        role: "IIT Patna",
        imageUrl: "/k-c-ray-28.jpg",
      },
    ],
  },
  {
    title: "Sponsorship Chairs",
    members: [
      {
        id: 18,
        name: "Prof. S. M. Hiremath",
        role: "NIT Rourkela",
        imageUrl: "/citations1.jpg",
      },
      {
        id: 19,
        name: "Prof. Alok Prakash",
        role: "NIT Rourkela",
        imageUrl: "/AlokP.jpeg",
      },
    ],
  },
  {
    title: "Industry Relationship Chairs",
    members: [
      {
        id: 20,
        name: "Prof. L.P Roy",
        role: "NIT Rourkela",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9hoiEIURlxPKME_2RYMHfKlsCh__poWcKQ&s",
      },
      {
        id: 21,
        name: "Prof. Sandip Ghosal",
        role: "NIT Rourkela",
        imageUrl: "/SandipGhosal.jpeg",
      },
    ],
  },
  {
    title: "Web Chairs",
    members: [
      {
        id: 15,
        name: "Prof. Atin Mukherjee",
        role: "NIT Rourkela",
        imageUrl: "/AtinMukherjee.jpeg",
      },
      {
        id: 16,
        name: "Prof. Anirban Bhowal",
        role: "NIT Rourkela",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZM5o7owWopsWVdTgws4wa-BoGHi69WNBrAg&s",
      },
      {
        id: 31,
        name: "Prof. Arunagshu Ghosh",
        role: "NIT Patna",
        imageUrl: "/arunagshu-ghosh-31.jpg",
      },
    ],
  },
  {
    title: "WIE Chairs",
    members: [
      {
        id: 32,
        name: "Prof. Situ Rani Patre",
        role: "NIT Rourkela",
        imageUrl: "/situ-rani-patre-32.jpg",
      },
      {
        id: 33,
        name: "Prof. Anwesha Sengupta",
        role: "NIT Rourkela",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYwVRtoCiNAgwhKf9SKWwmFud7-RmUvKVktA&s",
      },
      {
        id: 34,
        name: "Prof. Karabi Biswas",
        role: "IIT Kharagpur",
        imageUrl: "/karabi-biswas-34.jpg",
      },
    ],
  },
  {
    title: "Student Activity Chairs",
    members: [
      {
        id: 35,
        name: "Soumyajeet Mahapatra",
        role: "NIT Rourkela",
        imageUrl: "/soumyajeet-mahapatra-35.jpg",
      },
    ],
  },
];