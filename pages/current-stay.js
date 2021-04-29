import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import firebase from '../firebase_config';
import { checkingOut, loadCurrentStay, payBalance, promptPaying } from '../store/currentStaySlice';
const CurrentStay = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { firstName, lastName, roomNumber, checkInDate, checkInTime,
        checkOutDate, checkOutTime, roomType, dailyRate, totalCharge,
        payment, balance, payMode } = useSelector(state => state.currentStay);

    const [realBal, setRealBal] = useState(balance);
    const { register, handleSubmit, watch } = useForm();
    const payingPayment = watch('payment');
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            dispatch(loadCurrentStay(user));
        });
    }, [balance]);

    useEffect(() => {
        setRealBal(balance - payingPayment);
    }, [payingPayment])
    const checkout = () => {
        dispatch(checkingOut()).then(() => router.push("/rooms")
        );
    }
    const promptPayingForm = () => {
        dispatch(promptPaying());
    }
    const onSubmit = (data) => {
        data.balance = balance;
        dispatch(payBalance(data));
    }
    return (
        <div className={"space-y-4"}>
            <h1 className={"pt-8 pl-8"}>
                Current Stay
            </h1>
            {roomNumber ?
                <>
                    <p className={"px-8"}>Guest Name: {firstName} {lastName}</p>
                    <p className={"px-8"}>Check-In: {checkInDate} {checkInTime}</p>
                    <p className={"px-8"}>Check-Out: {checkOutDate} {checkOutTime}</p>
                    <p className={"px-8"}>Room #: {roomNumber}</p>
                    <p className={"px-8"}>Room Type: {roomType}</p>
                    <p className={"px-8"}>Room Rate ($/Day): ${dailyRate}</p>
                    <p className={"px-8"}>Total Charge: ${totalCharge}</p>
                    <p className={"px-8"}>Payments Made: ${payment}</p>
                    <p className={"px-8"}>Balance: ${balance}</p>

                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" disabled={balance > 0} onClick={checkout}>Check-out</button>
                    {balance > 0 &&
                        <>
                            <button class={"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4 rounded focus:outline-none focus:shadow-outline"} onClick={promptPayingForm}>Pay Balance</button>
                            {payMode && <>
                                <form className={"space-y-4 w-1/2 m-auto shadow-lg rounded px-8 pt-6 pb-8 mb-4"} onSubmit={handleSubmit(onSubmit)}>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="payment">Balance: ${realBal} </label>
                                    <input className="block w-full shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" name="payment" type="number" min={"0.00"} ref={register({ required: true })} />
                                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Pay</button>
                                </form>
                            </>}
                        </>}
                </>
                :
                <p>Guest is not currently checked into any rooms.</p>
            }
        </div>
    )
}

export default CurrentStay;
