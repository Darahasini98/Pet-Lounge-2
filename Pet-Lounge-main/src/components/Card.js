// import React, { useEffect, useRef, useState } from 'react'
// import { useDispatchCart, useCart } from "./ContextReducer"

// export default function Card(props) {

//     let dispatch = useDispatchCart();
//     let data = useCart()
//     let gOptions = props.genders;
//     let options = props.packages;
//     const priceRef = useRef();
//     let priceOptions = Object.keys(options);
//     let pricevalues = Object.values(options);
//     let genderOptions = Object.keys(gOptions);

//     const [gender, setGender] = useState("M")
//     const [packages, setPackages] = useState("")

//     const handleAddToCart = async () => {
//         let pet = []
//         for (const item of data) {
//             if (item.id === props.petDetails._id) {
//                 pet = item;
//                 break;
//             }
//         }
//         if (pet !== []) {
//             if (pet.packages === packages) {
//                 await dispatch({ type: "UPDATE", id: props.petDetails._id, price: props.finalPrice, gender: gender })
//                 return
//             }
//             else if (pet.packages !== packages) {
//                 await dispatch({ type: "ADD", id: props.petDetails._id, name: props.petDetails.petName, price: props.finalPrice, gender: gender, packages: packages })
//                 return
//             }
//             return
//         }
//         await dispatch({ type: "ADD", id: props.petDetails._id, name: props.petDetails.petName, price: props.finalPrice, gender: gender, packages:packages,img:props.img })

//     }

//         let finalPrice = parseInt(options[packages]);
//         useEffect(() => {
//             setPackages(priceRef.current.value)
//         }, [])
    
//         return (
//             <div>
//                 <div>
//                     <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
//                         <img src={props.petDetails.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
//                         <div className="card-body">
//                             <h5 className="card-title">{props.petDetails.petName}</h5>
//                             <p className="card-text">{props.petDetails.description}</p>
//                             <div className='container w-100'>
//                                 <select className='m-2 h-100 bg-success' onChange={(e) => setGender(e.target.value)}>
//                                 {genderOptions.map((data) => {
//                                         return <option key={data} value={data}>{data}</option>
//                                     })}
                                  
//                                 </select>
//                                 <select className='m-2 h-100 bg-success rounded' ref={priceRef} onChange={(e) => setPackages(e.target.value)}>
//                                     {priceOptions.map((data) => {
//                                         return <option key={data} value={pricevalues(data)}>{data}</option>
//                                     })}
//                                 </select>

//                                 <div className='h-100 fs-5'>
//                                     ₹{finalPrice}/-
//                                 </div>
//                             </div>
//                             <hr />
//                             <button className={'btn btn-success justify-content-center ms-2'} onClick={handleAddToCart}>Move to Basket</button>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }





import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatchCart, useCart } from './ContextReducer'

export default function Card(props) {

    let dispatch = useDispatchCart();
    let data = useCart();
    let navigate = useNavigate();

    let options = props.options;
    const priceRef = useRef();
    let priceOptions = Object.keys(options);
  //  let pets = props.petDetails;
    const [days, setDays] = useState(1)
    const [packages, setPackages] = useState("")

    const handleClick = () => {
        if (!localStorage.getItem("token")) {
          navigate("/login")
        }
      }
      const handleOptions = (e) => {
        setPackages(e.target.value);
      }
      const handleDays = (e) => {
        setDays(e.target.value);
      }
    const handleAddToCart = async () => {
        let pet = []
        for (const item of data) {
            if (item.id === props.petDetails._id) {
                pet = item;
                break;
            }
        }
        console.log(pet);
        if (pet !== []) {
            if (pet.packages === packages) {
                await dispatch({ type: "UPDATE", id: props.petDetails._id, price: finalPrice ,days:days})
                return
            }
            else if (pet.packages !== packages) {
                await dispatch({ type: "ADD", id: props.petDetails._id, name: props.petDetails.petName, price: finalPrice, days: days, packages: packages,img:props.petDetails.img })
                return
            }
            return
        }
        await dispatch({ type: "ADD", id: props.petDetails._id, name: props.petDetails.petName, price: finalPrice, days: days, packages:packages,img:props.petDetails.img })

    }

       
        useEffect(() => {
            setPackages(priceRef.current.value)
        }, [])
    
        let finalPrice = days * parseInt(options[packages]);
        return (
            <div>
                <div>
                    <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                        <img src={props.petDetails.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
                        <div className="card-body">
                            <h5 className="card-title">{props.petDetails.petName}</h5>
                             <p className="card-text">{props.petDetails.description}</p> 
                            <div className='container w-100'style={{ height: "38px" }}>
                            <select className="m-2 h-100 w-20 bg-success text-black rounded" style={{ select: "#FF0000" }} onClick={handleClick} onChange={handleDays}>
                            {Array.from(Array(7), (e, i) => {
                                        return (
                                        <option key={i + 1} value={i + 1}>No.of Days:{i + 1}</option>)
                                    })}
                                </select>
                                <select className='m-2 h-100 bg-success rounded' ref={priceRef}  onClick={handleClick} onChange={handleOptions}>
                                    {priceOptions.map((data) => {
                                        return <option key={data} value={data}>{data}</option>
                                    })}
                                </select>

                                <div className=' d-inline ms-2 h-100 w-20 fs-5'>
                                    ₹{finalPrice}/-
                                </div>
                            </div>
                            <hr />
                            <button className={'btn btn-success justify-content-center ms-2'} onClick={handleAddToCart}>Move to Basket</button>

                        </div>
                    </div>
                </div>
            </div>
        )
    }