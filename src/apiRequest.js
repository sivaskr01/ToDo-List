const apiRequest =(url ='',optionsObj=null,errMsg=null) =>{
   try{
     const response=fetch(url,optionsObj);
     if(!response.ok) throw Error("Please reload the app")
   }catch(err){
    errMsg=errMsg.Message;
   }finally{
     return errMsg;
   }
}
export default apiRequest