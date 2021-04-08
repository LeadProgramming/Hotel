import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import fireApp from "../firebase_config";
const Rooms = ({ listings }) => {
    const router = useRouter();
    const rsrvInfo = useSelector(state => state.reservation);
    listings.forEach((i) => { i["totalCharge"] = rsrvInfo.days * i.dailyRate });

    const reserving = ({ dailyRate, totalCharge, roomNumber, roomType }) => {
        fireApp.firestore().collection('reservation').add({
            firstName: rsrvInfo.firstName,
            lastName: rsrvInfo.lastName,
            reservedDate: Date.now(),
            checkInDate: rsrvInfo.checkInDate,
            checkOutDate: rsrvInfo.checkOutDate,
            roomType: roomType,
            roomStatus: "occupied",
            roomNumber: roomNumber,
            dailyRate: dailyRate,
            totalCharge: totalCharge
        });
        fireApp.firestore().collection('room').doc(roomNumber).update({
            roomStatus: "occupied",
            checkInDate: rsrvInfo.checkInDate,
            checkOutDate: rsrvInfo.checkOutDate
        });
        router.push("/rooms")
    }

    return (
        <div className={"space-y-4"}>
            <h1 className="pt-8 pl-8 ">
                Rooms
            </h1>
            <table className={"table-auto"}>
                <thead>
                    <tr>
                        <th className={"px-8 "}>Room #</th>
                        <th className={"px-8 "}>Room Type</th>
                        <th className={"px-8 "}>Room Status</th>
                        <th className={"px-8 "}>Daily Rate</th>
                        <th className={"px-8 "}>Total Charge</th>
                    </tr>
                </thead>
                <tbody>
                    {listings?.length > 0 ? listings.map((i, j) => {
                        return (
                            <tr key={JSON.stringify(i)}>
                                <td className={"px-8 py-4"}>
                                    {i.roomNumber}
                                </td>
                                <td className={"px-8 py-4"}>
                                    {i.roomType}
                                </td>

                                <td className={"px-8 py-4"}>
                                    {
                                        !rsrvInfo.firstName.length ? (
                                            <>
                                                <select role="none">
                                                    <option value={i.roomStatus}>{i.roomStatus}</option>
                                                    {["available", "occupied", "dirty", "maintenance"].map(i => {
                                                        return (
                                                            <option value={i} >{i}</option>
                                                        )
                                                    })}
                                                </select>
                                            </>) : i.roomStatus
                                    }
                                </td>


                                {
                                    i.dailyRate && rsrvInfo.firstName &&
                                    <>
                                        <td className={"px-8 py-4"}>
                                            {i.dailyRate}
                                        </td>
                                        <td className={"px-8 py-4"}>
                                            {i.totalCharge}
                                        </td>
                                        <td className={"px-8 py-4"}>
                                            <button onClick={() => {
                                                reserving(i);
                                            }}>Reserve</button>
                                        </td>
                                    </>
                                }


                            </tr>
                        )
                    }) : "No rooms available"}
                </tbody>
            </table>


        </div>
    )
}
export async function getServerSideProps({ query }) {
    let listings = [];
    if (query.type) {
        await fireApp.firestore()
            .collection("room")
            .where("roomType", "==", query.type)
            .where("roomStatus", "==", "available")
            .get()
            .then(queryData => {
                queryData.forEach(i => {
                    listings.push(i.data());
                })
            })
    }
    else {
        await fireApp.firestore()
            .collection("room")
            .orderBy("roomNumber")
            .get()
            .then(queryData => {
                queryData.forEach(i => {
                    listings.push(i.data());
                })
            })
    }
    return {
        props: { listings },
    }
}
export default Rooms;
