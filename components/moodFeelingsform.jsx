"use client"
import "./moodFeelingForm.css"
import  { useContext } from 'react';
import {moodFeelingContext} from "./moodAppMain.jsx"


const MoodFeelingsForm = () => {

    const feelingData = useContext(moodFeelingContext);
    console.log(feelingData)
    return (
        <div>
            <h2>Mood Feelings Form</h2>
           {feelingData.feelings && feelingData.feelings.length > 0 && (
                <ul className="feelings-list">
                    {feelingData.feelings.map((feeling, index) => (
                        <div className="feeling-text">
                        <p key={index}>{feeling}</p>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default MoodFeelingsForm;