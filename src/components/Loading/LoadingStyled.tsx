import styled from "styled-components";

const LoadingStyled = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(250, 250, 250, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  .loader {
    display: inline-block;
    font-size: 48px;
    color: #000000;
    width: 1em;
    height: 1em;
    box-sizing: border-box;
    background-color: currentcolor;
    position: relative;
    border-radius: 50%;
    transform: rotateX(-60deg) perspective(1000px);
  }
  .loader:before,
  .loader:after {
    content: "";
    display: block;
    position: absolute;
    box-sizing: border-box;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    animation: flowerFlow 1s ease-out infinite;
  }
  .loader:after {
    animation-delay: 0.4s;
  }

  @keyframes flowerFlow {
    0% {
      opacity: 1;
      transform: rotate(0deg);
      box-shadow: 0 0 0 -0.5em currentcolor, 0 0 0 -0.5em currentcolor,
        0 0 0 -0.5em currentcolor, 0 0 0 -0.5em currentcolor,
        0 0 0 -0.5em currentcolor, 0 0 0 -0.5em currentcolor,
        0 0 0 -0.5em currentcolor, 0 0 0 -0.5em currentcolor;
    }
    100% {
      opacity: 0;
      transform: rotate(180deg);
      box-shadow: -1em -1em 0 -0.35em currentcolor,
        0 -1.5em 0 -0.35em currentcolor, 1em -1em 0 -0.35em currentcolor,
        -1.5em 0 0 -0.35em currentcolor, 1.5em -0 0 -0.35em currentcolor,
        -1em 1em 0 -0.35em currentcolor, 0 1.5em 0 -0.35em currentcolor,
        1em 1em 0 -0.35em currentcolor;
    }
  }

  span {
    display: none;
  }
`;

export default LoadingStyled;
