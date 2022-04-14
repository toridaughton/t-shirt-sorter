// Write your solution below:

const shirts = [];

// const tshirtSorter = (str) => {
//     for(let i = 0; i<str.length; i++){
//         for(let k = 0; i<shirts.length; i++)
//         if(str[i] === `s`){
//             shirts.unshift(str[i])
//         }else if(str[i] === `m`){
//             shirts.splice()
//         }else if(str[i] === `l`){
//             shirts.push(str[i])
//         }
//     }
//     shirts.join(``)
// }

const smSorter = str => {
    for(let i = 0; i<str.length; i++){
        if(str[i] === `s`){
        shirts.push(str[i]) 
    }
  }
  return medSorter(str)
}

const medSorter = str => {
for(let i = 0; i<str.length; i++){
    if(str[i] === `m`){
    shirts.push(str[i]) 
        }
    }
    return larSorter(str)
}

const larSorter = str => {
    for(let i = 0; i<str.length; i++){
        if(str[i] === `l`){
        shirts.push(str[i]) 
    }
  }
  return shirts.join(``)
}


console.log(smSorter(`mslssmlmmmmsss`))
