// create something we would want to reuse
const log = {
  info: function(info) {
    console.log(`Info:  ${info}`);
  },
  warning: function(warning) {
    console.log(`Warning: ${warning}`);
  },
  error: function(error) {
    console.log(`Error: ${error}`);
  }
};

// Export using global module object from node
module.exports = log;
