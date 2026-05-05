"use client";

import { useState } from "react";
import { Share2 } from "lucide-react";

export const ShareButton = () => {
  const [showToast, setShowToast] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    } catch (err) {
      console.error("Failed to copy URL:", err);
    }
  };

  return (
    <>
      <button
        onClick={handleShare}
        className="profile-share-btn flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
      >
        <Share2 className="h-4 w-4" />
      </button>
      {showToast && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg text-sm animate-bounce">
            URL is copied
          </div>
        </div>
      )}
    </>
  );
};
