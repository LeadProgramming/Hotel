import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import fireApp from "../firebase_config";
const Signup = () => {
    const router = useRouter();
    const { register, handleSubmit, watch, errors, reset, setValue } = useForm();
    const [electronics, setElectronics] = useState([]);
    const watchElectronics = watch("electronics", false)
    const addElectronic = () => {
        setElectronics(electronics.concat(watchElectronics));
        setValue("electronics", "");
    }
    const deleteElectronic = (delIndex) => {
        setElectronics(electronics.filter((i, j) => j != delIndex));
    }

    const onSubmit = data => {
        data["electronics"] = electronics;
        fireApp.firestore().collection('room').doc(data.roomNumber).set(data);
        router.push(`/rooms`);
    };
    return (
        <div className="space-y-4">
            <h1 className="pt-8 text-center font-bold text-gray-700 text-xl">
                Room Creator
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className={"space-y-2 w-1/2 m-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"}>

                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="housekeeper">Housekeeper: </label>
                <input className="block w-full shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" name="housekeeper" ref={register({ required: true })} />

                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="roomNumber">Room #: </label>
                <input className="block w-full shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" name="roomNumber" min={1} type="number" ref={register} />

                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="roomType">Room Type: </label>
                <input className="block shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" list="roomType-list" name="roomType" ref={register} />
                <datalist id="roomType-list">
                    <option value={"K"} />
                    <option value={"DQ"} />
                    <option value={"DQK"} />
                    <option value={"S"} />
                </datalist>

                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="roomStatus">Room Status: </label>
                <input className="block shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" list="roomStatus-list" name="roomStatus" ref={register} />
                <datalist id="roomStatus-list">
                    <option value={"available"} />
                    <option value={"occupied"} />
                    <option value={"dirty"} />
                    <option value={"maintenance"} />
                </datalist>

                <h3 className="my-8 italic text-gray-700 text-l">Below: Check if dirty</h3>

                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="towels">Towels: </label>
                <input className="block shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" name="towels" type="checkbox" ref={register} />

                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bedSheets">Bed Sheets: </label>
                <input className="block shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" name="bedSheets" type="checkbox" ref={register} />

                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="vacuum">Vacuum: </label>
                <input className="block shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" name="vacuum" type="checkbox" ref={register} />

                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dusting">Dusting: </label>
                <input className="block shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" name="dusting" type="checkbox" ref={register} />

                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="electronics">Electronics: </label>
                <input className="block w-full shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" name="electronics" ref={register} />

                {watchElectronics && <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={addElectronic}> Insert </button>}

                {
                    electronics.length > 0 && electronics.map((i, j) => {
                        return (
                            <div key={i}>
                                {j + 1}. &nbsp;
                                {i}
                                <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => { deleteElectronic(j) }}>X</button>
                            </div>
                        )
                    })
                }

                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dailyRate">Daily Rate ($/day): </label>
                <input className="block shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" name="dailyRate" min={0} type="number" ref={register} />

                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Proceed</button>
            </form>
        </div>
    )
}

export default Signup;
