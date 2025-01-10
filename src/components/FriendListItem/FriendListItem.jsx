import css from "./FriendListItem.module.css";
import clsx from "clsx";
const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={css.friend_item}>
            <img src={avatar} alt="Avatar" width="48" />
            <p>{name}</p>
            <p className={clsx(css.green, { [css.red]: !isOnline })}>
                {isOnline ? "Online" : "Offline"}
            </p>
        </li>
    );
};

export default FriendListItem;