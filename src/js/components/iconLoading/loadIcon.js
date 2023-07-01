function showLoadingIcon(elFather) {
  var duvLoadingIcon = $('<div>', {
    id:"loading-icon",
    style: "text-align: center;",
    html: '<i class="fas fa-spinner fa-spin fa-lg"></i>',
    display: "block"
  })
  elFather.append(duvLoadingIcon);
}

function hideLoadingIcon() {
  var loadingIcon = $('#loading-icon');
  loadingIcon.remove();
}
