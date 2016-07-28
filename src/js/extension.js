/**
 * hide items from AWS Console
 *
 * @method hideItems
 * @return {Boolean} Returns a boolean true upon completion
 */
function hideItems() {
  getOptions(function(data) {

    // hide items from AWS console
    data.cultivatedOpsAwsSimpleConsole.hidden.forEach( function(itemId) {
      $('a.service[data-service-id="' + itemId + '"]').hide();
    });

  });

  return true;
}

// run hideItems once page has fully loaded; based on input from http://dcmnt.me/1WZMCZ6
chrome.extension.sendMessage({}, function(response) {
  var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === 'complete') {
      clearInterval(readyStateCheckInterval);

      hideItems();
    }
	}, 10);
});
