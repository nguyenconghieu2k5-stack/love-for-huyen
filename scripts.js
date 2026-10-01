// ========================================
// KHAI BÁO BIẾN
// ========================================

let yesSize = 20;
let noDodges = 0;

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const gif = document.getElementById("gif");
const message = document.getElementById("message");
const title = document.getElementById("title");
const heartsContainer = document.getElementById("hearts-container");

const loveMusic = document.getElementById("loveMusic");
const musicBtn = document.getElementById("musicBtn");


// ========================================
// CÁC CÂU NÓI KHI NÚT "KHÔNG" CHẠY
// ========================================

const messages = [
    "Cún suy nghĩ lại đi mà 🥺",
    "Cún chắc chắn muốn chọn Không à? 😭",
    "Toii buồn đó nha... 💔",
    "Đừng làm trái tim toii đau mà 🥺",
    "Toii thích Cún nhiều lắm đó ❤️",
    "Cún không được chạy đâu nha 😆",
    "Cho toii một cơ hội đi mà 🥰",
    "Toii làm cái này riêng cho Cún đó ❤️",
    "Cún còn một cơ hội cuối đó 😖",
    "Chọn Đồng ý đi mà ❤️",
    "Nút Không sắp biến mất rồi đó 😆",
    "Cún trốn không thoát đâu nha 😜"
];


// ========================================
// SỰ KIỆN NÚT
// ========================================

yesBtn.addEventListener(
    "click",
    sayYes
);

noBtn.addEventListener(
    "mouseenter",
    dodgeNoButton
);

noBtn.addEventListener(
    "touchstart",
    dodgeNoButton,
    {
        passive: true
    }
);


// ========================================
// HUYÊN BẤM ĐỒNG Ý ❤️
// ========================================

function sayYes() {

    // Phát nhạc
    loveMusic.volume = 0.6;

    loveMusic.play().catch(() => {
        console.log(
            "Không thể tự động phát nhạc."
        );
    });


    // Đổi tiêu đề
    title.textContent =
        "Cún đồng ý rồi nhaaa ❤️";


    // Đổi lời nhắn
    message.textContent =
        "Toii biết mà... Toii yêu cún nhiều lắm đó 🥰❤️";


    // Đổi nội dung nút
    yesBtn.textContent =
        "💕 Huyên đồng ý rồi 💕";


    // Ẩn nút Không
    noBtn.style.display = "none";


    // Thêm trạng thái thành công
    document.body.classList.add(
        "love-success"
    );


    // Tim bay
    startHearts();


    // Pháo giấy
    startConfetti();


    // Hiệu ứng ảnh
    gif.classList.add(
        "success-image"
    );


    // Hiện nút nhạc
    if (musicBtn) {

        musicBtn.style.display =
            "block";

        musicBtn.textContent =
            "🎵 Nhạc đang phát";
    }
}


// ========================================
// NÚT KHÔNG CHẠY TRỐN 😆
// ========================================

function dodgeNoButton() {

    noDodges++;


    // Đổi lời nhắn
    message.style.opacity = "0";

    setTimeout(() => {

        message.textContent =
            messages[
                (noDodges - 1) %
                messages.length
            ];

        message.style.opacity = "1";

    }, 100);


    // Tăng kích thước nút Đồng ý
    yesSize += 3;

    yesBtn.style.fontSize =
        `${Math.min(
            yesSize,
            40
        )}px`;

    yesBtn.style.padding =
        `${Math.min(
            12 + noDodges,
            28
        )}px ${Math.min(
            25 + noDodges * 2,
            45
        )}px`;


    // Di chuyển nút Không
    moveNoButton();
}


// ========================================
// DI CHUYỂN NÚT KHÔNG
// ========================================

