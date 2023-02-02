function isScrollEnd(container) {
    return container.scrollLeft + container.offsetWidth >= container.scrollWidth
}

function isScrollStart(container) {
    return container.scrollLeft <= 0
}

function hasScroll(container) {
    return container.scrollWidth > container.offsetWidth
}

function scrollCheck(scrollable, container) {
    if (hasScroll(container)) {
        if (isScrollStart(container)) {
            scrollable.classList.remove('start-shadow');
        } else {
            scrollable.classList.add('start-shadow');
        }
        if (isScrollEnd(container)) {
            scrollable.classList.remove('end-shadow');
        } else {
            scrollable.classList.add('end-shadow');
        }
    }
}

const scrollables = document.querySelectorAll('.scroll-wrapper');

scrollables.forEach(scrollable => {
    const container = scrollable.querySelector('.scroll-wrapper .scroll-content');
    container.addEventListener('scroll', () => scrollCheck(scrollable, container))
    new ResizeObserver(() => scrollCheck(scrollable, container)).observe(container)
});