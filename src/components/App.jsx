import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import user from "../data/user.json";
import data  from "../data/data.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";

export const App = () => {
  return (
    <div className="container">
      <Profile {...user} />
      <Statistics
        stats={data}
        title="Upload stats"
      />
      <FriendList
        friends={friends} 
      />
      <TransactionHistory
        items={transactions}
      />
    </div>
  );
};
