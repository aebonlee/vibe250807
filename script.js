document.addEventListener('DOMContentLoaded', function() {

    const navbar = document.querySelector('nav');
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    // 1. 스크롤 시 네비게이션 바 스타일 변경
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. 모바일 메뉴 토글 (햄버거 아이콘 클릭)
    if (burger) {
        burger.addEventListener('click', () => {
            // CSS에서 정의한 활성 클래스를 토글
            navLinks.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });
    }

    // 3. 스크롤에 따른 콘텐츠 등장 애니메이션
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Hero 섹션의 자식 요소들에 순차적 애니메이션 적용
                if (entry.target.classList.contains('hero-section')) {
                    const heroElements = entry.target.querySelectorAll('.reveal');
                    heroElements.forEach((el, index) => {
                        setTimeout(() => {
                            el.classList.add('visible');
                        }, index * 150); // 0.15초 간격
                    });
                } else {
                    entry.target.classList.add('visible');
                }
                observer.unobserve(entry.target); // 한 번만 실행
            }
        });
    }, { threshold: 0.1 });

    // 애니메이션을 적용할 모든 대상 선택
    const animatedElements = document.querySelectorAll('.reveal');
    animatedElements.forEach(el => observer.observe(el));

});
