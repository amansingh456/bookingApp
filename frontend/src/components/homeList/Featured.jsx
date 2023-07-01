import React from 'react'
import { styled } from 'styled-components'

const Featured = () => {
  return (
    <Featuredd>
      <FeaturedItem>
         <FeaturedImg src='/dublin.jpg' alt=''/>
         <FeaturedTitle>
            <H1>Dublin</H1>
            <H1>123 properties</H1>
         </FeaturedTitle>
      </FeaturedItem>
      <FeaturedItem>
         <FeaturedImg src='/austin.jpg' alt=''/>
         <FeaturedTitle>
            <H1>Austin</H1>
            <H1>532 properties</H1>
         </FeaturedTitle>
      </FeaturedItem>
      <FeaturedItem>
         <FeaturedImg src='/reno.jpg' alt=''/>
         <FeaturedTitle>
            <H1>Reno</H1>
            <H1>224 properties</H1>
         </FeaturedTitle>
      </FeaturedItem>
    </Featuredd>
  )
}

export default Featured

const Featuredd = styled.div`
   width: 100%;
   max-width: 1024px;
   display: flex;
   justify-content: space-between;
   gap: 20px;
   z-index: 1;
`
const FeaturedItem = styled.div`
   position: relative;
   color: white;
   border-radius: 10px;
   overflow: hidden;
   height: 250px;
   box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;`
const FeaturedImg = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
`
const FeaturedTitle = styled.div`
   position: absolute;
   bottom: 10px;
   left: 20px;
`
const H1 = styled.h2`
   /* color: black; */
`