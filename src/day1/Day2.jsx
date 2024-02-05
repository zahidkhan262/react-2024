import React from 'react'

const Day2 = () => {

    const callbackhell = 'https://onecompiler.com/javascript/423g6u3vy';

    function test1(data,callback){
        const newData = data.map((ele)=> ele *2);
        callback(newData)
    }

    return (
        <div>Day2</div>
    )
}

export default Day2
