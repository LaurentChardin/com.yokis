/* eslint-disable no-unused-vars */

'use strict';

const { Cluster, ZCLDataTypes } = require('zigbee-clusters');

class YokisLightControlCluster extends Cluster {

  static get ID() {
    return 0xFC06;
  }

  static get NAME() {
    return 'YOKIS_LIGHTCONTROL';
  }

  static get ATTRIBUTES() {
    return {
      onOff: { id: 0x0000, type: ZCLDataTypes.bool },
      // Indicate the previous state before action
      prevState: { id: 0x0001, type: ZCLDataTypes.bool },
      // Define the ON embedded timer duration in seconds.  Default: 0x00, Min-Max: 0x00 – 0x00409980
      onTimer: { id: 0x0002, type: ZCLDataTypes.uint32 },
      // Enable (0x01) / Disable (0x00) use of onTimer.
      eOnTimer: { id: 0x0003, type: ZCLDataTypes.bool },
      // Define the PRE-ON embedded delay in seconds.  Default: 0x00, Min-Max: 0x00 – 0x00409980
      preOnDelay: { id: 0x0004, type: ZCLDataTypes.uint32 },
      // Enable (0x01) / Disable (0x00) use of PreOnTimer.
      ePreOnDelay: { id: 0x0005, type: ZCLDataTypes.bool },
      // Define the PRE-OFF embedded delay in seconds.  Default: 0x00, Min-Max: 0x00 – 0x00409980
      preOffDelay: { id: 0x0008, type: ZCLDataTypes.uint32 },
      // Enable (0x01) / Disable (0x00) PreOff delay.
      ePreOffDelay: { id: 0x0009, type: ZCLDataTypes.bool },
      // Set the value of ON pulse length. Default: 0x01F4, Min-Max: 0x0014 – 0xFFFE
      pulseDuration: { id: 0x000A, type: ZCLDataTypes.uint16 },
      // Indicates the current Type of time selected that will be used during push button configuration: 0x00 -> Seconds, 0x01 -> Minutes
      timeType: { id: 0x000B, type: ZCLDataTypes.enum8 },
      // Set the value of the LONG ON embedded timer in seconds.  Default: 0x5460 (1h), Min-Max: 0x00 – 0x00409980
      longOnDuration: { id: 0x000C, type: ZCLDataTypes.uint32 },
      // Indicates the operating mode: 0x00 -> Timer, 0x01 -> Staircase, 0x02 -> Pulse
      operatingMode: { id: 0x000D, type: ZCLDataTypes.enum8 },
      // Time before goes off after the stop announce blinking. (In seconds).  Default: 0x0000, Min-Max: 0x00 – 0x00409980
      stopAnnounceTime: { id: 0x0013, type: ZCLDataTypes.uint32 },
      // Enable (0x01) / Disable (0x00) the announcement before turning OFF.
      eStopAnnounce: { id: 0x0014, type: ZCLDataTypes.bool },
      // Enable (0x01) / Disable (0x00) Deaf Actions.
      eDeaf: { id: 0x0015, type: ZCLDataTypes.bool },
      // Enable (0x01) / Disable (0x00) Blink Actions.
      eBlink: { id: 0x0016, type: ZCLDataTypes.bool },
      // Number of blinks done when receiving the corresponding order. One blink is considered as one ON step followed by one OFF step. Default: 0x03, Min-Max: 0x00 – 0x14
      blinkAmount: { id: 0x0017, type: ZCLDataTypes.uint8 },
      // Duration for the ON time on a blink period (In millisecond).  Default: 0x000001F4, Min-Max: 0x00 – 0x00409980
      blinkOnTime: { id: 0x0018, type: ZCLDataTypes.uint32 },
      // Duration for the OFF time on a blink period (In millisecond).  Default: 0x000001F4, Min-Max: 0x00 – 0x00409980
      blinkOffTime: { id: 0x0019, type: ZCLDataTypes.uint32 },
      // Define number of blink to do when receiving the DEAF action. One blink is considered as one ON step followed by one OFF step. Default: 0x03, Min-Max: 0x00 – 0x14
      deafBlinkAmount: { id: 0x001A, type: ZCLDataTypes.uint8 },
      // Define duration of a blink ON (In millisecond). Default: 0x0320, Min-Max: 0x0064– 0x4E20
      deafBlinkTime: { id: 0x001B, type: ZCLDataTypes.uint16 },
      // Indicate which state must be apply after a blink sequence: 0x00 -> State before blinking, 0x01 -> OFF, 0x02 -> ON
      stateAfterBlink: { id: 0x001C, type: ZCLDataTypes.enum8 },
      // Define the output relay as Normaly close.
      eNcCommand: { id: 0x001D, type: ZCLDataTypes.bool },
    };
  }

}

Cluster.addCluster(YokisLightControlCluster);

module.exports = YokisLightControlCluster;
