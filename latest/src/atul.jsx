import React from "react";
import { useState } from "react";

function Form()
{

   

// const [FirstName , setFirstName] = useState("");
// const [LastName, setLastName] = useState("");

// console.log(FirstName);
// console.log(LastName);
// let changefirstNameHandler=(Event) =>{
//     // console.log(Event.target.value)
//     // console.log("change fiest name");
//     setFirstName(Event.target.value) 
// }

// let changeLastNameHandler = (Event) => {
//     // console.log(Event.target.value)
//     // console.log("change last name");
//     setLastName(Event.target.value)
// }

 const [formData , setFormData] = useState({firstName: "" , lastName: "" , email: "" , comments: "" , isVisible: "true" , mode: "",  favcar: ""});
 console.log(formData)
 
//  console.log(formData.firstName);
//  console.log(formData.lastName);
//  console.log(formData.email);

 function changeHandler(Event){
    const {name,value, checked, type} = Event.target

    setFormData (prevFormData =>{
        return {
            ...prevFormData,
            [name]: type ==="checkbox" ? checked : value
        }
    });
    }

    function submitHandler(Event){
        Event.preventDefault();
        console.log("finallly prigting the entireform data......")
        console.log(formData)

    }
 

    return ( <>
    <form onSubmit={submitHandler}>
        <input type="text" placeholder="first name" onChange={changeHandler} name="firstName" value={formData.firstName} />
    <br />
    <br />
    <input type="text" placeholder="last name" onChange={changeHandler} name="lastName" value={formData.lastName} />
    <br />
    <br />
    <input type="email" name="email" placeholder="enter your email here" onChange={changeHandler}  value={formData.email}/>

    <br />
    <br />

    <textarea placeholder="enter your comments here" onChange={changeHandler} name="comments" value={formData.comments}/>

    <br />
    <br />

    <input type="checkbox" name="isVisible" id="isVisible" onChange={changeHandler} checked = {formData.isVisible  }   />

    <label htmlFor="isVisible">Am i visible ?</label>

    <br />
    <br />


    <input type="radio" name="mode" id="online-mode" onChange={changeHandler} value="online-mode"  checked = {formData.mode === "online-mode"}/>

    <label htmlFor="online-mode">online mode</label>

    <br />
    <br />
    

    <input type="radio" name="mode" id="ofline-mode" onChange={changeHandler} value="ofline-mode"
    checked = {formData.mode === "ofline-mode"} />

    <label htmlFor="onfine-mode">ofline mode</label>
    <br />
    <br />


    <label htmlFor="favcar">Tell me your fav car </label>



    <select name="favcar" id="favcar" value={formData.favcar} onChange={changeHandler}>

        <option value="scarpio">scarpio</option>
        <option value="thar">thar</option>
        <option value="defender">defender</option>
        <option value="legender"></option>
        

    </select>



{/* <input type="submit" name="" id="" /> */}
<br />
<br />


<button>submit</button>

    







 
    </form>

    </> );
}

export default Form;