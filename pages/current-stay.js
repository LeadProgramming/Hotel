import 'firebase/storage';
import { useRouter } from "next/router";
import fireApp from "../firebase_config";

const CurrentStay = ({ guest }) => {
    const router = useRouter();
    return (
        <div className={"space-y-4"}>
            <h1 className={"pt-8 pl-8"}>
                Current Stay
            </h1>
            <p className={"px-8"}>Guest Name: David Nguyen</p>
            <p className={"px-8"}>Check-In: 04/10/21 09:00:00</p>
            <p className={"px-8"}>Check-Out: 04/17/21 12:00:00</p>
            <p className={"px-8"}>Room #: 1</p>
            <p className={"px-8"}>Room Type: K</p>
            <p className={"px-8"}>Room Rate ($/Day): $60</p>
            <p className={"px-8"}>Total Charge: $240</p>
            <p className={"px-8"}>Payments Made: $120</p>
            <p className={"px-8"}>Balance: $120</p>
        </div>
    )
}
export async function getServerSideProps({ query }) {
    if (query.email) {
        let guest;
        await fireApp.firestore()
            .collection("guest")
            .where("email", "==", query.email)
            .get()
            .then(queryData => {
                queryData.forEach(i => {
                    guest = i.data();
                })
            });
        return {
            props: { guest }
        }
    }
    return { props: {} };
}
export default CurrentStay;
