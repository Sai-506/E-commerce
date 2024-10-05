import React from 'react'
import { Link } from 'react-router-dom'
//import BuyNow from './BuyNow'

const Cart = ({cart,setCart}) => {
  return (
    <>
    <div className="container my-5" style={{width:"54%"}}>
      {
        cart.length==0 ?(
<>

<div class="text-center" style={{width:"300px",
  height:"500px",
  position:"absolute",
  
  
  
  top:"100px",
  left:"500px",
  borderradius:"10px",
  textAlign: "center"
  }}>
    
    <h1 style={{color:"red",width:"350px",}}>Place Your Order Here</h1> 
  
  <form>
   
     <label>Full Name:</label>
    <input type="text" value=""></input><br></br><br></br>
    <label>Mobile Number</label>
    <input type="numbers" value=""></input><br></br><br></br>
    <label>choose state</label>
    <select id="state" name="state">
    <option value="AndhraPradesh">AndhraPradesh</option>
    <option value="AndhraPradesh">Telangana</option>
    <option value="AndhraPradesh">Karnataka</option>
    <option value="AndhraPradesh">Maharastra</option>
    </select>
    <br></br><br></br>
    <label>Village</label>
    <input type="text" value=""></input><br></br><br></br>
    <label>PinCode</label>
    <input type="Numbers" value=""></input><br></br><br></br>
    <label>House no</label>
    <input type="Numbers" value=""></input><br></br><br></br>
    <label>LandMark</label>
    <input type="text" value=""></input><br></br><br></br>
    <div class="payment">
    <a href="https://www.phonepe.com/">Payment Here</a>
    </div>
  
   
  </form>
  
    <Link to={"/"} className='btn btn-warning'>Continue Shopping...</Link>  
   
  
  
  </div>  
</>
        ):
      cart.map((product)=>{
        return(
          <>
          <div className="card" style={{width:'100%'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={product.imgSrc} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body text-center">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <button className="btn btn-primary mx-3">
                        {product.price} ₹
                      </button>
                      {/* <button
                 
                       className="btn btn-warning"
                       >Buy Now</button> */}
                           <button onClick={()=>setCart("")} className='btn btn-danger'>Buy Now</button>    
                           {/* <button onClick={BuyNow} className='btn btn-danger'>Buy Now</button>  */}
                       
      </div>
    </div>
  </div>
</div>
          </>
        )
      })}

      
    </div>

    {
        cart.length!=0 && (
          <div className="container text-center my-5" style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
  
          }}>
            <button className='btn btn-warning mx-5 '>CheckOut</button>
            <button onClick={()=>setCart("")} className='btn btn-danger'>Clear Cart</button>
             
          </div>
        )
      }
    
       
    </>
  )
}

export default Cart;
