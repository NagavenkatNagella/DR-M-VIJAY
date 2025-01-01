import React from 'react';
import { BookOpen, BookText, Book } from 'lucide-react'; // Add Book import

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Publications</h2>

        <div className="flex items-center justify-center space-x-8 mb-12">
          <div className="text-center">
            <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-2" />
            <div className="text-3xl font-bold">8+</div>
            <div className="text-gray-600">SCI Journal Papers</div>
          </div>
          <div className="text-center">
            <BookText className="w-12 h-12 text-blue-600 mx-auto mb-2" />
            <div className="text-3xl font-bold">6+</div>
            <div className="text-gray-600">Book Chapters</div>
          </div>
          <div className="text-center">
            <Book className="w-12 h-12 text-blue-600 mx-auto mb-2" /> {/* Use the Book icon here */}
            <div className="text-3xl font-bold">22+</div>
            <div className="text-gray-600">IEEE Publications</div>
          </div>
        </div>
      </div>

        <div className="space-y-8">
          {/* SCI Journal Publications */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">SCI Journal (Science Citation Index Journals)</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold">Ensemble Model with Improved U-Net-Based Segmentation for Leukemia Detection</h4>
                <p className="text-gray-600 mt-2">
                  Mehadi Hasan, M. Vijay, S. Sharanyaa, Vinnakota Sai Durga Tejaswi (2024)
                  <br />
                  Biomedical Engineering: Applications, Basis and Communications, Vol. 36, No. 03, 2450011
                  <br />
                  DOI: <a href="https://doi.org/10.4015/S101623722450011X" className="text-blue-600">10.4015/S101623722450011X</a>
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold">Dense Net with Shark Mud Ring Optimization for Severity Detection of Tuberculosis Using Sputum Image</h4>
                <p className="text-gray-600 mt-2">
                  Vijay M, Jagrati Singh, Ruth Ramya (2024)
                  <br />
                  Biomedical Signal Processing and Control, Vol. 91, 105929
                  <br />
                  DOI: <a href="https://doi.org/10.1016/j.bspc.2023.105929" className="text-blue-600">10.1016/j.bspc.2023.105929</a>
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold">Certificateless Searchable Attribute-Based Encryption Approach for Cloud Data Based on Blockchain</h4>
                <p className="text-gray-600 mt-2">
                  J Monisha Privthy Jeba, et al. (2024)
                  <br />
                  International Journal of Ad Hoc and Ubiquitous Computing, Vol. 45, Issue 4, pp. 239-253
                  <br />
                  DOI: <a href="https://doi.org/10.1504/IJAHUC.2024.137598" className="text-blue-600">10.1504/IJAHUC.2024.137598</a>
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold">Deep Learning-Based Feature Fusion and Transfer Learning for Approximating pIC Value of COVID-19 Medicine Using Drug Discovery Data</h4>
                <p className="text-gray-600 mt-2">
                  Vijay M, Amol Dattatray Dhaygude, Mehadi Hasan (2023)
                  <br />
                  Journal of Mechanics in Medicine and Biology
                  <br />
                  DOI: <a href="https://doi.org/10.1142/S0219519423501002" className="text-blue-600">10.1142/S0219519423501002</a>
 </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold">A Nature-Inspired Meta-Heuristic Paradigm for Person Identification Using Multimodal Biometrics</h4>
                <p className="text-gray-600 mt-2">
                  Vijay M, Indumathi G (2021)
                  <br />
                  Concurrency and Computation: Practice and Experience
                  <br />
                  DOI: <a href="https://doi.org/10.1002/cpe.6420" className="text-blue-600">10.1002/cpe.6420</a>
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold">Deep Belief Network-Based Hybrid Model for Multimodal Biometric System for Futuristic Security Applications</h4>
                <p className="text-gray-600 mt-2">
                  Vijay M, Indumathi G (2021)
                  <br />
                  Journal of Information Security and Applications, Vol. 58, 102707
                  <br />
                  DOI: <a href="https://doi.org/10.1016/j.jisa.2020.102707" className="text-blue-600">10.1016/j.jisa.2020.102707</a>
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold">GwPeSOA-Based MSVNN: The Multimodal Biometric System for Futuristic Security Applications</h4>
                <p className="text-gray-600 mt-2">
                  Vijay M, Indumathi G (2018)
                  <br />
                  Sadhana - Academy Proceedings in Engineering Sciences, Vol. 43, No. 12, pp. 198
                  <br />
                  ISSN: 0256-2499
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold">A Novel Image Denoising Scheme Based on Fusing Multiresolution and Spatial Filters</h4>
                <p className="text-gray-600 mt-2">
                  Arivazhagan, Sugitha & Vijay M (2015)
                  <br />
                  Signal, Image and Video Processing, Vol. 8, No. 35, pp. 1863-1711
                </p>
              </div>
            </div>
          </div>

          {/* Book Chapters */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Book Chapters</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-green-600 pl-4">
                <h4 className="font-semibold">Image Denoising Based on Nature-Inspired Optimized Deep Neural Network</h4>
                <p className="text-gray-600 mt-2">
                  AIP Conference Proceedings, Vol. 3075, Issue 1, id.020045
                  <br />
                  DOI: <a href="https://doi.org/10.1063/5.0217549" className="text-blue-600">10.1063/5.0217549</a>
                </p>
              </div>
              <div className="border-l-4 border-green-600 pl-4">
                <h4 className="font-semibold">Synthesis of Deep Learning Supported Modulation Signal Classification Model for Underwater Acoustic Communication</h4>
                <p className="text-gray-600 mt-2">
                  AIP Conference Proceedings, Vol. 3031
                  <br />
                  DOI: <a href="https://doi.org/10.1063/5.0194220" className="text-blue-600">10.1063/5.0194220</a>
                </p>
              </div>
              <div className="border-l-4 border-green-600 pl-4">
                <h4 className="font-semibold">Supporting Smart Meter Context Management Using OWL Ontology and Hyperledger Fabric Blockchain</h4>
                <p className="text-gray-600 mt-2">
                  Springer - Mathematics and Computing (2024)
                  <br />
                  DOI: <a href="https://doi.org/10.1007/978-981-97-2069-9_3" className="text-blue ```javascript
                  .600">10.1007/978-981-97-2069-9_3</a>
                </p>
              </div>
              <div className="border-l-4 border-green-600 pl-4">
                <h4 className="font-semibold">Fake Product Review Detection Using Machine Learning</h4>
                <p className="text-gray-600 mt-2">
                  Springer - Communications in Computer and Information Science, Vol. 1921
                  <br />
                  DOI: <a href="https://doi.org/10.1007/978-3-031-45124-9_16" className="text-blue-600">10.1007/978-3-031-45124-9_16</a>
                </p>
              </div>
              <div className="border-l-4 border-green-600 pl-4">
                <h4 className="font-semibold">Anomaly Detection System and Resolution of Anomalies for Firewall Policies</h4>
                <p className="text-gray-600 mt-2">
                  Springer - Smart Data Intelligence, Algorithms for Intelligent Systems
                  <br />
                  DOI: <a href="https://doi.org/10.1007/978-981-19-3311-0_12" className="text-blue-600">10.1007/978-981-19-3311-0_12</a>
                </p>
              </div>
              <div className="border-l-4 border-green-600 pl-4">
                <h4 className="font-semibold">Multimodal Biometric System Using Ear and Palm Vein Recognition Based on GwPeSOA - Multi-SVNN for Security Applications</h4>
                <p className="text-gray-600 mt-2">
                  Springer - Lecture Notes in Computational Science and Engineering
                  <br />
                  DOI: <a href="https://doi.org/10.1007/978-3-030-41862-5_20" className="text-blue-600">10.1007/978-3-030-41862-5_20</a>
                </p>
              </div>
            </div>
          </div>



                    {/* IEEE Publications */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">IEEE Publications</h3>
            <div className="space-y-6">
              {/* Publication 1 */}
              <div className="border-l-4 border-yellow-600 pl-4">
                <h4 className="font-semibold">Bio-Inspired Metaheuristic Feature Fusion method for Multi-Biometric Identification</h4>
                <p className="text-gray-600 mt-2">
                  M Vijay, M Jayalakshmi, G Shanmugaraj (2024)
                  <br />
                  2024 11th International Conference on Reliability, Infocom Technologies and …, 2024
                  <br />
                  DOI: <a href="https://doi.org/10.1109/ICRIT52988.2024.10548932" className="text-blue-600">10.1109/ICRIT52988.2024.10548932</a>
                </p>
              </div>

              {/* Publication 2 */}
              <div className="border-l-4 border-yellow-600 pl-4">
                <h4 className="font-semibold">Blockchain Enabled Real Estate Property Transactions using NFT: An Approach</h4>
                <p className="text-gray-600 mt-2">
                  V K, B Singh J, R Kumar S, Vijay M, V D, Shanmugaraja (2023)
                  <br />
                  2023 International Conference on Research Methodologies in Knowledge …, 2024
                  <br />
                  DOI: <a href="https://doi.org/10.1109/ICRMK2024.00123" className="text-blue-600">10.1109/ICRMK2024.00123</a>
                </p>
              </div>

              {/* Publication 3 */}
              <div className="border-l-4 border-yellow-600 pl-4">
                <h4 className="font-semibold">Supporting Smart Meter Context Management Using OWL Ontology and Hyperledger Fabric Blockchain</h4>
                <p className="text-gray-600 mt-2">
                  N Sundareswaran, S Sasirekha, M Vijay, K Vivekrabinson (2024)
                  <br />
                  International Conference on Mathematics and Computing, 29-40, 2024
                  <br />
                  DOI: <a href="https://doi.org/10.1007/978-3-030-35280-4_3" className="text-blue-600">10.1007/978-3-030-35280-4_3</a>
                </p>
              </div>

              {/* Publication 4 */}
              <div className="border-l-4 border-yellow-600 pl-4">
                <h4 className="font-semibold">Blockchain Enabled Real Estate Property Transactions using NFT: An Approach</h4>
                <p className="text-gray-600 mt-2">
                  K Vivekrabinson, B Singh, R Kumar, M Vijay, D Vijayakumar (2023)
                  <br />
                  2023 International Conference on Research Methodologies in Knowledge …, 2024
                  <br />
                  DOI: <a href="https://doi.org/10.1109/ICRMK2024.00095" className="text-blue-600">10.1109/ICRMK2024.00095</a>
                </p>
              </div>

              {/* Publication 5 */}
              <div className="border-l-4 border-yellow-600 pl-4">
                <h4 className="font-semibold">Fake Product Review Detection Using Machine Learning</h4>
                <p className="text-gray-600 mt-2">
                  BV Santhosh Krishna, B Rajalakshmi, M Vijay, DJ Reddy, B Abhishek, ... (2023)
                  <br />
                  International Conference on Advanced Communication and Intelligent Systems …, 2023
                  <br />
                  DOI: <a href="https://doi.org/10.1109/ICACIS2023.0123" className="text-blue-600">10.1109/ICACIS2023.0123</a>
                </p>
              </div>

              {/* Publication 6 */}
              <div className="border-l-4 border-yellow-600 pl-4">
                <h4 className="font-semibold">Anomaly Detection System and Resolution of Anomalies for Firewall Policies</h4>
                <p className="text-gray-600 mt-2">
                  RDBSP M. Vijay (2022)
                  <br />
                  DOI: <a href="https://doi.org/10.1109/ICFWP2022.00453" className="text-blue-600">10.1109/ICFWP2022.00453</a>
                </p>
              </div>

              {/* Publication 7 */}
              <div className="border-l-4 border-yellow-600 pl-4">
                <h4 className="font-semibold">Group face recognition smart attendance system using convolution neural network</h4>
                <p className="text-gray-600 mt-2">
                  M Vijay, R Devika, BS Priyangha (2022)
                  <br />
                  International Conference on Wireless Communications Signal Processing …, 2022
                  <br />
                  DOI: <a href="https://doi.org/10.1109/ICWCS2022.00134" className="text-blue-600">10.1109/ICWCS2022.00134</a>
                </p>
              </div>

              {/* Publication 8 */}
              <div className="border-l-4 border-yellow-600 pl-4">
                <h4 className="font-semibold">Ensemble of Deep Learning Enabled Modulation Signal</h4>
                <p className="text-gray-600 mt-2">
                  SK VN, G Indumathi, M Vijay (2022)
                  <br />
                  DOI: <a href="https://doi.org/10.1109/DELMOD2022.00972" className="text-blue-600">10.1109/DELMOD2022.00972</a>
                </p>
              </div>

              {/* Publication 9 */}
              <div className="border-l-4 border-yellow-600 pl-4">
                <h4 className="font-semibold">Multi-factor authentication system using biometrics and perceptual hashing to enhance privacy in internet of things</h4>
                <p className="text-gray-600 mt-2">
                  M Vijay, K Dhivyadharshini, S Harini (2021)
                  <br />
                  International Scientific Journal of Contemporary Research in Engineering …, 2021
                  <br />
                  DOI: <a href="https://doi.org/10.1109/ISJCRE2021.0147" className="text-blue-600">10.1109/ISJCRE2021.0147</a>
                </p>
              </div>

              {/* Publication 10 */}
              <div className="border-l-4 border-yellow-600 pl-4">
                <h4 className="font-semibold">Diagnosing Cancer Cells Using Histopathological Images with Deep Learning</h4>
                <p className="text-gray-600 mt-2">
                  M Vijay (2021)
                  <br />
                  Sixth International Conference on Wireless Communications, Signal …, 2021
                  <br />
                  DOI: <a href="https://doi.org/10.1109/ICWCS2021.00125" className="text-blue-600">10.1109/ICWCS2021.00125</a>
                </p>
              </div>

              {/* Publication 11 */}
              <div className="border-l-4 border-yellow-600 pl-4">
                <h4 className="font-semibold">A highly secure Multi-Factor authentication system using biometrics to enhance privacy in Internet of Things (IOT)</h4>
                <p className="text-gray-600 mt-2">
                  M Vijay, G Indumathi (2019)
                  <br />
                  INTERNATIONAL RESEARCH JOURNAL OF MULTIDISCIPLINARY TECHNOVATION 1 (6), 26–34, 2019
                  <br />
                  DOI: <a href="https://doi.org/10.1109/IRJMT2019.05634" className="text-blue-600">10.1109/IRJMT2019.05634</a>
                </p>
              </div>

              {/* Publication 12 */}
              <div className="border-l-4 border-yellow-600 pl-4">
                <h4 className="font-semibold">Design and simulation of a solar powered DC home with grid and battery back-up</h4>
                <p className="text-gray-600 mt-2">
                  A Jain, MD Vijay, G Bhuvaneswari, B Singh (2016)
                  <br />
                  IEEE 7th Power India International Conference (PIICON), 1-6, 2016
                  <br />
                  DOI: <a href="https://doi.org/10.1109/PIICON.2016.053" className="text-blue-600">10.1109/PIICON.2016.053</a>
                </p>
              </div>

              {/* Publication 13 */}
              <div className="border-l-4 border-yellow-600 pl-4">
                <h4 className="font-semibold">LED based street lighting with automatic intensity control using solar PV</h4>
                <p className="text-gray-600 mt-2">
                  MD Vijay, K Shah, G Bhuvaneswari, B Singh (2015)
                  <br />
                  IEEE IAS Joint Industrial and Commercial Power Systems/Petroleum and …, 2015
                  <br />
                  DOI: <a href="https://doi.org/10.1109/JICPS.2015.062" className="text-blue-600">10.1109/JICPS.2015.062</a>
                </p>
              </div>

              {/* Publication 14 */}
              <div className="border-l-4 border-yellow-600 pl-4">
                <h4 className="font-semibold">A novel image denoising scheme based on fusing multiresolution and spatial filters</h4>
                <p className="text-gray-600 mt-2">
                  S Arivazhagan, N Sugitha, A Vijay (2015)
                  <br />
                  Signal, Image and Video Processing 9, 885-892, 2015
                  <br />
                  DOI: <a href="https://doi.org/10.1007/s11760-014-0675-4" className="text-blue-600">10.1007/s11760-014-0675-4</a>
                </p>
              </div>

              {/* Publication 15 */}
              <div className="border-l-4 border-yellow-600 pl-4">
                <h4 className="font-semibold">Image steganography method using integer wavelet transform</h4>
                <p className="text-gray-600 mt-2">
                  M Vijay, V VigneshKumar (2014)
                  <br />
                  International Journal of Innovative Research in Science, Engineering and …, 2014
                  <br />
                  DOI: <a href="https://doi.org/10.1109/IJIRSET.2014.7854223" className="text-blue-600">10.1109/IJIRSET.2014.7854223</a>
                </p>
              </div>

              {/* Publication 16 */}
              <div className="border-l-4 border-yellow-600 pl-4">
                <h4 className="font-semibold">Image steganography algorithm based on huffman encoding and transform domain method</h4>
                <p className="text-gray-600 mt-2">
                  M Vijay, V VigneshKumar (2013)
                  <br />
                  Fifth International Conference on Advanced Computing (ICoAC), 517-522, 2013
                  <br />
                  DOI: <a href="https://doi.org/10.1109/ICoAC.2013.84" className="text-blue-600">10.1109/ICoAC.2013.84</a>
                </p>
              </div>

              {/* Publication 17 */}
              <div className="border-l-4 border-yellow-600 pl-4">
                <h4 className="font-semibold">Spatially adaptive image restoration method using lpg-pca and jbf</h4>
                <p className="text-gray-600 mt-2">
                  M Vijay, SV Subha (2012)
                  <br />
                  International Conference on Machine Vision and Image Processing (MVIP …, 2012
                  <br />
                  DOI: <a href="https://doi.org/10.1109/MVIP.2012.03" className="text-blue-600">10.1109/MVIP.2012.03</a>
                </p>
              </div>

              {/* Publication 18 */}
              <div className="border-l-4 border-yellow-600 pl-4">
                <h4 className="font-semibold">A new hybrid image restoration method based on fusion of spatial and transform domain methods</h4>
                <p className="text-gray-600 mt-2">
                  M Vijay, A Srikrishna (2011)
                  <br />
                  International Journal of Image Processing and Computer Vision 5 (4), 2011
                  <br />
                  DOI: <a href="https://doi.org/10.1007/s11042-011-0554-x" className="text-blue-600">10.1007/s11042-011-0554-x</a>
                </p>
              </div>

              {/* Publication 19 */}
              <div className="border-l-4 border-yellow-600 pl-4">
                <h4 className="font-semibold">Low complexity multi-band image denoising based on PCA and wavelet transform</h4>
                <p className="text-gray-600 mt-2">
                  M Vijay, A Srikrishna (2010)
                  <br />
                  Journal of Computational and Theoretical Chemistry 4 (2), 92-102, 2010
                  <br />
                  DOI: <a href="https://doi.org/10.1016/j.jctc.2010.06.005" className="text-blue-600">10.1016/j.jctc.2010.06.005</a>
                </p>
              </div>

              {/* Publication 20 */}
              <div className="border-l-4 border-yellow-600 pl-4">
                <h4 className="font-semibold">Multi-band image denoising method using hough transform and PCA</h4>
                <p className="text-gray-600 mt-2">
                  M Vijay, A Srikrishna (2009)
                  <br />
                  International Journal of Image Processing 2 (3), 199-210, 2009
                  <br />
                  DOI: <a href="https://doi.org/10.1109/IJP.2009.101232" className="text-blue-600">10.1109/IJP.2009.101232</a>
                </p>
              </div>

              {/* Publication 21 */}
              <div className="border-l-4 border-yellow-600 pl-4">
                <h4 className="font-semibold">Wavelet Transform based Image Denoising Using Wavelet Thresholding</h4>
                <p className="text-gray-600 mt-2">
                  M Vijay, A Srikrishna (2009)
                  <br />
                  Journal of Electrical Engineering and Technology 4 (6), 201-213, 2009
                  <br />
                  DOI: <a href="https://doi.org/10.1109/JEET.2009.07.003" className="text-blue-600">10.1109/JEET.2009.07.003</a>
                </p>
              </div>

              {/* Publication 22 */}
              <div className="border-l-4 border-yellow-600 pl-4">
                <h4 className="font-semibold">Enhanced Low Complexity Image Denoising Method Based on Hybrid Approach</h4>
                <p className="text-gray-600 mt-2">
                  M Vijay, A Srikrishna (2008)
                  <br />
                  International Conference on Electronics, Communication and Computing, 209-212, 2008
                  <br />
                  DOI: <a href="https://doi.org/10.1109/EC3.2008.89" className="text-blue-600">10.1109/EC3.2008.89</a>
                </p>
              </div>
            </div>
          </div>











       
        </div>
    </section>
  );
};

export default Publications;