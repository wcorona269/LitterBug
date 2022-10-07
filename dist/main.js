!function(){var t={11:function(t){t.exports=class{}},957:function(t,e){}},e={};function s(i){var h=e[i];if(void 0!==h)return h.exports;var a=e[i]={exports:{}};return t[i](a,a.exports,s),a.exports}!function(){"use strict";s(957);var t=class{constructor(t,e,s,i,h){this.pos=t,this.vel=e,this.radius=s,this.color=i,this.game=h}draw(t){t.beginPath(),t.arc(this.pos[0],this.pos[1],this.radius,0,2*Math.PI),t.fillStyle=this.color,t.lineWidth=1,t.fill(),t.stroke()}move(){let t=this.pos[0]+this.vel[0],e=this.pos[1]+this.vel[1];this.pos=[t,e]}dist(t,e){return Math.sqrt(Math.pow(t[0]-e[0],2)+Math.pow(t[1]-e[1],2))}isCollidedWith(t){return this.dist(this.pos,t.pos)<this.radius+t.radius}isOutOfBounds(t){return t[0]<0||t[1]<0||t[0]>Game.DIM_X||t[1]>Game.DIM_Y}};s(11),new Image;const e=new Image;e.src="./images/beetle/bl.png";const i=new Image;i.src="./images/beetle/br.png";var h=class extends t{constructor(t){super([500,375],[0,0],16,"black",t),this.currentFrameIdx=3,this.frameCount=0,this.beetleRight=i,this.beetleLeft=e}travel(t){this.vel[0]+t[0]<=10&&this.vel[0]+t[0]>=-10&&(this.vel[0]+=t[0]),this.vel[1]+t[1]<=10&&this.vel[1]+t[1]>=-10&&(this.vel[1]+=t[1])}draw(t){this.vel[0]>=0?t.drawImage(this.beetleRight,this.pos[0]-10,this.pos[1]-10,60,60):t.drawImage(this.beetleLeft,this.pos[0]-10,this.pos[1]-10,60,60)}};const a=new Image;a.src="./images/enemy/enemy_left.png";const n=new Image;n.src="./images/enemy/enemy_left.png";var r=class extends t{constructor(t){super([500,375],[1,1],20,"black",t),this.currentFrameIdx=3,this.frameCount=0,this.speed=[2,3,4],this.speedIdx=0,this.left=a,this.right=n}findBug(t){let e=t.pos,s=e[0]-this.pos[0],i=e[1]-this.pos[1];this.vel[0]=this.speed[this.speedIdx]*(s/Math.sqrt(Math.pow(s,2)+Math.pow(i,2))),this.vel[1]=this.speed[this.speedIdx]*(i/Math.sqrt(Math.pow(s,2)+Math.pow(i,2)))}draw(t){this.vel[0]>=0?t.drawImage(this.right,this.pos[0]-10,this.pos[1]-10,60,60):this.vel[0]<0&&t.drawImage(this.left,this.pos[0]-10,this.pos[1]-10,60,60)}};const o=new Image;o.src="./images/litter/water.png";const l=new Image;l.src="./images/litter/jug.png";const d=new Image;d.src="./images/litter/box.png";const m=new Image;m.src="./images/litter/news.png";const u=new Image;u.src="./images/litter/coke.png";const c=new Image;c.src="./images/litter/beer.png";const g=new Image;g.src="./images/litter/can.png";const p=new Image;p.src="./images/litter/styrocup.png";const w=new Image;w.src="./images/litter/pizza.png";const v=["water","can","coke","beer","stycup","box","news","jug","pizza"],b={water:1,can:1,coke:2,beer:2,stycup:3,news:3,box:4,jug:4,pizza:5};var y=class extends t{constructor(t,e){super(t,[0,0],13,"lightblue",e),this.title=v[Math.floor(Math.random()*v.length)],this.value=b[this.title]}draw(t){"water"===this.title?t.drawImage(o,5,5,45,30,this.pos[0]-5,this.pos[1]-5,30,30):"can"===this.title?t.drawImage(g,5,5,45,30,this.pos[0]-5,this.pos[1]-5,30,30):"coke"===this.title?t.drawImage(u,5,5,45,30,this.pos[0]-5,this.pos[1]-5,30,30):"beer"===this.title?t.drawImage(c,5,5,45,30,this.pos[0]-5,this.pos[1]-5,30,30):"stycup"===this.title?t.drawImage(p,5,5,45,30,this.pos[0]-5,this.pos[1]-5,30,30):"box"===this.title?t.drawImage(d,5,5,45,30,this.pos[0]-5,this.pos[1]-5,30,30):"news"===this.title?t.drawImage(m,5,5,45,30,this.pos[0]-5,this.pos[1]-5,30,30):"jug"===this.title?t.drawImage(l,5,5,45,30,this.pos[0]-5,this.pos[1]-5,30,30):t.drawImage(w,5,5,45,30,this.pos[0]-5,this.pos[1]-5,30,30)}};const I=new Image;I.src="./images/dump/left.png";const f=new Image;f.src="./images/dump/right.png";var M=class extends t{constructor(t,e){super(t,[0,0],35,"purple",e)}draw(t){40===this.pos[0]?t.drawImage(I,this.pos[0]-30,this.pos[1]-40,80,80):t.drawImage(f,this.pos[0]-30,this.pos[1]-40,80,80)}};const L=new Image;L.src="./images/grass.png";const x=[[40,40],[40,710],[945,40],[945,710]];var E=class{constructor(){this.bug=new h(this),this.enemy=[],this.lives=3,this.belly=[],this.litters=[],this.dumps=[],this.currentLitter=[],this.score=0,this.dumpVisits=0,this.over=!1,this.addLitter(),this.addDump(),this.startCountdown(60),this.time=60,this.paused=!1,this.timer}startCountdown(t){this.time=60;let e=t,s=document.querySelector("#timerEl");this.timer=setInterval((()=>{e>-1&&!this.paused&&!this.over&&(s.innerHTML=e,this.time=e,e--)}),1e3)}handlePause(){let t=document.querySelector(".pause-menu");this.paused?t.classList.remove("hidden"):t.classList.add("hidden")}findBug(){this.enemy.length&&this.enemy[0].findBug(this.bug)}addEnemy(){this.dumpVisits>0&&!this.enemy.length&&this.enemy.push(new r(this))}updateEnemySpeed(){this.enemy.length&&(this.score>=35&&(this.enemy[0].speedIdx=1),this.score>70&&(this.enemy[0].speedIdx=2))}allObjects(){return this.litters.concat([this.bug],this.enemy,this.dumps)}draw(t){t.clearRect(0,0,1e3,750),t.drawImage(L,s,i,L.width*e,L.height*e);var e=Math.max(1e3/L.width,750/L.height),s=500-L.width/2*e,i=375-L.height/2*e;this.allObjects().forEach((e=>{e.draw(t)}))}showRemainingLives(){if(this.lives){this.bug.pos=[500,375];let t=document.querySelector("#livesCount");for(;t.firstChild;)t.removeChild(t.firstChild);for(let e=0;e<this.lives;e++)t.appendChild(document.createElement("img")).src="./images/beetle/br.png"}else this.over=!0}step(){if(!this.time||!this.lives)return this.over=!0,void clearInterval(this.timer);this.checkCollisions(),this.addEnemy(),this.updateBelly(),this.handlePause(),this.move(),this.outOfBounds(),this.updateEnemySpeed(),this.findBug()}updateBelly(){bugBelly.innerHTML=this.belly.length}randomPos(){return[Math.floor(900*Math.random()+50),Math.floor(650*Math.random()+50)]}addLitter(){for(let t=0;t<15;t++){let t=new y(this.randomPos(),this);this.litters.push(t)}}addNewLitter(){for(;this.litters.length<15;){let t=new y(this.randomPos(),this);this.litters.push(t)}}addDump(){if(this.dumps.length){let t=x;t=t.map((t=>t.join(",")));const e=this.dumps[0].pos.join(","),s=t.indexOf(e);t.splice(s,1),t=t.map((t=>t.split(",")));let i=t[Math.floor(Math.random()*t.length)];i=[parseInt(i[0]),parseInt(i[1])];let h=new M(i,this);this.dumps=[],this.dumps.push(h)}else{let t=x[Math.floor(Math.random()*x.length)];this.dumps.push(new M(t,this))}}checkCollisions(t){this.allObjects().forEach((t=>{t instanceof y&&this.belly.length<5&&this.bug.isCollidedWith(t)?(this.belly.push(t),this.remove(t)):t instanceof M&&this.bug.isCollidedWith(t)&&this.belly.length>0?(this.dumpVisits+=1,visitsEl.innerHTML=this.dumpVisits,this.dumpLitter(),this.addNewLitter()):t instanceof r&&this.bug.isCollidedWith(t)&&(this.lives--,this.showRemainingLives())}))}dumpLitter(){for(this.addDump();this.belly.length;){var t=this.belly.shift();this.score+=t.value}scoreEl.innerHTML=this.score,finalScoreEl.innerHTML=this.score}remove(t){t instanceof y&&this.litters.splice(this.litters.indexOf(t),1)}outOfBounds(){const t=this.bug.pos,e=this.bug.vel,s=this.bug.radius+1,i=t[1]+e[1]<s,h=t[1]+e[1]>750-s,a=t[0]+e[0]<s,n=t[0]+e[0]>1e3-s;!0===i?(this.bug.pos[1]-=this.bug.vel[1]-1,this.bug.vel[1]=0):!0===h?(this.bug.pos[1]-=this.bug.vel[1]+1,this.bug.vel[1]=0):!0===a?(this.bug.pos[0]-=this.bug.vel[0]-1,this.bug.vel[0]=0):!0===n&&(this.bug.pos[0]-=this.bug.vel[0]+1,this.bug.vel[0]=0)}move(){this.allObjects().forEach((t=>{t.move(),t instanceof h&&(t.vel[0]*=.95,t.vel[1]*=.95)}))}};window.addEventListener("DOMContentLoaded",(()=>{document.getElementById("game").style.visibility="hidden",document.getElementById("loadModal").showModal()})),document.addEventListener("submit",(t=>{document.getElementById("game").style.visibility="visible";const e=document.querySelector("#nameEl"),s=document.querySelector('input[name="name-input"]').value;e.innerHTML=s;const i=document.getElementById("game-canvas"),h=i.getContext("2d");i.style.visibility="visible",i.width=1e3,i.height=750,window.gameView=new class{constructor(t){this.game=new E,this.ctx=t,this.bug=this.game.bug,this.time=this.game.time,this.timeout}restart(){clearInterval(this.timeout),this.start()}start(){this.game.showRemainingLives(),this.game.handlePause(),this.bindKeyHandlers(),requestAnimationFrame(this.render.bind(this))}bindKeyHandlers(){document.addEventListener("keydown",this.keydown.bind(this),!1)}keydown(t){if(0!==this.time)switch(t.key){case"w":case"W":this.bug.pos[1]>75&&this.bug.travel([0,-5]);break;case"a":case"A":this.bug.pos[0]>75&&this.bug.travel([-5,0]);break;case"s":case"S":this.bug.pos[1]<650&&this.bug.travel([0,5]);break;case"d":case"D":this.bug.pos[0]<900&&this.bug.travel([5,0]);break;case" ":this.game.paused=!this.game.paused,this.game.handlePause(),requestAnimationFrame(this.render.bind(this))}}render(){this.game.over||this.game.paused?this.game.over&&(cancelAnimationFrame(this.requestId),this.timeout=setTimeout((()=>{document.getElementById("game").style.visibility="hidden",document.getElementById("game-canvas").style.visibility="hidden",document.querySelector("#endModal").showModal();const t=document.querySelector("#scoreEl"),e=document.querySelector("#bugBelly"),s=document.querySelector("#visitsEl");document.querySelector("#timerEl").innerHTML=60,t.innerHTML=0,e.innerHTML=0,s.innerHTML=0,this.game=new E}),2e3)):(this.game.step(),this.game.draw(this.ctx),requestAnimationFrame(this.render.bind(this)))}}(h),"restart-form"===t.target.className?window.location.reload():window.gameView.start()}))}()}();
//# sourceMappingURL=main.js.map