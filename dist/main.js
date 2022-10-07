!function(){var e={11:function(e){e.exports=class{}},957:function(e,t){}},t={};function s(i){var h=t[i];if(void 0!==h)return h.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,s),r.exports}!function(){"use strict";s(957);var e=class{constructor(e,t,s,i,h){this.pos=e,this.vel=t,this.radius=s,this.color=i,this.game=h}draw(e){e.beginPath(),e.arc(this.pos[0],this.pos[1],this.radius,0,2*Math.PI),e.fillStyle=this.color,e.lineWidth=1,e.fill(),e.stroke()}move(){if(Array.isArray(this.pos)&&Array.isArray(this.vel)&&2===this.pos.length&&2===this.vel.length){let e=this.pos[0]+this.vel[0],t=this.pos[1]+this.vel[1];this.pos=[e,t]}}dist(e,t){if(Array.isArray(e)&&Array.isArray(t)&&2===e.length&&2===t.length)return Math.sqrt(Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2))}isCollidedWith(e){return this.dist(this.pos,e.pos)<this.radius+e.radius}isOutOfBounds(e){return e[0]<0||e[1]<0||e[0]>Game.DIM_X||e[1]>Game.DIM_Y}};s(11),new Image;const t=new Image;t.src="./images/beetle/bl.png";const i=new Image;i.src="./images/beetle/br.png";var h=class extends e{constructor(e){super([500,375],[0,0],16,"black",e),this.currentFrameIdx=3,this.frameCount=0,this.beetleRight=i,this.beetleLeft=t}travel(e){this.vel[0]+e[0]<=10&&this.vel[0]+e[0]>=-10&&(this.vel[0]+=e[0]),this.vel[1]+e[1]<=10&&this.vel[1]+e[1]>=-10&&(this.vel[1]+=e[1])}draw(e){this.vel[0]>=0?e.drawImage(this.beetleRight,this.pos[0]-16,this.pos[1]-16,40,40):e.drawImage(this.beetleLeft,this.pos[0]-16,this.pos[1]-16,40,40)}};const r=new Image;r.src="./images/enemy/enemy_left.png";const a=new Image;a.src="./images/enemy/enemy_right.png";var n=class extends e{constructor(e,t){super(e,[1,1],15,"black",t),this.currentFrameIdx=3,this.frameCount=0,this.speed=[2,3,4],this.speedIdx=0,this.left=r,this.right=a}findBug(e){if(Array.isArray(this.pos)&&Array.isArray(this.vel)&&2===this.pos.length&&2===this.vel.length){let t=e.pos,s=t[0]-this.pos[0],i=t[1]-this.pos[1];this.vel[0]=this.speed[this.speedIdx]*(s/Math.sqrt(Math.pow(s,2)+Math.pow(i,2))),this.vel[1]=this.speed[this.speedIdx]*(i/Math.sqrt(Math.pow(s,2)+Math.pow(i,2)))}}draw(e){Array.isArray(this.pos)&&Array.isArray(this.vel)&&2===this.pos.length&&2===this.vel.length&&(this.vel[0]>=0?e.drawImage(this.right,this.pos[0]-15,this.pos[1]-15,35,35):e.drawImage(this.left,this.pos[0]-15,this.pos[1]-15,35,35))}};const o=new Image;o.src="./images/litter/water.png";const l=new Image;l.src="./images/litter/jug.png";const d=new Image;d.src="./images/litter/box.png";const m=new Image;m.src="./images/litter/news.png";const c=new Image;c.src="./images/litter/coke.png";const g=new Image;g.src="./images/litter/beer.png";const p=new Image;p.src="./images/litter/can.png";const u=new Image;u.src="./images/litter/styrocup.png";const v=new Image;v.src="./images/litter/pizza.png";const w=["water","can","coke","beer","stycup","box","news","jug","pizza"],b={water:1,can:1,coke:2,beer:2,stycup:3,news:3,box:4,jug:4,pizza:5};var y=class extends e{constructor(e,t){super(e,[0,0],13,"lightblue",t),this.title=w[Math.floor(Math.random()*w.length)],this.value=b[this.title]}draw(e){"water"===this.title?e.drawImage(o,5,5,45,30,this.pos[0]-5,this.pos[1]-5,30,30):"can"===this.title?e.drawImage(p,5,5,45,30,this.pos[0]-5,this.pos[1]-5,30,30):"coke"===this.title?e.drawImage(c,5,5,45,30,this.pos[0]-5,this.pos[1]-5,30,30):"beer"===this.title?e.drawImage(g,5,5,45,30,this.pos[0]-5,this.pos[1]-5,30,30):"stycup"===this.title?e.drawImage(u,5,5,45,30,this.pos[0]-5,this.pos[1]-5,30,30):"box"===this.title?e.drawImage(d,5,5,45,30,this.pos[0]-5,this.pos[1]-5,30,30):"news"===this.title?e.drawImage(m,5,5,45,30,this.pos[0]-5,this.pos[1]-5,30,30):"jug"===this.title?e.drawImage(l,5,5,45,30,this.pos[0]-5,this.pos[1]-5,30,30):e.drawImage(v,5,5,45,30,this.pos[0]-5,this.pos[1]-5,30,30)}};const f=new Image;f.src="./images/dump/left.png";const I=new Image;I.src="./images/dump/right.png";var M=class extends e{constructor(e,t){super(e,[0,0],35,"purple",t)}draw(e){40===this.pos[0]?e.drawImage(f,this.pos[0]-30,this.pos[1]-40,80,80):e.drawImage(I,this.pos[0]-30,this.pos[1]-40,80,80)}};const L=new Image;L.src="./images/grass.png";const E=[[40,40],[40,710],[945,40],[945,710]];var x=class{constructor(){this.bug=new h(this),this.enemy=[],this.lives=3,this.belly=[],this.litters=[],this.dumps=[],this.currentLitter=[],this.score=0,this.dumpVisits=0,this.over=!1,this.addLitter(),this.addDump(),this.startCountdown(60),this.time=60,this.paused=!1,this.timer}startCountdown(e){this.time=60;let t=e,s=document.querySelector("#timerEl");this.timer=setInterval((()=>{t>-1&&!this.paused&&!this.over&&(s.innerHTML=t,this.time=t,t--)}),1e3)}handlePause(){let e=document.querySelector(".pause-menu");this.paused?e.classList.remove("hidden"):e.classList.add("hidden")}findBug(){this.enemy.length&&this.enemy.forEach((e=>e.findBug(this.bug)))}addEnemy(){const e=[[-50,800],[-50,600],[-50,400],[-50,200],[-50,0],[1150,800],[1150,600],[1150,400],[1150,200],[1150,0],[0,-50][-50],[500,-50],[750,-50],[1e3,-50],[0,800],[250,800],[500,800],[750,800],[1e3,800]],t=e[Math.floor(Math.random()*e.length)];this.enemy.push(new n(t,this))}updateEnemySpeed(){this.enemy.length&&(this.score>=35&&this.enemy.forEach((e=>e.speedIdx=1)),this.score>70&&this.enemy.forEach((e=>e.speedIdx=1)))}allObjects(){return this.litters.concat([this.bug],this.enemy,this.dumps)}draw(e){e.clearRect(0,0,1e3,750),e.drawImage(L,s,i,L.width*t,L.height*t);var t=Math.max(1e3/L.width,750/L.height),s=500-L.width/2*t,i=375-L.height/2*t;this.allObjects().forEach((t=>{t.draw(e)}))}showRemainingLives(){if(this.lives){this.bug.pos=[500,375];let e=document.querySelector("#livesCount");for(;e.firstChild;)e.removeChild(e.firstChild);for(let t=0;t<this.lives;t++)e.appendChild(document.createElement("img")).src="./images/beetle/br.png"}else this.over=!0}step(){if(!this.time||!this.lives)return this.over=!0,void clearInterval(this.timer);this.checkCollisions(),this.updateBelly(),this.handlePause(),this.move(),this.outOfBounds(),this.updateEnemySpeed(),this.findBug()}updateBelly(){bugBelly.innerHTML=this.belly.length}randomPos(){return[Math.floor(900*Math.random()+50),Math.floor(650*Math.random()+50)]}addLitter(){for(let e=0;e<15;e++){let e=new y(this.randomPos(),this);this.litters.push(e)}}addNewLitter(){for(;this.litters.length<15;){let e=new y(this.randomPos(),this);this.litters.push(e)}}addDump(){if(this.dumps.length){let e=E;e=e.map((e=>e.join(",")));const t=this.dumps[0].pos.join(","),s=e.indexOf(t);e.splice(s,1),e=e.map((e=>e.split(",")));let i=e[Math.floor(Math.random()*e.length)];i=[parseInt(i[0]),parseInt(i[1])];let h=new M(i,this);this.dumps=[],this.dumps.push(h),this.addEnemy()}else{let e=E[Math.floor(Math.random()*E.length)];this.dumps.push(new M(e,this))}}checkCollisions(){const e=this.allObjects();for(let t=0;t<e.length;t+=1)for(let s=0;s<e.length;s+=1){if(t===s)continue;const i=e[t],r=e[s];if(i instanceof h)r instanceof y&&this.belly.length<5&&i.isCollidedWith(r)?(this.belly.push(r),this.remove(r)):r instanceof M&&i.isCollidedWith(r)&&this.belly.length>0?(this.dumpLitter(),this.addNewLitter()):r instanceof n&&i.isCollidedWith(r)&&(this.lives--,this.showRemainingLives());else if(i instanceof n&&r instanceof n&&i.isCollidedWith(r)){const e=i.pos[0],t=i.pos[1],s=r.pos[0],h=r.pos[1];e>s?(i.pos[0]+=2,r.pos[1]-=2):(r.pos[0]+=2,i.pos[1]-=2),t>h?(i.pos[1]+=2,r.pos[1]-=2):(r.pos[1]+=2,i.pos[1]-=2)}}}resetPositions(e){e.vel[0]<0?e.pos[0]-=e.vel[0]-1:e.pos[0]-=e.vel[0]+1,e.vel[1]<1?e.pos[1]-=e.vel[1]-1:e.pos[1]-=e.vel[1]+1}dumpLitter(){for(this.addDump(),this.dumpVisits+=1,visitsEl.innerHTML=this.dumpVisits;this.belly.length;){var e=this.belly.shift();this.score+=e.value}scoreEl.innerHTML=this.score,finalScoreEl.innerHTML=this.score}remove(e){e instanceof y&&this.litters.splice(this.litters.indexOf(e),1)}outOfBounds(){const e=this.bug.pos,t=this.bug.vel,s=this.bug.radius+1,i=e[1]+t[1]<s,h=e[1]+t[1]>750-s,r=e[0]+t[0]<s,a=e[0]+t[0]>1e3-s;!0===i?(this.bug.pos[1]-=this.bug.vel[1]-1,this.bug.vel[1]=0):!0===h?(this.bug.pos[1]-=this.bug.vel[1]+1,this.bug.vel[1]=0):!0===r?(this.bug.pos[0]-=this.bug.vel[0]-1,this.bug.vel[0]=0):!0===a&&(this.bug.pos[0]-=this.bug.vel[0]+1,this.bug.vel[0]=0)}move(){this.allObjects().forEach((e=>{e.move(),e instanceof h&&(e.vel[0]*=.93,e.vel[1]*=.93)}))}};window.addEventListener("DOMContentLoaded",(()=>{document.getElementById("game").style.visibility="hidden",document.getElementById("loadModal").showModal()})),document.addEventListener("submit",(e=>{document.getElementById("game").style.visibility="visible";const t=document.querySelector("#nameEl"),s=document.querySelector('input[name="name-input"]').value;t.innerHTML=s;const i=document.getElementById("game-canvas"),h=i.getContext("2d");i.style.visibility="visible",i.width=1e3,i.height=750,window.gameView=new class{constructor(e){this.game=new x,this.ctx=e,this.bug=this.game.bug,this.time=this.game.time,this.timeout}start(){this.game.showRemainingLives(),this.game.handlePause(),this.bindKeyHandlers(),requestAnimationFrame(this.render.bind(this))}bindKeyHandlers(){document.addEventListener("keydown",this.keydown.bind(this),!1)}keydown(e){if(0!==this.time)switch(e.key){case"w":case"W":this.bug.pos[1]>75&&this.bug.travel([0,-5]);break;case"a":case"A":this.bug.pos[0]>75&&this.bug.travel([-5,0]);break;case"s":case"S":this.bug.pos[1]<650&&this.bug.travel([0,5]);break;case"d":case"D":this.bug.pos[0]<900&&this.bug.travel([5,0]);break;case" ":this.game.paused=!this.game.paused,this.game.handlePause(),requestAnimationFrame(this.render.bind(this))}}render(){this.game.over||this.game.paused?this.game.over&&(cancelAnimationFrame(this.requestId),this.timeout=setTimeout((()=>{document.getElementById("game").style.visibility="hidden",document.getElementById("game-canvas").style.visibility="hidden",document.querySelector("#endModal").showModal();const e=document.querySelector("#scoreEl"),t=document.querySelector("#bugBelly"),s=document.querySelector("#visitsEl");document.querySelector("#timerEl").innerHTML=60,e.innerHTML=0,t.innerHTML=0,s.innerHTML=0,this.game=new x}),2e3)):(this.game.step(),this.game.draw(this.ctx),requestAnimationFrame(this.render.bind(this)))}}(h),"restart-form"===e.target.className?window.location.reload():window.gameView.start()}))}()}();
//# sourceMappingURL=main.js.map