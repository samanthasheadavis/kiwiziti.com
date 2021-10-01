import * as React from "react"
import KiwiZitiImage from '../images/kiwiziti.svg';

const center = {
  alignSelf: "center",
  // marginLeft: "auto",
  // marginRight: "auto",
}

const pageStyles = {
  display: "flex",
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
      <title>workinonit</title>
      <KiwiZitiImage style={center}/>
    </main>
  )
}

export default IndexPage
