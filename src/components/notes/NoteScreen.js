import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                />

                <textarea
                    placeholder="What happen today?"
                    className="notes__textarea"
                    autoComplete="off"
                >
                </textarea>

                <div className="notes__image">
                    <img
                        src="https://th.bing.com/th/id/R442569eb503f59bd5b3ae543176b7c07?rik=JzlLHNnrxFfPXw&pid=ImgRaw"
                        alt="imagen"
                    />
                </div>
            </div>
        </div>
    )
}
