import styled from 'styled-components'

const BlogNewWrapper = styled.div`
  margin: 4rem 6rem;
  h1 {
    font-size: 3rem;
  }
  .NewBlog {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 4.5rem;
  }
  .BlogContent {
    width: 45%;
    text-align: start;
    font-size: 1.1rem;
  }
  h2 {
    padding-bottom: 1rem;
  }
  .NewImg {
    position: relative;
    width: 50%;
    display: flex;
    justify-content: space-between;
    z-index: -99;
  }
  img {
    width: 49%;
    height: 350px;
    object-fit: cover;
    border-radius: 6px;
    box-shadow: -1px 1px 62px -18px rgba(0, 0, 0, 0.19);
  }
  img:nth-child(2) {
    position: absolute;
    top: -10%;
    right: 0;
  }
  @media screen and (max-width: 850px) {
    margin: 4rem 2rem;
    .NewBlog {
      display: flex;
      flex-direction: column-reverse;
      margin-top: 2.5rem;
    }
    .BlogContent {
      width: 100%;
    }
    .NewImg {
      width: 100%;
      margin: 1.8rem 0;
    }
    img {
      height: 250px;
    }
  }
`

export default BlogNewWrapper
