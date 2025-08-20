document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll('.progress-bar');

    function fillProgressBars() {
        progressBars.forEach(bar => {
            const skillValue = bar.getAttribute('data-skill');
            const barPosition = bar.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (barPosition < screenHeight && bar.style.width === "0%") {
                bar.style.width = skillValue + "%";
            }
        });
    }

    window.addEventListener('scroll', fillProgressBars);
    fillProgressBars();
});
