// import React,{useState} from 'react'
// import { Link,useNavigate} from 'react-router-dom'
// import Badge from 'react-bootstrap/Badge';
// import Model from '../Model';
// import Cart from '../screens/Cart';
// import { useCart } from './ContextReducer';

// export default function Navbar() {
    
//     const [cartView, setCartView] = useState(false)
//     let data = useCart();

//     const navigate=useNavigate();

//     const handleLogout=()=>{
//         localStorage.removeItem("authToken");
//         navigate("/login")
//     }


//     return (
//         <div>
//             <nav className="navbar navbar-expand-lg navbar-dark bg-success">
//                 <div className="container-fluid">
//                     <Link className="navbar-brand fs-1 fst-italic" to='/'>PetLounge</Link>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarNav">
//                         <ul className="navbar-nav me-auto mb-2">
//                             <li className="nav-item">
//                                 <Link className="nav-link active fs-5" aria-current="page" to='/'>Home</Link>
//                             </li>

//                             {(localStorage.getItem("authToken")) ?
//                                 <li className="nav-item">
//                                     <Link className="nav-link active fs-5" aria-current="page" to='/myOrder'>My Orders</Link>
//                                 </li>

//                                 : ""}
//                         </ul>
//                         {(!localStorage.getItem("authToken")) ?
//                             <div className='d-flex'>
//                                 <Link className="btn bg-white text-success mx-1" to='/login'>Login</Link>
//                                 <Link className="btn  bg-white text-success mx-1" to='/createUser'>SignUp</Link>
//                             </div>
//                             :
//                             <div>
//                                 <div className='btn bg-white text-success mx-2' onClick={()=>{setCartView(true)}}>
//                                     My Cart{"  "}
//                                     <Badge pill bg="danger">{data.length}</Badge>

//                                 </div>
//                                 {cartView?<Model onClose={()=>setCartView(false)} ><Cart/></Model>:null}

//                                 <div className='btn bg-white text-danger mx-2' onClick={handleLogout}>
//                                     Logout

//                                 </div>
//                             </div>

//                         }
//                     </div>
//                 </div>
//             </nav>
//         </div>
//     )
// }


import React,{useState} from 'react'
import { Link,useNavigate} from 'react-router-dom'
import Badge from 'react-bootstrap/Badge';
//import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { MdOutlineShoppingCart } from "react-icons/md";
import Model from '../Model';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';

export default function Navbar(props) {
    
    const [cartView, setCartView] = useState(false)
    localStorage.setItem('temp', "first")
    let data = useCart();

    const navigate=useNavigate();
    const handleLogout=()=>{
        localStorage.removeItem("authToken");
        navigate("/login")
    }
    const loadCart = () => {
        setCartView(true)
    }
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success position-sticky"  style={{ boxShadow: "0px 10px 20px black", filter: 'blur(20)', position: "fixed", zIndex: "10", width: "100%" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fst-italic" to='/'>PetLounge</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active fs-5 mx-3 active" aria-current="page" to='/'>Home</Link>
                            </li>

                            {(localStorage.getItem("authToken")) ?
                                <li className="nav-item">
                                    <Link className="nav-link active fs-5" aria-current="page" to='/myOrder'>My Orders</Link>
                                </li>

                                : ""}
                        </ul>
                        {(!localStorage.getItem("authToken")) ?
                            <div className='d-flex'>
                                <Link className="btn bg-white text-success mx-1" to='/login'>Login</Link>
                                <Link className="btn  bg-white text-success mx-1" to='/createUser'>SignUp</Link>
                            </div>
                            :
                            <div>
                                <div className='btn bg-white text-success mx-2' onClick={()=>{setCartView(true)}}>
                                    My Cart{" "}
                                    <Badge color="secondary" badgeContent={data.length} >
                                    <MdOutlineShoppingCart />
                                    </Badge>
                                      
                                </div>
                                {cartView?<Model onClose={()=>setCartView(false)} ><Cart/></Model>:""}

                                <div className='btn bg-white text-danger mx-2' onClick={handleLogout}>
                                    Logout

                                </div>
                            </div>

                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}