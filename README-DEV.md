
# Interview for MTR device

```json
  "ids": {
    "modelId": "MTR500E-UP",
    "manufacturerName": "YOKIS"
  },
  "endpoints": {
    "ieeeAddress": "00:26:de:ca:fe:00:1c:65",
    "networkAddress": 26337,
    "modelId": "MTR500E-UP",
    "manufacturerName": "YOKIS",
    "endpointDescriptors": [
      {
        "status": "SUCCESS",
        "nwkAddrOfInterest": 26337,
        "_reserved": 46,
        "endpointId": 1,
        "applicationProfileId": 260,
        "applicationDeviceId": 256,
        "applicationDeviceVersion": 0,
        "_reserved1": 1,
        "inputClusters": [
          0,
          3,
          4,
          5,
          6,
          4096,
          64513,
          64514,
          64515,
          64516,
          64517,
          64518,
          64752
        ],
        "outputClusters": [
          3,
          6,
          25,
          4096,
          64513,
          64518
        ]
      },
      {
        "status": "SUCCESS",
        "nwkAddrOfInterest": 26337,
        "_reserved": 12,
        "endpointId": 242,
        "applicationProfileId": 41440,
        "applicationDeviceId": 102,
        "applicationDeviceVersion": 0,
        "_reserved1": 1,
        "inputClusters": [
          33
        ],
        "outputClusters": [
          33
        ]
      }
    ],
    "deviceType": "router",
    "receiveWhenIdle": true,
    "swBuildId": "1.12.1",
    "capabilities": {
      "alternatePANCoordinator": false,
      "deviceType": true,
      "powerSourceMains": true,
      "receiveWhenIdle": true,
      "security": false,
      "allocateAddress": true
    },
    "extendedEndpointDescriptors": {
      "1": {
        "clusters": {
          "basic": {
            "attributes": [
              {
                "acl": [
                  "readable",
                  "reportable"
                ],
                "id": 0,
                "name": "zclVersion",
                "value": 2,
                "reportingConfiguration": {
                  "status": "NOT_FOUND",
                  "direction": "reported"
                }
              },
              {
                "acl": [
                  "readable",
                  "reportable"
                ],
                "id": 1,
                "name": "appVersion",
                "value": 1,
                "reportingConfiguration": {
                  "status": "NOT_FOUND",
                  "direction": "reported"
                }
              },
              {
                "acl": [
                  "readable",
                  "reportable"
                ],
                "id": 3,
                "name": "hwVersion",
                "value": 1,
                "reportingConfiguration": {
                  "status": "NOT_FOUND",
                  "direction": "reported"
                }
              },
              {
                "acl": [
                  "readable",
                  "reportable"
                ],
                "id": 4,
                "name": "manufacturerName",
                "value": "YOKIS",
                "reportingConfiguration": {
                  "status": "NOT_FOUND",
                  "direction": "reported"
                }
              },
              {
                "acl": [
                  "readable",
                  "reportable"
                ],
                "id": 5,
                "name": "modelId",
                "value": "MTR500E-UP",
                "reportingConfiguration": {
                  "status": "NOT_FOUND",
                  "direction": "reported"
                }
              },
              {
                "acl": [
                  "readable",
                  "reportable"
                ],
                "id": 6,
                "name": "dateCode",
                "value": "20230516",
                "reportingConfiguration": {
                  "status": "NOT_FOUND",
                  "direction": "reported"
                }
              },
              {
                "acl": [
                  "readable",
                  "reportable"
                ],
                "id": 7,
                "name": "powerSource",
                "value": "unknown",
                "reportingConfiguration": {
                  "status": "NOT_FOUND",
                  "direction": "reported"
                }
              },
              {
                "acl": [
                  "readable",
                  "reportable"
                ],
                "id": 10,
                "reportingConfiguration": {
                  "status": "NOT_FOUND",
                  "direction": "reported"
                }
              },
              {
                "acl": [
                  "readable",
                  "writable",
                  "reportable"
                ],
                "id": 20,
                "name": "disableLocalConfig",
                "value": {
                  "type": "Buffer",
                  "data": [
                    2
                  ]
                },
                "reportingConfiguration": {
                  "status": "NOT_FOUND",
                  "direction": "reported"
                }
              },
              {
                "acl": [
                  "readable",
                  "reportable"
                ],
                "id": 16384,
                "name": "swBuildId",
                "value": "1.12.1",
                "reportingConfiguration": {
                  "status": "NOT_FOUND",
                  "direction": "reported"
                }
              },
              {
                "acl": [
                  "readable",
                  "reportable"
                ],
                "id": 65533,
                "name": "clusterRevision",
                "value": 3,
                "reportingConfiguration": {
                  "status": "NOT_FOUND",
                  "direction": "reported"
                }
              }
            ],
            "commandsGenerated": [],
            "commandsReceived": []
          },
          "identify": {
            "attributes": [
              {
                "acl": [
                  "readable",
                  "writable",
                  "reportable"
                ],
                "id": 0,
                "name": "identifyTime",
                "value": 0,
                "reportingConfiguration": {
                  "status": "NOT_FOUND",
                  "direction": "reported"
                }
              },
              {
                "acl": [
                  "readable",
                  "reportable"
                ],
                "id": 65533,
                "name": "clusterRevision",
                "value": 2,
                "reportingConfiguration": {
                  "status": "NOT_FOUND",
                  "direction": "reported"
                }
              }
            ],
            "commandsGenerated": [
              "identifyQuery.response"
            ],
            "commandsReceived": [
              "identify",
              "identifyQuery",
              "triggerEffect"
            ]
          },
          "groups": {
            "attributes": [
              {
                "acl": [
                  "readable",
                  "reportable"
                ],
                "id": 0,
                "name": "nameSupport",
                "value": {
                  "type": "Buffer",
                  "data": [
                    0
                  ]
                },
                "reportingConfiguration": {
                  "status": "NOT_FOUND",
                  "direction": "reported"
                }
              },
              {
                "acl": [
                  "readable",
                  "reportable"
                ],
                "id": 65533,
                "name": "clusterRevision",
                "value": 3,
                "reportingConfiguration": {
                  "status": "NOT_FOUND",
                  "direction": "reported"
                }
              }
            ],
            "commandsGenerated": [
              "addGroup.response",
              "viewGroup.response",
              "getGroupMembership.response",
              "removeGroup.response"
            ],
            "commandsReceived": [
              "addGroup",
              "viewGroup",
              "getGroupMembership",
              "removeGroup",
              "removeAllGroups",
              "addGroupIfIdentify"
            ]
          },
          "scenes": {
            "attributes": [
              {
                "acl": [
                  "readable",
                  "reportable"
                ],
                "id": 0,
                "reportingConfiguration": {
                  "status": "NOT_FOUND",
                  "direction": "reported"
                }
              },
              {
                "acl": [
                  "readable",
                  "reportable"
                ],
                "id": 1,
                "reportingConfiguration": {
                  "status": "NOT_FOUND",
                  "direction": "reported"
                }
              },
              {
                "acl": [
                  "readable",
                  "reportable"
                ],
                "id": 2,
                "reportingConfiguration": {
                  "status": "NOT_FOUND",
                  "direction": "reported"
                }
              },
              {
                "acl": [
                  "readable",
                  "reportable"
                ],
                "id": 3,
                "reportingConfiguration": {
                  "status": "NOT_FOUND",
                  "direction": "reported"
                }
              },
              {
                "acl": [
                  "readable",
                  "reportable"
                ],
                "id": 4,
                "reportingConfiguration": {
                  "status": "NOT_FOUND",
                  "direction": "reported"
                }
              },
              {
                "acl": [
                  "readable",
                  "reportable"
                ],
                "id": 65533,
                "name": "clusterRevision",
                "value": 3,
                "reportingConfiguration": {
                  "status": "NOT_FOUND",
                  "direction": "reported"
                }
              }
            ],
            "commandsGenerated": [
              0,
              1,
              2,
              3,
              4,
              6
            ],
            "commandsReceived": [
              0,
              1,
              2,
              3,
              4,
              5,
              6,
              64,
              65,
              66
            ]
          },
          "onOff": {
            "attributes": [
              {
                "acl": [
                  "readable",
                  "reportable"
                ],
                "id": 0,
                "name": "onOff",
                "value": true,
                "reportingConfiguration": {
                  "direction": "reported",
                  "attributeDataType": 16,
                  "minInterval": 1,
                  "maxInterval": 65534,
                  "status": "SUCCESS"
                }
              },
              {
                "acl": [
                  "readable",
                  "reportable"
                ],
                "id": 65533,
                "name": "clusterRevision",
                "value": 2,
                "reportingConfiguration": {
                  "status": "NOT_FOUND",
                  "direction": "reported"
                }
              }
            ],
            "commandsGenerated": [],
            "commandsReceived": [
              "setOff",
              "setOn",
              "toggle"
            ]
          },
          "touchlink": {
            "attributes": [
              {
                "acl": [
                  "readable",
                  "reportable"
                ],
                "id": 65533,
                "name": "clusterRevision",
                "value": 1,
                "reportingConfiguration": {
                  "status": "NOT_FOUND",
                  "direction": "reported"
                }
              }
            ],
            "commandsGenerated": [
              "scanResponse",
              3,
              17,
              "networkJoinRouterResponse",
              "networkJoinEndDeviceResponse",
              64,
              "getGroups.response",
              66
            ],
            "commandsReceived": [
              "getGroups",
              66
            ]
          }
        },
        "bindings": {
          "identify": {
            "attributes": [
              {
                "acl": [
                  "readable",
                  "writable",
                  "reportable"
                ],
                "id": 0,
                "name": "identifyTime",
                "value": 0,
                "reportingConfiguration": {
                  "status": "NOT_FOUND",
                  "direction": "reported"
                }
              },
              {
                "acl": [
                  "readable",
                  "reportable"
                ],
                "id": 65533,
                "name": "clusterRevision",
                "value": 2,
                "reportingConfiguration": {
                  "status": "NOT_FOUND",
                  "direction": "reported"
                }
              }
            ],
            "commandsGenerated": [
              "identifyQuery.response"
            ],
            "commandsReceived": [
              "identify",
              "identifyQuery",
              "triggerEffect"
            ]
          },
          "onOff": {
            "attributes": [
              {
                "acl": [
                  "readable",
                  "reportable"
                ],
                "id": 0,
                "name": "onOff",
                "value": true,
                "reportingConfiguration": {
                  "direction": "reported",
                  "attributeDataType": 16,
                  "minInterval": 1,
                  "maxInterval": 65534,
                  "status": "SUCCESS"
                }
              },
              {
                "acl": [
                  "readable",
                  "reportable"
                ],
                "id": 65533,
                "name": "clusterRevision",
                "value": 2,
                "reportingConfiguration": {
                  "status": "NOT_FOUND",
                  "direction": "reported"
                }
              }
            ],
            "commandsGenerated": [],
            "commandsReceived": [
              "setOff",
              "setOn",
              "toggle"
            ]
          },
          "touchlink": {
            "attributes": [
              {
                "acl": [
                  "readable",
                  "reportable"
                ],
                "id": 65533,
                "name": "clusterRevision",
                "value": 1,
                "reportingConfiguration": {
                  "status": "NOT_FOUND",
                  "direction": "reported"
                }
              }
            ],
            "commandsGenerated": [
              "scanResponse",
              3,
              17,
              "networkJoinRouterResponse",
              "networkJoinEndDeviceResponse",
              64,
              "getGroups.response",
              66
            ],
            "commandsReceived": [
              "getGroups",
              66
            ]
          },
          "ota": {}
        }
      },
      "242": {
        "clusters": {},
        "bindings": {}
      }
    }
  }
```
