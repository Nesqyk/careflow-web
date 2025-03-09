document.querySelectorAll('.accordion-item').forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');

    header.addEventListener('click', () => {
        if (content.style.maxHeight) {
            content.style.maxHeight = null; 
        } else {
            document.querySelectorAll('.accordion-content').forEach(c => {
                c.style.maxHeight = null; 
            });
            content.style.maxHeight = content.scrollHeight + 'px'; 
        }
    });
});

