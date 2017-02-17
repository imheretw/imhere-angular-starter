export default class ChatController {
  /*@ngInject*/
  constructor($state) {
    this.$state = $state;
    const unassigned = [
      {
        form: '+1234567',
        msg: 'hi',
      },
      {
        form: '+1235555',
        msg: 'hi2',
      },
    ];
    const consultants = [
      {
        name: 'Coomy',
        status: 1,
        msgListNumb: 1000,
      },
      {
        name: 'Coomy2',
        status: 0,
        msgListNumb: 500,
      },
      {
        name: 'Coomy3',
        status: 0,
        msgListNumb: 1400,
      },
      {
        name: 'Coomy4',
        status: 0,
        msgListNumb: 1000,
      },
      {
        name: 'Coomy5',
        status: 1,
        msgListNumb: 1000,
      },
      {
        name: 'Coomy6',
        status: 1,
        msgListNumb: 500,
      },
      {
        name: 'Coomy7',
        status: 1,
        msgListNumb: 1400,
      },
      {
        name: 'Coomy8',
        status: 0,
        msgListNumb: 1050,
      },
      {
        name: 'Coomy9',
        status: 1,
        msgListNumb: 600,
      },
    ];
    this.consultantsList = {
      unassigned: unassigned,
      consultants: consultants,
    };
  }

}
