import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    termList: [], //学期
    sexList: [{
      name: '全部',
      val: ''
    }, {
      name: '男',
      val: '1'
    }, {
      name: '女',
      val: '2'
    }],
    gradeTrainTypeList: [
      {
        name: '1-2年级',
        val: '1'
      }, {
        name: '3-4年级',
        val: '2'
      }, {
        name: '5-6年级',
        val: '3'
      }
    ],
    trainTypeList: [
      {
        name: '身体素质',
        val: '1'
      }, {
        name: '体育技能',
        val: '2'
      }
    ],
    isTermList: [
      {
        name: '校内',
        val: 1
      }, {
        name: '寒暑假',
        val: 0
      }
    ],
    xlTypeList: [
      {
        name: '国际提测',
        val: 1
      }, {
        name: '体质健康',
        val: 2
      }, {
        name: '运动会',
        val: 3
      }
    ],
    BMIList: [
      {
        name: 'BMI A级（正常）',
        val: 1
      }, {
        name: 'BMI B级（低体重）',
        val: 2
      }, {
        name: 'BMI B级（超重）',
        val: 3
      }, {
        name: 'BMI D级（肥胖）',
        val: 4
      },
    ],
    seachData: {},
    userInfo: "",
    id: '',
    props: {
      value: 'id',
      label: 'name',
      children: 'child'
    }
  },
  mutations: {
    userInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    setAgeList(state, list) {
      state.ageList = list
    },
    setUserInfo(state, obj) {
      state.userInfo = obj;
    },
    getUserInfo(state) {
      return state.userInfo
    },
    setSeachDataAction(state, obj) {
      state.seachData = obj;
    },
    getSeachDataAction(state) {
      return state.seachData;
    },
    setIdAction(state, id) {
      state.id = id;
    },
    setTremList(state, val) {
      state.termList = val
    },
    getIdAction(state) {
      return state.id;
    }
  },
  actions: {
    //获取学年
    getAllTermList({ commit }, vm) {
      vm.$http.post(vm.$api.schoolAPI.getAllTermList(), {}).then(res => {
        let termList = res.data.dataList || [];
        commit('setTremList', termList)
      });
    },
  }
})