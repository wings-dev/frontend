export default function removeOverClass({ app }) {
    if (process.browser) {
      app.router.afterEach(() => {
        const body = document.querySelector('body');
        const html = document.querySelector('html');
        const header = document.querySelector('.Header');
  
        if (body.classList.contains('over')) {
          body.classList.remove('over');
        }
  
        if (html.classList.contains('over')) {
          html.classList.remove('over');
        }

        if (body.classList.contains('detail-over')) {
          body.classList.remove('detail-over');
        }
  
        if (html.classList.contains('detail-over')) {
          html.classList.remove('detail-over');
        }

        if (header.classList.contains('Header-z')) {
          header.classList.remove('Header-z');
        }
  
        if (body.style.overflow === 'hidden') {
          body.style.overflow = '';
        }

      });
    }
  }