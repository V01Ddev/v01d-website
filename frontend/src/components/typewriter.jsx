import React, { useEffect, useState } from 'react';

export default function TypeWriter() {
    let text = "I am v01d, welcome to my website"
    let speed = 100;
    let timer;

    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() =>{
        const timeout = setTimeout(() => {
            setDisplayedText(displayedText + text.charAt(index));
            setIndex(index + 1);
        }, 80);
        return () => clearTimeout(timeout);

        }, [index, displayedText]);

    return <h1>{displayedText}</h1>
}

