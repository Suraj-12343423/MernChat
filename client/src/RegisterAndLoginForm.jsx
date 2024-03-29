import { useContext, useState } from "react"
import axios from "axios";
import { UserContext } from "./UserContext";


export default function RegisterAndLoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginOrRegeister, setIsLoginOrRegister] = useState('register');

    const {setUsername:setLoggedInUsername , setId} = useContext(UserContext);

    async function handleSubmit(ev) {
        const url = isLoginOrRegeister === 'register' ? 'register':'login'
        ev.preventDefault();
        try {
            const {data} = await axios.post(url, { username, password });
            setLoggedInUsername(username);

            
            setId(data.id);
            // Handle the response if needed
            console.log('Response:', data);
        } catch (error) {
            // Log and handle the error
            console.error('Axios Error:', error);
        }
}


    return(
        <div className="bg-blue-50 h-screen flex items-center">
            <form className="w-64 mx-auto mb-12" onSubmit={handleSubmit}>
                <input value={username} onChange={ev => setUsername(ev.target.value)} type="text" placeholder="username"  className="block w-full rounded-sm  p-2 mb-2 border"/>
                <input value={password} onChange={ev => setPassword(ev.target.value)} type="password" placeholder="password" className="block w-full rounded-sm p-2 mb-2 border" />
                <button className="bg-blue-500 text-white block w-full rounded-sm">{isLoginOrRegeister === 'register' ? 'Register' : 'Login'}</button>

                <div className="text-center mt-2">
                    {isLoginOrRegeister === 'register' && (<div>Already a member?
                        <button onClick={()=>setIsLoginOrRegister('login')}>Login Here</button>
                    </div>)}
                    {isLoginOrRegeister === 'login' && (
                        <div>Already a member?
                        <button onClick={()=>setIsLoginOrRegister('register')}>REGISTER</button>
                    </div>
                    )}
                </div>
            </form>           
        </div>
    )
}