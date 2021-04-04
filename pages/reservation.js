import Header from "../components/header";
import fireApp from "../firebase_config";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
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
    <div>
      <Header>
        <main>
          <h1>
            Reservation
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="firstName">First Name: </label>
            <input name="firstName" ref={register} />

            <label htmlFor="lastName">Last Name: </label>
            <input name="lastName" ref={register} />

            <label htmlFor="checkInDate">Check-in Date: </label>
            <input name="checkInDate" type="date" ref={register({ required: true, valueAsDate: true })} />

            <label htmlFor="checkOutDate">Check-Out Date: </label>
            <input name="checkOutDate" type="date" ref={register({ required: true, valueAsDate: true })} />

            <label htmlFor="roomType">Room Type: </label>
            <select name="roomType" ref={register}>
              <option value="K">King</option>
              <option value="DQ">Double Queen</option>
              <option value="DQK">Double Queen with Kitchen</option>
              <option value="S">Suite</option>
            </select>
            <button type="submit">Proceed</button>
          </form>
          <ul>
            {/* {
              reservations.map(i => {
                return (
                  <li>
                    i
                  </li>
                )
              })
            } */}
          </ul>
        </main>
      </Header>
    </div >
  )
}
// export async function getServerSideProps({ query }) {
//   // let reservations = [];
//   // await fireApp.firestore()
//   //   .collection("reservation")
//   //   .orderBy("checkInDate")
//   //   .get()
//   //   .then(queryData => {
//   //     queryData.forEach(i => {
//   //       listings.push(i.data());
//   //     })
//   //   })
//   // return {
//   //   props: { reservations },
//   // }

// }
export default Reservation;
