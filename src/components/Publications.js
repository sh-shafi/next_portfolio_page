import Image from "next/image";
import { useEffect, useState } from "react";
import { aTagClick } from "../utilits";

const Publications = () => {
  const [data, setData] = useState([]);
  const [number, setNumber] = useState(6);

  useEffect(() => {
    async function fetchData(url) {
      const res = await fetch(`${url}`);
      const data = await res.json();
      setData(data);
    }
    fetchData("/static/publications.json");
    aTagClick();
  }, []);

  const handleClick = () => {
    if (number === 6) setNumber(data.length);
    else setNumber(6);
  };

  return (
    <div className="dizme_tm_section" id="publications">
      <div className="dizme_tm_news">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>My publications</span>
            <h3>Our Recent Updates, Blogs, Tips, Tricks & More!</h3>
          </div>
          <div className="news_list">
            <ul>
              {data &&
                data.slice(0, number).map((blog, i) => (
                  <li className="wow fadeInUp" data-wow-duration="1s" key={i}>
                    <div className="list_inner">
                      <div className="image">
                        <Image
                          src="/img/thumbs/42-29.jpg"
                          alt="image"
                          width={700}
                          height={450}
                          onClick={() => {
                            setPopupData(blog && blog);
                            setPopup(true);
                          }}
                        />
                        <div
                          className="main"
                          data-img-url={blog && `/img/news/${i + 1}.png`}
                          style={{
                            backgroundImage: `url("/img/news/${i + 1}.png")`,
                          }}
                        />
                        {blog.achievement && (
                          <div className="date">
                            <span>{blog.achievement}</span>
                          </div>
                        )}
                      </div>
                      <div
                        className="details"
                        style={{
                          height: `100px`,
                          marginBottom: "50px",
                        }}
                      >
                        <h3 className="title">
                          <a href={blog.link}>{blog.title}</a>
                        </h3>
                        <p>{blog.writers}</p>
                        <p style={{ fontStyle: "italic", color: "red" }}>
                          {blog.meta}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
            <div onClick={handleClick} className="dizme_tm_button">
              <a
                className="anchor"
                href="#publications"
                style={{ marginTop: "30px" }}
              >
                <span>{number === 6 ? "Show All!" : "Show Less!"}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="brush_1 wow zoomIn" data-wow-duration="1s">
          <Image src="/img/brushes/news/1.png" alt="image" layout="fill" />
        </div>
        <div className="brush_2 wow zoomIn" data-wow-duration="1s">
          <Image src="/img/brushes/news/2.png" alt="image" layout="fill" />
        </div>
      </div>
    </div>
  );
};
export default Publications;
