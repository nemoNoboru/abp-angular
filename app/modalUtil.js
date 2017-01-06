app.service('modalUtil', function() {
  var self = this;

  self.okModal = $('[data-remodal-id=ok]').remodal();
  self.errorModal = $('[data-remodal-id=error]').remodal();

  self.ok = function() {
    self.okModal.open();
  }

  self.error = function() {
    self.errorModal.open();
  }
});
