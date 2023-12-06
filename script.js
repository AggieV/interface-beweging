// 
document.addEventListener('DOMContentLoaded', function() {
    const video1 = document.getElementById('myVideo1');
    const video2 = document.getElementById('myVideo2');
    const video3 = document.getElementById('myVideo3');
    const playPauseButton1 = document.getElementById('playPauseButton1');
    const playPauseButton2 = document.getElementById('playPauseButton2');
    const playPauseButton3 = document.getElementById('playPauseButton3');
    const audio1 = document.getElementById('audio1');
    const audio2 = document.getElementById('audio2');

    playPauseButton1.addEventListener('click', function() {
        handlePlayPause(video1, playPauseButton1);
        hideVideosExcept(video1);
    });

    playPauseButton2.addEventListener('click', function() {
        handlePlayPause(video2, playPauseButton2);
        hideVideosExcept(video2);
    });

    playPauseButton3.addEventListener('click', function() {
        handlePlayPause(video3, playPauseButton3);
        hideVideosExcept(video3);
    });

    function handlePlayPause(video, button) {
        if (video.paused) {
            video.play();
            button.innerText = 'Pause';
            playAudio();
        } else {
            video.pause();
            button.innerText = 'Play';
            pauseAudio();
        }
    }

    function hideVideosExcept(videoToShow) {
        const allVideos = document.querySelectorAll('.video-container');
        allVideos.forEach(video => {
            if (video !== videoToShow) {
                video.style.display = 'none';
            } else {
                video.style.display = 'block';
            }
        });
    }

    function playAudio() {
        audio1.volume = 0.3; // Adjust the volume as needed (0.3 for 30% volume)
        audio1.play();
        audio2.play();
    }

    function pauseAudio() {
        audio1.pause();
        audio2.pause();
    }
});
