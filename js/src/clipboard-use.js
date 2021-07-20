!(function(e, t, a) {
  /* code */
  var initCopyCode = function() {
    var copyHtml = '';
    copyHtml += '<button class="btn-copy" data-clipboard-snippet="">';
    copyHtml += '<span>複製</span>';
    copyHtml += '</button>';
    $('.highlight .code pre').before(copyHtml);
    new ClipboardJS('.btn-copy', {
      target: function(trigger) {
        return trigger.nextElementSibling;
      },
    });
  };
  initCopyCode();
})(window, document);
