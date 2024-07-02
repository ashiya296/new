import React from "react";
import { useState } from "react";
import { data } from "./Productdetails";
import {Card, Button} from "react-bootstrap";

function Product() {
    const [items, setItems] = useState(data)
    const increment = (id) =>{
        const newItem = items.map((item)=>
            item.id===id? {...item, qty:item.qty+1} :item
        )
        setItems(newItem)
    }
    const decrement = (id) =>{
        const newItem = items.map((item)=>
            item.id===id && item.qty >1? {...item, qty:item.qty-1} :item
        )
        setItems(newItem)
    }

    

  return (
    <div >
      <h1 className="bg-info text-white" style={{textAlign:"center"}}>Products</h1>
      {
        items.map((item)=>(
            <div className="d-inline-flex" key={item.id}>
        <Card style={{ width: "18rem" }} className="shadow p-3 m-2 bg-body-tertiary rounded">
          <Card.Img 
          className="p-2"
          variant="top" 
          src= {require (`./Assets/${item.image}.jpg`)} 
          style={{height:"300px"}}/>
          <Card.Body>
            <Card.Title>{item.model}</Card.Title>
            <Card.Text>{item.desc}
            </Card.Text>
           <div className="d-inline-flex">
            <Button variant="primary" onClick={() =>increment(item.id)}>+</Button>
            <p>
               Qty: {item.qty}
            </p>
            <Button variant="primary" onClick={() =>decrement(item.id)}>-</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
        ))
      }
      
    </div>
  );
}

export default Product;
