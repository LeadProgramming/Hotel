import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import firebase from '../firebase_config';
const Header = ({ children }) => {
    const [status, setStatus] = useState(false);
    const logout = () => {
        firebase.auth().signOut()
    }
    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                setStatus(true);
            } else {
                setStatus(false);
            }
        });
    }, [])

    return (
        <>
            <Head>
                <title>Teddy Bear Hotel</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <nav className="p-8">
                    <ul className="space-y-4">
                        <li>
                            Teddy Bear Hotel
                        </li>
                        <li>
                            <Link href="/rooms">
                                <a>Rooms</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/calendar">
                                <a>Calendar</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/reservation">
                                <a>Reservation</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/profile">
                                <a>Profile</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/housekeeping">
                                <a>Housekeeping</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/current-stay">
                                <a>Current Stay</a>
                            </Link>
                        </li>
                        <li>
                            {status ?
                                <Link href="/rooms">
                                    <a onClick={logout}> Logout </a>
                                </Link>
                                :
                                <Link href="/login">
                                    <a>Login</a>
                                </Link>
                            }

                        </li>
                        <li>
                            <Link href="/room-creator">
                                <a>Room Creator</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            { children}
        </>)
}

export default Header;