import { useNavigate } from "react-router-dom";
import "./directory-item.styles.scss";

const DirectoryItem = ({ title, imageUrl, routes }) => {
  const navigate = useNavigate();
  const navigateHandler = () => navigate(routes);
  return (
    <div className="directory-item-container" onClick={navigateHandler}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="body">
        <h2>{title}</h2>
        <p>SHOP NOW</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
