import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div className={css.user_wrap}>
            <div className={css.info_wrap}>
                <img
                    className={css.user_img}
                    src={image}
                    alt="User avatar"
                    width="100"
                />
                <p className={css.user_name}>{name}</p>
                <p>@{tag}</p>
                <p>{location}</p>
            </div>

            <ul className={css.user_list}>
                <li>
                    <span className={css.user_stats}>Followers</span>
                    <span className={css.user_count}>{stats.followers}</span>
                </li>
                <li>
                    <span className={css.user_stats}>Views</span>
                    <span className={css.user_count}>{stats.views}</span>
                </li>
                <li>
                    <span className={css.user_stats}>Likes</span>
                    <span className={css.user_count}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

export default Profile;