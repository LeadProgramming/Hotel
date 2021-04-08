import 'firebase/storage';
import Link from "next/link";
import { useEffect, useRef } from "react";
import fireApp from "../firebase_config";

const Profile = ({ guests }) => {
  const picsRef = guests?.map(i => useRef());
  useEffect(async () => {
    if (guests) {
      let imgFiles = [];
      imgFiles = guests.map(i => fireApp.storage().refFromURL(`gs://hotel-3c249.appspot.com/images/${i.imgName}`));
      imgFiles.map((i, j) => {
        i.getDownloadURL().then((url) => {
          i["profilePic"] = url;
        }).then(() => {
          picsRef[j].current.src = i.profilePic;
        })
      })
    }
  }, []);
  return (
    <div className={"space-y-4 "}>
      <h1 className="pt-8 pl-8">
        Profile
      </h1>
      {guests ?
        <table className={"table-auto"}>
          <thead>
            <tr>
              <th className={"px-8 "}>Profile Pic</th>
              <th className={"px-8 "}>First Name</th>
              <th className={"px-8 "}>Last Name</th>
              <th className={"px-8 "}>Phone</th>
              <th className={"px-8 "}>Address</th>
              <th className={"px-8 "}>Email</th>
              <th className={"px-8 "}>Driver ID#</th>
              <th className={"px-8 "}>Vehicle ID#</th>
            </tr>
          </thead>
          <tbody>
            {guests?.map((i, j) => {
              return (
                <tr key={JSON.stringify(i)}>
                  <td className={"px-8 py-4"}><img ref={picsRef[j]} alt="guest's image" width="100" height="100" /></td>
                  <td className={"px-8 py-4"}>{i.firstName}</td>
                  <td className={"px-8 py-4"}>{i.lastName}</td>
                  <td className={"px-8 py-4"}>{i.phone}</td>
                  <td className={"px-8 py-4"}>{i.address}</td>
                  <td className={"px-8 py-4"}>{i.email}</td>
                  <td className={"px-8 py-4"}>{i.driverId}</td>
                  <td className={"px-8 py-4"}>{i.carId}</td>
                  <td className={"px-8 py-4"}><Link href={"/profile/" + i.email}><a>View</a></Link></td>
                </tr>
              )
            })}

          </tbody>
        </table> : !email && <p>No user has signed up yet.</p>}
    </div>
  )
}
export default Profile;

export async function getServerSideProps({ query }) {
  let guests = []
  await fireApp.firestore()
    .collection("guest")
    .get()
    .then(queryData => {
      queryData.forEach(i => {
        guests.push(i.data());
      })
    });
  return {
    props: { guests }
  }
}


