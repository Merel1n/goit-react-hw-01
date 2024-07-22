import css from './FriendListItem.module.css'
const FriendListItem = ({ avatar, name, status }) => {
    
    return (
        
    <div className={css.friendItem}>
  <img src={avatar} alt="Avatar" width="48" />
  <p>{name}</p>
            <p className={status ? css.online : css.offline}>{status ? 'Online' : 'Offline'}</p>
            
</div>
    )
}
export default FriendListItem