let state = false;
let btn = document.querySelector(".btn");
let record = document.querySelector(".record");
let toneArm = document.querySelector(".tone-arm");
let song = document.querySelector(".my-song");
let slider = document.querySelector(".slider");
let playlist = document.getElementById("playlist");
let songTitleElement = document.getElementById("song-title");

btn.addEventListener("click", () => {
    if (state == false) {
        record.classList.add("on"); //thêm on vào ptu record - đĩa hoạt động -> phát nhạc
        toneArm.classList.add("play"); // thêm play vào toneArm - cần gạt đang ở vị trí phát nhạc
        setTimeout(() => {
            song.play();
            btn.classList.add("blink"); // Thêm lớp blink khi phát nhạc
        }, 1000); // thiết lập một độ trễ 1000 mili giây = 1 giây trước khi thực hiện phương thức (tốc độ cần gạt di chuyển)
    } else {
        record.classList.remove("on"); //remove on khỏi record - đĩa không còn hoạt động
        toneArm.classList.remove("play"); //remove play khỏi toneArm - cần gạt không ở vị trí phát nhạc
        song.pause(); //tạm dừng bài hát đang phát
        btn.classList.remove("blink"); // Thêm lớp blink khi phát nhạc
    }
    state = !state; // Chuyển đổi giá trị của state (biến đổi giữa phát và tạm dừng bài hát)
});

btn.addEventListener("dblclick", () => {
    song.currentTime = 0; // Đặt thời gian phát lại về 0
    song.play(); // Phát lại bài hát
    btn.classList.add("blink");
});
