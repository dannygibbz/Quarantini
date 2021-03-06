import React from "react"
import { Layout } from "antd"

const { Footer } = Layout

function Foot() {
  return (
    <Layout
      style={{
        marginTop: "35px",
        height: "100%",
      }}>
      <Footer
        style={{
          paddingTop: "5px",
          backgroundColor: "#343A40",
          color: "white",
          textAlign: "center",
        }}>
        Designed by Dioris, Donavan, and Dan. 2020 All rights reserved.
      </Footer>
    </Layout>
  )
}

export default Foot
