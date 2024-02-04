import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from 'react'
import ContextProvider from "../../context/ContextProvider";
import { useNavigate } from "react-router-dom";


const AdminLogin = () => {
    const { addUser, users, setUsers, isLoggedIn, setIsLoggedIn } = useContext(ContextProvider)
    const [action, setAction] = useState('Sign In')
    const [registrationSubmitted, setRegistrationSubmitted] = useState(false)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Check if the entered email and password match the admin credentials
        if (email === "admin@admin.dz" && password === "admin") {
            console.log('Admin login successful');
            setIsLoggedIn(true);
            navigate('/admin-panel');
        } else {
            // If not admin credentials, proceed with checking regular users
            const user = users.find((user) => user.email === email);
            if (user && user.password === password) {
                console.log('Login successful');
                setIsLoggedIn(true);
                navigate('/lawyers');
            } else {
                setError('Invalid email or password');
            }
        }
    };


    const navigateAdmin = () => {
        navigate('login-admin')
    }

    const handleChange = () => {
        if (action === 'Sign In') {
            setAction('Create an account')
        } else {
            setAction('Sign In')
        }
    }
    const handleRegistration = (e) => {
        e.preventDefault();
        const newUser = {
            id: Math.floor(Math.random() * 10000) + 1,
            fullName: name,
            email: email,
            password: password
        };
        addUser(newUser);
        setRegistrationSubmitted(true)
    };
    return (
        <div >
            <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h1 className="justify-center text-2xl text-center"><span className="font-black">DZ</span> Mouhami</h1>
                    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account as a lawyer</h2>
                </div>

                <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <Link to="/resetpassword" className="font-semibold text-[#800020] hover:text-red-800">
                                        Forgot password?
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        {error && <div className="text-red-600">{error}</div>}

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-[#800020] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p class="mt-10 text-center text-sm text-gray-500">
                        Not a member?
                        <a href="#" onClick={handleChange} class="font-semibold leading-6 text-[#800020] hover:text-red-800"> Register</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;