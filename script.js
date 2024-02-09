window.onload = function () {
  if (window.location.search.indexOf('?safe') === 0) {
    var safe = document.createElement('h1')
    safe.textContent = "You're in safe mode!"
    document.body.appendChild(safe)

    // create input boxes
    var urlInput = document.createElement('input')
    urlInput.type = 'text'
    urlInput.placeholder = 'Image URL'

    var timesInput = document.createElement('input')
    timesInput.type = 'number'
    timesInput.min = 1
    timesInput.placeholder = 'Number of times'

    // create "Copy URL" button
    var copyBtn = document.createElement('button')
    copyBtn.textContent = 'Copy URL'
    copyBtn.addEventListener('click', function () {
      var url =
        'https://noahlikesvr.github.io/t/?img=' +
        encodeURIComponent(urlInput.value) +
        '&times=' +
        encodeURIComponent(timesInput.value)
      // copy URL to clipboard
      navigator.clipboard.writeText(url).then(
        function () {
          console.log('URL copied to clipboard:', url)
        },
        function () {
          console.error('Failed to copy URL to clipboard.')
        }
      )
    })

    // add input boxes and button to document
    var container = document.createElement('div')
    container.appendChild(urlInput)
    container.appendChild(timesInput)
    container.appendChild(copyBtn)
    document.body.appendChild(container)
  } else {
    // extract url and times variables from the query string
    var urlParams = new URLSearchParams(window.location.search)
    var imgUrl = urlParams.get('img')
    var times = urlParams.get('times')

    // pop up the image in a new window x number of times
    if (imgUrl && times) {
      for (var i = 0; i < times; i++) {
        window.open(imgUrl)
      }
    }
  }
}
