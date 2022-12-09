import Image from "next/image";
import Counter from "./Counter";
const About = ({ dark }) => {
  return (
    <div className="dizme_tm_section" id="about">
      <div className="dizme_tm_about">
        <div className="container">
          <div className="wrapper">
            <div className="left">
              <div className="image">
                <div style={{ borderRadius: "50%", overflow: "hidden" }}>
                  <Image
                    src={`/img/slider/headshot.jpg`}
                    alt="image"
                    width={600}
                    height={600}
                  />
                </div>
                <div className="numbers year">
                  <div className="wrapper">
                    <h3>
                      <Counter end={8} />
                    </h3>
                    <span className="name">
                      Years of
                      <br />
                      Teaching
                    </span>
                  </div>
                </div>
                <div className="numbers project">
                  <div className="wrapper">
                    <h3>
                      <Counter end={21} />
                    </h3>
                    <span className="name">Publications</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="title wow fadeInUp" data-wow-duration="1s">
                <span>{`I'm a Professor`}</span>
                <h3>I teach my students about advanced computer topics!</h3>
              </div>
              <div className="text wow fadeInUp" data-wow-duration="1s">
                <p>
                  I&apos;m an Associate Professor in the Department of Computer
                  Science and (by courtesy) the Department of Electrical and
                  Computer Engineering at the University of Illinois at
                  Urbana-Champaign. I run the Data Driven Design Group, where my
                  students and I leverage data mining and machine learning to
                  address the central challenge of creating good user
                  experiences: tying design decisions to desired outcomes. I
                  received my BS and PhD from the Department of Computer Science
                  at Stanford University. Based on my dissertation work, I
                  co-founded Apropose, Inc., a data-driven design startup backed
                  by Andreessen Horowitz and New Enterprise Associates.
                </p>
              </div>
              <div
                className="dizme_tm_button wow fadeInUp"
                data-wow-duration="1s"
              >
                <a className="anchor" href="#contact">
                  <span>Hire Me</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <Image src="/img/brushes/about/1.png" alt="image" layout="fill" />
        </div>
        <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
          <Image src="/img/brushes/about/2.png" alt="image" layout="fill" />
        </div>
      </div>
    </div>
  );
};
export default About;
