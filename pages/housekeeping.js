import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import firebase from '../firebase_config';
const Housekeeping = ({ dirty }) => {
    const { register, getValues } = useForm();
    const router = useRouter();
    const selectOptions = async (data, e) => {
        switch (e.target.value) {
            case "modify":
                const essentials = getValues(["towels" + data.roomNumber,
                "bedSheets" + data.roomNumber,
                "vacuum" + data.roomNumber,
                "dusting" + data.roomNumber]);
                await firebase.firestore()
                    .collection("room")
                    .doc(data.roomNumber)
                    .update({
                        towels: essentials["towels" + data.roomNumber],
                        bedSheets: essentials["bedSheets" + data.roomNumber],
                        vacuum: essentials["vacuum" + data.roomNumber],
                        dusting: essentials["dusting" + data.roomNumber]
                    })
                break;
            case "maintenance":
                await firebase.firestore()
                    .collection("room")
                    .doc(data.roomNumber)
                    .update({
                        roomStatus: "maintenance"
                    }).then(() => {
                        router.push("/housekeeping");
                    })
                break;
            default:
                break;
        }

    };
    return (
        <div className={"space-y-4"}>
            <h1 className={"pt-8 pl-8 "}>
                Housekeeping
             </h1>
            <table className="table-auto mx-4">
                <thead>
                    <tr>
                        <th className={"px-8 "}>
                            Housekeeper
                        </th>
                        <th className={"px-8 "}>
                            Room #
                        </th>
                        <th className={"px-8 "}>
                            Room Type
                        </th>
                        <th className={"px-8 "}>
                            Room Status
                        </th>
                        <th className={"px-8 "}>
                            Electronics
                        </th>
                        <th className={"px-8 "}>
                            Bathroom Towels
                        </th>
                        <th className={"px-8 "}>
                            Bed Sheets
                        </th>
                        <th className={"px-8 "}>
                            Vacuum
                        </th>
                        <th className={"px-8 "}>
                            Dusting
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {dirty.length > 0 ?
                        dirty.map((i, j) => {
                            return (
                                <tr key={JSON.stringify(i)} key={JSON.stringify(i)}>
                                    <td className={"px-8 py-4"}>
                                        {i.housekeeper}
                                    </td>
                                    <td className={"px-8 py-4"}>
                                        {i.roomNumber}
                                    </td>
                                    <td className={"px-8 py-4"}>
                                        {i.roomType}
                                    </td>
                                    <td className={"px-8 py-4"}>
                                        {i.roomStatus}
                                    </td>
                                    <td className={"px-8 py-4"}>
                                        <ul className={"space-y-2"}>
                                            {i.electronics.map(j => {
                                                return (
                                                    <li>
                                                        {j}
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </td>
                                    <td className={"px-8 py-4"}>
                                        <input type={"checkbox"} defaultChecked={i.towels} name={"towels" + i.roomNumber} ref={register} />
                                    </td>
                                    <td className={"px-8 py-4"}>
                                        <input type={"checkbox"} defaultChecked={i.bedSheets} name={"bedSheets" + i.roomNumber} ref={register} />
                                    </td>
                                    <td className={"px-8 py-4"}>
                                        <input type={"checkbox"} defaultChecked={i.vacuum} name={"vacuum" + i.roomNumber} ref={register} />
                                    </td>
                                    <td className={"px-8 py-4"}>
                                        <input type={"checkbox"} defaultChecked={i.dusting} name={"dusting" + i.roomNumber} ref={register} />
                                    </td>
                                    <td>
                                        <select onChange={(e) => selectOptions(i, e)}>
                                            <option>Action</option>
                                            <option value={"modify"}>
                                                Modify
                                            </option>
                                            <option value={"maintenance"}>
                                                Maintenance
                                            </option >
                                        </select>
                                    </td>
                                </tr>
                            )
                        }) : <p>There are no rooms to clean.</p>}
                </tbody>
            </table>
        </div>
    )
}
export async function getServerSideProps({ query }) {
    let dirty = [];
    await firebase.firestore()
        .collection("room")
        .where("roomStatus", "in", ["dirty", "occupied"])
        .get()
        .then(queryData => {
            queryData.forEach(i => {
                dirty.push(i.data());
            })
        })
    return {
        props: { dirty }
    }

}
export default Housekeeping;
