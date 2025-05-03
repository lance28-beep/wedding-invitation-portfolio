"use client";

import { useState } from 'react';

export default function FloatingMessenger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Messenger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="Open messenger"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.19 5.44 3.14 7.17.16.13.26.35.27.57l.05 1.78c.02.46.49.78.93.62l1.95-.87c.17-.06.36-.09.53-.06.9.27 1.9.4 2.9.4 5.63 0 10.2-4.13 10.2-9.7C22 6.13 17.63 2 12 2zm6 7.46l-2.93 4.67c-.47.73-1.47.92-2.17.37l-2.34-1.73a.6.6 0 00-.72 0l-3.16 2.4c-.42.32-.97-.14-.68-.63l2.93-4.67c.47-.73 1.47-.92 2.17-.4l2.34 1.76a.6.6 0 00.72 0l3.16-2.4c.42-.32.97.14.68.63z" />
        </svg>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 bg-white rounded-lg shadow-xl">
          <div className="p-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Chat with us</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div className="p-4">
            <div className="mb-4">
              <p className="text-sm text-gray-600">Hi! How can we help you today?</p>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Type your message..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 