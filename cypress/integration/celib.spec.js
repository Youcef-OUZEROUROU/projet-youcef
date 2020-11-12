describe(' Celib credit ', () => {
    let celib = require('../fixtures/single')
    before("site internet", () => {
        cy.visit('https://www.younited-credit.com')
        cy.urlWebSite('younited-credit')
        cy.pageTitle( 'Le Crédit 100% en Ligne – Réponse en 24h | Younited Credit')
    })
    it("page d'accueil", () =>{
        cy.choix_user(celib.projet)
        cy.wait(3000)
        cy.buttonClick('Continuer')
        cy.wait(3000)
    })
    it('Email', () =>{
        cy.urlWebSite('/email')
        cy.pageTitle('Younited Credit')
        cy.wait(3000)
        cy.emailUser(celib.identity)
        cy.get('div').should('have.class', 'wrapper-input input-wrapper--valid')
        cy.wait(3000)
        cy.buttonClick('Voir mon offre personnalisée')
    })
    it('Situation familiale', () =>{
        cy.urlWebSite('/familysituation')
        cy.pageTitle('Younited Credit')
        cy.situation_familiale_user(celib.identity)
        cy.get('[type="checkbox"]')
            .uncheck({force:true}) 
        cy.buttonClick('Suite')
    })
    it('logement', () =>{
        cy.urlWebSite('/housing')
        cy.pageTitle('Younited Credit')
        cy.situation_user(celib.logement)
        cy.get('[type="checkbox"]').uncheck({force:true}) 
        cy.buttonClick('Suite')
    })
    it('Situation profetionnelle', () =>{
        cy.urlWebSite('/professionalsituation')
        cy.pageTitle('Younited Credit')
        cy.activityCeliba(celib.activityStatus, celib.activity)
        cy.get('#ISCOMPANYBANKRUPT_FALSE')
            .check({ force: true })
            .should('be.checked')
        cy.buttonClick('Suite')
    })
    if(celib.identity.maritalStatus != "SINGLE"){
        it('Activité du conjoint', () =>{
            cy.urlWebSite('/partnerprofession')
            cy.pageTitle('Younited Credit')
            cy.activite_conjoint_user(celib.partnerActivityStatus, celib.partnerActivity)
            cy.buttonClick('Suite')
        })
        it('Identité du conjoint', () =>{
            cy.urlWebSite('/partneridentity')
            cy.pageTitle('Younited Credit')
            cy.identityPartnerUser(celib.partnerStatus, celib.partnerIdentity)
            cy.buttonClick('Suite')
        })
    }
    it('Revenu', () =>{
        cy.urlWebSite('/incomes')
        cy.pageTitle('Younited Credit')
        cy.revenu_user(celib.mariedStatus, celib.activity, celib.logement, celib.partnerActivity)
        cy.buttonClick('Suite')
    })
    it('loyer', () =>{
        cy.urlWebSite('/outcomes')
        cy.pageTitle('Younited Credit')
        cy.loyer_User(celib.situation_logement, celib.logement)
        cy.buttonClick('Suite')
    })
    it('Banque celibataire', () =>{
        cy.urlWebSite('/bank')
        cy.pageTitle('Younited Credit')
        cy.banque_user(celib.banque)
        cy.buttonClick('Suite')
    })
    it('Identité user celibataire', () =>{
        cy.urlWebSite('/identity')
        cy.pageTitle('Younited Credit')
        cy.identity(celib.identity)
        cy.buttonClick('Suite')
    })
     
    it('Contact', () =>{
        cy.urlWebSite('/contact')
        cy.pageTitle('Younited Credit')
        cy.contact( celib.identity)
        cy.buttonClick('Suite')
    })
    it('Assurance_test', () =>{
        cy.urlWebSite('/offers')
        cy.pageTitle('Younited Credit')
        cy.assurance(celib.identity)
        cy.buttonClick('Suite')
    })
    it('Test_page_offre', () =>{
        cy.urlWebSite('/modify-offer')
        cy.pageTitle('Younited Credit')
    })
    
})