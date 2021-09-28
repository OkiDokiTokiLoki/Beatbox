<h3>BeatsByToki</h3>

[Live demo](https://okidokitokiloki.github.io/beatbox/)

## General info
This is a simple application used to make a little noise. Nothing complicated,just having some fun with basic front end work, <em>all vanilla</em>
<br>
<strong>tl;dr Sounds play when you push buttons</strong>
	
## Technologies
Project is created with:
* HTML
	- App container with divs("pads") created each with an audio source

* CSS
	- Basic styling on each pad to indicate user input

* JavaScript
	- On keydown plays a sound clip attached to different "pads" 
	- On keyup each sound is reset to 0 so that sounds can be overlapped
