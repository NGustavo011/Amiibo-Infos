import { useContext } from "react";
import { ListCardContext } from "../../providers/ListCardProvider";

const useListCard = () =>{
    const {listCardState} = useContext(ListCardContext);
    return {listCardState};
}

export default useListCard;