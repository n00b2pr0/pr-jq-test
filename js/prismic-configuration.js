var Configuration = {

  // -- API endpoint
  apiEndpoint: 'https://lesbonneschoses-vqihnikaacga6pmv.prismic.io/api',
  //accessToken: '',

  // -- OAuth
  //clientId: 'U9YR2TQAADQAcZsA',

  // -- Links resolution rules
  linkResolver: function(ctx, doc) {
    return 'detail.html?id=' + doc.id + '&slug=' + doc.slug + ctx.maybeRefParam;
  },

  // -- To customize: what to do when an error happens on the prismic.io side
  onPrismicError: function(err, xhr) {
    if(xhr && xhr.status == 401) {
      window.location = '/signin.html';
    } else {
      window.location = '/error.html'+(err ? '#'+err.message : '');
    }
  }
}
