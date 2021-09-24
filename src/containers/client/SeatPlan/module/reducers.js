
import {
    FETCH_ALL_SEAT_PLAN_REQUETS,
    FETCH_ALL_SEAT_PLAN_SUCCESS,
    FETCH_ALL_SEAT_PLAN_FAILD,
    DAT_GHE
} from './types'


const initialState = {
    chiTietPhongVe: {
        thongTinPhim: {},
        
     },
     danhSachGheDangDat : [],
    error: ''
}


const quanLyDatVeReducer = (state= initialState, {type, payload})=>{
    switch (type) {
        case FETCH_ALL_SEAT_PLAN_REQUETS:{
            return {...state}
        }
            
        case FETCH_ALL_SEAT_PLAN_SUCCESS: {
            state.chiTietPhongVe=payload
            return{...state}
        }
        case FETCH_ALL_SEAT_PLAN_FAILD: {
            state.error = payload
            return{...state}
        }
        case DAT_GHE:{
            let danhSachGheCapNhap = [...state.danhSachGheDangDat];
            let idx = danhSachGheCapNhap.findIndex(gheDangDat => gheDangDat.maGhe === payload.maGhe);
            if(idx != -1){
                danhSachGheCapNhap.splice(idx,1);
            }else{
                danhSachGheCapNhap.push(payload);
            }
            return{...state, danhSachGheDangDat:danhSachGheCapNhap}
        }
        default:
            return state;
    }
}
export default quanLyDatVeReducer;
