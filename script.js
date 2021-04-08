const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element and play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        console.log('Error occurred in selecting media stream', error);
    }
}

// Register Event Listeners
button.addEventListener('click', async () => {
    button.disabled = true;     // Disable button 
    await videoElement.requestPictureInPicture();       // Start picture in picture
    button.disabled = false;    // Reset Button
});


// On load
selectMediaStream();