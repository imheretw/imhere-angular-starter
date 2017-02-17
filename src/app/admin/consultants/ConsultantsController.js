import _ from 'lodash';

export default class ConsultantsController {
  /*@ngInject*/
  constructor($state) {
    this.$state = $state;
    const tabs = [
      {
        name: 'Consultants',
        state: 'admin.setting.consultants',
      },
      {
        name: 'Widget',
        state: 'admin.setting.widget',
      },
    ];
    const consultants = [
      {
        name: 'Coomy',
        email: 'test1@gmail.com',
        img: 'https://avatars0.githubusercontent.com/coomysky',
      },
      {
        name: 'Kos',
        email: 'test2@gmail.com',
        img: 'https://lh3.googleusercontent.com/-OPHrjqsA4eY/AAAAAAAAAAI/AAAAAAAAExw/xFY-JBMy4Vo/s640/photo.jpg',
      },
      {
        name: 'jassic',
        email: 'test3@gmail.com',
        img: 'https://avatars0.githubusercontent.com/coomysky',
      },
      {
        name: 'ken',
        email: 'test4@gmail.com',
        img: 'https://avatars0.githubusercontent.com/coomysky',
      },
    ];
    this.settingTabs = tabs;
    this.consultants = consultants;
  }

  addConsultant(user) {
    const consultant = _.cloneDeep(user);
    consultant.img = 'https://avatars0.githubusercontent.com/coomysky';
    this.consultants = [consultant, ...this.consultants];
  }

}
