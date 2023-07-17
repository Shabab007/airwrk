const taksbills=(bills)=>{
    if(bills[0] !==5){
        return false
    }
    let amount=0
    const changes={}
    for (let value of bills ){
      
        if(value === 5){
            if(changes.hasOwnProperty(value)){
                changes[value]++
             }
             else{
                changes[value]=1;
             }
        }
        else{
            if(value === 10){
                
            }
        }
    }
    console.log(changes)
    console.log(amount)
}

taksbills([5,5,5,10,20])