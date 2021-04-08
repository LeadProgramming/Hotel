import fireApp from "../firebase_config";

const Housekeeping = ({ dirty }) => {

    return (
        <div className={"space-y-4"}>
            <h1 className={"pt-8 pl-8 "}>
                Housekeeping
             </h1>
            <table className="table-auto">
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
                        <th className={"px-8 "}>
                            Electronics
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {dirty.length > 0 ?
                        dirty.map((i, j) => {
                            return (
                                <tr key={JSON.stringify(i)}>
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
                                        {!i.towels ? "Cleaned" : "Dirty"}
                                    </td>
                                    <td className={"px-8 py-4"}>
                                        {!i.bedSheets ? "Cleaned" : "Dirty"}
                                    </td>
                                    <td className={"px-8 py-4"}>
                                        {!i.vacuum ? "Cleaned" : "Dirty"}
                                    </td>
                                    <td className={"px-8 py-4"}>
                                        {!i.dusting ? "Cleaned" : "Dirty"}
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
    await fireApp.firestore()
        .collection("room")
        .where("roomStatus", "==", "dirty")
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
