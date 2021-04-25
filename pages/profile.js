import 'firebase/storage';
import { useEffect, useRef, useState } from 'react';
import fireApp from "../firebase_config";

const Profile = () => {
  const picRef = useRef();
  const [guest, setGuest] = useState({});
  const editPicture = (e) => {
    const file = e.target.files[0];
    const storageRef = fireApp.storage().ref();
    const uploadTask = storageRef.child(`images/${file.name}`)
    uploadTask.put(file);
    fireApp.auth().onAuthStateChanged(async function (user) {
      if (user) {
        await fireApp.firestore().collection('guest').doc(user.email).update({
          imgName: file.name,
        });
      }
    });
  }

  useEffect(async () => {
    fireApp.auth().onAuthStateChanged(async function (user) {
      if (user) {
        await fireApp.firestore()
          .collection("guest")
          .doc(user.email)
          .get()
          .then((doc) => {
            if (doc.exists) {
              setGuest(doc.data());
              fireApp.storage()
                .refFromURL(`gs://hotel-3c249.appspot.com/images/${doc.data().imgName}`)
                .getDownloadURL()
                .then((url) => {
                  picRef.current.src = url
                })
            }
          })
      }
    });
  }, [])

  return (
    <div className={"space-y-4 "}>
      <h1 className="pt-8 pl-8">
        Profile
      </h1>
      <img ref={picRef} alt={"profile pic"} width={300} height={300} />
      <input className="block w-full shadow border rounded py-2 px-3 text-gray-700 focus:outline-none" accept="image/*" type="file" onChange={editPicture} />


      <p>Name: {guest.firstName} {guest.lastName}</p>
      <p>Email: {guest.email}</p>
      <p>Phone: {guest.phone}</p>
      <p>Address: {guest.address}</p>
      <p>Driver #: {guest.driverId}</p>
      <p>Vehicle #: {guest.carId}</p>
    </div>
  )
}
export default Profile;
