import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    // These two properties are deconstractued from the event.target
    const { name, value } = event.target;
    console.log(name);value={contact.fName} 
    console.log(value);
    setContact((preValue) => {
      if (name === "fName") {
        return { fName: value, lName: preValue.lName, email: preValue.email };
      } else if (name === "lName") {
        return { fName: preValue.fName, lName: value, email: preValue.email };
      } else {
        return { fName: preValue.fName, lName: preValue.lName, email: value };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" value={contact.fName} onChange={handleChange} placeholder="First Name" />
        <input name="lName" value={contact.lName} onChange={handleChange} placeholder="Last Name" />
        <input name="email" value={contact.email} onChange={handleChange} placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
