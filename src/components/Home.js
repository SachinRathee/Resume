import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

function Home() {
  const details = [
    {
      university: "Lovely Professional University",
      course: "Bachelor of Computer Sience and Engineering",
      specialization: "Specialization: Android App Development",
      percentage: "CGPA: 8.9/10.0",
      year: "June 2015 - June 2019",
    },
    {
      university: "Kendriya Vidyalaya Sangathan",
      course: "10th",
      specialization:
        "Subjects: English, Hindi, Maths, Science, Social Science",
      percentage: "CGPA: 7.4/10.0",
      year: "March 2012 - March 2013",
    },
    {
      university: "Kendriya Vidyalaya Sangathan",
      course: "12th",
      specialization:
        "Subjects: English, Maths, Computer Science, Physics, Chemistry",
      percentage: "Percentage: 74.4/100 ",
      year: "March 2014 - March 2015",
    },
  ];
  return (
    <>
      <section id="section1">
        <h1> Sachin Rathee</h1>
        <div className="phoneNo">
          <strong>Mobile No.: </strong>+91 1234567890
        </div>
        <div className="email">
          <strong>Email: </strong>example@gmail.com
        </div>
        <p>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed to
          an unknown typesetter in the 15th century who is thought to have
          scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
          type specimen book.
        </p>

        <div className="social-media">
          <ul>
            <li className="icons">
              <FaFacebookF />
            </li>
            <li className="icons">
              <FaInstagram />
            </li>
            <li className="icons">
              <FaTwitter />
            </li>
            <li className="icons">
              <FaGithub />
            </li>
          </ul>
        </div>
      </section>
      <section id="section2">
        <h1>Experience</h1>
        <div className="designation">Associate Software Engineer</div>
        <div className="company-name">Robert Bosch</div>
        <p>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed to
          an unknown typesetter in the 15th century who is thought to have
          scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
          type specimen book.
        </p>
        <div className="work-time">January 2019 - Present</div>
      </section>
      <section id="section3">
        <h1>Education</h1>
        {details.map((items, index) => (
          <div className="education" key={index}>
            <div className="university-name">{items.university}</div>
            <div className="course-name">{items.course}</div>
            <div className="details">
              <div className="specialization">{items.specialization}</div>
              <div className="percentage">{items.percentage}</div>
            </div>
            <div className="work-time">{items.year}</div>
          </div>
        ))}
      </section>
      <section id="section4">
        <h1>Skills</h1>
        <div className="subtitle">Programming Languages and Tools</div>
        <ul>
          <li>C Programming</li>
          <li>Java</li>
          <li>Android (XML)</li>
          <li>React JS</li>
          <li>React Native</li>
        </ul>
      </section>
    </>
  );
}

export default Home;
