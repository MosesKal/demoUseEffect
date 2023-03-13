import { useState, useEffect } from "react";

function EffetDeBord(){
    const [count, setCount] = useState(0);

    useEffect(()=>{
        document.title =`${count} fois`
    })

    return (
        <div>
            <p>{count}</p>
            <button onClick={()=>{setCount(count+1)}}>Cliquer Ici</button>
        </div>
    )
}

export default EffetDeBord