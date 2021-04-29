import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import firebase from "../../firebase_config";
import { makeReservation } from "../../store/reservationSlice";

const Rooms = ({ listings }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const promptMakeReservation = (payload) => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                dispatch(makeReservation(payload)).then(() => {
                    router.push("/reservation");
                });
            }
            else {
                router.push("/login");
            }
        })
    }
    return (
        <div className={"space-y-4"}>
            <h1 className="pt-8 pl-8 ">
                Rooms
            </h1>
            <table className={"table-auto"}>
                <thead>
                    <tr>
                        <th className={"px-8"}>Room #</th>
                        <th className={"px-8"}>Room Type</th>
                        <th className={"px-8"}>Daily Rate</th>
                        <th className={"px-8"}>Total Charge</th>
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
                                    $ {i.dailyRate}
                                </td>

                                <td className={"px-8 py-4"}>
                                    $ {i.totalCharge || 0}
                                </td>
                                <td className={"px-8 py-4"}>
                                    <button onClick={() => promptMakeReservation(i)}>
                                        Reserve
                                    </button>
                                </td>
                            </tr>
                        )
                    }) : <p>No rooms available</p>}
                </tbody>
            </table>
        </div >
    )
}
export async function getServerSideProps({ query }) {
    let listings = [];
    if (query.type) {
        await firebase.firestore()
            .collection("room")
            .where("roomType", "==", query.type)
            .get()
            .then(queryData => {
                queryData.forEach(i => {
                    listings.push(i.data());
                })
            })
        listings.forEach(i => i.totalCharge = query.days * i.dailyRate);
    }
    return { props: { listings } }
}
export default Rooms;
