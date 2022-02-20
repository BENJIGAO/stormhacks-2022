import React from 'react'
import '../Modal.css'

export default function Modal({closeModal}) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titelCloseBtn">
                <button onClick={()=> closeModal(false)}>X</button>
                </div>
                <div className='title'>
                    <h1>Do you want to continue playing?</h1>
                </div>
                <div className='body'>
                    <p>You can choose to continue playing or go back to the home page.</p>
                </div>
                <div className='footer'>
                    <button onClick={()=> closeModal(false)}>Quit G-aim</button>
                    <button>Continue G-aim</button>
                </div>
            </div>
        </div>
    )
}