import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import firebase from "../firebase_config";
const Signup = () => {
    const router = useRouter();
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = ({ email, password }) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        router.push(`/signup-2`);
    };
    return (
        <div className="space-y-4">
            <h1 className="pt-8 text-center font-bold text-gray-700 text-xl">
                Sign-Up
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className={"space-y-2 w-1/2 m-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"}>

                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email: </label>
                <input className="block w-full shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" name="email" type="email" ref={register({ required: true })} />

                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password: </label>
                <input className="block w-full shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" name="password" type="password" ref={register({ required: true, min: 6 })} />

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Sign up</button>
            </form>
        </div>
    )
}

export default Signup;
