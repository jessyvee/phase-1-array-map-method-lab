
function titlecased(){
  return tutorials.map(function(title) {
  let words = title.split(' ');
  for (let i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(' ') ;
  });
  }

  //Example usage:
  console.log(titlecased());