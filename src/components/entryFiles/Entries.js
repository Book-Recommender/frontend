import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {EditEntries} from "./EditEntries";

export const Entries = ({book, deleteEntry, editEntry}) => {
    return(
        <div className={'entry'}>
            <p>{book.book}</p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => EditEntries(book.id)} />
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteEntry(book.id)} />
            </div>
        </div>
    )
}