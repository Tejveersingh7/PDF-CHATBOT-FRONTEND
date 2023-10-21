// import React, { useState, useEffect } from "react";

// const Result = () => {
//   const [result, setResult] = useState();
  

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
    
//     try {
//         const response = await fetch('http://localhost:5000/result', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//           });
          
//       const jsonData = await response.json();
//     //   console.log(response)
//       setResult(jsonData);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };
  

//   return (
//     <>
//       <h1></h1>
//     </>
//   );
// };

// export default Result;
