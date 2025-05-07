"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function FloatingMessenger() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages] = useState<Message[]>([]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Messenger Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setIsOpen(!isOpen);
          window.open('https://m.me/WeddingInvitationNaga', '_blank');
        }}
        className="bg-[#0084FF] text-white p-4 rounded-full shadow-lg hover:bg-[#0073E6] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0084FF] focus:ring-offset-2"
        aria-label="Open messenger"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.19 5.44 3.14 7.17.16.13.26.35.27.57l.05 1.78c.02.46.49.78.93.62l1.95-.87c.17-.06.36-.09.53-.06.9.27 1.9.4 2.9.4 5.63 0 10.2-4.13 10.2-9.7C22 6.13 17.63 2 12 2zm6 7.46l-2.93 4.67c-.47.73-1.47.92-2.17.37l-2.34-1.73a.6.6 0 00-.72 0l-3.16 2.4c-.42.32-.97-.14-.68-.63l2.93-4.67c.47-.73 1.47-.92 2.17-.4l2.34 1.76a.6.6 0 00.72 0l3.16-2.4c.42-.32.97.14.68.63z" />
        </svg>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 w-80 sm:w-96 bg-white rounded-lg shadow-xl"
          >
            <div className="p-4 border-b border-gray-200 bg-[#0084FF] text-white rounded-t-lg">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Image
                    src="/img/avatar.png"
                    alt="Messenger"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <div>
                    <h3
                      className="text-lg font-medium"
                      style={{ fontFamily: 'var(--font-playfair)', color: '#fff' }}
                    >
                      Wedding Invitation Naga
                    </h3>
                    <p className="text-sm text-white/80">Chat with us on Messenger</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-white/80 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-4 max-h-[400px] overflow-y-auto">
              <div className="mb-4">
                <p className="text-sm text-gray-600 bg-gray-100 p-3 rounded-lg inline-block">
                  Hi! 👋 Click the button below to chat with us on Messenger
                </p>
              </div>
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <p
                    className={`text-sm p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-[#0084FF] text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {message.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-200">
              <button
                onClick={() => window.open('https://m.me/WeddingInvitationNaga', '_blank')}
                className="w-full bg-[#0084FF] text-white px-4 py-3 rounded-lg hover:bg-[#0073E6] transition-colors flex items-center justify-center space-x-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.19 5.44 3.14 7.17.16.13.26.35.27.57l.05 1.78c.02.46.49.78.93.62l1.95-.87c.17-.06.36-.09.53-.06.9.27 1.9.4 2.9.4 5.63 0 10.2-4.13 10.2-9.7C22 6.13 17.63 2 12 2zm6 7.46l-2.93 4.67c-.47.73-1.47.92-2.17.37l-2.34-1.73a.6.6 0 00-.72 0l-3.16 2.4c-.42.32-.97-.14-.68-.63l2.93-4.67c.47-.73 1.47-.92 2.17-.4l2.34 1.76a.6.6 0 00.72 0l3.16-2.4c.42-.32.97.14.68.63z" />
                </svg>
                <span>Open Messenger</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 