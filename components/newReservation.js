import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getRoomsReservation } from "../store/reservationSlice";
const NewReservation = () => {
    const router = useRouter();
    const { register, handleSubmit, watch } = useForm();
    const watchFields = watch(["checkInDate", "checkOutDate"]);
    const days = dayjs(watchFields.checkOutDate).diff(watchFields.checkInDate, 'day');
    const dispatch = useDispatch();
    const onSubmit = data => {
        data["days"] = days;
        data.checkInDate = dayjs().format('MM/DD/YYYY');
        data.checkOutDate = dayjs().format('MM/DD/YYYY');
        dispatch(getRoomsReservation(data));
        router.push(`/reservation/rooms?type=${data.roomType}&days=${data.days}`)
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={"space-y-2 w-1/2 m-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"}>
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

    )
}

export default NewReservation;
