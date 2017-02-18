import dashboard from './admin-dashboard-layout.tpl';
import js from './admin-assets-css-development.tpl';
import css from './admin-assets-js-development.tpl';

export { dashboard, js, css };

export default angular
  .module('layouts.admin', [
    dashboard.name,
    js.name,
    css.name,
  ]);
