'use strict';
function queue(player) {
  return player.coordinator.getQueue(player.startIndex);
}


module.exports = function (api) {
  api.registerAction('queue', queue);
}
