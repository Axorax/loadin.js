export const loadin = {
  page: (options = {}) => {
      const l = document.createElement('div');
      l.id = 'loadinjs-page';

      l.style.position = options.position || 'fixed';
      l.style.top = options.top || '0';
      l.style.left = options.left || '0';
      l.style.width = options.width || '0%';
      l.style.height = options.height || '5px';
      l.style.background = options.bg || '#537FE7';
      l.style.zIndex = options.zIndex || '9999';
      l.style.transition = options.transition || 'width 0.2s ease-out';
      if (options.css) {
          l.style.cssText += options.css
      };

      document.querySelector(`${options.append || 'body'}`).appendChild(l);

      function update() {
          if (document.readyState === 'complete') {
              l.style.width = '100%';
              setTimeout(() => {
                  l.remove();
              }, 500);
          } else {
              const progress = window.scrollY / (document.body.scrollHeight - window.innerHeight);
              l.style.width = `${progress * 100}%`;
              requestAnimationFrame(update);
          }
      }

      requestAnimationFrame(update);
  },
  create: (options = {}) => {
      const l = document.createElement('div'),
          id = 'loadinjs-' + Math.ceil(999 * Math.random());
      l.className = options.class || '';
      l.id = id;
      document.querySelector(`${options.append || 'body'}`).appendChild(l);
      return id;
  },
  applyDefault: (id) => {
      document.querySelector('#' + id).style.cssText += 'height:5px;width:0%;position:fixed;top:0;left:0;z-index:9999;transition:width 0.2s ease-out;background:#537FE7';
  },
  css: (id, css) => {
      document.querySelector('#' + id).style.cssText += css;
  },
  width: (id, width) => {
      document.querySelector('#' + id).style.width = width;
  },
  remove: (id) => {
      document.querySelector('#' + id).remove();
  }
}

export default loadin;