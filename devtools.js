var request = new XMLHttpRequest()
request.open('GET', 'custom.css')
request.onload = function () {
  chrome.devtools.panels.applyStyleSheet(request.responseText)
}
request.send()
