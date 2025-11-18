// Scroll Reveal (Kaydırma Animasyonu)
        window.addEventListener('scroll', reveal);
        function reveal(){
            var reveals = document.querySelectorAll('.reveal');
            for(var i = 0; i < reveals.length; i++){
                var windowHeight = window.innerHeight;
                var revealTop = reveals[i].getBoundingClientRect().top;
                if(revealTop < windowHeight - 100){
                    reveals[i].classList.add('active');
                }
            }
        }
        document.addEventListener('DOMContentLoaded', reveal);

        // RENK DEĞİŞTİRME FONKSİYONU
        function changeColor(imageSrc, colorName, clickedBall) {
            var mainImg = document.getElementById('mainProductImage');
            var nameDisplay = document.getElementById('colorNameDisplay');
            var allBalls = document.querySelectorAll('.ball');

            // 1. Tüm toplardan 'active' sınıfını kaldır
            allBalls.forEach(ball => ball.classList.remove('active'));
            
            // 2. Tıklanan topa 'active' sınıfı ekle
            clickedBall.classList.add('active');

            // 3. Resim geçiş efekti (Opaklığı düşür -> değiştir -> yükselt)
            mainImg.style.opacity = 0;

            setTimeout(function() {
                mainImg.src = imageSrc; // Resim kaynağını değiştir
                nameDisplay.innerText = colorName; // İsmi değiştir
                mainImg.style.opacity = 1; // Tekrar görünür yap
            }, 200); // 200ms bekle (CSS transition ile uyumlu)
        }
        function toggleMenu() {
            const navLinks = document.getElementById('navLinks');
            navLinks.classList.toggle('active');
        }