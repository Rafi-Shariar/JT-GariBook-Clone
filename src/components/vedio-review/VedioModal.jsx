import React, { useEffect } from "react";
import { X } from "lucide-react";

export default function VideoModal({ videoId, onClose }) {
  // ১. কোনো ভিডিও সিলেক্ট না থাকলে কিছুই রেন্ডার বা লক করবে না
  if (!videoId) return null;

  return <ModalContent videoId={videoId} onClose={onClose} />;
}

// আলাদা ইন্টারনাল কম্পোনেন্ট করায় এটি শুধু ওপেন থাকলেই মাউন্ট হবে
function ModalContent({ videoId, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video"
      >
        <button
          onClick={onClose}
          aria-label="Close video"
          className="absolute top-3 right-3 z-20 text-white/80 hover:text-white bg-black/60 hover:bg-black/90 p-2 rounded-full transition cursor-pointer"
        >
          <X size={22} />
        </button>

        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-0"
        />
      </div>
    </div>
  );
}