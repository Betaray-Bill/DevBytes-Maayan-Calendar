import React from 'react'
import Post from "./Post"
import "../Style/Month_event.css"


function Month_event({ all_det , id}) {
    let month = " "

    if(all_det.Month === "01"){
        month="Jan"
    }else if(all_det.Month === "02"){
        month="Feb"
    }else if(all_det.Month === "03"){
        month="Mar"
    }else if(all_det.Month === "04"){
        month="Apr"
    }else if(all_det.Month === "05"){
        month="May"
    }else if(all_det.Month === "06"){
        month="June"
    }else if(all_det.Month === "07"){
        month="July"
    }else if(all_det.Month === "08"){
        month="Aug"
    }else if(all_det.Month === "09"){
        month="Sept"
    }else if(all_det.Month === "10"){
        month="Oct"
    }else if(all_det.Month === "11"){
        month="Nov"
    }else if(all_det.Month === "12"){
        month="Dec"
    }else{
        month=" "
    }

    return (
        <div className="month_event">
            <div className="month_name">
                <h2>{month}-{all_det.Year}</h2>
            </div>
            <div className="event_posts">
                <Post all_det={all_det} id={id}/>
            </div>
        </div>
    )
}

export default Month_event
