import layout from './basic-layout.tpl';
import css from './basic-assets-css.tpl';

export { layout, css };

export default angular
  .module('layouts.basic', [
    layout.name,
    css.name,
  ]);
