import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { checkedIn } from "../store/checkinSlice";

const Checkin = () => {
    const router = useRouter();
    const { register, handleSubmit, watch, errors } = useForm();
    const { dailyRate } = useSelector(state => state.checkin);
    const dispatch = useDispatch();
    const watchCheckoutDate = watch("checkOutDate");
    const watchPayment = watch("payment")
    const [days, setDays] = useState(0);
    const [totalCharge, setTotalCharge] = useState(0);
    useEffect(() => {
        setTotalCharge(dailyRate * days);
    }, [days]);
    useEffect(() => {
        setDays(dayjs(watchCheckoutDate).add(1, 'day').diff(dayjs(), 'day'));
    }, [watchCheckoutDate])
    const onSubmit = data => {
        data.totalCharge = totalCharge;
        data.days = days;
        data.checkInTime = dayjs().format('HH:mm');
        data.checkInDate = dayjs().toString();
        data.checkOutTime = dayjs().format('HH:mm')
        data.checkOutDate = dayjs(data.checkOutDate).toString();
        dispatch(checkedIn(data));
        router.push(`/current-stay`);
    };
    return (
        <div className={"space-y-4"}>
            <h1 className="pt-8 text-center font-bold text-gray-700 text-xl">
                Check-in
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className={"space-y-2 w-1/2 m-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"}>
                <label className="block text-center text-gray-700 font-bold mb-2">Daily Rate ({dayjs().format("MM/DD/YYYY")}): ${dailyRate}</label>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="checkOutDate">
                    Check-Out Date:
                </label>
                <input className="block w-full shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" name="checkOutDate" type="date" min={dayjs().add(1, 'day').format("YYYY-MM-DD")} ref={register({ required: true, valueAsDate: true })} />
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="checkOutTime">
                    Check-Out Time:
                </label>
                <input className="block w-full shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" name="checkOutTime" type="time" ref={register({ required: true })} />
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="payment">
                    Payment:
                </label>
                <input className="block w-full shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" name="payment" type="number" min="0.00" step="0.01" ref={register} />

                {days > 0 && <p>Days: {days}</p>}
                {totalCharge > 0 && <p>Total Charge: ${totalCharge}</p>}
                {watchPayment > 0 && <p>Balance: ${totalCharge - watchPayment}</p>}
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Proceed</button>
            </form>

        </div >
    )
}

export default Checkin;
