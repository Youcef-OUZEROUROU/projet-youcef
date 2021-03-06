Cypress.Commands.add("choix_user", (projet) => {
    cy.get('#projectSelect').select(projet.projectSelect)
        cy.get('#amount').select(projet.amount)
        cy.get('#creditMaturity').select(projet.creditMaturity)
})
Cypress.Commands.add('buttonClick', (label) => {
    cy.contains(label).click()
})
Cypress.Commands.add('urlWebSite', (urlLog )=>{
    cy.url().should('include', urlLog )
})
Cypress.Commands.add('pageTitle', (pageTitle )=>{
    cy.get('title')
            .should('contain',pageTitle)
})
Cypress.Commands.add("emailUser", (identity) => {
    cy.get('#email-input').type(identity.email).should('have.value',identity.email)
})
Cypress.Commands.add("situation_familiale_user", (identity) => {
    cy.get('#maritalStatus-input').select(identity.maritalStatus).should('have.class', 'ng-valid')
    cy.get('#childNumberPropal-input').select(identity.childNumber).should('have.class', 'ng-valid')
})
Cypress.Commands.add("situation_user", (logement) => {
    cy.get('#housingStatus-input').select(logement.housingStatus)
    cy.get('#housingStatusFrom-input-month').type(logement.housingStatusMouth)
    cy.get('#housingStatusFrom-input-year').type(logement.housingStatusYear)
})
Cypress.Commands.add("activityCeliba", (activityStatus,activity) => {
    cy.get('#activitySector-input').select(activity.activitySector)
    cy.get('#profession-input').select(activity.profession)
    if(activityStatus.isIndependent){
        cy.get('#businessActivityStartDate-input-month').type(activity.businessActivityStartDateMouth)
        cy.get('#businessActivityStartDate-input-year').type(activity.businessActivityStartDateYear).should('have.class', 'ng-valid')
    }
    if(activityStatus.isSalarie){
        cy.get('#contractType-input').select(activity.contractType).should('have.class', 'ng-valid')
        cy.get('#employedFrom-input-month').type(activity.employedFromMouth)
        cy.get('#employedFrom-input-year').type(activity.employedFromYear).should('have.class', 'ng-valid')
    }
    if(activityStatus.isRetired){
        cy.get('#pensionFrom-input-month').type(activity.pensionFromMouth).should('have.class', 'ng-valid')
        cy.get('#pensionFrom-input-year').type(activity.pensionFromYear).should('have.class', 'ng-valid')
    }
})
Cypress.Commands.add("activite_conjoint_user", (activityStatus_partenaire, partnerActivity) =>{
    if(activityStatus_partenaire.isMariedOrPaced ){
        cy.get('#partnerActivitySector-input').select(partnerActivity.partnerActivitySector)
        cy.get('#partnerProfession-input').select(partnerActivity.partnerProfession).should('have.class', 'ng-valid')
        if(activityStatus_partenaire.isSalarie){
            cy.get('#partnerContractType-input').select(partnerActivity.partnerContractType).should('have.class', 'ng-valid')
            cy.get('#partnerEmployedFrom-input-month').type(partnerActivity.partnerEmployedFromMouth)
            cy.get('#partnerEmployedFrom-input-year').type(partnerActivity.partnerEmployedFromYear).should('have.class', 'ng-valid') 
        }
        if(activityStatus_partenaire.isRetired){
            cy.get('#partnerPensionFrom-input-month').type(partnerActivity.partnerPensionFromMouth)
            cy.get('#partnerPensionFrom-input-year').type(partnerActivity.partnerPensionFromYear)
        }
    }
}) 
Cypress.Commands.add("revenu_user", (mariedStatus, activity, logement, partnerActivity) => {
    cy.get('#mainIncome-input').type(activity.mainIncome).should('have.class', 'ng-valid')
    cy.get('#housingAssistance-input').type(logement.housingAssistance).should('have.class', 'ng-valid')
    cy.get('#additionalIncome-input').type(logement.additionalIncome).should('have.class', 'ng-valid')
    if(mariedStatus.isMariedOrPaced){
        cy.get('#coIncome-input').type(partnerActivity.coIncome).should('have.class', 'ng-valid')
    }
})
Cypress.Commands.add('loyerUser', (houseStatus,houseStep) => {
    if(houseStatus.isTenant){
        cy.get('#rentAmount-input').type(houseStep.rentAmount).should('have.class', 'ng-valid')
    }
    if(houseStatus.isOwnerWithCredit){
        cy.get('#mortgageAmount-input').type(houseStep.mortgageAmount).should('have.class', 'ng-valid')
    }
    if(houseStatus.isParent){
        cy.get('#childSupportPaymentsAmount-input').type(houseStep.childSupportPaymentsAmount).should('have.class', 'ng-valid')
        cy.get('#childCareExpensesAmount-input').type(houseStep.childCareExpensesAmount).should('have.class', 'ng-valid')
    }
    if(houseStatus.haveOtherLoan || houseStatus.isOwner){
        cy.get('#loanCount-input').select(houseStep.loanCount).should('have.class', 'ng-valid')
        if(houseStep.loanCount >= 1){
        cy.get('#type-input').select(houseStep.type).should('have.class', 'ng-valid')
        cy.get('#loanAmount-input').type(houseStep.loanAmount).should('have.class', 'ng-valid')
        } 
    }
})
Cypress.Commands.add('loyer_User', (situation_logement,logement) => {
    if(situation_logement.isTenant){
        cy.get('#rentAmount-input').type(logement.rentAmount).should('have.class', 'ng-valid')
    }
    if(situation_logement.isOwnerWithCredit){
        cy.get('#mortgageAmount-input').type(logement.mortgageAmount).should('have.class', 'ng-valid')
    }
    if(situation_logement.isParent){
        cy.get('#childSupportPaymentsAmount-input').type(logement.childSupportPaymentsAmount).should('have.class', 'ng-valid')
        cy.get('#childCareExpensesAmount-input').type(logement.childCareExpensesAmount).should('have.class', 'ng-valid')
    }
    if(situation_logement.haveOtherLoan || situation_logement.isOwner){
        cy.get('#loanCount-input').select(logement.loanCount).should('have.class', 'ng-valid')
        if(logement.loanCount >= 1){
        cy.get('#type-input').select(logement.type).should('have.class', 'ng-valid')
        cy.get('#loanAmount-input').type(logement.loanAmount).should('have.class', 'ng-valid')
        } 
    }
})
Cypress.Commands.add('banque_user', (banque) => {
    cy.get('#bankCode-input').select(banque.bankCode).should('have.class', 'ng-valid')
    cy.get('#bankFrom-input-year').type(banque.bankFromYear).should('have.class', 'ng-valid')
})
Cypress.Commands.add('identity', (identity) => {
    cy.get(identity.gender).check({ force: true }).should('be.checked')
    cy.get('#lastName-input').type(identity.lastName).should('have.class', 'ng-valid')
    cy.get('#firstName-input').type(identity.firstName).should('have.class', 'ng-valid')
    cy.get('#dateOfBirth-input-day').type(identity.dateOfBirthDay)
    cy.get('#dateOfBirth-input-month').type(identity.dateOfBirthMouth)
    cy.get('#dateOfBirth-input-year').type(identity.dateOfBirthYear).should('have.class', 'ng-valid')
    cy.get('#postalCode-input').type(identity.postalCode).should('have.class', 'ng-valid')
    cy.get('#city-input').select(identity.city).should('have.class', 'ng-valid')
})
Cypress.Commands.add('identity_Partner', (partnerStatus, identity_partenaire) => {
    if(partnerStatus.isPartner){
        cy.wait(2000)
        cy.get(identity_partenaire.partnerGender).check({ force: true }).should('be.checked')
        cy.get('#lastName-input').type(identity_partenaire.partnerLastName).should('have.class', 'ng-valid')
        if(partnerStatus.isMaried){
            cy.get('#maidenName-input').type(identity_partenaire.partnerMaidenName).should('have.class', 'ng-valid')
        }
        cy.get('#firstName-input').type(identity_partenaire.partnerFirstName).should('have.class', 'ng-valid')
        cy.get('#dateOfBirth-input-day').type(identity_partenaire.partnerDateOfBirthDay)
        cy.get('#dateOfBirth-input-month').type(identity_partenaire.partnerDateOfBirthMouth)
        cy.get('#dateOfBirth-input-year').type(identity_partenaire.partnerDateOfBirthYear).should('have.class', 'ng-valid')
        cy.get('#postalCode-input').type(identity_partenaire.partnerPostalCode).should('have.class', 'ng-valid')
        cy.get('#city-input').select(identity_partenaire.partnerCity).should('have.class', 'ng-valid')
    }
})
Cypress.Commands.add('contact', (identityStep) => {
    cy.get('#cellPhoneNumber-input').type(identityStep.cellPhoneNumber).should('have.value',identityStep.cellPhoneNumber )
    cy.get('#phoneNumber-input').type(identityStep.phoneNumber).should('have.value',identityStep.phoneNumber)
    cy.get('#address-input').type(identityStep.address).should('have.class', 'ng-valid')
    cy.get('#postalCode-input').type(identityStep.postalCode).should('have.class', 'ng-valid')
    cy.get('#city-input').select(identityStep.city).should('have.class', 'ng-valid')
    
})

Cypress.Commands.add('assurance', (identity) => {
    cy.get('#insurance-subscribers-input').select(identity.insurance_subscribers).should('have.class', 'ng-valid')
})
Cypress.Commands.add('buttonClick', (label) => {
    cy.contains(label).click()
})


