**Adding Sound Effects to a Web Page**

Statement) To add sound to a webpage using HTML and JavaScript, you can follow these steps:

Prepare your sound files: First, you'll need the audio files (e.g., MP3, WAV, OGG) that you want to use as sound effects or background music on your webpage. Make sure the files are in a format that is supported by most web browsers.

Include the audio element in HTML: In your HTML file, use the <audio> element to embed the sound files. For example:

<audio id="startsound">
  <source src="startsound.mp3" type="audio/mpeg">
  <source src="startsound.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>
Add sound playback in JavaScript: Use JavaScript to control the playback of the audio. For example, you can play the sound when a button is clicked:
<button id="playButton">Play Sound</button>

<script>
  const startSound = document.getElementById('startsound');
  const playButton = document.getElementById('playButton');

  playButton.addEventListener('click', () => {
    startSound.play();
  });
</script>
Ensure cross-browser compatibility: To ensure your sound works across different browsers, provide multiple file formats in the <audio> element. Browsers will select the first format they support.
Remember to properly handle audio files' size and quality to optimize webpage loading times. Additionally, consider the user experience and avoid autoplaying sounds, as it may be disruptive or unwanted for some visitors. Always provide control options for users to enable or disable sound as they prefer.

NOTE: Nowadays the browsers itself disable autoplay sound, you need the user to interact with the website first only after than some sound can be played.

Task
We have already added one button in the HTML and have added the functionality in JS for playing the start sound.
Add two more buttons for playing the success and failure sounds, in the HTML.
Add the functionality for the two sounds in the JS.
NOTE: If you want to host your website, you need to have your sound files on some CDN, this way it can be globally accessed.

Here, at CodeChef we provide you the the CDN for the start sound file.
CDN Start Sound: https://cdn.codechef.com/Learning/startsound.mp3
CDN Failure Sound: https://cdn.codechef.com/Learning/endfailsound.mp3
CDN Success Sound: https://cdn.codechef.com/Learning/endsuccesssound.mp3 Use this CDN as the source.

--index.html= <!DOCTYPE html>
<html>
<head>
  <title>Play Start Sound</title>
</head>
<body>
  <button id="playStartSoundButton">Play Sound</button>
  
  <!--Add play fail sound button-->
  
  <!--Add play success sound button-->

  <audio id="startSound">
    <source src="https://cdn.codechef.com/Learning/startsound.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  
  <!-- Add the audio fild for end failure sound -->
  <!-- Add the audio fild for end success sound -->

  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="index.js"></script>
</body>
</html>

--index.js= $(document).ready(function() {
  const $startSound = $("#startSound");
  const $playStartSoundButton = $("#playStartSoundButton");
  
  $playStartSoundButton.on("click", function() {
    $startSound[0].play();
  });
  
  // Select the two buttons you created and add event listeners to play the success and fail sound respectively
});


-------------------------------------------------------------------------------------------------------------------------------
SOLUTION:- UPDATED CODE:-

index.html= HTML:
<!DOCTYPE html>
<html>
<head>
  <title>Play Start Sound</title>
</head>
<body>
  <button id="playStartSoundButton">Play Sound</button>
  
  <audio id="startSound">
    <source src="https://cdn.codechef.com/Learning/startsound.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  
  <!-- Add play fail sound button -->
  <button id="playFailSoundButton">Play Fail Sound</button>
  
  <!-- Add the audio field for end failure sound -->
  <audio id="failSound">
    <source src="https://cdn.codechef.com/Learning/endfailsound.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>

  <!-- Add play success sound button -->
  <button id="playSuccessSoundButton">Play Success Sound</button>

  <!-- Add the audio field for end success sound -->
  <audio id="successSound">
    <source src="https://cdn.codechef.com/Learning/endsuccesssound.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>

  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="index.js"></script>
</body>
</html>

---index.js= $(document).ready(function() {
  const $startSound = $("#startSound");
  const $playStartSoundButton = $("#playStartSoundButton");
  
  $playStartSoundButton.on("click", function() {
    $startSound[0].play();
  });
  
  // Select the two buttons you created and add event listeners to play the success and fail sound respectively
  const $failSound = $("#failSound");
  const $playFailSoundButton = $("#playFailSoundButton");
  
  $playFailSoundButton.on("click", function() {
    $failSound[0].play();
  });

  const $successSound = $("#successSound");
  const $playSuccessSoundButton = $("#playSuccessSoundButton");
  
  $playSuccessSoundButton.on("click", function() {
    $successSound[0].play();
  });
});

-------------------------------------------------------------------------------------------------------------
