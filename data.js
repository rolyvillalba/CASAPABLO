var APP_DATA = {
  "scenes": [
    {
      "id": "0-panorama-estar",
      "name": "PANORAMA ESTAR",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -1.4697771901047307,
        "pitch": 0.09811336172779939,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": -1.9826129414794806,
          "pitch": 0.23820800657030183,
          "rotation": 0,
          "target": "1-panorama-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-panorama-cocina",
      "name": "PANORAMA COCINA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.2821841826326281,
        "pitch": 0.17931057510004678,
        "fov": 1.4134061960355204
      },
      "linkHotspots": [
        {
          "yaw": 0.5566275745136515,
          "pitch": 0.2476568900052385,
          "rotation": 0,
          "target": "0-panorama-estar"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "CASA PABLO",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
