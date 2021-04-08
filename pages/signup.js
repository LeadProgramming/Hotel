import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import fireApp from "../firebase_config";
const Signup = () => {
    const router = useRouter();
    const { register, handleSubmit, watch, errors } = useForm();
    const imgUpload = (e) => {
        const file = e.target.files[0];
        const storageRef = fireApp.storage().ref();
        const uploadTask = storageRef.child(`images/${file.name}`)
        uploadTask.put(file).then(() => {
            console.log("File Uploaded.");
        });

    }
    const onSubmit = ({ profilePic, firstName, lastName, phone, address, email, driverId, carId }) => {
        fireApp.firestore().collection('guest').add({
            imgName: profilePic.item(0).name,
            firstName,
            lastName,
            phone,
            address,
            email,
            driverId,
            carId
        });
        router.push(`/profile?email=${email}`);

    };
    return (
        <div className="space-y-4">
            <h1 className="pt-8 text-center font-bold text-gray-700 text-xl">
                Sign-Up
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className={"space-y-2 w-1/2 m-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"}>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profilePic">Profile Pic:</label>
                <input className="block w-full shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" name="firstName" name="profilePic" accept="image/*" type="file" onChange={imgUpload} ref={register} />

                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">First Name: </label>
                <input className="block w-full shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" name="firstName" ref={register} />

                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">Last Name: </label>
                <input className="block w-full shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" name="lastName" ref={register} />

                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone: </label>
                <input className="block w-full shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" name="phone" type="tel" ref={register({ required: true })} />

                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">Address: </label>
                <input className="block w-full shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" name="address" ref={register({ required: true })} />

                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email: </label>
                <input className="block w-full shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" name="email" type="email" ref={register({ required: true })} />

                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="driverId">Driver ID#: </label>
                <input className="block w-full shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" name="driverId" ref={register} />

                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="carId">Vehicle ID#: </label>
                <input className="block w-full shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" name="carId" ref={register} />

                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Proceed</button>
            </form>
        </div>
    )
}

export default Signup;
