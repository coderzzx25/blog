import styled from 'styled-components'

const BlogContentWrapper = styled.div`
  margin: 4rem 6rem;
  color: #2a2a2a;
  h1 {
    font-size: 2rem;
  }
  .ContentList {
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
  }
  @media screen and (max-width: 850px) {
    margin: 4rem 2rem;
    .ContentList {
      flex-direction: column;
    }
  }
`

export default BlogContentWrapper
