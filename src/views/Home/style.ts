import styled from 'styled-components'
import bg from '@/assets/images/bg.jpg'

const HomeWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  .header_bg {
    background-image: url(${bg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .name h1 {
      font-size: 50px;
      color: #fff;
      font-weight: bold;
      text-shadow: 0 0 10px #fff;
    }
  }
`

export default HomeWrapper
