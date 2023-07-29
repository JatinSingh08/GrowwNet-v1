import React from 'react'
import { Rings } from 'react-loader-spinner'
import styles from './styles.module.css'
const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <Rings
        height="80"
        width="80"
        color="#9767FF"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
    </div>
  )
}

export default Spinner
