import Header from "../components/header"
import Image from "next/image"
// - First Name 
// - Last Name 
// - Phone 
// - Address 
// - E-mail  
// - ID Info (State, ID#)
// - Vehicle License Plate
// The user will also be able to see who the guest is.

const Profile = () => {

  return (
    <div>
      <Header>
        <main>
          <h1>
            Profile
          </h1>
          <div>
            <Image src="/kai.jpg" alt="guest's image" width="300" height="300" />
            <div>First Name: David</div>
            <div>Last Name: Nguyen</div>
            <div>Phone: (123) 123 1234</div>
            <div>Address 1: 12345 Butter St. </div>
            <div>Address 2: empty </div>
            <div>City: Fullerton</div>
            <div>Zip: 12345</div>
            <div>State: CA</div>
            <div>Email: david@aim.com</div>
            <div>Driver ID#: 12345678</div>
            <div>Vehicle ID#: F123456</div>
          </div>
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
    </div>
  )
}
export default Profile;
