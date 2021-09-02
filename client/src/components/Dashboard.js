import { useState } from "react";
import MyNotes from "./MyNotes";
import postData from "../utils/postRequest";

// async function checkLoggedIn() {
    // const success = await postData("/checkLoggedIn", {}).then((data) => data);
    // if (success === "success") {
    //     return true;
    // } else {
    //     return false;
    // }
// }

export default function Dashboard() {
    // const [isLoggedIn, setIsLoggedIn] = useState(true);
    // console.log(isLoggedIn);
    // checkLoggedIn().then((data) => setIsLoggedIn(data));
    return <MyNotes />;
    // if (isLoggedIn) {
    //     return <MyNotes />;
    // } else {
    //     return <h1>not logged in</h1>;
    // }
}
