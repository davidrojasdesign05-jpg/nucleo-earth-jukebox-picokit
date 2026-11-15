(()=>{var Yd=Object.create;var ih=Object.defineProperty;var $d=Object.getOwnPropertyDescriptor;var Zd=Object.getOwnPropertyNames;var Kd=Object.getPrototypeOf,Jd=Object.prototype.hasOwnProperty;var Qd=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var ep=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Zd(e))!Jd.call(i,s)&&s!==t&&ih(i,s,{get:()=>e[s],enumerable:!(n=$d(e,s))||n.enumerable});return i};var sh=(i,e,t)=>(t=i!=null?Yd(Kd(i)):{},ep(e||!i||!i.__esModule?ih(t,"default",{value:i,enumerable:!0}):t,i));var bu=Qd((u_,Mu)=>{var Iv=(()=>{let e=[0,2,4,7,9],t=["bajo","arpegio","pulso","canto"],n={jungla:{label:"Jungla",tempo:104,geo:{type:"lowpass",hz:900,q:.4,swellHz:.23,depth:.25,gain:.16},voices:[{id:"bajo",name:"Bajo",band:"90\u2013200 Hz",k:3,rot:0,hz:165,haptic:{hz:70,amp:.85,ms:40}},{id:"arpegio",name:"Arpegio",band:"2.3\u20134 kHz",k:5,rot:2,rootMidi:98,haptic:{hz:200,amp:.45,ms:20}},{id:"pulso",name:"Pulso",band:"5.6 kHz",k:9,rot:1,hz:5600,amHz:22,haptic:{hz:320,amp:.3,ms:12}},{id:"canto",name:"Canto",band:"500\u2013900 Hz",k:1,rot:12,hz:620,haptic:{hz:120,amp:.6,ms:150}}]},hielo:{label:"Hielo marino",tempo:52,pressure:{type:"heat",hz:55},geo:{type:"bandpass",hz:520,q:1.1,swellHz:.07,depth:.6,gain:.3},voices:[{id:"bajo",name:"Bajo",band:"60\u201390 Hz",k:2,rot:0,hz:88,haptic:{hz:60,amp:.85,ms:60}},{id:"arpegio",name:"Arpegio",band:"2.4\u20133.6 kHz",k:3,rot:5,rootMidi:99,haptic:{hz:220,amp:.4,ms:24}},{id:"pulso",name:"Pulso",band:"6.2 kHz",k:5,rot:2,hz:6200,amHz:0,haptic:{hz:340,amp:.3,ms:10}},{id:"canto",name:"Canto",band:"600\u2013800 Hz",k:1,rot:10,hz:660,haptic:{hz:110,amp:.55,ms:220}}]},gases:{label:"Gases de efecto invernadero",tempo:60,geo:{type:"lowpass",hz:480,q:.5,swellHz:.25,depth:.8,gain:.3},voices:[{id:"bajo",name:"Bajo",band:"70\u2013100 Hz",k:2,rot:0,hz:98,haptic:{hz:60,amp:.85,ms:90}},{id:"arpegio",name:"Melod\xEDa",band:"520\u2013880 Hz",k:8,rot:0,rootMidi:72,melody:[0,1,2,3,4,3,1,0],haptic:{hz:150,amp:.45,ms:30}},{id:"pulso",name:"Pulso",band:"5 kHz",k:7,rot:1,hz:5e3,amHz:0,haptic:{hz:310,amp:.28,ms:10}},{id:"canto",name:"Canto",band:"390\u2013590 Hz",k:1,rot:12,hz:392,haptic:{hz:100,amp:.6,ms:240}}]}},s=d=>Math.min(1,Math.max(0,d)),r=d=>440*Math.pow(2,(d-69)/12);function a(d,y){let x=Math.imul(d>>>0,374761393)+Math.imul(y>>>0,668265263)>>>0;return x=Math.imul(x^x>>>13,1274126177)>>>0,x=(x^x>>>16)>>>0,x/4294967296}function o(d,y,x){let _=[];for(let C=0;C<y;C++)_.push(C*d%y<d);return _.map((C,E)=>_[((E-x)%y+y)%y])}let l=d=>d.reduce((y,x,_)=>x?y|1<<_:y,0);function c(d,y){let x=n[d],_=s(y.vit/100),C=s(y.div/100),E=s(y.est/100),w=s(y.pre/100),R=Math.max(1,Math.round(C*4)),S=s((E-.2)/.5),b=Math.round((.25+.75*_)*1e3),P=x.voices.map((F,B)=>{let G=t.indexOf(F.id)<R,X=Math.round(F.rot*S),W=o(F.k,16,X),J=W.map((re,de)=>re?Math.floor(a(B+1,de+1)*1e3):1e3),V=Math.min(...J),ie=W.map((re,de)=>re&&(J[de]<b||J[de]===V));return{...F,active:G,rot:X,pattern:W,alive:ie,patternMask:l(W),mask:G?l(ie):0}});return{signatureId:d,tempo:x.tempo,voices:P,v:_,d:C,s:E,p:w,feverCents:y.fever||0,scaleSize:2+Math.round(C*3),jitterMs:Math.round((1-E)*70),detuneCents:Math.round((1-E)*40),bioCutoffHz:Math.round(12e3*Math.pow(.18333333333333332,w)),reverbWet:Math.round((.34-.26*w)*1e3)/1e3,anthroGain:Math.round(w*w*.55*1e3)/1e3,velocity:Math.round((.5+.5*_)*1e3)/1e3}}let u=d=>d.reduce((y,x)=>y+x,0)/d.length,h={jungla:{label:"Jungla",signature:"jungla",unit:"km\xB2 talados ese a\xF1o",source:"INPE PRODES, Amazonia Legal",vitals(d){let y=Math.max(...d.map(C=>C.value)),x=d.reduce((C,E)=>C+E.value,0),_=0;return d.map(C=>{_+=C.value;let E=_/x,w=C.value/y;return{year:C.year,value:C.value,vit:95-55*E,div:100-50*E,est:92-50*w,pre:5+80*w,fever:0}})}},hielo:{label:"Hielo marino",signature:"hielo",unit:"millones de km\xB2 en septiembre",source:"NSIDC Sea Ice Index, \xC1rtico",vitals(d){let y=u(d.slice(0,10).map(x=>x.value));return d.map((x,_)=>{let C=s((y-x.value)/(y-3)),E=_===0?0:s(Math.abs(x.value-d[_-1].value)/1.5);return{year:x.year,value:x.value,vit:95-60*C,div:100-55*C,est:95-30*C-35*E,pre:5+75*C,fever:0}})}},gases:{label:"Gases de efecto invernadero",signature:"gases",unit:"ppm de CO\u2082 en Mauna Loa",source:"NOAA Global Monitoring Laboratory",vitals(d){let y=d[0].value,x=Math.max(...d.map(E=>E.value)),_=d.map((E,w)=>w===0?d[1].value-E.value:E.value-d[w-1].value),C=Math.max(..._);return d.map((E,w)=>{let R=s((E.value-y)/(x-y)),S=s(_[w]/C),b=w===0?0:s(Math.abs(_[w]-_[w-1])/1.5);return{year:E.year,value:E.value,vit:95-45*R,div:100-45*R,est:95-35*R-20*b,pre:5+75*S,fever:50*R}})}}};function f(d,y,x){if(!d.melody)return-1;let _=Math.floor(y*d.melody.length/16);return Math.min(d.melody[_],x-1)}let p=d=>n[d].pressure||{type:"machine"},g=["bajo","canto","arpegio","pulso"];function v(d,y){for(let x of g){let _=d.voices.find(C=>C.id===x);if(_&&_.mask>>y&1)return{voice:x,hz:_.haptic.hz,amp:Math.round(_.haptic.amp*d.velocity*1e3)/1e3,ms:_.haptic.ms}}return null}return{REFERENCE:{vit:95,div:100,est:95,pre:5,fever:0},STEPS:16,PENTA:e,KEEP_ORDER:t,HAPTIC_PRIORITY:g,SIGNATURES:n,DASHBOARDS:h,clamp01:s,midiHz:r,hash01:a,euclid:o,maskOf:l,derive:c,hapticForStep:v,melodyDegree:f,pressureOf:p}})();typeof Mu<"u"&&(Mu.exports=Iv)});var tp=0,rh=1,np=2;var Cf=1,ip=2,ti=3,Gn=0,tn=1,wt=2,wi=0,ws=1,Ps=2,ah=3,oh=4,sp=5,$i=100,rp=101,ap=102,op=103,lp=104,cp=200,up=201,hp=202,fp=203,_l=204,yl=205,dp=206,pp=207,mp=208,gp=209,vp=210,_p=211,yp=212,xp=213,Mp=214,xl=0,Ml=1,bl=2,Ls=3,Sl=4,Tl=5,El=6,Al=7,Rf=0,bp=1,Sp=2,Ci=0,Tp=1,Ep=2,Ap=3,wp=4,Cp=5,Rp=6,Ip=7,lh="attached",Pp="detached",If=300,Ds=301,Ns=302,wl=303,Cl=304,co=306,Ji=1e3,ii=1001,Sr=1002,Xt=1003,Lc=1004;var Es=1005;var en=1006,yr=1007;var Hn=1008;var ai=1009,Pf=1010,Lf=1011,Tr=1012,Dc=1013,Qi=1014,Dn=1015,zr=1016,Nc=1017,Uc=1018,Us=1020,Df=35902,Nf=1021,Uf=1022,xn=1023,zf=1024,Of=1025,Cs=1026,zs=1027,zc=1028,Oc=1029,Ff=1030,Fc=1031;var Bc=1033,Ia=33776,Pa=33777,La=33778,Da=33779,Rl=35840,Il=35841,Pl=35842,Ll=35843,Dl=36196,Nl=37492,Ul=37496,zl=37808,Ol=37809,Fl=37810,Bl=37811,kl=37812,Hl=37813,Gl=37814,Vl=37815,Wl=37816,Xl=37817,ql=37818,jl=37819,Yl=37820,$l=37821,Na=36492,Zl=36494,Kl=36495,Bf=36283,Jl=36284,Ql=36285,ec=36286;var Os=2300,Fs=2301,ko=2302,ch=2400,uh=2401,hh=2402,Lp=2500;var kf=0,uo=1,Or=2,Dp=3200,Np=3201;var Hf=0,Up=1,Ei="",At="srgb",jt="srgb-linear",ho="linear",ht="srgb";var us=7680;var fh=519,zp=512,Op=513,Fp=514,Gf=515,Bp=516,kp=517,Hp=518,Gp=519,tc=35044,kc=35048;var dh="300 es",si=2e3,Ua=2001,Ri=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ph=1234567,xr=Math.PI/180,Bs=180/Math.PI;function Nn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]).toLowerCase()}function Wt(i,e,t){return Math.max(e,Math.min(t,i))}function Hc(i,e){return(i%e+e)%e}function Vp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Wp(i,e,t){return i!==e?(t-i)/(e-i):0}function Mr(i,e,t){return(1-t)*i+t*e}function Xp(i,e,t,n){return Mr(i,e,1-Math.exp(-t*n))}function qp(i,e=1){return e-Math.abs(Hc(i,e*2)-e)}function jp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Yp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function $p(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Zp(i,e){return i+Math.random()*(e-i)}function Kp(i){return i*(.5-Math.random())}function Jp(i){i!==void 0&&(ph=i);let e=ph+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qp(i){return i*xr}function e0(i){return i*Bs}function t0(i){return(i&i-1)===0&&i!==0}function n0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function i0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function s0(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*h,l*f,o*c);break;case"YZY":i.set(l*f,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*f,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ln(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ot(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Vf={DEG2RAD:xr,RAD2DEG:Bs,generateUUID:Nn,clamp:Wt,euclideanModulo:Hc,mapLinear:Vp,inverseLerp:Wp,lerp:Mr,damp:Xp,pingpong:qp,smoothstep:jp,smootherstep:Yp,randInt:$p,randFloat:Zp,randFloatSpread:Kp,seededRandom:Jp,degToRad:Qp,radToDeg:e0,isPowerOfTwo:t0,ceilPowerOfTwo:n0,floorPowerOfTwo:i0,setQuaternionFromProperEuler:s0,normalize:ot,denormalize:Ln},Ue=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Fe=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],v=s[0],m=s[3],d=s[6],y=s[1],x=s[4],_=s[7],C=s[2],E=s[5],w=s[8];return r[0]=a*v+o*y+l*C,r[3]=a*m+o*x+l*E,r[6]=a*d+o*_+l*w,r[1]=c*v+u*y+h*C,r[4]=c*m+u*x+h*E,r[7]=c*d+u*_+h*w,r[2]=f*v+p*y+g*C,r[5]=f*m+p*x+g*E,r[8]=f*d+p*_+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*r,p=c*r-a*l,g=t*h+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=h*v,e[1]=(s*c-u*n)*v,e[2]=(o*n-s*a)*v,e[3]=f*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ho.makeScale(e,t)),this}rotate(e){return this.premultiply(Ho.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ho.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ho=new Fe;function Wf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Er(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function r0(){let i=Er("canvas");return i.style.display="block",i}var mh={};function vr(i){i in mh||(mh[i]=!0,console.warn(i))}function a0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function o0(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function l0(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var je={enabled:!0,workingColorSpace:jt,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ht&&(i.r=ri(i.r),i.g=ri(i.g),i.b=ri(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ht&&(i.r=Rs(i.r),i.g=Rs(i.g),i.b=Rs(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ei?ho:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Rs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var gh=[.64,.33,.3,.6,.15,.06],vh=[.2126,.7152,.0722],_h=[.3127,.329],yh=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xh=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);je.define({[jt]:{primaries:gh,whitePoint:_h,transfer:ho,toXYZ:yh,fromXYZ:xh,luminanceCoefficients:vh,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:gh,whitePoint:_h,transfer:ht,toXYZ:yh,fromXYZ:xh,luminanceCoefficients:vh,outputColorSpaceConfig:{drawingBufferColorSpace:At}}});var hs,nc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{hs===void 0&&(hs=Er("canvas")),hs.width=e.width,hs.height=e.height;let n=hs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=hs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Er("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ri(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ri(t[n]/255)*255):t[n]=ri(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},c0=0,za=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:c0++}),this.uuid=Nn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Go(s[a].image)):r.push(Go(s[a]))}else r=Go(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Go(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?nc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var u0=0,Bt=class i extends Ri{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ii,s=ii,r=en,a=Hn,o=xn,l=ai,c=i.DEFAULT_ANISOTROPY,u=Ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=Nn(),this.name="",this.source=new za(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==If)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ji:e.x=e.x-Math.floor(e.x);break;case ii:e.x=e.x<0?0:1;break;case Sr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ji:e.y=e.y-Math.floor(e.y);break;case ii:e.y=e.y<0?0:1;break;case Sr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=If;Bt.DEFAULT_ANISOTROPY=1;var tt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,_=(p+1)/2,C=(d+1)/2,E=(u+f)/4,w=(h+v)/4,R=(g+m)/4;return x>_&&x>C?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=E/n,r=w/n):_>C?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=R/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=w/r,s=R/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-v)/y,this.z=(f-u)/y,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ic=class extends Ri{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Bt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new za(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},oi=class extends ic{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Oa=class extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var sc=class extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var cn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],f=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==f||c!==p||u!==g){let m=1-o,d=l*f+c*p+u*g+h*v,y=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){let C=Math.sqrt(x),E=Math.atan2(C,d*y);m=Math.sin(m*E)/C,o=Math.sin(o*E)/C}let _=o*y;if(l=l*m+f*_,c=c*m+p*_,u=u*m+g*_,h=h*m+v*_,m===1-o){let C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-o*p,e[t+2]=c*g+u*p+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>h){let p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){let p=2*Math.sqrt(1+o-n-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vo.copy(this).projectOnVector(e),this.sub(Vo)}reflect(e){return this.sub(Vo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Vo=new I,Mh=new cn,Mn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Rn):Rn.fromBufferAttribute(r,a),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ia.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ia.copy(n.boundingBox)),ia.applyMatrix4(e.matrixWorld),this.union(ia)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),sa.subVectors(this.max,cr),fs.subVectors(e.a,cr),ds.subVectors(e.b,cr),ps.subVectors(e.c,cr),yi.subVectors(ds,fs),xi.subVectors(ps,ds),Gi.subVectors(fs,ps);let t=[0,-yi.z,yi.y,0,-xi.z,xi.y,0,-Gi.z,Gi.y,yi.z,0,-yi.x,xi.z,0,-xi.x,Gi.z,0,-Gi.x,-yi.y,yi.x,0,-xi.y,xi.x,0,-Gi.y,Gi.x,0];return!Wo(t,fs,ds,ps,sa)||(t=[1,0,0,0,1,0,0,0,1],!Wo(t,fs,ds,ps,sa))?!1:(ra.crossVectors(yi,xi),t=[ra.x,ra.y,ra.z],Wo(t,fs,ds,ps,sa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},$n=[new I,new I,new I,new I,new I,new I,new I,new I],Rn=new I,ia=new Mn,fs=new I,ds=new I,ps=new I,yi=new I,xi=new I,Gi=new I,cr=new I,sa=new I,ra=new I,Vi=new I;function Wo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Vi.fromArray(i,r);let o=s.x*Math.abs(Vi.x)+s.y*Math.abs(Vi.y)+s.z*Math.abs(Vi.z),l=e.dot(Vi),c=t.dot(Vi),u=n.dot(Vi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var h0=new Mn,ur=new I,Xo=new I,un=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):h0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ur.subVectors(e,this.center);let t=ur.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ur,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ur.copy(e.center).add(Xo)),this.expandByPoint(ur.copy(e.center).sub(Xo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Zn=new I,qo=new I,aa=new I,Mi=new I,jo=new I,oa=new I,Yo=new I,es=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,t),Zn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){qo.copy(e).add(t).multiplyScalar(.5),aa.copy(t).sub(e).normalize(),Mi.copy(this.origin).sub(qo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(aa),o=Mi.dot(this.direction),l=-Mi.dot(aa),c=Mi.lengthSq(),u=Math.abs(1-a*a),h,f,p,g;if(u>0)if(h=a*l-o,f=a*o-l,g=r*u,h>=0)if(f>=-g)if(f<=g){let v=1/u;h*=v,f*=v,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(qo).addScaledVector(aa,f),p}intersectSphere(e,t){Zn.subVectors(e.center,this.origin);let n=Zn.dot(this.direction),s=Zn.dot(Zn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,t,n,s,r){jo.subVectors(t,e),oa.subVectors(n,e),Yo.crossVectors(jo,oa);let a=this.direction.dot(Yo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Mi.subVectors(this.origin,e);let l=o*this.direction.dot(oa.crossVectors(Mi,oa));if(l<0)return null;let c=o*this.direction.dot(jo.cross(Mi));if(c<0||l+c>a)return null;let u=-o*Mi.dot(Yo);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ce=class i{constructor(e,t,n,s,r,a,o,l,c,u,h,f,p,g,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,h,f,p,g,v,m)}set(e,t,n,s,r,a,o,l,c,u,h,f,p,g,v,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ms.setFromMatrixColumn(e,0).length(),r=1/ms.setFromMatrixColumn(e,1).length(),a=1/ms.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=a*u,p=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*u,p=l*h,g=c*u,v=c*h;t[0]=f+v*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*u,p=l*h,g=c*u,v=c*h;t[0]=f-v*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*u,p=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+v,t[1]=l*h,t[5]=v*c+f,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-f*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-v*h}else if(e.order==="XZY"){let f=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+v,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(f0,e,d0)}lookAt(e,t,n){let s=this.elements;return on.subVectors(e,t),on.lengthSq()===0&&(on.z=1),on.normalize(),bi.crossVectors(n,on),bi.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),bi.crossVectors(n,on)),bi.normalize(),la.crossVectors(on,bi),s[0]=bi.x,s[4]=la.x,s[8]=on.x,s[1]=bi.y,s[5]=la.y,s[9]=on.y,s[2]=bi.z,s[6]=la.z,s[10]=on.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],v=n[6],m=n[10],d=n[14],y=n[3],x=n[7],_=n[11],C=n[15],E=s[0],w=s[4],R=s[8],S=s[12],b=s[1],P=s[5],F=s[9],B=s[13],G=s[2],X=s[6],W=s[10],J=s[14],V=s[3],ie=s[7],re=s[11],de=s[15];return r[0]=a*E+o*b+l*G+c*V,r[4]=a*w+o*P+l*X+c*ie,r[8]=a*R+o*F+l*W+c*re,r[12]=a*S+o*B+l*J+c*de,r[1]=u*E+h*b+f*G+p*V,r[5]=u*w+h*P+f*X+p*ie,r[9]=u*R+h*F+f*W+p*re,r[13]=u*S+h*B+f*J+p*de,r[2]=g*E+v*b+m*G+d*V,r[6]=g*w+v*P+m*X+d*ie,r[10]=g*R+v*F+m*W+d*re,r[14]=g*S+v*B+m*J+d*de,r[3]=y*E+x*b+_*G+C*V,r[7]=y*w+x*P+_*X+C*ie,r[11]=y*R+x*F+_*W+C*re,r[15]=y*S+x*B+_*J+C*de,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],v=e[7],m=e[11],d=e[15];return g*(+r*l*h-s*c*h-r*o*f+n*c*f+s*o*p-n*l*p)+v*(+t*l*p-t*c*f+r*a*f-s*a*p+s*c*u-r*l*u)+m*(+t*c*h-t*o*p-r*a*h+n*a*p+r*o*u-n*c*u)+d*(-s*o*u-t*l*h+t*o*f+s*a*h-n*a*f+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],v=e[13],m=e[14],d=e[15],y=h*m*c-v*f*c+v*l*p-o*m*p-h*l*d+o*f*d,x=g*f*c-u*m*c-g*l*p+a*m*p+u*l*d-a*f*d,_=u*v*c-g*h*c+g*o*p-a*v*p-u*o*d+a*h*d,C=g*h*l-u*v*l-g*o*f+a*v*f+u*o*m-a*h*m,E=t*y+n*x+s*_+r*C;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/E;return e[0]=y*w,e[1]=(v*f*r-h*m*r-v*s*p+n*m*p+h*s*d-n*f*d)*w,e[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*d+n*l*d)*w,e[3]=(h*l*r-o*f*r-h*s*c+n*f*c+o*s*p-n*l*p)*w,e[4]=x*w,e[5]=(u*m*r-g*f*r+g*s*p-t*m*p-u*s*d+t*f*d)*w,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*d-t*l*d)*w,e[7]=(a*f*r-u*l*r+u*s*c-t*f*c-a*s*p+t*l*p)*w,e[8]=_*w,e[9]=(g*h*r-u*v*r-g*n*p+t*v*p+u*n*d-t*h*d)*w,e[10]=(a*v*r-g*o*r+g*n*c-t*v*c-a*n*d+t*o*d)*w,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*p-t*o*p)*w,e[12]=C*w,e[13]=(u*v*s-g*h*s+g*n*f-t*v*f-u*n*m+t*h*m)*w,e[14]=(g*o*s-a*v*s-g*n*l+t*v*l+a*n*m-t*o*m)*w,e[15]=(a*h*s-u*o*s+u*n*l-t*h*l-a*n*f+t*o*f)*w,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,f=r*c,p=r*u,g=r*h,v=a*u,m=a*h,d=o*h,y=l*c,x=l*u,_=l*h,C=n.x,E=n.y,w=n.z;return s[0]=(1-(v+d))*C,s[1]=(p+_)*C,s[2]=(g-x)*C,s[3]=0,s[4]=(p-_)*E,s[5]=(1-(f+d))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(g+x)*w,s[9]=(m-y)*w,s[10]=(1-(f+v))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ms.set(s[0],s[1],s[2]).length(),a=ms.set(s[4],s[5],s[6]).length(),o=ms.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],In.copy(this);let c=1/r,u=1/a,h=1/o;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=h,In.elements[9]*=h,In.elements[10]*=h,t.setFromRotationMatrix(In),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=si){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s),p,g;if(o===si)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ua)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=si){let l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(a-r),f=(t+e)*c,p=(n+s)*u,g,v;if(o===si)g=(a+r)*h,v=-2*h;else if(o===Ua)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ms=new I,In=new Ce,f0=new I(0,0,0),d0=new I(1,1,1),bi=new I,la=new I,on=new I,bh=new Ce,Sh=new cn,Vn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return bh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sh.setFromEuler(this),this.setFromQuaternion(Sh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Vn.DEFAULT_ORDER="XYZ";var Ar=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},p0=0,Th=new I,gs=new cn,Kn=new Ce,ca=new I,hr=new I,m0=new I,g0=new cn,Eh=new I(1,0,0),Ah=new I(0,1,0),wh=new I(0,0,1),Ch={type:"added"},v0={type:"removed"},vs={type:"childadded",child:null},$o={type:"childremoved",child:null},xt=class i extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=Nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new Vn,n=new cn,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ce},normalMatrix:{value:new Fe}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ar,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis(Eh,e)}rotateY(e){return this.rotateOnAxis(Ah,e)}rotateZ(e){return this.rotateOnAxis(wh,e)}translateOnAxis(e,t){return Th.copy(e).applyQuaternion(this.quaternion),this.position.add(Th.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Eh,e)}translateY(e){return this.translateOnAxis(Ah,e)}translateZ(e){return this.translateOnAxis(wh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ca.copy(e):ca.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(hr,ca,this.up):Kn.lookAt(ca,hr,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),gs.setFromRotationMatrix(Kn),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ch),vs.child=e,this.dispatchEvent(vs),vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(v0),$o.child=e,this.dispatchEvent($o),$o.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ch),vs.child=e,this.dispatchEvent(vs),vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,e,m0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,g0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};xt.DEFAULT_UP=new I(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Pn=new I,Jn=new I,Zo=new I,Qn=new I,_s=new I,ys=new I,Rh=new I,Ko=new I,Jo=new I,Qo=new I,el=new tt,tl=new tt,nl=new tt,Zi=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Pn.subVectors(e,t),s.cross(Pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Pn.subVectors(s,t),Jn.subVectors(n,t),Zo.subVectors(e,t);let a=Pn.dot(Pn),o=Pn.dot(Jn),l=Pn.dot(Zo),c=Jn.dot(Jn),u=Jn.dot(Zo),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let f=1/h,p=(c*l-o*u)*f,g=(a*u-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qn.x),l.addScaledVector(a,Qn.y),l.addScaledVector(o,Qn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return el.setScalar(0),tl.setScalar(0),nl.setScalar(0),el.fromBufferAttribute(e,t),tl.fromBufferAttribute(e,n),nl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(el,r.x),a.addScaledVector(tl,r.y),a.addScaledVector(nl,r.z),a}static isFrontFacing(e,t,n,s){return Pn.subVectors(n,t),Jn.subVectors(e,t),Pn.cross(Jn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Pn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;_s.subVectors(s,n),ys.subVectors(r,n),Ko.subVectors(e,n);let l=_s.dot(Ko),c=ys.dot(Ko);if(l<=0&&c<=0)return t.copy(n);Jo.subVectors(e,s);let u=_s.dot(Jo),h=ys.dot(Jo);if(u>=0&&h<=u)return t.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(_s,a);Qo.subVectors(e,r);let p=_s.dot(Qo),g=ys.dot(Qo);if(g>=0&&p<=g)return t.copy(r);let v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ys,o);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Rh.subVectors(r,s),o=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(Rh,o);let d=1/(m+v+f);return a=v*d,o=f*d,t.copy(n).addScaledVector(_s,a).addScaledVector(ys,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Xf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},ua={h:0,s:0,l:0};function il(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ee=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=je.workingColorSpace){if(e=Hc(e,1),t=Wt(t,0,1),n=Wt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=il(a,r,e+1/3),this.g=il(a,r,e),this.b=il(a,r,e-1/3)}return je.toWorkingColorSpace(this,s),this}setStyle(e,t=At){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){let n=Xf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return je.fromWorkingColorSpace(Vt.copy(this),e),Math.round(Wt(Vt.r*255,0,255))*65536+Math.round(Wt(Vt.g*255,0,255))*256+Math.round(Wt(Vt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(Vt.copy(this),t);let n=Vt.r,s=Vt.g,r=Vt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=At){je.fromWorkingColorSpace(Vt.copy(this),e);let t=Vt.r,n=Vt.g,s=Vt.b;return e!==At?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Si),this.setHSL(Si.h+e,Si.s+t,Si.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Si),e.getHSL(ua);let n=Mr(Si.h,ua.h,t),s=Mr(Si.s,ua.s,t),r=Mr(Si.l,ua.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vt=new Ee;Ee.NAMES=Xf;var _0=0,hn=class extends Ri{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=Nn(),this.name="",this.blending=ws,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_l,this.blendDst=yl,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(n.blending=this.blending),this.side!==Gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_l&&(n.blendSrc=this.blendSrc),this.blendDst!==yl&&(n.blendDst=this.blendDst),this.blendEquation!==$i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ct=class extends hn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=Rf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Et=new I,ha=new Ue,Pt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=tc,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ha.fromBufferAttribute(this,t),ha.applyMatrix3(e),this.setXY(t,ha.x,ha.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tc&&(e.usage=this.usage),e}};var Fa=class extends Pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ba=class extends Pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Qe=class extends Pt{constructor(e,t,n){super(new Float32Array(e),t,n)}},y0=0,yn=new Ce,sl=new xt,xs=new I,ln=new Mn,fr=new Mn,Ft=new I,lt=class i extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=Nn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wf(e)?Ba:Fa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Fe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,n){return yn.makeTranslation(e,t,n),this.applyMatrix4(yn),this}scale(e,t,n){return yn.makeScale(e,t,n),this.applyMatrix4(yn),this}lookAt(e){return sl.lookAt(e),sl.updateMatrix(),this.applyMatrix4(sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qe(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];fr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(ln.min,fr.min),ln.expandByPoint(Ft),Ft.addVectors(ln.max,fr.max),ln.expandByPoint(Ft)):(ln.expandByPoint(fr.min),ln.expandByPoint(fr.max))}ln.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ft.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ft));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ft.fromBufferAttribute(o,c),l&&(xs.fromBufferAttribute(e,c),Ft.add(xs)),s=Math.max(s,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new I,l[R]=new I;let c=new I,u=new I,h=new I,f=new Ue,p=new Ue,g=new Ue,v=new I,m=new I;function d(R,S,b){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,b),f.fromBufferAttribute(r,R),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,b),u.sub(c),h.sub(c),p.sub(f),g.sub(f);let P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(P),o[R].add(v),o[S].add(v),o[b].add(v),l[R].add(m),l[S].add(m),l[b].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let R=0,S=y.length;R<S;++R){let b=y[R],P=b.start,F=b.count;for(let B=P,G=P+F;B<G;B+=3)d(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let x=new I,_=new I,C=new I,E=new I;function w(R){C.fromBufferAttribute(s,R),E.copy(C);let S=o[R];x.copy(S),x.sub(C.multiplyScalar(C.dot(S))).normalize(),_.crossVectors(E,S);let P=_.dot(l[R])<0?-1:1;a.setXYZW(R,x.x,x.y,x.z,P)}for(let R=0,S=y.length;R<S;++R){let b=y[R],P=b.start,F=b.count;for(let B=P,G=P+F;B<G;B+=3)w(e.getX(B+0)),w(e.getX(B+1)),w(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u),p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new Pt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ih=new Ce,Wi=new es,fa=new un,Ph=new I,da=new I,pa=new I,ma=new I,rl=new I,ga=new I,Lh=new I,va=new I,We=class extends xt{constructor(e=new lt,t=new Ct){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ga.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],h=r[l];u!==0&&(rl.fromBufferAttribute(h,e),a?ga.addScaledVector(rl,u):ga.addScaledVector(rl.sub(t),u))}t.add(ga)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(r),Wi.copy(e.ray).recast(e.near),!(fa.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(fa,Ph)===null||Wi.origin.distanceToSquared(Ph)>(e.far-e.near)**2))&&(Ih.copy(r).invert(),Wi.copy(e.ray).applyMatrix4(Ih),!(n.boundingBox!==null&&Wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Wi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){let m=f[g],d=a[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,C=x;_<C;_+=3){let E=o.getX(_),w=o.getX(_+1),R=o.getX(_+2);s=_a(this,d,e,n,c,u,h,E,w,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){let y=o.getX(m),x=o.getX(m+1),_=o.getX(m+2);s=_a(this,a,e,n,c,u,h,y,x,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){let m=f[g],d=a[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,C=x;_<C;_+=3){let E=_,w=_+1,R=_+2;s=_a(this,d,e,n,c,u,h,E,w,R),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){let y=m,x=m+1,_=m+2;s=_a(this,a,e,n,c,u,h,y,x,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function x0(i,e,t,n,s,r,a,o){let l;if(e.side===tn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Gn,o),l===null)return null;va.copy(o),va.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(va);return c<t.near||c>t.far?null:{distance:c,point:va.clone(),object:i}}function _a(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,da),i.getVertexPosition(l,pa),i.getVertexPosition(c,ma);let u=x0(i,e,t,n,da,pa,ma,Lh);if(u){let h=new I;Zi.getBarycoord(Lh,da,pa,ma,h),s&&(u.uv=Zi.getInterpolatedAttribute(s,o,l,c,h,new Ue)),r&&(u.uv1=Zi.getInterpolatedAttribute(r,o,l,c,h,new Ue)),a&&(u.normal=Zi.getInterpolatedAttribute(a,o,l,c,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new I,materialIndex:0};Zi.getNormal(da,pa,ma,f.normal),u.face=f,u.barycoord=h}return u}var wr=class i extends lt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(u,3)),this.setAttribute("uv",new Qe(h,2));function g(v,m,d,y,x,_,C,E,w,R,S){let b=_/w,P=C/R,F=_/2,B=C/2,G=E/2,X=w+1,W=R+1,J=0,V=0,ie=new I;for(let re=0;re<W;re++){let de=re*P-B;for(let Ie=0;Ie<X;Ie++){let qe=Ie*b-F;ie[v]=qe*y,ie[m]=de*x,ie[d]=G,c.push(ie.x,ie.y,ie.z),ie[v]=0,ie[m]=0,ie[d]=E>0?1:-1,u.push(ie.x,ie.y,ie.z),h.push(Ie/w),h.push(1-re/R),J+=1}}for(let re=0;re<R;re++)for(let de=0;de<w;de++){let Ie=f+de+X*re,qe=f+de+X*(re+1),j=f+(de+1)+X*(re+1),ee=f+(de+1)+X*re;l.push(Ie,qe,ee),l.push(qe,j,ee),V+=6}o.addGroup(p,V,S),p+=V,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ks(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function $t(i){let e={};for(let t=0;t<i.length;t++){let n=ks(i[t]);for(let s in n)e[s]=n[s]}return e}function M0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function qf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}var b0={clone:ks,merge:$t},S0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,T0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Wn=class extends hn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=S0,this.fragmentShader=T0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=M0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ka=class extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ti=new I,Dh=new Ue,Nh=new Ue,It=class extends ka{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(xr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bs*2*Math.atan(Math.tan(xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,t){return this.getViewBounds(e,Dh,Nh),t.subVectors(Nh,Dh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(xr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ms=-90,bs=1,rc=class extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new It(Ms,bs,e,t);s.layers=this.layers,this.add(s);let r=new It(Ms,bs,e,t);r.layers=this.layers,this.add(r);let a=new It(Ms,bs,e,t);a.layers=this.layers,this.add(a);let o=new It(Ms,bs,e,t);o.layers=this.layers,this.add(o);let l=new It(Ms,bs,e,t);l.layers=this.layers,this.add(l);let c=new It(Ms,bs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ua)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ha=class extends Bt{constructor(e,t,n,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ds,super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ac=class extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ha(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:en}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new wr(5,5,5),r=new Wn({name:"CubemapFromEquirect",uniforms:ks(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:wi});r.uniforms.tEquirect.value=t;let a=new We(s,r),o=t.minFilter;return t.minFilter===Hn&&(t.minFilter=en),new rc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},al=new I,E0=new I,A0=new Fe,ni=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=al.subVectors(n,t).cross(E0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(al),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||A0.getNormalMatrix(e),s=this.coplanarPoint(al).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Xi=new un,ya=new I,Cr=class{constructor(e=new ni,t=new ni,n=new ni,s=new ni,r=new ni,a=new ni){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=si){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],p=s[8],g=s[9],v=s[10],m=s[11],d=s[12],y=s[13],x=s[14],_=s[15];if(n[0].setComponents(l-r,f-c,m-p,_-d).normalize(),n[1].setComponents(l+r,f+c,m+p,_+d).normalize(),n[2].setComponents(l+a,f+u,m+g,_+y).normalize(),n[3].setComponents(l-a,f-u,m-g,_-y).normalize(),n[4].setComponents(l-o,f-h,m-v,_-x).normalize(),t===si)n[5].setComponents(l+o,f+h,m+v,_+x).normalize();else if(t===Ua)n[5].setComponents(o,h,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(e){return Xi.center.set(0,0,0),Xi.radius=.7071067811865476,Xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ya.x=s.normal.x>0?e.max.x:e.min.x,ya.y=s.normal.y>0?e.max.y:e.min.y,ya.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ya)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function jf(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function w0(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){let g=h[f],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){let v=h[p];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Hs=class i extends lt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,f=t/l,p=[],g=[],v=[],m=[];for(let d=0;d<u;d++){let y=d*f-a;for(let x=0;x<c;x++){let _=x*h-r;g.push(_,-y,0),v.push(0,0,1),m.push(x/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<o;y++){let x=y+c*d,_=y+c*(d+1),C=y+1+c*(d+1),E=y+1+c*d;p.push(x,_,E),p.push(_,C,E)}this.setIndex(p),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(v,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},C0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,R0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,I0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,P0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,L0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,D0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,N0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,U0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,z0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,O0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,F0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,B0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,k0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,H0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,G0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,V0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,W0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,X0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,j0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Y0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Z0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,K0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,J0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Q0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,em=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,im=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sm="gl_FragColor = linearToOutputTexel( gl_FragColor );",rm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,am=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,om=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,um=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_m=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ym=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,xm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Mm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Em=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Am=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Im=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Um=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Om=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,km=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$m=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Km=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,e1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,i1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,s1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,a1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,o1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,l1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,u1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,h1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,f1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,d1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,p1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,m1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,g1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,v1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,y1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,x1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,M1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,b1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,S1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,T1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,E1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,A1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,w1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,C1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,N1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,U1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,z1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,O1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,F1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,k1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,H1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,G1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,q1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Y1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,J1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,n2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,i2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,r2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,a2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:C0,alphahash_pars_fragment:R0,alphamap_fragment:I0,alphamap_pars_fragment:P0,alphatest_fragment:L0,alphatest_pars_fragment:D0,aomap_fragment:N0,aomap_pars_fragment:U0,batching_pars_vertex:z0,batching_vertex:O0,begin_vertex:F0,beginnormal_vertex:B0,bsdfs:k0,iridescence_fragment:H0,bumpmap_pars_fragment:G0,clipping_planes_fragment:V0,clipping_planes_pars_fragment:W0,clipping_planes_pars_vertex:X0,clipping_planes_vertex:q0,color_fragment:j0,color_pars_fragment:Y0,color_pars_vertex:$0,color_vertex:Z0,common:K0,cube_uv_reflection_fragment:J0,defaultnormal_vertex:Q0,displacementmap_pars_vertex:em,displacementmap_vertex:tm,emissivemap_fragment:nm,emissivemap_pars_fragment:im,colorspace_fragment:sm,colorspace_pars_fragment:rm,envmap_fragment:am,envmap_common_pars_fragment:om,envmap_pars_fragment:lm,envmap_pars_vertex:cm,envmap_physical_pars_fragment:xm,envmap_vertex:um,fog_vertex:hm,fog_pars_vertex:fm,fog_fragment:dm,fog_pars_fragment:pm,gradientmap_pars_fragment:mm,lightmap_pars_fragment:gm,lights_lambert_fragment:vm,lights_lambert_pars_fragment:_m,lights_pars_begin:ym,lights_toon_fragment:Mm,lights_toon_pars_fragment:bm,lights_phong_fragment:Sm,lights_phong_pars_fragment:Tm,lights_physical_fragment:Em,lights_physical_pars_fragment:Am,lights_fragment_begin:wm,lights_fragment_maps:Cm,lights_fragment_end:Rm,logdepthbuf_fragment:Im,logdepthbuf_pars_fragment:Pm,logdepthbuf_pars_vertex:Lm,logdepthbuf_vertex:Dm,map_fragment:Nm,map_pars_fragment:Um,map_particle_fragment:zm,map_particle_pars_fragment:Om,metalnessmap_fragment:Fm,metalnessmap_pars_fragment:Bm,morphinstance_vertex:km,morphcolor_vertex:Hm,morphnormal_vertex:Gm,morphtarget_pars_vertex:Vm,morphtarget_vertex:Wm,normal_fragment_begin:Xm,normal_fragment_maps:qm,normal_pars_fragment:jm,normal_pars_vertex:Ym,normal_vertex:$m,normalmap_pars_fragment:Zm,clearcoat_normal_fragment_begin:Km,clearcoat_normal_fragment_maps:Jm,clearcoat_pars_fragment:Qm,iridescence_pars_fragment:e1,opaque_fragment:t1,packing:n1,premultiplied_alpha_fragment:i1,project_vertex:s1,dithering_fragment:r1,dithering_pars_fragment:a1,roughnessmap_fragment:o1,roughnessmap_pars_fragment:l1,shadowmap_pars_fragment:c1,shadowmap_pars_vertex:u1,shadowmap_vertex:h1,shadowmask_pars_fragment:f1,skinbase_vertex:d1,skinning_pars_vertex:p1,skinning_vertex:m1,skinnormal_vertex:g1,specularmap_fragment:v1,specularmap_pars_fragment:_1,tonemapping_fragment:y1,tonemapping_pars_fragment:x1,transmission_fragment:M1,transmission_pars_fragment:b1,uv_pars_fragment:S1,uv_pars_vertex:T1,uv_vertex:E1,worldpos_vertex:A1,background_vert:w1,background_frag:C1,backgroundCube_vert:R1,backgroundCube_frag:I1,cube_vert:P1,cube_frag:L1,depth_vert:D1,depth_frag:N1,distanceRGBA_vert:U1,distanceRGBA_frag:z1,equirect_vert:O1,equirect_frag:F1,linedashed_vert:B1,linedashed_frag:k1,meshbasic_vert:H1,meshbasic_frag:G1,meshlambert_vert:V1,meshlambert_frag:W1,meshmatcap_vert:X1,meshmatcap_frag:q1,meshnormal_vert:j1,meshnormal_frag:Y1,meshphong_vert:$1,meshphong_frag:Z1,meshphysical_vert:K1,meshphysical_frag:J1,meshtoon_vert:Q1,meshtoon_frag:e2,points_vert:t2,points_frag:n2,shadow_vert:i2,shadow_frag:s2,sprite_vert:r2,sprite_frag:a2},ae={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},kn={basic:{uniforms:$t([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:$t([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ee(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:$t([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:$t([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:$t([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ee(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:$t([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:$t([ae.points,ae.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:$t([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:$t([ae.common,ae.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:$t([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:$t([ae.sprite,ae.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:$t([ae.common,ae.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:$t([ae.lights,ae.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};kn.physical={uniforms:$t([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};var xa={r:0,b:0,g:0},qi=new Vn,o2=new Ce;function l2(i,e,t,n,s,r,a){let o=new Ee(0),l=r===!0?0:1,c,u,h=null,f=0,p=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function v(y){let x=!1,_=g(y);_===null?d(o,l):_&&_.isColor&&(d(_,1),x=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,x){let _=g(x);_&&(_.isCubeTexture||_.mapping===co)?(u===void 0&&(u=new We(new wr(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:ks(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),qi.copy(x.backgroundRotation),qi.x*=-1,qi.y*=-1,qi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(o2.makeRotationFromEuler(qi)),u.material.toneMapped=je.getTransfer(_.colorSpace)!==ht,(h!==_||f!==_.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,p=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new We(new Hs(2,2),new Wn({name:"BackgroundMaterial",uniforms:ks(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=je.getTransfer(_.colorSpace)!==ht,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,p=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function d(y,x){y.getRGB(xa,qf(i)),n.buffers.color.setClear(xa.r,xa.g,xa.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),l=x,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(o,l)},render:v,addToRenderList:m}}function c2(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(b,P,F,B,G){let X=!1,W=h(B,F,P);r!==W&&(r=W,c(r.object)),X=p(b,B,F,G),X&&g(b,B,F,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,_(b,P,F,B),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function h(b,P,F){let B=F.wireframe===!0,G=n[b.id];G===void 0&&(G={},n[b.id]=G);let X=G[P.id];X===void 0&&(X={},G[P.id]=X);let W=X[B];return W===void 0&&(W=f(l()),X[B]=W),W}function f(b){let P=[],F=[],B=[];for(let G=0;G<t;G++)P[G]=0,F[G]=0,B[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:B,object:b,attributes:{},index:null}}function p(b,P,F,B){let G=r.attributes,X=P.attributes,W=0,J=F.getAttributes();for(let V in J)if(J[V].location>=0){let re=G[V],de=X[V];if(de===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(de=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(de=b.instanceColor)),re===void 0||re.attribute!==de||de&&re.data!==de.data)return!0;W++}return r.attributesNum!==W||r.index!==B}function g(b,P,F,B){let G={},X=P.attributes,W=0,J=F.getAttributes();for(let V in J)if(J[V].location>=0){let re=X[V];re===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(re=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(re=b.instanceColor));let de={};de.attribute=re,re&&re.data&&(de.data=re.data),G[V]=de,W++}r.attributes=G,r.attributesNum=W,r.index=B}function v(){let b=r.newAttributes;for(let P=0,F=b.length;P<F;P++)b[P]=0}function m(b){d(b,0)}function d(b,P){let F=r.newAttributes,B=r.enabledAttributes,G=r.attributeDivisors;F[b]=1,B[b]===0&&(i.enableVertexAttribArray(b),B[b]=1),G[b]!==P&&(i.vertexAttribDivisor(b,P),G[b]=P)}function y(){let b=r.newAttributes,P=r.enabledAttributes;for(let F=0,B=P.length;F<B;F++)P[F]!==b[F]&&(i.disableVertexAttribArray(F),P[F]=0)}function x(b,P,F,B,G,X,W){W===!0?i.vertexAttribIPointer(b,P,F,G,X):i.vertexAttribPointer(b,P,F,B,G,X)}function _(b,P,F,B){v();let G=B.attributes,X=F.getAttributes(),W=P.defaultAttributeValues;for(let J in X){let V=X[J];if(V.location>=0){let ie=G[J];if(ie===void 0&&(J==="instanceMatrix"&&b.instanceMatrix&&(ie=b.instanceMatrix),J==="instanceColor"&&b.instanceColor&&(ie=b.instanceColor)),ie!==void 0){let re=ie.normalized,de=ie.itemSize,Ie=e.get(ie);if(Ie===void 0)continue;let qe=Ie.buffer,j=Ie.type,ee=Ie.bytesPerElement,pe=j===i.INT||j===i.UNSIGNED_INT||ie.gpuType===Dc;if(ie.isInterleavedBufferAttribute){let se=ie.data,ye=se.stride,we=ie.offset;if(se.isInstancedInterleavedBuffer){for(let De=0;De<V.locationSize;De++)d(V.location+De,se.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let De=0;De<V.locationSize;De++)m(V.location+De);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let De=0;De<V.locationSize;De++)x(V.location+De,de/V.locationSize,j,re,ye*ee,(we+de/V.locationSize*De)*ee,pe)}else{if(ie.isInstancedBufferAttribute){for(let se=0;se<V.locationSize;se++)d(V.location+se,ie.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let se=0;se<V.locationSize;se++)m(V.location+se);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let se=0;se<V.locationSize;se++)x(V.location+se,de/V.locationSize,j,re,de*ee,de/V.locationSize*se*ee,pe)}}else if(W!==void 0){let re=W[J];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(V.location,re);break;case 3:i.vertexAttrib3fv(V.location,re);break;case 4:i.vertexAttrib4fv(V.location,re);break;default:i.vertexAttrib1fv(V.location,re)}}}}y()}function C(){R();for(let b in n){let P=n[b];for(let F in P){let B=P[F];for(let G in B)u(B[G].object),delete B[G];delete P[F]}delete n[b]}}function E(b){if(n[b.id]===void 0)return;let P=n[b.id];for(let F in P){let B=P[F];for(let G in B)u(B[G].object),delete B[G];delete P[F]}delete n[b.id]}function w(b){for(let P in n){let F=n[P];if(F[b.id]===void 0)continue;let B=F[b.id];for(let G in B)u(B[G].object),delete B[G];delete F[b.id]}}function R(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:S,dispose:C,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function u2(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,n,1)}function l(c,u,h,f){if(h===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*f[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function h2(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==xn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let R=w===zr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ai&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Dn&&!R)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:C,maxSamples:E}}function f2(i){let e=this,t=null,n=0,s=!1,r=!1,a=new ni,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){let g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let y=r?0:n,x=y*4,_=d.clippingState||null;l.value=_,_=u(g,f,x,p);for(let C=0;C!==x;++C)_[C]=t[C];d.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){let v=h!==null?h.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let d=p+v*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,_=p;x!==v;++x,_+=4)a.copy(h[x]).applyMatrix4(y,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function d2(i){let e=new WeakMap;function t(a,o){return o===wl?a.mapping=Ds:o===Cl&&(a.mapping=Ns),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===wl||o===Cl)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new ac(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Gs=class extends ka{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},As=4,Uh=[.125,.215,.35,.446,.526,.582],Ki=20,ol=new Gs,zh=new Ee,ll=null,cl=0,ul=0,hl=!1,Yi=(1+Math.sqrt(5))/2,Ss=1/Yi,Oh=[new I(-Yi,Ss,0),new I(Yi,Ss,0),new I(-Ss,0,Yi),new I(Ss,0,Yi),new I(0,Yi,-Ss),new I(0,Yi,Ss),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Ga=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ll=this._renderer.getRenderTarget(),cl=this._renderer.getActiveCubeFace(),ul=this._renderer.getActiveMipmapLevel(),hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ll,cl,ul),this._renderer.xr.enabled=hl,e.scissorTest=!1,Ma(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ds||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ll=this._renderer.getRenderTarget(),cl=this._renderer.getActiveCubeFace(),ul=this._renderer.getActiveMipmapLevel(),hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:zr,format:xn,colorSpace:jt,depthBuffer:!1},s=Fh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=p2(r)),this._blurMaterial=m2(r,e,t)}return s}_compileMaterial(e){let t=new We(this._lodPlanes[0],e);this._renderer.compile(t,ol)}_sceneToCubeUV(e,t,n,s){let o=new It(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(zh),u.toneMapping=Ci,u.autoClear=!1;let p=new Ct({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new We(new wr,p),v=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(zh),v=!0);for(let d=0;d<6;d++){let y=d%3;y===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):y===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));let x=this._cubeSize;Ma(s,y*x,d>2?x:0,x,x),u.setRenderTarget(s),v&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ds||e.mapping===Ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=kh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new We(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Ma(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ol)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Oh[(s-r-1)%Oh.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new We(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ki-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):Ki;m>Ki&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ki}`);let d=[],y=0;for(let w=0;w<Ki;++w){let R=w/v,S=Math.exp(-R*R/2);d.push(S),w===0?y+=S:w<m&&(y+=2*S)}for(let w=0;w<d.length;w++)d[w]=d[w]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;let _=this._sizeLods[s],C=3*_*(s>x-As?s-x+As:0),E=4*(this._cubeSize-_);Ma(t,C,E,3*_,2*_),l.setRenderTarget(t),l.render(h,ol)}};function p2(i){let e=[],t=[],n=[],s=i,r=i-As+1+Uh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-As?l=Uh[a-i+As-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,v=3,m=2,d=1,y=new Float32Array(v*g*p),x=new Float32Array(m*g*p),_=new Float32Array(d*g*p);for(let E=0;E<p;E++){let w=E%3*2/3-1,R=E>2?0:-1,S=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];y.set(S,v*g*E),x.set(f,m*g*E);let b=[E,E,E,E,E,E];_.set(b,d*g*E)}let C=new lt;C.setAttribute("position",new Pt(y,v)),C.setAttribute("uv",new Pt(x,m)),C.setAttribute("faceIndex",new Pt(_,d)),e.push(C),s>As&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Fh(i,e,t){let n=new oi(i,e,t);return n.texture.mapping=co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ma(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function m2(i,e,t){let n=new Float32Array(Ki),s=new I(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Bh(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function kh(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Gc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function g2(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===wl||l===Cl,u=l===Ds||l===Ns;if(c||u){let h=e.get(o),f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Ga(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{let p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new Ga(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function v2(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&vr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function _2(i,e,t,n){let s={},r=new WeakMap;function a(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let v=f.morphAttributes[g];for(let m=0,d=v.length;m<d;m++)e.remove(v[m])}f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let g in f)e.update(f[g],i.ARRAY_BUFFER);let p=h.morphAttributes;for(let g in p){let v=p[g];for(let m=0,d=v.length;m<d;m++)e.update(v[m],i.ARRAY_BUFFER)}}function c(h){let f=[],p=h.index,g=h.attributes.position,v=0;if(p!==null){let y=p.array;v=p.version;for(let x=0,_=y.length;x<_;x+=3){let C=y[x+0],E=y[x+1],w=y[x+2];f.push(C,E,E,w,w,C)}}else if(g!==void 0){let y=g.array;v=g.version;for(let x=0,_=y.length/3-1;x<_;x+=3){let C=x+0,E=x+1,w=x+2;f.push(C,E,E,w,w,C)}}else return;let m=new(Wf(f)?Ba:Fa)(f,1);m.version=v;let d=r.get(h);d&&e.remove(d),r.set(h,m)}function u(h){let f=r.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function y2(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),t.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*a,g),t.update(p,n,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,n,1)}function h(f,p,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,v,0,g);let d=0;for(let y=0;y<g;y++)d+=p[y]*v[y];t.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function x2(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function M2(i,e,t){let n=new WeakMap,s=new tt;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==h){let S=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],x=0;p===!0&&(x=1),g===!0&&(x=2),v===!0&&(x=3);let _=o.attributes.position.count*x,C=1;_>e.maxTextureSize&&(C=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let E=new Float32Array(_*C*4*h),w=new Oa(E,_,C,h);w.type=Dn,w.needsUpdate=!0;let R=x*4;for(let b=0;b<h;b++){let P=m[b],F=d[b],B=y[b],G=_*C*4*b;for(let X=0;X<P.count;X++){let W=X*R;p===!0&&(s.fromBufferAttribute(P,X),E[G+W+0]=s.x,E[G+W+1]=s.y,E[G+W+2]=s.z,E[G+W+3]=0),g===!0&&(s.fromBufferAttribute(F,X),E[G+W+4]=s.x,E[G+W+5]=s.y,E[G+W+6]=s.z,E[G+W+7]=0),v===!0&&(s.fromBufferAttribute(B,X),E[G+W+8]=s.x,E[G+W+9]=s.y,E[G+W+10]=s.z,E[G+W+11]=B.itemSize===4?s.w:1)}}f={count:h,texture:w,size:new Ue(_,C)},n.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function b2(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Va=class extends Bt{constructor(e,t,n,s,r,a,o,l,c,u=Cs){if(u!==Cs&&u!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Cs&&(n=Qi),n===void 0&&u===zs&&(n=Us),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Xt,this.minFilter=l!==void 0?l:Xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Yf=new Bt,Hh=new Va(1,1),$f=new Oa,Zf=new sc,Kf=new Ha,Gh=[],Vh=[],Wh=new Float32Array(16),Xh=new Float32Array(9),qh=new Float32Array(4);function Ys(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Gh[s];if(r===void 0&&(r=new Float32Array(s),Gh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Lt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function fo(i,e){let t=Vh[e];t===void 0&&(t=new Int32Array(e),Vh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function S2(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function T2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2fv(this.addr,e),Dt(t,e)}}function E2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;i.uniform3fv(this.addr,e),Dt(t,e)}}function A2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4fv(this.addr,e),Dt(t,e)}}function w2(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,n))return;qh.set(n),i.uniformMatrix2fv(this.addr,!1,qh),Dt(t,n)}}function C2(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,n))return;Xh.set(n),i.uniformMatrix3fv(this.addr,!1,Xh),Dt(t,n)}}function R2(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,n))return;Wh.set(n),i.uniformMatrix4fv(this.addr,!1,Wh),Dt(t,n)}}function I2(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function P2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2iv(this.addr,e),Dt(t,e)}}function L2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3iv(this.addr,e),Dt(t,e)}}function D2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4iv(this.addr,e),Dt(t,e)}}function N2(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function U2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2uiv(this.addr,e),Dt(t,e)}}function z2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3uiv(this.addr,e),Dt(t,e)}}function O2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4uiv(this.addr,e),Dt(t,e)}}function F2(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Hh.compareFunction=Gf,r=Hh):r=Yf,t.setTexture2D(e||r,s)}function B2(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Zf,s)}function k2(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Kf,s)}function H2(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||$f,s)}function G2(i){switch(i){case 5126:return S2;case 35664:return T2;case 35665:return E2;case 35666:return A2;case 35674:return w2;case 35675:return C2;case 35676:return R2;case 5124:case 35670:return I2;case 35667:case 35671:return P2;case 35668:case 35672:return L2;case 35669:case 35673:return D2;case 5125:return N2;case 36294:return U2;case 36295:return z2;case 36296:return O2;case 35678:case 36198:case 36298:case 36306:case 35682:return F2;case 35679:case 36299:case 36307:return B2;case 35680:case 36300:case 36308:case 36293:return k2;case 36289:case 36303:case 36311:case 36292:return H2}}function V2(i,e){i.uniform1fv(this.addr,e)}function W2(i,e){let t=Ys(e,this.size,2);i.uniform2fv(this.addr,t)}function X2(i,e){let t=Ys(e,this.size,3);i.uniform3fv(this.addr,t)}function q2(i,e){let t=Ys(e,this.size,4);i.uniform4fv(this.addr,t)}function j2(i,e){let t=Ys(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Y2(i,e){let t=Ys(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function $2(i,e){let t=Ys(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Z2(i,e){i.uniform1iv(this.addr,e)}function K2(i,e){i.uniform2iv(this.addr,e)}function J2(i,e){i.uniform3iv(this.addr,e)}function Q2(i,e){i.uniform4iv(this.addr,e)}function eg(i,e){i.uniform1uiv(this.addr,e)}function tg(i,e){i.uniform2uiv(this.addr,e)}function ng(i,e){i.uniform3uiv(this.addr,e)}function ig(i,e){i.uniform4uiv(this.addr,e)}function sg(i,e,t){let n=this.cache,s=e.length,r=fo(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Yf,r[a])}function rg(i,e,t){let n=this.cache,s=e.length,r=fo(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Zf,r[a])}function ag(i,e,t){let n=this.cache,s=e.length,r=fo(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Kf,r[a])}function og(i,e,t){let n=this.cache,s=e.length,r=fo(t,s);Lt(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||$f,r[a])}function lg(i){switch(i){case 5126:return V2;case 35664:return W2;case 35665:return X2;case 35666:return q2;case 35674:return j2;case 35675:return Y2;case 35676:return $2;case 5124:case 35670:return Z2;case 35667:case 35671:return K2;case 35668:case 35672:return J2;case 35669:case 35673:return Q2;case 5125:return eg;case 36294:return tg;case 36295:return ng;case 36296:return ig;case 35678:case 36198:case 36298:case 36306:case 35682:return sg;case 35679:case 36299:case 36307:return rg;case 35680:case 36300:case 36308:case 36293:return ag;case 36289:case 36303:case 36311:case 36292:return og}}var oc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=G2(t.type)}},lc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lg(t.type)}},cc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},fl=/(\w+)(\])?(\[|\.)?/g;function jh(i,e){i.seq.push(e),i.map[e.id]=e}function cg(i,e,t){let n=i.name,s=n.length;for(fl.lastIndex=0;;){let r=fl.exec(n),a=fl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){jh(t,c===void 0?new oc(o,i,e):new lc(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new cc(o),jh(t,h)),t=h}}}var Is=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);cg(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Yh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var ug=37297,hg=0;function fg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var $h=new Fe;function dg(i){je._getMatrix($h,je.workingColorSpace,i);let e=`mat3( ${$h.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case ho:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Zh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+fg(i.getShaderSource(e),a)}else return s}function pg(i,e){let t=dg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function mg(i,e){let t;switch(e){case Tp:t="Linear";break;case Ep:t="Reinhard";break;case Ap:t="Cineon";break;case wp:t="ACESFilmic";break;case Rp:t="AgX";break;case Ip:t="Neutral";break;case Cp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ba=new I;function gg(){je.getLuminanceCoefficients(ba);let i=ba.x.toFixed(4),e=ba.y.toFixed(4),t=ba.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_r).join(`
`)}function _g(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function _r(i){return i!==""}function Kh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var xg=/^[ \t]*#include +<([\w\d./]+)>/gm;function uc(i){return i.replace(xg,bg)}var Mg=new Map;function bg(i,e){let t=ke[e];if(t===void 0){let n=Mg.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return uc(t)}var Sg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qh(i){return i.replace(Sg,Tg)}function Tg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ef(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Eg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Cf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ip?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ti&&(e="SHADOWMAP_TYPE_VSM"),e}function Ag(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ds:case Ns:e="ENVMAP_TYPE_CUBE";break;case co:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wg(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ns&&(e="ENVMAP_MODE_REFRACTION"),e}function Cg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Rf:e="ENVMAP_BLENDING_MULTIPLY";break;case bp:e="ENVMAP_BLENDING_MIX";break;case Sp:e="ENVMAP_BLENDING_ADD";break}return e}function Rg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ig(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Eg(t),c=Ag(t),u=wg(t),h=Cg(t),f=Rg(t),p=vg(t),g=_g(r),v=s.createProgram(),m,d,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_r).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(_r).join(`
`),d.length>0&&(d+=`
`)):(m=[ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),d=[ef(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ci?"#define TONE_MAPPING":"",t.toneMapping!==Ci?ke.tonemapping_pars_fragment:"",t.toneMapping!==Ci?mg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,pg("linearToOutputTexel",t.outputColorSpace),gg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_r).join(`
`)),a=uc(a),a=Kh(a,t),a=Jh(a,t),o=uc(o),o=Kh(o,t),o=Jh(o,t),a=Qh(a),o=Qh(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===dh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===dh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let x=y+m+a,_=y+d+o,C=Yh(s,s.VERTEX_SHADER,x),E=Yh(s,s.FRAGMENT_SHADER,_);s.attachShader(v,C),s.attachShader(v,E),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(P){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(v).trim(),B=s.getShaderInfoLog(C).trim(),G=s.getShaderInfoLog(E).trim(),X=!0,W=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,C,E);else{let J=Zh(s,C,"vertex"),V=Zh(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+J+`
`+V)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(B===""||G==="")&&(W=!1);W&&(P.diagnostics={runnable:X,programLog:F,vertexShader:{log:B,prefix:m},fragmentShader:{log:G,prefix:d}})}s.deleteShader(C),s.deleteShader(E),R=new Is(s,v),S=yg(s,v)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(v,ug)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=E,this}var Pg=0,hc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new fc(e),t.set(e,n)),n}},fc=class{constructor(e){this.id=Pg++,this.code=e,this.usedTimes=0}};function Lg(i,e,t,n,s,r,a){let o=new Ar,l=new hc,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,b,P,F,B){let G=F.fog,X=B.geometry,W=S.isMeshStandardMaterial?F.environment:null,J=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),V=J&&J.mapping===co?J.image.height:null,ie=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let re=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,de=re!==void 0?re.length:0,Ie=0;X.morphAttributes.position!==void 0&&(Ie=1),X.morphAttributes.normal!==void 0&&(Ie=2),X.morphAttributes.color!==void 0&&(Ie=3);let qe,j,ee,pe;if(ie){let at=kn[ie];qe=at.vertexShader,j=at.fragmentShader}else qe=S.vertexShader,j=S.fragmentShader,l.update(S),ee=l.getVertexShaderID(S),pe=l.getFragmentShaderID(S);let se=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),we=B.isInstancedMesh===!0,De=B.isBatchedMesh===!0,nt=!!S.map,Re=!!S.matcap,Ye=!!J,L=!!S.aoMap,Rt=!!S.lightMap,Ge=!!S.bumpMap,Ve=!!S.normalMap,me=!!S.displacementMap,ut=!!S.emissiveMap,Ae=!!S.metalnessMap,A=!!S.roughnessMap,M=S.anisotropy>0,O=S.clearcoat>0,$=S.dispersion>0,K=S.iridescence>0,Y=S.sheen>0,Se=S.transmission>0,le=M&&!!S.anisotropyMap,ge=O&&!!S.clearcoatMap,Je=O&&!!S.clearcoatNormalMap,te=O&&!!S.clearcoatRoughnessMap,ve=K&&!!S.iridescenceMap,Pe=K&&!!S.iridescenceThicknessMap,Le=Y&&!!S.sheenColorMap,_e=Y&&!!S.sheenRoughnessMap,$e=!!S.specularMap,Be=!!S.specularColorMap,ft=!!S.specularIntensityMap,D=Se&&!!S.transmissionMap,oe=Se&&!!S.thicknessMap,q=!!S.gradientMap,Z=!!S.alphaMap,fe=S.alphaTest>0,ue=!!S.alphaHash,ze=!!S.extensions,Mt=Ci;S.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Mt=i.toneMapping);let Ht={shaderID:ie,shaderType:S.type,shaderName:S.name,vertexShader:qe,fragmentShader:j,defines:S.defines,customVertexShaderID:ee,customFragmentShaderID:pe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:De,batchingColor:De&&B._colorsTexture!==null,instancing:we,instancingColor:we&&B.instanceColor!==null,instancingMorph:we&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:jt,alphaToCoverage:!!S.alphaToCoverage,map:nt,matcap:Re,envMap:Ye,envMapMode:Ye&&J.mapping,envMapCubeUVHeight:V,aoMap:L,lightMap:Rt,bumpMap:Ge,normalMap:Ve,displacementMap:f&&me,emissiveMap:ut,normalMapObjectSpace:Ve&&S.normalMapType===Up,normalMapTangentSpace:Ve&&S.normalMapType===Hf,metalnessMap:Ae,roughnessMap:A,anisotropy:M,anisotropyMap:le,clearcoat:O,clearcoatMap:ge,clearcoatNormalMap:Je,clearcoatRoughnessMap:te,dispersion:$,iridescence:K,iridescenceMap:ve,iridescenceThicknessMap:Pe,sheen:Y,sheenColorMap:Le,sheenRoughnessMap:_e,specularMap:$e,specularColorMap:Be,specularIntensityMap:ft,transmission:Se,transmissionMap:D,thicknessMap:oe,gradientMap:q,opaque:S.transparent===!1&&S.blending===ws&&S.alphaToCoverage===!1,alphaMap:Z,alphaTest:fe,alphaHash:ue,combine:S.combine,mapUv:nt&&v(S.map.channel),aoMapUv:L&&v(S.aoMap.channel),lightMapUv:Rt&&v(S.lightMap.channel),bumpMapUv:Ge&&v(S.bumpMap.channel),normalMapUv:Ve&&v(S.normalMap.channel),displacementMapUv:me&&v(S.displacementMap.channel),emissiveMapUv:ut&&v(S.emissiveMap.channel),metalnessMapUv:Ae&&v(S.metalnessMap.channel),roughnessMapUv:A&&v(S.roughnessMap.channel),anisotropyMapUv:le&&v(S.anisotropyMap.channel),clearcoatMapUv:ge&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Je&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:_e&&v(S.sheenRoughnessMap.channel),specularMapUv:$e&&v(S.specularMap.channel),specularColorMapUv:Be&&v(S.specularColorMap.channel),specularIntensityMapUv:ft&&v(S.specularIntensityMap.channel),transmissionMapUv:D&&v(S.transmissionMap.channel),thicknessMapUv:oe&&v(S.thicknessMap.channel),alphaMapUv:Z&&v(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ve||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!X.attributes.uv&&(nt||Z),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ye,skinning:B.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Ie,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Mt,decodeVideoTexture:nt&&S.map.isVideoTexture===!0&&je.getTransfer(S.map.colorSpace)===ht,decodeVideoTextureEmissive:ut&&S.emissiveMap.isVideoTexture===!0&&je.getTransfer(S.emissiveMap.colorSpace)===ht,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===wt,flipSided:S.side===tn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ze&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&S.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ht.vertexUv1s=c.has(1),Ht.vertexUv2s=c.has(2),Ht.vertexUv3s=c.has(3),c.clear(),Ht}function d(S){let b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)b.push(P),b.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(y(b,S),x(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function y(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function x(S,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),S.push(o.mask)}function _(S){let b=g[S.type],P;if(b){let F=kn[b];P=b0.clone(F.uniforms)}else P=S.uniforms;return P}function C(S,b){let P;for(let F=0,B=u.length;F<B;F++){let G=u[F];if(G.cacheKey===b){P=G,++P.usedTimes;break}}return P===void 0&&(P=new Ig(i,b,S,r),u.push(P)),P}function E(S){if(--S.usedTimes===0){let b=u.indexOf(S);u[b]=u[u.length-1],u.pop(),S.destroy()}}function w(S){l.remove(S)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:_,acquireProgram:C,releaseProgram:E,releaseShaderCache:w,programs:u,dispose:R}}function Dg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Ng(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function tf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function nf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,f,p,g,v,m){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=v,d.group=m),e++,d}function o(h,f,p,g,v,m){let d=a(h,f,p,g,v,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(h,f,p,g,v,m){let d=a(h,f,p,g,v,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||Ng),n.length>1&&n.sort(f||tf),s.length>1&&s.sort(f||tf)}function u(){for(let h=e,f=i.length;h<f;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Ug(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new nf,i.set(n,[a])):s>=r.length?(a=new nf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function zg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ee};break;case"SpotLight":t={position:new I,direction:new I,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function Og(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Fg=0;function Bg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function kg(i){let e=new zg,t=Og(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new Ce,a=new Ce;function o(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,y=0,x=0,_=0,C=0,E=0,w=0;c.sort(Bg);for(let S=0,b=c.length;S<b;S++){let P=c[S],F=P.color,B=P.intensity,G=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=F.r*B,h+=F.g*B,f+=F.b*B;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],B);w++}else if(P.isDirectionalLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let J=P.shadow,V=t.get(P);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=P.shadow.matrix,y++}n.directional[p]=W,p++}else if(P.isSpotLight){let W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(F).multiplyScalar(B),W.distance=G,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[v]=W;let J=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,J.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[v]=J.matrix,P.castShadow){let V=t.get(P);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,n.spotShadow[v]=V,n.spotShadowMap[v]=X,_++}v++}else if(P.isRectAreaLight){let W=e.get(P);W.color.copy(F).multiplyScalar(B),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=W,m++}else if(P.isPointLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){let J=P.shadow,V=t.get(P);V.shadowIntensity=J.intensity,V.shadowBias=J.bias,V.shadowNormalBias=J.normalBias,V.shadowRadius=J.radius,V.shadowMapSize=J.mapSize,V.shadowCameraNear=J.camera.near,V.shadowCameraFar=J.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=P.shadow.matrix,x++}n.point[g]=W,g++}else if(P.isHemisphereLight){let W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(B),W.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[d]=W,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let R=n.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==d||R.numDirectionalShadows!==y||R.numPointShadows!==x||R.numSpotShadows!==_||R.numSpotMaps!==C||R.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=_+C-E,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,R.directionalLength=p,R.pointLength=g,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=d,R.numDirectionalShadows=y,R.numPointShadows=x,R.numSpotShadows=_,R.numSpotMaps=C,R.numLightProbes=w,n.version=Fg++)}function l(c,u){let h=0,f=0,p=0,g=0,v=0,m=u.matrixWorldInverse;for(let d=0,y=c.length;d<y;d++){let x=c[d];if(x.isDirectionalLight){let _=n.directional[h];_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),h++}else if(x.isSpotLight){let _=n.spot[p];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(x.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){let _=n.point[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){let _=n.hemi[v];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function sf(i){let e=new kg(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Hg(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new sf(i),e.set(s,[o])):r>=a.length?(o=new sf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var dc=class extends hn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Dp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},pc=class extends hn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Gg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Wg(i,e,t){let n=new Cr,s=new Ue,r=new Ue,a=new tt,o=new dc({depthPacking:Np}),l=new pc,c={},u=t.maxTextureSize,h={[Gn]:tn,[tn]:Gn,[wt]:wt},f=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:Gg,fragmentShader:Vg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new lt;g.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new We(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cf;let d=this.type;this.render=function(E,w,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let S=i.getRenderTarget(),b=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),F=i.state;F.setBlending(wi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let B=d!==ti&&this.type===ti,G=d===ti&&this.type!==ti;for(let X=0,W=E.length;X<W;X++){let J=E[X],V=J.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let ie=V.getFrameExtents();if(s.multiply(ie),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ie.x),s.x=r.x*ie.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ie.y),s.y=r.y*ie.y,V.mapSize.y=r.y)),V.map===null||B===!0||G===!0){let de=this.type!==ti?{minFilter:Xt,magFilter:Xt}:{};V.map!==null&&V.map.dispose(),V.map=new oi(s.x,s.y,de),V.map.texture.name=J.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let re=V.getViewportCount();for(let de=0;de<re;de++){let Ie=V.getViewport(de);a.set(r.x*Ie.x,r.y*Ie.y,r.x*Ie.z,r.y*Ie.w),F.viewport(a),V.updateMatrices(J,de),n=V.getFrustum(),_(w,R,V.camera,J,this.type)}V.isPointLightShadow!==!0&&this.type===ti&&y(V,R),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(S,b,P)};function y(E,w){let R=e.update(v);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new oi(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(w,null,R,f,v,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(w,null,R,p,v,null)}function x(E,w,R,S){let b=null,P=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)b=P;else if(b=R.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let F=b.uuid,B=w.uuid,G=c[F];G===void 0&&(G={},c[F]=G);let X=G[B];X===void 0&&(X=b.clone(),G[B]=X,w.addEventListener("dispose",C)),b=X}if(b.visible=w.visible,b.wireframe=w.wireframe,S===ti?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:h[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,R.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let F=i.properties.get(b);F.light=R}return b}function _(E,w,R,S,b){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===ti)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);let B=e.update(E),G=E.material;if(Array.isArray(G)){let X=B.groups;for(let W=0,J=X.length;W<J;W++){let V=X[W],ie=G[V.materialIndex];if(ie&&ie.visible){let re=x(E,ie,S,b);E.onBeforeShadow(i,E,w,R,B,re,V),i.renderBufferDirect(R,null,B,re,E,V),E.onAfterShadow(i,E,w,R,B,re,V)}}}else if(G.visible){let X=x(E,G,S,b);E.onBeforeShadow(i,E,w,R,B,X,null),i.renderBufferDirect(R,null,B,X,E,null),E.onAfterShadow(i,E,w,R,B,X,null)}}let F=E.children;for(let B=0,G=F.length;B<G;B++)_(F[B],w,R,S,b)}function C(E){E.target.removeEventListener("dispose",C);for(let R in c){let S=c[R],b=E.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}var Xg={[xl]:Ml,[bl]:El,[Sl]:Al,[Ls]:Tl,[Ml]:xl,[El]:bl,[Al]:Sl,[Tl]:Ls};function qg(i,e){function t(){let D=!1,oe=new tt,q=null,Z=new tt(0,0,0,0);return{setMask:function(fe){q!==fe&&!D&&(i.colorMask(fe,fe,fe,fe),q=fe)},setLocked:function(fe){D=fe},setClear:function(fe,ue,ze,Mt,Ht){Ht===!0&&(fe*=Mt,ue*=Mt,ze*=Mt),oe.set(fe,ue,ze,Mt),Z.equals(oe)===!1&&(i.clearColor(fe,ue,ze,Mt),Z.copy(oe))},reset:function(){D=!1,q=null,Z.set(-1,0,0,0)}}}function n(){let D=!1,oe=!1,q=null,Z=null,fe=null;return{setReversed:function(ue){if(oe!==ue){let ze=e.get("EXT_clip_control");oe?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT);let Mt=fe;fe=null,this.setClear(Mt)}oe=ue},getReversed:function(){return oe},setTest:function(ue){ue?se(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(ue){q!==ue&&!D&&(i.depthMask(ue),q=ue)},setFunc:function(ue){if(oe&&(ue=Xg[ue]),Z!==ue){switch(ue){case xl:i.depthFunc(i.NEVER);break;case Ml:i.depthFunc(i.ALWAYS);break;case bl:i.depthFunc(i.LESS);break;case Ls:i.depthFunc(i.LEQUAL);break;case Sl:i.depthFunc(i.EQUAL);break;case Tl:i.depthFunc(i.GEQUAL);break;case El:i.depthFunc(i.GREATER);break;case Al:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=ue}},setLocked:function(ue){D=ue},setClear:function(ue){fe!==ue&&(oe&&(ue=1-ue),i.clearDepth(ue),fe=ue)},reset:function(){D=!1,q=null,Z=null,fe=null,oe=!1}}}function s(){let D=!1,oe=null,q=null,Z=null,fe=null,ue=null,ze=null,Mt=null,Ht=null;return{setTest:function(at){D||(at?se(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(at){oe!==at&&!D&&(i.stencilMask(at),oe=at)},setFunc:function(at,wn,jn){(q!==at||Z!==wn||fe!==jn)&&(i.stencilFunc(at,wn,jn),q=at,Z=wn,fe=jn)},setOp:function(at,wn,jn){(ue!==at||ze!==wn||Mt!==jn)&&(i.stencilOp(at,wn,jn),ue=at,ze=wn,Mt=jn)},setLocked:function(at){D=at},setClear:function(at){Ht!==at&&(i.clearStencil(at),Ht=at)},reset:function(){D=!1,oe=null,q=null,Z=null,fe=null,ue=null,ze=null,Mt=null,Ht=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,y=null,x=null,_=null,C=null,E=null,w=new Ee(0,0,0),R=0,S=!1,b=null,P=null,F=null,B=null,G=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,J=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=J>=1):V.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=J>=2);let ie=null,re={},de=i.getParameter(i.SCISSOR_BOX),Ie=i.getParameter(i.VIEWPORT),qe=new tt().fromArray(de),j=new tt().fromArray(Ie);function ee(D,oe,q,Z){let fe=new Uint8Array(4),ue=i.createTexture();i.bindTexture(D,ue),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ze=0;ze<q;ze++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,fe):i.texImage2D(oe+ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,fe);return ue}let pe={};pe[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),pe[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pe[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(i.DEPTH_TEST),a.setFunc(Ls),Ge(!1),Ve(rh),se(i.CULL_FACE),L(wi);function se(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function ye(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function we(D,oe){return h[D]!==oe?(i.bindFramebuffer(D,oe),h[D]=oe,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=oe),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function De(D,oe){let q=p,Z=!1;if(D){q=f.get(oe),q===void 0&&(q=[],f.set(oe,q));let fe=D.textures;if(q.length!==fe.length||q[0]!==i.COLOR_ATTACHMENT0){for(let ue=0,ze=fe.length;ue<ze;ue++)q[ue]=i.COLOR_ATTACHMENT0+ue;q.length=fe.length,Z=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,Z=!0);Z&&i.drawBuffers(q)}function nt(D){return g!==D?(i.useProgram(D),g=D,!0):!1}let Re={[$i]:i.FUNC_ADD,[rp]:i.FUNC_SUBTRACT,[ap]:i.FUNC_REVERSE_SUBTRACT};Re[op]=i.MIN,Re[lp]=i.MAX;let Ye={[cp]:i.ZERO,[up]:i.ONE,[hp]:i.SRC_COLOR,[_l]:i.SRC_ALPHA,[vp]:i.SRC_ALPHA_SATURATE,[mp]:i.DST_COLOR,[dp]:i.DST_ALPHA,[fp]:i.ONE_MINUS_SRC_COLOR,[yl]:i.ONE_MINUS_SRC_ALPHA,[gp]:i.ONE_MINUS_DST_COLOR,[pp]:i.ONE_MINUS_DST_ALPHA,[_p]:i.CONSTANT_COLOR,[yp]:i.ONE_MINUS_CONSTANT_COLOR,[xp]:i.CONSTANT_ALPHA,[Mp]:i.ONE_MINUS_CONSTANT_ALPHA};function L(D,oe,q,Z,fe,ue,ze,Mt,Ht,at){if(D===wi){v===!0&&(ye(i.BLEND),v=!1);return}if(v===!1&&(se(i.BLEND),v=!0),D!==sp){if(D!==m||at!==S){if((d!==$i||_!==$i)&&(i.blendEquation(i.FUNC_ADD),d=$i,_=$i),at)switch(D){case ws:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ps:i.blendFunc(i.ONE,i.ONE);break;case ah:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case oh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ws:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ps:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ah:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case oh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,x=null,C=null,E=null,w.set(0,0,0),R=0,m=D,S=at}return}fe=fe||oe,ue=ue||q,ze=ze||Z,(oe!==d||fe!==_)&&(i.blendEquationSeparate(Re[oe],Re[fe]),d=oe,_=fe),(q!==y||Z!==x||ue!==C||ze!==E)&&(i.blendFuncSeparate(Ye[q],Ye[Z],Ye[ue],Ye[ze]),y=q,x=Z,C=ue,E=ze),(Mt.equals(w)===!1||Ht!==R)&&(i.blendColor(Mt.r,Mt.g,Mt.b,Ht),w.copy(Mt),R=Ht),m=D,S=!1}function Rt(D,oe){D.side===wt?ye(i.CULL_FACE):se(i.CULL_FACE);let q=D.side===tn;oe&&(q=!q),Ge(q),D.blending===ws&&D.transparent===!1?L(wi):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let Z=D.stencilWrite;o.setTest(Z),Z&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ut(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(D){b!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),b=D)}function Ve(D){D!==tp?(se(i.CULL_FACE),D!==P&&(D===rh?i.cullFace(i.BACK):D===np?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),P=D}function me(D){D!==F&&(W&&i.lineWidth(D),F=D)}function ut(D,oe,q){D?(se(i.POLYGON_OFFSET_FILL),(B!==oe||G!==q)&&(i.polygonOffset(oe,q),B=oe,G=q)):ye(i.POLYGON_OFFSET_FILL)}function Ae(D){D?se(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function A(D){D===void 0&&(D=i.TEXTURE0+X-1),ie!==D&&(i.activeTexture(D),ie=D)}function M(D,oe,q){q===void 0&&(ie===null?q=i.TEXTURE0+X-1:q=ie);let Z=re[q];Z===void 0&&(Z={type:void 0,texture:void 0},re[q]=Z),(Z.type!==D||Z.texture!==oe)&&(ie!==q&&(i.activeTexture(q),ie=q),i.bindTexture(D,oe||pe[D]),Z.type=D,Z.texture=oe)}function O(){let D=re[ie];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Je(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(D){qe.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),qe.copy(D))}function _e(D){j.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),j.copy(D))}function $e(D,oe){let q=c.get(oe);q===void 0&&(q=new WeakMap,c.set(oe,q));let Z=q.get(D);Z===void 0&&(Z=i.getUniformBlockIndex(oe,D.name),q.set(D,Z))}function Be(D,oe){let Z=c.get(oe).get(D);l.get(oe)!==Z&&(i.uniformBlockBinding(oe,Z,D.__bindingPointIndex),l.set(oe,Z))}function ft(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ie=null,re={},h={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,y=null,x=null,_=null,C=null,E=null,w=new Ee(0,0,0),R=0,S=!1,b=null,P=null,F=null,B=null,G=null,qe.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:se,disable:ye,bindFramebuffer:we,drawBuffers:De,useProgram:nt,setBlending:L,setMaterial:Rt,setFlipSided:Ge,setCullFace:Ve,setLineWidth:me,setPolygonOffset:ut,setScissorTest:Ae,activeTexture:A,bindTexture:M,unbindTexture:O,compressedTexImage2D:$,compressedTexImage3D:K,texImage2D:ve,texImage3D:Pe,updateUBOMapping:$e,uniformBlockBinding:Be,texStorage2D:Je,texStorage3D:te,texSubImage2D:Y,texSubImage3D:Se,compressedTexSubImage2D:le,compressedTexSubImage3D:ge,scissor:Le,viewport:_e,reset:ft}}function rf(i,e,t,n){let s=jg(n);switch(t){case Nf:return i*e;case zf:return i*e;case Of:return i*e*2;case zc:return i*e/s.components*s.byteLength;case Oc:return i*e/s.components*s.byteLength;case Ff:return i*e*2/s.components*s.byteLength;case Fc:return i*e*2/s.components*s.byteLength;case Uf:return i*e*3/s.components*s.byteLength;case xn:return i*e*4/s.components*s.byteLength;case Bc:return i*e*4/s.components*s.byteLength;case Ia:case Pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case La:case Da:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Il:case Ll:return Math.max(i,16)*Math.max(e,8)/4;case Rl:case Pl:return Math.max(i,8)*Math.max(e,8)/2;case Dl:case Nl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ul:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ol:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Fl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case kl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Hl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Vl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Wl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ql:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case jl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Yl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case $l:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Na:case Zl:case Kl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Bf:case Jl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ql:case ec:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jg(i){switch(i){case ai:case Pf:return{byteLength:1,components:1};case Tr:case Lf:case zr:return{byteLength:2,components:1};case Nc:case Uc:return{byteLength:2,components:4};case Qi:case Dc:case Dn:return{byteLength:4,components:1};case Df:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Yg(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,u=new WeakMap,h,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return p?new OffscreenCanvas(A,M):Er("canvas")}function v(A,M,O){let $=1,K=Ae(A);if((K.width>O||K.height>O)&&($=O/Math.max(K.width,K.height)),$<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let Y=Math.floor($*K.width),Se=Math.floor($*K.height);h===void 0&&(h=g(Y,Se));let le=M?g(Y,Se):h;return le.width=Y,le.height=Se,le.getContext("2d").drawImage(A,0,0,Y,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Y+"x"+Se+")."),le}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function m(A){return A.generateMipmaps}function d(A){i.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(A,M,O,$,K=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Y=M;if(M===i.RED&&(O===i.FLOAT&&(Y=i.R32F),O===i.HALF_FLOAT&&(Y=i.R16F),O===i.UNSIGNED_BYTE&&(Y=i.R8)),M===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.R8UI),O===i.UNSIGNED_SHORT&&(Y=i.R16UI),O===i.UNSIGNED_INT&&(Y=i.R32UI),O===i.BYTE&&(Y=i.R8I),O===i.SHORT&&(Y=i.R16I),O===i.INT&&(Y=i.R32I)),M===i.RG&&(O===i.FLOAT&&(Y=i.RG32F),O===i.HALF_FLOAT&&(Y=i.RG16F),O===i.UNSIGNED_BYTE&&(Y=i.RG8)),M===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RG8UI),O===i.UNSIGNED_SHORT&&(Y=i.RG16UI),O===i.UNSIGNED_INT&&(Y=i.RG32UI),O===i.BYTE&&(Y=i.RG8I),O===i.SHORT&&(Y=i.RG16I),O===i.INT&&(Y=i.RG32I)),M===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),O===i.UNSIGNED_INT&&(Y=i.RGB32UI),O===i.BYTE&&(Y=i.RGB8I),O===i.SHORT&&(Y=i.RGB16I),O===i.INT&&(Y=i.RGB32I)),M===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),O===i.UNSIGNED_INT&&(Y=i.RGBA32UI),O===i.BYTE&&(Y=i.RGBA8I),O===i.SHORT&&(Y=i.RGBA16I),O===i.INT&&(Y=i.RGBA32I)),M===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),M===i.RGBA){let Se=K?ho:je.getTransfer($);O===i.FLOAT&&(Y=i.RGBA32F),O===i.HALF_FLOAT&&(Y=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Y=Se===ht?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function _(A,M){let O;return A?M===null||M===Qi||M===Us?O=i.DEPTH24_STENCIL8:M===Dn?O=i.DEPTH32F_STENCIL8:M===Tr&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Qi||M===Us?O=i.DEPTH_COMPONENT24:M===Dn?O=i.DEPTH_COMPONENT32F:M===Tr&&(O=i.DEPTH_COMPONENT16),O}function C(A,M){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Xt&&A.minFilter!==en?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function E(A){let M=A.target;M.removeEventListener("dispose",E),R(M),M.isVideoTexture&&u.delete(M)}function w(A){let M=A.target;M.removeEventListener("dispose",w),b(M)}function R(A){let M=n.get(A);if(M.__webglInit===void 0)return;let O=A.source,$=f.get(O);if($){let K=$[M.__cacheKey];K.usedTimes--,K.usedTimes===0&&S(A),Object.keys($).length===0&&f.delete(O)}n.remove(A)}function S(A){let M=n.get(A);i.deleteTexture(M.__webglTexture);let O=A.source,$=f.get(O);delete $[M.__cacheKey],a.memory.textures--}function b(A){let M=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let K=0;K<M.__webglFramebuffer[$].length;K++)i.deleteFramebuffer(M.__webglFramebuffer[$][K]);else i.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)i.deleteFramebuffer(M.__webglFramebuffer[$]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let O=A.textures;for(let $=0,K=O.length;$<K;$++){let Y=n.get(O[$]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(O[$])}n.remove(A)}let P=0;function F(){P=0}function B(){let A=P;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),P+=1,A}function G(A){let M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function X(A,M){let O=n.get(A);if(A.isVideoTexture&&me(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){let $=A.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(O,A,M);return}}t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+M)}function W(A,M){let O=n.get(A);if(A.version>0&&O.__version!==A.version){j(O,A,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+M)}function J(A,M){let O=n.get(A);if(A.version>0&&O.__version!==A.version){j(O,A,M);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+M)}function V(A,M){let O=n.get(A);if(A.version>0&&O.__version!==A.version){ee(O,A,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+M)}let ie={[Ji]:i.REPEAT,[ii]:i.CLAMP_TO_EDGE,[Sr]:i.MIRRORED_REPEAT},re={[Xt]:i.NEAREST,[Lc]:i.NEAREST_MIPMAP_NEAREST,[Es]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[yr]:i.LINEAR_MIPMAP_NEAREST,[Hn]:i.LINEAR_MIPMAP_LINEAR},de={[zp]:i.NEVER,[Gp]:i.ALWAYS,[Op]:i.LESS,[Gf]:i.LEQUAL,[Fp]:i.EQUAL,[Hp]:i.GEQUAL,[Bp]:i.GREATER,[kp]:i.NOTEQUAL};function Ie(A,M){if(M.type===Dn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===en||M.magFilter===yr||M.magFilter===Es||M.magFilter===Hn||M.minFilter===en||M.minFilter===yr||M.minFilter===Es||M.minFilter===Hn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ie[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ie[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ie[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,re[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,re[M.minFilter]),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,de[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Xt||M.minFilter!==Es&&M.minFilter!==Hn||M.type===Dn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function qe(A,M){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",E));let $=M.source,K=f.get($);K===void 0&&(K={},f.set($,K));let Y=G(M);if(Y!==A.__cacheKey){K[Y]===void 0&&(K[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),K[Y].usedTimes++;let Se=K[A.__cacheKey];Se!==void 0&&(K[A.__cacheKey].usedTimes--,Se.usedTimes===0&&S(M)),A.__cacheKey=Y,A.__webglTexture=K[Y].texture}return O}function j(A,M,O){let $=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=i.TEXTURE_3D);let K=qe(A,M),Y=M.source;t.bindTexture($,A.__webglTexture,i.TEXTURE0+O);let Se=n.get(Y);if(Y.version!==Se.__version||K===!0){t.activeTexture(i.TEXTURE0+O);let le=je.getPrimaries(je.workingColorSpace),ge=M.colorSpace===Ei?null:je.getPrimaries(M.colorSpace),Je=M.colorSpace===Ei||le===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let te=v(M.image,!1,s.maxTextureSize);te=ut(M,te);let ve=r.convert(M.format,M.colorSpace),Pe=r.convert(M.type),Le=x(M.internalFormat,ve,Pe,M.colorSpace,M.isVideoTexture);Ie($,M);let _e,$e=M.mipmaps,Be=M.isVideoTexture!==!0,ft=Se.__version===void 0||K===!0,D=Y.dataReady,oe=C(M,te);if(M.isDepthTexture)Le=_(M.format===zs,M.type),ft&&(Be?t.texStorage2D(i.TEXTURE_2D,1,Le,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,Le,te.width,te.height,0,ve,Pe,null));else if(M.isDataTexture)if($e.length>0){Be&&ft&&t.texStorage2D(i.TEXTURE_2D,oe,Le,$e[0].width,$e[0].height);for(let q=0,Z=$e.length;q<Z;q++)_e=$e[q],Be?D&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,_e.width,_e.height,ve,Pe,_e.data):t.texImage2D(i.TEXTURE_2D,q,Le,_e.width,_e.height,0,ve,Pe,_e.data);M.generateMipmaps=!1}else Be?(ft&&t.texStorage2D(i.TEXTURE_2D,oe,Le,te.width,te.height),D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,te.width,te.height,ve,Pe,te.data)):t.texImage2D(i.TEXTURE_2D,0,Le,te.width,te.height,0,ve,Pe,te.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Be&&ft&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,Le,$e[0].width,$e[0].height,te.depth);for(let q=0,Z=$e.length;q<Z;q++)if(_e=$e[q],M.format!==xn)if(ve!==null)if(Be){if(D)if(M.layerUpdates.size>0){let fe=rf(_e.width,_e.height,M.format,M.type);for(let ue of M.layerUpdates){let ze=_e.data.subarray(ue*fe/_e.data.BYTES_PER_ELEMENT,(ue+1)*fe/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,ue,_e.width,_e.height,1,ve,ze)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,_e.width,_e.height,te.depth,ve,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Le,_e.width,_e.height,te.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,_e.width,_e.height,te.depth,ve,Pe,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,q,Le,_e.width,_e.height,te.depth,0,ve,Pe,_e.data)}else{Be&&ft&&t.texStorage2D(i.TEXTURE_2D,oe,Le,$e[0].width,$e[0].height);for(let q=0,Z=$e.length;q<Z;q++)_e=$e[q],M.format!==xn?ve!==null?Be?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,_e.width,_e.height,ve,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,q,Le,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?D&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,_e.width,_e.height,ve,Pe,_e.data):t.texImage2D(i.TEXTURE_2D,q,Le,_e.width,_e.height,0,ve,Pe,_e.data)}else if(M.isDataArrayTexture)if(Be){if(ft&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,Le,te.width,te.height,te.depth),D)if(M.layerUpdates.size>0){let q=rf(te.width,te.height,M.format,M.type);for(let Z of M.layerUpdates){let fe=te.data.subarray(Z*q/te.data.BYTES_PER_ELEMENT,(Z+1)*q/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,te.width,te.height,1,ve,Pe,fe)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ve,Pe,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Le,te.width,te.height,te.depth,0,ve,Pe,te.data);else if(M.isData3DTexture)Be?(ft&&t.texStorage3D(i.TEXTURE_3D,oe,Le,te.width,te.height,te.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ve,Pe,te.data)):t.texImage3D(i.TEXTURE_3D,0,Le,te.width,te.height,te.depth,0,ve,Pe,te.data);else if(M.isFramebufferTexture){if(ft)if(Be)t.texStorage2D(i.TEXTURE_2D,oe,Le,te.width,te.height);else{let q=te.width,Z=te.height;for(let fe=0;fe<oe;fe++)t.texImage2D(i.TEXTURE_2D,fe,Le,q,Z,0,ve,Pe,null),q>>=1,Z>>=1}}else if($e.length>0){if(Be&&ft){let q=Ae($e[0]);t.texStorage2D(i.TEXTURE_2D,oe,Le,q.width,q.height)}for(let q=0,Z=$e.length;q<Z;q++)_e=$e[q],Be?D&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,ve,Pe,_e):t.texImage2D(i.TEXTURE_2D,q,Le,ve,Pe,_e);M.generateMipmaps=!1}else if(Be){if(ft){let q=Ae(te);t.texStorage2D(i.TEXTURE_2D,oe,Le,q.width,q.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,Pe,te)}else t.texImage2D(i.TEXTURE_2D,0,Le,ve,Pe,te);m(M)&&d($),Se.__version=Y.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ee(A,M,O){if(M.image.length!==6)return;let $=qe(A,M),K=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+O);let Y=n.get(K);if(K.version!==Y.__version||$===!0){t.activeTexture(i.TEXTURE0+O);let Se=je.getPrimaries(je.workingColorSpace),le=M.colorSpace===Ei?null:je.getPrimaries(M.colorSpace),ge=M.colorSpace===Ei||Se===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let Je=M.isCompressedTexture||M.image[0].isCompressedTexture,te=M.image[0]&&M.image[0].isDataTexture,ve=[];for(let Z=0;Z<6;Z++)!Je&&!te?ve[Z]=v(M.image[Z],!0,s.maxCubemapSize):ve[Z]=te?M.image[Z].image:M.image[Z],ve[Z]=ut(M,ve[Z]);let Pe=ve[0],Le=r.convert(M.format,M.colorSpace),_e=r.convert(M.type),$e=x(M.internalFormat,Le,_e,M.colorSpace),Be=M.isVideoTexture!==!0,ft=Y.__version===void 0||$===!0,D=K.dataReady,oe=C(M,Pe);Ie(i.TEXTURE_CUBE_MAP,M);let q;if(Je){Be&&ft&&t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,$e,Pe.width,Pe.height);for(let Z=0;Z<6;Z++){q=ve[Z].mipmaps;for(let fe=0;fe<q.length;fe++){let ue=q[fe];M.format!==xn?Le!==null?Be?D&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe,0,0,ue.width,ue.height,Le,ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe,$e,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe,0,0,ue.width,ue.height,Le,_e,ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe,$e,ue.width,ue.height,0,Le,_e,ue.data)}}}else{if(q=M.mipmaps,Be&&ft){q.length>0&&oe++;let Z=Ae(ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,$e,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(te){Be?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ve[Z].width,ve[Z].height,Le,_e,ve[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,$e,ve[Z].width,ve[Z].height,0,Le,_e,ve[Z].data);for(let fe=0;fe<q.length;fe++){let ze=q[fe].image[Z].image;Be?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe+1,0,0,ze.width,ze.height,Le,_e,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe+1,$e,ze.width,ze.height,0,Le,_e,ze.data)}}else{Be?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Le,_e,ve[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,$e,Le,_e,ve[Z]);for(let fe=0;fe<q.length;fe++){let ue=q[fe];Be?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe+1,0,0,Le,_e,ue.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe+1,$e,Le,_e,ue.image[Z])}}}m(M)&&d(i.TEXTURE_CUBE_MAP),Y.__version=K.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function pe(A,M,O,$,K,Y){let Se=r.convert(O.format,O.colorSpace),le=r.convert(O.type),ge=x(O.internalFormat,Se,le,O.colorSpace),Je=n.get(M),te=n.get(O);if(te.__renderTarget=M,!Je.__hasExternalTextures){let ve=Math.max(1,M.width>>Y),Pe=Math.max(1,M.height>>Y);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,Y,ge,ve,Pe,M.depth,0,Se,le,null):t.texImage2D(K,Y,ge,ve,Pe,0,Se,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Ve(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,K,te.__webglTexture,0,Ge(M)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,K,te.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(A,M,O){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer){let $=M.depthTexture,K=$&&$.isDepthTexture?$.type:null,Y=_(M.stencilBuffer,K),Se=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=Ge(M);Ve(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,Y,M.width,M.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,Y,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Y,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,A)}else{let $=M.textures;for(let K=0;K<$.length;K++){let Y=$[K],Se=r.convert(Y.format,Y.colorSpace),le=r.convert(Y.type),ge=x(Y.internalFormat,Se,le,Y.colorSpace),Je=Ge(M);O&&Ve(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Je,ge,M.width,M.height):Ve(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Je,ge,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ge,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ye(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(M.depthTexture);$.__renderTarget=M,(!$.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X(M.depthTexture,0);let K=$.__webglTexture,Y=Ge(M);if(M.depthTexture.format===Cs)Ve(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(M.depthTexture.format===zs)Ve(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function we(A){let M=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){let $=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){let K=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",K)};$.addEventListener("dispose",K),M.__depthDisposeCallback=K}M.__boundDepthTexture=$}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ye(M.__webglFramebuffer,A)}else if(O){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=i.createRenderbuffer(),se(M.__webglDepthbuffer[$],A,!1);else{let K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=M.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),se(M.__webglDepthbuffer,A,!1);else{let $=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,K)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(A,M,O){let $=n.get(A);M!==void 0&&pe($.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&we(A)}function nt(A){let M=A.texture,O=n.get(A),$=n.get(M);A.addEventListener("dispose",w);let K=A.textures,Y=A.isWebGLCubeRenderTarget===!0,Se=K.length>1;if(Se||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=M.version,a.memory.textures++),Y){O.__webglFramebuffer=[];for(let le=0;le<6;le++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[le]=[];for(let ge=0;ge<M.mipmaps.length;ge++)O.__webglFramebuffer[le][ge]=i.createFramebuffer()}else O.__webglFramebuffer[le]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let le=0;le<M.mipmaps.length;le++)O.__webglFramebuffer[le]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Se)for(let le=0,ge=K.length;le<ge;le++){let Je=n.get(K[le]);Je.__webglTexture===void 0&&(Je.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Ve(A)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let le=0;le<K.length;le++){let ge=K[le];O.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[le]);let Je=r.convert(ge.format,ge.colorSpace),te=r.convert(ge.type),ve=x(ge.internalFormat,Je,te,ge.colorSpace,A.isXRRenderTarget===!0),Pe=Ge(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,ve,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,O.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),se(O.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,M);for(let le=0;le<6;le++)if(M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)pe(O.__webglFramebuffer[le][ge],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ge);else pe(O.__webglFramebuffer[le],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(M)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let le=0,ge=K.length;le<ge;le++){let Je=K[le],te=n.get(Je);t.bindTexture(i.TEXTURE_2D,te.__webglTexture),Ie(i.TEXTURE_2D,Je),pe(O.__webglFramebuffer,A,Je,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,0),m(Je)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(le=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,$.__webglTexture),Ie(le,M),M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)pe(O.__webglFramebuffer[ge],A,M,i.COLOR_ATTACHMENT0,le,ge);else pe(O.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,le,0);m(M)&&d(le),t.unbindTexture()}A.depthBuffer&&we(A)}function Re(A){let M=A.textures;for(let O=0,$=M.length;O<$;O++){let K=M[O];if(m(K)){let Y=y(A),Se=n.get(K).__webglTexture;t.bindTexture(Y,Se),d(Y),t.unbindTexture()}}}let Ye=[],L=[];function Rt(A){if(A.samples>0){if(Ve(A)===!1){let M=A.textures,O=A.width,$=A.height,K=i.COLOR_BUFFER_BIT,Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(A),le=M.length>1;if(le)for(let ge=0;ge<M.length;ge++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let ge=0;ge<M.length;ge++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[ge]);let Je=n.get(M[ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Je,0)}i.blitFramebuffer(0,0,O,$,0,0,O,$,K,i.NEAREST),l===!0&&(Ye.length=0,L.length=0,Ye.push(i.COLOR_ATTACHMENT0+ge),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ye.push(Y),L.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ye))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let ge=0;ge<M.length;ge++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,Se.__webglColorRenderbuffer[ge]);let Je=n.get(M[ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,Je,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let M=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Ge(A){return Math.min(s.maxSamples,A.samples)}function Ve(A){let M=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function me(A){let M=a.render.frame;u.get(A)!==M&&(u.set(A,M),A.update())}function ut(A,M){let O=A.colorSpace,$=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==jt&&O!==Ei&&(je.getTransfer(O)===ht?($!==xn||K!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}function Ae(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=F,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=J,this.setTextureCube=V,this.rebindTextures=De,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Ve}function $g(i,e){function t(n,s=Ei){let r,a=je.getTransfer(s);if(n===ai)return i.UNSIGNED_BYTE;if(n===Nc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Uc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Df)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pf)return i.BYTE;if(n===Lf)return i.SHORT;if(n===Tr)return i.UNSIGNED_SHORT;if(n===Dc)return i.INT;if(n===Qi)return i.UNSIGNED_INT;if(n===Dn)return i.FLOAT;if(n===zr)return i.HALF_FLOAT;if(n===Nf)return i.ALPHA;if(n===Uf)return i.RGB;if(n===xn)return i.RGBA;if(n===zf)return i.LUMINANCE;if(n===Of)return i.LUMINANCE_ALPHA;if(n===Cs)return i.DEPTH_COMPONENT;if(n===zs)return i.DEPTH_STENCIL;if(n===zc)return i.RED;if(n===Oc)return i.RED_INTEGER;if(n===Ff)return i.RG;if(n===Fc)return i.RG_INTEGER;if(n===Bc)return i.RGBA_INTEGER;if(n===Ia||n===Pa||n===La||n===Da)if(a===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===La)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Da)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rl||n===Il||n===Pl||n===Ll)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Rl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Il)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ll)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dl||n===Nl||n===Ul)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Dl||n===Nl)return a===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ul)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===zl||n===Ol||n===Fl||n===Bl||n===kl||n===Hl||n===Gl||n===Vl||n===Wl||n===Xl||n===ql||n===jl||n===Yl||n===$l)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===zl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ol)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Hl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Gl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ql)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===jl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yl)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$l)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Na||n===Zl||n===Kl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Na)return a===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Kl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Bf||n===Jl||n===Ql||n===ec)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Na)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Jl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ql)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ec)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Us?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var mc=class extends It{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},yt=class extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Zg={type:"move"},br=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new yt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Kg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,gc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Bt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Wn({vertexShader:Kg,fragmentShader:Jg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new We(new Hs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vc=class extends Ri{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null,v=new gc,m=t.getContextAttributes(),d=null,y=null,x=[],_=[],C=new Ue,E=null,w=new It;w.viewport=new tt;let R=new It;R.viewport=new tt;let S=[w,R],b=new mc,P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ee=x[j];return ee===void 0&&(ee=new br,x[j]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(j){let ee=x[j];return ee===void 0&&(ee=new br,x[j]=ee),ee.getGripSpace()},this.getHand=function(j){let ee=x[j];return ee===void 0&&(ee=new br,x[j]=ee),ee.getHandSpace()};function B(j){let ee=_.indexOf(j.inputSource);if(ee===-1)return;let pe=x[ee];pe!==void 0&&(pe.update(j.inputSource,j.frame,c||a),pe.dispatchEvent({type:j.type,data:j.inputSource}))}function G(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",X);for(let j=0;j<x.length;j++){let ee=_[j];ee!==null&&(_[j]=null,x[j].disconnect(ee))}P=null,F=null,v.reset(),e.setRenderTarget(d),p=null,f=null,h=null,s=null,y=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",G),s.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){let ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new oi(p.framebufferWidth,p.framebufferHeight,{format:xn,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,pe=null,se=null;m.depth&&(se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?zs:Cs,pe=m.stencil?Us:Qi);let ye={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(ye),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new oi(f.textureWidth,f.textureHeight,{format:xn,type:ai,depthTexture:new Va(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),qe.setContext(s),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function X(j){for(let ee=0;ee<j.removed.length;ee++){let pe=j.removed[ee],se=_.indexOf(pe);se>=0&&(_[se]=null,x[se].disconnect(pe))}for(let ee=0;ee<j.added.length;ee++){let pe=j.added[ee],se=_.indexOf(pe);if(se===-1){for(let we=0;we<x.length;we++)if(we>=_.length){_.push(pe),se=we;break}else if(_[we]===null){_[we]=pe,se=we;break}if(se===-1)break}let ye=x[se];ye&&ye.connect(pe)}}let W=new I,J=new I;function V(j,ee,pe){W.setFromMatrixPosition(ee.matrixWorld),J.setFromMatrixPosition(pe.matrixWorld);let se=W.distanceTo(J),ye=ee.projectionMatrix.elements,we=pe.projectionMatrix.elements,De=ye[14]/(ye[10]-1),nt=ye[14]/(ye[10]+1),Re=(ye[9]+1)/ye[5],Ye=(ye[9]-1)/ye[5],L=(ye[8]-1)/ye[0],Rt=(we[8]+1)/we[0],Ge=De*L,Ve=De*Rt,me=se/(-L+Rt),ut=me*-L;if(ee.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ut),j.translateZ(me),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),ye[10]===-1)j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let Ae=De+me,A=nt+me,M=Ge-ut,O=Ve+(se-ut),$=Re*nt/A*Ae,K=Ye*nt/A*Ae;j.projectionMatrix.makePerspective(M,O,$,K,Ae,A),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ie(j,ee){ee===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ee.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ee=j.near,pe=j.far;v.texture!==null&&(v.depthNear>0&&(ee=v.depthNear),v.depthFar>0&&(pe=v.depthFar)),b.near=R.near=w.near=ee,b.far=R.far=w.far=pe,(P!==b.near||F!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,F=b.far),w.layers.mask=j.layers.mask|2,R.layers.mask=j.layers.mask|4,b.layers.mask=w.layers.mask|R.layers.mask;let se=j.parent,ye=b.cameras;ie(b,se);for(let we=0;we<ye.length;we++)ie(ye[we],se);ye.length===2?V(b,w,R):b.projectionMatrix.copy(w.projectionMatrix),re(j,b,se)};function re(j,ee,pe){pe===null?j.matrix.copy(ee.matrixWorld):(j.matrix.copy(pe.matrixWorld),j.matrix.invert(),j.matrix.multiply(ee.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Bs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let de=null;function Ie(j,ee){if(u=ee.getViewerPose(c||a),g=ee,u!==null){let pe=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let se=!1;pe.length!==b.cameras.length&&(b.cameras.length=0,se=!0);for(let we=0;we<pe.length;we++){let De=pe[we],nt=null;if(p!==null)nt=p.getViewport(De);else{let Ye=h.getViewSubImage(f,De);nt=Ye.viewport,we===0&&(e.setRenderTargetTextures(y,Ye.colorTexture,f.ignoreDepthValues?void 0:Ye.depthStencilTexture),e.setRenderTarget(y))}let Re=S[we];Re===void 0&&(Re=new It,Re.layers.enable(we),Re.viewport=new tt,S[we]=Re),Re.matrix.fromArray(De.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(De.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(nt.x,nt.y,nt.width,nt.height),we===0&&(b.matrix.copy(Re.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),se===!0&&b.cameras.push(Re)}let ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")){let we=h.getDepthInformation(pe[0]);we&&we.isValid&&we.texture&&v.init(e,we,s.renderState)}}for(let pe=0;pe<x.length;pe++){let se=_[pe],ye=x[pe];se!==null&&ye!==void 0&&ye.update(se,ee,c||a)}de&&de(j,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}let qe=new jf;qe.setAnimationLoop(Ie),this.setAnimationLoop=function(j){de=j},this.dispose=function(){}}},ji=new Vn,Qg=new Ce;function ev(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,qf(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,y,x,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,_)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,y,x):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===tn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===tn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let y=e.get(d),x=y.envMap,_=y.envMapRotation;x&&(m.envMap.value=x,ji.copy(_),ji.x*=-1,ji.y*=-1,ji.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),m.envMapRotation.value.setFromMatrix4(Qg.makeRotationFromEuler(ji)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,y,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=x*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===tn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){let y=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function tv(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){let _=x.program;n.uniformBlockBinding(y,_)}function c(y,x){let _=s[y.id];_===void 0&&(g(y),_=u(y),s[y.id]=_,y.addEventListener("dispose",m));let C=x.program;n.updateUBOMapping(y,C);let E=e.render.frame;r[y.id]!==E&&(f(y),r[y.id]=E)}function u(y){let x=h();y.__bindingPointIndex=x;let _=i.createBuffer(),C=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,C,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,_),_}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let x=s[y.id],_=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let E=0,w=_.length;E<w;E++){let R=Array.isArray(_[E])?_[E]:[_[E]];for(let S=0,b=R.length;S<b;S++){let P=R[S];if(p(P,E,S,C)===!0){let F=P.__offset,B=Array.isArray(P.value)?P.value:[P.value],G=0;for(let X=0;X<B.length;X++){let W=B[X],J=v(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,F+G,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,G),G+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,x,_,C){let E=y.value,w=x+"_"+_;if(C[w]===void 0)return typeof E=="number"||typeof E=="boolean"?C[w]=E:C[w]=E.clone(),!0;{let R=C[w];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return C[w]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function g(y){let x=y.uniforms,_=0,C=16;for(let w=0,R=x.length;w<R;w++){let S=Array.isArray(x[w])?x[w]:[x[w]];for(let b=0,P=S.length;b<P;b++){let F=S[b],B=Array.isArray(F.value)?F.value:[F.value];for(let G=0,X=B.length;G<X;G++){let W=B[G],J=v(W),V=_%C,ie=V%J.boundary,re=V+ie;_+=ie,re!==0&&C-re<J.storage&&(_+=C-re),F.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=_,_+=J.storage}}}let E=_%C;return E>0&&(_+=C-E),y.__size=_,y.__cache={},this}function v(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){let x=y.target;x.removeEventListener("dispose",m);let _=a.indexOf(x.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function d(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}var Wa=class{constructor(e={}){let{canvas:t=r0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),v=new Int32Array(4),m=null,d=null,y=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=At,this.toneMapping=Ci,this.toneMappingExposure=1;let _=this,C=!1,E=0,w=0,R=null,S=-1,b=null,P=new tt,F=new tt,B=null,G=new Ee(0),X=0,W=t.width,J=t.height,V=1,ie=null,re=null,de=new tt(0,0,W,J),Ie=new tt(0,0,W,J),qe=!1,j=new Cr,ee=!1,pe=!1,se=new Ce,ye=new Ce,we=new I,De=new tt,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Re=!1;function Ye(){return R===null?V:1}let L=n;function Rt(T,U){return t.getContext(T,U)}try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",ue,!1),L===null){let U="webgl2";if(L=Rt(U,T),L===null)throw Rt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ge,Ve,me,ut,Ae,A,M,O,$,K,Y,Se,le,ge,Je,te,ve,Pe,Le,_e,$e,Be,ft,D;function oe(){Ge=new v2(L),Ge.init(),Be=new $g(L,Ge),Ve=new h2(L,Ge,e,Be),me=new qg(L,Ge),Ve.reverseDepthBuffer&&f&&me.buffers.depth.setReversed(!0),ut=new x2(L),Ae=new Dg,A=new Yg(L,Ge,me,Ae,Ve,Be,ut),M=new d2(_),O=new g2(_),$=new w0(L),ft=new c2(L,$),K=new _2(L,$,ut,ft),Y=new b2(L,K,$,ut),Le=new M2(L,Ve,A),te=new f2(Ae),Se=new Lg(_,M,O,Ge,Ve,ft,te),le=new ev(_,Ae),ge=new Ug,Je=new Hg(Ge),Pe=new l2(_,M,O,me,Y,p,l),ve=new Wg(_,Y,Ve),D=new tv(L,ut,Ve,me),_e=new u2(L,Ge,ut),$e=new y2(L,Ge,ut),ut.programs=Se.programs,_.capabilities=Ve,_.extensions=Ge,_.properties=Ae,_.renderLists=ge,_.shadowMap=ve,_.state=me,_.info=ut}oe();let q=new vc(_,L);this.xr=q,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let T=Ge.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Ge.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(T){T!==void 0&&(V=T,this.setSize(W,J,!1))},this.getSize=function(T){return T.set(W,J)},this.setSize=function(T,U,k=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=T,J=U,t.width=Math.floor(T*V),t.height=Math.floor(U*V),k===!0&&(t.style.width=T+"px",t.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(W*V,J*V).floor()},this.setDrawingBufferSize=function(T,U,k){W=T,J=U,V=k,t.width=Math.floor(T*k),t.height=Math.floor(U*k),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(de)},this.setViewport=function(T,U,k,H){T.isVector4?de.set(T.x,T.y,T.z,T.w):de.set(T,U,k,H),me.viewport(P.copy(de).multiplyScalar(V).round())},this.getScissor=function(T){return T.copy(Ie)},this.setScissor=function(T,U,k,H){T.isVector4?Ie.set(T.x,T.y,T.z,T.w):Ie.set(T,U,k,H),me.scissor(F.copy(Ie).multiplyScalar(V).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(T){me.setScissorTest(qe=T)},this.setOpaqueSort=function(T){ie=T},this.setTransparentSort=function(T){re=T},this.getClearColor=function(T){return T.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(T=!0,U=!0,k=!0){let H=0;if(T){let z=!1;if(R!==null){let ne=R.texture.format;z=ne===Bc||ne===Fc||ne===Oc}if(z){let ne=R.texture.type,he=ne===ai||ne===Qi||ne===Tr||ne===Us||ne===Nc||ne===Uc,xe=Pe.getClearColor(),Me=Pe.getClearAlpha(),Ne=xe.r,Oe=xe.g,be=xe.b;he?(g[0]=Ne,g[1]=Oe,g[2]=be,g[3]=Me,L.clearBufferuiv(L.COLOR,0,g)):(v[0]=Ne,v[1]=Oe,v[2]=be,v[3]=Me,L.clearBufferiv(L.COLOR,0,v))}else H|=L.COLOR_BUFFER_BIT}U&&(H|=L.DEPTH_BUFFER_BIT),k&&(H|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),ge.dispose(),Je.dispose(),Ae.dispose(),M.dispose(),O.dispose(),Y.dispose(),ft.dispose(),D.dispose(),Se.dispose(),q.dispose(),q.removeEventListener("sessionstart",$u),q.removeEventListener("sessionend",Zu),Hi.stop()};function Z(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let T=ut.autoReset,U=ve.enabled,k=ve.autoUpdate,H=ve.needsUpdate,z=ve.type;oe(),ut.autoReset=T,ve.enabled=U,ve.autoUpdate=k,ve.needsUpdate=H,ve.type=z}function ue(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ze(T){let U=T.target;U.removeEventListener("dispose",ze),Mt(U)}function Mt(T){Ht(T),Ae.remove(T)}function Ht(T){let U=Ae.get(T).programs;U!==void 0&&(U.forEach(function(k){Se.releaseProgram(k)}),T.isShaderMaterial&&Se.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,k,H,z,ne){U===null&&(U=nt);let he=z.isMesh&&z.matrixWorld.determinant()<0,xe=Xd(T,U,k,H,z);me.setMaterial(H,he);let Me=k.index,Ne=1;if(H.wireframe===!0){if(Me=K.getWireframeAttribute(k),Me===void 0)return;Ne=2}let Oe=k.drawRange,be=k.attributes.position,et=Oe.start*Ne,dt=(Oe.start+Oe.count)*Ne;ne!==null&&(et=Math.max(et,ne.start*Ne),dt=Math.min(dt,(ne.start+ne.count)*Ne)),Me!==null?(et=Math.max(et,0),dt=Math.min(dt,Me.count)):be!=null&&(et=Math.max(et,0),dt=Math.min(dt,be.count));let vt=dt-et;if(vt<0||vt===1/0)return;ft.setup(z,H,xe,k,Me);let Qt,it=_e;if(Me!==null&&(Qt=$.get(Me),it=$e,it.setIndex(Qt)),z.isMesh)H.wireframe===!0?(me.setLineWidth(H.wireframeLinewidth*Ye()),it.setMode(L.LINES)):it.setMode(L.TRIANGLES);else if(z.isLine){let Te=H.linewidth;Te===void 0&&(Te=1),me.setLineWidth(Te*Ye()),z.isLineSegments?it.setMode(L.LINES):z.isLineLoop?it.setMode(L.LINE_LOOP):it.setMode(L.LINE_STRIP)}else z.isPoints?it.setMode(L.POINTS):z.isSprite&&it.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)it.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))it.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Te=z._multiDrawStarts,Yn=z._multiDrawCounts,st=z._multiDrawCount,Cn=Me?$.get(Me).bytesPerElement:1,cs=Ae.get(H).currentProgram.getUniforms();for(let an=0;an<st;an++)cs.setValue(L,"_gl_DrawID",an),it.render(Te[an]/Cn,Yn[an])}else if(z.isInstancedMesh)it.renderInstances(et,vt,z.count);else if(k.isInstancedBufferGeometry){let Te=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Yn=Math.min(k.instanceCount,Te);it.renderInstances(et,vt,Yn)}else it.render(et,vt)};function at(T,U,k){T.transparent===!0&&T.side===wt&&T.forceSinglePass===!1?(T.side=tn,T.needsUpdate=!0,na(T,U,k),T.side=Gn,T.needsUpdate=!0,na(T,U,k),T.side=wt):na(T,U,k)}this.compile=function(T,U,k=null){k===null&&(k=T),d=Je.get(k),d.init(U),x.push(d),k.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),T!==k&&T.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights();let H=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ne=z.material;if(ne)if(Array.isArray(ne))for(let he=0;he<ne.length;he++){let xe=ne[he];at(xe,k,z),H.add(xe)}else at(ne,k,z),H.add(ne)}),x.pop(),d=null,H},this.compileAsync=function(T,U,k=null){let H=this.compile(T,U,k);return new Promise(z=>{function ne(){if(H.forEach(function(he){Ae.get(he).currentProgram.isReady()&&H.delete(he)}),H.size===0){z(T);return}setTimeout(ne,10)}Ge.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let wn=null;function jn(T){wn&&wn(T)}function $u(){Hi.stop()}function Zu(){Hi.start()}let Hi=new jf;Hi.setAnimationLoop(jn),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(T){wn=T,q.setAnimationLoop(T),T===null?Hi.stop():Hi.start()},q.addEventListener("sessionstart",$u),q.addEventListener("sessionend",Zu),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,U,R),d=Je.get(T,x.length),d.init(U),x.push(d),ye.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),j.setFromProjectionMatrix(ye),pe=this.localClippingEnabled,ee=te.init(this.clippingPlanes,pe),m=ge.get(T,y.length),m.init(),y.push(m),q.enabled===!0&&q.isPresenting===!0){let ne=_.xr.getDepthSensingMesh();ne!==null&&Bo(ne,U,-1/0,_.sortObjects)}Bo(T,U,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ie,re),Re=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Re&&Pe.addToRenderList(m,T),this.info.render.frame++,ee===!0&&te.beginShadows();let k=d.state.shadowsArray;ve.render(k,T,U),ee===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=m.opaque,z=m.transmissive;if(d.setupLights(),U.isArrayCamera){let ne=U.cameras;if(z.length>0)for(let he=0,xe=ne.length;he<xe;he++){let Me=ne[he];Ju(H,z,T,Me)}Re&&Pe.render(T);for(let he=0,xe=ne.length;he<xe;he++){let Me=ne[he];Ku(m,T,Me,Me.viewport)}}else z.length>0&&Ju(H,z,T,U),Re&&Pe.render(T),Ku(m,T,U);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(_,T,U),ft.resetDefaultState(),S=-1,b=null,x.pop(),x.length>0?(d=x[x.length-1],ee===!0&&te.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Bo(T,U,k,H){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)k=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||j.intersectsSprite(T)){H&&De.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ye);let he=Y.update(T),xe=T.material;xe.visible&&m.push(T,he,xe,k,De.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||j.intersectsObject(T))){let he=Y.update(T),xe=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),De.copy(T.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),De.copy(he.boundingSphere.center)),De.applyMatrix4(T.matrixWorld).applyMatrix4(ye)),Array.isArray(xe)){let Me=he.groups;for(let Ne=0,Oe=Me.length;Ne<Oe;Ne++){let be=Me[Ne],et=xe[be.materialIndex];et&&et.visible&&m.push(T,he,et,k,De.z,be)}}else xe.visible&&m.push(T,he,xe,k,De.z,null)}}let ne=T.children;for(let he=0,xe=ne.length;he<xe;he++)Bo(ne[he],U,k,H)}function Ku(T,U,k,H){let z=T.opaque,ne=T.transmissive,he=T.transparent;d.setupLightsView(k),ee===!0&&te.setGlobalState(_.clippingPlanes,k),H&&me.viewport(P.copy(H)),z.length>0&&ta(z,U,k),ne.length>0&&ta(ne,U,k),he.length>0&&ta(he,U,k),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Ju(T,U,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[H.id]===void 0&&(d.state.transmissionRenderTarget[H.id]=new oi(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?zr:ai,minFilter:Hn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));let ne=d.state.transmissionRenderTarget[H.id],he=H.viewport||P;ne.setSize(he.z,he.w);let xe=_.getRenderTarget();_.setRenderTarget(ne),_.getClearColor(G),X=_.getClearAlpha(),X<1&&_.setClearColor(16777215,.5),_.clear(),Re&&Pe.render(k);let Me=_.toneMapping;_.toneMapping=Ci;let Ne=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),d.setupLightsView(H),ee===!0&&te.setGlobalState(_.clippingPlanes,H),ta(T,k,H),A.updateMultisampleRenderTarget(ne),A.updateRenderTargetMipmap(ne),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let be=0,et=U.length;be<et;be++){let dt=U[be],vt=dt.object,Qt=dt.geometry,it=dt.material,Te=dt.group;if(it.side===wt&&vt.layers.test(H.layers)){let Yn=it.side;it.side=tn,it.needsUpdate=!0,Qu(vt,k,H,Qt,it,Te),it.side=Yn,it.needsUpdate=!0,Oe=!0}}Oe===!0&&(A.updateMultisampleRenderTarget(ne),A.updateRenderTargetMipmap(ne))}_.setRenderTarget(xe),_.setClearColor(G,X),Ne!==void 0&&(H.viewport=Ne),_.toneMapping=Me}function ta(T,U,k){let H=U.isScene===!0?U.overrideMaterial:null;for(let z=0,ne=T.length;z<ne;z++){let he=T[z],xe=he.object,Me=he.geometry,Ne=H===null?he.material:H,Oe=he.group;xe.layers.test(k.layers)&&Qu(xe,U,k,Me,Ne,Oe)}}function Qu(T,U,k,H,z,ne){T.onBeforeRender(_,U,k,H,z,ne),T.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(_,U,k,H,T,ne),z.transparent===!0&&z.side===wt&&z.forceSinglePass===!1?(z.side=tn,z.needsUpdate=!0,_.renderBufferDirect(k,U,H,z,T,ne),z.side=Gn,z.needsUpdate=!0,_.renderBufferDirect(k,U,H,z,T,ne),z.side=wt):_.renderBufferDirect(k,U,H,z,T,ne),T.onAfterRender(_,U,k,H,z,ne)}function na(T,U,k){U.isScene!==!0&&(U=nt);let H=Ae.get(T),z=d.state.lights,ne=d.state.shadowsArray,he=z.state.version,xe=Se.getParameters(T,z.state,ne,U,k),Me=Se.getProgramCacheKey(xe),Ne=H.programs;H.environment=T.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(T.isMeshStandardMaterial?O:M).get(T.envMap||H.environment),H.envMapRotation=H.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Ne===void 0&&(T.addEventListener("dispose",ze),Ne=new Map,H.programs=Ne);let Oe=Ne.get(Me);if(Oe!==void 0){if(H.currentProgram===Oe&&H.lightsStateVersion===he)return th(T,xe),Oe}else xe.uniforms=Se.getUniforms(T),T.onBeforeCompile(xe,_),Oe=Se.acquireProgram(xe,Me),Ne.set(Me,Oe),H.uniforms=xe.uniforms;let be=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(be.clippingPlanes=te.uniform),th(T,xe),H.needsLights=jd(T),H.lightsStateVersion=he,H.needsLights&&(be.ambientLightColor.value=z.state.ambient,be.lightProbe.value=z.state.probe,be.directionalLights.value=z.state.directional,be.directionalLightShadows.value=z.state.directionalShadow,be.spotLights.value=z.state.spot,be.spotLightShadows.value=z.state.spotShadow,be.rectAreaLights.value=z.state.rectArea,be.ltc_1.value=z.state.rectAreaLTC1,be.ltc_2.value=z.state.rectAreaLTC2,be.pointLights.value=z.state.point,be.pointLightShadows.value=z.state.pointShadow,be.hemisphereLights.value=z.state.hemi,be.directionalShadowMap.value=z.state.directionalShadowMap,be.directionalShadowMatrix.value=z.state.directionalShadowMatrix,be.spotShadowMap.value=z.state.spotShadowMap,be.spotLightMatrix.value=z.state.spotLightMatrix,be.spotLightMap.value=z.state.spotLightMap,be.pointShadowMap.value=z.state.pointShadowMap,be.pointShadowMatrix.value=z.state.pointShadowMatrix),H.currentProgram=Oe,H.uniformsList=null,Oe}function eh(T){if(T.uniformsList===null){let U=T.currentProgram.getUniforms();T.uniformsList=Is.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function th(T,U){let k=Ae.get(T);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function Xd(T,U,k,H,z){U.isScene!==!0&&(U=nt),A.resetTextureUnits();let ne=U.fog,he=H.isMeshStandardMaterial?U.environment:null,xe=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:jt,Me=(H.isMeshStandardMaterial?O:M).get(H.envMap||he),Ne=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Oe=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),be=!!k.morphAttributes.position,et=!!k.morphAttributes.normal,dt=!!k.morphAttributes.color,vt=Ci;H.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(vt=_.toneMapping);let Qt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,it=Qt!==void 0?Qt.length:0,Te=Ae.get(H),Yn=d.state.lights;if(ee===!0&&(pe===!0||T!==b)){let _n=T===b&&H.id===S;te.setState(H,T,_n)}let st=!1;H.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Yn.state.version||Te.outputColorSpace!==xe||z.isBatchedMesh&&Te.batching===!1||!z.isBatchedMesh&&Te.batching===!0||z.isBatchedMesh&&Te.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Te.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Te.instancing===!1||!z.isInstancedMesh&&Te.instancing===!0||z.isSkinnedMesh&&Te.skinning===!1||!z.isSkinnedMesh&&Te.skinning===!0||z.isInstancedMesh&&Te.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Te.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Te.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Te.instancingMorph===!1&&z.morphTexture!==null||Te.envMap!==Me||H.fog===!0&&Te.fog!==ne||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==te.numPlanes||Te.numIntersection!==te.numIntersection)||Te.vertexAlphas!==Ne||Te.vertexTangents!==Oe||Te.morphTargets!==be||Te.morphNormals!==et||Te.morphColors!==dt||Te.toneMapping!==vt||Te.morphTargetsCount!==it)&&(st=!0):(st=!0,Te.__version=H.version);let Cn=Te.currentProgram;st===!0&&(Cn=na(H,U,z));let cs=!1,an=!1,or=!1,_t=Cn.getUniforms(),Bn=Te.uniforms;if(me.useProgram(Cn.program)&&(cs=!0,an=!0,or=!0),H.id!==S&&(S=H.id,an=!0),cs||b!==T){me.buffers.depth.getReversed()?(se.copy(T.projectionMatrix),o0(se),l0(se),_t.setValue(L,"projectionMatrix",se)):_t.setValue(L,"projectionMatrix",T.projectionMatrix),_t.setValue(L,"viewMatrix",T.matrixWorldInverse);let vi=_t.map.cameraPosition;vi!==void 0&&vi.setValue(L,we.setFromMatrixPosition(T.matrixWorld)),Ve.logarithmicDepthBuffer&&_t.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&_t.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,an=!0,or=!0)}if(z.isSkinnedMesh){_t.setOptional(L,z,"bindMatrix"),_t.setOptional(L,z,"bindMatrixInverse");let _n=z.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),_t.setValue(L,"boneTexture",_n.boneTexture,A))}z.isBatchedMesh&&(_t.setOptional(L,z,"batchingTexture"),_t.setValue(L,"batchingTexture",z._matricesTexture,A),_t.setOptional(L,z,"batchingIdTexture"),_t.setValue(L,"batchingIdTexture",z._indirectTexture,A),_t.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&_t.setValue(L,"batchingColorTexture",z._colorsTexture,A));let lr=k.morphAttributes;if((lr.position!==void 0||lr.normal!==void 0||lr.color!==void 0)&&Le.update(z,k,Cn),(an||Te.receiveShadow!==z.receiveShadow)&&(Te.receiveShadow=z.receiveShadow,_t.setValue(L,"receiveShadow",z.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Bn.envMap.value=Me,Bn.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(Bn.envMapIntensity.value=U.environmentIntensity),an&&(_t.setValue(L,"toneMappingExposure",_.toneMappingExposure),Te.needsLights&&qd(Bn,or),ne&&H.fog===!0&&le.refreshFogUniforms(Bn,ne),le.refreshMaterialUniforms(Bn,H,V,J,d.state.transmissionRenderTarget[T.id]),Is.upload(L,eh(Te),Bn,A)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Is.upload(L,eh(Te),Bn,A),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&_t.setValue(L,"center",z.center),_t.setValue(L,"modelViewMatrix",z.modelViewMatrix),_t.setValue(L,"normalMatrix",z.normalMatrix),_t.setValue(L,"modelMatrix",z.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let _n=H.uniformsGroups;for(let vi=0,_i=_n.length;vi<_i;vi++){let nh=_n[vi];D.update(nh,Cn),D.bind(nh,Cn)}}return Cn}function qd(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function jd(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,U,k){Ae.get(T.texture).__webglTexture=U,Ae.get(T.depthTexture).__webglTexture=k;let H=Ae.get(T);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){let k=Ae.get(T);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,k=0){R=T,E=U,w=k;let H=!0,z=null,ne=!1,he=!1;if(T){let Me=Ae.get(T);if(Me.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(L.FRAMEBUFFER,null),H=!1;else if(Me.__webglFramebuffer===void 0)A.setupRenderTarget(T);else if(Me.__hasExternalTextures)A.rebindTextures(T,Ae.get(T.texture).__webglTexture,Ae.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let be=T.depthTexture;if(Me.__boundDepthTexture!==be){if(be!==null&&Ae.has(be)&&(T.width!==be.image.width||T.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(T)}}let Ne=T.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(he=!0);let Oe=Ae.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Oe[U])?z=Oe[U][k]:z=Oe[U],ne=!0):T.samples>0&&A.useMultisampledRTT(T)===!1?z=Ae.get(T).__webglMultisampledFramebuffer:Array.isArray(Oe)?z=Oe[k]:z=Oe,P.copy(T.viewport),F.copy(T.scissor),B=T.scissorTest}else P.copy(de).multiplyScalar(V).floor(),F.copy(Ie).multiplyScalar(V).floor(),B=qe;if(me.bindFramebuffer(L.FRAMEBUFFER,z)&&H&&me.drawBuffers(T,z),me.viewport(P),me.scissor(F),me.setScissorTest(B),ne){let Me=Ae.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,Me.__webglTexture,k)}else if(he){let Me=Ae.get(T.texture),Ne=U||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Me.__webglTexture,k||0,Ne)}S=-1},this.readRenderTargetPixels=function(T,U,k,H,z,ne,he){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Ae.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&he!==void 0&&(xe=xe[he]),xe){me.bindFramebuffer(L.FRAMEBUFFER,xe);try{let Me=T.texture,Ne=Me.format,Oe=Me.type;if(!Ve.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-H&&k>=0&&k<=T.height-z&&L.readPixels(U,k,H,z,Be.convert(Ne),Be.convert(Oe),ne)}finally{let Me=R!==null?Ae.get(R).__webglFramebuffer:null;me.bindFramebuffer(L.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(T,U,k,H,z,ne,he){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Ae.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&he!==void 0&&(xe=xe[he]),xe){let Me=T.texture,Ne=Me.format,Oe=Me.type;if(!Ve.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=T.width-H&&k>=0&&k<=T.height-z){me.bindFramebuffer(L.FRAMEBUFFER,xe);let be=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,be),L.bufferData(L.PIXEL_PACK_BUFFER,ne.byteLength,L.STREAM_READ),L.readPixels(U,k,H,z,Be.convert(Ne),Be.convert(Oe),0);let et=R!==null?Ae.get(R).__webglFramebuffer:null;me.bindFramebuffer(L.FRAMEBUFFER,et);let dt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await a0(L,dt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,be),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ne),L.deleteBuffer(be),L.deleteSync(dt),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,U=null,k=0){T.isTexture!==!0&&(vr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,T=arguments[1]);let H=Math.pow(2,-k),z=Math.floor(T.image.width*H),ne=Math.floor(T.image.height*H),he=U!==null?U.x:0,xe=U!==null?U.y:0;A.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,he,xe,z,ne),me.unbindTexture()},this.copyTextureToTexture=function(T,U,k=null,H=null,z=0){T.isTexture!==!0&&(vr("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,T=arguments[1],U=arguments[2],z=arguments[3]||0,k=null);let ne,he,xe,Me,Ne,Oe,be,et,dt,vt=T.isCompressedTexture?T.mipmaps[z]:T.image;k!==null?(ne=k.max.x-k.min.x,he=k.max.y-k.min.y,xe=k.isBox3?k.max.z-k.min.z:1,Me=k.min.x,Ne=k.min.y,Oe=k.isBox3?k.min.z:0):(ne=vt.width,he=vt.height,xe=vt.depth||1,Me=0,Ne=0,Oe=0),H!==null?(be=H.x,et=H.y,dt=H.z):(be=0,et=0,dt=0);let Qt=Be.convert(U.format),it=Be.convert(U.type),Te;U.isData3DTexture?(A.setTexture3D(U,0),Te=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(A.setTexture2DArray(U,0),Te=L.TEXTURE_2D_ARRAY):(A.setTexture2D(U,0),Te=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);let Yn=L.getParameter(L.UNPACK_ROW_LENGTH),st=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Cn=L.getParameter(L.UNPACK_SKIP_PIXELS),cs=L.getParameter(L.UNPACK_SKIP_ROWS),an=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,vt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,vt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Me),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ne),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Oe);let or=T.isDataArrayTexture||T.isData3DTexture,_t=U.isDataArrayTexture||U.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let Bn=Ae.get(T),lr=Ae.get(U),_n=Ae.get(Bn.__renderTarget),vi=Ae.get(lr.__renderTarget);me.bindFramebuffer(L.READ_FRAMEBUFFER,_n.__webglFramebuffer),me.bindFramebuffer(L.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let _i=0;_i<xe;_i++)or&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ae.get(T).__webglTexture,z,Oe+_i),T.isDepthTexture?(_t&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ae.get(U).__webglTexture,z,dt+_i),L.blitFramebuffer(Me,Ne,ne,he,be,et,ne,he,L.DEPTH_BUFFER_BIT,L.NEAREST)):_t?L.copyTexSubImage3D(Te,z,be,et,dt+_i,Me,Ne,ne,he):L.copyTexSubImage2D(Te,z,be,et,dt+_i,Me,Ne,ne,he);me.bindFramebuffer(L.READ_FRAMEBUFFER,null),me.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else _t?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(Te,z,be,et,dt,ne,he,xe,Qt,it,vt.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(Te,z,be,et,dt,ne,he,xe,Qt,vt.data):L.texSubImage3D(Te,z,be,et,dt,ne,he,xe,Qt,it,vt):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,z,be,et,ne,he,Qt,it,vt.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,z,be,et,vt.width,vt.height,Qt,vt.data):L.texSubImage2D(L.TEXTURE_2D,z,be,et,ne,he,Qt,it,vt);L.pixelStorei(L.UNPACK_ROW_LENGTH,Yn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,st),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Cn),L.pixelStorei(L.UNPACK_SKIP_ROWS,cs),L.pixelStorei(L.UNPACK_SKIP_IMAGES,an),z===0&&U.generateMipmaps&&L.generateMipmap(Te),me.unbindTexture()},this.copyTextureToTexture3D=function(T,U,k=null,H=null,z=0){return T.isTexture!==!0&&(vr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,H=arguments[1]||null,T=arguments[2],U=arguments[3],z=arguments[4]||0),vr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,U,k,H,z)},this.initRenderTarget=function(T){Ae.get(T).__webglFramebuffer===void 0&&A.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),me.unbindTexture()},this.resetState=function(){E=0,w=0,R=null,me.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}};var Xa=class extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Rr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=tc,this.updateRanges=[],this.version=0,this.uuid=Nn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Yt=new I,Ir=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ln(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ln(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ln(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ln(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ot(t,this.array),n=ot(n,this.array),s=ot(s,this.array),r=ot(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var af=new I,of=new tt,lf=new tt,nv=new I,cf=new Ce,Sa=new I,dl=new un,uf=new Ce,pl=new es,qa=class extends We{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=lh,this.bindMatrix=new Ce,this.bindMatrixInverse=new Ce,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Mn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Sa),this.boundingBox.expandByPoint(Sa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new un),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Sa),this.boundingSphere.expandByPoint(Sa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dl.copy(this.boundingSphere),dl.applyMatrix4(s),e.ray.intersectsSphere(dl)!==!1&&(uf.copy(s).invert(),pl.copy(e.ray).applyMatrix4(uf),!(this.boundingBox!==null&&pl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,pl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new tt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===lh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Pp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;of.fromBufferAttribute(s.attributes.skinIndex,e),lf.fromBufferAttribute(s.attributes.skinWeight,e),af.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=lf.getComponent(r);if(a!==0){let o=of.getComponent(r);cf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(nv.copy(af).applyMatrix4(cf),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},Pr=class extends xt{constructor(){super(),this.isBone=!0,this.type="Bone"}},ja=class extends Bt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Xt,u=Xt,h,f){super(null,a,o,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},hf=new Ce,iv=new Ce,Ya=class i{constructor(e=[],t=[]){this.uuid=Nn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ce)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ce;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:iv;hf.multiplyMatrices(o,t[r]),hf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ja(t,e,e,xn,Dn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Pr),this.bones.push(a),this.boneInverses.push(new Ce().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},li=class extends Pt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ts=new Ce,ff=new Ce,Ta=[],df=new Mn,sv=new Ce,dr=new We,pr=new un,ts=class extends We{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new li(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,sv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Mn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ts),df.copy(e.boundingBox).applyMatrix4(Ts),this.boundingBox.union(df)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ts),pr.copy(e.boundingSphere).applyMatrix4(Ts),this.boundingSphere.union(pr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(dr.geometry=this.geometry,dr.material=this.material,dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pr.copy(this.boundingSphere),pr.applyMatrix4(n),e.ray.intersectsSphere(pr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ts),ff.multiplyMatrices(n,Ts),dr.matrixWorld=ff,dr.raycast(e,Ta);for(let a=0,o=Ta.length;a<o;a++){let l=Ta[a];l.instanceId=r,l.object=this,t.push(l)}Ta.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new li(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ja(new Float32Array(s*this.count),s,this.count,zc,Dn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var qt=class extends hn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},$a=new I,Za=new I,pf=new Ce,mr=new es,Ea=new un,ml=new I,mf=new I,Un=class extends xt{constructor(e=new lt,t=new qt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)$a.fromBufferAttribute(t,s-1),Za.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=$a.distanceTo(Za);e.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(s),Ea.radius+=r,e.ray.intersectsSphere(Ea)===!1)return;pf.copy(s).invert(),mr.copy(e.ray).applyMatrix4(pf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=c){let d=u.getX(v),y=u.getX(v+1),x=Aa(this,e,mr,l,d,y);x&&t.push(x)}if(this.isLineLoop){let v=u.getX(g-1),m=u.getX(p),d=Aa(this,e,mr,l,v,m);d&&t.push(d)}}else{let p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=c){let d=Aa(this,e,mr,l,v,v+1);d&&t.push(d)}if(this.isLineLoop){let v=Aa(this,e,mr,l,g-1,p);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Aa(i,e,t,n,s,r){let a=i.geometry.attributes.position;if($a.fromBufferAttribute(a,s),Za.fromBufferAttribute(a,r),t.distanceSqToSegment($a,Za,ml,mf)>n)return;ml.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(ml);if(!(l<e.near||l>e.far))return{distance:l,point:mf.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var gf=new I,vf=new I,ci=class extends Un{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)gf.fromBufferAttribute(t,s),vf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+gf.distanceTo(vf);e.setAttribute("lineDistance",new Qe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ns=class extends Un{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Lr=class extends hn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},_f=new Ce,_c=new es,wa=new un,Ca=new I,Ka=class extends xt{constructor(e=new lt,t=new Lr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(s),wa.radius+=r,e.ray.intersectsSphere(wa)===!1)return;_f.copy(s).invert(),_c.copy(e.ray).applyMatrix4(_f);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,v=p;g<v;g++){let m=c.getX(g);Ca.fromBufferAttribute(h,m),yf(Ca,m,l,s,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=f,v=p;g<v;g++)Ca.fromBufferAttribute(h,g),yf(Ca,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function yf(i,e,t,n,s,r,a){let o=_c.distanceSqToPoint(i);if(o<t){let l=new I;_c.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ja=class extends Bt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Qa=class i extends lt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new I,u=new Ue;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){let p=n+h/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Qe(a,3)),this.setAttribute("normal",new Qe(o,3)),this.setAttribute("uv",new Qe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Vs=class i extends lt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],p=[],g=0,v=[],m=n/2,d=0;y(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Qe(h,3)),this.setAttribute("normal",new Qe(f,3)),this.setAttribute("uv",new Qe(p,2));function y(){let _=new I,C=new I,E=0,w=(t-e)/n;for(let R=0;R<=r;R++){let S=[],b=R/r,P=b*(t-e)+e;for(let F=0;F<=s;F++){let B=F/s,G=B*l+o,X=Math.sin(G),W=Math.cos(G);C.x=P*X,C.y=-b*n+m,C.z=P*W,h.push(C.x,C.y,C.z),_.set(X,w,W).normalize(),f.push(_.x,_.y,_.z),p.push(B,1-b),S.push(g++)}v.push(S)}for(let R=0;R<s;R++)for(let S=0;S<r;S++){let b=v[S][R],P=v[S+1][R],F=v[S+1][R+1],B=v[S][R+1];(e>0||S!==0)&&(u.push(b,P,B),E+=3),(t>0||S!==r-1)&&(u.push(P,F,B),E+=3)}c.addGroup(d,E,0),d+=E}function x(_){let C=g,E=new Ue,w=new I,R=0,S=_===!0?e:t,b=_===!0?1:-1;for(let F=1;F<=s;F++)h.push(0,m*b,0),f.push(0,b,0),p.push(.5,.5),g++;let P=g;for(let F=0;F<=s;F++){let G=F/s*l+o,X=Math.cos(G),W=Math.sin(G);w.x=S*W,w.y=m*b,w.z=S*X,h.push(w.x,w.y,w.z),f.push(0,b,0),E.x=X*.5+.5,E.y=W*.5*b+.5,p.push(E.x,E.y),g++}for(let F=0;F<s;F++){let B=C+F,G=P+F;_===!0?u.push(G,G+1,B):u.push(G+1,G,B),R+=3}c.addGroup(d,R,_===!0?1:2),d+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var yc=class i extends lt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new Qe(r,3)),this.setAttribute("normal",new Qe(r.slice(),3)),this.setAttribute("uv",new Qe(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let x=new I,_=new I,C=new I;for(let E=0;E<t.length;E+=3)p(t[E+0],x),p(t[E+1],_),p(t[E+2],C),l(x,_,C,y)}function l(y,x,_,C){let E=C+1,w=[];for(let R=0;R<=E;R++){w[R]=[];let S=y.clone().lerp(_,R/E),b=x.clone().lerp(_,R/E),P=E-R;for(let F=0;F<=P;F++)F===0&&R===E?w[R][F]=S:w[R][F]=S.clone().lerp(b,F/P)}for(let R=0;R<E;R++)for(let S=0;S<2*(E-R)-1;S++){let b=Math.floor(S/2);S%2===0?(f(w[R][b+1]),f(w[R+1][b]),f(w[R][b])):(f(w[R][b+1]),f(w[R+1][b+1]),f(w[R+1][b]))}}function c(y){let x=new I;for(let _=0;_<r.length;_+=3)x.x=r[_+0],x.y=r[_+1],x.z=r[_+2],x.normalize().multiplyScalar(y),r[_+0]=x.x,r[_+1]=x.y,r[_+2]=x.z}function u(){let y=new I;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];let _=m(y)/2/Math.PI+.5,C=d(y)/Math.PI+.5;a.push(_,1-C)}g(),h()}function h(){for(let y=0;y<a.length;y+=6){let x=a[y+0],_=a[y+2],C=a[y+4],E=Math.max(x,_,C),w=Math.min(x,_,C);E>.9&&w<.1&&(x<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),C<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function p(y,x){let _=y*3;x.x=e[_+0],x.y=e[_+1],x.z=e[_+2]}function g(){let y=new I,x=new I,_=new I,C=new I,E=new Ue,w=new Ue,R=new Ue;for(let S=0,b=0;S<r.length;S+=9,b+=6){y.set(r[S+0],r[S+1],r[S+2]),x.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),E.set(a[b+0],a[b+1]),w.set(a[b+2],a[b+3]),R.set(a[b+4],a[b+5]),C.copy(y).add(x).add(_).divideScalar(3);let P=m(C);v(E,b+0,y,P),v(w,b+2,x,P),v(R,b+4,_,P)}}function v(y,x,_,C){C<0&&y.x===1&&(a[x]=y.x-1),_.x===0&&_.z===0&&(a[x]=C/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function d(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Ws=class i extends yc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var is=class i extends lt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],h=e,f=(t-e)/s,p=new I,g=new Ue;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){let d=r+m/n*a;p.x=h*Math.cos(d),p.y=h*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}h+=f}for(let v=0;v<s;v++){let m=v*(n+1);for(let d=0;d<n;d++){let y=d+m,x=y,_=y+n+1,C=y+n+2,E=y+1;o.push(x,_,E),o.push(_,C,E)}}this.setIndex(o),this.setAttribute("position",new Qe(l,3)),this.setAttribute("normal",new Qe(c,3)),this.setAttribute("uv",new Qe(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Xs=class i extends lt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],h=new I,f=new I,p=[],g=[],v=[],m=[];for(let d=0;d<=n;d++){let y=[],x=d/n,_=0;d===0&&a===0?_=.5/t:d===n&&l===Math.PI&&(_=-.5/t);for(let C=0;C<=t;C++){let E=C/t;h.x=-e*Math.cos(s+E*r)*Math.sin(a+x*o),h.y=e*Math.cos(a+x*o),h.z=e*Math.sin(s+E*r)*Math.sin(a+x*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),m.push(E+_,1-x),y.push(c++)}u.push(y)}for(let d=0;d<n;d++)for(let y=0;y<t;y++){let x=u[d][y+1],_=u[d][y],C=u[d+1][y],E=u[d+1][y+1];(d!==0||a>0)&&p.push(x,_,E),(d!==n-1||l<Math.PI)&&p.push(_,C,E)}this.setIndex(p),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(v,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Dr=class extends lt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,s=new I,r=new I;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let h=l[c],f=h.start,p=h.count;for(let g=f,v=f+p;g<v;g+=3)for(let m=0;m<3;m++){let d=o.getX(g+m),y=o.getX(g+(m+1)%3);s.fromBufferAttribute(a,d),r.fromBufferAttribute(a,y),xf(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let u=3*o+c,h=3*o+(c+1)%3;s.fromBufferAttribute(a,u),r.fromBufferAttribute(a,h),xf(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Qe(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function xf(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}var fn=class extends hn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hf,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},dn=class extends fn{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Ra(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function rv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function av(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Mf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function Jf(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Ii=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},xc=class extends Ii{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ch,endingEnd:ch}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case uh:r=e,o=2*t-n;break;case hh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case uh:a=e,l=2*n-t;break;case hh:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,d=-f*m+2*f*v-f*g,y=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,x=(-1-p)*m+(1.5+p)*v+.5*g,_=p*m-p*v;for(let C=0;C!==o;++C)r[C]=d*a[u+C]+y*a[c+C]+x*a[l+C]+_*a[h+C];return r}},Mc=class extends Ii{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*h+a[l+f]*u;return r}},bc=class extends Ii{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},bn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ra(t,this.TimeBufferType),this.values=Ra(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ra(e.times,Array),values:Ra(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new bc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Mc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Os:t=this.InterpolantFactoryMethodDiscrete;break;case Fs:t=this.InterpolantFactoryMethodLinear;break;case ko:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Os;case this.InterpolantFactoryMethodLinear:return Fs;case this.InterpolantFactoryMethodSmooth:return ko}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&rv(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ko,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let h=o*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){let v=t[h+g];if(v!==t[f+g]||v!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=Fs;var Pi=class extends bn{constructor(e,t,n){super(e,t,n)}};Pi.prototype.ValueTypeName="bool";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=Os;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var eo=class extends bn{};eo.prototype.ValueTypeName="color";var ui=class extends bn{};ui.prototype.ValueTypeName="number";var Sc=class extends Ii{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)cn.slerpFlat(r,0,a,c-o,a,c,l);return r}},hi=class extends bn{InterpolantFactoryMethodLinear(e){return new Sc(this.times,this.values,this.getValueSize(),e)}};hi.prototype.ValueTypeName="quaternion";hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Li=class extends bn{constructor(e,t,n){super(e,t,n)}};Li.prototype.ValueTypeName="string";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=Os;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var fi=class extends bn{};fi.prototype.ValueTypeName="vector";var to=class{constructor(e="",t=-1,n=[],s=Lp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Nn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(lv(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(bn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let u=av(l);l=Mf(l,1,u),c=Mf(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new ui(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c.name.match(r);if(u&&u.length>1){let h=u[1],f=s[h];f||(s[h]=f=[]),f.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,f,p,g,v){if(p.length!==0){let m=[],d=[];Jf(p,m,d,g),m.length!==0&&v.push(new h(f,m,d))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let p={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let v=0;v<f[g].morphTargets.length;v++)p[f[g].morphTargets[v]]=-1;for(let v in p){let m=[],d=[];for(let y=0;y!==f[g].morphTargets.length;++y){let x=f[g];m.push(x.time),d.push(x.morphTarget===v?1:0)}s.push(new ui(".morphTargetInfluence["+v+"]",m,d))}l=p.length*a}else{let p=".bones["+t[h].name+"]";n(fi,p+".position",f,"pos",s),n(hi,p+".quaternion",f,"rot",s),n(fi,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function ov(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ui;case"vector":case"vector2":case"vector3":case"vector4":return fi;case"color":return eo;case"quaternion":return hi;case"bool":case"boolean":return Pi;case"string":return Li}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function lv(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=ov(i.type);if(i.times===void 0){let t=[],n=[];Jf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Ai={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Tc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}},cv=new Tc,di=class{constructor(e){this.manager=e!==void 0?e:cv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};di.DEFAULT_MATERIAL_NAME="__DEFAULT";var ei={},Ec=class extends Error{constructor(e,t){super(e),this.response=t}},Nr=class extends di{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ai.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ei[e]!==void 0){ei[e].push({onLoad:t,onProgress:n,onError:s});return}ei[e]=[],ei[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=ei[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0,v=0,m=new ReadableStream({start(d){y();function y(){h.read().then(({done:x,value:_})=>{if(x)d.close();else{v+=_.byteLength;let C=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let E=0,w=u.length;E<w;E++){let R=u[E];R.onProgress&&R.onProgress(C)}d.enqueue(_),y()}},x=>{d.error(x)})}}});return new Response(m)}else throw new Ec(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Ai.add(e,c);let u=ei[e];delete ei[e];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{let u=ei[e];if(u===void 0)throw this.manager.itemError(e),c;delete ei[e];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Ac=class extends di{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ai.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Er("img");function l(){u(),Ai.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var no=class extends di{constructor(e){super(e)}load(e,t,n,s){let r=new Bt,a=new Ac(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},qs=class extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},io=class extends qs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ee(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},gl=new Ce,bf=new I,Sf=new I,Ur=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cr,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;bf.setFromMatrixPosition(e.matrixWorld),t.position.copy(bf),Sf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sf),t.updateMatrixWorld(),gl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(gl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},wc=class extends Ur{constructor(){super(new It(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Bs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},so=class extends qs{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new wc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Tf=new Ce,gr=new I,vl=new I,Cc=class extends Ur{constructor(){super(new It(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),gr.setFromMatrixPosition(e.matrixWorld),n.position.copy(gr),vl.copy(n.position),vl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(vl),n.updateMatrixWorld(),s.makeTranslation(-gr.x,-gr.y,-gr.z),Tf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tf)}},ro=class extends qs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Cc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Rc=class extends Ur{constructor(){super(new Gs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},js=class extends qs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new Rc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Di=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var ao=class extends di{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ai.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ai.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Ai.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ai.add(e,l),r.manager.itemStart(e)}};var oo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ef(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Ef();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Ef(){return performance.now()}var Vc="\\[\\]\\.:\\/",uv=new RegExp("["+Vc+"]","g"),Wc="[^"+Vc+"]",hv="[^"+Vc.replace("\\.","")+"]",fv=/((?:WC+[\/:])*)/.source.replace("WC",Wc),dv=/(WCOD+)?/.source.replace("WCOD",hv),pv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wc),mv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wc),gv=new RegExp("^"+fv+dv+pv+mv+"$"),vv=["material","materials","bones","map"],Ic=class{constructor(e,t,n){let s=n||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},pt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(uv,"")}static parseTrackName(e){let t=gv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);vv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pt.Composite=Ic;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var i_=new Float32Array(1);var Af=new Ce,lo=class{constructor(e,t,n=0,s=1/0){this.ray=new es(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ar,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Af.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Af),this}intersectObject(e,t=!0,n=[]){return Pc(e,this,n,t),n.sort(wf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Pc(e[s],this,n,t);return n.sort(wf),n}};function wf(i,e){return i.distance-e.distance}function Pc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Pc(r[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");function Xc(i,e){if(e===kf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Or||e===uo){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Or)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var po=class extends di{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Jc(t)}),this.register(function(t){return new Qc(t)}),this.register(function(t){return new lu(t)}),this.register(function(t){return new cu(t)}),this.register(function(t){return new uu(t)}),this.register(function(t){return new tu(t)}),this.register(function(t){return new nu(t)}),this.register(function(t){return new iu(t)}),this.register(function(t){return new su(t)}),this.register(function(t){return new Kc(t)}),this.register(function(t){return new ru(t)}),this.register(function(t){return new eu(t)}),this.register(function(t){return new ou(t)}),this.register(function(t){return new au(t)}),this.register(function(t){return new $c(t)}),this.register(function(t){return new hu(t)}),this.register(function(t){return new fu(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Di.extractUrlBase(e);a=Di.resolveURL(c,this.path)}else a=Di.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Nr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===id){try{a[Xe.KHR_BINARY_GLTF]=new du(e)}catch(h){s&&s(h);return}r=JSON.parse(a[Xe.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new xu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case Xe.KHR_MATERIALS_UNLIT:a[h]=new Zc;break;case Xe.KHR_DRACO_MESH_COMPRESSION:a[h]=new pu(r,this.dracoLoader);break;case Xe.KHR_TEXTURE_TRANSFORM:a[h]=new mu;break;case Xe.KHR_MESH_QUANTIZATION:a[h]=new gu;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function yv(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var Xe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},$c=class{constructor(e){this.parser=e,this.name=Xe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Ee(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],jt);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new js(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ro(u),c.distance=h;break;case"spot":c=new so(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,pi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Zc=class{constructor(){this.name=Xe.KHR_MATERIALS_UNLIT}getMaterialType(){return Ct}extendParams(e,t,n){let s=[];e.color=new Ee(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],jt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,At))}return Promise.all(s)}},Kc=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Jc=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ue(o,o)}return Promise.all(r)}},Qc=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},eu=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},tu=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ee(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],jt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,At)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},nu=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},iu=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ee().setRGB(o[0],o[1],o[2],jt),Promise.all(r)}},su=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},ru=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ee().setRGB(o[0],o[1],o[2],jt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,At)),Promise.all(r)}},au=class{constructor(e){this.parser=e,this.name=Xe.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},ou=class{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:dn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},lu=class{constructor(e){this.parser=e,this.name=Xe.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},cu=class{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},uu=class{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},hu=class{constructor(e){this.name=Xe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(p),u,h,f,s.mode,s.filter),p})})}else return null}},fu=class{constructor(e){this.name=Xe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Sn.TRIANGLES&&c.mode!==Sn.TRIANGLE_STRIP&&c.mode!==Sn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,p=[];for(let g of h){let v=new Ce,m=new I,d=new cn,y=new I(1,1,1),x=new ts(g.geometry,g.material,f);for(let _=0;_<f;_++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&d.fromBufferAttribute(l.ROTATION,_),l.SCALE&&y.fromBufferAttribute(l.SCALE,_),x.setMatrixAt(_,v.compose(m,d,y));for(let _ in l)if(_==="_COLOR_0"){let C=l[_];x.instanceColor=new li(C.array,C.itemSize,C.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,l[_]);xt.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),p.push(x)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}},id="glTF",Fr=12,Qf={JSON:1313821514,BIN:5130562},du=class{constructor(e){this.name=Xe.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Fr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==id)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Fr,r=new DataView(e,Fr),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Qf.JSON){let c=new Uint8Array(e,Fr+a,o);this.content=n.decode(c)}else if(l===Qf.BIN){let c=Fr+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},pu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Xe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let u in a){let h=_u[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=_u[u]||u.toLowerCase();if(a[u]!==void 0){let f=n.accessors[e.attributes[u]],p=$s[f.componentType];c[h]=p.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(p){for(let g in p.attributes){let v=p.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}h(p)},o,c,jt,f)})})}},mu=class{constructor(){this.name=Xe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},gu=class{constructor(){this.name=Xe.KHR_MESH_QUANTIZATION}},mo=class extends Ii{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=s-t,h=(n-t)/u,f=h*h,p=f*h,g=e*c,v=g-c,m=-2*p+3*f,d=p-f,y=1-m,x=d-f+h;for(let _=0;_!==o;_++){let C=a[v+_+o],E=a[v+_+l]*u,w=a[g+_+o],R=a[g+_]*u;r[_]=y*C+x*E+m*w+d*R}return r}},xv=new cn,vu=class extends mo{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return xv.fromArray(r).normalize().toArray(r),r}},Sn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},$s={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ed={9728:Xt,9729:en,9984:Lc,9985:yr,9986:Es,9987:Hn},td={33071:ii,33648:Sr,10497:Ji},qc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},_u={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ni={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Mv={CUBICSPLINE:void 0,LINEAR:Fs,STEP:Os},jc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function bv(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new fn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Gn})),i.DefaultMaterial}function ss(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function pi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Sv(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(f)}if(s){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(f)}if(r){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function Tv(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ev(i){let e,t=i.extensions&&i.extensions[Xe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Yc(t.attributes):e=i.indices+":"+Yc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Yc(i.targets[n]);return e}function Yc(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function yu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Av(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var wv=new Ce,xu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new yv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new no(this.options.manager):this.textureLoader=new ao(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Nr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return ss(r,o,s),pi(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,u]of a.children.entries())r(u,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Xe.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Di.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=qc[s.type],o=$s[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Pt(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=qc[s.type],c=$s[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,v,m;if(p&&p!==h){let d=Math.floor(f/p),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count,x=t.cache.get(y);x||(v=new c(o,d*p,s.count*p/u),x=new Rr(v,p/u),t.cache.add(y,x)),m=new Ir(x,l,f%p/u,g)}else o===null?v=new c(s.count*l):v=new c(o,f,s.count*l),m=new Pt(v,l,g);if(s.sparse!==void 0){let d=qc.SCALAR,y=$s[s.sparse.indices.componentType],x=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,C=new y(a[1],x,s.sparse.count*d),E=new c(a[2],_,s.sparse.count*l);o!==null&&(m=new Pt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,R=C.length;w<R;w++){let S=C[w];if(m.setX(S,E[w*l]),l>=2&&m.setY(S,E[w*l+1]),l>=3&&m.setZ(S,E[w*l+2]),l>=4&&m.setW(S,E[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let f=(r.samplers||{})[a.sampler]||{};return u.magFilter=ed[f.magFilter]||en,u.minFilter=ed[f.minFilter]||Hn,u.wrapS=td[f.wrapS]||Ji,u.wrapT=td[f.wrapT]||Ji,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Xt&&u.minFilter!==en,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;let f=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(v){let m=new Bt(v);m.needsUpdate=!0,f(m)}),t.load(Di.resolveURL(h,r.path),g,void 0,p)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),pi(h,a),h.userData.mimeType=a.mimeType||Av(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Xe.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Xe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[Xe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Lr,hn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new qt,hn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return fn}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[Xe.KHR_MATERIALS_UNLIT]){let h=s[Xe.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{let h=r.pbrMetallicRoughness||{};if(o.color=new Ee(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],jt),o.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,At)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=wt);let u=r.alphaMode||jc.OPAQUE;if(u===jc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===jc.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Ct&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ue(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==Ct&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Ct){let h=r.emissiveFactor;o.emissive=new Ee().setRGB(h[0],h[1],h[2],jt)}return r.emissiveTexture!==void 0&&a!==Ct&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,At)),Promise.all(c).then(function(){let h=new a(o);return r.name&&(h.name=r.name),pi(h,r),t.associations.set(h,{materials:e}),r.extensions&&ss(s,h,r),h})}createUniqueName(e){let t=pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Xe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return nd(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],u=Ev(c),h=s[u];if(h)a.push(h.promise);else{let f;c.extensions&&c.extensions[Xe.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=nd(new lt,c,t),s[u]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let u=a[l].material===void 0?bv(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,g=u.length;p<g;p++){let v=u[p],m=a[p],d,y=c[p];if(m.mode===Sn.TRIANGLES||m.mode===Sn.TRIANGLE_STRIP||m.mode===Sn.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new qa(v,y):new We(v,y),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===Sn.TRIANGLE_STRIP?d.geometry=Xc(d.geometry,uo):m.mode===Sn.TRIANGLE_FAN&&(d.geometry=Xc(d.geometry,Or));else if(m.mode===Sn.LINES)d=new ci(v,y);else if(m.mode===Sn.LINE_STRIP)d=new Un(v,y);else if(m.mode===Sn.LINE_LOOP)d=new ns(v,y);else if(m.mode===Sn.POINTS)d=new Ka(v,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&Tv(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),pi(d,r),m.extensions&&ss(s,d,m),t.assignFinalMaterial(d),h.push(d)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return r.extensions&&ss(s,h[0],r),h[0];let f=new yt;r.extensions&&ss(s,f,r),t.associations.set(f,{meshes:e});for(let p=0,g=h.length;p<g;p++)f.add(h[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new It(Vf.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Gs(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),pi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,u=a.length;c<u;c++){let h=a[c];if(h){o.push(h);let f=new Ce;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ya(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){let p=s.channels[h],g=s.samplers[p.sampler],v=p.target,m=v.node,d=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",d)),l.push(this.getDependency("accessor",y)),c.push(g),u.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],p=h[1],g=h[2],v=h[3],m=h[4],d=[];for(let y=0,x=f.length;y<x;y++){let _=f[y],C=p[y],E=g[y],w=v[y],R=m[y];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let S=n._createAnimationTracks(_,C,E,w,R);if(S)for(let b=0;b<S.length;b++)d.push(S[b])}return new to(r,void 0,d)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,wv)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new Pr:c.length>1?u=new yt:c.length===1?u=c[0]:u=new xt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),pi(u,r),r.extensions&&ss(n,u,r),r.matrix!==void 0){let h=new Ce;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new yt;n.name&&(r.name=s.createUniqueName(n.name)),pi(r,n),n.extensions&&ss(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[f,p]of s.associations)(f instanceof hn||f instanceof Bt)&&h.set(f,p);return u.traverse(f=>{let p=s.associations.get(f);p!=null&&h.set(f,p)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];Ni[r.path]===Ni.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let c;switch(Ni[r.path]){case Ni.weights:c=ui;break;case Ni.rotation:c=hi;break;case Ni.position:case Ni.scale:c=fi;break;default:n.itemSize===1?c=ui:c=fi;break}let u=s.interpolation!==void 0?Mv[s.interpolation]:Fs,h=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){let g=new c(l[f]+"."+Ni[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=yu(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof hi?vu:mo;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Cv(i,e,t){let n=e.attributes,s=new Mn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),o.normalized){let u=yu($s[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new I,l=new I;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){let v=yu($s[f.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new un;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function nd(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=_u[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return je.workingColorSpace!==jt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${je.workingColorSpace}" not supported.`),pi(i,e),Cv(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Sv(i,e.targets,t):i})}var Br={radius:2.5,points:[0,0,2.5,0,1.3889,2.0787,0,2.0787,1.3889,0,2.452,.4877,0,2.5,0,0,2.452,-.4877,0,2.0787,-1.3889,0,0,-2.5,.0952,.4784,2.452,.1866,.9383,2.3097,.271,1.3622,2.0787,.3449,1.7338,1.7678,.4055,2.0387,1.3889,.4506,2.2653,.9567,.4784,2.4048,.4877,.4877,2.452,0,.4784,2.4048,-.4877,.4506,2.2653,-.9567,.4055,2.0387,-1.3889,.3449,1.7338,-1.7678,.271,1.3622,-2.0787,.1866,.9383,-2.3097,.0952,.4784,-2.452,.1866,.4506,2.452,.3661,.8839,2.3097,.5315,1.2832,2.0787,.6765,1.6332,1.7678,.7955,1.9204,1.3889,.8839,2.1339,.9567,.9383,2.2653,.4877,.9567,2.3097,0,.9383,2.2653,-.4877,.8839,2.1339,-.9567,.7955,1.9204,-1.3889,.6765,1.6332,-1.7678,.5315,1.2832,-2.0787,.3661,.8839,-2.3097,.1866,.4506,-2.452,.271,.4055,2.452,.5315,.7955,2.3097,.7716,1.1548,2.0787,.9821,1.4698,1.7678,1.1548,1.7284,1.3889,1.2832,1.9204,.9567,1.3622,2.0387,.4877,1.3889,2.0787,0,1.3622,2.0387,-.4877,1.2832,1.9204,-.9567,1.1548,1.7284,-1.3889,.9821,1.4698,-1.7678,.7716,1.1548,-2.0787,.5315,.7955,-2.3097,.271,.4055,-2.452,.3449,.3449,2.452,.6765,.6765,2.3097,.9821,.9821,2.0787,1.25,1.25,1.7678,1.4698,1.4698,1.3889,1.6332,1.6332,.9567,1.7338,1.7338,.4877,1.7678,1.7678,0,1.7338,1.7338,-.4877,1.6332,1.6332,-.9567,1.4698,1.4698,-1.3889,1.25,1.25,-1.7678,.9821,.9821,-2.0787,.6765,.6765,-2.3097,.3449,.3449,-2.452,.4055,.271,2.452,.7955,.5315,2.3097,1.1548,.7716,2.0787,1.4698,.9821,1.7678,1.7284,1.1548,1.3889,1.9204,1.2832,.9567,2.0387,1.3622,.4877,2.0787,1.3889,0,2.0387,1.3622,-.4877,1.9204,1.2832,-.9567,1.7284,1.1548,-1.3889,1.4698,.9821,-1.7678,1.1548,.7716,-2.0787,.7955,.5315,-2.3097,.4055,.271,-2.452,.4506,.1866,2.452,.8839,.3661,2.3097,1.2832,.5315,2.0787,1.6332,.6765,1.7678,1.9204,.7955,1.3889,2.1339,.8839,.9567,2.2653,.9383,.4877,2.3097,.9567,0,2.2653,.9383,-.4877,2.1339,.8839,-.9567,1.9204,.7955,-1.3889,1.6332,.6765,-1.7678,1.2832,.5315,-2.0787,.8839,.3661,-2.3097,.4506,.1866,-2.452,.4784,.0952,2.452,.9383,.1866,2.3097,1.3622,.271,2.0787,1.7338,.3449,1.7678,2.0387,.4055,1.3889,2.2653,.4506,.9567,2.4048,.4784,.4877,2.452,.4877,0,2.4048,.4784,-.4877,2.2653,.4506,-.9567,2.0387,.4055,-1.3889,1.7338,.3449,-1.7678,1.3622,.271,-2.0787,.9383,.1866,-2.3097,.4784,.0952,-2.452,.4877,-0,2.452,.9567,-0,2.3097,1.3889,-0,2.0787,1.7678,0,1.7678,2.0787,-0,1.3889,2.3097,0,.9567,2.452,-0,.4877,2.5,-0,0,2.452,-0,-.4877,2.3097,0,-.9567,2.0787,-0,-1.3889,1.7678,0,-1.7678,1.3889,-0,-2.0787,.9567,-0,-2.3097,.4877,-0,-2.452,.4784,-.0952,2.452,.9383,-.1866,2.3097,1.3622,-.271,2.0787,1.7338,-.3449,1.7678,2.0387,-.4055,1.3889,2.2653,-.4506,.9567,2.4048,-.4784,.4877,2.452,-.4877,0,2.4048,-.4784,-.4877,2.2653,-.4506,-.9567,2.0387,-.4055,-1.3889,1.7338,-.3449,-1.7678,1.3622,-.271,-2.0787,.9383,-.1866,-2.3097,.4784,-.0952,-2.452,.4506,-.1866,2.452,.8839,-.3661,2.3097,1.2832,-.5315,2.0787,1.6332,-.6765,1.7678,1.9204,-.7955,1.3889,2.1339,-.8839,.9567,2.2653,-.9383,.4877,2.3097,-.9567,0,2.2653,-.9383,-.4877,2.1339,-.8839,-.9567,1.9204,-.7955,-1.3889,1.6332,-.6765,-1.7678,1.2832,-.5315,-2.0787,.8839,-.3661,-2.3097,.4506,-.1866,-2.452,.4055,-.271,2.452,.7955,-.5315,2.3097,1.1548,-.7716,2.0787,1.4698,-.9821,1.7678,1.7284,-1.1548,1.3889,1.9204,-1.2832,.9567,2.0387,-1.3622,.4877,2.0787,-1.3889,0,2.0387,-1.3622,-.4877,1.9204,-1.2832,-.9567,1.7284,-1.1548,-1.3889,1.4698,-.9821,-1.7678,1.1548,-.7716,-2.0787,.7955,-.5315,-2.3097,.4055,-.271,-2.452,.3449,-.3449,2.452,.6765,-.6765,2.3097,.9821,-.9821,2.0787,1.25,-1.25,1.7678,1.4698,-1.4698,1.3889,1.6332,-1.6332,.9567,1.7338,-1.7338,.4877,1.7678,-1.7678,0,1.7338,-1.7338,-.4877,1.6332,-1.6332,-.9567,1.4698,-1.4698,-1.3889,1.25,-1.25,-1.7678,.9821,-.9821,-2.0787,.6765,-.6765,-2.3097,.3449,-.3449,-2.452,.271,-.4055,2.452,.5315,-.7955,2.3097,.7716,-1.1548,2.0787,.9821,-1.4698,1.7678,1.1548,-1.7284,1.3889,1.2832,-1.9204,.9567,1.3622,-2.0387,.4877,1.3889,-2.0787,0,1.3622,-2.0387,-.4877,1.2832,-1.9204,-.9567,1.1548,-1.7284,-1.3889,.9821,-1.4698,-1.7678,.7716,-1.1548,-2.0787,.5315,-.7955,-2.3097,.271,-.4055,-2.452,.1866,-.4506,2.452,.3661,-.8839,2.3097,.5315,-1.2832,2.0787,.6765,-1.6332,1.7678,.7955,-1.9204,1.3889,.8839,-2.1339,.9567,.9383,-2.2653,.4877,.9567,-2.3097,0,.9383,-2.2653,-.4877,.8839,-2.1339,-.9567,.7955,-1.9204,-1.3889,.6765,-1.6332,-1.7678,.5315,-1.2832,-2.0787,.3661,-.8839,-2.3097,.1866,-.4506,-2.452,.0952,-.4784,2.452,.1866,-.9383,2.3097,.271,-1.3622,2.0787,.3449,-1.7338,1.7678,.4055,-2.0387,1.3889,.4506,-2.2653,.9567,.4784,-2.4048,.4877,.4877,-2.452,0,.4784,-2.4048,-.4877,.4506,-2.2653,-.9567,.4055,-2.0387,-1.3889,.3449,-1.7338,-1.7678,.271,-1.3622,-2.0787,.1866,-.9383,-2.3097,.0952,-.4784,-2.452,-0,-.4877,2.452,-0,-.9567,2.3097,-0,-1.3889,2.0787,-0,-1.7678,1.7678,-0,-2.0787,1.3889,0,-2.3097,.9567,-0,-2.452,.4877,-0,-2.5,0,-0,-2.452,-.4877,0,-2.3097,-.9567,-0,-2.0787,-1.3889,-0,-1.7678,-1.7678,-0,-1.3889,-2.0787,-0,-.9567,-2.3097,-0,-.4877,-2.452,-.0952,-.4784,2.452,-.1866,-.9383,2.3097,-.271,-1.3622,2.0787,-.3449,-1.7338,1.7678,-.4055,-2.0387,1.3889,-.4506,-2.2653,.9567,-.4784,-2.4048,.4877,-.4877,-2.452,0,-.4784,-2.4048,-.4877,-.4506,-2.2653,-.9567,-.4055,-2.0387,-1.3889,-.3449,-1.7338,-1.7678,-.271,-1.3622,-2.0787,-.1866,-.9383,-2.3097,-.0952,-.4784,-2.452,-.1866,-.4506,2.452,-.3661,-.8839,2.3097,-.5315,-1.2832,2.0787,-.6765,-1.6332,1.7678,-.7955,-1.9204,1.3889,-.8839,-2.1339,.9567,-.9383,-2.2653,.4877,-.9567,-2.3097,0,-.9383,-2.2653,-.4877,-.8839,-2.1339,-.9567,-.7955,-1.9204,-1.3889,-.6765,-1.6332,-1.7678,-.5315,-1.2832,-2.0787,-.3661,-.8839,-2.3097,-.1866,-.4506,-2.452,-.271,-.4055,2.452,-.5315,-.7955,2.3097,-.7716,-1.1548,2.0787,-.9821,-1.4698,1.7678,-1.1548,-1.7284,1.3889,-1.2832,-1.9204,.9567,-1.3622,-2.0387,.4877,-1.3889,-2.0787,0,-1.3622,-2.0387,-.4877,-1.2832,-1.9204,-.9567,-1.1548,-1.7284,-1.3889,-.9821,-1.4698,-1.7678,-.7716,-1.1548,-2.0787,-.5315,-.7955,-2.3097,-.271,-.4055,-2.452,-.3449,-.3449,2.452,-.6765,-.6765,2.3097,-.9821,-.9821,2.0787,-1.25,-1.25,1.7678,-1.4698,-1.4698,1.3889,-1.6332,-1.6332,.9567,-1.7338,-1.7338,.4877,-1.7678,-1.7678,0,-1.7338,-1.7338,-.4877,-1.6332,-1.6332,-.9567,-1.4698,-1.4698,-1.3889,-1.25,-1.25,-1.7678,-.9821,-.9821,-2.0787,-.6765,-.6765,-2.3097,-.3449,-.3449,-2.452,-.4055,-.271,2.452,-.7955,-.5315,2.3097,-1.1548,-.7716,2.0787,-1.4698,-.9821,1.7678,-1.7284,-1.1548,1.3889,-1.9204,-1.2832,.9567,-2.0387,-1.3622,.4877,-2.0787,-1.3889,0,-2.0387,-1.3622,-.4877,-1.9204,-1.2832,-.9567,-1.7284,-1.1548,-1.3889,-1.4698,-.9821,-1.7678,-1.1548,-.7716,-2.0787,-.7955,-.5315,-2.3097,-.4055,-.271,-2.452,-.4506,-.1866,2.452,-.8839,-.3661,2.3097,-1.2832,-.5315,2.0787,-1.6332,-.6765,1.7678,-1.9204,-.7955,1.3889,-2.1339,-.8839,.9567,-2.2653,-.9383,.4877,-2.3097,-.9567,0,-2.2653,-.9383,-.4877,-2.1339,-.8839,-.9567,-1.9204,-.7955,-1.3889,-1.6332,-.6765,-1.7678,-1.2832,-.5315,-2.0787,-.8839,-.3661,-2.3097,-.4506,-.1866,-2.452,-.4784,-.0952,2.452,-.9383,-.1866,2.3097,-1.3622,-.271,2.0787,-1.7338,-.3449,1.7678,-2.0387,-.4055,1.3889,-2.2653,-.4506,.9567,-2.4048,-.4784,.4877,-2.452,-.4877,0,-2.4048,-.4784,-.4877,-2.2653,-.4506,-.9567,-2.0387,-.4055,-1.3889,-1.7338,-.3449,-1.7678,-1.3622,-.271,-2.0787,-.9383,-.1866,-2.3097,-.4784,-.0952,-2.452,-.4877,0,2.452,-.9567,0,2.3097,-1.3889,0,2.0787,-1.7678,0,1.7678,-2.0787,0,1.3889,-2.3097,0,.9567,-2.452,0,.4877,-2.5,0,0,-2.452,0,-.4877,-2.3097,0,-.9567,-2.0787,0,-1.3889,-1.7678,0,-1.7678,-1.3889,0,-2.0787,-.9567,0,-2.3097,-.4877,0,-2.452,-.4784,.0952,2.452,-.9383,.1866,2.3097,-1.3622,.271,2.0787,-1.7338,.3449,1.7678,-2.0387,.4055,1.3889,-2.2653,.4506,.9567,-2.4048,.4784,.4877,-2.452,.4877,0,-2.4048,.4784,-.4877,-2.2653,.4506,-.9567,-2.0387,.4055,-1.3889,-1.7338,.3449,-1.7678,-1.3622,.271,-2.0787,-.9383,.1866,-2.3097,-.4784,.0952,-2.452,-.4506,.1866,2.452,-.8839,.3661,2.3097,-1.2832,.5315,2.0787,-1.6332,.6765,1.7678,-1.9204,.7955,1.3889,-2.1339,.8839,.9567,-2.2653,.9383,.4877,-2.3097,.9567,0,-2.2653,.9383,-.4877,-2.1339,.8839,-.9567,-1.9204,.7955,-1.3889,-1.6332,.6765,-1.7678,-1.2832,.5315,-2.0787,-.8839,.3661,-2.3097,-.4506,.1866,-2.452,-.4055,.271,2.452,-.7955,.5315,2.3097,-1.1548,.7716,2.0787,-1.4698,.9821,1.7678,-1.7284,1.1548,1.3889,-1.9204,1.2832,.9567,-2.0387,1.3622,.4877,-2.0787,1.3889,0,-2.0387,1.3622,-.4877,-1.9204,1.2832,-.9567,-1.7284,1.1548,-1.3889,-1.4698,.9821,-1.7678,-1.1548,.7716,-2.0787,-.7955,.5315,-2.3097,-.4055,.271,-2.452,-.3449,.3449,2.452,-.6765,.6765,2.3097,-.9821,.9821,2.0787,-1.25,1.25,1.7678,-1.4698,1.4698,1.3889,-1.6332,1.6332,.9567,-1.7338,1.7338,.4877,-1.7678,1.7678,0,-1.7338,1.7338,-.4877,-1.6332,1.6332,-.9567,-1.4698,1.4698,-1.3889,-1.25,1.25,-1.7678,-.9821,.9821,-2.0787,-.6765,.6765,-2.3097,-.3449,.3449,-2.452,-.271,.4055,2.452,-.5315,.7955,2.3097,-.7716,1.1548,2.0787,-.9821,1.4698,1.7678,-1.1548,1.7284,1.3889,-1.2832,1.9204,.9567,-1.3622,2.0387,.4877,-1.3889,2.0787,0,-1.3622,2.0387,-.4877,-1.2832,1.9204,-.9567,-1.1548,1.7284,-1.3889,-.9821,1.4698,-1.7678,-.7716,1.1548,-2.0787,-.5315,.7955,-2.3097,-.271,.4055,-2.452,-.1866,.4506,2.452,-.3661,.8839,2.3097,-.5315,1.2832,2.0787,-.6765,1.6332,1.7678,-.7955,1.9204,1.3889,-.8839,2.1339,.9567,-.9383,2.2653,.4877,-.9567,2.3097,0,-.9383,2.2653,-.4877,-.8839,2.1339,-.9567,-.7955,1.9204,-1.3889,-.6765,1.6332,-1.7678,-.5315,1.2832,-2.0787,-.3661,.8839,-2.3097,-.1866,.4506,-2.452,-.0952,.4784,2.452,-.1866,.9383,2.3097,-.271,1.3622,2.0787,-.3449,1.7338,1.7678,-.4055,2.0387,1.3889,-.4506,2.2653,.9567,-.4784,2.4048,.4877,-.4877,2.452,0,-.4784,2.4048,-.4877,-.4506,2.2653,-.9567,-.4055,2.0387,-1.3889,-.3449,1.7338,-1.7678,-.271,1.3622,-2.0787,-.1866,.9383,-2.3097,-.0952,.4784,-2.452,0,.4877,2.452,0,.9567,2.3097,0,1.7678,1.7678,0,2.3097,.9567,0,2.3097,-.9567,0,1.7678,-1.7678,0,1.3889,-2.0787,0,.9567,-2.3097,0,.4877,-2.452,0,2.476,.2439,0,2.476,-.2439,.1409,.7083,2.3808,.2288,1.1503,2.1942,.3079,1.548,1.9232,.3752,1.8863,1.5783,.4281,2.152,1.1728,.4645,2.3351,.7222,.483,2.4284,.2439,.483,2.4284,-.2439,.4645,2.3351,-.7222,.4281,2.152,-1.1728,.3752,1.8863,-1.5783,.3079,1.548,-1.9232,.2288,1.1503,-2.1942,.1409,.7083,-2.3808,.2392,2.4284,-.4877,.2439,2.476,0,.1355,1.3756,2.0787,.2028,2.0587,-1.3889,.2028,2.0587,1.3889,.2392,2.4284,.4877,.2764,.6672,2.3808,.4488,1.0835,2.1942,.604,1.4582,1.9232,.736,1.7768,1.5783,.8397,2.0272,1.1728,.9111,2.1996,.7222,.9475,2.2875,.2439,.9475,2.2875,-.2439,.9111,2.1996,-.7222,.8397,2.0272,-1.1728,.736,1.7768,-1.5783,.604,1.4582,-1.9232,.4488,1.0835,-2.1942,.2764,.6672,-2.3808,.1409,.4645,-2.452,.2764,.9111,-2.3097,.7222,2.3808,0,.7083,2.3351,.4877,.1409,.4645,2.452,.7083,2.3351,-.4877,.2764,.9111,2.3097,.6672,2.1996,-.9567,.4012,1.3227,2.0787,.6005,1.9796,-1.3889,.5107,1.6835,1.7678,.5107,1.6835,-1.7678,.6005,1.9796,1.3889,.4012,1.3227,-2.0787,.6672,2.1996,.9567,.4012,.6005,2.3808,.6516,.9752,2.1942,.8769,1.3123,1.9232,1.0685,1.5991,1.5783,1.219,1.8244,1.1728,1.3227,1.9796,.7222,1.3756,2.0587,.2439,1.3756,2.0587,-.2439,1.3227,1.9796,-.7222,1.219,1.8244,-1.1728,1.0685,1.5991,-1.5783,.8769,1.3123,-1.9232,.6516,.9752,-2.1942,.4012,.6005,-2.3808,.8293,1.5515,-1.7678,.9752,1.8244,-1.3889,.9752,1.8244,1.3889,.8293,1.5515,1.7678,.6516,1.219,-2.0787,1.0835,2.0272,.9567,.4488,.8397,-2.3097,1.1503,2.152,.4877,.2288,.4281,-2.452,1.1728,2.1942,0,.2288,.4281,2.452,1.1503,2.152,-.4877,.4488,.8397,2.3097,1.0835,2.0272,-.9567,.6516,1.219,2.0787,.5107,.5107,2.3808,.8293,.8293,2.1942,1.1161,1.1161,1.9232,1.3599,1.3599,1.5783,1.5515,1.5515,1.1728,1.6835,1.6835,.7222,1.7508,1.7508,.2439,1.7508,1.7508,-.2439,1.6835,1.6835,-.7222,1.5515,1.5515,-1.1728,1.3599,1.3599,-1.5783,1.1161,1.1161,-1.9232,.8293,.8293,-2.1942,.5107,.5107,-2.3808,.3079,.3752,2.452,.3079,.3752,-2.452,1.548,1.8863,-.4877,1.5783,1.9232,0,.604,.736,2.3097,1.4582,1.7768,-.9567,.8769,1.0685,2.0787,1.3123,1.5991,-1.3889,1.1161,1.3599,1.7678,1.1161,1.3599,-1.7678,1.3123,1.5991,1.3889,.8769,1.0685,-2.0787,1.4582,1.7768,.9567,.604,.736,-2.3097,1.548,1.8863,.4877,.6005,.4012,2.3808,.9752,.6516,2.1942,1.3123,.8769,1.9232,1.5991,1.0685,1.5783,1.8244,1.219,1.1728,1.9796,1.3227,.7222,2.0587,1.3756,.2439,2.0587,1.3756,-.2439,1.9796,1.3227,-.7222,1.8244,1.219,-1.1728,1.5991,1.0685,-1.5783,1.3123,.8769,-1.9232,.9752,.6516,-2.1942,.6005,.4012,-2.3808,1.5991,1.3123,1.3889,1.3599,1.1161,1.7678,1.0685,.8769,-2.0787,1.3599,1.1161,-1.7678,1.7768,1.4582,.9567,.736,.604,-2.3097,1.8863,1.548,.4877,.3752,.3079,-2.452,1.9232,1.5783,0,.3752,.3079,2.452,1.8863,1.548,-.4877,.736,.604,2.3097,1.7768,1.4582,-.9567,1.0685,.8769,2.0787,1.5991,1.3123,-1.3889,.6672,.2764,2.3808,1.0835,.4488,2.1942,1.4582,.604,1.9232,1.7768,.736,1.5783,2.0272,.8397,1.1728,2.1996,.9111,.7222,2.2875,.9475,.2439,2.2875,.9475,-.2439,2.1996,.9111,-.7222,2.0272,.8397,-1.1728,1.7768,.736,-1.5783,1.4582,.604,-1.9232,1.0835,.4488,-2.1942,.6672,.2764,-2.3808,2.152,1.1503,-.4877,2.1942,1.1728,0,.8397,.4488,2.3097,.4281,.2288,2.452,2.0272,1.0835,-.9567,1.219,.6516,2.0787,1.8244,.9752,-1.3889,1.5515,.8293,1.7678,1.5515,.8293,-1.7678,1.8244,.9752,1.3889,1.219,.6516,-2.0787,2.0272,1.0835,.9567,.8397,.4488,-2.3097,2.152,1.1503,.4877,.4281,.2288,-2.452,.7083,.1409,2.3808,1.1503,.2288,2.1942,1.548,.3079,1.9232,1.8863,.3752,1.5783,2.152,.4281,1.1728,2.3351,.4645,.7222,2.4284,.483,.2439,2.4284,.483,-.2439,2.3351,.4645,-.7222,2.152,.4281,-1.1728,1.8863,.3752,-1.5783,1.548,.3079,-1.9232,1.1503,.2288,-2.1942,.7083,.1409,-2.3808,1.3227,.4012,-2.0787,1.6835,.5107,-1.7678,2.1996,.6672,.9567,1.9796,.6005,1.3889,.9111,.2764,-2.3097,2.3351,.7083,.4877,.4645,.1409,-2.452,2.3808,.7222,0,.4645,.1409,2.452,2.3351,.7083,-.4877,.9111,.2764,2.3097,2.1996,.6672,-.9567,1.3227,.4012,2.0787,1.9796,.6005,-1.3889,1.6835,.5107,1.7678,.7222,-0,2.3808,1.1728,-0,2.1942,1.5783,-0,1.9232,1.9232,-0,1.5783,2.1942,-0,1.1728,2.3808,-0,.7222,2.476,-0,.2439,2.476,-0,-.2439,2.3808,-0,-.7222,2.1942,-0,-1.1728,1.9232,-0,-1.5783,1.5783,-0,-1.9232,1.1728,-0,-2.1942,.7222,-0,-2.3808,.9475,.0933,2.3097,.483,.0476,2.452,2.2875,.2253,-.9567,2.4284,.2392,-.4877,1.3756,.1355,2.0787,2.0587,.2028,-1.3889,1.7508,.1724,1.7678,1.7508,.1724,-1.7678,2.0587,.2028,1.3889,1.3756,.1355,-2.0787,2.2875,.2253,.9567,.9475,.0933,-2.3097,2.4284,.2392,.4877,.483,.0476,-2.452,2.476,.2439,0,.7083,-.1409,2.3808,1.1503,-.2288,2.1942,1.548,-.3079,1.9232,1.8863,-.3752,1.5783,2.152,-.4281,1.1728,2.3351,-.4645,.7222,2.4284,-.483,.2439,2.4284,-.483,-.2439,2.3351,-.4645,-.7222,2.152,-.4281,-1.1728,1.8863,-.3752,-1.5783,1.548,-.3079,-1.9232,1.1503,-.2288,-2.1942,.7083,-.1409,-2.3808,2.2875,-.2253,.9567,2.0587,-.2028,1.3889,.9475,-.0933,-2.3097,1.3756,-.1355,-2.0787,2.4284,-.2392,.4877,.483,-.0476,-2.452,2.476,-.2439,0,.483,-.0476,2.452,2.4284,-.2392,-.4877,.9475,-.0933,2.3097,2.2875,-.2253,-.9567,1.3756,-.1355,2.0787,2.0587,-.2028,-1.3889,1.7508,-.1724,1.7678,1.7508,-.1724,-1.7678,.6672,-.2764,2.3808,1.0835,-.4488,2.1942,1.4582,-.604,1.9232,1.7768,-.736,1.5783,2.0272,-.8397,1.1728,2.1996,-.9111,.7222,2.2875,-.9475,.2439,2.2875,-.9475,-.2439,2.1996,-.9111,-.7222,2.0272,-.8397,-1.1728,1.7768,-.736,-1.5783,1.4582,-.604,-1.9232,1.0835,-.4488,-2.1942,.6672,-.2764,-2.3808,2.1996,-.6672,-.9567,2.3351,-.7083,-.4877,1.3227,-.4012,2.0787,.9111,-.2764,2.3097,1.9796,-.6005,-1.3889,1.6835,-.5107,1.7678,1.6835,-.5107,-1.7678,1.9796,-.6005,1.3889,1.3227,-.4012,-2.0787,2.1996,-.6672,.9567,.9111,-.2764,-2.3097,2.3351,-.7083,.4877,.4645,-.1409,-2.452,2.3808,-.7222,0,.4645,-.1409,2.452,.6005,-.4012,2.3808,.9752,-.6516,2.1942,1.3123,-.8769,1.9232,1.5991,-1.0685,1.5783,1.8244,-1.219,1.1728,1.9796,-1.3227,.7222,2.0587,-1.3756,.2439,2.0587,-1.3756,-.2439,1.9796,-1.3227,-.7222,1.8244,-1.219,-1.1728,1.5991,-1.0685,-1.5783,1.3123,-.8769,-1.9232,.9752,-.6516,-2.1942,.6005,-.4012,-2.3808,.8397,-.4488,-2.3097,1.219,-.6516,-2.0787,2.152,-1.1503,.4877,2.0272,-1.0835,.9567,.4281,-.2288,-2.452,2.1942,-1.1728,0,.4281,-.2288,2.452,2.152,-1.1503,-.4877,.8397,-.4488,2.3097,2.0272,-1.0835,-.9567,1.219,-.6516,2.0787,1.8244,-.9752,-1.3889,1.5515,-.8293,1.7678,1.5515,-.8293,-1.7678,1.8244,-.9752,1.3889,.5107,-.5107,2.3808,.8293,-.8293,2.1942,1.1161,-1.1161,1.9232,1.3599,-1.3599,1.5783,1.5515,-1.5515,1.1728,1.6835,-1.6835,.7222,1.7508,-1.7508,.2439,1.7508,-1.7508,-.2439,1.6835,-1.6835,-.7222,1.5515,-1.5515,-1.1728,1.3599,-1.3599,-1.5783,1.1161,-1.1161,-1.9232,.8293,-.8293,-2.1942,.5107,-.5107,-2.3808,1.5991,-1.3123,-1.3889,1.7768,-1.4582,-.9567,1.3599,-1.1161,1.7678,1.0685,-.8769,2.0787,1.3599,-1.1161,-1.7678,1.5991,-1.3123,1.3889,1.0685,-.8769,-2.0787,1.7768,-1.4582,.9567,.736,-.604,-2.3097,1.8863,-1.548,.4877,.3752,-.3079,-2.452,1.9232,-1.5783,0,.3752,-.3079,2.452,1.8863,-1.548,-.4877,.736,-.604,2.3097,.4012,-.6005,2.3808,.6516,-.9752,2.1942,.8769,-1.3123,1.9232,1.0685,-1.5991,1.5783,1.219,-1.8244,1.1728,1.3227,-1.9796,.7222,1.3756,-2.0587,.2439,1.3756,-2.0587,-.2439,1.3227,-1.9796,-.7222,1.219,-1.8244,-1.1728,1.0685,-1.5991,-1.5783,.8769,-1.3123,-1.9232,.6516,-.9752,-2.1942,.4012,-.6005,-2.3808,.3079,-.3752,-2.452,.604,-.736,-2.3097,1.5783,-1.9232,0,1.548,-1.8863,.4877,.3079,-.3752,2.452,1.548,-1.8863,-.4877,.604,-.736,2.3097,1.4582,-1.7768,-.9567,.8769,-1.0685,2.0787,1.3123,-1.5991,-1.3889,1.1161,-1.3599,1.7678,1.1161,-1.3599,-1.7678,1.3123,-1.5991,1.3889,.8769,-1.0685,-2.0787,1.4582,-1.7768,.9567,.2764,-.6672,2.3808,.4488,-1.0835,2.1942,.604,-1.4582,1.9232,.736,-1.7768,1.5783,.8397,-2.0272,1.1728,.9111,-2.1996,.7222,.9475,-2.2875,.2439,.9475,-2.2875,-.2439,.9111,-2.1996,-.7222,.8397,-2.0272,-1.1728,.736,-1.7768,-1.5783,.604,-1.4582,-1.9232,.4488,-1.0835,-2.1942,.2764,-.6672,-2.3808,.8293,-1.5515,1.7678,.6516,-1.219,2.0787,.8293,-1.5515,-1.7678,.9752,-1.8244,-1.3889,.9752,-1.8244,1.3889,.6516,-1.219,-2.0787,1.0835,-2.0272,.9567,.4488,-.8397,-2.3097,1.1503,-2.152,.4877,.2288,-.4281,-2.452,1.1728,-2.1942,0,.2288,-.4281,2.452,1.1503,-2.152,-.4877,.4488,-.8397,2.3097,1.0835,-2.0272,-.9567,.1409,-.7083,2.3808,.2288,-1.1503,2.1942,.3079,-1.548,1.9232,.3752,-1.8863,1.5783,.4281,-2.152,1.1728,.4645,-2.3351,.7222,.483,-2.4284,.2439,.483,-2.4284,-.2439,.4645,-2.3351,-.7222,.4281,-2.152,-1.1728,.3752,-1.8863,-1.5783,.3079,-1.548,-1.9232,.2288,-1.1503,-2.1942,.1409,-.7083,-2.3808,.7222,-2.3808,0,.7083,-2.3351,.4877,.1409,-.4645,2.452,.1409,-.4645,-2.452,.7083,-2.3351,-.4877,.2764,-.9111,2.3097,.6672,-2.1996,-.9567,.4012,-1.3227,2.0787,.6005,-1.9796,-1.3889,.5107,-1.6835,1.7678,.5107,-1.6835,-1.7678,.6005,-1.9796,1.3889,.4012,-1.3227,-2.0787,.6672,-2.1996,.9567,.2764,-.9111,-2.3097,-0,-.7222,2.3808,-0,-1.1728,2.1942,-0,-1.5783,1.9232,-0,-1.9232,1.5783,-0,-2.1942,1.1728,-0,-2.3808,.7222,-0,-2.476,.2439,-0,-2.476,-.2439,-0,-2.3808,-.7222,-0,-2.1942,-1.1728,-0,-1.9232,-1.5783,-0,-1.5783,-1.9232,-0,-1.1728,-2.1942,-0,-.7222,-2.3808,.1724,-1.7508,-1.7678,.2028,-2.0587,-1.3889,.2028,-2.0587,1.3889,.1724,-1.7508,1.7678,.1355,-1.3756,-2.0787,.2253,-2.2875,.9567,.0933,-.9475,-2.3097,.2392,-2.4284,.4877,.0476,-.483,-2.452,.2439,-2.476,0,.0476,-.483,2.452,.2392,-2.4284,-.4877,.0933,-.9475,2.3097,.2253,-2.2875,-.9567,.1355,-1.3756,2.0787,-.1409,-.7083,2.3808,-.2288,-1.1503,2.1942,-.3079,-1.548,1.9232,-.3752,-1.8863,1.5783,-.4281,-2.152,1.1728,-.4645,-2.3351,.7222,-.483,-2.4284,.2439,-.483,-2.4284,-.2439,-.4645,-2.3351,-.7222,-.4281,-2.152,-1.1728,-.3752,-1.8863,-1.5783,-.3079,-1.548,-1.9232,-.2288,-1.1503,-2.1942,-.1409,-.7083,-2.3808,-.0476,-.483,2.452,-.0476,-.483,-2.452,-.2392,-2.4284,-.4877,-.2439,-2.476,0,-.0933,-.9475,2.3097,-.2253,-2.2875,-.9567,-.1355,-1.3756,2.0787,-.2028,-2.0587,-1.3889,-.1724,-1.7508,1.7678,-.1724,-1.7508,-1.7678,-.2028,-2.0587,1.3889,-.1355,-1.3756,-2.0787,-.2253,-2.2875,.9567,-.0933,-.9475,-2.3097,-.2392,-2.4284,.4877,-.2764,-.6672,2.3808,-.4488,-1.0835,2.1942,-.604,-1.4582,1.9232,-.736,-1.7768,1.5783,-.8397,-2.0272,1.1728,-.9111,-2.1996,.7222,-.9475,-2.2875,.2439,-.9475,-2.2875,-.2439,-.9111,-2.1996,-.7222,-.8397,-2.0272,-1.1728,-.736,-1.7768,-1.5783,-.604,-1.4582,-1.9232,-.4488,-1.0835,-2.1942,-.2764,-.6672,-2.3808,-.6005,-1.9796,1.3889,-.5107,-1.6835,1.7678,-.4012,-1.3227,-2.0787,-.5107,-1.6835,-1.7678,-.6672,-2.1996,.9567,-.2764,-.9111,-2.3097,-.7083,-2.3351,.4877,-.1409,-.4645,-2.452,-.7222,-2.3808,0,-.1409,-.4645,2.452,-.7083,-2.3351,-.4877,-.2764,-.9111,2.3097,-.6672,-2.1996,-.9567,-.4012,-1.3227,2.0787,-.6005,-1.9796,-1.3889,-.4012,-.6005,2.3808,-.6516,-.9752,2.1942,-.8769,-1.3123,1.9232,-1.0685,-1.5991,1.5783,-1.219,-1.8244,1.1728,-1.3227,-1.9796,.7222,-1.3756,-2.0587,.2439,-1.3756,-2.0587,-.2439,-1.3227,-1.9796,-.7222,-1.219,-1.8244,-1.1728,-1.0685,-1.5991,-1.5783,-.8769,-1.3123,-1.9232,-.6516,-.9752,-2.1942,-.4012,-.6005,-2.3808,-1.1503,-2.152,-.4877,-1.1728,-2.1942,0,-.4488,-.8397,2.3097,-.2288,-.4281,2.452,-1.0835,-2.0272,-.9567,-.6516,-1.219,2.0787,-.9752,-1.8244,-1.3889,-.8293,-1.5515,1.7678,-.8293,-1.5515,-1.7678,-.9752,-1.8244,1.3889,-.6516,-1.219,-2.0787,-1.0835,-2.0272,.9567,-.4488,-.8397,-2.3097,-1.1503,-2.152,.4877,-.2288,-.4281,-2.452,-.5107,-.5107,2.3808,-.8293,-.8293,2.1942,-1.1161,-1.1161,1.9232,-1.3599,-1.3599,1.5783,-1.5515,-1.5515,1.1728,-1.6835,-1.6835,.7222,-1.7508,-1.7508,.2439,-1.7508,-1.7508,-.2439,-1.6835,-1.6835,-.7222,-1.5515,-1.5515,-1.1728,-1.3599,-1.3599,-1.5783,-1.1161,-1.1161,-1.9232,-.8293,-.8293,-2.1942,-.5107,-.5107,-2.3808,-.8769,-1.0685,-2.0787,-1.1161,-1.3599,-1.7678,-1.4582,-1.7768,.9567,-1.3123,-1.5991,1.3889,-.604,-.736,-2.3097,-1.548,-1.8863,.4877,-.3079,-.3752,-2.452,-1.5783,-1.9232,0,-.3079,-.3752,2.452,-1.548,-1.8863,-.4877,-.604,-.736,2.3097,-1.4582,-1.7768,-.9567,-.8769,-1.0685,2.0787,-1.3123,-1.5991,-1.3889,-1.1161,-1.3599,1.7678,-.6005,-.4012,2.3808,-.9752,-.6516,2.1942,-1.3123,-.8769,1.9232,-1.5991,-1.0685,1.5783,-1.8244,-1.219,1.1728,-1.9796,-1.3227,.7222,-2.0587,-1.3756,.2439,-2.0587,-1.3756,-.2439,-1.9796,-1.3227,-.7222,-1.8244,-1.219,-1.1728,-1.5991,-1.0685,-1.5783,-1.3123,-.8769,-1.9232,-.9752,-.6516,-2.1942,-.6005,-.4012,-2.3808,-1.7768,-1.4582,-.9567,-1.8863,-1.548,-.4877,-1.0685,-.8769,2.0787,-.736,-.604,2.3097,-1.5991,-1.3123,-1.3889,-1.3599,-1.1161,1.7678,-1.3599,-1.1161,-1.7678,-1.5991,-1.3123,1.3889,-1.0685,-.8769,-2.0787,-1.7768,-1.4582,.9567,-.736,-.604,-2.3097,-1.8863,-1.548,.4877,-.3752,-.3079,-2.452,-1.9232,-1.5783,0,-.3752,-.3079,2.452,-.6672,-.2764,2.3808,-1.0835,-.4488,2.1942,-1.4582,-.604,1.9232,-1.7768,-.736,1.5783,-2.0272,-.8397,1.1728,-2.1996,-.9111,.7222,-2.2875,-.9475,.2439,-2.2875,-.9475,-.2439,-2.1996,-.9111,-.7222,-2.0272,-.8397,-1.1728,-1.7768,-.736,-1.5783,-1.4582,-.604,-1.9232,-1.0835,-.4488,-2.1942,-.6672,-.2764,-2.3808,-.8397,-.4488,-2.3097,-1.219,-.6516,-2.0787,-2.152,-1.1503,.4877,-2.0272,-1.0835,.9567,-.4281,-.2288,-2.452,-2.1942,-1.1728,0,-.4281,-.2288,2.452,-2.152,-1.1503,-.4877,-.8397,-.4488,2.3097,-2.0272,-1.0835,-.9567,-1.219,-.6516,2.0787,-1.8244,-.9752,-1.3889,-1.5515,-.8293,1.7678,-1.5515,-.8293,-1.7678,-1.8244,-.9752,1.3889,-.7083,-.1409,2.3808,-1.1503,-.2288,2.1942,-1.548,-.3079,1.9232,-1.8863,-.3752,1.5783,-2.152,-.4281,1.1728,-2.3351,-.4645,.7222,-2.4284,-.483,.2439,-2.4284,-.483,-.2439,-2.3351,-.4645,-.7222,-2.152,-.4281,-1.1728,-1.8863,-.3752,-1.5783,-1.548,-.3079,-1.9232,-1.1503,-.2288,-2.1942,-.7083,-.1409,-2.3808,-1.3227,-.4012,2.0787,-.9111,-.2764,2.3097,-1.9796,-.6005,-1.3889,-2.1996,-.6672,-.9567,-1.6835,-.5107,1.7678,-1.6835,-.5107,-1.7678,-1.9796,-.6005,1.3889,-1.3227,-.4012,-2.0787,-2.1996,-.6672,.9567,-.9111,-.2764,-2.3097,-2.3351,-.7083,.4877,-.4645,-.1409,-2.452,-2.3808,-.7222,0,-.4645,-.1409,2.452,-2.3351,-.7083,-.4877,-.7222,0,2.3808,-1.1728,0,2.1942,-1.5783,0,1.9232,-1.9232,0,1.5783,-2.1942,0,1.1728,-2.3808,0,.7222,-2.476,0,.2439,-2.476,0,-.2439,-2.3808,0,-.7222,-2.1942,0,-1.1728,-1.9232,0,-1.5783,-1.5783,0,-1.9232,-1.1728,0,-2.1942,-.7222,0,-2.3808,-2.4284,-.2392,.4877,-2.2875,-.2253,.9567,-.483,-.0476,-2.452,-.9475,-.0933,-2.3097,-2.476,-.2439,0,-.483,-.0476,2.452,-2.4284,-.2392,-.4877,-.9475,-.0933,2.3097,-2.2875,-.2253,-.9567,-1.3756,-.1355,2.0787,-2.0587,-.2028,-1.3889,-1.7508,-.1724,1.7678,-1.7508,-.1724,-1.7678,-2.0587,-.2028,1.3889,-1.3756,-.1355,-2.0787,-.7083,.1409,2.3808,-1.1503,.2288,2.1942,-1.548,.3079,1.9232,-1.8863,.3752,1.5783,-2.152,.4281,1.1728,-2.3351,.4645,.7222,-2.4284,.483,.2439,-2.4284,.483,-.2439,-2.3351,.4645,-.7222,-2.152,.4281,-1.1728,-1.8863,.3752,-1.5783,-1.548,.3079,-1.9232,-1.1503,.2288,-2.1942,-.7083,.1409,-2.3808,-2.0587,.2028,-1.3889,-2.2875,.2253,-.9567,-1.7508,.1724,1.7678,-1.3756,.1355,2.0787,-1.7508,.1724,-1.7678,-2.0587,.2028,1.3889,-1.3756,.1355,-2.0787,-2.2875,.2253,.9567,-.9475,.0933,-2.3097,-2.4284,.2392,.4877,-.483,.0476,-2.452,-2.476,.2439,0,-.483,.0476,2.452,-2.4284,.2392,-.4877,-.9475,.0933,2.3097,-.6672,.2764,2.3808,-1.0835,.4488,2.1942,-1.4582,.604,1.9232,-1.7768,.736,1.5783,-2.0272,.8397,1.1728,-2.1996,.9111,.7222,-2.2875,.9475,.2439,-2.2875,.9475,-.2439,-2.1996,.9111,-.7222,-2.0272,.8397,-1.1728,-1.7768,.736,-1.5783,-1.4582,.604,-1.9232,-1.0835,.4488,-2.1942,-.6672,.2764,-2.3808,-.4645,.1409,-2.452,-.9111,.2764,-2.3097,-2.3808,.7222,0,-2.3351,.7083,.4877,-.4645,.1409,2.452,-2.3351,.7083,-.4877,-.9111,.2764,2.3097,-2.1996,.6672,-.9567,-1.3227,.4012,2.0787,-1.9796,.6005,-1.3889,-1.6835,.5107,1.7678,-1.6835,.5107,-1.7678,-1.9796,.6005,1.3889,-1.3227,.4012,-2.0787,-2.1996,.6672,.9567,-.6005,.4012,2.3808,-.9752,.6516,2.1942,-1.3123,.8769,1.9232,-1.5991,1.0685,1.5783,-1.8244,1.219,1.1728,-1.9796,1.3227,.7222,-2.0587,1.3756,.2439,-2.0587,1.3756,-.2439,-1.9796,1.3227,-.7222,-1.8244,1.219,-1.1728,-1.5991,1.0685,-1.5783,-1.3123,.8769,-1.9232,-.9752,.6516,-2.1942,-.6005,.4012,-2.3808,-1.5515,.8293,1.7678,-1.219,.6516,2.0787,-1.5515,.8293,-1.7678,-1.8244,.9752,-1.3889,-1.8244,.9752,1.3889,-1.219,.6516,-2.0787,-2.0272,1.0835,.9567,-.8397,.4488,-2.3097,-2.152,1.1503,.4877,-.4281,.2288,-2.452,-2.1942,1.1728,0,-.4281,.2288,2.452,-2.152,1.1503,-.4877,-.8397,.4488,2.3097,-2.0272,1.0835,-.9567,-.5107,.5107,2.3808,-.8293,.8293,2.1942,-1.1161,1.1161,1.9232,-1.3599,1.3599,1.5783,-1.5515,1.5515,1.1728,-1.6835,1.6835,.7222,-1.7508,1.7508,.2439,-1.7508,1.7508,-.2439,-1.6835,1.6835,-.7222,-1.5515,1.5515,-1.1728,-1.3599,1.3599,-1.5783,-1.1161,1.1161,-1.9232,-.8293,.8293,-2.1942,-.5107,.5107,-2.3808,-1.9232,1.5783,0,-1.8863,1.548,.4877,-.3752,.3079,2.452,-.3752,.3079,-2.452,-1.8863,1.548,-.4877,-.736,.604,2.3097,-1.7768,1.4582,-.9567,-1.0685,.8769,2.0787,-1.5991,1.3123,-1.3889,-1.3599,1.1161,1.7678,-1.3599,1.1161,-1.7678,-1.5991,1.3123,1.3889,-1.0685,.8769,-2.0787,-1.7768,1.4582,.9567,-.736,.604,-2.3097,-.4012,.6005,2.3808,-.6516,.9752,2.1942,-.8769,1.3123,1.9232,-1.0685,1.5991,1.5783,-1.219,1.8244,1.1728,-1.3227,1.9796,.7222,-1.3756,2.0587,.2439,-1.3756,2.0587,-.2439,-1.3227,1.9796,-.7222,-1.219,1.8244,-1.1728,-1.0685,1.5991,-1.5783,-.8769,1.3123,-1.9232,-.6516,.9752,-2.1942,-.4012,.6005,-2.3808,-1.1161,1.3599,-1.7678,-1.3123,1.5991,-1.3889,-1.3123,1.5991,1.3889,-1.1161,1.3599,1.7678,-.8769,1.0685,-2.0787,-1.4582,1.7768,.9567,-.604,.736,-2.3097,-1.548,1.8863,.4877,-.3079,.3752,-2.452,-1.5783,1.9232,0,-.3079,.3752,2.452,-1.548,1.8863,-.4877,-.604,.736,2.3097,-1.4582,1.7768,-.9567,-.8769,1.0685,2.0787,-.2764,.6672,2.3808,-.4488,1.0835,2.1942,-.604,1.4582,1.9232,-.736,1.7768,1.5783,-.8397,2.0272,1.1728,-.9111,2.1996,.7222,-.9475,2.2875,.2439,-.9475,2.2875,-.2439,-.9111,2.1996,-.7222,-.8397,2.0272,-1.1728,-.736,1.7768,-1.5783,-.604,1.4582,-1.9232,-.4488,1.0835,-2.1942,-.2764,.6672,-2.3808,-.2288,.4281,-2.452,-1.1503,2.152,-.4877,-1.1728,2.1942,0,-.4488,.8397,2.3097,-.2288,.4281,2.452,-1.0835,2.0272,-.9567,-.6516,1.219,2.0787,-.9752,1.8244,-1.3889,-.8293,1.5515,1.7678,-.8293,1.5515,-1.7678,-.9752,1.8244,1.3889,-.6516,1.219,-2.0787,-1.0835,2.0272,.9567,-.4488,.8397,-2.3097,-1.1503,2.152,.4877,-.1409,.7083,2.3808,-.2288,1.1503,2.1942,-.3079,1.548,1.9232,-.3752,1.8863,1.5783,-.4281,2.152,1.1728,-.4645,2.3351,.7222,-.483,2.4284,.2439,-.483,2.4284,-.2439,-.4645,2.3351,-.7222,-.4281,2.152,-1.1728,-.3752,1.8863,-1.5783,-.3079,1.548,-1.9232,-.2288,1.1503,-2.1942,-.1409,.7083,-2.3808,-.4012,1.3227,-2.0787,-.5107,1.6835,-1.7678,-.6672,2.1996,.9567,-.6005,1.9796,1.3889,-.2764,.9111,-2.3097,-.7083,2.3351,.4877,-.1409,.4645,-2.452,-.7222,2.3808,0,-.1409,.4645,2.452,-.7083,2.3351,-.4877,-.2764,.9111,2.3097,-.6672,2.1996,-.9567,-.4012,1.3227,2.0787,-.6005,1.9796,-1.3889,-.5107,1.6835,1.7678,0,.7222,2.3808,0,1.5783,-1.9232,0,1.1728,-2.1942,0,.7222,-2.3808,-.0933,.9475,2.3097,-.0476,.483,2.452,-.2253,2.2875,-.9567,-.1724,1.7508,1.7678,-.1724,1.7508,-1.7678,-.1355,1.3756,-2.0787,-.2253,2.2875,.9567,-.0933,.9475,-2.3097,-.0476,.483,-2.452,0,.2439,2.476,0,1.1728,2.1942,0,1.5783,1.9232,0,1.9232,1.5783,0,2.1942,1.1728,0,2.3808,.7222,0,2.3808,-.7222,0,2.1942,-1.1728,0,1.9232,-1.5783,0,.2439,-2.476,.0476,.2392,2.476,.0476,.2392,-2.476,.0933,.9475,2.3097,.0476,.483,2.452,.2253,2.2875,-.9567,.1724,1.7508,1.7678,.1724,1.7508,-1.7678,.1355,1.3756,-2.0787,.2253,2.2875,.9567,.0933,.9475,-2.3097,.0476,.483,-2.452,.0933,.2253,2.476,.0933,.2253,-2.476,.1355,.2028,2.476,.1355,.2028,-2.476,.1724,.1724,2.476,.1724,.1724,-2.476,.2028,.1355,2.476,.2028,.1355,-2.476,.2253,.0933,2.476,.2253,.0933,-2.476,.2392,.0476,2.476,.2392,.0476,-2.476,.2439,-0,2.476,.2439,-0,-2.476,.2392,-.0476,2.476,.2392,-.0476,-2.476,.2253,-.0933,2.476,.2253,-.0933,-2.476,.2028,-.1355,2.476,.2028,-.1355,-2.476,.1724,-.1724,2.476,.1724,-.1724,-2.476,.1355,-.2028,2.476,.1355,-.2028,-2.476,.0933,-.2253,2.476,.0933,-.2253,-2.476,.0476,-.2392,2.476,.0476,-.2392,-2.476,-0,-.2439,2.476,-0,-.2439,-2.476,-.0476,-.2392,2.476,-.0476,-.2392,-2.476,-.0933,-.2253,2.476,-.0933,-.2253,-2.476,-.1355,-.2028,2.476,-.1355,-.2028,-2.476,-.1724,-.1724,2.476,-.1724,-.1724,-2.476,-.2028,-.1355,2.476,-.2028,-.1355,-2.476,-.2253,-.0933,2.476,-.2253,-.0933,-2.476,-.2392,-.0476,2.476,-.2392,-.0476,-2.476,-.2439,0,2.476,-.2439,0,-2.476,-.2392,.0476,2.476,-.2392,.0476,-2.476,-.2253,.0933,2.476,-.2253,.0933,-2.476,-.2028,.1355,2.476,-.2028,.1355,-2.476,-.1724,.1724,2.476,-.1724,.1724,-2.476,-.1355,.2028,2.476,-.1355,.2028,-2.476,-.0933,.2253,2.476,-.0933,.2253,-2.476,-.0476,.2392,2.476,-.0476,.2392,-2.476,-.2392,2.4284,-.4877,-.1355,1.3756,2.0787,-.2028,2.0587,-1.3889,-.2028,2.0587,1.3889,-.2392,2.4284,.4877,-.2439,2.476,0,-.2415,2.4522,-.2439,-.2415,2.4522,.2439,-.0704,.7153,-2.3808,-.2322,2.358,.7222,-.1144,1.1615,-2.1942,-.214,2.1731,1.1728,-.154,1.5632,-1.9232,-.1876,1.9047,1.5783,-.1876,1.9047,-1.5783,-.154,1.5632,1.9232,-.214,2.1731,-1.1728,-.1144,1.1615,2.1942,-.2322,2.358,-.7222,-.0704,.7153,2.3808,-.5556,1.8315,1.5783,-.5556,1.8315,-1.5783,-.456,1.5031,1.9232,-.6339,2.0896,-1.1728,-.3388,1.1169,2.1942,-.6878,2.2673,-.7222,-.2086,.6878,2.3808,-.7153,2.358,-.2439,-.7153,2.358,.2439,-.2086,.6878,-2.3808,-.6878,2.2673,.7222,-.3388,1.1169,-2.1942,-.6339,2.0896,1.1728,-.456,1.5031,-1.9232,-1.1615,2.1731,.2439,-.3388,.6339,-2.3808,-1.1169,2.0896,.7222,-.5502,1.0294,-2.1942,-1.0294,1.9258,1.1728,-.7404,1.3853,-1.9232,-.9022,1.688,1.5783,-.9022,1.688,-1.5783,-.7404,1.3853,1.9232,-1.0294,1.9258,-1.1728,-.5502,1.0294,2.1942,-1.1169,2.0896,-.7222,-.3388,.6339,2.3808,-1.1615,2.1731,-.2439,-.9965,1.2142,1.9232,-1.3853,1.688,-1.1728,-.7404,.9022,2.1942,-1.5031,1.8315,-.7222,-.456,.5556,2.3808,-1.5632,1.9047,-.2439,-1.5632,1.9047,.2439,-.456,.5556,-2.3808,-1.5031,1.8315,.7222,-.7404,.9022,-2.1942,-1.3853,1.688,1.1728,-.9965,1.2142,-1.9232,-1.2142,1.4795,1.5783,-1.2142,1.4795,-1.5783,-.5556,.456,-2.3808,-1.8315,1.5031,.7222,-.9022,.7404,-2.1942,-1.688,1.3853,1.1728,-1.2142,.9965,-1.9232,-1.4795,1.2142,1.5783,-1.4795,1.2142,-1.5783,-1.2142,.9965,1.9232,-1.688,1.3853,-1.1728,-.9022,.7404,2.1942,-1.8315,1.5031,-.7222,-.5556,.456,2.3808,-1.9047,1.5632,-.2439,-1.9047,1.5632,.2439,-1.9258,1.0294,-1.1728,-1.0294,.5502,2.1942,-2.0896,1.1169,-.7222,-.6339,.3388,2.3808,-2.1731,1.1615,-.2439,-2.1731,1.1615,.2439,-.6339,.3388,-2.3808,-2.0896,1.1169,.7222,-1.0294,.5502,-2.1942,-1.9258,1.0294,1.1728,-1.3853,.7404,-1.9232,-1.688,.9022,1.5783,-1.688,.9022,-1.5783,-1.3853,.7404,1.9232,-2.2673,.6878,.7222,-1.1169,.3388,-2.1942,-2.0896,.6339,1.1728,-1.5031,.456,-1.9232,-1.8315,.5556,1.5783,-1.8315,.5556,-1.5783,-1.5031,.456,1.9232,-2.0896,.6339,-1.1728,-1.1169,.3388,2.1942,-2.2673,.6878,-.7222,-.6878,.2086,2.3808,-2.358,.7153,-.2439,-2.358,.7153,.2439,-.6878,.2086,-2.3808,-1.1615,.1144,2.1942,-2.358,.2322,-.7222,-.7153,.0704,2.3808,-2.4522,.2415,-.2439,-2.4522,.2415,.2439,-.7153,.0704,-2.3808,-2.358,.2322,.7222,-1.1615,.1144,-2.1942,-2.1731,.214,1.1728,-1.5632,.154,-1.9232,-1.9047,.1876,1.5783,-1.9047,.1876,-1.5783,-1.5632,.154,1.9232,-2.1731,.214,-1.1728,-1.1615,-.1144,-2.1942,-2.1731,-.214,1.1728,-1.5632,-.154,-1.9232,-1.9047,-.1876,1.5783,-1.9047,-.1876,-1.5783,-1.5632,-.154,1.9232,-2.1731,-.214,-1.1728,-1.1615,-.1144,2.1942,-2.358,-.2322,-.7222,-.7153,-.0704,2.3808,-2.4522,-.2415,-.2439,-2.4522,-.2415,.2439,-.7153,-.0704,-2.3808,-2.358,-.2322,.7222,-2.2673,-.6878,-.7222,-.6878,-.2086,2.3808,-2.358,-.7153,-.2439,-2.358,-.7153,.2439,-.6878,-.2086,-2.3808,-2.2673,-.6878,.7222,-1.1169,-.3388,-2.1942,-2.0896,-.6339,1.1728,-1.5031,-.456,-1.9232,-1.8315,-.5556,1.5783,-1.8315,-.5556,-1.5783,-1.5031,-.456,1.9232,-2.0896,-.6339,-1.1728,-1.1169,-.3388,2.1942,-1.9258,-1.0294,1.1728,-1.3853,-.7404,-1.9232,-1.688,-.9022,1.5783,-1.688,-.9022,-1.5783,-1.3853,-.7404,1.9232,-1.9258,-1.0294,-1.1728,-1.0294,-.5502,2.1942,-2.0896,-1.1169,-.7222,-.6339,-.3388,2.3808,-2.1731,-1.1615,-.2439,-2.1731,-1.1615,.2439,-.6339,-.3388,-2.3808,-2.0896,-1.1169,.7222,-1.0294,-.5502,-2.1942,-.5556,-.456,2.3808,-1.9047,-1.5632,-.2439,-1.9047,-1.5632,.2439,-.5556,-.456,-2.3808,-1.8315,-1.5031,.7222,-.9022,-.7404,-2.1942,-1.688,-1.3853,1.1728,-1.2142,-.9965,-1.9232,-1.4795,-1.2142,1.5783,-1.4795,-1.2142,-1.5783,-1.2142,-.9965,1.9232,-1.688,-1.3853,-1.1728,-.9022,-.7404,2.1942,-1.8315,-1.5031,-.7222,-1.2142,-1.4795,1.5783,-1.2142,-1.4795,-1.5783,-.9965,-1.2142,1.9232,-1.3853,-1.688,-1.1728,-.7404,-.9022,2.1942,-1.5031,-1.8315,-.7222,-.456,-.5556,2.3808,-1.5632,-1.9047,-.2439,-1.5632,-1.9047,.2439,-.456,-.5556,-2.3808,-1.5031,-1.8315,.7222,-.7404,-.9022,-2.1942,-1.3853,-1.688,1.1728,-.9965,-1.2142,-1.9232,-1.1615,-2.1731,.2439,-.3388,-.6339,-2.3808,-1.1169,-2.0896,.7222,-.5502,-1.0294,-2.1942,-1.0294,-1.9258,1.1728,-.7404,-1.3853,-1.9232,-.9022,-1.688,1.5783,-.9022,-1.688,-1.5783,-.7404,-1.3853,1.9232,-1.0294,-1.9258,-1.1728,-.5502,-1.0294,2.1942,-1.1169,-2.0896,-.7222,-.3388,-.6339,2.3808,-1.1615,-2.1731,-.2439,-.5556,-1.8315,-1.5783,-.456,-1.5031,1.9232,-.6339,-2.0896,-1.1728,-.3388,-1.1169,2.1942,-.6878,-2.2673,-.7222,-.2086,-.6878,2.3808,-.7153,-2.358,-.2439,-.7153,-2.358,.2439,-.2086,-.6878,-2.3808,-.6878,-2.2673,.7222,-.3388,-1.1169,-2.1942,-.6339,-2.0896,1.1728,-.456,-1.5031,-1.9232,-.5556,-1.8315,1.5783,-.2415,-2.4522,.2439,-.0704,-.7153,-2.3808,-.2322,-2.358,.7222,-.1144,-1.1615,-2.1942,-.214,-2.1731,1.1728,-.154,-1.5632,-1.9232,-.1876,-1.9047,1.5783,-.1876,-1.9047,-1.5783,-.154,-1.5632,1.9232,-.214,-2.1731,-1.1728,-.1144,-1.1615,2.1942,-.2322,-2.358,-.7222,-.0704,-.7153,2.3808,-.2415,-2.4522,-.2439,.154,-1.5632,1.9232,.214,-2.1731,-1.1728,.1144,-1.1615,2.1942,.2322,-2.358,-.7222,.0704,-.7153,2.3808,.2415,-2.4522,-.2439,.2415,-2.4522,.2439,.0704,-.7153,-2.3808,.2322,-2.358,.7222,.1144,-1.1615,-2.1942,.214,-2.1731,1.1728,.154,-1.5632,-1.9232,.1876,-1.9047,1.5783,.1876,-1.9047,-1.5783,.2086,-.6878,-2.3808,.6878,-2.2673,.7222,.3388,-1.1169,-2.1942,.6339,-2.0896,1.1728,.456,-1.5031,-1.9232,.5556,-1.8315,1.5783,.5556,-1.8315,-1.5783,.456,-1.5031,1.9232,.6339,-2.0896,-1.1728,.3388,-1.1169,2.1942,.6878,-2.2673,-.7222,.2086,-.6878,2.3808,.7153,-2.358,-.2439,.7153,-2.358,.2439,1.0294,-1.9258,-1.1728,.5502,-1.0294,2.1942,1.1169,-2.0896,-.7222,.3388,-.6339,2.3808,1.1615,-2.1731,-.2439,1.1615,-2.1731,.2439,.3388,-.6339,-2.3808,1.1169,-2.0896,.7222,.5502,-1.0294,-2.1942,1.0294,-1.9258,1.1728,.7404,-1.3853,-1.9232,.9022,-1.688,1.5783,.9022,-1.688,-1.5783,.7404,-1.3853,1.9232,1.5031,-1.8315,.7222,.7404,-.9022,-2.1942,1.3853,-1.688,1.1728,.9965,-1.2142,-1.9232,1.2142,-1.4795,1.5783,1.2142,-1.4795,-1.5783,.9965,-1.2142,1.9232,1.3853,-1.688,-1.1728,.7404,-.9022,2.1942,1.5031,-1.8315,-.7222,.456,-.5556,2.3808,1.5632,-1.9047,-.2439,1.5632,-1.9047,.2439,.456,-.5556,-2.3808,.9022,-.7404,2.1942,1.8315,-1.5031,-.7222,.5556,-.456,2.3808,1.9047,-1.5632,-.2439,1.9047,-1.5632,.2439,.5556,-.456,-2.3808,1.8315,-1.5031,.7222,.9022,-.7404,-2.1942,1.688,-1.3853,1.1728,1.2142,-.9965,-1.9232,1.4795,-1.2142,1.5783,1.4795,-1.2142,-1.5783,1.2142,-.9965,1.9232,1.688,-1.3853,-1.1728,1.9258,-1.0294,1.1728,1.3853,-.7404,-1.9232,1.688,-.9022,1.5783,1.688,-.9022,-1.5783,1.3853,-.7404,1.9232,1.9258,-1.0294,-1.1728,1.0294,-.5502,2.1942,2.0896,-1.1169,-.7222,.6339,-.3388,2.3808,2.1731,-1.1615,-.2439,2.1731,-1.1615,.2439,.6339,-.3388,-2.3808,2.0896,-1.1169,.7222,1.0294,-.5502,-2.1942,.6878,-.2086,2.3808,2.358,-.7153,-.2439,2.358,-.7153,.2439,.6878,-.2086,-2.3808,2.2673,-.6878,.7222,1.1169,-.3388,-2.1942,2.0896,-.6339,1.1728,1.5031,-.456,-1.9232,1.8315,-.5556,1.5783,1.8315,-.5556,-1.5783,1.5031,-.456,1.9232,2.0896,-.6339,-1.1728,1.1169,-.3388,2.1942,2.2673,-.6878,-.7222,1.5632,-.154,-1.9232,1.9047,-.1876,1.5783,1.9047,-.1876,-1.5783,1.5632,-.154,1.9232,2.1731,-.214,-1.1728,1.1615,-.1144,2.1942,2.358,-.2322,-.7222,.7153,-.0704,2.3808,2.4522,-.2415,-.2439,2.4522,-.2415,.2439,.7153,-.0704,-2.3808,2.358,-.2322,.7222,1.1615,-.1144,-2.1942,2.1731,-.214,1.1728,2.4522,.2415,-.2439,2.4522,.2415,.2439,.7153,.0704,-2.3808,2.358,.2322,.7222,1.1615,.1144,-2.1942,2.1731,.214,1.1728,1.5632,.154,-1.9232,1.9047,.1876,1.5783,1.9047,.1876,-1.5783,1.5632,.154,1.9232,2.1731,.214,-1.1728,1.1615,.1144,2.1942,2.358,.2322,-.7222,.7153,.0704,2.3808,1.8315,.5556,1.5783,1.8315,.5556,-1.5783,1.5031,.456,1.9232,2.0896,.6339,-1.1728,1.1169,.3388,2.1942,2.2673,.6878,-.7222,.6878,.2086,2.3808,2.358,.7153,-.2439,2.358,.7153,.2439,.6878,.2086,-2.3808,2.2673,.6878,.7222,1.1169,.3388,-2.1942,2.0896,.6339,1.1728,1.5031,.456,-1.9232,2.1731,1.1615,.2439,.6339,.3388,-2.3808,2.0896,1.1169,.7222,1.0294,.5502,-2.1942,1.9258,1.0294,1.1728,1.3853,.7404,-1.9232,1.688,.9022,1.5783,1.688,.9022,-1.5783,1.3853,.7404,1.9232,1.9258,1.0294,-1.1728,1.0294,.5502,2.1942,2.0896,1.1169,-.7222,.6339,.3388,2.3808,2.1731,1.1615,-.2439,1.4795,1.2142,-1.5783,1.2142,.9965,1.9232,1.688,1.3853,-1.1728,.9022,.7404,2.1942,1.8315,1.5031,-.7222,.5556,.456,2.3808,1.9047,1.5632,-.2439,1.9047,1.5632,.2439,.5556,.456,-2.3808,1.8315,1.5031,.7222,.9022,.7404,-2.1942,1.688,1.3853,1.1728,1.2142,.9965,-1.9232,1.4795,1.2142,1.5783,1.5632,1.9047,.2439,.456,.5556,-2.3808,1.5031,1.8315,.7222,.7404,.9022,-2.1942,1.3853,1.688,1.1728,.9965,1.2142,-1.9232,1.2142,1.4795,1.5783,1.2142,1.4795,-1.5783,.9965,1.2142,1.9232,1.3853,1.688,-1.1728,.7404,.9022,2.1942,1.5031,1.8315,-.7222,.456,.5556,2.3808,1.5632,1.9047,-.2439,.7404,1.3853,1.9232,1.0294,1.9258,-1.1728,.5502,1.0294,2.1942,1.1169,2.0896,-.7222,.3388,.6339,2.3808,1.1615,2.1731,-.2439,1.1615,2.1731,.2439,.3388,.6339,-2.3808,1.1169,2.0896,.7222,.5502,1.0294,-2.1942,1.0294,1.9258,1.1728,.7404,1.3853,-1.9232,.9022,1.688,1.5783,.9022,1.688,-1.5783,.6878,2.2673,.7222,.3388,1.1169,-2.1942,.6339,2.0896,1.1728,.456,1.5031,-1.9232,.5556,1.8315,1.5783,.5556,1.8315,-1.5783,.456,1.5031,1.9232,.6339,2.0896,-1.1728,.3388,1.1169,2.1942,.6878,2.2673,-.7222,.2086,.6878,2.3808,.7153,2.358,-.2439,.7153,2.358,.2439,.2086,.6878,-2.3808,.2415,2.4522,.2439,.0704,.7153,-2.3808,.2322,2.358,.7222,.1144,1.1615,-2.1942,.214,2.1731,1.1728,.154,1.5632,-1.9232,.1876,1.9047,1.5783,.1876,1.9047,-1.5783,.154,1.5632,1.9232,.214,2.1731,-1.1728,.1144,1.1615,2.1942,.2322,2.358,-.7222,.0704,.7153,2.3808,.2415,2.4522,-.2439]};var Ru=sh(bu());var Zt=sh(bu());var sd={steps:16,pentatonic:[0,2,4,7,9],signatures:{jungla:{label:"Jungla",tempo:104,geo:{type:"lowpass",hz:900,q:.4,swellHz:.23,depth:.25,gain:.16},voices:[{id:"bajo",name:"Bajo",band:"90\u2013200 Hz",k:3,rot:0,hz:165,haptic:{hz:70,amp:.85,ms:40}},{id:"arpegio",name:"Arpegio",band:"2.3\u20134 kHz",k:5,rot:2,rootMidi:98,haptic:{hz:200,amp:.45,ms:20}},{id:"pulso",name:"Pulso",band:"5.6 kHz",k:9,rot:1,hz:5600,amHz:22,haptic:{hz:320,amp:.3,ms:12}},{id:"canto",name:"Canto",band:"500\u2013900 Hz",k:1,rot:12,hz:620,haptic:{hz:120,amp:.6,ms:150}}]},hielo:{label:"Hielo marino",tempo:52,pressure:{type:"heat",hz:55},geo:{type:"bandpass",hz:520,q:1.1,swellHz:.07,depth:.6,gain:.3},voices:[{id:"bajo",name:"Bajo",band:"60\u201390 Hz",k:2,rot:0,hz:88,haptic:{hz:60,amp:.85,ms:60}},{id:"arpegio",name:"Arpegio",band:"2.4\u20133.6 kHz",k:3,rot:5,rootMidi:99,haptic:{hz:220,amp:.4,ms:24}},{id:"pulso",name:"Pulso",band:"6.2 kHz",k:5,rot:2,hz:6200,amHz:0,haptic:{hz:340,amp:.3,ms:10}},{id:"canto",name:"Canto",band:"600\u2013800 Hz",k:1,rot:10,hz:660,haptic:{hz:110,amp:.55,ms:220}}]},gases:{label:"Gases de efecto invernadero",tempo:60,geo:{type:"lowpass",hz:480,q:.5,swellHz:.25,depth:.8,gain:.3},voices:[{id:"bajo",name:"Bajo",band:"70\u2013100 Hz",k:2,rot:0,hz:98,haptic:{hz:60,amp:.85,ms:90}},{id:"arpegio",name:"Melod\xEDa",band:"520\u2013880 Hz",k:8,rot:0,rootMidi:72,melody:[0,1,2,3,4,3,1,0],haptic:{hz:150,amp:.45,ms:30}},{id:"pulso",name:"Pulso",band:"5 kHz",k:7,rot:1,hz:5e3,amHz:0,haptic:{hz:310,amp:.28,ms:10}},{id:"canto",name:"Canto",band:"390\u2013590 Hz",k:1,rot:12,hz:392,haptic:{hz:100,amp:.6,ms:240}}]}},presets:{jungla:{reference:{year:0,value:0,vital:{vit:95,div:100,est:95,pre:5,fever:0},masks:{bajo:2113,arpegio:37444,pulso:22187,canto:4096},scaleSize:5,jitterMs:4,detuneCents:2,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},label:"Jungla",signature:"jungla",unit:"km\xB2 talados ese a\xF1o",source:"INPE PRODES, Amazonia Legal",tempo:104,years:[{year:1988,value:21050,vital:{vit:92.7,div:97.9,est:55.8,pre:63,fever:0},masks:{bajo:2113,arpegio:18722,pulso:22187,canto:512},scaleSize:5,jitterMs:31,detuneCents:18,bioCutoffHz:4121,reverbWet:.176,anthroGain:.218,velocity:.964},{year:1989,value:17770,vital:{vit:90.8,div:96.2,est:61.4,pre:53.9,fever:0},masks:{bajo:2113,arpegio:37440,pulso:21675,canto:1024},scaleSize:5,jitterMs:27,detuneCents:15,bioCutoffHz:4809,reverbWet:.2,anthroGain:.16,velocity:.954},{year:1990,value:13730,vital:{vit:89.3,div:94.8,est:68.4,pre:42.8,fever:0},masks:{bajo:2113,arpegio:37440,pulso:21675,canto:4096},scaleSize:5,jitterMs:22,detuneCents:13,bioCutoffHz:5806,reverbWet:.229,anthroGain:.101,velocity:.947},{year:1991,value:11030,vital:{vit:88.1,div:93.7,est:73,pre:35.4,fever:0},masks:{bajo:2113,arpegio:37440,pulso:21675,canto:4096},scaleSize:5,jitterMs:19,detuneCents:11,bioCutoffHz:6582,reverbWet:.248,anthroGain:.069,velocity:.94},{year:1992,value:13786,vital:{vit:86.6,div:92.4,est:68.3,pre:43,fever:0},masks:{bajo:2113,arpegio:37440,pulso:21675,canto:4096},scaleSize:5,jitterMs:22,detuneCents:13,bioCutoffHz:5786,reverbWet:.228,anthroGain:.102,velocity:.933},{year:1993,value:14896,vital:{vit:85,div:90.9,est:66.4,pre:46,fever:0},masks:{bajo:2113,arpegio:37440,pulso:21675,canto:2048},scaleSize:5,jitterMs:24,detuneCents:13,bioCutoffHz:5499,reverbWet:.22,anthroGain:.116,velocity:.925},{year:1994,value:14896,vital:{vit:83.4,div:89.4,est:66.4,pre:46,fever:0},masks:{bajo:2113,arpegio:37440,pulso:21675,canto:2048},scaleSize:5,jitterMs:24,detuneCents:13,bioCutoffHz:5499,reverbWet:.22,anthroGain:.116,velocity:.917},{year:1995,value:29059,vital:{vit:80.2,div:86.5,est:42,pre:85,fever:0},masks:{bajo:2113,arpegio:18722,pulso:43348,canto:0},scaleSize:5,jitterMs:41,detuneCents:23,bioCutoffHz:2838,reverbWet:.119,anthroGain:.397,velocity:.901},{year:1996,value:18161,vital:{vit:78.2,div:84.8,est:60.8,pre:55,fever:0},masks:{bajo:2113,arpegio:37440,pulso:21674,canto:0},scaleSize:5,jitterMs:27,detuneCents:16,bioCutoffHz:4720,reverbWet:.197,anthroGain:.166,velocity:.891},{year:1997,value:13227,vital:{vit:76.8,div:83.4,est:69.2,pre:41.4,fever:0},masks:{bajo:2113,arpegio:37440,pulso:21674,canto:0},scaleSize:5,jitterMs:22,detuneCents:12,bioCutoffHz:5945,reverbWet:.232,anthroGain:.094,velocity:.884},{year:1998,value:17383,vital:{vit:74.9,div:81.7,est:62.1,pre:52.9,fever:0},masks:{bajo:2113,arpegio:37440,pulso:21674,canto:0},scaleSize:4,jitterMs:27,detuneCents:15,bioCutoffHz:4891,reverbWet:.202,anthroGain:.154,velocity:.875},{year:1999,value:17259,vital:{vit:73,div:80,est:62.3,pre:52.5,fever:0},masks:{bajo:2113,arpegio:37440,pulso:21674,canto:0},scaleSize:4,jitterMs:26,detuneCents:15,bioCutoffHz:4925,reverbWet:.204,anthroGain:.152,velocity:.865},{year:2e3,value:18226,vital:{vit:71,div:78.2,est:60.6,pre:55.2,fever:0},masks:{bajo:2049,arpegio:37440,pulso:21674,canto:0},scaleSize:4,jitterMs:28,detuneCents:16,bioCutoffHz:4704,reverbWet:.196,anthroGain:.168,velocity:.855},{year:2001,value:18165,vital:{vit:69.1,div:76.4,est:60.7,pre:55,fever:0},masks:{bajo:2049,arpegio:4672,pulso:21674,canto:0},scaleSize:4,jitterMs:28,detuneCents:16,bioCutoffHz:4720,reverbWet:.197,anthroGain:.166,velocity:.845},{year:2002,value:21651,vital:{vit:66.7,div:74.3,est:54.7,pre:64.6,fever:0},masks:{bajo:2049,arpegio:18722,pulso:21674,canto:0},scaleSize:4,jitterMs:32,detuneCents:18,bioCutoffHz:4011,reverbWet:.172,anthroGain:.23,velocity:.834},{year:2003,value:25396,vital:{vit:64,div:71.8,est:48.3,pre:74.9,fever:0},masks:{bajo:2049,arpegio:18722,pulso:21674,canto:0},scaleSize:4,jitterMs:36,detuneCents:21,bioCutoffHz:3368,reverbWet:.145,anthroGain:.309,velocity:.82},{year:2004,value:27772,vital:{vit:60.9,div:69,est:44.2,pre:81.5,fever:0},masks:{bajo:2049,arpegio:2338,pulso:43348,canto:0},scaleSize:4,jitterMs:39,detuneCents:22,bioCutoffHz:3011,reverbWet:.128,anthroGain:.365,velocity:.805},{year:2005,value:19014,vital:{vit:58.9,div:67.2,est:59.3,pre:57.3,fever:0},masks:{bajo:2049,arpegio:4672,pulso:21674,canto:0},scaleSize:4,jitterMs:28,detuneCents:16,bioCutoffHz:4540,reverbWet:.191,anthroGain:.181,velocity:.795},{year:2006,value:14286,vital:{vit:57.3,div:65.8,est:67.4,pre:44.3,fever:0},masks:{bajo:2049,arpegio:4672,pulso:21674,canto:0},scaleSize:4,jitterMs:23,detuneCents:13,bioCutoffHz:5660,reverbWet:.225,anthroGain:.108,velocity:.787},{year:2007,value:11651,vital:{vit:56.1,div:64.6,est:72,pre:37.1,fever:0},masks:{bajo:2049,arpegio:4672,pulso:21674,canto:0},scaleSize:4,jitterMs:20,detuneCents:11,bioCutoffHz:6395,reverbWet:.244,anthroGain:.076,velocity:.781},{year:2008,value:12911,vital:{vit:54.7,div:63.3,est:69.8,pre:40.5,fever:0},masks:{bajo:2048,arpegio:4672,pulso:21674,canto:0},scaleSize:4,jitterMs:21,detuneCents:12,bioCutoffHz:6037,reverbWet:.235,anthroGain:.09,velocity:.774},{year:2009,value:7464,vital:{vit:53.9,div:62.6,est:79.2,pre:25.5,fever:0},masks:{bajo:2048,arpegio:4672,pulso:21674,canto:0},scaleSize:4,jitterMs:15,detuneCents:8,bioCutoffHz:7786,reverbWet:.274,anthroGain:.036,velocity:.77},{year:2010,value:7e3,vital:{vit:53.1,div:61.9,est:80,pre:24.3,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:14,detuneCents:8,bioCutoffHz:7946,reverbWet:.277,anthroGain:.032,velocity:.766},{year:2011,value:6418,vital:{vit:52.4,div:61.3,est:81,pre:22.7,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:13,detuneCents:8,bioCutoffHz:8165,reverbWet:.281,anthroGain:.028,velocity:.762},{year:2012,value:4571,vital:{vit:51.9,div:60.8,est:84.1,pre:17.6,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:11,detuneCents:6,bioCutoffHz:8902,reverbWet:.294,anthroGain:.017,velocity:.76},{year:2013,value:5891,vital:{vit:51.3,div:60.2,est:81.9,pre:21.2,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:13,detuneCents:7,bioCutoffHz:8375,reverbWet:.285,anthroGain:.025,velocity:.757},{year:2014,value:5012,vital:{vit:50.7,div:59.7,est:83.4,pre:18.8,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:12,detuneCents:7,bioCutoffHz:8723,reverbWet:.291,anthroGain:.019,velocity:.754},{year:2015,value:6207,vital:{vit:50,div:59.1,est:81.3,pre:22.1,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:13,detuneCents:7,bioCutoffHz:8248,reverbWet:.283,anthroGain:.027,velocity:.75},{year:2016,value:7893,vital:{vit:49.2,div:58.3,est:78.4,pre:26.7,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:15,detuneCents:9,bioCutoffHz:7629,reverbWet:.271,anthroGain:.039,velocity:.746},{year:2017,value:6947,vital:{vit:48.4,div:57.7,est:80,pre:24.1,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:14,detuneCents:8,bioCutoffHz:7973,reverbWet:.277,anthroGain:.032,velocity:.742},{year:2018,value:7536,vital:{vit:47.6,div:56.9,est:79,pre:25.7,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:15,detuneCents:8,bioCutoffHz:7760,reverbWet:.273,anthroGain:.036,velocity:.738},{year:2019,value:10129,vital:{vit:46.5,div:55.9,est:74.6,pre:32.9,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:18,detuneCents:10,bioCutoffHz:6867,reverbWet:.254,anthroGain:.06,velocity:.733},{year:2020,value:10851,vital:{vit:45.3,div:54.8,est:73.3,pre:34.9,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:19,detuneCents:11,bioCutoffHz:6638,reverbWet:.249,anthroGain:.067,velocity:.726},{year:2021,value:13038,vital:{vit:43.9,div:53.6,est:69.6,pre:40.9,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:21,detuneCents:12,bioCutoffHz:5996,reverbWet:.234,anthroGain:.092,velocity:.72},{year:2022,value:11594,vital:{vit:42.7,div:52.4,est:72.1,pre:36.9,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:20,detuneCents:11,bioCutoffHz:6417,reverbWet:.244,anthroGain:.075,velocity:.714},{year:2023,value:9064,vital:{vit:41.7,div:51.5,est:76.4,pre:30,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:17,detuneCents:9,bioCutoffHz:7214,reverbWet:.262,anthroGain:.05,velocity:.709},{year:2024,value:6288,vital:{vit:41,div:50.9,est:81.2,pre:22.3,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:13,detuneCents:8,bioCutoffHz:8220,reverbWet:.282,anthroGain:.027,velocity:.705},{year:2025,value:5731,vital:{vit:40.4,div:50.3,est:82.1,pre:20.8,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:13,detuneCents:7,bioCutoffHz:8432,reverbWet:.286,anthroGain:.024,velocity:.702},{year:2026,value:3335,vital:{vit:40,div:50,est:86.3,pre:14.2,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:10,detuneCents:5,bioCutoffHz:9431,reverbWet:.303,anthroGain:.011,velocity:.7}]},hielo:{reference:{year:0,value:0,vital:{vit:95,div:100,est:95,pre:5,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:4,detuneCents:2,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},label:"Hielo marino",signature:"hielo",unit:"millones de km\xB2 en septiembre",source:"NSIDC Sea Ice Index, \xC1rtico",tempo:52,years:[{year:1979,value:7.05,vital:{vit:92.7,div:97.9,est:93.8,pre:7.9,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:4,detuneCents:2,bioCutoffHz:10495,reverbWet:.319,anthroGain:.003,velocity:.964},{year:1980,value:7.67,vital:{vit:95,div:100,est:80.5,pre:5,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:14,detuneCents:8,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},{year:1981,value:7.14,vital:{vit:94,div:99.1,est:82.1,pre:6.3,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:13,detuneCents:7,bioCutoffHz:10784,reverbWet:.324,anthroGain:.002,velocity:.97},{year:1982,value:7.3,vital:{vit:95,div:100,est:91.3,pre:5,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:6,detuneCents:3,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},{year:1983,value:7.39,vital:{vit:95,div:100,est:92.9,pre:5,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:5,detuneCents:3,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},{year:1984,value:6.81,vital:{vit:89.3,div:94.8,est:78.6,pre:12.2,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:1024},scaleSize:5,jitterMs:15,detuneCents:9,bioCutoffHz:9757,reverbWet:.308,anthroGain:.008,velocity:.947},{year:1985,value:6.7,vital:{vit:87.7,div:93.3,est:88.8,pre:14.1,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:1024},scaleSize:5,jitterMs:8,detuneCents:4,bioCutoffHz:9447,reverbWet:.303,anthroGain:.011,velocity:.939},{year:1986,value:7.41,vital:{vit:95,div:100,est:78.4,pre:5,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:15,detuneCents:9,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},{year:1987,value:7.28,vital:{vit:95,div:100,est:92,pre:5,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:6,detuneCents:3,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},{year:1988,value:7.37,vital:{vit:95,div:100,est:92.9,pre:5,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:5,detuneCents:3,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},{year:1989,value:7.01,vital:{vit:92.1,div:97.4,est:85.2,pre:8.6,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:10,detuneCents:6,bioCutoffHz:10371,reverbWet:.318,anthroGain:.004,velocity:.96},{year:1990,value:6.14,vital:{vit:79.7,div:86,est:67.1,pre:24.1,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:0},scaleSize:5,jitterMs:23,detuneCents:13,bioCutoffHz:7973,reverbWet:.277,anthroGain:.032,velocity:.899},{year:1991,value:6.47,vital:{vit:84.4,div:90.3,est:82,pre:18.2,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:1024},scaleSize:5,jitterMs:13,detuneCents:7,bioCutoffHz:8812,reverbWet:.293,anthroGain:.018,velocity:.922},{year:1992,value:7.47,vital:{vit:95,div:100,est:71.7,pre:5,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:20,detuneCents:11,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},{year:1993,value:6.4,vital:{vit:83.4,div:89.4,est:64.2,pre:19.5,fever:0},masks:{bajo:257,arpegio:33808,pulso:36932,canto:512},scaleSize:5,jitterMs:25,detuneCents:14,bioCutoffHz:8620,reverbWet:.289,anthroGain:.021,velocity:.917},{year:1994,value:7.14,vital:{vit:94,div:99.1,est:77.2,pre:6.3,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:16,detuneCents:9,bioCutoffHz:10784,reverbWet:.324,anthroGain:.002,velocity:.97},{year:1995,value:6.08,vital:{vit:78.9,div:85.2,est:62.2,pre:25.2,fever:0},masks:{bajo:257,arpegio:33808,pulso:36932,canto:0},scaleSize:5,jitterMs:26,detuneCents:15,bioCutoffHz:7826,reverbWet:.274,anthroGain:.035,velocity:.895},{year:1996,value:7.58,vital:{vit:95,div:100,est:60,pre:5,fever:0},masks:{bajo:257,arpegio:33808,pulso:37444,canto:256},scaleSize:5,jitterMs:28,detuneCents:16,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},{year:1997,value:6.69,vital:{vit:87.6,div:93.2,est:70.5,pre:14.3,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:1024},scaleSize:5,jitterMs:21,detuneCents:12,bioCutoffHz:9415,reverbWet:.303,anthroGain:.011,velocity:.938},{year:1998,value:6.54,vital:{vit:85.4,div:91.2,est:86.7,pre:17,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:1024},scaleSize:5,jitterMs:9,detuneCents:5,bioCutoffHz:8994,reverbWet:.296,anthroGain:.016,velocity:.927},{year:1999,value:6.12,vital:{vit:79.4,div:85.7,est:77.4,pre:24.4,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:0},scaleSize:5,jitterMs:16,detuneCents:9,bioCutoffHz:7933,reverbWet:.277,anthroGain:.033,velocity:.897},{year:2e3,value:6.25,vital:{vit:81.3,div:87.4,est:85.1,pre:22.1,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:0},scaleSize:5,jitterMs:10,detuneCents:6,bioCutoffHz:8248,reverbWet:.283,anthroGain:.027,velocity:.907},{year:2001,value:6.73,vital:{vit:88.1,div:93.7,est:80.4,pre:13.6,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:1024},scaleSize:5,jitterMs:14,detuneCents:8,bioCutoffHz:9528,reverbWet:.305,anthroGain:.01,velocity:.94},{year:2002,value:5.83,vital:{vit:75.3,div:82,est:64.2,pre:29.6,fever:0},masks:{bajo:257,arpegio:33808,pulso:36932,canto:0},scaleSize:4,jitterMs:25,detuneCents:14,bioCutoffHz:7263,reverbWet:.263,anthroGain:.048,velocity:.877},{year:2003,value:6.12,vital:{vit:79.4,div:85.7,est:80.5,pre:24.4,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:0},scaleSize:5,jitterMs:14,detuneCents:8,bioCutoffHz:7933,reverbWet:.277,anthroGain:.033,velocity:.897},{year:2004,value:5.98,vital:{vit:77.5,div:83.9,est:83,pre:26.9,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:0},scaleSize:5,jitterMs:12,detuneCents:7,bioCutoffHz:7603,reverbWet:.27,anthroGain:.04,velocity:.888},{year:2005,value:5.5,vital:{vit:70.6,div:77.6,est:71.6,pre:35.5,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:0},scaleSize:4,jitterMs:20,detuneCents:11,bioCutoffHz:6571,reverbWet:.248,anthroGain:.069,velocity:.853},{year:2006,value:5.86,vital:{vit:75.7,div:82.3,est:77,pre:29.1,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:0},scaleSize:4,jitterMs:16,detuneCents:9,bioCutoffHz:7325,reverbWet:.264,anthroGain:.047,velocity:.879},{year:2007,value:4.27,vital:{vit:53.1,div:61.6,est:39,pre:57.4,fever:0},masks:{bajo:1,arpegio:256,pulso:0,canto:0},scaleSize:4,jitterMs:43,detuneCents:24,bioCutoffHz:4532,reverbWet:.191,anthroGain:.181,velocity:.766},{year:2008,value:4.69,vital:{vit:59.1,div:67.1,est:67.2,pre:49.9,fever:0},masks:{bajo:1,arpegio:2080,pulso:36932,canto:0},scaleSize:4,jitterMs:23,detuneCents:13,bioCutoffHz:5147,reverbWet:.21,anthroGain:.137,velocity:.796},{year:2009,value:5.26,vital:{vit:67.2,div:74.5,est:67.8,pre:39.8,fever:0},masks:{bajo:1,arpegio:2080,pulso:36932,canto:0},scaleSize:4,jitterMs:23,detuneCents:13,bioCutoffHz:6109,reverbWet:.237,anthroGain:.087,velocity:.836},{year:2010,value:4.87,vital:{vit:61.6,div:69.4,est:69.2,pre:46.7,fever:0},masks:{bajo:1,arpegio:2080,pulso:36932,canto:0},scaleSize:4,jitterMs:22,detuneCents:12,bioCutoffHz:5434,reverbWet:.219,anthroGain:.12,velocity:.808},{year:2011,value:4.56,vital:{vit:57.2,div:65.4,est:68.9,pre:52.2,fever:0},masks:{bajo:1,arpegio:2048,pulso:36932,canto:0},scaleSize:4,jitterMs:22,detuneCents:12,bioCutoffHz:4950,reverbWet:.204,anthroGain:.15,velocity:.786},{year:2012,value:3.57,vital:{vit:43.1,div:52.4,est:46,pre:69.9,fever:0},masks:{bajo:1,arpegio:520,pulso:0,canto:0},scaleSize:4,jitterMs:38,detuneCents:22,bioCutoffHz:3666,reverbWet:.158,anthroGain:.269,velocity:.716},{year:2013,value:5.21,vital:{vit:66.5,div:73.9,est:45.7,pre:40.6,fever:0},masks:{bajo:1,arpegio:16904,pulso:18722,canto:0},scaleSize:4,jitterMs:38,detuneCents:22,bioCutoffHz:6026,reverbWet:.234,anthroGain:.091,velocity:.833},{year:2014,value:5.22,vital:{vit:66.6,div:74,est:80.6,pre:40.5,fever:0},masks:{bajo:1,arpegio:2080,pulso:36932,canto:0},scaleSize:4,jitterMs:14,detuneCents:8,bioCutoffHz:6037,reverbWet:.235,anthroGain:.09,velocity:.833},{year:2015,value:4.62,vital:{vit:58.1,div:66.2,est:62.5,pre:51.2,fever:0},masks:{bajo:1,arpegio:1040,pulso:36932,canto:0},scaleSize:4,jitterMs:26,detuneCents:15,bioCutoffHz:5035,reverbWet:.207,anthroGain:.144,velocity:.791},{year:2016,value:4.53,vital:{vit:56.8,div:65,est:73.8,pre:52.8,fever:0},masks:{bajo:1,arpegio:2048,pulso:36932,canto:0},scaleSize:4,jitterMs:18,detuneCents:10,bioCutoffHz:4900,reverbWet:.203,anthroGain:.153,velocity:.784},{year:2017,value:4.82,vital:{vit:60.9,div:68.8,est:71.2,pre:47.6,fever:0},masks:{bajo:1,arpegio:2080,pulso:36932,canto:0},scaleSize:4,jitterMs:20,detuneCents:12,bioCutoffHz:5352,reverbWet:.216,anthroGain:.125,velocity:.805},{year:2018,value:4.79,vital:{vit:60.5,div:68.4,est:77,pre:48.1,fever:0},masks:{bajo:1,arpegio:2080,pulso:36932,canto:0},scaleSize:4,jitterMs:16,detuneCents:9,bioCutoffHz:5306,reverbWet:.215,anthroGain:.127,velocity:.803},{year:2019,value:4.32,vital:{vit:53.8,div:62.2,est:63.4,pre:56.5,fever:0},masks:{bajo:1,arpegio:1040,pulso:0,canto:0},scaleSize:4,jitterMs:26,detuneCents:15,bioCutoffHz:4602,reverbWet:.193,anthroGain:.176,velocity:.769},{year:2020,value:3.92,vital:{vit:48.1,div:57,est:62.2,pre:63.6,fever:0},masks:{bajo:1,arpegio:1040,pulso:0,canto:0},scaleSize:4,jitterMs:26,detuneCents:15,bioCutoffHz:4079,reverbWet:.175,anthroGain:.222,velocity:.741},{year:2021,value:4.92,vital:{vit:62.4,div:70.1,est:55.3,pre:45.8,fever:0},masks:{bajo:1,arpegio:1040,pulso:18722,canto:0},scaleSize:4,jitterMs:31,detuneCents:18,bioCutoffHz:5518,reverbWet:.221,anthroGain:.115,velocity:.812},{year:2022,value:4.87,vital:{vit:61.6,div:69.4,est:77.2,pre:46.7,fever:0},masks:{bajo:1,arpegio:2080,pulso:36932,canto:0},scaleSize:4,jitterMs:16,detuneCents:9,bioCutoffHz:5434,reverbWet:.219,anthroGain:.12,velocity:.808},{year:2023,value:4.37,vital:{vit:54.5,div:62.9,est:63.1,pre:55.6,fever:0},masks:{bajo:1,arpegio:1040,pulso:36932,canto:0},scaleSize:4,jitterMs:26,detuneCents:15,bioCutoffHz:4672,reverbWet:.195,anthroGain:.17,velocity:.773},{year:2024,value:4.38,vital:{vit:54.7,div:63,est:74.6,pre:55.4,fever:0},masks:{bajo:1,arpegio:2048,pulso:36932,canto:0},scaleSize:4,jitterMs:18,detuneCents:10,bioCutoffHz:4688,reverbWet:.196,anthroGain:.169,velocity:.774},{year:2025,value:4.75,vital:{vit:59.9,div:67.9,est:68.8,pre:48.8,fever:0},masks:{bajo:1,arpegio:2080,pulso:36932,canto:0},scaleSize:4,jitterMs:22,detuneCents:12,bioCutoffHz:5244,reverbWet:.213,anthroGain:.131,velocity:.8}]},gases:{reference:{year:0,value:0,vital:{vit:95,div:100,est:95,pre:5,fever:0},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:4,detuneCents:2,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},label:"Gases de efecto invernadero",signature:"gases",unit:"ppm de CO\u2082 en Mauna Loa",source:"NOAA Global Monitoring Laboratory",tempo:60,years:[{year:1959,value:315.98,vital:{vit:95,div:100,est:95,pre:24.8,fever:0},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:4,detuneCents:2,bioCutoffHz:7879,reverbWet:.276,anthroGain:.034,velocity:.975},{year:1960,value:316.91,vital:{vit:94.6,div:99.6,est:94.7,pre:24.8,fever:.4},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:4,detuneCents:2,bioCutoffHz:7879,reverbWet:.276,anthroGain:.034,velocity:.973},{year:1961,value:317.64,vital:{vit:94.3,div:99.3,est:91.8,pre:20.5,fever:.7},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:6,detuneCents:3,bioCutoffHz:8475,reverbWet:.287,anthroGain:.023,velocity:.972},{year:1962,value:318.45,vital:{vit:94,div:99,est:93.2,pre:22.2,fever:1.1},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:5,detuneCents:3,bioCutoffHz:8234,reverbWet:.282,anthroGain:.027,velocity:.97},{year:1963,value:318.99,vital:{vit:93.8,div:98.8,est:90.5,pre:16.5,fever:1.4},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:7,detuneCents:4,bioCutoffHz:9070,reverbWet:.297,anthroGain:.015,velocity:.969},{year:1964,value:319.62,vital:{vit:93.5,div:98.5,est:92.7,pre:18.4,fever:1.6},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:5,detuneCents:3,bioCutoffHz:8782,reverbWet:.292,anthroGain:.019,velocity:.968},{year:1965,value:320.04,vital:{vit:93.4,div:98.4,est:90.9,pre:13.9,fever:1.8},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:6,detuneCents:4,bioCutoffHz:9479,reverbWet:.304,anthroGain:.011,velocity:.967},{year:1966,value:321.37,vital:{vit:92.8,div:97.8,est:81.2,pre:33.3,fever:2.4},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:13,detuneCents:8,bioCutoffHz:6821,reverbWet:.253,anthroGain:.061,velocity:.964},{year:1967,value:322.18,vital:{vit:92.5,div:97.5,est:86.1,pre:22.2,fever:2.8},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:10,detuneCents:6,bioCutoffHz:8234,reverbWet:.282,anthroGain:.027,velocity:.963},{year:1968,value:323.05,vital:{vit:92.1,div:97.1,est:92,pre:23.5,fever:3.2},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:6,detuneCents:3,bioCutoffHz:8055,reverbWet:.279,anthroGain:.03,velocity:.96},{year:1969,value:324.62,vital:{vit:91.5,div:96.5,est:83,pre:38.4,fever:3.9},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:12,detuneCents:7,bioCutoffHz:6256,reverbWet:.24,anthroGain:.081,velocity:.958},{year:1970,value:325.68,vital:{vit:91.1,div:96.1,est:85.2,pre:27.5,fever:4.4},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:10,detuneCents:6,bioCutoffHz:7526,reverbWet:.269,anthroGain:.042,velocity:.956},{year:1971,value:326.32,vital:{vit:90.8,div:95.8,est:86.2,pre:18.6,fever:4.6},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:10,detuneCents:6,bioCutoffHz:8753,reverbWet:.292,anthroGain:.019,velocity:.954},{year:1972,value:327.46,vital:{vit:90.4,div:95.4,est:84.7,pre:29.2,fever:5.2},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:11,detuneCents:6,bioCutoffHz:7312,reverbWet:.264,anthroGain:.047,velocity:.952},{year:1973,value:329.68,vital:{vit:89.5,div:94.5,est:76.3,pre:52.2,fever:6.2},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:17,detuneCents:9,bioCutoffHz:4950,reverbWet:.204,anthroGain:.15,velocity:.948},{year:1974,value:330.19,vital:{vit:89.3,div:94.3,est:70.5,pre:15.8,fever:6.4},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:21,detuneCents:12,bioCutoffHz:9179,reverbWet:.299,anthroGain:.014,velocity:.947},{year:1975,value:331.13,vital:{vit:88.9,div:93.9,est:84.5,pre:25,fever:6.8},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:11,detuneCents:6,bioCutoffHz:7852,reverbWet:.275,anthroGain:.034,velocity:.945},{year:1976,value:332.03,vital:{vit:88.5,div:93.5,est:89.4,pre:24.1,fever:7.2},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:7,detuneCents:4,bioCutoffHz:7973,reverbWet:.277,anthroGain:.032,velocity:.943},{year:1977,value:333.84,vital:{vit:87.8,div:92.8,est:77.3,pre:43.5,fever:8},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:16,detuneCents:9,bioCutoffHz:5737,reverbWet:.227,anthroGain:.104,velocity:.939},{year:1978,value:335.41,vital:{vit:87.1,div:92.1,est:85.7,pre:38.4,fever:8.7},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:10,detuneCents:6,bioCutoffHz:6256,reverbWet:.24,anthroGain:.081,velocity:.936},{year:1979,value:336.84,vital:{vit:86.6,div:91.6,est:86.6,pre:35.4,fever:9.4},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:9,detuneCents:5,bioCutoffHz:6582,reverbWet:.248,anthroGain:.069,velocity:.933},{year:1980,value:338.76,vital:{vit:85.8,div:90.8,est:81.3,pre:45.8,fever:10.2},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:13,detuneCents:7,bioCutoffHz:5518,reverbWet:.221,anthroGain:.115,velocity:.929},{year:1981,value:340.12,vital:{vit:85.2,div:90.2,est:79.9,pre:33.9,fever:10.8},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:14,detuneCents:8,bioCutoffHz:6752,reverbWet:.252,anthroGain:.063,velocity:.926},{year:1982,value:341.48,vital:{vit:84.7,div:89.7,est:87,pre:33.9,fever:11.4},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:9,detuneCents:5,bioCutoffHz:6752,reverbWet:.252,anthroGain:.063,velocity:.924},{year:1983,value:343.15,vital:{vit:84,div:89,est:82.3,pre:40.5,fever:12.2},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:12,detuneCents:7,bioCutoffHz:6037,reverbWet:.235,anthroGain:.09,velocity:.92},{year:1984,value:344.87,vital:{vit:83.3,div:88.3,est:85.3,pre:41.5,fever:13},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:10,detuneCents:6,bioCutoffHz:5935,reverbWet:.232,anthroGain:.095,velocity:.917},{year:1985,value:346.35,vital:{vit:82.7,div:87.7,est:82.3,pre:36.4,fever:13.6},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:12,detuneCents:7,bioCutoffHz:6471,reverbWet:.245,anthroGain:.073,velocity:.914},{year:1986,value:347.61,vital:{vit:82.2,div:87.2,est:82.1,pre:31.8,fever:14.2},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:5,jitterMs:13,detuneCents:7,bioCutoffHz:6997,reverbWet:.257,anthroGain:.056,velocity:.911},{year:1987,value:349.31,vital:{vit:81.5,div:86.5,est:78.7,pre:41.1,fever:15},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:5,jitterMs:15,detuneCents:9,bioCutoffHz:5975,reverbWet:.233,anthroGain:.093,velocity:.908},{year:1988,value:351.69,vital:{vit:80.6,div:85.6,est:74.7,pre:55.6,fever:16},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:5,jitterMs:18,detuneCents:10,bioCutoffHz:4672,reverbWet:.195,anthroGain:.17,velocity:.903},{year:1989,value:353.2,vital:{vit:80,div:85,est:71.7,pre:37.1,fever:16.7},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:5,jitterMs:20,detuneCents:11,bioCutoffHz:6395,reverbWet:.244,anthroGain:.076,velocity:.9},{year:1990,value:354.45,vital:{vit:79.5,div:84.5,est:79.4,pre:31.6,fever:17.3},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:5,jitterMs:14,detuneCents:8,bioCutoffHz:7020,reverbWet:.258,anthroGain:.055,velocity:.898},{year:1991,value:355.7,vital:{vit:79,div:84,est:82.5,pre:31.6,fever:17.8},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:5,jitterMs:12,detuneCents:7,bioCutoffHz:7020,reverbWet:.258,anthroGain:.055,velocity:.895},{year:1992,value:356.54,vital:{vit:78.6,div:83.6,est:76.8,pre:22.8,fever:18.2},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:5,jitterMs:16,detuneCents:9,bioCutoffHz:8151,reverbWet:.281,anthroGain:.029,velocity:.893},{year:1993,value:357.21,vital:{vit:78.3,div:83.3,est:79.8,pre:19.2,fever:18.5},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:14,detuneCents:8,bioCutoffHz:8664,reverbWet:.29,anthroGain:.02,velocity:.892},{year:1994,value:358.96,vital:{vit:77.6,div:82.6,est:67.1,pre:42.2,fever:19.3},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:23,detuneCents:13,bioCutoffHz:5865,reverbWet:.23,anthroGain:.098,velocity:.888},{year:1995,value:360.97,vital:{vit:76.8,div:81.8,est:77.4,pre:47.7,fever:20.2},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:16,detuneCents:9,bioCutoffHz:5343,reverbWet:.216,anthroGain:.125,velocity:.884},{year:1996,value:362.74,vital:{vit:76.1,div:81.1,est:77.1,pre:42.6,fever:21},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:16,detuneCents:9,bioCutoffHz:5825,reverbWet:.229,anthroGain:.1,velocity:.881},{year:1997,value:363.88,vital:{vit:75.6,div:80.6,est:71.5,pre:29.2,fever:21.5},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:20,detuneCents:11,bioCutoffHz:7312,reverbWet:.264,anthroGain:.047,velocity:.878},{year:1998,value:366.84,vital:{vit:74.4,div:79.4,est:59,pre:67.9,fever:22.8},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:29,detuneCents:16,bioCutoffHz:3792,reverbWet:.163,anthroGain:.254,velocity:.872},{year:1999,value:368.54,vital:{vit:73.8,div:78.8,est:61.7,pre:41.1,fever:23.6},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:27,detuneCents:15,bioCutoffHz:5975,reverbWet:.233,anthroGain:.093,velocity:.869},{year:2e3,value:369.71,vital:{vit:73.3,div:78.3,est:71,pre:29.9,fever:24.1},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:20,detuneCents:12,bioCutoffHz:7226,reverbWet:.262,anthroGain:.049,velocity:.867},{year:2001,value:371.32,vital:{vit:72.6,div:77.6,est:71.7,pre:39.2,fever:24.8},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:20,detuneCents:11,bioCutoffHz:6171,reverbWet:.238,anthroGain:.085,velocity:.863},{year:2002,value:373.45,vital:{vit:71.8,div:76.8,est:70,pre:50.3,fever:25.8},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:21,detuneCents:12,bioCutoffHz:5112,reverbWet:.209,anthroGain:.139,velocity:.859},{year:2003,value:375.98,vital:{vit:70.8,div:75.8,est:70.8,pre:58.8,fever:26.9},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:20,detuneCents:12,bioCutoffHz:4426,reverbWet:.187,anthroGain:.19,velocity:.854},{year:2004,value:377.7,vital:{vit:70.1,div:75.1,est:64.8,pre:41.5,fever:27.7},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:25,detuneCents:14,bioCutoffHz:5935,reverbWet:.232,anthroGain:.095,velocity:.851},{year:2005,value:379.98,vital:{vit:69.1,div:74.1,est:67.4,pre:53.4,fever:28.7},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:23,detuneCents:13,bioCutoffHz:4850,reverbWet:.201,anthroGain:.157,velocity:.845},{year:2006,value:382.09,vital:{vit:68.3,div:73.3,est:72,pre:49.8,fever:29.7},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:20,detuneCents:11,bioCutoffHz:5156,reverbWet:.211,anthroGain:.136,velocity:.841},{year:2007,value:384.02,vital:{vit:67.5,div:72.5,est:71.2,pre:46,fever:30.5},masks:{bajo:1,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:20,detuneCents:12,bioCutoffHz:5499,reverbWet:.22,anthroGain:.116,velocity:.838},{year:2008,value:385.83,vital:{vit:66.8,div:71.8,est:71.4,pre:43.5,fever:31.4},masks:{bajo:1,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:20,detuneCents:11,bioCutoffHz:5737,reverbWet:.227,anthroGain:.104,velocity:.834},{year:2009,value:387.64,vital:{vit:66,div:71,est:72.5,pre:43.5,fever:32.2},masks:{bajo:1,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:19,detuneCents:11,bioCutoffHz:5737,reverbWet:.227,anthroGain:.104,velocity:.83},{year:2010,value:390.1,vital:{vit:65.1,div:70.1,est:63,pre:57.3,fever:33.3},masks:{bajo:1,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:26,detuneCents:15,bioCutoffHz:4540,reverbWet:.191,anthroGain:.181,velocity:.825},{year:2011,value:391.85,vital:{vit:64.3,div:69.3,est:61.7,pre:42.2,fever:34.1},masks:{bajo:1,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:27,detuneCents:15,bioCutoffHz:5865,reverbWet:.23,anthroGain:.098,velocity:.822},{year:2012,value:394.06,vital:{vit:63.5,div:68.5,est:64.3,pre:52,fever:35.1},masks:{bajo:1,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:25,detuneCents:14,bioCutoffHz:4967,reverbWet:.205,anthroGain:.149,velocity:.818},{year:2013,value:396.74,vital:{vit:62.4,div:67.4,est:63.4,pre:61.9,fever:36.3},masks:{bajo:1,arpegio:5456,pulso:43346,canto:0},scaleSize:4,jitterMs:26,detuneCents:15,bioCutoffHz:4199,reverbWet:.179,anthroGain:.211,velocity:.812},{year:2014,value:398.81,vital:{vit:61.5,div:66.5,est:60.8,pre:49,fever:37.2},masks:{bajo:1,arpegio:5456,pulso:43346,canto:0},scaleSize:4,jitterMs:27,detuneCents:16,bioCutoffHz:5226,reverbWet:.213,anthroGain:.132,velocity:.808},{year:2015,value:401.01,vital:{vit:60.6,div:65.6,est:66.5,pre:51.7,fever:38.2},masks:{bajo:1,arpegio:5456,pulso:43346,canto:0},scaleSize:4,jitterMs:23,detuneCents:13,bioCutoffHz:4992,reverbWet:.206,anthroGain:.147,velocity:.803},{year:2016,value:404.41,vital:{vit:59.3,div:64.3,est:51.2,pre:77.2,fever:39.7},masks:{bajo:1,arpegio:5456,pulso:43346,canto:0},scaleSize:4,jitterMs:34,detuneCents:20,bioCutoffHz:3239,reverbWet:.139,anthroGain:.328,velocity:.797},{year:2017,value:406.76,vital:{vit:58.3,div:63.3,est:52.5,pre:54.9,fever:40.8},masks:{bajo:1,arpegio:5456,pulso:43346,canto:0},scaleSize:4,jitterMs:33,detuneCents:19,bioCutoffHz:4728,reverbWet:.197,anthroGain:.166,velocity:.792},{year:2018,value:408.72,vital:{vit:57.5,div:62.5,est:60.7,pre:46.6,fever:41.6},masks:{bajo:1,arpegio:5456,pulso:43346,canto:0},scaleSize:4,jitterMs:28,detuneCents:16,bioCutoffHz:5443,reverbWet:.219,anthroGain:.119,velocity:.788},{year:2019,value:411.65,vital:{vit:56.3,div:61.3,est:52,pre:67.3,fever:43},masks:{bajo:1,arpegio:5456,pulso:0,canto:0},scaleSize:4,jitterMs:34,detuneCents:19,bioCutoffHz:3831,reverbWet:.165,anthroGain:.249,velocity:.782},{year:2020,value:414.21,vital:{vit:55.3,div:60.3,est:59.2,pre:59.4,fever:44.1},masks:{bajo:1,arpegio:5456,pulso:0,canto:0},scaleSize:4,jitterMs:29,detuneCents:16,bioCutoffHz:4381,reverbWet:.186,anthroGain:.194,velocity:.777},{year:2021,value:416.41,vital:{vit:54.4,div:59.4,est:58.6,pre:51.7,fever:45.1},masks:{bajo:1,arpegio:5456,pulso:0,canto:0},scaleSize:4,jitterMs:29,detuneCents:17,bioCutoffHz:4992,reverbWet:.206,anthroGain:.147,velocity:.772},{year:2022,value:418.53,vital:{vit:53.6,div:58.6,est:61.7,pre:50,fever:46},masks:{bajo:1,arpegio:5456,pulso:0,canto:0},scaleSize:4,jitterMs:27,detuneCents:15,bioCutoffHz:5138,reverbWet:.21,anthroGain:.138,velocity:.768},{year:2023,value:421.08,vital:{vit:52.5,div:57.5,est:56.2,pre:59.2,fever:47.2},masks:{bajo:1,arpegio:5456,pulso:0,canto:0},scaleSize:4,jitterMs:31,detuneCents:18,bioCutoffHz:4396,reverbWet:.186,anthroGain:.193,velocity:.763},{year:2024,value:424.61,vital:{vit:51.1,div:56.1,est:47.8,pre:80,fever:48.8},masks:{bajo:1,arpegio:5456,pulso:0,canto:0},scaleSize:4,jitterMs:37,detuneCents:21,bioCutoffHz:3089,reverbWet:.132,anthroGain:.352,velocity:.756},{year:2025,value:427.35,vital:{vit:50,div:55,est:49.5,pre:63.2,fever:50},masks:{bajo:1,arpegio:5456,pulso:0,canto:0},scaleSize:4,jitterMs:35,detuneCents:20,bioCutoffHz:4107,reverbWet:.176,anthroGain:.22,velocity:.75}]}}};var Lv=Zt.default.STEPS,Su=Zt.default.PENTA,mi=sd.presets,Nt=["gases","hielo","jungla"],go=class{constructor(){this.dash="hielo",this.idx=0,this.derived=null,this.reference=null,this.ctx=null,this.nodes=null,this.timer=null,this.playing=!1,this.step=0,this.bar=0,this.nextTime=0,this.arpIndex=0,this.level=.55,this.rich=!0,this.onStep=null,this.onBar=null,this._derive()}get preset(){return mi[this.dash]}get count(){return this.preset.years.length}get entry(){return this.idx===0?this.preset.reference:this.preset.years[this.idx-1]}_derive(){let e=this.preset.signature;this.derived=Zt.default.derive(e,this.entry.vital),this.reference=Zt.default.derive(e,Zt.default.REFERENCE)}setDashboard(e){if(!mi[e])return;let t=e!==this.dash;this.dash=e,this.idx=0,this._derive(),this.ctx&&(this._continuous(!1),t&&this.playing&&this._restartClock())}setIndex(e){e=Math.max(0,Math.min(this.count,Math.round(e))),e!==this.idx&&(this.idx=e,this._derive(),this._continuous(!1))}setLevel(e){this.level=e,this.nodes&&this.nodes.master.gain.setTargetAtTime(e,this.ctx.currentTime,.3)}async play(){this.ctx||this._init(),await this.ctx.resume(),!this.playing&&(this._restartClock(),this.timer=setInterval(()=>this._pump(),25),this._pump(),this.playing=!0)}async stop(){clearInterval(this.timer),this.timer=null,this.playing=!1,this.ctx&&await this.ctx.suspend()}tick(e=1800,t=.05){if(!this.ctx||this.ctx.state!=="running")return;let n=this.ctx.currentTime,s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="sine",s.frequency.value=e,s.connect(r),r.connect(this.nodes.master),this._env(r,n,t,.001,.04),s.start(n),s.stop(n+.08)}energy(){if(!this.nodes)return 0;let e=this.nodes.wave;this.nodes.analyser.getFloatTimeDomainData(e);let t=0;for(let n=0;n<e.length;n+=4)t+=e[n]*e[n];return Math.min(1,Math.sqrt(t/(e.length/4))*4)}_init(){let e=window.AudioContext||window.webkitAudioContext,t=this.ctx=new e,n=t.createGain();n.gain.value=this.level;let s=t.createDynamicsCompressor();s.threshold.value=-12,s.knee.value=6,s.ratio.value=12,s.attack.value=.003,s.release.value=.18;let r=t.createAnalyser();r.fftSize=2048,n.connect(s),s.connect(r),r.connect(t.destination);let a=t.createGain(),o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=12e3,o.Q.value=.3;let l=t.createConvolver();l.buffer=this._impulse(this.rich?3.8:2.8);let c=t.createGain();c.gain.value=.3;let u=t.createBiquadFilter();u.type="highshelf",u.frequency.value=6500,u.gain.value=this.rich?-2.5:0,a.connect(o),o.connect(u),u.connect(n),o.connect(l),l.connect(c),c.connect(n);let h=t.createGain();h.gain.value=0;let f=t.createDelay(1.5),p=t.createDelay(1.5),g=t.createGain(),v=t.createBiquadFilter(),m=t.createGain(),d=t.createChannelMerger(2);v.type="lowpass",v.frequency.value=2400,g.gain.value=.25,m.gain.value=.5,h.connect(f),f.connect(v),v.connect(p),p.connect(g),g.connect(f),v.connect(d,0,0),p.connect(d,0,1),d.connect(m),m.connect(n),m.connect(l);let y=t.createGain();y.gain.value=0;let x=t.createBiquadFilter();x.type="lowpass",x.frequency.value=1100,x.Q.value=.3;let _=[],C=[1,.5,.28,0].map((De,nt)=>{let Re=t.createOscillator(),Ye=t.createGain();return Re.type="sine",Re.frequency.value=110,Ye.gain.value=De,Re.connect(Ye),Ye.connect(x),Re.start(),_.push(Ye),Re}),E=t.createOscillator(),w=t.createGain();E.frequency.value=.07,w.gain.value=220,E.connect(w),w.connect(x.frequency),E.start(),x.connect(y),y.connect(a);let R=t.createGain();R.gain.value=0;let S=t.createBiquadFilter();S.type="lowpass",S.frequency.value=320;let b=[1,.35,.25].map((De,nt)=>{let Re=t.createOscillator(),Ye=t.createGain();return Re.type=nt===2?"triangle":"sine",Re.frequency.value=55,Ye.gain.value=De,Re.connect(Ye),Ye.connect(S),Re.start(),Re});S.connect(R),R.connect(n);let P=this._noise(),F=t.createBufferSource();F.buffer=P,F.loop=!0;let B=t.createBiquadFilter(),G=t.createGain();G.gain.value=1e-4;let X=t.createOscillator();X.type="sine";let W=t.createGain();W.gain.value=0,X.connect(W),W.connect(G.gain),F.connect(B),B.connect(G),G.connect(n),F.start(),X.start();let J=t.createGain();J.gain.value=0,J.connect(n);let V=t.createOscillator();V.type="sawtooth",V.frequency.value=120;let ie=t.createBiquadFilter();ie.type="lowpass",ie.frequency.value=480;let re=t.createGain();re.gain.value=.22,V.connect(ie),ie.connect(re),re.connect(J),V.start();let de=t.createBufferSource();de.buffer=P,de.loop=!0;let Ie=t.createBiquadFilter();Ie.type="bandpass",Ie.frequency.value=1500,Ie.Q.value=1.1;let qe=t.createGain();qe.gain.value=.5,de.connect(Ie),Ie.connect(qe),qe.connect(J),de.start();let j=t.createOscillator(),ee=t.createOscillator(),pe=t.createOscillator();j.type="sine",ee.type="sine",pe.type="triangle",j.frequency.value=55,ee.frequency.value=55.4,pe.frequency.value=110;let se=t.createGain();se.gain.value=.22;let ye=t.createBiquadFilter();ye.type="lowpass",ye.frequency.value=220;let we=t.createGain();we.gain.value=0,j.connect(ye),ee.connect(ye),pe.connect(se),se.connect(ye),ye.connect(we),we.connect(n),j.start(),ee.start(),pe.start(),this.nodes={master:n,analyser:r,wave:new Float32Array(2048),bioIn:a,bioLP:o,wet:c,echoIn:h,dL:f,dR:p,pad:y,padOsc:C,padG:_,pedal:R,pedalOsc:b,geoFilter:B,geoGain:G,swell:X,swellDepth:W,anthro:J,heat:we,heatA:j,heatB:ee,heatC:pe},this._continuous(!0)}_noise(){let e=this.ctx,t=e.sampleRate*2,n=e.createBuffer(1,t,e.sampleRate),s=n.getChannelData(0),r=0,a=0,o=0;for(let l=0;l<t;l++){let c=Math.random()*2-1;r=.99765*r+c*.099046,a=.963*a+c*.2965164,o=.57*o+c*1.0526913,s[l]=(r+a+o+c*.1848)*.22}return n}_impulse(e){let t=this.ctx,n=Math.floor(t.sampleRate*e),s=t.createBuffer(2,n,t.sampleRate),r=Math.floor(t.sampleRate*.012);for(let a=0;a<2;a++){let o=s.getChannelData(a),l=0;for(let c=0;c<n;c++){let u=c/n,h=Math.random()*2-1;if(!this.rich){o[c]=h*Math.pow(1-u,2.6);continue}l+=(h-l)*Math.max(.05,.6-.58*u),o[c]=l*Math.exp(-4.4*u)*(c<r?c/r:1)*2.1}}return s}_continuous(e){let t=this.nodes;if(!t)return;let n=this.ctx.currentTime,s=e?.01:.25,r=this.derived,a=this.preset.signature,o=Zt.default.SIGNATURES[a].geo;t.geoFilter.type=o.type,t.geoFilter.frequency.setTargetAtTime(o.hz,n,s),t.geoFilter.Q.setTargetAtTime(o.q,n,s);let l=this.rich?.3:1;t.geoGain.gain.setTargetAtTime(o.gain*l,n,s),t.swell.frequency.setTargetAtTime(o.swellHz,n,s),t.swellDepth.gain.setTargetAtTime(o.gain*o.depth*l,n,s),t.bioLP.frequency.setTargetAtTime(r.bioCutoffHz,n,s),t.wet.gain.setTargetAtTime(r.reverbWet,n,s);let c=60/r.tempo,u=r.voices.find(d=>d.id==="arpegio"),h=r.voices.find(d=>d.id==="bajo");t.dL.delayTime.setTargetAtTime(Math.min(1.4,c*.75),n,.2),t.dR.delayTime.setTargetAtTime(Math.min(1.4,c*.75),n,.2),t.echoIn.gain.setTargetAtTime(this.rich?.13:0,n,s);let f=Math.max(0,Math.min(1,r.v??1)),p=this._padRoot(),g=e?.05:1.2;[1,1.5,2,2*Math.pow(2,4/12)].forEach((d,y)=>t.padOsc[y].frequency.setTargetAtTime(p*d,n,g)),t.padG[3].gain.setTargetAtTime(.3*f*f,n,e?.3:2),t.pad.gain.setTargetAtTime(this.rich?.05*(.4+.6*f):0,n,e?.3:1.5),[.5,.75,1].forEach((d,y)=>t.pedalOsc[y].frequency.setTargetAtTime(p*d,n,g)),t.pedal.gain.setTargetAtTime(this.rich?.11*r.p:0,n,e?.3:1.5);let v=Zt.default.pressureOf(a),m=v.type==="heat";t.anthro.gain.setTargetAtTime(m||this.rich?0:r.anthroGain,n,s),t.heat.gain.setTargetAtTime(m&&!this.rich?r.p*r.p:0,n,s),m&&(t.heatA.frequency.setTargetAtTime(v.hz,n,s),t.heatB.frequency.setTargetAtTime(v.hz+.4+3.5*r.p,n,s),t.heatC.frequency.setTargetAtTime(v.hz*2,n,s))}_env(e,t,n,s,r){e.gain.setValueAtTime(1e-4,t),e.gain.linearRampToValueAtTime(n,t+s),e.gain.exponentialRampToValueAtTime(1e-4,t+s+r)}_tone(e,t,n,s,r=!1){let a=this.ctx,o=a.createOscillator();o.type=e;let l=a.createGain(),c=a.createStereoPanner?a.createStereoPanner():null;return o.connect(l),c?(c.pan.value=s,l.connect(c),c.connect(this.nodes.bioIn)):l.connect(this.nodes.bioIn),r&&this.rich&&l.connect(this.nodes.echoIn),o.start(t),o.stop(t+n+.05),{osc:o,g:l}}_tuned(e){let t=this.derived,n=this.rich?.15:1;return e*Math.pow(2,(t.feverCents+(Math.random()*2-1)*t.detuneCents)*n/1200)}_rootMidi(){let e=this.derived.voices.find(t=>t.id==="arpegio");return e&&e.rootMidi?e.rootMidi:60}_padRoot(){let e=Zt.default.midiHz(this._rootMidi());for(;e>196;)e/=2;for(;e<98;)e*=2;return e}_inKey(e){let t=this._rootMidi(),n=69+12*Math.log2(e/440),s=n,r=99;for(let a=-6;a<=6;a++)for(let o of Su){let l=t+o+12*a,c=Math.abs(l-n);c<r&&(r=c,s=l)}return Zt.default.midiHz(s)}_warm(e,t=880){for(;e>t;)e/=2;return e}_voice(e,t,n){let s=this.derived,r=this.preset.signature,a=s.velocity,o=this.ctx,l=t+Math.random()*(s.jitterMs/1e3);if(e.id==="bajo"){let c=r==="jungla"?.16:.5,{osc:u,g:h}=this._tone("sine",l,c,0),f=this._tuned(e.hz);if(u.frequency.setValueAtTime(f,l),u.frequency.exponentialRampToValueAtTime(f*.62,l+c),this._env(h,l,.5*a,.006,c),this.rich){let p=this._tone("triangle",l,c,0);p.osc.frequency.setValueAtTime(f*2,l),p.osc.frequency.exponentialRampToValueAtTime(f*1.24,l+c),this._env(p.g,l,.05*a,.01,c*.8)}}else if(e.id==="arpegio"){let c=s.scaleSize,u=this.arpIndex++%(c*2-2||1),h=Zt.default.melodyDegree(e,n,c),f=h>=0?h:u<c?u:c*2-2-u,p=this._tuned(Zt.default.midiHz(e.rootMidi+Su[f%5])),g=r==="jungla"?.14:r==="gases"?.42:.9,{osc:v,g:m}=this._tone(r==="jungla"?"triangle":"sine",l,g,f/4*1.2-.6,!0);if(v.frequency.setValueAtTime(r==="jungla"?p*1.07:p,l),r==="jungla"&&v.frequency.exponentialRampToValueAtTime(p,l+.05),this._env(m,l,(r==="gases"?.22:.16)*a,r==="gases"?.02:.004,g),this.rich){let d=Math.max(0,Math.min(1,s.v??1)),y=Math.max(0,Math.min(1,s.d??1)),x=(r==="gases"?.22:.16)*a,_=this._warm(p),C=(E,w,R,S,b)=>{let P=this._tone("sine",w,R,b,!0);P.osc.frequency.setValueAtTime(E,w),this._env(P.g,w,S,.012,R)};if(_<p*.99)C(_,l,.7,x*.5,.5-f/4);else{let E=this._tone("sine",l,g*1.1,0);E.osc.frequency.setValueAtTime(p/2,l),this._env(E.g,l,x*.22,.02,g*1.1)}if(d>.45&&n%2===0){let E=f+2,w=this._warm(this._tuned(Zt.default.midiHz(e.rootMidi+Su[E%5]+12*Math.floor(E/5))));C(w,l+.01,.9,x*.42*((d-.45)/.55),f/4-.5)}y>.6&&n%8===4&&C(this._warm(p,1760)*(_<p*.99?1:2),l,1.3,x*.3*((y-.6)/.4),0)}if(r==="gases"){let d=this._tone("sine",l,g*.7,-.2);d.osc.frequency.setValueAtTime(p*4,l),this._env(d.g,l,.035*a,.006,g*.7)}if(r==="hielo"){let d=this._tone("sine",l,g*.6,.3);d.osc.frequency.setValueAtTime(Math.min(p*2.76,9e3),l),this._env(d.g,l,.05*a,.003,g*.6)}}else if(e.id==="pulso"){let c=60/s.tempo/4,u=e.amHz?c*.85:.03,{osc:h,g:f}=this._tone("sine",l,u,Zt.default.hash01(n+1,9)*1.6-.8);h.frequency.setValueAtTime(this._tuned(this.rich?this._inKey(e.hz):e.hz),l);let p=.05*a;if(e.amHz){f.gain.setValueAtTime(1e-4,l),f.gain.linearRampToValueAtTime(p,l+.01),f.gain.setValueAtTime(p,l+u-.02),f.gain.linearRampToValueAtTime(1e-4,l+u);let g=o.createOscillator(),v=o.createGain();g.frequency.value=e.amHz,v.gain.value=p*.8,g.connect(v),v.connect(f.gain),g.start(l),g.stop(l+u+.05)}else this._env(f,l,p*1.6,.002,u)}else if(e.id==="canto"){if(this.bar%2===1)return;let c=this.bar/2%2===0?-.7:.7,u=this._tuned(e.hz),h=g=>this.rich?this._inKey(g):g,f=r==="gases"?[[1,1.5,1.6],[1.5,1,1.6]]:r==="jungla"?[[1,1.33,.22],[1.33,1.5,.22],[1.5,1.12,.3]]:[[1,1.02,1.8],[1.2,1.18,1.6]],p=l;for(let[g,v,m]of f){let{osc:d,g:y}=this._tone("sine",p,m,c,!0);if(d.frequency.setValueAtTime(h(u*g),p),d.frequency.exponentialRampToValueAtTime(h(u*v),p+m),this.rich&&m>.5){let x=o.createOscillator(),_=o.createGain();x.frequency.value=4.6,_.gain.setValueAtTime(0,p),_.gain.linearRampToValueAtTime(u*g*.004,p+m*.5),x.connect(_),_.connect(d.frequency),x.start(p),x.stop(p+m+.05);let C=this._tone("sine",p,m,-c*.5);C.osc.frequency.setValueAtTime(h(u*g)/2,p),C.osc.frequency.exponentialRampToValueAtTime(h(u*v)/2,p+m),C.g.gain.setValueAtTime(1e-4,p),C.g.gain.linearRampToValueAtTime(.045*a,p+m*.35),C.g.gain.exponentialRampToValueAtTime(1e-4,p+m)}y.gain.setValueAtTime(1e-4,p),y.gain.linearRampToValueAtTime(.14*a,p+m*.25),y.gain.exponentialRampToValueAtTime(1e-4,p+m),p+=m*.9}}}_machineTick(e){if(this.rich)return;let t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="square",t.frequency.value=1500,t.connect(n),n.connect(this.nodes.anthro),this._env(n,e,.12,.001,.03),t.start(e),t.stop(e+.08)}_schedule(e,t){e===0&&this.onBar&&this.onBar(this.bar);let n=this.derived;for(let s of n.voices)s.active&&s.alive[e]&&this._voice(s,t,e);e%4===0&&n.p>.04&&Zt.default.pressureOf(this.preset.signature).type==="machine"&&this._machineTick(t),this.onStep&&this.onStep(e,t,n,this.reference)}_pump(){for(;this.nextTime<this.ctx.currentTime+.12;)this._schedule(this.step,this.nextTime),this.nextTime+=60/this.derived.tempo/4,this.step=(this.step+1)%Lv,this.step===0&&this.bar++}_restartClock(){this.step=0,this.bar=0,this.arpIndex=0,this.nextTime=this.ctx.currentTime+.08}};var Dv={tick:[[.25,18]],diente:[[.5,60]],boton:[[.9,55],[0,70],[.9,55]],faro:[[.3,22]],confirmar:[[1,110]],anio:[[.28,18]],decada:[[.65,45]],tope:[[.8,40],[0,60],[.8,40]],soltar:[[.5,35]]},vo=class{constructor(){this.level=.8,this.floor=.3,this.minMs=40,this.maxMs=220,this.busyUntil={left:0,right:0},this.lastAt={left:0,right:0},this.lastTex={left:0,right:0},this.session=null,this.fired=0,this.errors=0,this.lastError=""}setSources(e){this.session=e||null}sourcesFor(e){let t=this.session?Array.from(this.session.inputSources||[]).filter(s=>s&&s.gamepad):[],n=t.filter(s=>s.handedness===e);return n.length?n:t.filter(s=>s.handedness!=="left"&&s.handedness!=="right")}motors(e){let t=[];if(!e)return t;let n=e.hapticActuators;if(n&&n.length)for(let s of Array.from(n))s&&t.push(s);return e.vibrationActuator&&!t.includes(e.vibrationActuator)&&t.push(e.vibrationActuator),t}available(e){return this.sourcesFor(e).some(t=>this.motors(t.gamepad).length>0)}describe(){if(!this.session)return"sin sesi\xF3n VR";let e=Array.from(this.session.inputSources||[]);return e.length?e.map(t=>`${t.handedness||"?"}: ${t.gamepad?this.motors(t.gamepad).length?"vibra":"sin motor":"sin gamepad"}`).join(" \xB7 ")+` \xB7 pulsos ${this.fired}`+(this.errors?` \xB7 errores ${this.errors} ${this.lastError}`:""):"sin mandos"}fire(e,t,n){try{let s=null;if(typeof e.pulse=="function")s=e.pulse(t,n);else if(typeof e.playEffect=="function")s=e.playEffect("dual-rumble",{startDelay:0,duration:n,strongMagnitude:t,weakMagnitude:t});else return!1;return s&&s.catch&&s.catch(r=>{this.errors++,this.lastError=String(r&&r.message||r).slice(0,40)}),!0}catch(s){return this.errors++,this.lastError=String(s&&s.message||s).slice(0,40),!1}}pulse(e,t,n,s=!1){if(this.level<=0||t<=.01)return!1;let r=performance.now();if(!s&&r<this.busyUntil[e]||r-this.lastAt[e]<45)return!1;let a=Math.min(1,this.floor+t*this.level*.9),o=Math.min(this.maxMs,Math.max(this.minMs,n*2.5)),l=!1;for(let c of this.sourcesFor(e))for(let u of this.motors(c.gamepad))l=this.fire(u,a,o)||l;if(!l&&navigator.getGamepads){for(let c of Array.from(navigator.getGamepads()||[]))if(!(!c||c.hand&&c.hand!==e))for(let u of this.motors(c))l=this.fire(u,a,o)||l}return l&&(this.busyUntil[e]=r+o+20,this.lastAt[e]=r,this.fired++),l}raw(e,t,n){let s=performance.now();if(this.level<=0||s-this.lastAt[e]<45)return!1;let r=Math.min(1,Math.max(.05,t)),a=Math.min(this.maxMs,Math.max(20,n)),o=!1;for(let l of this.sourcesFor(e))for(let c of this.motors(l.gamepad))o=this.fire(c,r,a)||o;return o&&(this.busyUntil[e]=s+a+20,this.lastAt[e]=s,this.fired++),o}_shot(e,t,n){if(t<.04)return!1;let s=!1;for(let r of this.sourcesFor(e))for(let a of this.motors(r.gamepad))s=this.fire(a,t,n)||s;if(!s&&navigator.getGamepads){for(let r of Array.from(navigator.getGamepads()||[]))if(!(!r||r.hand&&r.hand!==e))for(let a of this.motors(r))s=this.fire(a,t,n)||s}return s&&this.fired++,s}play(e,t,n=1){let s=Dv[t];if(!s||this.level<=0||!e)return!1;let r=performance.now();if((t==="tick"||t==="anio"||t==="faro")&&r-this.lastAt[e]<40)return!1;this.lastAt[e]=r;let o=0,l=!1;for(let[c,u]of s){if(c>0){let h=Math.min(1,c*this.level*n),f=u;o===0?l=this._shot(e,h,f)||l:setTimeout(()=>this._shot(e,h,f),o)}o+=u}return l}texture(e,t){let n=performance.now();return n-this.lastTex[e]<120?!1:(this.lastTex[e]=n,this.pulse(e,t,16))}both(e,t,n=0){this.pulse("left",e,t,!0),this.pulse("right",e,t,!0),n&&setTimeout(()=>{this.pulse("left",e,t,!0),this.pulse("right",e,t,!0)},n+120)}};var He={D2:73.42,A2:110,D3:146.83,F3:174.61,A3:220,C4:261.63,D4:293.66,E4:329.63,F4:349.23,G4:392,A4:440,C5:523.25,D5:587.33,F5:698.46,A5:880},_o=[He.D4,He.E4,He.F4,He.G4,He.A4,He.C5,He.D5];function ct(i,e,t,n,{attack:s=.008,decay:r=.9,gain:a=.05,partials:o=[[1,1],[2,.4],[3,.16]],glideTo:l=0}={}){let c=i.createGain();c.gain.setValueAtTime(1e-4,n),c.gain.exponentialRampToValueAtTime(a,n+s),c.gain.exponentialRampToValueAtTime(1e-4,n+s+r),c.connect(e);for(let[u,h]of o){let f=i.createOscillator(),p=i.createGain();f.type="sine",f.frequency.setValueAtTime(t*u,n),l&&f.frequency.exponentialRampToValueAtTime(l*u,n+s+r),p.gain.value=h,f.connect(p),p.connect(c),f.start(n),f.stop(n+s+r+.05)}}var kr=null;function rd(i){if(!kr||kr.sampleRate!==i.sampleRate){kr=i.createBuffer(1,i.sampleRate*2,i.sampleRate);let e=kr.getChannelData(0);for(let t=0;t<e.length;t++)e[t]=Math.random()*2-1}return kr}function Zs(i,e,t,{dur:n=.6,gain:s=.03,f0:r=400,f1:a=3e3,q:o=1.2,attack:l=.5}={}){let c=i.createBufferSource();c.buffer=rd(i),c.loop=!0;let u=i.createBiquadFilter();u.type="bandpass",u.Q.value=o,u.frequency.setValueAtTime(r,t),u.frequency.exponentialRampToValueAtTime(a,t+n);let h=i.createGain();h.gain.setValueAtTime(1e-4,t),h.gain.exponentialRampToValueAtTime(s,t+n*l),h.gain.exponentialRampToValueAtTime(1e-4,t+n),c.connect(u),u.connect(h),h.connect(e),c.start(t),c.stop(t+n+.05)}var ad={apertura(i,e,t,{mini:n=!1}={}){if(n){ct(i,e,He.D4,t,{decay:.16,gain:.02,partials:[[1,1],[2,.2]]}),ct(i,e,He.A4,t+.06,{decay:.2,gain:.02,partials:[[1,1],[2,.2]]});return}Zs(i,e,t,{dur:.7,gain:.022,f0:300,f1:2600}),ct(i,e,He.D4,t+.05,{decay:.7,gain:.032}),ct(i,e,He.A4,t+.17,{decay:.9,gain:.032})},cierre(i,e,t,{mini:n=!1}={}){if(n){ct(i,e,He.A4,t,{decay:.16,gain:.02,partials:[[1,1],[2,.2]]}),ct(i,e,He.D4,t+.06,{decay:.2,gain:.02,partials:[[1,1],[2,.2]]});return}Zs(i,e,t,{dur:.6,gain:.02,f0:2400,f1:280,attack:.2}),ct(i,e,He.A4,t,{decay:.6,gain:.03}),ct(i,e,He.D4,t+.12,{decay:.9,gain:.032})},transicion(i,e,t){Zs(i,e,t,{dur:1.4,gain:.032,f0:180,f1:4200,attack:.7,q:.8}),ct(i,e,He.D2,t,{attack:.25,decay:1.2,gain:.05,partials:[[1,1],[2,.25]],glideTo:He.D3}),ct(i,e,He.A5,t+1.15,{decay:1.3,gain:.018,partials:[[1,1],[2,.2]]})},giro(i,e,t,{step:n=0}={}){Zs(i,e,t,{dur:.09,gain:.018,f0:1800,f1:900,q:3,attack:.1}),ct(i,e,_o[(n%_o.length+_o.length)%_o.length]/2,t,{decay:.24,gain:.024,partials:[[1,1],[2,.2]]})},confirmacion(i,e,t){ct(i,e,He.D4,t,{decay:.5,gain:.04}),ct(i,e,He.A4,t+.09,{decay:.6,gain:.036}),ct(i,e,He.D5,t+.18,{decay:.9,gain:.028})},avance(i,e,t,{pos:n=0}={}){let s=520+520*Math.min(1,Math.max(0,n));ct(i,e,s,t,{attack:.004,decay:.12,gain:.026,partials:[[1,1]]}),ct(i,e,s*2,t,{attack:.002,decay:.05,gain:.008,partials:[[1,1]]})}},od={orbita:{name:"\xD3rbita",desc:"Cuatro notas que suben y se abren (re, la, fa, re agudo) sobre un grave que sostiene. Luminoso, de bienvenida.",play(i,e,t){return ct(i,e,He.D3,t,{attack:.4,decay:2.6,gain:.028,partials:[[1,1],[2,.3]]}),[He.D4,He.A4,He.F4,He.D5].forEach((n,s)=>ct(i,e,n,t+s*.28,{decay:1.7,gain:.042})),3.2}},pulso:{name:"Pulso",desc:"Dos latidos graves y, despu\xE9s, una sola nota de cristal muy alta. M\xEDnimo: un coraz\xF3n y una se\xF1al.",play(i,e,t){return ct(i,e,He.D2,t,{attack:.005,decay:.3,gain:.12,partials:[[1,1]],glideTo:55}),ct(i,e,He.D2,t+.32,{attack:.005,decay:.3,gain:.08,partials:[[1,1]],glideTo:55}),ct(i,e,He.A5,t+.95,{decay:1.9,gain:.03,partials:[[1,1],[2.01,.3],[3.02,.1]]}),3}},marea:{name:"Marea",desc:"Una ola que crece desde lo muy grave, rompe con un golpe profundo y deja tres notas que bajan (fa, mi, re) con eco. Lenta, con peso.",play(i,e,t){let n=i.createGain();n.connect(e);let s=i.createDelay(1),r=i.createGain(),a=i.createBiquadFilter(),o=i.createGain();s.delayTime.value=.36,r.gain.value=.5,a.type="lowpass",a.frequency.value=1600,o.gain.value=.55,n.connect(s),s.connect(a),a.connect(r),r.connect(s),a.connect(o),o.connect(e),Zs(i,n,t,{dur:3,gain:.04,f0:90,f1:2200,attack:.62,q:.6}),ct(i,n,He.D2/2,t,{attack:1.6,decay:3.4,gain:.07,partials:[[1,1],[2,.5]]}),ct(i,n,He.D3,t,{attack:1.5,decay:3.2,gain:.034,partials:[[1,1],[2,.25]]}),ct(i,n,He.A3,t,{attack:1.5,decay:3.2,gain:.026,partials:[[1,1],[2,.2]]});let l=t+1.85;return ct(i,n,He.D2,l,{attack:.006,decay:1.6,gain:.2,partials:[[1,1],[2,.3]],glideTo:36.7}),Zs(i,n,l,{dur:.9,gain:.06,f0:3200,f1:160,attack:.03,q:.5}),[He.F4,He.E4,He.D4].forEach((c,u)=>{ct(i,n,c,l+.1+u*.55,{decay:1.9,gain:.05}),ct(i,n,c*2,l+.1+u*.55,{decay:1.3,gain:.014,partials:[[1,1]]})}),ct(i,n,He.D2,l+1.75,{attack:.02,decay:2.6,gain:.09,partials:[[1,1],[2,.4],[3,.1]]}),6.5}},senal:{name:"Se\xF1al",desc:"Tres pitidos secos (la, la, re) con eco que se aleja, como un instrumento que encuentra su dato. Corto y t\xE9cnico.",play(i,e,t){let n=[[He.A4,0,.18],[He.A4,.16,.18],[He.D5,.36,1.1]];for(let[s,r]of[[0,1],[1,.4],[2,.16]])for(let[a,o,l]of n)ct(i,e,a,t+o+s*.42,{attack:.004,decay:l,gain:.05*r,partials:[[1,1],[2,.15]]});return 2.4}}},yo=class{constructor(){this.ctx=null}ensure(e,t){if(this.ctx===e)return!0;try{let n=e.createBufferSource();return n.buffer=rd(e),n.loop=!0,this.bp=e.createBiquadFilter(),this.bp.type="bandpass",this.bp.Q.value=2.6,this.bp.frequency.value=500,this.g=e.createGain(),this.g.gain.value=0,this.pan=e.createStereoPanner?e.createStereoPanner():null,n.connect(this.bp),this.bp.connect(this.g),this.pan?(this.g.connect(this.pan),this.pan.connect(t)):this.g.connect(t),n.start(),this.ctx=e,!0}catch{return!1}}set(e,t,n,s=.5,r=0){if(!this.ensure(e,t))return;let a=e.currentTime,o=Math.min(1,Math.max(0,n));this.g.gain.setTargetAtTime(o*.026,a,.05),this.bp.frequency.setTargetAtTime(350+2600*Math.min(1,Math.max(0,s)),a,.06),this.pan&&this.pan.pan.setTargetAtTime(Math.min(1,Math.max(-1,r)),a,.08)}};var Ut={gases:{num:"01",name:"Gases de efecto invernadero",short:"Gases",color:16726815,pressure:16726815,az:0,line:"La atm\xF3sfera respira. Un comp\xE1s es un a\xF1o: cada respiraci\xF3n empieza m\xE1s arriba."},hielo:{num:"02",name:"Hielo marino",short:"Hielo",color:3107839,pressure:16726815,az:120,line:"El \xC1rtico en septiembre. El grave que crece es la temperatura."},jungla:{num:"03",name:"Jungla",short:"Jungla",color:1026392,pressure:16726815,az:-120,line:"La Amazonia. Lo talado no vuelve: las voces que se apagan no regresan."}},Tu=4063130,Eu={lobby:{file:"glb/lobby.glb",position:[0,0,0],rotationY:60,scale:1,hideProcedural:!1},gases:{file:"glb/gases.glb",position:[0,0,-26.1],rotationY:0,scale:1,hideProcedural:!1,center:[0,0,14.1],seed:11,sectorScale:[.8,.97],scatter:[{match:"^Pluma_Humo|^Voz_Atmosfera|^Particulas_CO2",copy:!0}]},gases2:{file:"glb/gases2.glb",position:[0,0,-26.1],rotationY:0,scale:1,hideProcedural:!1,center:[0,0,14.1],seed:11,sectorScale:[.8,.97],scatter:[{match:"^Pluma_Humo|^Voz_Atmosfera|^Particulas_CO2",copy:!0}]},hielo:{file:"glb/hielo.glb",position:[0,0,-26.1],rotationY:0,scale:1,hideProcedural:!1,center:[0,0,26.1],seed:23,scatter:[{match:"^Placa_Hielo|^Voz_Verde",move:.72,r:[.75,1.3]},{match:"^Lineas_Agua",copy:!0}]},hielo2:{file:"glb/hielo2.glb",position:[0,0,-26.1],rotationY:0,scale:1,hideProcedural:!1,center:[0,0,26.1],seed:23,scatter:[{match:"^Placa_Deshielo",move:.72,r:[.75,1.3]},{match:"^Lineas_Agua",copy:!0}]},jungla:{file:"glb/jungla.glb",position:[0,0,-9.4],rotationY:0,scale:.6,scaleY:3,hideProcedural:!1,center:[0,0,15.7],seed:37,sectors:7,sectorScale:[.85,1.2],scatter:[{match:"^Fronda_Marco",hide:!0},{match:"^Tallos_",copy:!0},{match:"^Hoja_|^Voz_",instanced:!0,keep:.6,thin:.3}]},jungla2:{file:"glb/jungla2.glb",position:[0,0,-9.4],rotationY:0,scale:.6,scaleY:3,hideProcedural:!1,center:[0,0,15.7],seed:37,sectors:7,sectorScale:[.85,1.2],scatter:[{match:"^Fronda_Marco",hide:!0},{match:"^Tallos_|^Tocones_",copy:!0},{match:"^Hoja_|^Voz_",instanced:!0,keep:.6,thin:.3}]},fin:{file:"glb/fin.glb",position:[0,0,0],rotationY:0,scale:1,hideProcedural:!0}},mt={variantAt:.5,platformLift:1.4,introBars:2,sphereCenter:[0,1.38,-.7],sphereBelowEyes:.22,sphereRadius:.2,pauseBelowScale:.75,maxScale:2.2,maxYearsPerBar:4,comfort:.7,vibrarMelodia:!1,giroRatio:2,sonidoRico:!0,leitmotiv:"marea",diagnostico:!0};var rt=Math.PI/180,Kt=Math.PI*2,An=(i,e,t)=>new I(Math.sin(i*rt)*e,t,-Math.cos(i*rt)*e),Ze=(i,e,t)=>i+(e-i)*t,zt=(i,e,t)=>Math.min(t,Math.max(e,i)),Nv=i=>"#"+i.toString(16).padStart(6,"0"),kt=new Wa({antialias:!0});kt.setPixelRatio(Math.min(window.devicePixelRatio,2));kt.setSize(window.innerWidth,window.innerHeight);kt.xr.enabled=!0;kt.xr.setReferenceSpaceType("local-floor");document.body.appendChild(kt.domElement);var gn=new Xa;gn.background=new Ee(526344);var En=new It(70,window.innerWidth/window.innerHeight,.05,400);En.position.set(0,1.6,0);En.rotation.order="YXZ";gn.add(En);gn.add(new io(16777215,2241348,1.2));var xd=new js(16777215,1.2);xd.position.set(2,5,3);gn.add(xd);var ce=new go;ce.rich=mt.sonidoRico!==!1;var Ot=new vo;Ot.level=mt.comfort;var pn=(i,e,t)=>{i?Ot.play(i,e,t):(Ot.play("left",e,t),Ot.play("right",e,t))},N={state:"inicio",info:!1,desc:!1,dash:"hielo",yearPos:0,scale:1,speed:1,scrubbing:!1,sensory:!1,uiAlpha:1,hover:null,xr:!1,beat:0};window.__nucleo={app:N,synth:ce,haptics:Ot};function mn(i,e){let t=ce.ctx;if(!(!t||t.state!=="running"||!ce.nodes))try{ad[i](t,ce.nodes.master,t.currentTime,e)}catch{}}var Md=[];function sn(i,e=1){return i.transparent=!0,i.userData.base=e,i.opacity=e,Md.push(i),i}var bd=[];function qn(i,e,t){return i.userData.hoverId=e,i.userData.onSelect=t,bd.push(i),i}function Fu(i,e,t,n,s,r){let a="";for(let o of e.split(" ")){let l=a?a+" "+o:o;i.measureText(l).width>s&&a?(i.fillText(a,t,n),a=o,n+=r):a=l}return a&&i.fillText(a,t,n),n+r}var Sd=[];function Fi(i,e,t,n,s){let r=document.createElement("canvas");r.width=t,r.height=n;let a=r.getContext("2d"),o=new Ja(r);o.colorSpace=At,o.anisotropy=4;let l=new We(new Hs(i,e),sn(new Ct({map:o,depthWrite:!1,side:wt})));return l.redraw=()=>{a.clearRect(0,0,t,n),a.save(),a.shadowColor="rgba(0,0,0,.75)",a.shadowBlur=16,s(a,t,n),a.restore(),o.needsUpdate=!0},l.renderOrder=10,l.redraw(),Sd.push(l),l}var St='"Manrope", "Helvetica Neue", Helvetica, Arial, sans-serif',gt={panel:"#141414",atmo1:"#131a21",atmo2:"#46525c",hairline:"#292929",track:"#262626",grey2:"#1f1f1f",tick:"#6e6e6e",ink:"#f5f5f5",muted:"#a8a8a8",signal:"#ff5a3c",orbit:"#5b8cff",live:"#3dff9a"},zi=i=>({16726815:gt.signal,3107839:gt.orbit,1026392:gt.live})[i]||Nv(i),Oi=(i,e)=>{try{i.letterSpacing=e+"px"}catch{}};function Bu(i,e,t,n,s){i.save(),i.lineCap="round",i.strokeStyle=s,i.globalAlpha=.55,i.shadowColor=s,i.shadowBlur=14,i.lineWidth=10,i.beginPath(),i.moveTo(e,t),i.lineTo(e+n,t),i.stroke(),i.globalAlpha=1,i.shadowBlur=0,i.lineWidth=4,i.beginPath(),i.moveTo(e,t),i.lineTo(e+n,t),i.stroke(),i.restore()}var qr=new ci(new Dr(new Ws(7,3)),sn(new qt({color:7237230}),.06));qr.position.y=1.2;gn.add(qr);var ku=new We(new is(.35,.38,64),sn(new Ct({color:16777215,side:wt}),.35));ku.rotation.x=-Math.PI/2;ku.position.y=.01;gn.add(ku);var Bi=new yt,vn=new yt,Kr=new yt;gn.add(Bi,vn,Kr);var rr={lobby:[],fin:[],amb:[]},Td={};for(let i of Nt){let e=Ut[i],t=mi[i],n=new We(new is(.55,1.7,48,1,(90-e.az-58)*rt,116*rt),sn(new Ct({color:e.color,side:wt,depthWrite:!1}),.28));n.rotation.x=-Math.PI/2,n.position.y=.02;let s=Fi(1.7,1,1024,602,(a,o,l)=>{a.fillStyle=gt.muted,a.font=`600 30px ${St}`,a.fillText(e.num,56,96),Bu(a,56+a.measureText(e.num).width+22,86,28,zi(e.color)),a.fillStyle=gt.ink,a.font=`700 ${e.name.length>14?68:104}px ${St}`,Oi(a,-2.5);let c=Fu(a,e.name,52,e.name.length>14?196:216,o-104,76);Oi(a,0),a.fillStyle=gt.muted,a.font=`500 26px ${St}`,a.fillText(`${t.years[0].year}\u2013${t.years[t.years.length-1].year} \xB7 ${t.source}`,56,c+4)});s.position.copy(An(e.az,2.6,1.55)),s.lookAt(0,1.55,0);let r=()=>Fn(i);qn(n,i,r),qn(s,i,r),Bi.add(n,s),rr.lobby.push(s),Td[i]={sec:n,pan:s}}var os=Fi(1.5,.3,1024,205,(i,e,t)=>{i.textAlign="center",i.fillStyle=gt.ink,i.font=`700 72px ${St}`,Oi(i,-2),i.fillText("N\xFAcleo",e/2,88),Oi(i,0),i.fillStyle=gt.muted,i.font=`500 28px ${St}`,i.fillText("Elige un lugar",e/2,150),mt.diagnostico&&(i.font=`500 20px ${St}`,i.fillText(`${N.xr?"VR":"Pantalla"} \xB7 ${Ot.describe()}`,e/2,192)),i.textAlign="left"});os.position.copy(An(0,2.6,2.35));os.lookAt(0,2,0);Bi.add(os);rr.lobby.push(os);var Ed={bajo:.5,pulso:.85,arpegio:1.2,canto:1.55},Hu=3.4,On=[],Iu=new yt;vn.add(Iu);var ld=new Ce,Ad=new Ee,S_=new I,T_=new cn,E_=new I;function wd(i){let e=[];return i.forEach((t,n)=>t&&e.push(n)),e}function jr(i,e,t,n,s,r){let a=[],o=[],l=[];for(let u=0;u<=s;u++){let h=u/s,f=Ze(e,t,h),p=Math.sin(f)*i,g=-Math.cos(f)*i,v=r?h*h:1;if(a.push(p,-n/2,g,p,n/2,g),o.push(v,v,v,v,v,v),u<s){let m=u*2;l.push(m,m+1,m+2,m+1,m+3,m+2)}}let c=new lt;return c.setAttribute("position",new Qe(a,3)),c.setAttribute("color",new Qe(o,3)),c.setIndex(l),c}var Uv=jr(Hu,-15*rt,0,.012,15,!0),zv=jr(Hu,-1.4*rt,.2*rt,.028,3,!1),cd=()=>new Ct({color:0,vertexColors:!0,blending:Ps,depthWrite:!1,transparent:!0,side:wt});function Ov(){for(let i of On)Iu.remove(i.mesh,i.head),i.mesh.material.dispose(),i.head.material.dispose();On=[],ce.reference.voices.forEach((i,e)=>wd(i.pattern).forEach((t,n)=>{let s=new We(Uv,cd()),r=new We(zv,cd());s.position.y=r.position.y=Ed[i.id]??1,s.frustumCulled=r.frustumCulled=!1,Iu.add(s,r),On.push({voice:i.id,vi:e,j:n,az:t/16*360,flash:0,alive:!0,mesh:s,head:r})}))}function wo(){let i=0;for(let e of On)e.alive&&i++;return i}function Cd(){let i=ce.derived;for(let e of On){let t=i.voices[e.vi],n=wd(t.pattern)[e.j];e.step=n,e.targetAz=n/16*360,e.alive=t.active&&t.alive[n]}}var A_=new Ee(Tu),w_=new Ee(3552822),Au=new Ee;function Fv(i,e){Au.set(zi(Ut[N.dash].color));for(let t of On){let n=(t.targetAz-t.az+540)%360-180;t.az+=n*Math.min(1,i*3),t.flash=Math.max(0,t.flash-i*1.8),t.mesh.rotation.y=t.head.rotation.y=-t.az*rt,t.mesh.material.color.copy(Au).multiplyScalar((t.alive?.2+t.flash*1.1:.035)*e),t.head.visible=t.alive&&t.flash>.02,t.head.material.color.copy(Au).lerp(Ad.set(16777215),.35).multiplyScalar(t.flash*1.5*e)}}var Qs=(i,e,t,n)=>new ns(new lt().setFromPoints(Array.from({length:128},(s,r)=>new I(Math.sin(r/128*Kt)*i,e,-Math.cos(r/128*Kt)*i))),sn(new qt({color:t}),n)),Bv=Object.values(Ed).map(i=>{let e=Qs(Hu,i,16777215,.07);return vn.add(e),e}),Pu=14,kv=Array.from({length:Pu},(i,e)=>{let t=Qs(4.2,2.3+e*.16+e%2*.04,16734780,0);return vn.add(t),t});[3,6,9].forEach((i,e)=>vn.add(Qs(i,.014-mt.platformLift,16777215,[.08,.055,.035][e])));var Rd=new yt;vn.add(Rd);var Uo=new yt;vn.add(Uo);var Gu=new We(new Vs(1.5,1.42,.07,72),new fn({color:1052688,roughness:.55,metalness:.5}));Gu.position.y=-.036;Uo.add(Gu,Qs(1.5,.002,16119285,.3),Qs(1.1,.002,16119285,.09));Uo.add(new ci(new lt().setFromPoints(Array.from({length:12},(i,e)=>[An(e*30,1.54,.002),An(e*30,e%3===0?1.62:1.58,.002)]).flat()),sn(new qt({color:7237230}),.8)));var zo=new We(new is(1.455,1.49,24,1,82*rt,16*rt),new Ct({color:16777215,blending:Ps,depthWrite:!1,transparent:!0,side:wt}));zo.rotation.x=-Math.PI/2;zo.position.y=.003;Uo.add(zo);var xo=i=>`${Math.round(zt(i,0,1)*100)} %`,Jt=Fi(1.3,.62,1280,610,(i,e,t)=>{let n=Ut[N.dash],s=mi[N.dash],r=ce.entry,a=ce.derived,o=zi(n.color),l=N.hover==="isla";i.fillStyle=gt.muted,i.font=`600 30px ${St}`,i.fillText(`${n.num} \xB7 ${n.name}`,52,72),i.fillStyle=gt.ink,i.font=`700 150px ${St}`,Oi(i,-4.5),i.fillText(ce.idx===0?"Intacto":String(r.year),44,232),Oi(i,0);let c=52,u=N.info?e-52:700,h=282,f=ce.idx/ce.count,p=Ze(c,u,f);i.fillStyle="rgba(245,245,245,.22)",i.fillRect(c,h-1,u-c,2),i.fillStyle=gt.ink,i.fillRect(c,h-2,p-c,4),Bu(i,Math.max(c,p-26),h,26,o);let g=(v,m)=>{i.fillStyle=l?gt.ink:gt.muted,i.font=`${l?700:600} 34px ${St}`,i.fillText(v,52,m),i.fillRect(52,m+12,i.measureText(v).width,l?4:2)};if(!N.info){g("Ver el dato",362);return}i.fillStyle=gt.ink,i.font=`600 46px ${St}`,i.fillText(ce.idx===0?"As\xED suena el lugar sano":`${Number(r.value).toLocaleString("es-MX")} ${s.unit}`,52,356),i.fillStyle=gt.muted,i.font=`500 32px ${St}`,i.fillText(`${wo()} de ${On.length} voces vivas`,52,410),i.fillText(`Vitalidad ${xo(a.v)} \xB7 Diversidad ${xo(a.d)} \xB7 Estabilidad ${xo(a.s)} \xB7 Presi\xF3n ${xo(a.p)}`,52,458),i.font=`500 26px ${St}`,i.fillText(`${s.years[0].year}\u2013${s.years[s.years.length-1].year} \xB7 Fuente: ${s.source}`,52,504),g("Ocultar",568)});Jt.position.copy(An(26,2.3,1.72));Jt.lookAt(0,1.6,0);vn.add(Jt);qn(Jt,"isla",()=>Wu());var wu=i=>i.length<2?i.join(""):i.slice(0,-1).join(", ")+" y "+i[i.length-1];function Vu(){if(N.state==="lobby"){let a=o=>{let l=ir(Ut[o].az*rt-Q.angle);return Math.abs(l)<.3?"al frente":l>0?"a tu derecha":"a tu izquierda"};return[`Lobby. Tres lugares a tu alrededor: ${wu(Nt.map(o=>`${Ut[o].name} ${a(o)}`))}.`,`Al frente: ${Ut[Q.front].name}. Suena su firma.`,"Desliza la mano sobre el aro para girar el mundo. Toca su centro para entrar."]}let i=Ut[N.dash],e=mi[N.dash],t=ce.entry,n=ce.derived;if(N.state==="fin")return[`Fin del recorrido en ${i.name}.`,`Quedan ${wo()} de ${On.length} voces.`,"Toca el centro del aro para volver al lobby."];let s=n.voices.filter(a=>a.active).map(a=>a.id),r=n.voices.filter(a=>!a.active).map(a=>a.id);return[ce.idx===0?`${i.name}, lugar intacto. As\xED suena sano.`:`${i.name}, a\xF1o ${t.year}: ${Number(t.value).toLocaleString("es-MX")} ${e.unit}.`,`Suenan ${wu(s)||"muy pocas voces"}${r.length?`. En silencio: ${wu(r)}`:""}. ${wo()} de ${On.length} voces vivas.`,n.p<.33?"Sonido claro y estable.":n.p<.66?"El sonido se tensa: hay m\xE1s presi\xF3n.":"Sonido denso y \xE1spero: presi\xF3n alta.","Vibraci\xF3n: mano derecha, el a\xF1o que suena; mano izquierda, el lugar intacto. Gira la esfera para moverte en el tiempo."]}function To(i){if(!(!N.desc||!window.speechSynthesis))try{speechSynthesis.cancel();let e=new SpeechSynthesisUtterance(i);e.lang="es-MX",e.rate=1.05,e.volume=.9,speechSynthesis.speak(e)}catch{}}var er=Fi(1.5,.55,1200,440,(i,e,t)=>{if(!N.desc)return;i.fillStyle=gt.muted,i.font=`600 26px ${St}`,i.fillText("Descripci\xF3n",40,52),i.fillStyle=gt.ink,i.font=`500 32px ${St}`;let n=106;for(let s of Vu())n=Fu(i,s,40,n,e-80,42)+8});er.position.copy(An(-30,2.2,.95));er.lookAt(0,1.5,0);er.visible=!1;gn.add(er);var ki=Fi(.62,.11,900,160,(i,e,t)=>{let n=N.hover==="descripciones",s=N.desc?"Ocultar descripciones":"Ver descripciones";i.fillStyle=n?gt.ink:gt.muted,i.font=`${n?700:600} 54px ${St}`,i.fillText(s,30,84),i.fillRect(30,104,i.measureText(s).width,n?4:2)});ki.position.copy(An(30,2.2,.95));ki.lookAt(0,1.5,0);ki.visible=!1;gn.add(ki);qn(ki,"descripciones",()=>Id());function Wu(){N.info=!N.info,mn(N.info?"apertura":"cierre"),Jt.redraw(),N.info&&To(Vu()[0])}function Id(){N.desc=!N.desc,mn(N.desc?"apertura":"cierre"),Lu="",ki.redraw(),!N.desc&&window.speechSynthesis&&speechSynthesis.cancel()}var Lu="",ud="",hd=0;function Hv(){mt.diagnostico&&N.state==="lobby"&&performance.now()-hd>1e3&&(hd=performance.now(),os.redraw());let i=N.state!=="inicio";if(er.visible=i&&N.desc,ki.visible=i,Jt.scale.setScalar(Ze(Jt.scale.x,N.info?1:.62,.2)),!i||!N.desc)return;let e=`${N.state}|${N.dash}|${ce.idx}|${Q.front}`;if(e===Lu)return;Lu=e,er.redraw();let t=Vu();N.state!==ud?(ud=N.state,To(N.state==="ambiente"?`${t[0]} ${t[3]}`:t.join(" "))):N.state==="lobby"?To(t[1]):N.state==="ambiente"&&ce.entry.year%10===0&&To(`${t[0]} ${t[1]} ${t[2]}`)}var rn=new yt;rn.position.fromArray(mt.sphereCenter);vn.add(rn);var Xu=new ci(new Dr(new Ws(mt.sphereRadius,1)),sn(new qt({color:16777215}),.85)),Pd=new We(new Ws(.05,2),sn(new Ct({color:Tu}),.9)),Oo=new We(new Xs(mt.sphereRadius*1.25,16,12),new Ct({transparent:!0,opacity:0,depthWrite:!1}));rn.add(Xu,Pd,Oo);rr.amb.push(Xu);var Ke=(()=>{let i=Br.points,e=i.length/3,t=mt.sphereRadius/Br.radius,n=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e*3),a=new Float32Array(e),o=new Float32Array(e),l=new Float32Array(e*3),c=new I,u=new I,h=new I,f=new I(0,1,0);for(let m=0;m<e;m++)c.set(i[m*3],i[m*3+2],-i[m*3+1]).normalize(),u.crossVectors(f,c),u.lengthSq()<1e-6&&u.set(1,0,0),u.normalize(),h.crossVectors(c,u),n.set([c.x,c.y,c.z],m*3),s.set([u.x,u.y,u.z],m*3),r.set([h.x,h.y,h.z],m*3),a[m]=(Math.atan2(c.x,c.z)/Kt+1)%1,o[m]=Math.sqrt(Math.max(0,1-c.y*c.y)),l[m*3+1]=.6,l[m*3+2]=.22;let p=new Vs(.045*t,.062*t,.24*t,6);p.translate(0,.12*t,0),p.rotateX(Math.PI/2);let g=new ts(p,new fn({color:16777215,roughness:.45,metalness:.05,flatShading:!0}),e);g.instanceMatrix.setUsage(kc),g.frustumCulled=!1,g.instanceColor=new li(new Float32Array(e*3).fill(.22),3),g.instanceColor.setUsage(kc);let v=new We(new Xs(mt.sphereRadius*.93,32,20),new fn({color:789778,roughness:.6,metalness:.2}));return{n:e,k:t,N:n,R:s,U:r,fr:a,lat:o,st:l,mesh:g,core:v,val:null,pre:null,dash:null,crush:[null,null],lastTouch:[-1,-1],lastSound:0,expandDir:new I(0,0,1),expand:0}})();rn.add(Ke.core,Ke.mesh);Xu.visible=!1;Pd.visible=!1;window.__nucleo.KS=Ke;function Ld(i){let e=mi[i],t=e.years,n=t.map(h=>Number(h.value)),s=Math.min(...n),r=Math.max(...n),a=r-s||1,o=h=>.12+.88*zt((Number(h)-s)/a,0,1),l=(h,f)=>zt(((h.vital&&h.vital.pre)??f*100)/100,0,1),c=e.reference||t[0],u=o(c.value??t[0].value);Ke.val=new Float32Array(t.length+1),Ke.pre=new Float32Array(t.length+1),Ke.val[0]=u,Ke.pre[0]=l(c,.05),t.forEach((h,f)=>{Ke.val[f+1]=o(h.value),Ke.pre[f+1]=l(h,Ke.val[f+1])}),Ke.dash=i}var tr=new I,Mo=[[.52,.36,.92],[1,.4,.34],[1,.8,.36]],Dd=[0,2,4,7,9];function Xr(i,e,t=!1){if(!e){Ke.crush[i]=null,Ke.lastTouch[i]=-1;return}let n=rn.worldToLocal(e.clone());Ke.crush[i]=t?n.normalize().multiplyScalar(Br.radius):n.divideScalar(Ke.k)}function Du(i,e){let t=Ke.crush[i];if(!t||!Ke.val)return 0;let n=Math.min(ce.count,Math.round((Math.atan2(t.x,t.z)/Kt+1)%1*ce.count)),s=Ke.val[n];if(n!==Ke.lastTouch[i]){Ke.lastTouch[i]=n;let r=performance.now();if(r-Ke.lastSound>90){Ke.lastSound=r;let a=Math.round(s*9);ce.tick(220*Math.pow(2,(Dd[a%5]+12*Math.floor(a/5))/12),.022)}e&&Ot.play(e,"anio",.6+1.2*s)}return s}function Gv(i,e){Ke.dash!==N.dash&&Ld(N.dash);let{n:t,k:n,N:s,R:r,U:a,fr:o,lat:l,st:c,mesh:u,val:h,pre:f}=Ke,p=Br.radius,g=u.instanceMatrix.array,v=u.instanceColor.array,m=ce.count,d=.418,y=2*d*1.25,x=.611,_=2*x*1.25;Ke.expand=Ze(Ke.expand,zt((N.scale-1)/(mt.maxScale-1),0,1),.12),Js||(rn.worldToLocal(En.getWorldPosition(tr)),Ke.expandDir.lerp(tr.normalize(),.1).normalize());let C=Ke.expand,E=Ke.expandDir.x*p,w=Ke.expandDir.y*p,R=Ke.expandDir.z*p,S=Ke.crush[0],b=Ke.crush[1],P=Math.min(1,i*8),F=N.yearPos,B=N.beat;for(let G=0;G<t;G++){let X=G*3,W=s[X],J=s[X+1],V=s[X+2],ie=W*p,re=J*p,de=V*p,Ie=o[G]*m,qe=Math.floor(Ie),j=Math.min(m,qe+1),ee=Ie-qe,pe=Ze(h[qe],h[j],ee),se=zt(.5*Ze(f[qe],f[j],ee)+.5*(pe-.12)/.88,0,1),ye=Ie<=F+.5,we=Math.abs(Ie-F),De=we<.75?1-we/.75:0,nt=ye?(.35+pe*2.4)*(.6+.4*l[G])*(1+De*(.15+B*.5)):.22,Re=ye?.85+pe*.3:.6,Ye=0,L=1;if(S&&(L=Math.min(L,Math.hypot(S.x-ie,S.y-re,S.z-de)/y)),b&&(L=Math.min(L,Math.hypot(b.x-ie,b.y-re,b.z-de)/y)),L<1&&(Ye-=.3*(1-L),Re*=Ze(.45,1,L),nt*=Ze(.4,1,L)),C>.002){let M=Math.min(1,Math.hypot(E-ie,w-re,R-de)/_),O=1-M*M*(3-2*M);Ye+=.8*x*O*C,Re+=.25*(1-M)*C,nt*=1+.6*O*C}c[X]=Ze(c[X],Ye,P),c[X+1]=Ze(c[X+1],Re,P),c[X+2]=Ze(c[X+2],nt,P);let Rt=c[X+1],Ge=c[X+2],Ve=(p*.94+c[X])*n,me=G*16;g[me]=r[X]*Rt,g[me+1]=r[X+1]*Rt,g[me+2]=r[X+2]*Rt,g[me+3]=0,g[me+4]=a[X]*Rt,g[me+5]=a[X+1]*Rt,g[me+6]=a[X+2]*Rt,g[me+7]=0,g[me+8]=W*Ge,g[me+9]=J*Ge,g[me+10]=V*Ge,g[me+11]=0,g[me+12]=W*Ve,g[me+13]=J*Ve,g[me+14]=V*Ve,g[me+15]=1;let ut=.22,Ae=.22,A=.24;if(ye){let M=se<.5?Mo[0]:Mo[1],O=se<.5?Mo[1]:Mo[2],$=se<.5?se*2:(se-.5)*2,K=Math.min(1,De*.35+(1-L)*.35);ut=Ze(Ze(M[0],O[0],$),1,K),Ae=Ze(Ze(M[1],O[1],$),1,K),A=Ze(Ze(M[2],O[2],$),1,K)}v[X]=Ze(v[X],ut,P),v[X+1]=Ze(v[X+1],Ae,P),v[X+2]=Ze(v[X+2],A,P)}u.instanceMatrix.needsUpdate=!0,u.instanceColor.needsUpdate=!0}var Jr=Fi(1.7,.8,1280,602,(i,e,t)=>{let n=Ut[N.dash],s=mi[N.dash],r=zi(n.color),a=s.years[s.years.length-1];i.fillStyle=gt.muted,i.font=`600 28px ${St}`;let o=`${n.num} \xB7 ${n.name}`;i.fillText(o,56,84),Bu(i,56+i.measureText(o).width+22,74,28,r),i.fillStyle=gt.ink,i.font=`700 124px ${St}`,Oi(i,-4),i.fillText(`${s.years[0].year} \u2192 ${a.year}`,50,236),Oi(i,0),i.font=`600 40px ${St}`,i.fillText(`Quedan ${wo()} de ${On.length} voces.`,56,322),i.fillStyle=gt.muted,i.font=`500 30px ${St}`,i.fillText("Lo que escuchaste es el dato. Nada fue grabado.",56,376),i.font=`500 24px ${St}`,Fu(i,`${Number(a.value).toLocaleString("es-MX")} ${s.unit} en ${a.year} \xB7 ${s.source}`,56,450,e-112,34)});Jr.position.copy(An(0,2.4,2.25));Jr.lookAt(0,1.6,0);Kr.add(Jr);rr.fin.push(Jr);function Nd(i,e,t,n){let s=Fi(.75,.24,640,205,(r,a,o)=>{let l=N.hover===t;r.fillStyle=l?gt.ink:"#d6d6d6",r.font=`${l?700:600} 54px ${St}`,r.textAlign="center",r.fillText(i,a/2,112);let c=r.measureText(i).width;r.textAlign="left",r.fillStyle=l?gt.ink:"rgba(245,245,245,.28)",r.fillRect(a/2-c/2,146,c,l?4:2)});return s.position.copy(An(e,2.3,1.15)),s.lookAt(0,1.3,0),Kr.add(s),rr.fin.push(s),qn(s,t,n),s}var Vv=Nd("Repetir",-11,"repetir",()=>Fn(N.dash)),Wv=Nd("Volver al lobby",11,"lobby",()=>ar());document.fonts&&Promise.all([500,600,700].map(i=>document.fonts.load(`${i} 32px Manrope`))).then(()=>Sd.forEach(i=>i.redraw())).catch(()=>{});var Xv=new po,Yr={};window.__nucleo.glb=Yr;function Co(i,e){let t=Eu[i];Xv.load(t.file,n=>{let s=n.scene;if(s.position.fromArray(t.position),s.rotation.y=t.rotationY*rt,s.scale.setScalar(t.scale),s.scale.y*=t.scaleY??1,e.add(s),Yr[i]=s,t.scatter&&qv(s,t),t.hideProcedural)for(let r of rr[i==="esfera"?"amb":i]||[])r.material.userData.base=0;s.traverse(r=>{if(!r.isMesh)return;let a=r.name.toLowerCase();for(let o of Nt)a.includes(o)&&i==="lobby"&&qn(r,o,()=>Fn(o));i==="fin"&&a.includes("repetir")&&qn(r,"repetir",()=>Fn(N.dash)),i==="fin"&&a.includes("lobby")&&qn(r,"lobby",()=>ar())}),jv(s),console.info(`[N\xFAcleo] GLB cargado: ${t.file}`)},void 0,()=>console.info(`[N\xFAcleo] sin ${t.file}: se usa la escena generada`))}function qv(i,e){let t=(e.seed??1)>>>0,n=()=>{t=t+1831565813|0;let f=Math.imul(t^t>>>15,1|t);return f=f+Math.imul(f^f>>>7,61|f)^f,((f^f>>>14)>>>0)/4294967296},s=new I().fromArray(e.center||[0,0,0]),r=[...i.children],a=e.minDist??9,o=e.sectors??4,l=e.sectorScale??[.9,1.25],c=Array.from({length:o},(f,p)=>p===0?{a:0,s:1}:{a:p/o*Kt+(n()-.5)*.5,s:Ze(l[0],l[1],n())}),u=(f,p,g)=>{let v=new yt;v.position.copy(s),v.rotation.y=p,v.scale.set(g,1,g),i.add(v),v.add(f),f.position.sub(s)},h=c.map(f=>new Ce().makeTranslation(s.x,s.y,s.z).multiply(new Ce().makeRotationY(f.a)).multiply(new Ce().makeScale(f.s,1,f.s)).multiply(new Ce().makeTranslation(-s.x,-s.y,-s.z)));for(let f of e.scatter){let p=new RegExp(f.match);if(f.instanced){let g=new Map;for(let v of r){if(!p.test(v.name)||!v.isMesh)continue;v.updateMatrix();let m=v.geometry.uuid+v.material.uuid;g.has(m)||g.set(m,{geo:v.geometry,mat:v.material,name:v.name,ms:[]});for(let d=1;d<o;d++)n()<(f.keep??1)&&g.get(m).ms.push(new Ce().multiplyMatrices(h[d],v.matrix));f.thin&&n()<f.thin&&(v.visible=!1)}for(let v of g.values()){if(!v.ms.length)continue;let m=new ts(v.geo,v.mat,v.ms.length);m.name=v.name,v.ms.forEach((d,y)=>m.setMatrixAt(y,d)),m.frustumCulled=!1,i.add(m)}continue}for(let g of r)if(p.test(g.name)){if(f.hide){g.visible=!1;continue}if(f.copy)for(let v=1;v<o;v++)u(g.clone(),c[v].a,c[v].s);if(f.distribute){let v=Math.floor(n()*o);v>0&&u(g,c[v].a,c[v].s)}if(f.move&&n()<f.move)for(let v=0;v<8;v++){let m=n()*Kt,d=Ze(f.r[0],f.r[1],n()),y=(g.position.x-s.x)*d,x=(g.position.z-s.z)*d,_=s.x+y*Math.cos(m)+x*Math.sin(m)+i.position.x,C=s.z-y*Math.sin(m)+x*Math.cos(m)+i.position.z;if(Math.hypot(_,C)>=a||v===7){u(g,m,d);break}}}}}var Hr=[];function jv(i){i.updateWorldMatrix(!0,!0);let e=new Ce;i.traverse(t=>{if(!(!t.isMesh||!/^Voz_/.test(t.name)||!t.visible))if(t.isInstancedMesh)for(let n=0;n<t.count;n++)t.getMatrixAt(n,e),Hr.push({root:i,pos:new I().setFromMatrixPosition(e.premultiply(t.matrixWorld)),k:Hr.length});else Hr.push({root:i,pos:t.getWorldPosition(new I),k:Hr.length})})}var Yv=new I,fd=new I;function Ud(i,e){let t=null,n=.045;for(let s of Hr){if(!s.root.visible||!s.root.parent||!s.root.parent.visible)continue;let r=fd.copy(s.pos).sub(i).dot(e);if(r<1.5)continue;let a=Math.sqrt(Math.max(0,fd.lengthSq()-r*r))/r;a<n&&(n=a,t=s)}return t}function zd(i,e){let t=i.k%10;sr(293.66*Math.pow(2,(Dd[t%5]+12*Math.floor(t/5))/12),.035),e&&Ot.play(e,"tick",1.4)}var Gr={gases:new yt,hielo:new yt,jungla:new yt};for(let i of Nt)Gr[i].position.y=-mt.platformLift,vn.add(Gr[i]),Co(i,Gr[i]),Eu[i+"2"]&&Co(i+"2",Gr[i]);function $v(){let i=ce.count?N.yearPos/ce.count:0;for(let e of Nt){let t=Yr[e],n=Yr[e+"2"];if(t&&n){let s=i>=(mt.variantAt??.5);t.visible=!s,n.visible=s}}}Co("lobby",Bi);Co("fin",Kr);function Fo(){Bi.visible=N.state==="lobby",vn.visible=N.state==="ambiente"||N.state==="fin",Kr.visible=N.state==="fin",Jt.visible=rn.visible=N.state==="ambiente",qr.visible=N.state==="lobby";for(let e of Nt)Gr[e].visible=e===N.dash;let i=Ut[N.dash];qr.material.color.setHex(N.state==="lobby"?7237230:i.color);for(let e of Bv)e.material.color.set(zi(i.color));zo.material.color.set(zi(i.color)),Gu.material.color.set(1052688).lerp(Ad.setHex(i.color),.03)}function ar(){(N.state==="ambiente"||N.state==="fin")&&mn("cierre"),N.state="lobby",N.hover=null,qu(!1),Hd(),ea.redraw(),ce.setLevel(.35),Fo()}function Fn(i){N.dash=i,N.state="ambiente",N.yearPos=0,N.scale=1,N.speed=1,N.scrubbing=!1,Nu=0,mn("transicion"),ce.setDashboard(i),ce.setLevel(.55),ce.play(),Hd(),Ld(i),En.getWorldPosition(tr),rn.position.y=zt(tr.y-mt.sphereBelowEyes,.7,1.5),Ov(),Cd(),Jt.redraw(),ea.redraw(),Fo(),pn(null,"confirmar",.8)}function Zv(){mn("cierre"),N.state="fin",qu(!1),ce.setLevel(.3),Jr.redraw(),Fo(),pn(null,"tope")}function qu(i){N.sensory=i,document.body.classList.toggle("sensorial",i)}var Od=0,dd=0,Kv=new yo;function nr(i,e){e&&(Od=performance.now());let t=ce.count;N.yearPos=zt(i,0,t);let n=Math.min(t,Math.floor(N.yearPos+1e-6));return n!==ce.idx&&(ce.setIndex(n),Cd(),Jt.redraw(),e)?(mn("avance",{pos:n/t}),!0):!1}function Ro(i){N.scale=zt(i,.4,mt.maxScale);let e=N.scale<mt.pauseBelowScale?0:N.scale<=1?N.scale:1+(N.scale-1)/(mt.maxScale-1)*(mt.maxYearsPerBar-1),t=Math.round(e*10)/10;t!==N.speed&&(N.speed=t,Jt.redraw())}var Nu=0;ce.onBar=()=>{if(N.state==="ambiente"&&(Nu++,!(Nu<=mt.introBars||N.scrubbing||N.speed===0))){if(ce.idx>=ce.count){setTimeout(Zv,0);return}nr(N.yearPos+N.speed,!1)}};ce.onStep=(i,e,t,n)=>{let s=Math.max(0,(e-ce.ctx.currentTime)*1e3);setTimeout(()=>{if(N.stepNow=i,N.stepAt=performance.now(),N.state==="lobby")return;for(let o of On)o.alive&&o.step===i&&(o.flash=1);let r=Ru.default.hapticForStep(t,i),a=Ru.default.hapticForStep(n,i);mt.vibrarMelodia&&r&&i===0&&Ot.play("right","tick",.8)},s)};var Q={angle:0,vel:0,target:null,settled:0,front:"gases",lastField:0,lastNote:0,grab:!1,hand:null,touch:[null,null],trail:{a:0,dir:1,life:0}},Vr=.45,rs=.65,gi=.55,nn=66*rt,Ks=15*rt,Cu=.11,Uu=[174.61,196,220,233.08,146.83,261.63,293.66,329.63,349.23],Fd=146.83,$r=[...Nt].sort((i,e)=>Ut[i].az-Ut[e].az),C_=Ut[$r[0]].az*rt,R_=Ut[$r[$r.length-1]].az*rt,Zr=Kt/Nt.length,Tt=new yt;Tt.position.set(0,.85,0);Tt.visible=!1;gn.add(Tt);var Eo={},ir=i=>(i=(i+Math.PI)%Kt,i<0&&(i+=Kt),i-Math.PI),bo=(i,e,t,n,s=48)=>Array.from({length:s+1},(r,a)=>{let o=Ze(t,n,a/s);return new I(Math.sin(o)*i,e,-Math.cos(o)*i)});function Io(i,e,t,n,s,r){let a=[],o=[],l=[];for(let u=0;u<=s;u++){let h=u/s,f=Ze(t,n,h),p=Math.sin(f),g=-Math.cos(f),v=r?h*h:1;if(a.push(p*i,0,g*i,p*e,0,g*e),o.push(v,v,v,v,v,v),u<s){let m=u*2;l.push(m,m+1,m+2,m+1,m+3,m+2)}}let c=new lt;return c.setAttribute("position",new Qe(a,3)),c.setAttribute("color",new Qe(o,3)),c.setIndex(l),c}var ls=i=>new Ct({color:i,vertexColors:!0,blending:Ps,depthWrite:!1,transparent:!0,side:wt});{let i=new We(new is(Vr,rs,72,1,Math.PI/2-nn,nn*2),new fn({color:1776411,roughness:.42,metalness:.65,side:wt}));i.rotation.x=-Math.PI/2,Tt.add(i),Tt.userData.top=i;for(let e of[Vr,rs]){let t=new We(new Vs(e,e,Cu,56,1,!0,Math.PI-nn,nn*2),new fn({color:394758,roughness:.6,metalness:.4,side:wt}));t.position.y=-Cu/2,Tt.add(t)}Tt.add(new Un(new lt().setFromPoints(bo(rs,.001,-nn,nn)),sn(new qt({color:16777215}),.75))),Tt.add(new Un(new lt().setFromPoints(bo(Vr,.001,-nn,nn)),sn(new qt({color:16777215}),.4))),Tt.add(new Un(new lt().setFromPoints(bo(Vr,-Cu,-nn,nn)),sn(new qt({color:16777215}),.08)));for(let e=-4;e<=4;e++){let t=e*Ks,n=e===0?.06:.042,s=new We(new Qa(n,32),new fn({color:328965,roughness:.75,metalness:.3}));s.rotation.x=-Math.PI/2,s.position.set(Math.sin(t)*gi,.0012,-Math.cos(t)*gi),Tt.add(s);let r=(a,o)=>{let l=new ns(new lt().setFromPoints(bo(a,.0018,0,Kt,40).slice(0,40)),sn(new qt({color:16777215}),o));l.position.set(s.position.x,0,s.position.z),Tt.add(l)};r(n,.24),e===0&&r(.075,.5),e===0?qn(s,"centro",()=>kd(null)):qn(s,"campo"+e,()=>Bd(e,null))}for(let e of Nt){let t=new We(Io(rs-.03,rs-.012,-3*rt,3*rt,6,!1),ls(new Ee(zi(Ut[e].color))));t.position.y=.003,Tt.add(t),Eo[e]=t}}var zu={1:new We(Io(gi-.014,gi+.014,-34*rt,0,24,!0),ls(0)),[-1]:new We(Io(gi-.014,gi+.014,34*rt,0,24,!0),ls(0))},Ao=new We(Io(gi-.016,gi+.016,-2.5*rt,2.5*rt,4,!1),ls(0));for(let i of[zu[1],zu[-1],Ao])i.position.y=.004,Tt.add(i);var Qr=new yt;Qr.visible=!1;gn.add(Qr);Qr.add(Qs(5,.35,16119285,.3),new ci(new lt().setFromPoints(Array.from({length:12},(i,e)=>[An(e*30,5,.41),An(e*30,5,.47)]).flat()),sn(new qt({color:7237230}),.9)));var Ou={1:new We(jr(5,-34*rt,0,.03,24,!0),ls(0)),[-1]:new We(jr(5,34*rt,0,.03,24,!0),ls(0))};for(let i of[Ou[1],Ou[-1]])i.position.y=.45,i.frustumCulled=!1,Qr.add(i);for(let i of Nt){let e=new We(jr(5,-3*rt,3*rt,.03,6,!1),ls(new Ee(zi(Ut[i].color))));e.position.y=.35,e.rotation.y=-Ut[i].az*rt,e.frustumCulled=!1,Bi.add(e)}var ea=Fi(.42,.05,840,100,(i,e,t)=>{i.textAlign="center",i.fillStyle=gt.muted,i.font=`600 30px ${St}`,i.fillText(N.state==="lobby"?"Desliza para girar \xB7 Toca el centro para entrar":"Centro para volver \xB7 Luces para cambiar de lugar",e/2,62),i.textAlign="left"});ea.rotation.x=-Math.PI/2;ea.position.set(0,.002,-(rs+.06));Tt.add(ea);function pd(i,e){let t=nn-.06,n=Math.abs(e)>t;i.visible=!0,i.rotation.y=-zt(e,-t,t),i.scale.set(1,1,1),i.material.opacity=n?.35:1}function sr(i,e=.045){let t=ce.ctx;if(!t||t.state!=="running"||!ce.nodes)return;let n=t.currentTime,s=t.createGain();s.gain.setValueAtTime(1e-4,n),s.gain.exponentialRampToValueAtTime(e,n+.008),s.gain.exponentialRampToValueAtTime(1e-4,n+1.1),s.connect(ce.nodes.master);for(let[r,a]of[[1,1],[2,.42],[3,.18]]){let o=t.createOscillator(),l=t.createGain();o.type="sine",o.frequency.value=i*r,l.gain.value=a,o.connect(l),l.connect(s),o.start(n),o.stop(n+1.15)}}function Wr(i){let e=null;for(let t of Nt){let n=ir(i-Ut[t].az*rt);(!e||Math.abs(n)<Math.abs(e.d))&&(e={id:t,d:n})}return{id:e.id,angle:i-e.d}}function Po(i){Q.vel=0,Q.target=Wr(i).angle,Q.settled=null}function Jv(i){if(Math.abs(i)!==3)return null;let e=$r.filter(t=>t!==N.dash);return i<0?e[0]:e[1]}function Bd(i,e,t=!1){if(t||sr(Uu[i+4]),N.state==="lobby")Po(Q.angle+i*Ks);else{let n=Jv(i);n&&Fn(n)}}function kd(i){sr(Fd,.05),mn("confirmacion"),i&&Ot.play(i,"confirmar"),N.state==="lobby"?Fn(Q.front):N.state!=="inicio"&&ar()}function Hd(){En.getWorldPosition(tr),Tt.position.y=zt(tr.y-.75,.45,1)}function Qv(i,e,t,n){let s=Tt.worldToLocal(Ui.copy(t)),r=Math.hypot(s.x,s.z),a=Math.atan2(s.x,-s.z),o=Q.touch[i],l=performance.now();if(Tt.visible&&Math.abs(s.y)<.09&&r>Vr-.07&&r<rs+.07&&Math.abs(a)<nn+.08){let c=zt(Math.round(a/Ks),-4,4);if(!o){Q.touch[i]={a,zone:c,z0:c,t0:l,moved:0},sr(Uu[c+4],.04),Ot.play(e,"tick",c===0?1.6:1),Q.trail.a=a,Q.trail.life=.6;return}let u=ir(a-o.a);o.moved+=Math.abs(u),N.state==="lobby"&&o.moved>.06?(Q.angle-=u,Q.vel=Ze(Q.vel,-u/Math.max(n,.008),.35),Q.grab=!0,Q.hand=e,Q.target=null,Q.settled=null):N.state!=="lobby"&&c!==o.zone&&(sr(Uu[c+4],.03),Ot.play(e,"tick")),Math.abs(u)>.002&&(Q.trail.dir=u>0?1:-1),Q.trail.a=a,Q.trail.life=Math.min(1,Q.trail.life+Math.abs(u)*6+.02),o.a=a,o.zone=c}else o&&(Q.touch[i]=null,!Q.touch[0]&&!Q.touch[1]&&!as.some(c=>c.grab)&&(Q.grab=!1),l-o.t0<500&&o.moved<.12&&(o.z0===0?kd(e):Bd(o.z0,e,!0)))}function e_(i){Tt.visible=N.state!=="inicio",Qr.visible=N.state==="lobby";let e=Q.trail;e.life=Math.max(0,e.life-i*1.4);for(let t of[1,-1])for(let n of[zu[t],Ou[t]])n.visible=e.dir===t&&e.life>.01,n.rotation.y=-e.a,n.material.color.setScalar(e.life*.9);if(Tt.userData.top.material.emissive.setScalar(.07*e.life),Ao.visible=e.life>.01,Ao.rotation.y=-e.a,Ao.material.color.set(gt.signal).multiplyScalar(e.life),N.state==="lobby"){if(!Q.grab)if(Math.abs(Q.vel)>.25)Q.angle+=Q.vel*i,Q.vel*=Math.exp(-2.5*i),Q.target=null,Q.settled=null;else{Q.vel=0,Q.target===null&&(Q.target=Wr(Q.angle).angle);let n=Q.target-Q.angle;Math.abs(n)>.004?Q.angle+=n*Math.min(1,i*7):Q.settled!==Q.target&&(Q.angle=Q.settled=Q.target,Q.front=Wr(Q.angle).id,sr(Fd*1.5,.05),pn(Q.hand,"boton"),ce.setDashboard(Q.front),ce.play(),Q.hand=null)}let t=Math.round(Q.angle/Ks);if(t!==Q.lastField){Q.lastField=t;let n=performance.now(),s=Math.abs(ir(Q.angle-Wr(Q.angle).angle)),r=1-Math.min(1,s/(Zr/2));n-Q.lastNote>60&&(Q.lastNote=n,mn("giro",{step:t}),s>Zr/2-Ks*.6?pn(Q.hand,"diente"):pn(Q.hand,"tick",.6+.9*r))}Q.front=Wr(Q.angle).id,Bi.rotation.y=Q.angle,os.position.copy(An(Q.angle/rt,2.6,2.35)),os.lookAt(0,2,0);for(let n of Nt)pd(Eo[n],ir(Ut[n].az*rt-Q.angle))}else{let t=$r.filter(n=>n!==N.dash);for(let n of Nt)n===N.dash?Eo[n].visible=!1:pd(Eo[n],(n===t[0]?-3:3)*Ks)}}var Xn=new lo,as=[];for(let i=0;i<2;i++){let e=kt.xr.getController(i),t={ctrl:e,hand:null,grip:!1,lastAngle:0,btn:[],hover:null},n=new Un(new lt().setFromPoints([new I,new I(0,0,-1)]),sn(new qt({color:16777215}),.5));n.scale.z=25,e.add(n,new We(new Xs(.02,12,8),new Ct({color:16777215}))),e.addEventListener("connected",s=>{t.hand=s.data.handedness,t.source=s.data,e.visible=!0,Ot.setSources(kt.xr.getSession())}),e.addEventListener("disconnected",()=>{t.hand=null,t.source=null,e.visible=!1}),e.addEventListener("selectstart",()=>{if(t.trig=!0,t.hover){Gd(t.hover,t.hand);return}t.ctrl.getWorldPosition(bt),N.state==="lobby"?(t.grab={a:Math.atan2(bt.x,-bt.z),moved:0,t0:performance.now()},Q.grab=!0,Q.hand=t.hand,Q.target=null,Q.settled=null,pn(t.hand,"tick")):N.state==="ambiente"&&(t.grip=!0,t.byTrigger=!0,t.lastAngle=Lo(t),So(),pn(t.hand,"tick"))}),e.addEventListener("selectend",()=>{if(t.trig=!1,t.grab){let s=t.grab;t.grab=null,!as.some(r=>r.grab)&&!Q.touch[0]&&!Q.touch[1]&&(Q.grab=!1),N.state==="lobby"&&s.moved<.05&&performance.now()-s.t0<400&&(mn("confirmacion"),pn(t.hand,"confirmar"),Fn(Q.front))}t.byTrigger&&(t.byTrigger=!1,t.grip=!1,So(),N.state==="ambiente"&&(mn("confirmacion"),pn(t.hand,"soltar")))}),e.addEventListener("squeezestart",()=>{t.grip=!0,t.lastAngle=Lo(t),So(),N.state==="ambiente"&&pn(t.hand,"tick")}),e.addEventListener("squeezeend",()=>{t.grip=!1,So(),N.state==="ambiente"&&(mn("confirmacion"),pn(t.hand,"soltar"))}),e.visible=!1,gn.add(e),as.push(t)}var md=new I().fromArray(mt.sphereCenter),bt=new I,Ui=new I;function Lo(i){return i.ctrl.getWorldPosition(bt),Math.atan2(bt.x-md.x,-(bt.z-md.z))}var Js=null;function So(){let i=as.filter(e=>e.grip);N.scrubbing=N.state==="ambiente"&&i.length===1,i.length===2?(i[0].ctrl.getWorldPosition(bt),i[1].ctrl.getWorldPosition(Ui),Js={d0:Math.max(.05,bt.distanceTo(Ui)),s0:N.scale}):Js=null;for(let e of i)e.lastAngle=Lo(e);N.state==="ambiente"&&Jt.redraw()}function gd(i){let e=ce.entry&&ce.entry.year,t=ce.idx===0||ce.idx>=ce.count;pn(i,t?"tope":e&&e%10===0?"decada":"anio")}function Gd(i,e){e&&Ot.play(e,"confirmar",.8),mn("confirmacion"),i.userData.onSelect()}function Vd(i,e){i!==N.hover&&(N.hover=i,i&&ce.tick(1200,.03),N.state==="lobby"&&i&&mi[i]&&(ce.setDashboard(i),ce.play()),N.state==="fin"&&(Vv.redraw(),Wv.redraw()),N.state==="ambiente"&&Jt.redraw(),ki.redraw())}function ju(){return bd.filter(i=>{let e=i;for(;e;){if(!e.visible)return!1;e=e.parent}return!0})}function t_(i){if(!kt.xr.getSession())return;let t=null,n=null;for(let r of as){if(!r.hand)continue;ld.identity().extractRotation(r.ctrl.matrixWorld),Xn.ray.origin.setFromMatrixPosition(r.ctrl.matrixWorld),Xn.ray.direction.set(0,0,-1).applyMatrix4(ld);let a=Xn.intersectObjects(ju(),!1)[0];r.hover=a?a.object:null,a&&!t&&(t=a.object.userData.hoverId,n=r.hand);let o=as.indexOf(r);if(N.state==="ambiente"&&!a){let c=Ud(Xn.ray.origin,Yv.copy(Xn.ray.direction));c!==r.voz&&(r.voz=c,c&&zd(c,r.hand))}else r.voz=null;if(r.ctrl.getWorldPosition(bt),Qv(o,r.hand,bt,i),r.grab&&N.state==="lobby"){let c=Math.atan2(bt.x,-bt.z),u=ir(c-r.grab.a),h=mt.giroRatio??2;r.grab.a=c,r.grab.moved+=Math.abs(u),Q.angle-=u*h,Q.vel=Ze(Q.vel,-u*h/Math.max(i,.008),.35),Q.target=null,Q.settled=null,Math.abs(u)>.002&&(Q.trail.dir=u>0?1:-1),Q.trail.a=zt(c,-nn,nn),Q.trail.life=Math.min(1,Q.trail.life+Math.abs(u)*6+.03)}else r.grab&&(r.grab=null);if(!r.grab&&!r.grip&&!Q.touch[o]&&Tt.visible&&(N.state!=="lobby"||Q.settled!==null)){let c=Tt.localToWorld(Ui.set(0,0,-gi)).distanceTo(bt),u=performance.now();c<.25&&u-(r.beaconAt||0)>Ze(110,520,c/.25)&&(r.beaconAt=u,Ot.play(r.hand,"faro",.6+.8*(1-c/.25)))}if(N.state==="ambiente"){r.ctrl.getWorldPosition(bt);let c=rn.worldToLocal(Ui.copy(bt)).length(),u=mt.sphereRadius;if(c<u*2.2)Xr(o,bt),Du(o,r.hand);else{let h=Xn.intersectObject(Oo,!1)[0];Xr(o,h?h.point:null,!0),h&&Du(o,r.hand)}}else Xr(o,null);let l=r.source&&r.source.gamepad;if(l){let c=l.buttons[4]&&l.buttons[4].pressed,u=l.buttons[5]&&l.buttons[5].pressed;c&&!r.btn[4]&&N.state!=="lobby"&&(Ot.play(r.hand,"confirmar",.7),ar()),u&&!r.btn[5]&&(Ot.play(r.hand,"confirmar",.7),N.state==="lobby"?Po(Q.angle+Zr):Fn(Nt[(Nt.indexOf(N.dash)+1)%Nt.length]));let h=l.buttons[3]&&l.buttons[3].pressed;h&&!r.btn[3]&&N.state==="ambiente"&&Wu(),r.btn[3]=h,r.btn[4]=c,r.btn[5]=u;let f=l.axes.length>=4?l.axes[2]:l.axes[0]||0;N.state==="lobby"&&Math.abs(f)>.25&&(Q.vel=-f*2.4,Q.target=null,Q.settled=null,Q.hand=r.hand),N.state==="ambiente"&&Math.abs(f)>.25&&nr(N.yearPos+f*i*ce.count*.2,!0)&&gd(r.hand)}}if(Vd(t,n),N.state!=="ambiente")return;let s=as.filter(r=>r.grip);if(s.length===1){let r=s[0],a=Lo(r),o=a-r.lastAngle;o>Math.PI&&(o-=Kt),o<-Math.PI&&(o+=Kt),r.lastAngle=a,nr(N.yearPos+o/Kt*ce.count,!0)&&gd(r.hand)}else if(s.length===2&&Js){s[0].ctrl.getWorldPosition(bt),s[1].ctrl.getWorldPosition(Ui);let r=N.speed;Ro(Js.s0*(bt.distanceTo(Ui)/Js.d0)),r!==N.speed&&(pn(null,"tick"),mn(N.speed>r?"apertura":"cierre",{mini:!0})),bt.add(Ui).multiplyScalar(.5),rn.worldToLocal(bt),bt.lengthSq()>1e-8&&Ke.expandDir.lerp(bt.normalize(),.2).normalize()}}var vd=new Ue,zn=null,Yu=0,Do=0,_d=null;function No(i,e){return vd.set(i.clientX/window.innerWidth*2-1,-(i.clientY/window.innerHeight)*2+1),Xn.setFromCamera(vd,En),Xn.intersectObjects(e,!1)[0]}kt.domElement.addEventListener("pointerdown",i=>{if(N.xr||N.state==="inicio")return;let e=N.state==="ambiente"&&No(i,[Oo]);Xr(0,e?e.point:null,!0),zn={x:i.clientX,y:i.clientY,moved:0,sphere:!!e},N.scrubbing=!!e,e&&Jt.redraw(),kt.domElement.setPointerCapture(i.pointerId)});kt.domElement.addEventListener("pointermove",i=>{if(!(N.xr||N.state==="inicio"))if(zn){let e=i.clientX-zn.x,t=i.clientY-zn.y;zn.x=i.clientX,zn.y=i.clientY,zn.moved+=Math.abs(e)+Math.abs(t),zn.sphere?nr(N.yearPos+e/500*ce.count,!0):(Yu+=e*.004,Do=zt(Do+t*.004,-1.2,1.2))}else{if(N.state==="ambiente"){let n=Ud(Xn.ray.origin,Xn.ray.direction);n!==_d&&(_d=n,n&&zd(n,null))}let e=N.state==="ambiente"&&No(i,[Oo]);Xr(0,e?e.point:null,!0),e&&Du(0,null);let t=No(i,ju());Vd(t?t.object.userData.hoverId:null,null),kt.domElement.style.cursor=t?"pointer":"grab"}});kt.domElement.addEventListener("pointerup",i=>{if(!zn)return;let e=zn;if(zn=null,e.sphere){N.scrubbing=!1,Jt.redraw();return}if(e.moved<6){let t=No(i,ju());t&&Gd(t.object,null)}});kt.domElement.addEventListener("wheel",i=>{N.state==="ambiente"&&Ro(N.scale-Math.sign(i.deltaY)*.1)},{passive:!0});window.addEventListener("keydown",i=>{if(N.state==="inicio")return;let e=i.key.toLowerCase();N.state==="ambiente"&&(e==="arrowright"&&nr(Math.floor(N.yearPos)+1,!0),e==="arrowleft"&&nr(Math.ceil(N.yearPos)-1,!0),e==="arrowup"&&Ro(N.scale+.1),e==="arrowdown"&&Ro(N.scale-.1),e==="s"&&qu(!N.sensory),e==="r"&&Fn(N.dash)),N.state==="lobby"&&(e==="arrowright"&&Po(Q.angle+Zr),e==="arrowleft"&&Po(Q.angle-Zr),e==="enter"&&Fn(Q.front)),e==="i"&&N.state==="ambiente"&&Wu(),e==="d"&&Id(),e==="l"&&N.state!=="lobby"&&ar(),(e==="1"||e==="2"||e==="3")&&Fn(Nt[Number(e)-1])});var Tn=i=>document.getElementById(i);async function Wd(i){N.desc=!!(Tn("descripciones")&&Tn("descripciones").checked),await ce.play();let e=od[mt.leitmotiv],t=0;if(e&&ce.ctx)try{let n=ce.ctx.createGain();n.gain.value=.6,n.connect(ce.ctx.destination),t=e.play(ce.ctx,n,ce.ctx.currentTime+.1)||0}catch{t=0}if(i)try{let n=await navigator.xr.requestSession("immersive-vr",{optionalFeatures:["local-floor","bounded-floor"]});await kt.xr.setSession(n),N.xr=!0,Ot.setSources(n),n.addEventListener("inputsourceschange",()=>Ot.setSources(n)),n.addEventListener("end",()=>{N.xr=!1,Tn("inicio").hidden=!1,ce.stop(),N.state="inicio"})}catch(n){Tn("estado").textContent="No se pudo entrar a VR: "+n.message,N.xr=!1}Tn("inicio").hidden=!0,Tn("ayuda").hidden=N.xr,ar(),Yu=0,Do=0,t&&(ce.setLevel(.03),setTimeout(()=>{N.state==="lobby"&&ce.setLevel(.35)},Math.max(0,t-1.6)*1e3))}Tn("pantalla").addEventListener("click",()=>Wd(!1));Tn("vr").addEventListener("click",()=>Wd(!0));navigator.xr&&navigator.xr.isSessionSupported?navigator.xr.isSessionSupported("immersive-vr").then(i=>{Tn("vr").disabled=!i,Tn("estado").textContent=i?"Visor detectado. Usa aud\xEDfonos.":"Sin visor en este navegador: puedes usar la versi\xF3n de pantalla."}).catch(()=>{}):(Tn("vr").disabled=!0,Tn("estado").textContent="Este navegador no tiene WebXR: usa la versi\xF3n de pantalla, o Wolvic en el visor.");window.addEventListener("resize",()=>{En.aspect=window.innerWidth/window.innerHeight,En.updateProjectionMatrix(),kt.setSize(window.innerWidth,window.innerHeight)});var yd=new oo;Fo();Bi.visible=!1;vn.visible=!1;kt.setAnimationLoop(()=>{let i=Math.min(.05,yd.getDelta()),e=yd.elapsedTime;N.xr||(En.rotation.y=-Yu,En.rotation.x=-Do),t_(i),e_(i),Hv();{let n=0,s=0;if(N.state==="lobby")n=zt(Math.abs(Q.vel)/3.5,0,1),s=zt(-Q.vel/3,-.7,.7);else if(N.state==="ambiente"&&performance.now()-Od<200){let r=(N.yearPos-dd)/Math.max(i,.008)/Math.max(1,ce.count);n=zt(Math.abs(r)*2.2,0,1),s=zt(r*2,-.7,.7)}dd=N.yearPos,ce.ctx&&ce.ctx.state==="running"&&ce.nodes&&Kv.set(ce.ctx,ce.nodes.master,n,n,s)}N.uiAlpha=Ze(N.uiAlpha,N.sensory?0:1,Math.min(1,i*2.2));for(let n of Md)n.opacity=n.userData.base*N.uiAlpha;let t=ce.energy();if(N.beat=Ze(N.beat,t,.3),qr.rotation.y=e*.01,N.state==="lobby")for(let n of Nt){let s=Td[n],r=N.hover===n||Q.front===n;s.sec.material.userData.base=Ze(s.sec.material.userData.base,Yr.lobby?r?.3:0:r?.75:.26,.15),s.pan.scale.setScalar(Ze(s.pan.scale.x,r?1.06:1,.15))}if(vn.visible){let n=ce.derived;Fv(i,Ze(.12,1,N.uiAlpha)),$v();for(let a=0;a<Pu;a++){let o=kv[a].material;o.userData.base=Ze(o.userData.base,zt(n.p*Pu-a,0,1)*.32,.05)}let s=60/n.tempo/4,r=N.stepAt?Math.min(1,(performance.now()-N.stepAt)/1e3/s):0;Rd.rotation.y=-(((N.stepNow||0)+r)/16)*Kt,rn.scale.setScalar(Ze(rn.scale.x,.8+.5*zt((N.scale-.4)/(mt.maxScale-.4),0,1),.2)),rn.rotation.y=-(N.yearPos/ce.count)*Kt,rn.updateMatrixWorld(),Gv(i,n)}kt.render(gn,En)});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
