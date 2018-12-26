$(() => {
  $dropdown = $('#nav-dropdown')

  $(document).on('show.dropdown', () => {
    $dropdown.css('display', 'flex')
  })

  $(document).on('hide.dropdown', () => {
    $dropdown.hide()
  })
})
