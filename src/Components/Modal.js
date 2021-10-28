
import React, {useEffect, useRef} from "react";
import { gsap } from "gsap";

function Modal({open}) {

    let menu = useRef(null)
    let revealMenu = useRef(null)
    let revealMenubg = useRef(null)
    let cityBg = useRef(null)

    
    useEffect(() => {
        if(open.clicked===false){
            gsap.to( revealMenubg.current, {
                duration:0.8,
                height:0,
                ease:"power2.InOut",
            })

            gsap.to(revealMenu.current,{
                duration:0.6,
                skewX:-1,
                height:0,
                ease:"power2.InOut",
            })

            gsap.to(menu.current, {
                duration:1,
                height: 0,
                css:{display:'none'}
            })
        }else if(open.clicked===false && open.initial === null || open.clicked === true){
            gsap.to( revealMenubg.current, {
                duration:1,
                height:"100%",
                ease:"power2.InOut",
            })

            gsap.to(revealMenu.current, 0.6,{
                duration:1,
                height:"100%",
                ease:"power2.InOut",
            })
            gsap.to(menu.current, {
                duration:1,
                css:{display:'block'}
            })

        }

    }, [open])

    return (
        <div ref={menu} className="hambuger-menu">
          <div ref={revealMenubg} className="menu-second-bg-color"></div>
          <div ref={revealMenu} className="menu-layer">
              <div className="menu-city-bg" ref={cityBg}>

              </div>
              <div className="container">
                  <div className="wrapper">
                      <div className="menu-links">

                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
}

export default Modal
