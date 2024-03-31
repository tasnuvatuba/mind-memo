import React, { useEffect } from 'react';
import { ModalTemplate } from "./ModalTemplate";
import { margin } from '@mui/system';

export const JournalModal = ({showModal, onClose, journal, label}) => {
    console.log(journal);
    const emoji = {
        'Happy': '😀',
        'Sad': '😥',
        'Neutral': '😐',
        'Angry': '😡'
      }
  return (
    <ModalTemplate showModal={showModal} onClose={onClose} label={label}>
        <div>
            <header className="journal-header">
                <h4>{journal.title}</h4>
                <div style={{ fontSize: '0.8em', color: 'gray' }}>
                    <p>Created at: {journal.createdAt}  |  Last Modified: {journal.lastModified}</p>
                </div>
            </header>
            <div className="journal-content">
                <div style={{margin: '20px'}}>
                    <img src={journal.img} alt={journal.title} style={{ width: '200px', height: '150px', display: 'block', margin: '0 auto' }} />
                </div>
                <div className="journal-text" dangerouslySetInnerHTML={{ __html: journal.desc }} />
                <div style={{marginTop: '20px', marginBottom: '20px'}}>Category: {journal.category}, {emoji[journal.mood]} </div>
            </div>
        </div>
        
    </ModalTemplate>

  )
}