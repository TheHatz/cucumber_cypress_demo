class LandingPage{

    elements = {
        getUsername: () => cy.get('[data-test=username]'),
        getPassword: () => cy.get('[data-test=password]'),
        getLoginBtn: () => cy.get('#login-button')
    }

    visit(){
        cy.visit("");
    };

    enter_username(user){
        this.elements.getUsername().type(user);
    };

    enter_password(password){
        this.elements.getPassword().type(password);
    };

    submit_login(){
        this.elements.getLoginBtn().click();
    };
}

export default LandingPage