import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCarousel,
  MDBCarouselItem,
  MDBFooter,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import image2 from "../image2.jpg";
import image3 from "../image3.jpg";
import image4 from "../image4.jpg";
import image5 from "../image5.jpg";
import video from "../video.mp4";

const Home = () => {
  return (
    <>
      <header>
        <div
          className="p-5 text-center bg-video"
          style={{
            position: "relative",
            height: "600px",
            overflow: "hidden",
          }}
        >
          <video
            autoPlay
            loop
            muted
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: "translate(-50%, -50%)",
              zIndex: -1,
            }}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div
            className="mask"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          ></div>

          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white" style={{ zIndex: 3 }}>
              <h1 className="mb-3">LEAGUE OF ENTREPRENEURS</h1>
              <MDBBtn
                tag="a"
                outline
                size="lg"
                style={{
                  backgroundColor: "plum",
                  color: "black",
                  border: 0,
                }}
              >
                PLAY FOR FREE
              </MDBBtn>
            </div>
          </div>
        </div>
      </header>

     <MDBCard
        id="about-section"
        style={{ backgroundColor: "plum", borderRadius: 0, marginBottom: 0 }}
      >
        <MDBRow className="g-0">
          <MDBCol md="6">
            <MDBCardBody>
              <MDBCardTitle
                id="cardTitle"
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  color: "#4A148C" /* Rich purple color */,
                  textAlign: "center",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  textShadow: "4px 4px 0px black " /* Subtle text shadow */,
                }}
              >
                WE ARE LOE
              </MDBCardTitle>
              <MDBCardText
                style={{
                  textAlign: "center",
                  fontSize: "1.2rem",
                  color: "#333",
                  lineHeight: "1.6",

                  margin: "20px 0",
                }}
              >
                "League of Entrepreneurs" - A place where every player is able
                to delve into the entrepreneurial world by choosing their
                preferred business venture. Whether it's running a software
                company, managing a restaurant, or owning a cake shop or bakery,
                every player virtually develops their business idea. Our vision
                is for every player to not only learn about their chosen
                industry but also to actively develop the skills and knowledge
                required for success in their chosen field.
              </MDBCardText>
            </MDBCardBody>{" "}
          </MDBCol>
          <MDBCol md="4">
            <MDBCarousel
              showIndicators
              style={{ borderStyle: "solid", borderColor: "white" }}
            >
              <MDBCarouselItem itemId={2}>
                <img src={image2} className="d-block w-100" alt="..." />
              </MDBCarouselItem>
              <MDBCarouselItem itemId={3}>
                <img src={image3} className="d-block w-100" alt="..." />
              </MDBCarouselItem>
              <MDBCarouselItem itemId={4}>
                <img src={image4} className="d-block w-100" alt="..." />
              </MDBCarouselItem>
              <MDBCarouselItem itemId={5}>
                <img src={image5} className="d-block w-100" alt="..." />
              </MDBCarouselItem>
            </MDBCarousel>
          </MDBCol>
        </MDBRow>
      </MDBCard>
      <MDBFooter className="bg-dark text-center text-white">
        <div
          className="text-center p-1"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            marginTop: "20px",
            fontSize: "30px",
          }}
        >
          FOLLOW US:
        </div>

        <MDBContainer className="p-4 pb-0">
          <section className="mb-4">
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://www.facebook.com/people/SoTeen-Productions/100092645203329/"
              role="button"
            >
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://www.youtube.com/@leagueOfentrepreneurs"
              role="button"
            >
              <MDBIcon fab icon="youtube" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="https://www.instagram.com/leagueofentrepreneursbg/"
              role="button"
            >
              <MDBIcon fab icon="instagram" />
            </MDBBtn>
          </section>
        </MDBContainer>

        <div
          className="text-center p-3"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          }}
        >
          © 2024 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </MDBFooter>
    </>
  );
};

export default Home;
