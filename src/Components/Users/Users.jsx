import React from 'react'
import styles from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/images/user.png'

/*const Users = (props) => {*/
class Users extends React.Component {
	constructor(props) {
		super(props)
		//alert("запрос на сервер")
		axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
			this.props.setUsers(response.data.items)
		})
		/*this.getUsers() // мой вариант*/
	}
	/*getUsers = () => { // мой вариант
		axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
			this.props.setUsers(response.data.items)
		})

		this.props.setUsers([
		{ id: 1, photoUrl: 'https://kto-chto-gde.ru/wp-content/uploads/2016/09/1423402942.jpg', 
				followed: true, fullName: 'Sam', status: 'some status', location: { city: 'Moscow', country: 'Russia' } },
		{ id: 2, photoUrl: 'https://www.zbrushcentral.com/uploads/default/original/4X/5/5/b/55b398dd2b0824ca07415adaac899bad13c5d739.jpeg', 
				followed: false, fullName: 'Bob', status: 'some new status', location: { city: 'Minsk', country: 'Russia' } },
		{ id: 3, photoUrl: 'https://awkward.com/wp-content/uploads/2019/03/Screen-Shot-2019-03-06-at-2.53.55-PM.jpg', 
				followed: true, fullName: 'Tom', status: 'some another status', location: { city: 'Stalinsk', country: 'Russia' } }
		]
		)
	}*/

	render() {
		return <div>
			{
				this.props.users.map(u => <div key={u.id}>
					<span>
						<div>
							<img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} />
						</div>
						<div>
							{u.followed
								? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
								: <button onClick={() => { this.props.follow(u.id) }}>Follow</button>
							}
						</div>
					</span>
					<span>
						<span>
							<div>{u.name}</div>
							<div>{u.status}</div>
						</span>
						<span>
							<div>{'u.location.country'}</div>
							<div>{'u.location.city'}</div>
						</span>
					</span>
				</div>)
			}
		</div>
	}
}

export default Users;