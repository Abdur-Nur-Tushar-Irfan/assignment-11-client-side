import { useEffect } from "react"

const useTitle=title=>{
    useEffect(()=>{
        document.title=`${title} - Photography`
    },[title])
};
export default useTitle;