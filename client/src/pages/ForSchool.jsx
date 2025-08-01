import CoursesPicture from "../assets/images/robo_4.png";
import Block_1 from "../assets/images/block_1.jpg";
import Block_2 from "../assets/images/block_2.jpg";
import Block_3 from "../assets/images/block_3.jpg";
import Block_4 from "../assets/images/block_4.jpg";
import Block_5 from "../assets/images/block_5.jpg";
import close from "../assets/images/close.png";
import kits from "../assets/images/kits.jpg";
import offordable from "../assets/images/affordable.jpg";
import marketing from "../assets/images/market.png";
import {motion} from 'framer-motion'
import { useState } from "react";
function ForSchool() {
    const [name,setName]=useState(null);
    const [mail,setMail]=useState(null);
    const [message,setMessage]=useState(null)
    const [showForm, setShowForm] = useState(false);
  
  
    function sendWhatsAppMessage() {
      if (!name || !mail || !message) {
        alert("Please fill in all fields.");
        return;
      }
      let whatsappMessage = `Hello, my name is ${name}.%0AMy email is ${mail}.%0AI am interested in knowing more details.%0A%0AMessage: ${message}%0A%0ALooking forward to your response.%0AThank you!`;
      let whatsappURL = `https://wa.me/${9346813383}?text=${whatsappMessage}`;
      window.open(whatsappURL, "_blank");
    }
    return(
    <div className="ForSchool">
      <div className="container">
          <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration:1}}
                        viewport={{ once: true, amount: 0.2 }}
                      >
        <div className="forSchoolIntro">
        <div className="container-title">
          <h1>Transform Learning with ExpressSpark</h1>
        </div>

        <div className="container-text">
          <p>
            <span style={{color:"orangered",fontWeight:"700",fontSize:"21px"}}>Bringing Future-Ready Education</span> to Your Institution. At
            ExpressSpark, we seamlessly integrate cutting-edge STEAM education
            (Science, Technology, Engineering, Arts, and Mathematics) into
            school curriculums without adding extra workload to your staff.
          </p>
        </div>
      
  <button className="enquiry-now" onClick={()=>setShowForm(true)}>Enquiry Now</button>

        <div className="courses-block">
            <div className="left-block">
              <h3>Courses</h3>
              <ul>
                <li>Robotics</li>
                <li>IoT (Internet of Things)</li>
                <li>Drone Technology</li>
                <li>Virtual Reality (VR)</li>
                <li>3D Printing</li>
                <li>DIY</li>
              </ul>

            </div>
            <div className="right-block">
              <img src={CoursesPicture} alt="Courses Representation" />
            </div>
          </div>
          </div>
  
          </motion.div>
          <div
                      className="contactForm"
                      style={{ display: showForm ? "" : "none" }}
                    >
                      <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                      >
                        <div
                          className="contact-form enqury-form"
                          style={{
                            background: "lightgrey",
                            position: "fixed",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%,-50%)",
                            zIndex: "5",
                          }}
                        >
                          <img
                            src={close}
                            onClick={() => setShowForm(false)}
                            style={{ position: "absolute", top: "10px", right: "10px" }}
                            width={30}
                            height={30}
                          />
                          <h3>Send Message</h3>
                          <input type="text" placeholder="Full Name" onChange={(e)=>setName(e.target.value)} />
                          <input type="mail" placeholder="Email" onChange={(e)=>setMail(e.target.value)} />
                          <textarea
                          onChange={(e)=>setMessage(e.target.value)}
                            id="w3review"
                            name="w3review"
                            placeholder="Type Your Massage"
                            style={{ resize: "none" }}
                            rows="4"
                            cols="30"
                          ></textarea>
                        
                            <button onClick={sendWhatsAppMessage}>Submit</button>
                          
                        </div>
                      </motion.div>
                    </div>
        <div className="courses">
         
          

          <div className="institution">
            <center>
              <h1 style={{margin:"30px 0px",fontSize:"35px"}}>How ExpressSpark Works with Your Institution</h1>
            </center>
            <ol>
              <div className="block_1 block">
                <div className="block_1-image" id="img-1">
                  <img src={Block_1} alt="Structured Learning" />
                </div>
                <div className="block-content" id="block-content-1">
                  <h3>Structured Learning with No Extra Burden on Schools</h3>
                  <ul>
                    <li>
                      Dedicated schedules ensure seamless integration into your
                      academic framework.
                    </li>
                    <li>
                      Hands-on, project-based learning keeps students engaged
                      and curious.
                    </li>
                    <li>
                      Programs are fully managed by our professional team,
                      ensuring smooth execution.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="block_2 block">
                <div className="block-content" id="block-content-2">
                  <h3>Expert Trainers & High-Quality Sessions</h3>
                  <ul>
                    <li>
                      Company-certified trainers conduct all sessions—no extra
                      work for school staff.
                    </li>
                    <li>
                      Teachers receive specialized training to sustain long-term
                      STEAM learning.
                    </li>
                    <li>
                      Engaging, practical lessons designed to spark innovation
                      and creativity.
                    </li>
                  </ul>
                </div>
                <div className="block_2-image" id="img-2">
                  <img
                    src={Block_2}
                    alt="Expert Trainers & High-Quality Sessions"
                  />
                </div>
              </div>

              <div className="block_3 block">
                <div className="block_3-img" id="img-1">
                  <img
                    src={Block_3}
                    alt="Year-Round Workshops & Awareness Programs"
                  />
                </div>
                <div className="block-content" id="block-content-1">
                  <h3>Year-Round Workshops & Awareness Programs</h3>
                  <ul>
                    <li>
                      Specialized awareness programs introduce students to
                      cutting-edge technologies.
                    </li>
                    <li>
                      Interactive workshops keep students inspired and informed
                      about emerging fields.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="block_4 block">
                <div className="block-content" id="block-content-2">
                  <h3>Exciting Competitions & Challenges</h3>
                  <ul>
                    <li>
                      Category-wise competitions encourage innovation at
                      different learning levels.
                    </li>
                    <li>
                      Develops teamwork, critical thinking, and problem-solving
                      skills.
                    </li>
                    <li>
                      Recognizing & rewarding top performers with certifications
                      and prizes.
                    </li>
                  </ul>
                </div>
                <div className="block_4-image" id="img-2">
                  <img src={Block_4} alt="Exciting Competitions & Challenges" />
                </div>
              </div>

              <div className="block_5 block">
                <div className="block_5-image" id="img-1">
                  <img src={Block_5} alt="Certification for Every Student" />
                </div>
                <div className="block-content" id="block-content-1">
                  <h3>Certification for Every Student</h3>
                  <ul>
                    <li>
                      Each student receives a certification, adding value to
                      their academic journey.
                    </li>
                    <li>
                      Recognized credentials that enhance their future academic
                      and career prospects.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="block_6 block">
                <div className="block-content" id="block-content-2">
                  <h3>Complete Marketing & Branding Support for Schools</h3>
                  <ul>
                    <li>
                      We provide full marketing assistance to promote STEAM
                      learning at your institution.
                    </li>
                    <li>
                      Custom-designed tech-based templates, posters, and digital
                      materials for promotion.
                    </li>
                    <li>
                      Help in showcasing your institution’s commitment to modern
                      education to parents and stakeholders.
                    </li>
                  </ul>
                </div>
                <div className="block_6-image" id="img-2">
                  <img
                    src={marketing}
                    alt="Complete Marketing & Branding Support for Schools"
                  />
                </div>
              </div>

              <div className="block_7 block">
                <div className="block_7-image" id="img-1">
                  <img
                    src={kits}
                    alt="High-Quality Learning Kits for Practical Experience"
                  />
                </div>
                <div className="block-content" id="block-content-1">
                  <h3>High-Quality Learning Kits for Practical Experience</h3>
                  <ul>
                    <li>
                      Students receive top-quality, pre-designed kits to enhance
                      hands-on learning.
                    </li>
                    <li>
                      Carefully crafted kits ensure an engaging and immersive
                      learning experience.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="block_8 block">
                <div className="block-content" id="block-content-2">
                  <h3>Affordable Yet Premium Experience</h3>
                  <ul>
                    <li>
                      Experience world-class STEAM learning at an affordable
                      cost.
                    </li>
                    <li>
                      Premium training, advanced learning kits, certification,
                      and full marketing support—all at minimal investment.
                    </li>
                  </ul>
                </div>
                <div className="block_8-image" id="img-2">
                  <img
                    src={offordable}
                    alt="Affordable Yet Premium Experience"
                  />
                </div>
              </div>
            </ol>
          </div>
        </div>

        <div className="why-choose">
          <h3>Why Schools Choose ExpressSpark?</h3>
          <ul>
            <li>No extra workload on teachers or staff.</li>
            <li>Industry-aligned curriculum for future-ready learning.</li>
            <li>
              Dedicated sessions that engage and impress students & parents.
            </li>
            <li>Enhances school reputation as a leader in modern education.</li>
            <li>
              Affordable pricing with premium-quality learning and certification
              for students.
            </li>
          </ul>
          <p className="footer-forSchool">
            🚀 Let’s make your institution a center for innovation and future
            skills!
            <br />
            Book a meeting today and explore how ExpressSpark can transform
            education at your school.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ForSchool;
