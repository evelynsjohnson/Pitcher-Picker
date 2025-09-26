export class AuthScreen {
    constructor(onAuthSuccess) {
        this.onAuthSuccess = onAuthSuccess;
        this.isLoginMode = true;
        this.element = this.createScreen();
    }

    createScreen() {
        const screen = document.createElement('div');
        screen.className = 'screen auth-screen';
        screen.innerHTML = `
            <div style="
                width: 100%; 
                height: 100%; 
                background: #1a3a2a;
                padding: 2rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
            ">
                <h2 style="color: #8effb5; margin-bottom: 2rem;">Welcome</h2>
                <div style="color: white;">Auth screen content</div>
                <button id="authSuccess" style="
                    padding: 1rem; 
                    background: #4caf50; 
                    color: white; 
                    border: none; 
                    border-radius: 8px;
                    cursor: pointer;
                    margin-top: 2rem;
                ">Continue to Game</button>
            </div>
        `;

        screen.querySelector('#authSuccess').addEventListener('click', this.onAuthSuccess);
        return screen;
    }

    show() {
        this.element.classList.add('active');
    }

    hide() {
        this.element.classList.remove('active');
    }
}