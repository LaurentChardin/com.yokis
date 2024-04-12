/* eslint-disable no-unused-vars */

'use strict';

const { Cluster, ZCLDataTypes } = require('zigbee-clusters');

class YokisSubSystemCluster extends Cluster {

  static get ID() {
    return 64516;
  }

  static get NAME() {
    return 'YOKIS_SUBSYSTEM';
  }

  static get ATTRIBUTES() {
    return {
      powerFailureMode: {
        id: 1,
        type: ZCLDataTypes.enum8({
          last_state: 0,
          off: 1,
          on: 2,
          blink: 3,
        }),
        // manufacturerId: 4909,
      },
    };
  }

}

Cluster.addCluster(YokisSubSystemCluster);

module.exports = YokisSubSystemCluster;
