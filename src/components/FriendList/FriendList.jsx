import css from 'components/FriendList/FriendList.module.css'

const FriendListItem = ({ avatar, name, isOnline }) => (
    <li className={`${css.item}`}>
        <span className={isOnline ? `${css.onlineStyle}` : `${css.offlineStyle}`}></span>
        <img className={`${css.avatar}`} src={avatar} alt={name} width="48" />
        <p className={`${css.name}`}>{name}</p>
    </li>
  );
  
const FriendList = ({ friends }) => (
    <ul className={`${css.friendList}`}>
      {friends.map(({ id, ...friend }) => (
        <FriendListItem key={id} {...friend} />
      ))}
    </ul>
);
  
export default FriendList;