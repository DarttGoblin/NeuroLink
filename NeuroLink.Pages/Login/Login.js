// Updated JavaScript Code

const video = document.getElementById('video');
const errorMessage = document.getElementById('error-message');
const status = document.getElementById('status');
const startRecognitionBtn = document.getElementById('startRecognition');
const referenceContainer = document.getElementById('referenceContainer');

let referenceDescriptors = [];
let recognitionActive = false;

async function loadModels() {
    try {
        const MODEL_URL = 'https://raw.githubusercontent.com/justadudewhohacks/face-api.js/master/weights/';
        await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
        await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
        await faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL);
        await faceapi.nets.ssdMobilenetv1.loadFromUri(MODEL_URL);
        status.textContent = 'Models loaded successfully';
    } catch (error) {
        errorMessage.textContent = `Model loading error: ${error.message}`;
        console.error(error);
    }
}

async function startVideo() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
    } catch (err) {
        errorMessage.textContent = `Camera access error: ${err.message}`;
        console.error(err);
    }
}

async function processReferenceImageFromPath(path) {
    try {
        // Create image element
        const img = document.createElement('img');
        img.src = path;
        await new Promise(resolve => img.onload = resolve);

        // Display reference image
        referenceContainer.appendChild(img);

        // Detect face and get descriptor
        const detection = await faceapi.detectSingleFace(img, new faceapi.TinyFaceDetectorOptions())
            .withFaceLandmarks()
            .withFaceDescriptor();

        if (detection) {
            referenceDescriptors.push(detection.descriptor);
            status.textContent = `${referenceDescriptors.length} reference images processed`;
            startRecognitionBtn.disabled = false;
        } else {
            status.textContent = `No face detected in image: ${path}. Please verify the image.`;
        }
    } catch (error) {
        errorMessage.textContent = `Error processing image ${path}: ${error.message}`;
        console.error(error);
    }
}

async function processReferenceImages() {
    referenceDescriptors = []; // Reset descriptors
    referenceContainer.innerHTML = ''; // Clear displayed images

    for (const path of referenceImagePaths) {
        await processReferenceImageFromPath(path);
    }
}

async function startFaceRecognition() {
    if (referenceDescriptors.length === 0) {
        status.textContent = 'Please ensure reference images are processed first';
        return;
    }

    const canvas = faceapi.createCanvasFromMedia(video);
    document.querySelector('.container').append(canvas);
    const displaySize = { width: video.width, height: video.height };
    faceapi.matchDimensions(canvas, displaySize);

    recognitionActive = true;

    const detectInterval = setInterval(async () => {
        if (!recognitionActive) {
            clearInterval(detectInterval);
            return;
        }

        try {
            const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
                .withFaceLandmarks()
                .withFaceDescriptors();

            const resizedDetections = faceapi.resizeResults(detections, displaySize);
            canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);

            resizedDetections.forEach(detection => {
                const matches = referenceDescriptors.map(refDesc => 
                    faceapi.euclideanDistance(detection.descriptor, refDesc)
                );
                const minDistance = Math.min(...matches);
                const isMatch = minDistance < 0.6; // Threshold for face matching

                const box = detection.detection.box;
                const drawBox = new faceapi.draw.DrawBox(box, { 
                    label: isMatch ? 'You' : 'Unknown',
                    boxColor: isMatch ? 'green' : 'red'
                });
                drawBox.draw(canvas);
            });
        } catch (error) {
            errorMessage.textContent = `Detection error: ${error.message}`;
            console.error(error);
            clearInterval(detectInterval);
        }
    }, 100);
}

startRecognitionBtn.addEventListener('click', () => {
    status.textContent = 'Recognition started';
    startFaceRecognition();
});

// Initialize
startRecognitionBtn.disabled = true;
loadModels()
    .then(async () => {
        await processReferenceImages();
        await startVideo();
    })
    .catch(err => {
        errorMessage.textContent = `Initialization error: ${err.message}`;
        console.error(err);
    });
