import React, { useState } from 'react';
import './moodEntryForm.css';

const MoodEntryForm = ({ isOpen, onClose }) => {
    const [selectedMood, setSelectedMood] = useState('');

    const moods = [
        { label: 'Very Happy', emoji: '😊', color: '#FFF8DC' },
        { label: 'Happy', emoji: '🙂', color: '#E6FFEA' },
        { label: 'Neutral', emoji: '😐', color: '#E0F0FF' },
        { label: 'Sad', emoji: '😔', color: '#EDE7F6' },
        { label: 'Very Sad', emoji: '😭', color: '#FFEBEE' },
    ];

    

    if (!isOpen) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <button className="close-btn" onClick={onClose}>×</button>
                <h2>Log your mood</h2>
                <p className="step-indicator">● ● ● ●</p>
                <h3>How was your mood today?</h3>

                <div className="mood-options">
                    {moods.map((mood) => (
                        <label
                            key={mood.label}
                            className={`mood-card ${selectedMood === mood.label ? 'selected' : ''}`}
                            style={{ backgroundColor: mood.color }}
                        >
                            <input
                                type="radio"
                                name="mood"
                                value={mood.label}
                                checked={selectedMood === mood.label}
                                onChange={() => setSelectedMood(mood.label)}
                            />
                            <span className="mood-label">{mood.label}</span>
                            <span className="mood-emoji">{mood.emoji}</span>
                        </label>
                    ))}
                </div>

                <button className="continue-btn" onClick={() => alert(`Selected: ${selectedMood}`)}>
                    Continue
                </button>
            </div>
        </div>
    );
}

export default MoodEntryForm