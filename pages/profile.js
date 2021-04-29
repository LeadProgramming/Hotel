import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import firebase from "../firebase_config";
import { changeAddress, changeCarId, changeDriverId, changeName, changePassword, changePhone, loadProfile } from '../store/profileSlice';

const Profile = () => {
  const [img, setImg] = useState("");
  const { guest } = useSelector(state => state.profile)
  const dispatch = useDispatch();
  const nameForm = useForm();
  const passwordForm = useForm();
  const phoneForm = useForm();
  const addressForm = useForm();
  const driverIdForm = useForm();
  const carIdForm = useForm();
  const editPreImg = (e) => {
    setImg(e.target.files[0]);
  }

  const editPicture = async () => {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`images/${img.name}`)
    uploadTask.put(img);
    await firebase.firestore().collection('guest').doc(user.email).update({
      imgName: img.name,
    });
  }


  useEffect(async () => {
    firebase.auth().onAuthStateChanged(async function (user) {
      if (user) {
        dispatch(loadProfile(user))
      }
    });
  }, [guest])

  return (
    <div className={"space-y-4 "}>
      <h1 className="pt-8 pl-8">
        Profile
      </h1>
      <div className={"space-y-4 w-1/2 m-auto bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4"}>
        <img src={guest.pic} alt={"profile pic"} width={300} height={300} />
        <div className={"space-y-2"}>
          <input className="block w-full shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" accept="image/*" type="file" onChange={editPreImg} />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" disabled={img.length == 0} onClick={editPicture}>Change Picture</button>
        </div>
        <p>Email: {guest.email}</p>
        <p>Password: </p>

        <form onSubmit={passwordForm.handleSubmit((data) => dispatch(changePassword(data)))} className={"space-y-2"}>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password:
          </label>
          {passwordForm.formState.errors.password && <p>Password must be longer than 6 characters.</p>}
          <input className="block w-full shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" type="password" name="password" ref={passwordForm.register({ required: true, minLength: 6 })} />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Change Password</button>
        </form>

        <p>Name: {guest.firstName} {guest.lastName}</p>
        <form onSubmit={nameForm.handleSubmit((data) => dispatch(changeName(data)))} className={"space-y-2"}>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
            First Name:
          </label>
          <input className="block w-full shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" name="firstName" ref={nameForm.register({ required: true })} />

          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
            Last Name:
          </label>
          <input className="block w-full shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" name="lastName" ref={nameForm.register({ required: true })} />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Change Name</button>
        </form>
        <p>Phone: {guest.phone}</p>
        <form onSubmit={phoneForm.handleSubmit((data) => dispatch(changePhone(data)))} className={"space-y-2"}>
          {phoneForm.formState.errors.firstName && <p>Only 10 digits long.</p>}
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone:
          </label>
          <input className="block w-full shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" type="phone" name="phone" ref={phoneForm.register({ min: 10, required: true })} />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Change Phone #</button>
        </form>
        <p>Address: {guest.address}</p>
        <form onSubmit={addressForm.handleSubmit((data) => dispatch(changeAddress(data)))} className={"space-y-2"}>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
            Address:
          </label>
          <input className="block w-full shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" name="address" ref={addressForm.register({ required: true })} />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Change Address</button>
        </form>
        <p>Driver #: {guest.driverId}</p>
        <form onSubmit={driverIdForm.handleSubmit((data) => dispatch(changeDriverId(data)))} className={"space-y-2"}>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="driverId">
            Driver #:
          </label>
          <input className="block w-full shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" name="driverId" ref={driverIdForm.register({ required: true })} />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Change Driver #</button>
        </form>
        <p>Vehicle #: {guest.carId}</p>
        <form onSubmit={carIdForm.handleSubmit((data) => dispatch(changeCarId(data)))} className={"space-y-2"}>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="carId">
            Vehicle #:
          </label>
          <input className="block w-full shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" name="carId" ref={carIdForm.register({ required: true })} />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Change Vehicle #</button>
        </form>
      </div>
    </div>
  )
}
export default Profile;
