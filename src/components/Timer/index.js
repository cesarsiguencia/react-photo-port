import React, { useState } from "react"

// function SomeComponent() {
//     const [seconds, setSeconds] = useState(0)

//     function startStopwatch() {
//         let updatedSeconds = seconds;
//         setInterval(() => {
//             updatedSeconds += 1;
//             console.log(updatedSeconds);
//             setSeconds(updatedSeconds);
//         }, 1000);
//     }

//     return (
//         <div>
//             {seconds}
//             <button onClick={startStopwatch} >Start</button>
//         </div>
//     )
// }

// export default SomeComponent

// function SomeComponent() {
//     const [seconds, setSeconds] = useState(0)

//     function startStopwatch() {

//             setSeconds((oldNumber)=> oldNumber + 1);

//     }

//     return (
//         <div>
//             {seconds}
//             <button onClick={setInterval(()=> {startStopwatch()},10000)} >Start</button>
//         </div>
//     )
// }

// export default SomeComponent


function ClickCounter() {
    const [count, setCount] = useState(0)

    function increment(){
        setCount((oldNumber)=> oldNumber + 1 

        )
    }
    return (
        <div>
            I've been clicked {count} times

            <button onClick={increment}>Add One</button>
        </div>
    )
}



export default ClickCounter