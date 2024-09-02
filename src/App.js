import React, { useState } from "react";
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
} from "mdb-react-ui-kit";

export default function App() {
  const [openNavColor, setOpenNavColor] = useState(false);
  const [openNavColorSecond, setOpenNavColorSecond] = useState(false);
  const [openNavColorThird, setOpenNavColorThird] = useState(false);

  const [showBasic, setShowBasic] = useState(false);
  return (
    <>
      <MDBNavbar expand="lg" dark bgColor="dark">
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
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse open={openNavColorSecond} navbar id="navbarColor02">
            <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
              <MDBNavbarItem className="active">
                <MDBNavbarLink aria-current="page" href="#">
                  LOE
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">GAME</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">NEWS</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">ABOUT US</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

      <br />

      <header>
        <div
          className="p-5 text-center bg-video"
          style={{
            position: "relative",
            height: "400px",
            overflow: "hidden",
          }}
        >
          <iframe
            title="video"
            src="https://www.youtube.com/watch?v=MLzUcXShQ9Q"
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
            <div className="text-white">
              <h1 className="mb-3">LEAGUE OF ENTREPRENEURS</h1>
              <MDBBtn
                tag="a"
                outline
                size="lg"
                style={{
                  backgroundColor: "purple",
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

      <MDBFooter
        className="bg-dark text-center text-white"
        style={{ position: "absolute", bottom: 0, width: "100%" }}
      >
        <MDBContainer className="p-4 pb-0">
          <section className="mb-4">
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="twitter" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <MDBIcon fab icon="instagram" />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            ></MDBBtn>
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
