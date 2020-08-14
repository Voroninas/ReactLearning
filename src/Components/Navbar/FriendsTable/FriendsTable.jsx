import React from 'react';
import s from './FriendsTable.module.css';
import AvatarSection from "./AvatarSection/AvatarSection"

const FriendsTable = (props) => {
    let avatarSections = props.friends.map(friendObj => <AvatarSection {...friendObj}/>)
    return <div className={`${s.gridTable} ${s.marginTop}`}>
        {avatarSections}
    </div>
}

export default FriendsTable;