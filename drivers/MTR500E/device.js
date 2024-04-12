/* eslint-disable no-unused-vars */

'use strict';

const { CLUSTER } = require('zigbee-clusters');
const { ZigBeeDevice } = require('homey-zigbeedriver');
const YokisDeviceCluster = require('../../lib/YokisDeviceCluster');
const YokisSubSystemCluster = require('../../lib/YokisSubSystemCluster');
const YokisInputCluster = require('../../lib/YokisInputCluster');

class MTR500E extends ZigBeeDevice {

  async onNodeInit({ zclNode }) {
    this.enableDebug(); // only for debugging purposes
    this.printNode(); // only for debugging purposes

    // Register onoff capability
    if (this.hasCapability('onoff')) this.registerCapability('onoff', CLUSTER.ON_OFF);

    // Capabilities
    // Blink
    // Deaf notification / scenarios
    // Partie configuration

    /*
    await this.configureAttributeReporting([
      {
        endpointId: 1,
        cluster: YokisDeviceCluster,
        attributeName: 'configurationChanged',
        minInterval: 0,
        maxInterval: 300,
        minChange: 10,
      },
    ]).catch((err) => {
      this.error(err); // Always catch Promises, especially in onNodeInit
    });
    */

    const currentOnOffValue = await zclNode.endpoints[1].clusters.onOff
      .readAttributes(['onOff'])
      .catch((err) => {
        this.error(err);
      });
    this.log('Retrieved currentOnOffValue: ', currentOnOffValue);

    const result = await zclNode.endpoints[1].clusters[YokisDeviceCluster.NAME]
      .readAttributes(['configurationChanged'])
      .catch((err) => {
        this.error(err);
      });

    this.log('Retrieved configurationChanged: ', result);

    const powerFailureModeres = await zclNode.endpoints[1].clusters[YokisSubSystemCluster.NAME]
      .readAttributes(['powerFailureMode'])
      .catch((err) => {
        this.error(err);
      });

    this.log('Retrieved powerFailureMode: ', powerFailureModeres);
  }

}

module.exports = MTR500E;
