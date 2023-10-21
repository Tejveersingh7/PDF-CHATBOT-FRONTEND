import React, { useState } from "react";

const Qna = () => {
  const [ques, setQues] = useState("");
  const [response, setResponse] = useState({ answer: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setQues(event.target.value);
    console.log(ques);
  };



  
  const handleSubmitClick = () => {
    if (!ques) {
      alert("ENTER THE QUESTION");
    }
  };


 
  

  const handleSubmit = (event) => {
    event.preventDefault();
    if (ques) {
      setLoading(true);

      fetch("http://localhost:5000/qna", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: ques }),
    })
      .then((response) => response.json())
      .then((data) => {
        setResponse({ answer: data.answer });
        setLoading(false);
        console.log(data);
      })
      .catch((error) => console.log(error));
    }

    
  };

  return (
    <>
      <div className="qna_form">
        <form onSubmit={handleSubmit}>
          <h2>Ask a question</h2>
          <input type="text" className="question" onChange={handleChange} />
          <button type="submit" className="button" onClick={handleSubmitClick}>
            {loading ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="0">
                  <animate
                    id="spinner_0Nme"
                    begin="0;spinner_ITag.begin+0.4s"
                    attributeName="r"
                    calcMode="spline"
                    dur="1.2s"
                    values="0;11"
                    keySplines=".52,.6,.25,.99"
                    fill="freeze"
                  />
                  <animate
                    begin="0;spinner_ITag.begin+0.4s"
                    attributeName="opacity"
                    calcMode="spline"
                    dur="1.2s"
                    values="1;0"
                    keySplines=".52,.6,.25,.99"
                    fill="freeze"
                  />
                </circle>
                <circle cx="12" cy="12" r="0">
                  <animate
                    id="spinner_f83A"
                    begin="spinner_0Nme.begin+0.4s"
                    attributeName="r"
                    calcMode="spline"
                    dur="1.2s"
                    values="0;11"
                    keySplines=".52,.6,.25,.99"
                    fill="freeze"
                  />
                  <animate
                    begin="spinner_0Nme.begin+0.4s"
                    attributeName="opacity"
                    calcMode="spline"
                    dur="1.2s"
                    values="1;0"
                    keySplines=".52,.6,.25,.99"
                    fill="freeze"
                  />
                </circle>
                <circle cx="12" cy="12" r="0">
                  <animate
                    id="spinner_ITag"
                    begin="spinner_0Nme.begin+0.8s"
                    attributeName="r"
                    calcMode="spline"
                    dur="1.2s"
                    values="0;11"
                    keySplines=".52,.6,.25,.99"
                    fill="freeze"
                  />
                  <animate
                    begin="spinner_0Nme.begin+0.8s"
                    attributeName="opacity"
                    calcMode="spline"
                    dur="1.2s"
                    values="1;0"
                    keySplines=".52,.6,.25,.99"
                    fill="freeze"
                  />
                </circle>
              </svg>
            ) : (
              "SUBMIT"
            )}
          </button>
        </form>
      </div>

      <div>
        <h1 style={{ textDecoration: "underline", marginBottom: "30px" }}>
          Answer:
        </h1>
        <h1>{response.answer}</h1>
      </div>
    </>
  );
};

export default Qna;
