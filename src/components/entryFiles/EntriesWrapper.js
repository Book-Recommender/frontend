import React, {useState} from 'react'
import {EntriesForm} from "./EntriesForm";
import {v4 as uuidv4} from 'uuid';
import {Entries} from "./Entries";
import {EditEntries} from "./EditEntries";
uuidv4();

export const EntriesWrapper = () => {

    const [entries, setEntries] = useState([])

    const addEntry = entry => {
        setEntries([...entries, {id: uuidv4(), book: entry, completed: false, isEditing: false}])
        console.log(entries)
    }

    const deleteEntry = id => {
        setEntries(entries.filter(entry => entry.id !== id))
    }
    const editEntry = id => {
        setEntries(entries.map(entry => entry.id === id ? {...entry, isEditing: !entry.isEditing} : entry))
    }

    const editBook = (book, id) => {
        setEntries(entries.map(entry => entry.id === id ? {...entry, book, isEditing: !entry.isEditing} : entry))
    }

    return(
        <div className='entries-wrapper'>
            <h1>User's Library</h1>
            <EntriesForm addEntry={addEntry}/>
            {entries.map((entry, index) => (
                entry.isEditing ? (
                    <EditEntries editEntry={editBook} book={entry} />
                ) : (
                        <Entries book = {entry} key = {index} deleteEntry={deleteEntry} editEntry={editEntry} />
                    )


            ))}

        </div>
    )
}