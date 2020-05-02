import React from "react"
import { Layout } from "antd"

const { Footer } = Layout

function Foot() {
  return (
    <Layout
      style={{
        marginTop: "35px",
      }}>
      <Footer
        style={{
          paddingTop: "5px",
          backgroundColor: "#343A40",
          color: "white",
          textAlign: "center",
          bottom: 0,
          width: "100%",
          height: "40px",
        }}>
        Designed by Dioris, Donovan, and Dan. 2020 All rights reserved.
      </Footer>
    </Layout>
  )
}

export default Foot
