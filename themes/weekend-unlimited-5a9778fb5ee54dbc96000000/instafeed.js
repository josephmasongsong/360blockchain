var userFeed = new Instafeed({
  get: 'user',
  userId: '7113559463',
  clientId: '84d0e3742b684ed9a9ea7c45fc4618ef',
  accessToken: '7113559463.1677ed0.62a7166b9de54c5d9001db77c34590cd',
  resolution: 'standard_resolution',
  template: '<a href="{{link}}" target="_blank" id="{{id}}" class="col-lg-2 col-md-4 col-xs-6"><div class="photo-container" style="background:url({{image}}) no-repeat center center; background-size:cover;"></div></a>',
  sortBy: 'most-recent',
  limit: 12,
  links: false
});
userFeed.run();
