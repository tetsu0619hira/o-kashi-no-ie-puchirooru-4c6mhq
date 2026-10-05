// All contact actions are ordinary links and also work without JavaScript.
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.header nav a');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => {
        if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -45% 0px' });
  sections.forEach(section => observer.observe(section));
}
