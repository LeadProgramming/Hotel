import Head from 'next/head';
import Link from 'next/link';
export default function Header({ children }) {

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <div className="">
                    Teddy Bear Hotel
                </div>
                <ul>
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
                </ul>
            </header>
            { children}
        </>)
}