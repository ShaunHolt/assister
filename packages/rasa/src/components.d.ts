/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface RasaBot {
    'conversation': string;
    'gap': 'none' | 'short' | 'long';
    'header': string;
    /**
    * Rasa server address
    */
    'server': string;
    'theme': 'WhatsApp' | 'Simple';
    'token'?: string;
  }
}

declare global {


  interface HTMLRasaBotElement extends Components.RasaBot, HTMLStencilElement {}
  var HTMLRasaBotElement: {
    prototype: HTMLRasaBotElement;
    new (): HTMLRasaBotElement;
  };
  interface HTMLElementTagNameMap {
    'rasa-bot': HTMLRasaBotElement;
  }
}

declare namespace LocalJSX {
  interface RasaBot {
    'conversation'?: string;
    'gap'?: 'none' | 'short' | 'long';
    'header'?: string;
    /**
    * Rasa server address
    */
    'server'?: string;
    'theme'?: 'WhatsApp' | 'Simple';
    'token'?: string;
  }

  interface IntrinsicElements {
    'rasa-bot': RasaBot;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'rasa-bot': LocalJSX.RasaBot & JSXBase.HTMLAttributes<HTMLRasaBotElement>;
    }
  }
}


