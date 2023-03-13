import { useState, useEffect } from "react";

function Ftime (){
    const [state, setState] = useState({date : new Date()});

    useEffect(()=>{
        const timerID = setInterval(()=>{ setState({date: new Date()})}, 1000);

        return ()=>{clearInterval(timerID)}
    }, [state])

    return (
        <div>
            {state.date.toLocaleTimeString()}
        </div>
    )
}
export default Ftime;