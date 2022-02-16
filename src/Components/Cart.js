import { useState,useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

export function useMyHook(){
    useEffect(()=>{
        alert("reusable logic will be written inside this one")
    })
}

function Cart() {
    var [cartitems,setCartitems] = useState()
    var [count, setCount]  = useState(0)
    var totalPrice = 0
    useMyHook()

    useEffect(()=>{
       // api call to fetch cart items
       axios({
           method:"post",
           url:"https://apifromashu.herokuapp.com/api/cakecart",
           data:{},
           headers:{
               authtoken:localStorage.token
           }
       }).then((response)=>{
           console.log("response coming from cart api" , response.data)
           setCartitems(response.data.data) 
       })
    }, [])

    function removeFromCart(cakeid,index){
        // api to remove it from cart
        axios({
            method:"post",
            url:"https://apifromashu.herokuapp.com/api/removecakefromcart",
            data:{
                cakeid:cakeid
            },
            headers:{
                authtoken:localStorage.token
            }
        }).then((response)=>{
            console.log("remobe item from cart api" , response.data)
            if(response.data.message=="Removed whole cake  item from cart"){
                cartitems.splice(index,1)
                setCartitems([...cartitems])
            }
        }, (error)=>{
            console.log("error from remove item from cart api" , error)
        })

    }

    return <div className="container">
       
      {cartitems?.length>0 &&  <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Image</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>

                {cartitems && cartitems.map((each, index) => {
                    totalPrice = totalPrice+each.price*each.quantity
                    return <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{each.name}</td>
                        <td><img style={{height:"4rem", width:"4rem"}} className="img-fluid " src={each.image}></img></td>
                        <td>{each.price}</td>
                        <td><button className="btn btn-secondary">+</button>{each.quantity}<button className="btn btn-secondary">+</button></td>
                        <td><button onClick={removeFromCart.bind(null,each.cakeid,index)} className="btn btn-danger">X</button></td>
                    </tr>
                })}

            </tbody>
            </table> }
            <div>
                <h3>Total Price : {totalPrice}</h3>
            </div>
            <div >
                <Link style={{float:"right"}} to="/checkout" className="btn btn-success">Checkout</Link>
            </div>
{cartitems?.length==0 && <h1>Your Cart is Empty</h1> }

    </div>
}

export default Cart