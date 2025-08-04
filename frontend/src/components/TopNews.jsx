import "./TopNews.css";

const newsItems = [
  {
    image: "/assets/directadmission.jpg",
    title: "Direct Admissions",
    link: "#",
  },
  {
    image: "/assets/new-admissions.jpg",
    title: "Admissions Open for 2025-26",
    link: "#",
  },
  {
    image: "/assets/craig-banks.jpg",
    title: "Prof Craig E Banks",
    link: "#",
  },
  {
    image: "/assets/governorpunjab.jpg",
    title: "Gov. Sh. Gulab Chand Kataria",
    link: "#",
  },
  {
    image: "/assets/empunjab.jpg",
    title: "Sh. Harjot Singh Bains",
    link: "#",
  },
  {
    image: "/assets/registerationsopen.jpg",
    title: "Registerations Open for 2025-26",
    link: "#",
  },
  {
    image: "/assets/startuppunjab.jpg",
    title: "Handholding Startups",
    link: "#",
  },
  {
    image: "/assets/uplcampusplacement.jpg",
    title: "Campus Placement",
    link: "#",
  },
  {
    image: "/assets/worldenvironmentday.jpg",
    title: "World Environment Day",
    link: "#",
  },
];


const TopNews = () => {
  return (
  <>
    <h2 className="top-news-title">Top News</h2>

    <div className="top-news-wrapper">
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
  </>
);

};

export default TopNews;
