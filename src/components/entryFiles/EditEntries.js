import React, {useState} from 'react'

export const EditEntries = ({editEntry, book}) => {
    const [value, setValue] = useState(book.book)

    const handleSubmit = e => {
        e.preventDefault();

        editEntry(value, book.id)

        setValue("")

    }
    return(
        <form className='entries-form' onSubmit={handleSubmit}>
            <input type="text" className='entry-input' value={value} placeholder='Editing Book...' onChange={(e) => setValue(e.target.value)}/>
            <button type='submit' className='entry-button'>Editing Book</button>
        </form>
    )
}