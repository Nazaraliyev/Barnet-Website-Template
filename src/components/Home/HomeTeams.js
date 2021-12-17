import React, { useState } from "react";
import img1 from "../../img/Home/Teams/Member-1.jpg";
import img2 from "../../img/Home/Teams/Member-1.jpg";
import img3 from "../../img/Home/Teams/Member-1.jpg";

function HomeTeams() {
  const [TeamMember, setTeamMember] = useState([
    {
      img: img1,
      text: "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia.",
      name: "Kristen Hagen",
      speciality: "Designer",
      sosialMedia: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        pinterest: "#",
      },
    },
    {
      img: img2,
      text: "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia.",
      name: "Kristen Hagen",
      speciality: "Designer",
      sosialMedia: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        pinterest: "#",
      },
    },
    {
      img: img3,
      text: "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia.",
      name: "Kristen Hagen",
      speciality: "Designer",
      sosialMedia: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        pinterest: "#",
      },
    },
  ]);
  return (
    <section id="home-teams">
      <div className="container">
        <div className="h2-header-center d-flex justify-content-center">
          <h2>
            Creative <br /> Team Members
          </h2>
        </div>

        <div className="row">
          {TeamMember.map((member) => {
            return (
              <div className="col-4 home-teams-member">
                <div className="home-teams-member-img-block">
                  <img src={member.img}></img>
                  <div className="home-teams-member-content">
                  <p>{member.text}</p>
                  <div className="d-flex justify-content-center">
                      <i className="fab fa-facebook-f"></i>
                      <i className="fab fa-twitter"></i>
                      <i className="fab fa-linkedin-in"></i>
                      <i className="fab fa-pinterest"></i>
                  </div>
                  </div>
                </div>
                <div className="home-teams-member-data">
                  <h5>{member.name}</h5>
                  <span>{member.speciality}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HomeTeams;
