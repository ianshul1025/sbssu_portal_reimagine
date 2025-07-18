import "./TopNews.css";

const newsItems = [
  {
    image: "https://www.sbssugsp.ac.in/assets/images/slider/sliderimage1-new.jpg",
    title: "Campus Placement Drive 2025",
    link: "/news/placement-drive-2025",
  },
  {
    image: "https://www.sbssugsp.ac.in/assets/images/slider/sliderimage2.jpg",
    title: "Research Seminar by Dr. Sharma",
    link: "/news/research-seminar-sharma",
  },
  {
    image: "https://www.sbssugsp.ac.in/assets/images/slider/sliderimage4.jpg",
    title: "Annual Sports Meet Highlights",
    link: "/news/sports-meet-2025",
  },
];

const TopNews = () => {
  const doubled = [...newsItems, ...newsItems]; // duplicate for seamless scroll

  return (
    <div className="top-news-section">
      <h2 className="news-heading">Top News</h2>
      <div className="news-marquee">
        <div className="news-track">
          {doubled.map((news, index) => (
            <a href={news.link} key={index} className="news-card">
              <img src={news.image} alt={`news-${index}`} className="news-img" />
              <p className="news-title">{news.title}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopNews;
