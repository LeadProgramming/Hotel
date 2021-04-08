import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import fireApp from "../firebase_config";
import { reserve } from "../store/reservationSlice";

const Reservation = ({ reservations }) => {
  const router = useRouter();
  const { register, handleSubmit, watch, errors } = useForm();
  // const watchFields = watch(["checkInDate", "checkOutDate"]);
  const dispatch = useDispatch();
  const onSubmit = data => {
    const days = Math.floor((Date.parse(data.checkOutDate) - Date.parse(data.checkInDate)) / 8.64e+7);
    data["days"] = days;
    dispatch(reserve(data));
    router.push(`/rooms?type=${data.roomType}`);
  };
  return (
    <div className="space-y-4">
      <h1 className="pt-8 text-center font-bold text-gray-700 text-xl">
        Reservation
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className={"space-y-2 w-1/2 m-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"}>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
          First Name:
        </label>
        <input className="block w-full shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" name="firstName" ref={register} />

        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName" htmlFor="lastName">
          Last Name:
        </label>
        <input className="block w-full shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" name="lastName" ref={register} />

        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="checkInDate">
          Check-in Date:
        </label>
        <input className="block w-full shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" name="checkInDate" type="date" ref={register({ required: true, valueAsDate: true })} />

        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="checkOutDate">
          Check-Out Date:
        </label>
        <input className="block w-full shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" name="checkOutDate" type="date" ref={register({ required: true, valueAsDate: true })} />

        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="roomType">
          Room Type:
        </label>
        <select className="block shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" name="roomType" ref={register}>
          <option value="K">King</option>
          <option value="DQ">Double Queen</option>
          <option value="DQK">Double Queen with Kitchen</option>
          <option value="S">Suite</option>
        </select>

        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Proceed</button>
      </form>
      <div className={"mt-8 text-center font-bold text-gray-700 text-xl "}>All Reservations</div>
      <table className={"table-auto mx-8"}>
        <thead>
          <tr>
            <th className={"px-8"}>First Name </th>
            <th className={"px-8"}>Last Name</th>
            <th className={"px-8"}>Initial Date</th>
            <th className={"px-8"}>Check-In</th>
            <th className={"px-8"}>Check-Out</th>
            <th className={"px-8"}>Room Type</th>
            <th className={"px-8"}>Room Status</th>
            <th className={"px-8"}>Room #</th>
            <th className={"px-8"}>Daily Rate</th>
            <th className={"px-8"}>Total Charge</th>
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
                  <td className={"px-8 py-4"}>{i.dailyRate}</td>
                  <td className={"px-8 py-4"}>{i.totalCharge}</td>
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
