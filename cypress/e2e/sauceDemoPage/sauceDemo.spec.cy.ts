
import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

// A user should be able to login with username and password successfully
Given(/^I launch the app$/, () => {
    // cy.clearAllCookies()
    cy.visit('/', {failOnStatusCode: false});
});

When(/^I input username$/, () => {
  cy.fixture('sauceLocator.json').then((sel) => {
    cy.typeAText(sel.usernameField, sel.userName);
  });
});

When(/^I input password$/, () => {
  cy.fixture('sauceLocator.json').then((sel) => {
    cy.typeAText(sel.passwordField, sel.password)
  })
});

When(/^I click on login in button$/, () => {
  cy.fixture('sauceLocator.json').then((sel) => {
    cy.clickElement(sel.LoginBtn)
  })
});

Then(/^I should view inventory list successfully$/, () => {
  cy.fixture('sauceLocator.json').then((sel) => {
    cy.contains("Swag Labs").should("be.visible")
  })
})

When(/^I click on name A to Z$/, () => {
  cy.fixture('sauceLocator.json').then((sel) => {
    cy.wait(2000)
    cy.get(sel.filterField).select(sel.ztoa)
  })
});

When(/^I click on name Z to A$/, () => {
  cy.fixture('sauceLocator.json').then((sel) => {
    cy.wait(2000)
    cy.get(sel.filterField).select(sel.ztoa)
  })
});

When(/^I click on price Low to high$/, () => {
  cy.fixture('sauceLocator.json').then((sel) => {
    cy.get(sel.filterField).select(sel.lowToHight)
    cy.wait(4000)
  })
});

// // A user should be able to Add to cart successfully
// When(/^I click on add to cart button$/, () => {
//   cy.fixture('sauceLocator.json').then((sel) => {
//     cy.clickElement(sel.addToCartBtn)
//   })
// });

// When(/^I click on shopping cart badge Icon$/, () => {
//   cy.fixture('sauceLocator.json').then((sel) => {
//     cy.clickElement(sel.shoppingCartbadge)
//   })
// });

// When(/^I click on remove button$/, () => {
//   cy.fixture('sauceLocator.json').then((sel) => {
//     cy.clickElement(sel.removeBtn)
//   })
// });

// When(/^I click on continue shopping button$/, () => {
//   cy.fixture('sauceLocator.json').then((sel) => {
//     cy.clickElement(sel.contShoppingBtn)
//   })
// });

// When(/^I click on Add to cart button$/, () => {
//   cy.fixture('sauceLocator.json').then((sel) => {
//     cy.clickElement(sel.addToCartBtn)
//   })
// });

// When(/^I click on cart Icon$/, () => {
//   cy.fixture('sauceLocator.json').then((sel) => {
//     cy.clickElement(sel.shoppingCartbadge)
//   })
// });

// // A user should be able to checkout successfully
// When(/^I click on checkout button$/, () => {
//   cy.fixture('sauceLocator.json').then((sel) => {
//     cy.clickElement(sel.checkOutBtn)
//   })
// });

// When(/^I input First and Last name$/, () => {
//   cy.fixture('sauceLocator.json').then((sel) => {
//     cy.typeAText(sel.firstNameField, sel.firstName)
//     cy.typeAText(sel.lastNameField, sel.lastName)
//   })
// });

// When(/^I input my zipcode$/, () => {
//   cy.fixture('sauceLocator.json').then((sel) => {
//     cy.typeAText(sel.postalCodeField, sel.postalCode)
//   })
// });

// When(/^I click on continue button$/, () => {
//   cy.fixture('sauceLocator.json').then((sel) => {
//     cy.clickElement(sel.continueBtn)
//   })
// });

// When(/^I click on Finish button$/, () => {
//   cy.fixture('sauceLocator.json').then((sel) => {
//     cy.clickElement(sel.finishBtn)
//   })
// });

// When(/^I click on Hamburger button$/, () => {
//   cy.fixture('sauceLocator.json').then((sel) => {
//     cy.clickElement(sel.burgerMenuBtn)
//   })
// });

// Then(/^I click on Logout button$/, () => {
//   cy.fixture('sauceLocator.json').then((sel) => {
//     cy.clickElement(sel.logOutBtn)
//   })
// });
