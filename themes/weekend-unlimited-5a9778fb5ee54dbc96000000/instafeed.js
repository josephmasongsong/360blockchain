var userFeed = new Instafeed({
  get: 'user',
  userId: '7113559463',
  clientId: '840f3abe69354e6698bbff73be5469f3',
  accessToken: '7113559463.840f3ab.5faeb615439b4ba3a6124f8befdad63d',
  resolution: 'standard_resolution',
  template: '<a href="{{link}}" target="_blank" id="{{id}}" class="col-lg-2 col-md-4 col-xs-6"><div class="photo-container" style="background:url({{image}}) no-repeat center center; background-size:cover;"></div></a>',
  sortBy: 'most-recent',
  limit: 12,
  links: false
});
userFeed.run();
