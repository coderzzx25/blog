import styled from 'styled-components'
import bg from '@/assets/images/bg.jpg'

const HomeBGWrapper = styled.div`
  .home-bg {
    width: 100%;
    height: ${(props) => props.theme.content.height};
    background-image: url(${bg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 50px;
      color: #fff;
      font-weight: bold;
      text-shadow: 0 0 10px #fff;
    }
  }
`

export default HomeBGWrapper
