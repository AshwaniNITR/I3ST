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
        id: 4,
        name: "Prof.Siddharth Deshmukh",
        role: "NIT Raipur",
        imageUrl: "/siddharth-deshmukh-4.jpg",
      },
      {
        id: 5,
        name: "Prof. Sadanand Behera",
        role: "NIT Rourkela",
        imageUrl: "/sadanand-behera.jpg",
      },
      {
        id: 6,
        name: "Prof. R P Prasad",
        role: "NIT Rourkela",
        imageUrl: "/PrasadSir.jpg",
      },
      {
        id: 7,
        name: "Prof. Munmun Khanra",
        role: "NIT Silchar",
        imageUrl: "/munmun-khanra-7.jpg",
      },
      {
        id: 8,
        name: "Prof. Rajiv Mishra",
        role: "NIT Rourkela",
        imageUrl: "/RKM.jpg",
      },
      {
        id: 9,
        name: "Prof. Ashim Naskar",
        role: "NIT Rourkela",
        imageUrl: "/asim-nashkar.jpg",
      },
      {
        id: 10,
        name: "Prof. Debashis Mandal",
        role: "IIT Kharagpur",
        imageUrl: "/debashis-mandal-10.jpg",
      },
      {
        id: 11,
        name: "Prof. Santanu Sarkar",
        role: "NIT Rourkela",
        imageUrl: "/SantanuSarkar.jpeg",
      },
      {
        id: 12,
        name: "Prof. Sovan Dalai",
        role: "Javadpur University",
        imageUrl: "/sovan-dalai-12.jpg",
      },
      {
        id: 13,
        name: "Prof. Ananyo Sengupta",
        role: "NIT Roukela",
        imageUrl: "/ananyo-sengupta-9.png",
      },
      {
        id: 14,
        name: "Arijit Guha",
        role: "NIT Rourkela",
        imageUrl: "/arijit-guha-10.jpg",
      },
      {
        id: 15,
        name: "Prof. Shihabudheen KV",
        role: "NIT Calicut",
        imageUrl: "/shihabudheen-kv-15.jpg",
      },
      {
        id: 16,
        name: "Prof. Saptarshi Chaterjee",
        role: "NIT Rourkela",
        imageUrl: "/SaptarshiChaterjee.jpeg",
      },
      {
        id: 17,
        name: "Prof. Anusha AS",
        role: "NIT Rourkela",
        imageUrl: "/AnushaMam.jpg",
      },
      {
        id: 18,
        name: "Prof. Alok Prakash",
        role: "NIT Rourkela",
        imageUrl: "/AlokP.jpeg",
      },
      {
        id: 20,
        name: "Sudip Kundu",
        role: "NIT Rourkela",
        imageUrl: "/citations2.jpg",
      },
      // append after id:20

      {
        id: 21,
        name: "Prof. Pritam Paral",
        role: "IIEST Sibpur",
        imageUrl: "/scraped_images/21_Pritam_Paral_1.jpg",
      },
      {
        id: 22,
        name: "Prof. Arunagshu Ghosh",
        role: "NIT Patna",
        imageUrl: "/scraped_images/22_Arunagshu_Ghosh_1.jpg",
      },
      {
        id: 23,
        name: "Prof. Madhurima Chattopadhyay",
        role: "HIT Kolkata",
        imageUrl: "/scraped_images/23_Madhurima_Chattopadhyay_1.jpg",
      },
      {
        id: 24,
        name: "Prof. Debangana Das",
        role: "NIT Agartala",
        imageUrl: "/scraped_images/24_Debangana_Das_1.jpg",
      },
      {
        id: 25,
        name: "Prof. M. N. Muralidharan",
        role: "CMET Thrissur",
        imageUrl: "/scraped_images/25_M._N._Muralidharan_1.jpg",
      },
      {
        id: 26,
        name: "Prof. R. Prasad Naik",
        role: "NIT Rourkela",
        imageUrl: "/scraped_images/26_R._Prasad_Naik_1.jpg",
      },
      {
        id: 27,
        name: "Prof. Basabdatta Palit",
        role: "IIEST",
        imageUrl: "/scraped_images/27_Basabdatta_Palit_1.jpg",
      },
      {
        id: 28,
        name: "Prof. Ranjay Hazra",
        role: "NIT Silchar",
        imageUrl: "/scraped_images/28_Ranjay_Hazra_1.jpg",
      },
      {
        id: 29,
        name: "Prof. Manas Kumar Bera",
        role: "NIT Rourkela",
        imageUrl: "/MBera.jpg",
      },
      {
        id: 30,
        name: "Prof. Krishanu Nath",
        role: "NIT Agartala",
        imageUrl: "/scraped_images/Krishanu.jpg",
      },
      {
        id: 31,
        name: "Prof. Surajit Panja",
        role: "IIIT Guwahati",
        imageUrl: "/scraped_images/31_Surajit_Panja_1.jpg",
      },
      {
        id: 32,
        name: "Prof. Madhab Chandra Tripathy",
        role: "OUTR Bhubaneswar",
        imageUrl: "/scraped_images/32_Madhab_Chandra_Tripathy_1.jpg",
      },
      {
        id: 33,
        name: "Prof. Abhisek Choudhary",
        role: "CMET Thrissur",
        imageUrl: "/scraped_images/AbhisekCMET.jpg",
      },
      {
        id: 34,
        name: "Prof. Priyanka Saha",
        role: "STCET Kolkata",
        imageUrl: "/scraped_images/34_Priyanka_Saha_1.jpg",
      },
      {
        id: 35,
        name: "Sounak Roy",
        role: "IIIT Guwahati",
        imageUrl: "/scraped_images/35_Sounak_Roy_1.jpg",
      },
      {
        id: 36,
        name: "Prof. Aditya Kumar Hota",
        role: "VSSUT Burla",
        imageUrl: "/scraped_images/aditya-kumar-hota_photo1737220307.jpg",
      },
      {
        id: 37,
        name: "Prof. Amit Mallick",
        role: "VSSUT Burla",
        imageUrl: "/scraped_images/37_Amit_Mallick_1.jpg",
      },
      {
        id: 38,
        name: "Prof. Rabindra Behera",
        role: "IGIT Sarang",
        imageUrl: "/scraped_images/38_Rabindra_Behera_1.jpg",
      },
      {
        id: 39,
        name: "Prof. Samiran Das",
        role: "IISER Bhopal",
        imageUrl: "/scraped_images/39_Samiran_Das_1.jpg",
      },
      {
        id: 40,
        name: "Prof. Biswarup Ganguly",
        role: "NIT Silchar",
        imageUrl: "/scraped_images/IMG_175731742968be893548db4.jpg",
      },
      {
        id: 41,
        name: "Prof. Radhagayathri Udhayakumar",
        role: "Amrita V. Vidyapeetham",
        imageUrl: "/scraped_images/41_Radhagayathri_Udhayakumar_1.jpg",
      },
      {
        id: 42,
        name: "Prof. Biswajit Kar",
        role: "CIT Kokrajhar",
        imageUrl: "/scraped_images/dk.jpg",
      },
      {
        id: 43,
        name: "Prof. L. P. Roy",
        role: "NIT Rourkela",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9hoiEIURlxPKME_2RYMHfKlsCh__poWcKQ&s",
      },
      {
        id: 44,
        name: "Prof. Banibrata Mukherjee",
        role: "IIT Kharagpur",
        imageUrl: "/scraped_images/Banibrata.jpg",
      },
      {
        id: 45,
        name: "Prof. K. B. M. Swamy",
        role: "NIT Surathkal",
        imageUrl: "/scraped_images/45_K._B._M._Swamy_1.jpg",
      },
      {
        id: 46,
        name: "Aveek Dutta",
        role: "PXE DRDO",
        imageUrl: "/scraped_images/AveekDutta.jpg",
      }
    ],
  },
];
export const advisory: Committee[] = [
  {
    title: "Advisory Commitee",
    members: [
      {
        id: 1,
        name: "Prof. Santu Rana",
        role: "Deakin University, Australia",
        imageUrl: "/advisory/santu-rana-1.jpg",
      },
      {
        id: 3,
        name: "Prof. Anant Madabhushi",
        role: "Emory University, USA",
        imageUrl: "/advisory/anant-madabhushi-3.jpg",
      },
      {
        id: 4,
        name: "Prof. Sivaji Chakravorti",
        role: "Jadavpur University",
        imageUrl: "/advisory/sivaji-chakravorti-4.jpg",
      },
      {
        id: 5,
        name: "Prof. Suparna Kar Chowdhury",
        role: "Jadavpur University",
        imageUrl: "/advisory/suparna-kar-chowdhury-5.jpg",
      },
      {
        id: 6,
        name: "Prof. K.V.S. Hari",
        role: "IISc Bangalore",
        imageUrl: "/advisory/kvs-hari-6.jpg",
      },
      {
        id: 7,
        name: "Prof. Amitava Chatterjee",
        role: "Jadavpur University",
        imageUrl: "/advisory/amitava-chatterjee-7.jpg",
      },
      {
        id: 8,
        name: "Prof. R. B. Pachori",
        role: "IIT Indore",
        imageUrl: "/advisory/r-b-pachori-8.jpg",
      },
      {
        id: 9,
        name: "Prof. P. K. Dutta",
        role: "IIT Kharagpur",
        imageUrl: "/pk-dutta.jpg",
      },
      {
        id: 10,
        name: "Prof. Rajib Bandyopadhyay",
        role: "Jadavpur University",
        imageUrl: "/advisory/rajib-bandyopadhyay-10.jpg",
      },
      {
        id: 11,
        name: "Prof. Chanchal Dey",
        role: "University of Calcutta",
        imageUrl: "/advisory/Chanchal-Dey.jpg",
      },
      {
        id: 12,
        name: "Prof. Sugata Munshi",
        role: "Jadavpur University",
        imageUrl: "/advisory/munshi.jpg",
      },
      {
        id: 13,
        name: "Prof. Mohanasankar Sivaprakasam",
        role: "IIT Madras",
        imageUrl: "/advisory/mohanasankar-sivaprakasam-13.jpg",
      },
      {
        id: 14,
        name: "Prof. Boby George",
        role: "IIT Madras",
        imageUrl: "/advisory/boby-george.png",
      },
      {
        id: 15,
        name: "Prof. Jayaraj Joseph",
        role: "IIT Madras",
        imageUrl: "/advisory/jayaraj-joseph-15.jpg",
      },
      {
        id: 16,
        name: "Prof. A. G. Ramakrishnan",
        role: "Rtd. IISc Bangalore",
        imageUrl: "/advisory/a-g-ramakrishnan-16.jpg",
      },
      {
        id: 17,
        name: "Prof. Shiru Sharma",
        role: "IIT BHU",
        imageUrl: "/advisory/shiru-sharma-17.jpg",
      },
      {
        id: 18,
        name: "Mr. Deepak Mathur",
        role: "IEEE Vice President MGA",
        imageUrl: "/advisory/mr-deepak-mathur-18.jpg",
      },
      {
        id: 19,
        name: "Prof. Prerna Gaur",
        role: "IEEE India Council Chair",
        imageUrl: "/advisory/prerna-gaur-19.jpg",
      },
      {
        id: 20,
        name: "Prof. G. Uma",
        role: "NIT Trichy",
        imageUrl: "/g-uma.jpg",
      },
      {
        id: 21,
        name: "Prof. M. Umapathy",
        role: "NIT Trichy",
        imageUrl: "/advisory/m-umapathy-21.jpg",
      },
      {
        id: 22,
        name: "Prof. Samir K. Mondal",
        role: "CSIR-CSIO, ACSIR",
        imageUrl: "/advisory/samir-k-mondal-22.jpg",
      },
      {
        id: 23,
        name: "Prof. Siddhartha Sen",
        role: "Ret Prof. IIT Kharagpur",
        imageUrl: "/advisory/siddhartha-sen-23.jpg",
      },
      {
        id: 24,
        name: "Prof. Tarikul Islam",
        role: "Jamia Millia Islamia",
        imageUrl: "/advisory/tarikul-islam-24.jpg",
      },
      {
        id: 25,
        name: "Prof. Neeraj Sharma",
        role: "IIT BHU Varanasi",
        imageUrl: "/advisory/neeraj-sharma-25.jpg",
      },
      {
        id: 26,
        name: "Prof. Indra Narayan Kar",
        role: "IIT Delhi",
        imageUrl: "/advisory/indra-narayan.jpg",
      },
      {
        id: 27,
        name: "Prof. Shaunak Sen",
        role: "IIT Delhi",
        imageUrl: "/advisory/shaunak-sen-27.jpg",
      },
      {
        id: 28,
        name: "Prof. S. Janardhanan",
        role: "IIT Delhi",
        imageUrl: "/advisory/s-janardhanan-28.jpg",
      },
      {
        id: 29,
        name: "Prof. Sachin Srivastava",
        role: "IIT Roorkee",
        imageUrl: "/advisory/sachin-srivastava.jpg",
      },
      {
        id: 30,
        name: "Prof. Ashok Kumar Pandey",
        role: "IIT Hyderabad",
        imageUrl: "/advisory/ashok-kumar-pandey-30.jpg",
      },
      {
        id: 31,
        name: "Prof. Binoy Krishna Roy",
        role: "NIT Silchar",
        imageUrl: "/advisory/binoy-krishna-roy-31.jpg",
      },
      {
        id: 32,
        name: "Dr. Shyam Kamal",
        role: "IIT BHU",
        imageUrl: "/advisory/shyam-kamal.jpg",
      },
      {
        id: 33,
        name: "Dr. A Seema",
        role: "CMET Thissur",
        imageUrl: "/advisory/DrASeema.jpg",
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
        imageUrl: "/scraped_images/Banibrata.jpg",
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
        imageUrl: "/arunagshu-ghosh.jpg",
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
        imageUrl: "/soumyajeet-mahapatra.jpg",
      },
    ],
  },
];
