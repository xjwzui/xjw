// script.js

navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
        var video = document.getElementById('live');
        video.srcObject = stream;
        video.onloadedmetadata = function (e) {
            video.play();
        };
    })
    .catch(function (err) {
        console.log("获取用户媒体设备失败:", err);
    });
