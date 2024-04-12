/* eslint-disable no-unused-vars */

'use strict';

const { Cluster, ZCLDataTypes } = require('zigbee-clusters');

class YokisDeviceCluster extends Cluster {

  static get ID() {
    return 64513;
  }

  static get NAME() {
    return 'YOKIS_DEVICE';
  }

  static get ATTRIBUTES() {
    return {
      configurationChanged: { id: 5, type: ZCLDataTypes.enum16 },
    };
  }

}

Cluster.addCluster(YokisDeviceCluster);

module.exports = YokisDeviceCluster;
