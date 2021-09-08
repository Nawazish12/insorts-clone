import React, { useState, useEffect } from "react";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import { Container } from "react-bootstrap";

const DisplayData = () => {
  const [newz, setNewz] = useState([]);

  const getAllData = async () => {
    const res = await fetch("http://localhost:8000/getdata");
    const newz = await res.json();
    setNewz(newz);
    console.log(newz);
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <Container style={{ width: "69%", marginTop: "20px" }}>
      {newz.map((newzdisplay) => {
        return (
          <Card
            style={{
              boxShadow:
                "0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)",
              marginBottom: "20px",
            }}
          >
            <CardContent>
              <Grid container>
                <Grid item lg={5} md={5} sm={5} xs={12}>
                  <img
                    src={newzdisplay.url}
                    alt=""
                    height="250px"
                    width="88%"
                    style={{
                      borderRadius: 5,
                      objectFit: "cover",
                    }}
                  />
                </Grid>
                <Grid item lg={7} md={7} sm={7} xs={12}>
                  <Typography>{newzdisplay.title}</Typography>
                  <Typography>
                    <b>Short by </b>
                    {newzdisplay.author} /{" "}
                    {new Date(newzdisplay.timestamp).toLocaleDateString()}
                  </Typography>
                  <Typography className="mt-2" style={{ textAlign: "justify" }}>
                    {newzdisplay.description}
                  </Typography>
                  <Typography style={{ marginTop: "18px" }}>
                    {/* Read more at ... <a href={newzdisplay.link} target="_blank" {newzdisplay.publisher} ></a> */}
                    Read more...
                    <a
                      href={newzdisplay.link}
                      target="_blank"
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontWeight: "bold",
                      }}
                    >
                      {newzdisplay.publisher}
                    </a>
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        );
      })}
    </Container>
  );
};

export default DisplayData;
