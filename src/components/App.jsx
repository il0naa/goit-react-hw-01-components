import Profile from "./Profile/Profile";
import user from "../data/user.json";

export const App = () => {
  return (
    <div className="container">
      <Profile
          avatar={user.avatar}
          tag={user.tag}
          username={user.username}
          location={user.location}
          stats={user.stats}
      />
    </div>
  );
};
