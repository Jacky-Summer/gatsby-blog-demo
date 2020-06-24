import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import styles from "../styles/index.module.css"

export default function Home() {
  return (
    <Layout>
      <Header />
      <h1 className={styles.title}>Hello World</h1>
      <div className={styles.text}>Test</div>
    </Layout>
  )
}
