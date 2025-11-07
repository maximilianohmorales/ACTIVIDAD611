describe('Formulario de Registro', () => {
  const timestamp = Date.now(); 
  const validUser = {
    nombre: 'Maximo',
    apellido: 'Montreal',
    telefono: '123456789012',
    dni: '235689784', 
    provincia: 'Buenos Aires',
    localidad: 'Avellaneda',
    day: '15',
    month: '08',
    year: '1995',
    email: `montrealmaximo@gmail.com`, 
    password: '42323452',
  };

  const registeredEmail = 'montrealmaximo@gmail.com';
  const registeredDni = '42323452';

  beforeEach(() => {
    cy.visit('https://ticketazo.com.ar/auth/registerUser');
  });

  it('Debe completar el formulario y redirigir al login', () => {
    cy.registroDatosPersonales(validUser.nombre, validUser.apellido, validUser.telefono, validUser.dni);
    cy.seleccionarUbicación(validUser.provincia, validUser.localidad);
    cy.registroFechaNacimiento(validUser.day, validUser.month, validUser.year);
    cy.registroEmail(validUser.email);
    cy.registroContraseña(validUser.password);

    cy.log('Enviar formulario');
    cy.get('[data-cy="btn-registrarse"]').click();
    cy.wait(2000);
});
});