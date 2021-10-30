import React, {useState, useEffect} from "react";
import "../Style/CalendarSection.css"
import { useRecoilState } from 'recoil'
import { IoAddOutline } from "react-icons/io5";
import Modal from "./Modal";
import { modalstate } from '../atoms/modalAtom'

function CalendarSection() {
    
    const [open, setopen] = useRecoilState(modalstate)

    useEffect(() => {
        console.log(open)
    }, [open])

    return (
        <div className="calendar_section">

            <div className="Events_block">
                
            </div>
        

            <div className="add_section">
                <div className="add_bt" onClick={() => setopen(true)} >
                    <IoAddOutline className="icon white"/> 
                    <button 
                        className="add"  
                    >
                        Create
                    </button>
                </div>
            </div>
            <Modal />
        </div>
    )
}

export default CalendarSection
