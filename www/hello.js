/*global cordova, module*/

module.exports = {
    say: function (name, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "Hello", "say", [name]);
    }
};