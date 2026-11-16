import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';

export const WhatsAppFloating: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
      {/* Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2.5 bg-white text-navy-950 text-xs sm:text-sm font-bold py-2.5 px-4 rounded-2xl shadow-2xl border border-slate-200 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse shrink-0" />
          <span>Besoin d'un devis ? WhatsApp : +212 662 133 371</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5 rounded focus:outline-none ml-1"
            aria-label="Fermer la bulle d'aide"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href="https://wa.me/212662133371?text=Bonjour%20BMK%20SOLUTIONS%2C%20je%20souhaite%20obtenir%20des%20informations%20ou%20un%20devis."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter BMK SOLUTIONS sur WhatsApp (+212 662 133 371)"
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white focus:outline-none focus:ring-4 focus:ring-emerald-400/50 group"
      >
        <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8 fill-white text-[#25D366] group-hover:rotate-6 transition-transform" />
      </a>
    </div>
  );
};
