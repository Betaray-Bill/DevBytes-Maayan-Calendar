import React, {useState, useEffect} from "react";
import "../Style/CalendarSection.css"
import { IoAddOutline, IoClose } from "react-icons/io5";
import Modal from "./Modal";

function CalendarSection() {
    
    const [open, setopen] = useState({
        initial:false,
        clicked:false,
        name:'Add'    
    })

    const [disables, setdisables] = useState(false); 

    const handleOpen = () => {
        disableMenu()
        if(open.initial === null){
            setopen({
                initial:null,
                clicked:false,
                name:"Close"   
            })
            console.log(1);
        }else if(open.clicked === true){
            setopen({
                clicked:!open.clicked,
                name:"Add"
            })
            console.log(2);
        }else if(open.clicked === false){
            setopen({
                clicked:!open.clicked,
                name:"Close"
            })
            console.log(3);
        }

    }

    const disableMenu = () => {
        setdisables(!disables)
        setTimeout(() => {
            setdisables(false)
        },1000/10)
    }


    useEffect(() => {
        setopen({
            clicked:false,
            name:"Add"
        })
    }, [])


  return (
    <div className="calendar_section">
    

        <div className="add_section">
            <div className="add_bt" onClick={handleOpen}>
                <IoAddOutline className={`icon white ${!open && "rotate"}`}/> 
                {/* {
                    !open ? 
                    <IoAddOutline className="icon white"/> : <IoClose className="icon " />
                }
                 */}
                <button disabled={disables} className="add">
                    {open.name}
                </button>
            </div>
        </div>
        <Modal open={open}/>
    </div>
  )
}

export default CalendarSection
