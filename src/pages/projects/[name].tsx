import Head from 'next/head'
import React from 'react'

import { useRouter } from 'next/router'

import * as G from '../../styles/Project.styles'

export default function ViewProject() {
  const router = useRouter()

  return(
    <>
      <Head>
        <title>{router.query.name}</title>
      </Head>
      <G.Main>

        <video controls src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"></video>
        <G.Text margin="1rem 0rem 0rem 0rem" fontSize="1.5rem" fontWeight="600">{router.query.name}</G.Text>
        <G.Divider></G.Divider>
        
        <G.Paragraph>Lorem ipsum dolor sit amet consectetur. Egestas eget donec neque in diam eget. Fames magna cras purus dolor. Amet nascetur in bibendum a quis dui vivamus. Eget augue consectetur mauris convallis id scelerisque morbi nulla.Lorem ipsum dolor sit amet consectetur. Egestas eget donec neque in diam eget. Fames magna cras purus dolor. Amet nascetur in bibendum a quis dui vivamus. Eget augue consectetur mauris convallis id scelerisque morbi nulla.</G.Paragraph>

        <G.Back href="/">

        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 5H1M1 5L5 9M1 5L5 1" stroke="black"/>
</svg>

          <G.Text fontSize="1.5rem" fontWeight="600">Voltar</G.Text>

        </G.Back>


      </G.Main>
    </>
  )

}