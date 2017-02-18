import dashboard from './admin-dashboard-layout.tpl';
import css from './admin-assets-css-development.tpl';

export { dashboard, css };

export default angular
  .module('layouts.admin', [
    dashboard.name,
    css.name,
  ]);
