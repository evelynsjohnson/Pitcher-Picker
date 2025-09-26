export class InstancesScreen {
    constructor(onInstanceSelect, onCreateInstance) {
        this.onInstanceSelect = onInstanceSelect;
        this.onCreateInstance = onCreateInstance;
        this.element = this.createScreen();
    }

    createScreen() {
        const screen = document.createElement('div');
        screen.className = 'screen instances-screen';
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
                <h2 style="color: #8effb5; margin-bottom: 2rem;">Your Plants</h2>
                <div style="color: white;">Instances screen content</div>
                <button id="createInstance" style="
                    padding: 1rem; 
                    background: #4caf50; 
                    color: white; 
                    border: none; 
                    border-radius: 8px;
                    cursor: pointer;
                    margin-top: 2rem;
                ">Create New Plant</button>
            </div>
        `;

        screen.querySelector('#createInstance').addEventListener('click', this.onCreateInstance);
        return screen;
    }

    show() {
        this.element.classList.add('active');
    }

    hide() {
        this.element.classList.remove('active');
    }
}