// დავალება1

for(i=5; i<=100; i+=1){
    console.log(i);
}

// დავალება2
let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];

for (i=0; i<=array1.length; i+=1){
   
    if(array1[i]>0 && array1[i]<10){
        console.log(array1[i]);
    }
}

// დავალება 3
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (i=0; i<array2.length; i+=1){
   
    if(array2[i]==5){
         
        console.log("არის")

    }
    
}
// დავალება 4



let users = [
    {username: 'giorgi', status: false},
    {username: 'levani', status: false},
    {username: 'anna', status: true}
]

let entries = Object.entries(users)




