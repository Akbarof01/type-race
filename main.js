var data = {
  'Q': {
      name: 'Clap',
      sound: './crash.mp3',
  },
  'W': {
      name: 'HiHat',
      sound: './kick-bass.mp3'
  },
  'E': {
      name: 'Kick',
      sound: './snare.mp3'
  },
  'A': {
      name: 'OPHH',
      sound: './tom-1.mp3'
  },
  
  'S': {
      name: 'Snare',
      sound: './tom-2.mp3'
  },
  'D': {
      name: 'Crash',
      sound: './tom-3.mp3'
  },
  'Z': {
      name: 'Ride',
      sound: './tom-4.mp3'
  },
  'X': {
    name: 'Tom',
    sound: './Perc 28.WAV'
},
'C': {
  name: 'TOM',
  sound: './Sound 04.wav'
},
};


var drumkit = document.getElementById("drumkit");

function construct() {
  for (var key in data) {
      var drumElement = document.createElement('div');
      drumElement.classList.add('element', data[key].name);
      var h2 = document.createElement('h2');
      h2.textContent = key;

      var span = document.createElement('span');
      span.textContent = data[key].name;

      drumElement.appendChild(h2);
      drumElement.append(span);
      drumkit.appendChild(drumElement);
      drumElement.addEventListener('click', function (event) {
          var key = event.currentTarget.querySelector('h2').textContent;
          playDrum(key.toUpperCase());
      });
  }
};

function playDrum(key) {
  if (data.hasOwnProperty(key)) {
      var drumElement = document.querySelector('.element.' + data[key].name);
      drumElement.classList.add('active');
      var audio = new Audio();
      audio.src = data[key].sound;
      audio.play();
      audio.addEventListener('timeupdate', function () {
          if (audio.currentTime >= audio.duration / 32) {
              drumElement.classList.remove('active');
              audio.removeEventListener('timeupdate', arguments.callee);
          }
      });
  } else {
      console.log(
          "OOPS!\nIt looks like you've pressed a key that isn't defined.\nCould you please try again with a valid key?\nThank you!"
      );
      setTimeout(function () {
          console.clear();
      }, 10000000);
  }
};

function keyEvents(event) {
  playDrum(event.key.toUpperCase());
};
window.addEventListener('keydown', keyEvents);
construct();
