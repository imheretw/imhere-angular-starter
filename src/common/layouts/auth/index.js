import layout from './auth-layout.tpl';
import css from '../basic/basic-assets-css.tpl';

export { layout, css };

export default angular
  .module('layouts.auth', [
    layout.name,
    css.name,
  ]);
