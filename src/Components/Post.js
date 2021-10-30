import { deleteDoc, doc } from '@firebase/firestore';
import React from 'react'
import { IoPencil, IoTrashOutline } from "react-icons/io5";
import { db } from '../firebase';
import "../Style/Post.css"

function Post({ all_det , id}) {

    const del_doc = async() => { 
        const docRef = doc(db,"events", id);
        await deleteDoc(docRef)
    }
    
  return (
    <div className="post" >
        <div className="post_wrapper">
            <div className="event_img">
                <img src={all_det.image} alt="" />
            </div>
            <div className="event_info">
            <div className="dateAndTime">
                    <p>{all_det.Date}</p>
                    <p>{all_det.Time}</p>
                </div>
                <div className="event_head">
                    <h2>{all_det.EventName}</h2>
                </div>
                <div className="event_info_links">
                    <div className="event_gmeet">
                        <a href={all_det.MeetLink}>Join Meet</a>
                    </div>
                    <div className="event_form">
                        <a href={all_det.FormLink}>Fill Form</a>
                    </div>
                </div>

            </div>
        </div>
        <div className="editing">
            <div className="update">
                <IoPencil className="icon update_icon"/>
            </div>
            <div className="delete">
                <IoTrashOutline className="icon del_icon" onClick={del_doc}/>
            </div>
        </div>
    </div>
  )
}

export default Post
