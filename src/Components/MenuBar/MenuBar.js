import React from "react";
import "./MenuBar.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import Popup from "../Popup/Popup";
const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const itemlist = useSelector((state) => state.plist);

  const total = itemlist.map((state1) => {
    return state1.noOfItem * state1.amount;
  });
  const price = total.reduce((prev, next) => {
    return prev + next;
  }, 0);

  const item = itemlist.map((d) => {
    return parseInt(d.noOfItem);
  });

  const noOfProducts = item.reduce((prev, next) => {
    return prev + next;
  }, 0);

  // console.log(price)

  return (
    <div className="outer">
      <div className="heading">
        <h1>Food Junction</h1>
      </div>

      <div className="addcart">
        <button type="submit" onClick={togglePopup}>
          <span className="yourcart"> Your Cart</span>
          <input type="text" value={noOfProducts} />
        </button>
      </div>
      {isOpen && (
        <Popup
          content={
            <>
              {/* <h1> Bill Details</h1>
              <div className="Headingouter">
                <h3>Item Name</h3>
                <h3>Quantity</h3>
                <h3>Amount</h3>
              </div>
              {itemlist.map((state2, index) => (
                <div>
                  <ul>
                    <div className="itemlist">
                      <p>{state2.pname}</p>
                      <p>{state2.noOfItem}</p>
                      <p>{state2.amount}</p>
                    </div>
                  </ul>
                </div>
              ))}
              <div className="totalbox">
                <h3>Total Amount</h3>
                <h3>{price}</h3>
              </div>
              <div>
                <button type="submit" className="order">
                  Order
                </button>
              </div> */}
              <h1 className="bill">Receiptant</h1>
              <div className="container">
                
      <table>
  <thead>
  <tr>
    {/* <th className="tableheading">Sr.No</th> */}
    <td className="tableheading">Item Name</td>
    <td className="tableheading">Quantity</td>
    <td className="tableheading">Amount</td>
  </tr>
  </thead>

  <tbody>
  {
      itemlist.map((data, index)=>{
          return(
            <tr key={index} >
                {/* <td className="tdata"> {price}</td> */}
                <td className="tdata">{data.pname}</td>
                <td className="tdata">{data.noOfItem}</td>
                <td className="tdata">{data.amount}</td>
            </tr>
            )})
    }
</tbody>
</table>
<table>
  <thead>
    <tr>
      <td className="tableheading">Total Amount</td>
      <td className="tableheading">{price}</td>
    </tr>
  </thead>
</table>

</div>
              <div>
                <button type="submit" className="order" onClick={()=>{alert("Congrats! Your food is Order")}}>
                  Order
                </button>
              </div>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
};

export default MenuBar;
