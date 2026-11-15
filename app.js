(()=>{var T0=Object.create;var Dh=Object.defineProperty;var E0=Object.getOwnPropertyDescriptor;var A0=Object.getOwnPropertyNames;var w0=Object.getPrototypeOf,R0=Object.prototype.hasOwnProperty;var C0=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var I0=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of A0(e))!R0.call(i,s)&&s!==t&&Dh(i,s,{get:()=>e[s],enumerable:!(n=E0(e,s))||n.enumerable});return i};var Nh=(i,e,t)=>(t=i!=null?T0(w0(i)):{},I0(e||!i||!i.__esModule?Dh(t,"default",{value:i,enumerable:!0}):t,i));var Xu=C0((J_,Wu)=>{var a_=(()=>{let e=[0,2,4,7,9],t=["bajo","arpegio","pulso","canto"],n={jungla:{label:"Jungla",tempo:104,geo:{type:"lowpass",hz:900,q:.4,swellHz:.23,depth:.25,gain:.16},voices:[{id:"bajo",name:"Bajo",band:"90\u2013200 Hz",k:3,rot:0,hz:165,haptic:{hz:70,amp:.85,ms:40}},{id:"arpegio",name:"Arpegio",band:"2.3\u20134 kHz",k:5,rot:2,rootMidi:98,haptic:{hz:200,amp:.45,ms:20}},{id:"pulso",name:"Pulso",band:"5.6 kHz",k:9,rot:1,hz:5600,amHz:22,haptic:{hz:320,amp:.3,ms:12}},{id:"canto",name:"Canto",band:"500\u2013900 Hz",k:1,rot:12,hz:620,haptic:{hz:120,amp:.6,ms:150}}]},hielo:{label:"Hielo marino",tempo:52,pressure:{type:"heat",hz:55},geo:{type:"bandpass",hz:520,q:1.1,swellHz:.07,depth:.6,gain:.3},voices:[{id:"bajo",name:"Bajo",band:"60\u201390 Hz",k:2,rot:0,hz:88,haptic:{hz:60,amp:.85,ms:60}},{id:"arpegio",name:"Arpegio",band:"2.4\u20133.6 kHz",k:3,rot:5,rootMidi:99,haptic:{hz:220,amp:.4,ms:24}},{id:"pulso",name:"Pulso",band:"6.2 kHz",k:5,rot:2,hz:6200,amHz:0,haptic:{hz:340,amp:.3,ms:10}},{id:"canto",name:"Canto",band:"600\u2013800 Hz",k:1,rot:10,hz:660,haptic:{hz:110,amp:.55,ms:220}}]},gases:{label:"Gases de efecto invernadero",tempo:60,geo:{type:"lowpass",hz:480,q:.5,swellHz:.25,depth:.8,gain:.3},voices:[{id:"bajo",name:"Bajo",band:"70\u2013100 Hz",k:2,rot:0,hz:98,haptic:{hz:60,amp:.85,ms:90}},{id:"arpegio",name:"Melod\xEDa",band:"520\u2013880 Hz",k:8,rot:0,rootMidi:72,melody:[0,1,2,3,4,3,1,0],haptic:{hz:150,amp:.45,ms:30}},{id:"pulso",name:"Pulso",band:"5 kHz",k:7,rot:1,hz:5e3,amHz:0,haptic:{hz:310,amp:.28,ms:10}},{id:"canto",name:"Canto",band:"390\u2013590 Hz",k:1,rot:12,hz:392,haptic:{hz:100,amp:.6,ms:240}}]}},s=d=>Math.min(1,Math.max(0,d)),r=d=>440*Math.pow(2,(d-69)/12);function a(d,y){let x=Math.imul(d>>>0,374761393)+Math.imul(y>>>0,668265263)>>>0;return x=Math.imul(x^x>>>13,1274126177)>>>0,x=(x^x>>>16)>>>0,x/4294967296}function o(d,y,x){let _=[];for(let R=0;R<y;R++)_.push(R*d%y<d);return _.map((R,E)=>_[((E-x)%y+y)%y])}let l=d=>d.reduce((y,x,_)=>x?y|1<<_:y,0);function c(d,y){let x=n[d],_=s(y.vit/100),R=s(y.div/100),E=s(y.est/100),A=s(y.pre/100),C=Math.max(1,Math.round(R*4)),S=s((E-.2)/.5),b=Math.round((.25+.75*_)*1e3),P=x.voices.map((B,O)=>{let G=t.indexOf(B.id)<C,$=Math.round(B.rot*S),W=o(B.k,16,$),J=W.map((oe,me)=>oe?Math.floor(a(O+1,me+1)*1e3):1e3),F=Math.min(...J),se=W.map((oe,me)=>oe&&(J[me]<b||J[me]===F));return{...B,active:G,rot:$,pattern:W,alive:se,patternMask:l(W),mask:G?l(se):0}});return{signatureId:d,tempo:x.tempo,voices:P,v:_,d:R,s:E,p:A,feverCents:y.fever||0,scaleSize:2+Math.round(R*3),jitterMs:Math.round((1-E)*70),detuneCents:Math.round((1-E)*40),bioCutoffHz:Math.round(12e3*Math.pow(.18333333333333332,A)),reverbWet:Math.round((.34-.26*A)*1e3)/1e3,anthroGain:Math.round(A*A*.55*1e3)/1e3,velocity:Math.round((.5+.5*_)*1e3)/1e3}}let u=d=>d.reduce((y,x)=>y+x,0)/d.length,h={jungla:{label:"Jungla",signature:"jungla",unit:"km\xB2 talados ese a\xF1o",source:"INPE PRODES, Amazonia Legal",vitals(d){let y=Math.max(...d.map(R=>R.value)),x=d.reduce((R,E)=>R+E.value,0),_=0;return d.map(R=>{_+=R.value;let E=_/x,A=R.value/y;return{year:R.year,value:R.value,vit:95-55*E,div:100-50*E,est:92-50*A,pre:5+80*A,fever:0}})}},hielo:{label:"Hielo marino",signature:"hielo",unit:"millones de km\xB2 en septiembre",source:"NSIDC Sea Ice Index, \xC1rtico",vitals(d){let y=u(d.slice(0,10).map(x=>x.value));return d.map((x,_)=>{let R=s((y-x.value)/(y-3)),E=_===0?0:s(Math.abs(x.value-d[_-1].value)/1.5);return{year:x.year,value:x.value,vit:95-60*R,div:100-55*R,est:95-30*R-35*E,pre:5+75*R,fever:0}})}},gases:{label:"Gases de efecto invernadero",signature:"gases",unit:"ppm de CO\u2082 en Mauna Loa",source:"NOAA Global Monitoring Laboratory",vitals(d){let y=d[0].value,x=Math.max(...d.map(E=>E.value)),_=d.map((E,A)=>A===0?d[1].value-E.value:E.value-d[A-1].value),R=Math.max(..._);return d.map((E,A)=>{let C=s((E.value-y)/(x-y)),S=s(_[A]/R),b=A===0?0:s(Math.abs(_[A]-_[A-1])/1.5);return{year:E.year,value:E.value,vit:95-45*C,div:100-45*C,est:95-35*C-20*b,pre:5+75*S,fever:50*C}})}}};function f(d,y,x){if(!d.melody)return-1;let _=Math.floor(y*d.melody.length/16);return Math.min(d.melody[_],x-1)}let p=d=>n[d].pressure||{type:"machine"},g=["bajo","canto","arpegio","pulso"];function v(d,y){for(let x of g){let _=d.voices.find(R=>R.id===x);if(_&&_.mask>>y&1)return{voice:x,hz:_.haptic.hz,amp:Math.round(_.haptic.amp*d.velocity*1e3)/1e3,ms:_.haptic.ms}}return null}return{REFERENCE:{vit:95,div:100,est:95,pre:5,fever:0},STEPS:16,PENTA:e,KEEP_ORDER:t,HAPTIC_PRIORITY:g,SIGNATURES:n,DASHBOARDS:h,clamp01:s,midiHz:r,hash01:a,euclid:o,maskOf:l,derive:c,hapticForStep:v,melodyDegree:f,pressureOf:p}})();typeof Wu<"u"&&(Wu.exports=a_)});var P0=0,Uh=1,L0=2;var sd=1,D0=2,li=3,Yn=0,hn=1,Ut=2,zi=0,Ws=1,us=2,zh=3,Oh=4,N0=5,os=100,U0=101,z0=102,O0=103,F0=104,B0=200,k0=201,H0=202,V0=203,Hl=204,Vl=205,G0=206,W0=207,X0=208,q0=209,j0=210,Y0=211,$0=212,Z0=213,K0=214,Gl=0,Wl=1,Xl=2,Ys=3,ql=4,jl=5,Yl=6,$l=7,rd=0,J0=1,Q0=2,Oi=0,ep=1,tp=2,np=3,ip=4,sp=5,rp=6,ap=7,Fh="attached",op="detached",ad=300,$s=301,Zs=302,Zl=303,Kl=304,Uo=306,hs=1e3,ui=1001,Gr=1002,Jt=1003,tu=1004;var Vs=1005;var un=1006,Br=1007;var jn=1008;var di=1009,od=1010,ld=1011,Wr=1012,nu=1013,fs=1014,Bn=1015,sa=1016,iu=1017,su=1018,Ks=1020,cd=35902,ud=1021,hd=1022,Rn=1023,fd=1024,dd=1025,Xs=1026,Js=1027,ru=1028,au=1029,pd=1030,ou=1031;var lu=1033,no=33776,io=33777,so=33778,ro=33779,Jl=35840,Ql=35841,ec=35842,tc=35843,nc=36196,ic=37492,sc=37496,rc=37808,ac=37809,oc=37810,lc=37811,cc=37812,uc=37813,hc=37814,fc=37815,dc=37816,pc=37817,mc=37818,gc=37819,vc=37820,_c=37821,ao=36492,yc=36494,xc=36495,md=36283,bc=36284,Mc=36285,Sc=36286;var Qs=2300,er=2301,cl=2302,Bh=2400,kh=2401,Hh=2402,lp=2500;var gd=0,zo=1,ra=2,cp=3200,up=3201;var vd=0,hp=1,Ni="",Nt="srgb",en="srgb-linear",Oo="linear",vt="srgb";var ws=7680;var Vh=519,fp=512,dp=513,pp=514,_d=515,mp=516,gp=517,vp=518,_p=519,Tc=35044,cu=35048;var Gh="300 es",hi=2e3,oo=2001,Fi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},$t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wh=1234567,kr=Math.PI/180,tr=180/Math.PI;function kn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function Kt(i,e,t){return Math.max(e,Math.min(t,i))}function uu(i,e){return(i%e+e)%e}function yp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function xp(i,e,t){return i!==e?(t-i)/(e-i):0}function Hr(i,e,t){return(1-t)*i+t*e}function bp(i,e,t,n){return Hr(i,e,1-Math.exp(-t*n))}function Mp(i,e=1){return e-Math.abs(uu(i,e*2)-e)}function Sp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Tp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ep(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ap(i,e){return i+Math.random()*(e-i)}function wp(i){return i*(.5-Math.random())}function Rp(i){i!==void 0&&(Wh=i);let e=Wh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Cp(i){return i*kr}function Ip(i){return i*tr}function Pp(i){return(i&i-1)===0&&i!==0}function Lp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Dp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Np(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),f=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*h,l*f,o*c);break;case"YZY":i.set(l*f,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*f,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var yd={DEG2RAD:kr,RAD2DEG:tr,generateUUID:kn,clamp:Kt,euclideanModulo:uu,mapLinear:yp,inverseLerp:xp,lerp:Hr,damp:bp,pingpong:Mp,smoothstep:Sp,smootherstep:Tp,randInt:Ep,randFloat:Ap,randFloatSpread:wp,seededRandom:Rp,degToRad:Cp,radToDeg:Ip,isPowerOfTwo:Pp,ceilPowerOfTwo:Lp,floorPowerOfTwo:Dp,setQuaternionFromProperEuler:Np,normalize:mt,denormalize:Fn},He=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xe=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],v=s[0],m=s[3],d=s[6],y=s[1],x=s[4],_=s[7],R=s[2],E=s[5],A=s[8];return r[0]=a*v+o*y+l*R,r[3]=a*m+o*x+l*E,r[6]=a*d+o*_+l*A,r[1]=c*v+u*y+h*R,r[4]=c*m+u*x+h*E,r[7]=c*d+u*_+h*A,r[2]=f*v+p*y+g*R,r[5]=f*m+p*x+g*E,r[8]=f*d+p*_+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*r,p=c*r-a*l,g=t*h+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=h*v,e[1]=(s*c-u*n)*v,e[2]=(o*n-s*a)*v,e[3]=f*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ul.makeScale(e,t)),this}rotate(e){return this.premultiply(ul.makeRotation(-e)),this}translate(e,t){return this.premultiply(ul.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ul=new Xe;function xd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Up(){let i=Xr("canvas");return i.style.display="block",i}var Xh={};function Or(i){i in Xh||(Xh[i]=!0,console.warn(i))}function zp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Op(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Fp(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Qe={enabled:!0,workingColorSpace:en,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===vt&&(i.r=fi(i.r),i.g=fi(i.g),i.b=fi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===vt&&(i.r=qs(i.r),i.g=qs(i.g),i.b=qs(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ni?Oo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var qh=[.64,.33,.3,.6,.15,.06],jh=[.2126,.7152,.0722],Yh=[.3127,.329],$h=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zh=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qe.define({[en]:{primaries:qh,whitePoint:Yh,transfer:Oo,toXYZ:$h,fromXYZ:Zh,luminanceCoefficients:jh,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:qh,whitePoint:Yh,transfer:vt,toXYZ:$h,fromXYZ:Zh,luminanceCoefficients:jh,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}});var Rs,Ec=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Rs===void 0&&(Rs=Xr("canvas")),Rs.width=e.width,Rs.height=e.height;let n=Rs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Rs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Xr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=fi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fi(t[n]/255)*255):t[n]=fi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Bp=0,lo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Bp++}),this.uuid=kn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(hl(s[a].image)):r.push(hl(s[a]))}else r=hl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function hl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ec.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var kp=0,Xt=class i extends Fi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ui,s=ui,r=un,a=jn,o=Rn,l=di,c=i.DEFAULT_ANISOTROPY,u=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kp++}),this.uuid=kn(),this.name="",this.source=new lo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ad)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hs:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case Gr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hs:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case Gr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=ad;Xt.DEFAULT_ANISOTROPY=1;var lt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,_=(p+1)/2,R=(d+1)/2,E=(u+f)/4,A=(h+v)/4,C=(g+m)/4;return x>_&&x>R?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=E/n,r=A/n):_>R?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=E/s,r=C/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=A/r,s=C/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-v)/y,this.z=(f-u)/y,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ac=class extends Fi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Xt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new lo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},pi=class extends Ac{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},co=class extends Xt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var wc=class extends Xt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _n=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],f=r[a+0],p=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==f||c!==p||u!==g){let m=1-o,d=l*f+c*p+u*g+h*v,y=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){let R=Math.sqrt(x),E=Math.atan2(R,d*y);m=Math.sin(m*E)/R,o=Math.sin(o*E)/R}let _=o*y;if(l=l*m+f*_,c=c*m+p*_,u=u*m+g*_,h=h*m+v*_,m===1-o){let R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-o*p,e[t+2]=c*g+u*p+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>h){let p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>h){let p=2*Math.sqrt(1+o-n-h);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+h-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fl.copy(this).projectOnVector(e),this.sub(fl)}reflect(e){return this.sub(fl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fl=new L,Kh=new _n,Cn=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Un):Un.fromBufferAttribute(r,a),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ca.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ca.copy(n.boundingBox)),Ca.applyMatrix4(e.matrixWorld),this.union(Ca)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cr),Ia.subVectors(this.max,Cr),Cs.subVectors(e.a,Cr),Is.subVectors(e.b,Cr),Ps.subVectors(e.c,Cr),Ri.subVectors(Is,Cs),Ci.subVectors(Ps,Is),es.subVectors(Cs,Ps);let t=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-es.z,es.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,es.z,0,-es.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-es.y,es.x,0];return!dl(t,Cs,Is,Ps,Ia)||(t=[1,0,0,0,1,0,0,0,1],!dl(t,Cs,Is,Ps,Ia))?!1:(Pa.crossVectors(Ri,Ci),t=[Pa.x,Pa.y,Pa.z],dl(t,Cs,Is,Ps,Ia))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ni=[new L,new L,new L,new L,new L,new L,new L,new L],Un=new L,Ca=new Cn,Cs=new L,Is=new L,Ps=new L,Ri=new L,Ci=new L,es=new L,Cr=new L,Ia=new L,Pa=new L,ts=new L;function dl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ts.fromArray(i,r);let o=s.x*Math.abs(ts.x)+s.y*Math.abs(ts.y)+s.z*Math.abs(ts.z),l=e.dot(ts),c=t.dot(ts),u=n.dot(ts);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Hp=new Cn,Ir=new L,pl=new L,yn=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Hp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ir.subVectors(e,this.center);let t=Ir.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ir,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ir.copy(e.center).add(pl)),this.expandByPoint(Ir.copy(e.center).sub(pl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ii=new L,ml=new L,La=new L,Ii=new L,gl=new L,Da=new L,vl=new L,ds=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,t),ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ml.copy(e).add(t).multiplyScalar(.5),La.copy(t).sub(e).normalize(),Ii.copy(this.origin).sub(ml);let r=e.distanceTo(t)*.5,a=-this.direction.dot(La),o=Ii.dot(this.direction),l=-Ii.dot(La),c=Ii.lengthSq(),u=Math.abs(1-a*a),h,f,p,g;if(u>0)if(h=a*l-o,f=a*o-l,g=r*u,h>=0)if(f>=-g)if(f<=g){let v=1/u;h*=v,f*=v,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+f*(f+2*l)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(ml).addScaledVector(La,f),p}intersectSphere(e,t){ii.subVectors(e.center,this.origin);let n=ii.dot(this.direction),s=ii.dot(ii)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,t,n,s,r){gl.subVectors(t,e),Da.subVectors(n,e),vl.crossVectors(gl,Da);let a=this.direction.dot(vl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ii.subVectors(this.origin,e);let l=o*this.direction.dot(Da.crossVectors(Ii,Da));if(l<0)return null;let c=o*this.direction.dot(gl.cross(Ii));if(c<0||l+c>a)return null;let u=-o*Ii.dot(vl);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pe=class i{constructor(e,t,n,s,r,a,o,l,c,u,h,f,p,g,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,h,f,p,g,v,m)}set(e,t,n,s,r,a,o,l,c,u,h,f,p,g,v,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ls.setFromMatrixColumn(e,0).length(),r=1/Ls.setFromMatrixColumn(e,1).length(),a=1/Ls.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=a*u,p=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*u,p=l*h,g=c*u,v=c*h;t[0]=f+v*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*u,p=l*h,g=c*u,v=c*h;t[0]=f-v*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*u,p=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+v,t[1]=l*h,t[5]=v*c+f,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-f*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-v*h}else if(e.order==="XZY"){let f=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+v,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vp,e,Gp)}lookAt(e,t,n){let s=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Pi.crossVectors(n,gn),Pi.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Pi.crossVectors(n,gn)),Pi.normalize(),Na.crossVectors(gn,Pi),s[0]=Pi.x,s[4]=Na.x,s[8]=gn.x,s[1]=Pi.y,s[5]=Na.y,s[9]=gn.y,s[2]=Pi.z,s[6]=Na.z,s[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],v=n[6],m=n[10],d=n[14],y=n[3],x=n[7],_=n[11],R=n[15],E=s[0],A=s[4],C=s[8],S=s[12],b=s[1],P=s[5],B=s[9],O=s[13],G=s[2],$=s[6],W=s[10],J=s[14],F=s[3],se=s[7],oe=s[11],me=s[15];return r[0]=a*E+o*b+l*G+c*F,r[4]=a*A+o*P+l*$+c*se,r[8]=a*C+o*B+l*W+c*oe,r[12]=a*S+o*O+l*J+c*me,r[1]=u*E+h*b+f*G+p*F,r[5]=u*A+h*P+f*$+p*se,r[9]=u*C+h*B+f*W+p*oe,r[13]=u*S+h*O+f*J+p*me,r[2]=g*E+v*b+m*G+d*F,r[6]=g*A+v*P+m*$+d*se,r[10]=g*C+v*B+m*W+d*oe,r[14]=g*S+v*O+m*J+d*me,r[3]=y*E+x*b+_*G+R*F,r[7]=y*A+x*P+_*$+R*se,r[11]=y*C+x*B+_*W+R*oe,r[15]=y*S+x*O+_*J+R*me,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],v=e[7],m=e[11],d=e[15];return g*(+r*l*h-s*c*h-r*o*f+n*c*f+s*o*p-n*l*p)+v*(+t*l*p-t*c*f+r*a*f-s*a*p+s*c*u-r*l*u)+m*(+t*c*h-t*o*p-r*a*h+n*a*p+r*o*u-n*c*u)+d*(-s*o*u-t*l*h+t*o*f+s*a*h-n*a*f+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],v=e[13],m=e[14],d=e[15],y=h*m*c-v*f*c+v*l*p-o*m*p-h*l*d+o*f*d,x=g*f*c-u*m*c-g*l*p+a*m*p+u*l*d-a*f*d,_=u*v*c-g*h*c+g*o*p-a*v*p-u*o*d+a*h*d,R=g*h*l-u*v*l-g*o*f+a*v*f+u*o*m-a*h*m,E=t*y+n*x+s*_+r*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/E;return e[0]=y*A,e[1]=(v*f*r-h*m*r-v*s*p+n*m*p+h*s*d-n*f*d)*A,e[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*d+n*l*d)*A,e[3]=(h*l*r-o*f*r-h*s*c+n*f*c+o*s*p-n*l*p)*A,e[4]=x*A,e[5]=(u*m*r-g*f*r+g*s*p-t*m*p-u*s*d+t*f*d)*A,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*d-t*l*d)*A,e[7]=(a*f*r-u*l*r+u*s*c-t*f*c-a*s*p+t*l*p)*A,e[8]=_*A,e[9]=(g*h*r-u*v*r-g*n*p+t*v*p+u*n*d-t*h*d)*A,e[10]=(a*v*r-g*o*r+g*n*c-t*v*c-a*n*d+t*o*d)*A,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*p-t*o*p)*A,e[12]=R*A,e[13]=(u*v*s-g*h*s+g*n*f-t*v*f-u*n*m+t*h*m)*A,e[14]=(g*o*s-a*v*s-g*n*l+t*v*l+a*n*m-t*o*m)*A,e[15]=(a*h*s-u*o*s+u*n*l-t*h*l-a*n*f+t*o*f)*A,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,f=r*c,p=r*u,g=r*h,v=a*u,m=a*h,d=o*h,y=l*c,x=l*u,_=l*h,R=n.x,E=n.y,A=n.z;return s[0]=(1-(v+d))*R,s[1]=(p+_)*R,s[2]=(g-x)*R,s[3]=0,s[4]=(p-_)*E,s[5]=(1-(f+d))*E,s[6]=(m+y)*E,s[7]=0,s[8]=(g+x)*A,s[9]=(m-y)*A,s[10]=(1-(f+v))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ls.set(s[0],s[1],s[2]).length(),a=Ls.set(s[4],s[5],s[6]).length(),o=Ls.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],zn.copy(this);let c=1/r,u=1/a,h=1/o;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=u,zn.elements[5]*=u,zn.elements[6]*=u,zn.elements[8]*=h,zn.elements[9]*=h,zn.elements[10]*=h,t.setFromRotationMatrix(zn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=hi){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s),p,g;if(o===hi)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===oo)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=hi){let l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(a-r),f=(t+e)*c,p=(n+s)*u,g,v;if(o===hi)g=(a+r)*h,v=-2*h;else if(o===oo)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ls=new L,zn=new Pe,Vp=new L(0,0,0),Gp=new L(1,1,1),Pi=new L,Na=new L,gn=new L,Jh=new Pe,Qh=new _n,$n=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Jh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qh.setFromEuler(this),this.setFromQuaternion(Qh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$n.DEFAULT_ORDER="XYZ";var qr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Wp=0,ef=new L,Ds=new _n,si=new Pe,Ua=new L,Pr=new L,Xp=new L,qp=new _n,tf=new L(1,0,0),nf=new L(0,1,0),sf=new L(0,0,1),rf={type:"added"},jp={type:"removed"},Ns={type:"childadded",child:null},_l={type:"childremoved",child:null},At=class i extends Fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wp++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new $n,n=new _n,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Xe}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(tf,e)}rotateY(e){return this.rotateOnAxis(nf,e)}rotateZ(e){return this.rotateOnAxis(sf,e)}translateOnAxis(e,t){return ef.copy(e).applyQuaternion(this.quaternion),this.position.add(ef.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tf,e)}translateY(e){return this.translateOnAxis(nf,e)}translateZ(e){return this.translateOnAxis(sf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ua.copy(e):Ua.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(Pr,Ua,this.up):si.lookAt(Ua,Pr,this.up),this.quaternion.setFromRotationMatrix(si),s&&(si.extractRotation(s.matrixWorld),Ds.setFromRotationMatrix(si),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rf),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jp),_l.child=e,this.dispatchEvent(_l),_l.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),si.multiply(e.parent.matrixWorld)),e.applyMatrix4(si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rf),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,e,Xp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,qp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};At.DEFAULT_UP=new L(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var On=new L,ri=new L,yl=new L,ai=new L,Us=new L,zs=new L,af=new L,xl=new L,bl=new L,Ml=new L,Sl=new lt,Tl=new lt,El=new lt,ls=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),On.subVectors(e,t),s.cross(On);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){On.subVectors(s,t),ri.subVectors(n,t),yl.subVectors(e,t);let a=On.dot(On),o=On.dot(ri),l=On.dot(yl),c=ri.dot(ri),u=ri.dot(yl),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let f=1/h,p=(c*l-o*u)*f,g=(a*u-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ai.x),l.addScaledVector(a,ai.y),l.addScaledVector(o,ai.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Sl.setScalar(0),Tl.setScalar(0),El.setScalar(0),Sl.fromBufferAttribute(e,t),Tl.fromBufferAttribute(e,n),El.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Sl,r.x),a.addScaledVector(Tl,r.y),a.addScaledVector(El,r.z),a}static isFrontFacing(e,t,n,s){return On.subVectors(n,t),ri.subVectors(e,t),On.cross(ri).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),On.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Us.subVectors(s,n),zs.subVectors(r,n),xl.subVectors(e,n);let l=Us.dot(xl),c=zs.dot(xl);if(l<=0&&c<=0)return t.copy(n);bl.subVectors(e,s);let u=Us.dot(bl),h=zs.dot(bl);if(u>=0&&h<=u)return t.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Us,a);Ml.subVectors(e,r);let p=Us.dot(Ml),g=zs.dot(Ml);if(g>=0&&p<=g)return t.copy(r);let v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(zs,o);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return af.subVectors(r,s),o=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(af,o);let d=1/(m+v+f);return a=v*d,o=f*d,t.copy(n).addScaledVector(Us,a).addScaledVector(zs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},bd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},za={h:0,s:0,l:0};function Al(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Se=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Qe.workingColorSpace){if(e=uu(e,1),t=Kt(t,0,1),n=Kt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Al(a,r,e+1/3),this.g=Al(a,r,e),this.b=Al(a,r,e-1/3)}return Qe.toWorkingColorSpace(this,s),this}setStyle(e,t=Nt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){let n=bd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return Qe.fromWorkingColorSpace(Zt.copy(this),e),Math.round(Kt(Zt.r*255,0,255))*65536+Math.round(Kt(Zt.g*255,0,255))*256+Math.round(Kt(Zt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Zt.copy(this),t);let n=Zt.r,s=Zt.g,r=Zt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Nt){Qe.fromWorkingColorSpace(Zt.copy(this),e);let t=Zt.r,n=Zt.g,s=Zt.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+t,Li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Li),e.getHSL(za);let n=Hr(Li.h,za.h,t),s=Hr(Li.s,za.s,t),r=Hr(Li.l,za.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Zt=new Se;Se.NAMES=bd;var Yp=0,xn=class extends Fi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=kn(),this.name="",this.blending=Ws,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hl,this.blendDst=Vl,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ws,this.stencilZFail=ws,this.stencilZPass=ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(n.blending=this.blending),this.side!==Yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Hl&&(n.blendSrc=this.blendSrc),this.blendDst!==Vl&&(n.blendDst=this.blendDst),this.blendEquation!==os&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ys&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ws&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ws&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ws&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Pt=class extends xn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=rd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var kt=new L,Oa=new He,It=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Tc,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Oa.fromBufferAttribute(this,t),Oa.applyMatrix3(e),this.setXY(t,Oa.x,Oa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tc&&(e.usage=this.usage),e}};var uo=class extends It{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ho=class extends It{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var st=class extends It{constructor(e,t,n){super(new Float32Array(e),t,n)}},$p=0,wn=new Pe,wl=new At,Os=new L,vn=new Cn,Lr=new Cn,Wt=new L,ct=class i extends Fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xd(e)?ho:uo)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,n){return wn.makeTranslation(e,t,n),this.applyMatrix4(wn),this}scale(e,t,n){return wn.makeScale(e,t,n),this.applyMatrix4(wn),this}lookAt(e){return wl.lookAt(e),wl.updateMatrix(),this.applyMatrix4(wl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new st(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Lr.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(vn.min,Lr.min),vn.expandByPoint(Wt),Wt.addVectors(vn.max,Lr.max),vn.expandByPoint(Wt)):(vn.expandByPoint(Lr.min),vn.expandByPoint(Lr.max))}vn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Wt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Wt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Wt.fromBufferAttribute(o,c),l&&(Os.fromBufferAttribute(e,c),Wt.add(Os)),s=Math.max(s,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new It(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new L,l[C]=new L;let c=new L,u=new L,h=new L,f=new He,p=new He,g=new He,v=new L,m=new L;function d(C,S,b){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,b),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,b),u.sub(c),h.sub(c),p.sub(f),g.sub(f);let P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(P),o[C].add(v),o[S].add(v),o[b].add(v),l[C].add(m),l[S].add(m),l[b].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let C=0,S=y.length;C<S;++C){let b=y[C],P=b.start,B=b.count;for(let O=P,G=P+B;O<G;O+=3)d(e.getX(O+0),e.getX(O+1),e.getX(O+2))}let x=new L,_=new L,R=new L,E=new L;function A(C){R.fromBufferAttribute(s,C),E.copy(R);let S=o[C];x.copy(S),x.sub(R.multiplyScalar(R.dot(S))).normalize(),_.crossVectors(E,S);let P=_.dot(l[C])<0?-1:1;a.setXYZW(C,x.x,x.y,x.z,P)}for(let C=0,S=y.length;C<S;++C){let b=y[C],P=b.start,B=b.count;for(let O=P,G=P+B;O<G;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new It(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let f=0,p=e.count;f<p;f+=3){let g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u),p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new It(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},of=new Pe,ns=new ds,Fa=new yn,lf=new L,Ba=new L,ka=new L,Ha=new L,Rl=new L,Va=new L,cf=new L,Ga=new L,ke=class extends At{constructor(e=new ct,t=new Pt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Va.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],h=r[l];u!==0&&(Rl.fromBufferAttribute(h,e),a?Va.addScaledVector(Rl,u):Va.addScaledVector(Rl.sub(t),u))}t.add(Va)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(r),ns.copy(e.ray).recast(e.near),!(Fa.containsPoint(ns.origin)===!1&&(ns.intersectSphere(Fa,lf)===null||ns.origin.distanceToSquared(lf)>(e.far-e.near)**2))&&(of.copy(r).invert(),ns.copy(e.ray).applyMatrix4(of),!(n.boundingBox!==null&&ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ns)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){let m=f[g],d=a[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,R=x;_<R;_+=3){let E=o.getX(_),A=o.getX(_+1),C=o.getX(_+2);s=Wa(this,d,e,n,c,u,h,E,A,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){let y=o.getX(m),x=o.getX(m+1),_=o.getX(m+2);s=Wa(this,a,e,n,c,u,h,y,x,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){let m=f[g],d=a[m.materialIndex],y=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=y,R=x;_<R;_+=3){let E=_,A=_+1,C=_+2;s=Wa(this,d,e,n,c,u,h,E,A,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){let y=m,x=m+1,_=m+2;s=Wa(this,a,e,n,c,u,h,y,x,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Zp(i,e,t,n,s,r,a,o){let l;if(e.side===hn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Yn,o),l===null)return null;Ga.copy(o),Ga.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ga);return c<t.near||c>t.far?null:{distance:c,point:Ga.clone(),object:i}}function Wa(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ba),i.getVertexPosition(l,ka),i.getVertexPosition(c,Ha);let u=Zp(i,e,t,n,Ba,ka,Ha,cf);if(u){let h=new L;ls.getBarycoord(cf,Ba,ka,Ha,h),s&&(u.uv=ls.getInterpolatedAttribute(s,o,l,c,h,new He)),r&&(u.uv1=ls.getInterpolatedAttribute(r,o,l,c,h,new He)),a&&(u.normal=ls.getInterpolatedAttribute(a,o,l,c,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new L,materialIndex:0};ls.getNormal(Ba,ka,Ha,f.normal),u.face=f,u.barycoord=h}return u}var jr=class i extends ct{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(u,3)),this.setAttribute("uv",new st(h,2));function g(v,m,d,y,x,_,R,E,A,C,S){let b=_/A,P=R/C,B=_/2,O=R/2,G=E/2,$=A+1,W=C+1,J=0,F=0,se=new L;for(let oe=0;oe<W;oe++){let me=oe*P-O;for(let Ue=0;Ue<$;Ue++){let tt=Ue*b-B;se[v]=tt*y,se[m]=me*x,se[d]=G,c.push(se.x,se.y,se.z),se[v]=0,se[m]=0,se[d]=E>0?1:-1,u.push(se.x,se.y,se.z),h.push(Ue/A),h.push(1-oe/C),J+=1}}for(let oe=0;oe<C;oe++)for(let me=0;me<A;me++){let Ue=f+me+$*oe,tt=f+me+$*(oe+1),q=f+(me+1)+$*(oe+1),ee=f+(me+1)+$*oe;l.push(Ue,tt,ee),l.push(tt,q,ee),F+=6}o.addGroup(p,F,S),p+=F,f+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function nr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function rn(i){let e={};for(let t=0;t<i.length;t++){let n=nr(i[t]);for(let s in n)e[s]=n[s]}return e}function Kp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Md(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}var Jp={clone:nr,merge:rn},Qp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,em=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Zn=class extends xn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qp,this.fragmentShader=em,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=nr(e.uniforms),this.uniformsGroups=Kp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},fo=class extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=hi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Di=new L,uf=new He,hf=new He,Ht=class extends fo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=tr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(kr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tr*2*Math.atan(Math.tan(kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Di.x,Di.y).multiplyScalar(-e/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-e/Di.z)}getViewSize(e,t){return this.getViewBounds(e,uf,hf),t.subVectors(hf,uf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(kr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Fs=-90,Bs=1,Rc=class extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ht(Fs,Bs,e,t);s.layers=this.layers,this.add(s);let r=new Ht(Fs,Bs,e,t);r.layers=this.layers,this.add(r);let a=new Ht(Fs,Bs,e,t);a.layers=this.layers,this.add(a);let o=new Ht(Fs,Bs,e,t);o.layers=this.layers,this.add(o);let l=new Ht(Fs,Bs,e,t);l.layers=this.layers,this.add(l);let c=new Ht(Fs,Bs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===hi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===oo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},po=class extends Xt{constructor(e,t,n,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:$s,super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Cc=class extends pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new po(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new jr(5,5,5),r=new Zn({name:"CubemapFromEquirect",uniforms:nr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:zi});r.uniforms.tEquirect.value=t;let a=new ke(s,r),o=t.minFilter;return t.minFilter===jn&&(t.minFilter=un),new Rc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Cl=new L,tm=new L,nm=new Xe,ci=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Cl.subVectors(n,t).cross(tm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Cl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||nm.getNormalMatrix(e),s=this.coplanarPoint(Cl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},is=new yn,Xa=new L,Yr=class{constructor(e=new ci,t=new ci,n=new ci,s=new ci,r=new ci,a=new ci){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hi){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],p=s[8],g=s[9],v=s[10],m=s[11],d=s[12],y=s[13],x=s[14],_=s[15];if(n[0].setComponents(l-r,f-c,m-p,_-d).normalize(),n[1].setComponents(l+r,f+c,m+p,_+d).normalize(),n[2].setComponents(l+a,f+u,m+g,_+y).normalize(),n[3].setComponents(l-a,f-u,m-g,_-y).normalize(),n[4].setComponents(l-o,f-h,m-v,_-x).normalize(),t===hi)n[5].setComponents(l+o,f+h,m+v,_+x).normalize();else if(t===oo)n[5].setComponents(o,h,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(e){return is.center.set(0,0,0),is.radius=.7071067811865476,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Xa.x=s.normal.x>0?e.max.x:e.min.x,Xa.y=s.normal.y>0?e.max.y:e.min.y,Xa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Xa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Sd(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function im(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){let g=h[f],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,h[f]=v)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){let v=h[p];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Bi=class i extends ct{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,f=t/l,p=[],g=[],v=[],m=[];for(let d=0;d<u;d++){let y=d*f-a;for(let x=0;x<c;x++){let _=x*h-r;g.push(_,-y,0),v.push(0,0,1),m.push(x/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<o;y++){let x=y+c*d,_=y+c*(d+1),R=y+1+c*(d+1),E=y+1+c*d;p.push(x,_,E),p.push(_,R,E)}this.setIndex(p),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(v,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},sm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rm=`#ifdef USE_ALPHAHASH
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
#endif`,am=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,om=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,um=`#ifdef USE_AOMAP
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
#endif`,hm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fm=`#ifdef USE_BATCHING
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
#endif`,dm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vm=`#ifdef USE_IRIDESCENCE
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
#endif`,_m=`#ifdef USE_BUMPMAP
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
#endif`,ym=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Am=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wm=`#define PI 3.141592653589793
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
} // validated`,Rm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cm=`vec3 transformedNormal = objectNormal;
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
#endif`,Im=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Um=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zm=`#ifdef USE_ENVMAP
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
#endif`,Om=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fm=`#ifdef USE_ENVMAP
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
#endif`,Bm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,km=`#ifdef USE_ENVMAP
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
#endif`,Hm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xm=`#ifdef USE_GRADIENTMAP
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
}`,qm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$m=`uniform bool receiveShadow;
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
#endif`,Zm=`#ifdef USE_ENVMAP
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
#endif`,Km=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,e1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,t1=`PhysicalMaterial material;
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
#endif`,n1=`struct PhysicalMaterial {
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
}`,i1=`
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
#endif`,s1=`#if defined( RE_IndirectDiffuse )
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
#endif`,r1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,a1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,o1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,u1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,h1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,d1=`#if defined( USE_POINTS_UV )
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
#endif`,p1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,m1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,g1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,v1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y1=`#ifdef USE_MORPHTARGETS
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
#endif`,x1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,M1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,S1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,E1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,A1=`#ifdef USE_NORMALMAP
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
#endif`,w1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,R1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,C1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,I1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,P1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,L1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,D1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,N1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,U1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,z1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,O1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,F1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,B1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,H1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,V1=`float getShadowMask() {
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
}`,G1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W1=`#ifdef USE_SKINNING
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
#endif`,X1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,q1=`#ifdef USE_SKINNING
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
#endif`,j1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Y1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Z1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,K1=`#ifdef USE_TRANSMISSION
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
#endif`,J1=`#ifdef USE_TRANSMISSION
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
#endif`,Q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,i2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,s2=`uniform sampler2D t2D;
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
}`,r2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,o2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c2=`#include <common>
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
}`,u2=`#if DEPTH_PACKING == 3200
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
}`,h2=`#define DISTANCE
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
}`,f2=`#define DISTANCE
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
}`,d2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,p2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m2=`uniform float scale;
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
}`,g2=`uniform vec3 diffuse;
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
}`,v2=`#include <common>
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
}`,_2=`uniform vec3 diffuse;
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
}`,y2=`#define LAMBERT
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
}`,x2=`#define LAMBERT
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
}`,b2=`#define MATCAP
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
}`,M2=`#define MATCAP
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
}`,S2=`#define NORMAL
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
}`,T2=`#define NORMAL
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
}`,E2=`#define PHONG
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
}`,A2=`#define PHONG
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
}`,w2=`#define STANDARD
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
}`,R2=`#define STANDARD
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
}`,C2=`#define TOON
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
}`,I2=`#define TOON
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
}`,P2=`uniform float size;
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
}`,L2=`uniform vec3 diffuse;
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
}`,D2=`#include <common>
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
}`,N2=`uniform vec3 color;
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
}`,U2=`uniform float rotation;
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
}`,z2=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:sm,alphahash_pars_fragment:rm,alphamap_fragment:am,alphamap_pars_fragment:om,alphatest_fragment:lm,alphatest_pars_fragment:cm,aomap_fragment:um,aomap_pars_fragment:hm,batching_pars_vertex:fm,batching_vertex:dm,begin_vertex:pm,beginnormal_vertex:mm,bsdfs:gm,iridescence_fragment:vm,bumpmap_pars_fragment:_m,clipping_planes_fragment:ym,clipping_planes_pars_fragment:xm,clipping_planes_pars_vertex:bm,clipping_planes_vertex:Mm,color_fragment:Sm,color_pars_fragment:Tm,color_pars_vertex:Em,color_vertex:Am,common:wm,cube_uv_reflection_fragment:Rm,defaultnormal_vertex:Cm,displacementmap_pars_vertex:Im,displacementmap_vertex:Pm,emissivemap_fragment:Lm,emissivemap_pars_fragment:Dm,colorspace_fragment:Nm,colorspace_pars_fragment:Um,envmap_fragment:zm,envmap_common_pars_fragment:Om,envmap_pars_fragment:Fm,envmap_pars_vertex:Bm,envmap_physical_pars_fragment:Zm,envmap_vertex:km,fog_vertex:Hm,fog_pars_vertex:Vm,fog_fragment:Gm,fog_pars_fragment:Wm,gradientmap_pars_fragment:Xm,lightmap_pars_fragment:qm,lights_lambert_fragment:jm,lights_lambert_pars_fragment:Ym,lights_pars_begin:$m,lights_toon_fragment:Km,lights_toon_pars_fragment:Jm,lights_phong_fragment:Qm,lights_phong_pars_fragment:e1,lights_physical_fragment:t1,lights_physical_pars_fragment:n1,lights_fragment_begin:i1,lights_fragment_maps:s1,lights_fragment_end:r1,logdepthbuf_fragment:a1,logdepthbuf_pars_fragment:o1,logdepthbuf_pars_vertex:l1,logdepthbuf_vertex:c1,map_fragment:u1,map_pars_fragment:h1,map_particle_fragment:f1,map_particle_pars_fragment:d1,metalnessmap_fragment:p1,metalnessmap_pars_fragment:m1,morphinstance_vertex:g1,morphcolor_vertex:v1,morphnormal_vertex:_1,morphtarget_pars_vertex:y1,morphtarget_vertex:x1,normal_fragment_begin:b1,normal_fragment_maps:M1,normal_pars_fragment:S1,normal_pars_vertex:T1,normal_vertex:E1,normalmap_pars_fragment:A1,clearcoat_normal_fragment_begin:w1,clearcoat_normal_fragment_maps:R1,clearcoat_pars_fragment:C1,iridescence_pars_fragment:I1,opaque_fragment:P1,packing:L1,premultiplied_alpha_fragment:D1,project_vertex:N1,dithering_fragment:U1,dithering_pars_fragment:z1,roughnessmap_fragment:O1,roughnessmap_pars_fragment:F1,shadowmap_pars_fragment:B1,shadowmap_pars_vertex:k1,shadowmap_vertex:H1,shadowmask_pars_fragment:V1,skinbase_vertex:G1,skinning_pars_vertex:W1,skinning_vertex:X1,skinnormal_vertex:q1,specularmap_fragment:j1,specularmap_pars_fragment:Y1,tonemapping_fragment:$1,tonemapping_pars_fragment:Z1,transmission_fragment:K1,transmission_pars_fragment:J1,uv_pars_fragment:Q1,uv_pars_vertex:e2,uv_vertex:t2,worldpos_vertex:n2,background_vert:i2,background_frag:s2,backgroundCube_vert:r2,backgroundCube_frag:a2,cube_vert:o2,cube_frag:l2,depth_vert:c2,depth_frag:u2,distanceRGBA_vert:h2,distanceRGBA_frag:f2,equirect_vert:d2,equirect_frag:p2,linedashed_vert:m2,linedashed_frag:g2,meshbasic_vert:v2,meshbasic_frag:_2,meshlambert_vert:y2,meshlambert_frag:x2,meshmatcap_vert:b2,meshmatcap_frag:M2,meshnormal_vert:S2,meshnormal_frag:T2,meshphong_vert:E2,meshphong_frag:A2,meshphysical_vert:w2,meshphysical_frag:R2,meshtoon_vert:C2,meshtoon_frag:I2,points_vert:P2,points_frag:L2,shadow_vert:D2,shadow_frag:N2,sprite_vert:U2,sprite_frag:z2},ce={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},qn={basic:{uniforms:rn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:rn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Se(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:rn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:rn([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:rn([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Se(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:rn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:rn([ce.points,ce.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:rn([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:rn([ce.common,ce.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:rn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:rn([ce.sprite,ce.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:rn([ce.common,ce.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:rn([ce.lights,ce.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};qn.physical={uniforms:rn([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};var qa={r:0,b:0,g:0},ss=new $n,O2=new Pe;function F2(i,e,t,n,s,r,a){let o=new Se(0),l=r===!0?0:1,c,u,h=null,f=0,p=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function v(y){let x=!1,_=g(y);_===null?d(o,l):_&&_.isColor&&(d(_,1),x=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,x){let _=g(x);_&&(_.isCubeTexture||_.mapping===Uo)?(u===void 0&&(u=new ke(new jr(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:nr(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ss.copy(x.backgroundRotation),ss.x*=-1,ss.y*=-1,ss.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(O2.makeRotationFromEuler(ss)),u.material.toneMapped=Qe.getTransfer(_.colorSpace)!==vt,(h!==_||f!==_.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,p=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ke(new Bi(2,2),new Zn({name:"BackgroundMaterial",uniforms:nr(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(_.colorSpace)!==vt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,p=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function d(y,x){y.getRGB(qa,Md(i)),n.buffers.color.setClear(qa.r,qa.g,qa.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),l=x,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(o,l)},render:v,addToRenderList:m}}function B2(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(b,P,B,O,G){let $=!1,W=h(O,B,P);r!==W&&(r=W,c(r.object)),$=p(b,O,B,G),$&&g(b,O,B,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,_(b,P,B,O),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function h(b,P,B){let O=B.wireframe===!0,G=n[b.id];G===void 0&&(G={},n[b.id]=G);let $=G[P.id];$===void 0&&($={},G[P.id]=$);let W=$[O];return W===void 0&&(W=f(l()),$[O]=W),W}function f(b){let P=[],B=[],O=[];for(let G=0;G<t;G++)P[G]=0,B[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:O,object:b,attributes:{},index:null}}function p(b,P,B,O){let G=r.attributes,$=P.attributes,W=0,J=B.getAttributes();for(let F in J)if(J[F].location>=0){let oe=G[F],me=$[F];if(me===void 0&&(F==="instanceMatrix"&&b.instanceMatrix&&(me=b.instanceMatrix),F==="instanceColor"&&b.instanceColor&&(me=b.instanceColor)),oe===void 0||oe.attribute!==me||me&&oe.data!==me.data)return!0;W++}return r.attributesNum!==W||r.index!==O}function g(b,P,B,O){let G={},$=P.attributes,W=0,J=B.getAttributes();for(let F in J)if(J[F].location>=0){let oe=$[F];oe===void 0&&(F==="instanceMatrix"&&b.instanceMatrix&&(oe=b.instanceMatrix),F==="instanceColor"&&b.instanceColor&&(oe=b.instanceColor));let me={};me.attribute=oe,oe&&oe.data&&(me.data=oe.data),G[F]=me,W++}r.attributes=G,r.attributesNum=W,r.index=O}function v(){let b=r.newAttributes;for(let P=0,B=b.length;P<B;P++)b[P]=0}function m(b){d(b,0)}function d(b,P){let B=r.newAttributes,O=r.enabledAttributes,G=r.attributeDivisors;B[b]=1,O[b]===0&&(i.enableVertexAttribArray(b),O[b]=1),G[b]!==P&&(i.vertexAttribDivisor(b,P),G[b]=P)}function y(){let b=r.newAttributes,P=r.enabledAttributes;for(let B=0,O=P.length;B<O;B++)P[B]!==b[B]&&(i.disableVertexAttribArray(B),P[B]=0)}function x(b,P,B,O,G,$,W){W===!0?i.vertexAttribIPointer(b,P,B,G,$):i.vertexAttribPointer(b,P,B,O,G,$)}function _(b,P,B,O){v();let G=O.attributes,$=B.getAttributes(),W=P.defaultAttributeValues;for(let J in $){let F=$[J];if(F.location>=0){let se=G[J];if(se===void 0&&(J==="instanceMatrix"&&b.instanceMatrix&&(se=b.instanceMatrix),J==="instanceColor"&&b.instanceColor&&(se=b.instanceColor)),se!==void 0){let oe=se.normalized,me=se.itemSize,Ue=e.get(se);if(Ue===void 0)continue;let tt=Ue.buffer,q=Ue.type,ee=Ue.bytesPerElement,pe=q===i.INT||q===i.UNSIGNED_INT||se.gpuType===nu;if(se.isInterleavedBufferAttribute){let ae=se.data,Te=ae.stride,Ie=se.offset;if(ae.isInstancedInterleavedBuffer){for(let Fe=0;Fe<F.locationSize;Fe++)d(F.location+Fe,ae.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Fe=0;Fe<F.locationSize;Fe++)m(F.location+Fe);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let Fe=0;Fe<F.locationSize;Fe++)x(F.location+Fe,me/F.locationSize,q,oe,Te*ee,(Ie+me/F.locationSize*Fe)*ee,pe)}else{if(se.isInstancedBufferAttribute){for(let ae=0;ae<F.locationSize;ae++)d(F.location+ae,se.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ae=0;ae<F.locationSize;ae++)m(F.location+ae);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let ae=0;ae<F.locationSize;ae++)x(F.location+ae,me/F.locationSize,q,oe,me*ee,me/F.locationSize*ae*ee,pe)}}else if(W!==void 0){let oe=W[J];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(F.location,oe);break;case 3:i.vertexAttrib3fv(F.location,oe);break;case 4:i.vertexAttrib4fv(F.location,oe);break;default:i.vertexAttrib1fv(F.location,oe)}}}}y()}function R(){C();for(let b in n){let P=n[b];for(let B in P){let O=P[B];for(let G in O)u(O[G].object),delete O[G];delete P[B]}delete n[b]}}function E(b){if(n[b.id]===void 0)return;let P=n[b.id];for(let B in P){let O=P[B];for(let G in O)u(O[G].object),delete O[G];delete P[B]}delete n[b.id]}function A(b){for(let P in n){let B=n[P];if(B[b.id]===void 0)continue;let O=B[b.id];for(let G in O)u(O[G].object),delete O[G];delete B[b.id]}}function C(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function k2(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,n,1)}function l(c,u,h,f){if(h===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*f[v];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function H2(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Rn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let C=A===sa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==di&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Bn&&!C)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:R,maxSamples:E}}function V2(i){let e=this,t=null,n=0,s=!1,r=!1,a=new ci,o=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let p=h.length!==0||f||n!==0||s;return s=f,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){let g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let y=r?0:n,x=y*4,_=d.clippingState||null;l.value=_,_=u(g,f,x,p);for(let R=0;R!==x;++R)_[R]=t[R];d.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){let v=h!==null?h.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let d=p+v*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,_=p;x!==v;++x,_+=4)a.copy(h[x]).applyMatrix4(y,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function G2(i){let e=new WeakMap;function t(a,o){return o===Zl?a.mapping=$s:o===Kl&&(a.mapping=Zs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Zl||o===Kl)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Cc(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ir=class extends fo{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Gs=4,ff=[.125,.215,.35,.446,.526,.582],cs=20,Il=new ir,df=new Se,Pl=null,Ll=0,Dl=0,Nl=!1,as=(1+Math.sqrt(5))/2,ks=1/as,pf=[new L(-as,ks,0),new L(as,ks,0),new L(-ks,0,as),new L(ks,0,as),new L(0,as,-ks),new L(0,as,ks),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],mo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Pl=this._renderer.getRenderTarget(),Ll=this._renderer.getActiveCubeFace(),Dl=this._renderer.getActiveMipmapLevel(),Nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pl,Ll,Dl),this._renderer.xr.enabled=Nl,e.scissorTest=!1,ja(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$s||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pl=this._renderer.getRenderTarget(),Ll=this._renderer.getActiveCubeFace(),Dl=this._renderer.getActiveMipmapLevel(),Nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:sa,format:Rn,colorSpace:en,depthBuffer:!1},s=mf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=W2(r)),this._blurMaterial=X2(r,e,t)}return s}_compileMaterial(e){let t=new ke(this._lodPlanes[0],e);this._renderer.compile(t,Il)}_sceneToCubeUV(e,t,n,s){let o=new Ht(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(df),u.toneMapping=Oi,u.autoClear=!1;let p=new Pt({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),g=new ke(new jr,p),v=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(df),v=!0);for(let d=0;d<6;d++){let y=d%3;y===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):y===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));let x=this._cubeSize;ja(s,y*x,d>2?x:0,x,x),u.setRenderTarget(s),v&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===$s||e.mapping===Zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ke(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;ja(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Il)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=pf[(s-r-1)%pf.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new ke(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*cs-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):cs;m>cs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${cs}`);let d=[],y=0;for(let A=0;A<cs;++A){let C=A/v,S=Math.exp(-C*C/2);d.push(S),A===0?y+=S:A<m&&(y+=2*S)}for(let A=0;A<d.length;A++)d[A]=d[A]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;let _=this._sizeLods[s],R=3*_*(s>x-Gs?s-x+Gs:0),E=4*(this._cubeSize-_);ja(t,R,E,3*_,2*_),l.setRenderTarget(t),l.render(h,Il)}};function W2(i){let e=[],t=[],n=[],s=i,r=i-Gs+1+ff.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Gs?l=ff[a-i+Gs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,v=3,m=2,d=1,y=new Float32Array(v*g*p),x=new Float32Array(m*g*p),_=new Float32Array(d*g*p);for(let E=0;E<p;E++){let A=E%3*2/3-1,C=E>2?0:-1,S=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];y.set(S,v*g*E),x.set(f,m*g*E);let b=[E,E,E,E,E,E];_.set(b,d*g*E)}let R=new ct;R.setAttribute("position",new It(y,v)),R.setAttribute("uv",new It(x,m)),R.setAttribute("faceIndex",new It(_,d)),e.push(R),s>Gs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function mf(i,e,t){let n=new pi(i,e,t);return n.texture.mapping=Uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ja(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function X2(i,e,t){let n=new Float32Array(cs),s=new L(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:hu(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function gf(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hu(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function vf(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function hu(){return`

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
	`}function q2(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Zl||l===Kl,u=l===$s||l===Zs;if(c||u){let h=e.get(o),f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new mo(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{let p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new mo(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function j2(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Or("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Y2(i,e,t,n){let s={},r=new WeakMap;function a(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let v=f.morphAttributes[g];for(let m=0,d=v.length;m<d;m++)e.remove(v[m])}f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(h){let f=h.attributes;for(let g in f)e.update(f[g],i.ARRAY_BUFFER);let p=h.morphAttributes;for(let g in p){let v=p[g];for(let m=0,d=v.length;m<d;m++)e.update(v[m],i.ARRAY_BUFFER)}}function c(h){let f=[],p=h.index,g=h.attributes.position,v=0;if(p!==null){let y=p.array;v=p.version;for(let x=0,_=y.length;x<_;x+=3){let R=y[x+0],E=y[x+1],A=y[x+2];f.push(R,E,E,A,A,R)}}else if(g!==void 0){let y=g.array;v=g.version;for(let x=0,_=y.length/3-1;x<_;x+=3){let R=x+0,E=x+1,A=x+2;f.push(R,E,E,A,A,R)}}else return;let m=new(xd(f)?ho:uo)(f,1);m.version=v;let d=r.get(h);d&&e.remove(d),r.set(h,m)}function u(h){let f=r.get(h);if(f){let p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function $2(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),t.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*a,g),t.update(p,n,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,n,1)}function h(f,p,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],v[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,v,0,g);let d=0;for(let y=0;y<g;y++)d+=p[y]*v[y];t.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Z2(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function K2(i,e,t){let n=new WeakMap,s=new lt;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==h){let S=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],x=0;p===!0&&(x=1),g===!0&&(x=2),v===!0&&(x=3);let _=o.attributes.position.count*x,R=1;_>e.maxTextureSize&&(R=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let E=new Float32Array(_*R*4*h),A=new co(E,_,R,h);A.type=Bn,A.needsUpdate=!0;let C=x*4;for(let b=0;b<h;b++){let P=m[b],B=d[b],O=y[b],G=_*R*4*b;for(let $=0;$<P.count;$++){let W=$*C;p===!0&&(s.fromBufferAttribute(P,$),E[G+W+0]=s.x,E[G+W+1]=s.y,E[G+W+2]=s.z,E[G+W+3]=0),g===!0&&(s.fromBufferAttribute(B,$),E[G+W+4]=s.x,E[G+W+5]=s.y,E[G+W+6]=s.z,E[G+W+7]=0),v===!0&&(s.fromBufferAttribute(O,$),E[G+W+8]=s.x,E[G+W+9]=s.y,E[G+W+10]=s.z,E[G+W+11]=O.itemSize===4?s.w:1)}}f={count:h,texture:A,size:new He(_,R)},n.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function J2(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var go=class extends Xt{constructor(e,t,n,s,r,a,o,l,c,u=Xs){if(u!==Xs&&u!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Xs&&(n=fs),n===void 0&&u===Js&&(n=Ks),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Jt,this.minFilter=l!==void 0?l:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Td=new Xt,_f=new go(1,1),Ed=new co,Ad=new wc,wd=new po,yf=[],xf=[],bf=new Float32Array(16),Mf=new Float32Array(9),Sf=new Float32Array(4);function lr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=yf[s];if(r===void 0&&(r=new Float32Array(s),yf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Fo(i,e){let t=xf[e];t===void 0&&(t=new Int32Array(e),xf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Q2(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function eg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2fv(this.addr,e),Gt(t,e)}}function tg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;i.uniform3fv(this.addr,e),Gt(t,e)}}function ng(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4fv(this.addr,e),Gt(t,e)}}function ig(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;Sf.set(n),i.uniformMatrix2fv(this.addr,!1,Sf),Gt(t,n)}}function sg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;Mf.set(n),i.uniformMatrix3fv(this.addr,!1,Mf),Gt(t,n)}}function rg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(Vt(t,n))return;bf.set(n),i.uniformMatrix4fv(this.addr,!1,bf),Gt(t,n)}}function ag(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function og(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2iv(this.addr,e),Gt(t,e)}}function lg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3iv(this.addr,e),Gt(t,e)}}function cg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4iv(this.addr,e),Gt(t,e)}}function ug(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function hg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2uiv(this.addr,e),Gt(t,e)}}function fg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3uiv(this.addr,e),Gt(t,e)}}function dg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4uiv(this.addr,e),Gt(t,e)}}function pg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(_f.compareFunction=_d,r=_f):r=Td,t.setTexture2D(e||r,s)}function mg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ad,s)}function gg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||wd,s)}function vg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ed,s)}function _g(i){switch(i){case 5126:return Q2;case 35664:return eg;case 35665:return tg;case 35666:return ng;case 35674:return ig;case 35675:return sg;case 35676:return rg;case 5124:case 35670:return ag;case 35667:case 35671:return og;case 35668:case 35672:return lg;case 35669:case 35673:return cg;case 5125:return ug;case 36294:return hg;case 36295:return fg;case 36296:return dg;case 35678:case 36198:case 36298:case 36306:case 35682:return pg;case 35679:case 36299:case 36307:return mg;case 35680:case 36300:case 36308:case 36293:return gg;case 36289:case 36303:case 36311:case 36292:return vg}}function yg(i,e){i.uniform1fv(this.addr,e)}function xg(i,e){let t=lr(e,this.size,2);i.uniform2fv(this.addr,t)}function bg(i,e){let t=lr(e,this.size,3);i.uniform3fv(this.addr,t)}function Mg(i,e){let t=lr(e,this.size,4);i.uniform4fv(this.addr,t)}function Sg(i,e){let t=lr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Tg(i,e){let t=lr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Eg(i,e){let t=lr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ag(i,e){i.uniform1iv(this.addr,e)}function wg(i,e){i.uniform2iv(this.addr,e)}function Rg(i,e){i.uniform3iv(this.addr,e)}function Cg(i,e){i.uniform4iv(this.addr,e)}function Ig(i,e){i.uniform1uiv(this.addr,e)}function Pg(i,e){i.uniform2uiv(this.addr,e)}function Lg(i,e){i.uniform3uiv(this.addr,e)}function Dg(i,e){i.uniform4uiv(this.addr,e)}function Ng(i,e,t){let n=this.cache,s=e.length,r=Fo(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Td,r[a])}function Ug(i,e,t){let n=this.cache,s=e.length,r=Fo(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Ad,r[a])}function zg(i,e,t){let n=this.cache,s=e.length,r=Fo(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||wd,r[a])}function Og(i,e,t){let n=this.cache,s=e.length,r=Fo(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Ed,r[a])}function Fg(i){switch(i){case 5126:return yg;case 35664:return xg;case 35665:return bg;case 35666:return Mg;case 35674:return Sg;case 35675:return Tg;case 35676:return Eg;case 5124:case 35670:return Ag;case 35667:case 35671:return wg;case 35668:case 35672:return Rg;case 35669:case 35673:return Cg;case 5125:return Ig;case 36294:return Pg;case 36295:return Lg;case 36296:return Dg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return zg;case 36289:case 36303:case 36311:case 36292:return Og}}var Ic=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_g(t.type)}},Pc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fg(t.type)}},Lc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Ul=/(\w+)(\])?(\[|\.)?/g;function Tf(i,e){i.seq.push(e),i.map[e.id]=e}function Bg(i,e,t){let n=i.name,s=n.length;for(Ul.lastIndex=0;;){let r=Ul.exec(n),a=Ul.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Tf(t,c===void 0?new Ic(o,i,e):new Pc(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Lc(o),Tf(t,h)),t=h}}}var js=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Bg(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Ef(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var kg=37297,Hg=0;function Vg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Af=new Xe;function Gg(i){Qe._getMatrix(Af,Qe.workingColorSpace,i);let e=`mat3( ${Af.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case Oo:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function wf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Vg(i.getShaderSource(e),a)}else return s}function Wg(i,e){let t=Gg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Xg(i,e){let t;switch(e){case ep:t="Linear";break;case tp:t="Reinhard";break;case np:t="Cineon";break;case ip:t="ACESFilmic";break;case rp:t="AgX";break;case ap:t="Neutral";break;case sp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ya=new L;function qg(){Qe.getLuminanceCoefficients(Ya);let i=Ya.x.toFixed(4),e=Ya.y.toFixed(4),t=Ya.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fr).join(`
`)}function Yg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $g(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Fr(i){return i!==""}function Rf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Zg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dc(i){return i.replace(Zg,Jg)}var Kg=new Map;function Jg(i,e){let t=Ye[e];if(t===void 0){let n=Kg.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Dc(t)}var Qg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function If(i){return i.replace(Qg,ev)}function ev(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Pf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function tv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===sd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===D0?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===li&&(e="SHADOWMAP_TYPE_VSM"),e}function nv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case $s:case Zs:e="ENVMAP_TYPE_CUBE";break;case Uo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iv(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Zs&&(e="ENVMAP_MODE_REFRACTION"),e}function sv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case rd:e="ENVMAP_BLENDING_MULTIPLY";break;case J0:e="ENVMAP_BLENDING_MIX";break;case Q0:e="ENVMAP_BLENDING_ADD";break}return e}function rv(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function av(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=tv(t),c=nv(t),u=iv(t),h=sv(t),f=rv(t),p=jg(t),g=Yg(r),v=s.createProgram(),m,d,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Fr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Fr).join(`
`),d.length>0&&(d+=`
`)):(m=[Pf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fr).join(`
`),d=[Pf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Oi?"#define TONE_MAPPING":"",t.toneMapping!==Oi?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Oi?Xg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Wg("linearToOutputTexel",t.outputColorSpace),qg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fr).join(`
`)),a=Dc(a),a=Rf(a,t),a=Cf(a,t),o=Dc(o),o=Rf(o,t),o=Cf(o,t),a=If(a),o=If(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let x=y+m+a,_=y+d+o,R=Ef(s,s.VERTEX_SHADER,x),E=Ef(s,s.FRAGMENT_SHADER,_);s.attachShader(v,R),s.attachShader(v,E),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(P){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(v).trim(),O=s.getShaderInfoLog(R).trim(),G=s.getShaderInfoLog(E).trim(),$=!0,W=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,R,E);else{let J=wf(s,R,"vertex"),F=wf(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+J+`
`+F)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(O===""||G==="")&&(W=!1);W&&(P.diagnostics={runnable:$,programLog:B,vertexShader:{log:O,prefix:m},fragmentShader:{log:G,prefix:d}})}s.deleteShader(R),s.deleteShader(E),C=new js(s,v),S=$g(s,v)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(v,kg)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Hg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=E,this}var ov=0,Nc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Uc(e),t.set(e,n)),n}},Uc=class{constructor(e){this.id=ov++,this.code=e,this.usedTimes=0}};function lv(i,e,t,n,s,r,a){let o=new qr,l=new Nc,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,b,P,B,O){let G=B.fog,$=O.geometry,W=S.isMeshStandardMaterial?B.environment:null,J=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),F=J&&J.mapping===Uo?J.image.height:null,se=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));let oe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,me=oe!==void 0?oe.length:0,Ue=0;$.morphAttributes.position!==void 0&&(Ue=1),$.morphAttributes.normal!==void 0&&(Ue=2),$.morphAttributes.color!==void 0&&(Ue=3);let tt,q,ee,pe;if(se){let pt=qn[se];tt=pt.vertexShader,q=pt.fragmentShader}else tt=S.vertexShader,q=S.fragmentShader,l.update(S),ee=l.getVertexShaderID(S),pe=l.getFragmentShaderID(S);let ae=i.getRenderTarget(),Te=i.state.buffers.depth.getReversed(),Ie=O.isInstancedMesh===!0,Fe=O.isBatchedMesh===!0,ot=!!S.map,De=!!S.matcap,it=!!J,N=!!S.aoMap,jt=!!S.lightMap,$e=!!S.bumpMap,Ve=!!S.normalMap,Re=!!S.displacementMap,gt=!!S.emissiveMap,Ce=!!S.metalnessMap,w=!!S.roughnessMap,M=S.anisotropy>0,k=S.clearcoat>0,j=S.dispersion>0,K=S.iridescence>0,Y=S.sheen>0,ye=S.transmission>0,ie=M&&!!S.anisotropyMap,ge=k&&!!S.clearcoatMap,Je=k&&!!S.clearcoatNormalMap,ne=k&&!!S.clearcoatRoughnessMap,le=K&&!!S.iridescenceMap,Ae=K&&!!S.iridescenceThicknessMap,Le=Y&&!!S.sheenColorMap,ve=Y&&!!S.sheenRoughnessMap,Ze=!!S.specularMap,Be=!!S.specularColorMap,dt=!!S.specularIntensityMap,D=ye&&!!S.transmissionMap,ue=ye&&!!S.thicknessMap,X=!!S.gradientMap,Z=!!S.alphaMap,de=S.alphaTest>0,he=!!S.alphaHash,Ge=!!S.extensions,Ct=Oi;S.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Ct=i.toneMapping);let Yt={shaderID:se,shaderType:S.type,shaderName:S.name,vertexShader:tt,fragmentShader:q,defines:S.defines,customVertexShaderID:ee,customFragmentShaderID:pe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Fe,batchingColor:Fe&&O._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&O.instanceColor!==null,instancingMorph:Ie&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:en,alphaToCoverage:!!S.alphaToCoverage,map:ot,matcap:De,envMap:it,envMapMode:it&&J.mapping,envMapCubeUVHeight:F,aoMap:N,lightMap:jt,bumpMap:$e,normalMap:Ve,displacementMap:f&&Re,emissiveMap:gt,normalMapObjectSpace:Ve&&S.normalMapType===hp,normalMapTangentSpace:Ve&&S.normalMapType===vd,metalnessMap:Ce,roughnessMap:w,anisotropy:M,anisotropyMap:ie,clearcoat:k,clearcoatMap:ge,clearcoatNormalMap:Je,clearcoatRoughnessMap:ne,dispersion:j,iridescence:K,iridescenceMap:le,iridescenceThicknessMap:Ae,sheen:Y,sheenColorMap:Le,sheenRoughnessMap:ve,specularMap:Ze,specularColorMap:Be,specularIntensityMap:dt,transmission:ye,transmissionMap:D,thicknessMap:ue,gradientMap:X,opaque:S.transparent===!1&&S.blending===Ws&&S.alphaToCoverage===!1,alphaMap:Z,alphaTest:de,alphaHash:he,combine:S.combine,mapUv:ot&&v(S.map.channel),aoMapUv:N&&v(S.aoMap.channel),lightMapUv:jt&&v(S.lightMap.channel),bumpMapUv:$e&&v(S.bumpMap.channel),normalMapUv:Ve&&v(S.normalMap.channel),displacementMapUv:Re&&v(S.displacementMap.channel),emissiveMapUv:gt&&v(S.emissiveMap.channel),metalnessMapUv:Ce&&v(S.metalnessMap.channel),roughnessMapUv:w&&v(S.roughnessMap.channel),anisotropyMapUv:ie&&v(S.anisotropyMap.channel),clearcoatMapUv:ge&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Je&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:le&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:ve&&v(S.sheenRoughnessMap.channel),specularMapUv:Ze&&v(S.specularMap.channel),specularColorMapUv:Be&&v(S.specularColorMap.channel),specularIntensityMapUv:dt&&v(S.specularIntensityMap.channel),transmissionMapUv:D&&v(S.transmissionMap.channel),thicknessMapUv:ue&&v(S.thicknessMap.channel),alphaMapUv:Z&&v(S.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ve||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!$.attributes.uv&&(ot||Z),fog:!!G,useFog:S.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Te,skinning:O.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Ue,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ct,decodeVideoTexture:ot&&S.map.isVideoTexture===!0&&Qe.getTransfer(S.map.colorSpace)===vt,decodeVideoTextureEmissive:gt&&S.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(S.emissiveMap.colorSpace)===vt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ut,flipSided:S.side===hn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ge&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&S.extensions.multiDraw===!0||Fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Yt.vertexUv1s=c.has(1),Yt.vertexUv2s=c.has(2),Yt.vertexUv3s=c.has(3),c.clear(),Yt}function d(S){let b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)b.push(P),b.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(y(b,S),x(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function y(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function x(S,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),S.push(o.mask)}function _(S){let b=g[S.type],P;if(b){let B=qn[b];P=Jp.clone(B.uniforms)}else P=S.uniforms;return P}function R(S,b){let P;for(let B=0,O=u.length;B<O;B++){let G=u[B];if(G.cacheKey===b){P=G,++P.usedTimes;break}}return P===void 0&&(P=new av(i,b,S,r),u.push(P)),P}function E(S){if(--S.usedTimes===0){let b=u.indexOf(S);u[b]=u[u.length-1],u.pop(),S.destroy()}}function A(S){l.remove(S)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:_,acquireProgram:R,releaseProgram:E,releaseShaderCache:A,programs:u,dispose:C}}function cv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function uv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Lf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Df(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,f,p,g,v,m){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=v,d.group=m),e++,d}function o(h,f,p,g,v,m){let d=a(h,f,p,g,v,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):t.push(d)}function l(h,f,p,g,v,m){let d=a(h,f,p,g,v,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||uv),n.length>1&&n.sort(f||Lf),s.length>1&&s.sort(f||Lf)}function u(){for(let h=e,f=i.length;h<f;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function hv(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Df,i.set(n,[a])):s>=r.length?(a=new Df,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function fv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Se};break;case"SpotLight":t={position:new L,direction:new L,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function dv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var pv=0;function mv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function gv(i){let e=new fv,t=dv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new Pe,a=new Pe;function o(c){let u=0,h=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,v=0,m=0,d=0,y=0,x=0,_=0,R=0,E=0,A=0;c.sort(mv);for(let S=0,b=c.length;S<b;S++){let P=c[S],B=P.color,O=P.intensity,G=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=B.r*O,h+=B.g*O,f+=B.b*O;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],O);A++}else if(P.isDirectionalLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let J=P.shadow,F=t.get(P);F.shadowIntensity=J.intensity,F.shadowBias=J.bias,F.shadowNormalBias=J.normalBias,F.shadowRadius=J.radius,F.shadowMapSize=J.mapSize,n.directionalShadow[p]=F,n.directionalShadowMap[p]=$,n.directionalShadowMatrix[p]=P.shadow.matrix,y++}n.directional[p]=W,p++}else if(P.isSpotLight){let W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(B).multiplyScalar(O),W.distance=G,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[v]=W;let J=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,J.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[v]=J.matrix,P.castShadow){let F=t.get(P);F.shadowIntensity=J.intensity,F.shadowBias=J.bias,F.shadowNormalBias=J.normalBias,F.shadowRadius=J.radius,F.shadowMapSize=J.mapSize,n.spotShadow[v]=F,n.spotShadowMap[v]=$,_++}v++}else if(P.isRectAreaLight){let W=e.get(P);W.color.copy(B).multiplyScalar(O),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=W,m++}else if(P.isPointLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){let J=P.shadow,F=t.get(P);F.shadowIntensity=J.intensity,F.shadowBias=J.bias,F.shadowNormalBias=J.normalBias,F.shadowRadius=J.radius,F.shadowMapSize=J.mapSize,F.shadowCameraNear=J.camera.near,F.shadowCameraFar=J.camera.far,n.pointShadow[g]=F,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=P.shadow.matrix,x++}n.point[g]=W,g++}else if(P.isHemisphereLight){let W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(O),W.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[d]=W,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==v||C.rectAreaLength!==m||C.hemiLength!==d||C.numDirectionalShadows!==y||C.numPointShadows!==x||C.numSpotShadows!==_||C.numSpotMaps!==R||C.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=_+R-E,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,C.directionalLength=p,C.pointLength=g,C.spotLength=v,C.rectAreaLength=m,C.hemiLength=d,C.numDirectionalShadows=y,C.numPointShadows=x,C.numSpotShadows=_,C.numSpotMaps=R,C.numLightProbes=A,n.version=pv++)}function l(c,u){let h=0,f=0,p=0,g=0,v=0,m=u.matrixWorldInverse;for(let d=0,y=c.length;d<y;d++){let x=c[d];if(x.isDirectionalLight){let _=n.directional[h];_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),h++}else if(x.isSpotLight){let _=n.spot[p];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),p++}else if(x.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){let _=n.point[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){let _=n.hemi[v];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function Nf(i){let e=new gv(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function vv(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Nf(i),e.set(s,[o])):r>=a.length?(o=new Nf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var zc=class extends xn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=cp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Oc=class extends xn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},_v=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yv=`uniform sampler2D shadow_pass;
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
}`;function xv(i,e,t){let n=new Yr,s=new He,r=new He,a=new lt,o=new zc({depthPacking:up}),l=new Oc,c={},u=t.maxTextureSize,h={[Yn]:hn,[hn]:Yn,[Ut]:Ut},f=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:_v,fragmentShader:yv}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new ct;g.setAttribute("position",new It(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new ke(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sd;let d=this.type;this.render=function(E,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let S=i.getRenderTarget(),b=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),B=i.state;B.setBlending(zi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let O=d!==li&&this.type===li,G=d===li&&this.type!==li;for(let $=0,W=E.length;$<W;$++){let J=E[$],F=J.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);let se=F.getFrameExtents();if(s.multiply(se),r.copy(F.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/se.x),s.x=r.x*se.x,F.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/se.y),s.y=r.y*se.y,F.mapSize.y=r.y)),F.map===null||O===!0||G===!0){let me=this.type!==li?{minFilter:Jt,magFilter:Jt}:{};F.map!==null&&F.map.dispose(),F.map=new pi(s.x,s.y,me),F.map.texture.name=J.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();let oe=F.getViewportCount();for(let me=0;me<oe;me++){let Ue=F.getViewport(me);a.set(r.x*Ue.x,r.y*Ue.y,r.x*Ue.z,r.y*Ue.w),B.viewport(a),F.updateMatrices(J,me),n=F.getFrustum(),_(A,C,F.camera,J,this.type)}F.isPointLightShadow!==!0&&this.type===li&&y(F,C),F.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(S,b,P)};function y(E,A){let C=e.update(v);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new pi(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(A,null,C,f,v,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(A,null,C,p,v,null)}function x(E,A,C,S){let b=null,P=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)b=P;else if(b=C.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let B=b.uuid,O=A.uuid,G=c[B];G===void 0&&(G={},c[B]=G);let $=G[O];$===void 0&&($=b.clone(),G[O]=$,A.addEventListener("dispose",R)),b=$}if(b.visible=A.visible,b.wireframe=A.wireframe,S===li?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:h[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,C.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let B=i.properties.get(b);B.light=C}return b}function _(E,A,C,S,b){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===li)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);let O=e.update(E),G=E.material;if(Array.isArray(G)){let $=O.groups;for(let W=0,J=$.length;W<J;W++){let F=$[W],se=G[F.materialIndex];if(se&&se.visible){let oe=x(E,se,S,b);E.onBeforeShadow(i,E,A,C,O,oe,F),i.renderBufferDirect(C,null,O,oe,E,F),E.onAfterShadow(i,E,A,C,O,oe,F)}}}else if(G.visible){let $=x(E,G,S,b);E.onBeforeShadow(i,E,A,C,O,$,null),i.renderBufferDirect(C,null,O,$,E,null),E.onAfterShadow(i,E,A,C,O,$,null)}}let B=E.children;for(let O=0,G=B.length;O<G;O++)_(B[O],A,C,S,b)}function R(E){E.target.removeEventListener("dispose",R);for(let C in c){let S=c[C],b=E.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}var bv={[Gl]:Wl,[Xl]:Yl,[ql]:$l,[Ys]:jl,[Wl]:Gl,[Yl]:Xl,[$l]:ql,[jl]:Ys};function Mv(i,e){function t(){let D=!1,ue=new lt,X=null,Z=new lt(0,0,0,0);return{setMask:function(de){X!==de&&!D&&(i.colorMask(de,de,de,de),X=de)},setLocked:function(de){D=de},setClear:function(de,he,Ge,Ct,Yt){Yt===!0&&(de*=Ct,he*=Ct,Ge*=Ct),ue.set(de,he,Ge,Ct),Z.equals(ue)===!1&&(i.clearColor(de,he,Ge,Ct),Z.copy(ue))},reset:function(){D=!1,X=null,Z.set(-1,0,0,0)}}}function n(){let D=!1,ue=!1,X=null,Z=null,de=null;return{setReversed:function(he){if(ue!==he){let Ge=e.get("EXT_clip_control");ue?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT);let Ct=de;de=null,this.setClear(Ct)}ue=he},getReversed:function(){return ue},setTest:function(he){he?ae(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(he){X!==he&&!D&&(i.depthMask(he),X=he)},setFunc:function(he){if(ue&&(he=bv[he]),Z!==he){switch(he){case Gl:i.depthFunc(i.NEVER);break;case Wl:i.depthFunc(i.ALWAYS);break;case Xl:i.depthFunc(i.LESS);break;case Ys:i.depthFunc(i.LEQUAL);break;case ql:i.depthFunc(i.EQUAL);break;case jl:i.depthFunc(i.GEQUAL);break;case Yl:i.depthFunc(i.GREATER);break;case $l:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=he}},setLocked:function(he){D=he},setClear:function(he){de!==he&&(ue&&(he=1-he),i.clearDepth(he),de=he)},reset:function(){D=!1,X=null,Z=null,de=null,ue=!1}}}function s(){let D=!1,ue=null,X=null,Z=null,de=null,he=null,Ge=null,Ct=null,Yt=null;return{setTest:function(pt){D||(pt?ae(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(pt){ue!==pt&&!D&&(i.stencilMask(pt),ue=pt)},setFunc:function(pt,Dn,ei){(X!==pt||Z!==Dn||de!==ei)&&(i.stencilFunc(pt,Dn,ei),X=pt,Z=Dn,de=ei)},setOp:function(pt,Dn,ei){(he!==pt||Ge!==Dn||Ct!==ei)&&(i.stencilOp(pt,Dn,ei),he=pt,Ge=Dn,Ct=ei)},setLocked:function(pt){D=pt},setClear:function(pt){Yt!==pt&&(i.clearStencil(pt),Yt=pt)},reset:function(){D=!1,ue=null,X=null,Z=null,de=null,he=null,Ge=null,Ct=null,Yt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,y=null,x=null,_=null,R=null,E=null,A=new Se(0,0,0),C=0,S=!1,b=null,P=null,B=null,O=null,G=null,$=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,J=0,F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(F)[1]),W=J>=1):F.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),W=J>=2);let se=null,oe={},me=i.getParameter(i.SCISSOR_BOX),Ue=i.getParameter(i.VIEWPORT),tt=new lt().fromArray(me),q=new lt().fromArray(Ue);function ee(D,ue,X,Z){let de=new Uint8Array(4),he=i.createTexture();i.bindTexture(D,he),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ge=0;Ge<X;Ge++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ue,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,de):i.texImage2D(ue+Ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,de);return he}let pe={};pe[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),pe[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pe[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(i.DEPTH_TEST),a.setFunc(Ys),$e(!1),Ve(Uh),ae(i.CULL_FACE),N(zi);function ae(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function Te(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function Ie(D,ue){return h[D]!==ue?(i.bindFramebuffer(D,ue),h[D]=ue,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ue),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ue),!0):!1}function Fe(D,ue){let X=p,Z=!1;if(D){X=f.get(ue),X===void 0&&(X=[],f.set(ue,X));let de=D.textures;if(X.length!==de.length||X[0]!==i.COLOR_ATTACHMENT0){for(let he=0,Ge=de.length;he<Ge;he++)X[he]=i.COLOR_ATTACHMENT0+he;X.length=de.length,Z=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,Z=!0);Z&&i.drawBuffers(X)}function ot(D){return g!==D?(i.useProgram(D),g=D,!0):!1}let De={[os]:i.FUNC_ADD,[U0]:i.FUNC_SUBTRACT,[z0]:i.FUNC_REVERSE_SUBTRACT};De[O0]=i.MIN,De[F0]=i.MAX;let it={[B0]:i.ZERO,[k0]:i.ONE,[H0]:i.SRC_COLOR,[Hl]:i.SRC_ALPHA,[j0]:i.SRC_ALPHA_SATURATE,[X0]:i.DST_COLOR,[G0]:i.DST_ALPHA,[V0]:i.ONE_MINUS_SRC_COLOR,[Vl]:i.ONE_MINUS_SRC_ALPHA,[q0]:i.ONE_MINUS_DST_COLOR,[W0]:i.ONE_MINUS_DST_ALPHA,[Y0]:i.CONSTANT_COLOR,[$0]:i.ONE_MINUS_CONSTANT_COLOR,[Z0]:i.CONSTANT_ALPHA,[K0]:i.ONE_MINUS_CONSTANT_ALPHA};function N(D,ue,X,Z,de,he,Ge,Ct,Yt,pt){if(D===zi){v===!0&&(Te(i.BLEND),v=!1);return}if(v===!1&&(ae(i.BLEND),v=!0),D!==N0){if(D!==m||pt!==S){if((d!==os||_!==os)&&(i.blendEquation(i.FUNC_ADD),d=os,_=os),pt)switch(D){case Ws:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case us:i.blendFunc(i.ONE,i.ONE);break;case zh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Oh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ws:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case us:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case zh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Oh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,x=null,R=null,E=null,A.set(0,0,0),C=0,m=D,S=pt}return}de=de||ue,he=he||X,Ge=Ge||Z,(ue!==d||de!==_)&&(i.blendEquationSeparate(De[ue],De[de]),d=ue,_=de),(X!==y||Z!==x||he!==R||Ge!==E)&&(i.blendFuncSeparate(it[X],it[Z],it[he],it[Ge]),y=X,x=Z,R=he,E=Ge),(Ct.equals(A)===!1||Yt!==C)&&(i.blendColor(Ct.r,Ct.g,Ct.b,Yt),A.copy(Ct),C=Yt),m=D,S=!1}function jt(D,ue){D.side===Ut?Te(i.CULL_FACE):ae(i.CULL_FACE);let X=D.side===hn;ue&&(X=!X),$e(X),D.blending===Ws&&D.transparent===!1?N(zi):N(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let Z=D.stencilWrite;o.setTest(Z),Z&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),gt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function $e(D){b!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),b=D)}function Ve(D){D!==P0?(ae(i.CULL_FACE),D!==P&&(D===Uh?i.cullFace(i.BACK):D===L0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),P=D}function Re(D){D!==B&&(W&&i.lineWidth(D),B=D)}function gt(D,ue,X){D?(ae(i.POLYGON_OFFSET_FILL),(O!==ue||G!==X)&&(i.polygonOffset(ue,X),O=ue,G=X)):Te(i.POLYGON_OFFSET_FILL)}function Ce(D){D?ae(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function w(D){D===void 0&&(D=i.TEXTURE0+$-1),se!==D&&(i.activeTexture(D),se=D)}function M(D,ue,X){X===void 0&&(se===null?X=i.TEXTURE0+$-1:X=se);let Z=oe[X];Z===void 0&&(Z={type:void 0,texture:void 0},oe[X]=Z),(Z.type!==D||Z.texture!==ue)&&(se!==X&&(i.activeTexture(X),se=X),i.bindTexture(D,ue||pe[D]),Z.type=D,Z.texture=ue)}function k(){let D=oe[se];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Je(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(D){tt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),tt.copy(D))}function ve(D){q.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function Ze(D,ue){let X=c.get(ue);X===void 0&&(X=new WeakMap,c.set(ue,X));let Z=X.get(D);Z===void 0&&(Z=i.getUniformBlockIndex(ue,D.name),X.set(D,Z))}function Be(D,ue){let Z=c.get(ue).get(D);l.get(ue)!==Z&&(i.uniformBlockBinding(ue,Z,D.__bindingPointIndex),l.set(ue,Z))}function dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},se=null,oe={},h={},f=new WeakMap,p=[],g=null,v=!1,m=null,d=null,y=null,x=null,_=null,R=null,E=null,A=new Se(0,0,0),C=0,S=!1,b=null,P=null,B=null,O=null,G=null,tt.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ae,disable:Te,bindFramebuffer:Ie,drawBuffers:Fe,useProgram:ot,setBlending:N,setMaterial:jt,setFlipSided:$e,setCullFace:Ve,setLineWidth:Re,setPolygonOffset:gt,setScissorTest:Ce,activeTexture:w,bindTexture:M,unbindTexture:k,compressedTexImage2D:j,compressedTexImage3D:K,texImage2D:le,texImage3D:Ae,updateUBOMapping:Ze,uniformBlockBinding:Be,texStorage2D:Je,texStorage3D:ne,texSubImage2D:Y,texSubImage3D:ye,compressedTexSubImage2D:ie,compressedTexSubImage3D:ge,scissor:Le,viewport:ve,reset:dt}}function Uf(i,e,t,n){let s=Sv(n);switch(t){case ud:return i*e;case fd:return i*e;case dd:return i*e*2;case ru:return i*e/s.components*s.byteLength;case au:return i*e/s.components*s.byteLength;case pd:return i*e*2/s.components*s.byteLength;case ou:return i*e*2/s.components*s.byteLength;case hd:return i*e*3/s.components*s.byteLength;case Rn:return i*e*4/s.components*s.byteLength;case lu:return i*e*4/s.components*s.byteLength;case no:case io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case so:case ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ql:case tc:return Math.max(i,16)*Math.max(e,8)/4;case Jl:case ec:return Math.max(i,8)*Math.max(e,8)/2;case nc:case ic:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case sc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case rc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ac:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case oc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case lc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case cc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case uc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case hc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case fc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case dc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case pc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case mc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case gc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case vc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case _c:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ao:case yc:case xc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case md:case bc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Mc:case Sc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sv(i){switch(i){case di:case od:return{byteLength:1,components:1};case Wr:case ld:case sa:return{byteLength:2,components:1};case iu:case su:return{byteLength:2,components:4};case fs:case nu:case Bn:return{byteLength:4,components:1};case cd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Tv(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,u=new WeakMap,h,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,M){return p?new OffscreenCanvas(w,M):Xr("canvas")}function v(w,M,k){let j=1,K=Ce(w);if((K.width>k||K.height>k)&&(j=k/Math.max(K.width,K.height)),j<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let Y=Math.floor(j*K.width),ye=Math.floor(j*K.height);h===void 0&&(h=g(Y,ye));let ie=M?g(Y,ye):h;return ie.width=Y,ie.height=ye,ie.getContext("2d").drawImage(w,0,0,Y,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Y+"x"+ye+")."),ie}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),w;return w}function m(w){return w.generateMipmaps}function d(w){i.generateMipmap(w)}function y(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(w,M,k,j,K=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Y=M;if(M===i.RED&&(k===i.FLOAT&&(Y=i.R32F),k===i.HALF_FLOAT&&(Y=i.R16F),k===i.UNSIGNED_BYTE&&(Y=i.R8)),M===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.R8UI),k===i.UNSIGNED_SHORT&&(Y=i.R16UI),k===i.UNSIGNED_INT&&(Y=i.R32UI),k===i.BYTE&&(Y=i.R8I),k===i.SHORT&&(Y=i.R16I),k===i.INT&&(Y=i.R32I)),M===i.RG&&(k===i.FLOAT&&(Y=i.RG32F),k===i.HALF_FLOAT&&(Y=i.RG16F),k===i.UNSIGNED_BYTE&&(Y=i.RG8)),M===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RG8UI),k===i.UNSIGNED_SHORT&&(Y=i.RG16UI),k===i.UNSIGNED_INT&&(Y=i.RG32UI),k===i.BYTE&&(Y=i.RG8I),k===i.SHORT&&(Y=i.RG16I),k===i.INT&&(Y=i.RG32I)),M===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),k===i.UNSIGNED_INT&&(Y=i.RGB32UI),k===i.BYTE&&(Y=i.RGB8I),k===i.SHORT&&(Y=i.RGB16I),k===i.INT&&(Y=i.RGB32I)),M===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),k===i.UNSIGNED_INT&&(Y=i.RGBA32UI),k===i.BYTE&&(Y=i.RGBA8I),k===i.SHORT&&(Y=i.RGBA16I),k===i.INT&&(Y=i.RGBA32I)),M===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),M===i.RGBA){let ye=K?Oo:Qe.getTransfer(j);k===i.FLOAT&&(Y=i.RGBA32F),k===i.HALF_FLOAT&&(Y=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Y=ye===vt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function _(w,M){let k;return w?M===null||M===fs||M===Ks?k=i.DEPTH24_STENCIL8:M===Bn?k=i.DEPTH32F_STENCIL8:M===Wr&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===fs||M===Ks?k=i.DEPTH_COMPONENT24:M===Bn?k=i.DEPTH_COMPONENT32F:M===Wr&&(k=i.DEPTH_COMPONENT16),k}function R(w,M){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Jt&&w.minFilter!==un?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function E(w){let M=w.target;M.removeEventListener("dispose",E),C(M),M.isVideoTexture&&u.delete(M)}function A(w){let M=w.target;M.removeEventListener("dispose",A),b(M)}function C(w){let M=n.get(w);if(M.__webglInit===void 0)return;let k=w.source,j=f.get(k);if(j){let K=j[M.__cacheKey];K.usedTimes--,K.usedTimes===0&&S(w),Object.keys(j).length===0&&f.delete(k)}n.remove(w)}function S(w){let M=n.get(w);i.deleteTexture(M.__webglTexture);let k=w.source,j=f.get(k);delete j[M.__cacheKey],a.memory.textures--}function b(w){let M=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let K=0;K<M.__webglFramebuffer[j].length;K++)i.deleteFramebuffer(M.__webglFramebuffer[j][K]);else i.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)i.deleteFramebuffer(M.__webglFramebuffer[j]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let k=w.textures;for(let j=0,K=k.length;j<K;j++){let Y=n.get(k[j]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(k[j])}n.remove(w)}let P=0;function B(){P=0}function O(){let w=P;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),P+=1,w}function G(w){let M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function $(w,M){let k=n.get(w);if(w.isVideoTexture&&Re(w),w.isRenderTargetTexture===!1&&w.version>0&&k.__version!==w.version){let j=w.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(k,w,M);return}}t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+M)}function W(w,M){let k=n.get(w);if(w.version>0&&k.__version!==w.version){q(k,w,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+M)}function J(w,M){let k=n.get(w);if(w.version>0&&k.__version!==w.version){q(k,w,M);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+M)}function F(w,M){let k=n.get(w);if(w.version>0&&k.__version!==w.version){ee(k,w,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+M)}let se={[hs]:i.REPEAT,[ui]:i.CLAMP_TO_EDGE,[Gr]:i.MIRRORED_REPEAT},oe={[Jt]:i.NEAREST,[tu]:i.NEAREST_MIPMAP_NEAREST,[Vs]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[Br]:i.LINEAR_MIPMAP_NEAREST,[jn]:i.LINEAR_MIPMAP_LINEAR},me={[fp]:i.NEVER,[_p]:i.ALWAYS,[dp]:i.LESS,[_d]:i.LEQUAL,[pp]:i.EQUAL,[vp]:i.GEQUAL,[mp]:i.GREATER,[gp]:i.NOTEQUAL};function Ue(w,M){if(M.type===Bn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===un||M.magFilter===Br||M.magFilter===Vs||M.magFilter===jn||M.minFilter===un||M.minFilter===Br||M.minFilter===Vs||M.minFilter===jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,se[M.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,se[M.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,se[M.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,oe[M.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,oe[M.minFilter]),M.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,me[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Jt||M.minFilter!==Vs&&M.minFilter!==jn||M.type===Bn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function tt(w,M){let k=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",E));let j=M.source,K=f.get(j);K===void 0&&(K={},f.set(j,K));let Y=G(M);if(Y!==w.__cacheKey){K[Y]===void 0&&(K[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),K[Y].usedTimes++;let ye=K[w.__cacheKey];ye!==void 0&&(K[w.__cacheKey].usedTimes--,ye.usedTimes===0&&S(M)),w.__cacheKey=Y,w.__webglTexture=K[Y].texture}return k}function q(w,M,k){let j=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=i.TEXTURE_3D);let K=tt(w,M),Y=M.source;t.bindTexture(j,w.__webglTexture,i.TEXTURE0+k);let ye=n.get(Y);if(Y.version!==ye.__version||K===!0){t.activeTexture(i.TEXTURE0+k);let ie=Qe.getPrimaries(Qe.workingColorSpace),ge=M.colorSpace===Ni?null:Qe.getPrimaries(M.colorSpace),Je=M.colorSpace===Ni||ie===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let ne=v(M.image,!1,s.maxTextureSize);ne=gt(M,ne);let le=r.convert(M.format,M.colorSpace),Ae=r.convert(M.type),Le=x(M.internalFormat,le,Ae,M.colorSpace,M.isVideoTexture);Ue(j,M);let ve,Ze=M.mipmaps,Be=M.isVideoTexture!==!0,dt=ye.__version===void 0||K===!0,D=Y.dataReady,ue=R(M,ne);if(M.isDepthTexture)Le=_(M.format===Js,M.type),dt&&(Be?t.texStorage2D(i.TEXTURE_2D,1,Le,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,Le,ne.width,ne.height,0,le,Ae,null));else if(M.isDataTexture)if(Ze.length>0){Be&&dt&&t.texStorage2D(i.TEXTURE_2D,ue,Le,Ze[0].width,Ze[0].height);for(let X=0,Z=Ze.length;X<Z;X++)ve=Ze[X],Be?D&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,ve.width,ve.height,le,Ae,ve.data):t.texImage2D(i.TEXTURE_2D,X,Le,ve.width,ve.height,0,le,Ae,ve.data);M.generateMipmaps=!1}else Be?(dt&&t.texStorage2D(i.TEXTURE_2D,ue,Le,ne.width,ne.height),D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ne.width,ne.height,le,Ae,ne.data)):t.texImage2D(i.TEXTURE_2D,0,Le,ne.width,ne.height,0,le,Ae,ne.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Be&&dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,Le,Ze[0].width,Ze[0].height,ne.depth);for(let X=0,Z=Ze.length;X<Z;X++)if(ve=Ze[X],M.format!==Rn)if(le!==null)if(Be){if(D)if(M.layerUpdates.size>0){let de=Uf(ve.width,ve.height,M.format,M.type);for(let he of M.layerUpdates){let Ge=ve.data.subarray(he*de/ve.data.BYTES_PER_ELEMENT,(he+1)*de/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,he,ve.width,ve.height,1,le,Ge)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,ve.width,ve.height,ne.depth,le,ve.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Le,ve.width,ve.height,ne.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,ve.width,ve.height,ne.depth,le,Ae,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,X,Le,ve.width,ve.height,ne.depth,0,le,Ae,ve.data)}else{Be&&dt&&t.texStorage2D(i.TEXTURE_2D,ue,Le,Ze[0].width,Ze[0].height);for(let X=0,Z=Ze.length;X<Z;X++)ve=Ze[X],M.format!==Rn?le!==null?Be?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,ve.width,ve.height,le,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,X,Le,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?D&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,ve.width,ve.height,le,Ae,ve.data):t.texImage2D(i.TEXTURE_2D,X,Le,ve.width,ve.height,0,le,Ae,ve.data)}else if(M.isDataArrayTexture)if(Be){if(dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ue,Le,ne.width,ne.height,ne.depth),D)if(M.layerUpdates.size>0){let X=Uf(ne.width,ne.height,M.format,M.type);for(let Z of M.layerUpdates){let de=ne.data.subarray(Z*X/ne.data.BYTES_PER_ELEMENT,(Z+1)*X/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,ne.width,ne.height,1,le,Ae,de)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,le,Ae,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Le,ne.width,ne.height,ne.depth,0,le,Ae,ne.data);else if(M.isData3DTexture)Be?(dt&&t.texStorage3D(i.TEXTURE_3D,ue,Le,ne.width,ne.height,ne.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,le,Ae,ne.data)):t.texImage3D(i.TEXTURE_3D,0,Le,ne.width,ne.height,ne.depth,0,le,Ae,ne.data);else if(M.isFramebufferTexture){if(dt)if(Be)t.texStorage2D(i.TEXTURE_2D,ue,Le,ne.width,ne.height);else{let X=ne.width,Z=ne.height;for(let de=0;de<ue;de++)t.texImage2D(i.TEXTURE_2D,de,Le,X,Z,0,le,Ae,null),X>>=1,Z>>=1}}else if(Ze.length>0){if(Be&&dt){let X=Ce(Ze[0]);t.texStorage2D(i.TEXTURE_2D,ue,Le,X.width,X.height)}for(let X=0,Z=Ze.length;X<Z;X++)ve=Ze[X],Be?D&&t.texSubImage2D(i.TEXTURE_2D,X,0,0,le,Ae,ve):t.texImage2D(i.TEXTURE_2D,X,Le,le,Ae,ve);M.generateMipmaps=!1}else if(Be){if(dt){let X=Ce(ne);t.texStorage2D(i.TEXTURE_2D,ue,Le,X.width,X.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le,Ae,ne)}else t.texImage2D(i.TEXTURE_2D,0,Le,le,Ae,ne);m(M)&&d(j),ye.__version=Y.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function ee(w,M,k){if(M.image.length!==6)return;let j=tt(w,M),K=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+k);let Y=n.get(K);if(K.version!==Y.__version||j===!0){t.activeTexture(i.TEXTURE0+k);let ye=Qe.getPrimaries(Qe.workingColorSpace),ie=M.colorSpace===Ni?null:Qe.getPrimaries(M.colorSpace),ge=M.colorSpace===Ni||ye===ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let Je=M.isCompressedTexture||M.image[0].isCompressedTexture,ne=M.image[0]&&M.image[0].isDataTexture,le=[];for(let Z=0;Z<6;Z++)!Je&&!ne?le[Z]=v(M.image[Z],!0,s.maxCubemapSize):le[Z]=ne?M.image[Z].image:M.image[Z],le[Z]=gt(M,le[Z]);let Ae=le[0],Le=r.convert(M.format,M.colorSpace),ve=r.convert(M.type),Ze=x(M.internalFormat,Le,ve,M.colorSpace),Be=M.isVideoTexture!==!0,dt=Y.__version===void 0||j===!0,D=K.dataReady,ue=R(M,Ae);Ue(i.TEXTURE_CUBE_MAP,M);let X;if(Je){Be&&dt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,Ze,Ae.width,Ae.height);for(let Z=0;Z<6;Z++){X=le[Z].mipmaps;for(let de=0;de<X.length;de++){let he=X[de];M.format!==Rn?Le!==null?Be?D&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,0,0,he.width,he.height,Le,he.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,Ze,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,0,0,he.width,he.height,Le,ve,he.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de,Ze,he.width,he.height,0,Le,ve,he.data)}}}else{if(X=M.mipmaps,Be&&dt){X.length>0&&ue++;let Z=Ce(le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,Ze,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ne){Be?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,le[Z].width,le[Z].height,Le,ve,le[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ze,le[Z].width,le[Z].height,0,Le,ve,le[Z].data);for(let de=0;de<X.length;de++){let Ge=X[de].image[Z].image;Be?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,0,0,Ge.width,Ge.height,Le,ve,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,Ze,Ge.width,Ge.height,0,Le,ve,Ge.data)}}else{Be?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Le,ve,le[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ze,Le,ve,le[Z]);for(let de=0;de<X.length;de++){let he=X[de];Be?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,0,0,Le,ve,he.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,de+1,Ze,Le,ve,he.image[Z])}}}m(M)&&d(i.TEXTURE_CUBE_MAP),Y.__version=K.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function pe(w,M,k,j,K,Y){let ye=r.convert(k.format,k.colorSpace),ie=r.convert(k.type),ge=x(k.internalFormat,ye,ie,k.colorSpace),Je=n.get(M),ne=n.get(k);if(ne.__renderTarget=M,!Je.__hasExternalTextures){let le=Math.max(1,M.width>>Y),Ae=Math.max(1,M.height>>Y);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,Y,ge,le,Ae,M.depth,0,ye,ie,null):t.texImage2D(K,Y,ge,le,Ae,0,ye,ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),Ve(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,K,ne.__webglTexture,0,$e(M)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,K,ne.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(w,M,k){if(i.bindRenderbuffer(i.RENDERBUFFER,w),M.depthBuffer){let j=M.depthTexture,K=j&&j.isDepthTexture?j.type:null,Y=_(M.stencilBuffer,K),ye=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=$e(M);Ve(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,Y,M.width,M.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,Y,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Y,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ye,i.RENDERBUFFER,w)}else{let j=M.textures;for(let K=0;K<j.length;K++){let Y=j[K],ye=r.convert(Y.format,Y.colorSpace),ie=r.convert(Y.type),ge=x(Y.internalFormat,ye,ie,Y.colorSpace),Je=$e(M);k&&Ve(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Je,ge,M.width,M.height):Ve(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Je,ge,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ge,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(M.depthTexture);j.__renderTarget=M,(!j.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$(M.depthTexture,0);let K=j.__webglTexture,Y=$e(M);if(M.depthTexture.format===Xs)Ve(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(M.depthTexture.format===Js)Ve(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ie(w){let M=n.get(w),k=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){let j=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),j){let K=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,j.removeEventListener("dispose",K)};j.addEventListener("dispose",K),M.__depthDisposeCallback=K}M.__boundDepthTexture=j}if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Te(M.__webglFramebuffer,w)}else if(k){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]===void 0)M.__webglDepthbuffer[j]=i.createRenderbuffer(),ae(M.__webglDepthbuffer[j],w,!1);else{let K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=M.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,Y)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ae(M.__webglDepthbuffer,w,!1);else{let j=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,K)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(w,M,k){let j=n.get(w);M!==void 0&&pe(j.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Ie(w)}function ot(w){let M=w.texture,k=n.get(w),j=n.get(M);w.addEventListener("dispose",A);let K=w.textures,Y=w.isWebGLCubeRenderTarget===!0,ye=K.length>1;if(ye||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=M.version,a.memory.textures++),Y){k.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[ie]=[];for(let ge=0;ge<M.mipmaps.length;ge++)k.__webglFramebuffer[ie][ge]=i.createFramebuffer()}else k.__webglFramebuffer[ie]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let ie=0;ie<M.mipmaps.length;ie++)k.__webglFramebuffer[ie]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(ye)for(let ie=0,ge=K.length;ie<ge;ie++){let Je=n.get(K[ie]);Je.__webglTexture===void 0&&(Je.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&Ve(w)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ie=0;ie<K.length;ie++){let ge=K[ie];k.__webglColorRenderbuffer[ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[ie]);let Je=r.convert(ge.format,ge.colorSpace),ne=r.convert(ge.type),le=x(ge.internalFormat,Je,ne,ge.colorSpace,w.isXRRenderTarget===!0),Ae=$e(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,le,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ie,i.RENDERBUFFER,k.__webglColorRenderbuffer[ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),ae(k.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Ue(i.TEXTURE_CUBE_MAP,M);for(let ie=0;ie<6;ie++)if(M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)pe(k.__webglFramebuffer[ie][ge],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,ge);else pe(k.__webglFramebuffer[ie],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0);m(M)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let ie=0,ge=K.length;ie<ge;ie++){let Je=K[ie],ne=n.get(Je);t.bindTexture(i.TEXTURE_2D,ne.__webglTexture),Ue(i.TEXTURE_2D,Je),pe(k.__webglFramebuffer,w,Je,i.COLOR_ATTACHMENT0+ie,i.TEXTURE_2D,0),m(Je)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let ie=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ie=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,j.__webglTexture),Ue(ie,M),M.mipmaps&&M.mipmaps.length>0)for(let ge=0;ge<M.mipmaps.length;ge++)pe(k.__webglFramebuffer[ge],w,M,i.COLOR_ATTACHMENT0,ie,ge);else pe(k.__webglFramebuffer,w,M,i.COLOR_ATTACHMENT0,ie,0);m(M)&&d(ie),t.unbindTexture()}w.depthBuffer&&Ie(w)}function De(w){let M=w.textures;for(let k=0,j=M.length;k<j;k++){let K=M[k];if(m(K)){let Y=y(w),ye=n.get(K).__webglTexture;t.bindTexture(Y,ye),d(Y),t.unbindTexture()}}}let it=[],N=[];function jt(w){if(w.samples>0){if(Ve(w)===!1){let M=w.textures,k=w.width,j=w.height,K=i.COLOR_BUFFER_BIT,Y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=n.get(w),ie=M.length>1;if(ie)for(let ge=0;ge<M.length;ge++)t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let ge=0;ge<M.length;ge++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ie){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ye.__webglColorRenderbuffer[ge]);let Je=n.get(M[ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Je,0)}i.blitFramebuffer(0,0,k,j,0,0,k,j,K,i.NEAREST),l===!0&&(it.length=0,N.length=0,it.push(i.COLOR_ATTACHMENT0+ge),w.depthBuffer&&w.resolveDepthBuffer===!1&&(it.push(Y),N.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ie)for(let ge=0;ge<M.length;ge++){t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,ye.__webglColorRenderbuffer[ge]);let Je=n.get(M[ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,Je,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let M=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function $e(w){return Math.min(s.maxSamples,w.samples)}function Ve(w){let M=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Re(w){let M=a.render.frame;u.get(w)!==M&&(u.set(w,M),w.update())}function gt(w,M){let k=w.colorSpace,j=w.format,K=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||k!==en&&k!==Ni&&(Qe.getTransfer(k)===vt?(j!==Rn||K!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function Ce(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=B,this.setTexture2D=$,this.setTexture2DArray=W,this.setTexture3D=J,this.setTextureCube=F,this.rebindTextures=Fe,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Ve}function Ev(i,e){function t(n,s=Ni){let r,a=Qe.getTransfer(s);if(n===di)return i.UNSIGNED_BYTE;if(n===iu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===su)return i.UNSIGNED_SHORT_5_5_5_1;if(n===cd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===od)return i.BYTE;if(n===ld)return i.SHORT;if(n===Wr)return i.UNSIGNED_SHORT;if(n===nu)return i.INT;if(n===fs)return i.UNSIGNED_INT;if(n===Bn)return i.FLOAT;if(n===sa)return i.HALF_FLOAT;if(n===ud)return i.ALPHA;if(n===hd)return i.RGB;if(n===Rn)return i.RGBA;if(n===fd)return i.LUMINANCE;if(n===dd)return i.LUMINANCE_ALPHA;if(n===Xs)return i.DEPTH_COMPONENT;if(n===Js)return i.DEPTH_STENCIL;if(n===ru)return i.RED;if(n===au)return i.RED_INTEGER;if(n===pd)return i.RG;if(n===ou)return i.RG_INTEGER;if(n===lu)return i.RGBA_INTEGER;if(n===no||n===io||n===so||n===ro)if(a===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===no)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===no)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ro)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Jl||n===Ql||n===ec||n===tc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Jl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ql)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ec)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===tc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nc||n===ic||n===sc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===nc||n===ic)return a===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===sc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===rc||n===ac||n===oc||n===lc||n===cc||n===uc||n===hc||n===fc||n===dc||n===pc||n===mc||n===gc||n===vc||n===_c)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===rc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ac)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===oc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===lc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===uc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===dc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===mc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_c)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ao||n===yc||n===xc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ao)return a===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===md||n===bc||n===Mc||n===Sc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ao)return r.COMPRESSED_RED_RGTC1_EXT;if(n===bc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Mc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ks?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Fc=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},St=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}},Av={type:"move"},Vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new St,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new St,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new St,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Av)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new St;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},wv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rv=`
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

}`,Bc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Xt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Zn({vertexShader:wv,fragmentShader:Rv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ke(new Bi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},kc=class extends Fi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null,v=new Bc,m=t.getContextAttributes(),d=null,y=null,x=[],_=[],R=new He,E=null,A=new Ht;A.viewport=new lt;let C=new Ht;C.viewport=new lt;let S=[A,C],b=new Fc,P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ee=x[q];return ee===void 0&&(ee=new Vr,x[q]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(q){let ee=x[q];return ee===void 0&&(ee=new Vr,x[q]=ee),ee.getGripSpace()},this.getHand=function(q){let ee=x[q];return ee===void 0&&(ee=new Vr,x[q]=ee),ee.getHandSpace()};function O(q){let ee=_.indexOf(q.inputSource);if(ee===-1)return;let pe=x[ee];pe!==void 0&&(pe.update(q.inputSource,q.frame,c||a),pe.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",$);for(let q=0;q<x.length;q++){let ee=_[q];ee!==null&&(_[q]=null,x[q].disconnect(ee))}P=null,B=null,v.reset(),e.setRenderTarget(d),p=null,f=null,h=null,s=null,y=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",G),s.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(R),s.renderState.layers===void 0){let ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ee),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new pi(p.framebufferWidth,p.framebufferHeight,{format:Rn,type:di,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,pe=null,ae=null;m.depth&&(ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?Js:Xs,pe=m.stencil?Ks:fs);let Te={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(Te),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new pi(f.textureWidth,f.textureHeight,{format:Rn,type:di,depthTexture:new go(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),tt.setContext(s),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function $(q){for(let ee=0;ee<q.removed.length;ee++){let pe=q.removed[ee],ae=_.indexOf(pe);ae>=0&&(_[ae]=null,x[ae].disconnect(pe))}for(let ee=0;ee<q.added.length;ee++){let pe=q.added[ee],ae=_.indexOf(pe);if(ae===-1){for(let Ie=0;Ie<x.length;Ie++)if(Ie>=_.length){_.push(pe),ae=Ie;break}else if(_[Ie]===null){_[Ie]=pe,ae=Ie;break}if(ae===-1)break}let Te=x[ae];Te&&Te.connect(pe)}}let W=new L,J=new L;function F(q,ee,pe){W.setFromMatrixPosition(ee.matrixWorld),J.setFromMatrixPosition(pe.matrixWorld);let ae=W.distanceTo(J),Te=ee.projectionMatrix.elements,Ie=pe.projectionMatrix.elements,Fe=Te[14]/(Te[10]-1),ot=Te[14]/(Te[10]+1),De=(Te[9]+1)/Te[5],it=(Te[9]-1)/Te[5],N=(Te[8]-1)/Te[0],jt=(Ie[8]+1)/Ie[0],$e=Fe*N,Ve=Fe*jt,Re=ae/(-N+jt),gt=Re*-N;if(ee.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(gt),q.translateZ(Re),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Te[10]===-1)q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let Ce=Fe+Re,w=ot+Re,M=$e-gt,k=Ve+(ae-gt),j=De*ot/w*Ce,K=it*ot/w*Ce;q.projectionMatrix.makePerspective(M,k,j,K,Ce,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function se(q,ee){ee===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ee.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let ee=q.near,pe=q.far;v.texture!==null&&(v.depthNear>0&&(ee=v.depthNear),v.depthFar>0&&(pe=v.depthFar)),b.near=C.near=A.near=ee,b.far=C.far=A.far=pe,(P!==b.near||B!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,B=b.far),A.layers.mask=q.layers.mask|2,C.layers.mask=q.layers.mask|4,b.layers.mask=A.layers.mask|C.layers.mask;let ae=q.parent,Te=b.cameras;se(b,ae);for(let Ie=0;Ie<Te.length;Ie++)se(Te[Ie],ae);Te.length===2?F(b,A,C):b.projectionMatrix.copy(A.projectionMatrix),oe(q,b,ae)};function oe(q,ee,pe){pe===null?q.matrix.copy(ee.matrixWorld):(q.matrix.copy(pe.matrixWorld),q.matrix.invert(),q.matrix.multiply(ee.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ee.projectionMatrix),q.projectionMatrixInverse.copy(ee.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=tr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let me=null;function Ue(q,ee){if(u=ee.getViewerPose(c||a),g=ee,u!==null){let pe=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let ae=!1;pe.length!==b.cameras.length&&(b.cameras.length=0,ae=!0);for(let Ie=0;Ie<pe.length;Ie++){let Fe=pe[Ie],ot=null;if(p!==null)ot=p.getViewport(Fe);else{let it=h.getViewSubImage(f,Fe);ot=it.viewport,Ie===0&&(e.setRenderTargetTextures(y,it.colorTexture,f.ignoreDepthValues?void 0:it.depthStencilTexture),e.setRenderTarget(y))}let De=S[Ie];De===void 0&&(De=new Ht,De.layers.enable(Ie),De.viewport=new lt,S[Ie]=De),De.matrix.fromArray(Fe.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(Fe.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(ot.x,ot.y,ot.width,ot.height),Ie===0&&(b.matrix.copy(De.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ae===!0&&b.cameras.push(De)}let Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")){let Ie=h.getDepthInformation(pe[0]);Ie&&Ie.isValid&&Ie.texture&&v.init(e,Ie,s.renderState)}}for(let pe=0;pe<x.length;pe++){let ae=_[pe],Te=x[pe];ae!==null&&Te!==void 0&&Te.update(ae,ee,c||a)}me&&me(q,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),g=null}let tt=new Sd;tt.setAnimationLoop(Ue),this.setAnimationLoop=function(q){me=q},this.dispose=function(){}}},rs=new $n,Cv=new Pe;function Iv(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Md(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,y,x,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),h(m,d)):d.isMeshPhongMaterial?(r(m,d),u(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,_)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),v(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,y,x):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===hn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===hn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let y=e.get(d),x=y.envMap,_=y.envMapRotation;x&&(m.envMap.value=x,rs.copy(_),rs.x*=-1,rs.y*=-1,rs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),m.envMapRotation.value.setFromMatrix4(Cv.makeRotationFromEuler(rs)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,y,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=x*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===hn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){let y=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Pv(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){let _=x.program;n.uniformBlockBinding(y,_)}function c(y,x){let _=s[y.id];_===void 0&&(g(y),_=u(y),s[y.id]=_,y.addEventListener("dispose",m));let R=x.program;n.updateUBOMapping(y,R);let E=e.render.frame;r[y.id]!==E&&(f(y),r[y.id]=E)}function u(y){let x=h();y.__bindingPointIndex=x;let _=i.createBuffer(),R=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,R,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,_),_}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let x=s[y.id],_=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let E=0,A=_.length;E<A;E++){let C=Array.isArray(_[E])?_[E]:[_[E]];for(let S=0,b=C.length;S<b;S++){let P=C[S];if(p(P,E,S,R)===!0){let B=P.__offset,O=Array.isArray(P.value)?P.value:[P.value],G=0;for(let $=0;$<O.length;$++){let W=O[$],J=v(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,B+G,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,G),G+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,x,_,R){let E=y.value,A=x+"_"+_;if(R[A]===void 0)return typeof E=="number"||typeof E=="boolean"?R[A]=E:R[A]=E.clone(),!0;{let C=R[A];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return R[A]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(y){let x=y.uniforms,_=0,R=16;for(let A=0,C=x.length;A<C;A++){let S=Array.isArray(x[A])?x[A]:[x[A]];for(let b=0,P=S.length;b<P;b++){let B=S[b],O=Array.isArray(B.value)?B.value:[B.value];for(let G=0,$=O.length;G<$;G++){let W=O[G],J=v(W),F=_%R,se=F%J.boundary,oe=F+se;_+=se,oe!==0&&R-oe<J.storage&&(_+=R-oe),B.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=_,_+=J.storage}}}let E=_%R;return E>0&&(_+=R-E),y.__size=_,y.__cache={},this}function v(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){let x=y.target;x.removeEventListener("dispose",m);let _=a.indexOf(x.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function d(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}var vo=class{constructor(e={}){let{canvas:t=Up(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let g=new Uint32Array(4),v=new Int32Array(4),m=null,d=null,y=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nt,this.toneMapping=Oi,this.toneMappingExposure=1;let _=this,R=!1,E=0,A=0,C=null,S=-1,b=null,P=new lt,B=new lt,O=null,G=new Se(0),$=0,W=t.width,J=t.height,F=1,se=null,oe=null,me=new lt(0,0,W,J),Ue=new lt(0,0,W,J),tt=!1,q=new Yr,ee=!1,pe=!1,ae=new Pe,Te=new Pe,Ie=new L,Fe=new lt,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},De=!1;function it(){return C===null?F:1}let N=n;function jt(T,U){return t.getContext(T,U)}try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",he,!1),N===null){let U="webgl2";if(N=jt(U,T),N===null)throw jt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let $e,Ve,Re,gt,Ce,w,M,k,j,K,Y,ye,ie,ge,Je,ne,le,Ae,Le,ve,Ze,Be,dt,D;function ue(){$e=new j2(N),$e.init(),Be=new Ev(N,$e),Ve=new H2(N,$e,e,Be),Re=new Mv(N,$e),Ve.reverseDepthBuffer&&f&&Re.buffers.depth.setReversed(!0),gt=new Z2(N),Ce=new cv,w=new Tv(N,$e,Re,Ce,Ve,Be,gt),M=new G2(_),k=new q2(_),j=new im(N),dt=new B2(N,j),K=new Y2(N,j,gt,dt),Y=new J2(N,K,j,gt),Le=new K2(N,Ve,w),ne=new V2(Ce),ye=new lv(_,M,k,$e,Ve,dt,ne),ie=new Iv(_,Ce),ge=new hv,Je=new vv($e),Ae=new F2(_,M,k,Re,Y,p,l),le=new xv(_,Y,Ve),D=new Pv(N,gt,Ve,Re),ve=new k2(N,$e,gt),Ze=new $2(N,$e,gt),gt.programs=ye.programs,_.capabilities=Ve,_.extensions=$e,_.properties=Ce,_.renderLists=ge,_.shadowMap=le,_.state=Re,_.info=gt}ue();let X=new kc(_,N);this.xr=X,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let T=$e.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=$e.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(T){T!==void 0&&(F=T,this.setSize(W,J,!1))},this.getSize=function(T){return T.set(W,J)},this.setSize=function(T,U,H=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=T,J=U,t.width=Math.floor(T*F),t.height=Math.floor(U*F),H===!0&&(t.style.width=T+"px",t.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(W*F,J*F).floor()},this.setDrawingBufferSize=function(T,U,H){W=T,J=U,F=H,t.width=Math.floor(T*H),t.height=Math.floor(U*H),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(me)},this.setViewport=function(T,U,H,V){T.isVector4?me.set(T.x,T.y,T.z,T.w):me.set(T,U,H,V),Re.viewport(P.copy(me).multiplyScalar(F).round())},this.getScissor=function(T){return T.copy(Ue)},this.setScissor=function(T,U,H,V){T.isVector4?Ue.set(T.x,T.y,T.z,T.w):Ue.set(T,U,H,V),Re.scissor(B.copy(Ue).multiplyScalar(F).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(T){Re.setScissorTest(tt=T)},this.setOpaqueSort=function(T){se=T},this.setTransparentSort=function(T){oe=T},this.getClearColor=function(T){return T.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(T=!0,U=!0,H=!0){let V=0;if(T){let z=!1;if(C!==null){let re=C.texture.format;z=re===lu||re===ou||re===au}if(z){let re=C.texture.type,fe=re===di||re===fs||re===Wr||re===Ks||re===iu||re===su,xe=Ae.getClearColor(),be=Ae.getClearAlpha(),Oe=xe.r,We=xe.g,Me=xe.b;fe?(g[0]=Oe,g[1]=We,g[2]=Me,g[3]=be,N.clearBufferuiv(N.COLOR,0,g)):(v[0]=Oe,v[1]=We,v[2]=Me,v[3]=be,N.clearBufferiv(N.COLOR,0,v))}else V|=N.COLOR_BUFFER_BIT}U&&(V|=N.DEPTH_BUFFER_BIT),H&&(V|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",he,!1),ge.dispose(),Je.dispose(),Ce.dispose(),M.dispose(),k.dispose(),Y.dispose(),dt.dispose(),D.dispose(),ye.dispose(),X.dispose(),X.removeEventListener("sessionstart",Eh),X.removeEventListener("sessionend",Ah),Qi.stop()};function Z(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let T=gt.autoReset,U=le.enabled,H=le.autoUpdate,V=le.needsUpdate,z=le.type;ue(),gt.autoReset=T,le.enabled=U,le.autoUpdate=H,le.needsUpdate=V,le.type=z}function he(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ge(T){let U=T.target;U.removeEventListener("dispose",Ge),Ct(U)}function Ct(T){Yt(T),Ce.remove(T)}function Yt(T){let U=Ce.get(T).programs;U!==void 0&&(U.forEach(function(H){ye.releaseProgram(H)}),T.isShaderMaterial&&ye.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,H,V,z,re){U===null&&(U=ot);let fe=z.isMesh&&z.matrixWorld.determinant()<0,xe=b0(T,U,H,V,z);Re.setMaterial(V,fe);let be=H.index,Oe=1;if(V.wireframe===!0){if(be=K.getWireframeAttribute(H),be===void 0)return;Oe=2}let We=H.drawRange,Me=H.attributes.position,at=We.start*Oe,yt=(We.start+We.count)*Oe;re!==null&&(at=Math.max(at,re.start*Oe),yt=Math.min(yt,(re.start+re.count)*Oe)),be!==null?(at=Math.max(at,0),yt=Math.min(yt,be.count)):Me!=null&&(at=Math.max(at,0),yt=Math.min(yt,Me.count));let bt=yt-at;if(bt<0||bt===1/0)return;dt.setup(z,V,xe,H,be);let cn,ut=ve;if(be!==null&&(cn=j.get(be),ut=Ze,ut.setIndex(cn)),z.isMesh)V.wireframe===!0?(Re.setLineWidth(V.wireframeLinewidth*it()),ut.setMode(N.LINES)):ut.setMode(N.TRIANGLES);else if(z.isLine){let Ee=V.linewidth;Ee===void 0&&(Ee=1),Re.setLineWidth(Ee*it()),z.isLineSegments?ut.setMode(N.LINES):z.isLineLoop?ut.setMode(N.LINE_LOOP):ut.setMode(N.LINE_STRIP)}else z.isPoints?ut.setMode(N.POINTS):z.isSprite&&ut.setMode(N.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)ut.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))ut.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Ee=z._multiDrawStarts,ti=z._multiDrawCounts,ht=z._multiDrawCount,Nn=be?j.get(be).bytesPerElement:1,As=Ce.get(V).currentProgram.getUniforms();for(let mn=0;mn<ht;mn++)As.setValue(N,"_gl_DrawID",mn),ut.render(Ee[mn]/Nn,ti[mn])}else if(z.isInstancedMesh)ut.renderInstances(at,bt,z.count);else if(H.isInstancedBufferGeometry){let Ee=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ti=Math.min(H.instanceCount,Ee);ut.renderInstances(at,bt,ti)}else ut.render(at,bt)};function pt(T,U,H){T.transparent===!0&&T.side===Ut&&T.forceSinglePass===!1?(T.side=hn,T.needsUpdate=!0,Ra(T,U,H),T.side=Yn,T.needsUpdate=!0,Ra(T,U,H),T.side=Ut):Ra(T,U,H)}this.compile=function(T,U,H=null){H===null&&(H=T),d=Je.get(H),d.init(U),x.push(d),H.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),T!==H&&T.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(d.pushLight(z),z.castShadow&&d.pushShadow(z))}),d.setupLights();let V=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let re=z.material;if(re)if(Array.isArray(re))for(let fe=0;fe<re.length;fe++){let xe=re[fe];pt(xe,H,z),V.add(xe)}else pt(re,H,z),V.add(re)}),x.pop(),d=null,V},this.compileAsync=function(T,U,H=null){let V=this.compile(T,U,H);return new Promise(z=>{function re(){if(V.forEach(function(fe){Ce.get(fe).currentProgram.isReady()&&V.delete(fe)}),V.size===0){z(T);return}setTimeout(re,10)}$e.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Dn=null;function ei(T){Dn&&Dn(T)}function Eh(){Qi.stop()}function Ah(){Qi.start()}let Qi=new Sd;Qi.setAnimationLoop(ei),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(T){Dn=T,X.setAnimationLoop(T),T===null?Qi.stop():Qi.start()},X.addEventListener("sessionstart",Eh),X.addEventListener("sessionend",Ah),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,U,C),d=Je.get(T,x.length),d.init(U),x.push(d),Te.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(Te),pe=this.localClippingEnabled,ee=ne.init(this.clippingPlanes,pe),m=ge.get(T,y.length),m.init(),y.push(m),X.enabled===!0&&X.isPresenting===!0){let re=_.xr.getDepthSensingMesh();re!==null&&ll(re,U,-1/0,_.sortObjects)}ll(T,U,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(se,oe),De=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,De&&Ae.addToRenderList(m,T),this.info.render.frame++,ee===!0&&ne.beginShadows();let H=d.state.shadowsArray;le.render(H,T,U),ee===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,z=m.transmissive;if(d.setupLights(),U.isArrayCamera){let re=U.cameras;if(z.length>0)for(let fe=0,xe=re.length;fe<xe;fe++){let be=re[fe];Rh(V,z,T,be)}De&&Ae.render(T);for(let fe=0,xe=re.length;fe<xe;fe++){let be=re[fe];wh(m,T,be,be.viewport)}}else z.length>0&&Rh(V,z,T,U),De&&Ae.render(T),wh(m,T,U);C!==null&&(w.updateMultisampleRenderTarget(C),w.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(_,T,U),dt.resetDefaultState(),S=-1,b=null,x.pop(),x.length>0?(d=x[x.length-1],ee===!0&&ne.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function ll(T,U,H,V){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)H=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||q.intersectsSprite(T)){V&&Fe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Te);let fe=Y.update(T),xe=T.material;xe.visible&&m.push(T,fe,xe,H,Fe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||q.intersectsObject(T))){let fe=Y.update(T),xe=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Fe.copy(T.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Fe.copy(fe.boundingSphere.center)),Fe.applyMatrix4(T.matrixWorld).applyMatrix4(Te)),Array.isArray(xe)){let be=fe.groups;for(let Oe=0,We=be.length;Oe<We;Oe++){let Me=be[Oe],at=xe[Me.materialIndex];at&&at.visible&&m.push(T,fe,at,H,Fe.z,Me)}}else xe.visible&&m.push(T,fe,xe,H,Fe.z,null)}}let re=T.children;for(let fe=0,xe=re.length;fe<xe;fe++)ll(re[fe],U,H,V)}function wh(T,U,H,V){let z=T.opaque,re=T.transmissive,fe=T.transparent;d.setupLightsView(H),ee===!0&&ne.setGlobalState(_.clippingPlanes,H),V&&Re.viewport(P.copy(V)),z.length>0&&wa(z,U,H),re.length>0&&wa(re,U,H),fe.length>0&&wa(fe,U,H),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Rh(T,U,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[V.id]===void 0&&(d.state.transmissionRenderTarget[V.id]=new pi(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float")?sa:di,minFilter:jn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));let re=d.state.transmissionRenderTarget[V.id],fe=V.viewport||P;re.setSize(fe.z,fe.w);let xe=_.getRenderTarget();_.setRenderTarget(re),_.getClearColor(G),$=_.getClearAlpha(),$<1&&_.setClearColor(16777215,.5),_.clear(),De&&Ae.render(H);let be=_.toneMapping;_.toneMapping=Oi;let Oe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),d.setupLightsView(V),ee===!0&&ne.setGlobalState(_.clippingPlanes,V),wa(T,H,V),w.updateMultisampleRenderTarget(re),w.updateRenderTargetMipmap(re),$e.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let Me=0,at=U.length;Me<at;Me++){let yt=U[Me],bt=yt.object,cn=yt.geometry,ut=yt.material,Ee=yt.group;if(ut.side===Ut&&bt.layers.test(V.layers)){let ti=ut.side;ut.side=hn,ut.needsUpdate=!0,Ch(bt,H,V,cn,ut,Ee),ut.side=ti,ut.needsUpdate=!0,We=!0}}We===!0&&(w.updateMultisampleRenderTarget(re),w.updateRenderTargetMipmap(re))}_.setRenderTarget(xe),_.setClearColor(G,$),Oe!==void 0&&(V.viewport=Oe),_.toneMapping=be}function wa(T,U,H){let V=U.isScene===!0?U.overrideMaterial:null;for(let z=0,re=T.length;z<re;z++){let fe=T[z],xe=fe.object,be=fe.geometry,Oe=V===null?fe.material:V,We=fe.group;xe.layers.test(H.layers)&&Ch(xe,U,H,be,Oe,We)}}function Ch(T,U,H,V,z,re){T.onBeforeRender(_,U,H,V,z,re),T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(_,U,H,V,T,re),z.transparent===!0&&z.side===Ut&&z.forceSinglePass===!1?(z.side=hn,z.needsUpdate=!0,_.renderBufferDirect(H,U,V,z,T,re),z.side=Yn,z.needsUpdate=!0,_.renderBufferDirect(H,U,V,z,T,re),z.side=Ut):_.renderBufferDirect(H,U,V,z,T,re),T.onAfterRender(_,U,H,V,z,re)}function Ra(T,U,H){U.isScene!==!0&&(U=ot);let V=Ce.get(T),z=d.state.lights,re=d.state.shadowsArray,fe=z.state.version,xe=ye.getParameters(T,z.state,re,U,H),be=ye.getProgramCacheKey(xe),Oe=V.programs;V.environment=T.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(T.isMeshStandardMaterial?k:M).get(T.envMap||V.environment),V.envMapRotation=V.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Oe===void 0&&(T.addEventListener("dispose",Ge),Oe=new Map,V.programs=Oe);let We=Oe.get(be);if(We!==void 0){if(V.currentProgram===We&&V.lightsStateVersion===fe)return Ph(T,xe),We}else xe.uniforms=ye.getUniforms(T),T.onBeforeCompile(xe,_),We=ye.acquireProgram(xe,be),Oe.set(be,We),V.uniforms=xe.uniforms;let Me=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Me.clippingPlanes=ne.uniform),Ph(T,xe),V.needsLights=S0(T),V.lightsStateVersion=fe,V.needsLights&&(Me.ambientLightColor.value=z.state.ambient,Me.lightProbe.value=z.state.probe,Me.directionalLights.value=z.state.directional,Me.directionalLightShadows.value=z.state.directionalShadow,Me.spotLights.value=z.state.spot,Me.spotLightShadows.value=z.state.spotShadow,Me.rectAreaLights.value=z.state.rectArea,Me.ltc_1.value=z.state.rectAreaLTC1,Me.ltc_2.value=z.state.rectAreaLTC2,Me.pointLights.value=z.state.point,Me.pointLightShadows.value=z.state.pointShadow,Me.hemisphereLights.value=z.state.hemi,Me.directionalShadowMap.value=z.state.directionalShadowMap,Me.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Me.spotShadowMap.value=z.state.spotShadowMap,Me.spotLightMatrix.value=z.state.spotLightMatrix,Me.spotLightMap.value=z.state.spotLightMap,Me.pointShadowMap.value=z.state.pointShadowMap,Me.pointShadowMatrix.value=z.state.pointShadowMatrix),V.currentProgram=We,V.uniformsList=null,We}function Ih(T){if(T.uniformsList===null){let U=T.currentProgram.getUniforms();T.uniformsList=js.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Ph(T,U){let H=Ce.get(T);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function b0(T,U,H,V,z){U.isScene!==!0&&(U=ot),w.resetTextureUnits();let re=U.fog,fe=V.isMeshStandardMaterial?U.environment:null,xe=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:en,be=(V.isMeshStandardMaterial?k:M).get(V.envMap||fe),Oe=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,We=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Me=!!H.morphAttributes.position,at=!!H.morphAttributes.normal,yt=!!H.morphAttributes.color,bt=Oi;V.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(bt=_.toneMapping);let cn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ut=cn!==void 0?cn.length:0,Ee=Ce.get(V),ti=d.state.lights;if(ee===!0&&(pe===!0||T!==b)){let An=T===b&&V.id===S;ne.setState(V,T,An)}let ht=!1;V.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==ti.state.version||Ee.outputColorSpace!==xe||z.isBatchedMesh&&Ee.batching===!1||!z.isBatchedMesh&&Ee.batching===!0||z.isBatchedMesh&&Ee.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ee.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ee.instancing===!1||!z.isInstancedMesh&&Ee.instancing===!0||z.isSkinnedMesh&&Ee.skinning===!1||!z.isSkinnedMesh&&Ee.skinning===!0||z.isInstancedMesh&&Ee.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ee.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ee.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ee.instancingMorph===!1&&z.morphTexture!==null||Ee.envMap!==be||V.fog===!0&&Ee.fog!==re||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ne.numPlanes||Ee.numIntersection!==ne.numIntersection)||Ee.vertexAlphas!==Oe||Ee.vertexTangents!==We||Ee.morphTargets!==Me||Ee.morphNormals!==at||Ee.morphColors!==yt||Ee.toneMapping!==bt||Ee.morphTargetsCount!==ut)&&(ht=!0):(ht=!0,Ee.__version=V.version);let Nn=Ee.currentProgram;ht===!0&&(Nn=Ra(V,U,z));let As=!1,mn=!1,wr=!1,Mt=Nn.getUniforms(),Xn=Ee.uniforms;if(Re.useProgram(Nn.program)&&(As=!0,mn=!0,wr=!0),V.id!==S&&(S=V.id,mn=!0),As||b!==T){Re.buffers.depth.getReversed()?(ae.copy(T.projectionMatrix),Op(ae),Fp(ae),Mt.setValue(N,"projectionMatrix",ae)):Mt.setValue(N,"projectionMatrix",T.projectionMatrix),Mt.setValue(N,"viewMatrix",T.matrixWorldInverse);let Ai=Mt.map.cameraPosition;Ai!==void 0&&Ai.setValue(N,Ie.setFromMatrixPosition(T.matrixWorld)),Ve.logarithmicDepthBuffer&&Mt.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Mt.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,mn=!0,wr=!0)}if(z.isSkinnedMesh){Mt.setOptional(N,z,"bindMatrix"),Mt.setOptional(N,z,"bindMatrixInverse");let An=z.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Mt.setValue(N,"boneTexture",An.boneTexture,w))}z.isBatchedMesh&&(Mt.setOptional(N,z,"batchingTexture"),Mt.setValue(N,"batchingTexture",z._matricesTexture,w),Mt.setOptional(N,z,"batchingIdTexture"),Mt.setValue(N,"batchingIdTexture",z._indirectTexture,w),Mt.setOptional(N,z,"batchingColorTexture"),z._colorsTexture!==null&&Mt.setValue(N,"batchingColorTexture",z._colorsTexture,w));let Rr=H.morphAttributes;if((Rr.position!==void 0||Rr.normal!==void 0||Rr.color!==void 0)&&Le.update(z,H,Nn),(mn||Ee.receiveShadow!==z.receiveShadow)&&(Ee.receiveShadow=z.receiveShadow,Mt.setValue(N,"receiveShadow",z.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Xn.envMap.value=be,Xn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(Xn.envMapIntensity.value=U.environmentIntensity),mn&&(Mt.setValue(N,"toneMappingExposure",_.toneMappingExposure),Ee.needsLights&&M0(Xn,wr),re&&V.fog===!0&&ie.refreshFogUniforms(Xn,re),ie.refreshMaterialUniforms(Xn,V,F,J,d.state.transmissionRenderTarget[T.id]),js.upload(N,Ih(Ee),Xn,w)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(js.upload(N,Ih(Ee),Xn,w),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Mt.setValue(N,"center",z.center),Mt.setValue(N,"modelViewMatrix",z.modelViewMatrix),Mt.setValue(N,"normalMatrix",z.normalMatrix),Mt.setValue(N,"modelMatrix",z.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let An=V.uniformsGroups;for(let Ai=0,wi=An.length;Ai<wi;Ai++){let Lh=An[Ai];D.update(Lh,Nn),D.bind(Lh,Nn)}}return Nn}function M0(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function S0(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,U,H){Ce.get(T.texture).__webglTexture=U,Ce.get(T.depthTexture).__webglTexture=H;let V=Ce.get(T);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||$e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){let H=Ce.get(T);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,H=0){C=T,E=U,A=H;let V=!0,z=null,re=!1,fe=!1;if(T){let be=Ce.get(T);if(be.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(N.FRAMEBUFFER,null),V=!1;else if(be.__webglFramebuffer===void 0)w.setupRenderTarget(T);else if(be.__hasExternalTextures)w.rebindTextures(T,Ce.get(T.texture).__webglTexture,Ce.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Me=T.depthTexture;if(be.__boundDepthTexture!==Me){if(Me!==null&&Ce.has(Me)&&(T.width!==Me.image.width||T.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(T)}}let Oe=T.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(fe=!0);let We=Ce.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(We[U])?z=We[U][H]:z=We[U],re=!0):T.samples>0&&w.useMultisampledRTT(T)===!1?z=Ce.get(T).__webglMultisampledFramebuffer:Array.isArray(We)?z=We[H]:z=We,P.copy(T.viewport),B.copy(T.scissor),O=T.scissorTest}else P.copy(me).multiplyScalar(F).floor(),B.copy(Ue).multiplyScalar(F).floor(),O=tt;if(Re.bindFramebuffer(N.FRAMEBUFFER,z)&&V&&Re.drawBuffers(T,z),Re.viewport(P),Re.scissor(B),Re.setScissorTest(O),re){let be=Ce.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,be.__webglTexture,H)}else if(fe){let be=Ce.get(T.texture),Oe=U||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,be.__webglTexture,H||0,Oe)}S=-1},this.readRenderTargetPixels=function(T,U,H,V,z,re,fe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Ce.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&fe!==void 0&&(xe=xe[fe]),xe){Re.bindFramebuffer(N.FRAMEBUFFER,xe);try{let be=T.texture,Oe=be.format,We=be.type;if(!Ve.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-V&&H>=0&&H<=T.height-z&&N.readPixels(U,H,V,z,Be.convert(Oe),Be.convert(We),re)}finally{let be=C!==null?Ce.get(C).__webglFramebuffer:null;Re.bindFramebuffer(N.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(T,U,H,V,z,re,fe){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Ce.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&fe!==void 0&&(xe=xe[fe]),xe){let be=T.texture,Oe=be.format,We=be.type;if(!Ve.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=T.width-V&&H>=0&&H<=T.height-z){Re.bindFramebuffer(N.FRAMEBUFFER,xe);let Me=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Me),N.bufferData(N.PIXEL_PACK_BUFFER,re.byteLength,N.STREAM_READ),N.readPixels(U,H,V,z,Be.convert(Oe),Be.convert(We),0);let at=C!==null?Ce.get(C).__webglFramebuffer:null;Re.bindFramebuffer(N.FRAMEBUFFER,at);let yt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await zp(N,yt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Me),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,re),N.deleteBuffer(Me),N.deleteSync(yt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,U=null,H=0){T.isTexture!==!0&&(Or("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,T=arguments[1]);let V=Math.pow(2,-H),z=Math.floor(T.image.width*V),re=Math.floor(T.image.height*V),fe=U!==null?U.x:0,xe=U!==null?U.y:0;w.setTexture2D(T,0),N.copyTexSubImage2D(N.TEXTURE_2D,H,0,0,fe,xe,z,re),Re.unbindTexture()},this.copyTextureToTexture=function(T,U,H=null,V=null,z=0){T.isTexture!==!0&&(Or("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,T=arguments[1],U=arguments[2],z=arguments[3]||0,H=null);let re,fe,xe,be,Oe,We,Me,at,yt,bt=T.isCompressedTexture?T.mipmaps[z]:T.image;H!==null?(re=H.max.x-H.min.x,fe=H.max.y-H.min.y,xe=H.isBox3?H.max.z-H.min.z:1,be=H.min.x,Oe=H.min.y,We=H.isBox3?H.min.z:0):(re=bt.width,fe=bt.height,xe=bt.depth||1,be=0,Oe=0,We=0),V!==null?(Me=V.x,at=V.y,yt=V.z):(Me=0,at=0,yt=0);let cn=Be.convert(U.format),ut=Be.convert(U.type),Ee;U.isData3DTexture?(w.setTexture3D(U,0),Ee=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(w.setTexture2DArray(U,0),Ee=N.TEXTURE_2D_ARRAY):(w.setTexture2D(U,0),Ee=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);let ti=N.getParameter(N.UNPACK_ROW_LENGTH),ht=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Nn=N.getParameter(N.UNPACK_SKIP_PIXELS),As=N.getParameter(N.UNPACK_SKIP_ROWS),mn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,bt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,bt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,be),N.pixelStorei(N.UNPACK_SKIP_ROWS,Oe),N.pixelStorei(N.UNPACK_SKIP_IMAGES,We);let wr=T.isDataArrayTexture||T.isData3DTexture,Mt=U.isDataArrayTexture||U.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let Xn=Ce.get(T),Rr=Ce.get(U),An=Ce.get(Xn.__renderTarget),Ai=Ce.get(Rr.__renderTarget);Re.bindFramebuffer(N.READ_FRAMEBUFFER,An.__webglFramebuffer),Re.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let wi=0;wi<xe;wi++)wr&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ce.get(T).__webglTexture,z,We+wi),T.isDepthTexture?(Mt&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ce.get(U).__webglTexture,z,yt+wi),N.blitFramebuffer(be,Oe,re,fe,Me,at,re,fe,N.DEPTH_BUFFER_BIT,N.NEAREST)):Mt?N.copyTexSubImage3D(Ee,z,Me,at,yt+wi,be,Oe,re,fe):N.copyTexSubImage2D(Ee,z,Me,at,yt+wi,be,Oe,re,fe);Re.bindFramebuffer(N.READ_FRAMEBUFFER,null),Re.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Mt?T.isDataTexture||T.isData3DTexture?N.texSubImage3D(Ee,z,Me,at,yt,re,fe,xe,cn,ut,bt.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(Ee,z,Me,at,yt,re,fe,xe,cn,bt.data):N.texSubImage3D(Ee,z,Me,at,yt,re,fe,xe,cn,ut,bt):T.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,z,Me,at,re,fe,cn,ut,bt.data):T.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,z,Me,at,bt.width,bt.height,cn,bt.data):N.texSubImage2D(N.TEXTURE_2D,z,Me,at,re,fe,cn,ut,bt);N.pixelStorei(N.UNPACK_ROW_LENGTH,ti),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ht),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Nn),N.pixelStorei(N.UNPACK_SKIP_ROWS,As),N.pixelStorei(N.UNPACK_SKIP_IMAGES,mn),z===0&&U.generateMipmaps&&N.generateMipmap(Ee),Re.unbindTexture()},this.copyTextureToTexture3D=function(T,U,H=null,V=null,z=0){return T.isTexture!==!0&&(Or("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,T=arguments[2],U=arguments[3],z=arguments[4]||0),Or('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,U,H,V,z)},this.initRenderTarget=function(T){Ce.get(T).__webglFramebuffer===void 0&&w.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?w.setTextureCube(T,0):T.isData3DTexture?w.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?w.setTexture2DArray(T,0):w.setTexture2D(T,0),Re.unbindTexture()},this.resetState=function(){E=0,A=0,C=null,Re.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}},_o=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Se(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var yo=class extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},$r=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Tc,this.updateRanges=[],this.version=0,this.uuid=kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},sn=new L,Zr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new It(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var zf=new L,Of=new lt,Ff=new lt,Lv=new L,Bf=new Pe,$a=new L,zl=new yn,kf=new Pe,Ol=new ds,xo=class extends ke{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Fh,this.bindMatrix=new Pe,this.bindMatrixInverse=new Pe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Cn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$a),this.boundingBox.expandByPoint($a)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new yn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,$a),this.boundingSphere.expandByPoint($a)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zl.copy(this.boundingSphere),zl.applyMatrix4(s),e.ray.intersectsSphere(zl)!==!1&&(kf.copy(s).invert(),Ol.copy(e.ray).applyMatrix4(kf),!(this.boundingBox!==null&&Ol.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ol)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new lt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Fh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===op?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Of.fromBufferAttribute(s.attributes.skinIndex,e),Ff.fromBufferAttribute(s.attributes.skinWeight,e),zf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Ff.getComponent(r);if(a!==0){let o=Of.getComponent(r);Bf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Lv.copy(zf).applyMatrix4(Bf),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},Kr=class extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}},bo=class extends Xt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Jt,u=Jt,h,f){super(null,a,o,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Hf=new Pe,Dv=new Pe,Mo=class i{constructor(e=[],t=[]){this.uuid=kn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Pe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Pe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Dv;Hf.multiplyMatrices(o,t[r]),Hf.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new bo(t,e,e,Rn,Bn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Kr),this.bones.push(a),this.boneInverses.push(new Pe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},mi=class extends It{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Hs=new Pe,Vf=new Pe,Za=[],Gf=new Cn,Nv=new Pe,Dr=new ke,Nr=new yn,ps=class extends ke{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new mi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Nv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Cn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hs),Gf.copy(e.boundingBox).applyMatrix4(Hs),this.boundingBox.union(Gf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Hs),Nr.copy(e.boundingSphere).applyMatrix4(Hs),this.boundingSphere.union(Nr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Dr.geometry=this.geometry,Dr.material=this.material,Dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nr.copy(this.boundingSphere),Nr.applyMatrix4(n),e.ray.intersectsSphere(Nr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Hs),Vf.multiplyMatrices(n,Hs),Dr.matrixWorld=Vf,Dr.raycast(e,Za);for(let a=0,o=Za.length;a<o;a++){let l=Za[a];l.instanceId=r,l.object=this,t.push(l)}Za.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new mi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new bo(new Float32Array(s*this.count),s,this.count,ru,Bn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Qt=class extends xn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},So=new L,To=new L,Wf=new Pe,Ur=new ds,Ka=new yn,Fl=new L,Xf=new L,Hn=class extends At{constructor(e=new ct,t=new Qt){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)So.fromBufferAttribute(t,s-1),To.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=So.distanceTo(To);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ka.copy(n.boundingSphere),Ka.applyMatrix4(s),Ka.radius+=r,e.ray.intersectsSphere(Ka)===!1)return;Wf.copy(s).invert(),Ur.copy(e.ray).applyMatrix4(Wf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=c){let d=u.getX(v),y=u.getX(v+1),x=Ja(this,e,Ur,l,d,y);x&&t.push(x)}if(this.isLineLoop){let v=u.getX(g-1),m=u.getX(p),d=Ja(this,e,Ur,l,v,m);d&&t.push(d)}}else{let p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=c){let d=Ja(this,e,Ur,l,v,v+1);d&&t.push(d)}if(this.isLineLoop){let v=Ja(this,e,Ur,l,g-1,p);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ja(i,e,t,n,s,r){let a=i.geometry.attributes.position;if(So.fromBufferAttribute(a,s),To.fromBufferAttribute(a,r),t.distanceSqToSegment(So,To,Fl,Xf)>n)return;Fl.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Fl);if(!(l<e.near||l>e.far))return{distance:l,point:Xf.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var qf=new L,jf=new L,gi=class extends Hn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)qf.fromBufferAttribute(t,s),jf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+qf.distanceTo(jf);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ki=class extends Hn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Jr=class extends xn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Yf=new Pe,Hc=new ds,Qa=new yn,eo=new L,Eo=class extends At{constructor(e=new ct,t=new Jr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qa.copy(n.boundingSphere),Qa.applyMatrix4(s),Qa.radius+=r,e.ray.intersectsSphere(Qa)===!1)return;Yf.copy(s).invert(),Hc.copy(e.ray).applyMatrix4(Yf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,v=p;g<v;g++){let m=c.getX(g);eo.fromBufferAttribute(h,m),$f(eo,m,l,s,e,t,this)}}else{let f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=f,v=p;g<v;g++)eo.fromBufferAttribute(h,g),$f(eo,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function $f(i,e,t,n,s,r,a){let o=Hc.distanceSqToPoint(i);if(o<t){let l=new L;Hc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Qr=class extends Xt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ea=class i extends ct{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new L,u=new He;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){let p=n+h/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[f]/e+1)/2,u.y=(a[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(o,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},sr=class i extends ct{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],p=[],g=0,v=[],m=n/2,d=0;y(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new st(h,3)),this.setAttribute("normal",new st(f,3)),this.setAttribute("uv",new st(p,2));function y(){let _=new L,R=new L,E=0,A=(t-e)/n;for(let C=0;C<=r;C++){let S=[],b=C/r,P=b*(t-e)+e;for(let B=0;B<=s;B++){let O=B/s,G=O*l+o,$=Math.sin(G),W=Math.cos(G);R.x=P*$,R.y=-b*n+m,R.z=P*W,h.push(R.x,R.y,R.z),_.set($,A,W).normalize(),f.push(_.x,_.y,_.z),p.push(O,1-b),S.push(g++)}v.push(S)}for(let C=0;C<s;C++)for(let S=0;S<r;S++){let b=v[S][C],P=v[S+1][C],B=v[S+1][C+1],O=v[S][C+1];(e>0||S!==0)&&(u.push(b,P,O),E+=3),(t>0||S!==r-1)&&(u.push(P,B,O),E+=3)}c.addGroup(d,E,0),d+=E}function x(_){let R=g,E=new He,A=new L,C=0,S=_===!0?e:t,b=_===!0?1:-1;for(let B=1;B<=s;B++)h.push(0,m*b,0),f.push(0,b,0),p.push(.5,.5),g++;let P=g;for(let B=0;B<=s;B++){let G=B/s*l+o,$=Math.cos(G),W=Math.sin(G);A.x=S*W,A.y=m*b,A.z=S*$,h.push(A.x,A.y,A.z),f.push(0,b,0),E.x=$*.5+.5,E.y=W*.5*b+.5,p.push(E.x,E.y),g++}for(let B=0;B<s;B++){let O=R+B,G=P+B;_===!0?u.push(G,G+1,O):u.push(G+1,G,O),C+=3}c.addGroup(d,C,_===!0?1:2),d+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Vc=class i extends ct{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new st(r,3)),this.setAttribute("normal",new st(r.slice(),3)),this.setAttribute("uv",new st(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let x=new L,_=new L,R=new L;for(let E=0;E<t.length;E+=3)p(t[E+0],x),p(t[E+1],_),p(t[E+2],R),l(x,_,R,y)}function l(y,x,_,R){let E=R+1,A=[];for(let C=0;C<=E;C++){A[C]=[];let S=y.clone().lerp(_,C/E),b=x.clone().lerp(_,C/E),P=E-C;for(let B=0;B<=P;B++)B===0&&C===E?A[C][B]=S:A[C][B]=S.clone().lerp(b,B/P)}for(let C=0;C<E;C++)for(let S=0;S<2*(E-C)-1;S++){let b=Math.floor(S/2);S%2===0?(f(A[C][b+1]),f(A[C+1][b]),f(A[C][b])):(f(A[C][b+1]),f(A[C+1][b+1]),f(A[C+1][b]))}}function c(y){let x=new L;for(let _=0;_<r.length;_+=3)x.x=r[_+0],x.y=r[_+1],x.z=r[_+2],x.normalize().multiplyScalar(y),r[_+0]=x.x,r[_+1]=x.y,r[_+2]=x.z}function u(){let y=new L;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];let _=m(y)/2/Math.PI+.5,R=d(y)/Math.PI+.5;a.push(_,1-R)}g(),h()}function h(){for(let y=0;y<a.length;y+=6){let x=a[y+0],_=a[y+2],R=a[y+4],E=Math.max(x,_,R),A=Math.min(x,_,R);E>.9&&A<.1&&(x<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),R<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function p(y,x){let _=y*3;x.x=e[_+0],x.y=e[_+1],x.z=e[_+2]}function g(){let y=new L,x=new L,_=new L,R=new L,E=new He,A=new He,C=new He;for(let S=0,b=0;S<r.length;S+=9,b+=6){y.set(r[S+0],r[S+1],r[S+2]),x.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),E.set(a[b+0],a[b+1]),A.set(a[b+2],a[b+3]),C.set(a[b+4],a[b+5]),R.copy(y).add(x).add(_).divideScalar(3);let P=m(R);v(E,b+0,y,P),v(A,b+2,x,P),v(C,b+4,_,P)}}function v(y,x,_,R){R<0&&y.x===1&&(a[x]=y.x-1),_.x===0&&_.z===0&&(a[x]=R/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function d(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var rr=class i extends Vc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var ms=class i extends ct{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],h=e,f=(t-e)/s,p=new L,g=new He;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){let d=r+m/n*a;p.x=h*Math.cos(d),p.y=h*Math.sin(d),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}h+=f}for(let v=0;v<s;v++){let m=v*(n+1);for(let d=0;d<n;d++){let y=d+m,x=y,_=y+n+1,R=y+n+2,E=y+1;o.push(x,_,E),o.push(_,R,E)}}this.setIndex(o),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var gs=class i extends ct{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],h=new L,f=new L,p=[],g=[],v=[],m=[];for(let d=0;d<=n;d++){let y=[],x=d/n,_=0;d===0&&a===0?_=.5/t:d===n&&l===Math.PI&&(_=-.5/t);for(let R=0;R<=t;R++){let E=R/t;h.x=-e*Math.cos(s+E*r)*Math.sin(a+x*o),h.y=e*Math.cos(a+x*o),h.z=e*Math.sin(s+E*r)*Math.sin(a+x*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),m.push(E+_,1-x),y.push(c++)}u.push(y)}for(let d=0;d<n;d++)for(let y=0;y<t;y++){let x=u[d][y+1],_=u[d][y],R=u[d+1][y],E=u[d+1][y+1];(d!==0||a>0)&&p.push(x,_,E),(d!==n-1||l<Math.PI)&&p.push(_,R,E)}this.setIndex(p),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(v,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ta=class extends ct{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,s=new L,r=new L;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){let h=l[c],f=h.start,p=h.count;for(let g=f,v=f+p;g<v;g+=3)for(let m=0;m<3;m++){let d=o.getX(g+m),y=o.getX(g+(m+1)%3);s.fromBufferAttribute(a,d),r.fromBufferAttribute(a,y),Zf(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let u=3*o+c,h=3*o+(c+1)%3;s.fromBufferAttribute(a,u),r.fromBufferAttribute(a,h),Zf(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new st(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Zf(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}var bn=class extends xn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vd,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Mn=class extends bn{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new He(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function to(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Uv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function zv(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Kf(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function Rd(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Hi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Gc=class extends Hi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bh,endingEnd:Bh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case kh:r=e,o=2*t-n;break;case Hh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case kh:a=e,l=2*n-t;break;case Hh:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,d=-f*m+2*f*v-f*g,y=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,x=(-1-p)*m+(1.5+p)*v+.5*g,_=p*m-p*v;for(let R=0;R!==o;++R)r[R]=d*a[u+R]+y*a[c+R]+x*a[l+R]+_*a[h+R];return r}},Wc=class extends Hi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*h+a[l+f]*u;return r}},Xc=class extends Hi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},In=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=to(t,this.TimeBufferType),this.values=to(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:to(e.times,Array),values:to(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Qs:t=this.InterpolantFactoryMethodDiscrete;break;case er:t=this.InterpolantFactoryMethodLinear;break;case cl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qs;case this.InterpolantFactoryMethodLinear:return er;case this.InterpolantFactoryMethodSmooth:return cl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Uv(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===cl,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let h=o*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){let v=t[h+g];if(v!==t[f+g]||v!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};In.prototype.TimeBufferType=Float32Array;In.prototype.ValueBufferType=Float32Array;In.prototype.DefaultInterpolation=er;var Vi=class extends In{constructor(e,t,n){super(e,t,n)}};Vi.prototype.ValueTypeName="bool";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=Qs;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ao=class extends In{};Ao.prototype.ValueTypeName="color";var vi=class extends In{};vi.prototype.ValueTypeName="number";var qc=class extends Hi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)_n.slerpFlat(r,0,a,c-o,a,c,l);return r}},_i=class extends In{InterpolantFactoryMethodLinear(e){return new qc(this.times,this.values,this.getValueSize(),e)}};_i.prototype.ValueTypeName="quaternion";_i.prototype.InterpolantFactoryMethodSmooth=void 0;var Gi=class extends In{constructor(e,t,n){super(e,t,n)}};Gi.prototype.ValueTypeName="string";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=Qs;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var yi=class extends In{};yi.prototype.ValueTypeName="vector";var wo=class{constructor(e="",t=-1,n=[],s=lp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=kn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Fv(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(In.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let u=zv(l);l=Kf(l,1,u),c=Kf(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new vi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c.name.match(r);if(u&&u.length>1){let h=u[1],f=s[h];f||(s[h]=f=[]),f.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,f,p,g,v){if(p.length!==0){let m=[],d=[];Rd(p,m,d,g),m.length!==0&&v.push(new h(f,m,d))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let p={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let v=0;v<f[g].morphTargets.length;v++)p[f[g].morphTargets[v]]=-1;for(let v in p){let m=[],d=[];for(let y=0;y!==f[g].morphTargets.length;++y){let x=f[g];m.push(x.time),d.push(x.morphTarget===v?1:0)}s.push(new vi(".morphTargetInfluence["+v+"]",m,d))}l=p.length*a}else{let p=".bones["+t[h].name+"]";n(yi,p+".position",f,"pos",s),n(_i,p+".quaternion",f,"rot",s),n(yi,p+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Ov(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return vi;case"vector":case"vector2":case"vector3":case"vector4":return yi;case"color":return Ao;case"quaternion":return _i;case"bool":case"boolean":return Vi;case"string":return Gi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Fv(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Ov(i.type);if(i.times===void 0){let t=[],n=[];Rd(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var Ui={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},jc=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}},Bv=new jc,xi=class{constructor(e){this.manager=e!==void 0?e:Bv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};xi.DEFAULT_MATERIAL_NAME="__DEFAULT";var oi={},Yc=class extends Error{constructor(e,t){super(e),this.response=t}},na=class extends xi{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ui.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(oi[e]!==void 0){oi[e].push({onLoad:t,onProgress:n,onError:s});return}oi[e]=[],oi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=oi[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,g=p!==0,v=0,m=new ReadableStream({start(d){y();function y(){h.read().then(({done:x,value:_})=>{if(x)d.close();else{v+=_.byteLength;let R=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let E=0,A=u.length;E<A;E++){let C=u[E];C.onProgress&&C.onProgress(R)}d.enqueue(_),y()}},x=>{d.error(x)})}}});return new Response(m)}else throw new Yc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Ui.add(e,c);let u=oi[e];delete oi[e];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{let u=oi[e];if(u===void 0)throw this.manager.itemError(e),c;delete oi[e];for(let h=0,f=u.length;h<f;h++){let p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var $c=class extends xi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ui.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=Xr("img");function l(){u(),Ui.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var Ro=class extends xi{constructor(e){super(e)}load(e,t,n,s){let r=new Xt,a=new $c(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},ar=class extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Co=class extends ar{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Bl=new Pe,Jf=new L,Qf=new L,ia=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yr,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Jf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jf),Qf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qf),t.updateMatrixWorld(),Bl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Bl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Zc=class extends ia{constructor(){super(new Ht(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=tr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Io=class extends ar{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Zc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},ed=new Pe,zr=new L,kl=new L,Kc=class extends ia{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new He(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),zr.setFromMatrixPosition(e.matrixWorld),n.position.copy(zr),kl.copy(n.position),kl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(kl),n.updateMatrixWorld(),s.makeTranslation(-zr.x,-zr.y,-zr.z),ed.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ed)}},Po=class extends ar{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Kc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Jc=class extends ia{constructor(){super(new ir(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},or=class extends ar{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new Jc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Wi=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Lo=class extends xi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ui.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ui.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Ui.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ui.add(e,l),r.manager.itemStart(e)}};var Do=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=td(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=td();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function td(){return performance.now()}var fu="\\[\\]\\.:\\/",kv=new RegExp("["+fu+"]","g"),du="[^"+fu+"]",Hv="[^"+fu.replace("\\.","")+"]",Vv=/((?:WC+[\/:])*)/.source.replace("WC",du),Gv=/(WCOD+)?/.source.replace("WCOD",Hv),Wv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",du),Xv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",du),qv=new RegExp("^"+Vv+Gv+Wv+Xv+"$"),jv=["material","materials","bones","map"],Qc=class{constructor(e,t,n){let s=n||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},xt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(kv,"")}static parseTrackName(e){let t=qv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);jv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xt.Composite=Qc;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var X_=new Float32Array(1);var nd=new Pe,No=class{constructor(e,t,n=0,s=1/0){this.ray=new ds(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new qr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return nd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nd),this}intersectObject(e,t=!0,n=[]){return eu(e,this,n,t),n.sort(id),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)eu(e[s],this,n,t);return n.sort(id),n}};function id(i,e){return i.distance-e.distance}function eu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)eu(r[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");function pu(i,e){if(e===gd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ra||e===zo){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===ra)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Bo=class extends xi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new bu(t)}),this.register(function(t){return new Mu(t)}),this.register(function(t){return new Pu(t)}),this.register(function(t){return new Lu(t)}),this.register(function(t){return new Du(t)}),this.register(function(t){return new Tu(t)}),this.register(function(t){return new Eu(t)}),this.register(function(t){return new Au(t)}),this.register(function(t){return new wu(t)}),this.register(function(t){return new xu(t)}),this.register(function(t){return new Ru(t)}),this.register(function(t){return new Su(t)}),this.register(function(t){return new Iu(t)}),this.register(function(t){return new Cu(t)}),this.register(function(t){return new _u(t)}),this.register(function(t){return new Nu(t)}),this.register(function(t){return new Uu(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Wi.extractUrlBase(e);a=Wi.resolveURL(c,this.path)}else a=Wi.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new na(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Dd){try{a[Ke.KHR_BINARY_GLTF]=new zu(e)}catch(h){s&&s(h);return}r=JSON.parse(a[Ke.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Gu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case Ke.KHR_MATERIALS_UNLIT:a[h]=new yu;break;case Ke.KHR_DRACO_MESH_COMPRESSION:a[h]=new Ou(r,this.dracoLoader);break;case Ke.KHR_TEXTURE_TRANSFORM:a[h]=new Fu;break;case Ke.KHR_MESH_QUANTIZATION:a[h]=new Bu;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function $v(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var Ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},_u=class{constructor(e){this.parser=e,this.name=Ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Se(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],en);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new or(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Po(u),c.distance=h;break;case"spot":c=new Io(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,bi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},yu=class{constructor(){this.name=Ke.KHR_MATERIALS_UNLIT}getMaterialType(){return Pt}extendParams(e,t,n){let s=[];e.color=new Se(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],en),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Nt))}return Promise.all(s)}},xu=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},bu=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new He(o,o)}return Promise.all(r)}},Mu=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Su=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Tu=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Se(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],en)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Nt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Eu=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Au=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Se().setRGB(o[0],o[1],o[2],en),Promise.all(r)}},wu=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Ru=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Se().setRGB(o[0],o[1],o[2],en),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Nt)),Promise.all(r)}},Cu=class{constructor(e){this.parser=e,this.name=Ke.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Iu=class{constructor(e){this.parser=e,this.name=Ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Mn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},Pu=class{constructor(e){this.parser=e,this.name=Ke.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Lu=class{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Du=class{constructor(e){this.parser=e,this.name=Ke.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Nu=class{constructor(e){this.name=Ke.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(p){return p.buffer}):a.ready.then(function(){let p=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(p),u,h,f,s.mode,s.filter),p})})}else return null}},Uu=class{constructor(e){this.name=Ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Pn.TRIANGLES&&c.mode!==Pn.TRIANGLE_STRIP&&c.mode!==Pn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,p=[];for(let g of h){let v=new Pe,m=new L,d=new _n,y=new L(1,1,1),x=new ps(g.geometry,g.material,f);for(let _=0;_<f;_++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&d.fromBufferAttribute(l.ROTATION,_),l.SCALE&&y.fromBufferAttribute(l.SCALE,_),x.setMatrixAt(_,v.compose(m,d,y));for(let _ in l)if(_==="_COLOR_0"){let R=l[_];x.instanceColor=new mi(R.array,R.itemSize,R.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,l[_]);At.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),p.push(x)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}},Dd="glTF",aa=12,Cd={JSON:1313821514,BIN:5130562},zu=class{constructor(e){this.name=Ke.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,aa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Dd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-aa,r=new DataView(e,aa),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Cd.JSON){let c=new Uint8Array(e,aa+a,o);this.content=n.decode(c)}else if(l===Cd.BIN){let c=aa+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ou=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let u in a){let h=Hu[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=Hu[u]||u.toLowerCase();if(a[u]!==void 0){let f=n.accessors[e.attributes[u]],p=cr[f.componentType];c[h]=p.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(p){for(let g in p.attributes){let v=p.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}h(p)},o,c,en,f)})})}},Fu=class{constructor(){this.name=Ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Bu=class{constructor(){this.name=Ke.KHR_MESH_QUANTIZATION}},ko=class extends Hi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=s-t,h=(n-t)/u,f=h*h,p=f*h,g=e*c,v=g-c,m=-2*p+3*f,d=p-f,y=1-m,x=d-f+h;for(let _=0;_!==o;_++){let R=a[v+_+o],E=a[v+_+l]*u,A=a[g+_+o],C=a[g+_]*u;r[_]=y*R+x*E+m*A+d*C}return r}},Zv=new _n,ku=class extends ko{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return Zv.fromArray(r).normalize().toArray(r),r}},Pn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},cr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Id={9728:Jt,9729:un,9984:tu,9985:Br,9986:Vs,9987:jn},Pd={33071:ui,33648:Gr,10497:hs},mu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Hu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Xi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Kv={CUBICSPLINE:void 0,LINEAR:er,STEP:Qs},gu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Jv(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new bn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Yn})),i.DefaultMaterial}function vs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function bi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Qv(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(f)}if(s){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(f)}if(r){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function e_(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function t_(i){let e,t=i.extensions&&i.extensions[Ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+vu(t.attributes):e=i.indices+":"+vu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+vu(i.targets[n]);return e}function vu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Vu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function n_(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var i_=new Pe,Gu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new $v,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new Ro(this.options.manager):this.textureLoader=new Lo(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new na(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return vs(r,o,s),bi(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,u]of a.children.entries())r(u,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ke.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Wi.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=mu[s.type],o=cr[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new It(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=mu[s.type],c=cr[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,v,m;if(p&&p!==h){let d=Math.floor(f/p),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count,x=t.cache.get(y);x||(v=new c(o,d*p,s.count*p/u),x=new $r(v,p/u),t.cache.add(y,x)),m=new Zr(x,l,f%p/u,g)}else o===null?v=new c(s.count*l):v=new c(o,f,s.count*l),m=new It(v,l,g);if(s.sparse!==void 0){let d=mu.SCALAR,y=cr[s.sparse.indices.componentType],x=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,R=new y(a[1],x,s.sparse.count*d),E=new c(a[2],_,s.sparse.count*l);o!==null&&(m=new It(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,C=R.length;A<C;A++){let S=R[A];if(m.setX(S,E[A*l]),l>=2&&m.setY(S,E[A*l+1]),l>=3&&m.setZ(S,E[A*l+2]),l>=4&&m.setW(S,E[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let f=(r.samplers||{})[a.sampler]||{};return u.magFilter=Id[f.magFilter]||un,u.minFilter=Id[f.minFilter]||jn,u.wrapS=Pd[f.wrapS]||hs,u.wrapT=Pd[f.wrapT]||hs,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Jt&&u.minFilter!==un,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;let f=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(v){let m=new Xt(v);m.needsUpdate=!0,f(m)}),t.load(Wi.resolveURL(h,r.path),g,void 0,p)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),bi(h,a),h.userData.mimeType=a.mimeType||n_(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ke.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Ke.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[Ke.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Jr,xn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Qt,xn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return bn}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[Ke.KHR_MATERIALS_UNLIT]){let h=s[Ke.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{let h=r.pbrMetallicRoughness||{};if(o.color=new Se(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],en),o.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Nt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Ut);let u=r.alphaMode||gu.OPAQUE;if(u===gu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===gu.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Pt&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new He(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==Pt&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Pt){let h=r.emissiveFactor;o.emissive=new Se().setRGB(h[0],h[1],h[2],en)}return r.emissiveTexture!==void 0&&a!==Pt&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Nt)),Promise.all(c).then(function(){let h=new a(o);return r.name&&(h.name=r.name),bi(h,r),t.associations.set(h,{materials:e}),r.extensions&&vs(s,h,r),h})}createUniqueName(e){let t=xt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Ld(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],u=t_(c),h=s[u];if(h)a.push(h.promise);else{let f;c.extensions&&c.extensions[Ke.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Ld(new ct,c,t),s[u]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let u=a[l].material===void 0?Jv(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,g=u.length;p<g;p++){let v=u[p],m=a[p],d,y=c[p];if(m.mode===Pn.TRIANGLES||m.mode===Pn.TRIANGLE_STRIP||m.mode===Pn.TRIANGLE_FAN||m.mode===void 0)d=r.isSkinnedMesh===!0?new xo(v,y):new ke(v,y),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===Pn.TRIANGLE_STRIP?d.geometry=pu(d.geometry,zo):m.mode===Pn.TRIANGLE_FAN&&(d.geometry=pu(d.geometry,ra));else if(m.mode===Pn.LINES)d=new gi(v,y);else if(m.mode===Pn.LINE_STRIP)d=new Hn(v,y);else if(m.mode===Pn.LINE_LOOP)d=new ki(v,y);else if(m.mode===Pn.POINTS)d=new Eo(v,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&e_(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),bi(d,r),m.extensions&&vs(s,d,m),t.assignFinalMaterial(d),h.push(d)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return r.extensions&&vs(s,h[0],r),h[0];let f=new St;r.extensions&&vs(s,f,r),t.associations.set(f,{meshes:e});for(let p=0,g=h.length;p<g;p++)f.add(h[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ht(yd.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ir(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),bi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,u=a.length;c<u;c++){let h=a[c];if(h){o.push(h);let f=new Pe;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Mo(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){let p=s.channels[h],g=s.samplers[p.sampler],v=p.target,m=v.node,d=s.parameters!==void 0?s.parameters[g.input]:g.input,y=s.parameters!==void 0?s.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",d)),l.push(this.getDependency("accessor",y)),c.push(g),u.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],p=h[1],g=h[2],v=h[3],m=h[4],d=[];for(let y=0,x=f.length;y<x;y++){let _=f[y],R=p[y],E=g[y],A=v[y],C=m[y];if(_===void 0)continue;_.updateMatrix&&_.updateMatrix();let S=n._createAnimationTracks(_,R,E,A,C);if(S)for(let b=0;b<S.length;b++)d.push(S[b])}return new wo(r,void 0,d)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,i_)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new Kr:c.length>1?u=new St:c.length===1?u=c[0]:u=new At,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),bi(u,r),r.extensions&&vs(n,u,r),r.matrix!==void 0){let h=new Pe;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new St;n.name&&(r.name=s.createUniqueName(n.name)),bi(r,n),n.extensions&&vs(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[f,p]of s.associations)(f instanceof xn||f instanceof Xt)&&h.set(f,p);return u.traverse(f=>{let p=s.associations.get(f);p!=null&&h.set(f,p)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];Xi[r.path]===Xi.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let c;switch(Xi[r.path]){case Xi.weights:c=vi;break;case Xi.rotation:c=_i;break;case Xi.position:case Xi.scale:c=yi;break;default:n.itemSize===1?c=vi:c=yi;break}let u=s.interpolation!==void 0?Kv[s.interpolation]:er,h=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){let g=new c(l[f]+"."+Xi[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Vu(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof _i?ku:ko;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function s_(i,e,t){let n=e.attributes,s=new Cn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),o.normalized){let u=Vu(cr[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new L,l=new L;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){let v=Vu(cr[f.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new yn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Ld(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=Hu[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Qe.workingColorSpace!==en&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),bi(i,e),s_(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Qv(i,e.targets,t):i})}var oa={radius:2.5,points:[0,0,2.5,0,1.3889,2.0787,0,2.0787,1.3889,0,2.452,.4877,0,2.5,0,0,2.452,-.4877,0,2.0787,-1.3889,0,0,-2.5,.0952,.4784,2.452,.1866,.9383,2.3097,.271,1.3622,2.0787,.3449,1.7338,1.7678,.4055,2.0387,1.3889,.4506,2.2653,.9567,.4784,2.4048,.4877,.4877,2.452,0,.4784,2.4048,-.4877,.4506,2.2653,-.9567,.4055,2.0387,-1.3889,.3449,1.7338,-1.7678,.271,1.3622,-2.0787,.1866,.9383,-2.3097,.0952,.4784,-2.452,.1866,.4506,2.452,.3661,.8839,2.3097,.5315,1.2832,2.0787,.6765,1.6332,1.7678,.7955,1.9204,1.3889,.8839,2.1339,.9567,.9383,2.2653,.4877,.9567,2.3097,0,.9383,2.2653,-.4877,.8839,2.1339,-.9567,.7955,1.9204,-1.3889,.6765,1.6332,-1.7678,.5315,1.2832,-2.0787,.3661,.8839,-2.3097,.1866,.4506,-2.452,.271,.4055,2.452,.5315,.7955,2.3097,.7716,1.1548,2.0787,.9821,1.4698,1.7678,1.1548,1.7284,1.3889,1.2832,1.9204,.9567,1.3622,2.0387,.4877,1.3889,2.0787,0,1.3622,2.0387,-.4877,1.2832,1.9204,-.9567,1.1548,1.7284,-1.3889,.9821,1.4698,-1.7678,.7716,1.1548,-2.0787,.5315,.7955,-2.3097,.271,.4055,-2.452,.3449,.3449,2.452,.6765,.6765,2.3097,.9821,.9821,2.0787,1.25,1.25,1.7678,1.4698,1.4698,1.3889,1.6332,1.6332,.9567,1.7338,1.7338,.4877,1.7678,1.7678,0,1.7338,1.7338,-.4877,1.6332,1.6332,-.9567,1.4698,1.4698,-1.3889,1.25,1.25,-1.7678,.9821,.9821,-2.0787,.6765,.6765,-2.3097,.3449,.3449,-2.452,.4055,.271,2.452,.7955,.5315,2.3097,1.1548,.7716,2.0787,1.4698,.9821,1.7678,1.7284,1.1548,1.3889,1.9204,1.2832,.9567,2.0387,1.3622,.4877,2.0787,1.3889,0,2.0387,1.3622,-.4877,1.9204,1.2832,-.9567,1.7284,1.1548,-1.3889,1.4698,.9821,-1.7678,1.1548,.7716,-2.0787,.7955,.5315,-2.3097,.4055,.271,-2.452,.4506,.1866,2.452,.8839,.3661,2.3097,1.2832,.5315,2.0787,1.6332,.6765,1.7678,1.9204,.7955,1.3889,2.1339,.8839,.9567,2.2653,.9383,.4877,2.3097,.9567,0,2.2653,.9383,-.4877,2.1339,.8839,-.9567,1.9204,.7955,-1.3889,1.6332,.6765,-1.7678,1.2832,.5315,-2.0787,.8839,.3661,-2.3097,.4506,.1866,-2.452,.4784,.0952,2.452,.9383,.1866,2.3097,1.3622,.271,2.0787,1.7338,.3449,1.7678,2.0387,.4055,1.3889,2.2653,.4506,.9567,2.4048,.4784,.4877,2.452,.4877,0,2.4048,.4784,-.4877,2.2653,.4506,-.9567,2.0387,.4055,-1.3889,1.7338,.3449,-1.7678,1.3622,.271,-2.0787,.9383,.1866,-2.3097,.4784,.0952,-2.452,.4877,-0,2.452,.9567,-0,2.3097,1.3889,-0,2.0787,1.7678,0,1.7678,2.0787,-0,1.3889,2.3097,0,.9567,2.452,-0,.4877,2.5,-0,0,2.452,-0,-.4877,2.3097,0,-.9567,2.0787,-0,-1.3889,1.7678,0,-1.7678,1.3889,-0,-2.0787,.9567,-0,-2.3097,.4877,-0,-2.452,.4784,-.0952,2.452,.9383,-.1866,2.3097,1.3622,-.271,2.0787,1.7338,-.3449,1.7678,2.0387,-.4055,1.3889,2.2653,-.4506,.9567,2.4048,-.4784,.4877,2.452,-.4877,0,2.4048,-.4784,-.4877,2.2653,-.4506,-.9567,2.0387,-.4055,-1.3889,1.7338,-.3449,-1.7678,1.3622,-.271,-2.0787,.9383,-.1866,-2.3097,.4784,-.0952,-2.452,.4506,-.1866,2.452,.8839,-.3661,2.3097,1.2832,-.5315,2.0787,1.6332,-.6765,1.7678,1.9204,-.7955,1.3889,2.1339,-.8839,.9567,2.2653,-.9383,.4877,2.3097,-.9567,0,2.2653,-.9383,-.4877,2.1339,-.8839,-.9567,1.9204,-.7955,-1.3889,1.6332,-.6765,-1.7678,1.2832,-.5315,-2.0787,.8839,-.3661,-2.3097,.4506,-.1866,-2.452,.4055,-.271,2.452,.7955,-.5315,2.3097,1.1548,-.7716,2.0787,1.4698,-.9821,1.7678,1.7284,-1.1548,1.3889,1.9204,-1.2832,.9567,2.0387,-1.3622,.4877,2.0787,-1.3889,0,2.0387,-1.3622,-.4877,1.9204,-1.2832,-.9567,1.7284,-1.1548,-1.3889,1.4698,-.9821,-1.7678,1.1548,-.7716,-2.0787,.7955,-.5315,-2.3097,.4055,-.271,-2.452,.3449,-.3449,2.452,.6765,-.6765,2.3097,.9821,-.9821,2.0787,1.25,-1.25,1.7678,1.4698,-1.4698,1.3889,1.6332,-1.6332,.9567,1.7338,-1.7338,.4877,1.7678,-1.7678,0,1.7338,-1.7338,-.4877,1.6332,-1.6332,-.9567,1.4698,-1.4698,-1.3889,1.25,-1.25,-1.7678,.9821,-.9821,-2.0787,.6765,-.6765,-2.3097,.3449,-.3449,-2.452,.271,-.4055,2.452,.5315,-.7955,2.3097,.7716,-1.1548,2.0787,.9821,-1.4698,1.7678,1.1548,-1.7284,1.3889,1.2832,-1.9204,.9567,1.3622,-2.0387,.4877,1.3889,-2.0787,0,1.3622,-2.0387,-.4877,1.2832,-1.9204,-.9567,1.1548,-1.7284,-1.3889,.9821,-1.4698,-1.7678,.7716,-1.1548,-2.0787,.5315,-.7955,-2.3097,.271,-.4055,-2.452,.1866,-.4506,2.452,.3661,-.8839,2.3097,.5315,-1.2832,2.0787,.6765,-1.6332,1.7678,.7955,-1.9204,1.3889,.8839,-2.1339,.9567,.9383,-2.2653,.4877,.9567,-2.3097,0,.9383,-2.2653,-.4877,.8839,-2.1339,-.9567,.7955,-1.9204,-1.3889,.6765,-1.6332,-1.7678,.5315,-1.2832,-2.0787,.3661,-.8839,-2.3097,.1866,-.4506,-2.452,.0952,-.4784,2.452,.1866,-.9383,2.3097,.271,-1.3622,2.0787,.3449,-1.7338,1.7678,.4055,-2.0387,1.3889,.4506,-2.2653,.9567,.4784,-2.4048,.4877,.4877,-2.452,0,.4784,-2.4048,-.4877,.4506,-2.2653,-.9567,.4055,-2.0387,-1.3889,.3449,-1.7338,-1.7678,.271,-1.3622,-2.0787,.1866,-.9383,-2.3097,.0952,-.4784,-2.452,-0,-.4877,2.452,-0,-.9567,2.3097,-0,-1.3889,2.0787,-0,-1.7678,1.7678,-0,-2.0787,1.3889,0,-2.3097,.9567,-0,-2.452,.4877,-0,-2.5,0,-0,-2.452,-.4877,0,-2.3097,-.9567,-0,-2.0787,-1.3889,-0,-1.7678,-1.7678,-0,-1.3889,-2.0787,-0,-.9567,-2.3097,-0,-.4877,-2.452,-.0952,-.4784,2.452,-.1866,-.9383,2.3097,-.271,-1.3622,2.0787,-.3449,-1.7338,1.7678,-.4055,-2.0387,1.3889,-.4506,-2.2653,.9567,-.4784,-2.4048,.4877,-.4877,-2.452,0,-.4784,-2.4048,-.4877,-.4506,-2.2653,-.9567,-.4055,-2.0387,-1.3889,-.3449,-1.7338,-1.7678,-.271,-1.3622,-2.0787,-.1866,-.9383,-2.3097,-.0952,-.4784,-2.452,-.1866,-.4506,2.452,-.3661,-.8839,2.3097,-.5315,-1.2832,2.0787,-.6765,-1.6332,1.7678,-.7955,-1.9204,1.3889,-.8839,-2.1339,.9567,-.9383,-2.2653,.4877,-.9567,-2.3097,0,-.9383,-2.2653,-.4877,-.8839,-2.1339,-.9567,-.7955,-1.9204,-1.3889,-.6765,-1.6332,-1.7678,-.5315,-1.2832,-2.0787,-.3661,-.8839,-2.3097,-.1866,-.4506,-2.452,-.271,-.4055,2.452,-.5315,-.7955,2.3097,-.7716,-1.1548,2.0787,-.9821,-1.4698,1.7678,-1.1548,-1.7284,1.3889,-1.2832,-1.9204,.9567,-1.3622,-2.0387,.4877,-1.3889,-2.0787,0,-1.3622,-2.0387,-.4877,-1.2832,-1.9204,-.9567,-1.1548,-1.7284,-1.3889,-.9821,-1.4698,-1.7678,-.7716,-1.1548,-2.0787,-.5315,-.7955,-2.3097,-.271,-.4055,-2.452,-.3449,-.3449,2.452,-.6765,-.6765,2.3097,-.9821,-.9821,2.0787,-1.25,-1.25,1.7678,-1.4698,-1.4698,1.3889,-1.6332,-1.6332,.9567,-1.7338,-1.7338,.4877,-1.7678,-1.7678,0,-1.7338,-1.7338,-.4877,-1.6332,-1.6332,-.9567,-1.4698,-1.4698,-1.3889,-1.25,-1.25,-1.7678,-.9821,-.9821,-2.0787,-.6765,-.6765,-2.3097,-.3449,-.3449,-2.452,-.4055,-.271,2.452,-.7955,-.5315,2.3097,-1.1548,-.7716,2.0787,-1.4698,-.9821,1.7678,-1.7284,-1.1548,1.3889,-1.9204,-1.2832,.9567,-2.0387,-1.3622,.4877,-2.0787,-1.3889,0,-2.0387,-1.3622,-.4877,-1.9204,-1.2832,-.9567,-1.7284,-1.1548,-1.3889,-1.4698,-.9821,-1.7678,-1.1548,-.7716,-2.0787,-.7955,-.5315,-2.3097,-.4055,-.271,-2.452,-.4506,-.1866,2.452,-.8839,-.3661,2.3097,-1.2832,-.5315,2.0787,-1.6332,-.6765,1.7678,-1.9204,-.7955,1.3889,-2.1339,-.8839,.9567,-2.2653,-.9383,.4877,-2.3097,-.9567,0,-2.2653,-.9383,-.4877,-2.1339,-.8839,-.9567,-1.9204,-.7955,-1.3889,-1.6332,-.6765,-1.7678,-1.2832,-.5315,-2.0787,-.8839,-.3661,-2.3097,-.4506,-.1866,-2.452,-.4784,-.0952,2.452,-.9383,-.1866,2.3097,-1.3622,-.271,2.0787,-1.7338,-.3449,1.7678,-2.0387,-.4055,1.3889,-2.2653,-.4506,.9567,-2.4048,-.4784,.4877,-2.452,-.4877,0,-2.4048,-.4784,-.4877,-2.2653,-.4506,-.9567,-2.0387,-.4055,-1.3889,-1.7338,-.3449,-1.7678,-1.3622,-.271,-2.0787,-.9383,-.1866,-2.3097,-.4784,-.0952,-2.452,-.4877,0,2.452,-.9567,0,2.3097,-1.3889,0,2.0787,-1.7678,0,1.7678,-2.0787,0,1.3889,-2.3097,0,.9567,-2.452,0,.4877,-2.5,0,0,-2.452,0,-.4877,-2.3097,0,-.9567,-2.0787,0,-1.3889,-1.7678,0,-1.7678,-1.3889,0,-2.0787,-.9567,0,-2.3097,-.4877,0,-2.452,-.4784,.0952,2.452,-.9383,.1866,2.3097,-1.3622,.271,2.0787,-1.7338,.3449,1.7678,-2.0387,.4055,1.3889,-2.2653,.4506,.9567,-2.4048,.4784,.4877,-2.452,.4877,0,-2.4048,.4784,-.4877,-2.2653,.4506,-.9567,-2.0387,.4055,-1.3889,-1.7338,.3449,-1.7678,-1.3622,.271,-2.0787,-.9383,.1866,-2.3097,-.4784,.0952,-2.452,-.4506,.1866,2.452,-.8839,.3661,2.3097,-1.2832,.5315,2.0787,-1.6332,.6765,1.7678,-1.9204,.7955,1.3889,-2.1339,.8839,.9567,-2.2653,.9383,.4877,-2.3097,.9567,0,-2.2653,.9383,-.4877,-2.1339,.8839,-.9567,-1.9204,.7955,-1.3889,-1.6332,.6765,-1.7678,-1.2832,.5315,-2.0787,-.8839,.3661,-2.3097,-.4506,.1866,-2.452,-.4055,.271,2.452,-.7955,.5315,2.3097,-1.1548,.7716,2.0787,-1.4698,.9821,1.7678,-1.7284,1.1548,1.3889,-1.9204,1.2832,.9567,-2.0387,1.3622,.4877,-2.0787,1.3889,0,-2.0387,1.3622,-.4877,-1.9204,1.2832,-.9567,-1.7284,1.1548,-1.3889,-1.4698,.9821,-1.7678,-1.1548,.7716,-2.0787,-.7955,.5315,-2.3097,-.4055,.271,-2.452,-.3449,.3449,2.452,-.6765,.6765,2.3097,-.9821,.9821,2.0787,-1.25,1.25,1.7678,-1.4698,1.4698,1.3889,-1.6332,1.6332,.9567,-1.7338,1.7338,.4877,-1.7678,1.7678,0,-1.7338,1.7338,-.4877,-1.6332,1.6332,-.9567,-1.4698,1.4698,-1.3889,-1.25,1.25,-1.7678,-.9821,.9821,-2.0787,-.6765,.6765,-2.3097,-.3449,.3449,-2.452,-.271,.4055,2.452,-.5315,.7955,2.3097,-.7716,1.1548,2.0787,-.9821,1.4698,1.7678,-1.1548,1.7284,1.3889,-1.2832,1.9204,.9567,-1.3622,2.0387,.4877,-1.3889,2.0787,0,-1.3622,2.0387,-.4877,-1.2832,1.9204,-.9567,-1.1548,1.7284,-1.3889,-.9821,1.4698,-1.7678,-.7716,1.1548,-2.0787,-.5315,.7955,-2.3097,-.271,.4055,-2.452,-.1866,.4506,2.452,-.3661,.8839,2.3097,-.5315,1.2832,2.0787,-.6765,1.6332,1.7678,-.7955,1.9204,1.3889,-.8839,2.1339,.9567,-.9383,2.2653,.4877,-.9567,2.3097,0,-.9383,2.2653,-.4877,-.8839,2.1339,-.9567,-.7955,1.9204,-1.3889,-.6765,1.6332,-1.7678,-.5315,1.2832,-2.0787,-.3661,.8839,-2.3097,-.1866,.4506,-2.452,-.0952,.4784,2.452,-.1866,.9383,2.3097,-.271,1.3622,2.0787,-.3449,1.7338,1.7678,-.4055,2.0387,1.3889,-.4506,2.2653,.9567,-.4784,2.4048,.4877,-.4877,2.452,0,-.4784,2.4048,-.4877,-.4506,2.2653,-.9567,-.4055,2.0387,-1.3889,-.3449,1.7338,-1.7678,-.271,1.3622,-2.0787,-.1866,.9383,-2.3097,-.0952,.4784,-2.452,0,.4877,2.452,0,.9567,2.3097,0,1.7678,1.7678,0,2.3097,.9567,0,2.3097,-.9567,0,1.7678,-1.7678,0,1.3889,-2.0787,0,.9567,-2.3097,0,.4877,-2.452,0,2.476,.2439,0,2.476,-.2439,.1409,.7083,2.3808,.2288,1.1503,2.1942,.3079,1.548,1.9232,.3752,1.8863,1.5783,.4281,2.152,1.1728,.4645,2.3351,.7222,.483,2.4284,.2439,.483,2.4284,-.2439,.4645,2.3351,-.7222,.4281,2.152,-1.1728,.3752,1.8863,-1.5783,.3079,1.548,-1.9232,.2288,1.1503,-2.1942,.1409,.7083,-2.3808,.2392,2.4284,-.4877,.2439,2.476,0,.1355,1.3756,2.0787,.2028,2.0587,-1.3889,.2028,2.0587,1.3889,.2392,2.4284,.4877,.2764,.6672,2.3808,.4488,1.0835,2.1942,.604,1.4582,1.9232,.736,1.7768,1.5783,.8397,2.0272,1.1728,.9111,2.1996,.7222,.9475,2.2875,.2439,.9475,2.2875,-.2439,.9111,2.1996,-.7222,.8397,2.0272,-1.1728,.736,1.7768,-1.5783,.604,1.4582,-1.9232,.4488,1.0835,-2.1942,.2764,.6672,-2.3808,.1409,.4645,-2.452,.2764,.9111,-2.3097,.7222,2.3808,0,.7083,2.3351,.4877,.1409,.4645,2.452,.7083,2.3351,-.4877,.2764,.9111,2.3097,.6672,2.1996,-.9567,.4012,1.3227,2.0787,.6005,1.9796,-1.3889,.5107,1.6835,1.7678,.5107,1.6835,-1.7678,.6005,1.9796,1.3889,.4012,1.3227,-2.0787,.6672,2.1996,.9567,.4012,.6005,2.3808,.6516,.9752,2.1942,.8769,1.3123,1.9232,1.0685,1.5991,1.5783,1.219,1.8244,1.1728,1.3227,1.9796,.7222,1.3756,2.0587,.2439,1.3756,2.0587,-.2439,1.3227,1.9796,-.7222,1.219,1.8244,-1.1728,1.0685,1.5991,-1.5783,.8769,1.3123,-1.9232,.6516,.9752,-2.1942,.4012,.6005,-2.3808,.8293,1.5515,-1.7678,.9752,1.8244,-1.3889,.9752,1.8244,1.3889,.8293,1.5515,1.7678,.6516,1.219,-2.0787,1.0835,2.0272,.9567,.4488,.8397,-2.3097,1.1503,2.152,.4877,.2288,.4281,-2.452,1.1728,2.1942,0,.2288,.4281,2.452,1.1503,2.152,-.4877,.4488,.8397,2.3097,1.0835,2.0272,-.9567,.6516,1.219,2.0787,.5107,.5107,2.3808,.8293,.8293,2.1942,1.1161,1.1161,1.9232,1.3599,1.3599,1.5783,1.5515,1.5515,1.1728,1.6835,1.6835,.7222,1.7508,1.7508,.2439,1.7508,1.7508,-.2439,1.6835,1.6835,-.7222,1.5515,1.5515,-1.1728,1.3599,1.3599,-1.5783,1.1161,1.1161,-1.9232,.8293,.8293,-2.1942,.5107,.5107,-2.3808,.3079,.3752,2.452,.3079,.3752,-2.452,1.548,1.8863,-.4877,1.5783,1.9232,0,.604,.736,2.3097,1.4582,1.7768,-.9567,.8769,1.0685,2.0787,1.3123,1.5991,-1.3889,1.1161,1.3599,1.7678,1.1161,1.3599,-1.7678,1.3123,1.5991,1.3889,.8769,1.0685,-2.0787,1.4582,1.7768,.9567,.604,.736,-2.3097,1.548,1.8863,.4877,.6005,.4012,2.3808,.9752,.6516,2.1942,1.3123,.8769,1.9232,1.5991,1.0685,1.5783,1.8244,1.219,1.1728,1.9796,1.3227,.7222,2.0587,1.3756,.2439,2.0587,1.3756,-.2439,1.9796,1.3227,-.7222,1.8244,1.219,-1.1728,1.5991,1.0685,-1.5783,1.3123,.8769,-1.9232,.9752,.6516,-2.1942,.6005,.4012,-2.3808,1.5991,1.3123,1.3889,1.3599,1.1161,1.7678,1.0685,.8769,-2.0787,1.3599,1.1161,-1.7678,1.7768,1.4582,.9567,.736,.604,-2.3097,1.8863,1.548,.4877,.3752,.3079,-2.452,1.9232,1.5783,0,.3752,.3079,2.452,1.8863,1.548,-.4877,.736,.604,2.3097,1.7768,1.4582,-.9567,1.0685,.8769,2.0787,1.5991,1.3123,-1.3889,.6672,.2764,2.3808,1.0835,.4488,2.1942,1.4582,.604,1.9232,1.7768,.736,1.5783,2.0272,.8397,1.1728,2.1996,.9111,.7222,2.2875,.9475,.2439,2.2875,.9475,-.2439,2.1996,.9111,-.7222,2.0272,.8397,-1.1728,1.7768,.736,-1.5783,1.4582,.604,-1.9232,1.0835,.4488,-2.1942,.6672,.2764,-2.3808,2.152,1.1503,-.4877,2.1942,1.1728,0,.8397,.4488,2.3097,.4281,.2288,2.452,2.0272,1.0835,-.9567,1.219,.6516,2.0787,1.8244,.9752,-1.3889,1.5515,.8293,1.7678,1.5515,.8293,-1.7678,1.8244,.9752,1.3889,1.219,.6516,-2.0787,2.0272,1.0835,.9567,.8397,.4488,-2.3097,2.152,1.1503,.4877,.4281,.2288,-2.452,.7083,.1409,2.3808,1.1503,.2288,2.1942,1.548,.3079,1.9232,1.8863,.3752,1.5783,2.152,.4281,1.1728,2.3351,.4645,.7222,2.4284,.483,.2439,2.4284,.483,-.2439,2.3351,.4645,-.7222,2.152,.4281,-1.1728,1.8863,.3752,-1.5783,1.548,.3079,-1.9232,1.1503,.2288,-2.1942,.7083,.1409,-2.3808,1.3227,.4012,-2.0787,1.6835,.5107,-1.7678,2.1996,.6672,.9567,1.9796,.6005,1.3889,.9111,.2764,-2.3097,2.3351,.7083,.4877,.4645,.1409,-2.452,2.3808,.7222,0,.4645,.1409,2.452,2.3351,.7083,-.4877,.9111,.2764,2.3097,2.1996,.6672,-.9567,1.3227,.4012,2.0787,1.9796,.6005,-1.3889,1.6835,.5107,1.7678,.7222,-0,2.3808,1.1728,-0,2.1942,1.5783,-0,1.9232,1.9232,-0,1.5783,2.1942,-0,1.1728,2.3808,-0,.7222,2.476,-0,.2439,2.476,-0,-.2439,2.3808,-0,-.7222,2.1942,-0,-1.1728,1.9232,-0,-1.5783,1.5783,-0,-1.9232,1.1728,-0,-2.1942,.7222,-0,-2.3808,.9475,.0933,2.3097,.483,.0476,2.452,2.2875,.2253,-.9567,2.4284,.2392,-.4877,1.3756,.1355,2.0787,2.0587,.2028,-1.3889,1.7508,.1724,1.7678,1.7508,.1724,-1.7678,2.0587,.2028,1.3889,1.3756,.1355,-2.0787,2.2875,.2253,.9567,.9475,.0933,-2.3097,2.4284,.2392,.4877,.483,.0476,-2.452,2.476,.2439,0,.7083,-.1409,2.3808,1.1503,-.2288,2.1942,1.548,-.3079,1.9232,1.8863,-.3752,1.5783,2.152,-.4281,1.1728,2.3351,-.4645,.7222,2.4284,-.483,.2439,2.4284,-.483,-.2439,2.3351,-.4645,-.7222,2.152,-.4281,-1.1728,1.8863,-.3752,-1.5783,1.548,-.3079,-1.9232,1.1503,-.2288,-2.1942,.7083,-.1409,-2.3808,2.2875,-.2253,.9567,2.0587,-.2028,1.3889,.9475,-.0933,-2.3097,1.3756,-.1355,-2.0787,2.4284,-.2392,.4877,.483,-.0476,-2.452,2.476,-.2439,0,.483,-.0476,2.452,2.4284,-.2392,-.4877,.9475,-.0933,2.3097,2.2875,-.2253,-.9567,1.3756,-.1355,2.0787,2.0587,-.2028,-1.3889,1.7508,-.1724,1.7678,1.7508,-.1724,-1.7678,.6672,-.2764,2.3808,1.0835,-.4488,2.1942,1.4582,-.604,1.9232,1.7768,-.736,1.5783,2.0272,-.8397,1.1728,2.1996,-.9111,.7222,2.2875,-.9475,.2439,2.2875,-.9475,-.2439,2.1996,-.9111,-.7222,2.0272,-.8397,-1.1728,1.7768,-.736,-1.5783,1.4582,-.604,-1.9232,1.0835,-.4488,-2.1942,.6672,-.2764,-2.3808,2.1996,-.6672,-.9567,2.3351,-.7083,-.4877,1.3227,-.4012,2.0787,.9111,-.2764,2.3097,1.9796,-.6005,-1.3889,1.6835,-.5107,1.7678,1.6835,-.5107,-1.7678,1.9796,-.6005,1.3889,1.3227,-.4012,-2.0787,2.1996,-.6672,.9567,.9111,-.2764,-2.3097,2.3351,-.7083,.4877,.4645,-.1409,-2.452,2.3808,-.7222,0,.4645,-.1409,2.452,.6005,-.4012,2.3808,.9752,-.6516,2.1942,1.3123,-.8769,1.9232,1.5991,-1.0685,1.5783,1.8244,-1.219,1.1728,1.9796,-1.3227,.7222,2.0587,-1.3756,.2439,2.0587,-1.3756,-.2439,1.9796,-1.3227,-.7222,1.8244,-1.219,-1.1728,1.5991,-1.0685,-1.5783,1.3123,-.8769,-1.9232,.9752,-.6516,-2.1942,.6005,-.4012,-2.3808,.8397,-.4488,-2.3097,1.219,-.6516,-2.0787,2.152,-1.1503,.4877,2.0272,-1.0835,.9567,.4281,-.2288,-2.452,2.1942,-1.1728,0,.4281,-.2288,2.452,2.152,-1.1503,-.4877,.8397,-.4488,2.3097,2.0272,-1.0835,-.9567,1.219,-.6516,2.0787,1.8244,-.9752,-1.3889,1.5515,-.8293,1.7678,1.5515,-.8293,-1.7678,1.8244,-.9752,1.3889,.5107,-.5107,2.3808,.8293,-.8293,2.1942,1.1161,-1.1161,1.9232,1.3599,-1.3599,1.5783,1.5515,-1.5515,1.1728,1.6835,-1.6835,.7222,1.7508,-1.7508,.2439,1.7508,-1.7508,-.2439,1.6835,-1.6835,-.7222,1.5515,-1.5515,-1.1728,1.3599,-1.3599,-1.5783,1.1161,-1.1161,-1.9232,.8293,-.8293,-2.1942,.5107,-.5107,-2.3808,1.5991,-1.3123,-1.3889,1.7768,-1.4582,-.9567,1.3599,-1.1161,1.7678,1.0685,-.8769,2.0787,1.3599,-1.1161,-1.7678,1.5991,-1.3123,1.3889,1.0685,-.8769,-2.0787,1.7768,-1.4582,.9567,.736,-.604,-2.3097,1.8863,-1.548,.4877,.3752,-.3079,-2.452,1.9232,-1.5783,0,.3752,-.3079,2.452,1.8863,-1.548,-.4877,.736,-.604,2.3097,.4012,-.6005,2.3808,.6516,-.9752,2.1942,.8769,-1.3123,1.9232,1.0685,-1.5991,1.5783,1.219,-1.8244,1.1728,1.3227,-1.9796,.7222,1.3756,-2.0587,.2439,1.3756,-2.0587,-.2439,1.3227,-1.9796,-.7222,1.219,-1.8244,-1.1728,1.0685,-1.5991,-1.5783,.8769,-1.3123,-1.9232,.6516,-.9752,-2.1942,.4012,-.6005,-2.3808,.3079,-.3752,-2.452,.604,-.736,-2.3097,1.5783,-1.9232,0,1.548,-1.8863,.4877,.3079,-.3752,2.452,1.548,-1.8863,-.4877,.604,-.736,2.3097,1.4582,-1.7768,-.9567,.8769,-1.0685,2.0787,1.3123,-1.5991,-1.3889,1.1161,-1.3599,1.7678,1.1161,-1.3599,-1.7678,1.3123,-1.5991,1.3889,.8769,-1.0685,-2.0787,1.4582,-1.7768,.9567,.2764,-.6672,2.3808,.4488,-1.0835,2.1942,.604,-1.4582,1.9232,.736,-1.7768,1.5783,.8397,-2.0272,1.1728,.9111,-2.1996,.7222,.9475,-2.2875,.2439,.9475,-2.2875,-.2439,.9111,-2.1996,-.7222,.8397,-2.0272,-1.1728,.736,-1.7768,-1.5783,.604,-1.4582,-1.9232,.4488,-1.0835,-2.1942,.2764,-.6672,-2.3808,.8293,-1.5515,1.7678,.6516,-1.219,2.0787,.8293,-1.5515,-1.7678,.9752,-1.8244,-1.3889,.9752,-1.8244,1.3889,.6516,-1.219,-2.0787,1.0835,-2.0272,.9567,.4488,-.8397,-2.3097,1.1503,-2.152,.4877,.2288,-.4281,-2.452,1.1728,-2.1942,0,.2288,-.4281,2.452,1.1503,-2.152,-.4877,.4488,-.8397,2.3097,1.0835,-2.0272,-.9567,.1409,-.7083,2.3808,.2288,-1.1503,2.1942,.3079,-1.548,1.9232,.3752,-1.8863,1.5783,.4281,-2.152,1.1728,.4645,-2.3351,.7222,.483,-2.4284,.2439,.483,-2.4284,-.2439,.4645,-2.3351,-.7222,.4281,-2.152,-1.1728,.3752,-1.8863,-1.5783,.3079,-1.548,-1.9232,.2288,-1.1503,-2.1942,.1409,-.7083,-2.3808,.7222,-2.3808,0,.7083,-2.3351,.4877,.1409,-.4645,2.452,.1409,-.4645,-2.452,.7083,-2.3351,-.4877,.2764,-.9111,2.3097,.6672,-2.1996,-.9567,.4012,-1.3227,2.0787,.6005,-1.9796,-1.3889,.5107,-1.6835,1.7678,.5107,-1.6835,-1.7678,.6005,-1.9796,1.3889,.4012,-1.3227,-2.0787,.6672,-2.1996,.9567,.2764,-.9111,-2.3097,-0,-.7222,2.3808,-0,-1.1728,2.1942,-0,-1.5783,1.9232,-0,-1.9232,1.5783,-0,-2.1942,1.1728,-0,-2.3808,.7222,-0,-2.476,.2439,-0,-2.476,-.2439,-0,-2.3808,-.7222,-0,-2.1942,-1.1728,-0,-1.9232,-1.5783,-0,-1.5783,-1.9232,-0,-1.1728,-2.1942,-0,-.7222,-2.3808,.1724,-1.7508,-1.7678,.2028,-2.0587,-1.3889,.2028,-2.0587,1.3889,.1724,-1.7508,1.7678,.1355,-1.3756,-2.0787,.2253,-2.2875,.9567,.0933,-.9475,-2.3097,.2392,-2.4284,.4877,.0476,-.483,-2.452,.2439,-2.476,0,.0476,-.483,2.452,.2392,-2.4284,-.4877,.0933,-.9475,2.3097,.2253,-2.2875,-.9567,.1355,-1.3756,2.0787,-.1409,-.7083,2.3808,-.2288,-1.1503,2.1942,-.3079,-1.548,1.9232,-.3752,-1.8863,1.5783,-.4281,-2.152,1.1728,-.4645,-2.3351,.7222,-.483,-2.4284,.2439,-.483,-2.4284,-.2439,-.4645,-2.3351,-.7222,-.4281,-2.152,-1.1728,-.3752,-1.8863,-1.5783,-.3079,-1.548,-1.9232,-.2288,-1.1503,-2.1942,-.1409,-.7083,-2.3808,-.0476,-.483,2.452,-.0476,-.483,-2.452,-.2392,-2.4284,-.4877,-.2439,-2.476,0,-.0933,-.9475,2.3097,-.2253,-2.2875,-.9567,-.1355,-1.3756,2.0787,-.2028,-2.0587,-1.3889,-.1724,-1.7508,1.7678,-.1724,-1.7508,-1.7678,-.2028,-2.0587,1.3889,-.1355,-1.3756,-2.0787,-.2253,-2.2875,.9567,-.0933,-.9475,-2.3097,-.2392,-2.4284,.4877,-.2764,-.6672,2.3808,-.4488,-1.0835,2.1942,-.604,-1.4582,1.9232,-.736,-1.7768,1.5783,-.8397,-2.0272,1.1728,-.9111,-2.1996,.7222,-.9475,-2.2875,.2439,-.9475,-2.2875,-.2439,-.9111,-2.1996,-.7222,-.8397,-2.0272,-1.1728,-.736,-1.7768,-1.5783,-.604,-1.4582,-1.9232,-.4488,-1.0835,-2.1942,-.2764,-.6672,-2.3808,-.6005,-1.9796,1.3889,-.5107,-1.6835,1.7678,-.4012,-1.3227,-2.0787,-.5107,-1.6835,-1.7678,-.6672,-2.1996,.9567,-.2764,-.9111,-2.3097,-.7083,-2.3351,.4877,-.1409,-.4645,-2.452,-.7222,-2.3808,0,-.1409,-.4645,2.452,-.7083,-2.3351,-.4877,-.2764,-.9111,2.3097,-.6672,-2.1996,-.9567,-.4012,-1.3227,2.0787,-.6005,-1.9796,-1.3889,-.4012,-.6005,2.3808,-.6516,-.9752,2.1942,-.8769,-1.3123,1.9232,-1.0685,-1.5991,1.5783,-1.219,-1.8244,1.1728,-1.3227,-1.9796,.7222,-1.3756,-2.0587,.2439,-1.3756,-2.0587,-.2439,-1.3227,-1.9796,-.7222,-1.219,-1.8244,-1.1728,-1.0685,-1.5991,-1.5783,-.8769,-1.3123,-1.9232,-.6516,-.9752,-2.1942,-.4012,-.6005,-2.3808,-1.1503,-2.152,-.4877,-1.1728,-2.1942,0,-.4488,-.8397,2.3097,-.2288,-.4281,2.452,-1.0835,-2.0272,-.9567,-.6516,-1.219,2.0787,-.9752,-1.8244,-1.3889,-.8293,-1.5515,1.7678,-.8293,-1.5515,-1.7678,-.9752,-1.8244,1.3889,-.6516,-1.219,-2.0787,-1.0835,-2.0272,.9567,-.4488,-.8397,-2.3097,-1.1503,-2.152,.4877,-.2288,-.4281,-2.452,-.5107,-.5107,2.3808,-.8293,-.8293,2.1942,-1.1161,-1.1161,1.9232,-1.3599,-1.3599,1.5783,-1.5515,-1.5515,1.1728,-1.6835,-1.6835,.7222,-1.7508,-1.7508,.2439,-1.7508,-1.7508,-.2439,-1.6835,-1.6835,-.7222,-1.5515,-1.5515,-1.1728,-1.3599,-1.3599,-1.5783,-1.1161,-1.1161,-1.9232,-.8293,-.8293,-2.1942,-.5107,-.5107,-2.3808,-.8769,-1.0685,-2.0787,-1.1161,-1.3599,-1.7678,-1.4582,-1.7768,.9567,-1.3123,-1.5991,1.3889,-.604,-.736,-2.3097,-1.548,-1.8863,.4877,-.3079,-.3752,-2.452,-1.5783,-1.9232,0,-.3079,-.3752,2.452,-1.548,-1.8863,-.4877,-.604,-.736,2.3097,-1.4582,-1.7768,-.9567,-.8769,-1.0685,2.0787,-1.3123,-1.5991,-1.3889,-1.1161,-1.3599,1.7678,-.6005,-.4012,2.3808,-.9752,-.6516,2.1942,-1.3123,-.8769,1.9232,-1.5991,-1.0685,1.5783,-1.8244,-1.219,1.1728,-1.9796,-1.3227,.7222,-2.0587,-1.3756,.2439,-2.0587,-1.3756,-.2439,-1.9796,-1.3227,-.7222,-1.8244,-1.219,-1.1728,-1.5991,-1.0685,-1.5783,-1.3123,-.8769,-1.9232,-.9752,-.6516,-2.1942,-.6005,-.4012,-2.3808,-1.7768,-1.4582,-.9567,-1.8863,-1.548,-.4877,-1.0685,-.8769,2.0787,-.736,-.604,2.3097,-1.5991,-1.3123,-1.3889,-1.3599,-1.1161,1.7678,-1.3599,-1.1161,-1.7678,-1.5991,-1.3123,1.3889,-1.0685,-.8769,-2.0787,-1.7768,-1.4582,.9567,-.736,-.604,-2.3097,-1.8863,-1.548,.4877,-.3752,-.3079,-2.452,-1.9232,-1.5783,0,-.3752,-.3079,2.452,-.6672,-.2764,2.3808,-1.0835,-.4488,2.1942,-1.4582,-.604,1.9232,-1.7768,-.736,1.5783,-2.0272,-.8397,1.1728,-2.1996,-.9111,.7222,-2.2875,-.9475,.2439,-2.2875,-.9475,-.2439,-2.1996,-.9111,-.7222,-2.0272,-.8397,-1.1728,-1.7768,-.736,-1.5783,-1.4582,-.604,-1.9232,-1.0835,-.4488,-2.1942,-.6672,-.2764,-2.3808,-.8397,-.4488,-2.3097,-1.219,-.6516,-2.0787,-2.152,-1.1503,.4877,-2.0272,-1.0835,.9567,-.4281,-.2288,-2.452,-2.1942,-1.1728,0,-.4281,-.2288,2.452,-2.152,-1.1503,-.4877,-.8397,-.4488,2.3097,-2.0272,-1.0835,-.9567,-1.219,-.6516,2.0787,-1.8244,-.9752,-1.3889,-1.5515,-.8293,1.7678,-1.5515,-.8293,-1.7678,-1.8244,-.9752,1.3889,-.7083,-.1409,2.3808,-1.1503,-.2288,2.1942,-1.548,-.3079,1.9232,-1.8863,-.3752,1.5783,-2.152,-.4281,1.1728,-2.3351,-.4645,.7222,-2.4284,-.483,.2439,-2.4284,-.483,-.2439,-2.3351,-.4645,-.7222,-2.152,-.4281,-1.1728,-1.8863,-.3752,-1.5783,-1.548,-.3079,-1.9232,-1.1503,-.2288,-2.1942,-.7083,-.1409,-2.3808,-1.3227,-.4012,2.0787,-.9111,-.2764,2.3097,-1.9796,-.6005,-1.3889,-2.1996,-.6672,-.9567,-1.6835,-.5107,1.7678,-1.6835,-.5107,-1.7678,-1.9796,-.6005,1.3889,-1.3227,-.4012,-2.0787,-2.1996,-.6672,.9567,-.9111,-.2764,-2.3097,-2.3351,-.7083,.4877,-.4645,-.1409,-2.452,-2.3808,-.7222,0,-.4645,-.1409,2.452,-2.3351,-.7083,-.4877,-.7222,0,2.3808,-1.1728,0,2.1942,-1.5783,0,1.9232,-1.9232,0,1.5783,-2.1942,0,1.1728,-2.3808,0,.7222,-2.476,0,.2439,-2.476,0,-.2439,-2.3808,0,-.7222,-2.1942,0,-1.1728,-1.9232,0,-1.5783,-1.5783,0,-1.9232,-1.1728,0,-2.1942,-.7222,0,-2.3808,-2.4284,-.2392,.4877,-2.2875,-.2253,.9567,-.483,-.0476,-2.452,-.9475,-.0933,-2.3097,-2.476,-.2439,0,-.483,-.0476,2.452,-2.4284,-.2392,-.4877,-.9475,-.0933,2.3097,-2.2875,-.2253,-.9567,-1.3756,-.1355,2.0787,-2.0587,-.2028,-1.3889,-1.7508,-.1724,1.7678,-1.7508,-.1724,-1.7678,-2.0587,-.2028,1.3889,-1.3756,-.1355,-2.0787,-.7083,.1409,2.3808,-1.1503,.2288,2.1942,-1.548,.3079,1.9232,-1.8863,.3752,1.5783,-2.152,.4281,1.1728,-2.3351,.4645,.7222,-2.4284,.483,.2439,-2.4284,.483,-.2439,-2.3351,.4645,-.7222,-2.152,.4281,-1.1728,-1.8863,.3752,-1.5783,-1.548,.3079,-1.9232,-1.1503,.2288,-2.1942,-.7083,.1409,-2.3808,-2.0587,.2028,-1.3889,-2.2875,.2253,-.9567,-1.7508,.1724,1.7678,-1.3756,.1355,2.0787,-1.7508,.1724,-1.7678,-2.0587,.2028,1.3889,-1.3756,.1355,-2.0787,-2.2875,.2253,.9567,-.9475,.0933,-2.3097,-2.4284,.2392,.4877,-.483,.0476,-2.452,-2.476,.2439,0,-.483,.0476,2.452,-2.4284,.2392,-.4877,-.9475,.0933,2.3097,-.6672,.2764,2.3808,-1.0835,.4488,2.1942,-1.4582,.604,1.9232,-1.7768,.736,1.5783,-2.0272,.8397,1.1728,-2.1996,.9111,.7222,-2.2875,.9475,.2439,-2.2875,.9475,-.2439,-2.1996,.9111,-.7222,-2.0272,.8397,-1.1728,-1.7768,.736,-1.5783,-1.4582,.604,-1.9232,-1.0835,.4488,-2.1942,-.6672,.2764,-2.3808,-.4645,.1409,-2.452,-.9111,.2764,-2.3097,-2.3808,.7222,0,-2.3351,.7083,.4877,-.4645,.1409,2.452,-2.3351,.7083,-.4877,-.9111,.2764,2.3097,-2.1996,.6672,-.9567,-1.3227,.4012,2.0787,-1.9796,.6005,-1.3889,-1.6835,.5107,1.7678,-1.6835,.5107,-1.7678,-1.9796,.6005,1.3889,-1.3227,.4012,-2.0787,-2.1996,.6672,.9567,-.6005,.4012,2.3808,-.9752,.6516,2.1942,-1.3123,.8769,1.9232,-1.5991,1.0685,1.5783,-1.8244,1.219,1.1728,-1.9796,1.3227,.7222,-2.0587,1.3756,.2439,-2.0587,1.3756,-.2439,-1.9796,1.3227,-.7222,-1.8244,1.219,-1.1728,-1.5991,1.0685,-1.5783,-1.3123,.8769,-1.9232,-.9752,.6516,-2.1942,-.6005,.4012,-2.3808,-1.5515,.8293,1.7678,-1.219,.6516,2.0787,-1.5515,.8293,-1.7678,-1.8244,.9752,-1.3889,-1.8244,.9752,1.3889,-1.219,.6516,-2.0787,-2.0272,1.0835,.9567,-.8397,.4488,-2.3097,-2.152,1.1503,.4877,-.4281,.2288,-2.452,-2.1942,1.1728,0,-.4281,.2288,2.452,-2.152,1.1503,-.4877,-.8397,.4488,2.3097,-2.0272,1.0835,-.9567,-.5107,.5107,2.3808,-.8293,.8293,2.1942,-1.1161,1.1161,1.9232,-1.3599,1.3599,1.5783,-1.5515,1.5515,1.1728,-1.6835,1.6835,.7222,-1.7508,1.7508,.2439,-1.7508,1.7508,-.2439,-1.6835,1.6835,-.7222,-1.5515,1.5515,-1.1728,-1.3599,1.3599,-1.5783,-1.1161,1.1161,-1.9232,-.8293,.8293,-2.1942,-.5107,.5107,-2.3808,-1.9232,1.5783,0,-1.8863,1.548,.4877,-.3752,.3079,2.452,-.3752,.3079,-2.452,-1.8863,1.548,-.4877,-.736,.604,2.3097,-1.7768,1.4582,-.9567,-1.0685,.8769,2.0787,-1.5991,1.3123,-1.3889,-1.3599,1.1161,1.7678,-1.3599,1.1161,-1.7678,-1.5991,1.3123,1.3889,-1.0685,.8769,-2.0787,-1.7768,1.4582,.9567,-.736,.604,-2.3097,-.4012,.6005,2.3808,-.6516,.9752,2.1942,-.8769,1.3123,1.9232,-1.0685,1.5991,1.5783,-1.219,1.8244,1.1728,-1.3227,1.9796,.7222,-1.3756,2.0587,.2439,-1.3756,2.0587,-.2439,-1.3227,1.9796,-.7222,-1.219,1.8244,-1.1728,-1.0685,1.5991,-1.5783,-.8769,1.3123,-1.9232,-.6516,.9752,-2.1942,-.4012,.6005,-2.3808,-1.1161,1.3599,-1.7678,-1.3123,1.5991,-1.3889,-1.3123,1.5991,1.3889,-1.1161,1.3599,1.7678,-.8769,1.0685,-2.0787,-1.4582,1.7768,.9567,-.604,.736,-2.3097,-1.548,1.8863,.4877,-.3079,.3752,-2.452,-1.5783,1.9232,0,-.3079,.3752,2.452,-1.548,1.8863,-.4877,-.604,.736,2.3097,-1.4582,1.7768,-.9567,-.8769,1.0685,2.0787,-.2764,.6672,2.3808,-.4488,1.0835,2.1942,-.604,1.4582,1.9232,-.736,1.7768,1.5783,-.8397,2.0272,1.1728,-.9111,2.1996,.7222,-.9475,2.2875,.2439,-.9475,2.2875,-.2439,-.9111,2.1996,-.7222,-.8397,2.0272,-1.1728,-.736,1.7768,-1.5783,-.604,1.4582,-1.9232,-.4488,1.0835,-2.1942,-.2764,.6672,-2.3808,-.2288,.4281,-2.452,-1.1503,2.152,-.4877,-1.1728,2.1942,0,-.4488,.8397,2.3097,-.2288,.4281,2.452,-1.0835,2.0272,-.9567,-.6516,1.219,2.0787,-.9752,1.8244,-1.3889,-.8293,1.5515,1.7678,-.8293,1.5515,-1.7678,-.9752,1.8244,1.3889,-.6516,1.219,-2.0787,-1.0835,2.0272,.9567,-.4488,.8397,-2.3097,-1.1503,2.152,.4877,-.1409,.7083,2.3808,-.2288,1.1503,2.1942,-.3079,1.548,1.9232,-.3752,1.8863,1.5783,-.4281,2.152,1.1728,-.4645,2.3351,.7222,-.483,2.4284,.2439,-.483,2.4284,-.2439,-.4645,2.3351,-.7222,-.4281,2.152,-1.1728,-.3752,1.8863,-1.5783,-.3079,1.548,-1.9232,-.2288,1.1503,-2.1942,-.1409,.7083,-2.3808,-.4012,1.3227,-2.0787,-.5107,1.6835,-1.7678,-.6672,2.1996,.9567,-.6005,1.9796,1.3889,-.2764,.9111,-2.3097,-.7083,2.3351,.4877,-.1409,.4645,-2.452,-.7222,2.3808,0,-.1409,.4645,2.452,-.7083,2.3351,-.4877,-.2764,.9111,2.3097,-.6672,2.1996,-.9567,-.4012,1.3227,2.0787,-.6005,1.9796,-1.3889,-.5107,1.6835,1.7678,0,.7222,2.3808,0,1.5783,-1.9232,0,1.1728,-2.1942,0,.7222,-2.3808,-.0933,.9475,2.3097,-.0476,.483,2.452,-.2253,2.2875,-.9567,-.1724,1.7508,1.7678,-.1724,1.7508,-1.7678,-.1355,1.3756,-2.0787,-.2253,2.2875,.9567,-.0933,.9475,-2.3097,-.0476,.483,-2.452,0,.2439,2.476,0,1.1728,2.1942,0,1.5783,1.9232,0,1.9232,1.5783,0,2.1942,1.1728,0,2.3808,.7222,0,2.3808,-.7222,0,2.1942,-1.1728,0,1.9232,-1.5783,0,.2439,-2.476,.0476,.2392,2.476,.0476,.2392,-2.476,.0933,.9475,2.3097,.0476,.483,2.452,.2253,2.2875,-.9567,.1724,1.7508,1.7678,.1724,1.7508,-1.7678,.1355,1.3756,-2.0787,.2253,2.2875,.9567,.0933,.9475,-2.3097,.0476,.483,-2.452,.0933,.2253,2.476,.0933,.2253,-2.476,.1355,.2028,2.476,.1355,.2028,-2.476,.1724,.1724,2.476,.1724,.1724,-2.476,.2028,.1355,2.476,.2028,.1355,-2.476,.2253,.0933,2.476,.2253,.0933,-2.476,.2392,.0476,2.476,.2392,.0476,-2.476,.2439,-0,2.476,.2439,-0,-2.476,.2392,-.0476,2.476,.2392,-.0476,-2.476,.2253,-.0933,2.476,.2253,-.0933,-2.476,.2028,-.1355,2.476,.2028,-.1355,-2.476,.1724,-.1724,2.476,.1724,-.1724,-2.476,.1355,-.2028,2.476,.1355,-.2028,-2.476,.0933,-.2253,2.476,.0933,-.2253,-2.476,.0476,-.2392,2.476,.0476,-.2392,-2.476,-0,-.2439,2.476,-0,-.2439,-2.476,-.0476,-.2392,2.476,-.0476,-.2392,-2.476,-.0933,-.2253,2.476,-.0933,-.2253,-2.476,-.1355,-.2028,2.476,-.1355,-.2028,-2.476,-.1724,-.1724,2.476,-.1724,-.1724,-2.476,-.2028,-.1355,2.476,-.2028,-.1355,-2.476,-.2253,-.0933,2.476,-.2253,-.0933,-2.476,-.2392,-.0476,2.476,-.2392,-.0476,-2.476,-.2439,0,2.476,-.2439,0,-2.476,-.2392,.0476,2.476,-.2392,.0476,-2.476,-.2253,.0933,2.476,-.2253,.0933,-2.476,-.2028,.1355,2.476,-.2028,.1355,-2.476,-.1724,.1724,2.476,-.1724,.1724,-2.476,-.1355,.2028,2.476,-.1355,.2028,-2.476,-.0933,.2253,2.476,-.0933,.2253,-2.476,-.0476,.2392,2.476,-.0476,.2392,-2.476,-.2392,2.4284,-.4877,-.1355,1.3756,2.0787,-.2028,2.0587,-1.3889,-.2028,2.0587,1.3889,-.2392,2.4284,.4877,-.2439,2.476,0,-.2415,2.4522,-.2439,-.2415,2.4522,.2439,-.0704,.7153,-2.3808,-.2322,2.358,.7222,-.1144,1.1615,-2.1942,-.214,2.1731,1.1728,-.154,1.5632,-1.9232,-.1876,1.9047,1.5783,-.1876,1.9047,-1.5783,-.154,1.5632,1.9232,-.214,2.1731,-1.1728,-.1144,1.1615,2.1942,-.2322,2.358,-.7222,-.0704,.7153,2.3808,-.5556,1.8315,1.5783,-.5556,1.8315,-1.5783,-.456,1.5031,1.9232,-.6339,2.0896,-1.1728,-.3388,1.1169,2.1942,-.6878,2.2673,-.7222,-.2086,.6878,2.3808,-.7153,2.358,-.2439,-.7153,2.358,.2439,-.2086,.6878,-2.3808,-.6878,2.2673,.7222,-.3388,1.1169,-2.1942,-.6339,2.0896,1.1728,-.456,1.5031,-1.9232,-1.1615,2.1731,.2439,-.3388,.6339,-2.3808,-1.1169,2.0896,.7222,-.5502,1.0294,-2.1942,-1.0294,1.9258,1.1728,-.7404,1.3853,-1.9232,-.9022,1.688,1.5783,-.9022,1.688,-1.5783,-.7404,1.3853,1.9232,-1.0294,1.9258,-1.1728,-.5502,1.0294,2.1942,-1.1169,2.0896,-.7222,-.3388,.6339,2.3808,-1.1615,2.1731,-.2439,-.9965,1.2142,1.9232,-1.3853,1.688,-1.1728,-.7404,.9022,2.1942,-1.5031,1.8315,-.7222,-.456,.5556,2.3808,-1.5632,1.9047,-.2439,-1.5632,1.9047,.2439,-.456,.5556,-2.3808,-1.5031,1.8315,.7222,-.7404,.9022,-2.1942,-1.3853,1.688,1.1728,-.9965,1.2142,-1.9232,-1.2142,1.4795,1.5783,-1.2142,1.4795,-1.5783,-.5556,.456,-2.3808,-1.8315,1.5031,.7222,-.9022,.7404,-2.1942,-1.688,1.3853,1.1728,-1.2142,.9965,-1.9232,-1.4795,1.2142,1.5783,-1.4795,1.2142,-1.5783,-1.2142,.9965,1.9232,-1.688,1.3853,-1.1728,-.9022,.7404,2.1942,-1.8315,1.5031,-.7222,-.5556,.456,2.3808,-1.9047,1.5632,-.2439,-1.9047,1.5632,.2439,-1.9258,1.0294,-1.1728,-1.0294,.5502,2.1942,-2.0896,1.1169,-.7222,-.6339,.3388,2.3808,-2.1731,1.1615,-.2439,-2.1731,1.1615,.2439,-.6339,.3388,-2.3808,-2.0896,1.1169,.7222,-1.0294,.5502,-2.1942,-1.9258,1.0294,1.1728,-1.3853,.7404,-1.9232,-1.688,.9022,1.5783,-1.688,.9022,-1.5783,-1.3853,.7404,1.9232,-2.2673,.6878,.7222,-1.1169,.3388,-2.1942,-2.0896,.6339,1.1728,-1.5031,.456,-1.9232,-1.8315,.5556,1.5783,-1.8315,.5556,-1.5783,-1.5031,.456,1.9232,-2.0896,.6339,-1.1728,-1.1169,.3388,2.1942,-2.2673,.6878,-.7222,-.6878,.2086,2.3808,-2.358,.7153,-.2439,-2.358,.7153,.2439,-.6878,.2086,-2.3808,-1.1615,.1144,2.1942,-2.358,.2322,-.7222,-.7153,.0704,2.3808,-2.4522,.2415,-.2439,-2.4522,.2415,.2439,-.7153,.0704,-2.3808,-2.358,.2322,.7222,-1.1615,.1144,-2.1942,-2.1731,.214,1.1728,-1.5632,.154,-1.9232,-1.9047,.1876,1.5783,-1.9047,.1876,-1.5783,-1.5632,.154,1.9232,-2.1731,.214,-1.1728,-1.1615,-.1144,-2.1942,-2.1731,-.214,1.1728,-1.5632,-.154,-1.9232,-1.9047,-.1876,1.5783,-1.9047,-.1876,-1.5783,-1.5632,-.154,1.9232,-2.1731,-.214,-1.1728,-1.1615,-.1144,2.1942,-2.358,-.2322,-.7222,-.7153,-.0704,2.3808,-2.4522,-.2415,-.2439,-2.4522,-.2415,.2439,-.7153,-.0704,-2.3808,-2.358,-.2322,.7222,-2.2673,-.6878,-.7222,-.6878,-.2086,2.3808,-2.358,-.7153,-.2439,-2.358,-.7153,.2439,-.6878,-.2086,-2.3808,-2.2673,-.6878,.7222,-1.1169,-.3388,-2.1942,-2.0896,-.6339,1.1728,-1.5031,-.456,-1.9232,-1.8315,-.5556,1.5783,-1.8315,-.5556,-1.5783,-1.5031,-.456,1.9232,-2.0896,-.6339,-1.1728,-1.1169,-.3388,2.1942,-1.9258,-1.0294,1.1728,-1.3853,-.7404,-1.9232,-1.688,-.9022,1.5783,-1.688,-.9022,-1.5783,-1.3853,-.7404,1.9232,-1.9258,-1.0294,-1.1728,-1.0294,-.5502,2.1942,-2.0896,-1.1169,-.7222,-.6339,-.3388,2.3808,-2.1731,-1.1615,-.2439,-2.1731,-1.1615,.2439,-.6339,-.3388,-2.3808,-2.0896,-1.1169,.7222,-1.0294,-.5502,-2.1942,-.5556,-.456,2.3808,-1.9047,-1.5632,-.2439,-1.9047,-1.5632,.2439,-.5556,-.456,-2.3808,-1.8315,-1.5031,.7222,-.9022,-.7404,-2.1942,-1.688,-1.3853,1.1728,-1.2142,-.9965,-1.9232,-1.4795,-1.2142,1.5783,-1.4795,-1.2142,-1.5783,-1.2142,-.9965,1.9232,-1.688,-1.3853,-1.1728,-.9022,-.7404,2.1942,-1.8315,-1.5031,-.7222,-1.2142,-1.4795,1.5783,-1.2142,-1.4795,-1.5783,-.9965,-1.2142,1.9232,-1.3853,-1.688,-1.1728,-.7404,-.9022,2.1942,-1.5031,-1.8315,-.7222,-.456,-.5556,2.3808,-1.5632,-1.9047,-.2439,-1.5632,-1.9047,.2439,-.456,-.5556,-2.3808,-1.5031,-1.8315,.7222,-.7404,-.9022,-2.1942,-1.3853,-1.688,1.1728,-.9965,-1.2142,-1.9232,-1.1615,-2.1731,.2439,-.3388,-.6339,-2.3808,-1.1169,-2.0896,.7222,-.5502,-1.0294,-2.1942,-1.0294,-1.9258,1.1728,-.7404,-1.3853,-1.9232,-.9022,-1.688,1.5783,-.9022,-1.688,-1.5783,-.7404,-1.3853,1.9232,-1.0294,-1.9258,-1.1728,-.5502,-1.0294,2.1942,-1.1169,-2.0896,-.7222,-.3388,-.6339,2.3808,-1.1615,-2.1731,-.2439,-.5556,-1.8315,-1.5783,-.456,-1.5031,1.9232,-.6339,-2.0896,-1.1728,-.3388,-1.1169,2.1942,-.6878,-2.2673,-.7222,-.2086,-.6878,2.3808,-.7153,-2.358,-.2439,-.7153,-2.358,.2439,-.2086,-.6878,-2.3808,-.6878,-2.2673,.7222,-.3388,-1.1169,-2.1942,-.6339,-2.0896,1.1728,-.456,-1.5031,-1.9232,-.5556,-1.8315,1.5783,-.2415,-2.4522,.2439,-.0704,-.7153,-2.3808,-.2322,-2.358,.7222,-.1144,-1.1615,-2.1942,-.214,-2.1731,1.1728,-.154,-1.5632,-1.9232,-.1876,-1.9047,1.5783,-.1876,-1.9047,-1.5783,-.154,-1.5632,1.9232,-.214,-2.1731,-1.1728,-.1144,-1.1615,2.1942,-.2322,-2.358,-.7222,-.0704,-.7153,2.3808,-.2415,-2.4522,-.2439,.154,-1.5632,1.9232,.214,-2.1731,-1.1728,.1144,-1.1615,2.1942,.2322,-2.358,-.7222,.0704,-.7153,2.3808,.2415,-2.4522,-.2439,.2415,-2.4522,.2439,.0704,-.7153,-2.3808,.2322,-2.358,.7222,.1144,-1.1615,-2.1942,.214,-2.1731,1.1728,.154,-1.5632,-1.9232,.1876,-1.9047,1.5783,.1876,-1.9047,-1.5783,.2086,-.6878,-2.3808,.6878,-2.2673,.7222,.3388,-1.1169,-2.1942,.6339,-2.0896,1.1728,.456,-1.5031,-1.9232,.5556,-1.8315,1.5783,.5556,-1.8315,-1.5783,.456,-1.5031,1.9232,.6339,-2.0896,-1.1728,.3388,-1.1169,2.1942,.6878,-2.2673,-.7222,.2086,-.6878,2.3808,.7153,-2.358,-.2439,.7153,-2.358,.2439,1.0294,-1.9258,-1.1728,.5502,-1.0294,2.1942,1.1169,-2.0896,-.7222,.3388,-.6339,2.3808,1.1615,-2.1731,-.2439,1.1615,-2.1731,.2439,.3388,-.6339,-2.3808,1.1169,-2.0896,.7222,.5502,-1.0294,-2.1942,1.0294,-1.9258,1.1728,.7404,-1.3853,-1.9232,.9022,-1.688,1.5783,.9022,-1.688,-1.5783,.7404,-1.3853,1.9232,1.5031,-1.8315,.7222,.7404,-.9022,-2.1942,1.3853,-1.688,1.1728,.9965,-1.2142,-1.9232,1.2142,-1.4795,1.5783,1.2142,-1.4795,-1.5783,.9965,-1.2142,1.9232,1.3853,-1.688,-1.1728,.7404,-.9022,2.1942,1.5031,-1.8315,-.7222,.456,-.5556,2.3808,1.5632,-1.9047,-.2439,1.5632,-1.9047,.2439,.456,-.5556,-2.3808,.9022,-.7404,2.1942,1.8315,-1.5031,-.7222,.5556,-.456,2.3808,1.9047,-1.5632,-.2439,1.9047,-1.5632,.2439,.5556,-.456,-2.3808,1.8315,-1.5031,.7222,.9022,-.7404,-2.1942,1.688,-1.3853,1.1728,1.2142,-.9965,-1.9232,1.4795,-1.2142,1.5783,1.4795,-1.2142,-1.5783,1.2142,-.9965,1.9232,1.688,-1.3853,-1.1728,1.9258,-1.0294,1.1728,1.3853,-.7404,-1.9232,1.688,-.9022,1.5783,1.688,-.9022,-1.5783,1.3853,-.7404,1.9232,1.9258,-1.0294,-1.1728,1.0294,-.5502,2.1942,2.0896,-1.1169,-.7222,.6339,-.3388,2.3808,2.1731,-1.1615,-.2439,2.1731,-1.1615,.2439,.6339,-.3388,-2.3808,2.0896,-1.1169,.7222,1.0294,-.5502,-2.1942,.6878,-.2086,2.3808,2.358,-.7153,-.2439,2.358,-.7153,.2439,.6878,-.2086,-2.3808,2.2673,-.6878,.7222,1.1169,-.3388,-2.1942,2.0896,-.6339,1.1728,1.5031,-.456,-1.9232,1.8315,-.5556,1.5783,1.8315,-.5556,-1.5783,1.5031,-.456,1.9232,2.0896,-.6339,-1.1728,1.1169,-.3388,2.1942,2.2673,-.6878,-.7222,1.5632,-.154,-1.9232,1.9047,-.1876,1.5783,1.9047,-.1876,-1.5783,1.5632,-.154,1.9232,2.1731,-.214,-1.1728,1.1615,-.1144,2.1942,2.358,-.2322,-.7222,.7153,-.0704,2.3808,2.4522,-.2415,-.2439,2.4522,-.2415,.2439,.7153,-.0704,-2.3808,2.358,-.2322,.7222,1.1615,-.1144,-2.1942,2.1731,-.214,1.1728,2.4522,.2415,-.2439,2.4522,.2415,.2439,.7153,.0704,-2.3808,2.358,.2322,.7222,1.1615,.1144,-2.1942,2.1731,.214,1.1728,1.5632,.154,-1.9232,1.9047,.1876,1.5783,1.9047,.1876,-1.5783,1.5632,.154,1.9232,2.1731,.214,-1.1728,1.1615,.1144,2.1942,2.358,.2322,-.7222,.7153,.0704,2.3808,1.8315,.5556,1.5783,1.8315,.5556,-1.5783,1.5031,.456,1.9232,2.0896,.6339,-1.1728,1.1169,.3388,2.1942,2.2673,.6878,-.7222,.6878,.2086,2.3808,2.358,.7153,-.2439,2.358,.7153,.2439,.6878,.2086,-2.3808,2.2673,.6878,.7222,1.1169,.3388,-2.1942,2.0896,.6339,1.1728,1.5031,.456,-1.9232,2.1731,1.1615,.2439,.6339,.3388,-2.3808,2.0896,1.1169,.7222,1.0294,.5502,-2.1942,1.9258,1.0294,1.1728,1.3853,.7404,-1.9232,1.688,.9022,1.5783,1.688,.9022,-1.5783,1.3853,.7404,1.9232,1.9258,1.0294,-1.1728,1.0294,.5502,2.1942,2.0896,1.1169,-.7222,.6339,.3388,2.3808,2.1731,1.1615,-.2439,1.4795,1.2142,-1.5783,1.2142,.9965,1.9232,1.688,1.3853,-1.1728,.9022,.7404,2.1942,1.8315,1.5031,-.7222,.5556,.456,2.3808,1.9047,1.5632,-.2439,1.9047,1.5632,.2439,.5556,.456,-2.3808,1.8315,1.5031,.7222,.9022,.7404,-2.1942,1.688,1.3853,1.1728,1.2142,.9965,-1.9232,1.4795,1.2142,1.5783,1.5632,1.9047,.2439,.456,.5556,-2.3808,1.5031,1.8315,.7222,.7404,.9022,-2.1942,1.3853,1.688,1.1728,.9965,1.2142,-1.9232,1.2142,1.4795,1.5783,1.2142,1.4795,-1.5783,.9965,1.2142,1.9232,1.3853,1.688,-1.1728,.7404,.9022,2.1942,1.5031,1.8315,-.7222,.456,.5556,2.3808,1.5632,1.9047,-.2439,.7404,1.3853,1.9232,1.0294,1.9258,-1.1728,.5502,1.0294,2.1942,1.1169,2.0896,-.7222,.3388,.6339,2.3808,1.1615,2.1731,-.2439,1.1615,2.1731,.2439,.3388,.6339,-2.3808,1.1169,2.0896,.7222,.5502,1.0294,-2.1942,1.0294,1.9258,1.1728,.7404,1.3853,-1.9232,.9022,1.688,1.5783,.9022,1.688,-1.5783,.6878,2.2673,.7222,.3388,1.1169,-2.1942,.6339,2.0896,1.1728,.456,1.5031,-1.9232,.5556,1.8315,1.5783,.5556,1.8315,-1.5783,.456,1.5031,1.9232,.6339,2.0896,-1.1728,.3388,1.1169,2.1942,.6878,2.2673,-.7222,.2086,.6878,2.3808,.7153,2.358,-.2439,.7153,2.358,.2439,.2086,.6878,-2.3808,.2415,2.4522,.2439,.0704,.7153,-2.3808,.2322,2.358,.7222,.1144,1.1615,-2.1942,.214,2.1731,1.1728,.154,1.5632,-1.9232,.1876,1.9047,1.5783,.1876,1.9047,-1.5783,.154,1.5632,1.9232,.214,2.1731,-1.1728,.1144,1.1615,2.1942,.2322,2.358,-.7222,.0704,.7153,2.3808,.2415,2.4522,-.2439]};var Ku=Nh(Xu());var wt=Nh(Xu());var Nd={steps:16,pentatonic:[0,2,4,7,9],signatures:{jungla:{label:"Jungla",tempo:104,geo:{type:"lowpass",hz:900,q:.4,swellHz:.23,depth:.25,gain:.16},voices:[{id:"bajo",name:"Bajo",band:"90\u2013200 Hz",k:3,rot:0,hz:165,haptic:{hz:70,amp:.85,ms:40}},{id:"arpegio",name:"Arpegio",band:"2.3\u20134 kHz",k:5,rot:2,rootMidi:98,haptic:{hz:200,amp:.45,ms:20}},{id:"pulso",name:"Pulso",band:"5.6 kHz",k:9,rot:1,hz:5600,amHz:22,haptic:{hz:320,amp:.3,ms:12}},{id:"canto",name:"Canto",band:"500\u2013900 Hz",k:1,rot:12,hz:620,haptic:{hz:120,amp:.6,ms:150}}]},hielo:{label:"Hielo marino",tempo:52,pressure:{type:"heat",hz:55},geo:{type:"bandpass",hz:520,q:1.1,swellHz:.07,depth:.6,gain:.3},voices:[{id:"bajo",name:"Bajo",band:"60\u201390 Hz",k:2,rot:0,hz:88,haptic:{hz:60,amp:.85,ms:60}},{id:"arpegio",name:"Arpegio",band:"2.4\u20133.6 kHz",k:3,rot:5,rootMidi:99,haptic:{hz:220,amp:.4,ms:24}},{id:"pulso",name:"Pulso",band:"6.2 kHz",k:5,rot:2,hz:6200,amHz:0,haptic:{hz:340,amp:.3,ms:10}},{id:"canto",name:"Canto",band:"600\u2013800 Hz",k:1,rot:10,hz:660,haptic:{hz:110,amp:.55,ms:220}}]},gases:{label:"Gases de efecto invernadero",tempo:60,geo:{type:"lowpass",hz:480,q:.5,swellHz:.25,depth:.8,gain:.3},voices:[{id:"bajo",name:"Bajo",band:"70\u2013100 Hz",k:2,rot:0,hz:98,haptic:{hz:60,amp:.85,ms:90}},{id:"arpegio",name:"Melod\xEDa",band:"520\u2013880 Hz",k:8,rot:0,rootMidi:72,melody:[0,1,2,3,4,3,1,0],haptic:{hz:150,amp:.45,ms:30}},{id:"pulso",name:"Pulso",band:"5 kHz",k:7,rot:1,hz:5e3,amHz:0,haptic:{hz:310,amp:.28,ms:10}},{id:"canto",name:"Canto",band:"390\u2013590 Hz",k:1,rot:12,hz:392,haptic:{hz:100,amp:.6,ms:240}}]}},presets:{jungla:{reference:{year:0,value:0,vital:{vit:95,div:100,est:95,pre:5,fever:0},masks:{bajo:2113,arpegio:37444,pulso:22187,canto:4096},scaleSize:5,jitterMs:4,detuneCents:2,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},label:"Jungla",signature:"jungla",unit:"km\xB2 talados ese a\xF1o",source:"INPE PRODES, Amazonia Legal",tempo:104,years:[{year:1988,value:21050,vital:{vit:92.7,div:97.9,est:55.8,pre:63,fever:0},masks:{bajo:2113,arpegio:18722,pulso:22187,canto:512},scaleSize:5,jitterMs:31,detuneCents:18,bioCutoffHz:4121,reverbWet:.176,anthroGain:.218,velocity:.964},{year:1989,value:17770,vital:{vit:90.8,div:96.2,est:61.4,pre:53.9,fever:0},masks:{bajo:2113,arpegio:37440,pulso:21675,canto:1024},scaleSize:5,jitterMs:27,detuneCents:15,bioCutoffHz:4809,reverbWet:.2,anthroGain:.16,velocity:.954},{year:1990,value:13730,vital:{vit:89.3,div:94.8,est:68.4,pre:42.8,fever:0},masks:{bajo:2113,arpegio:37440,pulso:21675,canto:4096},scaleSize:5,jitterMs:22,detuneCents:13,bioCutoffHz:5806,reverbWet:.229,anthroGain:.101,velocity:.947},{year:1991,value:11030,vital:{vit:88.1,div:93.7,est:73,pre:35.4,fever:0},masks:{bajo:2113,arpegio:37440,pulso:21675,canto:4096},scaleSize:5,jitterMs:19,detuneCents:11,bioCutoffHz:6582,reverbWet:.248,anthroGain:.069,velocity:.94},{year:1992,value:13786,vital:{vit:86.6,div:92.4,est:68.3,pre:43,fever:0},masks:{bajo:2113,arpegio:37440,pulso:21675,canto:4096},scaleSize:5,jitterMs:22,detuneCents:13,bioCutoffHz:5786,reverbWet:.228,anthroGain:.102,velocity:.933},{year:1993,value:14896,vital:{vit:85,div:90.9,est:66.4,pre:46,fever:0},masks:{bajo:2113,arpegio:37440,pulso:21675,canto:2048},scaleSize:5,jitterMs:24,detuneCents:13,bioCutoffHz:5499,reverbWet:.22,anthroGain:.116,velocity:.925},{year:1994,value:14896,vital:{vit:83.4,div:89.4,est:66.4,pre:46,fever:0},masks:{bajo:2113,arpegio:37440,pulso:21675,canto:2048},scaleSize:5,jitterMs:24,detuneCents:13,bioCutoffHz:5499,reverbWet:.22,anthroGain:.116,velocity:.917},{year:1995,value:29059,vital:{vit:80.2,div:86.5,est:42,pre:85,fever:0},masks:{bajo:2113,arpegio:18722,pulso:43348,canto:0},scaleSize:5,jitterMs:41,detuneCents:23,bioCutoffHz:2838,reverbWet:.119,anthroGain:.397,velocity:.901},{year:1996,value:18161,vital:{vit:78.2,div:84.8,est:60.8,pre:55,fever:0},masks:{bajo:2113,arpegio:37440,pulso:21674,canto:0},scaleSize:5,jitterMs:27,detuneCents:16,bioCutoffHz:4720,reverbWet:.197,anthroGain:.166,velocity:.891},{year:1997,value:13227,vital:{vit:76.8,div:83.4,est:69.2,pre:41.4,fever:0},masks:{bajo:2113,arpegio:37440,pulso:21674,canto:0},scaleSize:5,jitterMs:22,detuneCents:12,bioCutoffHz:5945,reverbWet:.232,anthroGain:.094,velocity:.884},{year:1998,value:17383,vital:{vit:74.9,div:81.7,est:62.1,pre:52.9,fever:0},masks:{bajo:2113,arpegio:37440,pulso:21674,canto:0},scaleSize:4,jitterMs:27,detuneCents:15,bioCutoffHz:4891,reverbWet:.202,anthroGain:.154,velocity:.875},{year:1999,value:17259,vital:{vit:73,div:80,est:62.3,pre:52.5,fever:0},masks:{bajo:2113,arpegio:37440,pulso:21674,canto:0},scaleSize:4,jitterMs:26,detuneCents:15,bioCutoffHz:4925,reverbWet:.204,anthroGain:.152,velocity:.865},{year:2e3,value:18226,vital:{vit:71,div:78.2,est:60.6,pre:55.2,fever:0},masks:{bajo:2049,arpegio:37440,pulso:21674,canto:0},scaleSize:4,jitterMs:28,detuneCents:16,bioCutoffHz:4704,reverbWet:.196,anthroGain:.168,velocity:.855},{year:2001,value:18165,vital:{vit:69.1,div:76.4,est:60.7,pre:55,fever:0},masks:{bajo:2049,arpegio:4672,pulso:21674,canto:0},scaleSize:4,jitterMs:28,detuneCents:16,bioCutoffHz:4720,reverbWet:.197,anthroGain:.166,velocity:.845},{year:2002,value:21651,vital:{vit:66.7,div:74.3,est:54.7,pre:64.6,fever:0},masks:{bajo:2049,arpegio:18722,pulso:21674,canto:0},scaleSize:4,jitterMs:32,detuneCents:18,bioCutoffHz:4011,reverbWet:.172,anthroGain:.23,velocity:.834},{year:2003,value:25396,vital:{vit:64,div:71.8,est:48.3,pre:74.9,fever:0},masks:{bajo:2049,arpegio:18722,pulso:21674,canto:0},scaleSize:4,jitterMs:36,detuneCents:21,bioCutoffHz:3368,reverbWet:.145,anthroGain:.309,velocity:.82},{year:2004,value:27772,vital:{vit:60.9,div:69,est:44.2,pre:81.5,fever:0},masks:{bajo:2049,arpegio:2338,pulso:43348,canto:0},scaleSize:4,jitterMs:39,detuneCents:22,bioCutoffHz:3011,reverbWet:.128,anthroGain:.365,velocity:.805},{year:2005,value:19014,vital:{vit:58.9,div:67.2,est:59.3,pre:57.3,fever:0},masks:{bajo:2049,arpegio:4672,pulso:21674,canto:0},scaleSize:4,jitterMs:28,detuneCents:16,bioCutoffHz:4540,reverbWet:.191,anthroGain:.181,velocity:.795},{year:2006,value:14286,vital:{vit:57.3,div:65.8,est:67.4,pre:44.3,fever:0},masks:{bajo:2049,arpegio:4672,pulso:21674,canto:0},scaleSize:4,jitterMs:23,detuneCents:13,bioCutoffHz:5660,reverbWet:.225,anthroGain:.108,velocity:.787},{year:2007,value:11651,vital:{vit:56.1,div:64.6,est:72,pre:37.1,fever:0},masks:{bajo:2049,arpegio:4672,pulso:21674,canto:0},scaleSize:4,jitterMs:20,detuneCents:11,bioCutoffHz:6395,reverbWet:.244,anthroGain:.076,velocity:.781},{year:2008,value:12911,vital:{vit:54.7,div:63.3,est:69.8,pre:40.5,fever:0},masks:{bajo:2048,arpegio:4672,pulso:21674,canto:0},scaleSize:4,jitterMs:21,detuneCents:12,bioCutoffHz:6037,reverbWet:.235,anthroGain:.09,velocity:.774},{year:2009,value:7464,vital:{vit:53.9,div:62.6,est:79.2,pre:25.5,fever:0},masks:{bajo:2048,arpegio:4672,pulso:21674,canto:0},scaleSize:4,jitterMs:15,detuneCents:8,bioCutoffHz:7786,reverbWet:.274,anthroGain:.036,velocity:.77},{year:2010,value:7e3,vital:{vit:53.1,div:61.9,est:80,pre:24.3,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:14,detuneCents:8,bioCutoffHz:7946,reverbWet:.277,anthroGain:.032,velocity:.766},{year:2011,value:6418,vital:{vit:52.4,div:61.3,est:81,pre:22.7,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:13,detuneCents:8,bioCutoffHz:8165,reverbWet:.281,anthroGain:.028,velocity:.762},{year:2012,value:4571,vital:{vit:51.9,div:60.8,est:84.1,pre:17.6,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:11,detuneCents:6,bioCutoffHz:8902,reverbWet:.294,anthroGain:.017,velocity:.76},{year:2013,value:5891,vital:{vit:51.3,div:60.2,est:81.9,pre:21.2,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:13,detuneCents:7,bioCutoffHz:8375,reverbWet:.285,anthroGain:.025,velocity:.757},{year:2014,value:5012,vital:{vit:50.7,div:59.7,est:83.4,pre:18.8,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:12,detuneCents:7,bioCutoffHz:8723,reverbWet:.291,anthroGain:.019,velocity:.754},{year:2015,value:6207,vital:{vit:50,div:59.1,est:81.3,pre:22.1,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:13,detuneCents:7,bioCutoffHz:8248,reverbWet:.283,anthroGain:.027,velocity:.75},{year:2016,value:7893,vital:{vit:49.2,div:58.3,est:78.4,pre:26.7,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:15,detuneCents:9,bioCutoffHz:7629,reverbWet:.271,anthroGain:.039,velocity:.746},{year:2017,value:6947,vital:{vit:48.4,div:57.7,est:80,pre:24.1,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:14,detuneCents:8,bioCutoffHz:7973,reverbWet:.277,anthroGain:.032,velocity:.742},{year:2018,value:7536,vital:{vit:47.6,div:56.9,est:79,pre:25.7,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:15,detuneCents:8,bioCutoffHz:7760,reverbWet:.273,anthroGain:.036,velocity:.738},{year:2019,value:10129,vital:{vit:46.5,div:55.9,est:74.6,pre:32.9,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:18,detuneCents:10,bioCutoffHz:6867,reverbWet:.254,anthroGain:.06,velocity:.733},{year:2020,value:10851,vital:{vit:45.3,div:54.8,est:73.3,pre:34.9,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:19,detuneCents:11,bioCutoffHz:6638,reverbWet:.249,anthroGain:.067,velocity:.726},{year:2021,value:13038,vital:{vit:43.9,div:53.6,est:69.6,pre:40.9,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:21,detuneCents:12,bioCutoffHz:5996,reverbWet:.234,anthroGain:.092,velocity:.72},{year:2022,value:11594,vital:{vit:42.7,div:52.4,est:72.1,pre:36.9,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:20,detuneCents:11,bioCutoffHz:6417,reverbWet:.244,anthroGain:.075,velocity:.714},{year:2023,value:9064,vital:{vit:41.7,div:51.5,est:76.4,pre:30,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:17,detuneCents:9,bioCutoffHz:7214,reverbWet:.262,anthroGain:.05,velocity:.709},{year:2024,value:6288,vital:{vit:41,div:50.9,est:81.2,pre:22.3,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:13,detuneCents:8,bioCutoffHz:8220,reverbWet:.282,anthroGain:.027,velocity:.705},{year:2025,value:5731,vital:{vit:40.4,div:50.3,est:82.1,pre:20.8,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:13,detuneCents:7,bioCutoffHz:8432,reverbWet:.286,anthroGain:.024,velocity:.702},{year:2026,value:3335,vital:{vit:40,div:50,est:86.3,pre:14.2,fever:0},masks:{bajo:2048,arpegio:4672,pulso:0,canto:0},scaleSize:4,jitterMs:10,detuneCents:5,bioCutoffHz:9431,reverbWet:.303,anthroGain:.011,velocity:.7}]},hielo:{reference:{year:0,value:0,vital:{vit:95,div:100,est:95,pre:5,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:4,detuneCents:2,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},label:"Hielo marino",signature:"hielo",unit:"millones de km\xB2 en septiembre",source:"NSIDC Sea Ice Index, \xC1rtico",tempo:52,years:[{year:1979,value:7.05,vital:{vit:92.7,div:97.9,est:93.8,pre:7.9,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:4,detuneCents:2,bioCutoffHz:10495,reverbWet:.319,anthroGain:.003,velocity:.964},{year:1980,value:7.67,vital:{vit:95,div:100,est:80.5,pre:5,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:14,detuneCents:8,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},{year:1981,value:7.14,vital:{vit:94,div:99.1,est:82.1,pre:6.3,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:13,detuneCents:7,bioCutoffHz:10784,reverbWet:.324,anthroGain:.002,velocity:.97},{year:1982,value:7.3,vital:{vit:95,div:100,est:91.3,pre:5,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:6,detuneCents:3,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},{year:1983,value:7.39,vital:{vit:95,div:100,est:92.9,pre:5,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:5,detuneCents:3,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},{year:1984,value:6.81,vital:{vit:89.3,div:94.8,est:78.6,pre:12.2,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:1024},scaleSize:5,jitterMs:15,detuneCents:9,bioCutoffHz:9757,reverbWet:.308,anthroGain:.008,velocity:.947},{year:1985,value:6.7,vital:{vit:87.7,div:93.3,est:88.8,pre:14.1,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:1024},scaleSize:5,jitterMs:8,detuneCents:4,bioCutoffHz:9447,reverbWet:.303,anthroGain:.011,velocity:.939},{year:1986,value:7.41,vital:{vit:95,div:100,est:78.4,pre:5,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:15,detuneCents:9,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},{year:1987,value:7.28,vital:{vit:95,div:100,est:92,pre:5,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:6,detuneCents:3,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},{year:1988,value:7.37,vital:{vit:95,div:100,est:92.9,pre:5,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:5,detuneCents:3,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},{year:1989,value:7.01,vital:{vit:92.1,div:97.4,est:85.2,pre:8.6,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:10,detuneCents:6,bioCutoffHz:10371,reverbWet:.318,anthroGain:.004,velocity:.96},{year:1990,value:6.14,vital:{vit:79.7,div:86,est:67.1,pre:24.1,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:0},scaleSize:5,jitterMs:23,detuneCents:13,bioCutoffHz:7973,reverbWet:.277,anthroGain:.032,velocity:.899},{year:1991,value:6.47,vital:{vit:84.4,div:90.3,est:82,pre:18.2,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:1024},scaleSize:5,jitterMs:13,detuneCents:7,bioCutoffHz:8812,reverbWet:.293,anthroGain:.018,velocity:.922},{year:1992,value:7.47,vital:{vit:95,div:100,est:71.7,pre:5,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:20,detuneCents:11,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},{year:1993,value:6.4,vital:{vit:83.4,div:89.4,est:64.2,pre:19.5,fever:0},masks:{bajo:257,arpegio:33808,pulso:36932,canto:512},scaleSize:5,jitterMs:25,detuneCents:14,bioCutoffHz:8620,reverbWet:.289,anthroGain:.021,velocity:.917},{year:1994,value:7.14,vital:{vit:94,div:99.1,est:77.2,pre:6.3,fever:0},masks:{bajo:257,arpegio:2080,pulso:37444,canto:1024},scaleSize:5,jitterMs:16,detuneCents:9,bioCutoffHz:10784,reverbWet:.324,anthroGain:.002,velocity:.97},{year:1995,value:6.08,vital:{vit:78.9,div:85.2,est:62.2,pre:25.2,fever:0},masks:{bajo:257,arpegio:33808,pulso:36932,canto:0},scaleSize:5,jitterMs:26,detuneCents:15,bioCutoffHz:7826,reverbWet:.274,anthroGain:.035,velocity:.895},{year:1996,value:7.58,vital:{vit:95,div:100,est:60,pre:5,fever:0},masks:{bajo:257,arpegio:33808,pulso:37444,canto:256},scaleSize:5,jitterMs:28,detuneCents:16,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},{year:1997,value:6.69,vital:{vit:87.6,div:93.2,est:70.5,pre:14.3,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:1024},scaleSize:5,jitterMs:21,detuneCents:12,bioCutoffHz:9415,reverbWet:.303,anthroGain:.011,velocity:.938},{year:1998,value:6.54,vital:{vit:85.4,div:91.2,est:86.7,pre:17,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:1024},scaleSize:5,jitterMs:9,detuneCents:5,bioCutoffHz:8994,reverbWet:.296,anthroGain:.016,velocity:.927},{year:1999,value:6.12,vital:{vit:79.4,div:85.7,est:77.4,pre:24.4,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:0},scaleSize:5,jitterMs:16,detuneCents:9,bioCutoffHz:7933,reverbWet:.277,anthroGain:.033,velocity:.897},{year:2e3,value:6.25,vital:{vit:81.3,div:87.4,est:85.1,pre:22.1,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:0},scaleSize:5,jitterMs:10,detuneCents:6,bioCutoffHz:8248,reverbWet:.283,anthroGain:.027,velocity:.907},{year:2001,value:6.73,vital:{vit:88.1,div:93.7,est:80.4,pre:13.6,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:1024},scaleSize:5,jitterMs:14,detuneCents:8,bioCutoffHz:9528,reverbWet:.305,anthroGain:.01,velocity:.94},{year:2002,value:5.83,vital:{vit:75.3,div:82,est:64.2,pre:29.6,fever:0},masks:{bajo:257,arpegio:33808,pulso:36932,canto:0},scaleSize:4,jitterMs:25,detuneCents:14,bioCutoffHz:7263,reverbWet:.263,anthroGain:.048,velocity:.877},{year:2003,value:6.12,vital:{vit:79.4,div:85.7,est:80.5,pre:24.4,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:0},scaleSize:5,jitterMs:14,detuneCents:8,bioCutoffHz:7933,reverbWet:.277,anthroGain:.033,velocity:.897},{year:2004,value:5.98,vital:{vit:77.5,div:83.9,est:83,pre:26.9,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:0},scaleSize:5,jitterMs:12,detuneCents:7,bioCutoffHz:7603,reverbWet:.27,anthroGain:.04,velocity:.888},{year:2005,value:5.5,vital:{vit:70.6,div:77.6,est:71.6,pre:35.5,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:0},scaleSize:4,jitterMs:20,detuneCents:11,bioCutoffHz:6571,reverbWet:.248,anthroGain:.069,velocity:.853},{year:2006,value:5.86,vital:{vit:75.7,div:82.3,est:77,pre:29.1,fever:0},masks:{bajo:257,arpegio:2080,pulso:36932,canto:0},scaleSize:4,jitterMs:16,detuneCents:9,bioCutoffHz:7325,reverbWet:.264,anthroGain:.047,velocity:.879},{year:2007,value:4.27,vital:{vit:53.1,div:61.6,est:39,pre:57.4,fever:0},masks:{bajo:1,arpegio:256,pulso:0,canto:0},scaleSize:4,jitterMs:43,detuneCents:24,bioCutoffHz:4532,reverbWet:.191,anthroGain:.181,velocity:.766},{year:2008,value:4.69,vital:{vit:59.1,div:67.1,est:67.2,pre:49.9,fever:0},masks:{bajo:1,arpegio:2080,pulso:36932,canto:0},scaleSize:4,jitterMs:23,detuneCents:13,bioCutoffHz:5147,reverbWet:.21,anthroGain:.137,velocity:.796},{year:2009,value:5.26,vital:{vit:67.2,div:74.5,est:67.8,pre:39.8,fever:0},masks:{bajo:1,arpegio:2080,pulso:36932,canto:0},scaleSize:4,jitterMs:23,detuneCents:13,bioCutoffHz:6109,reverbWet:.237,anthroGain:.087,velocity:.836},{year:2010,value:4.87,vital:{vit:61.6,div:69.4,est:69.2,pre:46.7,fever:0},masks:{bajo:1,arpegio:2080,pulso:36932,canto:0},scaleSize:4,jitterMs:22,detuneCents:12,bioCutoffHz:5434,reverbWet:.219,anthroGain:.12,velocity:.808},{year:2011,value:4.56,vital:{vit:57.2,div:65.4,est:68.9,pre:52.2,fever:0},masks:{bajo:1,arpegio:2048,pulso:36932,canto:0},scaleSize:4,jitterMs:22,detuneCents:12,bioCutoffHz:4950,reverbWet:.204,anthroGain:.15,velocity:.786},{year:2012,value:3.57,vital:{vit:43.1,div:52.4,est:46,pre:69.9,fever:0},masks:{bajo:1,arpegio:520,pulso:0,canto:0},scaleSize:4,jitterMs:38,detuneCents:22,bioCutoffHz:3666,reverbWet:.158,anthroGain:.269,velocity:.716},{year:2013,value:5.21,vital:{vit:66.5,div:73.9,est:45.7,pre:40.6,fever:0},masks:{bajo:1,arpegio:16904,pulso:18722,canto:0},scaleSize:4,jitterMs:38,detuneCents:22,bioCutoffHz:6026,reverbWet:.234,anthroGain:.091,velocity:.833},{year:2014,value:5.22,vital:{vit:66.6,div:74,est:80.6,pre:40.5,fever:0},masks:{bajo:1,arpegio:2080,pulso:36932,canto:0},scaleSize:4,jitterMs:14,detuneCents:8,bioCutoffHz:6037,reverbWet:.235,anthroGain:.09,velocity:.833},{year:2015,value:4.62,vital:{vit:58.1,div:66.2,est:62.5,pre:51.2,fever:0},masks:{bajo:1,arpegio:1040,pulso:36932,canto:0},scaleSize:4,jitterMs:26,detuneCents:15,bioCutoffHz:5035,reverbWet:.207,anthroGain:.144,velocity:.791},{year:2016,value:4.53,vital:{vit:56.8,div:65,est:73.8,pre:52.8,fever:0},masks:{bajo:1,arpegio:2048,pulso:36932,canto:0},scaleSize:4,jitterMs:18,detuneCents:10,bioCutoffHz:4900,reverbWet:.203,anthroGain:.153,velocity:.784},{year:2017,value:4.82,vital:{vit:60.9,div:68.8,est:71.2,pre:47.6,fever:0},masks:{bajo:1,arpegio:2080,pulso:36932,canto:0},scaleSize:4,jitterMs:20,detuneCents:12,bioCutoffHz:5352,reverbWet:.216,anthroGain:.125,velocity:.805},{year:2018,value:4.79,vital:{vit:60.5,div:68.4,est:77,pre:48.1,fever:0},masks:{bajo:1,arpegio:2080,pulso:36932,canto:0},scaleSize:4,jitterMs:16,detuneCents:9,bioCutoffHz:5306,reverbWet:.215,anthroGain:.127,velocity:.803},{year:2019,value:4.32,vital:{vit:53.8,div:62.2,est:63.4,pre:56.5,fever:0},masks:{bajo:1,arpegio:1040,pulso:0,canto:0},scaleSize:4,jitterMs:26,detuneCents:15,bioCutoffHz:4602,reverbWet:.193,anthroGain:.176,velocity:.769},{year:2020,value:3.92,vital:{vit:48.1,div:57,est:62.2,pre:63.6,fever:0},masks:{bajo:1,arpegio:1040,pulso:0,canto:0},scaleSize:4,jitterMs:26,detuneCents:15,bioCutoffHz:4079,reverbWet:.175,anthroGain:.222,velocity:.741},{year:2021,value:4.92,vital:{vit:62.4,div:70.1,est:55.3,pre:45.8,fever:0},masks:{bajo:1,arpegio:1040,pulso:18722,canto:0},scaleSize:4,jitterMs:31,detuneCents:18,bioCutoffHz:5518,reverbWet:.221,anthroGain:.115,velocity:.812},{year:2022,value:4.87,vital:{vit:61.6,div:69.4,est:77.2,pre:46.7,fever:0},masks:{bajo:1,arpegio:2080,pulso:36932,canto:0},scaleSize:4,jitterMs:16,detuneCents:9,bioCutoffHz:5434,reverbWet:.219,anthroGain:.12,velocity:.808},{year:2023,value:4.37,vital:{vit:54.5,div:62.9,est:63.1,pre:55.6,fever:0},masks:{bajo:1,arpegio:1040,pulso:36932,canto:0},scaleSize:4,jitterMs:26,detuneCents:15,bioCutoffHz:4672,reverbWet:.195,anthroGain:.17,velocity:.773},{year:2024,value:4.38,vital:{vit:54.7,div:63,est:74.6,pre:55.4,fever:0},masks:{bajo:1,arpegio:2048,pulso:36932,canto:0},scaleSize:4,jitterMs:18,detuneCents:10,bioCutoffHz:4688,reverbWet:.196,anthroGain:.169,velocity:.774},{year:2025,value:4.75,vital:{vit:59.9,div:67.9,est:68.8,pre:48.8,fever:0},masks:{bajo:1,arpegio:2080,pulso:36932,canto:0},scaleSize:4,jitterMs:22,detuneCents:12,bioCutoffHz:5244,reverbWet:.213,anthroGain:.131,velocity:.8}]},gases:{reference:{year:0,value:0,vital:{vit:95,div:100,est:95,pre:5,fever:0},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:4,detuneCents:2,bioCutoffHz:11024,reverbWet:.327,anthroGain:.001,velocity:.975},label:"Gases de efecto invernadero",signature:"gases",unit:"ppm de CO\u2082 en Mauna Loa",source:"NOAA Global Monitoring Laboratory",tempo:60,years:[{year:1959,value:315.98,vital:{vit:95,div:100,est:95,pre:24.8,fever:0},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:4,detuneCents:2,bioCutoffHz:7879,reverbWet:.276,anthroGain:.034,velocity:.975},{year:1960,value:316.91,vital:{vit:94.6,div:99.6,est:94.7,pre:24.8,fever:.4},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:4,detuneCents:2,bioCutoffHz:7879,reverbWet:.276,anthroGain:.034,velocity:.973},{year:1961,value:317.64,vital:{vit:94.3,div:99.3,est:91.8,pre:20.5,fever:.7},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:6,detuneCents:3,bioCutoffHz:8475,reverbWet:.287,anthroGain:.023,velocity:.972},{year:1962,value:318.45,vital:{vit:94,div:99,est:93.2,pre:22.2,fever:1.1},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:5,detuneCents:3,bioCutoffHz:8234,reverbWet:.282,anthroGain:.027,velocity:.97},{year:1963,value:318.99,vital:{vit:93.8,div:98.8,est:90.5,pre:16.5,fever:1.4},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:7,detuneCents:4,bioCutoffHz:9070,reverbWet:.297,anthroGain:.015,velocity:.969},{year:1964,value:319.62,vital:{vit:93.5,div:98.5,est:92.7,pre:18.4,fever:1.6},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:5,detuneCents:3,bioCutoffHz:8782,reverbWet:.292,anthroGain:.019,velocity:.968},{year:1965,value:320.04,vital:{vit:93.4,div:98.4,est:90.9,pre:13.9,fever:1.8},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:6,detuneCents:4,bioCutoffHz:9479,reverbWet:.304,anthroGain:.011,velocity:.967},{year:1966,value:321.37,vital:{vit:92.8,div:97.8,est:81.2,pre:33.3,fever:2.4},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:13,detuneCents:8,bioCutoffHz:6821,reverbWet:.253,anthroGain:.061,velocity:.964},{year:1967,value:322.18,vital:{vit:92.5,div:97.5,est:86.1,pre:22.2,fever:2.8},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:10,detuneCents:6,bioCutoffHz:8234,reverbWet:.282,anthroGain:.027,velocity:.963},{year:1968,value:323.05,vital:{vit:92.1,div:97.1,est:92,pre:23.5,fever:3.2},masks:{bajo:257,arpegio:21844,pulso:43346,canto:4096},scaleSize:5,jitterMs:6,detuneCents:3,bioCutoffHz:8055,reverbWet:.279,anthroGain:.03,velocity:.96},{year:1969,value:324.62,vital:{vit:91.5,div:96.5,est:83,pre:38.4,fever:3.9},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:12,detuneCents:7,bioCutoffHz:6256,reverbWet:.24,anthroGain:.081,velocity:.958},{year:1970,value:325.68,vital:{vit:91.1,div:96.1,est:85.2,pre:27.5,fever:4.4},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:10,detuneCents:6,bioCutoffHz:7526,reverbWet:.269,anthroGain:.042,velocity:.956},{year:1971,value:326.32,vital:{vit:90.8,div:95.8,est:86.2,pre:18.6,fever:4.6},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:10,detuneCents:6,bioCutoffHz:8753,reverbWet:.292,anthroGain:.019,velocity:.954},{year:1972,value:327.46,vital:{vit:90.4,div:95.4,est:84.7,pre:29.2,fever:5.2},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:11,detuneCents:6,bioCutoffHz:7312,reverbWet:.264,anthroGain:.047,velocity:.952},{year:1973,value:329.68,vital:{vit:89.5,div:94.5,est:76.3,pre:52.2,fever:6.2},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:17,detuneCents:9,bioCutoffHz:4950,reverbWet:.204,anthroGain:.15,velocity:.948},{year:1974,value:330.19,vital:{vit:89.3,div:94.3,est:70.5,pre:15.8,fever:6.4},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:21,detuneCents:12,bioCutoffHz:9179,reverbWet:.299,anthroGain:.014,velocity:.947},{year:1975,value:331.13,vital:{vit:88.9,div:93.9,est:84.5,pre:25,fever:6.8},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:11,detuneCents:6,bioCutoffHz:7852,reverbWet:.275,anthroGain:.034,velocity:.945},{year:1976,value:332.03,vital:{vit:88.5,div:93.5,est:89.4,pre:24.1,fever:7.2},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:7,detuneCents:4,bioCutoffHz:7973,reverbWet:.277,anthroGain:.032,velocity:.943},{year:1977,value:333.84,vital:{vit:87.8,div:92.8,est:77.3,pre:43.5,fever:8},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:16,detuneCents:9,bioCutoffHz:5737,reverbWet:.227,anthroGain:.104,velocity:.939},{year:1978,value:335.41,vital:{vit:87.1,div:92.1,est:85.7,pre:38.4,fever:8.7},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:10,detuneCents:6,bioCutoffHz:6256,reverbWet:.24,anthroGain:.081,velocity:.936},{year:1979,value:336.84,vital:{vit:86.6,div:91.6,est:86.6,pre:35.4,fever:9.4},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:9,detuneCents:5,bioCutoffHz:6582,reverbWet:.248,anthroGain:.069,velocity:.933},{year:1980,value:338.76,vital:{vit:85.8,div:90.8,est:81.3,pre:45.8,fever:10.2},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:13,detuneCents:7,bioCutoffHz:5518,reverbWet:.221,anthroGain:.115,velocity:.929},{year:1981,value:340.12,vital:{vit:85.2,div:90.2,est:79.9,pre:33.9,fever:10.8},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:14,detuneCents:8,bioCutoffHz:6752,reverbWet:.252,anthroGain:.063,velocity:.926},{year:1982,value:341.48,vital:{vit:84.7,div:89.7,est:87,pre:33.9,fever:11.4},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:9,detuneCents:5,bioCutoffHz:6752,reverbWet:.252,anthroGain:.063,velocity:.924},{year:1983,value:343.15,vital:{vit:84,div:89,est:82.3,pre:40.5,fever:12.2},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:12,detuneCents:7,bioCutoffHz:6037,reverbWet:.235,anthroGain:.09,velocity:.92},{year:1984,value:344.87,vital:{vit:83.3,div:88.3,est:85.3,pre:41.5,fever:13},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:10,detuneCents:6,bioCutoffHz:5935,reverbWet:.232,anthroGain:.095,velocity:.917},{year:1985,value:346.35,vital:{vit:82.7,div:87.7,est:82.3,pre:36.4,fever:13.6},masks:{bajo:257,arpegio:21840,pulso:43346,canto:4096},scaleSize:5,jitterMs:12,detuneCents:7,bioCutoffHz:6471,reverbWet:.245,anthroGain:.073,velocity:.914},{year:1986,value:347.61,vital:{vit:82.2,div:87.2,est:82.1,pre:31.8,fever:14.2},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:5,jitterMs:13,detuneCents:7,bioCutoffHz:6997,reverbWet:.257,anthroGain:.056,velocity:.911},{year:1987,value:349.31,vital:{vit:81.5,div:86.5,est:78.7,pre:41.1,fever:15},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:5,jitterMs:15,detuneCents:9,bioCutoffHz:5975,reverbWet:.233,anthroGain:.093,velocity:.908},{year:1988,value:351.69,vital:{vit:80.6,div:85.6,est:74.7,pre:55.6,fever:16},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:5,jitterMs:18,detuneCents:10,bioCutoffHz:4672,reverbWet:.195,anthroGain:.17,velocity:.903},{year:1989,value:353.2,vital:{vit:80,div:85,est:71.7,pre:37.1,fever:16.7},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:5,jitterMs:20,detuneCents:11,bioCutoffHz:6395,reverbWet:.244,anthroGain:.076,velocity:.9},{year:1990,value:354.45,vital:{vit:79.5,div:84.5,est:79.4,pre:31.6,fever:17.3},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:5,jitterMs:14,detuneCents:8,bioCutoffHz:7020,reverbWet:.258,anthroGain:.055,velocity:.898},{year:1991,value:355.7,vital:{vit:79,div:84,est:82.5,pre:31.6,fever:17.8},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:5,jitterMs:12,detuneCents:7,bioCutoffHz:7020,reverbWet:.258,anthroGain:.055,velocity:.895},{year:1992,value:356.54,vital:{vit:78.6,div:83.6,est:76.8,pre:22.8,fever:18.2},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:5,jitterMs:16,detuneCents:9,bioCutoffHz:8151,reverbWet:.281,anthroGain:.029,velocity:.893},{year:1993,value:357.21,vital:{vit:78.3,div:83.3,est:79.8,pre:19.2,fever:18.5},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:14,detuneCents:8,bioCutoffHz:8664,reverbWet:.29,anthroGain:.02,velocity:.892},{year:1994,value:358.96,vital:{vit:77.6,div:82.6,est:67.1,pre:42.2,fever:19.3},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:23,detuneCents:13,bioCutoffHz:5865,reverbWet:.23,anthroGain:.098,velocity:.888},{year:1995,value:360.97,vital:{vit:76.8,div:81.8,est:77.4,pre:47.7,fever:20.2},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:16,detuneCents:9,bioCutoffHz:5343,reverbWet:.216,anthroGain:.125,velocity:.884},{year:1996,value:362.74,vital:{vit:76.1,div:81.1,est:77.1,pre:42.6,fever:21},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:16,detuneCents:9,bioCutoffHz:5825,reverbWet:.229,anthroGain:.1,velocity:.881},{year:1997,value:363.88,vital:{vit:75.6,div:80.6,est:71.5,pre:29.2,fever:21.5},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:20,detuneCents:11,bioCutoffHz:7312,reverbWet:.264,anthroGain:.047,velocity:.878},{year:1998,value:366.84,vital:{vit:74.4,div:79.4,est:59,pre:67.9,fever:22.8},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:29,detuneCents:16,bioCutoffHz:3792,reverbWet:.163,anthroGain:.254,velocity:.872},{year:1999,value:368.54,vital:{vit:73.8,div:78.8,est:61.7,pre:41.1,fever:23.6},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:27,detuneCents:15,bioCutoffHz:5975,reverbWet:.233,anthroGain:.093,velocity:.869},{year:2e3,value:369.71,vital:{vit:73.3,div:78.3,est:71,pre:29.9,fever:24.1},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:20,detuneCents:12,bioCutoffHz:7226,reverbWet:.262,anthroGain:.049,velocity:.867},{year:2001,value:371.32,vital:{vit:72.6,div:77.6,est:71.7,pre:39.2,fever:24.8},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:20,detuneCents:11,bioCutoffHz:6171,reverbWet:.238,anthroGain:.085,velocity:.863},{year:2002,value:373.45,vital:{vit:71.8,div:76.8,est:70,pre:50.3,fever:25.8},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:21,detuneCents:12,bioCutoffHz:5112,reverbWet:.209,anthroGain:.139,velocity:.859},{year:2003,value:375.98,vital:{vit:70.8,div:75.8,est:70.8,pre:58.8,fever:26.9},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:20,detuneCents:12,bioCutoffHz:4426,reverbWet:.187,anthroGain:.19,velocity:.854},{year:2004,value:377.7,vital:{vit:70.1,div:75.1,est:64.8,pre:41.5,fever:27.7},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:25,detuneCents:14,bioCutoffHz:5935,reverbWet:.232,anthroGain:.095,velocity:.851},{year:2005,value:379.98,vital:{vit:69.1,div:74.1,est:67.4,pre:53.4,fever:28.7},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:23,detuneCents:13,bioCutoffHz:4850,reverbWet:.201,anthroGain:.157,velocity:.845},{year:2006,value:382.09,vital:{vit:68.3,div:73.3,est:72,pre:49.8,fever:29.7},masks:{bajo:257,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:20,detuneCents:11,bioCutoffHz:5156,reverbWet:.211,anthroGain:.136,velocity:.841},{year:2007,value:384.02,vital:{vit:67.5,div:72.5,est:71.2,pre:46,fever:30.5},masks:{bajo:1,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:20,detuneCents:12,bioCutoffHz:5499,reverbWet:.22,anthroGain:.116,velocity:.838},{year:2008,value:385.83,vital:{vit:66.8,div:71.8,est:71.4,pre:43.5,fever:31.4},masks:{bajo:1,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:20,detuneCents:11,bioCutoffHz:5737,reverbWet:.227,anthroGain:.104,velocity:.834},{year:2009,value:387.64,vital:{vit:66,div:71,est:72.5,pre:43.5,fever:32.2},masks:{bajo:1,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:19,detuneCents:11,bioCutoffHz:5737,reverbWet:.227,anthroGain:.104,velocity:.83},{year:2010,value:390.1,vital:{vit:65.1,div:70.1,est:63,pre:57.3,fever:33.3},masks:{bajo:1,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:26,detuneCents:15,bioCutoffHz:4540,reverbWet:.191,anthroGain:.181,velocity:.825},{year:2011,value:391.85,vital:{vit:64.3,div:69.3,est:61.7,pre:42.2,fever:34.1},masks:{bajo:1,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:27,detuneCents:15,bioCutoffHz:5865,reverbWet:.23,anthroGain:.098,velocity:.822},{year:2012,value:394.06,vital:{vit:63.5,div:68.5,est:64.3,pre:52,fever:35.1},masks:{bajo:1,arpegio:21840,pulso:43346,canto:0},scaleSize:4,jitterMs:25,detuneCents:14,bioCutoffHz:4967,reverbWet:.205,anthroGain:.149,velocity:.818},{year:2013,value:396.74,vital:{vit:62.4,div:67.4,est:63.4,pre:61.9,fever:36.3},masks:{bajo:1,arpegio:5456,pulso:43346,canto:0},scaleSize:4,jitterMs:26,detuneCents:15,bioCutoffHz:4199,reverbWet:.179,anthroGain:.211,velocity:.812},{year:2014,value:398.81,vital:{vit:61.5,div:66.5,est:60.8,pre:49,fever:37.2},masks:{bajo:1,arpegio:5456,pulso:43346,canto:0},scaleSize:4,jitterMs:27,detuneCents:16,bioCutoffHz:5226,reverbWet:.213,anthroGain:.132,velocity:.808},{year:2015,value:401.01,vital:{vit:60.6,div:65.6,est:66.5,pre:51.7,fever:38.2},masks:{bajo:1,arpegio:5456,pulso:43346,canto:0},scaleSize:4,jitterMs:23,detuneCents:13,bioCutoffHz:4992,reverbWet:.206,anthroGain:.147,velocity:.803},{year:2016,value:404.41,vital:{vit:59.3,div:64.3,est:51.2,pre:77.2,fever:39.7},masks:{bajo:1,arpegio:5456,pulso:43346,canto:0},scaleSize:4,jitterMs:34,detuneCents:20,bioCutoffHz:3239,reverbWet:.139,anthroGain:.328,velocity:.797},{year:2017,value:406.76,vital:{vit:58.3,div:63.3,est:52.5,pre:54.9,fever:40.8},masks:{bajo:1,arpegio:5456,pulso:43346,canto:0},scaleSize:4,jitterMs:33,detuneCents:19,bioCutoffHz:4728,reverbWet:.197,anthroGain:.166,velocity:.792},{year:2018,value:408.72,vital:{vit:57.5,div:62.5,est:60.7,pre:46.6,fever:41.6},masks:{bajo:1,arpegio:5456,pulso:43346,canto:0},scaleSize:4,jitterMs:28,detuneCents:16,bioCutoffHz:5443,reverbWet:.219,anthroGain:.119,velocity:.788},{year:2019,value:411.65,vital:{vit:56.3,div:61.3,est:52,pre:67.3,fever:43},masks:{bajo:1,arpegio:5456,pulso:0,canto:0},scaleSize:4,jitterMs:34,detuneCents:19,bioCutoffHz:3831,reverbWet:.165,anthroGain:.249,velocity:.782},{year:2020,value:414.21,vital:{vit:55.3,div:60.3,est:59.2,pre:59.4,fever:44.1},masks:{bajo:1,arpegio:5456,pulso:0,canto:0},scaleSize:4,jitterMs:29,detuneCents:16,bioCutoffHz:4381,reverbWet:.186,anthroGain:.194,velocity:.777},{year:2021,value:416.41,vital:{vit:54.4,div:59.4,est:58.6,pre:51.7,fever:45.1},masks:{bajo:1,arpegio:5456,pulso:0,canto:0},scaleSize:4,jitterMs:29,detuneCents:17,bioCutoffHz:4992,reverbWet:.206,anthroGain:.147,velocity:.772},{year:2022,value:418.53,vital:{vit:53.6,div:58.6,est:61.7,pre:50,fever:46},masks:{bajo:1,arpegio:5456,pulso:0,canto:0},scaleSize:4,jitterMs:27,detuneCents:15,bioCutoffHz:5138,reverbWet:.21,anthroGain:.138,velocity:.768},{year:2023,value:421.08,vital:{vit:52.5,div:57.5,est:56.2,pre:59.2,fever:47.2},masks:{bajo:1,arpegio:5456,pulso:0,canto:0},scaleSize:4,jitterMs:31,detuneCents:18,bioCutoffHz:4396,reverbWet:.186,anthroGain:.193,velocity:.763},{year:2024,value:424.61,vital:{vit:51.1,div:56.1,est:47.8,pre:80,fever:48.8},masks:{bajo:1,arpegio:5456,pulso:0,canto:0},scaleSize:4,jitterMs:37,detuneCents:21,bioCutoffHz:3089,reverbWet:.132,anthroGain:.352,velocity:.756},{year:2025,value:427.35,vital:{vit:50,div:55,est:49.5,pre:63.2,fever:50},masks:{bajo:1,arpegio:5456,pulso:0,canto:0},scaleSize:4,jitterMs:35,detuneCents:20,bioCutoffHz:4107,reverbWet:.176,anthroGain:.22,velocity:.75}]}}};var l_=wt.default.STEPS,ur=wt.default.PENTA,Kn=Nd.presets,zt=["gases","hielo","jungla"],Ho=class{constructor(){this.dash="hielo",this.idx=0,this.derived=null,this.reference=null,this.ctx=null,this.nodes=null,this.timer=null,this.playing=!1,this.step=0,this.bar=0,this.nextTime=0,this.arpIndex=0,this.level=.55,this.rich=!0,this.onStep=null,this.onBar=null,this._derive()}get preset(){return Kn[this.dash]}get count(){return this.preset.years.length}get entry(){return this.idx===0?this.preset.reference:this.preset.years[this.idx-1]}_derive(){let e=this.preset.signature;this.derived=wt.default.derive(e,this.entry.vital),this.reference=wt.default.derive(e,wt.default.REFERENCE)}setDashboard(e){if(!Kn[e])return;let t=e!==this.dash;this.dash=e,this.idx=0,this._derive(),this.ctx&&(this._continuous(!1),t&&this.playing&&this._restartClock())}setIndex(e){e=Math.max(0,Math.min(this.count,Math.round(e))),e!==this.idx&&(this.idx=e,this._derive(),this._continuous(!1))}setLevel(e){this.level=e,this.nodes&&this.nodes.master.gain.setTargetAtTime(e,this.ctx.currentTime,.3)}async play(){this.ctx||this._init(),await this.ctx.resume(),!this.playing&&(this._restartClock(),this.timer=setInterval(()=>this._pump(),25),this._pump(),this.playing=!0)}async stop(){clearInterval(this.timer),this.timer=null,this.playing=!1,this.ctx&&await this.ctx.suspend()}tick(e=1800,t=.05){if(!this.ctx||this.ctx.state!=="running")return;let n=this.ctx.currentTime,s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="sine",s.frequency.value=e,s.connect(r),r.connect(this.nodes.master),this._env(r,n,t,.001,.04),s.start(n),s.stop(n+.08)}energy(){if(!this.nodes)return 0;let e=this.nodes.wave;this.nodes.analyser.getFloatTimeDomainData(e);let t=0;for(let n=0;n<e.length;n+=4)t+=e[n]*e[n];return Math.min(1,Math.sqrt(t/(e.length/4))*4)}_init(){let e=window.AudioContext||window.webkitAudioContext,t=this.ctx=new e,n=t.createGain();n.gain.value=this.level;let s=t.createDynamicsCompressor();s.threshold.value=-12,s.knee.value=6,s.ratio.value=12,s.attack.value=.003,s.release.value=.18;let r=t.createAnalyser();r.fftSize=2048,n.connect(s),s.connect(r),r.connect(t.destination);let a=t.createGain(),o=t.createBiquadFilter();o.type="lowpass",o.frequency.value=12e3,o.Q.value=.3;let l=t.createConvolver();l.buffer=this._impulse(this.rich?3.8:2.8);let c=t.createGain();c.gain.value=.3;let u=t.createBiquadFilter();u.type="highshelf",u.frequency.value=6500,u.gain.value=this.rich?-2.5:0,a.connect(o),o.connect(u),u.connect(n),o.connect(l),l.connect(c),c.connect(n);let h=t.createGain();h.gain.value=0;let f=t.createDelay(1.5),p=t.createDelay(1.5),g=t.createGain(),v=t.createBiquadFilter(),m=t.createGain(),d=t.createChannelMerger(2);v.type="lowpass",v.frequency.value=2400,g.gain.value=.25,m.gain.value=.5,h.connect(f),f.connect(v),v.connect(p),p.connect(g),g.connect(f),v.connect(d,0,0),p.connect(d,0,1),d.connect(m),m.connect(n),m.connect(l);let y=t.createGain();y.gain.value=0;let x=t.createBiquadFilter();x.type="lowpass",x.frequency.value=1100,x.Q.value=.3;let _=[],R=[1,.5,.28,0].map((Fe,ot)=>{let De=t.createOscillator(),it=t.createGain();return De.type="sine",De.frequency.value=110,it.gain.value=Fe,De.connect(it),it.connect(x),De.start(),_.push(it),De}),E=t.createOscillator(),A=t.createGain();E.frequency.value=.07,A.gain.value=220,E.connect(A),A.connect(x.frequency),E.start(),x.connect(y),y.connect(a);let C=t.createGain();C.gain.value=0;let S=t.createBiquadFilter();S.type="lowpass",S.frequency.value=320;let b=[1,.35,.25].map((Fe,ot)=>{let De=t.createOscillator(),it=t.createGain();return De.type=ot===2?"triangle":"sine",De.frequency.value=55,it.gain.value=Fe,De.connect(it),it.connect(S),De.start(),De});S.connect(C),C.connect(n);let P=this._noise();this.noiseBuf=P;let B=t.createBufferSource();B.buffer=P,B.loop=!0;let O=t.createBiquadFilter(),G=t.createGain();G.gain.value=1e-4;let $=t.createOscillator();$.type="sine";let W=t.createGain();W.gain.value=0,$.connect(W),W.connect(G.gain),B.connect(O),O.connect(G),G.connect(n),B.start(),$.start();let J=t.createGain();J.gain.value=0,J.connect(n);let F=t.createOscillator();F.type="sawtooth",F.frequency.value=120;let se=t.createBiquadFilter();se.type="lowpass",se.frequency.value=480;let oe=t.createGain();oe.gain.value=.22,F.connect(se),se.connect(oe),oe.connect(J),F.start();let me=t.createBufferSource();me.buffer=P,me.loop=!0;let Ue=t.createBiquadFilter();Ue.type="bandpass",Ue.frequency.value=1500,Ue.Q.value=1.1;let tt=t.createGain();tt.gain.value=.5,me.connect(Ue),Ue.connect(tt),tt.connect(J),me.start();let q=t.createOscillator(),ee=t.createOscillator(),pe=t.createOscillator();q.type="sine",ee.type="sine",pe.type="triangle",q.frequency.value=55,ee.frequency.value=55.4,pe.frequency.value=110;let ae=t.createGain();ae.gain.value=.22;let Te=t.createBiquadFilter();Te.type="lowpass",Te.frequency.value=220;let Ie=t.createGain();Ie.gain.value=0,q.connect(Te),ee.connect(Te),pe.connect(ae),ae.connect(Te),Te.connect(Ie),Ie.connect(n),q.start(),ee.start(),pe.start(),this.nodes={master:n,analyser:r,wave:new Float32Array(2048),bioIn:a,bioLP:o,wet:c,echoIn:h,dL:f,dR:p,pad:y,padOsc:R,padG:_,pedal:C,pedalOsc:b,geoFilter:O,geoGain:G,swell:$,swellDepth:W,anthro:J,heat:Ie,heatA:q,heatB:ee,heatC:pe},this._continuous(!0)}_noise(){let e=this.ctx,t=e.sampleRate*2,n=e.createBuffer(1,t,e.sampleRate),s=n.getChannelData(0),r=0,a=0,o=0;for(let l=0;l<t;l++){let c=Math.random()*2-1;r=.99765*r+c*.099046,a=.963*a+c*.2965164,o=.57*o+c*1.0526913,s[l]=(r+a+o+c*.1848)*.22}return n}_impulse(e){let t=this.ctx,n=Math.floor(t.sampleRate*e),s=t.createBuffer(2,n,t.sampleRate),r=Math.floor(t.sampleRate*.012);for(let a=0;a<2;a++){let o=s.getChannelData(a),l=0;for(let c=0;c<n;c++){let u=c/n,h=Math.random()*2-1;if(!this.rich){o[c]=h*Math.pow(1-u,2.6);continue}l+=(h-l)*Math.max(.05,.6-.58*u),o[c]=l*Math.exp(-4.4*u)*(c<r?c/r:1)*2.1}}return s}_continuous(e){let t=this.nodes;if(!t)return;let n=this.ctx.currentTime,s=e?.01:.25,r=this.derived,a=this.preset.signature,o=wt.default.SIGNATURES[a].geo;t.geoFilter.type=o.type,t.geoFilter.frequency.setTargetAtTime(o.hz,n,s),t.geoFilter.Q.setTargetAtTime(o.q,n,s);let l=this.rich&&this.firmas!==!1&&a==="hielo",c=l?0:this.rich?.3:1;t.geoGain.gain.setTargetAtTime(o.gain*c,n,s),t.swell.frequency.setTargetAtTime(o.swellHz,n,s),t.swellDepth.gain.setTargetAtTime(o.gain*o.depth*c,n,s),t.bioLP.frequency.setTargetAtTime(r.bioCutoffHz,n,s),t.wet.gain.setTargetAtTime(r.reverbWet,n,s);let u=60/r.tempo,h=r.voices.find(x=>x.id==="arpegio"),f=r.voices.find(x=>x.id==="bajo");t.dL.delayTime.setTargetAtTime(Math.min(1.4,u*.75),n,.2),t.dR.delayTime.setTargetAtTime(Math.min(1.4,u*.75),n,.2),t.echoIn.gain.setTargetAtTime(this.rich?.13:0,n,s);let p=Math.max(0,Math.min(1,r.v??1)),g=this._padRoot(),v=e?.05:1.2;[1,1.5,2,2*Math.pow(2,4/12)].forEach((x,_)=>t.padOsc[_].frequency.setTargetAtTime(g*x,n,v)),t.padG[3].gain.setTargetAtTime(.3*p*p,n,e?.3:2),t.pad.gain.setTargetAtTime(l?0:this.rich?.05*(.4+.6*p):0,n,e?.3:1.5);let m=a==="gases"?2:1;[.5,.75,1].forEach((x,_)=>t.pedalOsc[_].frequency.setTargetAtTime(g*x*m,n,v)),t.pedal.gain.setTargetAtTime(l?0:this.rich?.11/m*r.p:0,n,e?.3:1.5);let d=wt.default.pressureOf(a),y=d.type==="heat";t.anthro.gain.setTargetAtTime(y||this.rich?0:r.anthroGain,n,s),t.heat.gain.setTargetAtTime(y&&!this.rich?r.p*r.p:0,n,s),y&&(t.heatA.frequency.setTargetAtTime(d.hz,n,s),t.heatB.frequency.setTargetAtTime(d.hz+.4+3.5*r.p,n,s),t.heatC.frequency.setTargetAtTime(d.hz*2,n,s))}_env(e,t,n,s,r){e.gain.setValueAtTime(1e-4,t),e.gain.linearRampToValueAtTime(n,t+s),e.gain.exponentialRampToValueAtTime(1e-4,t+s+r)}_tone(e,t,n,s,r=!1){let a=this.ctx,o=a.createOscillator();o.type=e;let l=a.createGain(),c=a.createStereoPanner?a.createStereoPanner():null;return o.connect(l),c?(c.pan.value=s,l.connect(c),c.connect(this.nodes.bioIn)):l.connect(this.nodes.bioIn),r&&this.rich&&l.connect(this.nodes.echoIn),o.start(t),o.stop(t+n+.05),{osc:o,g:l}}_tuned(e){let t=this.derived,n=this.rich?.15:1;return e*Math.pow(2,(t.feverCents+(Math.random()*2-1)*t.detuneCents)*n/1200)}_rootMidi(){let e=this.derived.voices.find(t=>t.id==="arpegio");return e&&e.rootMidi?e.rootMidi:60}_padRoot(){let e=wt.default.midiHz(this._rootMidi());for(;e>196;)e/=2;for(;e<98;)e*=2;return e}_inKey(e){let t=this._rootMidi(),n=69+12*Math.log2(e/440),s=n,r=99;for(let a=-6;a<=6;a++)for(let o of ur){let l=t+o+12*a,c=Math.abs(l-n);c<r&&(r=c,s=l)}return wt.default.midiHz(s)}_foldJ(e,t=392,n=1175){for(;e>n;)e/=2;for(;e<t;)e*=2;return e}_warm(e,t=880){for(;e>t;)e/=2;return e}_voice(e,t,n){let s=this.derived,r=this.preset.signature,a=s.velocity,o=this.ctx,l=t+Math.random()*(s.jitterMs/1e3);if(e.id==="bajo"){let c=r==="jungla"?.16:.5,{osc:u,g:h}=this._tone("sine",l,c,0),f=this._tuned(e.hz);if(u.frequency.setValueAtTime(f,l),u.frequency.exponentialRampToValueAtTime(f*.62,l+c),this._env(h,l,.5*a,.006,c),this.rich){let p=this._tone("triangle",l,c,0);p.osc.frequency.setValueAtTime(f*2,l),p.osc.frequency.exponentialRampToValueAtTime(f*1.24,l+c),this._env(p.g,l,.05*a,.01,c*.8)}}else if(e.id==="arpegio"){let c=s.scaleSize,u=this.arpIndex++%(c*2-2||1),h=wt.default.melodyDegree(e,n,c),f=h>=0?h:u<c?u:c*2-2-u,p=this.rich&&this.firmas!==!1&&r==="jungla",g=p?this._foldJ(this._tuned(wt.default.midiHz(e.rootMidi+ur[f%5]))):this._tuned(wt.default.midiHz(e.rootMidi+ur[f%5])),v=r==="jungla"?.14:r==="gases"?.42:.9,{osc:m,g:d}=this._tone(r==="jungla"?"triangle":"sine",l,v,f/4*1.2-.6,!0);if(m.frequency.setValueAtTime(r==="jungla"?g*1.07:g,l),r==="jungla"&&m.frequency.exponentialRampToValueAtTime(g,l+.05),this._env(d,l,(r==="gases"?.22:.16)*a,r==="gases"?.02:.004,v),this.rich){let y=Math.max(0,Math.min(1,s.v??1)),x=Math.max(0,Math.min(1,s.d??1)),_=(r==="gases"?.22:.16)*a,R=this._warm(g),E=(A,C,S,b,P)=>{p&&(A=this._foldJ(A));let B=this._tone("sine",C,S,P,!0);B.osc.frequency.setValueAtTime(A,C),this._env(B.g,C,b,.012,S)};if(R<g*.99)E(R,l,.7,_*.5,.5-f/4);else if(!p){let A=this._tone("sine",l,v*1.1,0);A.osc.frequency.setValueAtTime(g/2,l),this._env(A.g,l,_*.22,.02,v*1.1)}if(y>.45&&n%2===0){let A=f+2,C=this._warm(this._tuned(wt.default.midiHz(e.rootMidi+ur[A%5]+12*Math.floor(A/5))));E(C,l+.01,.9,_*.42*((y-.45)/.55),f/4-.5)}x>.6&&n%8===4&&E(this._warm(g,1760)*(R<g*.99?1:2),l,1.3,_*.3*((x-.6)/.4),0)}if(this.rich&&r==="gases"&&this._gasFx(e,g,f,l,n,a),r==="gases"&&!this.rich){let y=this._tone("sine",l,v*.7,-.2);y.osc.frequency.setValueAtTime(g*4,l),this._env(y.g,l,.035*a,.006,v*.7)}if(r==="hielo"){let y=this._tone("sine",l,v*.6,.3);y.osc.frequency.setValueAtTime(Math.min(g*2.76,9e3),l),this._env(y.g,l,.05*a,.003,v*.6)}}else if(e.id==="pulso"){let c=60/s.tempo/4,u=e.amHz?c*.85:.03,{osc:h,g:f}=this._tone("sine",l,u,wt.default.hash01(n+1,9)*1.6-.8);h.frequency.setValueAtTime(this._tuned(this.rich?this.firmas!==!1&&r==="jungla"?this._foldJ(this._inKey(e.hz),784,1175):this._inKey(e.hz):e.hz),l);let p=.05*a;if(e.amHz){f.gain.setValueAtTime(1e-4,l),f.gain.linearRampToValueAtTime(p,l+.01),f.gain.setValueAtTime(p,l+u-.02),f.gain.linearRampToValueAtTime(1e-4,l+u);let g=o.createOscillator(),v=o.createGain();g.frequency.value=e.amHz,v.gain.value=p*.8,g.connect(v),v.connect(f.gain),g.start(l),g.stop(l+u+.05)}else this._env(f,l,p*1.6,.002,u)}else if(e.id==="canto"){if(this.bar%2===1)return;let c=this.bar/2%2===0?-.7:.7,u=this._tuned(e.hz),h=g=>this.rich?this._inKey(g):g,f=r==="gases"?[[1,1.5,1.6],[1.5,1,1.6]]:r==="jungla"?[[1,1.33,.22],[1.33,1.5,.22],[1.5,1.12,.3]]:[[1,1.02,1.8],[1.2,1.18,1.6]],p=l;for(let[g,v,m]of f){let{osc:d,g:y}=this._tone("sine",p,m,c,!0);if(d.frequency.setValueAtTime(h(u*g),p),d.frequency.exponentialRampToValueAtTime(h(u*v),p+m),this.rich&&m>.5){let x=o.createOscillator(),_=o.createGain();x.frequency.value=4.6,_.gain.setValueAtTime(0,p),_.gain.linearRampToValueAtTime(u*g*.004,p+m*.5),x.connect(_),_.connect(d.frequency),x.start(p),x.stop(p+m+.05);let R=this._tone("sine",p,m,-c*.5);R.osc.frequency.setValueAtTime(h(u*g)/2,p),R.osc.frequency.exponentialRampToValueAtTime(h(u*v)/2,p+m),R.g.gain.setValueAtTime(1e-4,p),R.g.gain.linearRampToValueAtTime(.045*a,p+m*.35),R.g.gain.exponentialRampToValueAtTime(1e-4,p+m)}y.gain.setValueAtTime(1e-4,p),y.gain.linearRampToValueAtTime(.14*a,p+m*.25),y.gain.exponentialRampToValueAtTime(1e-4,p+m),p+=m*.9}}}_gasFx(e,t,n,s,r,a){let o=this.derived,l=this.ctx,c=g=>Math.max(0,Math.min(1,g)),u=c(o.v??1),h=c(o.p??0),f=60/o.tempo,p=.22*a;for(let g of[-6,6]){let v=this._tone("sine",s,.75,g<0?-.55:.55,!0),m=p*.26;v.osc.frequency.setValueAtTime(t*Math.pow(2,g/1200),s),v.g.gain.setValueAtTime(1e-4,s),v.g.gain.linearRampToValueAtTime(m,s+.09),v.g.gain.exponentialRampToValueAtTime(1e-4,s+.75);let d=l.createOscillator(),y=l.createGain();d.frequency.value=3+5*h+(g>0?.4:0),y.gain.setValueAtTime(0,s),y.gain.linearRampToValueAtTime(m*.4,s+.2),y.gain.linearRampToValueAtTime(0,s+.65),d.connect(y),y.connect(v.g.gain),d.start(s),d.stop(s+.8)}if(r%2===0){let g=u>.6?3:u>.3?2:1;for(let v=1;v<=g;v++){let m=n+2*v,d=wt.default.midiHz(e.rootMidi+ur[m%5]+12*Math.floor(m/5));for(;d>2100;)d/=2;let y=s+v*f*.25,x=this._tone("sine",y,.9,(v%2?1:-1)*(.3+.2*v),!0);x.osc.frequency.setValueAtTime(this._tuned(d),y),this._env(x.g,y,p*.3*Math.pow(.7,v)*(.35+.65*u),.03,.9)}}if(h>.35&&r%8===0){let g=t;for(;g>200;)g/=2;let v=this._tone("triangle",s,2.2,0),m=p*.45*(h-.35)/.65;v.osc.frequency.setValueAtTime(g,s),v.g.gain.setValueAtTime(1e-4,s),v.g.gain.linearRampToValueAtTime(m,s+.7),v.g.gain.exponentialRampToValueAtTime(1e-4,s+2.2)}}_gasSwell(e){let t=this.derived,n=this.ctx,s=Math.max(0,Math.min(1,t.v??1)),r=60/t.tempo*8*.95,a=this._padRoot()*2,o=this.bar/2%2?1:-1,l=n.createBiquadFilter();l.type="lowpass",l.Q.value=3.5,l.frequency.setValueAtTime(240,e),l.frequency.exponentialRampToValueAtTime(480+1900*s,e+r*.5),l.frequency.exponentialRampToValueAtTime(240,e+r);let c=n.createGain();if(c.gain.setValueAtTime(1e-4,e),c.gain.linearRampToValueAtTime(.02,e+r*.45),c.gain.linearRampToValueAtTime(1e-4,e+r),l.connect(c),n.createStereoPanner){let u=n.createStereoPanner();u.pan.setValueAtTime(-.6*o,e),u.pan.linearRampToValueAtTime(.6*o,e+r),c.connect(u),u.connect(this.nodes.bioIn)}else c.connect(this.nodes.bioIn);[1,1.5,s>.5?2*Math.pow(2,4/12):2].forEach((u,h)=>{let f=n.createOscillator(),p=n.createGain();f.type="sawtooth",f.frequency.value=a*u,f.detune.value=(h-1)*4,p.gain.value=h?.3:.45,f.connect(p),p.connect(l),f.start(e),f.stop(e+r+.05)})}_jungleFx(e,t){let n=this.derived,s=this.firmas!==!1,r=this._vNorm(),a=v=>Math.max(0,Math.min(1,v)),o=s?r:a(n.v??1),l=s?r:a(n.d??1),c=n.velocity,u=this._rootMidi(),h=60/n.tempo/4,f=(v,m)=>{let d=this._tuned(wt.default.midiHz(u+ur[(v%5+5)%5]+12*(Math.floor(v/5)+m)));return s?m<=-3?this._foldJ(d,392,783):this._foldJ(d,587,1175):d},p=(v,m,d,y,x,_,R,E=.004)=>{let A=this._tone(v,d,y,_,R);A.osc.frequency.setValueAtTime(m,d),this._env(A.g,d,x,E,y)},g={0:0,6:2,10:1,14:3}[e];if(g!==void 0&&(e!==14||o>.5)&&(p("triangle",f(g,-4),t,.34,.085*c,e===0?0:e===6?-.3:.3,!1),p("sine",f(g,-3),t,.12,.03*c,0,!0)),e%2===1&&wt.default.hash01(this.bar*16+e+1,3)<.22*l&&p("sine",f(Math.floor(wt.default.hash01(this.bar+1,e+5)*7),-2),t,.5,.034*c,wt.default.hash01(e+1,this.bar+2)*1.8-.9,!0),e%4===2&&l>.4){let v=(e===2||e===10?-1:1)*.85,m=f(e%8===2?0:2,-1);for(let d=0;d<3;d++)p("sine",m,t+d*.045,.035,.011*((l-.4)/.6),v,!1,.003)}if(s){let v=(m,d)=>{let y=this.ctx.createBufferSource(),x=this.ctx.createBiquadFilter(),_=this.ctx.createGain();y.buffer=this.noiseBuf,y.loop=!0,x.type="bandpass",x.frequency.value=500,x.Q.value=4.5,_.gain.setValueAtTime(1e-4,m),_.gain.linearRampToValueAtTime(d,m+.004),_.gain.exponentialRampToValueAtTime(1e-4,m+.07),y.connect(x),x.connect(_),_.connect(this.nodes.bioIn),y.start(m),y.stop(m+.1)};r<.6&&r>.1&&e===8&&this.bar%2===1&&([8,7,6,5].forEach((m,d)=>p("triangle",f(m,-2),t+d*.09,.2,.1*c,.6-d*.4,!1)),v(t+.4,.5*(.6-r)+.15)),r<=.25&&(e===0&&v(t,.4),e===4&&this.bar%2===0&&[5,6,7].forEach((m,d)=>p("sine",f(m,-2),t+d*.2,.45,.1*c,-.6,!0,.02)))}if(this.bar%2===1&&e===4&&o>.45){let v=(this.bar-1)/2%2===0?.7:-.7;[2,3,4].forEach((m,d)=>p("sine",f(m,-2),t+d*h*1.5,.3,.07*c*((o-.45)/.55),v,!0,.02))}}_vNorm(){(!this._vMin||this._vMin.dash!==this.dash)&&(this._vMin={dash:this.dash,min:Math.min(...this.preset.years.map(n=>n.vital.vit))});let e=this.preset.reference.vital.vit,t=this._vMin.min;return Math.max(0,Math.min(1,(this.entry.vital.vit-t)/Math.max(1,e-t)))}_n(e,t,{type:n="sine",att:s=.006,dec:r=.6,gain:a=.1,pan:o=0,echo:l=!1,from:c=0,glide:u=.1,partials:h=[[1,1]],trem:f=0}={}){let p=this.ctx,g=p.createGain(),v=p.createStereoPanner?p.createStereoPanner():null,m=1.5*this.derived.velocity;v?(v.pan.value=Math.max(-1,Math.min(1,o)),g.connect(v),v.connect(this.nodes.bioIn),l&&v.connect(this.nodes.echoIn)):(g.connect(this.nodes.bioIn),l&&g.connect(this.nodes.echoIn)),g.gain.setValueAtTime(1e-4,t),g.gain.linearRampToValueAtTime(a*m,t+s),g.gain.exponentialRampToValueAtTime(1e-4,t+s+r);for(let[d,y]of h){if(e*d>9e3)continue;let x=p.createOscillator(),_=p.createGain();x.type=n,_.gain.value=y,c?(x.frequency.setValueAtTime(c*d,t),x.frequency.exponentialRampToValueAtTime(e*d,t+u)):x.frequency.setValueAtTime(e*d,t),x.connect(_),_.connect(g),x.start(t),x.stop(t+s+r+.05)}if(f){let d=p.createOscillator(),y=p.createGain();d.frequency.value=f,y.gain.setValueAtTime(0,t),y.gain.linearRampToValueAtTime(a*m*.4,t+s+r*.3),y.gain.linearRampToValueAtTime(0,t+s+r*.9),d.connect(y),y.connect(g.gain),d.start(t),d.stop(t+s+r)}}_firmaGases(e,t,n){let s=this._G||(this._G=[45,47,50,52,54,57,59,62,64,66].map(wt.default.midiHz)),r=this.ctx;if(e===0){[s[2],s[5]].concat(n>.5?[s[9]]:[]).forEach((h,f)=>this._n(h,t,{type:"triangle",att:1.5,dec:2.2,gain:.06,pan:f-1}));let o=r.createBufferSource(),l=r.createBiquadFilter(),c=r.createGain(),u=3.4;o.buffer=this.noiseBuf,o.loop=!0,l.type="lowpass",l.Q.value=.7,l.frequency.setValueAtTime(200,t),l.frequency.exponentialRampToValueAtTime(320+500*n,t+u),c.gain.setValueAtTime(1e-4,t),c.gain.linearRampToValueAtTime(.02+.02*(1-n),t+u*.4),c.gain.exponentialRampToValueAtTime(1e-4,t+u),o.connect(l),l.connect(c),c.connect(this.nodes.bioIn),o.start(t),o.stop(t+u+.05)}(n>.4?e%4===0:e%8===0)&&this._n(s[2],t,{type:"triangle",att:.004,dec:n>.4?.18:.5,gain:e===0?.12:.085,partials:[[1,1],[2,.35]]}),n>.4&&(e===6||e===14)&&this._n(s[5],t,{type:"triangle",att:.004,dec:.12,gain:.05,pan:e===6?-.4:.4,partials:[[1,1],[2,.3]]}),n>.25&&e%2===1&&e%4===3&&this._n(s[7],t,{att:.003,dec:.05,gain:.03*n,pan:e%8===3?.6:-.6});let a={0:0,6:1,10:2,14:3}[e];if(a!==void 0&&(a<3||n>.35)){let o=[5,7,8,9,7,8,9,8],l=Math.max(0,o[this.bar%2*4+a]-Math.round(4*(1-n)));this._n(s[l],t,{type:"triangle",att:.1,dec:1.4,gain:.1,pan:(a-1.5)*.4,echo:!0,trem:3+6*(1-n)})}e%8===0&&n<.6&&this._n(s[0],t,{att:.02,dec:.9,gain:.15*(.6-n)/.6,partials:[[1,1],[2,.3]]})}_firmaHielo(e,t,n){let s=this._H||(this._H=[88,90,93,95,98,100,102,105].map(wt.default.midiHz)),r=Math.random;if(e===0&&n>.2&&[s[2],s[5]].forEach((a,o)=>this._n(a,t,{att:1,dec:3,gain:.02*n,pan:o?.5:-.5})),e%2===0){let a=7-e/2;a<Math.ceil(8*n)&&this._n(s[a],t,{att:.003,dec:.7,gain:.05,pan:(a-3.5)/4,echo:!0,partials:[[1,1],[2.76,.2]]})}r()<.45*(1-n)&&this._n(2300+r()*500,t+r()*.12,{from:1400,glide:.035,att:.002,dec:.09,gain:.045,pan:r()*1.6-.8,echo:!0})}_machineTick(e){if(this.rich)return;let t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="square",t.frequency.value=1500,t.connect(n),n.connect(this.nodes.anthro),this._env(n,e,.12,.001,.03),t.start(e),t.stop(e+.08)}_schedule(e,t){e===0&&this.onBar&&this.onBar(this.bar);let n=this.derived,s=this.preset.signature,r=this.rich&&this.firmas!==!1&&(s==="gases"||s==="hielo");if(r)(s==="gases"?this._firmaGases:this._firmaHielo).call(this,e,t,this._vNorm());else{let a=this.rich&&this.firmas!==!1&&s==="jungla"?this._vNorm():1;for(let o of n.voices)o.active&&o.alive[e]&&!(o.id==="canto"&&a<.3||o.id==="pulso"&&a<.2||o.id==="arpegio"&&a<.12&&e%8!==0)&&this._voice(o,t,e)}e%4===0&&n.p>.04&&wt.default.pressureOf(this.preset.signature).type==="machine"&&this._machineTick(t),this.rich&&!r&&e===0&&this.bar%2===0&&s==="gases"&&this._gasSwell(t),this.rich&&this.preset.signature==="jungla"&&this._jungleFx(e,t),this.onStep&&this.onStep(e,t,n,this.reference)}_pump(){for(;this.nextTime<this.ctx.currentTime+.12;)this._schedule(this.step,this.nextTime),this.nextTime+=60/this.derived.tempo/4,this.step=(this.step+1)%l_,this.step===0&&this.bar++}_restartClock(){this.step=0,this.bar=0,this.arpIndex=0,this.nextTime=this.ctx.currentTime+.08}};var c_={tick:[[.25,18]],diente:[[.5,60]],boton:[[.9,55],[0,70],[.9,55]],faro:[[.3,22]],confirmar:[[1,110]],anio:[[.28,18]],decada:[[.65,45]],tope:[[.8,40],[0,60],[.8,40]],soltar:[[.5,35]]},Vo=class{constructor(){this.level=.8,this.floor=.3,this.minMs=40,this.maxMs=220,this.busyUntil={left:0,right:0},this.lastAt={left:0,right:0},this.lastTex={left:0,right:0},this.session=null,this.fired=0,this.errors=0,this.lastError=""}setSources(e){this.session=e||null}sourcesFor(e){let t=this.session?Array.from(this.session.inputSources||[]).filter(s=>s&&s.gamepad):[],n=t.filter(s=>s.handedness===e);return n.length?n:t.filter(s=>s.handedness!=="left"&&s.handedness!=="right")}motors(e){let t=[];if(!e)return t;let n=e.hapticActuators;if(n&&n.length)for(let s of Array.from(n))s&&t.push(s);return e.vibrationActuator&&!t.includes(e.vibrationActuator)&&t.push(e.vibrationActuator),t}available(e){return this.sourcesFor(e).some(t=>this.motors(t.gamepad).length>0)}describe(){if(!this.session)return"sin sesi\xF3n VR";let e=Array.from(this.session.inputSources||[]);return e.length?e.map(t=>`${t.handedness||"?"}: ${t.gamepad?this.motors(t.gamepad).length?"vibra":"sin motor":"sin gamepad"}`).join(" \xB7 ")+` \xB7 pulsos ${this.fired}`+(this.errors?` \xB7 errores ${this.errors} ${this.lastError}`:""):"sin mandos"}fire(e,t,n){try{let s=null;if(typeof e.pulse=="function")s=e.pulse(t,n);else if(typeof e.playEffect=="function")s=e.playEffect("dual-rumble",{startDelay:0,duration:n,strongMagnitude:t,weakMagnitude:t});else return!1;return s&&s.catch&&s.catch(r=>{this.errors++,this.lastError=String(r&&r.message||r).slice(0,40)}),!0}catch(s){return this.errors++,this.lastError=String(s&&s.message||s).slice(0,40),!1}}pulse(e,t,n,s=!1){if(this.level<=0||t<=.01)return!1;let r=performance.now();if(!s&&r<this.busyUntil[e]||r-this.lastAt[e]<45)return!1;let a=Math.min(1,this.floor+t*this.level*.9),o=Math.min(this.maxMs,Math.max(this.minMs,n*2.5)),l=!1;for(let c of this.sourcesFor(e))for(let u of this.motors(c.gamepad))l=this.fire(u,a,o)||l;if(!l&&navigator.getGamepads){for(let c of Array.from(navigator.getGamepads()||[]))if(!(!c||c.hand&&c.hand!==e))for(let u of this.motors(c))l=this.fire(u,a,o)||l}return l&&(this.busyUntil[e]=r+o+20,this.lastAt[e]=r,this.fired++),l}raw(e,t,n){let s=performance.now();if(this.level<=0||s-this.lastAt[e]<45)return!1;let r=Math.min(1,Math.max(.05,t)),a=Math.min(this.maxMs,Math.max(20,n)),o=!1;for(let l of this.sourcesFor(e))for(let c of this.motors(l.gamepad))o=this.fire(c,r,a)||o;return o&&(this.busyUntil[e]=s+a+20,this.lastAt[e]=s,this.fired++),o}_shot(e,t,n){if(t<.04)return!1;let s=!1;for(let r of this.sourcesFor(e))for(let a of this.motors(r.gamepad))s=this.fire(a,t,n)||s;if(!s&&navigator.getGamepads){for(let r of Array.from(navigator.getGamepads()||[]))if(!(!r||r.hand&&r.hand!==e))for(let a of this.motors(r))s=this.fire(a,t,n)||s}return s&&this.fired++,s}play(e,t,n=1){let s=c_[t];if(!s||this.level<=0||!e)return!1;let r=performance.now();if((t==="tick"||t==="anio"||t==="faro")&&r-this.lastAt[e]<40)return!1;this.lastAt[e]=r;let o=0,l=!1;for(let[c,u]of s){if(c>0){let h=Math.min(1,c*this.level*n),f=u;o===0?l=this._shot(e,h,f)||l:setTimeout(()=>this._shot(e,h,f),o)}o+=u}return l}texture(e,t){let n=performance.now();return n-this.lastTex[e]<120?!1:(this.lastTex[e]=n,this.pulse(e,t,16))}both(e,t,n=0){this.pulse("left",e,t,!0),this.pulse("right",e,t,!0),n&&setTimeout(()=>{this.pulse("left",e,t,!0),this.pulse("right",e,t,!0)},n+120)}};var Ne={D2:73.42,A2:110,D3:146.83,F3:174.61,A3:220,C4:261.63,D4:293.66,E4:329.63,F4:349.23,G4:392,A4:440,C5:523.25,D5:587.33,F5:698.46,A5:880},Go=[Ne.D4,Ne.E4,Ne.F4,Ne.G4,Ne.A4,Ne.C5,Ne.D5];function nt(i,e,t,n,{attack:s=.008,decay:r=.9,gain:a=.05,partials:o=[[1,1],[2,.4],[3,.16]],glideTo:l=0}={}){let c=i.createGain();c.gain.setValueAtTime(1e-4,n),c.gain.exponentialRampToValueAtTime(a,n+s),c.gain.exponentialRampToValueAtTime(1e-4,n+s+r),c.connect(e);for(let[u,h]of o){let f=i.createOscillator(),p=i.createGain();f.type="sine",f.frequency.setValueAtTime(t*u,n),l&&f.frequency.exponentialRampToValueAtTime(l*u,n+s+r),p.gain.value=h,f.connect(p),p.connect(c),f.start(n),f.stop(n+s+r+.05)}}var la=null;function Ud(i){if(!la||la.sampleRate!==i.sampleRate){la=i.createBuffer(1,i.sampleRate*2,i.sampleRate);let e=la.getChannelData(0);for(let t=0;t<e.length;t++)e[t]=Math.random()*2-1}return la}function qi(i,e,t,{dur:n=.6,gain:s=.03,f0:r=400,f1:a=3e3,q:o=1.2,attack:l=.5}={}){let c=i.createBufferSource();c.buffer=Ud(i),c.loop=!0;let u=i.createBiquadFilter();u.type="bandpass",u.Q.value=o,u.frequency.setValueAtTime(r,t),u.frequency.exponentialRampToValueAtTime(a,t+n);let h=i.createGain();h.gain.setValueAtTime(1e-4,t),h.gain.exponentialRampToValueAtTime(s,t+n*l),h.gain.exponentialRampToValueAtTime(1e-4,t+n),c.connect(u),u.connect(h),h.connect(e),c.start(t),c.stop(t+n+.05)}var zd={invitar(i,e,t,{dir:n=1}={}){let s=a=>{let o=i.createGain();if(i.createStereoPanner){let l=i.createStereoPanner();l.pan.value=a,o.connect(l),l.connect(e)}else o.connect(e);return o};[[Ne.D4,.1],[Ne.A4,.5],[Ne.D5,.95]].forEach(([a,o],l)=>nt(i,s(o*n),a,t+l*.24,{attack:.01,decay:1.3,gain:.03,partials:[[1,1],[2,.25]]}));let r=i.createGain();if(i.createStereoPanner){let a=i.createStereoPanner();a.pan.setValueAtTime(0,t),a.pan.linearRampToValueAtTime(n,t+.9),r.connect(a),a.connect(e)}else r.connect(e);qi(i,r,t,{dur:1,gain:.012,f0:500,f1:2400,attack:.5,q:1.5})},apertura(i,e,t,{mini:n=!1}={}){if(n){nt(i,e,Ne.D4,t,{decay:.16,gain:.02,partials:[[1,1],[2,.2]]}),nt(i,e,Ne.A4,t+.06,{decay:.2,gain:.02,partials:[[1,1],[2,.2]]});return}qi(i,e,t,{dur:.7,gain:.022,f0:300,f1:2600}),nt(i,e,Ne.D4,t+.05,{decay:.7,gain:.032}),nt(i,e,Ne.A4,t+.17,{decay:.9,gain:.032})},cierre(i,e,t,{mini:n=!1}={}){if(n){nt(i,e,Ne.A4,t,{decay:.16,gain:.02,partials:[[1,1],[2,.2]]}),nt(i,e,Ne.D4,t+.06,{decay:.2,gain:.02,partials:[[1,1],[2,.2]]});return}qi(i,e,t,{dur:.6,gain:.02,f0:2400,f1:280,attack:.2}),nt(i,e,Ne.A4,t,{decay:.6,gain:.03}),nt(i,e,Ne.D4,t+.12,{decay:.9,gain:.032})},transicion(i,e,t){qi(i,e,t,{dur:1.4,gain:.032,f0:180,f1:4200,attack:.7,q:.8}),nt(i,e,Ne.D2,t,{attack:.25,decay:1.2,gain:.05,partials:[[1,1],[2,.25]],glideTo:Ne.D3}),nt(i,e,Ne.A5,t+1.15,{decay:1.3,gain:.018,partials:[[1,1],[2,.2]]})},giro(i,e,t,{step:n=0}={}){qi(i,e,t,{dur:.09,gain:.018,f0:1800,f1:900,q:3,attack:.1}),nt(i,e,Go[(n%Go.length+Go.length)%Go.length]/2,t,{decay:.24,gain:.024,partials:[[1,1],[2,.2]]})},confirmacion(i,e,t){nt(i,e,Ne.D4,t,{decay:.5,gain:.04}),nt(i,e,Ne.A4,t+.09,{decay:.6,gain:.036}),nt(i,e,Ne.D5,t+.18,{decay:.9,gain:.028})},avance(i,e,t,{pos:n=0}={}){let s=520+520*Math.min(1,Math.max(0,n));nt(i,e,s,t,{attack:.004,decay:.12,gain:.026,partials:[[1,1]]}),nt(i,e,s*2,t,{attack:.002,decay:.05,gain:.008,partials:[[1,1]]})}},Od={orbita:{name:"\xD3rbita",desc:"Cuatro notas que suben y se abren (re, la, fa, re agudo) sobre un grave que sostiene. Luminoso, de bienvenida.",play(i,e,t){return nt(i,e,Ne.D3,t,{attack:.4,decay:2.6,gain:.028,partials:[[1,1],[2,.3]]}),[Ne.D4,Ne.A4,Ne.F4,Ne.D5].forEach((n,s)=>nt(i,e,n,t+s*.28,{decay:1.7,gain:.042})),3.2}},pulso:{name:"Pulso",desc:"Dos latidos graves y, despu\xE9s, una sola nota de cristal muy alta. M\xEDnimo: un coraz\xF3n y una se\xF1al.",play(i,e,t){return nt(i,e,Ne.D2,t,{attack:.005,decay:.3,gain:.12,partials:[[1,1]],glideTo:55}),nt(i,e,Ne.D2,t+.32,{attack:.005,decay:.3,gain:.08,partials:[[1,1]],glideTo:55}),nt(i,e,Ne.A5,t+.95,{decay:1.9,gain:.03,partials:[[1,1],[2.01,.3],[3.02,.1]]}),3}},marea:{name:"Marea",desc:"Una ola que cruza de un o\xEDdo al otro desde lo muy grave, rompe con un golpe profundo y abre en re mayor: cuatro notas que suben (re, fa\u266F, la, re) repartidas a los lados, un acorde luminoso y destellos que se alejan.",play(i,e,t){let n=i.createGain();n.connect(e);let s=i.createDelay(1),r=i.createDelay(1),a=i.createGain(),o=i.createBiquadFilter(),l=i.createGain(),c=i.createChannelMerger(2),u=i.createGain();s.delayTime.value=.31,r.delayTime.value=.31,a.gain.value=.42,o.type="lowpass",o.frequency.value=2200,l.gain.value=.5,u.connect(s),s.connect(o),o.connect(r),r.connect(a),a.connect(s),o.connect(c,0,0),r.connect(c,0,1),c.connect(l),l.connect(e);let h=(y,{to:x,at:_=t,dur:R=1,echo:E=.5}={})=>{let A=i.createGain();if(E){let C=i.createGain();C.gain.value=E,A.connect(C),C.connect(u)}if(i.createStereoPanner){let C=i.createStereoPanner();C.pan.setValueAtTime(y,_),x!==void 0&&C.pan.linearRampToValueAtTime(x,_+R),A.connect(C),C.connect(n)}else A.connect(n);return A},f=185,p=369.99,g=1174.66,v=1479.98;qi(i,h(-.95,{to:.95,dur:2,echo:.2}),t,{dur:2.6,gain:.045,f0:90,f1:2600,attack:.66,q:.6}),nt(i,h(0,{echo:0}),Ne.D2/2,t,{attack:1.6,decay:3.2,gain:.1,partials:[[1,1],[2,.55],[3,.12]]}),nt(i,h(-.7),Ne.A2,t,{attack:1.5,decay:3,gain:.034,partials:[[1,1],[2,.25]]}),nt(i,h(.7),f,t,{attack:1.5,decay:3,gain:.028,partials:[[1,1],[2,.2]]});let m=t+1.85;nt(i,h(0,{echo:.15}),Ne.D2,m,{attack:.005,decay:1.8,gain:.26,partials:[[1,1],[2,.35],[3,.08]],glideTo:36.7}),nt(i,h(0,{echo:0}),58,m,{attack:.004,decay:.5,gain:.2,partials:[[1,1]],glideTo:30}),qi(i,h(-.2,{to:-1,at:m,dur:.9,echo:.3}),m,{dur:1,gain:.05,f0:3600,f1:200,attack:.03,q:.5}),qi(i,h(.2,{to:1,at:m,dur:.9,echo:.3}),m,{dur:1,gain:.05,f0:3e3,f1:160,attack:.03,q:.5}),[[Ne.D4,-.65],[p,.65],[Ne.A4,-.35],[Ne.D5,.2]].forEach(([y,x],_)=>{let R=m+.12+_*.4;nt(i,h(x),y,R,{decay:1.8,gain:.06}),nt(i,h(-x,{echo:.7}),y*2,R,{decay:1.2,gain:.016,partials:[[1,1]]})});let d=m+.12+4*.4;return nt(i,h(0,{echo:0}),Ne.D2,d,{attack:.02,decay:3.2,gain:.13,partials:[[1,1],[2,.45],[3,.12]]}),nt(i,h(0,{echo:0}),Ne.D2/2,d,{attack:.05,decay:3,gain:.09,partials:[[1,1]]}),[[Ne.D3,-.5,.045],[Ne.A3,.5,.04],[p,-.3,.036],[Ne.A4,.3,.03],[Ne.D5,0,.034]].forEach(([y,x,_])=>nt(i,h(x),y,d,{attack:.03,decay:3,gain:_,partials:[[1,1],[2,.3]]})),[[Ne.A5,-.95],[g,.95],[v,-.8]].forEach(([y,x],_)=>nt(i,h(x,{echo:.9}),y,d+.45+_*.3,{attack:.004,decay:1.1,gain:.012,partials:[[1,1]]})),7.4}},senal:{name:"Se\xF1al",desc:"Tres pitidos secos (la, la, re) con eco que se aleja, como un instrumento que encuentra su dato. Corto y t\xE9cnico.",play(i,e,t){let n=[[Ne.A4,0,.18],[Ne.A4,.16,.18],[Ne.D5,.36,1.1]];for(let[s,r]of[[0,1],[1,.4],[2,.16]])for(let[a,o,l]of n)nt(i,e,a,t+o+s*.42,{attack:.004,decay:l,gain:.05*r,partials:[[1,1],[2,.15]]});return 2.4}}},Wo=class{constructor(){this.ctx=null}ensure(e,t){if(this.ctx===e)return!0;try{let n=e.createBufferSource();return n.buffer=Ud(e),n.loop=!0,this.bp=e.createBiquadFilter(),this.bp.type="bandpass",this.bp.Q.value=2.6,this.bp.frequency.value=500,this.g=e.createGain(),this.g.gain.value=0,this.pan=e.createStereoPanner?e.createStereoPanner():null,n.connect(this.bp),this.bp.connect(this.g),this.pan?(this.g.connect(this.pan),this.pan.connect(t)):this.g.connect(t),n.start(),this.ctx=e,!0}catch{return!1}}set(e,t,n,s=.5,r=0){if(!this.ensure(e,t))return;let a=e.currentTime,o=Math.min(1,Math.max(0,n));this.g.gain.setTargetAtTime(o*.026,a,.05),this.bp.frequency.setTargetAtTime(350+2600*Math.min(1,Math.max(0,s)),a,.06),this.pan&&this.pan.pan.setTargetAtTime(Math.min(1,Math.max(-1,r)),a,.08)}};var Ot={gases:{num:"01",name:"Gases de efecto invernadero",short:"Gases",color:16726815,pressure:16726815,az:0,line:"La atm\xF3sfera respira. Un comp\xE1s es un a\xF1o: cada respiraci\xF3n empieza m\xE1s arriba."},hielo:{num:"02",name:"Hielo marino",short:"Hielo",color:3107839,pressure:16726815,az:120,line:"El \xC1rtico en septiembre. El grave que crece es la temperatura."},jungla:{num:"03",name:"Jungla",short:"Jungla",color:1026392,pressure:16726815,az:-120,line:"La Amazonia. Lo talado no vuelve: las voces que se apagan no regresan."}},qu=4063130,ca={lobby:{file:"glb/lobby.glb",position:[0,0,0],rotationY:60,scale:1,hideProcedural:!1},gases:{file:"glb/gases.glb",position:[0,0,-26.1],rotationY:0,scale:1,hideProcedural:!1,center:[0,0,14.1],seed:11,sectorScale:[.8,.97],scatter:[{match:"^Pluma_Humo|^Voz_Atmosfera|^Particulas_CO2",copy:!0}]},gases2:{file:"glb/gases2.glb",position:[0,0,-26.1],rotationY:0,scale:1,hideProcedural:!1,center:[0,0,14.1],seed:11,sectorScale:[.8,.97],scatter:[{match:"^Pluma_Humo|^Voz_Atmosfera|^Particulas_CO2",copy:!0}]},hielo0:{file:"glb/hielo0.glb",position:[0,0,-26.1],rotationY:0,scale:1,hideProcedural:!1,center:[0,0,26.1],seed:23,scatter:[{match:"^Placa_Hielo|^Voz_Verde",move:.72,r:[.75,1.3]},{match:"^Lineas_Agua|^Cordillera_Nieve",copy:!0}]},hielo:{file:"glb/hielo.glb",position:[0,0,-26.1],rotationY:0,scale:1,hideProcedural:!1,center:[0,0,26.1],seed:23,scatter:[{match:"^Placa_Hielo|^Voz_Verde",move:.72,r:[.75,1.3]},{match:"^Lineas_Agua",copy:!0}]},hielo2:{file:"glb/hielo2.glb",position:[0,0,-26.1],rotationY:0,scale:1,hideProcedural:!1,center:[0,0,26.1],seed:23,scatter:[{match:"^Placa_Deshielo",move:.72,r:[.75,1.3]},{match:"^Lineas_Agua",copy:!0}]},jungla:{file:"glb/jungla.glb",position:[0,0,-9.4],rotationY:0,scale:.6,scaleY:3,hideProcedural:!1,center:[0,0,15.7],seed:37,sectors:7,sectorScale:[.85,1.2],scatter:[{match:"^Fronda_Marco",hide:!0},{match:"^Tallos_",copy:!0},{match:"^Hoja_|^Voz_",instanced:!0,keep:.6,thin:.3}]},jungla2:{file:"glb/jungla2.glb",position:[0,0,-9.4],rotationY:0,scale:.6,scaleY:3,hideProcedural:!1,center:[0,0,15.7],seed:37,sectors:7,sectorScale:[.85,1.2],scatter:[{match:"^Fronda_Marco",hide:!0},{match:"^Tallos_|^Tocones_",copy:!0},{match:"^Hoja_|^Voz_",instanced:!0,keep:.6,thin:.3}]},fin:{file:"glb/fin.glb",position:[0,0,0],rotationY:0,scale:1,hideProcedural:!0}},qe={variantAt3:[.33,.66],variantAt:.5,platformLift:1.4,introBars:2,sphereCenter:[0,1.38,-.7],sphereBelowEyes:.42,sphereRadius:.2,sphereVolume:2,pauseBelowScale:.75,maxScale:2.2,maxYearsPerBar:4,comfort:.7,vibrarMelodia:!1,giroRatio:2,sonidoRico:!0,smogMax:.045,smogColor:4865072,voz:{rate:.92,pitch:1.05,volume:.95,pausa:280,respiro:2500,nivel:1.15,duck:.5},lobbyLevel:.16,leitmotiv:"marea",diagnostico:!0};var ft=Math.PI/180,Bt=Math.PI*2,Tn=(i,e,t)=>new L(Math.sin(i*ft)*e,t,-Math.cos(i*ft)*e),et=(i,e,t)=>i+(e-i)*t,_t=(i,e,t)=>Math.min(t,Math.max(e,i)),u_=i=>"#"+i.toString(16).padStart(6,"0"),Rt=new vo({antialias:!0});Rt.setPixelRatio(Math.min(window.devicePixelRatio,2));Rt.setSize(window.innerWidth,window.innerHeight);Rt.xr.enabled=!0;Rt.xr.setReferenceSpaceType("local-floor");document.body.appendChild(Rt.domElement);var Dt=new yo;Dt.background=new Se(526344);var _s={color:new Se(qe.smogColor??4865072),base:new Se(526344),k:0};Dt.fog=new _o(_s.color.getHex(),0);var pn=new Ht(70,window.innerWidth/window.innerHeight,.05,400);pn.position.set(0,1.6,0);pn.rotation.order="YXZ";Dt.add(pn);Dt.add(new Co(16777215,2241348,1.2));var Zd=new or(16777215,1.2);Zd.position.set(2,5,3);Dt.add(Zd);var te=new Ho;te.rich=qe.sonidoRico!==!1;var qt=new Vo;qt.level=qe.comfort;var tn=(i,e,t)=>{i?qt.play(i,e,t):(qt.play("left",e,t),qt.play("right",e,t)),(e==="faro"||e==="tope")&&Si.some(n=>n.isHand&&(!i||n.hand===i))&&te.tick(e==="faro"?1700:420,e==="faro"?.012:.04)},I={state:"inicio",info:!1,desc:!1,dash:"hielo",yearPos:0,scale:1,speed:1,scrubbing:!1,sensory:!1,uiAlpha:1,hover:null,xr:!1,beat:0};I.lang=(()=>{try{return localStorage.getItem("orbis-lang")}catch{return null}})()==="en"?"en":"es";var we=(i,e)=>I.lang==="en"?e:i,Ma=()=>I.lang==="en"?"en-US":"es-MX",Yo={name:{gases:"Greenhouse gases",hielo:"Sea ice",jungla:"Rainforest"},unit:{gases:"ppm of CO\u2082 at Mauna Loa",hielo:"million km\xB2 in September",jungla:"km\xB2 cleared that year"},source:{gases:"NOAA Global Monitoring Laboratory",hielo:"NSIDC Sea Ice Index, Arctic",jungla:"INPE PRODES, Legal Amazon"},voz:{bajo:"bass",arpegio:"melody",pulso:"pulse",canto:"song"}};for(let i of zt){let e=Ot[i],t=Kn[i],n={name:e.name,unit:t.unit,source:t.source};Object.defineProperty(e,"name",{get:()=>we(n.name,Yo.name[i])}),Object.defineProperty(t,"unit",{get:()=>we(n.unit,Yo.unit[i])}),Object.defineProperty(t,"source",{get:()=>we(n.source,Yo.source[i])})}window.__nucleo={app:I,synth:te,haptics:qt};var ju=1/0,Xo=-1;function ln(i,e){let t=te.ctx;if(!(!t||t.state!=="running"||!te.nodes))try{let n=t.createGain();n.gain.value=Math.min(4,.5/Math.max(.05,te.level))*(e&&e.vol||1),n.connect(te.nodes.master),zd[i](t,n,t.currentTime,e)}catch{}}var Kd=[];function dn(i,e=1){return i.transparent=!0,i.userData.base=e,i.opacity=e,Kd.push(i),i}var Jd=[],Ki=[],Ko={lift:0};function Gn(i,e,t){return i.userData.hoverId=e,i.userData.onSelect=t,Jd.push(i),i}function ch(i,e,t,n,s,r){let a="";for(let o of e.split(" ")){let l=a?a+" "+o:o;i.measureText(l).width>s&&a?(i.fillText(a,t,n),a=o,n+=r):a=l}return a&&i.fillText(a,t,n),n+r}var uh=[];function Ei(i,e,t,n,s){let r=document.createElement("canvas");r.width=t,r.height=n;let a=r.getContext("2d"),o=new Qr(r);o.colorSpace=Nt,o.anisotropy=4;let l=new ke(new Bi(i,e),dn(new Pt({map:o,depthWrite:!1,side:Ut})));return l.redraw=()=>{a.clearRect(0,0,t,n),a.save(),a.shadowColor="rgba(0,0,0,.75)",a.shadowBlur=16,s(a,t,n),a.restore(),o.needsUpdate=!0},l.renderOrder=10,l.redraw(),uh.push(l),l}var Et='"Manrope", "Helvetica Neue", Helvetica, Arial, sans-serif',rt={panel:"#141414",atmo1:"#131a21",atmo2:"#46525c",hairline:"#292929",track:"#262626",grey2:"#1f1f1f",tick:"#6e6e6e",ink:"#f5f5f5",muted:"#a8a8a8",signal:"#ff5a3c",orbit:"#5b8cff",live:"#3dff9a"},Ti=i=>({16726815:rt.signal,3107839:rt.orbit,1026392:rt.live})[i]||u_(i),Zi=(i,e)=>{try{i.letterSpacing=e+"px"}catch{}};function hh(i,e,t,n,s){i.save(),i.lineCap="round",i.strokeStyle=s,i.globalAlpha=.55,i.shadowColor=s,i.shadowBlur=14,i.lineWidth=10,i.beginPath(),i.moveTo(e,t),i.lineTo(e+n,t),i.stroke(),i.globalAlpha=1,i.shadowBlur=0,i.lineWidth=4,i.beginPath(),i.moveTo(e,t),i.lineTo(e+n,t),i.stroke(),i.restore()}var va=new gi(new ta(new rr(7,3)),dn(new Qt({color:7237230}),.06));va.position.y=1.2;Dt.add(va);var fh=new ke(new ms(.35,.38,64),dn(new Pt({color:16777215,side:Ut}),.35));fh.rotation.x=-Math.PI/2;fh.position.y=.01;Dt.add(fh);var Ji=new St,En=new St,Sa=new St;Dt.add(Ji,En,Sa);var Tr={lobby:[],fin:[],amb:[]},Qd={};for(let i of zt){let e=Ot[i],t=Kn[i],n=new ke(new ms(.55,1.7,48,1,(90-e.az-58)*ft,116*ft),dn(new Pt({color:e.color,side:Ut,depthWrite:!1}),.28));n.rotation.x=-Math.PI/2,n.position.y=.02;let s=Ei(1.7,1,1024,602,(a,o,l)=>{a.fillStyle=rt.muted,a.font=`600 30px ${Et}`,a.fillText(e.num,56,96),hh(a,56+a.measureText(e.num).width+22,86,28,Ti(e.color)),a.fillStyle=rt.ink,a.font=`700 ${e.name.length>14?68:104}px ${Et}`,Zi(a,-2.5);let c=ch(a,e.name,52,e.name.length>14?196:216,o-104,76);Zi(a,0),a.fillStyle=rt.muted,a.font=`500 26px ${Et}`,a.fillText(`${t.years[0].year}\u2013${t.years[t.years.length-1].year} \xB7 ${t.source}`,56,c+4)});s.position.copy(Tn(e.az,2.6,1.55)),s.lookAt(0,1.55,0),Ki.push(s);let r=()=>Wn(i);Gn(n,i,r),Gn(s,i,r),Ji.add(n,s),Tr.lobby.push(s),Qd[i]={sec:n,pan:s}}var bs=Ei(1.5,.3,1024,205,(i,e,t)=>{i.textAlign="center",i.fillStyle=rt.ink,i.font=`700 72px ${Et}`,Zi(i,-2),i.fillText("Orbe",e/2,88),Zi(i,0),i.fillStyle=rt.muted,i.font=`500 28px ${Et}`,i.fillText(we("Elige un lugar","Choose a place"),e/2,150),qe.diagnostico&&(i.font=`500 20px ${Et}`,i.fillText(`${I.xr?"VR":we("Pantalla","Screen")} \xB7 ${qt.describe()}`,e/2,192)),i.textAlign="left"});bs.position.copy(Tn(0,2.6,2.35));bs.lookAt(0,2,0);Ji.add(bs);Tr.lobby.push(bs);var e0={bajo:.5,pulso:.85,arpegio:1.2,canto:1.55},dh=3.4,an=[],Ju=new St;En.add(Ju);var Fd=new Pe,t0=new Se,hr=new L,h_=new _n,Yu=new L;function n0(i){let e=[];return i.forEach((t,n)=>t&&e.push(n)),e}function _a(i,e,t,n,s,r){let a=[],o=[],l=[];for(let u=0;u<=s;u++){let h=u/s,f=et(e,t,h),p=Math.sin(f)*i,g=-Math.cos(f)*i,v=r?h*h:1;if(a.push(p,-n/2,g,p,n/2,g),o.push(v,v,v,v,v,v),u<s){let m=u*2;l.push(m,m+1,m+2,m+1,m+3,m+2)}}let c=new ct;return c.setAttribute("position",new st(a,3)),c.setAttribute("color",new st(o,3)),c.setIndex(l),c}var f_=_a(dh,-15*ft,0,.012,15,!0),d_=_a(dh,-1.4*ft,.2*ft,.028,3,!1),Bd=()=>new Pt({color:0,vertexColors:!0,blending:us,depthWrite:!1,transparent:!0,side:Ut});function p_(){for(let i of an)Ju.remove(i.mesh,i.head),i.mesh.material.dispose(),i.head.material.dispose();an=[],te.reference.voices.forEach((i,e)=>n0(i.pattern).forEach((t,n)=>{let s=new ke(f_,Bd()),r=new ke(d_,Bd());s.position.y=r.position.y=e0[i.id]??1,s.frustumCulled=r.frustumCulled=!1,Ju.add(s,r),an.push({voice:i.id,vi:e,j:n,az:t/16*360,flash:0,alive:!0,mesh:s,head:r})}))}function Yi(){let i=0;for(let e of an)e.alive&&i++;return i}function i0(){let i=te.derived;for(let e of an){let t=i.voices[e.vi],n=n0(t.pattern)[e.j];e.step=n,e.targetAz=n/16*360,e.alive=t.active&&t.alive[n]}}var hy=new Se(qu),fy=new Se(3552822),$u=new Se;function m_(i,e){$u.set(Ti(Ot[I.dash].color));for(let t of an){let n=(t.targetAz-t.az+540)%360-180;t.az+=n*Math.min(1,i*3),t.flash=Math.max(0,t.flash-i*1.8),t.mesh.rotation.y=t.head.rotation.y=-t.az*ft,t.mesh.material.color.copy($u).multiplyScalar((t.alive?.2+t.flash*1.1:.035)*e),t.head.visible=t.alive&&t.flash>.02,t.head.material.color.copy($u).lerp(t0.set(16777215),.35).multiplyScalar(t.flash*1.5*e)}}var _r=(i,e,t,n)=>new ki(new ct().setFromPoints(Array.from({length:128},(s,r)=>new L(Math.sin(r/128*Bt)*i,e,-Math.cos(r/128*Bt)*i))),dn(new Qt({color:t}),n)),g_=Object.values(e0).map(i=>{let e=_r(dh,i,16777215,.07);return En.add(e),e}),Qu=14,v_=Array.from({length:Qu},(i,e)=>{let t=_r(4.2,2.3+e*.16+e%2*.04,16734780,0);return En.add(t),t});[3,6,9].forEach((i,e)=>En.add(_r(i,.014-qe.platformLift,16777215,[.08,.055,.035][e])));var s0=new St;En.add(s0);var sl=new St;En.add(sl);var ph=new ke(new sr(1.5,1.42,.07,72),new bn({color:1052688,roughness:.55,metalness:.5}));ph.position.y=-.036;sl.add(ph,_r(1.5,.002,16119285,.3),_r(1.1,.002,16119285,.09));sl.add(new gi(new ct().setFromPoints(Array.from({length:12},(i,e)=>[Tn(e*30,1.54,.002),Tn(e*30,e%3===0?1.62:1.58,.002)]).flat()),dn(new Qt({color:7237230}),.8)));var rl=new ke(new ms(1.455,1.49,24,1,82*ft,16*ft),new Pt({color:16777215,blending:us,depthWrite:!1,transparent:!0,side:Ut}));rl.rotation.x=-Math.PI/2;rl.position.y=.003;sl.add(rl);var ji=i=>`${Math.round(_t(i,0,1)*100)} %`,nn=Ei(1.3,.62,1280,610,(i,e,t)=>{let n=Ot[I.dash],s=Kn[I.dash],r=te.entry,a=te.derived,o=Ti(n.color),l=I.hover==="isla";i.fillStyle=rt.muted,i.font=`600 30px ${Et}`,i.fillText(`${n.num} \xB7 ${n.name}`,52,72),i.fillStyle=rt.ink,i.font=`700 150px ${Et}`,Zi(i,-4.5),i.fillText(te.idx===0?we("Intacto","Intact"):String(r.year),44,232),Zi(i,0);let c=52,u=I.info?e-52:700,h=282,f=te.idx/te.count,p=et(c,u,f);i.fillStyle="rgba(245,245,245,.22)",i.fillRect(c,h-1,u-c,2),i.fillStyle=rt.ink,i.fillRect(c,h-2,p-c,4),hh(i,Math.max(c,p-26),h,26,o);let g=(v,m)=>{i.fillStyle=l?rt.ink:rt.muted,i.font=`${l?700:600} 34px ${Et}`,i.fillText(v,52,m),i.fillRect(52,m+12,i.measureText(v).width,l?4:2)};if(!I.info){g(we("Ver el dato","See the data"),362);return}i.fillStyle=rt.ink,i.font=`600 46px ${Et}`,i.fillText(te.idx===0?we("As\xED suena el lugar sano","This is how the healthy place sounds"):`${Number(r.value).toLocaleString(Ma())} ${s.unit}`,52,356),i.fillStyle=rt.muted,i.font=`500 32px ${Et}`,i.fillText(we(`${Yi()} de ${an.length} voces vivas`,`${Yi()} of ${an.length} voices alive`),52,410),i.fillText(we(`Vitalidad ${ji(a.v)} \xB7 Diversidad ${ji(a.d)} \xB7 Estabilidad ${ji(a.s)} \xB7 Presi\xF3n ${ji(a.p)}`,`Vitality ${ji(a.v)} \xB7 Diversity ${ji(a.d)} \xB7 Stability ${ji(a.s)} \xB7 Pressure ${ji(a.p)}`),52,458),i.font=`500 26px ${Et}`,i.fillText(`${s.years[0].year}\u2013${s.years[s.years.length-1].year} \xB7 ${we("Fuente","Source")}: ${s.source}`,52,504),g(we("Ocultar","Hide"),568)});nn.position.copy(Tn(26,2.3,1.72));nn.lookAt(0,1.6,0);En.add(nn);Ki.push(nn);Gn(nn,"isla",()=>_h());var ua=i=>i.length<2?i.join(""):i.slice(0,-1).join(", ")+we(" y "," and ")+i[i.length-1];function mh(){if(I.state==="lobby"){let c=f=>{let p=Ss(Ot[f].az*ft-Q.angle);return Math.abs(p)<.3?we("al frente","in front"):p>0?we("a tu derecha","on your right"):we("a tu izquierda","on your left")},u=ua(zt.map(f=>`${Ot[f].name} ${c(f)}`)),h=Ot[Q.front].name;return[we(`Lobby. Tres lugares a tu alrededor: ${u}.`,`Lobby. Three places around you: ${u}.`),we(`Al frente: ${h}. Suena su firma.`,`In front: ${h}. Its signature is playing.`),we("Mant\xE9n el gatillo y mueve la mano para girar el mundo. Un toque corto entra al lugar del frente.","Hold the trigger and move your hand to turn the world. A short press enters the place in front.")]}let i=Ot[I.dash],e=Kn[I.dash],t=te.entry,n=te.derived,s=we(`Quedan ${Yi()} de ${an.length} voces.`,`${Yi()} of ${an.length} voices remain.`);if(I.state==="fin")return[we(`Fin del recorrido en ${i.name}.`,`End of the journey in ${i.name}.`),s,we("Toca el centro del aro para volver al lobby.","Tap the centre of the ring to go back to the lobby.")];let r=c=>we(c.id,Yo.voz[c.id]||c.id),a=n.voices.filter(c=>c.active).map(r),o=n.voices.filter(c=>!c.active).map(r),l=Number(t.value).toLocaleString(Ma());return[te.idx===0?we(`${i.name}, lugar intacto. As\xED suena sano.`,`${i.name}, intact place. This is how it sounds when healthy.`):we(`${i.name}, a\xF1o ${t.year}: ${l} ${e.unit}.`,`${i.name}, year ${t.year}: ${l} ${e.unit}.`),we(`Suenan ${ua(a)||"muy pocas voces"}${o.length?`. En silencio: ${ua(o)}`:""}. ${Yi()} de ${an.length} voces vivas.`,`Playing: ${ua(a)||"very few voices"}${o.length?`. Silent: ${ua(o)}`:""}. ${Yi()} of ${an.length} voices alive.`),n.p<.33?we("Sonido claro y estable.","Clear, steady sound."):n.p<.66?we("El sonido se tensa: hay m\xE1s presi\xF3n.","The sound tightens: pressure is rising."):we("Sonido denso y \xE1spero: presi\xF3n alta.","Dense, rough sound: high pressure."),we("Vibraci\xF3n: cada a\xF1o es un toque; las d\xE9cadas, uno m\xE1s firme. Mant\xE9n el gatillo y gira la mano alrededor de la esfera para moverte en el tiempo.","Vibration: each year is one tap; decades, a firmer one. Hold the trigger and move your hand around the sphere to travel in time.")]}var ze={pending:"",at:0,token:0,cache:{},prio:!1,key:"",lastKey:"",lastText:"",speaking:!1,endedAt:0,dashSaid:""};function __(){let i=I.lang==="en"?"en":"es";if(ze.cache[i])return ze.cache[i];let e=(speechSynthesis.getVoices()||[]).filter(o=>(o.lang||"").toLowerCase().replace("_","-").startsWith(i));if(!e.length)return null;let t=/paulina|m[oó]nica|sabina|dalia|elvira|helena|laura|paloma|marisol|ximena|elena|lucia|lucía|isabela|angelica|angélica|soledad|samantha|aria|jenny|zira|sonia|libby|karen|moira|tessa|allison|ava|susan|emma|michelle|serena|victoria|female|mujer|femenin/i,n=/jorge|juan|diego|pablo|ra[uú]l|carlos|enrique|david|mark|daniel|alex|fred|guy|ryan|george|tom|aaron|male\b|hombre|masculin/i,s=/natural|neural|online|premium|enhanced|mejorad|siri|wavenet/i,r=I.lang==="en"?["en-us","en-gb"]:["es-mx","es-us","es-419","es-es"],a=o=>{let l=o.name||"",c=(o.lang||"").toLowerCase().replace("_","-"),u=r.indexOf(c);return(t.test(l)?6:0)-(n.test(l)&&!t.test(l)?6:0)+(s.test(l)?5:0)+(/google/i.test(l)?2:0)+(u>=0?3-u*.5:0)+(o.localService?0:1)};return ze.cache[i]=e.slice().sort((o,l)=>a(l)-a(o))[0]}if(window.speechSynthesis)try{speechSynthesis.addEventListener("voiceschanged",()=>{ze.cache={}}),speechSynthesis.getVoices()}catch{}var Tt={idx:null,packs:{},loading:{},src:null,gain:null,cache:new Map};function gh(){let i=I.lang;return Tt.loading[i]?Tt.loading[i]:Tt.loading[i]=(async()=>{Tt.idx||(Tt.idx=await(await fetch("voz/voz.json")).json()),Tt.packs[i]=await(await fetch(`voz/voz-${i}.bin`)).arrayBuffer()})().catch(()=>{Tt.loading[i]=null})}function r0(i){let e=Tt.idx&&Tt.idx[I.lang];return!!(e&&Tt.packs[I.lang]&&te.ctx&&i.every(t=>e[t]))}function eh(i){te.nodes&&te.nodes.master.gain.setTargetAtTime(te.level*(i?(qe.voz&&qe.voz.duck)??.5:1),te.ctx.currentTime,.25)}function vh(){if(Tt.src){try{Tt.src.onended=null,Tt.src.stop()}catch{}Tt.src=null,eh(!1)}}async function y_(i,e,t){let n=te.ctx,s=I.lang,r=Tt.idx[s];Tt.gain||(Tt.gain=n.createGain(),Tt.gain.connect(n.destination)),Tt.gain.gain.value=(qe.voz&&qe.voz.nivel)??1.15,eh(!0);try{for(let a of i){let o=s+"|"+a,l=!/_\d+$/.test(a)||a.startsWith("presion_"),c=Tt.cache.get(o);if(!c){let[u,h]=r[a];c=await n.decodeAudioData(Tt.packs[s].slice(u,u+h)),l&&Tt.cache.set(o,c)}if(e!==ze.token||!I.desc||(await new Promise(u=>{let h=n.createBufferSource();h.buffer=c,h.connect(Tt.gain),h.onended=u,Tt.src=h,h.start()}),e!==ze.token))return;await new Promise(u=>setTimeout(u,240))}}catch{}finally{e===ze.token&&(Tt.src=null,eh(!1),t())}}function ha(i,{prio:e=!1,key:t="",espera:n=800,clips:s=null}={}){if(!(!I.desc||!i||!window.speechSynthesis&&!(s&&r0(s)))){if(!e&&(t&&t===ze.lastKey||i===ze.lastText)){ze.prio||(ze.pending="");return}ze.pending&&ze.prio&&!e||(ze.pending=i,ze.clips=s,ze.prio=e,ze.key=t,ze.at=performance.now()+(e?Math.min(n,400):n))}}function x_(){let i=performance.now();if(!ze.pending||i<ze.at)return;if(I.scrubbing||Si.some(o=>o.grab||o.grip)){ze.at=i+400;return}let e=qe.voz||{};if(!ze.prio&&(ze.speaking||i-ze.endedAt<(e.respiro??2500)))return;let t=ze.pending,n=t.split(/(?<=[.!?])\s+/).filter(Boolean),s=++ze.token;ze.pending="",ze.lastText=t,ze.lastKey=ze.key,ze.prio=!1,ze.speaking=!0;let r=()=>{s===ze.token&&(ze.speaking=!1,ze.endedAt=performance.now())},a=ze.clips;if(ze.clips=null,vh(),a&&r0(a)){try{window.speechSynthesis&&speechSynthesis.cancel()}catch{}y_(a,s,r);return}try{speechSynthesis.cancel();let o=__(),l=c=>{if(s!==ze.token)return;if(c>=n.length||!I.desc)return r();let u=new SpeechSynthesisUtterance(n[c]);u.lang=o?o.lang:Ma(),o&&(u.voice=o),u.rate=e.rate??.92,u.pitch=e.pitch??1.05,u.volume=e.volume??.95,u.onend=()=>setTimeout(()=>l(c+1),e.pausa??280),u.onerror=u.onend,speechSynthesis.speak(u)};l(0),setTimeout(r,3e3+t.length*110)}catch{r()}}var Ms=Ei(1.5,.55,1200,440,(i,e,t)=>{if(!I.desc)return;i.fillStyle=rt.muted,i.font=`600 26px ${Et}`,i.fillText(we("Descripci\xF3n","Description"),40,52),i.fillStyle=rt.ink,i.font=`500 32px ${Et}`;let n=106;for(let s of mh())n=ch(i,s,40,n,e-80,42)+8});Ms.position.copy(Tn(-30,2.2,.95));Ms.lookAt(0,1.5,0);Ms.visible=!1;Dt.add(Ms);Ki.push(Ms);var Qn=Ei(.62,.11,900,160,(i,e,t)=>{let n=I.hover==="descripciones",s=I.desc?we("Ocultar descripciones","Hide descriptions"):we("Ver descripciones","Show descriptions");i.fillStyle=n?rt.ink:rt.muted,i.font=`${n?700:600} 54px ${Et}`,i.fillText(s,30,84),i.fillRect(30,104,i.measureText(s).width,n?4:2)});Qn.position.copy(Tn(30,2.2,.95));Qn.lookAt(0,1.5,0);Qn.visible=!1;Dt.add(Qn);Ki.push(Qn);Gn(Qn,"descripciones",()=>a0());var Es=Ei(.62,.11,900,160,(i,e,t)=>{let n=I.hover==="idioma",s=we("English","Espa\xF1ol");i.fillStyle=n?rt.ink:rt.muted,i.font=`${n?700:600} 54px ${Et}`,i.fillText(s,30,84),i.fillRect(30,104,i.measureText(s).width,n?4:2)});Es.position.copy(Tn(30,2.2,.8));Es.lookAt(0,1.5,0);Es.visible=!1;Dt.add(Es);Ki.push(Es);Gn(Es,"idioma",()=>Th(I.lang==="en"?"es":"en"));function _h(){I.info=!I.info,ln(I.info?"apertura":"cierre"),nn.redraw(),I.info&&ha(mh()[0],{prio:!0,clips:[te.idx===0?"intacto":`${I.dash}_${te.idx}`]})}function a0(){I.desc=!I.desc,ln(I.desc?"apertura":"cierre"),th="",Qn.redraw(),!I.desc&&window.speechSynthesis&&(ze.pending="",ze.token++,speechSynthesis.cancel()),I.desc?(nh="",gh()):vh()}var th="",nh="",kd=0;function b_(){qe.diagnostico&&I.state==="lobby"&&performance.now()-kd>1e3&&(kd=performance.now(),bs.redraw());let i=I.state!=="inicio"&&I.state!=="intro";if(Ms.visible=i&&I.desc,Qn.visible=i,Es.visible=i,nn.scale.setScalar(et(nn.scale.x,I.info?1:.62,.2)),!i||!I.desc)return;x_();let e=`${I.state}|${I.dash}|${te.idx}|${Q.front}`;if(e===th)return;th=e,Ms.redraw();let t=mh(),n=`${I.dash}|${te.idx}`,s=te.entry,r=()=>{let l=ze.dashSaid!==I.dash;return ze.dashSaid=I.dash,l?t[0]:te.idx===0?we("Lugar intacto.","Intact place."):`${s.year}: ${Number(s.value).toLocaleString(Ma())}.`},a=te.idx===0?"intacto":`${I.dash}_${te.idx}`,o=te.derived.p;if(I.state!==nh){nh=I.state,ze.dashSaid=I.state==="ambiente"?I.dash:"";let l=I.state==="lobby"?[ze.welcomed?"lobby":"bienvenida","frente_"+Q.front]:I.state==="ambiente"?["entrar_"+I.dash]:I.state==="fin"?["fin_"+I.dash]:null;I.state==="lobby"&&(ze.welcomed=!0),ha(I.state==="ambiente"?`${t[0]} ${t[3]}`:t.join(" "),{prio:!0,key:I.state==="ambiente"?n:I.state==="lobby"?"frente|"+Q.front:"",clips:l})}else I.state==="lobby"?ha(t[1],{key:"frente|"+Q.front,espera:1e3,clips:["frente_"+Q.front]}):I.state==="ambiente"&&performance.now()-Mh<1500?ha(r(),{key:n,espera:900,clips:[a]}):I.state==="ambiente"&&te.entry.year%10===0&&ha(`${r()} ${t[1]} ${t[2]}`,{key:n,clips:[a,"presion_"+(o<.33?0:o<.66?1:2)]})}var on=new St;on.position.fromArray(qe.sphereCenter);En.add(on);var yh=new gi(new ta(new rr(qe.sphereRadius,1)),dn(new Qt({color:16777215}),.85)),o0=new ke(new rr(.05,2),dn(new Pt({color:qu}),.9)),al=new ke(new gs(qe.sphereRadius*1.25,16,12),new Pt({transparent:!0,opacity:0,depthWrite:!1}));on.add(yh,o0,al);Tr.amb.push(yh);var je=(()=>{let i=oa.points,e=i.length/3,t=qe.sphereRadius/oa.radius,n=new Float32Array(e*3),s=new Float32Array(e*3),r=new Float32Array(e*3),a=new Float32Array(e),o=new Float32Array(e),l=new Float32Array(e*3),c=new L,u=new L,h=new L,f=new L(0,1,0);for(let m=0;m<e;m++)c.set(i[m*3],i[m*3+2],-i[m*3+1]).normalize(),u.crossVectors(f,c),u.lengthSq()<1e-6&&u.set(1,0,0),u.normalize(),h.crossVectors(c,u),n.set([c.x,c.y,c.z],m*3),s.set([u.x,u.y,u.z],m*3),r.set([h.x,h.y,h.z],m*3),a[m]=(Math.atan2(c.x,c.z)/Bt+1)%1,o[m]=Math.sqrt(Math.max(0,1-c.y*c.y)),l[m*3+1]=.6,l[m*3+2]=.22;let p=new sr(.045*t,.062*t,.24*t,6);p.translate(0,.12*t,0),p.rotateX(Math.PI/2);let g=new ps(p,new bn({color:16777215,roughness:.45,metalness:.05,flatShading:!0}),e);g.instanceMatrix.setUsage(cu),g.frustumCulled=!1,g.instanceColor=new mi(new Float32Array(e*3).fill(.22),3),g.instanceColor.setUsage(cu);let v=new ke(new gs(qe.sphereRadius*.93,32,20),new bn({color:789778,roughness:.6,metalness:.2}));return{n:e,k:t,N:n,R:s,U:r,fr:a,lat:o,st:l,mesh:g,core:v,val:null,pre:null,dash:null,crush:[null,null],lastTouch:[-1,-1],lastSound:0,expandDir:new L(0,0,1),expand:0}})();on.add(je.core,je.mesh);yh.visible=!1;o0.visible=!1;window.__nucleo.KS=je;function l0(i){let e=Kn[i],t=e.years,n=t.map(h=>Number(h.value)),s=Math.max(...n),r=(qe.sphereBase||{gases:280,hielo:0,jungla:0})[i]??Math.min(...n),a=s-r||1,o=h=>.12+.88*_t((Number(h)-r)/a,0,1),l=(h,f)=>_t(((h.vital&&h.vital.pre)??f*100)/100,0,1),c=e.reference||t[0],u=o(i==="hielo"?s:i==="gases"?r:c.value??t[0].value);je.val=new Float32Array(t.length+1),je.pre=new Float32Array(t.length+1),je.val[0]=u,je.pre[0]=l(c,.05),t.forEach((h,f)=>{je.val[f+1]=o(h.value),je.pre[f+1]=l(h,je.val[f+1])}),je.dash=i}var ih={gases:[[.52,.36,.92],[1,.4,.34],[1,.8,.36]],hielo:[[.06,.14,.42],[.25,.6,1],[.9,.97,1]],jungla:[[.04,.42,.22],[.1,.66,.34],[.24,1,.6]]},yr=new L,dy=ih.gases,c0=[0,2,4,7,9];function ma(i,e,t=!1){if(!e){je.crush[i]=null,je.lastTouch[i]=-1;return}let n=on.worldToLocal(e.clone());je.crush[i]=t?n.normalize().multiplyScalar(oa.radius):n.divideScalar(je.k)}function sh(i,e){let t=je.crush[i];if(!t||!je.val)return 0;let n=Math.min(te.count,Math.round((Math.atan2(t.x,t.z)/Bt+1)%1*te.count)),s=je.val[n];if(n!==je.lastTouch[i]){je.lastTouch[i]=n;let r=performance.now();if(r-je.lastSound>90){je.lastSound=r;let a=Math.round(s*9);te.tick(220*Math.pow(2,(c0[a%5]+12*Math.floor(a/5))/12),.04*(qe.sphereVolume??2))}e&&qt.play(e,"anio",.6+1.2*s)}return s}function M_(i,e){je.dash!==I.dash&&l0(I.dash);let{n:t,k:n,N:s,R:r,U:a,fr:o,lat:l,st:c,mesh:u,val:h,pre:f}=je,p=oa.radius,g=u.instanceMatrix.array,v=u.instanceColor.array,m=te.count,d=.418,y=2*d*1.25,x=.611,_=2*x*1.25;je.expand=et(je.expand,_t((I.scale-1)/(qe.maxScale-1),0,1),.12),vr||(on.worldToLocal(pn.getWorldPosition(yr)),je.expandDir.lerp(yr.normalize(),.1).normalize());let R=je.expand,E=je.expandDir.x*p,A=je.expandDir.y*p,C=je.expandDir.z*p,S=je.crush[0],b=je.crush[1],P=Math.min(1,i*8),B=I.yearPos,O=I.beat,G=ih[je.dash]?je.dash:"gases",$=ih[G],W=je.rnd||(je.rnd=Float32Array.from({length:t},(J,F)=>{let se=Math.sin(F*12.9898+4.1)*43758.5453;return se-Math.floor(se)}));for(let J=0;J<t;J++){let F=J*3,se=s[F],oe=s[F+1],me=s[F+2],Ue=se*p,tt=oe*p,q=me*p,ee=o[J]*m,pe=Math.floor(ee),ae=Math.min(m,pe+1),Te=ee-pe,Ie=et(h[pe],h[ae],Te),Fe=_t(.5*et(f[pe],f[ae],Te)+.5*(Ie-.12)/.88,0,1),ot=ee<=B+.5,De=Math.abs(ee-B),it=De<.75?1-De/.75:0,N=(Ie-.12)/.88,jt=Ie,$e=1,Ve=Fe,Re=!1,gt=.6+.4*l[J],Ce=.1*N;if(G==="hielo"){let le=_t((.9*N-(1-oe)/2)/.05,0,1);jt=le*(.35+.4*N),$e=et(.5,1,le),Ve=le*(.5+.5*N),gt=1,Ce=0}else G==="jungla"&&(Re=W[J]<N*.92,jt=Re?0:.5+.5*W[J*7%t],$e=Re?.7:1,Ve=W[J*13%t],Ce=0);let w=ot?(.35+jt*2.4)*gt*(1+it*(.15+O*.5)):.22,M=ot?(.85+Ie*.3)*$e:.6,k=ot?Ce:0,j=1;if(S&&(j=Math.min(j,Math.hypot(S.x-Ue,S.y-tt,S.z-q)/y)),b&&(j=Math.min(j,Math.hypot(b.x-Ue,b.y-tt,b.z-q)/y)),j<1&&(k-=.3*(1-j),M*=et(.45,1,j),w*=et(.4,1,j)),R>.002){let le=Math.min(1,Math.hypot(E-Ue,A-tt,C-q)/_),Ae=1-le*le*(3-2*le);k+=.8*x*Ae*R,M+=.25*(1-le)*R,w*=1+.6*Ae*R}c[F]=et(c[F],k,P),c[F+1]=et(c[F+1],M,P),c[F+2]=et(c[F+2],w,P);let K=c[F+1],Y=c[F+2],ye=(p*.94+c[F])*n,ie=J*16;g[ie]=r[F]*K,g[ie+1]=r[F+1]*K,g[ie+2]=r[F+2]*K,g[ie+3]=0,g[ie+4]=a[F]*K,g[ie+5]=a[F+1]*K,g[ie+6]=a[F+2]*K,g[ie+7]=0,g[ie+8]=se*Y,g[ie+9]=oe*Y,g[ie+10]=me*Y,g[ie+11]=0,g[ie+12]=se*ye,g[ie+13]=oe*ye,g[ie+14]=me*ye,g[ie+15]=1;let ge=.22,Je=.22,ne=.24;if(ot){let le=Ve<.5?$[0]:$[1],Ae=Ve<.5?$[1]:$[2],Le=Ve<.5?Ve*2:(Ve-.5)*2,ve=Math.min(1,it*.35+(1-j)*.35),Ze=et(le[0],Ae[0],Le),Be=et(le[1],Ae[1],Le),dt=et(le[2],Ae[2],Le);Re&&(Ze=.8,Be=.42,dt=.18),ge=et(Ze,1,ve),Je=et(Be,1,ve),ne=et(dt,1,ve)}v[F]=et(v[F],ge,P),v[F+1]=et(v[F+1],Je,P),v[F+2]=et(v[F+2],ne,P)}u.instanceMatrix.needsUpdate=!0,u.instanceColor.needsUpdate=!0}var Er=Ei(1.7,.8,1280,602,(i,e,t)=>{let n=Ot[I.dash],s=Kn[I.dash],r=Ti(n.color),a=s.years[s.years.length-1];i.fillStyle=rt.muted,i.font=`600 28px ${Et}`;let o=`${n.num} \xB7 ${n.name}`;i.fillText(o,56,84),hh(i,56+i.measureText(o).width+22,74,28,r),i.fillStyle=rt.ink,i.font=`700 124px ${Et}`,Zi(i,-4),i.fillText(`${s.years[0].year} \u2192 ${a.year}`,50,236),Zi(i,0),i.font=`600 40px ${Et}`,i.fillText(we(`Quedan ${Yi()} de ${an.length} voces.`,`${Yi()} of ${an.length} voices remain.`),56,322),i.fillStyle=rt.muted,i.font=`500 30px ${Et}`,i.fillText(we("Lo que escuchaste es el dato. Nada fue grabado.","What you heard is the data. Nothing was recorded."),56,376),i.font=`500 24px ${Et}`,ch(i,`${Number(a.value).toLocaleString(Ma())} ${s.unit} ${we("en","in")} ${a.year} \xB7 ${s.source}`,56,450,e-112,34)});Er.position.copy(Tn(0,2.4,2.25));Er.lookAt(0,1.6,0);Sa.add(Er);Ki.push(Er);Tr.fin.push(Er);function u0(i,e,t,n){let s=Ei(.75,.24,640,205,(r,a,o)=>{let l=I.hover===t,c=i();r.fillStyle=l?rt.ink:"#d6d6d6",r.font=`${l?700:600} 54px ${Et}`,r.textAlign="center",r.fillText(c,a/2,112);let u=r.measureText(c).width;r.textAlign="left",r.fillStyle=l?rt.ink:"rgba(245,245,245,.28)",r.fillRect(a/2-u/2,146,u,l?4:2)});return s.position.copy(Tn(e,2.3,1.15)),s.lookAt(0,1.3,0),Sa.add(s),Ki.push(s),Tr.fin.push(s),Gn(s,t,n),s}var S_=u0(()=>we("Repetir","Replay"),-11,"repetir",()=>Wn(I.dash)),T_=u0(()=>we("Volver al lobby","Back to lobby"),11,"lobby",()=>Ar());document.fonts&&Promise.all([500,600,700].map(i=>document.fonts.load(`${i} 32px Manrope`))).then(()=>uh.forEach(i=>i.redraw())).catch(()=>{});var E_=new Bo,xs={};window.__nucleo.glb=xs;var mr={done:0,total:0};function ga(i,e){let t=ca[i];mr.total++,E_.load(t.file,n=>{mr.done++;let s=n.scene;if(s.position.fromArray(t.position),s.rotation.y=t.rotationY*ft,s.scale.setScalar(t.scale),s.scale.y*=t.scaleY??1,e.add(s),xs[i]=s,t.scatter&&A_(s,t),t.hideProcedural)for(let r of Tr[i==="esfera"?"amb":i]||[])r.material.userData.base=0;s.traverse(r=>{if(!r.isMesh)return;let a=r.name.toLowerCase();for(let o of zt)a.includes(o)&&i==="lobby"&&Gn(r,o,()=>Wn(o));i==="fin"&&a.includes("repetir")&&Gn(r,"repetir",()=>Wn(I.dash)),i==="fin"&&a.includes("lobby")&&Gn(r,"lobby",()=>Ar())}),w_(s),console.info(`[N\xFAcleo] GLB cargado: ${t.file}`)},void 0,()=>{mr.done++,console.info(`[N\xFAcleo] sin ${t.file}: se usa la escena generada`)})}function A_(i,e){let t=(e.seed??1)>>>0,n=()=>{t=t+1831565813|0;let f=Math.imul(t^t>>>15,1|t);return f=f+Math.imul(f^f>>>7,61|f)^f,((f^f>>>14)>>>0)/4294967296},s=new L().fromArray(e.center||[0,0,0]),r=[...i.children],a=e.minDist??9,o=e.sectors??4,l=e.sectorScale??[.9,1.25],c=Array.from({length:o},(f,p)=>p===0?{a:0,s:1}:{a:p/o*Bt+(n()-.5)*.5,s:et(l[0],l[1],n())}),u=(f,p,g)=>{let v=new St;v.position.copy(s),v.rotation.y=p,v.scale.set(g,1,g),i.add(v),v.add(f),f.position.sub(s)},h=c.map(f=>new Pe().makeTranslation(s.x,s.y,s.z).multiply(new Pe().makeRotationY(f.a)).multiply(new Pe().makeScale(f.s,1,f.s)).multiply(new Pe().makeTranslation(-s.x,-s.y,-s.z)));for(let f of e.scatter){let p=new RegExp(f.match);if(f.instanced){let g=new Map;for(let v of r){if(!p.test(v.name)||!v.isMesh)continue;v.updateMatrix();let m=v.geometry.uuid+v.material.uuid;g.has(m)||g.set(m,{geo:v.geometry,mat:v.material,name:v.name,ms:[]});for(let d=1;d<o;d++)n()<(f.keep??1)&&g.get(m).ms.push(new Pe().multiplyMatrices(h[d],v.matrix));f.thin&&n()<f.thin&&(v.visible=!1)}for(let v of g.values()){if(!v.ms.length)continue;let m=new ps(v.geo,v.mat,v.ms.length);m.name=v.name,v.ms.forEach((d,y)=>m.setMatrixAt(y,d)),m.frustumCulled=!1,i.add(m)}continue}for(let g of r)if(p.test(g.name)){if(f.hide){g.visible=!1;continue}if(f.copy)for(let v=1;v<o;v++)u(g.clone(),c[v].a,c[v].s);if(f.distribute){let v=Math.floor(n()*o);v>0&&u(g,c[v].a,c[v].s)}if(f.move&&n()<f.move)for(let v=0;v<8;v++){let m=n()*Bt,d=et(f.r[0],f.r[1],n()),y=(g.position.x-s.x)*d,x=(g.position.z-s.z)*d,_=s.x+y*Math.cos(m)+x*Math.sin(m)+i.position.x,R=s.z-y*Math.sin(m)+x*Math.cos(m)+i.position.z;if(Math.hypot(_,R)>=a||v===7){u(g,m,d);break}}}}}var fa=[];function w_(i){i.updateWorldMatrix(!0,!0);let e=new Pe;i.traverse(t=>{if(!(!t.isMesh||!/^Voz_/.test(t.name)||!t.visible))if(t.isInstancedMesh)for(let n=0;n<t.count;n++)t.getMatrixAt(n,e),fa.push({root:i,pos:new L().setFromMatrixPosition(e.premultiply(t.matrixWorld)),k:fa.length});else fa.push({root:i,pos:t.getWorldPosition(new L),k:fa.length})})}var R_=new L,Hd=new L;function h0(i,e){let t=null,n=.045;for(let s of fa){if(!s.root.visible||!s.root.parent||!s.root.parent.visible)continue;let r=Hd.copy(s.pos).sub(i).dot(e);if(r<1.5)continue;let a=Math.sqrt(Math.max(0,Hd.lengthSq()-r*r))/r;a<n&&(n=a,t=s)}return t}function f0(i,e){let t=i.k%10;Mr(293.66*Math.pow(2,(c0[t%5]+12*Math.floor(t/5))/12),.035),e&&qt.play(e,"tick",1.4)}var fr={gases:new St,hielo:new St,jungla:new St};for(let i of zt)fr[i].position.y=-qe.platformLift,En.add(fr[i]),ca[i+"0"]&&ga(i+"0",fr[i]),ga(i,fr[i]),ca[i+"2"]&&ga(i+"2",fr[i]);function C_(){let i=te.count?I.yearPos/te.count:0;for(let e of zt){let t=[e+"0",e,e+"2"].filter(r=>ca[r]);if(t.length<2)continue;let n=t.length===3?qe.variantAt3??[.33,.66]:[qe.variantAt??.5],s=0;for(let r of n)i>=r&&s++;if(!xs[t[s]]){let r=t.map((a,o)=>o).filter(a=>xs[t[a]]).sort((a,o)=>Math.abs(a-s)-Math.abs(o-s))[0];if(r===void 0)continue;s=r}t.forEach((r,a)=>{xs[r]&&(xs[r].visible=a===s)})}}ga("lobby",Ji);ga("fin",Sa);var ya=null,dr=null,pr=!1;function Vd(i){Ko.lift=_t(i-1.6,-.75,.3);for(let e of Ki)e.userData.baseY===void 0&&(e.userData.baseY=e.position.y),e.position.y=e.userData.baseY+Ko.lift}function xh(){pr=!0,I.xr||(Aa=0,Sr=0)}function I_(){if(pr){if(!I.xr){pr=!1,Vd(1.6);return}if(ya)try{dr||(dr=Rt.xr.getReferenceSpace());let i=ya.getViewerPose(dr);if(!i)return;let e=i.transform.orientation,t=i.transform.position,n=hr.set(0,0,-1).applyQuaternion(h_.set(e.x,e.y,e.z,e.w));if(Math.hypot(n.x,n.z)<.25)return;let s=Math.atan2(-n.x,-n.z);Rt.xr.setReferenceSpace(dr.getOffsetReferenceSpace(new XRRigidTransform({x:t.x,y:0,z:t.z},{x:0,y:Math.sin(s/2),z:0,w:Math.cos(s/2)}))),Vd(t.y>.5?t.y:1.6),pr=!1,I.state==="ambiente"&&(on.position.y=_t((t.y>.5?t.y:1.6)-qe.sphereBelowEyes,.7,1.5))}catch{pr=!1}}}function xr(){Ji.visible=I.state==="lobby",En.visible=I.state==="ambiente"||I.state==="fin",Sa.visible=I.state==="fin",nn.visible=on.visible=I.state==="ambiente",va.visible=I.state==="lobby";for(let e of zt)fr[e].visible=e===I.dash;let i=Ot[I.dash];va.material.color.setHex(I.state==="lobby"?7237230:i.color);for(let e of g_)e.material.color.set(Ti(i.color));rl.material.color.set(Ti(i.color)),ph.material.color.set(1052688).lerp(t0.setHex(i.color),.03)}function Ar(i=!1){xh(),(I.state==="ambiente"||I.state==="fin")&&ln("cierre"),I.state="lobby",I.hover=null,bh(!1),g0(),Ea.redraw(),te.setLevel(i?0:qe.lobbyLevel??.16),xr()}function Wn(i){xh(),I.dash=i,I.state="ambiente",I.yearPos=0,I.scale=1,I.speed=1,I.scrubbing=!1,rh=0,ln("transicion"),te.setDashboard(i),te.setLevel(.55),te.play(),g0(),l0(i),pn.getWorldPosition(yr),on.position.y=_t(yr.y-qe.sphereBelowEyes,.7,1.5),p_(),i0(),nn.redraw(),Ea.redraw(),xr(),tn(null,"confirmar",.8)}function P_(){ln("cierre"),I.state="fin",bh(!1),te.setLevel(.3),Er.redraw(),xr(),tn(null,"tope")}function bh(i){I.sensory=i,document.body.classList.toggle("sensorial",i)}var Mh=0,Gd=0,L_=new Wo;function br(i,e){e&&(Mh=performance.now());let t=te.count;I.yearPos=_t(i,0,t);let n=Math.min(t,Math.floor(I.yearPos+1e-6));return n!==te.idx&&(te.setIndex(n),i0(),nn.redraw(),e)?(ln("avance",{vol:qe.sphereVolume??2,pos:n/t}),!0):!1}function Jo(i){I.scale=_t(i,.4,qe.maxScale);let e=I.scale<qe.pauseBelowScale?0:I.scale<=1?I.scale:1+(I.scale-1)/(qe.maxScale-1)*(qe.maxYearsPerBar-1),t=Math.round(e*10)/10;t!==I.speed&&(I.speed=t,nn.redraw())}var rh=0;te.onBar=()=>{if(I.state==="ambiente"&&(rh++,!(rh<=qe.introBars||I.scrubbing||I.speed===0))){if(te.idx>=te.count){setTimeout(P_,0);return}br(I.yearPos+I.speed,!1)}};te.onStep=(i,e,t,n)=>{let s=Math.max(0,(e-te.ctx.currentTime)*1e3);setTimeout(()=>{if(I.stepNow=i,I.stepAt=performance.now(),I.state==="lobby")return;for(let o of an)o.alive&&o.step===i&&(o.flash=1);let r=Ku.default.hapticForStep(t,i),a=Ku.default.hapticForStep(n,i);qe.vibrarMelodia&&r&&i===0&&qt.play("right","tick",.8)},s)};var Q={angle:0,vel:0,target:null,settled:0,front:"gases",lastField:0,lastNote:0,grab:!1,hand:null,touch:[null,null],trail:{a:0,dir:1,life:0}},da=.45,ys=.65,Mi=.55,fn=66*ft,gr=15*ft,Zu=.11,ah=[174.61,196,220,233.08,146.83,261.63,293.66,329.63,349.23],d0=146.83,xa=[...zt].sort((i,e)=>Ot[i].az-Ot[e].az),py=Ot[xa[0]].az*ft,my=Ot[xa[xa.length-1]].az*ft,ba=Bt/zt.length,Ft=new St;Ft.position.set(0,.85,0);Ft.visible=!1;Dt.add(Ft);var $o={},Ss=i=>(i=(i+Math.PI)%Bt,i<0&&(i+=Bt),i-Math.PI),qo=(i,e,t,n,s=48)=>Array.from({length:s+1},(r,a)=>{let o=et(t,n,a/s);return new L(Math.sin(o)*i,e,-Math.cos(o)*i)});function Qo(i,e,t,n,s,r){let a=[],o=[],l=[];for(let u=0;u<=s;u++){let h=u/s,f=et(t,n,h),p=Math.sin(f),g=-Math.cos(f),v=r?h*h:1;if(a.push(p*i,0,g*i,p*e,0,g*e),o.push(v,v,v,v,v,v),u<s){let m=u*2;l.push(m,m+1,m+2,m+1,m+3,m+2)}}let c=new ct;return c.setAttribute("position",new st(a,3)),c.setAttribute("color",new st(o,3)),c.setIndex(l),c}var Ts=i=>new Pt({color:i,vertexColors:!0,blending:us,depthWrite:!1,transparent:!0,side:Ut});{let i=new ke(new ms(da,ys,72,1,Math.PI/2-fn,fn*2),new bn({color:1776411,roughness:.42,metalness:.65,side:Ut}));i.rotation.x=-Math.PI/2,Ft.add(i),Ft.userData.top=i;for(let e of[da,ys]){let t=new ke(new sr(e,e,Zu,56,1,!0,Math.PI-fn,fn*2),new bn({color:394758,roughness:.6,metalness:.4,side:Ut}));t.position.y=-Zu/2,Ft.add(t)}Ft.add(new Hn(new ct().setFromPoints(qo(ys,.001,-fn,fn)),dn(new Qt({color:16777215}),.75))),Ft.add(new Hn(new ct().setFromPoints(qo(da,.001,-fn,fn)),dn(new Qt({color:16777215}),.4))),Ft.add(new Hn(new ct().setFromPoints(qo(da,-Zu,-fn,fn)),dn(new Qt({color:16777215}),.08)));for(let e=-4;e<=4;e++){let t=e*gr,n=e===0?.06:.042,s=new ke(new ea(n,32),new bn({color:328965,roughness:.75,metalness:.3}));s.rotation.x=-Math.PI/2,s.position.set(Math.sin(t)*Mi,.0012,-Math.cos(t)*Mi),Ft.add(s);let r=(a,o)=>{let l=new ki(new ct().setFromPoints(qo(a,.0018,0,Bt,40).slice(0,40)),dn(new Qt({color:16777215}),o));l.position.set(s.position.x,0,s.position.z),Ft.add(l)};r(n,.24),e===0&&r(.075,.5),e===0?Gn(s,"centro",()=>m0(null)):Gn(s,"campo"+e,()=>p0(e,null))}for(let e of zt){let t=new ke(Qo(ys-.03,ys-.012,-3*ft,3*ft,6,!1),Ts(new Se(Ti(Ot[e].color))));t.position.y=.003,Ft.add(t),$o[e]=t}}var oh={1:new ke(Qo(Mi-.014,Mi+.014,-34*ft,0,24,!0),Ts(0)),[-1]:new ke(Qo(Mi-.014,Mi+.014,34*ft,0,24,!0),Ts(0))},Zo=new ke(Qo(Mi-.016,Mi+.016,-2.5*ft,2.5*ft,4,!1),Ts(0));for(let i of[oh[1],oh[-1],Zo])i.position.y=.004,Ft.add(i);var Ta=new St;Ta.visible=!1;Dt.add(Ta);Ta.add(_r(5,.35,16119285,.3),new gi(new ct().setFromPoints(Array.from({length:12},(i,e)=>[Tn(e*30,5,.41),Tn(e*30,5,.47)]).flat()),dn(new Qt({color:7237230}),.9)));var lh={1:new ke(_a(5,-34*ft,0,.03,24,!0),Ts(0)),[-1]:new ke(_a(5,34*ft,0,.03,24,!0),Ts(0))};for(let i of[lh[1],lh[-1]])i.position.y=.45,i.frustumCulled=!1,Ta.add(i);for(let i of zt){let e=new ke(_a(5,-3*ft,3*ft,.03,6,!1),Ts(new Se(Ti(Ot[i].color))));e.position.y=.35,e.rotation.y=-Ot[i].az*ft,e.frustumCulled=!1,Ji.add(e)}var Ea=Ei(.42,.05,840,100,(i,e,t)=>{i.textAlign="center",i.fillStyle=rt.muted,i.font=`600 30px ${Et}`,i.fillText(I.state==="lobby"?we("Desliza para girar \xB7 Toca el centro para entrar","Slide to turn \xB7 Tap the centre to enter"):we("Centro para volver \xB7 Luces para cambiar de lugar","Centre to go back \xB7 Lights to change place"),e/2,62),i.textAlign="left"});Ea.rotation.x=-Math.PI/2;Ea.position.set(0,.002,-(ys+.06));Ft.add(Ea);function Wd(i,e){let t=fn-.06,n=Math.abs(e)>t;i.visible=!0,i.rotation.y=-_t(e,-t,t),i.scale.set(1,1,1),i.material.opacity=n?.35:1}function Mr(i,e=.045){let t=te.ctx;if(!t||t.state!=="running"||!te.nodes)return;let n=t.currentTime,s=t.createGain();s.gain.setValueAtTime(1e-4,n),s.gain.exponentialRampToValueAtTime(e,n+.008),s.gain.exponentialRampToValueAtTime(1e-4,n+1.1),s.connect(te.nodes.master);for(let[r,a]of[[1,1],[2,.42],[3,.18]]){let o=t.createOscillator(),l=t.createGain();o.type="sine",o.frequency.value=i*r,l.gain.value=a,o.connect(l),l.connect(s),o.start(n),o.stop(n+1.15)}}function pa(i){let e=null;for(let t of zt){let n=Ss(i-Ot[t].az*ft);(!e||Math.abs(n)<Math.abs(e.d))&&(e={id:t,d:n})}return{id:e.id,angle:i-e.d}}function el(i){Q.vel=0,Q.target=pa(i).angle,Q.settled=null}function D_(i){if(Math.abs(i)!==3)return null;let e=xa.filter(t=>t!==I.dash);return i<0?e[0]:e[1]}function p0(i,e,t=!1){if(t||Mr(ah[i+4]),I.state==="lobby")el(Q.angle+i*gr);else{let n=D_(i);n&&Wn(n)}}function m0(i){Mr(d0,.05),ln("confirmacion"),i&&qt.play(i,"confirmar"),I.state==="lobby"?Wn(Q.front):I.state!=="inicio"&&Ar()}function g0(){pn.getWorldPosition(yr),Ft.position.y=_t(yr.y-.75,.45,1)}function N_(i,e,t,n){let s=Ft.worldToLocal(Ln.copy(t)),r=Math.hypot(s.x,s.z),a=Math.atan2(s.x,-s.z),o=Q.touch[i],l=performance.now();if(Ft.visible&&Math.abs(s.y)<.09&&r>da-.07&&r<ys+.07&&Math.abs(a)<fn+.08){let c=_t(Math.round(a/gr),-4,4);if(!o){Q.touch[i]={a,zone:c,z0:c,t0:l,moved:0},Mr(ah[c+4],.04),qt.play(e,"tick",c===0?1.6:1),Q.trail.a=a,Q.trail.life=.6;return}let u=Ss(a-o.a);o.moved+=Math.abs(u),I.state==="lobby"&&o.moved>.06?(Q.angle-=u,Q.vel=et(Q.vel,-u/Math.max(n,.008),.35),Q.grab=!0,Q.hand=e,Q.target=null,Q.settled=null):I.state!=="lobby"&&c!==o.zone&&(Mr(ah[c+4],.03),qt.play(e,"tick")),Math.abs(u)>.002&&(Q.trail.dir=u>0?1:-1),Q.trail.a=a,Q.trail.life=Math.min(1,Q.trail.life+Math.abs(u)*6+.02),o.a=a,o.zone=c}else o&&(Q.touch[i]=null,!Q.touch[0]&&!Q.touch[1]&&!Si.some(c=>c.grab)&&(Q.grab=!1),l-o.t0<500&&o.moved<.12&&(o.z0===0?m0(e):p0(o.z0,e,!0)))}function U_(i){Ft.visible=I.state!=="inicio"&&I.state!=="intro",Ta.visible=I.state==="lobby";let e=Q.trail;e.life=Math.max(0,e.life-i*1.4);for(let t of[1,-1])for(let n of[oh[t],lh[t]])n.visible=e.dir===t&&e.life>.01,n.rotation.y=-e.a,n.material.color.setScalar(e.life*.9);if(Ft.userData.top.material.emissive.setScalar(.07*e.life),Zo.visible=e.life>.01,Zo.rotation.y=-e.a,Zo.material.color.set(rt.signal).multiplyScalar(e.life),I.state==="lobby"){if(!Q.grab)if(Math.abs(Q.vel)>.25)Q.angle+=Q.vel*i,Q.vel*=Math.exp(-2.5*i),Q.target=null,Q.settled=null;else{Q.vel=0,Q.target===null&&(Q.target=pa(Q.angle).angle);let n=Q.target-Q.angle;Math.abs(n)>.004?Q.angle+=n*Math.min(1,i*7):Q.settled!==Q.target&&(Q.angle=Q.settled=Q.target,Q.front=pa(Q.angle).id,Mr(d0*1.5,.05),tn(Q.hand,"boton"),te.setDashboard(Q.front),te.play(),Q.hand=null)}let t=Math.round(Q.angle/gr);if(t!==Q.lastField){Q.lastField=t;let n=performance.now(),s=Math.abs(Ss(Q.angle-pa(Q.angle).angle)),r=1-Math.min(1,s/(ba/2));n-Q.lastNote>60&&(Q.lastNote=n,ln("giro",{step:t}),s>ba/2-gr*.6?tn(Q.hand,"diente"):tn(Q.hand,"tick",.6+.9*r))}Q.front=pa(Q.angle).id,Ji.rotation.y=Q.angle,bs.position.copy(Tn(Q.angle/ft,2.6,2.35+Ko.lift)),bs.lookAt(0,2+Ko.lift,0);for(let n of zt)Wd($o[n],Ss(Ot[n].az*ft-Q.angle))}else{let t=xa.filter(n=>n!==I.dash);for(let n of zt)n===I.dash?$o[n].visible=!1:Wd($o[n],(n===t[0]?-3:3)*gr)}}var Jn=new No,Si=[];function $i(i,e){let t=i.isHand&&i.handObj&&i.handObj.joints&&i.handObj.joints["index-finger-tip"];return t&&t.visible!==!1?t.getWorldPosition(e):i.ctrl.getWorldPosition(e)}for(let i=0;i<2;i++){let e=Rt.xr.getController(i),t=Rt.xr.getHand(i),n={ctrl:e,handObj:t,isHand:!1,hand:null,grip:!1,lastAngle:0,btn:[],hover:null};Dt.add(t),t.addEventListener("pinchstart",()=>{n.isHand&&!n.trig&&e.dispatchEvent({type:"selectstart"})}),t.addEventListener("pinchend",()=>{n.isHand&&n.trig&&e.dispatchEvent({type:"selectend"})});let s=new Hn(new ct().setFromPoints([new L,new L(0,0,-1)]),dn(new Qt({color:16777215}),.5));s.scale.z=25,e.add(s,new ke(new gs(.02,12,8),new Pt({color:16777215}))),e.addEventListener("connected",r=>{n.hand=r.data.handedness,n.source=r.data,n.isHand=!!r.data.hand,e.visible=!0,qt.setSources(Rt.xr.getSession())}),e.addEventListener("disconnected",()=>{n.hand=null,n.source=null,n.isHand=!1,n.trig=!1,e.visible=!1}),e.addEventListener("selectstart",()=>{if(!n.trig){if(n.trig=!0,n.isHand&&te.tick(1200,.03),n.hover){v0(n.hover,n.hand);return}$i(n,Lt),I.state==="lobby"?(n.grab={a:Math.atan2(Lt.x,-Lt.z),moved:0,t0:performance.now()},Q.grab=!0,Q.hand=n.hand,Q.target=null,Q.settled=null,tn(n.hand,"tick")):I.state==="ambiente"&&(n.grip=!0,n.byTrigger=!0,n.lastAngle=tl(n),jo(),tn(n.hand,"tick"))}}),e.addEventListener("selectend",()=>{if(n.trig){if(n.trig=!1,n.grab){let r=n.grab;n.grab=null,!Si.some(a=>a.grab)&&!Q.touch[0]&&!Q.touch[1]&&(Q.grab=!1),I.state==="lobby"&&r.moved<.05&&performance.now()-r.t0<400&&(ln("confirmacion"),tn(n.hand,"confirmar"),Wn(Q.front))}n.byTrigger&&(n.byTrigger=!1,n.grip=!1,jo(),I.state==="ambiente"&&(ln("confirmacion"),tn(n.hand,"soltar")))}}),e.addEventListener("squeezestart",()=>{n.grip=!0,n.lastAngle=tl(n),jo(),I.state==="ambiente"&&tn(n.hand,"tick")}),e.addEventListener("squeezeend",()=>{n.grip=!1,jo(),I.state==="ambiente"&&(ln("confirmacion"),tn(n.hand,"soltar"))}),e.visible=!1,Dt.add(e),Si.push(n)}var Xd=new L().fromArray(qe.sphereCenter),Lt=new L,Ln=new L;function tl(i){return $i(i,Lt),Math.atan2(Lt.x-Xd.x,-(Lt.z-Xd.z))}var vr=null;function jo(){let i=Si.filter(e=>e.grip);I.scrubbing=I.state==="ambiente"&&i.length===1,i.length===2?($i(i[0],Lt),$i(i[1],Ln),vr={d0:Math.max(.05,Lt.distanceTo(Ln)),s0:I.scale}):vr=null;for(let e of i)e.lastAngle=tl(e);I.state==="ambiente"&&nn.redraw()}function qd(i){let e=te.entry&&te.entry.year,t=te.idx===0||te.idx>=te.count;tn(i,t?"tope":e&&e%10===0?"decada":"anio")}function v0(i,e){e&&qt.play(e,"confirmar",.8),ln("confirmacion"),i.userData.onSelect()}function _0(i,e){i!==I.hover&&(I.hover=i,i&&te.tick(1200,.03),I.state==="lobby"&&i&&Kn[i]&&(te.setDashboard(i),te.play()),I.state==="fin"&&(S_.redraw(),T_.redraw()),I.state==="ambiente"&&nn.redraw(),Qn.redraw())}function Sh(){return Jd.filter(i=>{let e=i;for(;e;){if(!e.visible)return!1;e=e.parent}return!0})}function z_(i){if(!Rt.xr.getSession())return;let t=null,n=null;for(let r of Si){if(!r.hand)continue;if(r.isHand&&!r.dots&&r.handObj.joints&&r.handObj.joints["index-finger-tip"]){r.dots=!0;for(let c of["thumb-tip","index-finger-tip","middle-finger-tip","ring-finger-tip","pinky-finger-tip","wrist"]){let u=r.handObj.joints[c];u&&u.add(new ke(new gs(c==="wrist"?.011:c==="index-finger-tip"?.009:.006,10,8),new Pt({color:16119285})))}}Fd.identity().extractRotation(r.ctrl.matrixWorld),Jn.ray.origin.setFromMatrixPosition(r.ctrl.matrixWorld),Jn.ray.direction.set(0,0,-1).applyMatrix4(Fd);let a=Jn.intersectObjects(Sh(),!1)[0];r.hover=a?a.object:null,a&&!t&&(t=a.object.userData.hoverId,n=r.hand);let o=Si.indexOf(r);if(I.state==="ambiente"&&!a){let c=h0(Jn.ray.origin,R_.copy(Jn.ray.direction));c!==r.voz&&(r.voz=c,c&&f0(c,r.hand))}else r.voz=null;if($i(r,Lt),N_(o,r.hand,Lt,i),r.grab&&I.state==="lobby"){let c=Math.atan2(Lt.x,-Lt.z),u=Ss(c-r.grab.a),h=qe.giroRatio??2;r.grab.a=c,r.grab.moved+=Math.abs(u),Q.angle-=u*h,Q.vel=et(Q.vel,-u*h/Math.max(i,.008),.35),Q.target=null,Q.settled=null,Math.abs(u)>.002&&(Q.trail.dir=u>0?1:-1),Q.trail.a=_t(c,-fn,fn),Q.trail.life=Math.min(1,Q.trail.life+Math.abs(u)*6+.03)}else r.grab&&(r.grab=null);if(!r.grab&&!r.grip&&!Q.touch[o]&&Ft.visible&&(I.state!=="lobby"||Q.settled!==null)){let c=Ft.localToWorld(Ln.set(0,0,-Mi)).distanceTo(Lt),u=performance.now();c<.25&&u-(r.beaconAt||0)>et(110,520,c/.25)&&(r.beaconAt=u,tn(r.hand,"faro",.6+.8*(1-c/.25)))}if(I.state==="ambiente"){$i(r,Lt);let c=on.worldToLocal(Ln.copy(Lt)).length(),u=qe.sphereRadius;if(c<u*2.2)ma(o,Lt),sh(o,r.hand);else{let h=Jn.intersectObject(al,!1)[0];ma(o,h?h.point:null,!0),h&&sh(o,r.hand)}}else ma(o,null);let l=r.source&&r.source.gamepad;if(l){let c=l.buttons[4]&&l.buttons[4].pressed,u=l.buttons[5]&&l.buttons[5].pressed;c&&!r.btn[4]&&I.state!=="lobby"&&(qt.play(r.hand,"confirmar",.7),Ar()),u&&!r.btn[5]&&(qt.play(r.hand,"confirmar",.7),I.state==="lobby"?el(Q.angle+ba):Wn(zt[(zt.indexOf(I.dash)+1)%zt.length]));let h=l.buttons[3]&&l.buttons[3].pressed;h&&!r.btn[3]&&I.state==="ambiente"&&_h(),r.btn[3]=h,r.btn[4]=c,r.btn[5]=u;let f=l.axes.length>=4?l.axes[2]:l.axes[0]||0;I.state==="lobby"&&Math.abs(f)>.25&&(Q.vel=-f*2.4,Q.target=null,Q.settled=null,Q.hand=r.hand),I.state==="ambiente"&&Math.abs(f)>.25&&br(I.yearPos+f*i*te.count*.2,!0)&&qd(r.hand)}}if(_0(t,n),I.state!=="ambiente")return;let s=Si.filter(r=>r.grip);if(s.length===1){let r=s[0],a=tl(r),o=a-r.lastAngle;o>Math.PI&&(o-=Bt),o<-Math.PI&&(o+=Bt),r.lastAngle=a,br(I.yearPos+o/Bt*te.count,!0)&&qd(r.hand)}else if(s.length===2&&vr){$i(s[0],Lt),$i(s[1],Ln);let r=I.speed;Jo(vr.s0*(Lt.distanceTo(Ln)/vr.d0)),r!==I.speed&&(tn(null,"tick"),ln(I.speed>r?"apertura":"cierre",{mini:!0})),Lt.add(Ln).multiplyScalar(.5),on.worldToLocal(Lt),Lt.lengthSq()>1e-8&&je.expandDir.lerp(Lt.normalize(),.2).normalize()}}var jd=new He,Vn=null,Aa=0,Sr=0,Yd=null;function nl(i,e){return jd.set(i.clientX/window.innerWidth*2-1,-(i.clientY/window.innerHeight)*2+1),Jn.setFromCamera(jd,pn),Jn.intersectObjects(e,!1)[0]}Rt.domElement.addEventListener("pointerdown",i=>{if(I.xr||I.state==="inicio"||I.state==="intro")return;let e=I.state==="ambiente"&&nl(i,[al]);ma(0,e?e.point:null,!0),Vn={x:i.clientX,y:i.clientY,moved:0,sphere:!!e},I.scrubbing=!!e,e&&nn.redraw(),Rt.domElement.setPointerCapture(i.pointerId)});Rt.domElement.addEventListener("pointermove",i=>{if(!(I.xr||I.state==="inicio"||I.state==="intro"))if(Vn){let e=i.clientX-Vn.x,t=i.clientY-Vn.y;Vn.x=i.clientX,Vn.y=i.clientY,Vn.moved+=Math.abs(e)+Math.abs(t),Vn.sphere?br(I.yearPos+e/500*te.count,!0):(Aa+=e*.004,Sr=_t(Sr+t*.004,-1.2,1.2))}else{if(I.state==="ambiente"){let n=h0(Jn.ray.origin,Jn.ray.direction);n!==Yd&&(Yd=n,n&&f0(n,null))}let e=I.state==="ambiente"&&nl(i,[al]);ma(0,e?e.point:null,!0),e&&sh(0,null);let t=nl(i,Sh());_0(t?t.object.userData.hoverId:null,null),Rt.domElement.style.cursor=t?"pointer":"grab"}});Rt.domElement.addEventListener("pointerup",i=>{if(!Vn)return;let e=Vn;if(Vn=null,e.sphere){I.scrubbing=!1,nn.redraw();return}if(e.moved<6){let t=nl(i,Sh());t&&v0(t.object,null)}});Rt.domElement.addEventListener("wheel",i=>{I.state==="ambiente"&&Jo(I.scale-Math.sign(i.deltaY)*.1)},{passive:!0});window.addEventListener("keydown",i=>{if(I.state==="inicio"||I.state==="intro")return;let e=i.key.toLowerCase();if(e==="e"){Th(I.lang==="en"?"es":"en");return}I.state==="ambiente"&&(e==="arrowright"&&br(Math.floor(I.yearPos)+1,!0),e==="arrowleft"&&br(Math.ceil(I.yearPos)-1,!0),e==="arrowup"&&Jo(I.scale+.1),e==="arrowdown"&&Jo(I.scale-.1),e==="s"&&bh(!I.sensory),e==="r"&&Wn(I.dash)),I.state==="lobby"&&(e==="arrowright"&&el(Q.angle+ba),e==="arrowleft"&&el(Q.angle-ba),e==="enter"&&Wn(Q.front)),e==="i"&&I.state==="ambiente"&&_h(),e==="d"&&a0(),e==="l"&&I.state!=="lobby"&&Ar(),(e==="1"||e==="2"||e==="3")&&Wn(zt[Number(e)-1])});var Sn=i=>document.getElementById(i),il="audifonos",y0="";function ol(){document.documentElement.lang=I.lang;let i=(e,t)=>{let n=Sn(e);n&&(n.textContent=t)};i("lema",we("Earth Jukebox. Tres lugares de la Tierra convertidos en m\xFAsica a partir de sus datos. Nada est\xE1 grabado.","Earth Jukebox. Three places on Earth turned into music from their data. Nothing is recorded.")),i("vr",we("Entrar en VR","Enter VR")),i("pantalla",we("Empezar en pantalla","Start on screen")),i("descTxt",we("Mostrar descripciones en texto y voz","Show descriptions as text and voice")),i("idioma",we("English","Espa\xF1ol")),i("ayuda",we("Arrastra para mirar \xB7 \u2190 \u2192 giran el lobby \xB7 Enter entra \xB7 I dato \xB7 D descripciones \xB7 E English \xB7 L lobby","Drag to look \xB7 \u2190 \u2192 turn the lobby \xB7 Enter goes in \xB7 I data \xB7 D descriptions \xB7 E Espa\xF1ol \xB7 L lobby")),i("estado",{audifonos:we("Usa aud\xEDfonos.","Use headphones."),visor:we("Visor detectado. Usa aud\xEDfonos.","Headset detected. Use headphones."),sinvisor:we("Sin visor en este navegador: puedes usar la versi\xF3n de pantalla.","No headset in this browser: you can use the screen version."),sinxr:we("Este navegador no tiene WebXR: usa la versi\xF3n de pantalla, o el navegador del visor.","This browser has no WebXR: use the screen version, or the headset's browser."),error:we("No se pudo entrar a VR: ","Could not enter VR: ")+y0}[il]);for(let e of uh)e.redraw()}function Th(i){I.lang=i,ze.pending="",ze.token++,vh(),I.desc&&gh(),window.speechSynthesis&&speechSynthesis.cancel();try{localStorage.setItem("orbis-lang",i)}catch{}typeof _e<"u"&&(_e.subText=""),ol(),ln("confirmacion")}var _e={group:null,letters:[],strips:[],marks:[],rim:null,disc:null,sub:null,subText:"",t0:0,hit:!1,word:"Orbe",R:2,top:-.44,half:1.2,seg:120},O_=[[47,86,80.21,90.7,26.5],[40,56.95,89.39,56.95,10.61],[33,38.71,81.01,32.51,22.01]],F_=[33,36.58,19.85,45.41,17.32];function B_(i,e,{k1:t=1,k2:n=1,k3:s=1,orb:r=1,orbScale:a=1,red:o=1,ink:l=rt.ink}={}){let c=e/100,u=(f,p)=>Math.atan2(p-50,f-50),h=([f,p,g,v,m],d,y,x)=>{if(d<=.001)return;let _=u(p,g),R=((u(v,m)-_)%Bt+Bt)%Bt;i.beginPath(),i.arc(50*c,50*c,f*c,_,_+R*d),i.strokeStyle=y,i.lineWidth=x*c,i.lineCap="round",i.stroke()};i.clearRect(0,0,e,e),[t,n,s].forEach((f,p)=>h(O_[p],f,l,3)),r>.001&&(i.globalAlpha=r,i.beginPath(),i.arc(57*c,50*c,25*c*a,0,Bt),i.fillStyle=l,i.fill(),i.globalAlpha=1),o>.001&&(i.save(),i.globalAlpha=o,i.shadowColor=rt.signal,i.shadowBlur=6*c,h(F_,1,rt.signal,3.6),i.restore())}function k_(){if(_e.group)return;let i=_e.group=new St,e=.001,t=320,n=`600 210px ${Et}`,s=2,{R:r,top:a,half:o,seg:l}=_e,c=a-r,u=_=>new Pt({transparent:!0,opacity:0,depthTest:!1,depthWrite:!1,..._}),h=(_,R,E)=>{let A=document.createElement("canvas");A.width=_,A.height=R;let C=A.getContext("2d");E(C,_,R);let S=new Qr(A);S.colorSpace=Nt,S.anisotropy=4;let b=new ke(new Bi(_*e,R*e),u({map:S}));return b.renderOrder=30,b.userData={g:C,tex:S,w:_,h:R},i.add(b),b};_e.disc=new ke(new ea(r,160),u({color:723723})),_e.disc.position.set(0,c,-.004),_e.disc.renderOrder=26,i.add(_e.disc),_e.rim=new ki(new ct().setFromPoints(Array.from({length:200},(_,R)=>new L(r*Math.sin(R/200*Bt),c+r*Math.cos(R/200*Bt),-.003))),u({color:3947580})),_e.rim.renderOrder=27,i.add(_e.rim);let f=(_,R,E,A)=>{let C=new Float32Array((l+1)*6),S=new Float32Array((l+1)*6),b=[];for(let O=0;O<=l;O++){let G=-o+2*o*O/l,$=Math.sin(G),W=Math.cos(G);C.set([_*$,c+_*W,0,R*$,c+R*W,0],O*6),O<l&&b.push(O*2,O*2+1,O*2+2,O*2+1,O*2+3,O*2+2)}let P=new ct;P.setAttribute("position",new It(C,3)),P.setAttribute("color",new It(S,3)),P.setIndex(b);let B=new ke(P,u({vertexColors:!0,blending:us,side:Ut,opacity:1}));B.renderOrder=28,B.userData={c0:E,c1:A},i.add(B),_e.strips.push(B)};f(r-.035,r-.003,[0,0,0],[.16,.17,.2]),f(r-.003,r+.003,[1,1,1],[1,1,1]),f(r+.003,r+.11,[.13,.16,.24],[0,0,0]),zt.forEach((_,R)=>{let E=(R-1)*.74,A=new ke(new Bi(.09,.006),u({color:Ti(Ot[_].color)}));A.position.set((r+.03)*Math.sin(E),c+(r+.03)*Math.cos(E),.001),A.rotation.z=-E,A.renderOrder=29,i.add(A),_e.marks.push(A)});let p=document.createElement("canvas").getContext("2d");p.font=n;let g=[..._e.word].map(_=>p.measureText(_).width),v=g.reduce((_,R)=>_+R,0)+s*(g.length-1),m=-v/2;[..._e.word].forEach((_,R)=>{let E=Math.ceil(g[R])+60,A=h(E,t,C=>{C.font=n,C.textAlign="center",C.textBaseline="alphabetic",C.fillStyle=rt.ink,C.fillText(_,E/2,232)});A.userData.x=(m+g[R]/2)*e,A.position.set(A.userData.x,.1,0),_e.letters.push(A),m+=g[R]+s});let d=.215,y=.035,x=(d+y)/2;for(let _ of _e.letters)_.userData.x+=x,_.position.x=_.userData.x;_e.logo=h(512,512,()=>{}),_e.logo.scale.setScalar(d/.512),_e.logo.position.set(-v/2*e-y-d/2+x,.115,0),_e.sub=h(1400,80,()=>{}),_e.sub.position.y=-.045,_e.sub.scale.setScalar(1.5),i.scale.setScalar(.95),Dt.add(i)}function H_(i){if(i===_e.subText)return;_e.subText=i;let{g:e,tex:t,w:n,h:s}=_e.sub.userData;e.clearRect(0,0,n,s),e.font=`500 34px ${Et}`,e.textAlign="center",e.fillStyle=rt.muted,e.fillText(i,n/2,52),t.needsUpdate=!0}function V_(){if(_e.pending){let f=Rt.xr.getSession(),p=performance.now(),g=!I.xr||!!ya&&!pr&&(!f||f.visibilityState==="visible");if(g?_e.readyAt||(_e.readyAt=p):_e.readyAt=0,g&&p-_e.readyAt>(I.xr?900:150)||p-_e.askedAt>8e3){_e.pending=!1,_e.t0=te.ctx.currentTime+.35;let v=Od[qe.leitmotiv];if(v)try{let m=te.ctx.createGain();m.gain.value=.72,m.connect(te.ctx.destination),v.play(te.ctx,m,_e.t0)}catch{}}}let i=_e.pending?-1:te.ctx?te.ctx.currentTime-_e.t0:99,e=_e.group,t=f=>(f=_t(f,0,1),f*f*(3-2*f));{pn.getWorldPosition(Ln),pn.getWorldDirection(hr);let f=i<.3||_e.yaw===void 0;if(Math.hypot(hr.x,hr.z)>.3){let g=Math.atan2(-hr.x,-hr.z);_e.yaw=f?g:_e.yaw+Ss(g-_e.yaw)*.04}let p=_e.yaw||0;Yu.set(Ln.x-Math.sin(p)*1.7,Ln.y,Ln.z-Math.cos(p)*1.7),f?e.position.copy(Yu):e.position.lerp(Yu,.06),e.rotation.y=p}let n=1-t((i-5.4)/1.1),s=t(i/.6),r=i>1.85?Math.exp(-(i-1.85)*4):0,a=Math.min(_t(i/3.5,0,1),.12+.88*(mr.total?mr.done/mr.total:1));i>1.85&&!_e.hit&&(_e.hit=!0,tn(null,"diente"));let o=.98*t(a)+.02,l=(.45+.55*a+.6*r)*n,{half:c,seg:u}=_e;for(let f of _e.strips){let p=f.geometry.attributes.color.array,{c0:g,c1:v}=f.userData;for(let m=0;m<=u;m++){let d=Math.abs(-c+2*c*m/u),y=t((o-d)/.3)*l,x=m*6;p[x]=g[0]*y,p[x+1]=g[1]*y,p[x+2]=g[2]*y,p[x+3]=v[0]*y,p[x+4]=v[1]*y,p[x+5]=v[2]*y}f.geometry.attributes.color.needsUpdate=!0}_e.disc.material.opacity=s*n,_e.rim.material.opacity=.7*s*n,_e.marks.forEach((f,p)=>{let g=t((a-[.33,.66,.955][p])/.03);f.material.opacity=g*n,f.scale.setScalar(.6+.4*g)});{let f=_e.logo,{g:p,tex:g}=f.userData,v=_t((i-3.5)/.5,0,1),m=t((i-1.8)/.4);B_(p,512,{k1:t((i-.1)/.9),k2:t((i-.45)/.9),k3:t((i-.8)/.9),orb:m,orbScale:.8+.2*m+.08*r,red:t((i-3.5)/.35)}),g.needsUpdate=!0,f.material.opacity=Math.min(1,i/.3)*n,f.position.y=.115+.08*Math.sin(Math.PI*v)*(1-.35*v)}_e.letters.forEach((f,p)=>{let g=t((i-.5-p*.3)/.55),v=_t((i-3.57-p*.08)/.5,0,1);f.material.opacity=g*n,f.position.y=.1+(g-1)*.03+.1*Math.sin(Math.PI*v)*(1-.35*v),f.scale.setScalar(1+.07*r+.06*Math.sin(Math.PI*v))});let h=a>=.955?3:a>=.66?2:a>=.33?1:0;H_(a>=.999?we("Listo \xB7 3 de 3 ambientes","Ready \xB7 3 of 3 environments"):we(`Preparando el mundo \xB7 ${Math.round(a*100)} % \xB7 ${h} de 3 ambientes`,`Preparing the world \xB7 ${Math.round(a*100)} % \xB7 ${h} of 3 environments`)),_e.sub.material.opacity=.95*t((i-.5)/.8)*n,i>6.6&&G_()}function G_(){I.state==="intro"&&(_e.group.visible=!1,Dt.background.setHex(526344),Sn("ayuda").hidden=I.xr,Ar(!0),Aa=0,Sr=0,setTimeout(()=>{I.state==="lobby"&&te.setLevel(qe.lobbyLevel??.16)},(qe.silencioLobby??1.6)*1e3))}async function x0(i){if(I.desc=!!(Sn("descripciones")&&Sn("descripciones").checked),Qn.redraw(),I.desc&&gh(),te.level=0,te.nodes&&(te.nodes.master.gain.value=0),await te.play(),i)try{let e=await navigator.xr.requestSession("immersive-vr",{optionalFeatures:["local-floor","bounded-floor","hand-tracking"]});await Rt.xr.setSession(e),I.xr=!0,qt.setSources(e),e.addEventListener("inputsourceschange",()=>qt.setSources(e)),e.addEventListener("end",()=>{I.xr=!1,Sn("inicio").hidden=!1,te.stop(),I.state="inicio",dr=null,ya=null;try{Rt.xr.setReferenceSpace(null)}catch{}_e.group&&(_e.group.visible=!1),Dt.background.setHex(526344),xr()})}catch(e){il="error",y0=e.message,ol(),I.xr=!1}Sn("inicio").hidden=!0,Sn("ayuda").hidden=!0,Aa=0,Sr=0,k_(),_e.group.visible=!0,_e.hit=!1,_e.yaw=void 0,Dt.background.setHex(0),_e.letters.forEach(e=>e.material.opacity=0),I.state="intro",dr=null,xh(),xr(),_e.pending=!0,_e.readyAt=0,_e.askedAt=performance.now(),_e.t0=1/0}Sn("pantalla").addEventListener("click",()=>x0(!1));Sn("vr").addEventListener("click",()=>x0(!0));navigator.xr&&navigator.xr.isSessionSupported?navigator.xr.isSessionSupported("immersive-vr").then(i=>{Sn("vr").disabled=!i,il=i?"visor":"sinvisor",ol()}).catch(()=>{}):(Sn("vr").disabled=!0,il="sinxr");Sn("idioma")&&Sn("idioma").addEventListener("click",()=>Th(I.lang==="en"?"es":"en"));ol();window.addEventListener("resize",()=>{pn.aspect=window.innerWidth/window.innerHeight,pn.updateProjectionMatrix(),Rt.setSize(window.innerWidth,window.innerHeight)});var $d=new Do;xr();Ji.visible=!1;En.visible=!1;Rt.setAnimationLoop((i,e)=>{ya=e||null,I_();let t=Math.min(.05,$d.getDelta()),n=$d.elapsedTime;if(I.xr||(pn.rotation.y=-Aa,pn.rotation.x=-Sr),I.state==="intro")V_();else{let a=(I.state==="ambiente"||I.state==="fin")&&I.dash==="gases"&&je.val&&je.dash==="gases"?_t((je.val[Math.min(te.count,Math.round(I.yearPos))]-.12)/.88,0,1):0;_s.k=et(_s.k,a,.03),Dt.fog.density=(qe.smogMax??.045)*_s.k,Dt.background.copy(_s.base).lerp(_s.color,.6*_s.k)}z_(t),U_(t),b_();{let r=performance.now();I.state!=="lobby"||Q.grab||Math.abs(Q.vel)>.05?ju=r+9e3:r>ju&&(ju=r+12e3,Xo=-Xo,ln("invitar",{dir:Xo}),tn(Xo>0?"right":"left","tick",.9))}{let r=0,a=0;if(I.state==="lobby")r=_t(Math.abs(Q.vel)/3.5,0,1),a=_t(-Q.vel/3,-.7,.7);else if(I.state==="ambiente"&&performance.now()-Mh<200){let o=(I.yearPos-Gd)/Math.max(t,.008)/Math.max(1,te.count);r=_t(Math.abs(o)*2.2,0,1),a=_t(o*2,-.7,.7)}Gd=I.yearPos,te.ctx&&te.ctx.state==="running"&&te.nodes&&L_.set(te.ctx,te.nodes.master,r,r,a)}I.uiAlpha=et(I.uiAlpha,I.sensory?0:1,Math.min(1,t*2.2));for(let r of Kd)r.opacity=r.userData.base*I.uiAlpha;let s=te.energy();if(I.beat=et(I.beat,s,.3),va.rotation.y=n*.01,I.state==="lobby")for(let r of zt){let a=Qd[r],o=I.hover===r||Q.front===r;a.sec.material.userData.base=et(a.sec.material.userData.base,xs.lobby?o?.3:0:o?.75:.26,.15),a.pan.scale.setScalar(et(a.pan.scale.x,o?1.06:1,.15))}if(En.visible){let r=te.derived;m_(t,et(.12,1,I.uiAlpha)),C_();for(let l=0;l<Qu;l++){let c=v_[l].material;c.userData.base=et(c.userData.base,_t(r.p*Qu-l,0,1)*.32,.05)}let a=60/r.tempo/4,o=I.stepAt?Math.min(1,(performance.now()-I.stepAt)/1e3/a):0;s0.rotation.y=-(((I.stepNow||0)+o)/16)*Bt,on.scale.setScalar(et(on.scale.x,.8+.5*_t((I.scale-.4)/(qe.maxScale-.4),0,1),.2)),on.rotation.y=-(I.yearPos/te.count)*Bt,on.updateMatrixWorld(),M_(t,r)}Rt.render(Dt,pn)});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
