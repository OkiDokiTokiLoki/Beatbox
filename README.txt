/// This is a simple application used to make a little noise. Nothing too complicated, just some basic front end work, all vanilla
/// Outcome: Simple sounds being produced over keypressed elements (Sounds play when you push buttons)



----> [Live demo](https://okidokitokiloki.github.io/beatbox/)





- HTML
	- App container with divs("pads") created each with an audio source

- CSS
	- Basic styling on each pad to indicate user input

- JavaScript
	- On keydown plays a sound clip attached to different "pads" 
	- On keyup each sound is reset to 0 so that sounds can be overlapped
