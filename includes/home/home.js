var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/player_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let tv,
    playerDefaults = { autoplay: 1, autohide: 1, modestbranding: 0, rel: 0, showinfo: 0, controls: 0, disablekb: 1, enablejsapi: 0, iv_load_policy: 3 };
const vid = [
    { 'videoId': 'WC3tMMtpPUs', 'startSeconds': 37, 'endSeconds': 203, 'suggestedQuality': 'hd1080' },
    { 'videoId': 'WC3tMMtpPUs', 'startSeconds': 235, 'endSeconds': 310, 'suggestedQuality': 'hd1080' },
    { 'videoId': 'WC3tMMtpPUs', 'startSeconds': 345, 'endSeconds': 450, 'suggestedQuality': 'hd1080' },
],
    currVid = 0;

onYouTubePlayerAPIReady = () => {
    tv = new YT.Player('tv', { events: { 'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange }, playerVars: playerDefaults });
}

onPlayerReady = () => {
    // tv.loadVideoById(vid[currVid]);
    tv.loadVideoById(vid[1]);
    tv.mute();
}

onPlayerStateChange = (e) => {
    if (e.data === 1) {
        $('#tv').addClass('active');

    } else if (e.data === 2) {
        $('#tv').removeClass('active');

        //         // if (currVid === vid.length - 1) {
        //         //     currVid = 0;
        //         // } else {
        //         //     currVid++;
        //         // }
        //         // tv.loadVideoById(vid[currVid]);
        //         // tv.seekTo(vid[currVid].startSeconds);
    }
}

// const $ = jQuery;
$(document).ready(() => {
    $('.next').on('click', () => {
        tv.pauseVideo();
        tv.loadVideoById(vid[2]);

        // tv.nextVideo(vid[0]);
        // tv.seekTo(vid[currVid].startSeconds)
    });

    $('.prev').on('click', () => {
        // tv.previousVideo();
        tv.pauseVideo();
        tv.loadVideoById(vid[0]);
    });
})