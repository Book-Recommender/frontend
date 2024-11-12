import React, {useState} from 'react'

export const EntriesForm = ({addEntry}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        addEntry(value)

        setValue("")

    }
    return(
        <form className='entries-form' onSubmit={handleSubmit}>
            <input type="text" className='entry-input' value={value} placeholder='I have read..' onChange={(e) => setValue(e.target.value)}/>
            <button type='submit' className='entry-button'>Add Book</button>
        </form>
    )
}