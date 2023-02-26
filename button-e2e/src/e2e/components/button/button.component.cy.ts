describe('button', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mercbuttoncomponent--primary'));
  it('should render the component', () => {
    cy.get('merc-button').should('exist');
  });
});
