import { useContract, useContractWrite } from '@thirdweb-dev/react'
import type { NextPage } from 'next'
import { useState } from 'react'
import Header from '../components/Header'
import styles from '../styles/WriteNote.module.css'
const WriteNote: NextPage = () => {
    const { contract } = useContract('0xe95CE43665c4d4FeE5354168D69F506aD5c5141e')
    const {
        mutate: write,
        isLoading,
        error,
    } = useContractWrite(contract, 'writeNote')
    const [id, setID] = useState('')
    const [note, setNote] = useState('')
    return (
        <div className={styles.container}>
            <Header />
            <section className={styles.info}>
                <p className={styles.label}>ID:</p>
                <input
                    type="text"
                    name="id"
                    value={id}
                    onChange={(e) => setID(e.target.value)}
                />
                <p className={styles.label}>Note:</p>
                <textarea
                    name="note"
                    value={note}
                    rows={5}
                    onChange={(e) => setNote(e.target.value)}
                />
                <br />
                {error ? <p>{error.toString()}</p> : null}
            </section>
            <p>Write Note</p>
        </div>
    )
}
export default WriteNote