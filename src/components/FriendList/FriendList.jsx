import FriendListItem from "../FriendListItem/FriendListItem"
import css from './FriendList.module.css'
const FriendList = ({friends}) => {
    return (
        <ul className={css.friendsList}>{friends.map((friend) => (
            <li key={friend.id} className={css.friendsItem}>
		<FriendListItem avatar= {friend.avatar} name={ friend.name} status={friend.isOnline}  />
	</li>
        ))}
</ul>
    )
}
export default FriendList