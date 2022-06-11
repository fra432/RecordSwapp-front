import styled from "styled-components";

const UserCollectionStyled = styled.li`
  position: relative;
  margin: 1.5rem;
  height: 10rem;
  background-image: url("/images/records-banner.jpeg");
  background-size: cover;

  .card {
    &__img {
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(0, -3.5rem);
      width: 7rem;
      height: 7rem;
      border: 2px solid white;
      border-radius: 3.5rem;
      background-color: #fff;
    }
  }
  .card-body {
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      color: #fff;
      font-size: 1.4rem;
      font-weight: 400;
      z-index: 1;
    }

    @media (min-width: 768px) {
      display: flex;
      flex-direction: column;
      color: #fff;
      font-size: 0.8rem;
      font-weight: 400;
      z-index: 1;
    }
  }

  .card-title {
    font-size: 1.9rem;
  }

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.3;
  }

  .button {
    &--see-collection {
      @media (max-width: 768px) {
        transform: translate(-16vw, 1.6rem);
      }
      @media (min-width: 768px) {
        transform: translate(-4rem, 1.6rem);
      }
      position: absolute;
      left: 50%;
      bottom: 0;
    }
  }
`;
export default UserCollectionStyled;
