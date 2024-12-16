// d3-delaunay@6.0.4 downloaded from https://ga.jspm.io/npm:d3-delaunay@6.0.4/src/index.js

import t from"delaunator";const n=1e-6;class Path{constructor(){this._x0=this._y0=this._x1=this._y1=null;this._=""}moveTo(t,n){this._+=`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}`}closePath(){if(null!==this._x1){this._x1=this._x0,this._y1=this._y0;this._+="Z"}}lineTo(t,n){this._+=`L${this._x1=+t},${this._y1=+n}`}arc(t,e,i){t=+t,e=+e,i=+i;const s=t+i;const l=e;if(i<0)throw new Error("negative radius");null===this._x1?this._+=`M${s},${l}`:(Math.abs(this._x1-s)>n||Math.abs(this._y1-l)>n)&&(this._+="L"+s+","+l);i&&(this._+=`A${i},${i},0,1,1,${t-i},${e}A${i},${i},0,1,1,${this._x1=s},${this._y1=l}`)}rect(t,n,e,i){this._+=`M${this._x0=this._x1=+t},${this._y0=this._y1=+n}h${+e}v${+i}h${-e}Z`}value(){return this._||null}}class Polygon{constructor(){this._=[]}moveTo(t,n){this._.push([t,n])}closePath(){this._.push(this._[0].slice())}lineTo(t,n){this._.push([t,n])}value(){return this._.length?this._:null}}class Voronoi{constructor(t,[n,e,i,s]=[0,0,960,500]){if(!((i=+i)>=(n=+n))||!((s=+s)>=(e=+e)))throw new Error("invalid bounds");this.delaunay=t;this._circumcenters=new Float64Array(2*t.points.length);this.vectors=new Float64Array(2*t.points.length);this.xmax=i,this.xmin=n;this.ymax=s,this.ymin=e;this._init()}update(){this.delaunay.update();this._init();return this}_init(){const{delaunay:{points:t,hull:n,triangles:e},vectors:i}=this;let s,l;const h=this.circumcenters=this._circumcenters.subarray(0,e.length/3*2);for(let i,o,r=0,c=0,a=e.length;r<a;r+=3,c+=2){const a=2*e[r];const u=2*e[r+1];const g=2*e[r+2];const f=t[a];const d=t[a+1];const m=t[u];const _=t[u+1];const y=t[g];const x=t[g+1];const p=m-f;const v=_-d;const w=y-f;const P=x-d;const T=2*(p*P-v*w);if(Math.abs(T)<1e-9){if(void 0===s){s=l=0;for(const e of n)s+=t[2*e],l+=t[2*e+1];s/=n.length,l/=n.length}const e=1e9*Math.sign((s-f)*P-(l-d)*w);i=(f+y)/2-e*P;o=(d+x)/2+e*w}else{const t=1/T;const n=p*p+v*v;const e=w*w+P*P;i=f+(P*n-v*e)*t;o=d+(p*e-w*n)*t}h[c]=i;h[c+1]=o}let o=n[n.length-1];let r,c=4*o;let a,u=t[2*o];let g,f=t[2*o+1];i.fill(0);for(let e=0;e<n.length;++e){o=n[e];r=c,a=u,g=f;c=4*o,u=t[2*o],f=t[2*o+1];i[r+2]=i[c]=g-f;i[r+3]=i[c+1]=u-a}}render(t){const n=null==t?t=new Path:void 0;const{delaunay:{halfedges:e,inedges:i,hull:s},circumcenters:l,vectors:h}=this;if(s.length<=1)return null;for(let n=0,i=e.length;n<i;++n){const i=e[n];if(i<n)continue;const s=2*Math.floor(n/3);const h=2*Math.floor(i/3);const o=l[s];const r=l[s+1];const c=l[h];const a=l[h+1];this._renderSegment(o,r,c,a,t)}let o,r=s[s.length-1];for(let n=0;n<s.length;++n){o=r,r=s[n];const e=2*Math.floor(i[r]/3);const c=l[e];const a=l[e+1];const u=4*o;const g=this._project(c,a,h[u+2],h[u+3]);g&&this._renderSegment(c,a,g[0],g[1],t)}return n&&n.value()}renderBounds(t){const n=null==t?t=new Path:void 0;t.rect(this.xmin,this.ymin,this.xmax-this.xmin,this.ymax-this.ymin);return n&&n.value()}renderCell(t,n){const e=null==n?n=new Path:void 0;const i=this._clip(t);if(null===i||!i.length)return;n.moveTo(i[0],i[1]);let s=i.length;while(i[0]===i[s-2]&&i[1]===i[s-1]&&s>1)s-=2;for(let t=2;t<s;t+=2)i[t]===i[t-2]&&i[t+1]===i[t-1]||n.lineTo(i[t],i[t+1]);n.closePath();return e&&e.value()}*cellPolygons(){const{delaunay:{points:t}}=this;for(let n=0,e=t.length/2;n<e;++n){const t=this.cellPolygon(n);t&&(t.index=n,yield t)}}cellPolygon(t){const n=new Polygon;this.renderCell(t,n);return n.value()}_renderSegment(t,n,e,i,s){let l;const h=this._regioncode(t,n);const o=this._regioncode(e,i);if(0===h&&0===o){s.moveTo(t,n);s.lineTo(e,i)}else if(l=this._clipSegment(t,n,e,i,h,o)){s.moveTo(l[0],l[1]);s.lineTo(l[2],l[3])}}contains(t,n,e){return(n=+n,n===n)&&(e=+e,e===e)&&this.delaunay._step(t,n,e)===t}*neighbors(t){const n=this._clip(t);if(n)for(const e of this.delaunay.neighbors(t)){const t=this._clip(e);if(t)t:for(let i=0,s=n.length;i<s;i+=2)for(let l=0,h=t.length;l<h;l+=2)if(n[i]===t[l]&&n[i+1]===t[l+1]&&n[(i+2)%s]===t[(l+h-2)%h]&&n[(i+3)%s]===t[(l+h-1)%h]){yield e;break t}}}_cell(t){const{circumcenters:n,delaunay:{inedges:e,halfedges:i,triangles:s}}=this;const l=e[t];if(-1===l)return null;const h=[];let o=l;do{const e=Math.floor(o/3);h.push(n[2*e],n[2*e+1]);o=o%3===2?o-2:o+1;if(s[o]!==t)break;o=i[o]}while(o!==l&&-1!==o);return h}_clip(t){if(0===t&&1===this.delaunay.hull.length)return[this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax,this.xmin,this.ymin];const n=this._cell(t);if(null===n)return null;const{vectors:e}=this;const i=4*t;return this._simplify(e[i]||e[i+1]?this._clipInfinite(t,n,e[i],e[i+1],e[i+2],e[i+3]):this._clipFinite(t,n))}_clipFinite(t,n){const e=n.length;let i=null;let s,l,h=n[e-2],o=n[e-1];let r,c=this._regioncode(h,o);let a,u=0;for(let g=0;g<e;g+=2){s=h,l=o,h=n[g],o=n[g+1];r=c,c=this._regioncode(h,o);if(0===r&&0===c){a=u,u=0;i?i.push(h,o):i=[h,o]}else{let n,e,g,f,d;if(0===r){if(null===(n=this._clipSegment(s,l,h,o,r,c)))continue;[e,g,f,d]=n}else{if(null===(n=this._clipSegment(h,o,s,l,c,r)))continue;[f,d,e,g]=n;a=u,u=this._edgecode(e,g);a&&u&&this._edge(t,a,u,i,i.length);i?i.push(e,g):i=[e,g]}a=u,u=this._edgecode(f,d);a&&u&&this._edge(t,a,u,i,i.length);i?i.push(f,d):i=[f,d]}}if(i){a=u,u=this._edgecode(i[0],i[1]);a&&u&&this._edge(t,a,u,i,i.length)}else if(this.contains(t,(this.xmin+this.xmax)/2,(this.ymin+this.ymax)/2))return[this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax,this.xmin,this.ymin];return i}_clipSegment(t,n,e,i,s,l){const h=s<l;h&&([t,n,e,i,s,l]=[e,i,t,n,l,s]);while(true){if(0===s&&0===l)return h?[e,i,t,n]:[t,n,e,i];if(s&l)return null;let o,r,c=s||l;8&c?(o=t+(e-t)*(this.ymax-n)/(i-n),r=this.ymax):4&c?(o=t+(e-t)*(this.ymin-n)/(i-n),r=this.ymin):2&c?(r=n+(i-n)*(this.xmax-t)/(e-t),o=this.xmax):(r=n+(i-n)*(this.xmin-t)/(e-t),o=this.xmin);s?(t=o,n=r,s=this._regioncode(t,n)):(e=o,i=r,l=this._regioncode(e,i))}}_clipInfinite(t,n,e,i,s,l){let h,o=Array.from(n);(h=this._project(o[0],o[1],e,i))&&o.unshift(h[0],h[1]);(h=this._project(o[o.length-2],o[o.length-1],s,l))&&o.push(h[0],h[1]);if(o=this._clipFinite(t,o))for(let n,e=0,i=o.length,s=this._edgecode(o[i-2],o[i-1]);e<i;e+=2){n=s,s=this._edgecode(o[e],o[e+1]);n&&s&&(e=this._edge(t,n,s,o,e),i=o.length)}else this.contains(t,(this.xmin+this.xmax)/2,(this.ymin+this.ymax)/2)&&(o=[this.xmin,this.ymin,this.xmax,this.ymin,this.xmax,this.ymax,this.xmin,this.ymax]);return o}_edge(t,n,e,i,s){while(n!==e){let e,l;switch(n){case 5:n=4;continue;case 4:n=6,e=this.xmax,l=this.ymin;break;case 6:n=2;continue;case 2:n=10,e=this.xmax,l=this.ymax;break;case 10:n=8;continue;case 8:n=9,e=this.xmin,l=this.ymax;break;case 9:n=1;continue;case 1:n=5,e=this.xmin,l=this.ymin;break}i[s]===e&&i[s+1]===l||!this.contains(t,e,l)||(i.splice(s,0,e,l),s+=2)}return s}_project(t,n,e,i){let s,l,h,o=Infinity;if(i<0){if(n<=this.ymin)return null;(s=(this.ymin-n)/i)<o&&(h=this.ymin,l=t+(o=s)*e)}else if(i>0){if(n>=this.ymax)return null;(s=(this.ymax-n)/i)<o&&(h=this.ymax,l=t+(o=s)*e)}if(e>0){if(t>=this.xmax)return null;(s=(this.xmax-t)/e)<o&&(l=this.xmax,h=n+(o=s)*i)}else if(e<0){if(t<=this.xmin)return null;(s=(this.xmin-t)/e)<o&&(l=this.xmin,h=n+(o=s)*i)}return[l,h]}_edgecode(t,n){return(t===this.xmin?1:t===this.xmax?2:0)|(n===this.ymin?4:n===this.ymax?8:0)}_regioncode(t,n){return(t<this.xmin?1:t>this.xmax?2:0)|(n<this.ymin?4:n>this.ymax?8:0)}_simplify(t){if(t&&t.length>4){for(let n=0;n<t.length;n+=2){const e=(n+2)%t.length,i=(n+4)%t.length;(t[n]===t[e]&&t[e]===t[i]||t[n+1]===t[e+1]&&t[e+1]===t[i+1])&&(t.splice(e,2),n-=2)}t.length||(t=null)}return t}}const e=2*Math.PI,i=Math.pow;function pointX(t){return t[0]}function pointY(t){return t[1]}function collinear(t){const{triangles:n,coords:e}=t;for(let t=0;t<n.length;t+=3){const i=2*n[t],s=2*n[t+1],l=2*n[t+2],h=(e[l]-e[i])*(e[s+1]-e[i+1])-(e[s]-e[i])*(e[l+1]-e[i+1]);if(h>1e-10)return false}return true}function jitter(t,n,e){return[t+Math.sin(t+n)*e,n+Math.cos(t-n)*e]}class Delaunay{static from(t,n=pointX,e=pointY,i){return new Delaunay("length"in t?flatArray(t,n,e,i):Float64Array.from(flatIterable(t,n,e,i)))}constructor(n){this._delaunator=new t(n);this.inedges=new Int32Array(n.length/2);this._hullIndex=new Int32Array(n.length/2);this.points=this._delaunator.coords;this._init()}update(){this._delaunator.update();this._init();return this}_init(){const n=this._delaunator,e=this.points;if(n.hull&&n.hull.length>2&&collinear(n)){this.collinear=Int32Array.from({length:e.length/2},((t,n)=>n)).sort(((t,n)=>e[2*t]-e[2*n]||e[2*t+1]-e[2*n+1]));const n=this.collinear[0],i=this.collinear[this.collinear.length-1],s=[e[2*n],e[2*n+1],e[2*i],e[2*i+1]],l=1e-8*Math.hypot(s[3]-s[1],s[2]-s[0]);for(let t=0,n=e.length/2;t<n;++t){const n=jitter(e[2*t],e[2*t+1],l);e[2*t]=n[0];e[2*t+1]=n[1]}this._delaunator=new t(e)}else delete this.collinear;const i=this.halfedges=this._delaunator.halfedges;const s=this.hull=this._delaunator.hull;const l=this.triangles=this._delaunator.triangles;const h=this.inedges.fill(-1);const o=this._hullIndex.fill(-1);for(let t=0,n=i.length;t<n;++t){const n=l[t%3===2?t-2:t+1];-1!==i[t]&&-1!==h[n]||(h[n]=t)}for(let t=0,n=s.length;t<n;++t)o[s[t]]=t;if(s.length<=2&&s.length>0){this.triangles=new Int32Array(3).fill(-1);this.halfedges=new Int32Array(3).fill(-1);this.triangles[0]=s[0];h[s[0]]=1;if(2===s.length){h[s[1]]=0;this.triangles[1]=s[1];this.triangles[2]=s[1]}}}voronoi(t){return new Voronoi(this,t)}*neighbors(t){const{inedges:n,hull:e,_hullIndex:i,halfedges:s,triangles:l,collinear:h}=this;if(h){const n=h.indexOf(t);n>0&&(yield h[n-1]);n<h.length-1&&(yield h[n+1]);return}const o=n[t];if(-1===o)return;let r=o,c=-1;do{yield c=l[r];r=r%3===2?r-2:r+1;if(l[r]!==t)return;r=s[r];if(-1===r){const n=e[(i[t]+1)%e.length];n!==c&&(yield n);return}}while(r!==o)}find(t,n,e=0){if((t=+t,t!==t)||(n=+n,n!==n))return-1;const i=e;let s;while((s=this._step(e,t,n))>=0&&s!==e&&s!==i)e=s;return s}_step(t,n,e){const{inedges:s,hull:l,_hullIndex:h,halfedges:o,triangles:r,points:c}=this;if(-1===s[t]||!c.length)return(t+1)%(c.length>>1);let a=t;let u=i(n-c[2*t],2)+i(e-c[2*t+1],2);const g=s[t];let f=g;do{let s=r[f];const g=i(n-c[2*s],2)+i(e-c[2*s+1],2);g<u&&(u=g,a=s);f=f%3===2?f-2:f+1;if(r[f]!==t)break;f=o[f];if(-1===f){f=l[(h[t]+1)%l.length];if(f!==s&&i(n-c[2*f],2)+i(e-c[2*f+1],2)<u)return f;break}}while(f!==g);return a}render(t){const n=null==t?t=new Path:void 0;const{points:e,halfedges:i,triangles:s}=this;for(let n=0,l=i.length;n<l;++n){const l=i[n];if(l<n)continue;const h=2*s[n];const o=2*s[l];t.moveTo(e[h],e[h+1]);t.lineTo(e[o],e[o+1])}this.renderHull(t);return n&&n.value()}renderPoints(t,n){void 0!==n||t&&"function"===typeof t.moveTo||(n=t,t=null);n=void 0==n?2:+n;const i=null==t?t=new Path:void 0;const{points:s}=this;for(let i=0,l=s.length;i<l;i+=2){const l=s[i],h=s[i+1];t.moveTo(l+n,h);t.arc(l,h,n,0,e)}return i&&i.value()}renderHull(t){const n=null==t?t=new Path:void 0;const{hull:e,points:i}=this;const s=2*e[0],l=e.length;t.moveTo(i[s],i[s+1]);for(let n=1;n<l;++n){const s=2*e[n];t.lineTo(i[s],i[s+1])}t.closePath();return n&&n.value()}hullPolygon(){const t=new Polygon;this.renderHull(t);return t.value()}renderTriangle(t,n){const e=null==n?n=new Path:void 0;const{points:i,triangles:s}=this;const l=2*s[t*=3];const h=2*s[t+1];const o=2*s[t+2];n.moveTo(i[l],i[l+1]);n.lineTo(i[h],i[h+1]);n.lineTo(i[o],i[o+1]);n.closePath();return e&&e.value()}*trianglePolygons(){const{triangles:t}=this;for(let n=0,e=t.length/3;n<e;++n)yield this.trianglePolygon(n)}trianglePolygon(t){const n=new Polygon;this.renderTriangle(t,n);return n.value()}}function flatArray(t,n,e,i){const s=t.length;const l=new Float64Array(2*s);for(let h=0;h<s;++h){const s=t[h];l[2*h]=n.call(i,s,h,t);l[2*h+1]=e.call(i,s,h,t)}return l}function*flatIterable(t,n,e,i){let s=0;for(const l of t){yield n.call(i,l,s,t);yield e.call(i,l,s,t);++s}}export{Delaunay,Voronoi};

