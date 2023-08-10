import Comment from "../components/Comment";
import NewComment from "./NewComment";

const Comments = ({ comments, setComments }) => {
	return (
		<div className="comments">
			<h3>Comments</h3>
			{comments.map((comment) => {
				return (
					<div key={comment._id}>
						<Comment comment={comment} />
					</div>
				);
			})}
			<NewComment comments={comments} setComments={setComments} />
		</div>
	);
};

export default Comments;
