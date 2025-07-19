import "./TopNews.css";

const newsItems = [
  {
    image: "https://www.sbssugsp.ac.in/assets/images/news/convocation.jpg",
    title: "8th Convocation Ceremony",
    link: "#",
  },
  {
    image: "https://www.sbssugsp.ac.in/assets/images/news/fdp.jpg",
    title: "Faculty Development Programme",
    link: "#",
  },
  {
    image: "https://www.sbssugsp.ac.in/assets/images/news/hackathon.jpg",
    title: "Hackathon Winners Announced",
    link: "#",
  },
  {
    image: "https://www.sbssugsp.ac.in/assets/images/news/sports-meet.jpg",
    title: "Annual Sports Meet",
    link: "#",
  },
];

const TopNews = () => {
  return (
    <div className="top-news-wrapper">
      <h2 className="top-news-title">Top News</h2>
      <div className="news-scroll-container">
        <div className="news-track">
          {newsItems.concat(newsItems).map((news, i) => (
            <a
              key={i}
              href={news.link}
              className="news-card"
              target="_blank"
              rel="noreferrer"
            >
              <img src={news.image} alt={news.title} />
              <div className="news-overlay">{news.title}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopNews;
