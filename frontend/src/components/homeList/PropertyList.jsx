import React from 'react'
import { styled } from 'styled-components'

const PropertyList = () => {
  return (
    <Plist>
      <PlistItem>
         <PlistItemImg src="hotel.jpg" alt=""/>
         <PlistTitles>
            <H1>Hotels</H1>
            <H2>233 Hotels</H2>
         </PlistTitles>
      </PlistItem>
      <PlistItem>
         <PlistItemImg src="appartment.jpg" alt=""/>
         <PlistTitles>
            <H1>Appartments</H1>
            <H2>118 Appartments</H2>
         </PlistTitles>
      </PlistItem>
      <PlistItem>
         <PlistItemImg src="resorts.jpg" alt=""/>
         <PlistTitles>
            <H1>Resorts</H1>
            <H2>653 Resorts</H2>
         </PlistTitles>
      </PlistItem>
      <PlistItem>
         <PlistItemImg src="/villa.jpg" alt=""/>
         <PlistTitles>
            <H1>Villas</H1>
            <H2>89 Villas</H2>
         </PlistTitles>
      </PlistItem>
      <PlistItem>
         <PlistItemImg src="cabin.jpg" alt=""/>
         <PlistTitles>
            <H1>Cabins</H1>
            <H2>765 Cabins</H2>
         </PlistTitles>
      </PlistItem>
    </Plist>
  )
}

export default PropertyList

const Plist = styled.div`
   width: 100%;
   max-width: 1024px;
   display: flex;
   justify-content: space-between;
   gap: 20px;
` 
const PlistItem = styled.div`
   flex: 1;
   border-radius: 10px;
   overflow: hidden;
   cursor: pointer;
   height: 190px;
   box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
` 
const PlistItemImg = styled.img`
   width: 100%;
   object-fit: cover;
` 
const PlistTitles = styled.div`
   
` 
const H1 = styled.h1`
   font-size: 18px;
   margin-left: 5px;
`
const H2 = styled.h2`
   font-size: 14px;
   font-weight: 300;
   margin-left: 5px;
`