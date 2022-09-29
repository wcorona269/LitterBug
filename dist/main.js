!function(){var e={11:function(e){e.exports=class{}},957:function(e,t){}},t={};function s(i){var h=t[i];if(void 0!==h)return h.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,s),r.exports}!function(){"use strict";s(957);var e=class{constructor(e,t,s,i,h){this.pos=e,this.vel=t,this.radius=s,this.color=i,this.game=h}draw(e){e.beginPath(),e.arc(this.pos[0],this.pos[1],this.radius,0,2*Math.PI),e.fillStyle=this.color,e.lineWidth=1,e.fill(),e.stroke()}move(){let e=this.pos[0]+this.vel[0],t=this.pos[1]+this.vel[1];this.pos=[e,t]}dist(e,t){return Math.sqrt(Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2))}isCollidedWith(e){return this.dist(this.pos,e.pos)<this.radius+e.radius}isOutOfBounds(e){return e[0]<0||e[1]<0||e[0]>Game.DIM_X||e[1]>Game.DIM_Y}};s(11),(new Image).src="./images/beetle/bup.png",(new Image).src="./images/beetle/bd.png";const t=new Image;t.src="./images/beetle/bl.png";const i=new Image;i.src="./images/beetle/br.png";var h=class extends e{constructor(e){super([500,375],[0,0],16,"black",e),this.currentFrameIdx=3,this.frameCount=0,this.br=i,this.bl=t}travel(e){this.vel[0]+e[0]<=10&&this.vel[0]+e[0]>=-10&&(this.vel[0]+=e[0]),this.vel[1]+e[1]<=10&&this.vel[1]+e[1]>=-10&&(this.vel[1]+=e[1])}draw(e){this.vel[0]>=0?e.drawImage(this.br,this.pos[0]-10,this.pos[1]-10,60,60):this.vel[0]<0&&e.drawImage(this.bl,this.pos[0]-10,this.pos[1]-10,60,60)}};const r=new Image;r.src="./images/beetle/bup.png";var n=class extends e{constructor(e){super([500,375],[1,1],20,"black",e),this.currentFrameIdx=3,this.frameCount=0,this.speed=[2,3,4],this.speedIdx=0,this.beetleup=r}findBug(e){let t=e.pos,s=t[0]-this.pos[0],i=t[1]-this.pos[1];this.vel[0]=this.speed[this.speedIdx]*(s/Math.sqrt(Math.pow(s,2)+Math.pow(i,2))),this.vel[1]=this.speed[this.speedIdx]*(i/Math.sqrt(Math.pow(s,2)+Math.pow(i,2)))}draw(e){e.drawImage(this.beetleup,this.pos[0]-10,this.pos[1]-10,60,60)}};const a=new Image;a.src="./images/litter/water.png";const o=new Image;o.src="./images/litter/jug.png";const l=new Image;l.src="./images/litter/box.png";const d=new Image;d.src="./images/litter/news.png";const m=new Image;m.src="./images/litter/coke.png";const u=new Image;u.src="./images/litter/beer.png";const c=new Image;c.src="./images/litter/can.png";const g=new Image;g.src="./images/litter/styrocup.png";const p=new Image;p.src="./images/litter/pizza.png";const w=["water","can","coke","beer","stycup","box","news","jug","pizza"],b={water:1,can:1,coke:2,beer:2,stycup:3,news:3,box:4,jug:4,pizza:5};var v=class extends e{constructor(e,t){super(e,[0,0],13,"lightblue",t),this.title=w[Math.floor(Math.random()*w.length)],this.value=b[this.title]}draw(e){"water"===this.title?e.drawImage(a,5,5,45,30,this.pos[0]-5,this.pos[1]-5,30,30):"can"===this.title?e.drawImage(c,5,5,45,30,this.pos[0]-5,this.pos[1]-5,30,30):"coke"===this.title?e.drawImage(m,5,5,45,30,this.pos[0]-5,this.pos[1]-5,30,30):"beer"===this.title?e.drawImage(u,5,5,45,30,this.pos[0]-5,this.pos[1]-5,30,30):"stycup"===this.title?e.drawImage(g,5,5,45,30,this.pos[0]-5,this.pos[1]-5,30,30):"box"===this.title?e.drawImage(l,5,5,45,30,this.pos[0]-5,this.pos[1]-5,30,30):"news"===this.title?e.drawImage(d,5,5,45,30,this.pos[0]-5,this.pos[1]-5,30,30):"jug"===this.title?e.drawImage(o,5,5,45,30,this.pos[0]-5,this.pos[1]-5,30,30):e.drawImage(p,5,5,45,30,this.pos[0]-5,this.pos[1]-5,30,30)}};const y=new Image;y.src="./images/garbage.png";var I=class extends e{constructor(e,t){super(e,[0,0],30,"purple",t)}draw(e){e.drawImage(y,this.pos[0]-30,this.pos[1]-50,50,80)}};const f=new Image;f.src="./images/grasstest_1.png";const M=[[40,40],[40,710],[960,40],[960,710]];var L=class{constructor(e){this.game=new class{constructor(){this.bug=new h(this),this.enemy=[],this.lives=3,this.belly=[],this.litters=[],this.dumps=[],this.currentLitter=[],this.score=0,this.dumpVisits=0,this.over=!1,this.addLitter(),this.addDump(),this.startCountdown(60),this.time=60,this.paused=!1}startCountdown(e){this.time=60;let t=e,s=document.querySelector("#timerEl");setInterval((()=>{t>-1&&!this.paused&&!this.over&&(s.innerHTML=t,this.time=t,t--)}),1e3)}handlePause(){let e=document.querySelector(".pause-menu");this.paused?e.classList.remove("hidden"):e.classList.add("hidden")}findBug(){this.enemy.length&&this.enemy[0].findBug(this.bug)}addEnemy(){this.dumpVisits>0&&!this.enemy.length&&this.enemy.push(new n(this))}updateEnemySpeed(){this.enemy.length&&(this.score>=35&&(this.enemy[0].speedIdx=1),this.score>70&&(this.enemy[0].speedIdx=2))}allObjects(){return this.litters.concat([this.bug],this.enemy,this.dumps)}draw(e){e.clearRect(0,0,1e3,750),e.drawImage(f,s,i,f.width*t,f.height*t);var t=Math.max(1e3/f.width,750/f.height),s=500-f.width/2*t,i=375-f.height/2*t;this.allObjects().forEach((t=>{t.draw(e)}))}showRemainingLives(){if(this.lives){this.bug.pos=[500,375];let e=document.querySelector("#livesCount");for(;e.firstChild;)e.removeChild(e.firstChild);for(let t=0;t<this.lives;t++)e.appendChild(document.createElement("img")).src="./images/beetle/br.png"}else this.over=!0}step(){this.time&&this.lives||(this.over=!0),this.checkCollisions(),this.addEnemy(),this.updateBelly(),this.handlePause(),this.move(),this.updateEnemySpeed(),this.findBug()}updateBelly(){bugBelly.innerHTML=this.belly.length}randomPos(){return[Math.floor(900*Math.random()+50),Math.floor(650*Math.random()+50)]}addLitter(){for(let e=0;e<15;e++){let e=new v(this.randomPos(),this);this.litters.push(e)}}addNewLitter(){for(;this.litters.length<15;){let e=new v(this.randomPos(),this);this.litters.push(e)}}randCorner(){return M[Math.floor(Math.random()*M.length)]}generateDump(){return new I(this.randCorner(),this)}ensureNewPos(){let e=this.generateDump(),t=this.dumps[0],s=t.pos[0],i=t.pos[1],h=e.pos[0],r=e.pos[1];for(;s===h&&i===r;)e=this.generateDump(),h=e.pos[0],r=e.pos[1];return e}addDump(){if(this.dumps.length){let e=this.ensureNewPos();this.dumps=[],this.dumps.push(e)}else{var e=this.generateDump();this.dumps.push(e)}}checkCollisions(e){this.allObjects().forEach((e=>{e instanceof v&&this.belly.length<5&&this.bug.isCollidedWith(e)?(this.belly.push(e),this.remove(e)):e instanceof I&&this.bug.isCollidedWith(e)&&this.belly.length>0?(this.dumpVisits+=1,visitsEl.innerHTML=this.dumpVisits,this.dumpLitter(),this.addNewLitter()):e instanceof n&&this.bug.isCollidedWith(e)&&(this.lives--,this.showRemainingLives())}))}dumpLitter(){for(;this.belly.length;){var e=this.belly[0];this.score+=e.value,scoreEl.innerHTML=this.score,finalScoreEl.innerHTML=this.score,this.belly.shift(),this.addDump()}}remove(e){e instanceof v&&this.litters.splice(this.litters.indexOf(e),1)}move(){this.allObjects().forEach((e=>{e.move(),e instanceof h&&(e.vel[0]*=.9,e.vel[1]*=.9)}))}},this.ctx=e,this.bug=this.game.bug,this.time=this.game.time,this.timeout}restart(){clearInterval(this.timeout),this.start}start(){this.game.showRemainingLives(),this.game.handlePause(),this.bindKeyHandlers(),requestAnimationFrame(this.render.bind(this))}bindKeyHandlers(){document.addEventListener("keydown",this.keydown.bind(this),!1)}keydown(e){if(0!==this.time)switch(e.key){case"w":this.bug.pos[1]>75&&this.bug.travel([0,-5]);break;case"a":this.bug.pos[0]>75&&this.bug.travel([-5,0]);break;case"s":this.bug.pos[1]<650&&this.bug.travel([0,5]);break;case"d":this.bug.pos[0]<900&&this.bug.travel([5,0]);break;case" ":this.game.paused=!this.game.paused,this.game.handlePause(),requestAnimationFrame(this.render.bind(this))}}render(){this.game.over||this.game.paused?this.game.over&&!this.game.paused&&(cancelAnimationFrame(this.requestId),this.timeout=setTimeout((()=>{document.getElementById("game").style.visibility="hidden",document.getElementById("game-canvas").style.visibility="hidden",document.querySelector("#endModal").showModal();const e=document.querySelector("#scoreEl"),t=document.querySelector("#bugBelly"),s=document.querySelector("#visitsEl"),i=document.querySelector("#highScoreEl"),h=document.querySelector("#timerEl");e.innerHTML>i.innerHTML&&(i.innerHTML=e.innerHTML),h.innerHTML=60,e.innerHTML=0,t.innerHTML=0,s.innerHTML=0}),2e3)):(this.game.step(),this.game.draw(this.ctx),requestAnimationFrame(this.render.bind(this)))}};window.addEventListener("DOMContentLoaded",(()=>{document.getElementById("game").style.visibility="hidden",document.getElementById("loadModal").showModal()})),document.addEventListener("submit",(e=>{document.getElementById("game").style.visibility="visible";const t=document.querySelector("#nameEl"),s=document.querySelector('input[name="name-input"]').value;t.innerHTML=s;const i=document.getElementById("game-canvas"),h=i.getContext("2d");i.style.visibility="visible",i.width=1e3,i.height=750,window.gameView=new L(h),"restart-form"===e.target.className?(delete window.gameView,window.gameView=new L(h),window.gameView.restart()):window.gameView.start()}))}()}();
//# sourceMappingURL=main.js.map