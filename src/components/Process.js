import { useEffect, useState } from "react";
import { fatchData } from "../utilits";
const Process = ({ dark }) => {
  const [data, setData] = useState([]);
  useEffect(async () => {
    setData(await fatchData("/static/workProcess.json"));
  }, []);
  return (
    <div className="dizme_tm_section" id="process">
      <div className="dizme_tm_process">
        <div className="container">
          <h3 className="projects">My projects!</h3>
          <div className="list">
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {data &&
                data.map((data, i) => (
                  <li className="wow fadeInUp" data-wow-duration="1s" key={i}>
                    <div>
                      <div className="icon">
                        <span>
                          <img
                            className="brush"
                            src={`img/skills/${i + 1}.png`}
                            alt="image"
                          />
                        </span>
                      </div>
                      <div className="title">
                        <h3>{data.title}</h3>
                      </div>
                      <div className="text">
                        <p>{data.dec}</p>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Process;
