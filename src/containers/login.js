import React from 'react'

const Login = () => (
    <form>
        <input type='text' name='username'  value='' placeholder='Enter Username' />
        <input type='password' name='password' value=''placeholder='Enter Password' />
        <input type='submit' value='submit' />
    </form>
)

export default Login