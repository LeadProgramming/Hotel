import Header from "../components/header"
import fireApp from "../firebase_config";

const Calendar = ({ rooms }) => {
    return (
        <div >
            <Header>
                <main>
                    <h1>
                        Calendar
                    </h1>
                    {rooms?.map((i, j) => {
                        return (
                            <div key={JSON.stringify(i)}>
                                {}
                            </div>
                        )
                    })}

                </main>

                <footer>
                    {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a> */}
                </footer>
            </Header>
        </div >
    )
}
export async function getServerSideProps({ query }) {
    let rooms = [];
    await fireApp.firestore()
        .collection("room")
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
