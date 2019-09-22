describe('Page Loads Correctly', function() {
    it('Single Page App Loads', function() {
        cy.visit('/');
        cy.title().should('include', 'Targeting Quality');
        cy.get('[data-test-key=create-task-button]').contains('Create Task')
    });
});
