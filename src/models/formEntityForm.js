/*
 * @Description: Description
 * @Author: ZHANG ZHEN
 * @Date: 2021-07-03 01:03:12
 * @LastEditors: ZHANG ZHEN
 * @LastEditTime: 2021-07-03 01:04:32
 */
const formEntityForm = {
    namespace: 'formEntityForm',
    state: {},
    effects: {
        *getEntityList({ payload }, { call, put }) {
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
export default formEntityForm;