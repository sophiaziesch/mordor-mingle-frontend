import ProfileImage from "./ProfileImage";

function Comment(props) {
	return (
		<div className="comment">
			<ProfileImage image={props.comment.user.image} />

			<div className="comment-body">
				<div className="comment-top">
					<span className="user">
						<span>{props.comment.user.name}</span>
					</span>

					<span>{props.comment.timestamp}</span>
				</div>

				<p>{props.comment.message}</p>
			</div>

			<i className="fas fa-ellipsis-h"></i>
		</div>
	);
}

export default Comment;
