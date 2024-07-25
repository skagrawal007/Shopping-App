import { ActionTypes } from "../constants/action-types";

const initialState ={
    products:[],
    //additions by suraj
    electronics: [],
    clothings: [],
    gemstones: [],
}

//2nd param is action which is actually obj so destructuring obj to tpye and payload
export const productReducer = (state={initialState},{type,payload})=>{
 switch (type) {
    case ActionTypes.SET_PRODUCTS:
        return {
            ...state,
            products:payload,
            //additions by suraj
            electronics: payload.filter(product => product.category === 'electronics'),
            clothings: payload.filter(product => product.category === 'clothing'),
            gemstones: payload.filter(product => product.category === 'gemstones'),

        };

    default:
       return state;
 }
}
export const selectedProductReducer = (state={},{type,payload})=>{
 switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
        return {...state,...payload};

    case ActionTypes.REMOVE_SELECTED_PRODUCT:
        return {};

    default:
       return state;
 }
}
