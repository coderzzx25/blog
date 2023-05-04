import styled from 'styled-components'
import bg from '@/assets/images/bg.jpg'

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
  .wrapper {
    width: 100%;
    height: calc(100vh - 100px);
    display: flex;
    justify-content: center;
    background-color: #fefefe;
    padding: 20px 0;
    .content {
      width: 1280px;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      h2 {
        font-style: normal;
        font-weight: 600;
        font-size: 40px;
        color: #003366;
      }
      h3 {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: #687481;
        margin: 10px 0 20px 0;
      }
      .content-list {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        .content-item {
          width: 400px;
          background: #ffffff;
          box-shadow: 10px 24px 54px rgba(0, 0, 0, 0.05);
          border-radius: 8px;
          :hover {
            box-shadow: 10px 24px 54px rgba(0, 0, 0, 0.2);
          }
        }
      }
    }
  }
`

export default HomeWrapper
