
function App() {
        const handleCaseClick = () => {
                console.log("case description clicked");
        }
        const handleInnerClick = () => {
                e.stopPropagation();
                console.log("button clicked");
        }

}
return (
<div role="button" tabIndex={0} onClick={ handleCaseClick }>
<h2>React Portfolio Project</h2>
<p>To demonstrate event handling with nested clickable elements, I created a project in which the description is clickable and there is also an associated button. When the button is clicked, it does not propagate to the clickable paragraph.</p>


<button onClick={ handleInnerClick } >Click me without triggering parent</button>

</div>
)