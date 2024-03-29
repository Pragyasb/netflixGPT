import { useContext, useRef, useState } from "react";
import SignInContext from "../context-api/SignInContext";
import { checkEmailPassword } from "../data/Validation";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../data/firebase";
import { useDispatch } from "react-redux";

const Signup = () => {
    const { isSignIn, setIsSignIn } = useContext(SignInContext);
    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)
    const [errorMessage, setErrorMessage] = useState("");

   
   
     const auth = getAuth();
    const handleSignUp = () => {
        let message = checkEmailPassword(email.current.value, password.current.value)
        setErrorMessage(message)
        if (message !== null) return;

        //sign up logic
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value,name.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
               
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
                // ..
            });
    }

    return (

        <div className="flex justify-center ">
            {/* main page */}
            <div className=" bg-black flex flex-col  flex-wrap bg-opacity-75 px-20 py-2">
                <div >
                    <h1 className="text-white  text-2xl font-bold py-4 ">SIGN UP</h1>
                </div>
                <div>
                    <form onSubmit={(e) => e.preventDefault()} >
                        <div>
                            <input className="px-7 py-3 m-2 rounded-sm"
                                ref={name}
                                placeholder="Enter Name" />
                        </div>
                        <div>
                            <input className="px-7 py-3 m-2 rounded-sm"
                                placeholder="Email or Phone Number"
                                ref={email} />
                        </div>
                        <div>
                            <input type="password" className="px-7 py-3 m-2 rounded-sm "
                                placeholder="Password"
                                ref={password} />
                        </div>
                        <p className="text-red-700">{errorMessage}</p>
                        <div >
                            <button className="px-24 py-3 m-2 rounded-sm bg-red-700 text-white mt-6"
                                onClick={handleSignUp}
                            >Sign up</button>
                        </div>
                    </form>
                </div>
                <div>
                    <h3 className="text-slate-400 pt-16 ps-2">Already Signed up?
                        <span className="text-white hover:underline cursor-pointer"
                            onClick={() => setIsSignIn(!isSignIn)}>Sign In Now
                        </span> </h3>
                    <p className="text-slate-400 ps-2 pt-4">This page is protected by Google </p>
                    <p className="text-slate-400 ps-2"> reCAPTCHA to ensure you're not a bot.</p>
                    <p className="text-blue-700 ps-2">Learn more</p>
                </div>
            </div>
        </div>

    )
}
export default Signup;