import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarBrand,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
} from "mdb-react-ui-kit";

const Navbar = () => {
  const [openNavColorSecond, setOpenNavColorSecond] = useState(false);

  return (
    <MDBNavbar expand="lg" dark bgColor="dark" style={{ marginBottom: 0 }}>
      <MDBContainer fluid>
        {/* Logo visible only on large screens */}
        <MDBNavbarBrand href="#" className="d-none d-lg-block">
          <img src={logo} alt="Logo" style={{ height: "40px", marginRight: "10px" }} />
        </MDBNavbarBrand>

        {/* Toggler icon */}
        <MDBNavbarToggler
          type="button"
          data-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setOpenNavColorSecond(!openNavColorSecond)}
        >
          <img src={logo} alt="Logo" style={{ height: "40px", marginRight: "10px" }} />
        </MDBNavbarToggler>

        <MDBCollapse open={openNavColorSecond} navbar id="navbarColor02">
          <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
            <MDBNavbarItem className="d-none d-lg-block">
              <MDBNavbarLink
                aria-current="page"
                href="#"
                style={{ fontWeight: "bold", fontSize: "20px" }}
              >
                LOE
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem className="mx-auto d-lg-none text-center">
              <MDBNavbarLink
                aria-current="page"
                href="#"
                style={{ fontWeight: "bold", fontSize: "20px" }}
              >
                LOE
              </MDBNavbarLink>
            </MDBNavbarItem>

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
                  fontSize: "18px",
                }}
              >
                ABOUT US
              </MDBNavbarLink>
            </MDBNavbarItem>

            {/* Achievements Link */}
            <MDBNavbarItem className="mx-auto text-center">
              <MDBNavbarLink
                href="/achievements"
                className="btn btn-primary"
                style={{
                  padding: "10px 20px",
                  borderRadius: "5px",
                  backgroundColor: "transparent",
                  border: "0px solid",
                  textDecoration: "none",
                  boxShadow: "none",
                  fontSize: "18px",
                }}
              >
                ACHIEVEMENTS
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Navbar;
