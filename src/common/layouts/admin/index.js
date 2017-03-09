import layout from './admin-layout.tpl';
import css from '../basic/basic-assets-css.tpl';

export { layout, css };

export default angular
  .module('layouts.admin', [
    layout.name,
    css.name,
  ]);
