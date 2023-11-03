describe('Test links on video.sky.it', () => {
  it('Controlla che tutti i links siano validi', () => {
    cy.visit('/')
    cy.get('a')
    .each((link) => {
      //if (link.prop('href') == ''|| link.prop('href').endsWith(']') || link.prop('href') == 'https://www.sky.it/come-vedere/app.html' || link.prop('href') == 'https://www.sky.it/assistenza/moduli-contrattuali.html' || link.prop('href') == 'https://www.sky.it/assistenza/trasparenza-tariffaria.html' || link.prop('href') == 'https://www.sky.it/info/modulo_segnalazione_abusi.html') {
      if (link.prop('href') == '') {
        return;
      }
      cy.request(link.prop('href'))
      .its('status')
      .should('not.eq', 404)

    })
  })
})


