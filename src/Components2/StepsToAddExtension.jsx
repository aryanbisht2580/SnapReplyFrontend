import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, FileText, Chrome, Plus, Settings, ArrowRight } from 'lucide-react';

import step1 from '../assets/step1.png';
import step2 from '../assets/step2.png';
import step3 from '../assets/step3.png';
import step4 from '../assets/step4.png';
import step5 from '../assets/step5.png';

const StepsToAddExtension = () => {
  const [expandedStep, setExpandedStep] = useState(null);

  const steps = [
    {
      icon: Download,
      text: "Download the extension zip file",
      details: "Visit the extension download page and click the download button. The zip file will be saved to your default downloads folder. Make sure to download from the official source to ensure security.",
      screenshot: step1
    },
    {
      icon: FileText,
      text: "Unzip the extension",
      details: "Locate the downloaded zip file in your downloads folder. Right-click on the file and select 'Extract All' or use your preferred extraction tool. Create a new folder for the extracted files to keep them organized.",
      screenshot: step2
    },
    {
      icon: Chrome,
      text: "Go to Chrome → Manage Extensions → Turn on Developer Mode",
      details: "Open Google Chrome and click the three dots menu in the top right. Navigate to 'More tools' → 'Extensions'. Once in the Extensions page, find the 'Developer mode' toggle in the top right corner and turn it on.",
      screenshot: step3
    },
    {
      icon: Plus,
      text: "Click on 'Load unpacked' and select the unzipped folder",
      details: "After enabling Developer mode, you'll see new buttons appear. Click 'Load unpacked' and navigate to the folder where you extracted the extension files. Select the main folder (not individual files) and click 'Select Folder'.",
      screenshot: step4
    },
    {
      icon: Settings,
      text: "The extension will now be installed and ready to use",
      details: "The extension should now appear in your Chrome extensions list. You may need to pin it to your toolbar for easy access. Click the puzzle piece icon next to the address bar and pin your new extension.",
      screenshot: step5
    }
  ];

  const toggleStep = (index) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  return (
    <motion.div 
      className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-2xl border border-gray-200"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <motion.h3 
        className="text-2xl font-bold text-black mb-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Steps to Add Chrome Extension
      </motion.h3>
      <div className="space-y-4">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
          >
            <motion.div
              className="flex items-center gap-4 p-4 cursor-pointer"
              onClick={() => toggleStep(index)}
              whileHover={{ scale: 1.02, translateX: 10 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="flex-shrink-0 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {index + 1}
              </motion.div>
              <motion.div
                className="flex-shrink-0 p-2 bg-gray-100 rounded-lg"
                whileHover={{ scale: 1.1 }}
              >
                <step.icon className="w-5 h-5 text-black" />
              </motion.div>
              <p className="text-gray-700 flex-1">{step.text}</p>
              <motion.div
                animate={{ rotate: expandedStep === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0"
              >
                <ArrowRight className="w-5 h-5 text-gray-400 rotate-90" />
              </motion.div>
            </motion.div>
            
            <AnimatePresence>
              {expandedStep === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="border-t border-gray-200"
                >
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="p-6 space-y-4"
                  >
                    <div className="bg-gradient-to-r from-gray-50 to-white p-4 rounded-lg border-l-4 border-black">
                      <p className="text-gray-700 leading-relaxed">{step.details}</p>
                    </div>
                    
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent rounded-lg"></div>
                      <img
                        src={step.screenshot}
                        alt={`Step ${index + 1} screenshot`}
                        className="w-full h-40 md:h-100 object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-lg flex items-center justify-center" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default StepsToAddExtension;
