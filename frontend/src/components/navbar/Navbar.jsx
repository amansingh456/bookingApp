import styled from 'styled-components'
const Navbar = () => {
  return (
    <Navbarr>
      <NavContainer>
        <Logo>amanBooking</Logo>
        <NavItems>
            <Button>Register</Button>
            <Button>Login</Button>
        </NavItems>
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
    
`
const Logo = styled.span`
    
`
const NavItems = styled.div`
    
`
const Button = styled.button`
    
`