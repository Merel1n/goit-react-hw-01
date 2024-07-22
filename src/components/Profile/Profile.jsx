import css from './Profile.module.css'
const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div className={css.container}>
            <div>
                <img className={css.avatar} src={image} alt={name} />
                <p className={css.userName}>{name}</p>
                <p className={css.userTag}>@{tag}</p>
                <p className={css.userLocation}>{location}</p>
            </div>
            <ul className={css.statsList}>
                <li className={css.statsItem}>
                    <span className={css.label}>Followers</span>
                    <span className={css.stats}>{stats.followers}</span>
                </li>
                <li className={css.statsItem}>
                    <span className={css.label}>Views</span>
                    <span>{stats.views}</span>
                </li>
                <li className={css.statsItem}>
                    <span className={css.label}>Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </ul>
        </div>

    )
}

export default Profile;

