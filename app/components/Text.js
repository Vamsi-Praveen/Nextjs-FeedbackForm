import React from 'react'

const Text = ({ heading, text }) => {
    return (
        <div>
            <h1 className='font-medium tracking-wide text-xl'>{heading}</h1>
            <p className='text-sm text-slate-700'>{text}</p>
        </div>
    )
}

export default Text