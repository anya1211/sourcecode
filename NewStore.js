import { useState, useEffect } from "react";
import './store.css'




function Store() {

    const [maindata, setMaindata] = useState([])


    useEffect(() => {


        async function storeFun() {
            let storedata = await fetch('https://fakestoreapi.com/products');
            let maindata = await storedata.json();
            console.log(maindata)
            setMaindata(maindata);
           
        }
        storeFun()
    }, [])


    const fakeElems = (elems)=>{
        return elems.map(elem => <li>

             <div className="mainDiv"> 
                <div className="innerDiv">
               
                <img src={elem.image} alt="img"></img>
                 <p>{elem.id}</p>
                 <h3>{elem.title}</h3>
                 <p>{elem.description}</p>
                 <p>{elem.price}</p>
                  <button>BuyNow</button>
                       
                </div>
             </div>
        </li>)
    }


    return (
        <>
            <div className="divMain">


               { fakeElems(maindata)}

                



            </div>
        </>

    )
}
export default Store;