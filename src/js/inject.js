//
// // Restores select box and checkbox state using the preferences
// // stored in chrome.storage.
// function restore_options() {
//   // Use default value color = 'red' and likesColor = true.
//   chrome.storage.sync.get({
//     favoriteColor: 'red',
//     likesColor: true
//   }, function(items) {
//     document.getElementById('color').value = items.favoriteColor;
//     document.getElementById('like').checked = items.likesColor;
//   });
// }
// document.addEventListener('DOMContentLoaded', restore_options);
// document.getElementById('save').addEventListener('click',
//     save_options);


// $('a.service[data-service-id="eb"]').hide(); // Elastic Beanstalk
//
// // Storage & Content Delivery
// $('a.service[data-service-id="imex"]').hide(); // Import Export Snowball
// $('a.service[data-service-id="sg"]').hide(); // Storage Gateway
//
// // Database
// $('a.service[data-service-id="ddb"]').hide(); // DynamoDB
// $('a.service[data-service-id="rs"]').hide(); // Redshift
//
// // Networking
// $('a.service[data-service-id="dc"]').hide(); // Direct Connect
//
// // Developer Tools
// $('a.service[data-service-id="cd"]').hide(); // CodeDeploy
// $('a.service[data-service-id="cc"]').hide(); // CodeCommit
// $('a.service[data-service-id="cp"]').hide(); // CodePipeline
//
// // Management Tools
// $('a.service[data-service-id="cfo"]').hide(); // CloudFormation
// $('a.service[data-service-id="ops"]').hide(); // OpsWorks
// $('a.service[data-service-id="sc"]').hide(); // Service Catalog
//
// // Analytics
// $('a.service[data-service-id="emr"]').hide(); // EMR
// $('a.service[data-service-id="dp"]').hide(); // Data Pipeline
// $('a.service[data-service-id="ki"]').hide(); // Kinesis
// $('a.service[data-service-id="ml"]').hide(); // Machine Learning
//
// // Application Services
// $('a.service[data-service-id="aps"]').hide(); // AppStream
// $('a.service[data-service-id="cs"]').hide(); // CloudSearch
// $('a.service[data-service-id="swf"]').hide(); // SWF
//
// // Enterprise Applications
// $('a.service[data-service-id="wks"]').hide(); // WorkSpaces
//
// // Sidebar:
// $('div#awsConsoleMobileApp').hide(); // WorkSpaces
