import {
    ThirdwebNftMedia,
    useAddress,
    useContract,
    useNFTs,
} from '@thirdweb-dev/react'
import type { NextPage } from 'next'
import Header from '../components/Header'
import styles from '../styles/MyNfts.module.css'
const MyNfts: NextPage = () => {
    const { contract } = useContract('0x6467bA610c169c82a8C76e464c242789da729B24')
    const { data: nfts, isLoading, error } = useNFTs(contract)
    const address = useAddress()
    console.log(address)
    return (
        <div className={styles.container}>
            <Header />
            <section className={styles.info}>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    nfts
                        ?.filter((nft) => nft.owner == address)
                        ?.map((nft) => {
                            return (
                                <div key={nft.metadata.id}>
                                    <ThirdwebNftMedia
                                        metadata={nft.metadata}
                                        height="200"
                                        style={{ borderRadius: '10px' }}
                                    />
                                    <p>ID: {nft.metadata.id} | {nft.metadata.name} </p>
                                </div>
                            )
                        })
                )}
            </section>
        </div>
    )
}
export default MyNfts