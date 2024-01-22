import React from 'react'

const Day1 = () => {
    // without invoke function 
    // function Show() {
    //     console.log("JS ")
    // }

    // new Show;

    // function isInteger(num) {
    //     // return !`${num}`.includes('.');
    //     return num % 1 === 0;
    // }

    // console.log(isInteger(12));

    // 3rd question

    // console.log(2 + "2") // it is first concatenate 
    // console.log(2 * "2")
    // console.log(2 - "2")
    // console.log(2 / "2")


    function printAllAlpabets() {
        const arr = [...new Array(26)];
        let start = 65;
        arr.map((_, i) => {
            console.log(String.fromCharCode(start, i++))
        })
    }

    console.log(printAllAlpabets())
    return (
        <>
            <h1>Day1</h1>
        </>
    )
}

export default Day1