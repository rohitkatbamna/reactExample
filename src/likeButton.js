// JSX CODE
function Likebutton() {
	// react hook
	const [isLiked, setIsliked] = React.useState(false); // init state false
	// function for handling like button
	function handleLike() {
		// on click the is liked is changed to true
		setIsliked(true);
	}
	return (
		<div
			style={{ marginRight: "auto", marginLeft: "auto", width: "fit-content" }}
		>
			{/* Conditional rendering */}
			{isLiked ? (
				<h1>You clicked the Like button</h1>
			) : (
				<button type="button" onClick={handleLike}>
					Like
				</button>
			)}
		</div>
	);
}

const container = document.getElementById("like_button_container"); // this div  is where the react is attached
const root = ReactDOM.createRoot(container); //creation of root
root.render(<Likebutton />); //render at root
