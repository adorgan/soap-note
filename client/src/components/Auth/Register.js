// import { useState, useReducer } from "react";
// import { Redirect } from "react-router-dom";
// import postData from "../../utils/postRequest";

// const defaultFormState = {
//     email: "",
//     password: "",
// };

// const formReducer = (state, event) => {
//     if (event.reset) {
//         return defaultFormState;
//     }
//     return {
//         ...state,
//         [event.name]: event.value,
//     };
// };

// export default function Register() {
//     const [formData, setFormData] = useReducer(formReducer, defaultFormState);
//     const [success, setSuccess] = useState(false);
//     const handleChange = (event) => {
//         setFormData({
//             name: event.target.name,
//             value: event.target.value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         postData('/register', formData).then(data=>{
//             if(data === "success"){
//                 setSuccess(true);
//             }
//             else{
//                 setSuccess(false);
//             }
//         })
//     };

//     if(success){
//         return <Redirect to="/login"/>;
//     }

//     return (
//         <>
//             <h3>Register</h3>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor="email">Email</label>
//                     <input
//                         id="email"
//                         name="email"
//                         type="email"
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="password">Password</label>
//                     <input
//                         id="password"
//                         name="password"
//                         type="password"
//                         onChange={handleChange}
//                     />
//                 </div>
//                 <button type="submit">Register</button>
//             </form>
//         </>
//     );
// }
