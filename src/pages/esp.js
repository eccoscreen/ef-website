import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import Subpage from "../components/Subpage"
import SEO from "../components/SEO"

const PageContainer = styled.div`
  margin: 6rem auto 4rem;
  max-width: 760px;
  padding: 2rem;
`

const EcosystemSupportPage = () => (
  <Layout>
    <SEO title="Ecosystem Support Program" />
    <Subpage>
      <PageContainer>
        <h1>Ecosystem Support Program</h1>
        <p>
          The Ecosystem Support Program is a large-scale effort aimed at
          ensuring that the Ethereum ecosystem has the support it needs to
          succeed. We provide financial support to teams and organizations
          working on important projects across the Ethereum ecosystem and
          beyond, as well as guidance and non-monetary support to teams that
          need more than just money to succeed.
        </p>

        <p>
          Interested in learning more about Ecosystem Support and whether it
          might be a good fit for your project? →{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ecosystem.support"
          >
            ecosystem.support
          </a>
        </p>
      </PageContainer>
    </Subpage>
  </Layout>
)

export default EcosystemSupportPage
