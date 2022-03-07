import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="Navigation" id="Navigation">
      <Link className="AllNav" to="/">All Articles</Link>
      <Link className="CodingNav" to="/articles/topics/coding">Coding</Link>
      <Link className="FootballNav" to="/articles/topics/football">Football</Link>
      <Link className="Cooking Nav" to="/articles/topics/cooking">Cooking</Link>
    </div>
  );
}