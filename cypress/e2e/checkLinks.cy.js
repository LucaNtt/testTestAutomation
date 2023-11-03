describe('Test links on video.sky.it', () => {
  it('Controlla che tutti i links siano validi', () => {
    var linkNoWork = []
    cy.visit('/')

    cy.get('a')
      .each((link) => {
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


