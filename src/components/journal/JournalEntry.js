import React from 'react';

export const JournalEntry = () => {
    return (
        <div className="journal__entry">
            <div
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://i.pinimg.com/originals/04/07/c5/0407c560aee24c72d85aad64168cdf75.jpg)',
                }}
            />

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo día
                </p>
                <p className="journal__entry-content">
                    Quis irure dolor commodo duis quis commodo proident ad nisi.
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>
                    Monday
                </span>
                <h4>25</h4>
            </div>
        </div>
    )
}
