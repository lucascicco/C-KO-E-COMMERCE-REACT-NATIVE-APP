export default (signed, firstAccess) => {
    if(signed){
        if(firstAccess){
            return 'FirstAccess'
        }else{
            return 'App'
        }
    }else{
        return 'Sign'
    }
}