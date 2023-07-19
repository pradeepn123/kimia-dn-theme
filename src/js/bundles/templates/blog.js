import 'Styles/templates/blog.scss';

document.addEventListener('DOMContentLoaded', () => {
    console.log("running");
    if ((window.location.href).includes('tagged/')) {
        const articleContainer = document.querySelector('.articles__container');
        if(articleContainer) {
            window.location.hash = '#tag-section';
        }
    }
})