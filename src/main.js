import { StartScreen } from './screens/startScreen.js'
import { AuthScreen } from './screens/authScreen.js'
import { InstancesScreen } from './screens/instancesScreen.js'

class PitcherPickerGame {
    constructor() {
        this.currentScreen = null
        this.screens = {}
        this.init()
    }

    init() {
        this.createScreens()
        this.showScreen('start')
    }

    createScreens() {
        // Start Screen
        this.screens.start = new StartScreen(() => {
            this.showScreen('auth')
        })

        // Auth Screen
        this.screens.auth = new AuthScreen(() => {
            this.showScreen('instances')
        })

        // Instances Screen
        this.screens.instances = new InstancesScreen(
            (instance) => this.loadGame(instance),
            () => this.createNewInstance()
        )

        // Add all screens to DOM
        const app = document.getElementById('app')
        Object.values(this.screens).forEach(screen => {
            app.appendChild(screen.element)
        })
    }

    showScreen(screenName) {
        if (this.currentScreen) {
            this.currentScreen.hide()
        }
        
        this.currentScreen = this.screens[screenName]
        this.currentScreen.show()
    }

    loadGame(instance) {
        console.log('Loading game instance:', instance)
        // This will load the actual game screen
        alert(`Loading instance: ${instance.instance_name}`)
    }

    createNewInstance() {
        console.log('Creating new instance')
        // This will create a new instance and load the game
        alert('Creating new pitcher plant!')
    }
}

// Start the game when page loads
document.addEventListener('DOMContentLoaded', () => {
    new PitcherPickerGame()
})