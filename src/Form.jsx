import React, { useState } from "react";


const Form = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUploadClick = () => {
    if (file){
      alert('DOCUMENT UPLOADED ')
    }
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);

    fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="box">
      <form onSubmit={handleSubmit}>
        <input type="file" required accept=".pdf" onChange={handleFileChange} />
        <button type="submit" onClick={handleUploadClick} className="button">UPLOAD</button>
      </form>
      
    </div>
  );
};

export default Form;
