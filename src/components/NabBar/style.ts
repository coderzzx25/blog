import styled from 'styled-components'

const NavBarWrapper = styled.div`
  .NavBarItem {
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.25);
    width: 95%;
    height: 80px;
    border-radius: 13px;
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translate(-50%);
    z-index: 999;
  }
  h1 {
    color: #222;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
  }
  .NavMenu {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 10px;
    align-items: center;
  }
  .links {
    color: #222;
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0.7rem 1rem;
    white-space: nowrap;
    display: flex;
    align-items: center;
  }
  .setLinks {
    background-color: #01959a;
    color: #fff;
    border-radius: 4px;
  }
  .links svg {
    margin-right: 0.5rem;
  }
  .links:hover {
    background-color: #01959a;
    color: #fff;
    border-radius: 4px;
    transition: all 0.3s ease-out;
  }
  .MenuIcon {
    display: none;
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
      left: -100%;
      opacity: 0;
      align-items: stretch;
      padding: 80px 0 30px 0;
      margin: 0;
      transition: all 0.5s ease;
      border-radius: 13px;
    }
    .active {
      left: 0;
      opacity: 1;
      z-index: -1;
      transition: all 0.5s ease;
    }
    .links {
      display: flex;
      width: 100%;
      font-size: 1.2rem;
      padding: 1rem 0;
      align-items: center;
      justify-content: center;
    }
    .links:hover {
      background-color: #01959a;
      transition: none;
    }
    .MenuIcon {
      display: block;
    }
    .MenuIcon svg {
      font-size: 1.5rem;
      cursor: pointer;
      color: #222;
    }
  }
`

export default NavBarWrapper
