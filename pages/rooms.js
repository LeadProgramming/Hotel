import Header from "../components/header"
import fireApp from "../firebase_config";
import { useSelector } from "react-redux";
import Combobox from "../components/combobox";
const Rooms = ({ listings }) => {
    const rsrvInfo = useSelector(state => state.reservation);
    listings.forEach((i, j) => { i["totalCharge"] = rsrvInfo.days * i.dailyRate });
    const reserve = ({ dailyRate, totalCharge, roomNumber, roomStatus, roomType }) => {
        fireApp.firestore().collection('reservation').add({
            firstName: rsrvInfo.firstName,
            lastName: rsrvInfo.lastName,
            reservedDate: Date.now(),
            checkInDate: rsrvInfo.checkInDate,
            checkOutDate: rsrvInfo.checkOutDate,
            roomType: roomType,
            roomStatus: roomStatus,
            roomNumber: roomNumber,
            dailyRate: dailyRate,
            totalCharge: totalCharge
        });
    }
    return (
        <div >
            <Header>
                <main>
                    <h1>
                        Rooms
                    </h1>
                    {listings?.map((i, j) => {
                        return (
                            <div key={JSON.stringify(i)}>
                                <div>
                                    <span>
                                        Room #: {i.roomNumber}
                                    </span>
                                    <span>
                                        Type: {i.roomType}
                                    </span>
                                    <Combobox options={["available", "occupied", "dirty", "maintenance"]} />

                                    {
                                        i.dailyRate && rsrvInfo.firstName &&
                                        <>
                                            <span>
                                                Daily Rate: {i.dailyRate}
                                            </span>
                                            <span>
                                                Total Charge: {i.totalCharge}
                                            </span>
                                            <button onClick={reserve.call(null, i, totalCharge[j])}>Reserve</button>
                                        </>
                                    }

                                </div>

                            </div>
                        )
                    })}

                </main>
            </Header>
        </div >
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
