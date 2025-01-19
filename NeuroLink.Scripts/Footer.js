const footer_head_button = document.querySelector('.footer-head-button');
const footer_body_support_btn = document.querySelector('.footer-body-support-btn');
const professor = document.querySelector('.professor');
const footer_body_info = document.querySelectorAll('.footer-body-info');

professor.onclick = function() {
    window.open('https://www.linkedin.com/in/mohammed-ameksa/', '_blank');
}

footer_body_info.forEach((info, index) => {
    info.onclick = function() {
        const text = this.textContent;
        if (index == 1 || index == 2) {
            window.open(text, '_blank');
            return;
        }
        else {
            navigator.clipboard.writeText(text).then(() => {
                alert(`${info.id} has been copied to clipboard:`);
            }).catch(err => {
                alert('Failed to copy text:', err);
            });
        }
    };
});

footer_head_button.onclick = footer_body_support_btn.onclick = function() {
    alert('This service is not available now! Check later.');
}