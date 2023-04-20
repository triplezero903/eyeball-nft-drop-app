import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import {useContract, Web3Button} from "@thirdweb-dev/react";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
        <Header />
        <section className={styles.info}>
            <img src="logo.png" alt="logo" className={styles.eyeLogo}/>
            <h1>The Eyeball Project</h1>
            <p>NFT Project using thirdweb</p>
            <br />
            <Web3Button contractAddress="0x6467bA610c169c82a8C76e464c242789da729B24" action={(contract) => {
                contract.erc721.claim(1)
            }}>
                Claim Eye
            </Web3Button>
        </section>
    </div>
  );
};

export default Home;
