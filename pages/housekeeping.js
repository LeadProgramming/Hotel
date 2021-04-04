import Header from "../components/header"
import fireApp from "../firebase_config";

const Housekeeping = ({ dirty, days }) => {

    return (
        <div >
            <Header>
                <main>
                    <h1>
                        Housekeeping
                    </h1>
                    {dirty?.map((i, j) => {
                        return (
                            <div key={JSON.stringify(i)}>
                                <div>
                                    <span>
                                        Housekeeper: {i.housekeeper}
                                    </span>
                                    <span>
                                        Room #: {i.roomNumber}
                                    </span>
                                    <span>
                                        Type: {i.roomType}
                                    </span>
                                    <span>
                                        Status: {i.roomStatus}
                                    </span>
                                    <span>
                                        Bathroom Towels: {i.towels}
                                    </span>
                                    <span>
                                        Bed Sheets: {i.bedSheets ? "Cleaned" : "Dirty"}
                                    </span>
                                    <span>
                                        Vacuum: {i.vacuum ? "Cleaned" : "Dirty"}
                                    </span>
                                    <span>
                                        Dusting: {i.dusting ? "Cleaned" : "Dirty"}
                                    </span>
                                    <span>
                                        Electronics: {i.electronics.map(j => {
                                        return (
                                            <div>
                                                {j}
                                            </div>
                                        )
                                    })}
                                    </span>
                                </div>
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
