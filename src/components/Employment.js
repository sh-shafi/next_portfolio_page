import { useEffect, useState } from "react";
import Image from "next/image";
const Process = ({ dark }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData(url) {
      const res = await fetch(`${url}`);
      const data = await res.json();
      setData(data);
    }
    fetchData("/static/employment.json");
  }, []);

  return (
    <div className="dizme_tm_section" id="process">
      <div className="dizme_tm_process">
        <div className="container">
          <div
            className="dizme_tm_main_title"
            data-align="center"
            style={{ marginBottom: "50px" }}
          >
            <span>Employment</span>
            <h3>My times as a teacher and a researcher.</h3>
          </div>
          <div className="list">
            <ul>
              {data &&
                data.map((data, i) => (
                  <li className="wow fadeInUp" data-wow-duration="1s" key={i}>
                    <Image
                      src={data.image}
                      width={125}
                      height={120}
                      alt="icon"
                    />
                    <div className="list_inner">
                      <div className="icon"></div>
                      <div className="title">
                        <h3>{data.title}</h3>
                      </div>
                      <div className="text">
                        <h6>{data.place}</h6>
                        <p style={{ color: "red" }}>{data.time}</p>
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
