$(document).ready(function() {

  $.fn.extend({

    updateDeleteButton: function() {

      var updateButton = function() {
        var deleteBtn = $('.record-toolbar .delete-record.initialised');
        if (deleteBtn.length > 0) {
          deleteTarget = $(deleteBtn).attr('data-target');
          if (deleteTarget.match(/resources/)) {
            $(deleteBtn).html('Delete Resource. Careful now!');
          }
          console.log(deleteTarget);
        }
      }

      $( document ).ajaxComplete(function() {
        updateButton();
      });

    }

  });

  $(document).updateDeleteButton();

});
