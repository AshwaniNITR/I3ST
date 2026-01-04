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
        name: " K. Umamaheswar Rao",
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
        name: "Siraz Sohail",
        role: "NIT Trichy",
        imageUrl: "/siraz-sohail-1.jpg",
      },
      {
        id: 2,
        name: "Rashmi Achla Minz",
        role: "NIT Rourkela",
        imageUrl: "/RMinz.jpg",
      },
      {
        id: 3,
        name: "Sougata Kumar Kar",
        role: "NIT Rourkela",
        imageUrl: "/SougataKar.jpeg",
      },
      {
        id: 4,
        name: "Siddharth Deshmukh",
        role: "NIT Raipur",
        imageUrl: "/siddharth-deshmukh-4.jpg",
      },
      {
        id: 5,
        name: "Sadanand Behera",
        role: "NIT Rourkela",
        imageUrl: "/sadanand-behera.jpg",
      },
      {
        id: 6,
        name: "R P Prasad",
        role: "NIT Rourkela",
        imageUrl: "/PrasadSir.jpg",
      },
      {
        id: 7,
        name: "Munmun Khanra",
        role: "NIT Silchar",
        imageUrl: "/munmun-khanra-7.jpg",
      },
      {
        id: 8,
        name: "Rajiv Mishra",
        role: "NIT Rourkela",
        imageUrl: "/RKM.jpg",
      },
      {
        id: 9,
        name: "Ashim Naskar",
        role: "NIT Rourkela",
        imageUrl: "/asim-nashkar.jpg",
      },
      {
        id: 10,
        name: "Debasis Mandal",
        role: "IIT Kharagpur",
        imageUrl: "/debashis-mandal-10.jpg",
      },
      {
        id: 11,
        name: "Santanu Sarkar",
        role: "NIT Rourkela",
        imageUrl: "/SantanuSarkar.jpeg",
      },
      {
        id: 12,
        name: "Sovan Dalai",
        role: "Javadpur University",
        imageUrl: "/sovan-dalai-12.jpg",
      },
      {
        id: 13,
        name: "Ananyo Sengupta",
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
        name: "Shihabudheen KV",
        role: "NIT Calicut",
        imageUrl: "/shihabudheen-kv-15.jpg",
      },
      {
        id: 16,
        name: "Saptarshi Chaterjee",
        role: "NIT Rourkela",
        imageUrl: "/SaptarshiChaterjee.jpeg",
      },
      {
        id: 17,
        name: "Anusha AS",
        role: "NIT Rourkela",
        imageUrl: "/AnushaMam.jpg",
      },
      {
        id: 18,
        name: "Alok Prakash",
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
        name: "Pritam Paral",
        role: "IIEST Sibpur",
        imageUrl: "/advisory/PritamParal.jpg",
      },
      {
        id: 22,
        name: "Arunagshu Ghosh",
        role: "NIT Patna",
        imageUrl: "/arunagshu-ghosh.jpg",
      },
      {
        id: 23,
        name: "Madhurima Chattopadhyay",
        role: "HIT Kolkata",
        imageUrl: "/scraped_images/23_Madhurima_Chattopadhyay_1.jpg",
      },
      {
        id: 24,
        name: "Debangana Das",
        role: "NIT Agartala",
        imageUrl: "/scraped_images/24_Debangana_Das_1.jpg",
      },
      {
        id: 25,
        name: "M. N. Muralidharan",
        role: "CMET Thrissur",
        imageUrl: "/mn.jpeg",
      },
      {
        id: 26,
        name: "R. Prasad Naik",
        role: "NIT Rourkela",
        imageUrl: "/scraped_images/26_R._Prasad_Naik_1.jpg",
      },
      {
        id: 27,
        name: "Basabdatta Palit",
        role: "IIEST",
        imageUrl: "/scraped_images/basabdatta.jpeg",
      },
      {
        id: 28,
        name: "Ranjay Hazra",
        role: "NIT Silchar",
        imageUrl: "/scraped_images/28_Ranjay_Hazra_1.jpg",
      },
      {
        id: 29,
        name: "Manas Kumar Bera",
        role: "NIT Rourkela",
        imageUrl: "/MBera.jpg",
      },
      {
        id: 30,
        name: "Krishanu Nath",
        role: "NIT Agartala",
        imageUrl: "/scraped_images/Krishanu.jpg",
      },
      {
        id: 31,
        name: " Surajit Panja",
        role: "IIIT Guwahati",
        imageUrl: "/scraped_images/31_Surajit_Panja_1.jpg",
      },
      {
        id: 32,
        name: " Madhab Chandra Tripathy",
        role: "OUTR Bhubaneswar",
        imageUrl: "/scraped_images/32_Madhab_Chandra_Tripathy_1.jpg",
      },
      {
        id: 33,
        name: " Abhisek Choudhary",
        role: "CMET Thrissur",
        imageUrl: "/scraped_images/AbhisekCMET.jpg",
      },
      {
        id: 34,
        name: " Priyanka Saha",
        role: "STCET Kolkata",
        imageUrl: "/PriyankaSaha.jpeg",
      },
      {
        id: 35,
        name: "Sounak Roy",
        role: "IIIT Guwahati",
        imageUrl: "/scraped_images/SounakRoy.jpeg",
      },
      {
        id: 36,
        name: " Aditya Kumar Hota",
        role: "VSSUT Burla",
        imageUrl: "/scraped_images/aditya-kumar-hota_photo1737220307.jpg",
      },
      {
        id: 37,
        name: " Amit Mallick",
        role: "VSSUT Burla",
        imageUrl: "/scraped_images/37_Amit_Mallick_1.jpg",
      },
      {
        id: 38,
        name: " Rabindra Behera",
        role: "IGIT Sarang",
        imageUrl: "/scraped_images/Rabin.jpeg",
      },
      {
        id: 39,
        name: " Samiran Das",
        role: "IISER Bhopal",
        imageUrl: "/Samiran.jpg",
      },
      {
        id: 40,
        name: " Biswarup Ganguly",
        role: "NIT Silchar",
        imageUrl: "/scraped_images/IMG_175731742968be893548db4.jpg",
      },
      {
        id: 41,
        name: " Radhagayathri Udhayakumar",
        role: "Amrita V. Vidyapeetham",
        imageUrl: "/scraped_images/41_Radhagayathri_Udhayakumar_1.jpg",
      },
      {
        id: 42,
        name: " Biswajit Kar",
        role: "CIT Kokrajhar",
        imageUrl: "/scraped_images/dk.jpg",
      },
      {
        id: 43,
        name: " L. P. Roy",
        role: "NIT Rourkela",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9hoiEIURlxPKME_2RYMHfKlsCh__poWcKQ&s",
      },
      {
        id: 44,
        name: " Banibrata Mukherjee",
        role: "IIT Kharagpur",
        imageUrl: "/scraped_images/Banibrata.jpg",
      },
      {
        id: 45,
        name: " K. B. M. Swamy",
        role: "NIT Surathkal",
        imageUrl: "/scraped_images/KBM.jpeg",
      },
      {
        id: 46,
        name: "Aveek Dutta",
        role: "PXE DRDO",
        imageUrl: "/scraped_images/AveekDutta.jpg",
      },
      {
        id:47,
        name:"Pubali Dey",
        role:"IEM-UEM,Kolkata",
        imageUrl:"/pubaliDey.jpeg",
      },
      {
        id:48,
        name:"Sounak Nandi",
        role:"NIT Jalandhar",
        imageUrl:"/SounakNandi.jpeg"
      },
      {
        id:49,
        name:"Reetam Mondal",
        role:"IIEST Shibpur",
        imageUrl:"/ReetamMondal.jpeg"
      },
       {
        id: 50,
        name: " Sandip Ghosal",
        role: "NIT Rourkela",
        imageUrl: "/SandipGhosal.jpeg",
      },
      {
        id:51,
        name:"Jogesh C. Dash",
        role:"NIT Rourkela",
        imageUrl:"/JogeshDash.jpg"
      },
      {
        id:52,
        name:"Nilanjan Biswas",
        role:"NIT Durgapur",
        imageUrl:"/nilanjanbi.jpeg"
      },
       {
        id: 53,
        name: "Anirban Bhowal",
        role: "NIT Rourkela",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZM5o7owWopsWVdTgws4wa-BoGHi69WNBrAg&s",
      },
       {
        id: 54,
        name: " Atin Mukherjee",
        role: "NIT Rourkela",
        imageUrl: "/AtinMukherjee.jpeg",
      },
      {
        id:55,
        name:"Subhajit Maur",
        role:"R. M. Govt. Engg. College, Purulia",
        imageUrl:"/Subhajit.jpg"
      },
      {
        id:56,
        name:"Surja Sekhar Chakraborty",
        role:"NIT Rourkela",
        imageUrl:"/SurajShekhar.jpg"
      },
      {
        id:57,
        name:"Papiya Debnath",
        role:"Techno International Newtown",
        imageUrl:"/Papiya.jpg"
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
        name: " Santu Rana",
        role: "Deakin University, Australia",
        imageUrl: "/advisory/santu-rana-1.jpg",
      },
      {
        id: 3,
        name: " Anant Madabhushi",
        role: "Emory University, USA",
        imageUrl: "/advisory/anant-madabhushi-3.jpg",
      },
      {
        id: 4,
        name: " Sivaji Chakravorti",
        role: "Jadavpur University",
        imageUrl: "/advisory/sivaji-chakravorti-4.jpg",
      },
      {
        id: 5,
        name: " Suparna Kar Chowdhury",
        role: "Jadavpur University",
        imageUrl: "/advisory/suparna-kar-chowdhury-5.jpg",
      },
      {
        id: 6,
        name: " K.V.S. Hari",
        role: "IISc Bangalore",
        imageUrl: "/advisory/kvs-hari-6.jpg",
      },
      {
        id: 7,
        name: " Amitava Chatterjee",
        role: "Jadavpur University",
        imageUrl: "/advisory/amitava-chatterjee-7.jpg",
      },
      {
        id: 8,
        name: " R. B. Pachori",
        role: "IIT Indore",
        imageUrl: "/advisory/r-b-pachori-8.jpg",
      },
      {
        id: 9,
        name: " P. K. Dutta",
        role: "IIT Kharagpur",
        imageUrl: "/pk-dutta.jpg",
      },
      {
        id: 10,
        name: " Rajib Bandyopadhyay",
        role: "Jadavpur University",
        imageUrl: "/advisory/rajib-bandyopadhyay-10.jpg",
      },
      {
        id: 11,
        name: " Chanchal Dey",
        role: "University of Calcutta",
        imageUrl: "/advisory/Chanchal-Dey.jpg",
      },
      {
        id: 12,
        name: " Sugata Munshi",
        role: "Jadavpur University",
        imageUrl: "/advisory/munshi.jpg",
      },
      {
        id: 13,
        name: " Mohanasankar Sivaprakasam",
        role: "IIT Madras",
        imageUrl: "/advisory/mohanasankar-sivaprakasam-13.jpg",
      },
      {
        id: 14,
        name: " Boby George",
        role: "IIT Madras",
        imageUrl: "/advisory/boby-george.png",
      },
      {
        id: 15,
        name: " Jayaraj Joseph",
        role: "IIT Madras",
        imageUrl: "/advisory/jayaraj-joseph-15.jpg",
      },
      {
        id: 16,
        name: " A. G. Ramakrishnan",
        role: "Rtd. IISc Bangalore",
        imageUrl: "/advisory/a-g-ramakrishnan-16.jpg",
      },
      {
        id: 17,
        name: "Shiru Sharma",
        role: "IIT BHU",
        imageUrl: "/advisory/shiru-sharma-17.jpg",
      },
      {
        id: 18,
        name: "Deepak Mathur",
        role: "IEEE Vice President MGA",
        imageUrl: "/advisory/mr-deepak-mathur-18.jpg",
      },
      {
        id: 19,
        name: " Prerna Gaur",
        role: "IEEE India Council Chair",
        imageUrl: "/advisory/prerna-gaur-19.jpg",
      },
      {
        id: 20,
        name: " G. Uma",
        role: "NIT Trichy",
        imageUrl: "/g-uma.jpg",
      },
      {
        id: 21,
        name: " M. Umapathy",
        role: "NIT Trichy",
        imageUrl: "/advisory/m-umapathy-21.jpg",
      },
      {
        id: 22,
        name: " Samir K. Mondal",
        role: "CSIR-CSIO, ACSIR",
        imageUrl: "/advisory/samir-k-mondal-22.jpg",
      },
      {
        id: 23,
        name: " Siddhartha Sen",
        role: "Ret  IIT Kharagpur",
        imageUrl: "/SidharthSen.jpeg",
      },
      {
        id: 24,
        name: " Tarikul Islam",
        role: "Jamia Millia Islamia",
        imageUrl: "/advisory/tarikul-islam-24.jpg",
      },
      {
        id: 25,
        name: " Neeraj Sharma",
        role: "IIT BHU Varanasi",
        imageUrl: "/advisory/neeraj-sharma-25.jpg",
      },
      {
        id: 26,
        name: " Indra Narayan Kar",
        role: "IIT Delhi",
        imageUrl: "/advisory/indra-narayan.jpg",
      },
      {
        id: 27,
        name: " Shaunak Sen",
        role: "IIT Delhi",
        imageUrl: "/advisory/shaunak-sen-27.jpg",
      },
      {
        id: 28,
        name: " S. Janardhanan",
        role: "IIT Delhi",
        imageUrl: "/advisory/s-janardhanan-28.jpg",
      },
      {
        id: 29,
        name: " Sachin Srivastava",
        role: "IIT Roorkee",
        imageUrl: "/advisory/sachin-srivastava.jpg",
      },
      {
        id: 30,
        name: " Ashok Kumar Pandey",
        role: "IIT Hyderabad",
        imageUrl: "/advisory/ashok-kumar-pandey-30.jpg",
      },
      {
        id: 31,
        name: " Binoy Krishna Roy",
        role: "NIT Silchar",
        imageUrl: "/advisory/binoy-krishna-roy-31.jpg",
      },
      {
        id: 32,
        name: " Shyam Kamal",
        role: "IIT BHU",
        imageUrl: "/advisory/shyam-kamal.jpg",
      },
      {
        id: 33,
        name: " A Seema",
        role: "CMET Thissur",
        imageUrl: "/advisory/DrASeema.jpg",
      },
      {
        id:34,
        name:" H. S. Panda",
        role:"PXE DRDO",
        imageUrl:"/HSPanda.jpeg",
      },
      {
        id:35,
        name:" Sankarsan Padhy ",
        role:"PXE, DRDO",
        imageUrl:"/advisory/SPadhy.png",
      },
         {
        id:36,
        name:"Palash Kundu",
        role:"Ret. Jadavpur University",
        imageUrl:"/Kundu.jpeg"
      }
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
        imageUrl: "/advisory/suparna-kar-chowdhury-5.jpg",
      },
      {
        id: 22,
        name: "Poonam Singh",
        role: "Chair, IEEE Rourkela Subsection",
        imageUrl: "/Poonam-Singh.jpg",
      },
      {
        id: 29,
        name: "Subodha K Nayak",
        role: "Director, PXE",
        imageUrl: "/Subodh-Kumar-Nayak-12-1024x708.jpg",
      }
    ],
  },
  {
    title: "General Chair",
    members: [
      {
        id: 3,
        name: " Umesh Chandra Pati",
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
        name: " Manas Kumar Bera",
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
        name: " Sougata Kumar Kar",
        role: "NIT Rourkela",
        imageUrl: "/SougataKar.jpeg",
      },
      {
        id: 6,
        name: " Saptarshi Chatterjee",
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
        name: " Ayaskant Swain",
        role: "NIT Rourkela",
        imageUrl: "/AyashKantaSwain.jpg",
      },
      {
        id: 8,
        name: " Anusha A S",
        role: "NIT Rourkela",
        imageUrl: "/AnushaMam.jpg",
      },
      {
        id: 24,
        name: " Debangshu Dey",
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
        name: " Santanu Sarkar",
        role: "NIT Rourkela",
        imageUrl: "/SantanuSarkar.jpeg",
      },
      {
        id: 10,
        name: " Abhishek Dey",
        role: "NIT Rourkela",
        imageUrl: "/AbhishekDey.jpeg",
      },
      {
        id: 25,
        name: " Banibrata Mukherjee",
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
        name: " Anwesha Sengupta",
        role: "NIT Rourkela",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYwVRtoCiNAgwhKf9SKWwmFud7-RmUvKVktA&s",
      },
      {
        id: 12,
        name: " Rashmi Achla Minz",
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
        name: " Sudip Kundu",
        role: "NIT Rourkela",
        imageUrl: "/citations2.jpg",
      },
      {
        id: 14,
        name: " Rajiv Kumar Mishra",
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
        name: "Ramavath P Naik",
        role: "NIT Rourkela",
        imageUrl: "/PrasadSir.jpg",
      },
      {
        id: 27,
        name: " Tanmoy Roy Chowdhury",
        role: "NIT Rourkela",
        imageUrl: "/tanmoy-roy-chowdhury-27.jpg",
      },
      {
        id: 28,
        name: " K C Ray",
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
        name: " S. M. Hiremath",
        role: "NIT Rourkela",
        imageUrl: "/citations1.jpg",
      },
      {
        id: 19,
        name: " Alok Prakash",
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
        name: " L.P Roy",
        role: "NIT Rourkela",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9hoiEIURlxPKME_2RYMHfKlsCh__poWcKQ&s",
      },
      {
        id: 21,
        name: " Sandip Ghosal",
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
        name: " Atin Mukherjee",
        role: "NIT Rourkela",
        imageUrl: "/AtinMukherjee.jpeg",
      },
      {
        id: 16,
        name: " Anirban Bhowal",
        role: "NIT Rourkela",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZM5o7owWopsWVdTgws4wa-BoGHi69WNBrAg&s",
      },
      {
        id: 31,
        name: " Arunagshu Ghosh",
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
        name: " Situ Rani Patre",
        role: "NIT Rourkela",
        imageUrl: "/situ-rani-patre-32.jpg",
      },
      {
        id: 33,
        name: " Anwesha Sengupta",
        role: "NIT Rourkela",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYwVRtoCiNAgwhKf9SKWwmFud7-RmUvKVktA&s",
      },
      {
        id: 34,
        name: " Karabi Biswas",
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
