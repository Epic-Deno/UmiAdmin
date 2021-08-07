/*
 * @Description: Description
 * @Author: ZHANG ZHEN
 * @Date: 2021-07-03 00:53:47
 * @LastEditors: ZHANG ZHEN
 * @LastEditTime: 2021-07-03 01:04:15
 */

// import { Effect, Reducer, Subscription } from 'umi';

const formCreateEntityForm = {
    namespace: 'formCreateEntityForm',
    state: {},
    effects: {
        *getCreateEntity({ payload }, { call, put }) {
            // const response = yield call(User.getUserInfo, { ...payload, name: 'test' });
            // if (response.status === 'ok') {
            //     yield put({
            //         type: 'save',
            //         payload: {
            //             userInfo: response.data,
            //         },
            //     });
            // }
        }
    },
    reducers: {
        save(state, action) {
            return {
                ...state,
                ...action.payload,
            };
        },
    }
}
export default formCreateEntityForm;