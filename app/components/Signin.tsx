"use client"
export default function SigninComponent(){
    function handler(){
        console.log('button clicked')
    }
    return(
        <div>
            signin components
            <br></br>
            <button onClick={handler}>I am a button click me</button>
        </div>
    )
}