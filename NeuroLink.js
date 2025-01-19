const user_control_buttons = document.querySelector('.user-control-buttons');
const user_control_voice = document.querySelector('.user-control-voice');
const autonomous_driving = document.querySelector('.autonomous-driving');
const follow_line = document.querySelector('.follow-line');
const more_info = document.querySelectorAll('.more-info');
const modes_container = document.querySelector('.modes-container');
const car_modes = document.querySelector('.car-modes');
const car_modes_title = document.querySelector('.car-modes-title');
const car_modes_description_container = document.querySelector('.car-modes-description-container');
const car_modes_description = document.querySelector('.car-modes-description');
const got_it = document.querySelector('.got-it');
const close_car_modes = document.querySelector('.close-car-modes');
const alert_message = document.querySelector('.alert-message');
const alert_div = document.querySelector('.alert-div');
const control_buttons = document.querySelectorAll('.control-buttons');
const brake = document.querySelector('.brake');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const forward = document.querySelector('.forward');
const backward = document.querySelector('.backward');
const light = document.querySelector('.light');
const horn = document.querySelector('.horn');

let light_state = false;
let recognition;
let stream;

const descriptions = [
    "Control the vehicle manually using physical buttons for a hands-on driving experience",
    "Drive the vehicle using voice commands for a hands-free and intuitive experience.",
    "The vehicle drives autonomously, using AI to navigate with features like facial detection, traffic sign interpretation, hand gesture control, and obstacle avoidance, all without user input.",
    "The vehicle follows a black line or predefined path, ensuring smooth and accurate movement."
];

const alerts = [
    "VOICE COMMAND NOT RECOGNISED",
    "MICROPHONE ACCESS IS REQUIRED.<br>PLEASE ENABLE IT TO USE THE VOICE COMMAND FEATURE.",
];

//  Initialising

MoreInfo();
car_modes_title.onclick = OpenPanel;
close_car_modes.onclick = ClosePanel;
got_it.onclick = GotIt;

user_control_buttons.onclick = ClosePanel;
user_control_voice.onclick = function() {
    GetVoiceCommand();
    ClosePanel();    
}
autonomous_driving.onclick = ClosePanel;
follow_line.onclick = ClosePanel;

light.onclick = function() {SwitchLight();}

MobileControl();
LaptopControl();

// Function

function MoreInfo() {
    more_info.forEach((element, index) => {
        element.onclick = function() {
            modes_container.style.display = 'none';
            car_modes_description_container.style.display = 'flex';
            car_modes_description.innerHTML = descriptions[index];
        }
    });
}

function GotIt() {
    modes_container.style.display = 'flex';
    car_modes_description_container.style.display = 'none';
}

function SwitchLight() {
    if (!light_state) {
        light.style.backgroundColor = 'white';
        light.style.color = 'black';
        light_state = true;
        return light_state;
    } 
    else {
        light.style.backgroundColor = 'black';
        light.style.color = 'white';
        light_state = false;
        return light_state;
    }
}

function OpenPanel() {car_modes.style.height = '470px';}

function ClosePanel() {car_modes.style.height = '60px';}

function DisableControlButtons() {
    control_buttons.forEach(button => {
        button.style.backgroundColor = 'rgb(150, 150, 150)';
        button.style.opacity = 0.4;
    })
}

function AlertUser(message) {
    alert_div.style.display = 'flex';
    alert_message.innerHTML = message;
}

function RemoveAlert() {alert_div.style.display = 'none';}

function MobileControl() {
    forward.onclick = function() {/*SendCommand('forward');*/}
    right.onclick = function() {/*SendCommand('right');*/}
    backward.onclick = function() {/*SendCommand('backward');*/}
    left.onclick = function() {/*SendCommand('left');*/}
    horn.onclick = function() {/*SendCommand('horn');*/}
    // light.onclick = function() {/*SendCommand('light');*/}
}


function LaptopControl() {
    window.onkeydown = function(event) {
        switch (event.key) {
            case 'ArrowUp': /*SendCommand('forward');*/ break;
            case 'ArrowRight': /*SendCommand('right');*/ break;
            case 'ArrowDown': /*SendCommand('backward');*/ break;
            case 'ArrowLeft': /*SendCommand('left');*/ break;
            case ' ': /*SendCommand('horn');*/ break;
            case 'a': /*SendCommand('light');*/ break;
            default: break;
        }
    }
}

function AnalyzeVoiceCommand(command) {
    RemoveAlert(); 
    if (command.includes('forward')) {console.log("User Command:", command); /*SendCommand('forward');*/}
    else if (command.includes('right')) {console.log("User Command:", command); /*SendCommand('right');*/}
    else if (command.includes('backward')) {console.log("User Command:", command); /*SendCommand('backward');*/}
    else if (command.includes('left')) {console.log("User Command:", command); /*SendCommand('left');*/}
    else if (command.includes('stop')) {console.log("User Command:", command); /*SendCommand('stop');*/}
    else if (command.includes('horn')) {console.log("User Command:", command); /*SendCommand('horn');*/}
    else if (command.includes('light')) {console.log("User Command:", command); /*SendCommand('light');*/}
    else {AlertUser(alerts[0]);}
}

function SendCommand(command) {
    fetch('/move', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ command })
    })
    .then(response => response.json()) // Parse response as JSON
    .then(data => {
        if (data.success) {
            console.log('Command successfully executed:', data);
        } else {
            throw new Error('Command failed!'); // Handle unsuccessful command execution
        }
    })
    .catch(error => console.error('Error:', error)); // Catch and log any errors
}

function GetVoiceCommand() {
    navigator.mediaDevices.getUserMedia({ audio: true })
    .then((userStream) => {
        stream = userStream;
        console.log("Microphone access granted");

        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        if (SpeechRecognition) {
            DisableControlButtons();
            recognition = new SpeechRecognition();
            recognition.lang = 'en-US';
            recognition.continuous = true;
            recognition.interimResults = false;

            recognition.start();

            recognition.onresult = (event) => {
                const command = event.results[event.resultIndex][0].transcript.toLowerCase();
                AnalyzeVoiceCommand(command);
            };

            recognition.onerror = (event) => {
                console.error("Speech Recognition Error:", event.error);
            };

            recognition.onend = () => {
                console.log("Recognition ended. Restarting...");
                recognition.start();
            };

        } else {
            console.log("Speech Recognition is not supported in this browser.");
        }

    })
    .catch((error) => {
        if (error == 'NotAllowedError: Permission denied' || error == 'Recognition Error: not-allowed') {
            AlertUser(alerts[1]);
            setTimeout(RemoveAlert, 5000);
            return;
        }
        console.error("Error accessing the microphone:", error);
    });
}