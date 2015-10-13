/**
 * save options to Chrome storage
 *
 * @method saveOptions
 * @return {Boolean} Returns a boolean true upon completion
 */
function saveOptions() {
  var hiddenItems = getItems('service', config.selectors.hidden);
  var visibleItems = getItems('service', config.selectors.visible);

  var options = {
    hidden: hiddenItems,
    visible: visibleItems
  };

  chrome.storage.sync.set({ confKitAwsSimpleConsole: options }, function() {
    return true;
  });
}

function applyOptions() {
  getOptions(function(data) {
    data.confKitAwsSimpleConsole.hidden.forEach( function(itemId) {
      // hide item from options listing
      $('input.' + config.classNames.service + '[value=' + itemId + ']').prop('checked', false);
    });
  });
}

// restore options on `DOMContentLoaded`
$(document).ready(applyOptions);

// save options whenever a checkbox is changed
$('input.service').change(saveOptions);
