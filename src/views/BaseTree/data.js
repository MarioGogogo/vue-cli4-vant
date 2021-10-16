export const treeData = [{
  name: "IT互联网",
  id: 1,
  child: [
    {
      name: "编辑语言",
      pId: 1,
      id: 10001,
      child1: [
        {name: 'java', pId: 10001, id: 10001001},
        {name: 'c#.net', pId: 10001, id: 10001002},
        {name: 'python', pId: 10001, id: 10001003}]
    },
    {
      name: "前端开发", pId: 1, id: 10002,
      child1: [
        {name: 'jq', pId: 10002, id: 10002001},
        {name: 'vue', pId: 10002, id: 10002002},
        {name: 'react', pId: 10002, id: 10002003}
      ]
    },
    {
      name: "移动开发", pId: 1, id: 10003,
      child1: [
        {name: 'android开发', pId: 10003, id: 10003001},
        {name: 'IOS开发', pId: 10003, id: 10003002},
        {name: '混合开发', pId: 10003, id: 10003003}
      ]
    },
    {
      name: "游戏开发", pId: 1, id: 10004,
      child1: [
        {name: 'phaser游戏开发', pId: 10004, id: 10004001},
        {name: 'webGL游戏开发', pId: 10004, id: 10004002},
        {name: 'python', pId: 10004, id: 10004003}]
    },
  ]
},
  {
    name: "设计创作",
    id: 2,
    child: [
      {
        name: "平面设计",
        pId: 2,
        id: 20001,
        child1: [
          {
            name: '电商美工', pId: 20001,
            id: 20001001
          },
          {
            name: '综合平面设计', pId: 20001,
            id: 20001002
          },
          {
            name: '摄影后期', pId: 20001,
            id: 20001003
          }]
      },
      {
        name: "UI设计", pId: 2,
        id: 20002,
        child1: [{
          name: '交互设计', pId: 20002,
          id: 20002001
        }, {
          name: 'webUI设计', pId: 20002,
          id: 20002002
        }, {
          name: '游戏UI设计', pId: 20002,
          id: 20002003
        }]
      },
      {
        name: "软件设计", pId: 2,
        id: 20003,
      }]
  },
  {
    name: "升学考研",
    child: [
      {name: "考研"},
      {name: "大学"},
      {name: "高中"},
      {name: "初中"},
    ]
  },
  {
    name: "职企考证",
    child: [
      {name: "公务员", child1: [{name: '教师考试'}, {name: '建筑工程'}]},
    ]
  },
];


export const roomData = [
  {
    name: "一楼",
    id: 1,
    child:
      [
        {name: "1001房间", id: 1001}, {name: "1002房间", id: 1002}, {name: "1003房间", id: 1003}, {name: "1004房间", id: 1004}
        , {name: "1007房间", id: 1007}, {name: "1008房间", id: 1008}, {name: "1009房间", id: 1009}, {
        name: "1010房间",
        id: 1010
      }]
  },
  {
    name: "二楼",
    id: 2,
    child: [
      {name: "2001房间", id: 2001}, {name: "2002房间", id: 2002}, {name: "2003房间", id: 2003}
    ]
  },
  {
    name: "三楼",
    id: 3,
    child:
      [
        {name: "3001房间", id: 2001}, {name: "3002房间", id: 2002}, {name: "3003房间", id: 3003}
      ]
  }
]

