var APP_DATA = {
  "scenes": [
    {
      "id": "0-master-bedroom",
      "name": "Master bedroom",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3726308726687002
      },
      "linkHotspots": [
        {
          "yaw": 1.5796522426512798,
          "pitch": -0.3023371263353507,
          "rotation": 4.71238898038469,
          "target": "1-toilet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-toilet",
      "name": "Toilet",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3726308726687002
      },
      "linkHotspots": [
        {
          "yaw": 1.6617936379279783,
          "pitch": 0.04147907890250124,
          "rotation": 0.7853981633974483,
          "target": "0-master-bedroom"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
