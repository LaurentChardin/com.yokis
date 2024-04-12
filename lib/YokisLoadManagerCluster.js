/* eslint-disable no-unused-vars */

'use strict';

const { Cluster, ZCLDataTypes } = require('zigbee-clusters');

class YokisLoadManagerCluster extends Cluster {

  static get ID() {
    return 0xFC05;
  }

  static get NAME() {
    return 'YOKIS_LOADMANAGER';
  }

  static get ATTRIBUTES() {
    return {};
  }

}

Cluster.addCluster(YokisLoadManagerCluster);

module.exports = YokisLoadManagerCluster;
