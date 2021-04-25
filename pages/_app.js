
import { Provider } from 'react-redux';
import 'tailwindcss/tailwind.css';
import Header from "../components/header";
import store from "../store/store";

function MyApp({ Component, pageProps, user }) {
  return (
    <Provider store={store}>
      <div className="flex">
        <Header>
          <main className="w-full">
            < Component {...pageProps} />
          </main>
        </Header>
      </div>
    </Provider>
  )
}

export default MyApp
