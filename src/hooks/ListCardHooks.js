import { useContext } from "react";
import { ListCardContext } from "../providers/ListCardProvider";

const useListCard = () =>{
    const {listCardState, getAllAmiibos} = useContext(ListCardContext);
    return {listCardState, getAllAmiibos};
}

export default useListCard;