function moveNoButton() {

    const container =
        document.querySelector(
            ".button-container"
        );


    if (!container) {
        return;
    }


    // Chuyển sang absolute
    // chỉ khi nút bắt đầu chạy
    noBtn.style.position =
        "absolute";


    // Kích thước vùng chứa
    const containerWidth =
        container.clientWidth;

    const containerHeight =
        container.clientHeight;


    // Kích thước nút
    const buttonWidth =
        noBtn.offsetWidth;

    const buttonHeight =
        noBtn.offsetHeight;


    // Khoảng cách an toàn với mép
    const padding = 10;


    // Giới hạn ngang
    const maxX =
        Math.max(
            padding,
            containerWidth -
            buttonWidth -
            padding
        );


    // Giới hạn dọc
    const maxY =
        Math.max(
            padding,
            containerHeight -
            buttonHeight -
            padding
        );


    // Vị trí ngẫu nhiên
    const randomX =
        padding +
        Math.random() *
        Math.max(
            0,
            maxX - padding
        );


    const randomY =
        padding +
        Math.random() *
        Math.max(
            0,
            maxY - padding
        );


    // Đặt vị trí
    noBtn.style.left =
        `${randomX + buttonWidth / 2}px`;

    noBtn.style.top =
        `${randomY + buttonHeight / 2}px`;


    // Thu nhỏ dần
    const scale =
        Math.max(
            0.55,
            1 - noDodges * 0.04
        );


    noBtn.style.transform =
        `translate(-50%, -50%) scale(${scale})`;
}


// ========================================
// TIM BAY ❤️
// ========================================

function startHearts() {

    for (
        let i = 0;
        i < 60;
        i++
    ) {

        setTimeout(() => {

            createHeart();

        }, i * 35);
    }
}


function createHeart() {

    const heart =
        document.createElement(
            "div"
        );


    heart.className =
        "heart";


    const heartTypes = [
        "❤️",
        "💖",
        "💕",
        "💗",
        "💓",
        "💘",
        "🥰",
        "💞"
    ];


    heart.textContent =
        heartTypes[
            Math.floor(
                Math.random() *
                heartTypes.length
            )
        ];


    heart.style.left =
        `${Math.random() * 100}vw`;


    heart.style.top =
        `${80 + Math.random() * 20}vh`;


    heart.style.fontSize =
        `${20 + Math.random() * 25}px`;


    heartsContainer.appendChild(
        heart
    );


    setTimeout(() => {

        heart.remove();

    }, 2600);
}


// ========================================
// PHÁO GIẤY 🎉
// ========================================

function startConfetti() {

    for (
        let i = 0;
        i < 80;
        i++
    ) {

        setTimeout(() => {

            createConfetti();

        }, i * 25);
    }
}


function createConfetti() {

    const confetti =
        document.createElement(
            "div"
        );


    confetti.className =
        "confetti";


    confetti.style.left =
        `${Math.random() * 100}vw`;


    confetti.style.top =
        "-20px";


    confetti.style.backgroundColor =
        getRandomConfettiColor();


    confetti.style.transform =
        `rotate(${Math.random() * 360}deg)`;


    confetti.style.animationDuration =
        `${1.5 + Math.random() * 2}s`;


    document.body.appendChild(
        confetti
    );


    setTimeout(() => {

        confetti.remove();

    }, 4000);
}


// ========================================
// MÀU PHÁO GIẤY
// ========================================

function getRandomConfettiColor() {

    const colors = [
        "#ff4d6d",
        "#ff758f",
        "#ffb3c1",
        "#ffccd5",
        "#ff8fab",
        "#ffffff"
    ];


    return colors[
        Math.floor(
            Math.random() *
            colors.length
        )
    ];
}


// ========================================
// ĐIỀU KHIỂN NHẠC 🎵
// ========================================

if (musicBtn) {

    musicBtn.addEventListener(
        "click",
        () => {

            if (
                loveMusic.paused
            ) {

                loveMusic.play()
                    .then(() => {

                        musicBtn.textContent =
                            "🎵 Nhạc đang phát";

                    })
                    .catch(() => {

                        console.log(
                            "Không thể phát nhạc."
                        );

                    });

            } else {

                loveMusic.pause();

                musicBtn.textContent =
                    "🔇 Tạm dừng nhạc";
            }

        }
    );
}