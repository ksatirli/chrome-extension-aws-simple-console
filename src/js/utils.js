// config options
var config = {
  selectors: {
    hidden: 'not(:checked)',
    visible: 'checked'
  },
  classNames: {
    service: 'service'
  }
};

/**
 * get items based on class name and checkbox status
 *
 * @method getItems
 * @param {String} className A string containing the class to select on
 * @param {String} checkboxStatus A string containing the check box status to select on
 * @return {Object} Returns an array of the selected items
 */
function getItems(className, checkboxStatus) {
  var items = [];

  $('input.' + className + ':' + checkboxStatus).each(function(index) {
    items.push($(this).val());
  });

  return items;
}

/**
 * get options from Chrome storage
 *
 * @method getOptions
 * @return {Object} Returns an object  containing config options
 */
function getOptions(callback) {
  chrome.storage.sync.get('cultivatedOpsAwsSimpleConsole', callback);
}
