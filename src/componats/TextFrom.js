import React, { useState } from 'react';

export default function TextFrom(props) {
    const [text, setText] = useState("Enter The Text Here");

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    const handleCopy = () => {
        console.log("I am copy");

        // Get the textarea element by its ID
        const textArea = document.getElementById("exampleFormControlTextarea1");

        if (textArea) {
            textArea.select();
            textArea.setSelectionRange(0, 9999);

            navigator.clipboard.writeText(textArea.value)
                .then(() => {
                    console.log("Text copied to clipboard");
                })
                .catch((err) => {
                    console.error("Failed to copy text: ", err);
                });
        } else {
            console.error("Element with ID 'exampleFormControlTextarea1' not found");
        }
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleTitleCase = () => {
        const newText = text
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
        setText(newText);
    };

    const handleClear = () => {
        setText("");
    };

    return (
        <>
            <h3 >Enter Text To Below</h3>
            <div className='container my-3'>
                <h1>{props.Heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        value={text}
                        onChange={handleOnChange}
                        style={{background:props.mode==='dark'?'grey':'white'}}
                        rows="8"
                    ></textarea>
                </div>
                <button className='btn btn-primary' onClick={handleUpClick}>Convert To Uppercase</button>
                <button className='btn btn-primary mx-3 my-2' onClick={handleLowClick}>Convert To Lowercase</button>
                <button className='btn btn-primary mx-2 my-2' onClick={handleClear}>Clear Text</button>
                <button className='btn btn-primary mx-2 my-2' onClick={handleTitleCase}>Title Case Text</button>
                <button className='btn btn-primary mx-2 my-2' onClick={handleCopy}>Copy Text</button>
            </div>
            <div className='container my-3'>
                <h1>Your Text Summary</h1>
                <h5>
                    {text.split(" ").filter(word => word.length > 0).length} words and {text.length} characters
                </h5>
                <h5>{0.008 * text.split(" ").filter(word => word.length > 0).length} minutes to read</h5>
                <h1>Preview</h1>
                <h5>{text.length > 0 ? text : "Nothing to preview"}</h5>
            </div>
        </>
    );
}
