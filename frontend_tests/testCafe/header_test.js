import {Selector, t} from 'testcafe';

fixture `Task List`
    .page `http://localhost:3000`;

test('Header Test', async t => {
    const ScheduleLink = Selector("[data-test-key='ScheduleLink']")
    await t
        .click(ScheduleLink)
        .expect(Selector("title").innerText).contains('Schedule');
});
