import React, { useState } from 'react';
import RequirementModal from '../RequirementModal';

const QuoteFloatingWidget = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpen = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsModalOpen(true);
    };

    return (
        <div className="quote-widget-container">
            <style jsx>{`
                .quote-widget-container {
                    position: fixed;
                    bottom: 25px;
                    right: 25px;
                    z-index: 99999;
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                }

                .quote-widget-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    background: transparent;
                    border: none;
                    padding: 0;
                    position: relative;
                    width: 94px;
                    height: 94px;
                }

                /* Balanced central round button */
                .quote-btn-circle {
                    width: 64px;
                    height: 64px;
                    border-radius: 50%;
                    background: #e11d48;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 8px 22px rgba(225, 29, 72, 0.38);
                    position: absolute;
                    top: 15px;
                    left: 15px;
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                    border: 2.5px solid rgba(255, 255, 255, 0.95);
                }

                /* Pulsing outer ring */
                .quote-btn-circle::before {
                    content: '';
                    position: absolute;
                    inset: -5px;
                    border-radius: 50%;
                    background: rgba(225, 29, 72, 0.2);
                    z-index: -1;
                    animation: pulse-ring 2s infinite;
                }

                @keyframes pulse-ring {
                    0% { transform: scale(1); opacity: 0.8; }
                    50% { transform: scale(1.1); opacity: 0.3; }
                    100% { transform: scale(1); opacity: 0.8; }
                }

                .quote-widget-btn:hover .quote-btn-circle {
                    transform: scale(1.06);
                    background: #be123c;
                    box-shadow: 0 12px 28px rgba(225, 29, 72, 0.48);
                }

                .quote-icon {
                    width: 24px;
                    height: 24px;
                    fill: none;
                    stroke: #ffffff;
                    stroke-width: 2.2;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                }

                /* Rotating curved text styling */
                .curved-text-svg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 94px;
                    height: 94px;
                    animation: rotate-text 16s linear infinite;
                    pointer-events: none;
                }

                .quote-widget-btn:hover .curved-text-svg {
                    animation-play-state: paused;
                }

                @keyframes rotate-text {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                .text-path-style {
                    font-size: 11px; /* Perfectly proportioned text size */
                    font-weight: 800;
                    fill: #e11d48;
                    letter-spacing: 2.2px;
                    text-transform: uppercase;
                }
            `}</style>

            <button className="quote-widget-btn" onClick={handleOpen} type="button" aria-label="Get a Quote">
                {/* Rotating curved text */}
                <svg className="curved-text-svg" viewBox="0 0 100 100">
                    <path
                        id="circlePath"
                        d="M 12, 50 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                        fill="none"
                    />
                    <text>
                        <textPath href="#circlePath" startOffset="0%" className="text-path-style">
                            • GET A QUOTE • GET A QUOTE
                        </textPath>
                    </text>
                </svg>

                {/* Central chat icon circle */}
                <div className="quote-btn-circle">
                    <svg className="quote-icon" viewBox="0 0 24 24">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                </div>
            </button>

            {/* Modal */}
            {isModalOpen && (
                <RequirementModal 
                    onClose={() => setIsModalOpen(false)} 
                    isOpen={isModalOpen}
                />
            )}
        </div>
    );
};

export default QuoteFloatingWidget;