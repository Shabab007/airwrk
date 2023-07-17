

const checkPalindrom =(input)=>{
    const str = input.toString().split('').reverse().join('');
    if(input.toString()===str){
        return true
    }
    else{
        return false
    }
    
}

checkPalindrom(121)
checkPalindrom(-121)
checkPalindrom(10)