import { h, Component } from 'preact';
import style from './style';

export default class Dashboard extends Component {
	// Note: `user` comes from the URL, courtesy of our router
	render({ user, room }, x) {
		return (
			<div class={style.profile}>
				<h1>Profile: {user} Room: {room} </h1>
				<p>This is the user profile for a user named { user }.</p>

				<p> otto </p>
			</div>
		);
	}
}
