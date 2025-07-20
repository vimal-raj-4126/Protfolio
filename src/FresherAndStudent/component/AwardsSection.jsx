import '../../FresherAndStudent/css/component/AwardsSection.css';
import award1 from '../assets/award1.png';
import award2 from '../assets/award1.png'; // Use different image

const awards = [
  {
    image: award1,
    title: "Best Developer",
    rank: "1st Place",
    year: "2023",
  },
  {
    image: award2,
    title: "Hackathon Winner",
    rank: "2nd Place",
    year: "2022",
  },
  {
    image: award2,
    title: "Hackathon Winner",
    rank: "2nd Place",
    year: "2022",
  },
];

const AwardsSection = () => {
  return (
    <div className="awards-section">
      <h2 className="awards-heading">Awards & Achievements</h2>
      <div className="awards-list">
        {awards.map((award, index) => (
          <div className="award-item" key={index}>
            <img src={award.image} alt={award.title} className="award-img-left" />
            <div className="award-info">
              <h3 className="award-title">{award.title}</h3>
              <p className="award-rank">{award.rank}</p>
              <p className="award-year">{award.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardsSection;
