import styled from 'styled-components'

const NavBgWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .bg-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
  .bg-text h1 {
    font-size: 3rem;
    font-weight: 800;
    background: #fff;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media screen and (max-width: 850px) {
    .bg-text h1 {
      padding-top: 80px;
      font-size: 1.5rem;
    }
  }
`

export default NavBgWrapper
