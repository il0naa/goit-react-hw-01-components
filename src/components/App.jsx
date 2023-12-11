import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import user from "../data/user.json";
import data  from "../data/data.json";

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
      <Statistics
        stats={data}
        title="Upload stats"
         />
    </div>
  );
};
