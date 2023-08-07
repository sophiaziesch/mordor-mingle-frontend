import { useState } from "react";

const CommentInput = () => {
	const [comment, setComment] = useState("");

	return (
		<div>
			<form>
				<textarea
					value={comment}
					onChange={(event) => {
						setComment(event.target.value);
					}}
					name="comment"
					placeholder="Add comment..."
				></textarea>
			</form>
		</div>
	);
};

export default CommentInput;
