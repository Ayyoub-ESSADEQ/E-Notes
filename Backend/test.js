import verify from "./Utilities/login.js";

const verdict = await verify("JohnSmith","wKj7$%dLp9").then(v=>{console.log(v)})
