// code your solution here
const superbowlWin = (arrz) =>{
    let x= arrz.find((ele)=> ele.result === 'W')
    if( x === undefined){
        return x
    }
    return x.year
    }