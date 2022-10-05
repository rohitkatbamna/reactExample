var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// JSX CODE
function Likebutton() {
	// react hook
	var _React$useState = React.useState(false),
	    _React$useState2 = _slicedToArray(_React$useState, 2),
	    isLiked = _React$useState2[0],
	    setIsliked = _React$useState2[1]; // init state false
	// function for handling like button


	function handleLike() {
		// on click the is liked is changed to true
		setIsliked(true);
	}
	return React.createElement(
		"div",
		{
			style: { marginRight: "auto", marginLeft: "auto", width: "fit-content" }
		},
		isLiked ? React.createElement(
			"h1",
			null,
			"You clicked the Like button"
		) : React.createElement(
			"button",
			{ type: "button", onClick: handleLike },
			"Like"
		)
	);
}

var container = document.getElementById("like_button_container"); // this div  is where the react is attached
var root = ReactDOM.createRoot(container); //creation of root
root.render(React.createElement(Likebutton, null)); //render at root