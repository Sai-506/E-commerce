// import { useState } from "react";
// import ReactDOM from 'react-dom/client';

// function MyForm() {
//   const [name, setName] = useState("");
//   const[address, setAddres]=useState("");
//   const[ordersummary,setOrderSummary]=useState("");
//   const[paymentoption,setPaymentOption]=useState=("")

//   return (
//     <div class="text">
//     <form>
//       <label>Enter your mobilenumber/emai:
//         <input
//           type="text" 
//           value={number}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </label>
//       <label>Enter your Delivery Address:
//         <input
//           type="text" 
//           value={number}
//           onChange={(e) => setAddres(e.target.value)}
//         />
//       </label>
//       <label>OrderSummary:
//         <input
//           type="text" 
//           value={number}
//           onChange={(e) => setOrderSummary(e.target.value)}
//         />
//       </label>
//       <label>PaymentOption:
//         <input
//           type="text" 
//           value={number}
//           onChange={(e) => setPaymentOption(e.target.value)}
//         />
//         </label>
//       <button onClick={()=>setName("")} className='btn btn-danger'>Buy Now</button> 
//     </form>
//     </div>
//   )
// }
// export default MyForm;
// import React from 'react'
// import { Link } from 'react-router-dom'
// const BuyNow = ({buynow,setBuyNow}) => {
//     return (
//        <div classname="card">
//         <form>
//             <h1>LOGIN OR SIGNUP</h1>
//             <label for="username">Username:</label>
//   <input type="text" id="username" name="username"></input>
//   <label for="pwd">Password:</label>
//   <input type="password" id="pwd" name="pwd"></input><br><br>
//   <button className="btn btn-warning"
//                  >Continue</button> 
//         </form>

//        </div>
//     )
// }
import React, { useState } from 'react';

const BuyNow = ({ product }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleBuyNow = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/purchase', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId: product.id }),
      });

      if (!response.ok) {
        throw new Error('Failed to purchase the product');
      }

      const data = await response.json();
      // Handle successful purchase, e.g., redirect to confirmation page
      console.log('Purchase successful:', data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <button onClick={handleBuyNow} disabled={loading}>
        {loading ? 'Processing...' : 'Buy Now'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default BuyNow;
