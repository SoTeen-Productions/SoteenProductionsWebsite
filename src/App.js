import React, { useState } from "react";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import logo from "./logo.svg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import image4 from "./image4.jpg";
import image5 from "./image5.jpg";
import {
  MDBFooter,
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
  MDBBtn,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBCarousel,
  MDBCarouselItem,
} from "mdb-react-ui-kit";

export default function App() {
  const [openNavColorSecond, setOpenNavColorSecond] = useState(false);

  return (
    <>
      <MDBNavbar expand="lg" dark bgColor="dark" style={{ marginBottom: 0 }}>
        <MDBContainer fluid>
          <MDBNavbarBrand href="#"></MDBNavbarBrand>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenNavColorSecond(!openNavColorSecond)}
          >
            <MDBNavbarItem>
              <img
                src={logo}
                alt="Logo"
                style={{ height: "40px", marginRight: "10px" }}
              />
            </MDBNavbarItem>
          </MDBNavbarToggler>
          <MDBCollapse open={openNavColorSecond} navbar id="navbarColor02">
            <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
              <MDBNavbarItem className="d-none d-lg-block">
                {" "}
                <img
                  src={logo}
                  alt="Logo"
                  style={{ height: "40px", marginRight: "10px" }}
                />
              </MDBNavbarItem>
              <MDBNavbarItem className="mx-auto d-lg-none text-center">
                <MDBNavbarLink
                  aria-current="page"
                  href="#"
                  style={{ fontWeight: "bold" }}
                >
                  LOE
                </MDBNavbarLink>
              </MDBNavbarItem>
              {/* LOE on Larger Screens (Hidden) */}
              <MDBNavbarItem className="d-none d-lg-block">
                <MDBNavbarLink
                  aria-current="page"
                  href="#"
                  style={{ fontWeight: "bold" }}
                >
                  LOE
                </MDBNavbarLink>
              </MDBNavbarItem>{" "}
              <MDBNavbarItem>
                <MDBNavbarLink
                  href="#about-section"
                  className="btn btn-primary"
                  style={{
                    padding: "10px 20px",
                    borderRadius: "5px",
                    backgroundColor: "transparent",
                    border: "0px solid",
                    textDecoration: "none",
                    boxShadow: "none",
                  }}
                >
                  ABOUT US
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>{" "}
      <header>
        <div
          className="p-5 text-center bg-video"
          style={{
            position: "relative",
            height: "600px",
            overflow: "hidden",
          }}
        >
          <iframe
            title="video"
            src="https://drive.google.com/file/d/1YPnq5rOHaXpqf1gD9bGBwXWGACuN2q9u/preview"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "100%",
              height: "100%",
              transform: "translate(-50%, -50%)",
              zIndex: -1,
              pointerEvents: "none",
            }}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>

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
      <MDBFooter
        className="bg-dark text-center text-white"
        style={{
          position: "relative",
          bottom: 0,
          width: "100%",
          marginTop: 0,
        }}
      >
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
}
