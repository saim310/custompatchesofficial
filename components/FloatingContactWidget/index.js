import React, { useState } from 'react';
import { Mail, Phone, X } from 'lucide-react';

const FloatingContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <style>
        {`
          @keyframes float-and-glow {
            0% {
              transform: translateY(0px) scale(1);
              box-shadow: 0 10px 25px -3px rgba(37, 211, 102, 0.4);
            }
            50% {
              transform: translateY(-6px) scale(1.04);
              box-shadow: 0 18px 30px -3px rgba(37, 211, 102, 0.7);
            }
            100% {
              transform: translateY(0px) scale(1);
              box-shadow: 0 10px 25px -3px rgba(37, 211, 102, 0.4);
            }
          }
          .whatsapp-animated {
            animation: float-and-glow 3s ease-in-out infinite;
          }
        `}
      </style>

      <div 
        style={{
          position: 'fixed',
          right: '24px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '70px',
          minWidth: '70px',
          maxWidth: '70px',
          backgroundColor: '#18181b',
          border: '1px solid #27272a',
          borderRadius: '9999px',
          padding: isOpen ? '16px 0' : '10px 0',
          boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.7)',
          gap: '14px',
          boxSizing: 'border-box',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        {isOpen ? (
          <>
            {/* Close / Minimize Button */}
            <button 
              onClick={() => setIsOpen(false)}
              style={{
                width: '38px',
                height: '38px',
                minWidth: '38px',
                borderRadius: '50%',
                backgroundColor: '#27272a',
                color: '#a1a1aa',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: 'none',
                cursor: 'pointer',
                marginBottom: '2px',
                transition: 'background-color 0.2s, color 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#3f3f46';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#27272a';
                e.currentTarget.style.color = '#a1a1aa';
              }}
              aria-label="Minimize widget"
            >
              <X size={16} />
            </button>

            {/* Email Button */}
            <a 
              href="mailto:support@example.com" 
              style={{
                width: '46px',
                height: '46px',
                minWidth: '46px',
                borderRadius: '50%',
                backgroundColor: '#3b82f6',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.3)',
                transition: 'transform 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              aria-label="Email us"
            >
              <Mail size={20} />
            </a>

            {/* WhatsApp Button (Open State) */}
            <a 
              href="https://whatsapp.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{
                width: '46px',
                height: '46px',
                minWidth: '46px',
                borderRadius: '50%',
                backgroundColor: '#25D366',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.3)',
                transition: 'transform 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              aria-label="Chat on WhatsApp"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>

            {/* Phone Button */}
            <a 
              href="tel:+1234567890" 
              style={{
                width: '46px',
                height: '46px',
                minWidth: '46px',
                borderRadius: '50%',
                backgroundColor: '#9333ea',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.3)',
                transition: 'transform 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              aria-label="Call us"
            >
              <Phone size={20} />
            </a>
          </>
        ) : (
          /* Minimized State: Centered Animated WhatsApp Button with official logo */
          <button
            onClick={() => setIsOpen(true)}
            className="whatsapp-animated"
            style={{
              width: '48px',
              height: '48px',
              minWidth: '48px',
              borderRadius: '50%',
              backgroundColor: '#25D366',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: 'none',
              cursor: 'pointer'
            }}
            aria-label="Open contact menu"
            title="Chat on WhatsApp"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </button>
        )}
      </div>
    </>
  );
};

export default FloatingContactWidget;