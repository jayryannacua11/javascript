const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();

rec.lang = 'en-US';
rec.continuous = true;

rec.onresult = function (e) {
    const acceptedColors = [
        'red',
        'blue',
        'green',
        'white',
        'black'
    ];

    for (let i = e.resultIndex; i < e.results.length; i++){
        const script = e.results[i][0].transcript.toLowerCase().trim().replace(/^\.+|\.+$/g, '');

        if (acceptedColors.includes(script)){
            document.body.style.backgroundColor = script;
        } else{
            console.log(script);
        }
    }
}

rec.start();