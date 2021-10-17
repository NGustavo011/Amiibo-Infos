import { useContext } from "react";
import { ListCardContext } from "../providers/ListCardProvider";

const useAmiiboInfo = () =>{
    const {listCardState, isLoading, listNameState, getAmiibo, goHome} = useContext(ListCardContext);
    return {listCardState, isLoading, listNameState, getAmiibo, goHome};
}

export default useAmiiboInfo;