import dayjs from "dayjs";
import fireApp from "../firebase_config";
const Calendar = ({ rooms }) => {
    const month = dayjs().month() + 1;
    const day = dayjs().date();
    return (
        <div className={"space-y-4"}>
            <h1 className={"pt-8 pl-8 "}>
                Calendar
            </h1>
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className={"px-8"}>Room #</th>
                        {
                            [
                                { month, day },
                                { month, day: day + 1 },
                                { month, day: day + 2 },
                                { month, day: day + 3 },
                                { month, day: day + 4 },
                                { month, day: day + 5 },
                                { month, day: day + 6 },
                            ].map(i => {
                                return (
                                    <th className={"px-8"}>{i.month}/{i.day}</th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        rooms.length > 0 ? rooms?.map((i, j) => {
                            return (
                                <tr key={JSON.stringify(i)}>
                                    <td className={"px-8 py-4"}>{i.roomNumber}</td>
                                    {[false, false, false, false, false, false, false].map((i) => {

                                        return (!i ? <td className={"px-8 py-4"}>David</td> : <td className={"px-8 py-4"}></td>)
                                    })}
                                </tr>
                            )
                        }) : <tr>There are no rooms.</tr>
                    }
                </tbody>
            </table>
        </div >
    )
}
export async function getServerSideProps({ query }) {
    let rooms = [];
    await fireApp.firestore()
        .collection("room")
        .orderBy("roomNumber")
        .get()
        .then(queryData => {
            queryData.forEach(i => {
                rooms.push(i.data());
            })
        })
    return {
        props: { rooms }
    }

}
export default Calendar;
