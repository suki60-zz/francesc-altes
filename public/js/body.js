$(() => {
  $body = $('#body')

  $(document).on('show.dropdown', () => {
    $body.hide()
  })

  $(document).on('hide.dropdown', () => {
    $body.show()
  })
})
