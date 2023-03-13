import {useState, useEffect} from 'react';

function Button () {

    const [number, setNumber] = useState(0);

    useEffect(
        ()=>{
            document.title = `${number} fois`;
        }
    )

    return (
        <div>
            <p>{number}</p>
            <button onClick={()=>{setNumber(number + 1)}}>Cliquer Ici</button>
        </div>
    )
}
export default Button;