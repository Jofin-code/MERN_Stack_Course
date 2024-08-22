export default function Login(){

    const validate = () => {
        let data = {
            "email" : ''
        }
    }

    return(
<div>
    <label for='email'>Email</label>
    <input id='email' type='email' placeholder='Email' />
    <br/>
    <label for='password'>Password</label>
    <input id='password' type='password' placeholder='Password' />
    <br/>
    <button onClick={validate()}>Login</button>
</div>
    );
}