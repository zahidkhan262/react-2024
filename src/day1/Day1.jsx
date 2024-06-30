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
        let data = ''
        console.log(data, "data")
        for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
            console.log(i, String.fromCharCode(i))

            data += `\n ${String.fromCharCode(i)}`
        }
        return data;
    }

    console.log(printAllAlpabets())
    return (
        <>
            <h1>Day1</h1>
            <h3>{printAllAlpabets()}</h3>
        </>
    )
}

const findDuplicateNums = (nums) =>{
let hash = {};
let duplicates = [];
    for(let val of nums){
        if(!hash[val]){
             hash[val] = true;
            duplicate.push(val);
        }
    }
    return duplicate;
    
}
console.log(findDuplicateNums([0,0,1,2,3,4,5,6])

export default Day1
