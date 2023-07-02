import { styled } from "styled-components"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import ListSearch from "../../components/list/ListSearch"
import SearchItem from "../../components/list/SearchItem"

const List = () => {
  return (
    <div>  
      <Navbar/>
      <Header type="list"/>
      <ListCont>
        <ListWrapper>
          <ListSearch/>
          <ListResult>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </ListResult>
        </ListWrapper>
      </ListCont>
    </div>
  )
}

export default List

const ListCont = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`
const ListWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  gap: 20px;
`

const ListResult = styled.div`
  flex: 3;
`