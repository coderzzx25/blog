import styled from 'styled-components'

const BlogCardWrapper = styled.div`
  width: 100%;
  height: ${(props) => props.theme.content.height};
  display: flex;
  justify-content: center;
  background-color: #f7f7f7;
  .content {
    width: ${(props) => props.theme.content.width};
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    }
    .list {
      display: flex;
      justify-content: space-between;
      .item {
        width: 400px;
        height: 585px;
        background-color: #fff;
        box-shadow: 10px 24px 54px rgba(0, 0, 0, 0.05);
        border-radius: 8px;
      }
    }
  }
`

export default BlogCardWrapper
