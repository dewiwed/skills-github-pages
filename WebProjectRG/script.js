let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? "block" : "none";
    });
}

// ฟังก์ชันเลื่อนไปข้างหน้า
function nextSlide() {
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlide(slideIndex);
}

// ฟังก์ชันเลื่อนไปข้างหลัง
function prevSlide() {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    showSlide(slideIndex);
}

// เริ่มต้นแสดงรูปแรก
showSlide(slideIndex);

// เชื่อมปุ่มกับฟังก์ชัน
document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);

// สไลด์อัตโนมัติทุก 3 วินาที
setInterval(nextSlide, 3000);


function showContent(page) {
        // ซ่อนทุกหน้า
        document.querySelectorAll('.content').forEach(content => {
            content.style.display = 'none';
        });

        // แสดงเฉพาะหน้าที่ถูกเลือก
        document.getElementById(page).style.display = 'block';
    }

    // โหลดหน้า Home ทันทีเมื่อเปิดเว็บ
    window.onload = function() {
        showContent('home');
    };


