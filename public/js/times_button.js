$(() => {
  $timesButton = $('#nav-mobile-icon-times')

  $timesButton.click(() => {
    $(document).trigger('hide.dropdown')
  })

  $(document).on('show.dropdown', () => {
    console.log('hey')
    $timesButton.css('display', 'flex')
  })

  $(document).on('hide.dropdown', () => {
    $timesButton.hide()
  })
})
