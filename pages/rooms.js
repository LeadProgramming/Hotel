import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import fireApp from "../firebase_config";
import { checkingIn, setAvailable } from "../store/roomsSlice";

const Rooms = ({ listings }) => {
    const router = useRouter();
    const dispatch = useDispatch();

    const promptCheckinPage = (payload) => {
        fireApp.auth().onAuthStateChanged((user) => {
            if (user) {
                dispatch(checkingIn(payload));
                router.push("/checkin");
            }
            else {
                router.push("/login");
            }
        })
    }
    const promptSetAvailable = (payload) => {
        console.log(payload);
        dispatch(setAvailable(payload));
        router.push("/rooms");
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
                                    {i.roomStatus}
                                </td>
                                <td className={"px-8 py-4"}>
                                    $ {i.dailyRate}
                                </td>
                                <td className={"px-8 py-4"}>
                                    {
                                        i.roomStatus === "available" &&
                                        <button className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"} disabled={i.roomStatus !== "available"} onClick={() => promptCheckinPage(i)}>
                                            Check-in
                                        </button>
                                    }
                                </td>
                                <td className={"px-8 py-4"}>
                                    {
                                        (i.roomStatus == "dirty" || i.roomStatus == "maintenance") && (
                                            <button className={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"} onClick={() => promptSetAvailable(i)}>Available</button>
                                        )
                                    }
                                </td>
                            </tr>
                        )
                    }) : <p>"No rooms available"</p>}
                </tbody>
            </table>
        </div >
    )
}
export async function getServerSideProps() {
    let listings = [];
    // if (query.type) {
    //     await fireApp.firestore()
    //         .collection("room")
    //         .where("roomType", "==", query.type)
    //         .where("roomStatus", "==", "available")
    //         .get()
    //         .then(queryData => {
    //             queryData.forEach(i => {
    //                 listings.push(i.data());
    //             })
    //         })
    // }
    await fireApp.firestore()
        .collection("room")
        .orderBy("roomNumber")
        .get()
        .then(queryData => {
            queryData.forEach(i => {
                listings.push(i.data());
            })
        })
    return {
        props: { listings },
    }
}
export default Rooms;
