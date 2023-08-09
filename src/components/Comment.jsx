import React from "react";
import ProfileImage from "./ProfileImage";

function Comment({ comment }) {
	//console.log("Error on comment: ", comment);
	//console.log(comment);
	const originalDate = new Date(comment.createdAt);

	const options = { month: "long", day: "numeric", year: "numeric" };
	const formattedDate = originalDate.toLocaleDateString("en-US", options);

	return (
		<div className="comment">
			<ProfileImage image={comment.user.image} />
			<h3>{comment.user.username}</h3>
			<h4>{formattedDate}</h4>
			<p>{comment.text}</p>
		</div>
	);
}

export default Comment;
