class HTMLTFXDefinitionElement extends HTMLElement {
  constructor() {
    super();
    window.addEventListener('DOMContentLoaded', () => {
      const jsonLDElement = document.createElement('script');
      jsonLDElement.setAttribute('type', 'application/ld+json');
      document.querySelector('head').append(jsonLDElement);
      let parserPath = './parser.js';
      if (this.hasAttribute('version')) {
        const tfxVersion = this.getAttribute('version');
        parserPath = `https://unpkg.com/@assister/tfx@${tfxVersion}/parser.js`
      }
      const update = () => import(parserPath)
        .then(({parse}) => parse)
        .then(parse => parse(this))
        .then(jsonLD => {
          console.log(jsonLD)
          jsonLDElement.innerHTML = jsonLD;
        });
      update();
      const observer = new MutationObserver(update);
      observer.observe(this, {subtree: true, attributes: true});
    });    
  }
}

customElements.define('tfx-definition', HTMLTFXDefinitionElement);
