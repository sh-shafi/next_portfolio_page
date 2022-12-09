import Image from "next/image";

const Education = ({ dark }) => {
  return (
    <div
      className="dizme_tm_section"
      id="education"
      style={{ marginTop: "50px" }}
    >
      <div className="dizme_tm_services" style={{ paddingTop: "0" }}>
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Education</span>
            <h3>
              <div
                style={{
                  color: "red",
                  fontWeight: "800",
                }}
              >
                Stanford University
              </div>
              Stanford CA
            </h3>
            <p>2004 - 2014</p>
          </div>
          <div className="service_list">
            <ul>
              <li
                className={`wow fadeInLeft`}
                data-wow-duration="1s"
                key={1}
                onClick={() => onClick(i)}
              >
                <div>
                  <div className="list_inner tilt-effect c-pointer">
                    <span className="icon">
                      <Image
                        src={"/img/cv/school.png"}
                        layout="fill"
                        alt="icon"
                      />
                    </span>
                    <h4>PhD in Computer Science, January 2014</h4>
                    <h5>
                      <span style={{ fontWeight: "800" }}>Dissertation: </span>{" "}
                      Design Mining the Web
                    </h5>
                    <p>
                      <span style={{ fontWeight: "800" }}>Committee:</span>{" "}
                      Scott R. Klemmer (advisor), Pat Hanrahan, Terry Winograd,
                      Michael Bernstein
                    </p>
                  </div>
                </div>
              </li>
              <li
                className={`wow fadeInRight`}
                data-wow-duration="1s"
                key={2}
                onClick={() => onClick(i)}
              >
                <div>
                  <div className="list_inner tilt-effect c-pointer">
                    <span className="icon">
                      <Image
                        src={"/img/cv/school.png"}
                        layout="fill"
                        alt="icon"
                      />
                    </span>
                    <h4>BS in Computer Science with Honors, June 2007</h4>
                    <h5>
                      <span style={{ fontWeight: "800" }}>Thesis: </span> Volume
                      Preserving Sinusoidal Muscles for Surface Skinning
                    </h5>
                    <p>
                      <span style={{ fontWeight: "800" }}>Advisor: </span> Ron
                      Fedkiw
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <Image src="/img/brushes/service/5.png" alt="image" layout="fill" />
        </div>
        <div className="brush_2 wow zoomIn" data-wow-duration="1s">
          <Image src="/img/brushes/service/6.png" alt="image" layout="fill" />
        </div>
      </div>
    </div>
  );
};
export default Education;
