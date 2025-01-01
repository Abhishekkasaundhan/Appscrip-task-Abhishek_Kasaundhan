import React from 'react';

const Newsletter = () => {
  return (
    <div className="newsletter">
      <h3 className="text-lg font-semibold mb-4">Subscribe to our Newsletter</h3>
      <form className="flex gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 text-black rounded"
        />
        <button className="bg-white text-black px-4 py-2 rounded">Subscribe</button>
      </form>
    </div>
  );
};

export default Newsletter;