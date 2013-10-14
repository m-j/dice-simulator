var karmaCommonConf = require('./karma.conf.js');

module.exports = karmaCommonConf.extendKarmaConf({
    autoWatch : true
})