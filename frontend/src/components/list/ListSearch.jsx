import { format } from 'date-fns'
import React, { useState } from 'react'
import { DateRange } from 'react-date-range'
import { useLocation } from 'react-router-dom'
import { styled } from 'styled-components'

const ListSearch = () => {
   const location = useLocation()
   // console.log('location: ', location);
   const [destination, setDestination] = useState(location.state.destination)
   const [date, setDate] = useState(location.state.date)
   const [opendate, setOpenDate] = useState(false)
   const [option, setOption] = useState(location.state.option)
   return (
      <ListSearchh>
         <ListTitle>Search</ListTitle>
         <LsItem>
            <Label>Destination</Label>
            <Input type='text' placeholder={destination} />
         </LsItem>
         <LsItem>
            <Label>Check-in Date</Label>
            <Span onClick={() => setOpenDate((prev) => !prev)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</Span>
            {opendate &&
               <DateRange onChange={item => setDate([item.selection])} ranges={date} minDate={new Date()} />
            }
         </LsItem>
         <LsItem>
            <Label>Options</Label>
            <LsOptions>
               <LsOptionItem>
                  <LsOptionText>Min Price <small>per night</small></LsOptionText>
                  <LsOptionInput type="number" />
               </LsOptionItem>
               <LsOptionItem>
                  <LsOptionText>Max Price <small>per night</small></LsOptionText>
                  <LsOptionInput type="number" />
               </LsOptionItem>
               <LsOptionItem>
                  <LsOptionText>Adult</LsOptionText>
                  <LsOptionInput min={1} type="number" placeholder={option.adult} />
               </LsOptionItem>
               <LsOptionItem>
                  <LsOptionText>Children</LsOptionText>
                  <LsOptionInput min={0} type="number" placeholder={option.children} />
               </LsOptionItem>
               <LsOptionItem>
                  <LsOptionText>Room</LsOptionText>
                  <LsOptionInput min={1} type="number" placeholder={option.room} />
               </LsOptionItem>
            </LsOptions>
            <Button>Search</Button>
         </LsItem>
      </ListSearchh>
   )
}

export default ListSearch

const ListSearchh = styled.div`
  flex: 1;
  background-color: #febb02;
  padding: 10px;
  border-radius: 10px;
  position: sticky;
  top: 10px;
  height: max-content;
`
const ListTitle = styled.h1`
   font-size: 20px;
   color: #555;
   margin-bottom: 10px;
`

const LsItem = styled.div`
   display: flex;
   flex-direction: column;
   gap: 5px;
   margin-bottom: 10px;
`
const Label = styled.label`
   font-size: 12px;
`
const Input = styled.input`
   height: 30px;
   border: none;
   padding: 5px;
`
const Span = styled.span`
   height: 30px;
   padding: 5px;
   background-color: #fff;
   display: flex;
   align-items: center;
   cursor: pointer;
   font-size: 17px;
`
const LsOptions = styled.div`
   padding: 10px;
`
const LsOptionItem = styled.div`
   display: flex;
   justify-content: space-between;
   margin-bottom: 5px;
   color: #555;
   font-size: 12px;
`

const LsOptionText = styled.span`
   
`

const LsOptionInput = styled.input`
   width: 50px;
`
const Button = styled.button`
   padding: 10px;
   background-color: #0071c2;
   color: #fff;
   border: none;
   font-weight: 500;
   cursor: pointer;
   width: 100%;
`