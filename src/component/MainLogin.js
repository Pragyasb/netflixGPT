import { useContext, useState } from "react"
import Login from "./Login"
import Signup from "./Signup"
import SignInContext from "../context-api/SignInContext"

const MainLogin = () =>{
    const {isSignIn,setIsSignIn} = useContext(SignInContext)
return(
    <div>
        <div className="flex justify-between">
            <div className="">
            <img className="w-52 h-20"
             src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940" />
            </div>
             <div className="">
                <button className="bg-red-700 text-black px-2 py-2 rounded-sm my-2 mx-1"
                onClick={()=>setIsSignIn(!isSignIn)}
                >Sign In</button>
                <button className="bg-black text-white px-2 py-2 rounded-sm my-2 mx-1"
                onClick={()=>setIsSignIn(!isSignIn)}

                >Sign Up</button>
             </div>
        </div>
        {
            isSignIn ?
            <Signup />
            :
            <Login />
        }
    </div>
)
}
export default MainLogin