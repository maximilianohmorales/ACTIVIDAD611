Cypress.Commands.add('registroDatosPersonales', (userData) => {

  if (userData.razonSocial) {
    cy.get('[data-cy="input-razon-social"]').type(userData.razonSocial); // [cite: 67]
  }
  if (userData.cuit) {
    cy.get('[data-cy="input-cuit"]').type(userData.cuit);
  }
  if (userData.provincia) {
    cy.get('[data-cy="select-provincia"]').type(userData.provincia +'{enter}');
  }
  if (userData.localidad) {
    cy.get('[data-cy="select-localidad"]').type(userData.localidad +'{enter}'); // [cite: 67]
  }

  if (userData.direccion) {
    cy.get('[data-cy="input-direccion"]').type(userData.direccion);
  }

  if (userData.telefono) {
    cy.get('[data-cy="input-telefono"]').type(userData.telefono);
  }

  if (userData.email) {
    cy.get('[data-cy="input-email"]').type(userData.email);
  }
  if (userData.email) {
    cy.get('[data-cy="input-confirmar-email"]').type(userData.email);
  }
   if (userData.contraseña) {
    cy.get('[data-cy="input-password"]').type(userData.contraseña);
  }
  if (userData.contraseña) {
    cy.get('[data-cy="input-repetir-password"]').type(userData.contraseña);
  }
});