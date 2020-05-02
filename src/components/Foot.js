import React from "react"
import { Layout } from "antd"

const { Footer } = Layout

function Foot() {
  return (
    <Layout style={{ marginTop: "35px" }}>
      <Footer
        style={{
          backgroundColor: "#343A40",
          color: "white",
          textAlign: "center",
        }}>
        Designed by Dioris, Donovan, and Dan. 2020 All rights reserved.
      </Footer>
    </Layout>
  )
}

export default Foot
