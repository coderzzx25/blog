import styled from 'styled-components'

const HeaderWrapper = styled.div`
  width: 100%;
  height: 100px;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
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
`

export default HeaderWrapper
