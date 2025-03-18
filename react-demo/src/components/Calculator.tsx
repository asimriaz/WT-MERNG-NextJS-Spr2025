import React, { useState } from 'react'

export default function Calculator() {
    const [display, setDisplay] = useState(0);
    const [nums, setNums] = useState([0, 0]);
    const [index, setIndex] = useState(0)
    const [opr, setOpr] = useState("");


    const handleClick = (e: React.MouseEvent<HTMLButtonElement>)=>{
        //console.log(e.currentTarget.innerText)
        switch (e.currentTarget.innerText) {
            case "+":
                setOpr(e.currentTarget.innerText)
                setIndex(1);
                break;
        
            case "=":
                setDisplay(nums[0]+nums[1]);
                break;

            default:
                let n = Number(e.currentTarget.innerText);
                nums[index] = nums[index] * 10 + n
                setDisplay(nums[index])
                break;
        }
    }

    return (
        <>
            <div style={{
                width: '200px',
                height: '20px',
                border: '1px solid #808080',
                padding: '5px',
                textAlign: 'right'
            }}>{display}</div>
            <button onClick={handleClick}>1</button>
            <button onClick={handleClick}>2</button>
            <button onClick={handleClick}>3</button>
            <button onClick={handleClick}>+</button>
            <button onClick={handleClick}>=</button>

            <pre style={{textAlign: 'left'}}>
                {JSON.stringify({nums, index, opr}, null, 4)}
            </pre>
        </>
    )
}
