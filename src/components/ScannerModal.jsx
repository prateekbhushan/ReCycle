import React, { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { X, CheckCircle } from 'lucide-react';

export default function ScannerModal({ isOpen, onClose }) {
  const [scanResult, setScanResult] = useState(null);

  useEffect(() => {
    if (isOpen && !scanResult) {
      // Small timeout to ensure the DOM element exists
      const timer = setTimeout(() => {
        const scanner = new Html5QrcodeScanner(
          "reader",
          { fps: 10, qrbox: { width: 250, height: 250 } },
          false
        );
        
        scanner.render(
          (decodedText) => {
            scanner.clear();
            setScanResult(decodedText);
          },
          (error) => {
            // ignore error
          }
        );

        return () => {
          scanner.clear().catch(error => {
            console.error("Failed to clear scanner.", error);
          });
        };
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isOpen, scanResult]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/80 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-md rounded-card shadow-2xl overflow-hidden relative">
        <div className="flex justify-between items-center p-4 border-b border-mist bg-mist/50">
          <h3 className="text-lg font-bold text-forest-dark">Scan Product Barcode</h3>
          <button onClick={onClose} className="p-2 hover:bg-mist rounded-full text-charcoal transition-colors">
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6">
          {!scanResult ? (
            <div>
              <div id="reader" className="w-full bg-mist rounded-card overflow-hidden border border-mist"></div>
              <p className="text-center text-sm font-medium text-forest-light mt-4">Align the barcode within the frame to scan.</p>
            </div>
          ) : (
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-mist rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-forest">
                <CheckCircle className="text-forest" size={40} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-charcoal">Scanned ID: {scanResult}</h4>
                <p className="text-sm font-medium text-forest-light mt-1">Sustainability Score: 🟡 4.2 / 10</p>
              </div>
              <div className="bg-mist p-4 rounded-card text-left space-y-2">
                <p className="text-sm font-semibold text-charcoal flex justify-between">
                  <span>Material:</span> <span>PET Plastic ♻️</span>
                </p>
                <p className="text-sm font-semibold text-charcoal flex justify-between">
                  <span>Recyclable:</span> <span>Yes (rinse first)</span>
                </p>
                <p className="text-sm font-semibold text-charcoal flex justify-between">
                  <span>Brand Rating:</span> <span className="text-terracotta">C- (Needs Work)</span>
                </p>
              </div>
              <div className="flex gap-4 mt-6">
                <button onClick={() => setScanResult(null)} className="flex-1 border-2 border-mist py-3 rounded-btn font-bold text-charcoal hover:bg-mist transition-colors">
                  Scan Another
                </button>
                <button onClick={onClose} className="flex-1 bg-forest text-white py-3 rounded-btn font-bold hover:bg-forest-light transition-colors">
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
