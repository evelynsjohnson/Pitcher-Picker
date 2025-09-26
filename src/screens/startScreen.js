// Change from whatever you have to:
export class StartScreen {
    constructor(onStartClick) {
        this.onStartClick = onStartClick;
        this.element = this.createScreen();
    }

    createScreen() {
        const screen = document.createElement('div');
        screen.className = 'screen start-screen';
        screen.innerHTML = `
            <div style="
                width: 100%; 
                height: 100%; 
                background: #1a3a2a;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            ">
                <h1 style="color: #8effb5; margin-bottom: 2rem;">Pitcher Picker</h1>
                <button id="startBtn" style="
                    padding: 1rem 2rem; 
                    background: #4caf50; 
                    color: white; 
                    border: none; 
                    border-radius: 8px;
                    cursor: pointer;
                ">Start Game</button>
            </div>
        `;

        screen.querySelector('#startBtn').addEventListener('click', this.onStartClick);
        return screen;
    }

    show() {
        this.element.classList.add('active');
    }

    hide() {
        this.element.classList.remove('active');
    }
}