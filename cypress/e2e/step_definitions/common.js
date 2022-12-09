import {
    When
} from '@badeball/cypress-cucumber-preprocessor';
const page = require('../../elements/page');


When('User does nothing', () => {
    console.log('ping')
});

When('User clicks button', () => {
    page.clickExampleButton()
});
