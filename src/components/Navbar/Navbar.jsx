import { GoogleAuthProvider, signInWithPopup, signOut, TwitterAuthProvider } from 'firebase/auth'
import { NavLink } from 'react-router-dom'
import auth from '../../firebase.init'
import { useState } from 'react'

const Navbar = () => {
    const [user, setUser] = useState(null)
    const provider = new GoogleAuthProvider()
    const twitterProvider = new TwitterAuthProvider()


    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result)
                setUser(result.user)
            })
            .catch(error => {
                console.log('Error', error)
            })
        console.log('sign in with google')
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null)
            })
            .catch(error => console.log(error))

    }
    const handleTwitter = () => {
        signInWithPopup(auth, twitterProvider)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => console.log(error))
    }
    const list = <>
        <li><NavLink to='/' className='ml-4'>Home</NavLink></li>
        <li><NavLink to='/cart'>Cart</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {list}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        list
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && <div className='flex items-center gap-5'>
                        <p>{user.displayName}</p>
                        <img src={user.photoURL} className='h-14 rounded-full' alt="" />
                    </div>
                }
                {
                    user ?
                        <div>
                            <button className='btn' onClick={handleSignOut}>Sign Out</button>
                        </div> :
                        <div>
                            <button className='btn' onClick={handleTwitter}>Sign in Twitter</button>
                            <a className="btn" onClick={handleGoogleSignIn}>Sign in with google</a>
                        </div>
                }
            </div>
        </div>
    )
}

Navbar.propTypes = {}

export default Navbar