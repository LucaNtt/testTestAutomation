require('cypress-iframe');
describe('check Video Link', () => {
  it('check Video Link', () => {
    cy.visit('/')
    cy.iframe('#sp_message_iframe_898536').find('#notice > div.message-component.message-row.unstack > button:nth-child(1)').click().then(() => {

      cy.get('#component-news > div.l-wrapper.c-hp-section-widget__section-widget > div > div > div > div > div > div.c-hp-videos-section-widget__container-videos > div > a.c-video-card.c-video-card--no-mobile')
        .then((item) => {
          let href = item.attr('href');
          cy.get('#component-news > div.l-wrapper.c-hp-section-widget__section-widget > div > div > div > div > div > div.c-hp-videos-section-widget__container-videos > div > a.c-video-card.c-video-card--no-mobile > div > div.c-video-card__col-info > h2')
            .invoke('text')
            .then((titleLinkFromText) => {
              cy.get('#component-news .c-video-card:nth-child(1) .img-cover-ext:nth-child(1)')
                .click()
                .then(() => {
                  cy.get('#c-content > div > div.l-wrapper-container > div > div:nth-child(1) > div.l-grid__main > div > div > div > div > div.c-video-details__title-row > div > h1')
                    .invoke('text')
                    .then((title) => {
                      cy.url().then(urln => {
                        console.log('urln ' + urln + 'href ' + href)
                        expect(urln).to.eq(href)
                        cy.addContext(`the url page is: "${urln}". The link in the card is: "${href}"`)
                        cy.addContext(`the title of the link: "${titleLinkFromText}" is equal to page title: "${title}"`)
                        cy.log(`the title link: "${titleLinkFromText}" is equal to page title: "$${title}"`)
                        expect(titleLinkFromText).to.equal(title);
                      })
                    })
                })
            })
        })
    })
  })
})