/* eslint-disable no-unused-vars */

'use strict';

const { Cluster, ZCLDataTypes } = require('zigbee-clusters');

class YokisStatsCluster extends Cluster {

  static get ID() {
    return 0xFCF0;
  }

  static get NAME() {
    return 'YOKIS_STATS';
  }

  static get ATTRIBUTES() {
    return {};
  }

}

Cluster.addCluster(YokisStatsCluster);

module.exports = YokisStatsCluster;
