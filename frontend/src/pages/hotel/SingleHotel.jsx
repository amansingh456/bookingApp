import styled from 'styled-components'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import MailList from "../../components/homeList/MailList"
import Footer from "../../components/footer/Footer"
import { ImLocation2 } from 'react-icons/im'
const SingleHotel = () => {
  const photos = [
    {
      src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/b2/47/9a/capital-o-5752-tuma-park.jpg?w=1000&h=-1&s=1"
    },
    {
      src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/b2/47/77/capital-o-5752-tuma-park.jpg?w=1000&h=-1&s=1"
    },
    {
      src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/b2/46/ea/capital-o-5752-tuma-park.jpg?w=1000&h=-1&s=1"
    },
    {
      src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/b2/47/6b/capital-o-5752-tuma-park.jpg?w=1000&h=-1&s=1"
    },
    {
      src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/de/e1/7a/hotel-adityaz.jpg?w=1200&h=-1&s=1"
    },
    {
      src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/dd/c3/0e/hotel-adityaz-gwalior.jpg?w=800&h=-1&s=1"
    }

  ]
  return (
    <SingleHotell>
      <Navbar />
      <Header type="list" />
      <HotelContainer>
        <HotelWrapper>
          <BookNow>Reserve Or Book Now!</BookNow>
          <HotelTitle>Grand Hotel</HotelTitle>
          <HotelAddress>
            <ImLocation2 />
            <Span>Elton St 125 New york</Span>
          </HotelAddress>
          <HotelDistance>
            Excellent location - 500m from center
          </HotelDistance>
          <HotelPriceHighlight>
            Book a stay over $114 at this property and get a free airport taxi
          </HotelPriceHighlight>
          <HotelImages>
            {photos?.map((photo) => (
              <HotelImagesWrapper>
                <HotelImage src={photo.src} />
              </HotelImagesWrapper>
            ))}
          </HotelImages>
          <HotelDetails>
            <HotelDetailsText>
              <HotelTitle>jsncoinovnw</HotelTitle>
              <HotelDesc>At the hotel, every room is equipped with a desk. Complete with a private bathroom equipped with a shower and free toiletries, guest rooms at FabHotel Prime Jewel Palace have a flat-screen TV and air conditioning, and selected rooms include a seating area. All guest rooms include a closet.</HotelDesc>
            </HotelDetailsText>
            <HotelDetailsPrice>
              <H1>Perfect for a 9-night stay!</H1>
              <Span2>Located in Bhopal, a 10-minute walk from Habibganj Station, free private parking, a terrace and a bar</Span2>
              <H2>
                <b>$945</b> (9 nights)
              </H2>
              <Button>Reserve or Book Now!</Button>
            </HotelDetailsPrice>
          </HotelDetails>
        </HotelWrapper>
        <MailList/>
        <Footer/>
      </HotelContainer>
    </SingleHotell>
  )
}

export default SingleHotel

const SingleHotell = styled.div`
  
`
const HotelContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  margin-top: 20px;
`
const HotelWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`
const HotelImagesWrapper = styled.div`
  width: 33%;
`
const HotelImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
const HotelImage = styled.img`
  width: 100%;
  height: 98%;
  object-fit: cover;
`
const HotelTitle = styled.h1`
  font-size: 24px;
`

const HotelAddress = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
`
const Span = styled.span`
  
`

const HotelDistance = styled.span`
  color: #0071c2;
  font-weight: 500;
`
const HotelPriceHighlight = styled.span`
  color: #008009;
  font-weight: 500;
`


const HotelDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  gap: 20px;
`
const HotelDetailsText = styled.div`
  flex: 3;
`
const HotelDesc = styled.p`
  font-size: 14px;
  margin-top: 20px;
`
const HotelDetailsPrice = styled.div`
  flex: 1;
  background-color: #ebf3ff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const H1 = styled.h1`
  font-size: 18px;
  color: #555;
`
const Span2 = styled.span`
  font-size: 14px;
`
const H2 = styled.h2`
  font-weight: 300;
`
const Button = styled.button`
  border: none;
  background-color: #0071c2;
  color: #fff;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
`
const BookNow = styled.button`
  position: absolute;
  top: 10px;
  right: 0;
  border: none;
  background-color: #0071c2;
  color: #fff;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
`