import NewComment from "../components/NewComment";
import Comment from "../components/Comment";
import React from "react";
import Comments from "../components/Comments";

const commentsArray = [
	{
		userId: {
			name: "Thoughts of Dog®",
			image: "https://i.imgur.com/b0EdHVV.jpg",
			handle: "dog_feelings",
		},
		timestamp: "1h ago",
		text: "the human likes to say. that i live here rent free. but i would argue. this housing accommodation. is my payment. for a lifetime of love. and excellent company",
	},
	{
		userId: {
			name: "Thoughts of Dog®",
			image: "https://i.imgur.com/b0EdHVV.jpg",
			handle: "dog_feelings",
		},
		timestamp: "2h ago",
		text: "sometimes. the human presses their noggin against mine. to figure out what i’m thinking. so i just think really hard. about how much i love them. and hope they figure it out",
	},
	{
		userId: {
			name: "Thoughts of Dog®",
			image: "https://i.imgur.com/b0EdHVV.jpg",
			handle: "dog_feelings",
		},
		timestamp: "3h ago",
		text: "here is what. i plan to accomplish today: \n\n2. bark loudly. but at nothing \n7. lose my ball under the couch\n7b. politely ask the human. to get my ball\n3. immediately lose it again. under the same couch\n4. big nap. you have worked hard\n2. repeat",
	},
];

const HomePage = () => {
	return (
		<>
			<h1>This is the home page</h1>
			<Comment props={commentsArray[0]} />
			<Comment props={commentsArray[1]} />
			<Comment props={commentsArray[2]} />
			<Comments eventId={eventId}></Comments>
			<NewComment />
		</>
	);
};

export default HomePage;
