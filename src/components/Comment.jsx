import React from "react";
import ProfileImage from "./ProfileImage";

function Comment({ comment }) {
	//console.log("Error on comment: ", comment);
	//console.log(comment);
	const date = comment.createdAt.toString();
	return (
		<div className="comment">
			<ProfileImage image={comment.user.image} />
			<h3>{comment.user.username}</h3>
			<h4>{comment.createdAt.toString()}</h4>
			<p>{comment.text}</p>
		</div>
	);
}

export default Comment;
