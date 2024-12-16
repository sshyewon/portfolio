$(function(){
    // alert('화이팅')
   // 팝업 요소와 이미지 확대클릭
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const closeBtn = document.getElementById('close-btn');

// 모든 클릭 가능한 이미지
const clickableImgs = document.querySelectorAll('.clickable-img');

// 각 이미지에 클릭 이벤트
clickableImgs.forEach(img => {
    img.addEventListener('click', function() {
        popup.style.display = 'flex';
        popupImg.src = this.src; // 클릭한 이미지의 소스를 팝업 이미지에 설정
    });
});

// 닫기 버튼 클릭 시 팝업을 닫도록 설정
closeBtn.addEventListener('click', function() {
    popup.style.display = 'none';
});

popup.addEventListener('click', function() {
    popup.style.display = 'none';
});


// gotop 스크롤 !
$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 700) {
            $('.gotop').fadeIn();
        } else {
            $('.gotop').fadeOut();
        }
    });

    $('.gotop').click(function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 200); // 0 위치로 스크롤
    });
});

// 메뉴 반응형
$(document).ready(function() {
    $('nav ul li:first-child i').click(function() {
        $('nav ul li:not(:first-child)').toggleClass('show');
    });
});

})
