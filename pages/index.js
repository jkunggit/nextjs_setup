import React from 'react'
import Link from 'next/link'

import PostLink from '../components/PostLink'
import { Container } from 'react-bootstrap'

const Index = () => {
  return (
    <>
      <main>
        <Container>
          <h1>Hello World!</h1>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
          in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
          like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
          in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
          like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <ul>
            <PostLink id='dynamic-page1' />
            <PostLink id='dynamic-page2' />
            <PostLink id='dynamic-page3' />
          </ul>
          <Link href='/api/test' as='/api/test'>
            <a className='testLink'>API test route</a>
          </Link>
        </Container>
      </main>
      <style jsx>{`
        p{
          background: yellow;
          padding: 10px;
        }
        a{
          color: black;
        }
      `}
      </style>
      <style jsx global>{`
        .testLink{
          color: green;
        }
      `}
      </style>
    </>
  )
}

export default Index
