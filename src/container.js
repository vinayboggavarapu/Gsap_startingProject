import React,{useEffect,useRef} from 'react'
import Gsap from'gsap'
function Component(){
    let circleGreen=useRef();
    let circleYellow=useRef();
    let circleRed=useRef();
    useEffect(()=>{
        Gsap.from(circleGreen,{opacity:0,x:40,duration:2})
        Gsap.from(circleRed,{opacity:0,x:40,duration:2})
        Gsap.from(circleYellow,{opacity:0,x:40,duration:2})
    },[])
    return(
            <div className='balls'>
                <div ref={el=>circleGreen=el} className='ball green'></div>
                <div ref={el=>circleYellow=el} className='ball yellow'></div>
                <div ref={el=>circleRed=el} className='ball red'></div>
            </div>
    )
}
export default Component;