import React, { useState } from 'react'

function Login() {
    return (
        <div class="login-content" style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
            <h1>Enter to Login</h1>
            <div>
                <form action="">
                    <label style={{display:'block', textAlign:'left', marginBottom:15, fontSize:25}}>
                        Username : 
                    </label>
                    <input type="text" id="name" class="name" placeholder='Enter your username' required 
                        style={{display:'block', marginBottom:15, fontSize:20, width:400, height:30}}>
                    </input>
                    <label style={{display:'block', textAlign:'left', marginBottom:15, fontSize:25}}>
                        Password : 
                    </label>
                    <input type="text" id="password" class="password" placeholder='Enter your password' required 
                        style={{display:'block', marginBottom:15, fontSize:20, width:400, height:30}}>
                    </input>
                    <div>
                        <button class="submit" style={{fontSize:20}}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login