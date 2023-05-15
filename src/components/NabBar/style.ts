import styled from 'styled-components'

const NavBarWrapper = styled.div`
  .NavBarItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.25);
    width: 95%;
    height: 80px;
    border-radius: 13px;
    h1 {
      color: #222;
      font-size: 2rem;
      font-weight: 700;
      cursor: pointer;
    }
    .NavMenu {
      display: grid;
      grid-template-columns: repeat(2, auto);
      grid-gap: 10px;
      align-items: center;
      .NavLinks {
        color: #222;
        font-size: 1.2rem;
        font-weight: 600;
        padding: 0.7rem 1rem;
        white-space: nowrap;
        display: flex;
        align-items: center;
        svg {
          padding-right: 5px;
        }
        &:hover {
          background-color: #01959a;
          color: #fff;
          border-radius: 4px;
          transition: all 0.2s ease-out;
        }
      }
    }
    @media screen and (max-width: 850px) {
      .NavBarItem {
        z-index: 99;
      }
      .NavMenu {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        background: #fff;
        width: 100%;
        height: auto;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 1;
        padding: 80px 0 30px 0;
        margin: 0;
        z-index: -1;
        .NavLinks {
          font-size: 1.2rem;
          &:hover {
            background-color: #01959a;
            color: #fff;
          }
        }
      }
    }
  }
`

export default NavBarWrapper
