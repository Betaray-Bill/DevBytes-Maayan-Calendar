import React, {useState, useEffect} from "react";
import "../Style/CalendarSection.css"
import { useRecoilState } from 'recoil'
import { IoAddOutline } from "react-icons/io5";
import Modal from "./Modal";
import { modalstate } from '../atoms/modalAtom'
import Month_event from "./Month_event";
import { collection, onSnapshot, orderBy, query } from '@firebase/firestore';
import { db } from '../firebase';


function CalendarSection() {
    
    const [open, setopen] = useRecoilState(modalstate)
    const [posts, setposts] = useState([]);
    const [loading, setloading] = useState(false)

    useEffect(() => {
        const unsub = onSnapshot(query(collection(db,"events"), orderBy("Month")), snapshot => {
            setposts(snapshot.docs)
            setloading(true)
        })
        console.log("Event Post : ", posts.length)

        return unsub;
    },[db]);


    return (
        <div className="calendar_section">

            <div className="Events_block">
            {/* <img src="https://i.gifer.com/B0eS.gif" alt="" /> */}
                <div className="event_wrapper">
{/* ! */}
                    {
                        loading ? (                           
                            posts.map((post) => (
                                <Month_event 
                                    key={post.id}
                                    all_det={post.data()}
                                />
                            ))                    
                        ):(
                            <div className="no_data">
                                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6d391369321565.5b7d0d570e829.gif" alt="loading" />
                                <div className="no_data_text">
                                    <p>No Events are added</p>
                                </div>
                            </div>
                        )
                    }
                    {/*https://i.gifer.com/B0eS.gif  https://cdn.dribbble.com/users/1785628/screenshots/5927649/qonto-login-solo-team-tom-souverain.gif   https://cdn.dribbble.com/users/100142/screenshots/2920352/loading-animation-cd-v2.gif */}
                </div>
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
