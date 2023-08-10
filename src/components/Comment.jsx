import ProfileImage from "./ProfileImage";

function Comment({ comment }) {
	//console.log("Error on comment: ", comment);
	console.log(comment);
	console.log(comment.userId.username);
	const originalDate = new Date(comment.createdAt);

	const options = { month: "long", day: "numeric", year: "numeric" };
	const formattedDate = originalDate.toLocaleDateString("en-US", options);

	return (
		<div className="comment">
			{/* <ProfileImage image={comment.userId.image} /> */}
			<h4>Posted By: {comment.userId.username}</h4>
			<h4>On: {formattedDate}</h4>
			<h4>Comment Content:</h4>
			<p>{comment.text}</p>
		</div>
	);
}

export default Comment;
