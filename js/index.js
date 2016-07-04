FastClick.attach(document.body);
~function () {
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / 640 * 100 + "px";
}();

function changeEnd(swiper) {
    var n = swiper.activeIndex,
        slideAry = swiper.slides;
    for (var i = 0, len = slideAry.length; i < len; i++) {
        var curSlide = slideAry[i];
        if (i === n) {
            if (n === 0 || n === 6) {
                curSlide.id = 'page6';
            } else if (n === 1 || n === 7) {
                curSlide.id = 'page1';
            } else {
                curSlide.id = 'page' + n;
            }
            continue;
        }
        curSlide.id = null;
    }

}

var zhiWen=document.getElementById('zhiwen'),
    mask=document.getElementById('mask'),
    fingerLine=document.getElementById('finger-line'),
    arrow=document.getElementById('arrow');
zhiWen.onclick=function(){
    fingerLine.style.display='block';
    fingerLine.className='finger-line finger-line-move';
    window.setTimeout(function(){
        mask.className='mask maskMove';
        window.setTimeout(function(){
            new Swiper(".swiper-container", {
                direction: "vertical",
                loop: true,
                onSlidePrevEnd: changeEnd,
                onSlideNextEnd: changeEnd
            });
            var music = document.getElementById("music"),
                musicAudio = document.getElementById("musicAudio");
            window.setTimeout(function () {
                musicAudio.play();
                musicAudio.addEventListener("canplay", function () {
                    music.style.display = "block";
                    music.className = "music move";
                }, false);
            }, 1000);
            music.addEventListener("click", function () {
                if (musicAudio.paused) {
                    musicAudio.play();
                    music.className = "music move";
                    return;
                }
                musicAudio.pause();
                music.className = "music";
            }, false);
        },500);
    },500)
};













