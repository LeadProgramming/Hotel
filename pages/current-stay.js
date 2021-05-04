import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import firebase from '../firebase_config';
import { checkingOut, loadCurrentStay, payBalance } from '../store/currentStaySlice';
const CurrentStay = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const csStore = useSelector(state => state.currentStay);
    const [realBal, setRealBal] = useState(csStore.balance);
    const [payMode, setPayMode] = useState(false);
    const { register, handleSubmit, watch } = useForm();
    const payingPayment = watch('payment');
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            dispatch(loadCurrentStay(user));
        });
    }, [csStore]);

    useEffect(() => {
        setRealBal(csStore.balance - payingPayment);
    }, [payingPayment]);
    const checkout = () => {
        dispatch(checkingOut()).then(() => router.push("/rooms"))
    }
    const promptPayingForm = () => {
        setPayMode(!payMode);
    }
    const onSubmit = (data) => {
        data.balance = csStore.balance;
        dispatch(payBalance(data)).then(() => {
            router.reload("/current-stay");
        });
    }
    return (
        <div className={"space-y-4"}>
            <h1 className={"pt-8 pl-8"}>
                Current Stay
            </h1>
            {csStore.roomNumber ?
                <>
                    <p className={"px-8"}>Guest Name: {csStore.firstName} {csStore.lastName}</p>
                    <p className={"px-8"}>Check-In: {csStore.checkInDate} {csStore.checkInTime}</p>
                    <p className={"px-8"}>Check-Out: {csStore.checkOutDate} {csStore.checkOutTime}</p>
                    <p className={"px-8"}>Room #: {csStore.roomNumber}</p>
                    <p className={"px-8"}>Room Type: {csStore.roomType}</p>
                    <p className={"px-8"}>Room Rate ($/Day): ${csStore.dailyRate}</p>
                    <p className={"px-8"}>Total Charge: ${csStore.totalCharge}</p>
                    <p className={"px-8"}>Payments Made: ${csStore.payment}</p>
                    <p className={"px-8"}>Balance: ${csStore.balance}</p>

                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" disabled={csStore.balance > 0} onClick={checkout}>Check-out</button>
                    {csStore.balance > 0 &&
                        <>
                            <button class={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4 rounded focus:outline-none focus:shadow-outline"} onClick={promptPayingForm}>Pay Balance</button>
                        </>}
                    {payMode &&
                        <form className={"space-y-4 w-1/2 m-auto shadow-lg rounded px-8 pt-6 pb-8 mb-4"} onSubmit={handleSubmit(onSubmit)}>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="payment">Balance: ${realBal} </label>
                            <input className="block w-full shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" name="payment" type="number" min={"0.00"} ref={register({ required: true })} />
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Pay</button>
                        </form>
                    }
                </>
                :
                <p>Guest is not currently checked into any rooms.</p>
            }
        </div>
    )
}

export default CurrentStay;
