//
//  VideoEditor.js
//
//  Created by Josh Bavari on 01-14-2014
//  Modified by Ross Martin on 01-29-15
//

var exec = require('cordova/exec');
var pluginName = 'VideoEditor2';

function VideoEditor2() {}

VideoEditor2.prototype.transcodeVideo = function(success, error, options) {
  var self = this;
  var win = function(result) {
    if (typeof result.progress !== 'undefined') {
      if (typeof options.progress === 'function') {
        options.progress(result.progress);
      }
    } else {
      success(result);
    }
  };
  exec(win, error, pluginName, 'transcodeVideo', [options]);
};

VideoEditor2.prototype.trim = function(success, error, options) {
	var self = this;
	var win = function(result) {
	  if (typeof result.progress !== 'undefined') {
		if (typeof options.progress === 'function') {
		  options.progress(result.progress);
		}
	  } else {
		success(result);
	  }
	};
	exec(win, error, pluginName, 'trim', [options]);
};

VideoEditor2.prototype.createThumbnail = function(success, error, options) {
  exec(success, error, pluginName, 'createThumbnail', [options]);
};

VideoEditor2.prototype.getVideoInfo = function(success, error, options) {
  exec(success, error, pluginName, 'getVideoInfo', [options]);
};


module.exports = new VideoEditor2();
