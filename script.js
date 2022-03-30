const techIcons = document.querySelectorAll('.tech-icon');

techIcons.forEach((icon) => {
    icon.addEventListener('mouseover', () => {
        icon.lastElementChild.setAttribute('class', 'tech-icon-name-show');
    });
    icon.addEventListener('mouseout', () => {
        icon.lastElementChild.setAttribute('class', 'tech-icon-name-hide');
    });
});