/* eslint-disable no-unused-vars */

'use strict';

const { Cluster, ZCLDataTypes } = require('zigbee-clusters');

class YokisEntryConfiguratorCluster extends Cluster {

  static get ID() {
    return 0xFC03;
  }

  static get NAME() {
    return 'YOKIS_ENTRYCONFIGURATOR';
  }

  static get ATTRIBUTES() {
    return {
      eShortPress: { id: 0x0001, type: ZCLDataTypes.bool },
      eLongPress: { id: 0x0002, type: ZCLDataTypes.bool },
      longPressDuration: { id: 0x0003, type: ZCLDataTypes.uint16 },
      timeBetweenPress: { id: 0x0004, type: ZCLDataTypes.uint16 },
      eR12MLongPress: { id: 0x0005, type: ZCLDataTypes.bool },
      eLocalConfigLock: { id: 0x0006, type: ZCLDataTypes.bool },
    };
  }

}

Cluster.addCluster(YokisEntryConfiguratorCluster);

module.exports = YokisEntryConfiguratorCluster;
