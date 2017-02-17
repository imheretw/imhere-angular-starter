
export default class WidgetController {
  /*@ngInject*/
  constructor($state) {
    this.$state = $state;

    const widgets = [
      {
        twilio_sid: '1231313d',
        twilio_token: 'XDDKXDDDEXDDEDDEDDD',
      },
      {
        twilio_sid: '1231313d',
        twilio_token: 'XDDKXDDDEXDDEDDEDDD',
      },
    ];
    this.widgets = widgets;
  }

}
