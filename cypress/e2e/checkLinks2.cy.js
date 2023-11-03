describe('Test links on video.sky.it', () => {
  it('Controlla che tutti i links siano validi', () => {
    var linkNoWork = []
    cy.visit('/')

    cy.get('a')
      .each((link) => {
        //if (link.prop('href') == ''|| link.prop('href').endsWith(']') || link.prop('href') == 'https://www.sky.it/come-vedere/app.html' || link.prop('href') == 'https://www.sky.it/assistenza/moduli-contrattuali.html' || link.prop('href') == 'https://www.sky.it/assistenza/trasparenza-tariffaria.html' || link.prop('href') == 'https://www.sky.it/info/modulo_segnalazione_abusi.html') {
        if (link.prop('href') == '') {
          return;
        }
        cy.request({
          url: link.prop('href'),
          failOnStatusCode: false
        })
          .its('status')
          .then((item) => {
            console.log('boooot ' + item)
            if (item === 404) {
              linkNoWork.push(link.prop('href'))


            }
            //.should('not.eq', 404)
          })

        console.log('1link no work have at least an item? ' + linkNoWork[0])
      }).then(() => {
        for (let i = 0; i < linkNoWork.length; i++) {
          console.log('be? ' + linkNoWork[i]);
        }
          let test = linkNoWork.join(', ');
          expect(linkNoWork.length,`The following links doesn't work:  ${linkNoWork.join(', ')}`).to.equal(0);
        
      })


  })
})


