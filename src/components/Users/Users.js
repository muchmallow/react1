import React from "react";
import classes from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../assets/images/user_image_male.png";

class Users extends React.Component {
	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
			this.props.setUsers(response.data.items);
			this.props.setTotalUsersCount(response.data.totalCount);
		});
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
			this.props.setUsers(response.data.items);
		});
	};

	// props.setUsers([
			// 	{
			// 		id: 1,
			// 		photoUrl: "https://n1s1.starhit.ru/b8/7d/3e/b87d3e9ee04c16a0a286a6ddb12aa81f/480x497_0_888c4da80d90808bffc8babaa9f22ecd@480x497_0xc0a8399a_9271194921514978916.jpeg",
			// 		followed: true,
			// 		fullName: "Yuriy",
			// 		status: "Im a boss",
			// 		location: {city: "Kharkov", country: "Ukraine"}
			// 	},
			// 	{
			// 		id: 2,
			// 		photoUrl: "https://n1s1.starhit.ru/b8/7d/3e/b87d3e9ee04c16a0a286a6ddb12aa81f/480x497_0_888c4da80d90808bffc8babaa9f22ecd@480x497_0xc0a8399a_9271194921514978916.jpeg",
			// 		followed: false,
			// 		fullName: "Vladislav",
			// 		status: "Lel",
			// 		location: {city: "Kiev", country: "Ukraine"}},
			// 	{
			// 		id: 3,
			// 		photoUrl: "https://n1s1.starhit.ru/b8/7d/3e/b87d3e9ee04c16a0a286a6ddb12aa81f/480x497_0_888c4da80d90808bffc8babaa9f22ecd@480x497_0xc0a8399a_9271194921514978916.jpeg",
			// 		followed: true,
			// 		fullName: "Veronika",
			// 		status: "Kek",
			// 		location: {city: "Kiev", country: "Ukraine"}},
			// 	{
			// 		id: 4,
			// 		photoUrl: "https://n1s1.starhit.ru/b8/7d/3e/b87d3e9ee04c16a0a286a6ddb12aa81f/480x497_0_888c4da80d90808bffc8babaa9f22ecd@480x497_0xc0a8399a_9271194921514978916.jpeg",
			// 		followed: false,
			// 		fullName: "Dmitriy",
			// 		status: "Zaebisya pahnet pisya",
			// 		location: {city: "Kiev", country: "Ukraine"}
			// 	},
			// 	{
			// 		id: 5,
			// 		photoUrl: "https://n1s1.starhit.ru/b8/7d/3e/b87d3e9ee04c16a0a286a6ddb12aa81f/480x497_0_888c4da80d90808bffc8babaa9f22ecd@480x497_0xc0a8399a_9271194921514978916.jpeg",
			// 		followed: true,
			// 		fullName: "Svetlana",
			// 		status: "A na to ona i pisya wobu pahla zaebisya",
			// 		location: {city: "Kiev", country: "Ukraine"}
			// 	},
			// 	{
			// 		id: 6,
			// 		photoUrl: "https://n1s1.starhit.ru/b8/7d/3e/b87d3e9ee04c16a0a286a6ddb12aa81f/480x497_0_888c4da80d90808bffc8babaa9f22ecd@480x497_0xc0a8399a_9271194921514978916.jpeg",
			// 		followed: false,
			// 		fullName: "Court",
			// 		status: "Im a boss",
			// 		location: {city: "Washington", country: "USA"}
			// 	},
			// 	{
			// 		id: 7,
			// 		photoUrl: "https://n1s1.starhit.ru/b8/7d/3e/b87d3e9ee04c16a0a286a6ddb12aa81f/480x497_0_888c4da80d90808bffc8babaa9f22ecd@480x497_0xc0a8399a_9271194921514978916.jpeg",
			// 		followed: true,
			// 		fullName: "Carley",
			// 		status: "Zdarova ebat",
			// 		location: {city: "Massachusetts", country: "USA"}
			// 	}
			// ])

	render() {

		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

		let pages = [];
		for(let i = 1; i <= pagesCount; i++){
			pages.push(i);
		}

		return (
			<div>
				<div>
					{pages.map((pageNumber) => {
						return(
							<span className={this.props.currentPage === pageNumber && classes.selectedPage}
							      onClick={() => {this.onPageChanged(pageNumber);}}>{pageNumber}</span>
						);
					})}
				</div>
				{
					this.props.users.map(u => {
						return (
							<div key={u.id}>
								<span>
									<div>
										<img src={u.photos.small != null ? u.photos.small : userPhoto}
										     className={classes.userPhoto} alt={"userPhoto"}/>
									</div>
									<div>
										{u.followed
											? <button onClick={() => {
												this.props.unfollow(u.id)
											}}>Unfollow</button>
											: <button onClick={() => {
												this.props.follow(u.id)
											}}>Follow</button>}
									</div>
								</span>
								<span>
									<span>
										<div>{u.name}</div>
										<div>{u.status}</div>
									</span>
									<span>
										<div>{"u.location.city"}</div>
										<div>{"u.location.country"}</div>
									</span>
								</span>
							</div>
						);
					})
				}
			</div>
		);
	}
}

export default Users;