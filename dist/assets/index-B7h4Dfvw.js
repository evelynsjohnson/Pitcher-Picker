(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();class o{constructor(e){this.onStartClick=e,this.element=this.createScreen()}createScreen(){const e=document.createElement("div");return e.className="screen start-screen",e.innerHTML=`
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
        `,e.querySelector("#startBtn").addEventListener("click",this.onStartClick),e}show(){this.element.classList.add("active")}hide(){this.element.classList.remove("active")}}class a{constructor(e){this.onAuthSuccess=e,this.isLoginMode=!0,this.element=this.createScreen()}createScreen(){const e=document.createElement("div");return e.className="screen auth-screen",e.innerHTML=`
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
        `,e.querySelector("#authSuccess").addEventListener("click",this.onAuthSuccess),e}show(){this.element.classList.add("active")}hide(){this.element.classList.remove("active")}}class l{constructor(e,r){this.onInstanceSelect=e,this.onCreateInstance=r,this.element=this.createScreen()}createScreen(){const e=document.createElement("div");return e.className="screen instances-screen",e.innerHTML=`
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
        `,e.querySelector("#createInstance").addEventListener("click",this.onCreateInstance),e}show(){this.element.classList.add("active")}hide(){this.element.classList.remove("active")}}class d{constructor(){this.currentScreen=null,this.screens={},this.init()}init(){this.createScreens(),this.showScreen("start")}createScreens(){this.screens.start=new o(()=>{this.showScreen("auth")}),this.screens.auth=new a(()=>{this.showScreen("instances")}),this.screens.instances=new l(r=>this.loadGame(r),()=>this.createNewInstance());const e=document.getElementById("app");Object.values(this.screens).forEach(r=>{e.appendChild(r.element)})}showScreen(e){this.currentScreen&&this.currentScreen.hide(),this.currentScreen=this.screens[e],this.currentScreen.show()}loadGame(e){console.log("Loading game instance:",e),alert(`Loading instance: ${e.instance_name}`)}createNewInstance(){console.log("Creating new instance"),alert("Creating new pitcher plant!")}}document.addEventListener("DOMContentLoaded",()=>{new d});
