import css from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
    const { followers, views, likes } = stats;
  
    return (
        <div className={`${css.profile}`}>
        <div className={`${css.description}`}>
          <div className={`${css.profileAvatar}`}>
            <img
            src={avatar}
            alt={tag}
            className={`${css.avatar}`}
          />
          </div>
          <p className="name">{username}</p>
          <p className="tag">{tag}</p>
          <p className="location">{location}</p>
        </div>
      
        <ul className="stats">
          <li>
            <span className="label">Followers</span>
            <span className="quantity">{followers}</span>
          </li>
          <li>
            <span className="label">Views</span>
            <span className="quantity">{views}</span>
          </li>
          <li>
            <span className="label">Likes</span>
            <span className="quantity">{likes}</span>
          </li>
        </ul>
      </div>
    );
  };

  export default Profile;