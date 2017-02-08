export default class DialogController {

  /*@ngInject*/
  constructor($scope, $log, ChildService, ListenrService, ToastrService) {
    this.childService = ChildService;
    this.listenrService = ListenrService;
    this.toastrService = ToastrService;
    this.$scope = $scope;
    $log.debug(this.$scope.ngDialogData);
    this.dialogData = this.$scope.ngDialogData;
    this.$scope.errMessage = '';

    // Edit Child Dialog.
    this.$scope.childName = this.$scope.ngDialogData.childName;

    this.$log = $log;

    this.childName = this.dialogData.childName;

    // NotificationDialog
    this.notifyContent = this.dialogData.notifyContent;
  }

  editChildConfirm() {
    if (this.$scope.childName) {
      this.childService.updateChild(this.dialogData.childId, this.$scope.childName).then((value) => {
        if (!value.error) {
          this.$scope.closeThisDialog();
          this.listenrService.updateMenu();
          this.listenrService.updateChild();
        }
      }, (error) => {
        this.toastrService.error(`Edit child error, err msg: ${error.error}`);
      });
    } else {
      this.toastrService.warning('Please enter child name :)');
    }
  }

  deleteChildConfirm() {
    this.childService.deleteChild(this.dialogData.childId).then((value) => {
      if (!value.error) {
        this.listenrService.updateMenu();
        this.listenrService.updateChilds();
        this.$scope.closeThisDialog();
      } else {
        this.toastrService.error(`Delte child error, err msg: ${value.error}`);
      }
    }, (error) => {
      this.toastrService.error(`Delte child error, err msg: ${error.error}`);
    });
  }
}
