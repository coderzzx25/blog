import styled from 'styled-components'

const BlogContentWrapper = styled.div`
  height: ${(props) => props.theme.content.height};
  width: ${(props) => props.theme.content.width};
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    font-weight: 600;
    font-size: 40px;
    color: #003366;
    text-align: center;
    margin: 5px 0;
  }
  h3 {
    font-weight: 400;
    font-size: 16px;
    color: #687481;
    text-align: center;
    margin: 5px 0;
  }
  .content {
    height: 580px;
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    .item {
      width: 400px;
      background: #ffffff;
      box-shadow: 10px 24px 54px rgba(0, 0, 0, 0.05);
      border-radius: 8px;
      cursor: pointer;
      overflow: hidden;
      &:hover {
        box-shadow: 10px 24px 54px rgba(0, 0, 0, 0.1);
      }
      img {
        width: 100%;
        height: 200px;
      }
      p {
        font-size: 14px;
        color: #687481;
        margin: 10px 20px;
      }
    }
  }
`

export default BlogContentWrapper
