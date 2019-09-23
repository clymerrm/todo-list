import faker from 'faker'

describe('Add New Tasks', function() {
    it('Adds a new task', function () {
        cy.visit('http://localhost:3000');
        const taskName = faker.company.catchPhrase();
        cy.get('[data-test-key=task-name-input]').type(taskName);
        const d = new Date();
        const options = {
            weekday: "short",
            year: "numeric",
            month: "2-digit",
            day: "numeric"
        };
        cy.get('[id=task-due-date]').type(d.toLocaleString("en-US", options));
        cy.get('[data-test-key=create-task-button').click();
        cy.get('[data-test-key=task-element]>p>span[data-test-key=task-name]')
            .each(($el) => {
                if ($el.text() === taskName) {
                    expect($el.text()).to.equal(taskName)
                }
            })
    });
});
