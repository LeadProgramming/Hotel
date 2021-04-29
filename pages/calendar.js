import dayjs from "dayjs";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import firebase from "../firebase_config";
import { loadEntities } from "../store/calendarSlice";
const Calendar = () => {
    const dispatch = useDispatch();
    const { checkins, reservations, rooms, calendar, week } = useSelector(state => state.calendar)
    // const month = dayjs().month() + 1;
    // const day = dayjs().date();
    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            await dispatch(loadEntities());
        })
    }, [])

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
                            week.map(i => {
                                return (
                                    <th className={"px-8"}>{dayjs(i).format("MM/DD")}</th>
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

export default Calendar;
