import React from 'react';
import './moodInfo.css'

const MoodInfo = ({ data }) => {
    return (
        <div>
            <p className='journal-entry'>{data.journalEntry}</p>
        </div>
    );
};

export default MoodInfo;