import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpperClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case!", "success");
  };

  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case!", "success");
  };

  // Remove Extra White Spaces
  const handleRemoveSpaceClick = () => {
    let newText = text.replace(/\s+/g, " ");
    setText(newText);
    props.showAlert("Removed Extra White Spaces!", "success");
  };

  // Copy Text
  const handleCopyText = () => {
    let text = document.getElementById("myBox");
    text.select();
    // text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard!", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "#053B50" : "#EEEEEE" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows={8}
            value={text}
            defaultValue={""}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "#EEEEEE" : "#053B50",
              color: props.mode === "light" ? "#053B50" : "#EEEEEE",
            }}
          />
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpperClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>
          Convert to Lowercase
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleRemoveSpaceClick}
        >
          Remove WhiteSpaces
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopyText}>
          Copy Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "#053B50" : "#EEEEEE" }}
      >
        <h3>Your text summary</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h4>Preview</h4>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}

/* > Props & States (React components render UI elements based on their props and their internal state)

- Props: Let us customize React Components. (it configure how components render)
- States: For data that is going to change we use state.

Rule
   - use 'props' to configure a component when it renders.
   - use 'state' to keep track of any component's data that you expect to change over time. */
