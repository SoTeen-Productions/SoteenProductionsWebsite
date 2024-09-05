
import React from "react";
import award1 from "../award1.jpg";
import award2 from "../award2.jpg";
import award3 from "../award3.jpg";
import award4 from "../award4.pdf";
import art1 from "../art1.jpg";
import art2 from "../art2.jpg";
import art3 from "../art3.jpg";
import art4 from "../art4.jpg";


import {
  MDBCarousel,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText
} from "mdb-react-ui-kit";

const Achievements = () => {

const achievements = [
       {
      title: "Публикувана статия на отбора",
      description: "Forbes отличи училищен стартъп на финала на Тийноватор...",
      link: "https://forbesbulgaria.com/2023/05/26/forbes-soteen-teenovator2022-2023/" // Add a link here
    },

    {
      title: "Награда от Volontime",
      description: "награда за финалист в национален конкурс за стартъпи",
      pdf:award4
    },
  ];
  return (
    <MDBContainer fluid style={{ minHeight: '100vh',  }}>
      <MDBRow className="justify-content-center mt-5 mb-4">
        <MDBCol md="8" className="text-center">
          <h1   style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  color: "#4A148C" /* Rich purple color */,
                  textAlign: "center",
                  textTransform: "uppercase",
                  letterSpacing: "2px",
                  textShadow: "4px 4px 0px black " /* Subtle text shadow */,
                }}>ПОСТИЖЕНИЯ</h1>
          <p className="lead text-black">
            Eто някои от открояващите ни постижения и награди, заедно с още материали от играта.
          </p>
        </MDBCol>
      </MDBRow>

      <MDBRow className="justify-content-center mb-4">
        <MDBCol md="8">
          <MDBCarousel showIndicators style={{ borderStyle: "solid", borderColor: "white" }}>
            <MDBCarouselItem itemId={1}>
              <img src={award1} className="d-block w-100" alt="Award 1" />
            </MDBCarouselItem>
            <MDBCarouselItem itemId={2}>
              <img src={award2} className="d-block w-100" alt="Award 2" />
            </MDBCarouselItem>
            <MDBCarouselItem itemId={3}>
              <img src={award3} className="d-block w-100" alt="Award 3" />
            </MDBCarouselItem>
          </MDBCarousel>
        </MDBCol>
      </MDBRow>
<MDBRow className="justify-content-center">
        {achievements.map((achievement, index) => (
          <MDBCol md="4" key={index} className="mb-4">
            <MDBCard className="text-center">
              <MDBCardBody>
                <MDBCardTitle>{achievement.title}</MDBCardTitle>
                <MDBCardText>
                  {achievement.description}
                  {achievement.link && (
                    <div className="mt-2">
                      <a href={achievement.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        Научи повече
                      </a>
                    </div>
                  )}
                  {achievement.pdf && (
                    <div className="mt-2">
                      <a href={achievement.pdf} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        Разгледай
                      </a>
                    </div>
                  )}
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        ))}
      </MDBRow>

      <MDBRow className="justify-content-center mb-4">
        <MDBCol md="8">
          <MDBCarousel showIndicators style={{ borderStyle: "solid", borderColor: "white" }}>
            <MDBCarouselItem itemId={1}>
              <img src={art1} className="d-block w-100" alt="Award 1" />
            </MDBCarouselItem>
            <MDBCarouselItem itemId={2}>
              <img src={art2} className="d-block w-100" alt="Award 2" />
            </MDBCarouselItem>
            <MDBCarouselItem itemId={3}>
              <img src={art3} className="d-block w-100" alt="Award 3" />
            </MDBCarouselItem>
           <MDBCarouselItem itemId={4}>
              <img src={art4} className="d-block w-100" alt="Award 3" />
            </MDBCarouselItem>

          </MDBCarousel>
        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
};

export default Achievements;
