import styled from 'styled-components'
import bg from '@/assets/images/bg.jpg'

const HomeWrapper = styled.div`
  .header_bg {
    background-image: url(${bg});
    height: calc(100vh - 100px);
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    .name {
      color: #fff;
      font-size: 60px;
      font-weight: 600;
      text-align: center;
    }
  }
`

export default HomeWrapper
