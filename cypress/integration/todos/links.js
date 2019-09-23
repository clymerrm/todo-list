describe('Clicking Header Links Test', function() {
    it('Navigates to the schedule page', function() {
        cy.visit('http://localhost:3000');
        cy.get('[data-test-key=ScheduleLink]').click();
        cy.title().should('include', 'Schedule');
    });
    it('Navigates to the speakers page', function() {
        cy.visit('http://localhost:3000');
        cy.get('[data-test-key=SpeakersLink]').click();
        cy.title().should('include', 'Speakers');
    })
});
