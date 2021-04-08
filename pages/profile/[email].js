import 'firebase/storage';
import Link from "next/link";
import { useEffect, useRef } from "react";
import fireApp from "../../firebase_config";

const Profile = ({ guest }) => {
    const picRef = useRef();

    useEffect(async () => {
        if (guest) {
            let imgFile = fireApp.storage().refFromURL(`gs://hotel-3c249.appspot.com/images/${guest.imgName}`);
            await imgFile.getDownloadURL().then((url) => {
                guest["profilePic"] = url;
            }).then(() => {
                picRef.current.src = guest.profilePic;
            })
        }
    }, []);

    return (
        <div className={"space-y-4"}>
            <Link href="/profile"><a >Go Back</a></Link>
            <h1 className="pt-8 pl-8">
                Profile
            </h1>
            {guest ?
                <div className={"px-8 py-4 space-y-4"}>
                    <h1>Details</h1>
                    <img ref={picRef} alt="guest's image" width="300" height="300" />
                    <div>First Name: {guest.firstName}</div>
                    <div>Last Name: {guest.lastName}</div>
                    <div>Phone: {guest.phone}</div>
                    <div>Address: {guest.address} </div>
                    <div>Email: {guest.email}</div>
                    <div>Driver ID#: {guest.driverId}</div>
                    <div>Vehicle ID#: {guest.carId}</div>
                </div>
                : <p>Cannot find profile.</p>
            }
        </div>
    )
}
export async function getServerSideProps({ query }) {
    let guest;
    await fireApp.firestore()
        .collection("guest")
        .where("email", "==", query.email)
        .get()
        .then(queryData => {
            queryData.forEach(i => {
                guest = i.data();
            })
        })
    return {
        props: { guest }
    }

}
export default Profile;

