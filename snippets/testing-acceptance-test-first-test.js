skip('clicking on Go button shows Great Success!', function(assert){

  visit('/testing/acceptance');

  andThen(function(){
    assert.equal(find('.message').text(), '', "message is empty before Go is pressed");
  });

  click('button:contains("Go")');

  andThen(function(){
    assert.equal(find('.message').text(), 'Great Success!', "message was set after Go was pressed");
  });
});
