import * as React from "react"
import KiwiZitiImage from '../images/kiwiziti.svg';

const center = {
  alignSelf: "center",
}

const pageStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "#232129",
  paddingLeft: 96,
  paddingRight: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>kiwiziti.com | Sam &amp; Matt</title>
      <KiwiZitiImage style={center}/>
      <h2 style={center}>kiwi | ziti</h2>
      <h1 style={center}>things samantha and matt host</h1>
    </main>
  )
}

export default IndexPage
