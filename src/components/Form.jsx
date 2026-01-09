import React, { useReducer } from "react";

const initialValue = {name: "",email: "",password: "",};

function formReducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {...state,[action.field]: action.value,};
    case "RESET":
      return initialValue;
      default:
      return state;
  }
}

const Form =()=>{
  const [form, dispatch]=useReducer(formReducer,initialValue);

  const handleSubmit=(e)=> {
    e.preventDefault();
    console.log(form);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text"placeholder="Name"value={form.name}onChange={(e) =>dispatch({type: "CHANGE_INPUT",field: "name",value: e.target.value, })
          }
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            dispatch({
              type: "CHANGE_INPUT",
              field: "email",
              value: e.target.value,})}/>

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) =>
            dispatch({
              type: "CHANGE_INPUT",
              field: "password",
              value: e.target.value,}) }/>

        <button type="submit">Submit</button>
        <button type="button" onClick={()=>dispatch({ type:"RESET"})}>Reset</button>
      </form>
    </>
  );
};

export default Form;
