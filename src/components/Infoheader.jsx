import React from "react";
import { Container } from "react-bootstrap";

const Infoheader = () => {
  return (
    <Container
      style={{
        marginTop: "120px",
        background: "red",
        width: "67%",
        display: "flex",
      }}
    >
      <h6 style={{ color: "white", marginTop: "10px" }}>
        For the be st experience use inshorts app on your smartphone
      </h6>
      <div stye={{ marginLeft: "auto" }}>
        <img
          src="https://tphmn.com/wp-content/uploads/2018/05/5847e95fcef1014c0b5e4822.png"
          alt=""
          width="100px"
        />
        <img
          src="https://about.vocaleyes.org/wp-content/uploads/2019/01/google-chplay.png"
          alt=""
          width="100px"
        />
      </div>
    </Container>
  );
};

export default Infoheader;
