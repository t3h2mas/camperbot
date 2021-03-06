'use strict';

const AppConfig = require('../../config/AppConfig');

const TextLib = {
  // we only show the first para
  // and limit to 20 lines
  trimLines: function(data, lines) {
    const part = data.split('\n## ')[0];
    lines = lines || AppConfig.MAX_WIKI_LINES;
    let subset = part.split('\n');
    subset = subset.slice(0, lines).join('\n');
    return subset;
  },

  mdLink: function(text, uri) {
    return '[' + text + '](' + uri + ')';
  },

  dashedName: function(str) {
    if (!str) { return; }
    str = str.replace(/\s/g, '-');
    str = str.toLowerCase();
    // in case of doubles
    str = str.replace('--', '-');
    str = str.replace('.md', '');
    str = str.replace(/([^a-z0-9áéíóúñü_@\-\s]|[\t\n\f\r\v\0])/gim, '');
    /* eslint-disable consistent-return */
    return str;
    /* eslint-enable consistent-return */
  }
};

module.exports = TextLib;
