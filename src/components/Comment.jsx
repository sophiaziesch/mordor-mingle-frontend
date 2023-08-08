import React from "react";
import ProfileImage from "./ProfileImage";

function Comment({ comment }) {
	//console.log("Error on comment: ", comment);
	return (
		<div className="comment">
			{/* <ProfileImage image={comment.userId.image} /> */}

			<div className="comment-body">
				<div className="comment-top">
					<span className="user">
						{/* <span>{comment.userId.username}</span> */}
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
