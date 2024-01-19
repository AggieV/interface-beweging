// 
document.addEventListener('DOMContentLoaded', function() {
    const video1 = document.getElementById('myVideo1');
    const video2 = document.getElementById('myVideo2');
    const video3 = document.getElementById('myVideo3');
    const playPauseButton1 = document.getElementById('playPauseButton1');
    const playPauseButton2 = document.getElementById('playPauseButton2');
    const playPauseButton3 = document.getElementById('playPauseButton3');
    const audio1 = document.getElementById('audio1');

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
            // button.innerText = 'Pause';
            playAudio();
        } else {
            video.pause();
            // button.innerText = 'Play';
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

//audio//

    function playAudio() {
        audio1.volume = 0.2; // Adjust the volume as needed (0.3 for 30% volume)
        audio1.play();
    }

    function pauseAudio() {
        audio1.pause();
    }
});

//moving icons//

document.addEventListener('DOMContentLoaded', function() {
    const icon1 = document.getElementById('icon1');
    const icon2 = document.getElementById('icon2');
    const icon3 = document.getElementById('icon3');

    const playPauseButton1 = document.getElementById('playPauseButton1');
    const playPauseButton2 = document.getElementById('playPauseButton2');
    const playPauseButton3 = document.getElementById('playPauseButton3');

    // Handle hover events for icon 1
    playPauseButton1.addEventListener('mouseenter', function() {
        icon1.play();
    });

    playPauseButton1.addEventListener('mouseleave', function() {
        icon1.pause();
    });

    // Handle hover events for icon 2
    playPauseButton2.addEventListener('mouseenter', function() {
        icon2.play();
    });

    playPauseButton2.addEventListener('mouseleave', function() {
        icon2.pause();
    });

    // Handle hover events for icon 3
    playPauseButton3.addEventListener('mouseenter', function() {
        icon3.play();
    });

    playPauseButton3.addEventListener('mouseleave', function() {
        icon3.pause();
    });
});


//add border to button when clicked//
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.custombutton');

    function handleClick(event) {
        // Remove 'active' class from all buttons
        buttons.forEach(button => {
            button.classList.remove('active');
        });

        // Toggle 'active' class for the clicked button
        event.currentTarget.classList.toggle('active');
    }

    buttons.forEach(button => {
        button.addEventListener('click', handleClick);
    });
});

//loading screen//

// document.addEventListener('DOMContentLoaded', function() {
//     const loadingScreen = document.getElementById('loading-screen');
//     const countdownElement = document.getElementById('countdown');
//     const loadingVideo = document.getElementById('loading-video');
//     let countdownValue = 8; // Initial countdown value

//     // Start countdown immediately after the video starts playing
//     // loadingVideo.addEventListener('playing', function() {
//     //     setInterval(pulseVideo, 2000); // Pulse video every 2 seconds
//     //     countdown();
//     //     console.log('test');
//     // });

//     // Pulse video function 
//     function pulseVideo() {
//         loadingVideo.pause();
//         setTimeout(() => {
//             loadingVideo.play();
//         }, 100); // Pause for a short duration to create the pulse effect
//     }

//     // Countdown function
//     function countdown() {
//         countdownElement.textContent = countdownValue;
//         countdownValue -= 1;

//         if (countdownValue >= 0) {
//             setTimeout(countdown, 1000); // Update countdown every second
//         } else {
//             loadingScreen.style.opacity = 0; // Fade out loading screen
//             setTimeout(() => {
//                 loadingScreen.style.display = 'none'; // Hide loading screen after fade out
//                 document.body.style.overflow = 'auto'; // Show scroll bars
//             }, 1000);
//         }
//     }

//     // Start the video and fade in loading screen
//     loadingVideo.play();
//     console.log('at te end of the js')
//     setInterval(pulseVideo, 2000); // Pulse video every 2 seconds
//     countdown();
//     loadingScreen.style.opacity = 1; // Fade in loading screen
// });

//add border to button when clicked//

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.custombutton-active');

    function handleClick(event) {
        buttons.forEach(button => {
            button.classList.remove('active'); // Remove 'active' class from all buttons
        });

        event.currentTarget.classList.add('active'); // Add 'active' class to the clicked button
    }

    buttons.forEach(button => {
        button.addEventListener('click', handleClick);
    });
});



//loading screen//

document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const countdownElement = document.getElementById('countdown');
    const loadingVideo = document.getElementById('loading-video');
    let countdownValue = 20; // Initial countdown value

    // Pulse video function 
    function pulseVideo() {
        loadingVideo.pause();
        setTimeout(() => {
            loadingVideo.play();
        }, 100); // Pause for a short duration to create the pulse effect
    }

    // Countdown function
    function countdown() {
        countdownElement.textContent = countdownValue;
        countdownValue -= 1;

        if (countdownValue >= 0) {
            setTimeout(countdown, 1000); // Update countdown every second
        } else {
            loadingScreen.style.opacity = 0; // Fade out loading screen
            setTimeout(() => {
                loadingScreen.style.display = 'none'; // Hide loading screen after fade out
                document.body.style.overflow = 'auto'; // Show scroll bars
            }, 1000);
        }
    }

    // Start the video and fade in loading screen after a delay
    setTimeout(() => {
        loadingVideo.play();
        loadingVideo.playbackRate = 2;
        setInterval(pulseVideo, 2000); // Pulse video every 2 seconds
        countdown();
        loadingScreen.style.opacity = 1; // Fade in loading screen
    }, 500); // Adjust the delay (in milliseconds) to synchronize the start
});


//rainbow title


document.addEventListener('DOMContentLoaded', function() {
    const title = document.getElementById('rainbow-title');
    const text = title.textContent.trim();
    title.textContent = '';

    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        title.appendChild(span);
    }

    let hue = 0;
    setInterval(function() {
        hue = (hue + 1) % 360;
        const spans = title.querySelectorAll('span');

        spans.forEach((span, index) => {
            span.style.color = `hsl(${(hue + index * (360 / text.length)) % 360}, 70%, 50%)`; // Adjust saturation and lightness as needed
        });
    }, 50); // Adjust the interval duration as needed
});

