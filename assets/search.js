(function () {
    'use strict';

    /**
     * Pre-built search index covering all 7 conference pages and sections,
     * including dynamically rendered tracks and committee directories.
     */
    const SEARCH_INDEX = [
  {
    "page": "Home",
    "url": "index.html#home",
    "title": "AIHC 2027 — International Conference on AI in Healthcare",
    "category": "Home",
    "text": "International Conference on AI in Healthcare (AIHC 2027) (Physical Mode) Dates: 23–24 January 2027 | Symbiosis Institute of Technology Hyderabad Technically Co-Sponsored by IEEE Hyderabad Section IEEE Conference Record #71011 New Updates Extended 🚀 Full Paper Submission Deadline Extended to September 30, 2026! Acceptance Notification: October 25, 2026. 👉 Click here to Submit Paper on Microsoft CMT ✦ Extended 🚀 Full Paper Submission Deadline Extended to September 30, 2026! Acceptance Notification: October 25, 2026. 👉 Click here to Submit Paper on Microsoft CMT",
    "keywords": "IEEE Conference Record #71011 Hyderabad Section Physical Mode 23-24 January 2027"
  },
  {
    "page": "Home",
    "url": "index.html#about",
    "title": "About Conference 2027",
    "category": "About",
    "text": "About Conference 2027 International Conference on Artificial Intelligence in Healthcare Symbiosis Institute of Technology (SIT), Hyderabad , is organizing the First International Conference on Artificial Intelligence in Healthcare (AIHC 2027) from 23 – 24 January 2027 at Symbiosis Institute of Technology , Hyderabad, in Physical mode (both in-person and online participation). The conference aims to bring together researchers, practitioners, and industry experts to explore the latest innovations, challenges, and applications of AI and Machine Learning in the healthcare domain , promoting intelligent, efficient, and human-cantered healthcare solutions.",
    "keywords": "SIT Hyderabad First International Conference AIHC 2027"
  },
  {
    "page": "Home",
    "url": "index.html#theme",
    "title": "Conference Theme & Major Areas to be Covered",
    "category": "Theme & Areas",
    "text": "Conference Theme Artificial Intelligence and Machine Learning for Intelligent, Ethical, and Inclusive Healthcare The theme of AIHC 2027 highlights the transformative role of Artificial Intelligence and Machine Learning in shaping next-generation healthcare systems that are intelligent, reliable, and human-centric . AI and ML are revolutionizing clinical diagnostics, drug discovery, medical imaging, and personalized medicine, while IoT, edge computing, and data analytics enable real-time patient monitoring and connected healthcare services. Together, these technologies empower physicians and healthcare providers with predictive insights, facilitate efficient decision-making, and lead to improved patient outcomes. By fostering interdisciplinary research and collaboration between academia, healthcare institutions, and industry , the conference envisions an ecosystem where technology enhances accessibility, transparency, and equity in healthcare delivery. Major Achievements / Areas to be Covered AIHC 2027 will provide a platform for researchers, practitioners, and industry professionals to explore the latest advancements in AI and Machine Learning applied to healthcare. The conference will cover, but is not limited to, the following areas: Deep Learning Models and Architectures for Healthcare – Advanced neural networks, model optimization, and architectures tailored for medical data. Generative AI and Large Language Models in Medicine – AI-driven synthesis of medical data, clinical text generation, and decision support using LLMs. Computer Vision and Medical Image Analysis – Image classification, object detection, segmentation, and radiology/medical imaging applications. Natural Language Processing and Clinical Text Mining – Analysis of electronic health records (EHR), medical notes, and conversational AI in healthcare. Edge AI and Embedded Intelligence in Healthcare Devices – Low-latency AI for wearable devices, mobile health (mHealth) applications, and IoT-based patient monitoring. AI for Healthcare and Biomedical Systems – Predictive analytics, diagnostics, drug response prediction, and personalized treatment systems. AI for Communication and Medical Data Networks – Intelligent networking, semantic data processing, and secure data exchange in healthcare systems. Smart Sensing, Signal Processing, and IoT Integration – Body sensor networks, wearable devices, ambient assisted living, and contextual reasoning in healthcare IoT. AI for Robotics, Automation, and Human-Robot Interaction in Medicine – Robotic surgery, AI-assisted rehabilitation, and collaborative healthcare automation. Ethical, Fair, and Explainable AI in Healthcare – Explainable AI (XAI), bias mitigation, privacy-preserving ML, and responsible AI deployment in clinical settings. Special Track AI4-IHS: AI for Intelligent Healthcare Systems Integrating IoMT, edge/fog/cloud computing, distributed intelligence, secure computing, federated learning, explainable AI, digital twins, blockchain, cybersecurity, and intelligent healthcare analytics.",
    "keywords": "Artificial Intelligence Machine Learning Ethical Inclusive Healthcare Special Track AI4-IHS"
  },
  {
    "page": "Home",
    "url": "index.html#important-dates",
    "title": "Important Dates & Deadlines",
    "category": "Dates",
    "text": "Important Dates Call for Papers Starts 10 January 2026 Extended Full Paper Submission 30 August 2026 30 September 2026 Acceptance Notification 25 October 2026 Registration Deadline 10 November 2026 Camera-Ready Paper Submission 15 November 2026 Conference Dates 23 – 24 January 2027",
    "keywords": "Call for Papers Full Paper Submission Extended Acceptance Notification Registration Camera-Ready Conference Dates"
  },
  {
    "page": "Home",
    "url": "index.html#objectives",
    "title": "Primary Objectives",
    "category": "About",
    "text": "Primary Objectives Pioneering Healthcare AI Research Encourage innovative research in AI, Deep Learning, Machine Learning, Medical Imaging, Clinical Decision Support, and Generative AI for healthcare applications. Building Global Partnerships Bring together researchers, clinicians, academicians, industry experts, and students worldwide to foster collaboration and exchange of ideas.. Solving Practical Healthcare Problems Develop AI and ML solutions addressing medical diagnostics, predictive analytics, remote monitoring, wearable health technologies, and personalized treatment strategies. Promoting Research Visibility Accepted papers will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore’s scope and quality requirements. Empowering the Next Generation Create opportunities for students and early-career researchers to showcase their work, learn from experts, and expand their professional networks.",
    "keywords": "IEEE Xplore Research Visibility Partnerships Healthcare"
  },
  {
    "page": "Home",
    "url": "index.html#audience",
    "title": "Target Audience",
    "category": "About",
    "text": "Target Audience AIHC 2027 is designed to attract a diverse audience of professionals, researchers, and academicians from both academia and industry who are engaged in Artificial Intelligence, Machine Learning, and Healthcare technologies. The conference aims to bring together: Academicians, Researchers & Scientists Working in AI, ML, Data Science, IoT, and Healthcare Informatics. Healthcare Professionals & Clinicians Interested in AI-based diagnostics, predictive analytics, and clinical decision support systems. Industry Experts & Technologists From MedTech, Bioinformatics, and Health IT sectors exploring AI-driven innovations. Graduate & Doctoral Students Presenting innovative ideas, prototypes, and research outcomes in AI and healthcare. Policy Makers & Innovators Focusing on ethical, regulatory, and sustainable adoption of AI in healthcare.",
    "keywords": "Academicians Researchers Healthcare Professionals Clinicians Industry Students Policy Makers"
  },
  {
    "page": "Home",
    "url": "index.html#speakers",
    "title": "Speaker: Prof. Dr. Supavadee Aramvith,Chulalongkorn University, Thailand",
    "category": "Speakers",
    "text": "Prof. Dr. Supavadee Aramvith,Chulalongkorn University, Thailand.",
    "keywords": "keynote distinguished speaker"
  },
  {
    "page": "Home",
    "url": "index.html#speakers",
    "title": "Speaker: Dr.Kunal Mankodiya, University of Rhode Island, USA",
    "category": "Speakers",
    "text": "Dr.Kunal Mankodiya, University of Rhode Island, USA.",
    "keywords": "keynote distinguished speaker"
  },
  {
    "page": "Home",
    "url": "index.html#speakers",
    "title": "Speaker: Dr. Khanita Duangchaemkarn,University of Phayao,Thailand",
    "category": "Speakers",
    "text": "Dr. Khanita Duangchaemkarn,University of Phayao,Thailand.",
    "keywords": "keynote distinguished speaker"
  },
  {
    "page": "Home",
    "url": "index.html#speakers",
    "title": "Speaker: Dr.Ketan Kotecha, Symbiosis International University,India",
    "category": "Speakers",
    "text": "Dr.Ketan Kotecha, Symbiosis International University,India.",
    "keywords": "keynote distinguished speaker"
  },
  {
    "page": "Home",
    "url": "index.html#committees",
    "title": "Conference Committees Overview",
    "category": "Committees",
    "text": "Conference Committees Distinguished members ensuring the highest standards of research excellence. Steering Committee 6 Members National Advisory 30 Members International Advisory 20 Members Scientific Committee 15 Members Committee Statistics 150 Total Committee Members",
    "keywords": "Steering National Advisory International Advisory Scientific Committee"
  },
  {
    "page": "Home",
    "url": "index.html#organising-committees",
    "title": "Committee: Core Committee",
    "category": "Committees",
    "text": "Chief Patron, Dr. S. B. Mujumdar Founder and President, Symbiosis International (Deemed University) Patrons Dr.Vidya Yeravdekar, Chancellor, Symbiosis International (Deemed University), Pune, India | Principal Director, Symbiosis Dr. Ramakrishnan Raman, Vice Chancellor, Symbiosis International (Deemed University), Pune, India Dr. Rajiv Yeravdekar Provost, Faculty of Medical and Health Sciences, Symbiosis International (Deemed University) General Chairs Dr. Rajanikanth Aluvalu Director, Symbiosis International (Deemed University), Hyderabad, India Dr. V. K. Sashindran, Dean, Symbiosis Medical College for Women and Symbiosis University Hospital and Research Centre, Pune, India. Co-Chairs Dr. Somula Ramasubbareddy Associate Professor, Symbiosis International (Deemed University), Hyderabad, India Dr. K Suresh Babu, Associate Professor in Biochemistry at Symbiosis Medical College for Women, Pune.",
    "keywords": "Core Committee"
  },
  {
    "page": "Home",
    "url": "index.html#organising-committees",
    "title": "Committee: Steering Committee",
    "category": "Committees",
    "text": "Dr. Ketan Kotecha,Dean, FoE,SIU, Director,SIT-P, Pune, India Prof. Rajanikanth Aluvalu, Director-SIT-H, Hyderabad, India Dr Maheshkumar Hanmant Kolekar, IIT Patna, India Mr. Bala Prasad Peddigari, TCS Prof Balamurugan Balusam, MAHE, dubai Sathishkumar V E, Malaysia",
    "keywords": "Steering Committee"
  },
  {
    "page": "Home",
    "url": "index.html#organising-committees",
    "title": "Committee: International Advisory Committee",
    "category": "Committees",
    "text": "Dr Abhay Chopada,United Kingdom Prof. Joel Rodrigues, Portugal Dr. Fernando Moreira, Portugal Pancham Shukla, Imperial College,UK Marcin Paprzycki, Poland",
    "keywords": "International Advisory Committee"
  },
  {
    "page": "Home",
    "url": "index.html#organising-committees",
    "title": "Committee: National Advisory Committee",
    "category": "Committees",
    "text": "Mayuri Mehta, Sarvajanik University, Surat, India Dr. Mushtaq Ahmed, India Dr. Satyanarayana Bheesette, India Bala Prasad Peddigari, Chief Innovation Officer and Global Head, India Dr Bhushan Boratikar,India Dr Chandrashekhar H Patil,India",
    "keywords": "National Advisory Committee"
  },
  {
    "page": "Home",
    "url": "index.html#organising-committees",
    "title": "Committee: Track Chairs",
    "category": "Committees",
    "text": "Track 1: AI for Medical Diagnostics and Imaging, Chair:Dr. Amol Gowtham, SMCW & SUHRC, SIU Co-Chair:Dr.Uma Maheswari V, CBIT, Hyderabad, India Track 2: ML in Clinical Decision Support and Predictive Analytics Chair:Brig. S. K. Pramanik, Armed Forces Medical College (AFMC) Co-Chair: Dr.Kranthi Singamneni Track 3: IoT, Edge, and Wearable Technologies in Healthcare Chair:Ms. Karunya Lakhaniya, Axonic Health Systems Co-chair:Dr.SriRam Kumar P, SIT-H Track 4: Ethics, Explainability, and Human-Centric AI in Medicine Chair:Dr. Arun Jamkar, SMCW & SUHRC, SIU Co-chair: Dr.Santosh kumar M,SIT-H Track 5: Integrating Traditional Wellness Systems With Intelligent Healthcare Technologies Chair:Dr. Abhay Chopda, CEO, Axonic Health Co-chair: Dr. G Suryanarayana, SIT-H Special Track",
    "keywords": "Track Chairs"
  },
  {
    "page": "Home",
    "url": "index.html#organising-committees",
    "title": "Committee: Special Session / Track: AI4-IHS",
    "category": "Committees",
    "text": "AI for Intelligent Healthcare Systems Chair Dr. Kshira Sagar Sahoo Dept of CSE, SRM University-AP, India Co-Chair Dr. Rajareddy University of Saskatchewan, Saskatoon, Canada Co-Chair Dr. Thota Dept of CSE, SRM University-AP, India Welcoming research contributions integrating IoMT, distributed intelligence, secure computing, and AI in healthcare. Explore Track in Call for Papers",
    "keywords": "Special Session / Track: AI4-IHS"
  },
  {
    "page": "Home",
    "url": "index.html#organising-committees",
    "title": "Committee: Finance Committee",
    "category": "Committees",
    "text": "Chair: Mr K. Jangaiah, SIT-H Co-Chair: Ms Shalini Sinha, Head Finance ,SMCW & SUHRC",
    "keywords": "Finance Committee"
  },
  {
    "page": "Home",
    "url": "index.html#organising-committees",
    "title": "Committee: Publication Committee",
    "category": "Committees",
    "text": "Chair: Dr.Somula Ramasubbareddy, SIT-H Co-Chair: Dr.Uma Maheswari V, CBIT,Hyderabad Co-Chair: Dr.Siddharth Selvarajan,Leeds University, UK Co-Chair: Dr Vijay Kumar,SMCW & SUHRC, pune",
    "keywords": "Publication Committee"
  },
  {
    "page": "Home",
    "url": "index.html#organising-committees",
    "title": "Committee: Publicity Committee",
    "category": "Committees",
    "text": "Chair: Dr. Kranthi Kumar Singamaneni, SIT-H Chair: Dr. Vipul Vekaria, Parul University, India Chair: Dr. Williams, Sanjeevani University, India Co-Chair: Dr.Amulya Prasad Panda,SIT-H Co-Chair: Dr.Supriya Methepatil,SMCW & SUHRC Co-Chair: Dr.Gondhi Navabharat Reddy,SIT-H",
    "keywords": "Publicity Committee"
  },
  {
    "page": "Home",
    "url": "index.html#organising-committees",
    "title": "Committee: Hospitality, Transportation & Accommodation",
    "category": "Committees",
    "text": "Chair:Dr. Akash Sharma, SIT-H Co-Chair:Mr.Sai Prashanth Mallellu, SIT-H Dr. P. V. Vinitha, SIT-H",
    "keywords": "Hospitality, Transportation & Accommodation"
  },
  {
    "page": "Home",
    "url": "index.html#organising-committees",
    "title": "Committee: Web Development & Content Creation",
    "category": "Committees",
    "text": "Chair: Dr. Kiran Siripuri, SIT-H Mr. Kondapalkula Sricharan Rao, SIT-H",
    "keywords": "Web Development & Content Creation"
  },
  {
    "page": "Home",
    "url": "index.html#organising-committees",
    "title": "Committee: Workshop Coordination Team",
    "category": "Committees",
    "text": "Chair: Dr. Salakapuri Rakesh, SIT-H Co-Chair: Dr. Sriram Kumar P, SIT-H Member: Dr. Dhruba Jyoti Bora, NIT, Silchar Member: Dr. Dinesh Reddy Vemula, SIT-H Student Volunteers",
    "keywords": "Workshop Coordination Team"
  },
  {
    "page": "Home",
    "url": "index.html#organising-committees",
    "title": "Committee: Registration Committee",
    "category": "Committees",
    "text": "Chair: Dr. Bibhuprasad Sahu, SIT-H Co-Chair: Dr.Santhosh kumar, SIT-H Member: Dr.Vinitha, SIT-H Student Volunteers",
    "keywords": "Registration Committee"
  },
  {
    "page": "Home",
    "url": "index.html#organising-committees",
    "title": "Committee: Technical Program Committee",
    "category": "Committees",
    "text": "Chairs Chair: Dr. Mayuri Mehta Surat, India Chair: Dr. G Suryanarayana Symbiosis Institute of Technology, Hyderabad Co-Chair: Dr. Prasanalakshmi Balaji Saudi Arabia Co-Chair: M. Devanathan REVA University Co-Chair: Dr. Pushpa Mala S Associate Professor, Dayananda Sagar Univerist Co-Chair: Dr. Harivardhagini Subhadra CVR College Of Engineering, Hyderabad Co-Chair: Mr. N Venkatesh Silicon Labs, India Members Dr. Manisha Guduri USA Dr. Samarjeet Borah SMIT, India Dr. Krunal Vaghela Marwadi University, India Dr. Swapna Mudrakola India Dr. Krishna Keerthi Ch Novartis, India Dr. Sandhya Christ University, India Dr. Ravikumar Chinthaginjala VIT University, India Dr. Jaykumar A. Dave Rai University, India Dr. Syed Abdul Moeed KITS, India Dr. K Venkatachalam KITS University, India Dr. Mukesh Kumar Tripathi KIET, India Dr. Ashwin Raiyani Nirma University, India Dr. JayDave Rai University, India Prof. Mehul S. Raval Ahmedabad University, India Dr. Rashmi Sahay ICFAI Foundation for Higher Education, India Dr. Shilpa Bade-Gite SIU, India Dr. Srinivasa Rao Dammavalam VNRVJIET, India Dr. Ghanshyam Tejani Yuan Ze University, Taiwan Dr. Kunal Mankodiya University of Rhode Island, USA Prof. Dr. Supavadee Aramvith Chulalongkorn University, Thailand Dr. Khanita Duangchaemkarn University of Phayao, Thailand Dr. Lakshmana Kumar Ramasamy HCT, UAE Dr. Mohammed A.A The University of Jordan, Jordan Dr. Weiwei Jiang Beijing University of Posts and Telecommunications, China A. Phani Kumar Reddy IIT Kanpur, India Abdeljebar Mansour Abdelmalek Essaadi University, Morocco Abhinav Goel Pes University, India Adrian Shaw Hewlett-Packard Laboratories, UK Agapi Mesodiakaki Aristotle University of Thessaloniki, Greece Aggeliki Sgora Ionian University, Greece Ajay Mutukula Kite Pharma, USA Ajay Nagrale Meta Platforms, Inc., USA Alain Allouis Alstom, France Alessandra Rizzardi University of Insubria, Italy Alessandro Carrega UNIGE, Italy Alex Galis University College London (UCL), UK Alireza Ghasempour UAST, Iran Amogh Katti GITAM University, India Amr El-Sherif Egypt University of Informatics, Egypt Amr Hilal Tennessee Tech, USA An Braeken Vrije Universiteit Brussel, Belgium Andrea Saracino Scuola Superiore Universitaria Sant'Anna di Pisa, Italy Anil Kumar Intel Corporation, India Anis Amazigh Hamza Université de Limoges, France Anwer Al-Dulaimi Veltris, Canada Ashish Sheikh Cisco Systems, USA Ashwani Dubey Amity University Uttar Pradesh, India Ashwini P Vit, University, India Augusto Casaca INESC-ID, Portugal B. Umamaheswari Sri Sairam Engineering College, India Bachir Jdid UCSI University, France Balakrishnan Subramanian Aarupadai Veedu Institute of Technology, India Bimal Patel Charotar University of Science and Technology, India Bing-Hong Liu National Kaohsiung University of Science and Technology, Taiwan Carl Debono University of Malta, Malta Charalampos Kalalas CTTC, Spain Chien Aun Chan The University of Melbourne, Australia Christos Grecos Arkansas State University, USA Claudio Paoloni Lancaster University, UK Cruz Antony J Sathyabama Institute of Science and Technology, India Debabrata Dalai IIST, India Deborsi Basu IIT, Kharagpur, India Demosthenes Vouyioukas University of Piraeus, Greece Dimitri Papadimitriou University of Antwerp - imec, Belgium Dinesh Kumar T SCSVMV University, India Divya Upadhyay ABES Engineering College, India Domenico Ciuonzo University of Naples Federico II, Italy Egemen Çetinkaya Verizon, USA Elias Bawan Universitas Gadjah Mada, Indonesia Eric Renault Université Gustave Eiffel, France Fabrizio Granelli University of Trento, Italy Fasil Latheef Ofinno, India Flavio Silva University of Minho, Portugal Geeta Sandeep Nadella University of the Cumberlands, USA George Xylomenos AUEB, Greece Giampaolo Bovenzi University of Napoli Federico II, Italy Giovanni Pau Kore University of Enna, Italy Giridhar Mandyam Qualcomm, USA Giuseppe Ruggeri UNIRC, Italy Go Hasegawa Tohoku University, Japan Gowripriyaa V Coimbatore Institute of Technology, India Gyu Myoung Lee Liverpool John Moores University, UK Hamid Reza Ghaeini University of Tehran, Iran Hari Gonaygunta University of the Cumberlands, USA Hassan El Alami Howard University, USA Heng Wang Chongqing University of Posts and Telecommunications, China Hung Cao University of New Brunswick, Canada Iffath Fawad Dayananda Sagar College of Engineering, India Ioakeim Samaras Intracom Telecom, Greece Jagdeep Singh University of Delhi, India Jaswanth Nidamanuri Woxsen University, India Javier Gozalvez Universidad Miguel Hernandez de Elche, Spain Jayprakash Thakur Intel, India Jency Rubia J Vel Tech Rangarajan Dr Sagunthala R D Institute of Science and Technology, India Jenefa J Assistant Professor, India Jenhui Chen Chang Gung University, Taiwan Jen-Yi Pan National Chung Cheng University, Taiwan Jingjing Wang Beihang University, China Joan Bas CTTC, Spain João Kleinschmidt Universidade Federal Do ABC, Brazil Joong-Lyul Lee University of North Carolina at Pembroke, USA Jorge Sá Silva University of Coimbra, Portugal José Luis Hernandez Ramos Universidad de Murcia, Spain Joyanto Roychoudhary Meghnad Saha Institute Of Technology, India Karthik Chakravarthy Cheekuri Microsoft, USA Karthik Meduri University of the Cumberlands, USA Keshavkumar Durgakeri Intel Corporation, India Khushter Kaifi Nagarro, India Koichi Ishibashi Kanazawa Institute of Technology, Japan Kostas Chounos University of Thessaly, Greece Koteswararao Kondepu IIT Dharwad, India Kurt Tutschku Blekinge Institute of Technology, Sweden Madhavi Repe Savitribai Phule Pune University, India Madhu Niranjan Reddy Puduru Synchronoss Technologies Inc, USA Mallikarjuna Chilakanahatti Patil BMSIT & Management, VTU, India Mamiko Inamori Tokai University, Japan Manjunath Krishnamurthy JP Morgan Chase and Co., USA Manoj Tolani Manipal Institute of Technology, Manipal, India Marco Baldi Università Politecnica delle Marche, Italy Maxime Compastie i2CAT Foundation, Spain Md Sayeem Rahman Jain University, India Megha Sahu IIT Bhilai, India Mervin Thomas National Institute of Technology, India Michail Alexandros Kourtis NCSR Demokritos, Greece Miguel Gutierrez Gaitan PUC (Chile), Chile Ming-Fong Tsai National United University, Taiwan Moez Esseghir Université de Technologie de Troyes, France Mohan Gajula Nike Inc, USA Mohd Hamza Naim Shaikh University College London, UK Motoyoshi Sekiya Fujitsu Limited, Japan Mrugendrasinh Rahevar Charotar University of Science and Technology, India Mukesh Taneja Mavenir, India Murugan Murali Pondicherry University, India Nam Chu University of Technology Sydney, Australia Narayan Badiger S G Balekundri Institute of Technology, India Navjot Talwandi University of Engineering, India Nicholas Race Lancaster University, UK Nidhya Rangarajan Madanapalle Institute of Technology & Science, India Nilotpal Chakraborty IIIT, Guwahati, India Niranjan Eregowda Visvesaraya Technological University, India Nishant Kumar IIT Roorkee, India Nobuhiko Miki Ritsumeikan University, Japan Oluwakayode Onireti University of Glasgow, UK Otto Waltari F-Secure, Finland Panagiotis Radoglou-Grammatikis University of Western Macedonia, Greece Pankaj Kulkarni Radysis, India Paolo Bucciol Twilio, USA Pascal Vontobel The Chinese University of Hong Kong, Hong Kong Pasquale Dottorato Lab ID, Italy Paul Mitchell University of York, UK Paulo Mendes Airbus, Germany Payali Das IIT Delhi, India Pekka Pirinen University of Oulu, Finland Pietro Manzoni Universitat Politècnica de València, Spain Ping Zhou Apple, USA Pol Alemany CTTC/CERCA, Spain Prasanna Misra IIIT, India Prateeth Rao IIIT - Bangalore, India Pratyush Tewari Blue Book Services, USA Praveen Kumar Thota Amazon Web Services, USA Prince Jain Parul University, India Prodromos Makris ICCS/NTUA, Greece Puneet Sharma Karnavati University, India Rafael Nobrega Federal Institute of Minas Gerais, Brazil Raghavendra Sheddi Rural Engineering College, Hulkoti, India Rahul Makkar IIIT Kota, India Rajesh S Saintgits College of Engineering, India Rajesh Thalwagal Mathad Dayananda Sagar University, India Rakeshkumar Mahto California State University, Fullerton, USA Ramesh Shunmugam Rajalakshmi Engineering College, India Ramiro Samano-Robles CRRES, Portugal Ran Zhang University of North Carolina at Charlotte, USA Rapeepat Ratasuk Nokia Bell Labs, USA Ravi Kumar Kurapati Home Depot Management Company LLC, USA Razib Khan Independent University Bangladesh, Bangladesh Rehash Rushmi Pavitra A SRM Institute of Science and Technology, India Rekha P BNM Institute of Technology Bangalore, India Remya Jayachandran The National Institute of Engineering Mysore, India Ricard Vilalta CTTC, Spain Riccardo Sisto Politecnico di Torino, Italy Ripal Ranpara Marwadi University, India Rojalina Priyadarshini C. V. Raman Global University, India Rongbo Zhu Huazhong Agricultural University, China Rosario Garroppo University of Pisa, Italy S Kannadhasan Study World College of Engineering, India Sabarimuthu M Kongu Engineering College, India Sagnik De University of Calcutta, Kolkata, India SakthiSudhan Karuppanan Dr NGP Institute of Technology, India Salahuddin Mohammad Masum Southwest Tennessee Community College, USA Salvatore D'Oro Northeastern University, USA Sandeep V Dayananda Sagar College of Engineering, India Sandhya S RV College of Engineering, India Sanjay Patel Nirma University, India Sanjeev Mourya Gyansys Inc, USA Santhakumar Govindasamy Anna University, India Sarada Prasad Gochhayat IIT, Jammu, India Sarath Babu Iowa State University, USA Sarfraz Hussain REVA University, India Saumya Dwivedi Radisys India Limited, India Sayed Chhattan Shah Birmingham City University, UK Septimiu Nechifor Siemens SRL, Romania Shachi P BMS College of Engineering, India Shashikant Patil Atlas SkillTech University, India Sheela Kakanur Shivayogi Apple Inc, USA Shivani Bhasgi Poojya Dodappa Appa College of Engineering, India Simon Watts CN21, UK Siva Prakash JPMorgan Chase & Co, USA Slawomir Kuklinski Warsaw University of Technology, Poland Sneha Sharma Dyanand Sagar University, India Sridhar Iyer KLE, India Stefan Mangold Lovefield Wireless GmbH, Switzerland Subhra Prakash Giri Amrita School of Engineering, India Suganthi Su Sri Sairam Institute of Technology, India Sujatha Gaddam Rise Krishna Sai Prakasam Group of Institutions, India Sunil Khatri University of Mumbai, India Suresh Muthusamy Kongu Engineering College, India Surinder Sood University of AUCKLAND, India Syed Manzoor Qasim King Abdulaziz City for Science and Technology, Saudi Arabia T Kalavathidevi Kongu Engineering College, India Takuya Asaka Tokyo Metropolitan University, Japan Tapadhir Das University of the Pacific, USA Tariq Umer COMSATS University Islamabad Lahore Campus, Pakistan Tony Q. S. Quek Singapore University of Technology and Design, Singapore Uwe Herzog Eurescom, Germany V Pushparajesh Jain Deemed to be University, India Vaishnavi Moorthy SRM Institute of Science and Technology, India Vanlin Sathya Campbell, USA Vasanthakumar GU Nitte Meenakshi Institute of Technology, India Ved Kafle NICT, Japan Vijaya Kittu Manda PBMEIT, India Vijayalakshmi Chetlapalli Arista Networks, India Vincenzo Piuri Università degli Studi di Milano, Italy Vishal Rathod C-DAC, India Wafi Danesh SUNY at New Paltz, USA Xiang Gui Massey University, New Zealand Yang Wang La Salle University, USA Yiu-Wing Leung Hong Kong Baptist University, Hong Kong You-Chiun Wang National Sun Yat-Sen University, Taiwan Zhi Liu The University of Electro-Communications, Japan Celia Shahnaz BUET, Bangladesh Rajani Manchineella HCL TECHNOLOGIES, India Sanjana Muvvala O.C.Tanner, India Uthej K. Infosys, India Anjanyeulu D L&T Technology Services, India Yeshwant L M Confluent, India Gaurav Pathak Cisco, India Kalyana Krishna Kondapall CEO of Mytecz and Award Chair Lance Stafford Larson Student Award ieee computer society Madhusudana Rao Muthirevula Sr. Software Enginee, MSR Technology , Rockwell, USA Sujatha Gupta CBIT Hyderabad Padmaja pulivarthy Samsung Austin semiconductors, USA Pavan Tilak Sadaraboina Senior Software Engineer Show More",
    "keywords": "Technical Program Committee"
  },
  {
    "page": "Home",
    "url": "index.html#organising-committees",
    "title": "Committee: Organizing Committee",
    "category": "Committees",
    "text": "Dr. Shshank Chaube, SIT-H Dr. Amulya Prasad Panda, SIT-H Dr. Bibhuprasad Sahu, SIT-H Dr. Dinesh Reddy, SIT-H, Dr. Dhruba Jyoti Bora, NIT, Silchar Mr. Sai Prashanth Mallellu, SIT-H Mr. Pallati Narsimhulu, SIT-H",
    "keywords": "Organizing Committee"
  },
  {
    "page": "Home",
    "url": "index.html#panel-discussions",
    "title": "Panel Discussions",
    "category": "Program",
    "text": "Panel Discussions Conference 2027 will host two signature panel discussions: (a) Responsible Innovations in Deep Learning: Shaping Smart, Sustainable, and Ethical Futures (b) Ethical AI and IoT: Creating Human-Centric Intelligent Ecosystems",
    "keywords": "Responsible Innovations Deep Learning Ethical AI IoT"
  },
  {
    "page": "Home",
    "url": "index.html#registration",
    "title": "Registration Fees (Home Summary)",
    "category": "Registration",
    "text": "Registration Fees Category Early Bird Regular Spot Indian Authors Academia / R&D / Industry ₹9000 ₹10000 ₹11000 IEEE Members ₹8000 ₹9000 ₹10000 Students ₹6000 ₹7000 ₹8000 IEEE Student Members ₹5000 ₹6000 ₹7000 Foreign Authors Academia / R&D / Industry $200 $225 $250 IEEE Members $175 $200 $225 Students $125 $150 $225 IEEE Student Members $100 $125 $150 Listener / Attendees without paper ₹3500 / 4000 ₹4000 / 4500 ₹4500 / 5000 All Registration Fees excluding GST.",
    "keywords": "Indian Authors Foreign Authors IEEE Members Students Listener Attendees INR USD GST"
  },
  {
    "page": "Home",
    "url": "index.html#organizing-partners",
    "title": "Organizing Partners",
    "category": "Partners",
    "text": "Organizing Partners Symbiosis Institue of Technology Hyderabad, India Symbiosis Medical College for Women (SMCW), India",
    "keywords": "Symbiosis Institute of Technology Hyderabad SMCW Symbiosis Medical College for Women"
  },
  {
    "page": "Home",
    "url": "index.html#location",
    "title": "Event Venue, Location & Contact Organizers",
    "category": "Venue & Contact",
    "text": "Location Event Venue Symbiosis Institute of Technology, Hyderabad AIHC International Conference on AI in Healthcare (AIHC 2027) Quick Links Home About Committees Speakers Registration CMT_ACKNOWLEDGMENT Conference Venue Survey Number 292, Off Bangalore Highway, Modallaguda (V), Nandigama (M), Rangareddy Distbr, Hyderabad, Telangana, India, Pin Code : 509217 View on Google Maps Contact Organizers ramasubbareddy.s@sithyd.siu.edu.in Dr. Somula Ramasubbareddy: +91 7013594626 © 2026 AIHC Conference. All Rights Reserved. Website developed by Kondapalkula Sricharan Rao",
    "keywords": "Map Survey Number 292 Nandigama Hyderabad Telangana 509217 Dr. Somula Ramasubbareddy phone email"
  },
  {
    "page": "Call for Papers",
    "url": "Call_for_paper.html#scope",
    "title": "Call for Papers — Conference Scope & Submission",
    "category": "Call for Papers",
    "text": "Conference Scope AIHC 2027 focuses on industrial and upcoming frontier technologies, applications of AI in diagnostics, patient care systems, and computational intelligence in medicine. The objectives of the conference are to provide high-quality research and professional interactions for the advancement of science, technology, and fellowship. Papers with new research results are encouraged for submission. Paper Submission Link CMT Brochure PDF",
    "keywords": "scope brochure submit paper"
  },
  {
    "page": "Call for Papers",
    "url": "Call_for_paper.html#tracks",
    "title": "Track 1: AI for Medical Diagnostics and Imaging",
    "category": "Technical Tracks",
    "text": "Topics: Deep learning for radiology and histopathology; Medical image classification and object detection; 3D reconstruction from medical scans (MRI, CT, PET); Multi-modal imaging fusion and analysis; AI-driven diagnostic systems for ophthalmology and dermatology; Vision transformers and GANs in medical imaging; Automated screening tools for X-ray, CT, and ultrasound; Radiomics and imaging biomarkers discovery; Real-time AI assistance in surgical imaging",
    "keywords": "technical track topics of interest call for papers special track"
  },
  {
    "page": "Call for Papers",
    "url": "Call_for_paper.html#tracks",
    "title": "Track 2: ML in Clinical Decision Support and Predictive Analytics",
    "category": "Technical Tracks",
    "text": "Topics: Machine learning for electronic health records (EHR) analytics; Clinical decision support systems (CDSS); Disease progression modeling and survival prediction; AI for drug response prediction and personalized treatment; Reinforcement learning for treatment recommendation; Anomaly detection in clinical data; Prognostic and diagnostic models using multi-omics data; Temporal pattern analysis in ICU and emergency data; NLP for clinical text mining and summarization",
    "keywords": "technical track topics of interest call for papers special track"
  },
  {
    "page": "Call for Papers",
    "url": "Call_for_paper.html#tracks",
    "title": "Track 3: IoT, Edge, and Wearable Technologies in Healthcare",
    "category": "Technical Tracks",
    "text": "Topics: IoT-based smart health monitoring systems; Body sensor networks and wearable devices; Edge AI for low-latency medical applications; Mobile health (mHealth) applications with real-time feedback; Remote patient monitoring using AI and IoT; Secure and scalable architectures for medical IoT; Federated learning for distributed medical data; Smart ambient assisted living environments; Data fusion and contextual reasoning in healthcare IoT",
    "keywords": "technical track topics of interest call for papers special track"
  },
  {
    "page": "Call for Papers",
    "url": "Call_for_paper.html#tracks",
    "title": "Track 4: Ethics, Explainability, and Human-Centric AI in Medicine",
    "category": "Technical Tracks",
    "text": "Topics: Explainable AI (XAI) in medical diagnostics; AI fairness and bias mitigation in healthcare models; Ethical frameworks for deploying AI in clinical settings; Human-in-the-loop and collaborative intelligence; Trustworthy and transparent AI systems; Privacy-preserving machine learning in healthcare; Regulatory compliance and responsible AI governance; Societal and policy implications of AI in medicine; AI for underserved and rural healthcare applications",
    "keywords": "technical track topics of interest call for papers special track"
  },
  {
    "page": "Call for Papers",
    "url": "Call_for_paper.html#tracks",
    "title": "Track 5: Integrating Traditional Wellness Systems With Intelligent Healthcare Technologies",
    "category": "Technical Tracks",
    "text": "Topics: AI applications in Ayurveda, Yoga, and Naturopathy; Computational intelligence for holistic wellness assessment; Mind–body health modelling using AI (including Heartfulness & Meditation); Diagnostics and decision-support systems for AYUSH practitioners; Machine learning models for herbal medicine & formulations; Intelligent systems for lifestyle diseases, mental well-being, and preventive care; Integration of AYUSH with IoT, wearable sensors, and digital therapeutics; Evidence-based research frameworks for traditional healthcare; AI-driven personalized wellness recommendations; Indigenous knowledge systems & digital transformation",
    "keywords": "technical track topics of interest call for papers special track"
  },
  {
    "page": "Call for Papers",
    "url": "Call_for_paper.html#tracks",
    "title": "Special Track: AI4-IHS: AI for Intelligent Healthcare Systems",
    "category": "Technical Tracks",
    "text": "Artificial Intelligence is revolutionizing healthcare through intelligent diagnostics, remote patient monitoring, and personalized medicine. This special track aims to bring together researchers, academicians, healthcare professionals, and industry practitioners working on AI-enabled healthcare technologies that integrate the Internet of Medical Things (IoMT), edge/fog/cloud computing, distributed intelligence, and secure computing. The track welcomes original contributions on machine learning, deep learning, federated learning, explainable AI, digital twins, blockchain, cybersecurity, privacy-preserving techniques, and intelligent healthcare analytics. It seeks to promote interdisciplinary research addressing the challenges of building scalable, secure, reliable, and intelligent healthcare systems for next-generation digital healthcare. Chair: Dr. Kshira Sagar Sahoo (Dept of CSE, SRM University-AP, India); Co-Chair: Dr. Rajareddy (University of Saskatchewan, Saskatoon, Canada); Co-Chair: Dr. Thota (Dept of CSE, SRM University-AP, India) Topics: Artificial Intelligence and Machine Learning for Healthcare; Internet of Medical Things (IoMT); Remote Patient Monitoring and Smart Healthcare; Edge, Fog, and Cloud Computing for Healthcare; Federated Learning and Distributed AI in Healthcare; Explainable and Trustworthy AI for Healthcare; Digital Twins for Healthcare Applications; Healthcare Data Analytics and Predictive Modeling; Medical Decision Support Systems; Blockchain for Secure Healthcare Data Management; Cybersecurity and Privacy in Healthcare Systems; Secure Communication Networks for Healthcare",
    "keywords": "technical track topics of interest call for papers special track"
  },
  {
    "page": "Call for Papers",
    "url": "Call_for_paper.html#panels",
    "title": "Panel Discussions (Call for Papers)",
    "category": "Call for Papers",
    "text": "Panel Discussions Conference 2027 will host two signature panel discussions: (a) Responsible Innovations in Deep Learning: Shaping Smart, Sustainable, and Ethical Futures (b) Ethical AI and IoT: Creating Human-Centric Intelligent Ecosystems",
    "keywords": "panel discussions deep learning ethical AI IoT"
  },
  {
    "page": "Instructions for Authors",
    "url": "Instruction_for_authors.html",
    "title": "General Submission Information",
    "category": "For Authors",
    "text": "Prospective authors are invited to submit original technical papers for publication in the AIHC 2027. All papers should adhere to the following guidelines: Key Requirements: All conference submissions should be written in English . Maximum paper length is six (6) printed pages (10-point font), including figures and tables. Review is single blind . Papers having poor quality and/or high similarity index will be desk rejected (without review). All the co-authors must be listed with affiliation details in the initial submission . No further authors can be added for selected papers. All the registered papers must be presented at the conference. Template and Format LaTeX is the preferred method to prepare your manuscript. Please use the standard LaTeX AIHC conference template. For Microsoft Word , please use the most current version of the AIHC conference template, which will help reduce word-to-pdf conversion issues. Camera-Ready Instructions Authors who receive final acceptance after paper revision can only register for the conference. The authors will also be expected to submit a final version of the manuscript that will be added to AIHC proceedings as per the conference template. Please upload camera-ready paper and an eCopy transfer file in **Microsoft CMT**. Please make sure that the camera-ready paper has been generated by the template provided to you (Contains AIHC copyright notice on the first page bottom left, and the conference name as the footer on the rest of the pages) and verified with the PDF Express website . Submission Link Paper Submission Link",
    "keywords": "author instructions template latex word pdf camera-ready cmt pdf express"
  },
  {
    "page": "Instructions for Authors",
    "url": "Instruction_for_authors.html",
    "title": "Download Formats and Templates",
    "category": "For Authors",
    "text": "Word Template PDF Template LaTeX Template Paper Presentation (PDF)",
    "keywords": "author instructions template latex word pdf camera-ready cmt pdf express"
  },
  {
    "page": "Instructions for Authors",
    "url": "Instruction_for_authors.html",
    "title": "Author Support & Clarifications Contact",
    "category": "For Authors",
    "text": "For any clarifications regarding the paper submission guidelines, please email: AIHC2027.SIT@gmail.com",
    "keywords": "email contact support guidelines"
  },
  {
    "page": "Submission Guidelines",
    "url": "Submission_Guidelines.html#about",
    "title": "Submission Guidelines & Formatting Rules",
    "category": "For Authors",
    "text": "Submission Guidelines Papers should be original and not currently under review at another venue. To help ensure correct formatting, please use the IEEE style files for conference proceedings as a template for your submission. These include LaTeX and Word style files, which are available at IEEE Template Selector . Each long paper should have at most 6 pages including figures, tables and references. A maximum of two extra pages per paper is allowed, but with additional charge (100 USD charge per page). All papers must be submitted through CMT platform only: CMT Submission Link The papers need to be submitted online, where they will be reviewed, and the decisions and reviewers comments would be sent to the corresponding author. Paper Formatting: double column, single spaced, #10 point Times Roman font. Please make sure to use the official IEEE style. Only PDF files will be accepted for the review process. We will follow a double-blind review process. New authors cannot be added after submission deadline. Do not submit Review / Survey Paper / Out of Scope paper (Submit paper with original technical outcomes)",
    "keywords": "IEEE style double column 10 point Times Roman PDF double-blind CMT 6 pages extra page 100 USD"
  },
  {
    "page": "Submission Guidelines",
    "url": "Submission_Guidelines.html#policies",
    "title": "Review Process, Plagiarism & Copyright Policy",
    "category": "For Authors",
    "text": "Plagiarism & Copyright Policy Plagiarism Policy Whether intentional or not, plagiarism is a serious violation. Plagiarism is copying ideas, text, data and other creative work (e.g. tables, figures and graphs) and presenting it as original research without proper citation. We define plagiarism as a case in which a paper reproduces another work with at least 20% similarity and without citation. We are very serious about Plagiarism Content; we accept only original articles. The article may be rejected at any time if found plagiarized. For more information refer IEEE page – A Plagiarism FAQ Copyright Policy If an author would like to post their papers electronically on any website, any FTP site, or any other electronic dissemination technique, they must include the IEEE Copyright notice on the initial screen displaying the IEEE-copyrighted material.",
    "keywords": "peer review similarity 20% plagiarism IEEE copyright policy"
  },
  {
    "page": "Submission Guidelines",
    "url": "Submission_Guidelines.html#presentation-guidelines",
    "title": "Presentation Guidelines (Oral & AV Equipment)",
    "category": "For Authors",
    "text": "Presentation Guidelines Each oral presentation is limited to 15 minutes including questions and answers (Q&As). Length of the presentation material should be commensurate within the allocated time. You are requested to load your PowerPoint presentation materials before the sessions start. Authors must prepare their oral presentations to be sure to convey their message in clear and sharp manner, including giving outline of the key principles, facts and results. More detailed discussions can continue during the breaks. We recommend the PPT/PPTX/PDF format. All videos or animations in the presentation must run automatically! All meeting rooms are equipped with the following audio-visual equipment: One Projector One Screen",
    "keywords": "15 minutes Q&A PowerPoint PPT PPTX PDF projector screen"
  },
  {
    "page": "Registration",
    "url": "registration.html",
    "title": "Conference Registration Fees, Deadlines & Notes",
    "category": "Registration",
    "text": "Conference Registration Join us for three days of cutting-edge research presentations, networking opportunities, and professional development in technology and management. Registration Fees Category Early Bird (Deadline: October 30 2026) Regular (Deadline: November 10) Extended Deadline November 18 2026 Spot Indian Authors Academia / R&D / Industry ₹9000 ₹10000 ₹11000 IEEE Members ₹8000 ₹9000 ₹10000 Students ₹6000 ₹7000 ₹8000 IEEE Student Members ₹5000 ₹6000 ₹7000 Foreign Authors Academia / R&D / Industry $200 $225 $250 IEEE Members $175 $200 $225 Students $125 $150 $225 IEEE Student Members $100 $125 $150 Listener / Attendees without paper ₹3500 / 4000 ₹4000 / 4500 ₹4500 / 5000 All Registration Fees excluding GST. What's Included Access to all keynote sessions Technical paper presentations Workshop and tutorial sessions Conference proceedings (digital) Welcome reception and networking Coffee breaks and refreshments Important Notes All costs above are in INR / USD. Payment will be processed in the local currency after conversion from USD to INR. All participants (authors, co-authors, non-authors) must register individually. Each complete registration allows only one paper. Author registration includes one free paper. Extra papers must be added and paid for. All papers must be registered. Unregistered papers will not be included in the program. All registration categories include access to technical sessions, welcome reception, inauguration, closing ceremony, daily working lunches, and conference banquet. Cancellation Policy: The registration fee is non-refundable. Register Now Registration opens October 26, 2026",
    "keywords": "Early Bird October 30 Regular November 10 Extended November 18 Spot Indian Foreign IEEE Student Listener INR USD GST non-refundable"
  },
  {
    "page": "CMT Acknowledgment",
    "url": "CMT_ACKNOWLEDGMENT.html#about",
    "title": "Microsoft CMT Acknowledgment",
    "category": "Acknowledgment",
    "text": "CMT ACKNOWLEDGMENT CMT ACKNOWLEDGMENT: The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.",
    "keywords": "Microsoft CMT peer-reviewing Azure cloud services"
  },
  {
    "page": "Places",
    "url": "Place.html#places",
    "title": "Visit Hyderabad: Statue of Equality",
    "category": "Places",
    "text": "flex flex-col h-full\"> ~24 km Statue of Equality A 216-foot tall statue of the 11th-century Vaishnavaite saint Ramanuja. Located in Muchintal, it is one of the closest major landmarks to the conference venue, offering a spiritual and architectural marvel. Get Directions <div class=\"bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100",
    "keywords": "Hyderabad sightseeing tourism distance from SIT campus directions"
  },
  {
    "page": "Places",
    "url": "Place.html#places",
    "title": "Visit Hyderabad: Charminar",
    "category": "Places",
    "text": "flex flex-col h-full\"> ~45 km Charminar The global icon of Hyderabad, constructed in 1591. This monument and mosque is known for its intricate architecture and the bustling Laad Bazaar surrounding it, famous for pearls and bangles. Get Directions <div class=\"bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100",
    "keywords": "Hyderabad sightseeing tourism distance from SIT campus directions"
  },
  {
    "page": "Places",
    "url": "Place.html#places",
    "title": "Visit Hyderabad: Golconda Fort",
    "category": "Places",
    "text": "flex flex-col h-full\"> ~48 km Golconda Fort A fortified citadel and an early capital city of the Qutb Shahi dynasty. Famous for its acoustic engineering, where a clap at the entrance can be heard at the highest point, a kilometer away. Get Directions <div class=\"bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100",
    "keywords": "Hyderabad sightseeing tourism distance from SIT campus directions"
  },
  {
    "page": "Places",
    "url": "Place.html#places",
    "title": "Visit Hyderabad: Ramoji Film City",
    "category": "Places",
    "text": "flex flex-col h-full\"> ~75 km Ramoji Film City Certified by Guinness World Records as the world's largest film studio complex. A fun-filled destination with live shows, thematic sets, adventure parks, and cinematic grandeur. Get Directions <div class=\"bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100",
    "keywords": "Hyderabad sightseeing tourism distance from SIT campus directions"
  },
  {
    "page": "Places",
    "url": "Place.html#places",
    "title": "Visit Hyderabad: Hussain Sagar Lake",
    "category": "Places",
    "text": "flex flex-col h-full\"> ~50 km Hussain Sagar Lake A heart-shaped lake built by Ibrahim Quli Qutb Shah. It features a massive monolith statue of Buddha in the middle, accessible by boat. The nearby necklace road offers beautiful evening views. Get Directions <div class=\"bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100",
    "keywords": "Hyderabad sightseeing tourism distance from SIT campus directions"
  },
  {
    "page": "Places",
    "url": "Place.html#places",
    "title": "Visit Hyderabad: Chowmahalla Palace",
    "category": "Places",
    "text": "flex flex-col h-full\"> ~44 km Chowmahalla Palace The seat of the Asaf Jahi dynasty, this palace was where the Nizams entertained their official guests. It is renowned for its unique style, elegance, and the vintage car collection of the Nizam. Get Directions <div class=\"bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100",
    "keywords": "Hyderabad sightseeing tourism distance from SIT campus directions"
  },
  {
    "page": "Places",
    "url": "Place.html#places",
    "title": "Visit Hyderabad: Birla Temple",
    "category": "Places",
    "text": "flex flex-col h-full\"> ~38 km Birla Temple Birla Mandirs (temples built by the Birla family across India) are famous for their stunning white marble architecture, intricate carvings, and spiritual significance, blending traditional Indian styles (like Rajasthani, Dravidian) with modern designs, often dedicated to Lakshmi-Narayana (Vishnu & Lakshmi) or Lord Venkateswara, serving as popular pilgrimage sites and landmarks known for peace, beauty, and inclusivity. Get Directions <div class=\"bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100",
    "keywords": "Hyderabad sightseeing tourism distance from SIT campus directions"
  },
  {
    "page": "Places",
    "url": "Place.html#places",
    "title": "Visit Hyderabad: Salar Jung Museum",
    "category": "Places",
    "text": "flex flex-col h-full\"> ~44 km Salar Jung Museum The Salar Jung Museum's speciality lies in its vast, eclectic collection of antiques and art from around the world, amassed by Salar Jung III, featuring world-famous pieces like the Veiled Rebecca sculpture, the intricate Cuckoo Clock, rare Jade carvings, historic Indian Manuscripts & Books, and impressive Arms & Armour, making it India's third-largest museum and a treasure trove of diverse cultures and eras. Get Directions <div class=\"bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100",
    "keywords": "Hyderabad sightseeing tourism distance from SIT campus directions"
  },
  {
    "page": "Places",
    "url": "Place.html#places",
    "title": "Visit Hyderabad: Wonderla Amusement Park",
    "category": "Places",
    "text": "flex flex-col h-full\"> ~58 km Wonderla Amusement Park Wonderla Hyderabad is a large, popular amusement and water park on the outskirts of the city (Raviryal) offering over 40 rides and attractions, including high-thrill roller coasters like 'Recoil', water slides, a wave pool, and family rides, with dining and clean facilities, providing a full day of entertainment for all ages with varied ticket options. Get Directions",
    "keywords": "Hyderabad sightseeing tourism distance from SIT campus directions"
  }
];

    const PAGE_BADGE_CLASSES = {
        'Home': 'bg-blue-100 text-blue-800',
        'Call for Papers': 'bg-indigo-100 text-indigo-800',
        'Instructions for Authors': 'bg-emerald-100 text-emerald-800',
        'Submission Guidelines': 'bg-amber-100 text-amber-800',
        'Registration': 'bg-purple-100 text-purple-800',
        'Places': 'bg-teal-100 text-teal-800',
        'CMT Acknowledgment': 'bg-slate-100 text-slate-800'
    };

    function escapeHtml(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function escapeRegex(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    function highlightText(text, terms) {
        let escaped = escapeHtml(text);
        if (!terms.length) return escaped;
        const pattern = terms
            .filter(Boolean)
            .sort((a, b) => b.length - a.length)
            .map(escapeRegex)
            .join('|');
        if (!pattern) return escaped;
        const re = new RegExp('(' + pattern + ')', 'gi');
        return escaped.replace(re, '<mark class="bg-yellow-200 text-blue-950 font-semibold px-0.5 rounded">$1</mark>');
    }

    function buildSnippet(text, terms) {
        const maxLen = 150;
        if (!text) return '';
        const lower = text.toLowerCase();
        let firstIdx = -1;
        for (const t of terms) {
            const idx = lower.indexOf(t);
            if (idx !== -1 && (firstIdx === -1 || idx < firstIdx)) {
                firstIdx = idx;
            }
        }
        if (firstIdx === -1 || text.length <= maxLen) {
            const sliced = text.length > maxLen ? text.slice(0, maxLen).trimEnd() + '...' : text;
            return highlightText(sliced, terms);
        }
        const start = Math.max(0, firstIdx - 45);
        const end = Math.min(text.length, start + maxLen);
        const prefix = start > 0 ? '...' : '';
        const suffix = end < text.length ? '...' : '';
        return prefix + highlightText(text.slice(start, end).trim(), terms) + suffix;
    }

    function scoreEntry(entry, rawQuery, terms) {
        const titleL = entry.title.toLowerCase();
        const pageL = entry.page.toLowerCase();
        const catL = entry.category.toLowerCase();
        const textL = entry.text.toLowerCase();
        const kwL = (entry.keywords || '').toLowerCase();
        const combined = titleL + ' ' + pageL + ' ' + catL + ' ' + textL + ' ' + kwL;

        let matchedTerms = 0;
        let score = 0;

        for (const t of terms) {
            if (!combined.includes(t)) continue;
            matchedTerms++;
            if (titleL.includes(t)) score += 45;
            if (catL.includes(t) || pageL.includes(t)) score += 22;
            if (textL.includes(t)) score += 12;
            if (kwL.includes(t)) score += 8;
        }

        if (matchedTerms === 0) return { matchedAll: false, score: 0 };

        if (titleL.includes(rawQuery)) score += 100;
        if (textL.includes(rawQuery)) score += 30;

        return {
            matchedAll: matchedTerms === terms.length,
            score: matchedTerms === terms.length ? score + 50 : score
        };
    }

    function searchEntries(query) {
        const raw = query.trim().toLowerCase();
        if (!raw) return [];
        const terms = raw.split(/\s+/).filter(Boolean);

        const allMatches = [];
        const partialMatches = [];

        for (const entry of SEARCH_INDEX) {
            const res = scoreEntry(entry, raw, terms);
            if (res.score <= 0) continue;
            const item = { entry, score: res.score, terms };
            if (res.matchedAll) {
                allMatches.push(item);
            } else {
                partialMatches.push(item);
            }
        }

        const list = allMatches.length > 0 ? allMatches : partialMatches;
        list.sort((a, b) => b.score - a.score);
        return list;
    }

    function navigateToResult(url) {
        const currentFile = window.location.pathname.split('/').pop() || 'index.html';
        const [targetFile, targetHash] = url.split('#');
        if ((targetFile === currentFile || (!targetFile && currentFile === 'index.html')) && targetHash) {
            const targetEl = document.getElementById(targetHash);
            if (targetEl) {
                targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                history.replaceState(null, '', '#' + targetHash);
                return;
            }
        }
        window.location.href = url;
    }

    function initSearchWidget(container) {
        const input = container.querySelector('[data-search-input]');
        const clearBtn = container.querySelector('[data-search-clear]');
        const dropdown = container.querySelector('[data-search-results]');
        if (!input || !dropdown) return;

        let activeIndex = -1;
        let currentItems = [];

        function closeDropdown() {
            dropdown.classList.add('hidden');
            input.setAttribute('aria-expanded', 'false');
            activeIndex = -1;
        }

        function openDropdown() {
            dropdown.classList.remove('hidden');
            input.setAttribute('aria-expanded', 'true');
        }

        function updateActiveItem() {
            const rows = dropdown.querySelectorAll('[data-result-index]');
            rows.forEach((row, idx) => {
                if (idx === activeIndex) {
                    row.classList.add('bg-blue-50', 'ring-1', 'ring-inset', 'ring-blue-200');
                    row.scrollIntoView({ block: 'nearest' });
                } else {
                    row.classList.remove('bg-blue-50', 'ring-1', 'ring-inset', 'ring-blue-200');
                }
            });
        }

        function renderResults(query) {
            const trimmed = query.trim();
            if (clearBtn) {
                clearBtn.classList.toggle('hidden', trimmed.length === 0);
            }

            if (!trimmed) {
                currentItems = [];
                closeDropdown();
                dropdown.innerHTML = '';
                return;
            }

            const matches = searchEntries(trimmed);
            currentItems = matches.slice(0, 10);
            activeIndex = -1;

            if (currentItems.length === 0) {
                dropdown.innerHTML =
                    '<div class="px-4 py-6 text-center text-sm text-gray-500">' +
                    '<i class="fas fa-search text-gray-300 text-xl mb-2 block" aria-hidden="true"></i>' +
                    'No results found for <strong class="text-gray-700">&ldquo;' + escapeHtml(trimmed) + '&rdquo;</strong>.' +
                    '<p class="text-xs text-gray-400 mt-1">Try searching tracks, dates, fees, speakers, committees, or places.</p>' +
                    '</div>';
                openDropdown();
                return;
            }

            const headerHtml =
                '<div class="px-3.5 py-2 bg-gray-50 border-b border-gray-100 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-gray-500">' +
                '<span>Search Results</span>' +
                '<span>' + matches.length + (matches.length === 1 ? ' match' : ' matches') + '</span>' +
                '</div>';

            const rowsHtml = currentItems.map((item, idx) => {
                const e = item.entry;
                const badgeCls = PAGE_BADGE_CLASSES[e.page] || 'bg-gray-100 text-gray-700';
                const snippet = buildSnippet(e.text, item.terms);
                return (
                    '<a href="' + escapeHtml(e.url) + '" data-result-index="' + idx + '" ' +
                    'class="block px-3.5 py-2.5 border-b border-gray-100 last:border-b-0 hover:bg-blue-50/70 transition-colors focus:outline-none">' +
                    '<div class="flex items-center justify-between gap-2 mb-0.5">' +
                    '<span class="text-sm font-semibold text-blue-900 truncate">' + highlightText(e.title, item.terms) + '</span>' +
                    '<span class="shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full ' + badgeCls + '">' + escapeHtml(e.page) + '</span>' +
                    '</div>' +
                    '<p class="text-xs text-gray-600 leading-relaxed line-clamp-2">' + snippet + '</p>' +
                    '</a>'
                );
            }).join('');

            dropdown.innerHTML = headerHtml + '<div class="max-h-80 overflow-y-auto">' + rowsHtml + '</div>';
            openDropdown();
        }

        input.addEventListener('input', () => renderResults(input.value));

        input.addEventListener('focus', () => {
            if (input.value.trim().length > 0) {
                renderResults(input.value);
            }
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeDropdown();
                input.blur();
                return;
            }
            if (dropdown.classList.contains('hidden') || currentItems.length === 0) {
                if (e.key === 'Enter' && input.value.trim()) {
                    e.preventDefault();
                    renderResults(input.value);
                }
                return;
            }
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                activeIndex = (activeIndex + 1) % currentItems.length;
                updateActiveItem();
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                activeIndex = activeIndex <= 0 ? currentItems.length - 1 : activeIndex - 1;
                updateActiveItem();
            } else if (e.key === 'Enter') {
                e.preventDefault();
                const chosen = activeIndex >= 0 ? currentItems[activeIndex] : currentItems[0];
                if (chosen) {
                    closeDropdown();
                    navigateToResult(chosen.entry.url);
                }
            }
        });

        dropdown.addEventListener('click', (e) => {
            const link = e.target.closest('a[data-result-index]');
            if (!link) return;
            e.preventDefault();
            const href = link.getAttribute('href');
            closeDropdown();
            if (href) navigateToResult(href);
        });

        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                input.value = '';
                renderResults('');
                input.focus();
            });
        }

        document.addEventListener('click', (e) => {
            if (!container.contains(e.target)) {
                closeDropdown();
            }
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        const widgets = document.querySelectorAll('[data-site-search]');
        widgets.forEach(initSearchWidget);

        // Press "/" to focus the currently visible search input
        document.addEventListener('keydown', (e) => {
            if (e.key !== '/' || e.ctrlKey || e.metaKey || e.altKey) return;
            const tag = (document.activeElement && document.activeElement.tagName || '').toLowerCase();
            if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
            for (const w of widgets) {
                const inp = w.querySelector('[data-search-input]');
                if (inp && inp.offsetParent !== null) {
                    e.preventDefault();
                    inp.focus();
                    break;
                }
            }
        });
    });
})();
