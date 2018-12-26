$(() => {
  $barsButton = $('#nav-mobile-icon-bars')

  $barsButton.click(() => {
    $(document).trigger('show.dropdown')
  })

  $(document).on('show.dropdown', () => {
    $barsButton.hide()
  })

  $(document).on('hide.dropdown', () => {
    $barsButton.css('display', 'flex')
  })
})
