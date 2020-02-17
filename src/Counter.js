import React from "react";
import styled from "styled-components";

// import Text from "./components/Text";

const Counter = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 998;
  max-width: 50vw;
  padding: 20px 40px;
  font-family: var(--font-primary);
  font-size: 18px;
  color: var(--color-text);

  & > p > span {
    color: var(--color-accent);
  }

  & > p > a {
    padding: 5px 12px;
    border: 1px solid var(--color-text);
    border-radius: 50px;
    margin-left: 10px;

    &:hover {
      background: red;
    }
  }

  & > p + p {
    margin-top: 5px;
  }

  @media (max-width: 896px) {
    display: none;
  }
`;

function fbShare(url, title, descr, image, winWidth, winHeight) {
  var winTop = window.innerHeight / 2 - winHeight / 2;
  var winLeft = window.innerWidth / 2 - winWidth / 2;
  window.open(
    "https://www.facebook.com/sharer/sharer.php?u=sutdmc.opensutd.org"
  );
  //   window.open(
  //     "http://www.facebook.com/sharer.php?s=100&p[title]=" +
  //       title +
  //       "&p[summary]=" +
  //       descr +
  //       "&p[url]=" +
  //       url +
  //       "&p[images][0]=" +
  //       image,
  //     "sharer",
  //     "top=" +
  //       winTop +
  //       ",left=" +
  //       winLeft +
  //       ",toolbar=0,status=0,width=" +
  //       winWidth +
  //       ",height=" +
  //       winHeight
  //   );
}

const CounterComp = ({ blockCount }) => {
  return (
    <>
      {blockCount >= 1 ? (
        <Counter>
          <p>{`${blockCount} ${blockCount > 1 ? "blocks" : "block"} mined!`}</p>
          {blockCount >= 1 ? (
            <>
              <p>
                Congratulations! You unlocked the{" "}
                <span>Better Pickaxe By Design</span>!
              </p>
              <p>
                Share your achievement:
                <a
                  id="fb-share"
                  style={{ textDecoration: "none" }}
                  type="icon_link"
                  onClick={() =>
                    fbShare(
                      "sutdmc.opensutd.org",
                      "HELLO",
                      "HELLO",
                      "http://goo.gl/dS52U",
                      520,
                      350
                    )
                  }
                  href="javascript: void(0)"
                >
                  Share
                </a>
                {/* <a
                  href="https://www.facebook.com/sharer.php?u=http%3A%2F%2Fsutdmc.opensutd.org%2F&t=CNN%26s%20website"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  F
                </a>
                <a
                  href="https://twitter.com/intent/tweet?text=Hello%20world"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  T
                </a> */}
              </p>
            </>
          ) : null}
        </Counter>
      ) : null}
    </>
  );
};

export default CounterComp;
