function playAudio() {
    //this is the webaudio loooooppppppp
    //enter url in the next line
    var url  = 'media/rain-loop-2.mp3';

    /* --- set up web audio --- */
    //create the context
    var context = new AudioContext();
    //...and the source
    var source = context.createBufferSource();
    //connect it to the destination so you can hear it.
    source.connect(context.destination);

    /* --- load buffer ---  */
    var request = new XMLHttpRequest();
    //open the request
    request.open('GET', url, true);
    //webaudio paramaters
    request.responseType = 'arraybuffer';
    //Once the request has completed... do this
    request.onload = function() {
        context.decodeAudioData(request.response, function(response) {
            /* --- play the sound AFTER the buffer loaded --- */
            //set the buffer to the response we just received.
            source.buffer = response;
            //start(0) should play asap.
            source.start(0);
            source.loop = true;
        }, function () { console.error('The request failed.'); } );
    }
    //Now that the request has been defined, actually make the request. (send it)
    request.send();
}

var button = document.getElementById('button-loop-1');
button.addEventListener('click', function(e) {
    e.preventDefault();
    playAudio();
});