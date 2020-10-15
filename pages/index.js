import Head from "next/head";
import styles from "../styles/Home.module.css";
import Carslist from "./_Carslist.js"

export default function Home(props) {
  return (
    <div className={styles.container}>      
      <Carslist list={props.cars}/>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
export async function getStaticProps() {
  let creds = { username: "generic", password: "Rr7$&]jr" };
  const token_res = await fetch(
    "https://django-cars-api.herokuapp.com/api/token",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(creds),
    }
  );
  const { refresh, access } = await token_res.json();
  console.log("access token", access);
  const jwt_auth_token = access;
  const res = await fetch(
    "https://django-cars-api.herokuapp.com/api/v1/?format=json",
    {
      headers: {
        Authorization: `Bearer ${jwt_auth_token}`,
      },
    }
  );
  const cars = await res.json();

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      cars,
    },
    revalidate: 15, //rebuild page every 15 seconds
  };
}
