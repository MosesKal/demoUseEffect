
import {useState, useEffect} from 'react';

function FHorloge (){

    const [date, setDate] = useState(new Date());
    
    useEffect(
        ()=>{
            const timerID = setInterval(()=>{setDate(new Date())}, 1000);

            return () => {
                clearInterval(timerID);
            }
        }, [date]
    )

    
        return (
            <div>
                {date.toLocaleTimeString()}
            </div>
        )
}
export default FHorloge;