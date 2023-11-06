describe('Test links on video.sky.it', () => {
  it('Check Links', () => {
    var linkNoWork = []
    var linkWork = []
    cy.visit('/')

    cy.get('a')
      .each((link) => {
        if (link.prop('href') == '') {
          return
        }
        cy.request({
          url: link.prop('href'),
          failOnStatusCode: false
        })
          .its('status')
          .then((item) => {
            if (item === 404) {
              linkNoWork.push(link.prop('href'))
            }else{
              cy.addContext(`the following link NOT return 404:  ${link.prop('href')}`)
              linkWork.push(link.prop('href'))
            }
          })
      }).then(() => {
        
        cy.log(`the following link NOT return 404:  ${linkWork.join(', ')}`)
        expect(linkNoWork.length, `the following links return 404:  ${linkNoWork.join(', ')}`).to.equal(0);

      })
  })
})


