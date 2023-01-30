import React from 'react'
import * as G from './styles'

const HeaderComponent = () => {

  return(
    <G.Header id="header">
          <G.TextFixed right="2.5rem" top="2.5rem">
            UI/UX Design
          </G.TextFixed>

          <G.Image src="eu.svg" alt="um desenho cartoon do desenvolvedor" />
          <G.Text
            fontSize="1.5rem"
            fontWeight="600"
            margin="2rem 0rem 0rem 0rem"
          >
            Antônio Gabriel / Vulgo, Gaba
          </G.Text>

          <G.Cards>
            <G.Card>
              <G.Paragraph>
                Lorem ipsum dolor sit amet consectetur. Iaculis bibendum sed
                lacus lorem duis scelerisque consequat tempus aliqu
              </G.Paragraph>
              <G.CardBottom>
                <div>
                  <G.Text fontSize="1.5rem" fontWeight="600">
                  Nome do projeto
                </G.Text>

                <G.Link href="#">Acessar</G.Link>
                </div>
              </G.CardBottom>
            </G.Card>
            <G.Card>
              <G.Paragraph>
                Lorem ipsum dolor sit amet consectetur. Iaculis bibendum sed
                lacus lorem duis scelerisque consequat tempus aliqu
              </G.Paragraph>
              <G.CardBottom>
                <div>
                  <G.Text fontSize="1.5rem" fontWeight="600">
                  Nome do projeto
                </G.Text>

                <G.Link href="#">Acessar</G.Link>
                </div>
              </G.CardBottom>
            </G.Card>
            <G.Card>
              <G.Paragraph>
                Lorem ipsum dolor sit amet consectetur. Iaculis bibendum sed
                lacus lorem duis scelerisque consequat tempus aliqu
              </G.Paragraph>
              <G.CardBottom>
                <div>
                  <G.Text fontSize="1.5rem" fontWeight="600">
                  Nome do projeto
                </G.Text>

                <G.Link href="#">Acessar</G.Link>
                </div>
              </G.CardBottom>
            </G.Card>
          </G.Cards>
        </G.Header>
  )

}

export default HeaderComponent