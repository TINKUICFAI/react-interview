import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleOnChange = (e) => {
    let { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    const data = new FormData(event.target);

    console.log("Data=>>>", data.get("name"), data.get("email"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleOnChange} />
      </label>
      <label>
        Email:
        <input type="text" name="email" onChange={handleOnChange} />
      </label>
      <button type="submit" value="Submit">
        submit
      </button>
    </form>
  );
}

export default App;
