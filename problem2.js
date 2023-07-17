// Example 1:
// Input: nums = [2,2,1]

// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]

// Output: 4

// Example 3:
// Input: nums = [1]

// Output: 1

const findSingleElement=(array)=>{
    let intsObj={}
    if(array.length===1){
        return array[0]
    }else{
        for(let ints of array){
            if(intsObj.hasOwnProperty(ints)){
                intsObj[ints]++
            }
            else{
                intsObj[ints]=1;
            }
        }
    }
    for(let key in intsObj){
        if(intsObj[key]===1){
            return key
        }
    }

}
findSingleElement([2,2,1])
findSingleElement([4,1,2,1,2])
findSingleElement([1])