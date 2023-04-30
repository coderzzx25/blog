import styled from 'styled-components'
import bg from '@/assets/images/bg.jpg'

const HeaderWrapper = styled.div`
  .header_content {
    position: sticky;
    top: 0;
    background-color: #fff;
    height: 100px;
    width: 100%;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
    .content {
      width: 1280px;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo {
        font-weight: 600;
        cursor: pointer;
      }
    }
  }
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

export default HeaderWrapper
