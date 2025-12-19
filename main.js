'use strict';

{
    document.addEventListener("DOMContentLoaded", () => {
        const openBtn = document.getElementById("open");
        const closeBtn = document.getElementById("close");
        const overlay = document.querySelector(".overlay");

        // メニューを開く
        openBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            overlay.classList.add("show");
            document.body.style.overflow = "hidden"; // 背景スクロール禁止
        });

        // ×ボタンで閉じる
        closeBtn.addEventListener("click", () => {
            overlay.classList.remove("show");
            document.body.style.overflow = ""; // スクロール解除
        });

        // overlay 背景クリックで閉じる
        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) {
                overlay.classList.remove("show");
                document.body.style.overflow = "";
            }
        });

        // overlay 内アンカーリンククリック時
        const overlayLinks = overlay.querySelectorAll("a[href^='#']");
        overlayLinks.forEach(link => {
            link.addEventListener("click", (e) => {
                overlay.classList.remove("show");
                document.body.style.overflow = "";

                // 少し遅延させるとスムーズスクロールが反映される
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    setTimeout(() => {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 100);
                }
            });
        });
    });

}


{
    document.addEventListener("DOMContentLoaded", () => {

        // .show を付けたい要素
        const targets = document.querySelectorAll(
            ".company h2, .company p, .explanation, .sr-rt, .sr-lt, .recruit-left, .job-detail dl,  .common-head h5,  .common-head h6, .message-img, .message-text, .ab-container > div"
        );

        const options = {
            root: null, // ビューポート
            rootMargin: "0px",
            threshold: 0.2 // 20%見えたら発火
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target); // 一度だけ実行
                }
            });
        }, options);

        targets.forEach(target => {
            observer.observe(target);
        });

    });

}

