holiday_fortunes =
['Many holiday treats await you.',
'Someone will be wishing to be with you under the mistletoe this holiday season.',
'You made Santa\'s nice list!',
'You will receive a very merry surprise.',
'That gift you\'ve been planning will bring much happiness.',
'A delicious holiday meal awaits you.',
'The Ghost of Christmas Future sees much fun in store for you.',
'You will go somewhere wonderful soon.',
'You won\'t see Mommy kissing Santa Claus...this year.',
'Joy to your work; success has come!',
'Winter is coming, but it won\'t stop you!',
'Not even Mr. Grinch will keep your spirits down.',
'Have yourself a merry little holiday cookie.',
'You will be spoiled this December.',
'Your mailbox will be filled with lots of good cheer.',
'You will receive a warm holiday hug soon.',
'You will see someone special soon.',
'Some special cookie wants you.',
'Your memories in holiday season will be unique and beautiful like a snowflake',
'You\'ll unwrap something delightful this holiday season',
'The cookie\'s on winter break. Make your own festive fortune!',
];


$(document).ready(docLoaded);

function docLoaded() {
  // Get and display the fortune.
  var current_fortune = getFortune("");
  $('#fortune p').text(current_fortune);
  
  // If the cookie image is clicked on, pick and display a new fortune.
  $('#cookie-img').click(function(){
      var new_fortune = getFortune(current_fortune);
      $('#fortune p').text(new_fortune);
      current_fortune = new_fortune;
    });
}

function getFortune(current_fortune) {
  // Find the current fortune in the list of fortunes.
  // Remove it from being chosen again.
  var the_list = JSON.parse(JSON.stringify(holiday_fortunes));
  var remove_idx = the_list.indexOf(current_fortune);
  the_list.splice(remove_idx, 1);
  
  // Pick a fortune.
  var randnum = Math.floor(Math.random() * the_list.length);
  console.log(randnum);

  var current_fortune = the_list[randnum];
  console.log(current_fortune);

  return current_fortune;
}