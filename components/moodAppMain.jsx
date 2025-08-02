"use client"
import { useState, useEffect, createContext } from 'react';
import MoodInfo from './moodInfo';
import MoodEntryForm from './moodEntryForm';
import MoodFeelingsForm from './MoodFeelingsform';
import "./moodAppMain.css";


export const moodFeelingContext = createContext("React");

const MoodAppMain = () => {
    const [data, setData] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [showMoodEntryForm, setShowMoodEntryForm] = useState(true);
    const [showMoodFeelingForm, setShowMoodFeelingForm] = useState(false);

    useEffect(() => {
        fetch('./data.json')
            .then(response => response.json())
            .then(data => {
                setData(data.moodEntries);
            });
    }, []); 

    const handleMoodContinue = (selectedMood) => {
  setShowMoodEntryForm(false);
  setShowMoodFeelingForm(true);
};

   
    return (
          <moodFeelingContext value={data}>
            <div className='main-images'>
                 <img className='logo' src='./images/logo.svg' alt="Logo" />
                 <img className='logo' src='./images/avatar-placeholder.svg' alt="Logo" />
            </div>
        <div>
           
            <div className='main-headings'>
                <h2 className='heading-name'>Hello Lisa</h2>
                <h1 className='quote-main'>How are you feeling today</h1>
                <h4 className='date'>Wednesday, April 16th, 2025</h4>
                <button className='load-mood' onClick={handleOpenForm}>Today's Mood</button>
            </div>

            
           {showMoodEntryForm ? (
                 <MoodEntryForm
                        isOpen={showMoodEntryForm}
                        onClose={() => setShowMoodEntryForm(false)}
                        onContinue={handleMoodContinue}
                     />
                    ) : showMoodFeelingForm ? (
                <MoodFeelingsForm
                        onSubmit={() => {
                         setShowMoodFeelingForm(false);

    }}
  />
) : null}

            {data.map((entry, key) => (
                <div key={key}>
                    <MoodInfo data={entry} />

                </div>
            ))}
        </div>
        </moodFeelingContext>
    );
};

export default MoodAppMain;
