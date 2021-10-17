import { useContext } from "react";
import { ListCardContext } from "../providers/ListCardProvider";

const useListCard = () =>{
    const {listCardState, isLoading, listNameState, getAmiibo, goHome} = useContext(ListCardContext);
    return {listCardState, isLoading, listNameState, getAmiibo, goHome};
}

export default useListCard;