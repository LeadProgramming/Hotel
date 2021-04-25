import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewReservation from "../components/newReservation";
import fireApp from "../firebase_config";
import { removeReservation, setAddMode, setRemoveMode } from "../store/reservationSlice";

const Reservation = ({ reservations }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const reservationStore = useSelector(state => state.reservation);
  useEffect(() => {
    fireApp.auth().onAuthStateChanged((user) => {
      if (!user)
        router.push("/login");
    })
  }, []);
  const promptAddReservation = () => {
    dispatch(setAddMode());
  }
  const promptRemoveReservationBtn = () => {
    dispatch(setRemoveMode());
  }
  const promptRemoveReservation = (payload) => {
    dispatch(removeReservation(payload));
  }
  return (
    <div className="space-y-4">
      <h1 className="pt-8 text-center font-bold text-gray-700 text-xl">
        Reservation
      </h1>
      <div className={"flex justify-end space-x-2 mr-8"}>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={promptAddReservation}>Add</button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={promptRemoveReservationBtn}>Remove</button>
      </div>
      {reservationStore.addMode && <NewReservation />}

      <div className={"mt-8 text-center font-bold text-gray-700 text-xl "}>User's Reservations</div>
      <table className={"table-auto mx-8"}>
        <thead>
          <tr>
            <th className={"px-4"}>First Name </th>
            <th className={"px-4"}>Last Name</th>
            <th className={"px-4"}>Initial Date</th>
            <th className={"px-4"}>Check-In</th>
            <th className={"px-4"}>Check-Out</th>
            <th className={"px-4"}>Room Type</th>
            <th className={"px-4"}>Room Status</th>
            <th className={"px-4"}>Room #</th>
            <th className={"px-4"}>Daily Rate</th>
            <th className={"px-4"}>Total Charge</th>
          </tr>
        </thead>
        <tbody >
          {
            reservations?.length > 0 ? reservations.map(i => {
              return (
                <tr>
                  <td className={"px-8 py-4"}>{i.firstName}</td>
                  <td className={"px-8 py-4"}>{i.lastName}</td>
                  <td className={"px-8 py-4"}>{new Date(i.reservedDate).toDateString()}</td>
                  <td className={"px-8 py-4"}>{new Date(i.checkInDate).toDateString()}</td>
                  <td className={"px-8 py-4"}>{new Date(i.checkOutDate).toDateString()}</td>
                  <td className={"px-8 py-4"}>{i.roomType}</td>
                  <td className={"px-8 py-4"}>{i.roomStatus}</td>
                  <td className={"px-8 py-4"}>{i.roomNumber}</td>
                  <td className={"px-8 py-4"}>${i.dailyRate}</td>
                  <td className={"px-8 py-4"}>${i.totalCharge}</td>
                  <td className={"px-8 py-4"}>{reservationStore.removeMode &&
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => promptRemoveReservation(i)}>-</button>}</td>
                </tr>
              )
            }) : <tr>No rooms to display</tr>
          }
        </tbody>
      </table>
    </div >
  )
}

export async function getServerSideProps({ query }) {
  let reservations = [];
  await fireApp.firestore()
    .collection("reservation")
    .orderBy("checkInDate")
    .get()
    .then(queryData => {
      queryData.forEach(i => {
        reservations.push(i.data());
      })
    })
  return {
    props: { reservations },
  }
}
export default Reservation;
