import React from 'react';
import { BookOpen, BookText, Book } from 'lucide-react';

const Publications = () => {
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
      journal: "AIP Conference Proceedings, Volume 3075, Issue 1, id.020045",
      doi: "10.1063/5.0217549"
    },
    {
      year: "2024",
      title: "Synthesis of deep learning supported modulation signal classification model for underwater acoustic communication",
      journal: "AIP Conf. Proc. 3031, 020003",
      doi: "https://doi.org/10.1063/5.0194220"
    },
    {
      year: "2024",
      title: "Supporting Smart Meter Context Management Using OWL Ontology and Hyperledger Fabric Blockchain",
      journal: "International Conference on Mathematics and Computing",
      doi: "https://link.springer.com/chapter/10.1007/978-981-97-2069-9_3"
    },
    {
      year: "2023",
      title: "Fake Product Review Detection Using Machine Learning",
      journal: "Advanced Communication and Intelligent Systems. ICACIS 2023. Communications in Computer and Information Science, vol 1921. Springer, Cham.",
      doi: "https://doi.org/10.1007/978-3-031-45124-9_16"
    },
    {
      year: "2022",
      title: "Anomaly Detection System and Resolution of Anomalies for Firewall Policies",
      journal: "Smart Data Intelligence. Algorithms for Intelligent Systems. Springer, Singapore.",
      doi: "https://doi.org/10.1007/978-981-19-3311-0_12"
    },
    {
      year: "2020",
      title: "Multimodal biometric system using Ear and Palm Vein recognition based on GwPeSOA - Multi-SVNN for security applications",
      journal: "Springer - Lecture Notes in Computational Science and Engineering",
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
      title: "Bio-Inspired Metaheuristic Feature Fusion method for Multi-Biometric Identification",
      conference: "2024 IEEE International Conference on Reliability, Infocom Technologies and Optimization (Trends and Future Directions) (ICRITO)",
      doi: "10.1109/ICRITO61523.2024.10522216"
    },
    {
      title: "Blockchain Enabled Real Estate Property Transactions using NFT: An Approach",
      conference: "IEEE - 2023 International Conference on Research Methodologies in Knowledge Management, Artificial Intelligence and Telecommunication Engineering",
      doi: "10.1109/RMKMATE59243.2023.10369785"
    },
    {
      title: "A new hybrid image restoration method based on fusion of spatial and transform domain methods",
      conference: "2012 IEEE International Conference on Recent Advances in Computing and Software Systems",
      doi: "10.1109/RACSS.2012.6212696"
    },
    {
      title: "Image denoising based on adaptive spatial and Wavelet Thresholding methods",
      conference: "IEEE-International Conference on Advances in Engineering, Science and Management (ICAESM -2012)"
    },
    {
      title: "Adaptive spatial and wavelet multiscale products thresholding method for medical image denoising",
      conference: "2012 IEEE International Conference on Computing, Electronics and Electrical Technologies (ICCEET)",
      doi: "10.1109/ICCEET.2012.6203821"
    },
    {
      title: "Image steganography algorithm based on Huffman encoding and transform domain method",
      conference: "2013 Fifth IEEE International Conference on Advanced Computing (ICoAC)",
      doi: "10.1109/ICoAC.2013.6922005"
    },
    {
      title: "Spatially adaptive Image Restoration method using LPG-PCA and JBF",
      conference: "IEEE International Conference on Machine Vision and Image Processing (MVIP), Dec. 2012"
    },
    {
      title: "Adaptive spatial and multiresolution approach for image denoising",
      conference: "2011 IEEE International Conference on Signal Processing, Communication, Computing and Networking Technologies",
      doi: "10.1109/ICSCCN.2011.6024662"
    },
    {
      title: "Diagnosing Cancer Cells Using Histopathological Images with Deep Learning",
      conference: "2021 Sixth IEEE International Conference on Wireless Communications, Signal Processing and Networking (WiSPNET)",
      doi: "10.1109/WiSPNET51692.2021.9419468"
    },
    {
      title: "Group Face Recognition Smart Attendance System Using Convolution Neural Network",
      conference: "2022 International Conference on Wireless Communications Signal Processing and Networking (WiSPNET)",
      doi: "10.1109/WiSPNET54241.2022.9767128"
    }
  ];

  return (
    <section id="publications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Publications</h2>

        <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
          <div className="text-center px-4">
            <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-2" />
            <div className="text-3xl font-bold">10</div>
            <div className="text-gray-600">SCI Journal Papers</div>
          </div>
          <div className="text-center px-4">
            <BookText className="w-12 h-12 text-blue-600 mx-auto mb-2" />
            <div className="text-3xl font-bold">7</div>
            <div className="text-gray-600">Book Chapters</div>
          </div>
          <div className="text-center px-4">
            <Book className="w-12 h-12 text-blue-600 mx-auto mb-2" />
            <div className="text-3xl font-bold">27</div>
            <div className="text-gray-600">IEEE & Scopus Papers</div>
          </div>
        </div>

        <div className="space-y-12">
          {/* SCI Journal Publications */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-blue-900 border-b pb-4">SCI Journal Publications</h3>
            <div className="grid gap-6">
              {sciPublications.map((pub, i) => (
                <div key={i} className="border-l-4 border-blue-600 pl-4 hover:bg-blue-50/50 p-2 rounded-r-lg transition-colors">
                  <h4 className="font-bold text-lg">{pub.title}</h4>
                  <p className="text-gray-600 mt-1 italic">{pub.authors} ({pub.year})</p>
                  <p className="text-gray-700 font-medium">{pub.journal}</p>
                  {pub.doi && (
                    <a href={pub.doi.includes('http') ? pub.doi : `https://doi.org/${pub.doi}`}
                      target="_blank" rel="noopener noreferrer"
                      className="text-blue-600 text-sm hover:underline mt-1 inline-block">
                      {pub.doi}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Book Chapters */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-green-900 border-b pb-4">Scopus Indexed Book Chapters</h3>
            <div className="grid gap-6">
              {bookChapters.map((pub, i) => (
                <div key={i} className="border-l-4 border-green-600 pl-4 hover:bg-green-50/50 p-2 rounded-r-lg transition-colors">
                  <h4 className="font-bold text-lg">{pub.title}</h4>
                  <p className="text-gray-600 mt-1">{pub.publisher || pub.journal} ({pub.year})</p>
                  {pub.doi && (
                    <a href={pub.doi.includes('http') ? pub.doi : `https://doi.org/${pub.doi}`}
                      target="_blank" rel="noopener noreferrer"
                      className="text-blue-600 text-sm hover:underline mt-1 inline-block">
                      DOI: {pub.doi}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* IEEE Publications */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-purple-900 border-b pb-4">IEEE & Scopus Publications</h3>
            <div className="grid gap-6">
              {ieeePublications.map((pub, i) => (
                <div key={i} className="border-l-4 border-purple-600 pl-4 hover:bg-purple-50/50 p-2 rounded-r-lg transition-colors">
                  <h4 className="font-bold text-lg">{pub.title}</h4>
                  {pub.authors && <p className="text-gray-600 mt-1">{pub.authors} ({pub.year})</p>}
                  <p className="text-gray-700 font-medium">{pub.conference}</p>
                  {pub.doi && (
                    <a href={pub.doi.includes('http') ? pub.doi : `https://doi.org/${pub.doi}`}
                      target="_blank" rel="noopener noreferrer"
                      className="text-blue-600 text-sm hover:underline mt-1 inline-block">
                      DOI: {pub.doi}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;