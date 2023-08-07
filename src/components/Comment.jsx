import React from "react";
import ProfileImage from "./ProfileImage";

function Comment({ props }) {
	return (
		<div className="comment">
			<ProfileImage image={props.userId.image} />

			<div className="comment-body">
				<div className="comment-top">
					<span className="user">
						<span>{props.userId.name}</span>
					</span>

					<span>{props.timestamp}</span>
				</div>

				<p>{props.text}</p>
			</div>

			<i className="fas fa-ellipsis-h"></i>
		</div>
	);
}

export default Comment;
