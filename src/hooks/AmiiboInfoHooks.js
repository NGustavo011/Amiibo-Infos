import { useContext } from "react";
import { AmiiboInfoContext } from "../providers/AmiiboInfoProvider";

const useListCard = () =>{
    const {actualAmiiboUse, getAmiiboUse} = useContext(AmiiboInfoContext);
    return {actualAmiiboUse, getAmiiboUse};
}

export default useListCard;