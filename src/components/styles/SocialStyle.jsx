import styled from "styled-components";

const SocialStyle = styled.div`
  scroll-snap-align: start;
  scroll-snap-stop: always;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialDetails = styled.div`
  position: absolute;
  width: 55%;
  height: 90%;
  right: 5%;
  display: flex;
  align-items: center;
  justify-content: center;

  .socialhead {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    position: relative;
    width: 90vw;
    height: 75vh;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 3vw;

    .socialhead {
      display: block;
      margin-bottom: 10%;
      font-size: 8vw;
    }
  }

  @media only screen and (max-width: 769px) and (max-height: 420px) {
    .socialhead {
      display: none;
    }
  }
`;
const SocialHandles = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  svg {
    color: #181818;
  }

  .twitter:hover {
    background-color: rgb(29, 155, 240) !important;
    svg {
      color: #f2f2f2;
    }

    a {
      :active {
        color: #f2f2f2;
      }

      :visited {
        color: #f2f2f2;
      }
    }
  }

  .facebook:hover {
    background-color: #4267b2 !important;
    svg {
      color: #f2f2f2;
    }

    a {
      :active {
        color: #f2f2f2;
      }

      :visited {
        color: #f2f2f2;
      }
    }
  }

  .instagram:hover {
    background: #d6249f;
    background: radial-gradient(
      circle at 30% 107%,
      #fdf497 0%,
      #fdf497 5%,
      #fd5949 45%,
      #d6249f 60%,
      #285aeb 90%
    );
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.25);

    svg {
      color: #f2f2f2;
    }

    a {
      :active {
        color: #f2f2f2 !important;
      }

      :visited {
        color: #f2f2f2 !important;
      }
    }
  }

  .github:hover {
    background-color: #5d5f71 !important;
    svg {
      color: #f2f2f2;
    }

    a {
      :active {
        color: #f2f2f2 !important;
      }

      :visited {
        color: #f2f2f2 !important;
      }
    }
  }

  .telephone:hover {
    background-color: #399e5a !important;
    svg {
      color: #f2f2f2;
    }
    a {
      :active {
        color: #f2f2f2 !important;
      }

      :visited {
        color: #f2f2f2 !important;
      }
    }
  }

  .mail:hover {
    background: #2193b0;
    background: -webkit-linear-gradient(to right, #6dd5ed, #2193b0);
    background: linear-gradient(to right, #6dd5ed, #2193b0);

    svg {
      color: #f2f2f2;
    }

    a {
      :active {
        color: #f2f2f2 !important;
      }

      :visited {
        color: #f2f2f2;
      }
    }
  }

  @media only screen and (max-width: 769px) and (max-height: 420px) {
    padding-bottom: 5%;
  }
`;

const SocialList = styled.div`
  font-size: 3rem;
  color: #181818;
  background-color: #f2f2f2 !important;
  width: 10%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 2%;
  cursor: pointer;

  a {
    :active {
      color: #181818;
    }

    :visited {
      color: #181818;
    }
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :hover {
    transform: scale(1.3);
    transition: transform 0.5s ease-in-out;
  }

  @media only screen and (max-width: 768px) {
    padding: 5vw;

    svg {
      font-size: 10vw;
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 979px) {
    padding: 2.5vw;

    svg {
      font-size: 5vw;
    }
  }

  @media only screen and (min-width: 980px) {
    padding: 2.5vw 4vw;

    svg {
      font-size: 5vw;
    }
  }
`;

export { SocialDetails, SocialHandles, SocialList, SocialStyle };
