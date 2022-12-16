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
    fetchData("/static/awards.json");
  }, []);

  return (
    <div className="dizme_tm_section" style={{ marginBottom: "60px" }}>
      <div>
        <div className="container">
          <div
            className="dizme_tm_main_title"
            data-align="center"
            style={{ marginBottom: "50px" }}
          >
            <span>Awards</span>
            <h3>
              Some awards that I have achieved that symbolizes my
              accomplishments!
            </h3>
          </div>
          <div>
            <ul>
              {data &&
                data.map((data, i) => (
                  <li
                    key={i}
                    style={{
                      display: "inline",
                      textAlign: "center",
                    }}
                  >
                    <div className="name" style={{ marginBottom: "30px" }}>
                      <p>{data.name}</p>
                      {data.special && (
                        <p style={{ fontStyle: "italic" }}>{data.special}</p>
                      )}
                      <p style={{ color: "red" }}>{data.year}</p>
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
