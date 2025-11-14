
describe('Registro de Cliente', () => {

 
  it('happyPath', () => {
    
    cy.fixture('register.ok.json').then((validData) => { 
      
    cy.visit('/auth/registerClient'); // 
      
    cy.registroDatosPersonales(validData);
      
    cy.get('button[type="submit"]').click(); 
      
    cy.url().should('include', '/dashboard'); 

    cy.get('h1').should('contain', 'Bienvenido'); 
    });
  });


  it('wrongPath', () => {
    
    cy.fixture('register.wrong.json').then((invalidData) => { 
      
    cy.visit('/auth/registerClient');
      
    cy.registroDatosPersonales(invalidData);
      
    cy.get('button[type="submit"]').click();
      
    cy.get('.error-message').should('exist'); // 
      
    cy.get('.error-message')
        .should('be.visible') 
        .and('contain', 'El formato del email es incorrecto'); 
        
    cy.get('[data-cy="input-password"]').should('be.disabled');
    });
  });

});