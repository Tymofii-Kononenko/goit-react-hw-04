import FriendListItem from '../FriendListItem/FriendListItem';
import styles from './FriendList.module.css';
function FriendList({ friends }) {
    return (
        <ul className={styles.friends_list}>
            {friends.map((friend) => (
                <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}
                />
            ))}
        </ul>
    );
}

export default FriendList;
