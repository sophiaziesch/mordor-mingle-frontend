import React from "react";
import ProfileImage from "./ProfileImage";

function Comment({ comment }) {
	//console.log("Error on comment: ", comment);
	//console.log(comment);
	return (
		<div className="comment">
			<ProfileImage image={comment.user.image} />

			<div className="comment-body">
				<div className="comment-top">
					<span className="user">
						<span>{comment.user.username}</span>
					</span>

					<span>{comment.createdAt}</span>
				</div>

				<p>{comment.text}</p>
			</div>

			{/* <i className="fas fa-ellipsis-h"></i> */}
		</div>
	);
}

export default Comment;
