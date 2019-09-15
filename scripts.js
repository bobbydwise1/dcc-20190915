/*
This problem was asked by Amazon.

Given a N by M matrix of numbers, print out the matrix in a clockwise spiral.

For example, given the following matrix:

[[1,  2,  3,  4,  5],
 [6,  7,  8,  9,  10],
 [11, 12, 13, 14, 15],
 [16, 17, 18, 19, 20]]

You should print out the following:

1
2
3
4
5
10
15
20
19
18
17
16
11
6
7
8
9
14
13
12
*/

//Note: It is possible that the matrix is a rectangle (non-square)

const spiral = (yourArrays) => {
  let output = [];
  let copied = yourArrays.slice()  //Non-mutate original array
  for ( i = 0; i < copied[0].length; i++ ) {
    output.push(copied[0][i])
  }
  for ( i = 1; i < copied.length; i ++ ) {
    output.push(copied[i][copied[i].length-1])
  }
  for ( i = copied[copied.length-1].length-2; i >= 0; i-- ){
    output.push(copied[copied.length-1][i])
  }
  for ( i = copied.length-2; i >= 1; i-- ) {
    output.push(copied[i][0])
  }
  copied.shift()
  copied.pop()
  for ( i = 0; i < copied.length; i ++ ) {
    copied[i].pop()
  }
  for ( i = copied.length-1; i >= 0; i-- ) {
    copied[i].shift()
  }
  console.log(copied)
  // console.log('output: ', output)
  if (copied.length != 0) {
    output.push(...spiral(copied))
  }
  return output;
}


const test1 = 
[
[1,2,3,4,5],
[6,7,8,9,10],
[11,12,13,14,15],
[16,17,18,19,20]
]

console.log(spiral(test1))

$(document).ready(function() {

  $('#form1').submit(function(){
    event.preventDefault()
    input1 = $('#input-1').val()
    input1 = input1.replace(/\'/g,'"')
    input2 = JSON.parse(input1)
    console.log(input1)
    $('#output-1').text(spiral(input2))
  })

});
