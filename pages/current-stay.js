import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import fireApp from '../firebase_config';
const CurrentStay = () => {
    const router = useRouter();
    const roomNumber = useSelector(state => state.rooms.roomNumber);
    const [checkinInfo, setCheckinInfo] = useState({});
    const [name, setName] = useState("")
    useEffect(() => {
        fireApp.auth().onAuthStateChanged(user => {
            fireApp.firestore()
                .collection("checkin")
                .doc(user.email)
                .get()
                .then(doc => {
                    if (doc.exists) {
                        setCheckinInfo(doc.data());
                    }
                });
            fireApp.firestore()
                .collection("guest")
                .doc(user.email)
                .get()
                .then(doc => {
                    if (doc.exists) {
                        setName(doc.data().firstName + " " + doc.data().lastName);
                    }
                })
        });
    }, [checkinInfo]);
    const checkout = () => {
        fireApp.auth().onAuthStateChanged(user => {
            fireApp.firestore()
                .collection("checkin")
                .doc(user.email)
                .delete();
            fireApp.firestore()
                .collection("room")
                .doc(roomNumber)
                .update({
                    roomStatus: "dirty"
                });
        });
        router.push("/rooms");
    }
    return (
        <div className={"space-y-4"}>
            <h1 className={"pt-8 pl-8"}>
                Current Stay
            </h1>
            <p className={"px-8"}>Guest Name: {name}</p>
            <p className={"px-8"}>Check-In: {checkinInfo.checkInDate} {checkinInfo.checkInTime}</p>
            <p className={"px-8"}>Check-Out: {checkinInfo.checkOutDate} {checkinInfo.checkOutTime}</p>
            <p className={"px-8"}>Room #: {checkinInfo.roomNumber}</p>
            <p className={"px-8"}>Room Type: {checkinInfo.roomType}</p>
            <p className={"px-8"}>Room Rate ($/Day): ${checkinInfo.dailyRate}</p>
            <p className={"px-8"}>Total Charge: ${checkinInfo.totalCharge}</p>
            <p className={"px-8"}>Payments Made: ${checkinInfo.payment}</p>
            <p className={"px-8"}>Balance: ${checkinInfo.balance}</p>
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={checkout}>Check-out</button>
        </div>
    )
}

export default CurrentStay;
