const trackChairs = [
  {
    id: 1,
    title: "Smart Sensors and Intelligent Instrumentation",
    chairs: [
      "Siraz Sohail, NIT Trichy",
      "Pritam Paral, IIEST Sibpur",
      "Arunagshu Ghosh, NIT Patna",
      "Madhurima Chattopadhyay, HIT Kolkata",
      "Rashmi Achla Minz, NIT Rourkela",
      "Debangana Das, NIT Agartala",
      "M. N. Muralidharan, CMET Thrissur"
    ],
    subTopics: [
      "Smart Sensors: Design, Fabrication, and Applications",
      "Sensor Fusion and Calibration",
      "3D Printing and Rapid Prototyping",
      "Optical Sensors and Photonic Instrumentation",
      "Sensor Reliability, Fault Tolerance, and Metrology",
      "AI/ML for Measurements and Decision Support"
    ]
  },
  {
    id: 2,
    title: "Sustainable IoT and Communication Technologies",
    chairs: [
      "Siddharth Deshmukh, NIT Raipur",
      "Sadanand Behera, NIT Rourkela",
      "R. Prasad Naik, NIT Rourkela",
      "Basabdatta Palit, IIEST",
      "Ranjay Hazra, NIT Silchar",
      "Nilanjan Biswas, NIT Durgapur",
      "Anirban Bhowal, NIT Rourkela"
    ],
    subTopics: [
      "Wireless, RFID, and IoT-Enabled Instrumentation",
      "Communication Protocols and Network Architectures",
      "IoT in Mining and Precision Agriculture",
      "Cyber-Physical Security, Privacy, and Resilience",
      "Standardization, Interoperability, and Sustainability",
      "RF, 5G and Beyond"
    ]
  },
  {
    id: 3,
    title: "Advances in Intelligent Control, Robotics, and Mechatronics",
    chairs: [
      "Munmun Khanra, NIT Silchar",
      "Manas Kumar Bera, NIT Rourkela",
      "Krishanu Nath, NIT Agartala",
      "Surajit Panja, IIIT Guwahati",
      "Madhab Chandra Tripathy, OUTR Bhubaneswar",
      "Abhisek Choudhary, CMET Thrissur",
      "Reetam Mondal, IIEST Shibpur"
    ],
    subTopics: [
      "Intelligent Control and Adaptive Systems",
      "Instrumentation and Control for Process Industries",
      "Cyber-Physical Systems, Robotics and Industrial Automation",
      "Predictive Maintenance and Condition Monitoring",
      "Drone Design, Navigation, and Control",
      "Digital Twins, HMI and Smart Manufacturing"
    ]
  },
  {
    id: 4,
    title: "Innovations in Microelectronics, Circuits, and Devices",
    chairs: [
      "Debasis Mandal, IIT Kharagpur",
      "Santanu Sarkar, NIT Rourkela",
      "Priyanka Saha, STCET Kolkata",
      "Sounak Roy, IIIT Guwahati",
      "Aditya Kumar Hota, VSSUT Burla",
      "Atin Mukherjee, NIT Rourkela"
    ],
    subTopics: [
      "Quantum Sensors, Emerging Devices, and Design Paradigms",
      "MEMS, NEMS, Flexible Electronics and Energy Harvesting",
      "Sensor Interfacing Circuits and Low-Power Circuit Design",
      "Biomedical Devices and Wearable Systems",
      "Bio-inspired and Neuromorphic Circuits"
    ]
  },
  {
    id: 5,
    title: "Sustainable Technologies for Electrical Systems",
    chairs: [
      "Sovan Dalai, Jadavpur University",
      "Arijit Guha, NIT Rourkela",
      "Amit Mallick, VSSUT Burla",
      "Rabindra Behera, IGIT Sarang",
      "Subhajit Maur, R. M. Govt. Engg. College, Purulia",
      "Sounak Nandi,NIT Jalandhar",
      "Surja Sekhar Chakraborty, NIT Rourkela                                     "
    ],
    subTopics: [
      "Smart Grids and Renewable Energy Systems",
      "Condition Monitoring and Fault Diagnosis",
      "Energy-Efficient Irrigation Systems",
      "Hardware-Software Co-Design for Power Systems",
      "EV Charging, Storage and Battery Management"
    ]
  },
  {
    id: 6,
    title: "Applied Signal and Image Processing",
    chairs: [
      "Shihabudheen KV, NIT Calicut",
      "Samiran Das, IISER Bhopal",
      "Biswarup Ganguly, NIT Silchar",
      "Radhagayathri Udhayakumar, Amrita V. Vidyapeetham",
      "Biswajit Kar, CIT Kokrajhar",
      "Papiya Debnath, Techno International Newtown",
      "Pubali Dey, IEM-UEM,Kolkata"
    ],
    subTopics: [
      "Diagnostics and Personalized Healthcare",
      "Pollution and Environmental Monitoring",
      "Multimodal Fusion, AI/ML and XAI",
      "Automation and Smart Manufacturing",
      "Computer Vision, Speech and Audio Processing"
    ]
  },
  {
    id: 7,
    title: "Instrumentation for Defense and Space Applications",
    chairs: [
      "L. P. Roy, NIT Rourkela",
      "Banibrata Mukherjee, IIT KGP",
      "K. B. M. Swamy, NIT Surathkal",
      "Aveek Dutta, PXE DRDO",
      "Sandip Ghosal, NIT Rourkela",
      "Jogesh C. Dash, NIT Rourkela"
    ],
    subTopics: [
      "Space Instrumentation, Sensors, and Payload Systems",
      "Remote Sensing, Navigation, Satellite Communication and Microwave Systems",
      "Advanced Materials, Devices, and Energy Solutions for Defense",
      "Guidance, Navigation, and Control (GNC) Systems",
      "Simulation, Digital Twins, and Validation of Mission-Critical Systems"
    ]
  }
];
const nameByTrack = trackChairs.map(track => ({
  id: track.id,
  title: track.title,
  names: track.chairs
}));
export default nameByTrack;
export { trackChairs };