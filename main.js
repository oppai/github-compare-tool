$(function() {
  var $commits = $("div.commit-links.table-list-cell");
  if($commits.size() > 0) {
    $commits.append('<div class="commit-links-group button-group commit-compare-list"><input type="radio" name="compare_base" style="margin-right:3px;"><input type="radio" name="compare_to" style="margin-left:3px;"></div>');
    $commits.eq(0).find('input[type=radio]').click();

    var $compareButton = $('<a>').attr('class','minibutton compare-button').text('Compare Diff');
    $compareButton.click(function() {
      var base = $('input[name=compare_base]:checked').parent().parent().find('a.sha').text().trim();
      var to = $('input[name=compare_to]:checked').parent().parent().find('a.sha').text().trim();
      var url = (function(){
        var parts = location.href.split('/');
        return 'https://' + parts[2] + '/' + parts[3] +
              '/' + parts[4] + '/compare/' + base + '...' + to;
      })();
      location.href = url;
    });
    $('div.file-navigation:eq(0)').append($compareButton);
  }
});

