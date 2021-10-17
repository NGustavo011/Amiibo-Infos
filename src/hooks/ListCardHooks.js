import { useContext } from "react";
import { ListCardContext } from "../providers/ListCardProvider";

const useListCard = () =>{
    const {listCardState, isLoading, listNameState} = useContext(ListCardContext);
    return {listCardState, isLoading, listNameState};
}

export default useListCard;