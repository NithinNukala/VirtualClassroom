import React from 'react';
import './assign.css';
import { Link } from 'react-router-dom';
const Assign=()=>{
    const Refresh=()=>{
        document.querySelector(".refresh").classList.add("click");
        setTimeout(function(){
            document.querySelector(".refresh").classList.remove("click");
        },200);
        window.location.reload();
    }
    const open=()=>{
        document.querySelector(".slidebar").classList.add("open");
    }
    const close=()=>{
        document.querySelector(".slidebar").classList.remove("open");
    }
    return(
        <div>
           <div className="slidebar">
           <Link to='/dashboard'>
           <button className="classes">Classes</button>
           </Link>
           <Link to='/assignments'>
           <button className="assign">Assignments</button>
           </Link>
           <button className='closer' onClick={close}>x</button>
           </div>
           <div className="title_container">
           <button onClick={open} className="sign">☰</button>
            <h1 className="title">Assignments</h1>
           </div>
           <button onClick={Refresh} type="button" className="refresh">Refresh</button>
           
        </div>
    )
}

export default Assign;