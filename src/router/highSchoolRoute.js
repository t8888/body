/* eslint-disable */
let routes = [
    //*************************新增动量******************************/
    {
        //学生管理
        path: '/momentum',
        name: 'momentum',
        component: resolve => require(['@/views/highSchoolManage/momentum/list'], resolve)
    },
    {
        //学生管理
        path: '/momentumAdd',
        name: 'momentumAdd',
        component: resolve => require(['@/views/highSchoolManage/momentum/add'], resolve)
    },
    {
        //添加团队
        path: '/momentumAddTeam',
        name: 'momentumAddTeam',
        component: resolve => require(['@/views/highSchoolManage/momentum/addTeamName'], resolve)
    },

    {
        //个人数据首页
        path: "/yjWatchDataV",
        name: "yjWatchDataV",
        component: resolve => require(['@/views/data-center/personal'], resolve)
    },
    {
        //个人数据详情
        path: "/personalData",
        name: "personalData",
        component: resolve => require(['@/views/data-center/personal-data'], resolve)
    },
    //实时监控
    {
        path: "/yjWatchTesting",
        name: "yjWatchTesting",
        component: resolve => require(['@/views/data-center/data-center'], resolve)
    },
]
export default routes;