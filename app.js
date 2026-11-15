(()=>{var c0=Object.create;var yh=Object.defineProperty;var u0=Object.getOwnPropertyDescriptor;var h0=Object.getOwnPropertyNames;var f0=Object.getPrototypeOf,d0=Object.prototype.hasOwnProperty;var p0=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var m0=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of h0(e))!d0.call(i,s)&&s!==t&&yh(i,s,{get:()=>e[s],enumerable:!(n=u0(e,s))||n.enumerable});return i};var xh=(i,e,t)=>(t=i!=null?c0(f0(i)):{},m0(e||!i||!i.__esModule?yh(t,"default",{value:i,enumerable:!0}):t,i));var Ou=p0((N_,zu)=>{var Xv=(()=>{let e=[0,2,4,7,9],t=["bajo","arpegio","pulso","canto"],n={jungla:{label:"Jungla",tempo:104,geo:{type:"lowpass",hz:900,q:.4,swellHz:.23,depth:.25,gain:.16},voices:[{id:"bajo",name:"Bajo",band:"90\u2013200 Hz",k:3,rot:0,hz:165,haptic:{hz:70,amp:.85,ms:40}},{id:"arpegio",name:"Arpegio",band:"2.3\u20134 kHz",k:5,rot:2,rootMidi:98,haptic:{hz:200,amp:.45,ms:20}},{id:"pulso",name:"Pulso",band:"5.6 kHz",k:9,rot:1,hz:5600,amHz:22,haptic:{hz:320,amp:.3,ms:12}},{id:"canto",name:"Canto",band:"500\u2013900 Hz",k:1,rot:12,hz:620,haptic:{hz:120,amp:.6,ms:150}}]},hielo:{label:"Hielo marino",tempo:52,pressure:{type:"heat",hz:55},geo:{type:"bandpass",hz:520,q:1.1,swellHz:.07,depth:.6,gain:.3},voices:[{id:"bajo",name:"Bajo",band:"60\u201390 Hz",k:2,rot:0,hz:88,haptic:{hz:60,amp:.85,ms:60}},{id:"arpegio",name:"Arpegio",band:"2.4\u20133.6 kHz",k:3,rot:5,rootMidi:99,haptic:{hz:220,amp:.4,ms:24}},{id:"pulso",name:"Pulso",band:"6.2 kHz",k:5,rot:2,hz:6200,amHz:0,haptic:{hz:340,amp:.3,ms:10}},{id:"canto",name:"Canto",band:"600\u2013800 Hz",k:1,rot:10,hz:660,haptic:{hz:110,amp:.55,ms:220}}]},gases:{label:"Gases de efecto invernadero",tempo:60,geo:{type:"lowpass",hz:480,q:.5,swellHz:.25,depth:.8,gain:.3},voices:[{id:"bajo",name:"Bajo",band:"70\u2013100 Hz",k:2,rot:0,hz:98,haptic:{hz:60,amp:.85,ms:90}},{id:"arpegio",name:"Melod\xEDa",band:"520\u2013880 Hz",k:8,rot:0,rootMidi:72,melody:[0,1,2,3,4,3,1,0],haptic:{hz:150,amp:.45,ms:30}},{id:"pulso",name:"Pulso",band:"5 kHz",k:7,rot:1,hz:5e3,amHz:0,haptic:{hz:310,amp:.28,ms:10}},{id:"canto",name:"Canto",band:"390\u2013590 Hz",k:1,rot:12,hz:392,haptic:{hz:100,amp:.6,ms:240}}]}},s=d=>Math.min(1,Math.max(0,d)),r=d=>440*Math.pow(2,(d-69)/12);function a(d,y){let x=Math.imul(d>>>0,374761393)+Math.imul(y>>>0,668265263)>>>0;return x=Math.imul(x^x>>>13,1274126177)>>>0,x=(x^x>>>16)>>>0,x/4294967296}function o(d,y,x){let _=[];for(let R=0;R<y;R++)_.push(R*d%y<d);return _.map((R,E)=>_[((E-x)%y+y)%y])}let l=d=>d.reduce((y,x,_)=>x?y|1<<_:y,0);function c(d,y){let x=n[d],_=s(y.vit/100),R=s(y.div/100),E=s(y.est/100),A=s(y.pre/100),C=Math.max(1,Math.round(R*4)),S=s((E-.2)/.5),b=Math.round((.25+.75*_)*1e3),I=x.voices.map((B,O)=>{let G=t.indexOf(B.id)<C,$=Math.round(B.rot*S),W=o(B.k,16,$),J=W.map((oe,me)=>oe?Math.floor(a(O+1,me+1)*1e3):1e3),F=Math.min(...J),ie=W.map((oe,me)=>oe&&(J[me]<b||J[me]===F));return{...B,active:G,rot:$,pattern:W,alive:ie,patternMask:l(W),mask:G?l(ie):0}});return{signatureId:d,tempo:x.tempo,voices:I,v:_,d:R,s:E,p:A,feverCents:y.fever||0,scaleSize:2+Math.round(R*3),jitterMs:Math.round((1-E)*70),detuneCents:Math.round((1-E)*40),bioCutoffHz:Math.round(12e3*Math.pow(.18333333333333332,A)),reverbWet:Math.round((.34-.26*A)*1e3)/1e3,anthroGain:Math.round(A*A*.55*1e3)/1e3,velocity:Math.round((.5+.5*_)*1e3)/1e3}}let u=d=>d.reduce((y,x)=>y+x,0)/d.length,h={jungla:{label:"Jungla",signature:"jungla",unit:"km\xB2 talados ese a\xF1o",source:"INPE PRODES, Amazonia Legal",vitals(d){let y=Math.max(...d.map(R=>R.value)),x=d.reduce((R,E)=>R+E.value,0),_=0;return d.map(R=>{_+=R.value;let E=_/x,A=R.value/y;return{year:R.year,value:R.value,vit:95-55*E,div:100-50*E,est:92-50*A,pre:5+80*A,fever:0}})}},hielo:{label:"Hielo marino",signature:"hielo",unit:"millones de km\xB2 en septiembre",source:"NSIDC Sea Ice Index, \xC1rtico",vitals(d){let y=u(d.slice(0,10).map(x=>x.value));return d.map((x,_)=>{let R=s((y-x.value)/(y-3)),E=_===0?0:s(Math.abs(x.value-d[_-1].value)/1.5);return{year:x.year,value:x.value,vit:95-60*R,div:100-55*R,est:95-30*R-35*E,pre:5+75*R,fever:0}})}},gases:{label:"Gases de efecto invernadero",signature:"gases",unit:"ppm de CO\u2082 en Mauna Loa",source:"NOAA Global Monitoring Laboratory",vitals(d){let y=d[0].value,x=Math.max(...d.map(E=>E.value)),_=d.map((E,A)=>A===0?d[1].value-E.value:E.value-d[A-1].value),R=Math.max(..._);return d.map((E,A)=>{let C=s((E.value-y)/(x-y)),S=s(_[A]/R),b=A===0?0:s(Math.abs(_[A]-_[A-1])/1.5);return{year:E.year,value:E.value,vit:95-45*C,div:100-45*C,est:95-35*C-20*b,pre:5+75*S,fever:50*C}})}}};function f(d,y,x){if(!d.melody)return-1;let _=Math.floor(y*d.melody.length/16);return Math.min(d.melody[_],x-1)}let p=d=>n[d].pressure||{type:"machine"},g=["bajo","canto","arpegio","pulso"];function v(d,y){for(let x of g){let _=d.voices.find(R=>R.id===x);if(_&&_.mask>>y&1)return{voice:x,hz:_.haptic.hz,amp:Math.round(_.haptic.amp*d.velocity*1e3)/1e3,ms:_.haptic.ms}}return null}return{REFERENCE:{vit:95,div:100,est:95,pre:5,fever:0},STEPS:16,PENTA:e,KEEP_ORDER:t,HAPTIC_PRIORITY:g,SIGNATURES:n,DASHBOARDS:h,clamp01:s,midiHz:r,hash01:a,euclid:o,maskOf:l,derive:c,hapticForStep:v,melodyDegree:f,pressureOf:p}})();typeof zu<"u"&&(zu.exports=Xv)});var g0=0,bh=1,v0=2;var Wf=1,_0=2,ai=3,jn=0,cn=1,Pt=2,Ni=0,Os=1,os=2,Mh=3,Sh=4,y0=5,ss=100,x0=101,b0=102,M0=103,S0=104,T0=200,E0=201,A0=202,w0=203,Dl=204,Nl=205,R0=206,C0=207,I0=208,P0=209,L0=210,D0=211,N0=212,U0=213,z0=214,Ul=0,zl=1,Ol=2,Hs=3,Fl=4,Bl=5,kl=6,Hl=7,Xf=0,O0=1,F0=2,Ui=0,B0=1,k0=2,H0=3,V0=4,G0=5,W0=6,X0=7,Th="attached",q0="detached",qf=300,Vs=301,Gs=302,Vl=303,Gl=304,wo=306,ls=1e3,li=1001,Ur=1002,Kt=1003,jc=1004;var Us=1005;var ln=1006,Pr=1007;var qn=1008;var hi=1009,jf=1010,Yf=1011,zr=1012,Yc=1013,cs=1014,Fn=1015,Zr=1016,$c=1017,Zc=1018,Ws=1020,$f=35902,Zf=1021,Kf=1022,wn=1023,Jf=1024,Qf=1025,Fs=1026,Xs=1027,Kc=1028,Jc=1029,ed=1030,Qc=1031;var eu=1033,Ya=33776,$a=33777,Za=33778,Ka=33779,Wl=35840,Xl=35841,ql=35842,jl=35843,Yl=36196,$l=37492,Zl=37496,Kl=37808,Jl=37809,Ql=37810,ec=37811,tc=37812,nc=37813,ic=37814,sc=37815,rc=37816,ac=37817,oc=37818,lc=37819,cc=37820,uc=37821,Ja=36492,hc=36494,fc=36495,td=36283,dc=36284,pc=36285,mc=36286;var qs=2300,js=2301,tl=2302,Eh=2400,Ah=2401,wh=2402,j0=2500;var nd=0,Ro=1,Kr=2,Y0=3200,$0=3201;var id=0,Z0=1,Li="",It="srgb",Qt="srgb-linear",Co="linear",vt="srgb";var xs=7680;var Rh=519,K0=512,J0=513,Q0=514,sd=515,ep=516,tp=517,np=518,ip=519,gc=35044,tu=35048;var Ch="300 es",ci=2e3,Qa=2001,zi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ih=1234567,Lr=Math.PI/180,Ys=180/Math.PI;function Bn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]).toLowerCase()}function Zt(i,e,t){return Math.max(e,Math.min(t,i))}function nu(i,e){return(i%e+e)%e}function sp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function rp(i,e,t){return i!==e?(t-i)/(e-i):0}function Dr(i,e,t){return(1-t)*i+t*e}function ap(i,e,t,n){return Dr(i,e,1-Math.exp(-t*n))}function op(i,e=1){return e-Math.abs(nu(i,e*2)-e)}function lp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function cp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function up(i,e){return i+Math.floor(Math.random()*(e-i+1))}function hp(i,e){return i+Math.random()*(e-i)}function fp(i){return i*(.5-Math.random())}function dp(i){i!==void 0&&(Ih=i);let e=Ih+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pp(i){return i*Lr}function mp(i){return i*Ys}function gp(i){return(i&i-1)===0&&i!==0}function vp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function _p(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function yp(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*h,l*f,o*c);break;case"YZY":i.set(l*f,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*f,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function On(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var rd={DEG2RAD:Lr,RAD2DEG:Ys,generateUUID:Bn,clamp:Zt,euclideanModulo:nu,mapLinear:sp,inverseLerp:rp,lerp:Dr,damp:ap,pingpong:op,smoothstep:lp,smootherstep:cp,randInt:up,randFloat:hp,randFloatSpread:fp,seededRandom:dp,degToRad:pp,radToDeg:mp,isPowerOfTwo:gp,ceilPowerOfTwo:vp,floorPowerOfTwo:_p,setQuaternionFromProperEuler:yp,normalize:mt,denormalize:On},Be=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},We=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],v=s[0],m=s[3],d=s[6],y=s[1],x=s[4],_=s[7],R=s[2],E=s[5],A=s[8];return r[0]=a*v+o*y+l*R,r[3]=a*m+o*x+l*E,r[6]=a*d+o*_+l*A,r[1]=c*v+u*y+h*R,r[4]=c*m+u*x+h*E,r[7]=c*d+u*_+h*A,r[2]=f*v+p*y+g*R,r[5]=f*m+p*x+g*E,r[8]=f*d+p*_+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*r,p=c*r-a*l,g=t*h+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=h*v,e[1]=(s*c-u*n)*v,e[2]=(o*n-s*a)*v,e[3]=f*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(nl.makeScale(e,t)),this}rotate(e){return this.premultiply(nl.makeRotation(-e)),this}translate(e,t){return this.premultiply(nl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},nl=new We;function ad(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xp(){let i=Or("canvas");return i.style.display="block",i}var Ph={};function Cr(i){i in Ph||(Ph[i]=!0,console.warn(i))}function bp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Mp(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Sp(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Je={enabled:!0,workingColorSpace:Qt,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===vt&&(i.r=ui(i.r),i.g=ui(i.g),i.b=ui(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===vt&&(i.r=Bs(i.r),i.g=Bs(i.g),i.b=Bs(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Li?Co:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Lh=[.64,.33,.3,.6,.15,.06],Dh=[.2126,.7152,.0722],Nh=[.3127,.329],Uh=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zh=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Je.define({[Qt]:{primaries:Lh,whitePoint:Nh,transfer:Co,toXYZ:Uh,fromXYZ:zh,luminanceCoefficients:Dh,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:Lh,whitePoint:Nh,transfer:vt,toXYZ:Uh,fromXYZ:zh,luminanceCoefficients:Dh,outputColorSpaceConfig:{drawingBufferColorSpace:It}}});var bs,vc=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bs===void 0&&(bs=Or("canvas")),bs.width=e.width,bs.height=e.height;let n=bs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=bs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Or("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ui(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ui(t[n]/255)*255):t[n]=ui(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Tp=0,eo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Bn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(il(s[a].image)):r.push(il(s[a]))}else r=il(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function il(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ep=0,Wt=class i extends zi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=li,s=li,r=ln,a=qn,o=wn,l=hi,c=i.DEFAULT_ANISOTROPY,u=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=Bn(),this.name="",this.source=new eo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ls:e.x=e.x-Math.floor(e.x);break;case li:e.x=e.x<0?0:1;break;case Ur:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ls:e.y=e.y-Math.floor(e.y);break;case li:e.y=e.y<0?0:1;break;case Ur:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=qf;Wt.DEFAULT_ANISOTROPY=1;var lt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,_=(p+1)/2,R=(d+1)/2,E=(u+f)/4,A=(h+v)/4,C=(g+m)/4;return x>_&&x>R?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=E/n,r=A/n):_>R?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=C/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=A/r,s=C/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-v)/y,this.z=(f-u)/y,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_c=class extends zi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Wt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new eo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},fi=class extends _c{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},to=class extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var yc=class extends Wt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],f=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==f||c!==p||u!==g){let m=1-o,d=l*f+c*p+u*g+h*v,y=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){let R=Math.sqrt(x),E=Math.atan2(R,d*y);m=Math.sin(m*E)/R,o=Math.sin(o*E)/R}let _=o*y;if(l=l*m+f*_,c=c*m+p*_,u=u*m+g*_,h=h*m+v*_,m===1-o){let R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-o*p,e[t+2]=c*g+u*p+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>h){let p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){let p=2*Math.sqrt(1+o-n-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Oh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Oh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sl.copy(this).projectOnVector(e),this.sub(sl)}reflect(e){return this.sub(sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},sl=new P,Oh=new gn,Rn=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Nn):Nn.fromBufferAttribute(r,a),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ba.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ba.copy(n.boundingBox)),ba.applyMatrix4(e.matrixWorld),this.union(ba)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(br),Ma.subVectors(this.max,br),Ms.subVectors(e.a,br),Ss.subVectors(e.b,br),Ts.subVectors(e.c,br),Ai.subVectors(Ss,Ms),wi.subVectors(Ts,Ss),Ki.subVectors(Ms,Ts);let t=[0,-Ai.z,Ai.y,0,-wi.z,wi.y,0,-Ki.z,Ki.y,Ai.z,0,-Ai.x,wi.z,0,-wi.x,Ki.z,0,-Ki.x,-Ai.y,Ai.x,0,-wi.y,wi.x,0,-Ki.y,Ki.x,0];return!rl(t,Ms,Ss,Ts,Ma)||(t=[1,0,0,0,1,0,0,0,1],!rl(t,Ms,Ss,Ts,Ma))?!1:(Sa.crossVectors(Ai,wi),t=[Sa.x,Sa.y,Sa.z],rl(t,Ms,Ss,Ts,Ma))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ei=[new P,new P,new P,new P,new P,new P,new P,new P],Nn=new P,ba=new Rn,Ms=new P,Ss=new P,Ts=new P,Ai=new P,wi=new P,Ki=new P,br=new P,Ma=new P,Sa=new P,Ji=new P;function rl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ji.fromArray(i,r);let o=s.x*Math.abs(Ji.x)+s.y*Math.abs(Ji.y)+s.z*Math.abs(Ji.z),l=e.dot(Ji),c=t.dot(Ji),u=n.dot(Ji);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Ap=new Rn,Mr=new P,al=new P,vn=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ap.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mr.subVectors(e,this.center);let t=Mr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Mr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(al.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mr.copy(e.center).add(al)),this.expandByPoint(Mr.copy(e.center).sub(al))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ti=new P,ol=new P,Ta=new P,Ri=new P,ll=new P,Ea=new P,cl=new P,us=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,t),ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ol.copy(e).add(t).multiplyScalar(.5),Ta.copy(t).sub(e).normalize(),Ri.copy(this.origin).sub(ol);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ta),o=Ri.dot(this.direction),l=-Ri.dot(Ta),c=Ri.lengthSq(),u=Math.abs(1-a*a),h,f,p,g;if(u>0)if(h=a*l-o,f=a*o-l,g=r*u,h>=0)if(f>=-g)if(f<=g){let v=1/u;h*=v,f*=v,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ol).addScaledVector(Ta,f),p}intersectSphere(e,t){ti.subVectors(e.center,this.origin);let n=ti.dot(this.direction),s=ti.dot(ti)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,n,s,r){ll.subVectors(t,e),Ea.subVectors(n,e),cl.crossVectors(ll,Ea);let a=this.direction.dot(cl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ri.subVectors(this.origin,e);let l=o*this.direction.dot(Ea.crossVectors(Ri,Ea));if(l<0)return null;let c=o*this.direction.dot(ll.cross(Ri));if(c<0||l+c>a)return null;let u=-o*Ri.dot(cl);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ie=class i{constructor(e,t,n,s,r,a,o,l,c,u,h,f,p,g,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,h,f,p,g,v,m)}set(e,t,n,s,r,a,o,l,c,u,h,f,p,g,v,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Es.setFromMatrixColumn(e,0).length(),r=1/Es.setFromMatrixColumn(e,1).length(),a=1/Es.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=a*u,p=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*u,p=l*h,g=c*u,v=c*h;t[0]=f+v*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*u,p=l*h,g=c*u,v=c*h;t[0]=f-v*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*u,p=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+v,t[1]=l*h,t[5]=v*c+f,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-f*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-v*h}else if(e.order==="XZY"){let f=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+v,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wp,e,Rp)}lookAt(e,t,n){let s=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),Ci.crossVectors(n,pn),Ci.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),Ci.crossVectors(n,pn)),Ci.normalize(),Aa.crossVectors(pn,Ci),s[0]=Ci.x,s[4]=Aa.x,s[8]=pn.x,s[1]=Ci.y,s[5]=Aa.y,s[9]=pn.y,s[2]=Ci.z,s[6]=Aa.z,s[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],v=n[6],m=n[10],d=n[14],y=n[3],x=n[7],_=n[11],R=n[15],E=s[0],A=s[4],C=s[8],S=s[12],b=s[1],I=s[5],B=s[9],O=s[13],G=s[2],$=s[6],W=s[10],J=s[14],F=s[3],ie=s[7],oe=s[11],me=s[15];return r[0]=a*E+o*b+l*G+c*F,r[4]=a*A+o*I+l*$+c*ie,r[8]=a*C+o*B+l*W+c*oe,r[12]=a*S+o*O+l*J+c*me,r[1]=u*E+h*b+f*G+p*F,r[5]=u*A+h*I+f*$+p*ie,r[9]=u*C+h*B+f*W+p*oe,r[13]=u*S+h*O+f*J+p*me,r[2]=g*E+v*b+m*G+d*F,r[6]=g*A+v*I+m*$+d*ie,r[10]=g*C+v*B+m*W+d*oe,r[14]=g*S+v*O+m*J+d*me,r[3]=y*E+x*b+_*G+R*F,r[7]=y*A+x*I+_*$+R*ie,r[11]=y*C+x*B+_*W+R*oe,r[15]=y*S+x*O+_*J+R*me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],v=e[7],m=e[11],d=e[15];return g*(+r*l*h-s*c*h-r*o*f+n*c*f+s*o*p-n*l*p)+v*(+t*l*p-t*c*f+r*a*f-s*a*p+s*c*u-r*l*u)+m*(+t*c*h-t*o*p-r*a*h+n*a*p+r*o*u-n*c*u)+d*(-s*o*u-t*l*h+t*o*f+s*a*h-n*a*f+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],v=e[13],m=e[14],d=e[15],y=h*m*c-v*f*c+v*l*p-o*m*p-h*l*d+o*f*d,x=g*f*c-u*m*c-g*l*p+a*m*p+u*l*d-a*f*d,_=u*v*c-g*h*c+g*o*p-a*v*p-u*o*d+a*h*d,R=g*h*l-u*v*l-g*o*f+a*v*f+u*o*m-a*h*m,E=t*y+n*x+s*_+r*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/E;return e[0]=y*A,e[1]=(v*f*r-h*m*r-v*s*p+n*m*p+h*s*d-n*f*d)*A,e[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*d+n*l*d)*A,e[3]=(h*l*r-o*f*r-h*s*c+n*f*c+o*s*p-n*l*p)*A,e[4]=x*A,e[5]=(u*m*r-g*f*r+g*s*p-t*m*p-u*s*d+t*f*d)*A,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*d-t*l*d)*A,e[7]=(a*f*r-u*l*r+u*s*c-t*f*c-a*s*p+t*l*p)*A,e[8]=_*A,e[9]=(g*h*r-u*v*r-g*n*p+t*v*p+u*n*d-t*h*d)*A,e[10]=(a*v*r-g*o*r+g*n*c-t*v*c-a*n*d+t*o*d)*A,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*p-t*o*p)*A,e[12]=R*A,e[13]=(u*v*s-g*h*s+g*n*f-t*v*f-u*n*m+t*h*m)*A,e[14]=(g*o*s-a*v*s-g*n*l+t*v*l+a*n*m-t*o*m)*A,e[15]=(a*h*s-u*o*s+u*n*l-t*h*l-a*n*f+t*o*f)*A,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,f=r*c,p=r*u,g=r*h,v=a*u,m=a*h,d=o*h,y=l*c,x=l*u,_=l*h,R=n.x,E=n.y,A=n.z;return s[0]=(1-(v+d))*R,s[1]=(p+_)*R,s[2]=(g-x)*R,s[3]=0,s[4]=(p-_)*E,s[5]=(1-(f+d))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(g+x)*A,s[9]=(m-y)*A,s[10]=(1-(f+v))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Es.set(s[0],s[1],s[2]).length(),a=Es.set(s[4],s[5],s[6]).length(),o=Es.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Un.copy(this);let c=1/r,u=1/a,h=1/o;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=h,Un.elements[9]*=h,Un.elements[10]*=h,t.setFromRotationMatrix(Un),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=ci){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s),p,g;if(o===ci)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Qa)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=ci){let l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(a-r),f=(t+e)*c,p=(n+s)*u,g,v;if(o===ci)g=(a+r)*h,v=-2*h;else if(o===Qa)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Es=new P,Un=new Ie,wp=new P(0,0,0),Rp=new P(1,1,1),Ci=new P,Aa=new P,pn=new P,Fh=new Ie,Bh=new gn,Yn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bh.setFromEuler(this),this.setFromQuaternion(Bh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yn.DEFAULT_ORDER="XYZ";var Fr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Cp=0,kh=new P,As=new gn,ni=new Ie,wa=new P,Sr=new P,Ip=new P,Pp=new gn,Hh=new P(1,0,0),Vh=new P(0,1,0),Gh=new P(0,0,1),Wh={type:"added"},Lp={type:"removed"},ws={type:"childadded",child:null},ul={type:"childremoved",child:null},Et=class i extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new Yn,n=new gn,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ie},normalMatrix:{value:new We}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(Hh,e)}rotateY(e){return this.rotateOnAxis(Vh,e)}rotateZ(e){return this.rotateOnAxis(Gh,e)}translateOnAxis(e,t){return kh.copy(e).applyQuaternion(this.quaternion),this.position.add(kh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hh,e)}translateY(e){return this.translateOnAxis(Vh,e)}translateZ(e){return this.translateOnAxis(Gh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wa.copy(e):wa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(Sr,wa,this.up):ni.lookAt(wa,Sr,this.up),this.quaternion.setFromRotationMatrix(ni),s&&(ni.extractRotation(s.matrixWorld),As.setFromRotationMatrix(ni),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wh),ws.child=e,this.dispatchEvent(ws),ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lp),ul.child=e,this.dispatchEvent(ul),ul.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wh),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,e,Ip),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,Pp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Et.DEFAULT_UP=new P(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zn=new P,ii=new P,hl=new P,si=new P,Rs=new P,Cs=new P,Xh=new P,fl=new P,dl=new P,pl=new P,ml=new lt,gl=new lt,vl=new lt,rs=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),zn.subVectors(e,t),s.cross(zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){zn.subVectors(s,t),ii.subVectors(n,t),hl.subVectors(e,t);let a=zn.dot(zn),o=zn.dot(ii),l=zn.dot(hl),c=ii.dot(ii),u=ii.dot(hl),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let f=1/h,p=(c*l-o*u)*f,g=(a*u-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,si.x),l.addScaledVector(a,si.y),l.addScaledVector(o,si.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return ml.setScalar(0),gl.setScalar(0),vl.setScalar(0),ml.fromBufferAttribute(e,t),gl.fromBufferAttribute(e,n),vl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ml,r.x),a.addScaledVector(gl,r.y),a.addScaledVector(vl,r.z),a}static isFrontFacing(e,t,n,s){return zn.subVectors(n,t),ii.subVectors(e,t),zn.cross(ii).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),zn.cross(ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Rs.subVectors(s,n),Cs.subVectors(r,n),fl.subVectors(e,n);let l=Rs.dot(fl),c=Cs.dot(fl);if(l<=0&&c<=0)return t.copy(n);dl.subVectors(e,s);let u=Rs.dot(dl),h=Cs.dot(dl);if(u>=0&&h<=u)return t.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Rs,a);pl.subVectors(e,r);let p=Rs.dot(pl),g=Cs.dot(pl);if(g>=0&&p<=g)return t.copy(r);let v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Cs,o);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Xh.subVectors(r,s),o=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(Xh,o);let d=1/(m+v+f);return a=v*d,o=f*d,t.copy(n).addScaledVector(Rs,a).addScaledVector(Cs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},od={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},Ra={h:0,s:0,l:0};function _l(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Me=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Je.workingColorSpace){if(e=nu(e,1),t=Zt(t,0,1),n=Zt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=_l(a,r,e+1/3),this.g=_l(a,r,e),this.b=_l(a,r,e-1/3)}return Je.toWorkingColorSpace(this,s),this}setStyle(e,t=It){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){let n=od[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ui(e.r),this.g=ui(e.g),this.b=ui(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return Je.fromWorkingColorSpace($t.copy(this),e),Math.round(Zt($t.r*255,0,255))*65536+Math.round(Zt($t.g*255,0,255))*256+Math.round(Zt($t.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace($t.copy(this),t);let n=$t.r,s=$t.g,r=$t.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=It){Je.fromWorkingColorSpace($t.copy(this),e);let t=$t.r,n=$t.g,s=$t.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+t,Ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ii),e.getHSL(Ra);let n=Dr(Ii.h,Ra.h,t),s=Dr(Ii.s,Ra.s,t),r=Dr(Ii.l,Ra.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$t=new Me;Me.NAMES=od;var Dp=0,_n=class extends zi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=Bn(),this.name="",this.blending=Os,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dl,this.blendDst=Nl,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Dl&&(n.blendSrc=this.blendSrc),this.blendDst!==Nl&&(n.blendDst=this.blendDst),this.blendEquation!==ss&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Lt=class extends _n{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.combine=Xf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ft=new P,Ca=new Be,Rt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=gc,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ca.fromBufferAttribute(this,t),Ca.applyMatrix3(e),this.setXY(t,Ca.x,Ca.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=On(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=On(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=On(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=On(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=On(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gc&&(e.usage=this.usage),e}};var no=class extends Rt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var io=class extends Rt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var st=class extends Rt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Np=0,An=new Ie,yl=new Et,Is=new P,mn=new Rn,Tr=new Rn,Gt=new P,ct=class i extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ad(e)?io:no)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,n){return An.makeTranslation(e,t,n),this.applyMatrix4(An),this}scale(e,t,n){return An.makeScale(e,t,n),this.applyMatrix4(An),this}lookAt(e){return yl.lookAt(e),yl.updateMatrix(),this.applyMatrix4(yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new st(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Tr.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(mn.min,Tr.min),mn.expandByPoint(Gt),Gt.addVectors(mn.max,Tr.max),mn.expandByPoint(Gt)):(mn.expandByPoint(Tr.min),mn.expandByPoint(Tr.max))}mn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Gt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Gt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Gt.fromBufferAttribute(o,c),l&&(Is.fromBufferAttribute(e,c),Gt.add(Is)),s=Math.max(s,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new P,l[C]=new P;let c=new P,u=new P,h=new P,f=new Be,p=new Be,g=new Be,v=new P,m=new P;function d(C,S,b){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,b),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,b),u.sub(c),h.sub(c),p.sub(f),g.sub(f);let I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(I),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(I),o[C].add(v),o[S].add(v),o[b].add(v),l[C].add(m),l[S].add(m),l[b].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let C=0,S=y.length;C<S;++C){let b=y[C],I=b.start,B=b.count;for(let O=I,G=I+B;O<G;O+=3)d(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let x=new P,_=new P,R=new P,E=new P;function A(C){R.fromBufferAttribute(s,C),E.copy(R);let S=o[C];x.copy(S),x.sub(R.multiplyScalar(R.dot(S))).normalize(),_.crossVectors(E,S);let I=_.dot(l[C])<0?-1:1;a.setXYZW(C,x.x,x.y,x.z,I)}for(let C=0,S=y.length;C<S;++C){let b=y[C],I=b.start,B=b.count;for(let O=I,G=I+B;O<G;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Rt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u),p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new Rt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},qh=new Ie,Qi=new us,Ia=new vn,jh=new P,Pa=new P,La=new P,Da=new P,xl=new P,Na=new P,Yh=new P,Ua=new P,He=class extends Et{constructor(e=new ct,t=new Lt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Na.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],h=r[l];u!==0&&(xl.fromBufferAttribute(h,e),a?Na.addScaledVector(xl,u):Na.addScaledVector(xl.sub(t),u))}t.add(Na)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(r),Qi.copy(e.ray).recast(e.near),!(Ia.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(Ia,jh)===null||Qi.origin.distanceToSquared(jh)>(e.far-e.near)**2))&&(qh.copy(r).invert(),Qi.copy(e.ray).applyMatrix4(qh),!(n.boundingBox!==null&&Qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Qi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){let m=f[g],d=a[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,R=x;_<R;_+=3){let E=o.getX(_),A=o.getX(_+1),C=o.getX(_+2);s=za(this,d,e,n,c,u,h,E,A,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){let y=o.getX(m),x=o.getX(m+1),_=o.getX(m+2);s=za(this,a,e,n,c,u,h,y,x,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){let m=f[g],d=a[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,R=x;_<R;_+=3){let E=_,A=_+1,C=_+2;s=za(this,d,e,n,c,u,h,E,A,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){let y=m,x=m+1,_=m+2;s=za(this,a,e,n,c,u,h,y,x,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Up(i,e,t,n,s,r,a,o){let l;if(e.side===cn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===jn,o),l===null)return null;Ua.copy(o),Ua.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ua);return c<t.near||c>t.far?null:{distance:c,point:Ua.clone(),object:i}}function za(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Pa),i.getVertexPosition(l,La),i.getVertexPosition(c,Da);let u=Up(i,e,t,n,Pa,La,Da,Yh);if(u){let h=new P;rs.getBarycoord(Yh,Pa,La,Da,h),s&&(u.uv=rs.getInterpolatedAttribute(s,o,l,c,h,new Be)),r&&(u.uv1=rs.getInterpolatedAttribute(r,o,l,c,h,new Be)),a&&(u.normal=rs.getInterpolatedAttribute(a,o,l,c,h,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new P,materialIndex:0};rs.getNormal(Pa,La,Da,f.normal),u.face=f,u.barycoord=h}return u}var Br=class i extends ct{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(u,3)),this.setAttribute("uv",new st(h,2));function g(v,m,d,y,x,_,R,E,A,C,S){let b=_/A,I=R/C,B=_/2,O=R/2,G=E/2,$=A+1,W=C+1,J=0,F=0,ie=new P;for(let oe=0;oe<W;oe++){let me=oe*I-O;for(let Ne=0;Ne<$;Ne++){let et=Ne*b-B;ie[v]=et*y,ie[m]=me*x,ie[d]=G,c.push(ie.x,ie.y,ie.z),ie[v]=0,ie[m]=0,ie[d]=E>0?1:-1,u.push(ie.x,ie.y,ie.z),h.push(Ne/A),h.push(1-oe/C),J+=1}}for(let oe=0;oe<C;oe++)for(let me=0;me<A;me++){let Ne=f+me+$*oe,et=f+me+$*(oe+1),q=f+(me+1)+$*(oe+1),ee=f+(me+1)+$*oe;l.push(Ne,et,ee),l.push(et,q,ee),F+=6}o.addGroup(p,F,S),p+=F,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function $s(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function tn(i){let e={};for(let t=0;t<i.length;t++){let n=$s(i[t]);for(let s in n)e[s]=n[s]}return e}function zp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ld(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var Op={clone:$s,merge:tn},Fp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$n=class extends _n{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fp,this.fragmentShader=Bp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=zp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},so=class extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Pi=new P,$h=new Be,Zh=new Be,Bt=class extends so{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ys*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Lr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ys*2*Math.atan(Math.tan(Lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z)}getViewSize(e,t){return this.getViewBounds(e,$h,Zh),t.subVectors(Zh,$h)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Lr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ps=-90,Ls=1,xc=class extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Bt(Ps,Ls,e,t);s.layers=this.layers,this.add(s);let r=new Bt(Ps,Ls,e,t);r.layers=this.layers,this.add(r);let a=new Bt(Ps,Ls,e,t);a.layers=this.layers,this.add(a);let o=new Bt(Ps,Ls,e,t);o.layers=this.layers,this.add(o);let l=new Bt(Ps,Ls,e,t);l.layers=this.layers,this.add(l);let c=new Bt(Ps,Ls,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===ci)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qa)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ro=class extends Wt{constructor(e,t,n,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Vs,super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},bc=class extends fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ro(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ln}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Br(5,5,5),r=new $n({name:"CubemapFromEquirect",uniforms:$s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:Ni});r.uniforms.tEquirect.value=t;let a=new He(s,r),o=t.minFilter;return t.minFilter===qn&&(t.minFilter=ln),new xc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},bl=new P,kp=new P,Hp=new We,oi=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=bl.subVectors(n,t).cross(kp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(bl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Hp.getNormalMatrix(e),s=this.coplanarPoint(bl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},es=new vn,Oa=new P,kr=class{constructor(e=new oi,t=new oi,n=new oi,s=new oi,r=new oi,a=new oi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ci){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],p=s[8],g=s[9],v=s[10],m=s[11],d=s[12],y=s[13],x=s[14],_=s[15];if(n[0].setComponents(l-r,f-c,m-p,_-d).normalize(),n[1].setComponents(l+r,f+c,m+p,_+d).normalize(),n[2].setComponents(l+a,f+u,m+g,_+y).normalize(),n[3].setComponents(l-a,f-u,m-g,_-y).normalize(),n[4].setComponents(l-o,f-h,m-v,_-x).normalize(),t===ci)n[5].setComponents(l+o,f+h,m+v,_+x).normalize();else if(t===Qa)n[5].setComponents(o,h,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Oa.x=s.normal.x>0?e.max.x:e.min.x,Oa.y=s.normal.y>0?e.max.y:e.min.y,Oa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Oa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function cd(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Vp(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){let g=h[f],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){let v=h[p];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Oi=class i extends ct{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,f=t/l,p=[],g=[],v=[],m=[];for(let d=0;d<u;d++){let y=d*f-a;for(let x=0;x<c;x++){let _=x*h-r;g.push(_,-y,0),v.push(0,0,1),m.push(x/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<o;y++){let x=y+c*d,_=y+c*(d+1),R=y+1+c*(d+1),E=y+1+c*d;p.push(x,_,E),p.push(_,R,E)}this.setIndex(p),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(v,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Gp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wp=`#ifdef USE_ALPHAHASH
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
#endif`,Xp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$p=`#ifdef USE_AOMAP
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
#endif`,Zp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kp=`#ifdef USE_BATCHING
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
#endif`,Jp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,em=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nm=`#ifdef USE_IRIDESCENCE
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
#endif`,im=`#ifdef USE_BUMPMAP
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
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,um=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,fm=`#define PI 3.141592653589793
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
} // validated`,dm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pm=`vec3 transformedNormal = objectNormal;
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
#endif`,mm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_m=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ym="gl_FragColor = linearToOutputTexel( gl_FragColor );",xm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bm=`#ifdef USE_ENVMAP
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
#endif`,Mm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sm=`#ifdef USE_ENVMAP
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
#endif`,Tm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Em=`#ifdef USE_ENVMAP
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
#endif`,Am=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Im=`#ifdef USE_GRADIENTMAP
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
}`,Pm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nm=`uniform bool receiveShadow;
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
#endif`,Um=`#ifdef USE_ENVMAP
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
#endif`,zm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,km=`PhysicalMaterial material;
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
#endif`,Hm=`struct PhysicalMaterial {
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
}`,Vm=`
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
#endif`,Gm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Wm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ym=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$m=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Km=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jm=`#if defined( USE_POINTS_UV )
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
#endif`,Qm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,e1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,t1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,n1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,i1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s1=`#ifdef USE_MORPHTARGETS
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
#endif`,r1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,o1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,l1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,h1=`#ifdef USE_NORMALMAP
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
#endif`,f1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,d1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,p1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,m1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,M1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,T1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,A1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,w1=`float getShadowMask() {
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
}`,R1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,C1=`#ifdef USE_SKINNING
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
#endif`,I1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,P1=`#ifdef USE_SKINNING
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
#endif`,L1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,D1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,N1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,U1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,z1=`#ifdef USE_TRANSMISSION
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
#endif`,O1=`#ifdef USE_TRANSMISSION
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
#endif`,F1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,k1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,V1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,G1=`uniform sampler2D t2D;
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
}`,W1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y1=`#include <common>
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
}`,$1=`#if DEPTH_PACKING == 3200
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
}`,Z1=`#define DISTANCE
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
}`,K1=`#define DISTANCE
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
}`,J1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Q1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e2=`uniform float scale;
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
}`,t2=`uniform vec3 diffuse;
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
}`,n2=`#include <common>
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
}`,i2=`uniform vec3 diffuse;
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
}`,s2=`#define LAMBERT
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
}`,r2=`#define LAMBERT
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
}`,a2=`#define MATCAP
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
}`,o2=`#define MATCAP
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
}`,l2=`#define NORMAL
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
}`,c2=`#define NORMAL
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
}`,u2=`#define PHONG
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
}`,h2=`#define PHONG
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
}`,f2=`#define STANDARD
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
}`,d2=`#define STANDARD
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
}`,p2=`#define TOON
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
}`,m2=`#define TOON
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
}`,g2=`uniform float size;
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
}`,v2=`uniform vec3 diffuse;
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
}`,_2=`#include <common>
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
}`,y2=`uniform vec3 color;
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
}`,x2=`uniform float rotation;
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
}`,b2=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:Gp,alphahash_pars_fragment:Wp,alphamap_fragment:Xp,alphamap_pars_fragment:qp,alphatest_fragment:jp,alphatest_pars_fragment:Yp,aomap_fragment:$p,aomap_pars_fragment:Zp,batching_pars_vertex:Kp,batching_vertex:Jp,begin_vertex:Qp,beginnormal_vertex:em,bsdfs:tm,iridescence_fragment:nm,bumpmap_pars_fragment:im,clipping_planes_fragment:sm,clipping_planes_pars_fragment:rm,clipping_planes_pars_vertex:am,clipping_planes_vertex:om,color_fragment:lm,color_pars_fragment:cm,color_pars_vertex:um,color_vertex:hm,common:fm,cube_uv_reflection_fragment:dm,defaultnormal_vertex:pm,displacementmap_pars_vertex:mm,displacementmap_vertex:gm,emissivemap_fragment:vm,emissivemap_pars_fragment:_m,colorspace_fragment:ym,colorspace_pars_fragment:xm,envmap_fragment:bm,envmap_common_pars_fragment:Mm,envmap_pars_fragment:Sm,envmap_pars_vertex:Tm,envmap_physical_pars_fragment:Um,envmap_vertex:Em,fog_vertex:Am,fog_pars_vertex:wm,fog_fragment:Rm,fog_pars_fragment:Cm,gradientmap_pars_fragment:Im,lightmap_pars_fragment:Pm,lights_lambert_fragment:Lm,lights_lambert_pars_fragment:Dm,lights_pars_begin:Nm,lights_toon_fragment:zm,lights_toon_pars_fragment:Om,lights_phong_fragment:Fm,lights_phong_pars_fragment:Bm,lights_physical_fragment:km,lights_physical_pars_fragment:Hm,lights_fragment_begin:Vm,lights_fragment_maps:Gm,lights_fragment_end:Wm,logdepthbuf_fragment:Xm,logdepthbuf_pars_fragment:qm,logdepthbuf_pars_vertex:jm,logdepthbuf_vertex:Ym,map_fragment:$m,map_pars_fragment:Zm,map_particle_fragment:Km,map_particle_pars_fragment:Jm,metalnessmap_fragment:Qm,metalnessmap_pars_fragment:e1,morphinstance_vertex:t1,morphcolor_vertex:n1,morphnormal_vertex:i1,morphtarget_pars_vertex:s1,morphtarget_vertex:r1,normal_fragment_begin:a1,normal_fragment_maps:o1,normal_pars_fragment:l1,normal_pars_vertex:c1,normal_vertex:u1,normalmap_pars_fragment:h1,clearcoat_normal_fragment_begin:f1,clearcoat_normal_fragment_maps:d1,clearcoat_pars_fragment:p1,iridescence_pars_fragment:m1,opaque_fragment:g1,packing:v1,premultiplied_alpha_fragment:_1,project_vertex:y1,dithering_fragment:x1,dithering_pars_fragment:b1,roughnessmap_fragment:M1,roughnessmap_pars_fragment:S1,shadowmap_pars_fragment:T1,shadowmap_pars_vertex:E1,shadowmap_vertex:A1,shadowmask_pars_fragment:w1,skinbase_vertex:R1,skinning_pars_vertex:C1,skinning_vertex:I1,skinnormal_vertex:P1,specularmap_fragment:L1,specularmap_pars_fragment:D1,tonemapping_fragment:N1,tonemapping_pars_fragment:U1,transmission_fragment:z1,transmission_pars_fragment:O1,uv_pars_fragment:F1,uv_pars_vertex:B1,uv_vertex:k1,worldpos_vertex:H1,background_vert:V1,background_frag:G1,backgroundCube_vert:W1,backgroundCube_frag:X1,cube_vert:q1,cube_frag:j1,depth_vert:Y1,depth_frag:$1,distanceRGBA_vert:Z1,distanceRGBA_frag:K1,equirect_vert:J1,equirect_frag:Q1,linedashed_vert:e2,linedashed_frag:t2,meshbasic_vert:n2,meshbasic_frag:i2,meshlambert_vert:s2,meshlambert_frag:r2,meshmatcap_vert:a2,meshmatcap_frag:o2,meshnormal_vert:l2,meshnormal_frag:c2,meshphong_vert:u2,meshphong_frag:h2,meshphysical_vert:f2,meshphysical_frag:d2,meshtoon_vert:p2,meshtoon_frag:m2,points_vert:g2,points_frag:v2,shadow_vert:_2,shadow_frag:y2,sprite_vert:x2,sprite_frag:b2},ce={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Xn={basic:{uniforms:tn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:tn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Me(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:tn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:tn([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:tn([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Me(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:tn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:tn([ce.points,ce.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:tn([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:tn([ce.common,ce.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:tn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:tn([ce.sprite,ce.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:tn([ce.common,ce.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:tn([ce.lights,ce.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Xn.physical={uniforms:tn([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var Fa={r:0,b:0,g:0},ts=new Yn,M2=new Ie;function S2(i,e,t,n,s,r,a){let o=new Me(0),l=r===!0?0:1,c,u,h=null,f=0,p=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function v(y){let x=!1,_=g(y);_===null?d(o,l):_&&_.isColor&&(d(_,1),x=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,x){let _=g(x);_&&(_.isCubeTexture||_.mapping===wo)?(u===void 0&&(u=new He(new Br(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:$s(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ts.copy(x.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(M2.makeRotationFromEuler(ts)),u.material.toneMapped=Je.getTransfer(_.colorSpace)!==vt,(h!==_||f!==_.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,p=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new He(new Oi(2,2),new $n({name:"BackgroundMaterial",uniforms:$s(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Je.getTransfer(_.colorSpace)!==vt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,p=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function d(y,x){y.getRGB(Fa,ld(i)),n.buffers.color.setClear(Fa.r,Fa.g,Fa.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),l=x,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(o,l)},render:v,addToRenderList:m}}function T2(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(b,I,B,O,G){let $=!1,W=h(O,B,I);r!==W&&(r=W,c(r.object)),$=p(b,O,B,G),$&&g(b,O,B,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,_(b,I,B,O),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function h(b,I,B){let O=B.wireframe===!0,G=n[b.id];G===void 0&&(G={},n[b.id]=G);let $=G[I.id];$===void 0&&($={},G[I.id]=$);let W=$[O];return W===void 0&&(W=f(l()),$[O]=W),W}function f(b){let I=[],B=[],O=[];for(let G=0;G<t;G++)I[G]=0,B[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:O,object:b,attributes:{},index:null}}function p(b,I,B,O){let G=r.attributes,$=I.attributes,W=0,J=B.getAttributes();for(let F in J)if(J[F].location>=0){let oe=G[F],me=$[F];if(me===void 0&&(F==="instanceMatrix"&&b.instanceMatrix&&(me=b.instanceMatrix),F==="instanceColor"&&b.instanceColor&&(me=b.instanceColor)),oe===void 0||oe.attribute!==me||me&&oe.data!==me.data)return!0;W++}return r.attributesNum!==W||r.index!==O}function g(b,I,B,O){let G={},$=I.attributes,W=0,J=B.getAttributes();for(let F in J)if(J[F].location>=0){let oe=$[F];oe===void 0&&(F==="instanceMatrix"&&b.instanceMatrix&&(oe=b.instanceMatrix),F==="instanceColor"&&b.instanceColor&&(oe=b.instanceColor));let me={};me.attribute=oe,oe&&oe.data&&(me.data=oe.data),G[F]=me,W++}r.attributes=G,r.attributesNum=W,r.index=O}function v(){let b=r.newAttributes;for(let I=0,B=b.length;I<B;I++)b[I]=0}function m(b){d(b,0)}function d(b,I){let B=r.newAttributes,O=r.enabledAttributes,G=r.attributeDivisors;B[b]=1,O[b]===0&&(i.enableVertexAttribArray(b),O[b]=1),G[b]!==I&&(i.vertexAttribDivisor(b,I),G[b]=I)}function y(){let b=r.newAttributes,I=r.enabledAttributes;for(let B=0,O=I.length;B<O;B++)I[B]!==b[B]&&(i.disableVertexAttribArray(B),I[B]=0)}function x(b,I,B,O,G,$,W){W===!0?i.vertexAttribIPointer(b,I,B,G,$):i.vertexAttribPointer(b,I,B,O,G,$)}function _(b,I,B,O){v();let G=O.attributes,$=B.getAttributes(),W=I.defaultAttributeValues;for(let J in $){let F=$[J];if(F.location>=0){let ie=G[J];if(ie===void 0&&(J==="instanceMatrix"&&b.instanceMatrix&&(ie=b.instanceMatrix),J==="instanceColor"&&b.instanceColor&&(ie=b.instanceColor)),ie!==void 0){let oe=ie.normalized,me=ie.itemSize,Ne=e.get(ie);if(Ne===void 0)continue;let et=Ne.buffer,q=Ne.type,ee=Ne.bytesPerElement,pe=q===i.INT||q===i.UNSIGNED_INT||ie.gpuType===Yc;if(ie.isInterleavedBufferAttribute){let ae=ie.data,Se=ae.stride,Ce=ie.offset;if(ae.isInstancedInterleavedBuffer){for(let Oe=0;Oe<F.locationSize;Oe++)d(F.location+Oe,ae.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Oe=0;Oe<F.locationSize;Oe++)m(F.location+Oe);i.bindBuffer(i.ARRAY_BUFFER,et);for(let Oe=0;Oe<F.locationSize;Oe++)x(F.location+Oe,me/F.locationSize,q,oe,Se*ee,(Ce+me/F.locationSize*Oe)*ee,pe)}else{if(ie.isInstancedBufferAttribute){for(let ae=0;ae<F.locationSize;ae++)d(F.location+ae,ie.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ae=0;ae<F.locationSize;ae++)m(F.location+ae);i.bindBuffer(i.ARRAY_BUFFER,et);for(let ae=0;ae<F.locationSize;ae++)x(F.location+ae,me/F.locationSize,q,oe,me*ee,me/F.locationSize*ae*ee,pe)}}else if(W!==void 0){let oe=W[J];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(F.location,oe);break;case 3:i.vertexAttrib3fv(F.location,oe);break;case 4:i.vertexAttrib4fv(F.location,oe);break;default:i.vertexAttrib1fv(F.location,oe)}}}}y()}function R(){C();for(let b in n){let I=n[b];for(let B in I){let O=I[B];for(let G in O)u(O[G].object),delete O[G];delete I[B]}delete n[b]}}function E(b){if(n[b.id]===void 0)return;let I=n[b.id];for(let B in I){let O=I[B];for(let G in O)u(O[G].object),delete O[G];delete I[B]}delete n[b.id]}function A(b){for(let I in n){let B=n[I];if(B[b.id]===void 0)continue;let O=B[b.id];for(let G in O)u(O[G].object),delete O[G];delete B[b.id]}}function C(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function E2(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,n,1)}function l(c,u,h,f){if(h===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*f[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function A2(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==wn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let C=A===Zr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==hi&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Fn&&!C)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:R,maxSamples:E}}function w2(i){let e=this,t=null,n=0,s=!1,r=!1,a=new oi,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){let g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let y=r?0:n,x=y*4,_=d.clippingState||null;l.value=_,_=u(g,f,x,p);for(let R=0;R!==x;++R)_[R]=t[R];d.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){let v=h!==null?h.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let d=p+v*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,_=p;x!==v;++x,_+=4)a.copy(h[x]).applyMatrix4(y,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function R2(i){let e=new WeakMap;function t(a,o){return o===Vl?a.mapping=Vs:o===Gl&&(a.mapping=Gs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Vl||o===Gl)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new bc(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Zs=class extends so{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},zs=4,Kh=[.125,.215,.35,.446,.526,.582],as=20,Ml=new Zs,Jh=new Me,Sl=null,Tl=0,El=0,Al=!1,is=(1+Math.sqrt(5))/2,Ds=1/is,Qh=[new P(-is,Ds,0),new P(is,Ds,0),new P(-Ds,0,is),new P(Ds,0,is),new P(0,is,-Ds),new P(0,is,Ds),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],ao=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Sl=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),Al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sl,Tl,El),this._renderer.xr.enabled=Al,e.scissorTest=!1,Ba(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vs||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sl=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),Al=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Zr,format:wn,colorSpace:Qt,depthBuffer:!1},s=ef(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ef(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=C2(r)),this._blurMaterial=I2(r,e,t)}return s}_compileMaterial(e){let t=new He(this._lodPlanes[0],e);this._renderer.compile(t,Ml)}_sceneToCubeUV(e,t,n,s){let o=new Bt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Jh),u.toneMapping=Ui,u.autoClear=!1;let p=new Lt({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),g=new He(new Br,p),v=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Jh),v=!0);for(let d=0;d<6;d++){let y=d%3;y===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):y===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));let x=this._cubeSize;Ba(s,y*x,d>2?x:0,x,x),u.setRenderTarget(s),v&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Vs||e.mapping===Gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=nf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new He(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Ba(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ml)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Qh[(s-r-1)%Qh.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new He(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*as-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):as;m>as&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${as}`);let d=[],y=0;for(let A=0;A<as;++A){let C=A/v,S=Math.exp(-C*C/2);d.push(S),A===0?y+=S:A<m&&(y+=2*S)}for(let A=0;A<d.length;A++)d[A]=d[A]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;let _=this._sizeLods[s],R=3*_*(s>x-zs?s-x+zs:0),E=4*(this._cubeSize-_);Ba(t,R,E,3*_,2*_),l.setRenderTarget(t),l.render(h,Ml)}};function C2(i){let e=[],t=[],n=[],s=i,r=i-zs+1+Kh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-zs?l=Kh[a-i+zs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,v=3,m=2,d=1,y=new Float32Array(v*g*p),x=new Float32Array(m*g*p),_=new Float32Array(d*g*p);for(let E=0;E<p;E++){let A=E%3*2/3-1,C=E>2?0:-1,S=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];y.set(S,v*g*E),x.set(f,m*g*E);let b=[E,E,E,E,E,E];_.set(b,d*g*E)}let R=new ct;R.setAttribute("position",new Rt(y,v)),R.setAttribute("uv",new Rt(x,m)),R.setAttribute("faceIndex",new Rt(_,d)),e.push(R),s>zs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ef(i,e,t){let n=new fi(i,e,t);return n.texture.mapping=wo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ba(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function I2(i,e,t){let n=new Float32Array(as),s=new P(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:iu(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function tf(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:iu(),fragmentShader:`

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
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function nf(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function iu(){return`

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
	`}function P2(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Vl||l===Gl,u=l===Vs||l===Gs;if(c||u){let h=e.get(o),f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new ao(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{let p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new ao(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function L2(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Cr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function D2(i,e,t,n){let s={},r=new WeakMap;function a(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let v=f.morphAttributes[g];for(let m=0,d=v.length;m<d;m++)e.remove(v[m])}f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let g in f)e.update(f[g],i.ARRAY_BUFFER);let p=h.morphAttributes;for(let g in p){let v=p[g];for(let m=0,d=v.length;m<d;m++)e.update(v[m],i.ARRAY_BUFFER)}}function c(h){let f=[],p=h.index,g=h.attributes.position,v=0;if(p!==null){let y=p.array;v=p.version;for(let x=0,_=y.length;x<_;x+=3){let R=y[x+0],E=y[x+1],A=y[x+2];f.push(R,E,E,A,A,R)}}else if(g!==void 0){let y=g.array;v=g.version;for(let x=0,_=y.length/3-1;x<_;x+=3){let R=x+0,E=x+1,A=x+2;f.push(R,E,E,A,A,R)}}else return;let m=new(ad(f)?io:no)(f,1);m.version=v;let d=r.get(h);d&&e.remove(d),r.set(h,m)}function u(h){let f=r.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function N2(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),t.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*a,g),t.update(p,n,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,n,1)}function h(f,p,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,v,0,g);let d=0;for(let y=0;y<g;y++)d+=p[y]*v[y];t.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function U2(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function z2(i,e,t){let n=new WeakMap,s=new lt;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==h){let S=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],x=0;p===!0&&(x=1),g===!0&&(x=2),v===!0&&(x=3);let _=o.attributes.position.count*x,R=1;_>e.maxTextureSize&&(R=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let E=new Float32Array(_*R*4*h),A=new to(E,_,R,h);A.type=Fn,A.needsUpdate=!0;let C=x*4;for(let b=0;b<h;b++){let I=m[b],B=d[b],O=y[b],G=_*R*4*b;for(let $=0;$<I.count;$++){let W=$*C;p===!0&&(s.fromBufferAttribute(I,$),E[G+W+0]=s.x,E[G+W+1]=s.y,E[G+W+2]=s.z,E[G+W+3]=0),g===!0&&(s.fromBufferAttribute(B,$),E[G+W+4]=s.x,E[G+W+5]=s.y,E[G+W+6]=s.z,E[G+W+7]=0),v===!0&&(s.fromBufferAttribute(O,$),E[G+W+8]=s.x,E[G+W+9]=s.y,E[G+W+10]=s.z,E[G+W+11]=O.itemSize===4?s.w:1)}}f={count:h,texture:A,size:new Be(_,R)},n.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function O2(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var oo=class extends Wt{constructor(e,t,n,s,r,a,o,l,c,u=Fs){if(u!==Fs&&u!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Fs&&(n=cs),n===void 0&&u===Xs&&(n=Ws),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Kt,this.minFilter=l!==void 0?l:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ud=new Wt,sf=new oo(1,1),hd=new to,fd=new yc,dd=new ro,rf=[],af=[],of=new Float32Array(16),lf=new Float32Array(9),cf=new Float32Array(4);function nr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=rf[s];if(r===void 0&&(r=new Float32Array(s),rf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ht(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Io(i,e){let t=af[e];t===void 0&&(t=new Int32Array(e),af[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function F2(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function B2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2fv(this.addr,e),Ht(t,e)}}function k2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;i.uniform3fv(this.addr,e),Ht(t,e)}}function H2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4fv(this.addr,e),Ht(t,e)}}function V2(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(kt(t,n))return;cf.set(n),i.uniformMatrix2fv(this.addr,!1,cf),Ht(t,n)}}function G2(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(kt(t,n))return;lf.set(n),i.uniformMatrix3fv(this.addr,!1,lf),Ht(t,n)}}function W2(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(kt(t,n))return;of.set(n),i.uniformMatrix4fv(this.addr,!1,of),Ht(t,n)}}function X2(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function q2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2iv(this.addr,e),Ht(t,e)}}function j2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3iv(this.addr,e),Ht(t,e)}}function Y2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4iv(this.addr,e),Ht(t,e)}}function $2(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Z2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2uiv(this.addr,e),Ht(t,e)}}function K2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3uiv(this.addr,e),Ht(t,e)}}function J2(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4uiv(this.addr,e),Ht(t,e)}}function Q2(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(sf.compareFunction=sd,r=sf):r=ud,t.setTexture2D(e||r,s)}function eg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||fd,s)}function tg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||dd,s)}function ng(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||hd,s)}function ig(i){switch(i){case 5126:return F2;case 35664:return B2;case 35665:return k2;case 35666:return H2;case 35674:return V2;case 35675:return G2;case 35676:return W2;case 5124:case 35670:return X2;case 35667:case 35671:return q2;case 35668:case 35672:return j2;case 35669:case 35673:return Y2;case 5125:return $2;case 36294:return Z2;case 36295:return K2;case 36296:return J2;case 35678:case 36198:case 36298:case 36306:case 35682:return Q2;case 35679:case 36299:case 36307:return eg;case 35680:case 36300:case 36308:case 36293:return tg;case 36289:case 36303:case 36311:case 36292:return ng}}function sg(i,e){i.uniform1fv(this.addr,e)}function rg(i,e){let t=nr(e,this.size,2);i.uniform2fv(this.addr,t)}function ag(i,e){let t=nr(e,this.size,3);i.uniform3fv(this.addr,t)}function og(i,e){let t=nr(e,this.size,4);i.uniform4fv(this.addr,t)}function lg(i,e){let t=nr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function cg(i,e){let t=nr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ug(i,e){let t=nr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function hg(i,e){i.uniform1iv(this.addr,e)}function fg(i,e){i.uniform2iv(this.addr,e)}function dg(i,e){i.uniform3iv(this.addr,e)}function pg(i,e){i.uniform4iv(this.addr,e)}function mg(i,e){i.uniform1uiv(this.addr,e)}function gg(i,e){i.uniform2uiv(this.addr,e)}function vg(i,e){i.uniform3uiv(this.addr,e)}function _g(i,e){i.uniform4uiv(this.addr,e)}function yg(i,e,t){let n=this.cache,s=e.length,r=Io(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||ud,r[a])}function xg(i,e,t){let n=this.cache,s=e.length,r=Io(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||fd,r[a])}function bg(i,e,t){let n=this.cache,s=e.length,r=Io(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||dd,r[a])}function Mg(i,e,t){let n=this.cache,s=e.length,r=Io(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Ht(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||hd,r[a])}function Sg(i){switch(i){case 5126:return sg;case 35664:return rg;case 35665:return ag;case 35666:return og;case 35674:return lg;case 35675:return cg;case 35676:return ug;case 5124:case 35670:return hg;case 35667:case 35671:return fg;case 35668:case 35672:return dg;case 35669:case 35673:return pg;case 5125:return mg;case 36294:return gg;case 36295:return vg;case 36296:return _g;case 35678:case 36198:case 36298:case 36306:case 35682:return yg;case 35679:case 36299:case 36307:return xg;case 35680:case 36300:case 36308:case 36293:return bg;case 36289:case 36303:case 36311:case 36292:return Mg}}var Mc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ig(t.type)}},Sc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sg(t.type)}},Tc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},wl=/(\w+)(\])?(\[|\.)?/g;function uf(i,e){i.seq.push(e),i.map[e.id]=e}function Tg(i,e,t){let n=i.name,s=n.length;for(wl.lastIndex=0;;){let r=wl.exec(n),a=wl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){uf(t,c===void 0?new Mc(o,i,e):new Sc(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Tc(o),uf(t,h)),t=h}}}var ks=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Tg(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function hf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Eg=37297,Ag=0;function wg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var ff=new We;function Rg(i){Je._getMatrix(ff,Je.workingColorSpace,i);let e=`mat3( ${ff.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case Co:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function df(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+wg(i.getShaderSource(e),a)}else return s}function Cg(i,e){let t=Rg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ig(i,e){let t;switch(e){case B0:t="Linear";break;case k0:t="Reinhard";break;case H0:t="Cineon";break;case V0:t="ACESFilmic";break;case W0:t="AgX";break;case X0:t="Neutral";break;case G0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ka=new P;function Pg(){Je.getLuminanceCoefficients(ka);let i=ka.x.toFixed(4),e=ka.y.toFixed(4),t=ka.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ir).join(`
`)}function Dg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ng(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ir(i){return i!==""}function pf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ug=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ec(i){return i.replace(Ug,Og)}var zg=new Map;function Og(i,e){let t=qe[e];if(t===void 0){let n=zg.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ec(t)}var Fg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gf(i){return i.replace(Fg,Bg)}function Bg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function kg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Wf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===_0?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function Hg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Vs:case Gs:e="ENVMAP_TYPE_CUBE";break;case wo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vg(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Gs&&(e="ENVMAP_MODE_REFRACTION"),e}function Gg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Xf:e="ENVMAP_BLENDING_MULTIPLY";break;case O0:e="ENVMAP_BLENDING_MIX";break;case F0:e="ENVMAP_BLENDING_ADD";break}return e}function Wg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Xg(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=kg(t),c=Hg(t),u=Vg(t),h=Gg(t),f=Wg(t),p=Lg(t),g=Dg(r),v=s.createProgram(),m,d,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ir).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ir).join(`
`),d.length>0&&(d+=`
`)):(m=[vf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ir).join(`
`),d=[vf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ui?"#define TONE_MAPPING":"",t.toneMapping!==Ui?qe.tonemapping_pars_fragment:"",t.toneMapping!==Ui?Ig("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,Cg("linearToOutputTexel",t.outputColorSpace),Pg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ir).join(`
`)),a=Ec(a),a=pf(a,t),a=mf(a,t),o=Ec(o),o=pf(o,t),o=mf(o,t),a=gf(a),o=gf(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Ch?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ch?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let x=y+m+a,_=y+d+o,R=hf(s,s.VERTEX_SHADER,x),E=hf(s,s.FRAGMENT_SHADER,_);s.attachShader(v,R),s.attachShader(v,E),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(I){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(v).trim(),O=s.getShaderInfoLog(R).trim(),G=s.getShaderInfoLog(E).trim(),$=!0,W=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,R,E);else{let J=df(s,R,"vertex"),F=df(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+J+`
`+F)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(O===""||G==="")&&(W=!1);W&&(I.diagnostics={runnable:$,programLog:B,vertexShader:{log:O,prefix:m},fragmentShader:{log:G,prefix:d}})}s.deleteShader(R),s.deleteShader(E),C=new ks(s,v),S=Ng(s,v)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(v,Eg)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ag++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=E,this}var qg=0,Ac=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new wc(e),t.set(e,n)),n}},wc=class{constructor(e){this.id=qg++,this.code=e,this.usedTimes=0}};function jg(i,e,t,n,s,r,a){let o=new Fr,l=new Ac,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,b,I,B,O){let G=B.fog,$=O.geometry,W=S.isMeshStandardMaterial?B.environment:null,J=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),F=J&&J.mapping===wo?J.image.height:null,ie=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let oe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,me=oe!==void 0?oe.length:0,Ne=0;$.morphAttributes.position!==void 0&&(Ne=1),$.morphAttributes.normal!==void 0&&(Ne=2),$.morphAttributes.color!==void 0&&(Ne=3);let et,q,ee,pe;if(ie){let pt=Xn[ie];et=pt.vertexShader,q=pt.fragmentShader}else et=S.vertexShader,q=S.fragmentShader,l.update(S),ee=l.getVertexShaderID(S),pe=l.getFragmentShaderID(S);let ae=i.getRenderTarget(),Se=i.state.buffers.depth.getReversed(),Ce=O.isInstancedMesh===!0,Oe=O.isBatchedMesh===!0,ot=!!S.map,Le=!!S.matcap,it=!!J,N=!!S.aoMap,qt=!!S.lightMap,Ye=!!S.bumpMap,ke=!!S.normalMap,we=!!S.displacementMap,gt=!!S.emissiveMap,Re=!!S.metalnessMap,w=!!S.roughnessMap,M=S.anisotropy>0,k=S.clearcoat>0,j=S.dispersion>0,K=S.iridescence>0,Y=S.sheen>0,_e=S.transmission>0,ne=M&&!!S.anisotropyMap,ge=k&&!!S.clearcoatMap,Ke=k&&!!S.clearcoatNormalMap,te=k&&!!S.clearcoatRoughnessMap,le=K&&!!S.iridescenceMap,Ee=K&&!!S.iridescenceThicknessMap,Pe=Y&&!!S.sheenColorMap,ve=Y&&!!S.sheenRoughnessMap,$e=!!S.specularMap,Fe=!!S.specularColorMap,dt=!!S.specularIntensityMap,D=_e&&!!S.transmissionMap,ue=_e&&!!S.thicknessMap,X=!!S.gradientMap,Z=!!S.alphaMap,de=S.alphaTest>0,he=!!S.alphaHash,Ve=!!S.extensions,wt=Ui;S.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(wt=i.toneMapping);let jt={shaderID:ie,shaderType:S.type,shaderName:S.name,vertexShader:et,fragmentShader:q,defines:S.defines,customVertexShaderID:ee,customFragmentShaderID:pe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Oe,batchingColor:Oe&&O._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&O.instanceColor!==null,instancingMorph:Ce&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Qt,alphaToCoverage:!!S.alphaToCoverage,map:ot,matcap:Le,envMap:it,envMapMode:it&&J.mapping,envMapCubeUVHeight:F,aoMap:N,lightMap:qt,bumpMap:Ye,normalMap:ke,displacementMap:f&&we,emissiveMap:gt,normalMapObjectSpace:ke&&S.normalMapType===Z0,normalMapTangentSpace:ke&&S.normalMapType===id,metalnessMap:Re,roughnessMap:w,anisotropy:M,anisotropyMap:ne,clearcoat:k,clearcoatMap:ge,clearcoatNormalMap:Ke,clearcoatRoughnessMap:te,dispersion:j,iridescence:K,iridescenceMap:le,iridescenceThicknessMap:Ee,sheen:Y,sheenColorMap:Pe,sheenRoughnessMap:ve,specularMap:$e,specularColorMap:Fe,specularIntensityMap:dt,transmission:_e,transmissionMap:D,thicknessMap:ue,gradientMap:X,opaque:S.transparent===!1&&S.blending===Os&&S.alphaToCoverage===!1,alphaMap:Z,alphaTest:de,alphaHash:he,combine:S.combine,mapUv:ot&&v(S.map.channel),aoMapUv:N&&v(S.aoMap.channel),lightMapUv:qt&&v(S.lightMap.channel),bumpMapUv:Ye&&v(S.bumpMap.channel),normalMapUv:ke&&v(S.normalMap.channel),displacementMapUv:we&&v(S.displacementMap.channel),emissiveMapUv:gt&&v(S.emissiveMap.channel),metalnessMapUv:Re&&v(S.metalnessMap.channel),roughnessMapUv:w&&v(S.roughnessMap.channel),anisotropyMapUv:ne&&v(S.anisotropyMap.channel),clearcoatMapUv:ge&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:ve&&v(S.sheenRoughnessMap.channel),specularMapUv:$e&&v(S.specularMap.channel),specularColorMapUv:Fe&&v(S.specularColorMap.channel),specularIntensityMapUv:dt&&v(S.specularIntensityMap.channel),transmissionMapUv:D&&v(S.transmissionMap.channel),thicknessMapUv:ue&&v(S.thicknessMap.channel),alphaMapUv:Z&&v(S.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(ke||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!$.attributes.uv&&(ot||Z),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Se,skinning:O.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Ne,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:wt,decodeVideoTexture:ot&&S.map.isVideoTexture===!0&&Je.getTransfer(S.map.colorSpace)===vt,decodeVideoTextureEmissive:gt&&S.emissiveMap.isVideoTexture===!0&&Je.getTransfer(S.emissiveMap.colorSpace)===vt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Pt,flipSided:S.side===cn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ve&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&S.extensions.multiDraw===!0||Oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return jt.vertexUv1s=c.has(1),jt.vertexUv2s=c.has(2),jt.vertexUv3s=c.has(3),c.clear(),jt}function d(S){let b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(let I in S.defines)b.push(I),b.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(y(b,S),x(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function y(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function x(S,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),S.push(o.mask)}function _(S){let b=g[S.type],I;if(b){let B=Xn[b];I=Op.clone(B.uniforms)}else I=S.uniforms;return I}function R(S,b){let I;for(let B=0,O=u.length;B<O;B++){let G=u[B];if(G.cacheKey===b){I=G,++I.usedTimes;break}}return I===void 0&&(I=new Xg(i,b,S,r),u.push(I)),I}function E(S){if(--S.usedTimes===0){let b=u.indexOf(S);u[b]=u[u.length-1],u.pop(),S.destroy()}}function A(S){l.remove(S)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:_,acquireProgram:R,releaseProgram:E,releaseShaderCache:A,programs:u,dispose:C}}function Yg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function $g(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function _f(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function yf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,f,p,g,v,m){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=v,d.group=m),e++,d}function o(h,f,p,g,v,m){let d=a(h,f,p,g,v,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(h,f,p,g,v,m){let d=a(h,f,p,g,v,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||$g),n.length>1&&n.sort(f||_f),s.length>1&&s.sort(f||_f)}function u(){for(let h=e,f=i.length;h<f;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Zg(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new yf,i.set(n,[a])):s>=r.length?(a=new yf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Kg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Me};break;case"SpotLight":t={position:new P,direction:new P,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function Jg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Qg=0;function ev(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function tv(i){let e=new Kg,t=Jg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new Ie,a=new Ie;function o(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,y=0,x=0,_=0,R=0,E=0,A=0;c.sort(ev);for(let S=0,b=c.length;S<b;S++){let I=c[S],B=I.color,O=I.intensity,G=I.distance,$=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=B.r*O,h+=B.g*O,f+=B.b*O;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],O);A++}else if(I.isDirectionalLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let J=I.shadow,F=t.get(I);F.shadowIntensity=J.intensity,F.shadowBias=J.bias,F.shadowNormalBias=J.normalBias,F.shadowRadius=J.radius,F.shadowMapSize=J.mapSize,n.directionalShadow[p]=F,n.directionalShadowMap[p]=$,n.directionalShadowMatrix[p]=I.shadow.matrix,y++}n.directional[p]=W,p++}else if(I.isSpotLight){let W=e.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(B).multiplyScalar(O),W.distance=G,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[v]=W;let J=I.shadow;if(I.map&&(n.spotLightMap[R]=I.map,R++,J.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[v]=J.matrix,I.castShadow){let F=t.get(I);F.shadowIntensity=J.intensity,F.shadowBias=J.bias,F.shadowNormalBias=J.normalBias,F.shadowRadius=J.radius,F.shadowMapSize=J.mapSize,n.spotShadow[v]=F,n.spotShadowMap[v]=$,_++}v++}else if(I.isRectAreaLight){let W=e.get(I);W.color.copy(B).multiplyScalar(O),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=W,m++}else if(I.isPointLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let J=I.shadow,F=t.get(I);F.shadowIntensity=J.intensity,F.shadowBias=J.bias,F.shadowNormalBias=J.normalBias,F.shadowRadius=J.radius,F.shadowMapSize=J.mapSize,F.shadowCameraNear=J.camera.near,F.shadowCameraFar=J.camera.far,n.pointShadow[g]=F,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=I.shadow.matrix,x++}n.point[g]=W,g++}else if(I.isHemisphereLight){let W=e.get(I);W.skyColor.copy(I.color).multiplyScalar(O),W.groundColor.copy(I.groundColor).multiplyScalar(O),n.hemi[d]=W,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==v||C.rectAreaLength!==m||C.hemiLength!==d||C.numDirectionalShadows!==y||C.numPointShadows!==x||C.numSpotShadows!==_||C.numSpotMaps!==R||C.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=_+R-E,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,C.directionalLength=p,C.pointLength=g,C.spotLength=v,C.rectAreaLength=m,C.hemiLength=d,C.numDirectionalShadows=y,C.numPointShadows=x,C.numSpotShadows=_,C.numSpotMaps=R,C.numLightProbes=A,n.version=Qg++)}function l(c,u){let h=0,f=0,p=0,g=0,v=0,m=u.matrixWorldInverse;for(let d=0,y=c.length;d<y;d++){let x=c[d];if(x.isDirectionalLight){let _=n.directional[h];_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),h++}else if(x.isSpotLight){let _=n.spot[p];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(x.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){let _=n.point[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){let _=n.hemi[v];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function xf(i){let e=new tv(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function nv(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new xf(i),e.set(s,[o])):r>=a.length?(o=new xf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Rc=class extends _n{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Y0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Cc=class extends _n{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},iv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sv=`uniform sampler2D shadow_pass;
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
}`;function rv(i,e,t){let n=new kr,s=new Be,r=new Be,a=new lt,o=new Rc({depthPacking:$0}),l=new Cc,c={},u=t.maxTextureSize,h={[jn]:cn,[cn]:jn,[Pt]:Pt},f=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:iv,fragmentShader:sv}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new ct;g.setAttribute("position",new Rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new He(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wf;let d=this.type;this.render=function(E,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let S=i.getRenderTarget(),b=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Ni),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let O=d!==ai&&this.type===ai,G=d===ai&&this.type!==ai;for(let $=0,W=E.length;$<W;$++){let J=E[$],F=J.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let ie=F.getFrameExtents();if(s.multiply(ie),r.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ie.x),s.x=r.x*ie.x,F.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ie.y),s.y=r.y*ie.y,F.mapSize.y=r.y)),F.map===null||O===!0||G===!0){let me=this.type!==ai?{minFilter:Kt,magFilter:Kt}:{};F.map!==null&&F.map.dispose(),F.map=new fi(s.x,s.y,me),F.map.texture.name=J.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();let oe=F.getViewportCount();for(let me=0;me<oe;me++){let Ne=F.getViewport(me);a.set(r.x*Ne.x,r.y*Ne.y,r.x*Ne.z,r.y*Ne.w),B.viewport(a),F.updateMatrices(J,me),n=F.getFrustum(),_(A,C,F.camera,J,this.type)}F.isPointLightShadow!==!0&&this.type===ai&&y(F,C),F.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(S,b,I)};function y(E,A){let C=e.update(v);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new fi(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,C,f,v,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,C,p,v,null)}function x(E,A,C,S){let b=null,I=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)b=I;else if(b=C.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let B=b.uuid,O=A.uuid,G=c[B];G===void 0&&(G={},c[B]=G);let $=G[O];$===void 0&&($=b.clone(),G[O]=$,A.addEventListener("dispose",R)),b=$}if(b.visible=A.visible,b.wireframe=A.wireframe,S===ai?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:h[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,C.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let B=i.properties.get(b);B.light=C}return b}function _(E,A,C,S,b){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===ai)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);let O=e.update(E),G=E.material;if(Array.isArray(G)){let $=O.groups;for(let W=0,J=$.length;W<J;W++){let F=$[W],ie=G[F.materialIndex];if(ie&&ie.visible){let oe=x(E,ie,S,b);E.onBeforeShadow(i,E,A,C,O,oe,F),i.renderBufferDirect(C,null,O,oe,E,F),E.onAfterShadow(i,E,A,C,O,oe,F)}}}else if(G.visible){let $=x(E,G,S,b);E.onBeforeShadow(i,E,A,C,O,$,null),i.renderBufferDirect(C,null,O,$,E,null),E.onAfterShadow(i,E,A,C,O,$,null)}}let B=E.children;for(let O=0,G=B.length;O<G;O++)_(B[O],A,C,S,b)}function R(E){E.target.removeEventListener("dispose",R);for(let C in c){let S=c[C],b=E.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}var av={[Ul]:zl,[Ol]:kl,[Fl]:Hl,[Hs]:Bl,[zl]:Ul,[kl]:Ol,[Hl]:Fl,[Bl]:Hs};function ov(i,e){function t(){let D=!1,ue=new lt,X=null,Z=new lt(0,0,0,0);return{setMask:function(de){X!==de&&!D&&(i.colorMask(de,de,de,de),X=de)},setLocked:function(de){D=de},setClear:function(de,he,Ve,wt,jt){jt===!0&&(de*=wt,he*=wt,Ve*=wt),ue.set(de,he,Ve,wt),Z.equals(ue)===!1&&(i.clearColor(de,he,Ve,wt),Z.copy(ue))},reset:function(){D=!1,X=null,Z.set(-1,0,0,0)}}}function n(){let D=!1,ue=!1,X=null,Z=null,de=null;return{setReversed:function(he){if(ue!==he){let Ve=e.get("EXT_clip_control");ue?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT);let wt=de;de=null,this.setClear(wt)}ue=he},getReversed:function(){return ue},setTest:function(he){he?ae(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(he){X!==he&&!D&&(i.depthMask(he),X=he)},setFunc:function(he){if(ue&&(he=av[he]),Z!==he){switch(he){case Ul:i.depthFunc(i.NEVER);break;case zl:i.depthFunc(i.ALWAYS);break;case Ol:i.depthFunc(i.LESS);break;case Hs:i.depthFunc(i.LEQUAL);break;case Fl:i.depthFunc(i.EQUAL);break;case Bl:i.depthFunc(i.GEQUAL);break;case kl:i.depthFunc(i.GREATER);break;case Hl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=he}},setLocked:function(he){D=he},setClear:function(he){de!==he&&(ue&&(he=1-he),i.clearDepth(he),de=he)},reset:function(){D=!1,X=null,Z=null,de=null,ue=!1}}}function s(){let D=!1,ue=null,X=null,Z=null,de=null,he=null,Ve=null,wt=null,jt=null;return{setTest:function(pt){D||(pt?ae(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(pt){ue!==pt&&!D&&(i.stencilMask(pt),ue=pt)},setFunc:function(pt,Ln,Jn){(X!==pt||Z!==Ln||de!==Jn)&&(i.stencilFunc(pt,Ln,Jn),X=pt,Z=Ln,de=Jn)},setOp:function(pt,Ln,Jn){(he!==pt||Ve!==Ln||wt!==Jn)&&(i.stencilOp(pt,Ln,Jn),he=pt,Ve=Ln,wt=Jn)},setLocked:function(pt){D=pt},setClear:function(pt){jt!==pt&&(i.clearStencil(pt),jt=pt)},reset:function(){D=!1,ue=null,X=null,Z=null,de=null,he=null,Ve=null,wt=null,jt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,y=null,x=null,_=null,R=null,E=null,A=new Me(0,0,0),C=0,S=!1,b=null,I=null,B=null,O=null,G=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,J=0,F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(F)[1]),W=J>=1):F.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),W=J>=2);let ie=null,oe={},me=i.getParameter(i.SCISSOR_BOX),Ne=i.getParameter(i.VIEWPORT),et=new lt().fromArray(me),q=new lt().fromArray(Ne);function ee(D,ue,X,Z){let de=new Uint8Array(4),he=i.createTexture();i.bindTexture(D,he),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ve=0;Ve<X;Ve++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ue,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,de):i.texImage2D(ue+Ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,de);return he}let pe={};pe[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),pe[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pe[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(i.DEPTH_TEST),a.setFunc(Hs),Ye(!1),ke(bh),ae(i.CULL_FACE),N(Ni);function ae(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function Se(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function Ce(D,ue){return h[D]!==ue?(i.bindFramebuffer(D,ue),h[D]=ue,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ue),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ue),!0):!1}function Oe(D,ue){let X=p,Z=!1;if(D){X=f.get(ue),X===void 0&&(X=[],f.set(ue,X));let de=D.textures;if(X.length!==de.length||X[0]!==i.COLOR_ATTACHMENT0){for(let he=0,Ve=de.length;he<Ve;he++)X[he]=i.COLOR_ATTACHMENT0+he;X.length=de.length,Z=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,Z=!0);Z&&i.drawBuffers(X)}function ot(D){return g!==D?(i.useProgram(D),g=D,!0):!1}let Le={[ss]:i.FUNC_ADD,[x0]:i.FUNC_SUBTRACT,[b0]:i.FUNC_REVERSE_SUBTRACT};Le[M0]=i.MIN,Le[S0]=i.MAX;let it={[T0]:i.ZERO,[E0]:i.ONE,[A0]:i.SRC_COLOR,[Dl]:i.SRC_ALPHA,[L0]:i.SRC_ALPHA_SATURATE,[I0]:i.DST_COLOR,[R0]:i.DST_ALPHA,[w0]:i.ONE_MINUS_SRC_COLOR,[Nl]:i.ONE_MINUS_SRC_ALPHA,[P0]:i.ONE_MINUS_DST_COLOR,[C0]:i.ONE_MINUS_DST_ALPHA,[D0]:i.CONSTANT_COLOR,[N0]:i.ONE_MINUS_CONSTANT_COLOR,[U0]:i.CONSTANT_ALPHA,[z0]:i.ONE_MINUS_CONSTANT_ALPHA};function N(D,ue,X,Z,de,he,Ve,wt,jt,pt){if(D===Ni){v===!0&&(Se(i.BLEND),v=!1);return}if(v===!1&&(ae(i.BLEND),v=!0),D!==y0){if(D!==m||pt!==S){if((d!==ss||_!==ss)&&(i.blendEquation(i.FUNC_ADD),d=ss,_=ss),pt)switch(D){case Os:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case os:i.blendFunc(i.ONE,i.ONE);break;case Mh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case os:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Mh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,x=null,R=null,E=null,A.set(0,0,0),C=0,m=D,S=pt}return}de=de||ue,he=he||X,Ve=Ve||Z,(ue!==d||de!==_)&&(i.blendEquationSeparate(Le[ue],Le[de]),d=ue,_=de),(X!==y||Z!==x||he!==R||Ve!==E)&&(i.blendFuncSeparate(it[X],it[Z],it[he],it[Ve]),y=X,x=Z,R=he,E=Ve),(wt.equals(A)===!1||jt!==C)&&(i.blendColor(wt.r,wt.g,wt.b,jt),A.copy(wt),C=jt),m=D,S=!1}function qt(D,ue){D.side===Pt?Se(i.CULL_FACE):ae(i.CULL_FACE);let X=D.side===cn;ue&&(X=!X),Ye(X),D.blending===Os&&D.transparent===!1?N(Ni):N(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let Z=D.stencilWrite;o.setTest(Z),Z&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),gt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(D){b!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),b=D)}function ke(D){D!==g0?(ae(i.CULL_FACE),D!==I&&(D===bh?i.cullFace(i.BACK):D===v0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),I=D}function we(D){D!==B&&(W&&i.lineWidth(D),B=D)}function gt(D,ue,X){D?(ae(i.POLYGON_OFFSET_FILL),(O!==ue||G!==X)&&(i.polygonOffset(ue,X),O=ue,G=X)):Se(i.POLYGON_OFFSET_FILL)}function Re(D){D?ae(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function w(D){D===void 0&&(D=i.TEXTURE0+$-1),ie!==D&&(i.activeTexture(D),ie=D)}function M(D,ue,X){X===void 0&&(ie===null?X=i.TEXTURE0+$-1:X=ie);let Z=oe[X];Z===void 0&&(Z={type:void 0,texture:void 0},oe[X]=Z),(Z.type!==D||Z.texture!==ue)&&(ie!==X&&(i.activeTexture(X),ie=X),i.bindTexture(D,ue||pe[D]),Z.type=D,Z.texture=ue)}function k(){let D=oe[ie];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ke(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Pe(D){et.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),et.copy(D))}function ve(D){q.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function $e(D,ue){let X=c.get(ue);X===void 0&&(X=new WeakMap,c.set(ue,X));let Z=X.get(D);Z===void 0&&(Z=i.getUniformBlockIndex(ue,D.name),X.set(D,Z))}function Fe(D,ue){let Z=c.get(ue).get(D);l.get(ue)!==Z&&(i.uniformBlockBinding(ue,Z,D.__bindingPointIndex),l.set(ue,Z))}function dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ie=null,oe={},h={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,y=null,x=null,_=null,R=null,E=null,A=new Me(0,0,0),C=0,S=!1,b=null,I=null,B=null,O=null,G=null,et.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ae,disable:Se,bindFramebuffer:Ce,drawBuffers:Oe,useProgram:ot,setBlending:N,setMaterial:qt,setFlipSided:Ye,setCullFace:ke,setLineWidth:we,setPolygonOffset:gt,setScissorTest:Re,activeTexture:w,bindTexture:M,unbindTexture:k,compressedTexImage2D:j,compressedTexImage3D:K,texImage2D:le,texImage3D:Ee,updateUBOMapping:$e,uniformBlockBinding:Fe,texStorage2D:Ke,texStorage3D:te,texSubImage2D:Y,texSubImage3D:_e,compressedTexSubImage2D:ne,compressedTexSubImage3D:ge,scissor:Pe,viewport:ve,reset:dt}}function bf(i,e,t,n){let s=lv(n);switch(t){case Zf:return i*e;case Jf:return i*e;case Qf:return i*e*2;case Kc:return i*e/s.components*s.byteLength;case Jc:return i*e/s.components*s.byteLength;case ed:return i*e*2/s.components*s.byteLength;case Qc:return i*e*2/s.components*s.byteLength;case Kf:return i*e*3/s.components*s.byteLength;case wn:return i*e*4/s.components*s.byteLength;case eu:return i*e*4/s.components*s.byteLength;case Ya:case $a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Za:case Ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xl:case jl:return Math.max(i,16)*Math.max(e,8)/4;case Wl:case ql:return Math.max(i,8)*Math.max(e,8)/2;case Yl:case $l:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Zl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ql:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ec:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case tc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case nc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ic:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case sc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case rc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ac:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case oc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case lc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case cc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case uc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ja:case hc:case fc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case td:case dc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case pc:case mc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function lv(i){switch(i){case hi:case jf:return{byteLength:1,components:1};case zr:case Yf:case Zr:return{byteLength:2,components:1};case $c:case Zc:return{byteLength:2,components:4};case cs:case Yc:case Fn:return{byteLength:4,components:1};case $f:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function cv(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,u=new WeakMap,h,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,M){return p?new OffscreenCanvas(w,M):Or("canvas")}function v(w,M,k){let j=1,K=Re(w);if((K.width>k||K.height>k)&&(j=k/Math.max(K.width,K.height)),j<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let Y=Math.floor(j*K.width),_e=Math.floor(j*K.height);h===void 0&&(h=g(Y,_e));let ne=M?g(Y,_e):h;return ne.width=Y,ne.height=_e,ne.getContext("2d").drawImage(w,0,0,Y,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Y+"x"+_e+")."),ne}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),w;return w}function m(w){return w.generateMipmaps}function d(w){i.generateMipmap(w)}function y(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(w,M,k,j,K=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Y=M;if(M===i.RED&&(k===i.FLOAT&&(Y=i.R32F),k===i.HALF_FLOAT&&(Y=i.R16F),k===i.UNSIGNED_BYTE&&(Y=i.R8)),M===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.R8UI),k===i.UNSIGNED_SHORT&&(Y=i.R16UI),k===i.UNSIGNED_INT&&(Y=i.R32UI),k===i.BYTE&&(Y=i.R8I),k===i.SHORT&&(Y=i.R16I),k===i.INT&&(Y=i.R32I)),M===i.RG&&(k===i.FLOAT&&(Y=i.RG32F),k===i.HALF_FLOAT&&(Y=i.RG16F),k===i.UNSIGNED_BYTE&&(Y=i.RG8)),M===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RG8UI),k===i.UNSIGNED_SHORT&&(Y=i.RG16UI),k===i.UNSIGNED_INT&&(Y=i.RG32UI),k===i.BYTE&&(Y=i.RG8I),k===i.SHORT&&(Y=i.RG16I),k===i.INT&&(Y=i.RG32I)),M===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),k===i.UNSIGNED_INT&&(Y=i.RGB32UI),k===i.BYTE&&(Y=i.RGB8I),k===i.SHORT&&(Y=i.RGB16I),k===i.INT&&(Y=i.RGB32I)),M===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),k===i.UNSIGNED_INT&&(Y=i.RGBA32UI),k===i.BYTE&&(Y=i.RGBA8I),k===i.SHORT&&(Y=i.RGBA16I),k===i.INT&&(Y=i.RGBA32I)),M===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),M===i.RGBA){let _e=K?Co:Je.getTransfer(j);k===i.FLOAT&&(Y=i.RGBA32F),k===i.HALF_FLOAT&&(Y=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Y=_e===vt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function _(w,M){let k;return w?M===null||M===cs||M===Ws?k=i.DEPTH24_STENCIL8:M===Fn?k=i.DEPTH32F_STENCIL8:M===zr&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===cs||M===Ws?k=i.DEPTH_COMPONENT24:M===Fn?k=i.DEPTH_COMPONENT32F:M===zr&&(k=i.DEPTH_COMPONENT16),k}function R(w,M){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Kt&&w.minFilter!==ln?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function E(w){let M=w.target;M.removeEventListener("dispose",E),C(M),M.isVideoTexture&&u.delete(M)}function A(w){let M=w.target;M.removeEventListener("dispose",A),b(M)}function C(w){let M=n.get(w);if(M.__webglInit===void 0)return;let k=w.source,j=f.get(k);if(j){let K=j[M.__cacheKey];K.usedTimes--,K.usedTimes===0&&S(w),Object.keys(j).length===0&&f.delete(k)}n.remove(w)}function S(w){let M=n.get(w);i.deleteTexture(M.__webglTexture);let k=w.source,j=f.get(k);delete j[M.__cacheKey],a.memory.textures--}function b(w){let M=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let K=0;K<M.__webglFramebuffer[j].length;K++)i.deleteFramebuffer(M.__webglFramebuffer[j][K]);else i.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)i.deleteFramebuffer(M.__webglFramebuffer[j]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let k=w.textures;for(let j=0,K=k.length;j<K;j++){let Y=n.get(k[j]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(k[j])}n.remove(w)}let I=0;function B(){I=0}function O(){let w=I;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),I+=1,w}function G(w){let M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function $(w,M){let k=n.get(w);if(w.isVideoTexture&&we(w),w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){let j=w.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(k,w,M);return}}t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+M)}function W(w,M){let k=n.get(w);if(w.version>0&&k.__version!==w.version){q(k,w,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+M)}function J(w,M){let k=n.get(w);if(w.version>0&&k.__version!==w.version){q(k,w,M);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+M)}function F(w,M){let k=n.get(w);if(w.version>0&&k.__version!==w.version){ee(k,w,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+M)}let ie={[ls]:i.REPEAT,[li]:i.CLAMP_TO_EDGE,[Ur]:i.MIRRORED_REPEAT},oe={[Kt]:i.NEAREST,[jc]:i.NEAREST_MIPMAP_NEAREST,[Us]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[Pr]:i.LINEAR_MIPMAP_NEAREST,[qn]:i.LINEAR_MIPMAP_LINEAR},me={[K0]:i.NEVER,[ip]:i.ALWAYS,[J0]:i.LESS,[sd]:i.LEQUAL,[Q0]:i.EQUAL,[np]:i.GEQUAL,[ep]:i.GREATER,[tp]:i.NOTEQUAL};function Ne(w,M){if(M.type===Fn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ln||M.magFilter===Pr||M.magFilter===Us||M.magFilter===qn||M.minFilter===ln||M.minFilter===Pr||M.minFilter===Us||M.minFilter===qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,ie[M.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,ie[M.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,ie[M.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,oe[M.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,oe[M.minFilter]),M.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,me[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Kt||M.minFilter!==Us&&M.minFilter!==qn||M.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function et(w,M){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",E));let j=M.source,K=f.get(j);K===void 0&&(K={},f.set(j,K));let Y=G(M);if(Y!==w.__cacheKey){K[Y]===void 0&&(K[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),K[Y].usedTimes++;let _e=K[w.__cacheKey];_e!==void 0&&(K[w.__cacheKey].usedTimes--,_e.usedTimes===0&&S(M)),w.__cacheKey=Y,w.__webglTexture=K[Y].texture}return k}function q(w,M,k){let j=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=i.TEXTURE_3D);let K=et(w,M),Y=M.source;t.bindTexture(j,w.__webglTexture,i.TEXTURE0+k);let _e=n.get(Y);if(Y.version!==_e.__version||K===!0){t.activeTexture(i.TEXTURE0+k);let ne=Je.getPrimaries(Je.workingColorSpace),ge=M.colorSpace===Li?null:Je.getPrimaries(M.colorSpace),Ke=M.colorSpace===Li||ne===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let te=v(M.image,!1,s.maxTextureSize);te=gt(M,te);let le=r.convert(M.format,M.colorSpace),Ee=r.convert(M.type),Pe=x(M.internalFormat,le,Ee,M.colorSpace,M.isVideoTexture);Ne(j,M);let ve,$e=M.mipmaps,Fe=M.isVideoTexture!==!0,dt=_e.__version===void 0||K===!0,D=Y.dataReady,ue=R(M,te);if(M.isDepthTexture)Pe=_(M.format===Xs,M.type),dt&&(Fe?t.texStorage2D(i.TEXTURE_2D,1,Pe,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,Pe,te.width,te.height,0,le,Ee,null));else if(M.isDataTexture)if($e.length>0){Fe&&dt&&t.texStorage2D(i.TEXTURE_2D,ue,Pe,$e[0].width,$e[0].height);for(let X=0,Z=$e.length;X<Z;X++)ve=$e[X],Fe?D&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,ve.width,ve.height,le,Ee,ve.data):t.texImage2D(i.TEXTURE_2D,X,Pe,ve.width,ve.height,0,le,Ee,ve.data);M.generateMipmaps=!1}else Fe?(dt&&t.texStorage2D(i.TEXTURE_2D,ue,Pe,te.width,te.height),D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,te.width,te.height,le,Ee,te.data)):t.texImage2D(i.TEXTURE_2D,0,Pe,te.width,te.height,0,le,Ee,te.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Fe&&dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,Pe,$e[0].width,$e[0].height,te.depth);for(let X=0,Z=$e.length;X<Z;X++)if(ve=$e[X],M.format!==wn)if(le!==null)if(Fe){if(D)if(M.layerUpdates.size>0){let de=bf(ve.width,ve.height,M.format,M.type);for(let he of M.layerUpdates){let Ve=ve.data.subarray(he*de/ve.data.BYTES_PER_ELEMENT,(he+1)*de/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,he,ve.width,ve.height,1,le,Ve)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,ve.width,ve.height,te.depth,le,ve.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Pe,ve.width,ve.height,te.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,ve.width,ve.height,te.depth,le,Ee,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,X,Pe,ve.width,ve.height,te.depth,0,le,Ee,ve.data)}else{Fe&&dt&&t.texStorage2D(i.TEXTURE_2D,ue,Pe,$e[0].width,$e[0].height);for(let X=0,Z=$e.length;X<Z;X++)ve=$e[X],M.format!==wn?le!==null?Fe?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,ve.width,ve.height,le,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,X,Pe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?D&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,ve.width,ve.height,le,Ee,ve.data):t.texImage2D(i.TEXTURE_2D,X,Pe,ve.width,ve.height,0,le,Ee,ve.data)}else if(M.isDataArrayTexture)if(Fe){if(dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,Pe,te.width,te.height,te.depth),D)if(M.layerUpdates.size>0){let X=bf(te.width,te.height,M.format,M.type);for(let Z of M.layerUpdates){let de=te.data.subarray(Z*X/te.data.BYTES_PER_ELEMENT,(Z+1)*X/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,te.width,te.height,1,le,Ee,de)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,le,Ee,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,te.width,te.height,te.depth,0,le,Ee,te.data);else if(M.isData3DTexture)Fe?(dt&&t.texStorage3D(i.TEXTURE_3D,ue,Pe,te.width,te.height,te.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,le,Ee,te.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,te.width,te.height,te.depth,0,le,Ee,te.data);else if(M.isFramebufferTexture){if(dt)if(Fe)t.texStorage2D(i.TEXTURE_2D,ue,Pe,te.width,te.height);else{let X=te.width,Z=te.height;for(let de=0;de<ue;de++)t.texImage2D(i.TEXTURE_2D,de,Pe,X,Z,0,le,Ee,null),X>>=1,Z>>=1}}else if($e.length>0){if(Fe&&dt){let X=Re($e[0]);t.texStorage2D(i.TEXTURE_2D,ue,Pe,X.width,X.height)}for(let X=0,Z=$e.length;X<Z;X++)ve=$e[X],Fe?D&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,le,Ee,ve):t.texImage2D(i.TEXTURE_2D,X,Pe,le,Ee,ve);M.generateMipmaps=!1}else if(Fe){if(dt){let X=Re(te);t.texStorage2D(i.TEXTURE_2D,ue,Pe,X.width,X.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le,Ee,te)}else t.texImage2D(i.TEXTURE_2D,0,Pe,le,Ee,te);m(M)&&d(j),_e.__version=Y.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function ee(w,M,k){if(M.image.length!==6)return;let j=et(w,M),K=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+k);let Y=n.get(K);if(K.version!==Y.__version||j===!0){t.activeTexture(i.TEXTURE0+k);let _e=Je.getPrimaries(Je.workingColorSpace),ne=M.colorSpace===Li?null:Je.getPrimaries(M.colorSpace),ge=M.colorSpace===Li||_e===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let Ke=M.isCompressedTexture||M.image[0].isCompressedTexture,te=M.image[0]&&M.image[0].isDataTexture,le=[];for(let Z=0;Z<6;Z++)!Ke&&!te?le[Z]=v(M.image[Z],!0,s.maxCubemapSize):le[Z]=te?M.image[Z].image:M.image[Z],le[Z]=gt(M,le[Z]);let Ee=le[0],Pe=r.convert(M.format,M.colorSpace),ve=r.convert(M.type),$e=x(M.internalFormat,Pe,ve,M.colorSpace),Fe=M.isVideoTexture!==!0,dt=Y.__version===void 0||j===!0,D=K.dataReady,ue=R(M,Ee);Ne(i.TEXTURE_CUBE_MAP,M);let X;if(Ke){Fe&&dt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,$e,Ee.width,Ee.height);for(let Z=0;Z<6;Z++){X=le[Z].mipmaps;for(let de=0;de<X.length;de++){let he=X[de];M.format!==wn?Pe!==null?Fe?D&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,0,0,he.width,he.height,Pe,he.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,$e,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,0,0,he.width,he.height,Pe,ve,he.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,$e,he.width,he.height,0,Pe,ve,he.data)}}}else{if(X=M.mipmaps,Fe&&dt){X.length>0&&ue++;let Z=Re(le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,$e,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(te){Fe?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,le[Z].width,le[Z].height,Pe,ve,le[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,$e,le[Z].width,le[Z].height,0,Pe,ve,le[Z].data);for(let de=0;de<X.length;de++){let Ve=X[de].image[Z].image;Fe?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,0,0,Ve.width,Ve.height,Pe,ve,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,$e,Ve.width,Ve.height,0,Pe,ve,Ve.data)}}else{Fe?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Pe,ve,le[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,$e,Pe,ve,le[Z]);for(let de=0;de<X.length;de++){let he=X[de];Fe?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,0,0,Pe,ve,he.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,$e,Pe,ve,he.image[Z])}}}m(M)&&d(i.TEXTURE_CUBE_MAP),Y.__version=K.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function pe(w,M,k,j,K,Y){let _e=r.convert(k.format,k.colorSpace),ne=r.convert(k.type),ge=x(k.internalFormat,_e,ne,k.colorSpace),Ke=n.get(M),te=n.get(k);if(te.__renderTarget=M,!Ke.__hasExternalTextures){let le=Math.max(1,M.width>>Y),Ee=Math.max(1,M.height>>Y);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,Y,ge,le,Ee,M.depth,0,_e,ne,null):t.texImage2D(K,Y,ge,le,Ee,0,_e,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),ke(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,K,te.__webglTexture,0,Ye(M)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,K,te.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(w,M,k){if(i.bindRenderbuffer(i.RENDERBUFFER,w),M.depthBuffer){let j=M.depthTexture,K=j&&j.isDepthTexture?j.type:null,Y=_(M.stencilBuffer,K),_e=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=Ye(M);ke(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,Y,M.width,M.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,Y,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Y,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,w)}else{let j=M.textures;for(let K=0;K<j.length;K++){let Y=j[K],_e=r.convert(Y.format,Y.colorSpace),ne=r.convert(Y.type),ge=x(Y.internalFormat,_e,ne,Y.colorSpace),Ke=Ye(M);k&&ke(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke,ge,M.width,M.height):ke(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ke,ge,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ge,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(M.depthTexture);j.__renderTarget=M,(!j.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$(M.depthTexture,0);let K=j.__webglTexture,Y=Ye(M);if(M.depthTexture.format===Fs)ke(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(M.depthTexture.format===Xs)ke(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ce(w){let M=n.get(w),k=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){let j=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),j){let K=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,j.removeEventListener("dispose",K)};j.addEventListener("dispose",K),M.__depthDisposeCallback=K}M.__boundDepthTexture=j}if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Se(M.__webglFramebuffer,w)}else if(k){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]===void 0)M.__webglDepthbuffer[j]=i.createRenderbuffer(),ae(M.__webglDepthbuffer[j],w,!1);else{let K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=M.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ae(M.__webglDepthbuffer,w,!1);else{let j=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,K)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(w,M,k){let j=n.get(w);M!==void 0&&pe(j.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Ce(w)}function ot(w){let M=w.texture,k=n.get(w),j=n.get(M);w.addEventListener("dispose",A);let K=w.textures,Y=w.isWebGLCubeRenderTarget===!0,_e=K.length>1;if(_e||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=M.version,a.memory.textures++),Y){k.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[ne]=[];for(let ge=0;ge<M.mipmaps.length;ge++)k.__webglFramebuffer[ne][ge]=i.createFramebuffer()}else k.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let ne=0;ne<M.mipmaps.length;ne++)k.__webglFramebuffer[ne]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(_e)for(let ne=0,ge=K.length;ne<ge;ne++){let Ke=n.get(K[ne]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&ke(w)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ne=0;ne<K.length;ne++){let ge=K[ne];k.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[ne]);let Ke=r.convert(ge.format,ge.colorSpace),te=r.convert(ge.type),le=x(ge.internalFormat,Ke,te,ge.colorSpace,w.isXRRenderTarget===!0),Ee=Ye(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,le,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,k.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),ae(k.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,M);for(let ne=0;ne<6;ne++)if(M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)pe(k.__webglFramebuffer[ne][ge],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ge);else pe(k.__webglFramebuffer[ne],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);m(M)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let ne=0,ge=K.length;ne<ge;ne++){let Ke=K[ne],te=n.get(Ke);t.bindTexture(i.TEXTURE_2D,te.__webglTexture),Ne(i.TEXTURE_2D,Ke),pe(k.__webglFramebuffer,w,Ke,i.COLOR_ATTACHMENT0+ne,i.TEXTURE_2D,0),m(Ke)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ne=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,j.__webglTexture),Ne(ne,M),M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)pe(k.__webglFramebuffer[ge],w,M,i.COLOR_ATTACHMENT0,ne,ge);else pe(k.__webglFramebuffer,w,M,i.COLOR_ATTACHMENT0,ne,0);m(M)&&d(ne),t.unbindTexture()}w.depthBuffer&&Ce(w)}function Le(w){let M=w.textures;for(let k=0,j=M.length;k<j;k++){let K=M[k];if(m(K)){let Y=y(w),_e=n.get(K).__webglTexture;t.bindTexture(Y,_e),d(Y),t.unbindTexture()}}}let it=[],N=[];function qt(w){if(w.samples>0){if(ke(w)===!1){let M=w.textures,k=w.width,j=w.height,K=i.COLOR_BUFFER_BIT,Y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(w),ne=M.length>1;if(ne)for(let ge=0;ge<M.length;ge++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let ge=0;ge<M.length;ge++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[ge]);let Ke=n.get(M[ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ke,0)}i.blitFramebuffer(0,0,k,j,0,0,k,j,K,i.NEAREST),l===!0&&(it.length=0,N.length=0,it.push(i.COLOR_ATTACHMENT0+ge),w.depthBuffer&&w.resolveDepthBuffer===!1&&(it.push(Y),N.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let ge=0;ge<M.length;ge++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,_e.__webglColorRenderbuffer[ge]);let Ke=n.get(M[ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,Ke,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let M=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Ye(w){return Math.min(s.maxSamples,w.samples)}function ke(w){let M=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function we(w){let M=a.render.frame;u.get(w)!==M&&(u.set(w,M),w.update())}function gt(w,M){let k=w.colorSpace,j=w.format,K=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||k!==Qt&&k!==Li&&(Je.getTransfer(k)===vt?(j!==wn||K!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function Re(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=B,this.setTexture2D=$,this.setTexture2DArray=W,this.setTexture3D=J,this.setTextureCube=F,this.rebindTextures=Oe,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=Le,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ke}function uv(i,e){function t(n,s=Li){let r,a=Je.getTransfer(s);if(n===hi)return i.UNSIGNED_BYTE;if(n===$c)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Zc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$f)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===jf)return i.BYTE;if(n===Yf)return i.SHORT;if(n===zr)return i.UNSIGNED_SHORT;if(n===Yc)return i.INT;if(n===cs)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===Zr)return i.HALF_FLOAT;if(n===Zf)return i.ALPHA;if(n===Kf)return i.RGB;if(n===wn)return i.RGBA;if(n===Jf)return i.LUMINANCE;if(n===Qf)return i.LUMINANCE_ALPHA;if(n===Fs)return i.DEPTH_COMPONENT;if(n===Xs)return i.DEPTH_STENCIL;if(n===Kc)return i.RED;if(n===Jc)return i.RED_INTEGER;if(n===ed)return i.RG;if(n===Qc)return i.RG_INTEGER;if(n===eu)return i.RGBA_INTEGER;if(n===Ya||n===$a||n===Za||n===Ka)if(a===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ya)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ya)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$a)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Za)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ka)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wl||n===Xl||n===ql||n===jl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ql)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Yl||n===$l||n===Zl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Yl||n===$l)return a===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Zl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Kl||n===Jl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===ac||n===oc||n===lc||n===cc||n===uc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Kl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Jl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ql)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ec)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===tc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ic)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ac)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ja||n===hc||n===fc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ja)return a===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===td||n===dc||n===pc||n===mc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ja)return r.COMPRESSED_RED_RGTC1_EXT;if(n===dc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ws?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Ic=class extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Mt=class extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}},hv={type:"move"},Nr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hv)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Mt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},fv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dv=`
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

}`,Pc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Wt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new $n({vertexShader:fv,fragmentShader:dv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new He(new Oi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lc=class extends zi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null,v=new Pc,m=t.getContextAttributes(),d=null,y=null,x=[],_=[],R=new Be,E=null,A=new Bt;A.viewport=new lt;let C=new Bt;C.viewport=new lt;let S=[A,C],b=new Ic,I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ee=x[q];return ee===void 0&&(ee=new Nr,x[q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(q){let ee=x[q];return ee===void 0&&(ee=new Nr,x[q]=ee),ee.getGripSpace()},this.getHand=function(q){let ee=x[q];return ee===void 0&&(ee=new Nr,x[q]=ee),ee.getHandSpace()};function O(q){let ee=_.indexOf(q.inputSource);if(ee===-1)return;let pe=x[ee];pe!==void 0&&(pe.update(q.inputSource,q.frame,c||a),pe.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",$);for(let q=0;q<x.length;q++){let ee=_[q];ee!==null&&(_[q]=null,x[q].disconnect(ee))}I=null,B=null,v.reset(),e.setRenderTarget(d),p=null,f=null,h=null,s=null,y=null,et.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",G),s.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(R),s.renderState.layers===void 0){let ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new fi(p.framebufferWidth,p.framebufferHeight,{format:wn,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,pe=null,ae=null;m.depth&&(ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?Xs:Fs,pe=m.stencil?Ws:cs);let Se={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(Se),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new fi(f.textureWidth,f.textureHeight,{format:wn,type:hi,depthTexture:new oo(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),et.setContext(s),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function $(q){for(let ee=0;ee<q.removed.length;ee++){let pe=q.removed[ee],ae=_.indexOf(pe);ae>=0&&(_[ae]=null,x[ae].disconnect(pe))}for(let ee=0;ee<q.added.length;ee++){let pe=q.added[ee],ae=_.indexOf(pe);if(ae===-1){for(let Ce=0;Ce<x.length;Ce++)if(Ce>=_.length){_.push(pe),ae=Ce;break}else if(_[Ce]===null){_[Ce]=pe,ae=Ce;break}if(ae===-1)break}let Se=x[ae];Se&&Se.connect(pe)}}let W=new P,J=new P;function F(q,ee,pe){W.setFromMatrixPosition(ee.matrixWorld),J.setFromMatrixPosition(pe.matrixWorld);let ae=W.distanceTo(J),Se=ee.projectionMatrix.elements,Ce=pe.projectionMatrix.elements,Oe=Se[14]/(Se[10]-1),ot=Se[14]/(Se[10]+1),Le=(Se[9]+1)/Se[5],it=(Se[9]-1)/Se[5],N=(Se[8]-1)/Se[0],qt=(Ce[8]+1)/Ce[0],Ye=Oe*N,ke=Oe*qt,we=ae/(-N+qt),gt=we*-N;if(ee.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(gt),q.translateZ(we),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Se[10]===-1)q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let Re=Oe+we,w=ot+we,M=Ye-gt,k=ke+(ae-gt),j=Le*ot/w*Re,K=it*ot/w*Re;q.projectionMatrix.makePerspective(M,k,j,K,Re,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ie(q,ee){ee===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ee.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ee=q.near,pe=q.far;v.texture!==null&&(v.depthNear>0&&(ee=v.depthNear),v.depthFar>0&&(pe=v.depthFar)),b.near=C.near=A.near=ee,b.far=C.far=A.far=pe,(I!==b.near||B!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),I=b.near,B=b.far),A.layers.mask=q.layers.mask|2,C.layers.mask=q.layers.mask|4,b.layers.mask=A.layers.mask|C.layers.mask;let ae=q.parent,Se=b.cameras;ie(b,ae);for(let Ce=0;Ce<Se.length;Ce++)ie(Se[Ce],ae);Se.length===2?F(b,A,C):b.projectionMatrix.copy(A.projectionMatrix),oe(q,b,ae)};function oe(q,ee,pe){pe===null?q.matrix.copy(ee.matrixWorld):(q.matrix.copy(pe.matrixWorld),q.matrix.invert(),q.matrix.multiply(ee.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ys*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let me=null;function Ne(q,ee){if(u=ee.getViewerPose(c||a),g=ee,u!==null){let pe=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let ae=!1;pe.length!==b.cameras.length&&(b.cameras.length=0,ae=!0);for(let Ce=0;Ce<pe.length;Ce++){let Oe=pe[Ce],ot=null;if(p!==null)ot=p.getViewport(Oe);else{let it=h.getViewSubImage(f,Oe);ot=it.viewport,Ce===0&&(e.setRenderTargetTextures(y,it.colorTexture,f.ignoreDepthValues?void 0:it.depthStencilTexture),e.setRenderTarget(y))}let Le=S[Ce];Le===void 0&&(Le=new Bt,Le.layers.enable(Ce),Le.viewport=new lt,S[Ce]=Le),Le.matrix.fromArray(Oe.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(Oe.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(ot.x,ot.y,ot.width,ot.height),Ce===0&&(b.matrix.copy(Le.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ae===!0&&b.cameras.push(Le)}let Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")){let Ce=h.getDepthInformation(pe[0]);Ce&&Ce.isValid&&Ce.texture&&v.init(e,Ce,s.renderState)}}for(let pe=0;pe<x.length;pe++){let ae=_[pe],Se=x[pe];ae!==null&&Se!==void 0&&Se.update(ae,ee,c||a)}me&&me(q,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}let et=new cd;et.setAnimationLoop(Ne),this.setAnimationLoop=function(q){me=q},this.dispose=function(){}}},ns=new Yn,pv=new Ie;function mv(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,ld(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,y,x,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,_)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,y,x):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===cn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===cn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let y=e.get(d),x=y.envMap,_=y.envMapRotation;x&&(m.envMap.value=x,ns.copy(_),ns.x*=-1,ns.y*=-1,ns.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),m.envMapRotation.value.setFromMatrix4(pv.makeRotationFromEuler(ns)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,y,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=x*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===cn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){let y=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gv(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){let _=x.program;n.uniformBlockBinding(y,_)}function c(y,x){let _=s[y.id];_===void 0&&(g(y),_=u(y),s[y.id]=_,y.addEventListener("dispose",m));let R=x.program;n.updateUBOMapping(y,R);let E=e.render.frame;r[y.id]!==E&&(f(y),r[y.id]=E)}function u(y){let x=h();y.__bindingPointIndex=x;let _=i.createBuffer(),R=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,R,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,_),_}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let x=s[y.id],_=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let E=0,A=_.length;E<A;E++){let C=Array.isArray(_[E])?_[E]:[_[E]];for(let S=0,b=C.length;S<b;S++){let I=C[S];if(p(I,E,S,R)===!0){let B=I.__offset,O=Array.isArray(I.value)?I.value:[I.value],G=0;for(let $=0;$<O.length;$++){let W=O[$],J=v(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,B+G,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):(W.toArray(I.__data,G),G+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,x,_,R){let E=y.value,A=x+"_"+_;if(R[A]===void 0)return typeof E=="number"||typeof E=="boolean"?R[A]=E:R[A]=E.clone(),!0;{let C=R[A];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return R[A]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(y){let x=y.uniforms,_=0,R=16;for(let A=0,C=x.length;A<C;A++){let S=Array.isArray(x[A])?x[A]:[x[A]];for(let b=0,I=S.length;b<I;b++){let B=S[b],O=Array.isArray(B.value)?B.value:[B.value];for(let G=0,$=O.length;G<$;G++){let W=O[G],J=v(W),F=_%R,ie=F%J.boundary,oe=F+ie;_+=ie,oe!==0&&R-oe<J.storage&&(_+=R-oe),B.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=J.storage}}}let E=_%R;return E>0&&(_+=R-E),y.__size=_,y.__cache={},this}function v(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){let x=y.target;x.removeEventListener("dispose",m);let _=a.indexOf(x.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function d(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}var lo=class{constructor(e={}){let{canvas:t=xp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),v=new Int32Array(4),m=null,d=null,y=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=It,this.toneMapping=Ui,this.toneMappingExposure=1;let _=this,R=!1,E=0,A=0,C=null,S=-1,b=null,I=new lt,B=new lt,O=null,G=new Me(0),$=0,W=t.width,J=t.height,F=1,ie=null,oe=null,me=new lt(0,0,W,J),Ne=new lt(0,0,W,J),et=!1,q=new kr,ee=!1,pe=!1,ae=new Ie,Se=new Ie,Ce=new P,Oe=new lt,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Le=!1;function it(){return C===null?F:1}let N=n;function qt(T,U){return t.getContext(T,U)}try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",he,!1),N===null){let U="webgl2";if(N=qt(U,T),N===null)throw qt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ye,ke,we,gt,Re,w,M,k,j,K,Y,_e,ne,ge,Ke,te,le,Ee,Pe,ve,$e,Fe,dt,D;function ue(){Ye=new L2(N),Ye.init(),Fe=new uv(N,Ye),ke=new A2(N,Ye,e,Fe),we=new ov(N,Ye),ke.reverseDepthBuffer&&f&&we.buffers.depth.setReversed(!0),gt=new U2(N),Re=new Yg,w=new cv(N,Ye,we,Re,ke,Fe,gt),M=new R2(_),k=new P2(_),j=new Vp(N),dt=new T2(N,j),K=new D2(N,j,gt,dt),Y=new O2(N,K,j,gt),Pe=new z2(N,ke,w),te=new w2(Re),_e=new jg(_,M,k,Ye,ke,dt,te),ne=new mv(_,Re),ge=new Zg,Ke=new nv(Ye),Ee=new S2(_,M,k,we,Y,p,l),le=new rv(_,Y,ke),D=new gv(N,gt,ke,we),ve=new E2(N,Ye,gt),$e=new N2(N,Ye,gt),gt.programs=_e.programs,_.capabilities=ke,_.extensions=Ye,_.properties=Re,_.renderLists=ge,_.shadowMap=le,_.state=we,_.info=gt}ue();let X=new Lc(_,N);this.xr=X,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let T=Ye.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Ye.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(T){T!==void 0&&(F=T,this.setSize(W,J,!1))},this.getSize=function(T){return T.set(W,J)},this.setSize=function(T,U,H=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=T,J=U,t.width=Math.floor(T*F),t.height=Math.floor(U*F),H===!0&&(t.style.width=T+"px",t.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(W*F,J*F).floor()},this.setDrawingBufferSize=function(T,U,H){W=T,J=U,F=H,t.width=Math.floor(T*H),t.height=Math.floor(U*H),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(me)},this.setViewport=function(T,U,H,V){T.isVector4?me.set(T.x,T.y,T.z,T.w):me.set(T,U,H,V),we.viewport(I.copy(me).multiplyScalar(F).round())},this.getScissor=function(T){return T.copy(Ne)},this.setScissor=function(T,U,H,V){T.isVector4?Ne.set(T.x,T.y,T.z,T.w):Ne.set(T,U,H,V),we.scissor(B.copy(Ne).multiplyScalar(F).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(T){we.setScissorTest(et=T)},this.setOpaqueSort=function(T){ie=T},this.setTransparentSort=function(T){oe=T},this.getClearColor=function(T){return T.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(T=!0,U=!0,H=!0){let V=0;if(T){let z=!1;if(C!==null){let se=C.texture.format;z=se===eu||se===Qc||se===Jc}if(z){let se=C.texture.type,fe=se===hi||se===cs||se===zr||se===Ws||se===$c||se===Zc,ye=Ee.getClearColor(),xe=Ee.getClearAlpha(),ze=ye.r,Ge=ye.g,be=ye.b;fe?(g[0]=ze,g[1]=Ge,g[2]=be,g[3]=xe,N.clearBufferuiv(N.COLOR,0,g)):(v[0]=ze,v[1]=Ge,v[2]=be,v[3]=xe,N.clearBufferiv(N.COLOR,0,v))}else V|=N.COLOR_BUFFER_BIT}U&&(V|=N.DEPTH_BUFFER_BIT),H&&(V|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",he,!1),ge.dispose(),Ke.dispose(),Re.dispose(),M.dispose(),k.dispose(),Y.dispose(),dt.dispose(),D.dispose(),_e.dispose(),X.dispose(),X.removeEventListener("sessionstart",hh),X.removeEventListener("sessionend",fh),Zi.stop()};function Z(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let T=gt.autoReset,U=le.enabled,H=le.autoUpdate,V=le.needsUpdate,z=le.type;ue(),gt.autoReset=T,le.enabled=U,le.autoUpdate=H,le.needsUpdate=V,le.type=z}function he(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ve(T){let U=T.target;U.removeEventListener("dispose",Ve),wt(U)}function wt(T){jt(T),Re.remove(T)}function jt(T){let U=Re.get(T).programs;U!==void 0&&(U.forEach(function(H){_e.releaseProgram(H)}),T.isShaderMaterial&&_e.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,H,V,z,se){U===null&&(U=ot);let fe=z.isMesh&&z.matrixWorld.determinant()<0,ye=a0(T,U,H,V,z);we.setMaterial(V,fe);let xe=H.index,ze=1;if(V.wireframe===!0){if(xe=K.getWireframeAttribute(H),xe===void 0)return;ze=2}let Ge=H.drawRange,be=H.attributes.position,at=Ge.start*ze,_t=(Ge.start+Ge.count)*ze;se!==null&&(at=Math.max(at,se.start*ze),_t=Math.min(_t,(se.start+se.count)*ze)),xe!==null?(at=Math.max(at,0),_t=Math.min(_t,xe.count)):be!=null&&(at=Math.max(at,0),_t=Math.min(_t,be.count));let xt=_t-at;if(xt<0||xt===1/0)return;dt.setup(z,V,ye,H,xe);let on,ut=ve;if(xe!==null&&(on=j.get(xe),ut=$e,ut.setIndex(on)),z.isMesh)V.wireframe===!0?(we.setLineWidth(V.wireframeLinewidth*it()),ut.setMode(N.LINES)):ut.setMode(N.TRIANGLES);else if(z.isLine){let Te=V.linewidth;Te===void 0&&(Te=1),we.setLineWidth(Te*it()),z.isLineSegments?ut.setMode(N.LINES):z.isLineLoop?ut.setMode(N.LINE_LOOP):ut.setMode(N.LINE_STRIP)}else z.isPoints?ut.setMode(N.POINTS):z.isSprite&&ut.setMode(N.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ut.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))ut.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Te=z._multiDrawStarts,Qn=z._multiDrawCounts,ht=z._multiDrawCount,Dn=xe?j.get(xe).bytesPerElement:1,ys=Re.get(V).currentProgram.getUniforms();for(let dn=0;dn<ht;dn++)ys.setValue(N,"_gl_DrawID",dn),ut.render(Te[dn]/Dn,Qn[dn])}else if(z.isInstancedMesh)ut.renderInstances(at,xt,z.count);else if(H.isInstancedBufferGeometry){let Te=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Qn=Math.min(H.instanceCount,Te);ut.renderInstances(at,xt,Qn)}else ut.render(at,xt)};function pt(T,U,H){T.transparent===!0&&T.side===Pt&&T.forceSinglePass===!1?(T.side=cn,T.needsUpdate=!0,xa(T,U,H),T.side=jn,T.needsUpdate=!0,xa(T,U,H),T.side=Pt):xa(T,U,H)}this.compile=function(T,U,H=null){H===null&&(H=T),d=Ke.get(H),d.init(U),x.push(d),H.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),T!==H&&T.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights();let V=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let se=z.material;if(se)if(Array.isArray(se))for(let fe=0;fe<se.length;fe++){let ye=se[fe];pt(ye,H,z),V.add(ye)}else pt(se,H,z),V.add(se)}),x.pop(),d=null,V},this.compileAsync=function(T,U,H=null){let V=this.compile(T,U,H);return new Promise(z=>{function se(){if(V.forEach(function(fe){Re.get(fe).currentProgram.isReady()&&V.delete(fe)}),V.size===0){z(T);return}setTimeout(se,10)}Ye.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Ln=null;function Jn(T){Ln&&Ln(T)}function hh(){Zi.stop()}function fh(){Zi.start()}let Zi=new cd;Zi.setAnimationLoop(Jn),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(T){Ln=T,X.setAnimationLoop(T),T===null?Zi.stop():Zi.start()},X.addEventListener("sessionstart",hh),X.addEventListener("sessionend",fh),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,U,C),d=Ke.get(T,x.length),d.init(U),x.push(d),Se.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(Se),pe=this.localClippingEnabled,ee=te.init(this.clippingPlanes,pe),m=ge.get(T,y.length),m.init(),y.push(m),X.enabled===!0&&X.isPresenting===!0){let se=_.xr.getDepthSensingMesh();se!==null&&el(se,U,-1/0,_.sortObjects)}el(T,U,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ie,oe),Le=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Le&&Ee.addToRenderList(m,T),this.info.render.frame++,ee===!0&&te.beginShadows();let H=d.state.shadowsArray;le.render(H,T,U),ee===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,z=m.transmissive;if(d.setupLights(),U.isArrayCamera){let se=U.cameras;if(z.length>0)for(let fe=0,ye=se.length;fe<ye;fe++){let xe=se[fe];ph(V,z,T,xe)}Le&&Ee.render(T);for(let fe=0,ye=se.length;fe<ye;fe++){let xe=se[fe];dh(m,T,xe,xe.viewport)}}else z.length>0&&ph(V,z,T,U),Le&&Ee.render(T),dh(m,T,U);C!==null&&(w.updateMultisampleRenderTarget(C),w.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(_,T,U),dt.resetDefaultState(),S=-1,b=null,x.pop(),x.length>0?(d=x[x.length-1],ee===!0&&te.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function el(T,U,H,V){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)H=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||q.intersectsSprite(T)){V&&Oe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Se);let fe=Y.update(T),ye=T.material;ye.visible&&m.push(T,fe,ye,H,Oe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||q.intersectsObject(T))){let fe=Y.update(T),ye=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Oe.copy(T.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Oe.copy(fe.boundingSphere.center)),Oe.applyMatrix4(T.matrixWorld).applyMatrix4(Se)),Array.isArray(ye)){let xe=fe.groups;for(let ze=0,Ge=xe.length;ze<Ge;ze++){let be=xe[ze],at=ye[be.materialIndex];at&&at.visible&&m.push(T,fe,at,H,Oe.z,be)}}else ye.visible&&m.push(T,fe,ye,H,Oe.z,null)}}let se=T.children;for(let fe=0,ye=se.length;fe<ye;fe++)el(se[fe],U,H,V)}function dh(T,U,H,V){let z=T.opaque,se=T.transmissive,fe=T.transparent;d.setupLightsView(H),ee===!0&&te.setGlobalState(_.clippingPlanes,H),V&&we.viewport(I.copy(V)),z.length>0&&ya(z,U,H),se.length>0&&ya(se,U,H),fe.length>0&&ya(fe,U,H),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function ph(T,U,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[V.id]===void 0&&(d.state.transmissionRenderTarget[V.id]=new fi(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?Zr:hi,minFilter:qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));let se=d.state.transmissionRenderTarget[V.id],fe=V.viewport||I;se.setSize(fe.z,fe.w);let ye=_.getRenderTarget();_.setRenderTarget(se),_.getClearColor(G),$=_.getClearAlpha(),$<1&&_.setClearColor(16777215,.5),_.clear(),Le&&Ee.render(H);let xe=_.toneMapping;_.toneMapping=Ui;let ze=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),d.setupLightsView(V),ee===!0&&te.setGlobalState(_.clippingPlanes,V),ya(T,H,V),w.updateMultisampleRenderTarget(se),w.updateRenderTargetMipmap(se),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let be=0,at=U.length;be<at;be++){let _t=U[be],xt=_t.object,on=_t.geometry,ut=_t.material,Te=_t.group;if(ut.side===Pt&&xt.layers.test(V.layers)){let Qn=ut.side;ut.side=cn,ut.needsUpdate=!0,mh(xt,H,V,on,ut,Te),ut.side=Qn,ut.needsUpdate=!0,Ge=!0}}Ge===!0&&(w.updateMultisampleRenderTarget(se),w.updateRenderTargetMipmap(se))}_.setRenderTarget(ye),_.setClearColor(G,$),ze!==void 0&&(V.viewport=ze),_.toneMapping=xe}function ya(T,U,H){let V=U.isScene===!0?U.overrideMaterial:null;for(let z=0,se=T.length;z<se;z++){let fe=T[z],ye=fe.object,xe=fe.geometry,ze=V===null?fe.material:V,Ge=fe.group;ye.layers.test(H.layers)&&mh(ye,U,H,xe,ze,Ge)}}function mh(T,U,H,V,z,se){T.onBeforeRender(_,U,H,V,z,se),T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(_,U,H,V,T,se),z.transparent===!0&&z.side===Pt&&z.forceSinglePass===!1?(z.side=cn,z.needsUpdate=!0,_.renderBufferDirect(H,U,V,z,T,se),z.side=jn,z.needsUpdate=!0,_.renderBufferDirect(H,U,V,z,T,se),z.side=Pt):_.renderBufferDirect(H,U,V,z,T,se),T.onAfterRender(_,U,H,V,z,se)}function xa(T,U,H){U.isScene!==!0&&(U=ot);let V=Re.get(T),z=d.state.lights,se=d.state.shadowsArray,fe=z.state.version,ye=_e.getParameters(T,z.state,se,U,H),xe=_e.getProgramCacheKey(ye),ze=V.programs;V.environment=T.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(T.isMeshStandardMaterial?k:M).get(T.envMap||V.environment),V.envMapRotation=V.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,ze===void 0&&(T.addEventListener("dispose",Ve),ze=new Map,V.programs=ze);let Ge=ze.get(xe);if(Ge!==void 0){if(V.currentProgram===Ge&&V.lightsStateVersion===fe)return vh(T,ye),Ge}else ye.uniforms=_e.getUniforms(T),T.onBeforeCompile(ye,_),Ge=_e.acquireProgram(ye,xe),ze.set(xe,Ge),V.uniforms=ye.uniforms;let be=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(be.clippingPlanes=te.uniform),vh(T,ye),V.needsLights=l0(T),V.lightsStateVersion=fe,V.needsLights&&(be.ambientLightColor.value=z.state.ambient,be.lightProbe.value=z.state.probe,be.directionalLights.value=z.state.directional,be.directionalLightShadows.value=z.state.directionalShadow,be.spotLights.value=z.state.spot,be.spotLightShadows.value=z.state.spotShadow,be.rectAreaLights.value=z.state.rectArea,be.ltc_1.value=z.state.rectAreaLTC1,be.ltc_2.value=z.state.rectAreaLTC2,be.pointLights.value=z.state.point,be.pointLightShadows.value=z.state.pointShadow,be.hemisphereLights.value=z.state.hemi,be.directionalShadowMap.value=z.state.directionalShadowMap,be.directionalShadowMatrix.value=z.state.directionalShadowMatrix,be.spotShadowMap.value=z.state.spotShadowMap,be.spotLightMatrix.value=z.state.spotLightMatrix,be.spotLightMap.value=z.state.spotLightMap,be.pointShadowMap.value=z.state.pointShadowMap,be.pointShadowMatrix.value=z.state.pointShadowMatrix),V.currentProgram=Ge,V.uniformsList=null,Ge}function gh(T){if(T.uniformsList===null){let U=T.currentProgram.getUniforms();T.uniformsList=ks.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function vh(T,U){let H=Re.get(T);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function a0(T,U,H,V,z){U.isScene!==!0&&(U=ot),w.resetTextureUnits();let se=U.fog,fe=V.isMeshStandardMaterial?U.environment:null,ye=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Qt,xe=(V.isMeshStandardMaterial?k:M).get(V.envMap||fe),ze=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ge=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),be=!!H.morphAttributes.position,at=!!H.morphAttributes.normal,_t=!!H.morphAttributes.color,xt=Ui;V.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(xt=_.toneMapping);let on=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ut=on!==void 0?on.length:0,Te=Re.get(V),Qn=d.state.lights;if(ee===!0&&(pe===!0||T!==b)){let En=T===b&&V.id===S;te.setState(V,T,En)}let ht=!1;V.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Qn.state.version||Te.outputColorSpace!==ye||z.isBatchedMesh&&Te.batching===!1||!z.isBatchedMesh&&Te.batching===!0||z.isBatchedMesh&&Te.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Te.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Te.instancing===!1||!z.isInstancedMesh&&Te.instancing===!0||z.isSkinnedMesh&&Te.skinning===!1||!z.isSkinnedMesh&&Te.skinning===!0||z.isInstancedMesh&&Te.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Te.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Te.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Te.instancingMorph===!1&&z.morphTexture!==null||Te.envMap!==xe||V.fog===!0&&Te.fog!==se||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==te.numPlanes||Te.numIntersection!==te.numIntersection)||Te.vertexAlphas!==ze||Te.vertexTangents!==Ge||Te.morphTargets!==be||Te.morphNormals!==at||Te.morphColors!==_t||Te.toneMapping!==xt||Te.morphTargetsCount!==ut)&&(ht=!0):(ht=!0,Te.__version=V.version);let Dn=Te.currentProgram;ht===!0&&(Dn=xa(V,U,z));let ys=!1,dn=!1,yr=!1,bt=Dn.getUniforms(),Wn=Te.uniforms;if(we.useProgram(Dn.program)&&(ys=!0,dn=!0,yr=!0),V.id!==S&&(S=V.id,dn=!0),ys||b!==T){we.buffers.depth.getReversed()?(ae.copy(T.projectionMatrix),Mp(ae),Sp(ae),bt.setValue(N,"projectionMatrix",ae)):bt.setValue(N,"projectionMatrix",T.projectionMatrix),bt.setValue(N,"viewMatrix",T.matrixWorldInverse);let Ti=bt.map.cameraPosition;Ti!==void 0&&Ti.setValue(N,Ce.setFromMatrixPosition(T.matrixWorld)),ke.logarithmicDepthBuffer&&bt.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&bt.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,dn=!0,yr=!0)}if(z.isSkinnedMesh){bt.setOptional(N,z,"bindMatrix"),bt.setOptional(N,z,"bindMatrixInverse");let En=z.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),bt.setValue(N,"boneTexture",En.boneTexture,w))}z.isBatchedMesh&&(bt.setOptional(N,z,"batchingTexture"),bt.setValue(N,"batchingTexture",z._matricesTexture,w),bt.setOptional(N,z,"batchingIdTexture"),bt.setValue(N,"batchingIdTexture",z._indirectTexture,w),bt.setOptional(N,z,"batchingColorTexture"),z._colorsTexture!==null&&bt.setValue(N,"batchingColorTexture",z._colorsTexture,w));let xr=H.morphAttributes;if((xr.position!==void 0||xr.normal!==void 0||xr.color!==void 0)&&Pe.update(z,H,Dn),(dn||Te.receiveShadow!==z.receiveShadow)&&(Te.receiveShadow=z.receiveShadow,bt.setValue(N,"receiveShadow",z.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Wn.envMap.value=xe,Wn.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(Wn.envMapIntensity.value=U.environmentIntensity),dn&&(bt.setValue(N,"toneMappingExposure",_.toneMappingExposure),Te.needsLights&&o0(Wn,yr),se&&V.fog===!0&&ne.refreshFogUniforms(Wn,se),ne.refreshMaterialUniforms(Wn,V,F,J,d.state.transmissionRenderTarget[T.id]),ks.upload(N,gh(Te),Wn,w)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ks.upload(N,gh(Te),Wn,w),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&bt.setValue(N,"center",z.center),bt.setValue(N,"modelViewMatrix",z.modelViewMatrix),bt.setValue(N,"normalMatrix",z.normalMatrix),bt.setValue(N,"modelMatrix",z.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let En=V.uniformsGroups;for(let Ti=0,Ei=En.length;Ti<Ei;Ti++){let _h=En[Ti];D.update(_h,Dn),D.bind(_h,Dn)}}return Dn}function o0(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function l0(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,U,H){Re.get(T.texture).__webglTexture=U,Re.get(T.depthTexture).__webglTexture=H;let V=Re.get(T);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){let H=Re.get(T);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,H=0){C=T,E=U,A=H;let V=!0,z=null,se=!1,fe=!1;if(T){let xe=Re.get(T);if(xe.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(N.FRAMEBUFFER,null),V=!1;else if(xe.__webglFramebuffer===void 0)w.setupRenderTarget(T);else if(xe.__hasExternalTextures)w.rebindTextures(T,Re.get(T.texture).__webglTexture,Re.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let be=T.depthTexture;if(xe.__boundDepthTexture!==be){if(be!==null&&Re.has(be)&&(T.width!==be.image.width||T.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(T)}}let ze=T.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(fe=!0);let Ge=Re.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ge[U])?z=Ge[U][H]:z=Ge[U],se=!0):T.samples>0&&w.useMultisampledRTT(T)===!1?z=Re.get(T).__webglMultisampledFramebuffer:Array.isArray(Ge)?z=Ge[H]:z=Ge,I.copy(T.viewport),B.copy(T.scissor),O=T.scissorTest}else I.copy(me).multiplyScalar(F).floor(),B.copy(Ne).multiplyScalar(F).floor(),O=et;if(we.bindFramebuffer(N.FRAMEBUFFER,z)&&V&&we.drawBuffers(T,z),we.viewport(I),we.scissor(B),we.setScissorTest(O),se){let xe=Re.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,xe.__webglTexture,H)}else if(fe){let xe=Re.get(T.texture),ze=U||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,xe.__webglTexture,H||0,ze)}S=-1},this.readRenderTargetPixels=function(T,U,H,V,z,se,fe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Re.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&fe!==void 0&&(ye=ye[fe]),ye){we.bindFramebuffer(N.FRAMEBUFFER,ye);try{let xe=T.texture,ze=xe.format,Ge=xe.type;if(!ke.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ke.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-V&&H>=0&&H<=T.height-z&&N.readPixels(U,H,V,z,Fe.convert(ze),Fe.convert(Ge),se)}finally{let xe=C!==null?Re.get(C).__webglFramebuffer:null;we.bindFramebuffer(N.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(T,U,H,V,z,se,fe){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Re.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&fe!==void 0&&(ye=ye[fe]),ye){let xe=T.texture,ze=xe.format,Ge=xe.type;if(!ke.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=T.width-V&&H>=0&&H<=T.height-z){we.bindFramebuffer(N.FRAMEBUFFER,ye);let be=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,be),N.bufferData(N.PIXEL_PACK_BUFFER,se.byteLength,N.STREAM_READ),N.readPixels(U,H,V,z,Fe.convert(ze),Fe.convert(Ge),0);let at=C!==null?Re.get(C).__webglFramebuffer:null;we.bindFramebuffer(N.FRAMEBUFFER,at);let _t=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await bp(N,_t,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,be),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,se),N.deleteBuffer(be),N.deleteSync(_t),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,U=null,H=0){T.isTexture!==!0&&(Cr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,T=arguments[1]);let V=Math.pow(2,-H),z=Math.floor(T.image.width*V),se=Math.floor(T.image.height*V),fe=U!==null?U.x:0,ye=U!==null?U.y:0;w.setTexture2D(T,0),N.copyTexSubImage2D(N.TEXTURE_2D,H,0,0,fe,ye,z,se),we.unbindTexture()},this.copyTextureToTexture=function(T,U,H=null,V=null,z=0){T.isTexture!==!0&&(Cr("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,T=arguments[1],U=arguments[2],z=arguments[3]||0,H=null);let se,fe,ye,xe,ze,Ge,be,at,_t,xt=T.isCompressedTexture?T.mipmaps[z]:T.image;H!==null?(se=H.max.x-H.min.x,fe=H.max.y-H.min.y,ye=H.isBox3?H.max.z-H.min.z:1,xe=H.min.x,ze=H.min.y,Ge=H.isBox3?H.min.z:0):(se=xt.width,fe=xt.height,ye=xt.depth||1,xe=0,ze=0,Ge=0),V!==null?(be=V.x,at=V.y,_t=V.z):(be=0,at=0,_t=0);let on=Fe.convert(U.format),ut=Fe.convert(U.type),Te;U.isData3DTexture?(w.setTexture3D(U,0),Te=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(w.setTexture2DArray(U,0),Te=N.TEXTURE_2D_ARRAY):(w.setTexture2D(U,0),Te=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);let Qn=N.getParameter(N.UNPACK_ROW_LENGTH),ht=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Dn=N.getParameter(N.UNPACK_SKIP_PIXELS),ys=N.getParameter(N.UNPACK_SKIP_ROWS),dn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,xt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,xt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,xe),N.pixelStorei(N.UNPACK_SKIP_ROWS,ze),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ge);let yr=T.isDataArrayTexture||T.isData3DTexture,bt=U.isDataArrayTexture||U.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let Wn=Re.get(T),xr=Re.get(U),En=Re.get(Wn.__renderTarget),Ti=Re.get(xr.__renderTarget);we.bindFramebuffer(N.READ_FRAMEBUFFER,En.__webglFramebuffer),we.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let Ei=0;Ei<ye;Ei++)yr&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Re.get(T).__webglTexture,z,Ge+Ei),T.isDepthTexture?(bt&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Re.get(U).__webglTexture,z,_t+Ei),N.blitFramebuffer(xe,ze,se,fe,be,at,se,fe,N.DEPTH_BUFFER_BIT,N.NEAREST)):bt?N.copyTexSubImage3D(Te,z,be,at,_t+Ei,xe,ze,se,fe):N.copyTexSubImage2D(Te,z,be,at,_t+Ei,xe,ze,se,fe);we.bindFramebuffer(N.READ_FRAMEBUFFER,null),we.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else bt?T.isDataTexture||T.isData3DTexture?N.texSubImage3D(Te,z,be,at,_t,se,fe,ye,on,ut,xt.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(Te,z,be,at,_t,se,fe,ye,on,xt.data):N.texSubImage3D(Te,z,be,at,_t,se,fe,ye,on,ut,xt):T.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,z,be,at,se,fe,on,ut,xt.data):T.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,z,be,at,xt.width,xt.height,on,xt.data):N.texSubImage2D(N.TEXTURE_2D,z,be,at,se,fe,on,ut,xt);N.pixelStorei(N.UNPACK_ROW_LENGTH,Qn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ht),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Dn),N.pixelStorei(N.UNPACK_SKIP_ROWS,ys),N.pixelStorei(N.UNPACK_SKIP_IMAGES,dn),z===0&&U.generateMipmaps&&N.generateMipmap(Te),we.unbindTexture()},this.copyTextureToTexture3D=function(T,U,H=null,V=null,z=0){return T.isTexture!==!0&&(Cr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,T=arguments[2],U=arguments[3],z=arguments[4]||0),Cr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,U,H,V,z)},this.initRenderTarget=function(T){Re.get(T).__webglFramebuffer===void 0&&w.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?w.setTextureCube(T,0):T.isData3DTexture?w.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?w.setTexture2DArray(T,0):w.setTexture2D(T,0),we.unbindTexture()},this.resetState=function(){E=0,A=0,C=null,we.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}},co=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Me(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var uo=class extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yn,this.environmentIntensity=1,this.environmentRotation=new Yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Hr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=gc,this.updateRanges=[],this.version=0,this.uuid=Bn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},en=new P,Vr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=On(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=On(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=On(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=On(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=On(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Rt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Mf=new P,Sf=new lt,Tf=new lt,vv=new P,Ef=new Ie,Ha=new P,Rl=new vn,Af=new Ie,Cl=new us,ho=class extends He{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Th,this.bindMatrix=new Ie,this.bindMatrixInverse=new Ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Rn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ha),this.boundingBox.expandByPoint(Ha)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new vn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ha),this.boundingSphere.expandByPoint(Ha)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rl.copy(this.boundingSphere),Rl.applyMatrix4(s),e.ray.intersectsSphere(Rl)!==!1&&(Af.copy(s).invert(),Cl.copy(e.ray).applyMatrix4(Af),!(this.boundingBox!==null&&Cl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Cl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new lt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Th?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===q0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Sf.fromBufferAttribute(s.attributes.skinIndex,e),Tf.fromBufferAttribute(s.attributes.skinWeight,e),Mf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Tf.getComponent(r);if(a!==0){let o=Sf.getComponent(r);Ef.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(vv.copy(Mf).applyMatrix4(Ef),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},Gr=class extends Et{constructor(){super(),this.isBone=!0,this.type="Bone"}},fo=class extends Wt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Kt,u=Kt,h,f){super(null,a,o,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},wf=new Ie,_v=new Ie,po=class i{constructor(e=[],t=[]){this.uuid=Bn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ie)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ie;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:_v;wf.multiplyMatrices(o,t[r]),wf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new fo(t,e,e,wn,Fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Gr),this.bones.push(a),this.boneInverses.push(new Ie().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},di=class extends Rt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ns=new Ie,Rf=new Ie,Va=[],Cf=new Rn,yv=new Ie,Er=new He,Ar=new vn,hs=class extends He{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new di(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,yv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Rn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ns),Cf.copy(e.boundingBox).applyMatrix4(Ns),this.boundingBox.union(Cf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new vn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ns),Ar.copy(e.boundingSphere).applyMatrix4(Ns),this.boundingSphere.union(Ar)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Er.geometry=this.geometry,Er.material=this.material,Er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ar.copy(this.boundingSphere),Ar.applyMatrix4(n),e.ray.intersectsSphere(Ar)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ns),Rf.multiplyMatrices(n,Ns),Er.matrixWorld=Rf,Er.raycast(e,Va);for(let a=0,o=Va.length;a<o;a++){let l=Va[a];l.instanceId=r,l.object=this,t.push(l)}Va.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new di(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new fo(new Float32Array(s*this.count),s,this.count,Kc,Fn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Jt=class extends _n{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},mo=new P,go=new P,If=new Ie,wr=new us,Ga=new vn,Il=new P,Pf=new P,kn=class extends Et{constructor(e=new ct,t=new Jt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)mo.fromBufferAttribute(t,s-1),go.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=mo.distanceTo(go);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(s),Ga.radius+=r,e.ray.intersectsSphere(Ga)===!1)return;If.copy(s).invert(),wr.copy(e.ray).applyMatrix4(If);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=c){let d=u.getX(v),y=u.getX(v+1),x=Wa(this,e,wr,l,d,y);x&&t.push(x)}if(this.isLineLoop){let v=u.getX(g-1),m=u.getX(p),d=Wa(this,e,wr,l,v,m);d&&t.push(d)}}else{let p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=c){let d=Wa(this,e,wr,l,v,v+1);d&&t.push(d)}if(this.isLineLoop){let v=Wa(this,e,wr,l,g-1,p);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Wa(i,e,t,n,s,r){let a=i.geometry.attributes.position;if(mo.fromBufferAttribute(a,s),go.fromBufferAttribute(a,r),t.distanceSqToSegment(mo,go,Il,Pf)>n)return;Il.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Il);if(!(l<e.near||l>e.far))return{distance:l,point:Pf.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Lf=new P,Df=new P,pi=class extends kn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Lf.fromBufferAttribute(t,s),Df.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Lf.distanceTo(Df);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Fi=class extends kn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Wr=class extends _n{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Nf=new Ie,Dc=new us,Xa=new vn,qa=new P,vo=class extends Et{constructor(e=new ct,t=new Wr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xa.copy(n.boundingSphere),Xa.applyMatrix4(s),Xa.radius+=r,e.ray.intersectsSphere(Xa)===!1)return;Nf.copy(s).invert(),Dc.copy(e.ray).applyMatrix4(Nf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,v=p;g<v;g++){let m=c.getX(g);qa.fromBufferAttribute(h,m),Uf(qa,m,l,s,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=f,v=p;g<v;g++)qa.fromBufferAttribute(h,g),Uf(qa,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Uf(i,e,t,n,s,r,a){let o=Dc.distanceSqToPoint(i);if(o<t){let l=new P;Dc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Xr=class extends Wt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var qr=class i extends ct{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new P,u=new Be;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){let p=n+h/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(o,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Ks=class i extends ct{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],p=[],g=0,v=[],m=n/2,d=0;y(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new st(h,3)),this.setAttribute("normal",new st(f,3)),this.setAttribute("uv",new st(p,2));function y(){let _=new P,R=new P,E=0,A=(t-e)/n;for(let C=0;C<=r;C++){let S=[],b=C/r,I=b*(t-e)+e;for(let B=0;B<=s;B++){let O=B/s,G=O*l+o,$=Math.sin(G),W=Math.cos(G);R.x=I*$,R.y=-b*n+m,R.z=I*W,h.push(R.x,R.y,R.z),_.set($,A,W).normalize(),f.push(_.x,_.y,_.z),p.push(O,1-b),S.push(g++)}v.push(S)}for(let C=0;C<s;C++)for(let S=0;S<r;S++){let b=v[S][C],I=v[S+1][C],B=v[S+1][C+1],O=v[S][C+1];(e>0||S!==0)&&(u.push(b,I,O),E+=3),(t>0||S!==r-1)&&(u.push(I,B,O),E+=3)}c.addGroup(d,E,0),d+=E}function x(_){let R=g,E=new Be,A=new P,C=0,S=_===!0?e:t,b=_===!0?1:-1;for(let B=1;B<=s;B++)h.push(0,m*b,0),f.push(0,b,0),p.push(.5,.5),g++;let I=g;for(let B=0;B<=s;B++){let G=B/s*l+o,$=Math.cos(G),W=Math.sin(G);A.x=S*W,A.y=m*b,A.z=S*$,h.push(A.x,A.y,A.z),f.push(0,b,0),E.x=$*.5+.5,E.y=W*.5*b+.5,p.push(E.x,E.y),g++}for(let B=0;B<s;B++){let O=R+B,G=I+B;_===!0?u.push(G,G+1,O):u.push(G+1,G,O),C+=3}c.addGroup(d,C,_===!0?1:2),d+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Nc=class i extends ct{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new st(r,3)),this.setAttribute("normal",new st(r.slice(),3)),this.setAttribute("uv",new st(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let x=new P,_=new P,R=new P;for(let E=0;E<t.length;E+=3)p(t[E+0],x),p(t[E+1],_),p(t[E+2],R),l(x,_,R,y)}function l(y,x,_,R){let E=R+1,A=[];for(let C=0;C<=E;C++){A[C]=[];let S=y.clone().lerp(_,C/E),b=x.clone().lerp(_,C/E),I=E-C;for(let B=0;B<=I;B++)B===0&&C===E?A[C][B]=S:A[C][B]=S.clone().lerp(b,B/I)}for(let C=0;C<E;C++)for(let S=0;S<2*(E-C)-1;S++){let b=Math.floor(S/2);S%2===0?(f(A[C][b+1]),f(A[C+1][b]),f(A[C][b])):(f(A[C][b+1]),f(A[C+1][b+1]),f(A[C+1][b]))}}function c(y){let x=new P;for(let _=0;_<r.length;_+=3)x.x=r[_+0],x.y=r[_+1],x.z=r[_+2],x.normalize().multiplyScalar(y),r[_+0]=x.x,r[_+1]=x.y,r[_+2]=x.z}function u(){let y=new P;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];let _=m(y)/2/Math.PI+.5,R=d(y)/Math.PI+.5;a.push(_,1-R)}g(),h()}function h(){for(let y=0;y<a.length;y+=6){let x=a[y+0],_=a[y+2],R=a[y+4],E=Math.max(x,_,R),A=Math.min(x,_,R);E>.9&&A<.1&&(x<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),R<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function p(y,x){let _=y*3;x.x=e[_+0],x.y=e[_+1],x.z=e[_+2]}function g(){let y=new P,x=new P,_=new P,R=new P,E=new Be,A=new Be,C=new Be;for(let S=0,b=0;S<r.length;S+=9,b+=6){y.set(r[S+0],r[S+1],r[S+2]),x.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),E.set(a[b+0],a[b+1]),A.set(a[b+2],a[b+3]),C.set(a[b+4],a[b+5]),R.copy(y).add(x).add(_).divideScalar(3);let I=m(R);v(E,b+0,y,I),v(A,b+2,x,I),v(C,b+4,_,I)}}function v(y,x,_,R){R<0&&y.x===1&&(a[x]=y.x-1),_.x===0&&_.z===0&&(a[x]=R/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function d(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Js=class i extends Nc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var fs=class i extends ct{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],h=e,f=(t-e)/s,p=new P,g=new Be;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){let d=r+m/n*a;p.x=h*Math.cos(d),p.y=h*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}h+=f}for(let v=0;v<s;v++){let m=v*(n+1);for(let d=0;d<n;d++){let y=d+m,x=y,_=y+n+1,R=y+n+2,E=y+1;o.push(x,_,E),o.push(_,R,E)}}this.setIndex(o),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Qs=class i extends ct{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],h=new P,f=new P,p=[],g=[],v=[],m=[];for(let d=0;d<=n;d++){let y=[],x=d/n,_=0;d===0&&a===0?_=.5/t:d===n&&l===Math.PI&&(_=-.5/t);for(let R=0;R<=t;R++){let E=R/t;h.x=-e*Math.cos(s+E*r)*Math.sin(a+x*o),h.y=e*Math.cos(a+x*o),h.z=e*Math.sin(s+E*r)*Math.sin(a+x*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),m.push(E+_,1-x),y.push(c++)}u.push(y)}for(let d=0;d<n;d++)for(let y=0;y<t;y++){let x=u[d][y+1],_=u[d][y],R=u[d+1][y],E=u[d+1][y+1];(d!==0||a>0)&&p.push(x,_,E),(d!==n-1||l<Math.PI)&&p.push(_,R,E)}this.setIndex(p),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(v,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var jr=class extends ct{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,s=new P,r=new P;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let h=l[c],f=h.start,p=h.count;for(let g=f,v=f+p;g<v;g+=3)for(let m=0;m<3;m++){let d=o.getX(g+m),y=o.getX(g+(m+1)%3);s.fromBufferAttribute(a,d),r.fromBufferAttribute(a,y),zf(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let u=3*o+c,h=3*o+(c+1)%3;s.fromBufferAttribute(a,u),r.fromBufferAttribute(a,h),zf(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new st(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function zf(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}var yn=class extends _n{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=id,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},xn=class extends yn{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function ja(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function xv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function bv(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Of(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function pd(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Bi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Uc=class extends Bi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Eh,endingEnd:Eh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ah:r=e,o=2*t-n;break;case wh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ah:a=e,l=2*n-t;break;case wh:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,d=-f*m+2*f*v-f*g,y=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,x=(-1-p)*m+(1.5+p)*v+.5*g,_=p*m-p*v;for(let R=0;R!==o;++R)r[R]=d*a[u+R]+y*a[c+R]+x*a[l+R]+_*a[h+R];return r}},zc=class extends Bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*h+a[l+f]*u;return r}},Oc=class extends Bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Cn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ja(t,this.TimeBufferType),this.values=ja(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ja(e.times,Array),values:ja(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Uc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case qs:t=this.InterpolantFactoryMethodDiscrete;break;case js:t=this.InterpolantFactoryMethodLinear;break;case tl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qs;case this.InterpolantFactoryMethodLinear:return js;case this.InterpolantFactoryMethodSmooth:return tl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&xv(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===tl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let h=o*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){let v=t[h+g];if(v!==t[f+g]||v!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=js;var ki=class extends Cn{constructor(e,t,n){super(e,t,n)}};ki.prototype.ValueTypeName="bool";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=qs;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var _o=class extends Cn{};_o.prototype.ValueTypeName="color";var mi=class extends Cn{};mi.prototype.ValueTypeName="number";var Fc=class extends Bi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)gn.slerpFlat(r,0,a,c-o,a,c,l);return r}},gi=class extends Cn{InterpolantFactoryMethodLinear(e){return new Fc(this.times,this.values,this.getValueSize(),e)}};gi.prototype.ValueTypeName="quaternion";gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Hi=class extends Cn{constructor(e,t,n){super(e,t,n)}};Hi.prototype.ValueTypeName="string";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=qs;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var vi=class extends Cn{};vi.prototype.ValueTypeName="vector";var yo=class{constructor(e="",t=-1,n=[],s=j0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Bn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Sv(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Cn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let u=bv(l);l=Of(l,1,u),c=Of(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new mi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c.name.match(r);if(u&&u.length>1){let h=u[1],f=s[h];f||(s[h]=f=[]),f.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,f,p,g,v){if(p.length!==0){let m=[],d=[];pd(p,m,d,g),m.length!==0&&v.push(new h(f,m,d))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let p={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let v=0;v<f[g].morphTargets.length;v++)p[f[g].morphTargets[v]]=-1;for(let v in p){let m=[],d=[];for(let y=0;y!==f[g].morphTargets.length;++y){let x=f[g];m.push(x.time),d.push(x.morphTarget===v?1:0)}s.push(new mi(".morphTargetInfluence["+v+"]",m,d))}l=p.length*a}else{let p=".bones["+t[h].name+"]";n(vi,p+".position",f,"pos",s),n(gi,p+".quaternion",f,"rot",s),n(vi,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Mv(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return mi;case"vector":case"vector2":case"vector3":case"vector4":return vi;case"color":return _o;case"quaternion":return gi;case"bool":case"boolean":return ki;case"string":return Hi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Sv(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Mv(i.type);if(i.times===void 0){let t=[],n=[];pd(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Di={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Bc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}},Tv=new Bc,_i=class{constructor(e){this.manager=e!==void 0?e:Tv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};_i.DEFAULT_MATERIAL_NAME="__DEFAULT";var ri={},kc=class extends Error{constructor(e,t){super(e),this.response=t}},Yr=class extends _i{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Di.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ri[e]!==void 0){ri[e].push({onLoad:t,onProgress:n,onError:s});return}ri[e]=[],ri[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=ri[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0,v=0,m=new ReadableStream({start(d){y();function y(){h.read().then(({done:x,value:_})=>{if(x)d.close();else{v+=_.byteLength;let R=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let E=0,A=u.length;E<A;E++){let C=u[E];C.onProgress&&C.onProgress(R)}d.enqueue(_),y()}},x=>{d.error(x)})}}});return new Response(m)}else throw new kc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Di.add(e,c);let u=ri[e];delete ri[e];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{let u=ri[e];if(u===void 0)throw this.manager.itemError(e),c;delete ri[e];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Hc=class extends _i{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Di.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Or("img");function l(){u(),Di.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var xo=class extends _i{constructor(e){super(e)}load(e,t,n,s){let r=new Wt,a=new Hc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},er=class extends Et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},bo=class extends er{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Pl=new Ie,Ff=new P,Bf=new P,$r=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kr,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ff.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ff),Bf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bf),t.updateMatrixWorld(),Pl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Pl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Pl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Vc=class extends $r{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Ys*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Mo=class extends er{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Vc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},kf=new Ie,Rr=new P,Ll=new P,Gc=class extends $r{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Be(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Rr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Rr),Ll.copy(n.position),Ll.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ll),n.updateMatrixWorld(),s.makeTranslation(-Rr.x,-Rr.y,-Rr.z),kf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kf)}},So=class extends er{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Gc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Wc=class extends $r{constructor(){super(new Zs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},tr=class extends er{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new Wc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Vi=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var To=class extends _i{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Di.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Di.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Di.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Di.add(e,l),r.manager.itemStart(e)}};var Eo=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Hf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Hf();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Hf(){return performance.now()}var su="\\[\\]\\.:\\/",Ev=new RegExp("["+su+"]","g"),ru="[^"+su+"]",Av="[^"+su.replace("\\.","")+"]",wv=/((?:WC+[\/:])*)/.source.replace("WC",ru),Rv=/(WCOD+)?/.source.replace("WCOD",Av),Cv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ru),Iv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ru),Pv=new RegExp("^"+wv+Rv+Cv+Iv+"$"),Lv=["material","materials","bones","map"],Xc=class{constructor(e,t,n){let s=n||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},yt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ev,"")}static parseTrackName(e){let t=Pv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Lv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};yt.Composite=Xc;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var w_=new Float32Array(1);var Vf=new Ie,Ao=class{constructor(e,t,n=0,s=1/0){this.ray=new us(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Fr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Vf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vf),this}intersectObject(e,t=!0,n=[]){return qc(e,this,n,t),n.sort(Gf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)qc(e[s],this,n,t);return n.sort(Gf),n}};function Gf(i,e){return i.distance-e.distance}function qc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)qc(r[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");function au(i,e){if(e===nd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Kr||e===Ro){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Kr)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Po=class extends _i{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new du(t)}),this.register(function(t){return new pu(t)}),this.register(function(t){return new Su(t)}),this.register(function(t){return new Tu(t)}),this.register(function(t){return new Eu(t)}),this.register(function(t){return new gu(t)}),this.register(function(t){return new vu(t)}),this.register(function(t){return new _u(t)}),this.register(function(t){return new yu(t)}),this.register(function(t){return new fu(t)}),this.register(function(t){return new xu(t)}),this.register(function(t){return new mu(t)}),this.register(function(t){return new Mu(t)}),this.register(function(t){return new bu(t)}),this.register(function(t){return new uu(t)}),this.register(function(t){return new Au(t)}),this.register(function(t){return new wu(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Vi.extractUrlBase(e);a=Vi.resolveURL(c,this.path)}else a=Vi.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Yr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===yd){try{a[Ze.KHR_BINARY_GLTF]=new Ru(e)}catch(h){s&&s(h);return}r=JSON.parse(a[Ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Uu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case Ze.KHR_MATERIALS_UNLIT:a[h]=new hu;break;case Ze.KHR_DRACO_MESH_COMPRESSION:a[h]=new Cu(r,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:a[h]=new Iu;break;case Ze.KHR_MESH_QUANTIZATION:a[h]=new Pu;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function Nv(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},uu=class{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Me(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Qt);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new tr(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new So(u),c.distance=h;break;case"spot":c=new Mo(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,yi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},hu=class{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return Lt}extendParams(e,t,n){let s=[];e.color=new Me(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Qt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,It))}return Promise.all(s)}},fu=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},du=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Be(o,o)}return Promise.all(r)}},pu=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},mu=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},gu=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Me(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Qt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,It)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},vu=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},_u=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Me().setRGB(o[0],o[1],o[2],Qt),Promise.all(r)}},yu=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},xu=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Me().setRGB(o[0],o[1],o[2],Qt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,It)),Promise.all(r)}},bu=class{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Mu=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},Su=class{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Tu=class{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Eu=class{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Au=class{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(p),u,h,f,s.mode,s.filter),p})})}else return null}},wu=class{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==In.TRIANGLES&&c.mode!==In.TRIANGLE_STRIP&&c.mode!==In.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,p=[];for(let g of h){let v=new Ie,m=new P,d=new gn,y=new P(1,1,1),x=new hs(g.geometry,g.material,f);for(let _=0;_<f;_++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&d.fromBufferAttribute(l.ROTATION,_),l.SCALE&&y.fromBufferAttribute(l.SCALE,_),x.setMatrixAt(_,v.compose(m,d,y));for(let _ in l)if(_==="_COLOR_0"){let R=l[_];x.instanceColor=new di(R.array,R.itemSize,R.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,l[_]);Et.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),p.push(x)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}},yd="glTF",Jr=12,md={JSON:1313821514,BIN:5130562},Ru=class{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Jr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==yd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Jr,r=new DataView(e,Jr),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===md.JSON){let c=new Uint8Array(e,Jr+a,o);this.content=n.decode(c)}else if(l===md.BIN){let c=Jr+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Cu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let u in a){let h=Du[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=Du[u]||u.toLowerCase();if(a[u]!==void 0){let f=n.accessors[e.attributes[u]],p=ir[f.componentType];c[h]=p.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(p){for(let g in p.attributes){let v=p.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}h(p)},o,c,Qt,f)})})}},Iu=class{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Pu=class{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}},Lo=class extends Bi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=s-t,h=(n-t)/u,f=h*h,p=f*h,g=e*c,v=g-c,m=-2*p+3*f,d=p-f,y=1-m,x=d-f+h;for(let _=0;_!==o;_++){let R=a[v+_+o],E=a[v+_+l]*u,A=a[g+_+o],C=a[g+_]*u;r[_]=y*R+x*E+m*A+d*C}return r}},Uv=new gn,Lu=class extends Lo{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return Uv.fromArray(r).normalize().toArray(r),r}},In={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ir={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},gd={9728:Kt,9729:ln,9984:jc,9985:Pr,9986:Us,9987:qn},vd={33071:li,33648:Ur,10497:ls},ou={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Du={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Gi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},zv={CUBICSPLINE:void 0,LINEAR:js,STEP:qs},lu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ov(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new yn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:jn})),i.DefaultMaterial}function ds(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function yi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Fv(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(f)}if(s){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(f)}if(r){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function Bv(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function kv(i){let e,t=i.extensions&&i.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+cu(t.attributes):e=i.indices+":"+cu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+cu(i.targets[n]);return e}function cu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Nu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Hv(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Vv=new Ie,Uu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Nv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new xo(this.options.manager):this.textureLoader=new To(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Yr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return ds(r,o,s),yi(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,u]of a.children.entries())r(u,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Vi.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=ou[s.type],o=ir[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Rt(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=ou[s.type],c=ir[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,v,m;if(p&&p!==h){let d=Math.floor(f/p),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count,x=t.cache.get(y);x||(v=new c(o,d*p,s.count*p/u),x=new Hr(v,p/u),t.cache.add(y,x)),m=new Vr(x,l,f%p/u,g)}else o===null?v=new c(s.count*l):v=new c(o,f,s.count*l),m=new Rt(v,l,g);if(s.sparse!==void 0){let d=ou.SCALAR,y=ir[s.sparse.indices.componentType],x=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,R=new y(a[1],x,s.sparse.count*d),E=new c(a[2],_,s.sparse.count*l);o!==null&&(m=new Rt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,C=R.length;A<C;A++){let S=R[A];if(m.setX(S,E[A*l]),l>=2&&m.setY(S,E[A*l+1]),l>=3&&m.setZ(S,E[A*l+2]),l>=4&&m.setW(S,E[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let f=(r.samplers||{})[a.sampler]||{};return u.magFilter=gd[f.magFilter]||ln,u.minFilter=gd[f.minFilter]||qn,u.wrapS=vd[f.wrapS]||ls,u.wrapT=vd[f.wrapT]||ls,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Kt&&u.minFilter!==ln,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;let f=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(v){let m=new Wt(v);m.needsUpdate=!0,f(m)}),t.load(Vi.resolveURL(h,r.path),g,void 0,p)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),yi(h,a),h.userData.mimeType=a.mimeType||Hv(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ze.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Wr,_n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Jt,_n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return yn}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[Ze.KHR_MATERIALS_UNLIT]){let h=s[Ze.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{let h=r.pbrMetallicRoughness||{};if(o.color=new Me(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Qt),o.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,It)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Pt);let u=r.alphaMode||lu.OPAQUE;if(u===lu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===lu.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Lt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Be(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==Lt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Lt){let h=r.emissiveFactor;o.emissive=new Me().setRGB(h[0],h[1],h[2],Qt)}return r.emissiveTexture!==void 0&&a!==Lt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,It)),Promise.all(c).then(function(){let h=new a(o);return r.name&&(h.name=r.name),yi(h,r),t.associations.set(h,{materials:e}),r.extensions&&ds(s,h,r),h})}createUniqueName(e){let t=yt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return _d(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],u=kv(c),h=s[u];if(h)a.push(h.promise);else{let f;c.extensions&&c.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=_d(new ct,c,t),s[u]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let u=a[l].material===void 0?Ov(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,g=u.length;p<g;p++){let v=u[p],m=a[p],d,y=c[p];if(m.mode===In.TRIANGLES||m.mode===In.TRIANGLE_STRIP||m.mode===In.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new ho(v,y):new He(v,y),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===In.TRIANGLE_STRIP?d.geometry=au(d.geometry,Ro):m.mode===In.TRIANGLE_FAN&&(d.geometry=au(d.geometry,Kr));else if(m.mode===In.LINES)d=new pi(v,y);else if(m.mode===In.LINE_STRIP)d=new kn(v,y);else if(m.mode===In.LINE_LOOP)d=new Fi(v,y);else if(m.mode===In.POINTS)d=new vo(v,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&Bv(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),yi(d,r),m.extensions&&ds(s,d,m),t.assignFinalMaterial(d),h.push(d)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return r.extensions&&ds(s,h[0],r),h[0];let f=new Mt;r.extensions&&ds(s,f,r),t.associations.set(f,{meshes:e});for(let p=0,g=h.length;p<g;p++)f.add(h[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Bt(rd.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Zs(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),yi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,u=a.length;c<u;c++){let h=a[c];if(h){o.push(h);let f=new Ie;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new po(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){let p=s.channels[h],g=s.samplers[p.sampler],v=p.target,m=v.node,d=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",d)),l.push(this.getDependency("accessor",y)),c.push(g),u.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],p=h[1],g=h[2],v=h[3],m=h[4],d=[];for(let y=0,x=f.length;y<x;y++){let _=f[y],R=p[y],E=g[y],A=v[y],C=m[y];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let S=n._createAnimationTracks(_,R,E,A,C);if(S)for(let b=0;b<S.length;b++)d.push(S[b])}return new yo(r,void 0,d)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,Vv)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new Gr:c.length>1?u=new Mt:c.length===1?u=c[0]:u=new Et,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),yi(u,r),r.extensions&&ds(n,u,r),r.matrix!==void 0){let h=new Ie;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Mt;n.name&&(r.name=s.createUniqueName(n.name)),yi(r,n),n.extensions&&ds(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[f,p]of s.associations)(f instanceof _n||f instanceof Wt)&&h.set(f,p);return u.traverse(f=>{let p=s.associations.get(f);p!=null&&h.set(f,p)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];Gi[r.path]===Gi.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let c;switch(Gi[r.path]){case Gi.weights:c=mi;break;case Gi.rotation:c=gi;break;case Gi.position:case Gi.scale:c=vi;break;default:n.itemSize===1?c=mi:c=vi;break}let u=s.interpolation!==void 0?zv[s.interpolation]:js,h=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){let g=new c(l[f]+"."+Gi[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Nu(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof gi?Lu:Lo;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Gv(i,e,t){let n=e.attributes,s=new Rn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),o.normalized){let u=Nu(ir[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new P,l=new P;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){let v=Nu(ir[f.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new vn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function _d(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=Du[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Je.workingColorSpace!==Qt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),yi(i,e),Gv(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Fv(i,e.targets,t):i})}var Qr={radius:2.5,points:[0,0,2.5,0,1.3889,2.0787,0,2.0787,1.3889,0,2.452,.4877,0,2.5,0,0,2.452,-.4877,0,2.0787,-1.3889,0,0,-2.5,.0952,.4784,2.452,.1866,.9383,2.3097,.271,1.3622,2.0787,.3449,1.7338,1.7678,.4055,2.0387,1.3889,.4506,2.2653,.9567,.4784,2.4048,.4877,.4877,2.452,0,.4784,2.4048,-.4877,.4506,2.2653,-.9567,.4055,2.0387,-1.3889,.3449,1.7338,-1.7678,.271,1.3622,-2.0787,.1866,.9383,-2.3097,.0952,.4784,-2.452,.1866,.4506,2.452,.3661,.8839,2.3097,.5315,1.2832,2.0787,.6765,1.6332,1.7678,.7955,1.9204,1.3889,.8839,2.1339,.9567,.9383,2.2653,.4877,.9567,2.3097,0,.9383,2.2653,-.4877,.8839,2.1339,-.9567,.7955,1.9204,-1.3889,.6765,1.6332,-1.7678,.5315,1.2832,-2.0787,.3661,.8839,-2.3097,.1866,.4506,-2.452,.271,.4055,2.452,.5315,.7955,2.3097,.7716,1.1548,2.0787,.9821,1.4698,1.7678,1.1548,1.7284,1.3889,1.2832,1.9204,.9567,1.3622,2.0387,.4877,1.3889,2.0787,0,1.3622,2.0387,-.4877,1.2832,1.9204,-.9567,1.1548,1.7284,-1.3889,.9821,1.4698,-1.7678,.7716,1.1548,-2.0787,.5315,.7955,-2.3097,.271,.4055,-2.452,.3449,.3449,2.452,.6765,.6765,2.3097,.9821,.9821,2.0787,1.25,1.25,1.7678,1.4698,1.4698,1.3889,1.6332,1.6332,.9567,1.7338,1.7338,.4877,1.7678,1.7678,0,1.7338,1.7338,-.4877,1.6332,1.6332,-.9567,1.4698,1.4698,-1.3889,1.25,1.25,-1.7678,.9821,.9821,-2.0787,.6765,.6765,-2.3097,.3449,.3449,-2.452,.4055,.271,2.452,.7955,.5315,2.3097,1.1548,.7716,2.0787,1.4698,.9821,1.7678,1.7284,1.1548,1.3889,1.9204,1.2832,.9567,2.0387,1.3622,.4877,2.0787,1.3889,0,2.0387,1.3622,-.4877,1.9204,1.2832,-.9567,1.7284,1.1548,-1.3889,1.4698,.9821,-1.7678,1.1548,.7716,-2.0787,.7955,.5315,-2.3097,.4055,.271,-2.452,.4506,.1866,2.452,.8839,.3661,2.3097,1.2832,.5315,2.0787,1.6332,.6765,1.7678,1.9204,.7955,1.3889,2.1339,.8839,.9567,2.2653,.9383,.4877,2.3097,.9567,0,2.2653,.9383,-.4877,2.1339,.8839,-.9567,1.9204,.7955,-1.3889,1.6332,.6765,-1.7678,1.2832,.5315,-2.0787,.8839,.3661,-2.3097,.4506,.1866,-2.452,.4784,.0952,2.452,.9383,.1866,2.3097,1.3622,.271,2.0787,1.7338,.3449,1.7678,2.0387,.4055,1.3889,2.2653,.4506,.9567,2.4048,.4784,.4877,2.452,.4877,0,2.4048,.4784,-.4877,2.2653,.4506,-.9567,2.0387,.4055,-1.3889,1.7338,.3449,-1.7678,1.3622,.271,-2.0787,.9383,.1866,-2.3097,.4784,.0952,-2.452,.4877,-0,2.452,.9567,-0,2.3097,1.3889,-0,2.0787,1.7678,0,1.7678,2.0787,-0,1.3889,2.3097,0,.9567,2.452,-0,.4877,2.5,-0,0,2.452,-0,-.4877,2.3097,0,-.9567,2.0787,-0,-1.3889,1.7678,0,-1.7678,1.3889,-0,-2.0787,.9567,-0,-2.3097,.4877,-0,-2.452,.4784,-.0952,2.452,.9383,-.1866,2.3097,1.3622,-.271,2.0787,1.7338,-.3449,1.7678,2.0387,-.4055,1.3889,2.2653,-.4506,.9567,2.4048,-.4784,.4877,2.452,-.4877,0,2.4048,-.4784,-.4877,2.2653,-.4506,-.9567,2.0387,-.4055,-1.3889,1.7338,-.3449,-1.7678,1.3622,-.271,-2.0787,.9383,-.1866,-2.3097,.4784,-.0952,-2.452,.4506,-.1866,2.452,.8839,-.3661,2.3097,1.2832,-.5315,2.0787,1.6332,-.6765,1.7678,1.9204,-.7955,1.3889,2.1339,-.8839,.9567,2.2653,-.9383,.4877,2.3097,-.9567,0,2.2653,-.9383,-.4877,2.1339,-.8839,-.9567,1.9204,-.7955,-1.3889,1.6332,-.6765,-1.7678,1.2832,-.5315,-2.0787,.8839,-.3661,-2.3097,.4506,-.1866,-2.452,.4055,-.271,2.452,.7955,-.5315,2.3097,1.1548,-.7716,2.0787,1.4698,-.9821,1.7678,1.7284,-1.1548,1.3889,1.9204,-1.2832,.9567,2.0387,-1.3622,.4877,2.0787,-1.3889,0,2.0387,-1.3622,-.4877,1.9204,-1.2832,-.9567,1.7284,-1.1548,-1.3889,1.4698,-.9821,-1.7678,1.1548,-.7716,-2.0787,.7955,-.5315,-2.3097,.4055,-.271,-2.452,.3449,-.3449,2.452,.6765,-.6765,2.3097,.9821,-.9821,2.0787,1.25,-1.25,1.7678,1.4698,-1.4698,1.3889,1.6332,-1.6332,.9567,1.7338,-1.7338,.4877,1.7678,-1.7678,0,1.7338,-1.7338,-.4877,1.6332,-1.6332,-.9567,1.4698,-1.4698,-1.3889,1.25,-1.25,-1.7678,.9821,-.9821,-2.0787,.6765,-.6765,-2.3097,.3449,-.3449,-2.452,.271,-.4055,2.452,.5315,-.7955,2.3097,.7716,-1.1548,2.0787,.9821,-1.4698,1.7678,1.1548,-1.7284,1.3889,1.2832,-1.9204,.9567,1.3622,-2.0387,.4877,1.3889,-2.0787,0,1.3622,-2.0387,-.4877,1.2832,-1.9204,-.9567,1.1548,-1.7284,-1.3889,.9821,-1.4698,-1.7678,.7716,-1.1548,-2.0787,.5315,-.7955,-2.3097,.271,-.4055,-2.452,.1866,-.4506,2.452,.3661,-.8839,2.3097,.5315,-1.2832,2.0787,.6765,-1.6332,1.7678,.7955,-1.9204,1.3889,.8839,-2.1339,.9567,.9383,-2.2653,.4877,.9567,-2.3097,0,.9383,-2.2653,-.4877,.8839,-2.1339,-.9567,.7955,-1.9204,-1.3889,.6765,-1.6332,-1.7678,.5315,-1.2832,-2.0787,.3661,-.8839,-2.3097,.1866,-.4506,-2.452,.0952,-.4784,2.452,.1866,-.9383,2.3097,.271,-1.3622,2.0787,.3449,-1.7338,1.7678,.4055,-2.0387,1.3889,.4506,-2.2653,.9567,.4784,-2.4048,.4877,.4877,-2.452,0,.4784,-2.4048,-.4877,.4506,-2.2653,-.9567,.4055,-2.0387,-1.3889,.3449,-1.7338,-1.7678,.271,-1.3622,-2.0787,.1866,-.9383,-2.3097,.0952,-.4784,-2.452,-0,-.4877,2.452,-0,-.9567,2.3097,-0,-1.3889,2.0787,-0,-1.7678,1.7678,-0,-2.0787,1.3889,0,-2.3097,.9567,-0,-2.452,.4877,-0,-2.5,0,-0,-2.452,-.4877,0,-2.3097,-.9567,-0,-2.0787,-1.3889,-0,-1.7678,-1.7678,-0,-1.3889,-2.0787,-0,-.9567,-2.3097,-0,-.4877,-2.452,-.0952,-.4784,2.452,-.1866,-.9383,2.3097,-.271,-1.3622,2.0787,-.3449,-1.7338,1.7678,-.4055,-2.0387,1.3889,-.4506,-2.2653,.9567,-.4784,-2.4048,.4877,-.4877,-2.452,0,-.4784,-2.4048,-.4877,-.4506,-2.2653,-.9567,-.4055,-2.0387,-1.3889,-.3449,-1.7338,-1.7678,-.271,-1.3622,-2.0787,-.1866,-.9383,-2.3097,-.0952,-.4784,-2.452,-.1866,-.4506,2.452,-.3661,-.8839,2.3097,-.5315,-1.2832,2.0787,-.6765,-1.6332,1.7678,-.7955,-1.9204,1.3889,-.8839,-2.1339,.9567,-.9383,-2.2653,.4877,-.9567,-2.3097,0,-.9383,-2.2653,-.4877,-.8839,-2.1339,-.9567,-.7955,-1.9204,-1.3889,-.6765,-1.6332,-1.7678,-.5315,-1.2832,-2.0787,-.3661,-.8839,-2.3097,-.1866,-.4506,-2.452,-.271,-.4055,2.452,-.5315,-.7955,2.3097,-.7716,-1.1548,2.0787,-.9821,-1.4698,1.7678,-1.1548,-1.7284,1.3889,-1.2832,-1.9204,.9567,-1.3622,-2.0387,.4877,-1.3889,-2.0787,0,-1.3622,-2.0387,-.4877,-1.2832,-1.9204,-.9567,-1.1548,-1.7284,-1.3889,-.9821,-1.4698,-1.7678,-.7716,-1.1548,-2.0787,-.5315,-.7955,-2.3097,-.271,-.4055,-2.452,-.3449,-.3449,2.452,-.6765,-.6765,2.3097,-.9821,-.9821,2.0787,-1.25,-1.25,1.7678,-1.4698,-1.4698,1.3889,-1.6332,-1.6332,.9567,-1.7338,-1.7338,.4877,-1.7678,-1.7678,0,-1.7338,-1.7338,-.4877,-1.6332,-1.6332,-.9567,-1.4698,-1.4698,-1.3889,-1.25,-1.25,-1.7678,-.9821,-.9821,-2.0787,-.6765,-.6765,-2.3097,-.3449,-.3449,-2.452,-.4055,-.271,2.452,-.7955,-.5315,2.3097,-1.1548,-.7716,2.0787,-1.4698,-.9821,1.7678,-1.7284,-1.1548,1.3889,-1.9204,-1.2832,.9567,-2.0387,-1.3622,.4877,-2.0787,-1.3889,0,-2.0387,-1.3622,-.4877,-1.9204,-1.2832,-.9567,-1.7284,-1.1548,-1.3889,-1.4698,-.9821,-1.7678,-1.1548,-.7716,-2.0787,-.7955,-.5315,-2.3097,-.4055,-.271,-2.452,-.4506,-.1866,2.452,-.8839,-.3661,2.3097,-1.2832,-.5315,2.0787,-1.6332,-.6765,1.7678,-1.9204,-.7955,1.3889,-2.1339,-.8839,.9567,-2.2653,-.9383,.4877,-2.3097,-.9567,0,-2.2653,-.9383,-.4877,-2.1339,-.8839,-.9567,-1.9204,-.7955,-1.3889,-1.6332,-.6765,-1.7678,-1.2832,-.5315,-2.0787,-.8839,-.3661,-2.3097,-.4506,-.1866,-2.452,-.4784,-.0952,2.452,-.9383,-.1866,2.3097,-1.3622,-.271,2.0787,-1.7338,-.3449,1.7678,-2.0387,-.4055,1.3889,-2.2653,-.4506,.9567,-2.4048,-.4784,.4877,-2.452,-.4877,0,-2.4048,-.4784,-.4877,-2.2653,-.4506,-.9567,-2.0387,-.4055,-1.3889,-1.7338,-.3449,-1.7678,-1.3622,-.271,-2.0787,-.9383,-.1866,-2.3097,-.4784,-.0952,-2.452,-.4877,0,2.452,-.9567,0,2.3097,-1.3889,0,2.0787,-1.7678,0,1.7678,-2.0787,0,1.3889,-2.3097,0,.9567,-2.452,0,.4877,-2.5,0,0,-2.452,0,-.4877,-2.3097,0,-.9567,-2.0787,0,-1.3889,-1.7678,0,-1.7678,-1.3889,0,-2.0787,-.9567,0,-2.3097,-.4877,0,-2.452,-.4784,.0952,2.452,-.9383,.1866,2.3097,-1.3622,.271,2.0787,-1.7338,.3449,1.7678,-2.0387,.4055,1.3889,-2.2653,.4506,.9567,-2.4048,.4784,.4877,-2.452,.4877,0,-2.4048,.4784,-.4877,-2.2653,.4506,-.9567,-2.0387,.4055,-1.3889,-1.7338,.3449,-1.7678,-1.3622,.271,-2.0787,-.9383,.1866,-2.3097,-.4784,.0952,-2.452,-.4506,.1866,2.452,-.8839,.3661,2.3097,-1.2832,.5315,2.0787,-1.6332,.6765,1.7678,-1.9204,.7955,1.3889,-2.1339,.8839,.9567,-2.2653,.9383,.4877,-2.3097,.9567,0,-2.2653,.9383,-.4877,-2.1339,.8839,-.9567,-1.9204,.7955,-1.3889,-1.6332,.6765,-1.7678,-1.2832,.5315,-2.0787,-.8839,.3661,-2.3097,-.4506,.1866,-2.452,-.4055,.271,2.452,-.7955,.5315,2.3097,-1.1548,.7716,2.0787,-1.4698,.9821,1.7678,-1.7284,1.1548,1.3889,-1.9204,1.2832,.9567,-2.0387,1.3622,.4877,-2.0787,1.3889,0,-2.0387,1.3622,-.4877,-1.9204,1.2832,-.9567,-1.7284,1.1548,-1.3889,-1.4698,.9821,-1.7678,-1.1548,.7716,-2.0787,-.7955,.5315,-2.3097,-.4055,.271,-2.452,-.3449,.3449,2.452,-.6765,.6765,2.3097,-.9821,.9821,2.0787,-1.25,1.25,1.7678,-1.4698,1.4698,1.3889,-1.6332,1.6332,.9567,-1.7338,1.7338,.4877,-1.7678,1.7678,0,-1.7338,1.7338,-.4877,-1.6332,1.6332,-.9567,-1.4698,1.4698,-1.3889,-1.25,1.25,-1.7678,-.9821,.9821,-2.0787,-.6765,.6765,-2.3097,-.3449,.3449,-2.452,-.271,.4055,2.452,-.5315,.7955,2.3097,-.7716,1.1548,2.0787,-.9821,1.4698,1.7678,-1.1548,1.7284,1.3889,-1.2832,1.9204,.9567,-1.3622,2.0387,.4877,-1.3889,2.0787,0,-1.3622,2.0387,-.4877,-1.2832,1.9204,-.9567,-1.1548,1.7284,-1.3889,-.9821,1.4698,-1.7678,-.7716,1.1548,-2.0787,-.5315,.7955,-2.3097,-.271,.4055,-2.452,-.1866,.4506,2.452,-.3661,.8839,2.3097,-.5315,1.2832,2.0787,-.6765,1.6332,1.7678,-.7955,1.9204,1.3889,-.8839,2.1339,.9567,-.9383,2.2653,.4877,-.9567,2.3097,0,-.9383,2.2653,-.4877,-.8839,2.1339,-.9567,-.7955,1.9204,-1.3889,-.6765,1.6332,-1.7678,-.5315,1.2832,-2.0787,-.3661,.8839,-2.3097,-.1866,.4506,-2.452,-.0952,.4784,2.452,-.1866,.9383,2.3097,-.271,1.3622,2.0787,-.3449,1.7338,1.7678,-.4055,2.0387,1.3889,-.4506,2.2653,.9567,-.4784,2.4048,.4877,-.4877,2.452,0,-.4784,2.4048,-.4877,-.4506,2.2653,-.9567,-.4055,2.0387,-1.3889,-.3449,1.7338,-1.7678,-.271,1.3622,-2.0787,-.1866,.9383,-2.3097,-.0952,.4784,-2.452,0,.4877,2.452,0,.9567,2.3097,0,1.7678,1.7678,0,2.3097,.9567,0,2.3097,-.9567,0,1.7678,-1.7678,0,1.3889,-2.0787,0,.9567,-2.3097,0,.4877,-2.452,0,2.476,.2439,0,2.476,-.2439,.1409,.7083,2.3808,.2288,1.1503,2.1942,.3079,1.548,1.9232,.3752,1.8863,1.5783,.4281,2.152,1.1728,.4645,2.3351,.7222,.483,2.4284,.2439,.483,2.4284,-.2439,.4645,2.3351,-.7222,.4281,2.152,-1.1728,.3752,1.8863,-1.5783,.3079,1.548,-1.9232,.2288,1.1503,-2.1942,.1409,.7083,-2.3808,.2392,2.4284,-.4877,.2439,2.476,0,.1355,1.3756,2.0787,.2028,2.0587,-1.3889,.2028,2.0587,1.3889,.2392,2.4284,.4877,.2764,.6672,2.3808,.4488,1.0835,2.1942,.604,1.4582,1.9232,.736,1.7768,1.5783,.8397,2.0272,1.1728,.9111,2.1996,.7222,.9475,2.2875,.2439,.9475,2.2875,-.2439,.9111,2.1996,-.7222,.8397,2.0272,-1.1728,.736,1.7768,-1.5783,.604,1.4582,-1.9232,.4488,1.0835,-2.1942,.2764,.6672,-2.3808,.1409,.4645,-2.452,.2764,.9111,-2.3097,.7222,2.3808,0,.7083,2.3351,.4877,.1409,.4645,2.452,.7083,2.3351,-.4877,.2764,.9111,2.3097,.6672,2.1996,-.9567,.4012,1.3227,2.0787,.6005,1.9796,-1.3889,.5107,1.6835,1.7678,.5107,1.6835,-1.7678,.6005,1.9796,1.3889,.4012,1.3227,-2.0787,.6672,2.1996,.9567,.4012,.6005,2.3808,.6516,.9752,2.1942,.8769,1.3123,1.9232,1.0685,1.5991,1.5783,1.219,1.8244,1.1728,1.3227,1.9796,.7222,1.3756,2.0587,.2439,1.3756,2.0587,-.2439,1.3227,1.9796,-.7222,1.219,1.8244,-1.1728,1.0685,1.5991,-1.5783,.8769,1.3123,-1.9232,.6516,.9752,-2.1942,.4012,.6005,-2.3808,.8293,1.5515,-1.7678,.9752,1.8244,-1.3889,.9752,1.8244,1.3889,.8293,1.5515,1.7678,.6516,1.219,-2.0787,1.0835,2.0272,.9567,.4488,.8397,-2.3097,1.1503,2.152,.4877,.2288,.4281,-2.452,1.1728,2.1942,0,.2288,.4281,2.452,1.1503,2.152,-.4877,.4488,.8397,2.3097,1.0835,2.0272,-.9567,.6516,1.219,2.0787,.5107,.5107,2.3808,.8293,.8293,2.1942,1.1161,1.1161,1.9232,1.3599,1.3599,1.5783,1.5515,1.5515,1.1728,1.6835,1.6835,.7222,1.7508,1.7508,.2439,1.7508,1.7508,-.2439,1.6835,1.6835,-.7222,1.5515,1.5515,-1.1728,1.3599,1.3599,-1.5783,1.1161,1.1161,-1.9232,.8293,.8293,-2.1942,.5107,.5107,-2.3808,.3079,.3752,2.452,.3079,.3752,-2.452,1.548,1.8863,-.4877,1.5783,1.9232,0,.604,.736,2.3097,1.4582,1.7768,-.9567,.8769,1.0685,2.0787,1.3123,1.5991,-1.3889,1.1161,1.3599,1.7678,1.1161,1.3599,-1.7678,1.3123,1.5991,1.3889,.8769,1.0685,-2.0787,1.4582,1.7768,.9567,.604,.736,-2.3097,1.548,1.8863,.4877,.6005,.4012,2.3808,.9752,.6516,2.1942,1.3123,.8769,1.9232,1.5991,1.0685,1.5783,1.8244,1.219,1.1728,1.9796,1.3227,.7222,2.0587,1.3756,.2439,2.0587,1.3756,-.2439,1.9796,1.3227,-.7222,1.8244,1.219,-1.1728,1.5991,1.0685,-1.5783,1.3123,.8769,-1.9232,.9752,.6516,-2.1942,.6005,.4012,-2.3808,1.5991,1.3123,1.3889,1.3599,1.1161,1.7678,1.0685,.8769,-2.0787,1.3599,1.1161,-1.7678,1.7768,1.4582,.9567,.736,.604,-2.3097,1.8863,1.548,.4877,.3752,.3079,-2.452,1.9232,1.5783,0,.3752,.3079,2.452,1.8863,1.548,-.4877,.736,.604,2.3097,1.7768,1.4582,-.9567,1.0685,.8769,2.0787,1.5991,1.3123,-1.3889,.6672,.2764,2.3808,1.0835,.4488,2.1942,1.4582,.604,1.9232,1.7768,.736,1.5783,2.0272,.8397,1.1728,2.1996,.9111,.7222,2.2875,.9475,.2439,2.2875,.9475,-.2439,2.1996,.9111,-.7222,2.0272,.8397,-1.1728,1.7768,.736,-1.5783,1.4582,.604,-1.9232,1.0835,.4488,-2.1942,.6672,.2764,-2.3808,2.152,1.1503,-.4877,2.1942,1.1728,0,.8397,.4488,2.3097,.4281,.2288,2.452,2.0272,1.0835,-.9567,1.219,.6516,2.0787,1.8244,.9752,-1.3889,1.5515,.8293,1.7678,1.5515,.8293,-1.7678,1.8244,.9752,1.3889,1.219,.6516,-2.0787,2.0272,1.0835,.9567,.8397,.4488,-2.3097,2.152,1.1503,.4877,.4281,.2288,-2.452,.7083,.1409,2.3808,1.1503,.2288,2.1942,1.548,.3079,1.9232,1.8863,.3752,1.5783,2.152,.4281,1.1728,2.3351,.4645,.7222,2.4284,.483,.2439,2.4284,.483,-.2439,2.3351,.4645,-.7222,2.152,.4281,-1.1728,1.8863,.3752,-1.5783,1.548,.3079,-1.9232,1.1503,.2288,-2.1942,.7083,.1409,-2.3808,1.3227,.4012,-2.0787,1.6835,.5107,-1.7678,2.1996,.6672,.9567,1.9796,.6005,1.3889,.9111,.2764,-2.3097,2.3351,.7083,.4877,.4645,.1409,-2.452,2.3808,.7222,0,.4645,.1409,2.452,2.3351,.7083,-.4877,.9111,.2764,2.3097,2.1996,.6672,-.9567,1.3227,.4012,2.0787,1.9796,.6005,-1.3889,1.6835,.5107,1.7678,.7222,-0,2.3808,1.1728,-0,2.1942,1.5783,-0,1.9232,1.9232,-0,1.5783,2.1942,-0,1.1728,2.3808,-0,.7222,2.476,-0,.2439,2.476,-0,-.2439,2.3808,-0,-.7222,2.1942,-0,-1.1728,1.9232,-0,-1.5783,1.5783,-0,-1.9232,1.1728,-0,-2.1942,.7222,-0,-2.3808,.9475,.0933,2.3097,.483,.0476,2.452,2.2875,.2253,-.9567,2.4284,.2392,-.4877,1.3756,.1355,2.0787,2.0587,.2028,-1.3889,1.7508,.1724,1.7678,1.7508,.1724,-1.7678,2.0587,.2028,1.3889,1.3756,.1355,-2.0787,2.2875,.2253,.9567,.9475,.0933,-2.3097,2.4284,.2392,.4877,.483,.0476,-2.452,2.476,.2439,0,.7083,-.1409,2.3808,1.1503,-.2288,2.1942,1.548,-.3079,1.9232,1.8863,-.3752,1.5783,2.152,-.4281,1.1728,2.3351,-.4645,.7222,2.4284,-.483,.2439,2.4284,-.483,-.2439,2.3351,-.4645,-.7222,2.152,-.4281,-1.1728,1.8863,-.3752,-1.5783,1.548,-.3079,-1.9232,1.1503,-.2288,-2.1942,.7083,-.1409,-2.3808,2.2875,-.2253,.9567,2.0587,-.2028,1.3889,.9475,-.0933,-2.3097,1.3756,-.1355,-2.0787,2.4284,-.2392,.4877,.483,-.0476,-2.452,2.476,-.2439,0,.483,-.0476,2.452,2.4284,-.2392,-.4877,.9475,-.0933,2.3097,2.2875,-.2253,-.9567,1.3756,-.1355,2.0787,2.0587,-.2028,-1.3889,1.7508,-.1724,1.7678,1.7508,-.1724,-1.7678,.6672,-.2764,2.3808,1.0835,-.4488,2.1942,1.4582,-.604,1.9232,1.7768,-.736,1.5783,2.0272,-.8397,1.1728,2.1996,-.9111,.7222,2.2875,-.9475,.2439,2.2875,-.9475,-.2439,2.1996,-.9111,-.7222,2.0272,-.8397,-1.1728,1.7768,-.736,-1.5783,1.4582,-.604,-1.9232,1.0835,-.4488,-2.1942,.6672,-.2764,-2.3808,2.1996,-.6672,-.9567,2.3351,-.7083,-.4877,1.3227,-.4012,2.0787,.9111,-.2764,2.3097,1.9796,-.6005,-1.3889,1.6835,-.5107,1.7678,1.6835,-.5107,-1.7678,1.9796,-.6005,1.3889,1.3227,-.4012,-2.0787,2.1996,-.6672,.9567,.9111,-.2764,-2.3097,2.3351,-.7083,.4877,.4645,-.1409,-2.452,2.3808,-.7222,0,.4645,-.1409,2.452,.6005,-.4012,2.3808,.9752,-.6516,2.1942,1.3123,-.8769,1.9232,1.5991,-1.0685,1.5783,1.8244,-1.219,1.1728,1.9796,-1.3227,.7222,2.0587,-1.3756,.2439,2.0587,-1.3756,-.2439,1.9796,-1.3227,-.7222,1.8244,-1.219,-1.1728,1.5991,-1.0685,-1.5783,1.3123,-.8769,-1.9232,.9752,-.6516,-2.1942,.6005,-.4012,-2.3808,.8397,-.4488,-2.3097,1.219,-.6516,-2.0787,2.152,-1.1503,.4877,2.0272,-1.0835,.9567,.4281,-.2288,-2.452,2.1942,-1.1728,0,.4281,-.2288,2.452,2.152,-1.1503,-.4877,.8397,-.4488,2.3097,2.0272,-1.0835,-.9567,1.219,-.6516,2.0787,1.8244,-.9752,-1.3889,1.5515,-.8293,1.7678,1.5515,-.8293,-1.7678,1.8244,-.9752,1.3889,.5107,-.5107,2.3808,.8293,-.8293,2.1942,1.1161,-1.1161,1.9232,1.3599,-1.3599,1.5783,1.5515,-1.5515,1.1728,1.6835,-1.6835,.7222,1.7508,-1.7508,.2439,1.7508,-1.7508,-.2439,1.6835,-1.6835,-.7222,1.5515,-1.5515,-1.1728,1.3599,-1.3599,-1.5783,1.1161,-1.1161,-1.9232,.8293,-.8293,-2.1942,.5107,-.5107,-2.3808,1.5991,-1.3123,-1.3889,1.7768,-1.4582,-.9567,1.3599,-1.1161,1.7678,1.0685,-.8769,2.0787,1.3599,-1.1161,-1.7678,1.5991,-1.3123,1.3889,1.0685,-.8769,-2.0787,1.7768,-1.4582,.9567,.736,-.604,-2.3097,1.8863,-1.548,.4877,.3752,-.3079,-2.452,1.9232,-1.5783,0,.3752,-.3079,2.452,1.8863,-1.548,-.4877,.736,-.604,2.3097,.4012,-.6005,2.3808,.6516,-.9752,2.1942,.8769,-1.3123,1.9232,1.0685,-1.5991,1.5783,1.219,-1.8244,1.1728,1.3227,-1.9796,.7222,1.3756,-2.0587,.2439,1.3756,-2.0587,-.2439,1.3227,-1.9796,-.7222,1.219,-1.8244,-1.1728,1.0685,-1.5991,-1.5783,.8769,-1.3123,-1.9232,.6516,-.9752,-2.1942,.4012,-.6005,-2.3808,.3079,-.3752,-2.452,.604,-.736,-2.3097,1.5783,-1.9232,0,1.548,-1.8863,.4877,.3079,-.3752,2.452,1.548,-1.8863,-.4877,.604,-.736,2.3097,1.4582,-1.7768,-.9567,.8769,-1.0685,2.0787,1.3123,-1.5991,-1.3889,1.1161,-1.3599,1.7678,1.1161,-1.3599,-1.7678,1.3123,-1.5991,1.3889,.8769,-1.0685,-2.0787,1.4582,-1.7768,.9567,.2764,-.6672,2.3808,.4488,-1.0835,2.1942,.604,-1.4582,1.9232,.736,-1.7768,1.5783,.8397,-2.0272,1.1728,.9111,-2.1996,.7222,.9475,-2.2875,.2439,.9475,-2.2875,-.2439,.9111,-2.1996,-.7222,.8397,-2.0272,-1.1728,.736,-1.7768,-1.5783,.604,-1.4582,-1.9232,.4488,-1.0835,-2.1942,.2764,-.6672,-2.3808,.8293,-1.5515,1.7678,.6516,-1.219,2.0787,.8293,-1.5515,-1.7678,.9752,-1.8244,-1.3889,.9752,-1.8244,1.3889,.6516,-1.219,-2.0787,1.0835,-2.0272,.9567,.4488,-.8397,-2.3097,1.1503,-2.152,.4877,.2288,-.4281,-2.452,1.1728,-2.1942,0,.2288,-.4281,2.452,1.1503,-2.152,-.4877,.4488,-.8397,2.3097,1.0835,-2.0272,-.9567,.1409,-.7083,2.3808,.2288,-1.1503,2.1942,.3079,-1.548,1.9232,.3752,-1.8863,1.5783,.4281,-2.152,1.1728,.4645,-2.3351,.7222,.483,-2.4284,.2439,.483,-2.4284,-.2439,.4645,-2.3351,-.7222,.4281,-2.152,-1.1728,.3752,-1.8863,-1.5783,.3079,-1.548,-1.9232,.2288,-1.1503,-2.1942,.1409,-.7083,-2.3808,.7222,-2.3808,0,.7083,-2.3351,.4877,.1409,-.4645,2.452,.1409,-.4645,-2.452,.7083,-2.3351,-.4877,.2764,-.9111,2.3097,.6672,-2.1996,-.9567,.4012,-1.3227,2.0787,.6005,-1.9796,-1.3889,.5107,-1.6835,1.7678,.5107,-1.6835,-1.7678,.6005,-1.9796,1.3889,.4012,-1.3227,-2.0787,.6672,-2.1996,.9567,.2764,-.9111,-2.3097,-0,-.7222,2.3808,-0,-1.1728,2.1942,-0,-1.5783,1.9232,-0,-1.9232,1.5783,-0,-2.1942,1.1728,-0,-2.3808,.7222,-0,-2.476,.2439,-0,-2.476,-.2439,-0,-2.3808,-.7222,-0,-2.1942,-1.1728,-0,-1.9232,-1.5783,-0,-1.5783,-1.9232,-0,-1.1728,-2.1942,-0,-.7222,-2.3808,.1724,-1.7508,-1.7678,.2028,-2.0587,-1.3889,.2028,-2.0587,1.3889,.1724,-1.7508,1.7678,.1355,-1.3756,-2.0787,.2253,-2.2875,.9567,.0933,-.9475,-2.3097,.2392,-2.4284,.4877,.0476,-.483,-2.452,.2439,-2.476,0,.0476,-.483,2.452,.2392,-2.4284,-.4877,.0933,-.9475,2.3097,.2253,-2.2875,-.9567,.1355,-1.3756,2.0787,-.1409,-.7083,2.3808,-.2288,-1.1503,2.1942,-.3079,-1.548,1.9232,-.3752,-1.8863,1.5783,-.4281,-2.152,1.1728,-.4645,-2.3351,.7222,-.483,-2.4284,.2439,-.483,-2.4284,-.2439,-.4645,-2.3351,-.7222,-.4281,-2.152,-1.1728,-.3752,-1.8863,-1.5783,-.3079,-1.548,-1.9232,-.2288,-1.1503,-2.1942,-.1409,-.7083,-2.3808,-.0476,-.483,2.452,-.0476,-.483,-2.452,-.2392,-2.4284,-.4877,-.2439,-2.476,0,-.0933,-.9475,2.3097,-.2253,-2.2875,-.9567,-.1355,-1.3756,2.0787,-.2028,-2.0587,-1.3889,-.1724,-1.7508,1.7678,-.1724,-1.7508,-1.7678,-.2028,-2.0587,1.3889,-.1355,-1.3756,-2.0787,-.2253,-2.2875,.9567,-.0933,-.9475,-2.3097,-.2392,-2.4284,.4877,-.2764,-.6672,2.3808,-.4488,-1.0835,2.1942,-.604,-1.4582,1.9232,-.736,-1.7768,1.5783,-.8397,-2.0272,1.1728,-.9111,-2.1996,.7222,-.9475,-2.2875,.2439,-.9475,-2.2875,-.2439,-.9111,-2.1996,-.7222,-.8397,-2.0272,-1.1728,-.736,-1.7768,-1.5783,-.604,-1.4582,-1.9232,-.4488,-1.0835,-2.1942,-.2764,-.6672,-2.3808,-.6005,-1.9796,1.3889,-.5107,-1.6835,1.7678,-.4012,-1.3227,-2.0787,-.5107,-1.6835,-1.7678,-.6672,-2.1996,.9567,-.2764,-.9111,-2.3097,-.7083,-2.3351,.4877,-.1409,-.4645,-2.452,-.7222,-2.3808,0,-.1409,-.4645,2.452,-.7083,-2.3351,-.4877,-.2764,-.9111,2.3097,-.6672,-2.1996,-.9567,-.4012,-1.3227,2.0787,-.6005,-1.9796,-1.3889,-.4012,-.6005,2.3808,-.6516,-.9752,2.1942,-.8769,-1.3123,1.9232,-1.0685,-1.5991,1.5783,-1.219,-1.8244,1.1728,-1.3227,-1.9796,.7222,-1.3756,-2.0587,.2439,-1.3756,-2.0587,-.2439,-1.3227,-1.9796,-.7222,-1.219,-1.8244,-1.1728,-1.0685,-1.5991,-1.5783,-.8769,-1.3123,-1.9232,-.6516,-.9752,-2.1942,-.4012,-.6005,-2.3808,-1.1503,-2.152,-.4877,-1.1728,-2.1942,0,-.4488,-.8397,2.3097,-.2288,-.4281,2.452,-1.0835,-2.0272,-.9567,-.6516,-1.219,2.0787,-.9752,-1.8244,-1.3889,-.8293,-1.5515,1.7678,-.8293,-1.5515,-1.7678,-.9752,-1.8244,1.3889,-.6516,-1.219,-2.0787,-1.0835,-2.0272,.9567,-.4488,-.8397,-2.3097,-1.1503,-2.152,.4877,-.2288,-.4281,-2.452,-.5107,-.5107,2.3808,-.8293,-.8293,2.1942,-1.1161,-1.1161,1.9232,-1.3599,-1.3599,1.5783,-1.5515,-1.5515,1.1728,-1.6835,-1.6835,.7222,-1.7508,-1.7508,.2439,-1.7508,-1.7508,-.2439,-1.6835,-1.6835,-.7222,-1.5515,-1.5515,-1.1728,-1.3599,-1.3599,-1.5783,-1.1161,-1.1161,-1.9232,-.8293,-.8293,-2.1942,-.5107,-.5107,-2.3808,-.8769,-1.0685,-2.0787,-1.1161,-1.3599,-1.7678,-1.4582,-1.7768,.9567,-1.3123,-1.5991,1.3889,-.604,-.736,-2.3097,-1.548,-1.8863,.4877,-.3079,-.3752,-2.452,-1.5783,-1.9232,0,-.3079,-.3752,2.452,-1.548,-1.8863,-.4877,-.604,-.736,2.3097,-1.4582,-1.7768,-.9567,-.8769,-1.0685,2.0787,-1.3123,-1.5991,-1.3889,-1.1161,-1.3599,1.7678,-.6005,-.4012,2.3808,-.9752,-.6516,2.1942,-1.3123,-.8769,1.9232,-1.5991,-1.0685,1.5783,-1.8244,-1.219,1.1728,-1.9796,-1.3227,.7222,-2.0587,-1.3756,.2439,-2.0587,-1.3756,-.2439,-1.9796,-1.3227,-.7222,-1.8244,-1.219,-1.1728,-1.5991,-1.0685,-1.5783,-1.3123,-.8769,-1.9232,-.9752,-.6516,-2.1942,-.6005,-.4012,-2.3808,-1.7768,-1.4582,-.9567,-1.8863,-1.548,-.4877,-1.0685,-.8769,2.0787,-.736,-.604,2.3097,-1.5991,-1.3123,-1.3889,-1.3599,-1.1161,1.7678,-1.3599,-1.1161,-1.7678,-1.5991,-1.3123,1.3889,-1.0685,-.8769,-2.0787,-1.7768,-1.4582,.9567,-.736,-.604,-2.3097,-1.8863,-1.548,.4877,-.3752,-.3079,-2.452,-1.9232,-1.5783,0,-.3752,-.3079,2.452,-.6672,-.2764,2.3808,-1.0835,-.4488,2.1942,-1.4582,-.604,1.9232,-1.7768,-.736,1.5783,-2.0272,-.8397,1.1728,-2.1996,-.9111,.7222,-2.2875,-.9475,.2439,-2.2875,-.9475,-.2439,-2.1996,-.9111,-.7222,-2.0272,-.8397,-1.1728,-1.7768,-.736,-1.5783,-1.4582,-.604,-1.9232,-1.0835,-.4488,-2.1942,-.6672,-.2764,-2.3808,-.8397,-.4488,-2.3097,-1.219,-.6516,-2.0787,-2.152,-1.1503,.4877,-2.0272,-1.0835,.9567,-.4281,-.2288,-2.452,-2.1942,-1.1728,0,-.4281,-.2288,2.452,-2.152,-1.1503,-.4877,-.8397,-.4488,2.3097,-2.0272,-1.0835,-.9567,-1.219,-.6516,2.0787,-1.8244,-.9752,-1.3889,-1.5515,-.8293,1.7678,-1.5515,-.8293,-1.7678,-1.8244,-.9752,1.3889,-.7083,-.1409,2.3808,-1.1503,-.2288,2.1942,-1.548,-.3079,1.9232,-1.8863,-.3752,1.5783,-2.152,-.4281,1.1728,-2.3351,-.4645,.7222,-2.4284,-.483,.2439,-2.4284,-.483,-.2439,-2.3351,-.4645,-.7222,-2.152,-.4281,-1.1728,-1.8863,-.3752,-1.5783,-1.548,-.3079,-1.9232,-1.1503,-.2288,-2.1942,-.7083,-.1409,-2.3808,-1.3227,-.4012,2.0787,-.9111,-.2764,2.3097,-1.9796,-.6005,-1.3889,-2.1996,-.6672,-.9567,-1.6835,-.5107,1.7678,-1.6835,-.5107,-1.7678,-1.9796,-.6005,1.3889,-1.3227,-.4012,-2.0787,-2.1996,-.6672,.9567,-.9111,-.2764,-2.3097,-2.3351,-.7083,.4877,-.4645,-.1409,-2.452,-2.3808,-.7222,0,-.4645,-.1409,2.452,-2.3351,-.7083,-.4877,-.7222,0,2.3808,-1.1728,0,2.1942,-1.5783,0,1.9232,-1.9232,0,1.5783,-2.1942,0,1.1728,-2.3808,0,.7222,-2.476,0,.2439,-2.476,0,-.2439,-2.3808,0,-.7222,-2.1942,0,-1.1728,-1.9232,0,-1.5783,-1.5783,0,-1.9232,-1.1728,0,-2.1942,-.7222,0,-2.3808,-2.4284,-.2392,.4877,-2.2875,-.2253,.9567,-.483,-.0476,-2.452,-.9475,-.0933,-2.3097,-2.476,-.2439,0,-.483,-.0476,2.452,-2.4284,-.2392,-.4877,-.9475,-.0933,2.3097,-2.2875,-.2253,-.9567,-1.3756,-.1355,2.0787,-2.0587,-.2028,-1.3889,-1.7508,-.1724,1.7678,-1.7508,-.1724,-1.7678,-2.0587,-.2028,1.3889,-1.3756,-.1355,-2.0787,-.7083,.1409,2.3808,-1.1503,.2288,2.1942,-1.548,.3079,1.9232,-1.8863,.3752,1.5783,-2.152,.4281,1.1728,-2.3351,.4645,.7222,-2.4284,.483,.2439,-2.4284,.483,-.2439,-2.3351,.4645,-.7222,-2.152,.4281,-1.1728,-1.8863,.3752,-1.5783,-1.548,.3079,-1.9232,-1.1503,.2288,-2.1942,-.7083,.1409,-2.3808,-2.0587,.2028,-1.3889,-2.2875,.2253,-.9567,-1.7508,.1724,1.7678,-1.3756,.1355,2.0787,-1.7508,.1724,-1.7678,-2.0587,.2028,1.3889,-1.3756,.1355,-2.0787,-2.2875,.2253,.9567,-.9475,.0933,-2.3097,-2.4284,.2392,.4877,-.483,.0476,-2.452,-2.476,.2439,0,-.483,.0476,2.452,-2.4284,.2392,-.4877,-.9475,.0933,2.3097,-.6672,.2764,2.3808,-1.0835,.4488,2.1942,-1.4582,.604,1.9232,-1.7768,.736,1.5783,-2.0272,.8397,1.1728,-2.1996,.9111,.7222,-2.2875,.9475,.2439,-2.2875,.9475,-.2439,-2.1996,.9111,-.7222,-2.0272,.8397,-1.1728,-1.7768,.736,-1.5783,-1.4582,.604,-1.9232,-1.0835,.4488,-2.1942,-.6672,.2764,-2.3808,-.4645,.1409,-2.452,-.9111,.2764,-2.3097,-2.3808,.7222,0,-2.3351,.7083,.4877,-.4645,.1409,2.452,-2.3351,.7083,-.4877,-.9111,.2764,2.3097,-2.1996,.6672,-.9567,-1.3227,.4012,2.0787,-1.9796,.6005,-1.3889,-1.6835,.5107,1.7678,-1.6835,.5107,-1.7678,-1.9796,.6005,1.3889,-1.3227,.4012,-2.0787,-2.1996,.6672,.9567,-.6005,.4012,2.3808,-.9752,.6516,2.1942,-1.3123,.8769,1.9232,-1.5991,1.0685,1.5783,-1.8244,1.219,1.1728,-1.9796,1.3227,.7222,-2.0587,1.3756,.2439,-2.0587,1.3756,-.2439,-1.9796,1.3227,-.7222,-1.8244,1.219,-1.1728,-1.5991,1.0685,-1.5783,-1.3123,.8769,-1.9232,-.9752,.6516,-2.1942,-.6005,.4012,-2.3808,-1.5515,.8293,1.7678,-1.219,.6516,2.0787,-1.5515,.8293,-1.7678,-1.8244,.9752,-1.3889,-1.8244,.9752,1.3889,-1.219,.6516,-2.0787,-2.0272,1.0835,.9567,-.8397,.4488,-2.3097,-2.152,1.1503,.4877,-.4281,.2288,-2.452,-2.1942,1.1728,0,-.4281,.2288,2.452,-2.152,1.1503,-.4877,-.8397,.4488,2.3097,-2.0272,1.0835,-.9567,-.5107,.5107,2.3808,-.8293,.8293,2.1942,-1.1161,1.1161,1.9232,-1.3599,1.3599,1.5783,-1.5515,1.5515,1.1728,-1.6835,1.6835,.7222,-1.7508,1.7508,.2439,-1.7508,1.7508,-.2439,-1.6835,1.6835,-.7222,-1.5515,1.5515,-1.1728,-1.3599,1.3599,-1.5783,-1.1161,1.1161,-1.9232,-.8293,.8293,-2.1942,-.5107,.5107,-2.3808,-1.9232,1.5783,0,-1.8863,1.548,.4877,-.3752,.3079,2.452,-.3752,.3079,-2.452,-1.8863,1.548,-.4877,-.736,.604,2.3097,-1.7768,1.4582,-.9567,-1.0685,.8769,2.0787,-1.5991,1.3123,-1.3889,-1.3599,1.1161,1.7678,-1.3599,1.1161,-1.7678,-1.5991,1.3123,1.3889,-1.0685,.8769,-2.0787,-1.7768,1.4582,.9567,-.736,.604,-2.3097,-.4012,.6005,2.3808,-.6516,.9752,2.1942,-.8769,1.3123,1.9232,-1.0685,1.5991,1.5783,-1.219,1.8244,1.1728,-1.3227,1.9796,.7222,-1.3756,2.0587,.2439,-1.3756,2.0587,-.2439,-1.3227,1.9796,-.7222,-1.219,1.8244,-1.1728,-1.0685,1.5991,-1.5783,-.8769,1.3123,-1.9232,-.6516,.9752,-2.1942,-.4012,.6005,-2.3808,-1.1161,1.3599,-1.7678,-1.3123,1.5991,-1.3889,-1.3123,1.5991,1.3889,-1.1161,1.3599,1.7678,-.8769,1.0685,-2.0787,-1.4582,1.7768,.9567,-.604,.736,-2.3097,-1.548,1.8863,.4877,-.3079,.3752,-2.452,-1.5783,1.9232,0,-.3079,.3752,2.452,-1.548,1.8863,-.4877,-.604,.736,2.3097,-1.4582,1.7768,-.9567,-.8769,1.0685,2.0787,-.2764,.6672,2.3808,-.4488,1.0835,2.1942,-.604,1.4582,1.9232,-.736,1.7768,1.5783,-.8397,2.0272,1.1728,-.9111,2.1996,.7222,-.9475,2.2875,.2439,-.9475,2.2875,-.2439,-.9111,2.1996,-.7222,-.8397,2.0272,-1.1728,-.736,1.7768,-1.5783,-.604,1.4582,-1.9232,-.4488,1.0835,-2.1942,-.2764,.6672,-2.3808,-.2288,.4281,-2.452,-1.1503,2.152,-.4877,-1.1728,2.1942,0,-.4488,.8397,2.3097,-.2288,.4281,2.452,-1.0835,2.0272,-.9567,-.6516,1.219,2.0787,-.9752,1.8244,-1.3889,-.8293,1.5515,1.7678,-.8293,1.5515,-1.7678,-.9752,1.8244,1.3889,-.6516,1.219,-2.0787,-1.0835,2.0272,.9567,-.4488,.8397,-2.3097,-1.1503,2.152,.4877,-.1409,.7083,2.3808,-.2288,1.1503,2.1942,-.3079,1.548,1.9232,-.3752,1.8863,1.5783,-.4281,2.152,1.1728,-.4645,2.3351,.7222,-.483,2.4284,.2439,-.483,2.4284,-.2439,-.4645,2.3351,-.7222,-.4281,2.152,-1.1728,-.3752,1.8863,-1.5783,-.3079,1.548,-1.9232,-.2288,1.1503,-2.1942,-.1409,.7083,-2.3808,-.4012,1.3227,-2.0787,-.5107,1.6835,-1.7678,-.6672,2.1996,.9567,-.6005,1.9796,1.3889,-.2764,.9111,-2.3097,-.7083,2.3351,.4877,-.1409,.4645,-2.452,-.7222,2.3808,0,-.1409,.4645,2.452,-.7083,2.3351,-.4877,-.2764,.9111,2.3097,-.6672,2.1996,-.9567,-.4012,1.3227,2.0787,-.6005,1.9796,-1.3889,-.5107,1.6835,1.7678,0,.7222,2.3808,0,1.5783,-1.9232,0,1.1728,-2.1942,0,.7222,-2.3808,-.0933,.9475,2.3097,-.0476,.483,2.452,-.2253,2.2875,-.9567,-.1724,1.7508,1.7678,-.1724,1.7508,-1.7678,-.1355,1.3756,-2.0787,-.2253,2.2875,.9567,-.0933,.9475,-2.3097,-.0476,.483,-2.452,0,.2439,2.476,0,1.1728,2.1942,0,1.5783,1.9232,0,1.9232,1.5783,0,2.1942,1.1728,0,2.3808,.7222,0,2.3808,-.7222,0,2.1942,-1.1728,0,1.9232,-1.5783,0,.2439,-2.476,.0476,.2392,2.476,.0476,.2392,-2.476,.0933,.9475,2.3097,.0476,.483,2.452,.2253,2.2875,-.9567,.1724,1.7508,1.7678,.1724,1.7508,-1.7678,.1355,1.3756,-2.0787,.2253,2.2875,.9567,.0933,.9475,-2.3097,.0476,.483,-2.452,.0933,.2253,2.476,.0933,.2253,-2.476,.1355,.2028,2.476,.1355,.2028,-2.476,.1724,.1724,2.476,.1724,.1724,-2.476,.2028,.1355,2.476,.2028,.1355,-2.476,.2253,.0933,2.476,.2253,.0933,-2.476,.2392,.0476,2.476,.2392,.0476,-2.476,.2439,-0,2.476,.2439,-0,-2.476,.2392,-.0476,2.476,.2392,-.0476,-2.476,.2253,-.0933,2.476,.2253,-.0933,-2.476,.2028,-.1355,2.476,.2028,-.1355,-2.476,.1724,-.1724,2.476,.1724,-.1724,-2.476,.1355,-.2028,2.476,.1355,-.2028,-2.476,.0933,-.2253,2.476,.0933,-.2253,-2.476,.0476,-.2392,2.476,.0476,-.2392,-2.476,-0,-.2439,2.476,-0,-.2439,-2.476,-.0476,-.2392,2.476,-.0476,-.2392,-2.476,-.0933,-.2253,2.476,-.0933,-.2253,-2.476,-.1355,-.2028,2.476,-.1355,-.2028,-2.476,-.1724,-.1724,2.476,-.1724,-.1724,-2.476,-.2028,-.1355,2.476,-.2028,-.1355,-2.476,-.2253,-.0933,2.476,-.2253,-.0933,-2.476,-.2392,-.0476,2.476,-.2392,-.0476,-2.476,-.2439,0,2.476,-.2439,0,-2.476,-.2392,.0476,2.476,-.2392,.0476,-2.476,-.2253,.0933,2.476,-.2253,.0933,-2.476,-.2028,.1355,2.476,-.2028,.1355,-2.476,-.1724,.1724,2.476,-.1724,.1724,-2.476,-.1355,.2028,2.476,-.1355,.2028,-2.476,-.0933,.2253,2.476,-.0933,.2253,-2.476,-.0476,.2392,2.476,-.0476,.2392,-2.476,-.2392,2.4284,-.4877,-.1355,1.3756,2.0787,-.2028,2.0587,-1.3889,-.2028,2.0587,1.3889,-.2392,2.4284,.4877,-.2439,2.476,0,-.2415,2.4522,-.2439,-.2415,2.4522,.2439,-.0704,.7153,-2.3808,-.2322,2.358,.7222,-.1144,1.1615,-2.1942,-.214,2.1731,1.1728,-.154,1.5632,-1.9232,-.1876,1.9047,1.5783,-.1876,1.9047,-1.5783,-.154,1.5632,1.9232,-.214,2.1731,-1.1728,-.1144,1.1615,2.1942,-.2322,2.358,-.7222,-.0704,.7153,2.3808,-.5556,1.8315,1.5783,-.5556,1.8315,-1.5783,-.456,1.5031,1.9232,-.6339,2.0896,-1.1728,-.3388,1.1169,2.1942,-.6878,2.2673,-.7222,-.2086,.6878,2.3808,-.7153,2.358,-.2439,-.7153,2.358,.2439,-.2086,.6878,-2.3808,-.6878,2.2673,.7222,-.3388,1.1169,-2.1942,-.6339,2.0896,1.1728,-.456,1.5031,-1.9232,-1.1615,2.1731,.2439,-.3388,.6339,-2.3808,-1.1169,2.0896,.7222,-.5502,1.0294,-2.1942,-1.0294,1.9258,1.1728,-.7404,1.3853,-1.9232,-.9022,1.688,1.5783,-.9022,1.688,-1.5783,-.7404,1.3853,1.9232,-1.0294,1.9258,-1.1728,-.5502,1.0294,2.1942,-1.1169,2.0896,-.7222,-.3388,.6339,2.3808,-1.1615,2.1731,-.2439,-.9965,1.2142,1.9232,-1.3853,1.688,-1.1728,-.7404,.9022,2.1942,-1.5031,1.8315,-.7222,-.456,.5556,2.3808,-1.5632,1.9047,-.2439,-1.5632,1.9047,.2439,-.456,.5556,-2.3808,-1.5031,1.8315,.7222,-.7404,.9022,-2.1942,-1.3853,1.688,1.1728,-.9965,1.2142,-1.9232,-1.2142,1.4795,1.5783,-1.2142,1.4795,-1.5783,-.5556,.456,-2.3808,-1.8315,1.5031,.7222,-.9022,.7404,-2.1942,-1.688,1.3853,1.1728,-1.2142,.9965,-1.9232,-1.4795,1.2142,1.5783,-1.4795,1.2142,-1.5783,-1.2142,.9965,1.9232,-1.688,1.3853,-1.1728,-.9022,.7404,2.1942,-1.8315,1.5031,-.7222,-.5556,.456,2.3808,-1.9047,1.5632,-.2439,-1.9047,1.5632,.2439,-1.9258,1.0294,-1.1728,-1.0294,.5502,2.1942,-2.0896,1.1169,-.7222,-.6339,.3388,2.3808,-2.1731,1.1615,-.2439,-2.1731,1.1615,.2439,-.6339,.3388,-2.3808,-2.0896,1.1169,.7222,-1.0294,.5502,-2.1942,-1.9258,1.0294,1.1728,-1.3853,.7404,-1.9232,-1.688,.9022,1.5783,-1.688,.9022,-1.5783,-1.3853,.7404,1.9232,-2.2673,.6878,.7222,-1.1169,.3388,-2.1942,-2.0896,.6339,1.1728,-1.5031,.456,-1.9232,-1.8315,.5556,1.5783,-1.8315,.5556,-1.5783,-1.5031,.456,1.9232,-2.0896,.6339,-1.1728,-1.1169,.3388,2.1942,-2.2673,.6878,-.7222,-.6878,.2086,2.3808,-2.358,.7153,-.2439,-2.358,.7153,.2439,-.6878,.2086,-2.3808,-1.1615,.1144,2.1942,-2.358,.2322,-.7222,-.7153,.0704,2.3808,-2.4522,.2415,-.2439,-2.4522,.2415,.2439,-.7153,.0704,-2.3808,-2.358,.2322,.7222,-1.1615,.1144,-2.1942,-2.1731,.214,1.1728,-1.5632,.154,-1.9232,-1.9047,.1876,1.5783,-1.9047,.1876,-1.5783,-1.5632,.154,1.9232,-2.1731,.214,-1.1728,-1.1615,-.1144,-2.1942,-2.1731,-.214,1.1728,-1.5632,-.154,-1.9232,-1.9047,-.1876,1.5783,-1.9047,-.1876,-1.5783,-1.5632,-.154,1.9232,-2.1731,-.214,-1.1728,-1.1615,-.1144,2.1942,-2.358,-.2322,-.7222,-.7153,-.0704,2.3808,-2.4522,-.2415,-.2439,-2.4522,-.2415,.2439,-.7153,-.0704,-2.3808,-2.358,-.2322,.7222,-2.2673,-.6878,-.7222,-.6878,-.2086,2.3808,-2.358,-.7153,-.2439,-2.358,-.7153,.2439,-.6878,-.2086,-2.3808,-2.2673,-.6878,.7222,-1.1169,-.3388,-2.1942,-2.0896,-.6339,1.1728,-1.5031,-.456,-1.9232,-1.8315,-.5556,1.5783,-1.8315,-.5556,-1.5783,-1.5031,-.456,1.9232,-2.0896,-.6339,-1.1728,-1.1169,-.3388,2.1942,-1.9258,-1.0294,1.1728,-1.3853,-.7404,-1.9232,-1.688,-.9022,1.5783,-1.688,-.9022,-1.5783,-1.3853,-.7404,1.9232,-1.9258,-1.0294,-1.1728,-1.0294,-.5502,2.1942,-2.0896,-1.1169,-.7222,-.6339,-.3388,2.3808,-2.1731,-1.1615,-.2439,-2.1731,-1.1615,.2439,-.6339,-.3388,-2.3808,-2.0896,-1.1169,.7222,-1.0294,-.5502,-2.1942,-.5556,-.456,2.3808,-1.9047,-1.5632,-.2439,-1.9047,-1.5632,.2439,-.5556,-.456,-2.3808,-1.8315,-1.5031,.7222,-.9022,-.7404,-2.1942,-1.688,-1.3853,1.1728,-1.2142,-.9965,-1.9232,-1.4795,-1.2142,1.5783,-1.4795,-1.2142,-1.5783,-1.2142,-.9965,1.9232,-1.688,-1.3853,-1.1728,-.9022,-.7404,2.1942,-1.8315,-1.5031,-.7222,-1.2142,-1.4795,1.5783,-1.2142,-1.4795,-1.5783,-.9965,-1.2142,1.9232,-1.3853,-1.688,-1.1728,-.7404,-.9022,2.1942,-1.5031,-1.8315,-.7222,-.456,-.5556,2.3808,-1.5632,-1.9047,-.2439,-1.5632,-1.9047,.2439,-.456,-.5556,-2.3808,-1.5031,-1.8315,.7222,-.7404,-.9022,-2.1942,-1.3853,-1.688,1.1728,-.9965,-1.2142,-1.9232,-1.1615,-2.1731,.2439,-.3388,-.6339,-2.3808,-1.1169,-2.0896,.7222,-.5502,-1.0294,-2.1942,-1.0294,-1.9258,1.1728,-.7404,-1.3853,-1.9232,-.9022,-1.688,1.5783,-.9022,-1.688,-1.5783,-.7404,-1.3853,1.9232,-1.0294,-1.9258,-1.1728,-.5502,-1.0294,2.1942,-1.1169,-2.0896,-.7222,-.3388,-.6339,2.3808,-1.1615,-2.1731,-.2439,-.5556,-1.8315,-1.5783,-.456,-1.5031,1.9232,-.6339,-2.0896,-1.1728,-.3388,-1.1169,2.1942,-.6878,-2.2673,-.7222,-.2086,-.6878,2.3808,-.7153,-2.358,-.2439,-.7153,-2.358,.2439,-.2086,-.6878,-2.3808,-.6878,-2.2673,.7222,-.3388,-1.1169,-2.1942,-.6339,-2.0896,1.1728,-.456,-1.5031,-1.9232,-.5556,-1.8315,1.5783,-.2415,-2.4522,.2439,-.0704,-.7153,-2.3808,-.2322,-2.358,.7222,-.1144,-1.1615,-2.1942,-.214,-2.1731,1.1728,-.154,-1.5632,-1.9232,-.1876,-1.9047,1.5783,-.1876,-1.9047,-1.5783,-.154,-1.5632,1.9232,-.214,-2.1731,-1.1728,-.1144,-1.1615,2.1942,-.2322,-2.358,-.7222,-.0704,-.7153,2.3808,-.2415,-2.4522,-.2439,.154,-1.5632,1.9232,.214,-2.1731,-1.1728,.1144,-1.1615,2.1942,.2322,-2.358,-.7222,.0704,-.7153,2.3808,.2415,-2.4522,-.2439,.2415,-2.4522,.2439,.0704,-.7153,-2.3808,.2322,-2.358,.7222,.1144,-1.1615,-2.1942,.214,-2.1731,1.1728,.154,-1.5632,-1.9232,.1876,-1.9047,1.5783,.1876,-1.9047,-1.5783,.2086,-.6878,-2.3808,.6878,-2.2673,.7222,.3388,-1.1169,-2.1942,.6339,-2.0896,1.1728,.456,-1.5031,-1.9232,.5556,-1.8315,1.5783,.5556,-1.8315,-1.5783,.456,-1.5031,1.9232,.6339,-2.0896,-1.1728,.3388,-1.1169,2.1942,.6878,-2.2673,-.7222,.2086,-.6878,2.3808,.7153,-2.358,-.2439,.7153,-2.358,.2439,1.0294,-1.9258,-1.1728,.5502,-1.0294,2.1942,1.1169,-2.0896,-.7222,.3388,-.6339,2.3808,1.1615,-2.1731,-.2439,1.1615,-2.1731,.2439,.3388,-.6339,-2.3808,1.1169,-2.0896,.7222,.5502,-1.0294,-2.1942,1.0294,-1.9258,1.1728,.7404,-1.3853,-1.9232,.9022,-1.688,1.5783,.9022,-1.688,-1.5783,.7404,-1.3853,1.9232,1.5031,-1.8315,.7222,.7404,-.9022,-2.1942,1.3853,-1.688,1.1728,.9965,-1.2142,-1.9232,1.2142,-1.4795,1.5783,1.2142,-1.4795,-1.5783,.9965,-1.2142,1.9232,1.3853,-1.688,-1.1728,.7404,-.9022,2.1942,1.5031,-1.8315,-.7222,.456,-.5556,2.3808,1.5632,-1.9047,-.2439,1.5632,-1.9047,.2439,.456,-.5556,-2.3808,.9022,-.7404,2.1942,1.8315,-1.5031,-.7222,.5556,-.456,2.3808,1.9047,-1.5632,-.2439,1.9047,-1.5632,.2439,.5556,-.456,-2.3808,1.8315,-1.5031,.7222,.9022,-.7404,-2.1942,1.688,-1.3853,1.1728,1.2142,-.9965,-1.9232,1.4795,-1.2142,1.5783,1.4795,-1.2142,-1.5783,1.2142,-.9965,1.9232,1.688,-1.3853,-1.1728,1.9258,-1.0294,1.1728,1.3853,-.7404,-1.9232,1.688,-.9022,1.5783,1.688,-.9022,-1.5783,1.3853,-.7404,1.9232,1.9258,-1.0294,-1.1728,1.0294,-.5502,2.1942,2.0896,-1.1169,-.7222,.6339,-.3388,2.3808,2.1731,-1.1615,-.2439,2.1731,-1.1615,.2439,.6339,-.3388,-2.3808,2.0896,-1.1169,.7222,1.0294,-.5502,-2.1942,.6878,-.2086,2.3808,2.358,-.7153,-.2439,2.358,-.7153,.2439,.6878,-.2086,-2.3808,2.2673,-.6878,.7222,1.1169,-.3388,-2.1942,2.0896,-.6339,1.1728,1.5031,-.456,-1.9232,1.8315,-.5556,1.5783,1.8315,-.5556,-1.5783,1.5031,-.456,1.9232,2.0896,-.6339,-1.1728,1.1169,-.3388,2.1942,2.2673,-.6878,-.7222,1.5632,-.154,-1.9232,1.9047,-.1876,1.5783,1.9047,-.1876,-1.5783,1.5632,-.154,1.9232,2.1731,-.214,-1.1728,1.1615,-.1144,2.1942,2.358,-.2322,-.7222,.7153,-.0704,2.3808,2.4522,-.2415,-.2439,2.4522,-.2415,.2439,.7153,-.0704,-2.3808,2.358,-.2322,.7222,1.1615,-.1144,-2.1942,2.1731,-.214,1.1728,2.4522,.2415,-.2439,2.4522,.2415,.2439,.7153,.0704,-2.3808,2.358,.2322,.7222,1.1615,.1144,-2.1942,2.1731,.214,1.1728,1.5632,.154,-1.9232,1.9047,.1876,1.5783,1.9047,.1876,-1.5783,1.5632,.154,1.9232,2.1731,.214,-1.1728,1.1615,.1144,2.1942,2.358,.2322,-.7222,.7153,.0704,2.3808,1.8315,.5556,1.5783,1.8315,.5556,-1.5783,1.5031,.456,1.9232,2.0896,.6339,-1.1728,1.1169,.3388,2.1942,2.2673,.6878,-.7222,.6878,.2086,2.3808,2.358,.7153,-.2439,2.358,.7153,.2439,.6878,.2086,-2.3808,2.2673,.6878,.7222,1.1169,.3388,-2.1942,2.0896,.6339,1.1728,1.5031,.456,-1.9232,2.1731,1.1615,.2439,.6339,.3388,-2.3808,2.0896,1.1169,.7222,1.0294,.5502,-2.1942,1.9258,1.0294,1.1728,1.3853,.7404,-1.9232,1.688,.9022,1.5783,1.688,.9022,-1.5783,1.3853,.7404,1.9232,1.9258,1.0294,-1.1728,1.0294,.5502,2.1942,2.0896,1.1169,-.7222,.6339,.3388,2.3808,2.1731,1.1615,-.2439,1.4795,1.2142,-1.5783,1.2142,.9965,1.9232,1.688,1.3853,-1.1728,.9022,.7404,2.1942,1.8315,1.5031,-.7222,.5556,.456,2.3808,1.9047,1.5632,-.2439,1.9047,1.5632,.2439,.5556,.456,-2.3808,1.8315,1.5031,.7222,.9022,.7404,-2.1942,1.688,1.3853,1.1728,1.2142,.9965,-1.9232,1.4795,1.2142,1.5783,1.5632,1.9047,.2439,.456,.5556,-2.3808,1.5031,1.8315,.7222,.7404,.9022,-2.1942,1.3853,1.688,1.1728,.9965,1.2142,-1.9232,1.2142,1.4795,1.5783,1.2142,1.4795,-1.5783,.9965,1.2142,1.9232,1.3853,1.688,-1.1728,.7404,.9022,2.1942,1.5031,1.8315,-.7222,.456,.5556,2.3808,1.5632,1.9047,-.2439,.7404,1.3853,1.9232,1.0294,1.9258,-1.1728,.5502,1.0294,2.1942,1.1169,2.0896,-.7222,.3388,.6339,2.3808,1.1615,2.1731,-.2439,1.1615,2.1731,.2439,.3388,.6339,-2.3808,1.1169,2.0896,.7222,.5502,1.0294,-2.1942,1.0294,1.9258,1.1728,.7404,1.3853,-1.9232,.9022,1.688,1.5783,.9022,1.688,-1.5783,.6878,2.2673,.7222,.3388,1.1169,-2.1942,.6339,2.0896,1.1728,.456,1.5031,-1.9232,.5556,1.8315,1.5783,.5556,1.8315,-1.5783,.456,1.5031,1.9232,.6339,2.0896,-1.1728,.3388,1.1169,2.1942,.6878,2.2673,-.7222,.2086,.6878,2.3808,.7153,2.358,-.2439,.7153,2.358,.2439,.2086,.6878,-2.3808,.2415,2.4522,.2439,.0704,.7153,-2.3808,.2322,2.358,.7222,.1144,1.1615,-2.1942,.214,2.1731,1.1728,.154,1.5632,-1.9232,.1876,1.9047,1.5783,.1876,1.9047,-1.5783,.154,1.5632,1.9232,.214,2.1731,-1.1728,.1144,1.1615,2.1942,.2322,2.358,-.7222,.0704,.7153,2.3808,.2415,2.4522,-.2439]};var Vu=xh(Ou());var At=xh(Ou());var xd={steps:16,pentatonic:[0,2,4,7,9],signatures:{jungla:{label:"Jungla",tempo:104,geo:{type:"lowpass",hz:900,q:.4,swellHz:.23,depth:.25,gain:.16},voices:[{id:"bajo",name:"Bajo",band:"90\u2013200 Hz",k:3,rot:0,hz:165,haptic:{hz:70,amp:.85,ms:40}},{id:"arpegio",name:"Arpegio",band:"2.3\u20134 kHz",k:5,rot:2,rootMidi:98,haptic:{hz:200,amp:.45,ms:20}},{id:"pulso",name:"Pulso",band:"5.6 kHz",k:9,rot:1,hz:5600,amHz:22,haptic:{hz:320,amp:.3,ms:12}},{id:"canto",name:"Canto",band:"500\u2013900 Hz",k:1,rot:12,hz:620,haptic:{hz:120,amp:.6,ms:150}}]},hielo:{label:"Hielo marino",tempo:52,pressure:{type:"heat",hz:55},geo:{type:"bandpass",hz:520,q:1.1,swellHz:.07,depth:.6,gain:.3},voices:[{id:"bajo",name:"Bajo",band:"60\u201390 Hz",k:2,rot:0,hz:88,haptic:{hz:60,amp:.85,ms:60}},{id:"arpegio",name:"Arpegio",band:"2.4\u20133.6 kHz",k:3,rot:5,rootMidi:99,haptic:{hz:220,amp:.4,ms:24}},{id:"pulso",name:"Pulso",band:"6.2 kHz",k:5,rot:2,hz:6200,amHz:0,haptic:{hz:340,amp:.3,ms:10}},{id:"canto",name:"Canto",band:"600\u2013800 Hz",k:1,rot:10,hz:660,haptic:{hz:110,amp:.55,ms:220}}]},gases:{label:"Gases de efecto invernadero",tempo:60,geo:{type:"lowpass",hz:480,q:.5,swellHz:.25,depth:.8,gain:.3},voices:[{id:"bajo",name:"Bajo",band:"70\u2013100 Hz",k:2,rot:0,hz:98,haptic:{hz:60,amp:.85,ms:90}},{id:"arpegio",name:"Melod\xEDa",band:"520\u2013880 Hz",k:8,rot:0,rootMidi:72,melody:[0,1,2,3,4,3,1,0],haptic:{hz:150,amp:.45,ms:30}},{id:"pulso",name:"Pulso",band:"5 kHz",k:7,rot:1,hz:5e3,amHz:0,haptic:{hz:310,amp:.28,ms:10}},{id:"canto",name:"Canto",band:"390\u2013590 Hz",k:1,rot:12,hz:392,haptic:{hz:100,amp:.6,ms:240}}]}},presets:{jungla:{reference:{year:0,value:0,vital:{vit:95,div:100,est:95,pre:5,fever:0},masks:{bajo:2113,arpegio:37444,pulso:22187,canto:4096},scaleSize:5,jitterMs:4,detuneCents:2,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},label:"Jungla",signature:"jungla",unit:"km\xB2 talados ese a\xF1o",source:"INPE PRODES, Amazonia Legal",tempo:104,years:[{year:1988,value:21050,vital:{vit:92.7,div:97.9,est:55.8,pre:63,fever:0},masks:{bajo:2113,arpegio:18722,pulso:22187,canto:512},scaleSize:5,jitterMs:31,detuneCents:18,bioCutoffHz:4121,reverbWet:.176,anthroGain:.218,velocity:.964},{year:1989,value:17770,vital:{vit:90.8,div:96.2,est:61.4,pre:53.9,fever:0},masks:{bajo:2113,arpegio:37440,pulso:21675,canto:1024},scaleSize:5,jitterMs:27,detuneCents:15,bioCutoffHz:4809,reverbWet:.2,anthroGain:.16,velocity:.954},{year:1990,value:13730,vital:{vit:89.3,div:94.8,est:68.4,pre:42.8,fever:0},masks:{bajo:2113,arpegio:37440,pulso:21675,canto:4096},scaleSize:5,jitterMs:22,detuneCents:13,bioCutoffHz:5806,reverbWet:.229,anthroGain:.101,velocity:.947},{year:1991,value:11030,vital:{vit:88.1,div:93.7,est:73,pre:35.4,fever:0},masks:{bajo:2113,arpegio:37440,pulso:21675,canto:4096},scaleSize:5,jitterMs:19,detuneCents:11,bioCutoffHz:6582,reverbWet:.248,anthroGain:.069,velocity:.94},{year:1992,value:13786,vital:{vit:86.6,div:92.4,est:68.3,pre:43,fever:0},masks:{bajo:2113,arpegio:37440,pulso:21675,canto:4096},scaleSize:5,jitterMs:22,detuneCents:13,bioCutoffHz:5786,reverbWet:.228,anthroGain:.102,velocity:.933},{year:1993,value:14896,vital:{vit:85,div:90.9,est:66.4,pre:46,fever:0},masks:{bajo:2113,arpegio:37440,pulso:21675,canto:2048},scaleSize:5,jitterMs:24,detuneCents:13,bioCutoffHz:5499,reverbWet:.22,anthroGain:.116,velocity:.925},{year:1994,value:14896,vital:{vit:83.4,div:89.4,est:66.4,pre:46,fever:0},masks:{bajo:2113,arpegio:37440,pulso:21675,canto:2048},scaleSize:5,jitterMs:24,detuneCents:13,bioCutoffHz:5499,reverbWet:.22,anthroGain:.116,velocity:.917},{year:1995,value:29059,vital:{vit:80.2,div:86.5,est:42,pre:85,fever:0},masks:{bajo:2113,arpegio:18722,pulso:43348,canto:0},scaleSize:5,jitterMs:41,detuneCents:23,bioCutoffHz:2838,reverbWet:.119,anthroGain:.397,velocity:.901},{year:1996,value:18161,vital:{vit:78.2,div:84.8,est:60.8,pre:55,fever:0},masks:{bajo:2113,arpegio:37440,pulso:21674,canto:0},scaleSize:5,jitterMs:27,detuneCents:16,bioCutoffHz:4720,reverbWet:.197,anthroGain:.166,velocity:.891},{year:1997,value:13227,vital:{vit:76.8,div:83.4,est:69.2,pre:41.4,fever:0},masks:{bajo:2113,arpegio:37440,pulso:21674,canto:0},scaleSize:5,jitterMs:22,detuneCents:12,bioCutoffHz:5945,reverbWet:.232,anthroGain:.094,velocity:.884},{year:1998,value:17383,vital:{vit:74.9,div:81.7,est:62.1,pre:52.9,fever:0},masks:{bajo:2113,arpegio:37440,pulso:21674,canto:0},scaleSize:4,jitterMs:27,detuneCents:15,bioCutoffHz:4891,reverbWet:.202,anthroGain:.154,velocity:.875},{year:1999,value:17259,vital:{vit:73,div:80,est:62.3,pre:52.5,fever:0},masks:{bajo:2113,arpegio:37440,pulso:21674,canto:0},scaleSize:4,jitterMs:26,detuneCents:15,bioCutoffHz:4925,reverbWet:.204,anthroGain:.152,velocity:.865},{year:2e3,value:18226,vital:{vit:71,div:78.2,est:60.6,pre:55.2,fever:0},masks:{bajo:2049,arpegio:37440,pulso:21674,canto:0},scaleSize:4,jitterMs:28,detuneCents:16,bioCutoffHz:4704,reverbWet:.196,anthroGain:.168,velocity:.855},{year:2001,value:18165,vital:{vit:69.1,div:76.4,est:60.7,pre:55,fever:0},masks:{bajo:2049,arpegio:4672,pulso:21674,canto:0},scaleSize:4,jitterMs:28,detuneCents:16,bioCutoffHz:4720,reverbWet:.197,anthroGain:.166,velocity:.845},{year:2002,value:21651,vital:{vit:66.7,div:74.3,est:54.7,pre:64.6,fever:0},masks:{bajo:2049,arpegio:18722,pulso:21674,canto:0},scaleSize:4,jitterMs:32,detuneCents:18,bioCutoffHz:4011,reverbWet:.172,anthroGain:.23,velocity:.834},{year:2003,value:25396,vital:{vit:64,div:71.8,est:48.3,pre:74.9,fever:0},masks:{bajo:2049,arpegio:18722,pulso:21674,canto:0},scaleSize:4,jitterMs:36,detuneCents:21,bioCutoffHz:3368,reverbWet:.145,anthroGain:.309,velocity:.82},{year:2004,value:27772,vital:{vit:60.9,div:69,est:44.2,pre:81.5,fever:0},masks:{bajo:2049,arpegio:2338,pulso:43348,canto:0},scaleSize:4,jitterMs:39,detuneCents:22,bioCutoffHz:3011,reverbWet:.128,anthroGain:.365,velocity:.805},{year:2005,value:19014,vital:{vit:58.9,div:67.2,est:59.3,pre:57.3,fever:0},masks:{bajo:2049,arpegio:4672,pulso:21674,canto:0},scaleSize:4,jitterMs:28,detuneCents:16,bioCutoffHz:4540,reverbWet:.191,anthroGain:.181,velocity:.795},{year:2006,value:14286,vital:{vit:57.3,div:65.8,est:67.4,pre:44.3,fever:0},masks:{bajo:2049,arpegio:4672,pulso:21674,canto:0},scaleSize:4,jitterMs:23,detuneCents:13,bioCutoffHz:5660,reverbWet:.225,anthroGain:.108,velocity:.787},{year:2007,value:11651,vital:{vit:56.1,div:64.6,est:72,pre:37.1,fever:0},masks:{bajo:2049,arpegio:4672,pulso:21674,canto:0},scaleSize:4,jitterMs:20,detuneCents:11,bioCutoffHz:6395,reverbWet:.244,anthroGain:.076,velocity:.781},{year:2008,value:12911,vital:{vit:54.7,div:63.3,est:69.8,pre:40.5,fever:0},masks:{bajo:2048,arpegio:4672,pulso:21674,canto:0},scaleSize:4,jitterMs:21,detuneCents:12,bioCutoffHz:6037,reverbWet:.235,anthroGain:.09,velocity:.774},{year:2009,value:7464,vital:{vit:53.9,div:62.6,est:79.2,pre:25.5,fever:0},masks:{bajo:2048,arpegio:4672,pulso:21674,canto:0},scaleSize:4,jitterMs:15,detuneCents:8,bioCutoffHz:7786,reverbWet:.274,anthroGain:.036,velocity:.77},{year:2010,value:7e3,vital:{vit:53.1,div:61.9,est:80,pre:24.3,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:14,detuneCents:8,bioCutoffHz:7946,reverbWet:.277,anthroGain:.032,velocity:.766},{year:2011,value:6418,vital:{vit:52.4,div:61.3,est:81,pre:22.7,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:13,detuneCents:8,bioCutoffHz:8165,reverbWet:.281,anthroGain:.028,velocity:.762},{year:2012,value:4571,vital:{vit:51.9,div:60.8,est:84.1,pre:17.6,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:11,detuneCents:6,bioCutoffHz:8902,reverbWet:.294,anthroGain:.017,velocity:.76},{year:2013,value:5891,vital:{vit:51.3,div:60.2,est:81.9,pre:21.2,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:13,detuneCents:7,bioCutoffHz:8375,reverbWet:.285,anthroGain:.025,velocity:.757},{year:2014,value:5012,vital:{vit:50.7,div:59.7,est:83.4,pre:18.8,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:12,detuneCents:7,bioCutoffHz:8723,reverbWet:.291,anthroGain:.019,velocity:.754},{year:2015,value:6207,vital:{vit:50,div:59.1,est:81.3,pre:22.1,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:13,detuneCents:7,bioCutoffHz:8248,reverbWet:.283,anthroGain:.027,velocity:.75},{year:2016,value:7893,vital:{vit:49.2,div:58.3,est:78.4,pre:26.7,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:15,detuneCents:9,bioCutoffHz:7629,reverbWet:.271,anthroGain:.039,velocity:.746},{year:2017,value:6947,vital:{vit:48.4,div:57.7,est:80,pre:24.1,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:14,detuneCents:8,bioCutoffHz:7973,reverbWet:.277,anthroGain:.032,velocity:.742},{year:2018,value:7536,vital:{vit:47.6,div:56.9,est:79,pre:25.7,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:15,detuneCents:8,bioCutoffHz:7760,reverbWet:.273,anthroGain:.036,velocity:.738},{year:2019,value:10129,vital:{vit:46.5,div:55.9,est:74.6,pre:32.9,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:18,detuneCents:10,bioCutoffHz:6867,reverbWet:.254,anthroGain:.06,velocity:.733},{year:2020,value:10851,vital:{vit:45.3,div:54.8,est:73.3,pre:34.9,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:19,detuneCents:11,bioCutoffHz:6638,reverbWet:.249,anthroGain:.067,velocity:.726},{year:2021,value:13038,vital:{vit:43.9,div:53.6,est:69.6,pre:40.9,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:21,detuneCents:12,bioCutoffHz:5996,reverbWet:.234,anthroGain:.092,velocity:.72},{year:2022,value:11594,vital:{vit:42.7,div:52.4,est:72.1,pre:36.9,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:20,detuneCents:11,bioCutoffHz:6417,reverbWet:.244,anthroGain:.075,velocity:.714},{year:2023,value:9064,vital:{vit:41.7,div:51.5,est:76.4,pre:30,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:17,detuneCents:9,bioCutoffHz:7214,reverbWet:.262,anthroGain:.05,velocity:.709},{year:2024,value:6288,vital:{vit:41,div:50.9,est:81.2,pre:22.3,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:13,detuneCents:8,bioCutoffHz:8220,reverbWet:.282,anthroGain:.027,velocity:.705},{year:2025,value:5731,vital:{vit:40.4,div:50.3,est:82.1,pre:20.8,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:13,detuneCents:7,bioCutoffHz:8432,reverbWet:.286,anthroGain:.024,velocity:.702},{year:2026,value:3335,vital:{vit:40,div:50,est:86.3,pre:14.2,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:10,detuneCents:5,bioCutoffHz:9431,reverbWet:.303,anthroGain:.011,velocity:.7}]},hielo:{reference:{year:0,value:0,vital:{vit:95,div:100,est:95,pre:5,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:4,detuneCents:2,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},label:"Hielo marino",signature:"hielo",unit:"millones de km\xB2 en septiembre",source:"NSIDC Sea Ice Index, \xC1rtico",tempo:52,years:[{year:1979,value:7.05,vital:{vit:92.7,div:97.9,est:93.8,pre:7.9,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:4,detuneCents:2,bioCutoffHz:10495,reverbWet:.319,anthroGain:.003,velocity:.964},{year:1980,value:7.67,vital:{vit:95,div:100,est:80.5,pre:5,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:14,detuneCents:8,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},{year:1981,value:7.14,vital:{vit:94,div:99.1,est:82.1,pre:6.3,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:13,detuneCents:7,bioCutoffHz:10784,reverbWet:.324,anthroGain:.002,velocity:.97},{year:1982,value:7.3,vital:{vit:95,div:100,est:91.3,pre:5,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:6,detuneCents:3,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},{year:1983,value:7.39,vital:{vit:95,div:100,est:92.9,pre:5,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:5,detuneCents:3,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},{year:1984,value:6.81,vital:{vit:89.3,div:94.8,est:78.6,pre:12.2,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:1024},scaleSize:5,jitterMs:15,detuneCents:9,bioCutoffHz:9757,reverbWet:.308,anthroGain:.008,velocity:.947},{year:1985,value:6.7,vital:{vit:87.7,div:93.3,est:88.8,pre:14.1,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:1024},scaleSize:5,jitterMs:8,detuneCents:4,bioCutoffHz:9447,reverbWet:.303,anthroGain:.011,velocity:.939},{year:1986,value:7.41,vital:{vit:95,div:100,est:78.4,pre:5,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:15,detuneCents:9,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},{year:1987,value:7.28,vital:{vit:95,div:100,est:92,pre:5,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:6,detuneCents:3,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},{year:1988,value:7.37,vital:{vit:95,div:100,est:92.9,pre:5,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:5,detuneCents:3,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},{year:1989,value:7.01,vital:{vit:92.1,div:97.4,est:85.2,pre:8.6,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:10,detuneCents:6,bioCutoffHz:10371,reverbWet:.318,anthroGain:.004,velocity:.96},{year:1990,value:6.14,vital:{vit:79.7,div:86,est:67.1,pre:24.1,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:0},scaleSize:5,jitterMs:23,detuneCents:13,bioCutoffHz:7973,reverbWet:.277,anthroGain:.032,velocity:.899},{year:1991,value:6.47,vital:{vit:84.4,div:90.3,est:82,pre:18.2,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:1024},scaleSize:5,jitterMs:13,detuneCents:7,bioCutoffHz:8812,reverbWet:.293,anthroGain:.018,velocity:.922},{year:1992,value:7.47,vital:{vit:95,div:100,est:71.7,pre:5,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:20,detuneCents:11,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},{year:1993,value:6.4,vital:{vit:83.4,div:89.4,est:64.2,pre:19.5,fever:0},masks:{bajo:257,arpegio:33808,pulso:36932,canto:512},scaleSize:5,jitterMs:25,detuneCents:14,bioCutoffHz:8620,reverbWet:.289,anthroGain:.021,velocity:.917},{year:1994,value:7.14,vital:{vit:94,div:99.1,est:77.2,pre:6.3,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:16,detuneCents:9,bioCutoffHz:10784,reverbWet:.324,anthroGain:.002,velocity:.97},{year:1995,value:6.08,vital:{vit:78.9,div:85.2,est:62.2,pre:25.2,fever:0},masks:{bajo:257,arpegio:33808,pulso:36932,canto:0},scaleSize:5,jitterMs:26,detuneCents:15,bioCutoffHz:7826,reverbWet:.274,anthroGain:.035,velocity:.895},{year:1996,value:7.58,vital:{vit:95,div:100,est:60,pre:5,fever:0},masks:{bajo:257,arpegio:33808,pulso:37444,canto:256},scaleSize:5,jitterMs:28,detuneCents:16,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},{year:1997,value:6.69,vital:{vit:87.6,div:93.2,est:70.5,pre:14.3,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:1024},scaleSize:5,jitterMs:21,detuneCents:12,bioCutoffHz:9415,reverbWet:.303,anthroGain:.011,velocity:.938},{year:1998,value:6.54,vital:{vit:85.4,div:91.2,est:86.7,pre:17,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:1024},scaleSize:5,jitterMs:9,detuneCents:5,bioCutoffHz:8994,reverbWet:.296,anthroGain:.016,velocity:.927},{year:1999,value:6.12,vital:{vit:79.4,div:85.7,est:77.4,pre:24.4,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:0},scaleSize:5,jitterMs:16,detuneCents:9,bioCutoffHz:7933,reverbWet:.277,anthroGain:.033,velocity:.897},{year:2e3,value:6.25,vital:{vit:81.3,div:87.4,est:85.1,pre:22.1,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:0},scaleSize:5,jitterMs:10,detuneCents:6,bioCutoffHz:8248,reverbWet:.283,anthroGain:.027,velocity:.907},{year:2001,value:6.73,vital:{vit:88.1,div:93.7,est:80.4,pre:13.6,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:1024},scaleSize:5,jitterMs:14,detuneCents:8,bioCutoffHz:9528,reverbWet:.305,anthroGain:.01,velocity:.94},{year:2002,value:5.83,vital:{vit:75.3,div:82,est:64.2,pre:29.6,fever:0},masks:{bajo:257,arpegio:33808,pulso:36932,canto:0},scaleSize:4,jitterMs:25,detuneCents:14,bioCutoffHz:7263,reverbWet:.263,anthroGain:.048,velocity:.877},{year:2003,value:6.12,vital:{vit:79.4,div:85.7,est:80.5,pre:24.4,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:0},scaleSize:5,jitterMs:14,detuneCents:8,bioCutoffHz:7933,reverbWet:.277,anthroGain:.033,velocity:.897},{year:2004,value:5.98,vital:{vit:77.5,div:83.9,est:83,pre:26.9,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:0},scaleSize:5,jitterMs:12,detuneCents:7,bioCutoffHz:7603,reverbWet:.27,anthroGain:.04,velocity:.888},{year:2005,value:5.5,vital:{vit:70.6,div:77.6,est:71.6,pre:35.5,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:0},scaleSize:4,jitterMs:20,detuneCents:11,bioCutoffHz:6571,reverbWet:.248,anthroGain:.069,velocity:.853},{year:2006,value:5.86,vital:{vit:75.7,div:82.3,est:77,pre:29.1,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:0},scaleSize:4,jitterMs:16,detuneCents:9,bioCutoffHz:7325,reverbWet:.264,anthroGain:.047,velocity:.879},{year:2007,value:4.27,vital:{vit:53.1,div:61.6,est:39,pre:57.4,fever:0},masks:{bajo:1,arpegio:256,pulso:0,canto:0},scaleSize:4,jitterMs:43,detuneCents:24,bioCutoffHz:4532,reverbWet:.191,anthroGain:.181,velocity:.766},{year:2008,value:4.69,vital:{vit:59.1,div:67.1,est:67.2,pre:49.9,fever:0},masks:{bajo:1,arpegio:2080,pulso:36932,canto:0},scaleSize:4,jitterMs:23,detuneCents:13,bioCutoffHz:5147,reverbWet:.21,anthroGain:.137,velocity:.796},{year:2009,value:5.26,vital:{vit:67.2,div:74.5,est:67.8,pre:39.8,fever:0},masks:{bajo:1,arpegio:2080,pulso:36932,canto:0},scaleSize:4,jitterMs:23,detuneCents:13,bioCutoffHz:6109,reverbWet:.237,anthroGain:.087,velocity:.836},{year:2010,value:4.87,vital:{vit:61.6,div:69.4,est:69.2,pre:46.7,fever:0},masks:{bajo:1,arpegio:2080,pulso:36932,canto:0},scaleSize:4,jitterMs:22,detuneCents:12,bioCutoffHz:5434,reverbWet:.219,anthroGain:.12,velocity:.808},{year:2011,value:4.56,vital:{vit:57.2,div:65.4,est:68.9,pre:52.2,fever:0},masks:{bajo:1,arpegio:2048,pulso:36932,canto:0},scaleSize:4,jitterMs:22,detuneCents:12,bioCutoffHz:4950,reverbWet:.204,anthroGain:.15,velocity:.786},{year:2012,value:3.57,vital:{vit:43.1,div:52.4,est:46,pre:69.9,fever:0},masks:{bajo:1,arpegio:520,pulso:0,canto:0},scaleSize:4,jitterMs:38,detuneCents:22,bioCutoffHz:3666,reverbWet:.158,anthroGain:.269,velocity:.716},{year:2013,value:5.21,vital:{vit:66.5,div:73.9,est:45.7,pre:40.6,fever:0},masks:{bajo:1,arpegio:16904,pulso:18722,canto:0},scaleSize:4,jitterMs:38,detuneCents:22,bioCutoffHz:6026,reverbWet:.234,anthroGain:.091,velocity:.833},{year:2014,value:5.22,vital:{vit:66.6,div:74,est:80.6,pre:40.5,fever:0},masks:{bajo:1,arpegio:2080,pulso:36932,canto:0},scaleSize:4,jitterMs:14,detuneCents:8,bioCutoffHz:6037,reverbWet:.235,anthroGain:.09,velocity:.833},{year:2015,value:4.62,vital:{vit:58.1,div:66.2,est:62.5,pre:51.2,fever:0},masks:{bajo:1,arpegio:1040,pulso:36932,canto:0},scaleSize:4,jitterMs:26,detuneCents:15,bioCutoffHz:5035,reverbWet:.207,anthroGain:.144,velocity:.791},{year:2016,value:4.53,vital:{vit:56.8,div:65,est:73.8,pre:52.8,fever:0},masks:{bajo:1,arpegio:2048,pulso:36932,canto:0},scaleSize:4,jitterMs:18,detuneCents:10,bioCutoffHz:4900,reverbWet:.203,anthroGain:.153,velocity:.784},{year:2017,value:4.82,vital:{vit:60.9,div:68.8,est:71.2,pre:47.6,fever:0},masks:{bajo:1,arpegio:2080,pulso:36932,canto:0},scaleSize:4,jitterMs:20,detuneCents:12,bioCutoffHz:5352,reverbWet:.216,anthroGain:.125,velocity:.805},{year:2018,value:4.79,vital:{vit:60.5,div:68.4,est:77,pre:48.1,fever:0},masks:{bajo:1,arpegio:2080,pulso:36932,canto:0},scaleSize:4,jitterMs:16,detuneCents:9,bioCutoffHz:5306,reverbWet:.215,anthroGain:.127,velocity:.803},{year:2019,value:4.32,vital:{vit:53.8,div:62.2,est:63.4,pre:56.5,fever:0},masks:{bajo:1,arpegio:1040,pulso:0,canto:0},scaleSize:4,jitterMs:26,detuneCents:15,bioCutoffHz:4602,reverbWet:.193,anthroGain:.176,velocity:.769},{year:2020,value:3.92,vital:{vit:48.1,div:57,est:62.2,pre:63.6,fever:0},masks:{bajo:1,arpegio:1040,pulso:0,canto:0},scaleSize:4,jitterMs:26,detuneCents:15,bioCutoffHz:4079,reverbWet:.175,anthroGain:.222,velocity:.741},{year:2021,value:4.92,vital:{vit:62.4,div:70.1,est:55.3,pre:45.8,fever:0},masks:{bajo:1,arpegio:1040,pulso:18722,canto:0},scaleSize:4,jitterMs:31,detuneCents:18,bioCutoffHz:5518,reverbWet:.221,anthroGain:.115,velocity:.812},{year:2022,value:4.87,vital:{vit:61.6,div:69.4,est:77.2,pre:46.7,fever:0},masks:{bajo:1,arpegio:2080,pulso:36932,canto:0},scaleSize:4,jitterMs:16,detuneCents:9,bioCutoffHz:5434,reverbWet:.219,anthroGain:.12,velocity:.808},{year:2023,value:4.37,vital:{vit:54.5,div:62.9,est:63.1,pre:55.6,fever:0},masks:{bajo:1,arpegio:1040,pulso:36932,canto:0},scaleSize:4,jitterMs:26,detuneCents:15,bioCutoffHz:4672,reverbWet:.195,anthroGain:.17,velocity:.773},{year:2024,value:4.38,vital:{vit:54.7,div:63,est:74.6,pre:55.4,fever:0},masks:{bajo:1,arpegio:2048,pulso:36932,canto:0},scaleSize:4,jitterMs:18,detuneCents:10,bioCutoffHz:4688,reverbWet:.196,anthroGain:.169,velocity:.774},{year:2025,value:4.75,vital:{vit:59.9,div:67.9,est:68.8,pre:48.8,fever:0},masks:{bajo:1,arpegio:2080,pulso:36932,canto:0},scaleSize:4,jitterMs:22,detuneCents:12,bioCutoffHz:5244,reverbWet:.213,anthroGain:.131,velocity:.8}]},gases:{reference:{year:0,value:0,vital:{vit:95,div:100,est:95,pre:5,fever:0},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:4,detuneCents:2,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},label:"Gases de efecto invernadero",signature:"gases",unit:"ppm de CO\u2082 en Mauna Loa",source:"NOAA Global Monitoring Laboratory",tempo:60,years:[{year:1959,value:315.98,vital:{vit:95,div:100,est:95,pre:24.8,fever:0},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:4,detuneCents:2,bioCutoffHz:7879,reverbWet:.276,anthroGain:.034,velocity:.975},{year:1960,value:316.91,vital:{vit:94.6,div:99.6,est:94.7,pre:24.8,fever:.4},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:4,detuneCents:2,bioCutoffHz:7879,reverbWet:.276,anthroGain:.034,velocity:.973},{year:1961,value:317.64,vital:{vit:94.3,div:99.3,est:91.8,pre:20.5,fever:.7},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:6,detuneCents:3,bioCutoffHz:8475,reverbWet:.287,anthroGain:.023,velocity:.972},{year:1962,value:318.45,vital:{vit:94,div:99,est:93.2,pre:22.2,fever:1.1},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:5,detuneCents:3,bioCutoffHz:8234,reverbWet:.282,anthroGain:.027,velocity:.97},{year:1963,value:318.99,vital:{vit:93.8,div:98.8,est:90.5,pre:16.5,fever:1.4},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:7,detuneCents:4,bioCutoffHz:9070,reverbWet:.297,anthroGain:.015,velocity:.969},{year:1964,value:319.62,vital:{vit:93.5,div:98.5,est:92.7,pre:18.4,fever:1.6},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:5,detuneCents:3,bioCutoffHz:8782,reverbWet:.292,anthroGain:.019,velocity:.968},{year:1965,value:320.04,vital:{vit:93.4,div:98.4,est:90.9,pre:13.9,fever:1.8},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:6,detuneCents:4,bioCutoffHz:9479,reverbWet:.304,anthroGain:.011,velocity:.967},{year:1966,value:321.37,vital:{vit:92.8,div:97.8,est:81.2,pre:33.3,fever:2.4},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:13,detuneCents:8,bioCutoffHz:6821,reverbWet:.253,anthroGain:.061,velocity:.964},{year:1967,value:322.18,vital:{vit:92.5,div:97.5,est:86.1,pre:22.2,fever:2.8},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:10,detuneCents:6,bioCutoffHz:8234,reverbWet:.282,anthroGain:.027,velocity:.963},{year:1968,value:323.05,vital:{vit:92.1,div:97.1,est:92,pre:23.5,fever:3.2},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:6,detuneCents:3,bioCutoffHz:8055,reverbWet:.279,anthroGain:.03,velocity:.96},{year:1969,value:324.62,vital:{vit:91.5,div:96.5,est:83,pre:38.4,fever:3.9},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:12,detuneCents:7,bioCutoffHz:6256,reverbWet:.24,anthroGain:.081,velocity:.958},{year:1970,value:325.68,vital:{vit:91.1,div:96.1,est:85.2,pre:27.5,fever:4.4},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:10,detuneCents:6,bioCutoffHz:7526,reverbWet:.269,anthroGain:.042,velocity:.956},{year:1971,value:326.32,vital:{vit:90.8,div:95.8,est:86.2,pre:18.6,fever:4.6},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:10,detuneCents:6,bioCutoffHz:8753,reverbWet:.292,anthroGain:.019,velocity:.954},{year:1972,value:327.46,vital:{vit:90.4,div:95.4,est:84.7,pre:29.2,fever:5.2},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:11,detuneCents:6,bioCutoffHz:7312,reverbWet:.264,anthroGain:.047,velocity:.952},{year:1973,value:329.68,vital:{vit:89.5,div:94.5,est:76.3,pre:52.2,fever:6.2},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:17,detuneCents:9,bioCutoffHz:4950,reverbWet:.204,anthroGain:.15,velocity:.948},{year:1974,value:330.19,vital:{vit:89.3,div:94.3,est:70.5,pre:15.8,fever:6.4},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:21,detuneCents:12,bioCutoffHz:9179,reverbWet:.299,anthroGain:.014,velocity:.947},{year:1975,value:331.13,vital:{vit:88.9,div:93.9,est:84.5,pre:25,fever:6.8},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:11,detuneCents:6,bioCutoffHz:7852,reverbWet:.275,anthroGain:.034,velocity:.945},{year:1976,value:332.03,vital:{vit:88.5,div:93.5,est:89.4,pre:24.1,fever:7.2},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:7,detuneCents:4,bioCutoffHz:7973,reverbWet:.277,anthroGain:.032,velocity:.943},{year:1977,value:333.84,vital:{vit:87.8,div:92.8,est:77.3,pre:43.5,fever:8},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:16,detuneCents:9,bioCutoffHz:5737,reverbWet:.227,anthroGain:.104,velocity:.939},{year:1978,value:335.41,vital:{vit:87.1,div:92.1,est:85.7,pre:38.4,fever:8.7},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:10,detuneCents:6,bioCutoffHz:6256,reverbWet:.24,anthroGain:.081,velocity:.936},{year:1979,value:336.84,vital:{vit:86.6,div:91.6,est:86.6,pre:35.4,fever:9.4},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:9,detuneCents:5,bioCutoffHz:6582,reverbWet:.248,anthroGain:.069,velocity:.933},{year:1980,value:338.76,vital:{vit:85.8,div:90.8,est:81.3,pre:45.8,fever:10.2},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:13,detuneCents:7,bioCutoffHz:5518,reverbWet:.221,anthroGain:.115,velocity:.929},{year:1981,value:340.12,vital:{vit:85.2,div:90.2,est:79.9,pre:33.9,fever:10.8},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:14,detuneCents:8,bioCutoffHz:6752,reverbWet:.252,anthroGain:.063,velocity:.926},{year:1982,value:341.48,vital:{vit:84.7,div:89.7,est:87,pre:33.9,fever:11.4},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:9,detuneCents:5,bioCutoffHz:6752,reverbWet:.252,anthroGain:.063,velocity:.924},{year:1983,value:343.15,vital:{vit:84,div:89,est:82.3,pre:40.5,fever:12.2},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:12,detuneCents:7,bioCutoffHz:6037,reverbWet:.235,anthroGain:.09,velocity:.92},{year:1984,value:344.87,vital:{vit:83.3,div:88.3,est:85.3,pre:41.5,fever:13},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:10,detuneCents:6,bioCutoffHz:5935,reverbWet:.232,anthroGain:.095,velocity:.917},{year:1985,value:346.35,vital:{vit:82.7,div:87.7,est:82.3,pre:36.4,fever:13.6},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:12,detuneCents:7,bioCutoffHz:6471,reverbWet:.245,anthroGain:.073,velocity:.914},{year:1986,value:347.61,vital:{vit:82.2,div:87.2,est:82.1,pre:31.8,fever:14.2},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:5,jitterMs:13,detuneCents:7,bioCutoffHz:6997,reverbWet:.257,anthroGain:.056,velocity:.911},{year:1987,value:349.31,vital:{vit:81.5,div:86.5,est:78.7,pre:41.1,fever:15},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:5,jitterMs:15,detuneCents:9,bioCutoffHz:5975,reverbWet:.233,anthroGain:.093,velocity:.908},{year:1988,value:351.69,vital:{vit:80.6,div:85.6,est:74.7,pre:55.6,fever:16},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:5,jitterMs:18,detuneCents:10,bioCutoffHz:4672,reverbWet:.195,anthroGain:.17,velocity:.903},{year:1989,value:353.2,vital:{vit:80,div:85,est:71.7,pre:37.1,fever:16.7},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:5,jitterMs:20,detuneCents:11,bioCutoffHz:6395,reverbWet:.244,anthroGain:.076,velocity:.9},{year:1990,value:354.45,vital:{vit:79.5,div:84.5,est:79.4,pre:31.6,fever:17.3},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:5,jitterMs:14,detuneCents:8,bioCutoffHz:7020,reverbWet:.258,anthroGain:.055,velocity:.898},{year:1991,value:355.7,vital:{vit:79,div:84,est:82.5,pre:31.6,fever:17.8},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:5,jitterMs:12,detuneCents:7,bioCutoffHz:7020,reverbWet:.258,anthroGain:.055,velocity:.895},{year:1992,value:356.54,vital:{vit:78.6,div:83.6,est:76.8,pre:22.8,fever:18.2},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:5,jitterMs:16,detuneCents:9,bioCutoffHz:8151,reverbWet:.281,anthroGain:.029,velocity:.893},{year:1993,value:357.21,vital:{vit:78.3,div:83.3,est:79.8,pre:19.2,fever:18.5},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:14,detuneCents:8,bioCutoffHz:8664,reverbWet:.29,anthroGain:.02,velocity:.892},{year:1994,value:358.96,vital:{vit:77.6,div:82.6,est:67.1,pre:42.2,fever:19.3},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:23,detuneCents:13,bioCutoffHz:5865,reverbWet:.23,anthroGain:.098,velocity:.888},{year:1995,value:360.97,vital:{vit:76.8,div:81.8,est:77.4,pre:47.7,fever:20.2},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:16,detuneCents:9,bioCutoffHz:5343,reverbWet:.216,anthroGain:.125,velocity:.884},{year:1996,value:362.74,vital:{vit:76.1,div:81.1,est:77.1,pre:42.6,fever:21},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:16,detuneCents:9,bioCutoffHz:5825,reverbWet:.229,anthroGain:.1,velocity:.881},{year:1997,value:363.88,vital:{vit:75.6,div:80.6,est:71.5,pre:29.2,fever:21.5},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:20,detuneCents:11,bioCutoffHz:7312,reverbWet:.264,anthroGain:.047,velocity:.878},{year:1998,value:366.84,vital:{vit:74.4,div:79.4,est:59,pre:67.9,fever:22.8},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:29,detuneCents:16,bioCutoffHz:3792,reverbWet:.163,anthroGain:.254,velocity:.872},{year:1999,value:368.54,vital:{vit:73.8,div:78.8,est:61.7,pre:41.1,fever:23.6},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:27,detuneCents:15,bioCutoffHz:5975,reverbWet:.233,anthroGain:.093,velocity:.869},{year:2e3,value:369.71,vital:{vit:73.3,div:78.3,est:71,pre:29.9,fever:24.1},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:20,detuneCents:12,bioCutoffHz:7226,reverbWet:.262,anthroGain:.049,velocity:.867},{year:2001,value:371.32,vital:{vit:72.6,div:77.6,est:71.7,pre:39.2,fever:24.8},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:20,detuneCents:11,bioCutoffHz:6171,reverbWet:.238,anthroGain:.085,velocity:.863},{year:2002,value:373.45,vital:{vit:71.8,div:76.8,est:70,pre:50.3,fever:25.8},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:21,detuneCents:12,bioCutoffHz:5112,reverbWet:.209,anthroGain:.139,velocity:.859},{year:2003,value:375.98,vital:{vit:70.8,div:75.8,est:70.8,pre:58.8,fever:26.9},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:20,detuneCents:12,bioCutoffHz:4426,reverbWet:.187,anthroGain:.19,velocity:.854},{year:2004,value:377.7,vital:{vit:70.1,div:75.1,est:64.8,pre:41.5,fever:27.7},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:25,detuneCents:14,bioCutoffHz:5935,reverbWet:.232,anthroGain:.095,velocity:.851},{year:2005,value:379.98,vital:{vit:69.1,div:74.1,est:67.4,pre:53.4,fever:28.7},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:23,detuneCents:13,bioCutoffHz:4850,reverbWet:.201,anthroGain:.157,velocity:.845},{year:2006,value:382.09,vital:{vit:68.3,div:73.3,est:72,pre:49.8,fever:29.7},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:20,detuneCents:11,bioCutoffHz:5156,reverbWet:.211,anthroGain:.136,velocity:.841},{year:2007,value:384.02,vital:{vit:67.5,div:72.5,est:71.2,pre:46,fever:30.5},masks:{bajo:1,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:20,detuneCents:12,bioCutoffHz:5499,reverbWet:.22,anthroGain:.116,velocity:.838},{year:2008,value:385.83,vital:{vit:66.8,div:71.8,est:71.4,pre:43.5,fever:31.4},masks:{bajo:1,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:20,detuneCents:11,bioCutoffHz:5737,reverbWet:.227,anthroGain:.104,velocity:.834},{year:2009,value:387.64,vital:{vit:66,div:71,est:72.5,pre:43.5,fever:32.2},masks:{bajo:1,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:19,detuneCents:11,bioCutoffHz:5737,reverbWet:.227,anthroGain:.104,velocity:.83},{year:2010,value:390.1,vital:{vit:65.1,div:70.1,est:63,pre:57.3,fever:33.3},masks:{bajo:1,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:26,detuneCents:15,bioCutoffHz:4540,reverbWet:.191,anthroGain:.181,velocity:.825},{year:2011,value:391.85,vital:{vit:64.3,div:69.3,est:61.7,pre:42.2,fever:34.1},masks:{bajo:1,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:27,detuneCents:15,bioCutoffHz:5865,reverbWet:.23,anthroGain:.098,velocity:.822},{year:2012,value:394.06,vital:{vit:63.5,div:68.5,est:64.3,pre:52,fever:35.1},masks:{bajo:1,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:25,detuneCents:14,bioCutoffHz:4967,reverbWet:.205,anthroGain:.149,velocity:.818},{year:2013,value:396.74,vital:{vit:62.4,div:67.4,est:63.4,pre:61.9,fever:36.3},masks:{bajo:1,arpegio:5456,pulso:43346,canto:0},scaleSize:4,jitterMs:26,detuneCents:15,bioCutoffHz:4199,reverbWet:.179,anthroGain:.211,velocity:.812},{year:2014,value:398.81,vital:{vit:61.5,div:66.5,est:60.8,pre:49,fever:37.2},masks:{bajo:1,arpegio:5456,pulso:43346,canto:0},scaleSize:4,jitterMs:27,detuneCents:16,bioCutoffHz:5226,reverbWet:.213,anthroGain:.132,velocity:.808},{year:2015,value:401.01,vital:{vit:60.6,div:65.6,est:66.5,pre:51.7,fever:38.2},masks:{bajo:1,arpegio:5456,pulso:43346,canto:0},scaleSize:4,jitterMs:23,detuneCents:13,bioCutoffHz:4992,reverbWet:.206,anthroGain:.147,velocity:.803},{year:2016,value:404.41,vital:{vit:59.3,div:64.3,est:51.2,pre:77.2,fever:39.7},masks:{bajo:1,arpegio:5456,pulso:43346,canto:0},scaleSize:4,jitterMs:34,detuneCents:20,bioCutoffHz:3239,reverbWet:.139,anthroGain:.328,velocity:.797},{year:2017,value:406.76,vital:{vit:58.3,div:63.3,est:52.5,pre:54.9,fever:40.8},masks:{bajo:1,arpegio:5456,pulso:43346,canto:0},scaleSize:4,jitterMs:33,detuneCents:19,bioCutoffHz:4728,reverbWet:.197,anthroGain:.166,velocity:.792},{year:2018,value:408.72,vital:{vit:57.5,div:62.5,est:60.7,pre:46.6,fever:41.6},masks:{bajo:1,arpegio:5456,pulso:43346,canto:0},scaleSize:4,jitterMs:28,detuneCents:16,bioCutoffHz:5443,reverbWet:.219,anthroGain:.119,velocity:.788},{year:2019,value:411.65,vital:{vit:56.3,div:61.3,est:52,pre:67.3,fever:43},masks:{bajo:1,arpegio:5456,pulso:0,canto:0},scaleSize:4,jitterMs:34,detuneCents:19,bioCutoffHz:3831,reverbWet:.165,anthroGain:.249,velocity:.782},{year:2020,value:414.21,vital:{vit:55.3,div:60.3,est:59.2,pre:59.4,fever:44.1},masks:{bajo:1,arpegio:5456,pulso:0,canto:0},scaleSize:4,jitterMs:29,detuneCents:16,bioCutoffHz:4381,reverbWet:.186,anthroGain:.194,velocity:.777},{year:2021,value:416.41,vital:{vit:54.4,div:59.4,est:58.6,pre:51.7,fever:45.1},masks:{bajo:1,arpegio:5456,pulso:0,canto:0},scaleSize:4,jitterMs:29,detuneCents:17,bioCutoffHz:4992,reverbWet:.206,anthroGain:.147,velocity:.772},{year:2022,value:418.53,vital:{vit:53.6,div:58.6,est:61.7,pre:50,fever:46},masks:{bajo:1,arpegio:5456,pulso:0,canto:0},scaleSize:4,jitterMs:27,detuneCents:15,bioCutoffHz:5138,reverbWet:.21,anthroGain:.138,velocity:.768},{year:2023,value:421.08,vital:{vit:52.5,div:57.5,est:56.2,pre:59.2,fever:47.2},masks:{bajo:1,arpegio:5456,pulso:0,canto:0},scaleSize:4,jitterMs:31,detuneCents:18,bioCutoffHz:4396,reverbWet:.186,anthroGain:.193,velocity:.763},{year:2024,value:424.61,vital:{vit:51.1,div:56.1,est:47.8,pre:80,fever:48.8},masks:{bajo:1,arpegio:5456,pulso:0,canto:0},scaleSize:4,jitterMs:37,detuneCents:21,bioCutoffHz:3089,reverbWet:.132,anthroGain:.352,velocity:.756},{year:2025,value:427.35,vital:{vit:50,div:55,est:49.5,pre:63.2,fever:50},masks:{bajo:1,arpegio:5456,pulso:0,canto:0},scaleSize:4,jitterMs:35,detuneCents:20,bioCutoffHz:4107,reverbWet:.176,anthroGain:.22,velocity:.75}]}}};var jv=At.default.STEPS,sr=At.default.PENTA,Zn=xd.presets,Dt=["gases","hielo","jungla"],Do=class{constructor(){this.dash="hielo",this.idx=0,this.derived=null,this.reference=null,this.ctx=null,this.nodes=null,this.timer=null,this.playing=!1,this.step=0,this.bar=0,this.nextTime=0,this.arpIndex=0,this.level=.55,this.rich=!0,this.onStep=null,this.onBar=null,this._derive()}get preset(){return Zn[this.dash]}get count(){return this.preset.years.length}get entry(){return this.idx===0?this.preset.reference:this.preset.years[this.idx-1]}_derive(){let e=this.preset.signature;this.derived=At.default.derive(e,this.entry.vital),this.reference=At.default.derive(e,At.default.REFERENCE)}setDashboard(e){if(!Zn[e])return;let t=e!==this.dash;this.dash=e,this.idx=0,this._derive(),this.ctx&&(this._continuous(!1),t&&this.playing&&this._restartClock())}setIndex(e){e=Math.max(0,Math.min(this.count,Math.round(e))),e!==this.idx&&(this.idx=e,this._derive(),this._continuous(!1))}setLevel(e){this.level=e,this.nodes&&this.nodes.master.gain.setTargetAtTime(e,this.ctx.currentTime,.3)}async play(){this.ctx||this._init(),await this.ctx.resume(),!this.playing&&(this._restartClock(),this.timer=setInterval(()=>this._pump(),25),this._pump(),this.playing=!0)}async stop(){clearInterval(this.timer),this.timer=null,this.playing=!1,this.ctx&&await this.ctx.suspend()}tick(e=1800,t=.05){if(!this.ctx||this.ctx.state!=="running")return;let n=this.ctx.currentTime,s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="sine",s.frequency.value=e,s.connect(r),r.connect(this.nodes.master),this._env(r,n,t,.001,.04),s.start(n),s.stop(n+.08)}energy(){if(!this.nodes)return 0;let e=this.nodes.wave;this.nodes.analyser.getFloatTimeDomainData(e);let t=0;for(let n=0;n<e.length;n+=4)t+=e[n]*e[n];return Math.min(1,Math.sqrt(t/(e.length/4))*4)}_init(){let e=window.AudioContext||window.webkitAudioContext,t=this.ctx=new e,n=t.createGain();n.gain.value=this.level;let s=t.createDynamicsCompressor();s.threshold.value=-12,s.knee.value=6,s.ratio.value=12,s.attack.value=.003,s.release.value=.18;let r=t.createAnalyser();r.fftSize=2048,n.connect(s),s.connect(r),r.connect(t.destination);let a=t.createGain(),o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=12e3,o.Q.value=.3;let l=t.createConvolver();l.buffer=this._impulse(this.rich?3.8:2.8);let c=t.createGain();c.gain.value=.3;let u=t.createBiquadFilter();u.type="highshelf",u.frequency.value=6500,u.gain.value=this.rich?-2.5:0,a.connect(o),o.connect(u),u.connect(n),o.connect(l),l.connect(c),c.connect(n);let h=t.createGain();h.gain.value=0;let f=t.createDelay(1.5),p=t.createDelay(1.5),g=t.createGain(),v=t.createBiquadFilter(),m=t.createGain(),d=t.createChannelMerger(2);v.type="lowpass",v.frequency.value=2400,g.gain.value=.25,m.gain.value=.5,h.connect(f),f.connect(v),v.connect(p),p.connect(g),g.connect(f),v.connect(d,0,0),p.connect(d,0,1),d.connect(m),m.connect(n),m.connect(l);let y=t.createGain();y.gain.value=0;let x=t.createBiquadFilter();x.type="lowpass",x.frequency.value=1100,x.Q.value=.3;let _=[],R=[1,.5,.28,0].map((Oe,ot)=>{let Le=t.createOscillator(),it=t.createGain();return Le.type="sine",Le.frequency.value=110,it.gain.value=Oe,Le.connect(it),it.connect(x),Le.start(),_.push(it),Le}),E=t.createOscillator(),A=t.createGain();E.frequency.value=.07,A.gain.value=220,E.connect(A),A.connect(x.frequency),E.start(),x.connect(y),y.connect(a);let C=t.createGain();C.gain.value=0;let S=t.createBiquadFilter();S.type="lowpass",S.frequency.value=320;let b=[1,.35,.25].map((Oe,ot)=>{let Le=t.createOscillator(),it=t.createGain();return Le.type=ot===2?"triangle":"sine",Le.frequency.value=55,it.gain.value=Oe,Le.connect(it),it.connect(S),Le.start(),Le});S.connect(C),C.connect(n);let I=this._noise();this.noiseBuf=I;let B=t.createBufferSource();B.buffer=I,B.loop=!0;let O=t.createBiquadFilter(),G=t.createGain();G.gain.value=1e-4;let $=t.createOscillator();$.type="sine";let W=t.createGain();W.gain.value=0,$.connect(W),W.connect(G.gain),B.connect(O),O.connect(G),G.connect(n),B.start(),$.start();let J=t.createGain();J.gain.value=0,J.connect(n);let F=t.createOscillator();F.type="sawtooth",F.frequency.value=120;let ie=t.createBiquadFilter();ie.type="lowpass",ie.frequency.value=480;let oe=t.createGain();oe.gain.value=.22,F.connect(ie),ie.connect(oe),oe.connect(J),F.start();let me=t.createBufferSource();me.buffer=I,me.loop=!0;let Ne=t.createBiquadFilter();Ne.type="bandpass",Ne.frequency.value=1500,Ne.Q.value=1.1;let et=t.createGain();et.gain.value=.5,me.connect(Ne),Ne.connect(et),et.connect(J),me.start();let q=t.createOscillator(),ee=t.createOscillator(),pe=t.createOscillator();q.type="sine",ee.type="sine",pe.type="triangle",q.frequency.value=55,ee.frequency.value=55.4,pe.frequency.value=110;let ae=t.createGain();ae.gain.value=.22;let Se=t.createBiquadFilter();Se.type="lowpass",Se.frequency.value=220;let Ce=t.createGain();Ce.gain.value=0,q.connect(Se),ee.connect(Se),pe.connect(ae),ae.connect(Se),Se.connect(Ce),Ce.connect(n),q.start(),ee.start(),pe.start(),this.nodes={master:n,analyser:r,wave:new Float32Array(2048),bioIn:a,bioLP:o,wet:c,echoIn:h,dL:f,dR:p,pad:y,padOsc:R,padG:_,pedal:C,pedalOsc:b,geoFilter:O,geoGain:G,swell:$,swellDepth:W,anthro:J,heat:Ce,heatA:q,heatB:ee,heatC:pe},this._continuous(!0)}_noise(){let e=this.ctx,t=e.sampleRate*2,n=e.createBuffer(1,t,e.sampleRate),s=n.getChannelData(0),r=0,a=0,o=0;for(let l=0;l<t;l++){let c=Math.random()*2-1;r=.99765*r+c*.099046,a=.963*a+c*.2965164,o=.57*o+c*1.0526913,s[l]=(r+a+o+c*.1848)*.22}return n}_impulse(e){let t=this.ctx,n=Math.floor(t.sampleRate*e),s=t.createBuffer(2,n,t.sampleRate),r=Math.floor(t.sampleRate*.012);for(let a=0;a<2;a++){let o=s.getChannelData(a),l=0;for(let c=0;c<n;c++){let u=c/n,h=Math.random()*2-1;if(!this.rich){o[c]=h*Math.pow(1-u,2.6);continue}l+=(h-l)*Math.max(.05,.6-.58*u),o[c]=l*Math.exp(-4.4*u)*(c<r?c/r:1)*2.1}}return s}_continuous(e){let t=this.nodes;if(!t)return;let n=this.ctx.currentTime,s=e?.01:.25,r=this.derived,a=this.preset.signature,o=At.default.SIGNATURES[a].geo;t.geoFilter.type=o.type,t.geoFilter.frequency.setTargetAtTime(o.hz,n,s),t.geoFilter.Q.setTargetAtTime(o.q,n,s);let l=this.rich?.3:1;t.geoGain.gain.setTargetAtTime(o.gain*l,n,s),t.swell.frequency.setTargetAtTime(o.swellHz,n,s),t.swellDepth.gain.setTargetAtTime(o.gain*o.depth*l,n,s),t.bioLP.frequency.setTargetAtTime(r.bioCutoffHz,n,s),t.wet.gain.setTargetAtTime(r.reverbWet,n,s);let c=60/r.tempo,u=r.voices.find(y=>y.id==="arpegio"),h=r.voices.find(y=>y.id==="bajo");t.dL.delayTime.setTargetAtTime(Math.min(1.4,c*.75),n,.2),t.dR.delayTime.setTargetAtTime(Math.min(1.4,c*.75),n,.2),t.echoIn.gain.setTargetAtTime(this.rich?.13:0,n,s);let f=Math.max(0,Math.min(1,r.v??1)),p=this._padRoot(),g=e?.05:1.2;[1,1.5,2,2*Math.pow(2,4/12)].forEach((y,x)=>t.padOsc[x].frequency.setTargetAtTime(p*y,n,g)),t.padG[3].gain.setTargetAtTime(.3*f*f,n,e?.3:2),t.pad.gain.setTargetAtTime(this.rich?.05*(.4+.6*f):0,n,e?.3:1.5);let v=a==="gases"?2:1;[.5,.75,1].forEach((y,x)=>t.pedalOsc[x].frequency.setTargetAtTime(p*y*v,n,g)),t.pedal.gain.setTargetAtTime(this.rich?.11/v*r.p:0,n,e?.3:1.5);let m=At.default.pressureOf(a),d=m.type==="heat";t.anthro.gain.setTargetAtTime(d||this.rich?0:r.anthroGain,n,s),t.heat.gain.setTargetAtTime(d&&!this.rich?r.p*r.p:0,n,s),d&&(t.heatA.frequency.setTargetAtTime(m.hz,n,s),t.heatB.frequency.setTargetAtTime(m.hz+.4+3.5*r.p,n,s),t.heatC.frequency.setTargetAtTime(m.hz*2,n,s))}_env(e,t,n,s,r){e.gain.setValueAtTime(1e-4,t),e.gain.linearRampToValueAtTime(n,t+s),e.gain.exponentialRampToValueAtTime(1e-4,t+s+r)}_tone(e,t,n,s,r=!1){let a=this.ctx,o=a.createOscillator();o.type=e;let l=a.createGain(),c=a.createStereoPanner?a.createStereoPanner():null;return o.connect(l),c?(c.pan.value=s,l.connect(c),c.connect(this.nodes.bioIn)):l.connect(this.nodes.bioIn),r&&this.rich&&l.connect(this.nodes.echoIn),o.start(t),o.stop(t+n+.05),{osc:o,g:l}}_tuned(e){let t=this.derived,n=this.rich?.15:1;return e*Math.pow(2,(t.feverCents+(Math.random()*2-1)*t.detuneCents)*n/1200)}_rootMidi(){let e=this.derived.voices.find(t=>t.id==="arpegio");return e&&e.rootMidi?e.rootMidi:60}_padRoot(){let e=At.default.midiHz(this._rootMidi());for(;e>196;)e/=2;for(;e<98;)e*=2;return e}_inKey(e){let t=this._rootMidi(),n=69+12*Math.log2(e/440),s=n,r=99;for(let a=-6;a<=6;a++)for(let o of sr){let l=t+o+12*a,c=Math.abs(l-n);c<r&&(r=c,s=l)}return At.default.midiHz(s)}_foldJ(e,t=392,n=1175){for(;e>n;)e/=2;for(;e<t;)e*=2;return e}_warm(e,t=880){for(;e>t;)e/=2;return e}_voice(e,t,n){let s=this.derived,r=this.preset.signature,a=s.velocity,o=this.ctx,l=t+Math.random()*(s.jitterMs/1e3);if(e.id==="bajo"){let c=r==="jungla"?.16:.5,{osc:u,g:h}=this._tone("sine",l,c,0),f=this._tuned(e.hz);if(u.frequency.setValueAtTime(f,l),u.frequency.exponentialRampToValueAtTime(f*.62,l+c),this._env(h,l,.5*a,.006,c),this.rich){let p=this._tone("triangle",l,c,0);p.osc.frequency.setValueAtTime(f*2,l),p.osc.frequency.exponentialRampToValueAtTime(f*1.24,l+c),this._env(p.g,l,.05*a,.01,c*.8)}}else if(e.id==="arpegio"){let c=s.scaleSize,u=this.arpIndex++%(c*2-2||1),h=At.default.melodyDegree(e,n,c),f=h>=0?h:u<c?u:c*2-2-u,p=this.rich&&this.firmas!==!1&&r==="jungla",g=p?this._foldJ(this._tuned(At.default.midiHz(e.rootMidi+sr[f%5]))):this._tuned(At.default.midiHz(e.rootMidi+sr[f%5])),v=r==="jungla"?.14:r==="gases"?.42:.9,{osc:m,g:d}=this._tone(r==="jungla"?"triangle":"sine",l,v,f/4*1.2-.6,!0);if(m.frequency.setValueAtTime(r==="jungla"?g*1.07:g,l),r==="jungla"&&m.frequency.exponentialRampToValueAtTime(g,l+.05),this._env(d,l,(r==="gases"?.22:.16)*a,r==="gases"?.02:.004,v),this.rich){let y=Math.max(0,Math.min(1,s.v??1)),x=Math.max(0,Math.min(1,s.d??1)),_=(r==="gases"?.22:.16)*a,R=this._warm(g),E=(A,C,S,b,I)=>{p&&(A=this._foldJ(A));let B=this._tone("sine",C,S,I,!0);B.osc.frequency.setValueAtTime(A,C),this._env(B.g,C,b,.012,S)};if(R<g*.99)E(R,l,.7,_*.5,.5-f/4);else if(!p){let A=this._tone("sine",l,v*1.1,0);A.osc.frequency.setValueAtTime(g/2,l),this._env(A.g,l,_*.22,.02,v*1.1)}if(y>.45&&n%2===0){let A=f+2,C=this._warm(this._tuned(At.default.midiHz(e.rootMidi+sr[A%5]+12*Math.floor(A/5))));E(C,l+.01,.9,_*.42*((y-.45)/.55),f/4-.5)}x>.6&&n%8===4&&E(this._warm(g,1760)*(R<g*.99?1:2),l,1.3,_*.3*((x-.6)/.4),0)}if(this.rich&&r==="gases"&&this._gasFx(e,g,f,l,n,a),r==="gases"&&!this.rich){let y=this._tone("sine",l,v*.7,-.2);y.osc.frequency.setValueAtTime(g*4,l),this._env(y.g,l,.035*a,.006,v*.7)}if(r==="hielo"){let y=this._tone("sine",l,v*.6,.3);y.osc.frequency.setValueAtTime(Math.min(g*2.76,9e3),l),this._env(y.g,l,.05*a,.003,v*.6)}}else if(e.id==="pulso"){let c=60/s.tempo/4,u=e.amHz?c*.85:.03,{osc:h,g:f}=this._tone("sine",l,u,At.default.hash01(n+1,9)*1.6-.8);h.frequency.setValueAtTime(this._tuned(this.rich?this.firmas!==!1&&r==="jungla"?this._foldJ(this._inKey(e.hz),784,1175):this._inKey(e.hz):e.hz),l);let p=.05*a;if(e.amHz){f.gain.setValueAtTime(1e-4,l),f.gain.linearRampToValueAtTime(p,l+.01),f.gain.setValueAtTime(p,l+u-.02),f.gain.linearRampToValueAtTime(1e-4,l+u);let g=o.createOscillator(),v=o.createGain();g.frequency.value=e.amHz,v.gain.value=p*.8,g.connect(v),v.connect(f.gain),g.start(l),g.stop(l+u+.05)}else this._env(f,l,p*1.6,.002,u)}else if(e.id==="canto"){if(this.bar%2===1)return;let c=this.bar/2%2===0?-.7:.7,u=this._tuned(e.hz),h=g=>this.rich?this._inKey(g):g,f=r==="gases"?[[1,1.5,1.6],[1.5,1,1.6]]:r==="jungla"?[[1,1.33,.22],[1.33,1.5,.22],[1.5,1.12,.3]]:[[1,1.02,1.8],[1.2,1.18,1.6]],p=l;for(let[g,v,m]of f){let{osc:d,g:y}=this._tone("sine",p,m,c,!0);if(d.frequency.setValueAtTime(h(u*g),p),d.frequency.exponentialRampToValueAtTime(h(u*v),p+m),this.rich&&m>.5){let x=o.createOscillator(),_=o.createGain();x.frequency.value=4.6,_.gain.setValueAtTime(0,p),_.gain.linearRampToValueAtTime(u*g*.004,p+m*.5),x.connect(_),_.connect(d.frequency),x.start(p),x.stop(p+m+.05);let R=this._tone("sine",p,m,-c*.5);R.osc.frequency.setValueAtTime(h(u*g)/2,p),R.osc.frequency.exponentialRampToValueAtTime(h(u*v)/2,p+m),R.g.gain.setValueAtTime(1e-4,p),R.g.gain.linearRampToValueAtTime(.045*a,p+m*.35),R.g.gain.exponentialRampToValueAtTime(1e-4,p+m)}y.gain.setValueAtTime(1e-4,p),y.gain.linearRampToValueAtTime(.14*a,p+m*.25),y.gain.exponentialRampToValueAtTime(1e-4,p+m),p+=m*.9}}}_gasFx(e,t,n,s,r,a){let o=this.derived,l=this.ctx,c=g=>Math.max(0,Math.min(1,g)),u=c(o.v??1),h=c(o.p??0),f=60/o.tempo,p=.22*a;for(let g of[-6,6]){let v=this._tone("sine",s,.75,g<0?-.55:.55,!0),m=p*.26;v.osc.frequency.setValueAtTime(t*Math.pow(2,g/1200),s),v.g.gain.setValueAtTime(1e-4,s),v.g.gain.linearRampToValueAtTime(m,s+.09),v.g.gain.exponentialRampToValueAtTime(1e-4,s+.75);let d=l.createOscillator(),y=l.createGain();d.frequency.value=3+5*h+(g>0?.4:0),y.gain.setValueAtTime(0,s),y.gain.linearRampToValueAtTime(m*.4,s+.2),y.gain.linearRampToValueAtTime(0,s+.65),d.connect(y),y.connect(v.g.gain),d.start(s),d.stop(s+.8)}if(r%2===0){let g=u>.6?3:u>.3?2:1;for(let v=1;v<=g;v++){let m=n+2*v,d=At.default.midiHz(e.rootMidi+sr[m%5]+12*Math.floor(m/5));for(;d>2100;)d/=2;let y=s+v*f*.25,x=this._tone("sine",y,.9,(v%2?1:-1)*(.3+.2*v),!0);x.osc.frequency.setValueAtTime(this._tuned(d),y),this._env(x.g,y,p*.3*Math.pow(.7,v)*(.35+.65*u),.03,.9)}}if(h>.35&&r%8===0){let g=t;for(;g>200;)g/=2;let v=this._tone("triangle",s,2.2,0),m=p*.45*(h-.35)/.65;v.osc.frequency.setValueAtTime(g,s),v.g.gain.setValueAtTime(1e-4,s),v.g.gain.linearRampToValueAtTime(m,s+.7),v.g.gain.exponentialRampToValueAtTime(1e-4,s+2.2)}}_gasSwell(e){let t=this.derived,n=this.ctx,s=Math.max(0,Math.min(1,t.v??1)),r=60/t.tempo*8*.95,a=this._padRoot()*2,o=this.bar/2%2?1:-1,l=n.createBiquadFilter();l.type="lowpass",l.Q.value=3.5,l.frequency.setValueAtTime(240,e),l.frequency.exponentialRampToValueAtTime(480+1900*s,e+r*.5),l.frequency.exponentialRampToValueAtTime(240,e+r);let c=n.createGain();if(c.gain.setValueAtTime(1e-4,e),c.gain.linearRampToValueAtTime(.02,e+r*.45),c.gain.linearRampToValueAtTime(1e-4,e+r),l.connect(c),n.createStereoPanner){let u=n.createStereoPanner();u.pan.setValueAtTime(-.6*o,e),u.pan.linearRampToValueAtTime(.6*o,e+r),c.connect(u),u.connect(this.nodes.bioIn)}else c.connect(this.nodes.bioIn);[1,1.5,s>.5?2*Math.pow(2,4/12):2].forEach((u,h)=>{let f=n.createOscillator(),p=n.createGain();f.type="sawtooth",f.frequency.value=a*u,f.detune.value=(h-1)*4,p.gain.value=h?.3:.45,f.connect(p),p.connect(l),f.start(e),f.stop(e+r+.05)})}_jungleFx(e,t){let n=this.derived,s=this.firmas!==!1,r=this._vNorm(),a=v=>Math.max(0,Math.min(1,v)),o=s?r:a(n.v??1),l=s?r:a(n.d??1),c=n.velocity,u=this._rootMidi(),h=60/n.tempo/4,f=(v,m)=>{let d=this._tuned(At.default.midiHz(u+sr[(v%5+5)%5]+12*(Math.floor(v/5)+m)));return s?m<=-3?this._foldJ(d,392,783):this._foldJ(d,587,1175):d},p=(v,m,d,y,x,_,R,E=.004)=>{let A=this._tone(v,d,y,_,R);A.osc.frequency.setValueAtTime(m,d),this._env(A.g,d,x,E,y)},g={0:0,6:2,10:1,14:3}[e];if(g!==void 0&&(e!==14||o>.5)&&(p("triangle",f(g,-4),t,.34,.085*c,e===0?0:e===6?-.3:.3,!1),p("sine",f(g,-3),t,.12,.03*c,0,!0)),e%2===1&&At.default.hash01(this.bar*16+e+1,3)<.22*l&&p("sine",f(Math.floor(At.default.hash01(this.bar+1,e+5)*7),-2),t,.5,.034*c,At.default.hash01(e+1,this.bar+2)*1.8-.9,!0),e%4===2&&l>.4){let v=(e===2||e===10?-1:1)*.85,m=f(e%8===2?0:2,-1);for(let d=0;d<3;d++)p("sine",m,t+d*.045,.035,.011*((l-.4)/.6),v,!1,.003)}if(s){let v=(m,d)=>{let y=this.ctx.createBufferSource(),x=this.ctx.createBiquadFilter(),_=this.ctx.createGain();y.buffer=this.noiseBuf,y.loop=!0,x.type="bandpass",x.frequency.value=500,x.Q.value=4.5,_.gain.setValueAtTime(1e-4,m),_.gain.linearRampToValueAtTime(d,m+.004),_.gain.exponentialRampToValueAtTime(1e-4,m+.07),y.connect(x),x.connect(_),_.connect(this.nodes.bioIn),y.start(m),y.stop(m+.1)};r<.6&&r>.1&&e===8&&this.bar%2===1&&([8,7,6,5].forEach((m,d)=>p("triangle",f(m,-2),t+d*.09,.2,.1*c,.6-d*.4,!1)),v(t+.4,.5*(.6-r)+.15)),r<=.25&&(e===0&&v(t,.4),e===4&&this.bar%2===0&&[5,6,7].forEach((m,d)=>p("sine",f(m,-2),t+d*.2,.45,.1*c,-.6,!0,.02)))}if(this.bar%2===1&&e===4&&o>.45){let v=(this.bar-1)/2%2===0?.7:-.7;[2,3,4].forEach((m,d)=>p("sine",f(m,-2),t+d*h*1.5,.3,.07*c*((o-.45)/.55),v,!0,.02))}}_vNorm(){(!this._vMin||this._vMin.dash!==this.dash)&&(this._vMin={dash:this.dash,min:Math.min(...this.preset.years.map(n=>n.vital.vit))});let e=this.preset.reference.vital.vit,t=this._vMin.min;return Math.max(0,Math.min(1,(this.entry.vital.vit-t)/Math.max(1,e-t)))}_n(e,t,{type:n="sine",att:s=.006,dec:r=.6,gain:a=.1,pan:o=0,echo:l=!1,from:c=0,glide:u=.1,partials:h=[[1,1]],trem:f=0}={}){let p=this.ctx,g=p.createGain(),v=p.createStereoPanner?p.createStereoPanner():null,m=1.5*this.derived.velocity;v?(v.pan.value=Math.max(-1,Math.min(1,o)),g.connect(v),v.connect(this.nodes.bioIn),l&&v.connect(this.nodes.echoIn)):(g.connect(this.nodes.bioIn),l&&g.connect(this.nodes.echoIn)),g.gain.setValueAtTime(1e-4,t),g.gain.linearRampToValueAtTime(a*m,t+s),g.gain.exponentialRampToValueAtTime(1e-4,t+s+r);for(let[d,y]of h){if(e*d>9e3)continue;let x=p.createOscillator(),_=p.createGain();x.type=n,_.gain.value=y,c?(x.frequency.setValueAtTime(c*d,t),x.frequency.exponentialRampToValueAtTime(e*d,t+u)):x.frequency.setValueAtTime(e*d,t),x.connect(_),_.connect(g),x.start(t),x.stop(t+s+r+.05)}if(f){let d=p.createOscillator(),y=p.createGain();d.frequency.value=f,y.gain.setValueAtTime(0,t),y.gain.linearRampToValueAtTime(a*m*.4,t+s+r*.3),y.gain.linearRampToValueAtTime(0,t+s+r*.9),d.connect(y),y.connect(g.gain),d.start(t),d.stop(t+s+r)}}_firmaGases(e,t,n){let s=this._G||(this._G=[45,47,50,52,54,57,59,62,64,66].map(At.default.midiHz)),r=this.ctx;if(e===0){[s[2],s[5]].concat(n>.5?[s[9]]:[]).forEach((h,f)=>this._n(h,t,{type:"triangle",att:1.5,dec:2.2,gain:.06,pan:f-1}));let o=r.createBufferSource(),l=r.createBiquadFilter(),c=r.createGain(),u=3.4;o.buffer=this.noiseBuf,o.loop=!0,l.type="lowpass",l.Q.value=.7,l.frequency.setValueAtTime(200,t),l.frequency.exponentialRampToValueAtTime(320+500*n,t+u),c.gain.setValueAtTime(1e-4,t),c.gain.linearRampToValueAtTime(.02+.02*(1-n),t+u*.4),c.gain.exponentialRampToValueAtTime(1e-4,t+u),o.connect(l),l.connect(c),c.connect(this.nodes.bioIn),o.start(t),o.stop(t+u+.05)}(n>.4?e%4===0:e%8===0)&&this._n(s[2],t,{type:"triangle",att:.004,dec:n>.4?.18:.5,gain:e===0?.12:.085,partials:[[1,1],[2,.35]]}),n>.4&&(e===6||e===14)&&this._n(s[5],t,{type:"triangle",att:.004,dec:.12,gain:.05,pan:e===6?-.4:.4,partials:[[1,1],[2,.3]]}),n>.25&&e%2===1&&e%4===3&&this._n(s[7],t,{att:.003,dec:.05,gain:.03*n,pan:e%8===3?.6:-.6});let a={0:0,6:1,10:2,14:3}[e];if(a!==void 0&&(a<3||n>.35)){let o=[5,7,8,9,7,8,9,8],l=Math.max(0,o[this.bar%2*4+a]-Math.round(4*(1-n)));this._n(s[l],t,{type:"triangle",att:.1,dec:1.4,gain:.1,pan:(a-1.5)*.4,echo:!0,trem:3+6*(1-n)})}e%8===0&&n<.6&&this._n(s[0],t,{att:.02,dec:.9,gain:.15*(.6-n)/.6,partials:[[1,1],[2,.3]]})}_firmaHielo(e,t,n){let s=this._H||(this._H=[88,90,93,95,98,100,102,105].map(At.default.midiHz)),r=Math.random;if(e===0&&n>.2&&[s[2],s[5]].forEach((a,o)=>this._n(a,t,{att:1,dec:3,gain:.02*n,pan:o?.5:-.5})),e%2===0){let a=7-e/2;a<Math.ceil(8*n)&&this._n(s[a],t,{att:.003,dec:.7,gain:.05,pan:(a-3.5)/4,echo:!0,partials:[[1,1],[2.76,.2]]})}r()<.45*(1-n)&&this._n(2300+r()*500,t+r()*.12,{from:1400,glide:.035,att:.002,dec:.09,gain:.045,pan:r()*1.6-.8,echo:!0})}_machineTick(e){if(this.rich)return;let t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="square",t.frequency.value=1500,t.connect(n),n.connect(this.nodes.anthro),this._env(n,e,.12,.001,.03),t.start(e),t.stop(e+.08)}_schedule(e,t){e===0&&this.onBar&&this.onBar(this.bar);let n=this.derived,s=this.preset.signature,r=this.rich&&this.firmas!==!1&&(s==="gases"||s==="hielo");if(r)(s==="gases"?this._firmaGases:this._firmaHielo).call(this,e,t,this._vNorm());else{let a=this.rich&&this.firmas!==!1&&s==="jungla"?this._vNorm():1;for(let o of n.voices)o.active&&o.alive[e]&&!(o.id==="canto"&&a<.3||o.id==="pulso"&&a<.2||o.id==="arpegio"&&a<.12&&e%8!==0)&&this._voice(o,t,e)}e%4===0&&n.p>.04&&At.default.pressureOf(this.preset.signature).type==="machine"&&this._machineTick(t),this.rich&&!r&&e===0&&this.bar%2===0&&s==="gases"&&this._gasSwell(t),this.rich&&this.preset.signature==="jungla"&&this._jungleFx(e,t),this.onStep&&this.onStep(e,t,n,this.reference)}_pump(){for(;this.nextTime<this.ctx.currentTime+.12;)this._schedule(this.step,this.nextTime),this.nextTime+=60/this.derived.tempo/4,this.step=(this.step+1)%jv,this.step===0&&this.bar++}_restartClock(){this.step=0,this.bar=0,this.arpIndex=0,this.nextTime=this.ctx.currentTime+.08}};var Yv={tick:[[.25,18]],diente:[[.5,60]],boton:[[.9,55],[0,70],[.9,55]],faro:[[.3,22]],confirmar:[[1,110]],anio:[[.28,18]],decada:[[.65,45]],tope:[[.8,40],[0,60],[.8,40]],soltar:[[.5,35]]},No=class{constructor(){this.level=.8,this.floor=.3,this.minMs=40,this.maxMs=220,this.busyUntil={left:0,right:0},this.lastAt={left:0,right:0},this.lastTex={left:0,right:0},this.session=null,this.fired=0,this.errors=0,this.lastError=""}setSources(e){this.session=e||null}sourcesFor(e){let t=this.session?Array.from(this.session.inputSources||[]).filter(s=>s&&s.gamepad):[],n=t.filter(s=>s.handedness===e);return n.length?n:t.filter(s=>s.handedness!=="left"&&s.handedness!=="right")}motors(e){let t=[];if(!e)return t;let n=e.hapticActuators;if(n&&n.length)for(let s of Array.from(n))s&&t.push(s);return e.vibrationActuator&&!t.includes(e.vibrationActuator)&&t.push(e.vibrationActuator),t}available(e){return this.sourcesFor(e).some(t=>this.motors(t.gamepad).length>0)}describe(){if(!this.session)return"sin sesi\xF3n VR";let e=Array.from(this.session.inputSources||[]);return e.length?e.map(t=>`${t.handedness||"?"}: ${t.gamepad?this.motors(t.gamepad).length?"vibra":"sin motor":"sin gamepad"}`).join(" \xB7 ")+` \xB7 pulsos ${this.fired}`+(this.errors?` \xB7 errores ${this.errors} ${this.lastError}`:""):"sin mandos"}fire(e,t,n){try{let s=null;if(typeof e.pulse=="function")s=e.pulse(t,n);else if(typeof e.playEffect=="function")s=e.playEffect("dual-rumble",{startDelay:0,duration:n,strongMagnitude:t,weakMagnitude:t});else return!1;return s&&s.catch&&s.catch(r=>{this.errors++,this.lastError=String(r&&r.message||r).slice(0,40)}),!0}catch(s){return this.errors++,this.lastError=String(s&&s.message||s).slice(0,40),!1}}pulse(e,t,n,s=!1){if(this.level<=0||t<=.01)return!1;let r=performance.now();if(!s&&r<this.busyUntil[e]||r-this.lastAt[e]<45)return!1;let a=Math.min(1,this.floor+t*this.level*.9),o=Math.min(this.maxMs,Math.max(this.minMs,n*2.5)),l=!1;for(let c of this.sourcesFor(e))for(let u of this.motors(c.gamepad))l=this.fire(u,a,o)||l;if(!l&&navigator.getGamepads){for(let c of Array.from(navigator.getGamepads()||[]))if(!(!c||c.hand&&c.hand!==e))for(let u of this.motors(c))l=this.fire(u,a,o)||l}return l&&(this.busyUntil[e]=r+o+20,this.lastAt[e]=r,this.fired++),l}raw(e,t,n){let s=performance.now();if(this.level<=0||s-this.lastAt[e]<45)return!1;let r=Math.min(1,Math.max(.05,t)),a=Math.min(this.maxMs,Math.max(20,n)),o=!1;for(let l of this.sourcesFor(e))for(let c of this.motors(l.gamepad))o=this.fire(c,r,a)||o;return o&&(this.busyUntil[e]=s+a+20,this.lastAt[e]=s,this.fired++),o}_shot(e,t,n){if(t<.04)return!1;let s=!1;for(let r of this.sourcesFor(e))for(let a of this.motors(r.gamepad))s=this.fire(a,t,n)||s;if(!s&&navigator.getGamepads){for(let r of Array.from(navigator.getGamepads()||[]))if(!(!r||r.hand&&r.hand!==e))for(let a of this.motors(r))s=this.fire(a,t,n)||s}return s&&this.fired++,s}play(e,t,n=1){let s=Yv[t];if(!s||this.level<=0||!e)return!1;let r=performance.now();if((t==="tick"||t==="anio"||t==="faro")&&r-this.lastAt[e]<40)return!1;this.lastAt[e]=r;let o=0,l=!1;for(let[c,u]of s){if(c>0){let h=Math.min(1,c*this.level*n),f=u;o===0?l=this._shot(e,h,f)||l:setTimeout(()=>this._shot(e,h,f),o)}o+=u}return l}texture(e,t){let n=performance.now();return n-this.lastTex[e]<120?!1:(this.lastTex[e]=n,this.pulse(e,t,16))}both(e,t,n=0){this.pulse("left",e,t,!0),this.pulse("right",e,t,!0),n&&setTimeout(()=>{this.pulse("left",e,t,!0),this.pulse("right",e,t,!0)},n+120)}};var De={D2:73.42,A2:110,D3:146.83,F3:174.61,A3:220,C4:261.63,D4:293.66,E4:329.63,F4:349.23,G4:392,A4:440,C5:523.25,D5:587.33,F5:698.46,A5:880},Uo=[De.D4,De.E4,De.F4,De.G4,De.A4,De.C5,De.D5];function nt(i,e,t,n,{attack:s=.008,decay:r=.9,gain:a=.05,partials:o=[[1,1],[2,.4],[3,.16]],glideTo:l=0}={}){let c=i.createGain();c.gain.setValueAtTime(1e-4,n),c.gain.exponentialRampToValueAtTime(a,n+s),c.gain.exponentialRampToValueAtTime(1e-4,n+s+r),c.connect(e);for(let[u,h]of o){let f=i.createOscillator(),p=i.createGain();f.type="sine",f.frequency.setValueAtTime(t*u,n),l&&f.frequency.exponentialRampToValueAtTime(l*u,n+s+r),p.gain.value=h,f.connect(p),p.connect(c),f.start(n),f.stop(n+s+r+.05)}}var ea=null;function bd(i){if(!ea||ea.sampleRate!==i.sampleRate){ea=i.createBuffer(1,i.sampleRate*2,i.sampleRate);let e=ea.getChannelData(0);for(let t=0;t<e.length;t++)e[t]=Math.random()*2-1}return ea}function Wi(i,e,t,{dur:n=.6,gain:s=.03,f0:r=400,f1:a=3e3,q:o=1.2,attack:l=.5}={}){let c=i.createBufferSource();c.buffer=bd(i),c.loop=!0;let u=i.createBiquadFilter();u.type="bandpass",u.Q.value=o,u.frequency.setValueAtTime(r,t),u.frequency.exponentialRampToValueAtTime(a,t+n);let h=i.createGain();h.gain.setValueAtTime(1e-4,t),h.gain.exponentialRampToValueAtTime(s,t+n*l),h.gain.exponentialRampToValueAtTime(1e-4,t+n),c.connect(u),u.connect(h),h.connect(e),c.start(t),c.stop(t+n+.05)}var Md={invitar(i,e,t,{dir:n=1}={}){let s=a=>{let o=i.createGain();if(i.createStereoPanner){let l=i.createStereoPanner();l.pan.value=a,o.connect(l),l.connect(e)}else o.connect(e);return o};[[De.D4,.1],[De.A4,.5],[De.D5,.95]].forEach(([a,o],l)=>nt(i,s(o*n),a,t+l*.24,{attack:.01,decay:1.3,gain:.03,partials:[[1,1],[2,.25]]}));let r=i.createGain();if(i.createStereoPanner){let a=i.createStereoPanner();a.pan.setValueAtTime(0,t),a.pan.linearRampToValueAtTime(n,t+.9),r.connect(a),a.connect(e)}else r.connect(e);Wi(i,r,t,{dur:1,gain:.012,f0:500,f1:2400,attack:.5,q:1.5})},apertura(i,e,t,{mini:n=!1}={}){if(n){nt(i,e,De.D4,t,{decay:.16,gain:.02,partials:[[1,1],[2,.2]]}),nt(i,e,De.A4,t+.06,{decay:.2,gain:.02,partials:[[1,1],[2,.2]]});return}Wi(i,e,t,{dur:.7,gain:.022,f0:300,f1:2600}),nt(i,e,De.D4,t+.05,{decay:.7,gain:.032}),nt(i,e,De.A4,t+.17,{decay:.9,gain:.032})},cierre(i,e,t,{mini:n=!1}={}){if(n){nt(i,e,De.A4,t,{decay:.16,gain:.02,partials:[[1,1],[2,.2]]}),nt(i,e,De.D4,t+.06,{decay:.2,gain:.02,partials:[[1,1],[2,.2]]});return}Wi(i,e,t,{dur:.6,gain:.02,f0:2400,f1:280,attack:.2}),nt(i,e,De.A4,t,{decay:.6,gain:.03}),nt(i,e,De.D4,t+.12,{decay:.9,gain:.032})},transicion(i,e,t){Wi(i,e,t,{dur:1.4,gain:.032,f0:180,f1:4200,attack:.7,q:.8}),nt(i,e,De.D2,t,{attack:.25,decay:1.2,gain:.05,partials:[[1,1],[2,.25]],glideTo:De.D3}),nt(i,e,De.A5,t+1.15,{decay:1.3,gain:.018,partials:[[1,1],[2,.2]]})},giro(i,e,t,{step:n=0}={}){Wi(i,e,t,{dur:.09,gain:.018,f0:1800,f1:900,q:3,attack:.1}),nt(i,e,Uo[(n%Uo.length+Uo.length)%Uo.length]/2,t,{decay:.24,gain:.024,partials:[[1,1],[2,.2]]})},confirmacion(i,e,t){nt(i,e,De.D4,t,{decay:.5,gain:.04}),nt(i,e,De.A4,t+.09,{decay:.6,gain:.036}),nt(i,e,De.D5,t+.18,{decay:.9,gain:.028})},avance(i,e,t,{pos:n=0}={}){let s=520+520*Math.min(1,Math.max(0,n));nt(i,e,s,t,{attack:.004,decay:.12,gain:.026,partials:[[1,1]]}),nt(i,e,s*2,t,{attack:.002,decay:.05,gain:.008,partials:[[1,1]]})}},Sd={orbita:{name:"\xD3rbita",desc:"Cuatro notas que suben y se abren (re, la, fa, re agudo) sobre un grave que sostiene. Luminoso, de bienvenida.",play(i,e,t){return nt(i,e,De.D3,t,{attack:.4,decay:2.6,gain:.028,partials:[[1,1],[2,.3]]}),[De.D4,De.A4,De.F4,De.D5].forEach((n,s)=>nt(i,e,n,t+s*.28,{decay:1.7,gain:.042})),3.2}},pulso:{name:"Pulso",desc:"Dos latidos graves y, despu\xE9s, una sola nota de cristal muy alta. M\xEDnimo: un coraz\xF3n y una se\xF1al.",play(i,e,t){return nt(i,e,De.D2,t,{attack:.005,decay:.3,gain:.12,partials:[[1,1]],glideTo:55}),nt(i,e,De.D2,t+.32,{attack:.005,decay:.3,gain:.08,partials:[[1,1]],glideTo:55}),nt(i,e,De.A5,t+.95,{decay:1.9,gain:.03,partials:[[1,1],[2.01,.3],[3.02,.1]]}),3}},marea:{name:"Marea",desc:"Una ola que cruza de un o\xEDdo al otro desde lo muy grave, rompe con un golpe profundo y abre en re mayor: cuatro notas que suben (re, fa\u266F, la, re) repartidas a los lados, un acorde luminoso y destellos que se alejan.",play(i,e,t){let n=i.createGain();n.connect(e);let s=i.createDelay(1),r=i.createDelay(1),a=i.createGain(),o=i.createBiquadFilter(),l=i.createGain(),c=i.createChannelMerger(2),u=i.createGain();s.delayTime.value=.31,r.delayTime.value=.31,a.gain.value=.42,o.type="lowpass",o.frequency.value=2200,l.gain.value=.5,u.connect(s),s.connect(o),o.connect(r),r.connect(a),a.connect(s),o.connect(c,0,0),r.connect(c,0,1),c.connect(l),l.connect(e);let h=(y,{to:x,at:_=t,dur:R=1,echo:E=.5}={})=>{let A=i.createGain();if(E){let C=i.createGain();C.gain.value=E,A.connect(C),C.connect(u)}if(i.createStereoPanner){let C=i.createStereoPanner();C.pan.setValueAtTime(y,_),x!==void 0&&C.pan.linearRampToValueAtTime(x,_+R),A.connect(C),C.connect(n)}else A.connect(n);return A},f=185,p=369.99,g=1174.66,v=1479.98;Wi(i,h(-.95,{to:.95,dur:2,echo:.2}),t,{dur:2.6,gain:.045,f0:90,f1:2600,attack:.66,q:.6}),nt(i,h(0,{echo:0}),De.D2/2,t,{attack:1.6,decay:3.2,gain:.1,partials:[[1,1],[2,.55],[3,.12]]}),nt(i,h(-.7),De.A2,t,{attack:1.5,decay:3,gain:.034,partials:[[1,1],[2,.25]]}),nt(i,h(.7),f,t,{attack:1.5,decay:3,gain:.028,partials:[[1,1],[2,.2]]});let m=t+1.85;nt(i,h(0,{echo:.15}),De.D2,m,{attack:.005,decay:1.8,gain:.26,partials:[[1,1],[2,.35],[3,.08]],glideTo:36.7}),nt(i,h(0,{echo:0}),58,m,{attack:.004,decay:.5,gain:.2,partials:[[1,1]],glideTo:30}),Wi(i,h(-.2,{to:-1,at:m,dur:.9,echo:.3}),m,{dur:1,gain:.05,f0:3600,f1:200,attack:.03,q:.5}),Wi(i,h(.2,{to:1,at:m,dur:.9,echo:.3}),m,{dur:1,gain:.05,f0:3e3,f1:160,attack:.03,q:.5}),[[De.D4,-.65],[p,.65],[De.A4,-.35],[De.D5,.2]].forEach(([y,x],_)=>{let R=m+.12+_*.4;nt(i,h(x),y,R,{decay:1.8,gain:.06}),nt(i,h(-x,{echo:.7}),y*2,R,{decay:1.2,gain:.016,partials:[[1,1]]})});let d=m+.12+4*.4;return nt(i,h(0,{echo:0}),De.D2,d,{attack:.02,decay:3.2,gain:.13,partials:[[1,1],[2,.45],[3,.12]]}),nt(i,h(0,{echo:0}),De.D2/2,d,{attack:.05,decay:3,gain:.09,partials:[[1,1]]}),[[De.D3,-.5,.045],[De.A3,.5,.04],[p,-.3,.036],[De.A4,.3,.03],[De.D5,0,.034]].forEach(([y,x,_])=>nt(i,h(x),y,d,{attack:.03,decay:3,gain:_,partials:[[1,1],[2,.3]]})),[[De.A5,-.95],[g,.95],[v,-.8]].forEach(([y,x],_)=>nt(i,h(x,{echo:.9}),y,d+.45+_*.3,{attack:.004,decay:1.1,gain:.012,partials:[[1,1]]})),7.4}},senal:{name:"Se\xF1al",desc:"Tres pitidos secos (la, la, re) con eco que se aleja, como un instrumento que encuentra su dato. Corto y t\xE9cnico.",play(i,e,t){let n=[[De.A4,0,.18],[De.A4,.16,.18],[De.D5,.36,1.1]];for(let[s,r]of[[0,1],[1,.4],[2,.16]])for(let[a,o,l]of n)nt(i,e,a,t+o+s*.42,{attack:.004,decay:l,gain:.05*r,partials:[[1,1],[2,.15]]});return 2.4}}},zo=class{constructor(){this.ctx=null}ensure(e,t){if(this.ctx===e)return!0;try{let n=e.createBufferSource();return n.buffer=bd(e),n.loop=!0,this.bp=e.createBiquadFilter(),this.bp.type="bandpass",this.bp.Q.value=2.6,this.bp.frequency.value=500,this.g=e.createGain(),this.g.gain.value=0,this.pan=e.createStereoPanner?e.createStereoPanner():null,n.connect(this.bp),this.bp.connect(this.g),this.pan?(this.g.connect(this.pan),this.pan.connect(t)):this.g.connect(t),n.start(),this.ctx=e,!0}catch{return!1}}set(e,t,n,s=.5,r=0){if(!this.ensure(e,t))return;let a=e.currentTime,o=Math.min(1,Math.max(0,n));this.g.gain.setTargetAtTime(o*.026,a,.05),this.bp.frequency.setTargetAtTime(350+2600*Math.min(1,Math.max(0,s)),a,.06),this.pan&&this.pan.pan.setTargetAtTime(Math.min(1,Math.max(-1,r)),a,.08)}};var Nt={gases:{num:"01",name:"Gases de efecto invernadero",short:"Gases",color:16726815,pressure:16726815,az:0,line:"La atm\xF3sfera respira. Un comp\xE1s es un a\xF1o: cada respiraci\xF3n empieza m\xE1s arriba."},hielo:{num:"02",name:"Hielo marino",short:"Hielo",color:3107839,pressure:16726815,az:120,line:"El \xC1rtico en septiembre. El grave que crece es la temperatura."},jungla:{num:"03",name:"Jungla",short:"Jungla",color:1026392,pressure:16726815,az:-120,line:"La Amazonia. Lo talado no vuelve: las voces que se apagan no regresan."}},Fu=4063130,ta={lobby:{file:"glb/lobby.glb",position:[0,0,0],rotationY:60,scale:1,hideProcedural:!1},gases:{file:"glb/gases.glb",position:[0,0,-26.1],rotationY:0,scale:1,hideProcedural:!1,center:[0,0,14.1],seed:11,sectorScale:[.8,.97],scatter:[{match:"^Pluma_Humo|^Voz_Atmosfera|^Particulas_CO2",copy:!0}]},gases2:{file:"glb/gases2.glb",position:[0,0,-26.1],rotationY:0,scale:1,hideProcedural:!1,center:[0,0,14.1],seed:11,sectorScale:[.8,.97],scatter:[{match:"^Pluma_Humo|^Voz_Atmosfera|^Particulas_CO2",copy:!0}]},hielo0:{file:"glb/hielo0.glb",position:[0,0,-26.1],rotationY:0,scale:1,hideProcedural:!1,center:[0,0,26.1],seed:23,scatter:[{match:"^Placa_Hielo|^Voz_Verde",move:.72,r:[.75,1.3]},{match:"^Lineas_Agua|^Cordillera_Nieve",copy:!0}]},hielo:{file:"glb/hielo.glb",position:[0,0,-26.1],rotationY:0,scale:1,hideProcedural:!1,center:[0,0,26.1],seed:23,scatter:[{match:"^Placa_Hielo|^Voz_Verde",move:.72,r:[.75,1.3]},{match:"^Lineas_Agua",copy:!0}]},hielo2:{file:"glb/hielo2.glb",position:[0,0,-26.1],rotationY:0,scale:1,hideProcedural:!1,center:[0,0,26.1],seed:23,scatter:[{match:"^Placa_Deshielo",move:.72,r:[.75,1.3]},{match:"^Lineas_Agua",copy:!0}]},jungla:{file:"glb/jungla.glb",position:[0,0,-9.4],rotationY:0,scale:.6,scaleY:3,hideProcedural:!1,center:[0,0,15.7],seed:37,sectors:7,sectorScale:[.85,1.2],scatter:[{match:"^Fronda_Marco",hide:!0},{match:"^Tallos_",copy:!0},{match:"^Hoja_|^Voz_",instanced:!0,keep:.6,thin:.3}]},jungla2:{file:"glb/jungla2.glb",position:[0,0,-9.4],rotationY:0,scale:.6,scaleY:3,hideProcedural:!1,center:[0,0,15.7],seed:37,sectors:7,sectorScale:[.85,1.2],scatter:[{match:"^Fronda_Marco",hide:!0},{match:"^Tallos_|^Tocones_",copy:!0},{match:"^Hoja_|^Voz_",instanced:!0,keep:.6,thin:.3}]},fin:{file:"glb/fin.glb",position:[0,0,0],rotationY:0,scale:1,hideProcedural:!0}},tt={variantAt3:[.33,.66],variantAt:.5,platformLift:1.4,introBars:2,sphereCenter:[0,1.38,-.7],sphereBelowEyes:.42,sphereRadius:.2,sphereVolume:2,pauseBelowScale:.75,maxScale:2.2,maxYearsPerBar:4,comfort:.7,vibrarMelodia:!1,giroRatio:2,sonidoRico:!0,smogMax:.045,smogColor:4865072,voz:{rate:.92,pitch:1.05,volume:.95,pausa:280,respiro:2500},lobbyLevel:.16,leitmotiv:"marea",diagnostico:!0};var ft=Math.PI/180,zt=Math.PI*2,Sn=(i,e,t)=>new P(Math.sin(i*ft)*e,t,-Math.cos(i*ft)*e),Qe=(i,e,t)=>i+(e-i)*t,St=(i,e,t)=>Math.min(t,Math.max(e,i)),$v=i=>"#"+i.toString(16).padStart(6,"0"),Xt=new lo({antialias:!0});Xt.setPixelRatio(Math.min(window.devicePixelRatio,2));Xt.setSize(window.innerWidth,window.innerHeight);Xt.xr.enabled=!0;Xt.xr.setReferenceSpaceType("local-floor");document.body.appendChild(Xt.domElement);var Ot=new uo;Ot.background=new Me(526344);var ps={color:new Me(tt.smogColor??4865072),base:new Me(526344),k:0};Ot.fog=new co(ps.color.getHex(),0);var Mn=new Bt(70,window.innerWidth/window.innerHeight,.05,400);Mn.position.set(0,1.6,0);Mn.rotation.order="YXZ";Ot.add(Mn);Ot.add(new bo(16777215,2241348,1.2));var zd=new tr(16777215,1.2);zd.position.set(2,5,3);Ot.add(zd);var re=new Do;re.rich=tt.sonidoRico!==!1;var Vt=new No;Vt.level=tt.comfort;var nn=(i,e,t)=>{i?Vt.play(i,e,t):(Vt.play("left",e,t),Vt.play("right",e,t))},L={state:"inicio",info:!1,desc:!1,dash:"hielo",yearPos:0,scale:1,speed:1,scrubbing:!1,sensory:!1,uiAlpha:1,hover:null,xr:!1,beat:0};L.lang=(()=>{try{return localStorage.getItem("orbis-lang")}catch{return null}})()==="en"?"en":"es";var Ae=(i,e)=>L.lang==="en"?e:i,pa=()=>L.lang==="en"?"en-US":"es-MX",ko={name:{gases:"Greenhouse gases",hielo:"Sea ice",jungla:"Rainforest"},unit:{gases:"ppm of CO\u2082 at Mauna Loa",hielo:"million km\xB2 in September",jungla:"km\xB2 cleared that year"},source:{gases:"NOAA Global Monitoring Laboratory",hielo:"NSIDC Sea Ice Index, Arctic",jungla:"INPE PRODES, Legal Amazon"},voz:{bajo:"bass",arpegio:"melody",pulso:"pulse",canto:"song"}};for(let i of Dt){let e=Nt[i],t=Zn[i],n={name:e.name,unit:t.unit,source:t.source};Object.defineProperty(e,"name",{get:()=>Ae(n.name,ko.name[i])}),Object.defineProperty(t,"unit",{get:()=>Ae(n.unit,ko.unit[i])}),Object.defineProperty(t,"source",{get:()=>Ae(n.source,ko.source[i])})}window.__nucleo={app:L,synth:re,haptics:Vt};var Bu=1/0,Oo=-1;function rn(i,e){let t=re.ctx;if(!(!t||t.state!=="running"||!re.nodes))try{let n=t.createGain();n.gain.value=Math.min(4,.5/Math.max(.05,re.level))*(e&&e.vol||1),n.connect(re.nodes.master),Md[i](t,n,t.currentTime,e)}catch{}}var Od=[];function hn(i,e=1){return i.transparent=!0,i.userData.base=e,i.opacity=e,Od.push(i),i}var Fd=[];function Vn(i,e,t){return i.userData.hoverId=e,i.userData.onSelect=t,Fd.push(i),i}function Ju(i,e,t,n,s,r){let a="";for(let o of e.split(" ")){let l=a?a+" "+o:o;i.measureText(l).width>s&&a?(i.fillText(a,t,n),a=o,n+=r):a=l}return a&&i.fillText(a,t,n),n+r}var Qu=[];function Mi(i,e,t,n,s){let r=document.createElement("canvas");r.width=t,r.height=n;let a=r.getContext("2d"),o=new Xr(r);o.colorSpace=It,o.anisotropy=4;let l=new He(new Oi(i,e),hn(new Lt({map:o,depthWrite:!1,side:Pt})));return l.redraw=()=>{a.clearRect(0,0,t,n),a.save(),a.shadowColor="rgba(0,0,0,.75)",a.shadowBlur=16,s(a,t,n),a.restore(),o.needsUpdate=!0},l.renderOrder=10,l.redraw(),Qu.push(l),l}var Tt='"Manrope", "Helvetica Neue", Helvetica, Arial, sans-serif',rt={panel:"#141414",atmo1:"#131a21",atmo2:"#46525c",hairline:"#292929",track:"#262626",grey2:"#1f1f1f",tick:"#6e6e6e",ink:"#f5f5f5",muted:"#a8a8a8",signal:"#ff5a3c",orbit:"#5b8cff",live:"#3dff9a"},bi=i=>({16726815:rt.signal,3107839:rt.orbit,1026392:rt.live})[i]||$v(i),Yi=(i,e)=>{try{i.letterSpacing=e+"px"}catch{}};function eh(i,e,t,n,s){i.save(),i.lineCap="round",i.strokeStyle=s,i.globalAlpha=.55,i.shadowColor=s,i.shadowBlur=14,i.lineWidth=10,i.beginPath(),i.moveTo(e,t),i.lineTo(e+n,t),i.stroke(),i.globalAlpha=1,i.shadowBlur=0,i.lineWidth=4,i.beginPath(),i.moveTo(e,t),i.lineTo(e+n,t),i.stroke(),i.restore()}var ca=new pi(new jr(new Js(7,3)),hn(new Jt({color:7237230}),.06));ca.position.y=1.2;Ot.add(ca);var th=new He(new fs(.35,.38,64),hn(new Lt({color:16777215,side:Pt}),.35));th.rotation.x=-Math.PI/2;th.position.y=.01;Ot.add(th);var $i=new Mt,Tn=new Mt,ma=new Mt;Ot.add($i,Tn,ma);var gr={lobby:[],fin:[],amb:[]},Bd={};for(let i of Dt){let e=Nt[i],t=Zn[i],n=new He(new fs(.55,1.7,48,1,(90-e.az-58)*ft,116*ft),hn(new Lt({color:e.color,side:Pt,depthWrite:!1}),.28));n.rotation.x=-Math.PI/2,n.position.y=.02;let s=Mi(1.7,1,1024,602,(a,o,l)=>{a.fillStyle=rt.muted,a.font=`600 30px ${Tt}`,a.fillText(e.num,56,96),eh(a,56+a.measureText(e.num).width+22,86,28,bi(e.color)),a.fillStyle=rt.ink,a.font=`700 ${e.name.length>14?68:104}px ${Tt}`,Yi(a,-2.5);let c=Ju(a,e.name,52,e.name.length>14?196:216,o-104,76);Yi(a,0),a.fillStyle=rt.muted,a.font=`500 26px ${Tt}`,a.fillText(`${t.years[0].year}\u2013${t.years[t.years.length-1].year} \xB7 ${t.source}`,56,c+4)});s.position.copy(Sn(e.az,2.6,1.55)),s.lookAt(0,1.55,0);let r=()=>Gn(i);Vn(n,i,r),Vn(s,i,r),$i.add(n,s),gr.lobby.push(s),Bd[i]={sec:n,pan:s}}var vs=Mi(1.5,.3,1024,205,(i,e,t)=>{i.textAlign="center",i.fillStyle=rt.ink,i.font=`700 72px ${Tt}`,Yi(i,-2),i.fillText("Orbe",e/2,88),Yi(i,0),i.fillStyle=rt.muted,i.font=`500 28px ${Tt}`,i.fillText(Ae("Elige un lugar","Choose a place"),e/2,150),tt.diagnostico&&(i.font=`500 20px ${Tt}`,i.fillText(`${L.xr?"VR":Ae("Pantalla","Screen")} \xB7 ${Vt.describe()}`,e/2,192)),i.textAlign="left"});vs.position.copy(Sn(0,2.6,2.35));vs.lookAt(0,2,0);$i.add(vs);gr.lobby.push(vs);var kd={bajo:.5,pulso:.85,arpegio:1.2,canto:1.55},nh=3.4,sn=[],Gu=new Mt;Tn.add(Gu);var Td=new Ie,Hd=new Me,j_=new P,Y_=new gn,$_=new P;function Vd(i){let e=[];return i.forEach((t,n)=>t&&e.push(n)),e}function ua(i,e,t,n,s,r){let a=[],o=[],l=[];for(let u=0;u<=s;u++){let h=u/s,f=Qe(e,t,h),p=Math.sin(f)*i,g=-Math.cos(f)*i,v=r?h*h:1;if(a.push(p,-n/2,g,p,n/2,g),o.push(v,v,v,v,v,v),u<s){let m=u*2;l.push(m,m+1,m+2,m+1,m+3,m+2)}}let c=new ct;return c.setAttribute("position",new st(a,3)),c.setAttribute("color",new st(o,3)),c.setIndex(l),c}var Zv=ua(nh,-15*ft,0,.012,15,!0),Kv=ua(nh,-1.4*ft,.2*ft,.028,3,!1),Ed=()=>new Lt({color:0,vertexColors:!0,blending:os,depthWrite:!1,transparent:!0,side:Pt});function Jv(){for(let i of sn)Gu.remove(i.mesh,i.head),i.mesh.material.dispose(),i.head.material.dispose();sn=[],re.reference.voices.forEach((i,e)=>Vd(i.pattern).forEach((t,n)=>{let s=new He(Zv,Ed()),r=new He(Kv,Ed());s.position.y=r.position.y=kd[i.id]??1,s.frustumCulled=r.frustumCulled=!1,Gu.add(s,r),sn.push({voice:i.id,vi:e,j:n,az:t/16*360,flash:0,alive:!0,mesh:s,head:r})}))}function qi(){let i=0;for(let e of sn)e.alive&&i++;return i}function Gd(){let i=re.derived;for(let e of sn){let t=i.voices[e.vi],n=Vd(t.pattern)[e.j];e.step=n,e.targetAz=n/16*360,e.alive=t.active&&t.alive[n]}}var Z_=new Me(Fu),K_=new Me(3552822),ku=new Me;function Qv(i,e){ku.set(bi(Nt[L.dash].color));for(let t of sn){let n=(t.targetAz-t.az+540)%360-180;t.az+=n*Math.min(1,i*3),t.flash=Math.max(0,t.flash-i*1.8),t.mesh.rotation.y=t.head.rotation.y=-t.az*ft,t.mesh.material.color.copy(ku).multiplyScalar((t.alive?.2+t.flash*1.1:.035)*e),t.head.visible=t.alive&&t.flash>.02,t.head.material.color.copy(ku).lerp(Hd.set(16777215),.35).multiplyScalar(t.flash*1.5*e)}}var cr=(i,e,t,n)=>new Fi(new ct().setFromPoints(Array.from({length:128},(s,r)=>new P(Math.sin(r/128*zt)*i,e,-Math.cos(r/128*zt)*i))),hn(new Jt({color:t}),n)),e_=Object.values(kd).map(i=>{let e=cr(nh,i,16777215,.07);return Tn.add(e),e}),Wu=14,t_=Array.from({length:Wu},(i,e)=>{let t=cr(4.2,2.3+e*.16+e%2*.04,16734780,0);return Tn.add(t),t});[3,6,9].forEach((i,e)=>Tn.add(cr(i,.014-tt.platformLift,16777215,[.08,.055,.035][e])));var Wd=new Mt;Tn.add(Wd);var $o=new Mt;Tn.add($o);var ih=new He(new Ks(1.5,1.42,.07,72),new yn({color:1052688,roughness:.55,metalness:.5}));ih.position.y=-.036;$o.add(ih,cr(1.5,.002,16119285,.3),cr(1.1,.002,16119285,.09));$o.add(new pi(new ct().setFromPoints(Array.from({length:12},(i,e)=>[Sn(e*30,1.54,.002),Sn(e*30,e%3===0?1.62:1.58,.002)]).flat()),hn(new Jt({color:7237230}),.8)));var Zo=new He(new fs(1.455,1.49,24,1,82*ft,16*ft),new Lt({color:16777215,blending:os,depthWrite:!1,transparent:!0,side:Pt}));Zo.rotation.x=-Math.PI/2;Zo.position.y=.003;$o.add(Zo);var Xi=i=>`${Math.round(St(i,0,1)*100)} %`,an=Mi(1.3,.62,1280,610,(i,e,t)=>{let n=Nt[L.dash],s=Zn[L.dash],r=re.entry,a=re.derived,o=bi(n.color),l=L.hover==="isla";i.fillStyle=rt.muted,i.font=`600 30px ${Tt}`,i.fillText(`${n.num} \xB7 ${n.name}`,52,72),i.fillStyle=rt.ink,i.font=`700 150px ${Tt}`,Yi(i,-4.5),i.fillText(re.idx===0?Ae("Intacto","Intact"):String(r.year),44,232),Yi(i,0);let c=52,u=L.info?e-52:700,h=282,f=re.idx/re.count,p=Qe(c,u,f);i.fillStyle="rgba(245,245,245,.22)",i.fillRect(c,h-1,u-c,2),i.fillStyle=rt.ink,i.fillRect(c,h-2,p-c,4),eh(i,Math.max(c,p-26),h,26,o);let g=(v,m)=>{i.fillStyle=l?rt.ink:rt.muted,i.font=`${l?700:600} 34px ${Tt}`,i.fillText(v,52,m),i.fillRect(52,m+12,i.measureText(v).width,l?4:2)};if(!L.info){g(Ae("Ver el dato","See the data"),362);return}i.fillStyle=rt.ink,i.font=`600 46px ${Tt}`,i.fillText(re.idx===0?Ae("As\xED suena el lugar sano","This is how the healthy place sounds"):`${Number(r.value).toLocaleString(pa())} ${s.unit}`,52,356),i.fillStyle=rt.muted,i.font=`500 32px ${Tt}`,i.fillText(Ae(`${qi()} de ${sn.length} voces vivas`,`${qi()} of ${sn.length} voices alive`),52,410),i.fillText(Ae(`Vitalidad ${Xi(a.v)} \xB7 Diversidad ${Xi(a.d)} \xB7 Estabilidad ${Xi(a.s)} \xB7 Presi\xF3n ${Xi(a.p)}`,`Vitality ${Xi(a.v)} \xB7 Diversity ${Xi(a.d)} \xB7 Stability ${Xi(a.s)} \xB7 Pressure ${Xi(a.p)}`),52,458),i.font=`500 26px ${Tt}`,i.fillText(`${s.years[0].year}\u2013${s.years[s.years.length-1].year} \xB7 ${Ae("Fuente","Source")}: ${s.source}`,52,504),g(Ae("Ocultar","Hide"),568)});an.position.copy(Sn(26,2.3,1.72));an.lookAt(0,1.6,0);Tn.add(an);Vn(an,"isla",()=>rh());var na=i=>i.length<2?i.join(""):i.slice(0,-1).join(", ")+Ae(" y "," and ")+i[i.length-1];function sh(){if(L.state==="lobby"){let c=f=>{let p=pr(Nt[f].az*ft-Q.angle);return Math.abs(p)<.3?Ae("al frente","in front"):p>0?Ae("a tu derecha","on your right"):Ae("a tu izquierda","on your left")},u=na(Dt.map(f=>`${Nt[f].name} ${c(f)}`)),h=Nt[Q.front].name;return[Ae(`Lobby. Tres lugares a tu alrededor: ${u}.`,`Lobby. Three places around you: ${u}.`),Ae(`Al frente: ${h}. Suena su firma.`,`In front: ${h}. Its signature is playing.`),Ae("Mant\xE9n el gatillo y mueve la mano para girar el mundo. Un toque corto entra al lugar del frente.","Hold the trigger and move your hand to turn the world. A short press enters the place in front.")]}let i=Nt[L.dash],e=Zn[L.dash],t=re.entry,n=re.derived,s=Ae(`Quedan ${qi()} de ${sn.length} voces.`,`${qi()} of ${sn.length} voices remain.`);if(L.state==="fin")return[Ae(`Fin del recorrido en ${i.name}.`,`End of the journey in ${i.name}.`),s,Ae("Toca el centro del aro para volver al lobby.","Tap the centre of the ring to go back to the lobby.")];let r=c=>Ae(c.id,ko.voz[c.id]||c.id),a=n.voices.filter(c=>c.active).map(r),o=n.voices.filter(c=>!c.active).map(r),l=Number(t.value).toLocaleString(pa());return[re.idx===0?Ae(`${i.name}, lugar intacto. As\xED suena sano.`,`${i.name}, intact place. This is how it sounds when healthy.`):Ae(`${i.name}, a\xF1o ${t.year}: ${l} ${e.unit}.`,`${i.name}, year ${t.year}: ${l} ${e.unit}.`),Ae(`Suenan ${na(a)||"muy pocas voces"}${o.length?`. En silencio: ${na(o)}`:""}. ${qi()} de ${sn.length} voces vivas.`,`Playing: ${na(a)||"very few voices"}${o.length?`. Silent: ${na(o)}`:""}. ${qi()} of ${sn.length} voices alive.`),n.p<.33?Ae("Sonido claro y estable.","Clear, steady sound."):n.p<.66?Ae("El sonido se tensa: hay m\xE1s presi\xF3n.","The sound tightens: pressure is rising."):Ae("Sonido denso y \xE1spero: presi\xF3n alta.","Dense, rough sound: high pressure."),Ae("Vibraci\xF3n: cada a\xF1o es un toque; las d\xE9cadas, uno m\xE1s firme. Mant\xE9n el gatillo y gira la mano alrededor de la esfera para moverte en el tiempo.","Vibration: each year is one tap; decades, a firmer one. Hold the trigger and move your hand around the sphere to travel in time.")]}var je={pending:"",at:0,token:0,cache:{},prio:!1,key:"",lastKey:"",lastText:"",speaking:!1,endedAt:0,dashSaid:""};function n_(){let i=L.lang==="en"?"en":"es";if(je.cache[i])return je.cache[i];let e=(speechSynthesis.getVoices()||[]).filter(o=>(o.lang||"").toLowerCase().replace("_","-").startsWith(i));if(!e.length)return null;let t=/paulina|m[oó]nica|sabina|dalia|elvira|helena|laura|paloma|marisol|ximena|elena|lucia|lucía|isabela|angelica|angélica|soledad|samantha|aria|jenny|zira|sonia|libby|karen|moira|tessa|allison|ava|susan|emma|michelle|serena|victoria|female|mujer|femenin/i,n=/jorge|juan|diego|pablo|ra[uú]l|carlos|enrique|david|mark|daniel|alex|fred|guy|ryan|george|tom|aaron|male\b|hombre|masculin/i,s=/natural|neural|online|premium|enhanced|mejorad|siri|wavenet/i,r=L.lang==="en"?["en-us","en-gb"]:["es-mx","es-us","es-419","es-es"],a=o=>{let l=o.name||"",c=(o.lang||"").toLowerCase().replace("_","-"),u=r.indexOf(c);return(t.test(l)?6:0)-(n.test(l)&&!t.test(l)?6:0)+(s.test(l)?5:0)+(/google/i.test(l)?2:0)+(u>=0?3-u*.5:0)+(o.localService?0:1)};return je.cache[i]=e.slice().sort((o,l)=>a(l)-a(o))[0]}if(window.speechSynthesis)try{speechSynthesis.addEventListener("voiceschanged",()=>{je.cache={}}),speechSynthesis.getVoices()}catch{}function ia(i,{prio:e=!1,key:t="",espera:n=800}={}){if(!(!L.desc||!window.speechSynthesis||!i)){if(!e&&(t&&t===je.lastKey||i===je.lastText)){je.prio||(je.pending="");return}je.pending&&je.prio&&!e||(je.pending=i,je.prio=e,je.key=t,je.at=performance.now()+(e?Math.min(n,400):n))}}function i_(){let i=performance.now();if(!je.pending||i<je.at)return;if(L.scrubbing||ji.some(a=>a.grab||a.grip)){je.at=i+400;return}let e=tt.voz||{};if(!je.prio&&(je.speaking||i-je.endedAt<(e.respiro??2500)))return;let t=je.pending,n=t.split(/(?<=[.!?])\s+/).filter(Boolean),s=++je.token;je.pending="",je.lastText=t,je.lastKey=je.key,je.prio=!1,je.speaking=!0;let r=()=>{s===je.token&&(je.speaking=!1,je.endedAt=performance.now())};try{speechSynthesis.cancel();let a=n_(),o=l=>{if(s!==je.token)return;if(l>=n.length||!L.desc)return r();let c=new SpeechSynthesisUtterance(n[l]);c.lang=a?a.lang:pa(),a&&(c.voice=a),c.rate=e.rate??.92,c.pitch=e.pitch??1.05,c.volume=e.volume??.95,c.onend=()=>setTimeout(()=>o(l+1),e.pausa??280),c.onerror=c.onend,speechSynthesis.speak(c)};o(0),setTimeout(r,3e3+t.length*110)}catch{r()}}var ur=Mi(1.5,.55,1200,440,(i,e,t)=>{if(!L.desc)return;i.fillStyle=rt.muted,i.font=`600 26px ${Tt}`,i.fillText(Ae("Descripci\xF3n","Description"),40,52),i.fillStyle=rt.ink,i.font=`500 32px ${Tt}`;let n=106;for(let s of sh())n=Ju(i,s,40,n,e-80,42)+8});ur.position.copy(Sn(-30,2.2,.95));ur.lookAt(0,1.5,0);ur.visible=!1;Ot.add(ur);var Si=Mi(.62,.11,900,160,(i,e,t)=>{let n=L.hover==="descripciones",s=L.desc?Ae("Ocultar descripciones","Hide descriptions"):Ae("Ver descripciones","Show descriptions");i.fillStyle=n?rt.ink:rt.muted,i.font=`${n?700:600} 54px ${Tt}`,i.fillText(s,30,84),i.fillRect(30,104,i.measureText(s).width,n?4:2)});Si.position.copy(Sn(30,2.2,.95));Si.lookAt(0,1.5,0);Si.visible=!1;Ot.add(Si);Vn(Si,"descripciones",()=>Xd());var vr=Mi(.62,.11,900,160,(i,e,t)=>{let n=L.hover==="idioma",s=Ae("English","Espa\xF1ol");i.fillStyle=n?rt.ink:rt.muted,i.font=`${n?700:600} 54px ${Tt}`,i.fillText(s,30,84),i.fillRect(30,104,i.measureText(s).width,n?4:2)});vr.position.copy(Sn(30,2.2,.8));vr.lookAt(0,1.5,0);vr.visible=!1;Ot.add(vr);Vn(vr,"idioma",()=>uh(L.lang==="en"?"es":"en"));function rh(){L.info=!L.info,rn(L.info?"apertura":"cierre"),an.redraw(),L.info&&ia(sh()[0],{prio:!0})}function Xd(){L.desc=!L.desc,rn(L.desc?"apertura":"cierre"),Xu="",Si.redraw(),!L.desc&&window.speechSynthesis&&(je.pending="",je.token++,speechSynthesis.cancel())}var Xu="",Ad="",wd=0;function s_(){tt.diagnostico&&L.state==="lobby"&&performance.now()-wd>1e3&&(wd=performance.now(),vs.redraw());let i=L.state!=="inicio"&&L.state!=="intro";if(ur.visible=i&&L.desc,Si.visible=i,vr.visible=i,an.scale.setScalar(Qe(an.scale.x,L.info?1:.62,.2)),!i||!L.desc)return;i_();let e=`${L.state}|${L.dash}|${re.idx}|${Q.front}`;if(e===Xu)return;Xu=e,ur.redraw();let t=sh(),n=`${L.dash}|${re.idx}`,s=re.entry,r=()=>{let a=je.dashSaid!==L.dash;return je.dashSaid=L.dash,a?t[0]:re.idx===0?Ae("Lugar intacto.","Intact place."):`${s.year}: ${Number(s.value).toLocaleString(pa())}.`};L.state!==Ad?(Ad=L.state,je.dashSaid=L.state==="ambiente"?L.dash:"",ia(L.state==="ambiente"?`${t[0]} ${t[3]}`:t.join(" "),{prio:!0,key:L.state==="ambiente"?n:""})):L.state==="lobby"?ia(t[1],{key:"frente|"+Q.front,espera:1e3}):L.state==="ambiente"&&performance.now()-lh<1500?ia(r(),{key:n,espera:900}):L.state==="ambiente"&&re.entry.year%10===0&&ia(`${r()} ${t[1]} ${t[2]}`,{key:n})}var fn=new Mt;fn.position.fromArray(tt.sphereCenter);Tn.add(fn);var ah=new pi(new jr(new Js(tt.sphereRadius,1)),hn(new Jt({color:16777215}),.85)),qd=new He(new Js(.05,2),hn(new Lt({color:Fu}),.9)),Ko=new He(new Qs(tt.sphereRadius*1.25,16,12),new Lt({transparent:!0,opacity:0,depthWrite:!1}));fn.add(ah,qd,Ko);gr.amb.push(ah);var Xe=(()=>{let i=Qr.points,e=i.length/3,t=tt.sphereRadius/Qr.radius,n=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e*3),a=new Float32Array(e),o=new Float32Array(e),l=new Float32Array(e*3),c=new P,u=new P,h=new P,f=new P(0,1,0);for(let m=0;m<e;m++)c.set(i[m*3],i[m*3+2],-i[m*3+1]).normalize(),u.crossVectors(f,c),u.lengthSq()<1e-6&&u.set(1,0,0),u.normalize(),h.crossVectors(c,u),n.set([c.x,c.y,c.z],m*3),s.set([u.x,u.y,u.z],m*3),r.set([h.x,h.y,h.z],m*3),a[m]=(Math.atan2(c.x,c.z)/zt+1)%1,o[m]=Math.sqrt(Math.max(0,1-c.y*c.y)),l[m*3+1]=.6,l[m*3+2]=.22;let p=new Ks(.045*t,.062*t,.24*t,6);p.translate(0,.12*t,0),p.rotateX(Math.PI/2);let g=new hs(p,new yn({color:16777215,roughness:.45,metalness:.05,flatShading:!0}),e);g.instanceMatrix.setUsage(tu),g.frustumCulled=!1,g.instanceColor=new di(new Float32Array(e*3).fill(.22),3),g.instanceColor.setUsage(tu);let v=new He(new Qs(tt.sphereRadius*.93,32,20),new yn({color:789778,roughness:.6,metalness:.2}));return{n:e,k:t,N:n,R:s,U:r,fr:a,lat:o,st:l,mesh:g,core:v,val:null,pre:null,dash:null,crush:[null,null],lastTouch:[-1,-1],lastSound:0,expandDir:new P(0,0,1),expand:0}})();fn.add(Xe.core,Xe.mesh);ah.visible=!1;qd.visible=!1;window.__nucleo.KS=Xe;function jd(i){let e=Zn[i],t=e.years,n=t.map(h=>Number(h.value)),s=Math.min(...n),r=Math.max(...n),a=r-s||1,o=h=>.12+.88*St((Number(h)-s)/a,0,1),l=(h,f)=>St(((h.vital&&h.vital.pre)??f*100)/100,0,1),c=e.reference||t[0],u=o(c.value??t[0].value);Xe.val=new Float32Array(t.length+1),Xe.pre=new Float32Array(t.length+1),Xe.val[0]=u,Xe.pre[0]=l(c,.05),t.forEach((h,f)=>{Xe.val[f+1]=o(h.value),Xe.pre[f+1]=l(h,Xe.val[f+1])}),Xe.dash=i}var qu={gases:[[.52,.36,.92],[1,.4,.34],[1,.8,.36]],hielo:[[.06,.14,.42],[.25,.6,1],[.9,.97,1]],jungla:[[.04,.42,.22],[.1,.66,.34],[.24,1,.6]]},hr=new P,J_=qu.gases,Yd=[0,2,4,7,9];function oa(i,e,t=!1){if(!e){Xe.crush[i]=null,Xe.lastTouch[i]=-1;return}let n=fn.worldToLocal(e.clone());Xe.crush[i]=t?n.normalize().multiplyScalar(Qr.radius):n.divideScalar(Xe.k)}function ju(i,e){let t=Xe.crush[i];if(!t||!Xe.val)return 0;let n=Math.min(re.count,Math.round((Math.atan2(t.x,t.z)/zt+1)%1*re.count)),s=Xe.val[n];if(n!==Xe.lastTouch[i]){Xe.lastTouch[i]=n;let r=performance.now();if(r-Xe.lastSound>90){Xe.lastSound=r;let a=Math.round(s*9);re.tick(220*Math.pow(2,(Yd[a%5]+12*Math.floor(a/5))/12),.04*(tt.sphereVolume??2))}e&&Vt.play(e,"anio",.6+1.2*s)}return s}function r_(i,e){Xe.dash!==L.dash&&jd(L.dash);let{n:t,k:n,N:s,R:r,U:a,fr:o,lat:l,st:c,mesh:u,val:h,pre:f}=Xe,p=Qr.radius,g=u.instanceMatrix.array,v=u.instanceColor.array,m=re.count,d=.418,y=2*d*1.25,x=.611,_=2*x*1.25;Xe.expand=Qe(Xe.expand,St((L.scale-1)/(tt.maxScale-1),0,1),.12),lr||(fn.worldToLocal(Mn.getWorldPosition(hr)),Xe.expandDir.lerp(hr.normalize(),.1).normalize());let R=Xe.expand,E=Xe.expandDir.x*p,A=Xe.expandDir.y*p,C=Xe.expandDir.z*p,S=Xe.crush[0],b=Xe.crush[1],I=Math.min(1,i*8),B=L.yearPos,O=L.beat,G=qu[Xe.dash]?Xe.dash:"gases",$=qu[G],W=Xe.rnd||(Xe.rnd=Float32Array.from({length:t},(J,F)=>{let ie=Math.sin(F*12.9898+4.1)*43758.5453;return ie-Math.floor(ie)}));for(let J=0;J<t;J++){let F=J*3,ie=s[F],oe=s[F+1],me=s[F+2],Ne=ie*p,et=oe*p,q=me*p,ee=o[J]*m,pe=Math.floor(ee),ae=Math.min(m,pe+1),Se=ee-pe,Ce=Qe(h[pe],h[ae],Se),Oe=St(.5*Qe(f[pe],f[ae],Se)+.5*(Ce-.12)/.88,0,1),ot=ee<=B+.5,Le=Math.abs(ee-B),it=Le<.75?1-Le/.75:0,N=(Ce-.12)/.88,qt=Ce,Ye=1,ke=Oe,we=!1,gt=.6+.4*l[J],Re=.1*N;if(G==="hielo"){let le=St((.16+.78*N-(1-oe)/2)/.07,0,1);qt=le*(.35+.4*N),Ye=Qe(.5,1,le),ke=le*(.5+.5*N),gt=1,Re=0}else G==="jungla"&&(we=W[J]<N*.92,qt=we?0:.5+.5*W[J*7%t],Ye=we?.7:1,ke=W[J*13%t],Re=0);let w=ot?(.35+qt*2.4)*gt*(1+it*(.15+O*.5)):.22,M=ot?(.85+Ce*.3)*Ye:.6,k=ot?Re:0,j=1;if(S&&(j=Math.min(j,Math.hypot(S.x-Ne,S.y-et,S.z-q)/y)),b&&(j=Math.min(j,Math.hypot(b.x-Ne,b.y-et,b.z-q)/y)),j<1&&(k-=.3*(1-j),M*=Qe(.45,1,j),w*=Qe(.4,1,j)),R>.002){let le=Math.min(1,Math.hypot(E-Ne,A-et,C-q)/_),Ee=1-le*le*(3-2*le);k+=.8*x*Ee*R,M+=.25*(1-le)*R,w*=1+.6*Ee*R}c[F]=Qe(c[F],k,I),c[F+1]=Qe(c[F+1],M,I),c[F+2]=Qe(c[F+2],w,I);let K=c[F+1],Y=c[F+2],_e=(p*.94+c[F])*n,ne=J*16;g[ne]=r[F]*K,g[ne+1]=r[F+1]*K,g[ne+2]=r[F+2]*K,g[ne+3]=0,g[ne+4]=a[F]*K,g[ne+5]=a[F+1]*K,g[ne+6]=a[F+2]*K,g[ne+7]=0,g[ne+8]=ie*Y,g[ne+9]=oe*Y,g[ne+10]=me*Y,g[ne+11]=0,g[ne+12]=ie*_e,g[ne+13]=oe*_e,g[ne+14]=me*_e,g[ne+15]=1;let ge=.22,Ke=.22,te=.24;if(ot){let le=ke<.5?$[0]:$[1],Ee=ke<.5?$[1]:$[2],Pe=ke<.5?ke*2:(ke-.5)*2,ve=Math.min(1,it*.35+(1-j)*.35),$e=Qe(le[0],Ee[0],Pe),Fe=Qe(le[1],Ee[1],Pe),dt=Qe(le[2],Ee[2],Pe);we&&($e=.8,Fe=.42,dt=.18),ge=Qe($e,1,ve),Ke=Qe(Fe,1,ve),te=Qe(dt,1,ve)}v[F]=Qe(v[F],ge,I),v[F+1]=Qe(v[F+1],Ke,I),v[F+2]=Qe(v[F+2],te,I)}u.instanceMatrix.needsUpdate=!0,u.instanceColor.needsUpdate=!0}var ga=Mi(1.7,.8,1280,602,(i,e,t)=>{let n=Nt[L.dash],s=Zn[L.dash],r=bi(n.color),a=s.years[s.years.length-1];i.fillStyle=rt.muted,i.font=`600 28px ${Tt}`;let o=`${n.num} \xB7 ${n.name}`;i.fillText(o,56,84),eh(i,56+i.measureText(o).width+22,74,28,r),i.fillStyle=rt.ink,i.font=`700 124px ${Tt}`,Yi(i,-4),i.fillText(`${s.years[0].year} \u2192 ${a.year}`,50,236),Yi(i,0),i.font=`600 40px ${Tt}`,i.fillText(Ae(`Quedan ${qi()} de ${sn.length} voces.`,`${qi()} of ${sn.length} voices remain.`),56,322),i.fillStyle=rt.muted,i.font=`500 30px ${Tt}`,i.fillText(Ae("Lo que escuchaste es el dato. Nada fue grabado.","What you heard is the data. Nothing was recorded."),56,376),i.font=`500 24px ${Tt}`,Ju(i,`${Number(a.value).toLocaleString(pa())} ${s.unit} ${Ae("en","in")} ${a.year} \xB7 ${s.source}`,56,450,e-112,34)});ga.position.copy(Sn(0,2.4,2.25));ga.lookAt(0,1.6,0);ma.add(ga);gr.fin.push(ga);function $d(i,e,t,n){let s=Mi(.75,.24,640,205,(r,a,o)=>{let l=L.hover===t,c=i();r.fillStyle=l?rt.ink:"#d6d6d6",r.font=`${l?700:600} 54px ${Tt}`,r.textAlign="center",r.fillText(c,a/2,112);let u=r.measureText(c).width;r.textAlign="left",r.fillStyle=l?rt.ink:"rgba(245,245,245,.28)",r.fillRect(a/2-u/2,146,u,l?4:2)});return s.position.copy(Sn(e,2.3,1.15)),s.lookAt(0,1.3,0),ma.add(s),gr.fin.push(s),Vn(s,t,n),s}var a_=$d(()=>Ae("Repetir","Replay"),-11,"repetir",()=>Gn(L.dash)),o_=$d(()=>Ae("Volver al lobby","Back to lobby"),11,"lobby",()=>_r());document.fonts&&Promise.all([500,600,700].map(i=>document.fonts.load(`${i} 32px Manrope`))).then(()=>Qu.forEach(i=>i.redraw())).catch(()=>{});var l_=new Po,gs={};window.__nucleo.glb=gs;var ar={done:0,total:0};function la(i,e){let t=ta[i];ar.total++,l_.load(t.file,n=>{ar.done++;let s=n.scene;if(s.position.fromArray(t.position),s.rotation.y=t.rotationY*ft,s.scale.setScalar(t.scale),s.scale.y*=t.scaleY??1,e.add(s),gs[i]=s,t.scatter&&c_(s,t),t.hideProcedural)for(let r of gr[i==="esfera"?"amb":i]||[])r.material.userData.base=0;s.traverse(r=>{if(!r.isMesh)return;let a=r.name.toLowerCase();for(let o of Dt)a.includes(o)&&i==="lobby"&&Vn(r,o,()=>Gn(o));i==="fin"&&a.includes("repetir")&&Vn(r,"repetir",()=>Gn(L.dash)),i==="fin"&&a.includes("lobby")&&Vn(r,"lobby",()=>_r())}),u_(s),console.info(`[N\xFAcleo] GLB cargado: ${t.file}`)},void 0,()=>{ar.done++,console.info(`[N\xFAcleo] sin ${t.file}: se usa la escena generada`)})}function c_(i,e){let t=(e.seed??1)>>>0,n=()=>{t=t+1831565813|0;let f=Math.imul(t^t>>>15,1|t);return f=f+Math.imul(f^f>>>7,61|f)^f,((f^f>>>14)>>>0)/4294967296},s=new P().fromArray(e.center||[0,0,0]),r=[...i.children],a=e.minDist??9,o=e.sectors??4,l=e.sectorScale??[.9,1.25],c=Array.from({length:o},(f,p)=>p===0?{a:0,s:1}:{a:p/o*zt+(n()-.5)*.5,s:Qe(l[0],l[1],n())}),u=(f,p,g)=>{let v=new Mt;v.position.copy(s),v.rotation.y=p,v.scale.set(g,1,g),i.add(v),v.add(f),f.position.sub(s)},h=c.map(f=>new Ie().makeTranslation(s.x,s.y,s.z).multiply(new Ie().makeRotationY(f.a)).multiply(new Ie().makeScale(f.s,1,f.s)).multiply(new Ie().makeTranslation(-s.x,-s.y,-s.z)));for(let f of e.scatter){let p=new RegExp(f.match);if(f.instanced){let g=new Map;for(let v of r){if(!p.test(v.name)||!v.isMesh)continue;v.updateMatrix();let m=v.geometry.uuid+v.material.uuid;g.has(m)||g.set(m,{geo:v.geometry,mat:v.material,name:v.name,ms:[]});for(let d=1;d<o;d++)n()<(f.keep??1)&&g.get(m).ms.push(new Ie().multiplyMatrices(h[d],v.matrix));f.thin&&n()<f.thin&&(v.visible=!1)}for(let v of g.values()){if(!v.ms.length)continue;let m=new hs(v.geo,v.mat,v.ms.length);m.name=v.name,v.ms.forEach((d,y)=>m.setMatrixAt(y,d)),m.frustumCulled=!1,i.add(m)}continue}for(let g of r)if(p.test(g.name)){if(f.hide){g.visible=!1;continue}if(f.copy)for(let v=1;v<o;v++)u(g.clone(),c[v].a,c[v].s);if(f.distribute){let v=Math.floor(n()*o);v>0&&u(g,c[v].a,c[v].s)}if(f.move&&n()<f.move)for(let v=0;v<8;v++){let m=n()*zt,d=Qe(f.r[0],f.r[1],n()),y=(g.position.x-s.x)*d,x=(g.position.z-s.z)*d,_=s.x+y*Math.cos(m)+x*Math.sin(m)+i.position.x,R=s.z-y*Math.sin(m)+x*Math.cos(m)+i.position.z;if(Math.hypot(_,R)>=a||v===7){u(g,m,d);break}}}}}var sa=[];function u_(i){i.updateWorldMatrix(!0,!0);let e=new Ie;i.traverse(t=>{if(!(!t.isMesh||!/^Voz_/.test(t.name)||!t.visible))if(t.isInstancedMesh)for(let n=0;n<t.count;n++)t.getMatrixAt(n,e),sa.push({root:i,pos:new P().setFromMatrixPosition(e.premultiply(t.matrixWorld)),k:sa.length});else sa.push({root:i,pos:t.getWorldPosition(new P),k:sa.length})})}var h_=new P,Rd=new P;function Zd(i,e){let t=null,n=.045;for(let s of sa){if(!s.root.visible||!s.root.parent||!s.root.parent.visible)continue;let r=Rd.copy(s.pos).sub(i).dot(e);if(r<1.5)continue;let a=Math.sqrt(Math.max(0,Rd.lengthSq()-r*r))/r;a<n&&(n=a,t=s)}return t}function Kd(i,e){let t=i.k%10;mr(293.66*Math.pow(2,(Yd[t%5]+12*Math.floor(t/5))/12),.035),e&&Vt.play(e,"tick",1.4)}var rr={gases:new Mt,hielo:new Mt,jungla:new Mt};for(let i of Dt)rr[i].position.y=-tt.platformLift,Tn.add(rr[i]),ta[i+"0"]&&la(i+"0",rr[i]),la(i,rr[i]),ta[i+"2"]&&la(i+"2",rr[i]);function f_(){let i=re.count?L.yearPos/re.count:0;for(let e of Dt){let t=[e+"0",e,e+"2"].filter(r=>ta[r]);if(t.length<2)continue;let n=t.length===3?tt.variantAt3??[.33,.66]:[tt.variantAt??.5],s=0;for(let r of n)i>=r&&s++;if(!gs[t[s]]){let r=t.map((a,o)=>o).filter(a=>gs[t[a]]).sort((a,o)=>Math.abs(a-s)-Math.abs(o-s))[0];if(r===void 0)continue;s=r}t.forEach((r,a)=>{gs[r]&&(gs[r].visible=a===s)})}}la("lobby",$i);la("fin",ma);function fr(){$i.visible=L.state==="lobby",Tn.visible=L.state==="ambiente"||L.state==="fin",ma.visible=L.state==="fin",an.visible=fn.visible=L.state==="ambiente",ca.visible=L.state==="lobby";for(let e of Dt)rr[e].visible=e===L.dash;let i=Nt[L.dash];ca.material.color.setHex(L.state==="lobby"?7237230:i.color);for(let e of e_)e.material.color.set(bi(i.color));Zo.material.color.set(bi(i.color)),ih.material.color.set(1052688).lerp(Hd.setHex(i.color),.03)}function _r(i=!1){(L.state==="ambiente"||L.state==="fin")&&rn("cierre"),L.state="lobby",L.hover=null,oh(!1),t0(),_a.redraw(),re.setLevel(i?0:tt.lobbyLevel??.16),fr()}function Gn(i){L.dash=i,L.state="ambiente",L.yearPos=0,L.scale=1,L.speed=1,L.scrubbing=!1,Yu=0,rn("transicion"),re.setDashboard(i),re.setLevel(.55),re.play(),t0(),jd(i),Mn.getWorldPosition(hr),fn.position.y=St(hr.y-tt.sphereBelowEyes,.7,1.5),Jv(),Gd(),an.redraw(),_a.redraw(),fr(),nn(null,"confirmar",.8)}function d_(){rn("cierre"),L.state="fin",oh(!1),re.setLevel(.3),ga.redraw(),fr(),nn(null,"tope")}function oh(i){L.sensory=i,document.body.classList.toggle("sensorial",i)}var lh=0,Cd=0,p_=new zo;function dr(i,e){e&&(lh=performance.now());let t=re.count;L.yearPos=St(i,0,t);let n=Math.min(t,Math.floor(L.yearPos+1e-6));return n!==re.idx&&(re.setIndex(n),Gd(),an.redraw(),e)?(rn("avance",{vol:tt.sphereVolume??2,pos:n/t}),!0):!1}function Go(i){L.scale=St(i,.4,tt.maxScale);let e=L.scale<tt.pauseBelowScale?0:L.scale<=1?L.scale:1+(L.scale-1)/(tt.maxScale-1)*(tt.maxYearsPerBar-1),t=Math.round(e*10)/10;t!==L.speed&&(L.speed=t,an.redraw())}var Yu=0;re.onBar=()=>{if(L.state==="ambiente"&&(Yu++,!(Yu<=tt.introBars||L.scrubbing||L.speed===0))){if(re.idx>=re.count){setTimeout(d_,0);return}dr(L.yearPos+L.speed,!1)}};re.onStep=(i,e,t,n)=>{let s=Math.max(0,(e-re.ctx.currentTime)*1e3);setTimeout(()=>{if(L.stepNow=i,L.stepAt=performance.now(),L.state==="lobby")return;for(let o of sn)o.alive&&o.step===i&&(o.flash=1);let r=Vu.default.hapticForStep(t,i),a=Vu.default.hapticForStep(n,i);tt.vibrarMelodia&&r&&i===0&&Vt.play("right","tick",.8)},s)};var Q={angle:0,vel:0,target:null,settled:0,front:"gases",lastField:0,lastNote:0,grab:!1,hand:null,touch:[null,null],trail:{a:0,dir:1,life:0}},ra=.45,ms=.65,xi=.55,un=66*ft,or=15*ft,Hu=.11,$u=[174.61,196,220,233.08,146.83,261.63,293.66,329.63,349.23],Jd=146.83,ha=[...Dt].sort((i,e)=>Nt[i].az-Nt[e].az),Q_=Nt[ha[0]].az*ft,ey=Nt[ha[ha.length-1]].az*ft,fa=zt/Dt.length,Ut=new Mt;Ut.position.set(0,.85,0);Ut.visible=!1;Ot.add(Ut);var Ho={},pr=i=>(i=(i+Math.PI)%zt,i<0&&(i+=zt),i-Math.PI),Fo=(i,e,t,n,s=48)=>Array.from({length:s+1},(r,a)=>{let o=Qe(t,n,a/s);return new P(Math.sin(o)*i,e,-Math.cos(o)*i)});function Wo(i,e,t,n,s,r){let a=[],o=[],l=[];for(let u=0;u<=s;u++){let h=u/s,f=Qe(t,n,h),p=Math.sin(f),g=-Math.cos(f),v=r?h*h:1;if(a.push(p*i,0,g*i,p*e,0,g*e),o.push(v,v,v,v,v,v),u<s){let m=u*2;l.push(m,m+1,m+2,m+1,m+3,m+2)}}let c=new ct;return c.setAttribute("position",new st(a,3)),c.setAttribute("color",new st(o,3)),c.setIndex(l),c}var _s=i=>new Lt({color:i,vertexColors:!0,blending:os,depthWrite:!1,transparent:!0,side:Pt});{let i=new He(new fs(ra,ms,72,1,Math.PI/2-un,un*2),new yn({color:1776411,roughness:.42,metalness:.65,side:Pt}));i.rotation.x=-Math.PI/2,Ut.add(i),Ut.userData.top=i;for(let e of[ra,ms]){let t=new He(new Ks(e,e,Hu,56,1,!0,Math.PI-un,un*2),new yn({color:394758,roughness:.6,metalness:.4,side:Pt}));t.position.y=-Hu/2,Ut.add(t)}Ut.add(new kn(new ct().setFromPoints(Fo(ms,.001,-un,un)),hn(new Jt({color:16777215}),.75))),Ut.add(new kn(new ct().setFromPoints(Fo(ra,.001,-un,un)),hn(new Jt({color:16777215}),.4))),Ut.add(new kn(new ct().setFromPoints(Fo(ra,-Hu,-un,un)),hn(new Jt({color:16777215}),.08)));for(let e=-4;e<=4;e++){let t=e*or,n=e===0?.06:.042,s=new He(new qr(n,32),new yn({color:328965,roughness:.75,metalness:.3}));s.rotation.x=-Math.PI/2,s.position.set(Math.sin(t)*xi,.0012,-Math.cos(t)*xi),Ut.add(s);let r=(a,o)=>{let l=new Fi(new ct().setFromPoints(Fo(a,.0018,0,zt,40).slice(0,40)),hn(new Jt({color:16777215}),o));l.position.set(s.position.x,0,s.position.z),Ut.add(l)};r(n,.24),e===0&&r(.075,.5),e===0?Vn(s,"centro",()=>e0(null)):Vn(s,"campo"+e,()=>Qd(e,null))}for(let e of Dt){let t=new He(Wo(ms-.03,ms-.012,-3*ft,3*ft,6,!1),_s(new Me(bi(Nt[e].color))));t.position.y=.003,Ut.add(t),Ho[e]=t}}var Zu={1:new He(Wo(xi-.014,xi+.014,-34*ft,0,24,!0),_s(0)),[-1]:new He(Wo(xi-.014,xi+.014,34*ft,0,24,!0),_s(0))},Vo=new He(Wo(xi-.016,xi+.016,-2.5*ft,2.5*ft,4,!1),_s(0));for(let i of[Zu[1],Zu[-1],Vo])i.position.y=.004,Ut.add(i);var va=new Mt;va.visible=!1;Ot.add(va);va.add(cr(5,.35,16119285,.3),new pi(new ct().setFromPoints(Array.from({length:12},(i,e)=>[Sn(e*30,5,.41),Sn(e*30,5,.47)]).flat()),hn(new Jt({color:7237230}),.9)));var Ku={1:new He(ua(5,-34*ft,0,.03,24,!0),_s(0)),[-1]:new He(ua(5,34*ft,0,.03,24,!0),_s(0))};for(let i of[Ku[1],Ku[-1]])i.position.y=.45,i.frustumCulled=!1,va.add(i);for(let i of Dt){let e=new He(ua(5,-3*ft,3*ft,.03,6,!1),_s(new Me(bi(Nt[i].color))));e.position.y=.35,e.rotation.y=-Nt[i].az*ft,e.frustumCulled=!1,$i.add(e)}var _a=Mi(.42,.05,840,100,(i,e,t)=>{i.textAlign="center",i.fillStyle=rt.muted,i.font=`600 30px ${Tt}`,i.fillText(L.state==="lobby"?Ae("Desliza para girar \xB7 Toca el centro para entrar","Slide to turn \xB7 Tap the centre to enter"):Ae("Centro para volver \xB7 Luces para cambiar de lugar","Centre to go back \xB7 Lights to change place"),e/2,62),i.textAlign="left"});_a.rotation.x=-Math.PI/2;_a.position.set(0,.002,-(ms+.06));Ut.add(_a);function Id(i,e){let t=un-.06,n=Math.abs(e)>t;i.visible=!0,i.rotation.y=-St(e,-t,t),i.scale.set(1,1,1),i.material.opacity=n?.35:1}function mr(i,e=.045){let t=re.ctx;if(!t||t.state!=="running"||!re.nodes)return;let n=t.currentTime,s=t.createGain();s.gain.setValueAtTime(1e-4,n),s.gain.exponentialRampToValueAtTime(e,n+.008),s.gain.exponentialRampToValueAtTime(1e-4,n+1.1),s.connect(re.nodes.master);for(let[r,a]of[[1,1],[2,.42],[3,.18]]){let o=t.createOscillator(),l=t.createGain();o.type="sine",o.frequency.value=i*r,l.gain.value=a,o.connect(l),l.connect(s),o.start(n),o.stop(n+1.15)}}function aa(i){let e=null;for(let t of Dt){let n=pr(i-Nt[t].az*ft);(!e||Math.abs(n)<Math.abs(e.d))&&(e={id:t,d:n})}return{id:e.id,angle:i-e.d}}function Xo(i){Q.vel=0,Q.target=aa(i).angle,Q.settled=null}function m_(i){if(Math.abs(i)!==3)return null;let e=ha.filter(t=>t!==L.dash);return i<0?e[0]:e[1]}function Qd(i,e,t=!1){if(t||mr($u[i+4]),L.state==="lobby")Xo(Q.angle+i*or);else{let n=m_(i);n&&Gn(n)}}function e0(i){mr(Jd,.05),rn("confirmacion"),i&&Vt.play(i,"confirmar"),L.state==="lobby"?Gn(Q.front):L.state!=="inicio"&&_r()}function t0(){Mn.getWorldPosition(hr),Ut.position.y=St(hr.y-.75,.45,1)}function g_(i,e,t,n){let s=Ut.worldToLocal(Pn.copy(t)),r=Math.hypot(s.x,s.z),a=Math.atan2(s.x,-s.z),o=Q.touch[i],l=performance.now();if(Ut.visible&&Math.abs(s.y)<.09&&r>ra-.07&&r<ms+.07&&Math.abs(a)<un+.08){let c=St(Math.round(a/or),-4,4);if(!o){Q.touch[i]={a,zone:c,z0:c,t0:l,moved:0},mr($u[c+4],.04),Vt.play(e,"tick",c===0?1.6:1),Q.trail.a=a,Q.trail.life=.6;return}let u=pr(a-o.a);o.moved+=Math.abs(u),L.state==="lobby"&&o.moved>.06?(Q.angle-=u,Q.vel=Qe(Q.vel,-u/Math.max(n,.008),.35),Q.grab=!0,Q.hand=e,Q.target=null,Q.settled=null):L.state!=="lobby"&&c!==o.zone&&(mr($u[c+4],.03),Vt.play(e,"tick")),Math.abs(u)>.002&&(Q.trail.dir=u>0?1:-1),Q.trail.a=a,Q.trail.life=Math.min(1,Q.trail.life+Math.abs(u)*6+.02),o.a=a,o.zone=c}else o&&(Q.touch[i]=null,!Q.touch[0]&&!Q.touch[1]&&!ji.some(c=>c.grab)&&(Q.grab=!1),l-o.t0<500&&o.moved<.12&&(o.z0===0?e0(e):Qd(o.z0,e,!0)))}function v_(i){Ut.visible=L.state!=="inicio"&&L.state!=="intro",va.visible=L.state==="lobby";let e=Q.trail;e.life=Math.max(0,e.life-i*1.4);for(let t of[1,-1])for(let n of[Zu[t],Ku[t]])n.visible=e.dir===t&&e.life>.01,n.rotation.y=-e.a,n.material.color.setScalar(e.life*.9);if(Ut.userData.top.material.emissive.setScalar(.07*e.life),Vo.visible=e.life>.01,Vo.rotation.y=-e.a,Vo.material.color.set(rt.signal).multiplyScalar(e.life),L.state==="lobby"){if(!Q.grab)if(Math.abs(Q.vel)>.25)Q.angle+=Q.vel*i,Q.vel*=Math.exp(-2.5*i),Q.target=null,Q.settled=null;else{Q.vel=0,Q.target===null&&(Q.target=aa(Q.angle).angle);let n=Q.target-Q.angle;Math.abs(n)>.004?Q.angle+=n*Math.min(1,i*7):Q.settled!==Q.target&&(Q.angle=Q.settled=Q.target,Q.front=aa(Q.angle).id,mr(Jd*1.5,.05),nn(Q.hand,"boton"),re.setDashboard(Q.front),re.play(),Q.hand=null)}let t=Math.round(Q.angle/or);if(t!==Q.lastField){Q.lastField=t;let n=performance.now(),s=Math.abs(pr(Q.angle-aa(Q.angle).angle)),r=1-Math.min(1,s/(fa/2));n-Q.lastNote>60&&(Q.lastNote=n,rn("giro",{step:t}),s>fa/2-or*.6?nn(Q.hand,"diente"):nn(Q.hand,"tick",.6+.9*r))}Q.front=aa(Q.angle).id,$i.rotation.y=Q.angle,vs.position.copy(Sn(Q.angle/ft,2.6,2.35)),vs.lookAt(0,2,0);for(let n of Dt)Id(Ho[n],pr(Nt[n].az*ft-Q.angle))}else{let t=ha.filter(n=>n!==L.dash);for(let n of Dt)n===L.dash?Ho[n].visible=!1:Id(Ho[n],(n===t[0]?-3:3)*or)}}var Kn=new Ao,ji=[];for(let i=0;i<2;i++){let e=Xt.xr.getController(i),t={ctrl:e,hand:null,grip:!1,lastAngle:0,btn:[],hover:null},n=new kn(new ct().setFromPoints([new P,new P(0,0,-1)]),hn(new Jt({color:16777215}),.5));n.scale.z=25,e.add(n,new He(new Qs(.02,12,8),new Lt({color:16777215}))),e.addEventListener("connected",s=>{t.hand=s.data.handedness,t.source=s.data,e.visible=!0,Vt.setSources(Xt.xr.getSession())}),e.addEventListener("disconnected",()=>{t.hand=null,t.source=null,e.visible=!1}),e.addEventListener("selectstart",()=>{if(t.trig=!0,t.hover){n0(t.hover,t.hand);return}t.ctrl.getWorldPosition(Ct),L.state==="lobby"?(t.grab={a:Math.atan2(Ct.x,-Ct.z),moved:0,t0:performance.now()},Q.grab=!0,Q.hand=t.hand,Q.target=null,Q.settled=null,nn(t.hand,"tick")):L.state==="ambiente"&&(t.grip=!0,t.byTrigger=!0,t.lastAngle=qo(t),Bo(),nn(t.hand,"tick"))}),e.addEventListener("selectend",()=>{if(t.trig=!1,t.grab){let s=t.grab;t.grab=null,!ji.some(r=>r.grab)&&!Q.touch[0]&&!Q.touch[1]&&(Q.grab=!1),L.state==="lobby"&&s.moved<.05&&performance.now()-s.t0<400&&(rn("confirmacion"),nn(t.hand,"confirmar"),Gn(Q.front))}t.byTrigger&&(t.byTrigger=!1,t.grip=!1,Bo(),L.state==="ambiente"&&(rn("confirmacion"),nn(t.hand,"soltar")))}),e.addEventListener("squeezestart",()=>{t.grip=!0,t.lastAngle=qo(t),Bo(),L.state==="ambiente"&&nn(t.hand,"tick")}),e.addEventListener("squeezeend",()=>{t.grip=!1,Bo(),L.state==="ambiente"&&(rn("confirmacion"),nn(t.hand,"soltar"))}),e.visible=!1,Ot.add(e),ji.push(t)}var Pd=new P().fromArray(tt.sphereCenter),Ct=new P,Pn=new P;function qo(i){return i.ctrl.getWorldPosition(Ct),Math.atan2(Ct.x-Pd.x,-(Ct.z-Pd.z))}var lr=null;function Bo(){let i=ji.filter(e=>e.grip);L.scrubbing=L.state==="ambiente"&&i.length===1,i.length===2?(i[0].ctrl.getWorldPosition(Ct),i[1].ctrl.getWorldPosition(Pn),lr={d0:Math.max(.05,Ct.distanceTo(Pn)),s0:L.scale}):lr=null;for(let e of i)e.lastAngle=qo(e);L.state==="ambiente"&&an.redraw()}function Ld(i){let e=re.entry&&re.entry.year,t=re.idx===0||re.idx>=re.count;nn(i,t?"tope":e&&e%10===0?"decada":"anio")}function n0(i,e){e&&Vt.play(e,"confirmar",.8),rn("confirmacion"),i.userData.onSelect()}function i0(i,e){i!==L.hover&&(L.hover=i,i&&re.tick(1200,.03),L.state==="lobby"&&i&&Zn[i]&&(re.setDashboard(i),re.play()),L.state==="fin"&&(a_.redraw(),o_.redraw()),L.state==="ambiente"&&an.redraw(),Si.redraw())}function ch(){return Fd.filter(i=>{let e=i;for(;e;){if(!e.visible)return!1;e=e.parent}return!0})}function __(i){if(!Xt.xr.getSession())return;let t=null,n=null;for(let r of ji){if(!r.hand)continue;Td.identity().extractRotation(r.ctrl.matrixWorld),Kn.ray.origin.setFromMatrixPosition(r.ctrl.matrixWorld),Kn.ray.direction.set(0,0,-1).applyMatrix4(Td);let a=Kn.intersectObjects(ch(),!1)[0];r.hover=a?a.object:null,a&&!t&&(t=a.object.userData.hoverId,n=r.hand);let o=ji.indexOf(r);if(L.state==="ambiente"&&!a){let c=Zd(Kn.ray.origin,h_.copy(Kn.ray.direction));c!==r.voz&&(r.voz=c,c&&Kd(c,r.hand))}else r.voz=null;if(r.ctrl.getWorldPosition(Ct),g_(o,r.hand,Ct,i),r.grab&&L.state==="lobby"){let c=Math.atan2(Ct.x,-Ct.z),u=pr(c-r.grab.a),h=tt.giroRatio??2;r.grab.a=c,r.grab.moved+=Math.abs(u),Q.angle-=u*h,Q.vel=Qe(Q.vel,-u*h/Math.max(i,.008),.35),Q.target=null,Q.settled=null,Math.abs(u)>.002&&(Q.trail.dir=u>0?1:-1),Q.trail.a=St(c,-un,un),Q.trail.life=Math.min(1,Q.trail.life+Math.abs(u)*6+.03)}else r.grab&&(r.grab=null);if(!r.grab&&!r.grip&&!Q.touch[o]&&Ut.visible&&(L.state!=="lobby"||Q.settled!==null)){let c=Ut.localToWorld(Pn.set(0,0,-xi)).distanceTo(Ct),u=performance.now();c<.25&&u-(r.beaconAt||0)>Qe(110,520,c/.25)&&(r.beaconAt=u,Vt.play(r.hand,"faro",.6+.8*(1-c/.25)))}if(L.state==="ambiente"){r.ctrl.getWorldPosition(Ct);let c=fn.worldToLocal(Pn.copy(Ct)).length(),u=tt.sphereRadius;if(c<u*2.2)oa(o,Ct),ju(o,r.hand);else{let h=Kn.intersectObject(Ko,!1)[0];oa(o,h?h.point:null,!0),h&&ju(o,r.hand)}}else oa(o,null);let l=r.source&&r.source.gamepad;if(l){let c=l.buttons[4]&&l.buttons[4].pressed,u=l.buttons[5]&&l.buttons[5].pressed;c&&!r.btn[4]&&L.state!=="lobby"&&(Vt.play(r.hand,"confirmar",.7),_r()),u&&!r.btn[5]&&(Vt.play(r.hand,"confirmar",.7),L.state==="lobby"?Xo(Q.angle+fa):Gn(Dt[(Dt.indexOf(L.dash)+1)%Dt.length]));let h=l.buttons[3]&&l.buttons[3].pressed;h&&!r.btn[3]&&L.state==="ambiente"&&rh(),r.btn[3]=h,r.btn[4]=c,r.btn[5]=u;let f=l.axes.length>=4?l.axes[2]:l.axes[0]||0;L.state==="lobby"&&Math.abs(f)>.25&&(Q.vel=-f*2.4,Q.target=null,Q.settled=null,Q.hand=r.hand),L.state==="ambiente"&&Math.abs(f)>.25&&dr(L.yearPos+f*i*re.count*.2,!0)&&Ld(r.hand)}}if(i0(t,n),L.state!=="ambiente")return;let s=ji.filter(r=>r.grip);if(s.length===1){let r=s[0],a=qo(r),o=a-r.lastAngle;o>Math.PI&&(o-=zt),o<-Math.PI&&(o+=zt),r.lastAngle=a,dr(L.yearPos+o/zt*re.count,!0)&&Ld(r.hand)}else if(s.length===2&&lr){s[0].ctrl.getWorldPosition(Ct),s[1].ctrl.getWorldPosition(Pn);let r=L.speed;Go(lr.s0*(Ct.distanceTo(Pn)/lr.d0)),r!==L.speed&&(nn(null,"tick"),rn(L.speed>r?"apertura":"cierre",{mini:!0})),Ct.add(Pn).multiplyScalar(.5),fn.worldToLocal(Ct),Ct.lengthSq()>1e-8&&Xe.expandDir.lerp(Ct.normalize(),.2).normalize()}}var Dd=new Be,Hn=null,Jo=0,da=0,Nd=null;function jo(i,e){return Dd.set(i.clientX/window.innerWidth*2-1,-(i.clientY/window.innerHeight)*2+1),Kn.setFromCamera(Dd,Mn),Kn.intersectObjects(e,!1)[0]}Xt.domElement.addEventListener("pointerdown",i=>{if(L.xr||L.state==="inicio"||L.state==="intro")return;let e=L.state==="ambiente"&&jo(i,[Ko]);oa(0,e?e.point:null,!0),Hn={x:i.clientX,y:i.clientY,moved:0,sphere:!!e},L.scrubbing=!!e,e&&an.redraw(),Xt.domElement.setPointerCapture(i.pointerId)});Xt.domElement.addEventListener("pointermove",i=>{if(!(L.xr||L.state==="inicio"||L.state==="intro"))if(Hn){let e=i.clientX-Hn.x,t=i.clientY-Hn.y;Hn.x=i.clientX,Hn.y=i.clientY,Hn.moved+=Math.abs(e)+Math.abs(t),Hn.sphere?dr(L.yearPos+e/500*re.count,!0):(Jo+=e*.004,da=St(da+t*.004,-1.2,1.2))}else{if(L.state==="ambiente"){let n=Zd(Kn.ray.origin,Kn.ray.direction);n!==Nd&&(Nd=n,n&&Kd(n,null))}let e=L.state==="ambiente"&&jo(i,[Ko]);oa(0,e?e.point:null,!0),e&&ju(0,null);let t=jo(i,ch());i0(t?t.object.userData.hoverId:null,null),Xt.domElement.style.cursor=t?"pointer":"grab"}});Xt.domElement.addEventListener("pointerup",i=>{if(!Hn)return;let e=Hn;if(Hn=null,e.sphere){L.scrubbing=!1,an.redraw();return}if(e.moved<6){let t=jo(i,ch());t&&n0(t.object,null)}});Xt.domElement.addEventListener("wheel",i=>{L.state==="ambiente"&&Go(L.scale-Math.sign(i.deltaY)*.1)},{passive:!0});window.addEventListener("keydown",i=>{if(L.state==="inicio"||L.state==="intro")return;let e=i.key.toLowerCase();if(e==="e"){uh(L.lang==="en"?"es":"en");return}L.state==="ambiente"&&(e==="arrowright"&&dr(Math.floor(L.yearPos)+1,!0),e==="arrowleft"&&dr(Math.ceil(L.yearPos)-1,!0),e==="arrowup"&&Go(L.scale+.1),e==="arrowdown"&&Go(L.scale-.1),e==="s"&&oh(!L.sensory),e==="r"&&Gn(L.dash)),L.state==="lobby"&&(e==="arrowright"&&Xo(Q.angle+fa),e==="arrowleft"&&Xo(Q.angle-fa),e==="enter"&&Gn(Q.front)),e==="i"&&L.state==="ambiente"&&rh(),e==="d"&&Xd(),e==="l"&&L.state!=="lobby"&&_r(),(e==="1"||e==="2"||e==="3")&&Gn(Dt[Number(e)-1])});var bn=i=>document.getElementById(i),Yo="audifonos",s0="";function Qo(){document.documentElement.lang=L.lang;let i=(e,t)=>{let n=bn(e);n&&(n.textContent=t)};i("lema",Ae("Earth Jukebox. Tres lugares de la Tierra convertidos en m\xFAsica a partir de sus datos. Nada est\xE1 grabado.","Earth Jukebox. Three places on Earth turned into music from their data. Nothing is recorded.")),i("vr",Ae("Entrar en VR","Enter VR")),i("pantalla",Ae("Empezar en pantalla","Start on screen")),i("descTxt",Ae("Mostrar descripciones en texto y voz","Show descriptions as text and voice")),i("idioma",Ae("English","Espa\xF1ol")),i("ayuda",Ae("Arrastra para mirar \xB7 \u2190 \u2192 giran el lobby \xB7 Enter entra \xB7 I dato \xB7 D descripciones \xB7 E English \xB7 L lobby","Drag to look \xB7 \u2190 \u2192 turn the lobby \xB7 Enter goes in \xB7 I data \xB7 D descriptions \xB7 E Espa\xF1ol \xB7 L lobby")),i("estado",{audifonos:Ae("Usa aud\xEDfonos.","Use headphones."),visor:Ae("Visor detectado. Usa aud\xEDfonos.","Headset detected. Use headphones."),sinvisor:Ae("Sin visor en este navegador: puedes usar la versi\xF3n de pantalla.","No headset in this browser: you can use the screen version."),sinxr:Ae("Este navegador no tiene WebXR: usa la versi\xF3n de pantalla, o el navegador del visor.","This browser has no WebXR: use the screen version, or the headset's browser."),error:Ae("No se pudo entrar a VR: ","Could not enter VR: ")+s0}[Yo]);for(let e of Qu)e.redraw()}function uh(i){L.lang=i,je.pending="",je.token++,window.speechSynthesis&&speechSynthesis.cancel();try{localStorage.setItem("orbis-lang",i)}catch{}typeof Ue<"u"&&(Ue.subText=""),Qo(),rn("confirmacion")}var Ue={group:null,letters:[],strips:[],marks:[],rim:null,disc:null,sub:null,subText:"",t0:0,hit:!1,word:"Orbe",R:2,top:-.44,half:1.2,seg:120},y_=[[47,86,80.21,90.7,26.5],[40,56.95,89.39,56.95,10.61],[33,38.71,81.01,32.51,22.01]],x_=[33,36.58,19.85,45.41,17.32];function b_(i,e,{k1:t=1,k2:n=1,k3:s=1,orb:r=1,orbScale:a=1,red:o=1,ink:l=rt.ink}={}){let c=e/100,u=(f,p)=>Math.atan2(p-50,f-50),h=([f,p,g,v,m],d,y,x)=>{if(d<=.001)return;let _=u(p,g),R=((u(v,m)-_)%zt+zt)%zt;i.beginPath(),i.arc(50*c,50*c,f*c,_,_+R*d),i.strokeStyle=y,i.lineWidth=x*c,i.lineCap="round",i.stroke()};i.clearRect(0,0,e,e),[t,n,s].forEach((f,p)=>h(y_[p],f,l,3)),r>.001&&(i.globalAlpha=r,i.beginPath(),i.arc(57*c,50*c,25*c*a,0,zt),i.fillStyle=l,i.fill(),i.globalAlpha=1),o>.001&&(i.save(),i.globalAlpha=o,i.shadowColor=rt.signal,i.shadowBlur=6*c,h(x_,1,rt.signal,3.6),i.restore())}function M_(){if(Ue.group)return;let i=Ue.group=new Mt,e=.001,t=320,n=`600 210px ${Tt}`,s=2,{R:r,top:a,half:o,seg:l}=Ue,c=a-r,u=_=>new Lt({transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,..._}),h=(_,R,E)=>{let A=document.createElement("canvas");A.width=_,A.height=R;let C=A.getContext("2d");E(C,_,R);let S=new Xr(A);S.colorSpace=It,S.anisotropy=4;let b=new He(new Oi(_*e,R*e),u({map:S}));return b.renderOrder=30,b.userData={g:C,tex:S,w:_,h:R},i.add(b),b};Ue.disc=new He(new qr(r,160),u({color:723723})),Ue.disc.position.set(0,c,-.004),Ue.disc.renderOrder=26,i.add(Ue.disc),Ue.rim=new Fi(new ct().setFromPoints(Array.from({length:200},(_,R)=>new P(r*Math.sin(R/200*zt),c+r*Math.cos(R/200*zt),-.003))),u({color:3947580})),Ue.rim.renderOrder=27,i.add(Ue.rim);let f=(_,R,E,A)=>{let C=new Float32Array((l+1)*6),S=new Float32Array((l+1)*6),b=[];for(let O=0;O<=l;O++){let G=-o+2*o*O/l,$=Math.sin(G),W=Math.cos(G);C.set([_*$,c+_*W,0,R*$,c+R*W,0],O*6),O<l&&b.push(O*2,O*2+1,O*2+2,O*2+1,O*2+3,O*2+2)}let I=new ct;I.setAttribute("position",new Rt(C,3)),I.setAttribute("color",new Rt(S,3)),I.setIndex(b);let B=new He(I,u({vertexColors:!0,blending:os,side:Pt,opacity:1}));B.renderOrder=28,B.userData={c0:E,c1:A},i.add(B),Ue.strips.push(B)};f(r-.035,r-.003,[0,0,0],[.16,.17,.2]),f(r-.003,r+.003,[1,1,1],[1,1,1]),f(r+.003,r+.11,[.13,.16,.24],[0,0,0]),Dt.forEach((_,R)=>{let E=(R-1)*.74,A=new He(new Oi(.09,.006),u({color:bi(Nt[_].color)}));A.position.set((r+.03)*Math.sin(E),c+(r+.03)*Math.cos(E),.001),A.rotation.z=-E,A.renderOrder=29,i.add(A),Ue.marks.push(A)});let p=document.createElement("canvas").getContext("2d");p.font=n;let g=[...Ue.word].map(_=>p.measureText(_).width),v=g.reduce((_,R)=>_+R,0)+s*(g.length-1),m=-v/2;[...Ue.word].forEach((_,R)=>{let E=Math.ceil(g[R])+60,A=h(E,t,C=>{C.font=n,C.textAlign="center",C.textBaseline="alphabetic",C.fillStyle=rt.ink,C.fillText(_,E/2,232)});A.userData.x=(m+g[R]/2)*e,A.position.set(A.userData.x,.1,0),Ue.letters.push(A),m+=g[R]+s});let d=.215,y=.035,x=(d+y)/2;for(let _ of Ue.letters)_.userData.x+=x,_.position.x=_.userData.x;Ue.logo=h(512,512,()=>{}),Ue.logo.scale.setScalar(d/.512),Ue.logo.position.set(-v/2*e-y-d/2+x,.115,0),Ue.sub=h(1400,80,()=>{}),Ue.sub.position.y=-.045,Ue.sub.scale.setScalar(1.5),i.scale.setScalar(.95),Ot.add(i)}function S_(i){if(i===Ue.subText)return;Ue.subText=i;let{g:e,tex:t,w:n,h:s}=Ue.sub.userData;e.clearRect(0,0,n,s),e.font=`500 34px ${Tt}`,e.textAlign="center",e.fillStyle=rt.muted,e.fillText(i,n/2,52),t.needsUpdate=!0}function T_(){let i=re.ctx?re.ctx.currentTime-Ue.t0:99,e=Ue.group,t=f=>(f=St(f,0,1),f*f*(3-2*f));i<.6&&(Mn.getWorldPosition(Pn),e.position.set(Pn.x,Pn.y,Pn.z-1.7));let n=1-t((i-5.4)/1.1),s=t(i/.6),r=i>1.85?Math.exp(-(i-1.85)*4):0,a=Math.min(St(i/3.5,0,1),.12+.88*(ar.total?ar.done/ar.total:1));i>1.85&&!Ue.hit&&(Ue.hit=!0,nn(null,"diente"));let o=.98*t(a)+.02,l=(.45+.55*a+.6*r)*n,{half:c,seg:u}=Ue;for(let f of Ue.strips){let p=f.geometry.attributes.color.array,{c0:g,c1:v}=f.userData;for(let m=0;m<=u;m++){let d=Math.abs(-c+2*c*m/u),y=t((o-d)/.3)*l,x=m*6;p[x]=g[0]*y,p[x+1]=g[1]*y,p[x+2]=g[2]*y,p[x+3]=v[0]*y,p[x+4]=v[1]*y,p[x+5]=v[2]*y}f.geometry.attributes.color.needsUpdate=!0}Ue.disc.material.opacity=s*n,Ue.rim.material.opacity=.7*s*n,Ue.marks.forEach((f,p)=>{let g=t((a-[.33,.66,.955][p])/.03);f.material.opacity=g*n,f.scale.setScalar(.6+.4*g)});{let f=Ue.logo,{g:p,tex:g}=f.userData,v=St((i-3.5)/.5,0,1),m=t((i-1.8)/.4);b_(p,512,{k1:t((i-.1)/.9),k2:t((i-.45)/.9),k3:t((i-.8)/.9),orb:m,orbScale:.8+.2*m+.08*r,red:t((i-3.5)/.35)}),g.needsUpdate=!0,f.material.opacity=Math.min(1,i/.3)*n,f.position.y=.115+.08*Math.sin(Math.PI*v)*(1-.35*v)}Ue.letters.forEach((f,p)=>{let g=t((i-.5-p*.3)/.55),v=St((i-3.57-p*.08)/.5,0,1);f.material.opacity=g*n,f.position.y=.1+(g-1)*.03+.1*Math.sin(Math.PI*v)*(1-.35*v),f.scale.setScalar(1+.07*r+.06*Math.sin(Math.PI*v))});let h=a>=.955?3:a>=.66?2:a>=.33?1:0;S_(a>=.999?Ae("Listo \xB7 3 de 3 ambientes","Ready \xB7 3 of 3 environments"):Ae(`Preparando el mundo \xB7 ${Math.round(a*100)} % \xB7 ${h} de 3 ambientes`,`Preparing the world \xB7 ${Math.round(a*100)} % \xB7 ${h} of 3 environments`)),Ue.sub.material.opacity=.95*t((i-.5)/.8)*n,i>6.6&&E_()}function E_(){L.state==="intro"&&(Ue.group.visible=!1,Ot.background.setHex(526344),bn("ayuda").hidden=L.xr,_r(!0),Jo=0,da=0,setTimeout(()=>{L.state==="lobby"&&re.setLevel(tt.lobbyLevel??.16)},(tt.silencioLobby??1.6)*1e3))}async function r0(i){if(L.desc=!!(bn("descripciones")&&bn("descripciones").checked),Si.redraw(),re.level=0,re.nodes&&(re.nodes.master.gain.value=0),await re.play(),i)try{let t=await navigator.xr.requestSession("immersive-vr",{optionalFeatures:["local-floor","bounded-floor"]});await Xt.xr.setSession(t),L.xr=!0,Vt.setSources(t),t.addEventListener("inputsourceschange",()=>Vt.setSources(t)),t.addEventListener("end",()=>{L.xr=!1,bn("inicio").hidden=!1,re.stop(),L.state="inicio",Ue.group&&(Ue.group.visible=!1),Ot.background.setHex(526344),fr()})}catch(t){Yo="error",s0=t.message,Qo(),L.xr=!1}bn("inicio").hidden=!0,bn("ayuda").hidden=!0,Jo=0,da=0,M_(),Ue.group.visible=!0,Ue.hit=!1,Ot.background.setHex(0),Ue.letters.forEach(t=>t.material.opacity=0),L.state="intro",fr(),Ue.t0=re.ctx.currentTime+(i?.9:.35);let e=Sd[tt.leitmotiv];if(e)try{let t=re.ctx.createGain();t.gain.value=.72,t.connect(re.ctx.destination),e.play(re.ctx,t,Ue.t0)}catch{}}bn("pantalla").addEventListener("click",()=>r0(!1));bn("vr").addEventListener("click",()=>r0(!0));navigator.xr&&navigator.xr.isSessionSupported?navigator.xr.isSessionSupported("immersive-vr").then(i=>{bn("vr").disabled=!i,Yo=i?"visor":"sinvisor",Qo()}).catch(()=>{}):(bn("vr").disabled=!0,Yo="sinxr");bn("idioma")&&bn("idioma").addEventListener("click",()=>uh(L.lang==="en"?"es":"en"));Qo();window.addEventListener("resize",()=>{Mn.aspect=window.innerWidth/window.innerHeight,Mn.updateProjectionMatrix(),Xt.setSize(window.innerWidth,window.innerHeight)});var Ud=new Eo;fr();$i.visible=!1;Tn.visible=!1;Xt.setAnimationLoop(()=>{let i=Math.min(.05,Ud.getDelta()),e=Ud.elapsedTime;if(L.xr||(Mn.rotation.y=-Jo,Mn.rotation.x=-da),L.state==="intro")T_();else{let s=(L.state==="ambiente"||L.state==="fin")&&L.dash==="gases"&&Xe.val&&Xe.dash==="gases"?St((Xe.val[Math.min(re.count,Math.round(L.yearPos))]-.12)/.88,0,1):0;ps.k=Qe(ps.k,s,.03),Ot.fog.density=(tt.smogMax??.045)*ps.k,Ot.background.copy(ps.base).lerp(ps.color,.6*ps.k)}__(i),v_(i),s_();{let n=performance.now();L.state!=="lobby"||Q.grab||Math.abs(Q.vel)>.05?Bu=n+9e3:n>Bu&&(Bu=n+12e3,Oo=-Oo,rn("invitar",{dir:Oo}),nn(Oo>0?"right":"left","tick",.9))}{let n=0,s=0;if(L.state==="lobby")n=St(Math.abs(Q.vel)/3.5,0,1),s=St(-Q.vel/3,-.7,.7);else if(L.state==="ambiente"&&performance.now()-lh<200){let r=(L.yearPos-Cd)/Math.max(i,.008)/Math.max(1,re.count);n=St(Math.abs(r)*2.2,0,1),s=St(r*2,-.7,.7)}Cd=L.yearPos,re.ctx&&re.ctx.state==="running"&&re.nodes&&p_.set(re.ctx,re.nodes.master,n,n,s)}L.uiAlpha=Qe(L.uiAlpha,L.sensory?0:1,Math.min(1,i*2.2));for(let n of Od)n.opacity=n.userData.base*L.uiAlpha;let t=re.energy();if(L.beat=Qe(L.beat,t,.3),ca.rotation.y=e*.01,L.state==="lobby")for(let n of Dt){let s=Bd[n],r=L.hover===n||Q.front===n;s.sec.material.userData.base=Qe(s.sec.material.userData.base,gs.lobby?r?.3:0:r?.75:.26,.15),s.pan.scale.setScalar(Qe(s.pan.scale.x,r?1.06:1,.15))}if(Tn.visible){let n=re.derived;Qv(i,Qe(.12,1,L.uiAlpha)),f_();for(let a=0;a<Wu;a++){let o=t_[a].material;o.userData.base=Qe(o.userData.base,St(n.p*Wu-a,0,1)*.32,.05)}let s=60/n.tempo/4,r=L.stepAt?Math.min(1,(performance.now()-L.stepAt)/1e3/s):0;Wd.rotation.y=-(((L.stepNow||0)+r)/16)*zt,fn.scale.setScalar(Qe(fn.scale.x,.8+.5*St((L.scale-.4)/(tt.maxScale-.4),0,1),.2)),fn.rotation.y=-(L.yearPos/re.count)*zt,fn.updateMatrixWorld(),r_(i,n)}Xt.render(Ot,Mn)});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
