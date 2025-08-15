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
    title: "Patrons",
    members: [
      {
        id: 1,
        name: "Prof. Umamaheshwar Rao Karanam",
        role: "Director, NIT Rourkela, India",
        imageUrl: "/director.jpg",
      },
      {
        id: 2,
        name: "Prof. Prerna Gaur",
        role: "Chair, IEEE India Council",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRub3_UMM7LMjkMpiAGe88Lhi6SQiPRaVv9vA&s",
      },
    ],
  },
];

// Other committees
export const otherCommittees: Committee[] = [
  {
    title: "General Chairs",
    members: [
      {
        id: 3,
        name: "Prof. Umesh Chandra Pati ",
        imageUrl: "/UCPati.jpg",
      },
    ],
  },
  {
    title: "General Co-Chair",
    members: [
      {
        id: 4,
        name: "Prof. Manas Kumar Bera",
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
        imageUrl: "/SougataKar.jpeg",
      },
      {
        id: 6,
        name: "Prof. Saptarshi Chaterjee",
        // role: "ECE Department, NIT Rourkela",
        imageUrl: "/SaptarshiChaterjee.jpeg",
      },
    ],
  },
  {
    title: "Technical Program Chairs",
    members: [
      {
        id: 7,
        name: "Prof. Anusha A S ",
        imageUrl: "/AnushaMam.jpg",
      },
      {
        id: 8,
        name: "Prof. Ayaskanta Swain",
        imageUrl: "/AyashKantaSwain.jpg",
      },
    ],
  },
  {
    title: "Publication Chairs",
    members: [
      {
        id: 9,
        name: "Prof. Santanu Sarkar",
        imageUrl: "/SantanuSarkar.jpeg",
      },
      {
        id: 10,
        name: "Prof. Abhishek Dey",
        imageUrl: "/AbhishekDey.jpeg",
      },
    ],
  },
  {
    title: "Finance Chairs",
    members: [
      {
        id: 11,
        name: "Prof. Anwesha Sengupta",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYwVRtoCiNAgwhKf9SKWwmFud7-RmUvKVktA&s",
      },
      {
        id: 12,
        name: "Prof. Rashmi Achla Minz",
        imageUrl: "/RMinz.jpg",
      },
    ],
  },
  {
    title: "Hospitality Chairs",
    members: [
      {
        id: 13,
        name: "Prof. Sudip Kundu",
        imageUrl: "/citations2.jpg",
      },
      {
        id: 14,
        name: "Prof. Rajiv Kumar Mishra",
        imageUrl: "/RKM.jpg",
      },
    ],
  },
  {
    title: "Publicity Chairs",
    members: [
      {
        id: 15,
        name: "Prof. Atin Mukherjee",
        imageUrl: "/AtinMukherjee.jpeg",
      },
      {
        id: 16,
        name: "Prof. Anirban Bhowal",
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZM5o7owWopsWVdTgws4wa-BoGHi69WNBrAg&s",
      },
      {
        id: 17,
        name: "Prof. R.P Naik",
        imageUrl: "/RPNaik.jpg",
      },
    ],
  },
  {
    title: "Sponsorship Chairs",
    members: [
      {
        id: 18,
        name: "Prof. Shrishail Hiremath",
        imageUrl: "/citations1.jpg",
      },

      {
        id: 19,
        name: "Prof. Alok Prakash",
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
        imageUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9hoiEIURlxPKME_2RYMHfKlsCh__poWcKQ&s",
      },
       {
        id: 21,
        name: "Prof. Sandip Ghoshal",
        imageUrl: "/SandipGhosal.jpeg",
      },
    ],
  },
]
