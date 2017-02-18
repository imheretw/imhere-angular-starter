import layout from './admin-layout.tpl';
import css from './admin-assets-css.tpl';

export { layout, css };

export default angular
  .module('layouts.admin', [
    layout.name,
    css.name,
  ]);
