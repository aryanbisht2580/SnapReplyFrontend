import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {Copy,Download,Mail,Sparkles
} from 'lucide-react';
import StepsToAddExtension from './Components2/StepsToAddExtension.jsx';
import AnimatedSelect from './Components2/AnimatedSelect.jsx';
import AnimatedInput from './Components2/AnimatedInput.jsx';
import Header from './Components2/Header.jsx';
import AnimatedButton from './Components2/AnimatedButton.jsx';
import axios from 'axios';

const App = () => {
  const [content, setContent] = useState('');
  const [tone, setTone] = useState('');
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');
  const [showToast, setShowToast] = useState(false);

  const generateResponse = async () => {
     setLoading(true);
    try {
      const res = await axios.post(
        'https://snapreplybackend.onrender.com/api/generate',
        { content, type: tone }
      );

      if (res.status === 500) {
        throw new Error('Try After 1 minute!!!');
      }

      setResponse(res.data);
    } catch (error) {
      console.error('Error occurred:', error);
    }
    setLoading(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(response);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const downloadExtension = () => {
        const a=document.createElement('a');
        a.href="/SnapReply.zip"
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-50">
      <Header />

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -40, scale: 0.9 }}
            className="fixed top-20 right-6 bg-black text-white px-6 py-3 rounded-xl shadow-lg z-50"
          >
            ✅ Copied to clipboard!
          </motion.div>
        )}
      </AnimatePresence>

      <main className="container mx-auto px-6 py-12 max-w-4xl space-y-10">
        {/* Email Input Form */}
        <motion.section
          className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-200"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6">
            <AnimatedInput
              label="Email Content"
              value={content}
              onChange={setContent}
              multiline
              rows={6}
            />
            <AnimatedSelect
              label="Tone"
              value={tone}
              onChange={setTone}
              options={['Formal', 'Casual']}
            />
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <AnimatedButton
                onClick={generateResponse}
                disabled={loading || !content.trim() || !tone}
                className="min-w-48 cursor-pointer"
              >
                {loading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                  />
                ) : (
                  < >
                    <Sparkles className="w-5 h-5" />
                    Generate Response
                  </>
                )}
              </AnimatedButton>
            </motion.div>
          </div>
        </motion.section>

        {/* Generated Response */}
        <AnimatePresence>
          {response && (
            <motion.section
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-black to-gray-900 text-white rounded-2xl p-8 shadow-2xl"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Generated Response
              </h3>
              <div className="bg-white/10 rounded-xl p-6 mb-6">
                <p className="text-gray-100 leading-relaxed whitespace-pre-line">{response}</p>
              </div>

              <div className="flex justify-center">
                <AnimatedButton onClick={copyToClipboard} variant="secondary" className='cursor-pointer'>
                  <Copy className="w-4 h-4" />
                  Copy to Clipboard
                </AnimatedButton>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Extension Download */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <AnimatedButton
            onClick={downloadExtension}
            variant="secondary"
            className="mb-8 cursor-pointer"
            
          >
            <Download className="w-5 h-5" />
            Download Chrome Extension
          </AnimatedButton>
        </motion.section>

        <StepsToAddExtension />
      </main>
    </div>
  );
};

export default App;
