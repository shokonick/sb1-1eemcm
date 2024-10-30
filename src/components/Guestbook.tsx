import React, { useState } from 'react';

export default function Guestbook() {
  const [guestbookEntries, setGuestbookEntries] = useState([
    { name: 'John', message: 'Cool site!' },
    { name: 'Sarah', message: 'Love the retro vibes!' },
  ]);

  const handleGuestbookSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const nameInput = form.elements.namedItem('guest-name') as HTMLInputElement;
    const messageInput = form.elements.namedItem('guest-message') as HTMLTextAreaElement;
    
    if (nameInput && messageInput) {
      setGuestbookEntries((prev) => [
        { name: nameInput.value, message: messageInput.value },
        ...prev,
      ]);
      nameInput.value = '';
      messageInput.value = '';
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-700 to-gray-600 p-4 mb-6 rounded-md border border-gray-500 shadow-inner">
      <h2 className="text-xl font-bold mb-2 text-green-400 shadow-text">Guestbook</h2>
      <form onSubmit={handleGuestbookSubmit} className="mb-3">
        <input
          type="text"
          id="guest-name"
          placeholder="Your name"
          required
          className="w-full p-2 mb-2 bg-gray-800 border border-gray-600 rounded-md text-green-400 shadow-inner focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <textarea
          id="guest-message"
          placeholder="Your message"
          required
          className="w-full p-2 mb-2 bg-gray-800 border border-gray-600 rounded-md text-green-400 shadow-inner focus:outline-none focus:ring-2 focus:ring-green-500"
        ></textarea>
        <button
          type="submit"
          className="w-full p-2 bg-gradient-to-b from-green-600 to-green-700 text-black rounded-md shadow-md hover:from-green-500 hover:to-green-600 transition-all duration-300 transform hover:scale-105"
        >
          Sign Guestbook
        </button>
      </form>
      <div className="h-32 overflow-y-auto bg-gray-800 border border-gray-600 rounded-md p-2 shadow-inner">
        {guestbookEntries.map((entry, index) => (
          <p key={index} className="mb-1">
            <strong className="text-green-400">{entry.name}:</strong>{' '}
            <span className="text-green-300">{entry.message}</span>
          </p>
        ))}
      </div>
    </div>
  );
}