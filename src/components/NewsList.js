import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NewsList = ({ dark }) => {
  const [data, setData] = useState([]);
  const [number, setNumber] = useState(4);

  useEffect(() => {
    async function fetchData(url) {
      const res = await fetch(`${url}`);
      const data = await res.json();
      setData(data);
    }
    fetchData("/static/service.json");

    setTimeout(() => {
      let VanillaTilt = require("vanilla-tilt");
      VanillaTilt.init(document.querySelectorAll(".tilt-effect"), {
        maxTilt: 6,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        speed: 500,
        transition: true,
      });
    }, 1000);
  }, []);

  const handleClick = () => {
    if (number === 4) setNumber(data.length);
    else setNumber(4);
  };

  return (
    <div className="dizme_tm_section" id="news">
      <div className="dizme_tm_services" style={{ paddingTop: "0" }}>
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Some News</span>
            <h3>What is on the News</h3>
            <p>
              Over the years, I have tried to share my knowledge and my
              expertises have been acknowledged through various news articles.
              Have a look...
            </p>
          </div>
          <div className="service_list">
            <ul>
              {data &&
                data.slice(0, number).map(
                  (data, i) =>
                    data && (
                      <li
                        className={`wow ${
                          (i * 1) % 2 === 0 ? "fadeInLeft" : "fadeInRight"
                        }`}
                        data-wow-duration="1s"
                        key={i}
                        onClick={() => onClick(i)}
                      >
                        <Link
                          href={data.link}
                          passHref
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <div className="list_inner tilt-effect c-pointer">
                            <span className="icon">
                              <Image
                                src={"/img/news/news.png"}
                                layout="fill"
                                alt="icon"
                              />
                            </span>
                            <h5>{data.title}</h5>
                          </div>
                        </Link>
                      </li>
                    )
                )}
            </ul>
            <div
              onClick={handleClick}
              className="dizme_tm_button"
              style={{ float: "right" }}
            >
              <a className="anchor" href="#news" style={{ marginTop: "30px" }}>
                <span>{number === 4 ? "Show All!" : "Show Less!"}</span>
              </a>
            </div>
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
export default NewsList;
