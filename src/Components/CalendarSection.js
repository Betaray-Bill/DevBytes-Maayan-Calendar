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
    const [change_bg, setchange_bg] = useState(false)


    useEffect(() => {
        const unsub = onSnapshot(query(collection(db,"events"), orderBy("Month","asc")), snapshot => {
            setposts(snapshot.docs)
            setloading(true)
        })
        console.log("Event Post : ", posts.length)

        return unsub;
    },[db]);

    const ChangeBg = () => {
        const images=[
            "https://i.imgur.com/bfRaZAF.jpg",
            "https://wallpaperforu.com/wp-content/uploads/2020/07/vector-wallpaper-200712181739421920x1200.jpg",
            "https://wallpaperaccess.com/full/1638744.jpg",
            "https://static.vecteezy.com/system/resources/previews/002/299/253/non_2x/sunset-beach-landscape-illustration-vector.jpg",
            "https://i.pinimg.com/originals/1c/a1/4d/1ca14d11e659a37d2e7fc77781322433.jpg",
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5bbe9769470047.5b82d2e0e68c0.png",
            "https://mir-s3-cdn-cf.behance.net/project_modules/1400/4e802d66616373.5b1c028ba26c3.jpg"
        ]

        const bg = images[Math.floor(Math.random() * images.length)]
        setchange_bg(bg)
    }

    setInterval(ChangeBg, 5000)


    return (
        <div className="calendar_section" style={{background:`url(${change_bg})`}}>

            <div className="Events_block">
                <div className="event_wrapper">
{/* ! */}
                    {
                        loading ? (                           
                            posts.map((post) => (
                                <Month_event 
                                    key={post.id}
                                    id={post.id}
                                    all_det={post.data()}
                                />
                            ))                    
                        ):(
                            <div className="no_data">
                                <img src="https://i.gifer.com/B0eS.gif" alt="loading" />
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
