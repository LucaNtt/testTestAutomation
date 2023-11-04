describe('template spec', () => {
  it('check Video Link', () => {
    cy.visit('/')
    cy.get('#component-news > div.l-wrapper.c-hp-section-widget__section-widget > div > div > div > div > div > div.c-hp-videos-section-widget__container-videos > div > a.c-video-card.c-video-card--no-mobile')
      .then((item) => {
        let href = item.attr('href');

        cy.get('#component-news > div.l-wrapper.c-hp-section-widget__section-widget > div > div > div > div > div > div.c-hp-videos-section-widget__container-videos > div > a.c-video-card.c-video-card--no-mobile > div > div.c-video-card__col-info > h2')
          .invoke('text')
          .then((titleLinkFromText) => {
            cy.visit(href).then(() => {
              cy.get('#c-content > div > div.l-wrapper-container > div > div:nth-child(1) > div.l-grid__main > div > div > div > div > div.c-video-details__title-row > div > h1')
                .invoke('text')
                .then((title) => {
                  cy.addContext(`the ${titleLinkFromText} is equal to ${title}`)
                  cy.log(`the ${titleLinkFromText} is equal to ${title}`)
                  expect(titleLinkFromText).to.equal(title);
                })
            })
          })
      })
  })
})