import React from 'react'
import { styled } from 'styled-components'

const FeaturedProp = () => {
   return (
      <FProp>
         <FPropItem>
            <FPropImg src="/hotel3.jpeg" alt='' />
            <FPropName>Apprthotel Stare Miasto</FPropName>
            <FPropCity>Madrid</FPropCity>
            <FPropPrice>Starting from $120</FPropPrice>
            <FPropRating>
               <Button>8.9</Button>
               <Span>Excellent</Span>
            </FPropRating>
         </FPropItem>
         <FPropItem>
            <FPropImg src="/cabin2.jpg" alt='' />
            <FPropName>Royal Cabin Luca</FPropName>
            <FPropCity>Idrd</FPropCity>
            <FPropPrice>Starting from $60</FPropPrice>
            <FPropRating>
               <Button>7.2</Button>
               <Span>Very Good</Span>
            </FPropRating>
         </FPropItem>
         <FPropItem>
            <FPropImg src="/hotel1.jpg" alt='' />
            <FPropName>Adityaaz 7Star </FPropName>
            <FPropCity>London</FPropCity>
            <FPropPrice>Starting from $210</FPropPrice>
            <FPropRating>
               <Button>9.3</Button>
               <Span>Superb</Span>
            </FPropRating>
         </FPropItem>
         <FPropItem>
            <FPropImg src="/appartment2.jpeg" alt='' />
            <FPropName>Yess Youg Apparts</FPropName>
            <FPropCity>Nixcus</FPropCity>
            <FPropPrice>Starting from $100</FPropPrice>
            <FPropRating>
               <Button>6.8</Button>
               <Span>Good</Span>
            </FPropRating>
         </FPropItem>
      </FProp>
   )
}

export default FeaturedProp

const FProp = styled.div`
   width: 100%;
   max-width: 1024px;
   display: flex;
   justify-content: space-between;
   gap: 20px;
`
const FPropItem = styled.div`
    flex: 1;
   border-radius: 10px;
   overflow: hidden;
   cursor: pointer;
   box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`
const FPropImg = styled.img`
   width: 100%;
   height: 150px;
`
const FPropName = styled.h3`
   font-weight: bold;
   margin-left: 10px;
`
const FPropCity = styled.h4`
   font-weight: 300;
   margin-left: 10px;
`
const FPropPrice = styled.span`
   font-weight: 500;
   margin-left: 10px;
`
const FPropRating = styled.div`
   margin-bottom: 15px;
`

const Button = styled.button`
   background-color: #003580;
   color: #fff;
   padding: 3px;
   margin-right: 10px;
   margin-left: 10px;
   font-weight: bold;
   border: none;
   outline: none;
   border-radius: 5px;
`
const Span = styled.span`
   font-size: 14px;
`