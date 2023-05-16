import styled from 'styled-components'

const ContentItemWrapper = styled.div`
  width: 32%;
  text-align: start;
  box-shadow: 0 5px 25px 2px rgba(0, 0, 0, 0.11);
  border-radius: 7px;
  cursor: pointer;
  padding: 1rem 0.8rem;
  .ItemImg {
    height: 200px;
    overflow: hidden;
    border-radius: 7px;
  }
  img {
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-in-out;
    border-radius: 7px;
  }
  .ItemTitle:hover img {
    transform: scale(1.3);
  }
  h4 {
    font-size: 1.3rem;
    padding: 0.9rem 0 0.2rem 0;
  }
  @media screen and (max-width: 850px) {
    width: 100%;
    margin-bottom: 1.5rem;
  }
`

export default ContentItemWrapper
