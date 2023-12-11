import FriendListItem from './FriendListItem'
import css from 'components/FriendList/FriendList.module.css'
  
const FriendList = ({ friends }) => (
    <ul className={`${css.friendList}`}>
      {friends.map(({ id, ...friend }) => (
        <FriendListItem key={id} {...friend} />
      ))}
    </ul>
);
  
export default FriendList;