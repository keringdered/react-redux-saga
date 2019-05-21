export const SHOW_MODAL ="SHOW_MODAL";
export const HIDE_MODAL ="HIDE_MODAL";

export const showModalGenerator=(data=[])=> {

    return{
        type:SHOW_MODAL,
        payload:data
    }
};
export const hideModalGenerator =(data=[])=>{
    return{
        type: HIDE_MODAL,
        payload: data
    }
};