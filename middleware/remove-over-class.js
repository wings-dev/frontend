export default function removeOverClass({ app }) {
    if (process.browser) {
      app.router.afterEach(() => {
        const body = document.querySelector('body');
        const html = document.querySelector('html');
  
        if (body.classList.contains('over')) {
          body.classList.remove('over');
        }
  
        if (html.classList.contains('over')) {
          html.classList.remove('over');
        }
  
        if (body.style.overflow === 'hidden') {
          body.style.overflow = '';
        }

        

      });
    }
  }