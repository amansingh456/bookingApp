import styled from 'styled-components'
const Navbar = () => {
  return (
    <Navbarr>
      <NavContainer>
        <Logo>AmanBooking</Logo>
        <NavBtns>
            <Button>Register</Button>
            <Button>Login</Button>
        </NavBtns>
      </NavContainer>
    </Navbarr>
  )
}

export default Navbar




const Navbarr = styled.div`
    height: 50px;
    background-color: #003580;
    display: flex;
    justify-content: center;
`
const NavContainer = styled.div`
    width: 100%;
    max-width: 1024px;
    /* background-color: red; */
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Logo = styled.span`
    font-weight: 500;
`
const NavBtns = styled.div`
`
const Button = styled.button`
  margin-left: 20px;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  color: #003580;
`