import { motion } from 'framer-motion';
import { BookOpen, BookText, Book, ExternalLink, Quote } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

const Publications = () => {
  const [activeTab, setActiveTab] = useState('sci');

  const sciPublications = [
    {
      authors: "King, J. A., Natarajan, S., & Mohan, V.",
      year: "2025",
      title: "Combo-U-NeXt-based lung nodule segmentation and neuron attention LeNet for lung cancer detection using CT images",
      journal: "International Journal for Multiscale Computational Engineering, 23(5), 33–57",
      doi: "https://doi.org/10.1615/IntJMultCompEng.2025055115"
    },
    {
      authors: "Mehadi Hasan, M. Vijay, S. Sharanyaa, and Vinnakota Sai Durga Tejaswi",
      year: "2024",
      title: "Ensemble Model with Improved U-Net-Based Segmentation for Leukaemia Detection",
      journal: "Biomedical Engineering: Applications, Basis and Communications, Vol. 36, No. 03, 2450011",
      doi: "https://doi.org/10.4015/S101623722450011X"
    },
    {
      authors: "Vijay M, Jagrati Singh, Ruth Ramya",
      year: "2024",
      title: "Dense net with shark mud ring optimization for severity detection of tuberculosis using sputum image",
      journal: "Biomedical Signal Processing and Control, Volume 91, 105929",
      doi: "https://doi.org/10.1016/j.bspc.2023.105929"
    },
    {
      authors: "J Monisha Privthy Jeba, K Vivekrabinson, B Shanmuga Raja, N Sundareswaran, M Vijay",
      year: "2024",
      title: "Certificateless searchable attribute-based encryption approach for cloud data based on blockchain",
      journal: "International Journal of Ad Hoc and Ubiquitous Computing, Volume 45 Issue 4 Pages 239-253",
      doi: "https://doi.org/10.1504/IJAHUC.2024.137598"
    },
    {
      authors: "Vijay M, Amol Dattatray Dhaygude and Mehadi Hasan",
      year: "2023",
      title: "Deep Learning-Based Feature Fusion and Transfer Learning for approximating pIC value of COVID 19 Medicine using drug discovery data",
      journal: "Journal of Mechanics in Medicine and Biology",
      doi: "https://doi.org/10.1142/S0219519423501002"
    },
    {
      authors: "Vijay M & Indumathi G",
      year: "2021",
      title: "A nature-inspired meta-heuristic paradigm for person identification using multimodal biometrics",
      journal: "Concurrency and Computation: Practice and Experience",
      doi: "https://doi.org/10.1002/cpe.6420"
    },
    {
      authors: "Vijay M & Indumathi G",
      year: "2021",
      title: "Deep belief network-based hybrid model for multimodal biometric system for futuristic security applications",
      journal: "Journal of Information Security and Applications, 58, 102707",
      doi: "10.1016/j.jisa.2020.102707"
    },
    {
      authors: "Vijay M & Indumathi, G",
      year: "2018",
      title: "GwPeSOA-based MSVNN:the multimodal biometric system for futuristic security applications",
      journal: "Sadhana-Academy Proceedings in Engineering Sciences, vol. 43, no. 12, pp. 198",
      issn: "0256-2499"
    },
    {
      authors: "Arivazhagan, Sugitha & Vijay",
      year: "2015",
      title: "A novel image denoising scheme based on fusing multiresolution and spatial filters",
      journal: "Signal, Image and Video Processing, vol. 8, no. 35, pp:1863-1711"
    }
  ];

  const bookChapters = [
    {
      authors: "Vijay, M., Nagaraj, P., Sundareswaran, N., & Christopher, S. R. B.",
      year: "2025",
      title: "Deep Generative AI-Based Multimodal Biometric Authentication System for Enhanced Security and Accessibility in Healthcare Applications",
      publisher: "Advances in Deep Generative Models for Healthcare and Medical Applications (pp. 184-205). CRC Press"
    },
    {
      year: "2024",
      title: "Image denoising based on nature-inspired optimized deep neural network",
      publisher: "AIP Conference Proceedings, Volume 3075, Issue 1, id.020045",
      doi: "10.1063/5.0217549"
    },
    {
      year: "2024",
      title: "Synthesis of deep learning supported modulation signal classification model for underwater acoustic communication",
      publisher: "AIP Conf. Proc. 3031, 020003",
      doi: "https://doi.org/10.1063/5.0194220"
    },
    {
      year: "2024",
      title: "Supporting Smart Meter Context Management Using OWL Ontology and Hyperledger Fabric Blockchain",
      publisher: "International Conference on Mathematics and Computing",
      doi: "https://link.springer.com/chapter/10.1007/978-981-97-2069-9_3"
    },
    {
      year: "2023",
      title: "Fake Product Review Detection Using Machine Learning",
      publisher: "Advanced Communication and Intelligent Systems. ICACIS 2023. Communications in Computer and Information Science, vol 1921. Springer, Cham.",
      doi: "https://doi.org/10.1007/978-3-031-45124-9_16"
    },
    {
      year: "2022",
      title: "Anomaly Detection System and Resolution of Anomalies for Firewall Policies",
      publisher: "Smart Data Intelligence. Algorithms for Intelligent Systems. Springer, Singapore.",
      doi: "https://doi.org/10.1007/978-981-19-3311-0_12"
    },
    {
      year: "2020",
      title: "Multimodal biometric system using Ear and Palm Vein recognition based on GwPeSOA - Multi-SVNN for security applications",
      publisher: "Springer - Lecture Notes in Computational Science and Engineering",
      doi: "https://doi.org/10.1007/978-3-030-41862-5_20"
    }
  ];

  const ieeePublications = [
    {
      authors: "V. M, B. P. Kumar, S. V. Vardhan and V. S. G. Reddy",
      year: "2025",
      title: "AI-Driven Multimodal Authentication: Strengthening Healthcare Biometric Security with GRNs",
      conference: "2025 International Conference on Computing Technologies (ICOCT), Bengaluru, India",
      doi: "10.1109/ICOCT64433.2025.11118508"
    },
    {
      authors: "C. S. A and M. Vijay",
      year: "2025",
      title: "Early Lung cancer Detection using Deep Fractional Fractal-Kronecker Network (DF2KNet)",
      conference: "2025 6th International Conference on IoT Based Control Networks and Intelligent Systems (ICICNIS), Bengaluru, India",
      doi: "10.1109/ICICNIS66685.2025.11315813"
    },
    {
      authors: "V. M, K. Kavitha, A. Rachamreddy, S. Vemulapati, J. Nallagatla and M. Bhargavi Ravipati",
      year: "2025",
      title: "Smart Voice-to-Animation Interface for Hearing-Impaired Communication",
      conference: "2025 2nd International Conference on Electronic Circuits and Signaling Technologies (ICECST), Petaling Jaya, Malaysia",
      doi: "10.1109/ICECST66106.2025.11307531"
    },
    {
      authors: "J.Benita and M.Vijay",
      year: "2025",
      title: "Implementation of Vision Transformers (ViTs) based Advanced Iris Image Analysis for Non-Invasive Detection of Diabetic Conditions",
      conference: "2025 International Conference on Intelligent Computing and Control Systems (ICICCS), Erode, India",
      doi: "10.1109/ICICCS65191.2025.10984517"
    },
    {
      authors: "V. M, S. Manikanta, J. S. Kumar, Amarnath and G. Naidu",
      year: "2024",
      title: "CNN-Based Intrusion Detection System for Real-Time Network Protection Against Cyberattacks",
      conference: "2024 International Conference on Communication, Computing, Smart Materials and Devices (ICCCSMD), Chennai, India",
      doi: "10.1109/ICCCSMD63546.2024.11015238"
    },
    {
      authors: "V. M, B. Vighnesh, C. Santosh, S. M. Dhanush and C. Hemanth",
      year: "2024",
      title: "A Virtual Assistant with Real-Time Sign-to-Sign Language Translation for Users with Disabilities",
      conference: "2024 International Conference on IoT Based Control Networks and Intelligent Systems (ICICNIS), Bengaluru, India",
      doi: "10.1109/ICICNIS64247.2024.10823143"
    },
    {
      authors: "V. M, M. S. K and S. G. R",
      year: "2024",
      title: "Ensemble Based Deep Learning Model for Prediction of Oral Squamous Cell Carcinom",
      conference: "2024 International Conference on Innovative Computing, Intelligent Communication and Smart Electrical Systems (ICSES), Chennai, India",
      doi: "10.1109/ICSES63760.2024.10910525"
    },
    {
      year: "2024",
      title: "Bio-Inspired Metaheuristic Feature Fusion method for Multi-Biometric Identification",
      conference: "2024 IEEE International Conference on Reliability, Infocom Technologies and Optimization (Trends and Future Directions) (ICRITO)",
      doi: "10.1109/ICRITO61523.2024.10522216"
    },
    {
      year: "2023",
      title: "Blockchain Enabled Real Estate Property Transactions using NFT: An Approach",
      conference: "IEEE - 2023 International Conference on Research Methodologies in Knowledge Management, Artificial Intelligence and Telecommunication Engineering",
      doi: "10.1109/RMKMATE59243.2023.10369785"
    },
    {
      year: "2012",
      title: "A new hybrid image restoration method based on fusion of spatial and transform domain methods",
      conference: "2012 IEEE International Conference on Recent Advances in Computing and Software Systems",
      doi: "10.1109/RACSS.2012.6212696"
    },
    {
      year: "2012",
      title: "Image denoising based on adaptive spatial and Wavelet Thresholding methods",
      conference: "IEEE-International Conference on Advances in Engineering, Science and Management (ICAESM -2012)"
    },
    {
      year: "2012",
      title: "Adaptive spatial and wavelet multiscale products thresholding method for medical image denoising",
      conference: "2012 IEEE International Conference on Computing, Electronics and Electrical Technologies (ICCEET)",
      doi: "10.1109/ICCEET.2012.6203821"
    },
    {
      year: "2013",
      title: "Image steganography algorithm based on Huffman encoding and transform domain method",
      conference: "2013 Fifth IEEE International Conference on Advanced Computing (ICoAC)",
      doi: "10.1109/ICoAC.2013.6922005"
    },
    {
      year: "2012",
      title: "Spatially adaptive Image Restoration method using LPG-PCA and JBF",
      conference: "IEEE International Conference on Machine Vision and Image Processing (MVIP), Dec. 2012"
    },
    {
      year: "2011",
      title: "Adaptive spatial and multiresolution approach for image denoising",
      conference: "2011 IEEE International Conference on Signal Processing, Communication, Computing and Networking Technologies",
      doi: "10.1109/ICSCCN.2011.6024662"
    },
    {
      year: "2021",
      title: "Diagnosing Cancer Cells Using Histopathological Images with Deep Learning",
      conference: "2021 Sixth IEEE International Conference on Wireless Communications, Signal Processing and Networking (WiSPNET)",
      doi: "10.1109/WiSPNET51692.2021.9419468"
    },
    {
      year: "2022",
      title: "Group Face Recognition Smart Attendance System Using Convolution Neural Network",
      conference: "2022 International Conference on Wireless Communications Signal Processing and Networking (WiSPNET)",
      doi: "10.1109/WiSPNET54241.2022.9767128"
    }
  ];

  const tabs = [
    { id: 'sci', label: 'Journal Papers (SCI)', icon: <BookOpen size={16} />, data: sciPublications },
    { id: 'book', label: 'Book Chapters', icon: <BookText size={16} />, data: bookChapters },
    { id: 'ieee', label: 'IEEE / Conference', icon: <Book size={16} />, data: ieeePublications },
  ];

  return (
    <section id="publications" className="py-20 relative scroll-mt-32">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-14 w-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 glass border-white/10 shadow-2xl shadow-emerald-500/10">
              <BookOpen size={28} />
            </div>
            <div>
              <p className="section-subheading">Scholarly Works</p>
              <h2 className="section-heading">Research Portfolio</h2>
            </div>
          </div>
          <p className="text-white/60 text-lg max-w-2xl font-medium leading-relaxed">
            A comprehensive list of high-impact research contributions spanning across international journals,
            prestigious book publishers, and global IEEE conferences.
          </p>
        </div>

        <div className="flex gap-4">
          <div className="glass px-6 py-4 rounded-2xl flex items-center gap-4">
            <div className="text-right">
              <div className="text-2xl font-bold text-white">44+</div>
              <div className="text-xs text-white/40 uppercase tracking-widest font-medium">Total Pubs</div>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-400">10</div>
              <div className="text-xs text-white/40 uppercase tracking-widest font-medium">SCI Indexed</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-12 p-1.5 glass rounded-[1.25rem] w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300",
              activeTab === tab.id
                ? "bg-white text-black shadow-lg"
                : "text-white/60 hover:text-white hover:bg-white/5"
            )}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid gap-6">
        {tabs.find(t => t.id === activeTab)?.data.map((pub, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="glass-card group p-6 lg:p-8 hover:border-blue-500/30"
          >
            <div className="flex gap-6">
              <div className="hidden md:flex h-12 w-12 rounded-xl bg-white/5 items-center justify-center text-white/20 shrink-0 group-hover:text-blue-500/50 transition-colors">
                <Quote size={24} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <h3 className="text-xl font-bold text-white leading-tight group-hover:text-blue-400 transition-colors">
                    {pub.title}
                  </h3>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-white/40 group-hover:text-white/60">
                    {pub.year}
                  </span>
                </div>

                <p className="text-white/50 text-sm mb-4 leading-relaxed font-medium">
                  {pub.authors}
                </p>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                  <div className="flex items-center gap-2 text-sm text-white/40">
                    <BookOpen size={14} className="text-blue-500" />
                    <span className="italic">{(pub as any).journal || (pub as any).conference || (pub as any).publisher}</span>
                  </div>

                  {(pub as any).doi && (
                    <a
                      href={(pub as any).doi.includes('http') ? (pub as any).doi : `https://doi.org/${(pub as any).doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink size={12} />
                      View Publication
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Publications;