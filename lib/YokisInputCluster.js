/* eslint-disable no-unused-vars */

'use strict';

const { Cluster, ZCLDataTypes } = require('zigbee-clusters');

class YokisInputCluster extends Cluster {

  static get ID() {
    return 0xFC02;
  }

  static get NAME() {
    return 'YOKIS_INPUT';
  }

  static get ATTRIBUTES() {
    return {
      inputMode: { id: 0x0000, type: ZCLDataTypes.enum8 },
      contactMode: { id: 0x0001, type: ZCLDataTypes.bool },
      lastLocalCommandState: { id: 0x0002, type: ZCLDataTypes.bool },
      lastBPConnectState: { id: 0x0003, type: ZCLDataTypes.bool },
      backlightIntensity: { id: 0x0004, type: ZCLDataTypes.uint8 },
    };
  }

}

Cluster.addCluster(YokisInputCluster);

module.exports = YokisInputCluster;
