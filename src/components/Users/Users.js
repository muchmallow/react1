import React from "react";
import classes from "./Users.module.css";
import * as axios from "axios";

let Users = (props) => {

	if(props.users.length === 0){

		axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
			props.setUsers();
		});

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
	}

	return (
		<div>
			{
				props.users.map(u => {
					return (
						<div key={u.id}>
							<span>
								<div>
									<img src={u.photoUrl} className={classes.userPhoto} alt={"userPhoto"}/>
								</div>
								<div>
									{u.followed
										? <button onClick={() => {
											props.unfollow(u.id)
										}}>Unfollow</button>
										: <button onClick={() => {
											props.follow(u.id)
										}}>Follow</button>}
								</div>
							</span>
							<span>
								<span>
									<div>{u.fullName}</div>
									<div>{u.status}</div>
								</span>
								<span>
									<div>{u.location.city}</div>
									<div>{u.location.country}</div>
								</span>
							</span>
						</div>
					);
				})
			}
		</div>
	);
};

export default Users;