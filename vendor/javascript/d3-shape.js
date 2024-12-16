// d3-shape@1.3.7 downloaded from https://ga.jspm.io/npm:d3-shape@1.3.7/dist/d3-shape.js

import t from"d3-path";var n="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var i={};(function(n,e){e(i,t)})(i,(function(t,i){function constant(t){return function constant(){return t}}var e=Math.abs;var a=Math.atan2;var s=Math.cos;var o=Math.max;var r=Math.min;var l=Math.sin;var h=Math.sqrt;var c=1e-12;var _=Math.PI;var u=_/2;var f=2*_;function acos(t){return t>1?0:t<-1?_:Math.acos(t)}function asin(t){return t>=1?u:t<=-1?-u:Math.asin(t)}function arcInnerRadius(t){return t.innerRadius}function arcOuterRadius(t){return t.outerRadius}function arcStartAngle(t){return t.startAngle}function arcEndAngle(t){return t.endAngle}function arcPadAngle(t){return t&&t.padAngle}function intersect(t,n,i,e,a,s,o,r){var l=i-t,h=e-n,_=o-a,u=r-s,f=u*l-_*h;if(!(f*f<c)){f=(_*(n-s)-u*(t-a))/f;return[t+f*l,n+f*h]}}function cornerTangents(t,n,i,e,a,s,r){var l=t-i,c=n-e,_=(r?s:-s)/h(l*l+c*c),u=_*c,f=-_*l,p=t+u,d=n+f,v=i+u,m=e+f,k=(p+v)/2,g=(d+m)/2,b=v-p,T=m-d,R=b*b+T*T,C=a-s,w=p*m-v*d,M=(T<0?-1:1)*h(o(0,C*C*R-w*w)),S=(w*T-b*M)/R,N=(-w*b-T*M)/R,O=(w*T+b*M)/R,A=(-w*b+T*M)/R,E=S-k,P=N-g,$=O-k,B=A-g;E*E+P*P>$*$+B*B&&(S=O,N=A);return{cx:S,cy:N,x01:-u,y01:-f,x11:S*(a/C-1),y11:N*(a/C-1)}}function arc(){var t=arcInnerRadius,o=arcOuterRadius,p=constant(0),d=null,v=arcStartAngle,m=arcEndAngle,k=arcPadAngle,g=null;function arc(){var b,T,R=+t.apply(this||n,arguments),C=+o.apply(this||n,arguments),w=v.apply(this||n,arguments)-u,M=m.apply(this||n,arguments)-u,S=e(M-w),N=M>w;g||(g=b=i.path());C<R&&(T=C,C=R,R=T);if(C>c)if(S>f-c){g.moveTo(C*s(w),C*l(w));g.arc(0,0,C,w,M,!N);if(R>c){g.moveTo(R*s(M),R*l(M));g.arc(0,0,R,M,w,N)}}else{var O=w,A=M,E=w,P=M,$=S,B=S,q=k.apply(this||n,arguments)/2,z=q>c&&(d?+d.apply(this||n,arguments):h(R*R+C*C)),L=r(e(C-R)/2,+p.apply(this||n,arguments)),X=L,Y=L,V,I;if(z>c){var D=asin(z/R*l(q)),H=asin(z/C*l(q));($-=2*D)>c?(D*=N?1:-1,E+=D,P-=D):($=0,E=P=(w+M)/2);(B-=2*H)>c?(H*=N?1:-1,O+=H,A-=H):(B=0,O=A=(w+M)/2)}var W=C*s(O),j=C*l(O),F=R*s(P),G=R*l(P);if(L>c){var J=C*s(A),K=C*l(A),Q=R*s(E),U=R*l(E),Z;if(S<_&&(Z=intersect(W,j,Q,U,J,K,F,G))){var tt=W-Z[0],nt=j-Z[1],it=J-Z[0],et=K-Z[1],at=1/l(acos((tt*it+nt*et)/(h(tt*tt+nt*nt)*h(it*it+et*et)))/2),st=h(Z[0]*Z[0]+Z[1]*Z[1]);X=r(L,(R-st)/(at-1));Y=r(L,(C-st)/(at+1))}}if(B>c)if(Y>c){V=cornerTangents(Q,U,W,j,C,Y,N);I=cornerTangents(J,K,F,G,C,Y,N);g.moveTo(V.cx+V.x01,V.cy+V.y01);if(Y<L)g.arc(V.cx,V.cy,Y,a(V.y01,V.x01),a(I.y01,I.x01),!N);else{g.arc(V.cx,V.cy,Y,a(V.y01,V.x01),a(V.y11,V.x11),!N);g.arc(0,0,C,a(V.cy+V.y11,V.cx+V.x11),a(I.cy+I.y11,I.cx+I.x11),!N);g.arc(I.cx,I.cy,Y,a(I.y11,I.x11),a(I.y01,I.x01),!N)}}else g.moveTo(W,j),g.arc(0,0,C,O,A,!N);else g.moveTo(W,j);if(R>c&&$>c)if(X>c){V=cornerTangents(F,G,J,K,R,-X,N);I=cornerTangents(W,j,Q,U,R,-X,N);g.lineTo(V.cx+V.x01,V.cy+V.y01);if(X<L)g.arc(V.cx,V.cy,X,a(V.y01,V.x01),a(I.y01,I.x01),!N);else{g.arc(V.cx,V.cy,X,a(V.y01,V.x01),a(V.y11,V.x11),!N);g.arc(0,0,R,a(V.cy+V.y11,V.cx+V.x11),a(I.cy+I.y11,I.cx+I.x11),N);g.arc(I.cx,I.cy,X,a(I.y11,I.x11),a(I.y01,I.x01),!N)}}else g.arc(0,0,R,P,E,N);else g.lineTo(F,G)}else g.moveTo(0,0);g.closePath();if(b)return g=null,b+""||null}arc.centroid=function(){var i=(+t.apply(this||n,arguments)+ +o.apply(this||n,arguments))/2,e=(+v.apply(this||n,arguments)+ +m.apply(this||n,arguments))/2-_/2;return[s(e)*i,l(e)*i]};arc.innerRadius=function(n){return arguments.length?(t="function"===typeof n?n:constant(+n),arc):t};arc.outerRadius=function(t){return arguments.length?(o="function"===typeof t?t:constant(+t),arc):o};arc.cornerRadius=function(t){return arguments.length?(p="function"===typeof t?t:constant(+t),arc):p};arc.padRadius=function(t){return arguments.length?(d=null==t?null:"function"===typeof t?t:constant(+t),arc):d};arc.startAngle=function(t){return arguments.length?(v="function"===typeof t?t:constant(+t),arc):v};arc.endAngle=function(t){return arguments.length?(m="function"===typeof t?t:constant(+t),arc):m};arc.padAngle=function(t){return arguments.length?(k="function"===typeof t?t:constant(+t),arc):k};arc.context=function(t){return arguments.length?(g=null==t?null:t,arc):g};return arc}function Linear(t){(this||n)._context=t}Linear.prototype={areaStart:function(){(this||n)._line=0},areaEnd:function(){(this||n)._line=NaN},lineStart:function(){(this||n)._point=0},lineEnd:function(){((this||n)._line||0!==(this||n)._line&&1===(this||n)._point)&&(this||n)._context.closePath();(this||n)._line=1-(this||n)._line},point:function(t,i){t=+t,i=+i;switch((this||n)._point){case 0:(this||n)._point=1;(this||n)._line?(this||n)._context.lineTo(t,i):(this||n)._context.moveTo(t,i);break;case 1:(this||n)._point=2;default:(this||n)._context.lineTo(t,i);break}}};function curveLinear(t){return new Linear(t)}function x(t){return t[0]}function y(t){return t[1]}function line(){var t=x,n=y,e=constant(true),a=null,s=curveLinear,o=null;function line(r){var l,h=r.length,c,_=false,u;null==a&&(o=s(u=i.path()));for(l=0;l<=h;++l){!(l<h&&e(c=r[l],l,r))===_&&((_=!_)?o.lineStart():o.lineEnd());_&&o.point(+t(c,l,r),+n(c,l,r))}if(u)return o=null,u+""||null}line.x=function(n){return arguments.length?(t="function"===typeof n?n:constant(+n),line):t};line.y=function(t){return arguments.length?(n="function"===typeof t?t:constant(+t),line):n};line.defined=function(t){return arguments.length?(e="function"===typeof t?t:constant(!!t),line):e};line.curve=function(t){return arguments.length?(s=t,null!=a&&(o=s(a)),line):s};line.context=function(t){return arguments.length?(null==t?a=o=null:o=s(a=t),line):a};return line}function area(){var t=x,n=null,e=constant(0),a=y,s=constant(true),o=null,r=curveLinear,l=null;function area(h){var c,_,u,f=h.length,p,d=false,v,m=new Array(f),k=new Array(f);null==o&&(l=r(v=i.path()));for(c=0;c<=f;++c){if(!(c<f&&s(p=h[c],c,h))===d)if(d=!d){_=c;l.areaStart();l.lineStart()}else{l.lineEnd();l.lineStart();for(u=c-1;u>=_;--u)l.point(m[u],k[u]);l.lineEnd();l.areaEnd()}if(d){m[c]=+t(p,c,h),k[c]=+e(p,c,h);l.point(n?+n(p,c,h):m[c],a?+a(p,c,h):k[c])}}if(v)return l=null,v+""||null}function arealine(){return line().defined(s).curve(r).context(o)}area.x=function(i){return arguments.length?(t="function"===typeof i?i:constant(+i),n=null,area):t};area.x0=function(n){return arguments.length?(t="function"===typeof n?n:constant(+n),area):t};area.x1=function(t){return arguments.length?(n=null==t?null:"function"===typeof t?t:constant(+t),area):n};area.y=function(t){return arguments.length?(e="function"===typeof t?t:constant(+t),a=null,area):e};area.y0=function(t){return arguments.length?(e="function"===typeof t?t:constant(+t),area):e};area.y1=function(t){return arguments.length?(a=null==t?null:"function"===typeof t?t:constant(+t),area):a};area.lineX0=area.lineY0=function(){return arealine().x(t).y(e)};area.lineY1=function(){return arealine().x(t).y(a)};area.lineX1=function(){return arealine().x(n).y(e)};area.defined=function(t){return arguments.length?(s="function"===typeof t?t:constant(!!t),area):s};area.curve=function(t){return arguments.length?(r=t,null!=o&&(l=r(o)),area):r};area.context=function(t){return arguments.length?(null==t?o=l=null:l=r(o=t),area):o};return area}function descending(t,n){return n<t?-1:n>t?1:n>=t?0:NaN}function identity(t){return t}function pie(){var t=identity,i=descending,e=null,a=constant(0),s=constant(f),o=constant(0);function pie(r){var l,h=r.length,c,_,u=0,p=new Array(h),d=new Array(h),v=+a.apply(this||n,arguments),m=Math.min(f,Math.max(-f,s.apply(this||n,arguments)-v)),k,g=Math.min(Math.abs(m)/h,o.apply(this||n,arguments)),b=g*(m<0?-1:1),T;for(l=0;l<h;++l)(T=d[p[l]=l]=+t(r[l],l,r))>0&&(u+=T);null!=i?p.sort((function(t,n){return i(d[t],d[n])})):null!=e&&p.sort((function(t,n){return e(r[t],r[n])}));for(l=0,_=u?(m-h*b)/u:0;l<h;++l,v=k)c=p[l],T=d[c],k=v+(T>0?T*_:0)+b,d[c]={data:r[c],index:l,value:T,startAngle:v,endAngle:k,padAngle:g};return d}pie.value=function(n){return arguments.length?(t="function"===typeof n?n:constant(+n),pie):t};pie.sortValues=function(t){return arguments.length?(i=t,e=null,pie):i};pie.sort=function(t){return arguments.length?(e=t,i=null,pie):e};pie.startAngle=function(t){return arguments.length?(a="function"===typeof t?t:constant(+t),pie):a};pie.endAngle=function(t){return arguments.length?(s="function"===typeof t?t:constant(+t),pie):s};pie.padAngle=function(t){return arguments.length?(o="function"===typeof t?t:constant(+t),pie):o};return pie}var p=curveRadial(curveLinear);function Radial(t){(this||n)._curve=t}Radial.prototype={areaStart:function(){(this||n)._curve.areaStart()},areaEnd:function(){(this||n)._curve.areaEnd()},lineStart:function(){(this||n)._curve.lineStart()},lineEnd:function(){(this||n)._curve.lineEnd()},point:function(t,i){(this||n)._curve.point(i*Math.sin(t),i*-Math.cos(t))}};function curveRadial(t){function radial(n){return new Radial(t(n))}radial._curve=t;return radial}function lineRadial(t){var n=t.curve;t.angle=t.x,delete t.x;t.radius=t.y,delete t.y;t.curve=function(t){return arguments.length?n(curveRadial(t)):n()._curve};return t}function lineRadial$1(){return lineRadial(line().curve(p))}function areaRadial(){var t=area().curve(p),n=t.curve,i=t.lineX0,e=t.lineX1,a=t.lineY0,s=t.lineY1;t.angle=t.x,delete t.x;t.startAngle=t.x0,delete t.x0;t.endAngle=t.x1,delete t.x1;t.radius=t.y,delete t.y;t.innerRadius=t.y0,delete t.y0;t.outerRadius=t.y1,delete t.y1;t.lineStartAngle=function(){return lineRadial(i())},delete t.lineX0;t.lineEndAngle=function(){return lineRadial(e())},delete t.lineX1;t.lineInnerRadius=function(){return lineRadial(a())},delete t.lineY0;t.lineOuterRadius=function(){return lineRadial(s())},delete t.lineY1;t.curve=function(t){return arguments.length?n(curveRadial(t)):n()._curve};return t}function pointRadial(t,n){return[(n=+n)*Math.cos(t-=Math.PI/2),n*Math.sin(t)]}var d=Array.prototype.slice;function linkSource(t){return t.source}function linkTarget(t){return t.target}function link(t){var e=linkSource,a=linkTarget,s=x,o=y,r=null;function link(){var l,h=d.call(arguments),c=e.apply(this||n,h),_=a.apply(this||n,h);r||(r=l=i.path());t(r,+s.apply(this||n,(h[0]=c,h)),+o.apply(this||n,h),+s.apply(this||n,(h[0]=_,h)),+o.apply(this||n,h));if(l)return r=null,l+""||null}link.source=function(t){return arguments.length?(e=t,link):e};link.target=function(t){return arguments.length?(a=t,link):a};link.x=function(t){return arguments.length?(s="function"===typeof t?t:constant(+t),link):s};link.y=function(t){return arguments.length?(o="function"===typeof t?t:constant(+t),link):o};link.context=function(t){return arguments.length?(r=null==t?null:t,link):r};return link}function curveHorizontal(t,n,i,e,a){t.moveTo(n,i);t.bezierCurveTo(n=(n+e)/2,i,n,a,e,a)}function curveVertical(t,n,i,e,a){t.moveTo(n,i);t.bezierCurveTo(n,i=(i+a)/2,e,i,e,a)}function curveRadial$1(t,n,i,e,a){var s=pointRadial(n,i),o=pointRadial(n,i=(i+a)/2),r=pointRadial(e,i),l=pointRadial(e,a);t.moveTo(s[0],s[1]);t.bezierCurveTo(o[0],o[1],r[0],r[1],l[0],l[1])}function linkHorizontal(){return link(curveHorizontal)}function linkVertical(){return link(curveVertical)}function linkRadial(){var t=link(curveRadial$1);t.angle=t.x,delete t.x;t.radius=t.y,delete t.y;return t}var v={draw:function(t,n){var i=Math.sqrt(n/_);t.moveTo(i,0);t.arc(0,0,i,0,f)}};var m={draw:function(t,n){var i=Math.sqrt(n/5)/2;t.moveTo(-3*i,-i);t.lineTo(-i,-i);t.lineTo(-i,-3*i);t.lineTo(i,-3*i);t.lineTo(i,-i);t.lineTo(3*i,-i);t.lineTo(3*i,i);t.lineTo(i,i);t.lineTo(i,3*i);t.lineTo(-i,3*i);t.lineTo(-i,i);t.lineTo(-3*i,i);t.closePath()}};var k=Math.sqrt(1/3),g=2*k;var b={draw:function(t,n){var i=Math.sqrt(n/g),e=i*k;t.moveTo(0,-i);t.lineTo(e,0);t.lineTo(0,i);t.lineTo(-e,0);t.closePath()}};var T=.8908130915292852,R=Math.sin(_/10)/Math.sin(7*_/10),C=Math.sin(f/10)*R,w=-Math.cos(f/10)*R;var M={draw:function(t,n){var i=Math.sqrt(n*T),e=C*i,a=w*i;t.moveTo(0,-i);t.lineTo(e,a);for(var s=1;s<5;++s){var o=f*s/5,r=Math.cos(o),l=Math.sin(o);t.lineTo(l*i,-r*i);t.lineTo(r*e-l*a,l*e+r*a)}t.closePath()}};var S={draw:function(t,n){var i=Math.sqrt(n),e=-i/2;t.rect(e,e,i,i)}};var N=Math.sqrt(3);var O={draw:function(t,n){var i=-Math.sqrt(n/(3*N));t.moveTo(0,2*i);t.lineTo(-N*i,-i);t.lineTo(N*i,-i);t.closePath()}};var A=-.5,E=Math.sqrt(3)/2,P=1/Math.sqrt(12),$=3*(P/2+1);var B={draw:function(t,n){var i=Math.sqrt(n/$),e=i/2,a=i*P,s=e,o=i*P+i,r=-s,l=o;t.moveTo(e,a);t.lineTo(s,o);t.lineTo(r,l);t.lineTo(A*e-E*a,E*e+A*a);t.lineTo(A*s-E*o,E*s+A*o);t.lineTo(A*r-E*l,E*r+A*l);t.lineTo(A*e+E*a,A*a-E*e);t.lineTo(A*s+E*o,A*o-E*s);t.lineTo(A*r+E*l,A*l-E*r);t.closePath()}};var q=[v,m,b,S,M,O,B];function symbol(){var t=constant(v),e=constant(64),a=null;function symbol(){var s;a||(a=s=i.path());t.apply(this||n,arguments).draw(a,+e.apply(this||n,arguments));if(s)return a=null,s+""||null}symbol.type=function(n){return arguments.length?(t="function"===typeof n?n:constant(n),symbol):t};symbol.size=function(t){return arguments.length?(e="function"===typeof t?t:constant(+t),symbol):e};symbol.context=function(t){return arguments.length?(a=null==t?null:t,symbol):a};return symbol}function noop(){}function point(t,n,i){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+n)/6,(t._y0+4*t._y1+i)/6)}function Basis(t){(this||n)._context=t}Basis.prototype={areaStart:function(){(this||n)._line=0},areaEnd:function(){(this||n)._line=NaN},lineStart:function(){(this||n)._x0=(this||n)._x1=(this||n)._y0=(this||n)._y1=NaN;(this||n)._point=0},lineEnd:function(){switch((this||n)._point){case 3:point(this||n,(this||n)._x1,(this||n)._y1);case 2:(this||n)._context.lineTo((this||n)._x1,(this||n)._y1);break}((this||n)._line||0!==(this||n)._line&&1===(this||n)._point)&&(this||n)._context.closePath();(this||n)._line=1-(this||n)._line},point:function(t,i){t=+t,i=+i;switch((this||n)._point){case 0:(this||n)._point=1;(this||n)._line?(this||n)._context.lineTo(t,i):(this||n)._context.moveTo(t,i);break;case 1:(this||n)._point=2;break;case 2:(this||n)._point=3;(this||n)._context.lineTo((5*(this||n)._x0+(this||n)._x1)/6,(5*(this||n)._y0+(this||n)._y1)/6);default:point(this||n,t,i);break}(this||n)._x0=(this||n)._x1,(this||n)._x1=t;(this||n)._y0=(this||n)._y1,(this||n)._y1=i}};function basis(t){return new Basis(t)}function BasisClosed(t){(this||n)._context=t}BasisClosed.prototype={areaStart:noop,areaEnd:noop,lineStart:function(){(this||n)._x0=(this||n)._x1=(this||n)._x2=(this||n)._x3=(this||n)._x4=(this||n)._y0=(this||n)._y1=(this||n)._y2=(this||n)._y3=(this||n)._y4=NaN;(this||n)._point=0},lineEnd:function(){switch((this||n)._point){case 1:(this||n)._context.moveTo((this||n)._x2,(this||n)._y2);(this||n)._context.closePath();break;case 2:(this||n)._context.moveTo(((this||n)._x2+2*(this||n)._x3)/3,((this||n)._y2+2*(this||n)._y3)/3);(this||n)._context.lineTo(((this||n)._x3+2*(this||n)._x2)/3,((this||n)._y3+2*(this||n)._y2)/3);(this||n)._context.closePath();break;case 3:this.point((this||n)._x2,(this||n)._y2);this.point((this||n)._x3,(this||n)._y3);this.point((this||n)._x4,(this||n)._y4);break}},point:function(t,i){t=+t,i=+i;switch((this||n)._point){case 0:(this||n)._point=1;(this||n)._x2=t,(this||n)._y2=i;break;case 1:(this||n)._point=2;(this||n)._x3=t,(this||n)._y3=i;break;case 2:(this||n)._point=3;(this||n)._x4=t,(this||n)._y4=i;(this||n)._context.moveTo(((this||n)._x0+4*(this||n)._x1+t)/6,((this||n)._y0+4*(this||n)._y1+i)/6);break;default:point(this||n,t,i);break}(this||n)._x0=(this||n)._x1,(this||n)._x1=t;(this||n)._y0=(this||n)._y1,(this||n)._y1=i}};function basisClosed(t){return new BasisClosed(t)}function BasisOpen(t){(this||n)._context=t}BasisOpen.prototype={areaStart:function(){(this||n)._line=0},areaEnd:function(){(this||n)._line=NaN},lineStart:function(){(this||n)._x0=(this||n)._x1=(this||n)._y0=(this||n)._y1=NaN;(this||n)._point=0},lineEnd:function(){((this||n)._line||0!==(this||n)._line&&3===(this||n)._point)&&(this||n)._context.closePath();(this||n)._line=1-(this||n)._line},point:function(t,i){t=+t,i=+i;switch((this||n)._point){case 0:(this||n)._point=1;break;case 1:(this||n)._point=2;break;case 2:(this||n)._point=3;var e=((this||n)._x0+4*(this||n)._x1+t)/6,a=((this||n)._y0+4*(this||n)._y1+i)/6;(this||n)._line?(this||n)._context.lineTo(e,a):(this||n)._context.moveTo(e,a);break;case 3:(this||n)._point=4;default:point(this||n,t,i);break}(this||n)._x0=(this||n)._x1,(this||n)._x1=t;(this||n)._y0=(this||n)._y1,(this||n)._y1=i}};function basisOpen(t){return new BasisOpen(t)}function Bundle(t,i){(this||n)._basis=new Basis(t);(this||n)._beta=i}Bundle.prototype={lineStart:function(){(this||n)._x=[];(this||n)._y=[];(this||n)._basis.lineStart()},lineEnd:function(){var t=(this||n)._x,i=(this||n)._y,e=t.length-1;if(e>0){var a=t[0],s=i[0],o=t[e]-a,r=i[e]-s,l=-1,h;while(++l<=e){h=l/e;(this||n)._basis.point((this||n)._beta*t[l]+(1-(this||n)._beta)*(a+h*o),(this||n)._beta*i[l]+(1-(this||n)._beta)*(s+h*r))}}(this||n)._x=(this||n)._y=null;(this||n)._basis.lineEnd()},point:function(t,i){(this||n)._x.push(+t);(this||n)._y.push(+i)}};var z=function custom(t){function bundle(n){return 1===t?new Basis(n):new Bundle(n,t)}bundle.beta=function(t){return custom(+t)};return bundle}(.85);function point$1(t,n,i){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-n),t._y2+t._k*(t._y1-i),t._x2,t._y2)}function Cardinal(t,i){(this||n)._context=t;(this||n)._k=(1-i)/6}Cardinal.prototype={areaStart:function(){(this||n)._line=0},areaEnd:function(){(this||n)._line=NaN},lineStart:function(){(this||n)._x0=(this||n)._x1=(this||n)._x2=(this||n)._y0=(this||n)._y1=(this||n)._y2=NaN;(this||n)._point=0},lineEnd:function(){switch((this||n)._point){case 2:(this||n)._context.lineTo((this||n)._x2,(this||n)._y2);break;case 3:point$1(this||n,(this||n)._x1,(this||n)._y1);break}((this||n)._line||0!==(this||n)._line&&1===(this||n)._point)&&(this||n)._context.closePath();(this||n)._line=1-(this||n)._line},point:function(t,i){t=+t,i=+i;switch((this||n)._point){case 0:(this||n)._point=1;(this||n)._line?(this||n)._context.lineTo(t,i):(this||n)._context.moveTo(t,i);break;case 1:(this||n)._point=2;(this||n)._x1=t,(this||n)._y1=i;break;case 2:(this||n)._point=3;default:point$1(this||n,t,i);break}(this||n)._x0=(this||n)._x1,(this||n)._x1=(this||n)._x2,(this||n)._x2=t;(this||n)._y0=(this||n)._y1,(this||n)._y1=(this||n)._y2,(this||n)._y2=i}};var L=function custom(t){function cardinal(n){return new Cardinal(n,t)}cardinal.tension=function(t){return custom(+t)};return cardinal}(0);function CardinalClosed(t,i){(this||n)._context=t;(this||n)._k=(1-i)/6}CardinalClosed.prototype={areaStart:noop,areaEnd:noop,lineStart:function(){(this||n)._x0=(this||n)._x1=(this||n)._x2=(this||n)._x3=(this||n)._x4=(this||n)._x5=(this||n)._y0=(this||n)._y1=(this||n)._y2=(this||n)._y3=(this||n)._y4=(this||n)._y5=NaN;(this||n)._point=0},lineEnd:function(){switch((this||n)._point){case 1:(this||n)._context.moveTo((this||n)._x3,(this||n)._y3);(this||n)._context.closePath();break;case 2:(this||n)._context.lineTo((this||n)._x3,(this||n)._y3);(this||n)._context.closePath();break;case 3:this.point((this||n)._x3,(this||n)._y3);this.point((this||n)._x4,(this||n)._y4);this.point((this||n)._x5,(this||n)._y5);break}},point:function(t,i){t=+t,i=+i;switch((this||n)._point){case 0:(this||n)._point=1;(this||n)._x3=t,(this||n)._y3=i;break;case 1:(this||n)._point=2;(this||n)._context.moveTo((this||n)._x4=t,(this||n)._y4=i);break;case 2:(this||n)._point=3;(this||n)._x5=t,(this||n)._y5=i;break;default:point$1(this||n,t,i);break}(this||n)._x0=(this||n)._x1,(this||n)._x1=(this||n)._x2,(this||n)._x2=t;(this||n)._y0=(this||n)._y1,(this||n)._y1=(this||n)._y2,(this||n)._y2=i}};var X=function custom(t){function cardinal(n){return new CardinalClosed(n,t)}cardinal.tension=function(t){return custom(+t)};return cardinal}(0);function CardinalOpen(t,i){(this||n)._context=t;(this||n)._k=(1-i)/6}CardinalOpen.prototype={areaStart:function(){(this||n)._line=0},areaEnd:function(){(this||n)._line=NaN},lineStart:function(){(this||n)._x0=(this||n)._x1=(this||n)._x2=(this||n)._y0=(this||n)._y1=(this||n)._y2=NaN;(this||n)._point=0},lineEnd:function(){((this||n)._line||0!==(this||n)._line&&3===(this||n)._point)&&(this||n)._context.closePath();(this||n)._line=1-(this||n)._line},point:function(t,i){t=+t,i=+i;switch((this||n)._point){case 0:(this||n)._point=1;break;case 1:(this||n)._point=2;break;case 2:(this||n)._point=3;(this||n)._line?(this||n)._context.lineTo((this||n)._x2,(this||n)._y2):(this||n)._context.moveTo((this||n)._x2,(this||n)._y2);break;case 3:(this||n)._point=4;default:point$1(this||n,t,i);break}(this||n)._x0=(this||n)._x1,(this||n)._x1=(this||n)._x2,(this||n)._x2=t;(this||n)._y0=(this||n)._y1,(this||n)._y1=(this||n)._y2,(this||n)._y2=i}};var Y=function custom(t){function cardinal(n){return new CardinalOpen(n,t)}cardinal.tension=function(t){return custom(+t)};return cardinal}(0);function point$2(t,n,i){var e=t._x1,a=t._y1,s=t._x2,o=t._y2;if(t._l01_a>c){var r=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,l=3*t._l01_a*(t._l01_a+t._l12_a);e=(e*r-t._x0*t._l12_2a+t._x2*t._l01_2a)/l;a=(a*r-t._y0*t._l12_2a+t._y2*t._l01_2a)/l}if(t._l23_a>c){var h=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,_=3*t._l23_a*(t._l23_a+t._l12_a);s=(s*h+t._x1*t._l23_2a-n*t._l12_2a)/_;o=(o*h+t._y1*t._l23_2a-i*t._l12_2a)/_}t._context.bezierCurveTo(e,a,s,o,t._x2,t._y2)}function CatmullRom(t,i){(this||n)._context=t;(this||n)._alpha=i}CatmullRom.prototype={areaStart:function(){(this||n)._line=0},areaEnd:function(){(this||n)._line=NaN},lineStart:function(){(this||n)._x0=(this||n)._x1=(this||n)._x2=(this||n)._y0=(this||n)._y1=(this||n)._y2=NaN;(this||n)._l01_a=(this||n)._l12_a=(this||n)._l23_a=(this||n)._l01_2a=(this||n)._l12_2a=(this||n)._l23_2a=(this||n)._point=0},lineEnd:function(){switch((this||n)._point){case 2:(this||n)._context.lineTo((this||n)._x2,(this||n)._y2);break;case 3:this.point((this||n)._x2,(this||n)._y2);break}((this||n)._line||0!==(this||n)._line&&1===(this||n)._point)&&(this||n)._context.closePath();(this||n)._line=1-(this||n)._line},point:function(t,i){t=+t,i=+i;if((this||n)._point){var e=(this||n)._x2-t,a=(this||n)._y2-i;(this||n)._l23_a=Math.sqrt((this||n)._l23_2a=Math.pow(e*e+a*a,(this||n)._alpha))}switch((this||n)._point){case 0:(this||n)._point=1;(this||n)._line?(this||n)._context.lineTo(t,i):(this||n)._context.moveTo(t,i);break;case 1:(this||n)._point=2;break;case 2:(this||n)._point=3;default:point$2(this||n,t,i);break}(this||n)._l01_a=(this||n)._l12_a,(this||n)._l12_a=(this||n)._l23_a;(this||n)._l01_2a=(this||n)._l12_2a,(this||n)._l12_2a=(this||n)._l23_2a;(this||n)._x0=(this||n)._x1,(this||n)._x1=(this||n)._x2,(this||n)._x2=t;(this||n)._y0=(this||n)._y1,(this||n)._y1=(this||n)._y2,(this||n)._y2=i}};var V=function custom(t){function catmullRom(n){return t?new CatmullRom(n,t):new Cardinal(n,0)}catmullRom.alpha=function(t){return custom(+t)};return catmullRom}(.5);function CatmullRomClosed(t,i){(this||n)._context=t;(this||n)._alpha=i}CatmullRomClosed.prototype={areaStart:noop,areaEnd:noop,lineStart:function(){(this||n)._x0=(this||n)._x1=(this||n)._x2=(this||n)._x3=(this||n)._x4=(this||n)._x5=(this||n)._y0=(this||n)._y1=(this||n)._y2=(this||n)._y3=(this||n)._y4=(this||n)._y5=NaN;(this||n)._l01_a=(this||n)._l12_a=(this||n)._l23_a=(this||n)._l01_2a=(this||n)._l12_2a=(this||n)._l23_2a=(this||n)._point=0},lineEnd:function(){switch((this||n)._point){case 1:(this||n)._context.moveTo((this||n)._x3,(this||n)._y3);(this||n)._context.closePath();break;case 2:(this||n)._context.lineTo((this||n)._x3,(this||n)._y3);(this||n)._context.closePath();break;case 3:this.point((this||n)._x3,(this||n)._y3);this.point((this||n)._x4,(this||n)._y4);this.point((this||n)._x5,(this||n)._y5);break}},point:function(t,i){t=+t,i=+i;if((this||n)._point){var e=(this||n)._x2-t,a=(this||n)._y2-i;(this||n)._l23_a=Math.sqrt((this||n)._l23_2a=Math.pow(e*e+a*a,(this||n)._alpha))}switch((this||n)._point){case 0:(this||n)._point=1;(this||n)._x3=t,(this||n)._y3=i;break;case 1:(this||n)._point=2;(this||n)._context.moveTo((this||n)._x4=t,(this||n)._y4=i);break;case 2:(this||n)._point=3;(this||n)._x5=t,(this||n)._y5=i;break;default:point$2(this||n,t,i);break}(this||n)._l01_a=(this||n)._l12_a,(this||n)._l12_a=(this||n)._l23_a;(this||n)._l01_2a=(this||n)._l12_2a,(this||n)._l12_2a=(this||n)._l23_2a;(this||n)._x0=(this||n)._x1,(this||n)._x1=(this||n)._x2,(this||n)._x2=t;(this||n)._y0=(this||n)._y1,(this||n)._y1=(this||n)._y2,(this||n)._y2=i}};var I=function custom(t){function catmullRom(n){return t?new CatmullRomClosed(n,t):new CardinalClosed(n,0)}catmullRom.alpha=function(t){return custom(+t)};return catmullRom}(.5);function CatmullRomOpen(t,i){(this||n)._context=t;(this||n)._alpha=i}CatmullRomOpen.prototype={areaStart:function(){(this||n)._line=0},areaEnd:function(){(this||n)._line=NaN},lineStart:function(){(this||n)._x0=(this||n)._x1=(this||n)._x2=(this||n)._y0=(this||n)._y1=(this||n)._y2=NaN;(this||n)._l01_a=(this||n)._l12_a=(this||n)._l23_a=(this||n)._l01_2a=(this||n)._l12_2a=(this||n)._l23_2a=(this||n)._point=0},lineEnd:function(){((this||n)._line||0!==(this||n)._line&&3===(this||n)._point)&&(this||n)._context.closePath();(this||n)._line=1-(this||n)._line},point:function(t,i){t=+t,i=+i;if((this||n)._point){var e=(this||n)._x2-t,a=(this||n)._y2-i;(this||n)._l23_a=Math.sqrt((this||n)._l23_2a=Math.pow(e*e+a*a,(this||n)._alpha))}switch((this||n)._point){case 0:(this||n)._point=1;break;case 1:(this||n)._point=2;break;case 2:(this||n)._point=3;(this||n)._line?(this||n)._context.lineTo((this||n)._x2,(this||n)._y2):(this||n)._context.moveTo((this||n)._x2,(this||n)._y2);break;case 3:(this||n)._point=4;default:point$2(this||n,t,i);break}(this||n)._l01_a=(this||n)._l12_a,(this||n)._l12_a=(this||n)._l23_a;(this||n)._l01_2a=(this||n)._l12_2a,(this||n)._l12_2a=(this||n)._l23_2a;(this||n)._x0=(this||n)._x1,(this||n)._x1=(this||n)._x2,(this||n)._x2=t;(this||n)._y0=(this||n)._y1,(this||n)._y1=(this||n)._y2,(this||n)._y2=i}};var D=function custom(t){function catmullRom(n){return t?new CatmullRomOpen(n,t):new CardinalOpen(n,0)}catmullRom.alpha=function(t){return custom(+t)};return catmullRom}(.5);function LinearClosed(t){(this||n)._context=t}LinearClosed.prototype={areaStart:noop,areaEnd:noop,lineStart:function(){(this||n)._point=0},lineEnd:function(){(this||n)._point&&(this||n)._context.closePath()},point:function(t,i){t=+t,i=+i;(this||n)._point?(this||n)._context.lineTo(t,i):((this||n)._point=1,(this||n)._context.moveTo(t,i))}};function linearClosed(t){return new LinearClosed(t)}function sign(t){return t<0?-1:1}function slope3(t,n,i){var e=t._x1-t._x0,a=n-t._x1,s=(t._y1-t._y0)/(e||a<0&&-0),o=(i-t._y1)/(a||e<0&&-0),r=(s*a+o*e)/(e+a);return(sign(s)+sign(o))*Math.min(Math.abs(s),Math.abs(o),.5*Math.abs(r))||0}function slope2(t,n){var i=t._x1-t._x0;return i?(3*(t._y1-t._y0)/i-n)/2:n}function point$3(t,n,i){var e=t._x0,a=t._y0,s=t._x1,o=t._y1,r=(s-e)/3;t._context.bezierCurveTo(e+r,a+r*n,s-r,o-r*i,s,o)}function MonotoneX(t){(this||n)._context=t}MonotoneX.prototype={areaStart:function(){(this||n)._line=0},areaEnd:function(){(this||n)._line=NaN},lineStart:function(){(this||n)._x0=(this||n)._x1=(this||n)._y0=(this||n)._y1=(this||n)._t0=NaN;(this||n)._point=0},lineEnd:function(){switch((this||n)._point){case 2:(this||n)._context.lineTo((this||n)._x1,(this||n)._y1);break;case 3:point$3(this||n,(this||n)._t0,slope2(this||n,(this||n)._t0));break}((this||n)._line||0!==(this||n)._line&&1===(this||n)._point)&&(this||n)._context.closePath();(this||n)._line=1-(this||n)._line},point:function(t,i){var e=NaN;t=+t,i=+i;if(t!==(this||n)._x1||i!==(this||n)._y1){switch((this||n)._point){case 0:(this||n)._point=1;(this||n)._line?(this||n)._context.lineTo(t,i):(this||n)._context.moveTo(t,i);break;case 1:(this||n)._point=2;break;case 2:(this||n)._point=3;point$3(this||n,slope2(this||n,e=slope3(this||n,t,i)),e);break;default:point$3(this||n,(this||n)._t0,e=slope3(this||n,t,i));break}(this||n)._x0=(this||n)._x1,(this||n)._x1=t;(this||n)._y0=(this||n)._y1,(this||n)._y1=i;(this||n)._t0=e}}};function MonotoneY(t){(this||n)._context=new ReflectContext(t)}(MonotoneY.prototype=Object.create(MonotoneX.prototype)).point=function(t,i){MonotoneX.prototype.point.call(this||n,i,t)};function ReflectContext(t){(this||n)._context=t}ReflectContext.prototype={moveTo:function(t,i){(this||n)._context.moveTo(i,t)},closePath:function(){(this||n)._context.closePath()},lineTo:function(t,i){(this||n)._context.lineTo(i,t)},bezierCurveTo:function(t,i,e,a,s,o){(this||n)._context.bezierCurveTo(i,t,a,e,o,s)}};function monotoneX(t){return new MonotoneX(t)}function monotoneY(t){return new MonotoneY(t)}function Natural(t){(this||n)._context=t}Natural.prototype={areaStart:function(){(this||n)._line=0},areaEnd:function(){(this||n)._line=NaN},lineStart:function(){(this||n)._x=[];(this||n)._y=[]},lineEnd:function(){var t=(this||n)._x,i=(this||n)._y,e=t.length;if(e){(this||n)._line?(this||n)._context.lineTo(t[0],i[0]):(this||n)._context.moveTo(t[0],i[0]);if(2===e)(this||n)._context.lineTo(t[1],i[1]);else{var a=controlPoints(t),s=controlPoints(i);for(var o=0,r=1;r<e;++o,++r)(this||n)._context.bezierCurveTo(a[0][o],s[0][o],a[1][o],s[1][o],t[r],i[r])}}((this||n)._line||0!==(this||n)._line&&1===e)&&(this||n)._context.closePath();(this||n)._line=1-(this||n)._line;(this||n)._x=(this||n)._y=null},point:function(t,i){(this||n)._x.push(+t);(this||n)._y.push(+i)}};function controlPoints(t){var n,i=t.length-1,e,a=new Array(i),s=new Array(i),o=new Array(i);a[0]=0,s[0]=2,o[0]=t[0]+2*t[1];for(n=1;n<i-1;++n)a[n]=1,s[n]=4,o[n]=4*t[n]+2*t[n+1];a[i-1]=2,s[i-1]=7,o[i-1]=8*t[i-1]+t[i];for(n=1;n<i;++n)e=a[n]/s[n-1],s[n]-=e,o[n]-=e*o[n-1];a[i-1]=o[i-1]/s[i-1];for(n=i-2;n>=0;--n)a[n]=(o[n]-a[n+1])/s[n];s[i-1]=(t[i]+a[i-1])/2;for(n=0;n<i-1;++n)s[n]=2*t[n+1]-a[n+1];return[a,s]}function natural(t){return new Natural(t)}function Step(t,i){(this||n)._context=t;(this||n)._t=i}Step.prototype={areaStart:function(){(this||n)._line=0},areaEnd:function(){(this||n)._line=NaN},lineStart:function(){(this||n)._x=(this||n)._y=NaN;(this||n)._point=0},lineEnd:function(){0<(this||n)._t&&(this||n)._t<1&&2===(this||n)._point&&(this||n)._context.lineTo((this||n)._x,(this||n)._y);((this||n)._line||0!==(this||n)._line&&1===(this||n)._point)&&(this||n)._context.closePath();(this||n)._line>=0&&((this||n)._t=1-(this||n)._t,(this||n)._line=1-(this||n)._line)},point:function(t,i){t=+t,i=+i;switch((this||n)._point){case 0:(this||n)._point=1;(this||n)._line?(this||n)._context.lineTo(t,i):(this||n)._context.moveTo(t,i);break;case 1:(this||n)._point=2;default:if((this||n)._t<=0){(this||n)._context.lineTo((this||n)._x,i);(this||n)._context.lineTo(t,i)}else{var e=(this||n)._x*(1-(this||n)._t)+t*(this||n)._t;(this||n)._context.lineTo(e,(this||n)._y);(this||n)._context.lineTo(e,i)}break}(this||n)._x=t,(this||n)._y=i}};function step(t){return new Step(t,.5)}function stepBefore(t){return new Step(t,0)}function stepAfter(t){return new Step(t,1)}function none(t,n){if((o=t.length)>1)for(var i=1,e,a,s=t[n[0]],o,r=s.length;i<o;++i){a=s,s=t[n[i]];for(e=0;e<r;++e)s[e][1]+=s[e][0]=isNaN(a[e][1])?a[e][0]:a[e][1]}}function none$1(t){var n=t.length,i=new Array(n);while(--n>=0)i[n]=n;return i}function stackValue(t,n){return t[n]}function stack(){var t=constant([]),i=none$1,e=none,a=stackValue;function stack(s){var o=t.apply(this||n,arguments),r,l=s.length,h=o.length,c=new Array(h),_;for(r=0;r<h;++r){for(var u=o[r],f=c[r]=new Array(l),p=0,d;p<l;++p){f[p]=d=[0,+a(s[p],u,p,s)];d.data=s[p]}f.key=u}for(r=0,_=i(c);r<h;++r)c[_[r]].index=r;e(c,_);return c}stack.keys=function(n){return arguments.length?(t="function"===typeof n?n:constant(d.call(n)),stack):t};stack.value=function(t){return arguments.length?(a="function"===typeof t?t:constant(+t),stack):a};stack.order=function(t){return arguments.length?(i=null==t?none$1:"function"===typeof t?t:constant(d.call(t)),stack):i};stack.offset=function(t){return arguments.length?(e=null==t?none:t,stack):e};return stack}function expand(t,n){if((e=t.length)>0){for(var i,e,a=0,s=t[0].length,o;a<s;++a){for(o=i=0;i<e;++i)o+=t[i][a][1]||0;if(o)for(i=0;i<e;++i)t[i][a][1]/=o}none(t,n)}}function diverging(t,n){if((l=t.length)>0)for(var i,e=0,a,s,o,r,l,h=t[n[0]].length;e<h;++e)for(o=r=0,i=0;i<l;++i)(s=(a=t[n[i]][e])[1]-a[0])>0?(a[0]=o,a[1]=o+=s):s<0?(a[1]=r,a[0]=r+=s):(a[0]=0,a[1]=s)}function silhouette(t,n){if((a=t.length)>0){for(var i=0,e=t[n[0]],a,s=e.length;i<s;++i){for(var o=0,r=0;o<a;++o)r+=t[o][i][1]||0;e[i][1]+=e[i][0]=-r/2}none(t,n)}}function wiggle(t,n){if((o=t.length)>0&&(s=(a=t[n[0]]).length)>0){for(var i=0,e=1,a,s,o;e<s;++e){for(var r=0,l=0,h=0;r<o;++r){var c=t[n[r]],_=c[e][1]||0,u=c[e-1][1]||0,f=(_-u)/2;for(var p=0;p<r;++p){var d=t[n[p]],v=d[e][1]||0,m=d[e-1][1]||0;f+=v-m}l+=_,h+=f*_}a[e-1][1]+=a[e-1][0]=i;l&&(i-=h/l)}a[e-1][1]+=a[e-1][0]=i;none(t,n)}}function appearance(t){var n=t.map(peak);return none$1(t).sort((function(t,i){return n[t]-n[i]}))}function peak(t){var n=-1,i=0,e=t.length,a,s=-Infinity;while(++n<e)(a=+t[n][1])>s&&(s=a,i=n);return i}function ascending(t){var n=t.map(sum);return none$1(t).sort((function(t,i){return n[t]-n[i]}))}function sum(t){var n=0,i=-1,e=t.length,a;while(++i<e)(a=+t[i][1])&&(n+=a);return n}function descending$1(t){return ascending(t).reverse()}function insideOut(t){var n=t.length,i,e,a=t.map(sum),s=appearance(t),o=0,r=0,l=[],h=[];for(i=0;i<n;++i){e=s[i];if(o<r){o+=a[e];l.push(e)}else{r+=a[e];h.push(e)}}return h.reverse().concat(l)}function reverse(t){return none$1(t).reverse()}t.arc=arc;t.area=area;t.areaRadial=areaRadial;t.curveBasis=basis;t.curveBasisClosed=basisClosed;t.curveBasisOpen=basisOpen;t.curveBundle=z;t.curveCardinal=L;t.curveCardinalClosed=X;t.curveCardinalOpen=Y;t.curveCatmullRom=V;t.curveCatmullRomClosed=I;t.curveCatmullRomOpen=D;t.curveLinear=curveLinear;t.curveLinearClosed=linearClosed;t.curveMonotoneX=monotoneX;t.curveMonotoneY=monotoneY;t.curveNatural=natural;t.curveStep=step;t.curveStepAfter=stepAfter;t.curveStepBefore=stepBefore;t.line=line;t.lineRadial=lineRadial$1;t.linkHorizontal=linkHorizontal;t.linkRadial=linkRadial;t.linkVertical=linkVertical;t.pie=pie;t.pointRadial=pointRadial;t.radialArea=areaRadial;t.radialLine=lineRadial$1;t.stack=stack;t.stackOffsetDiverging=diverging;t.stackOffsetExpand=expand;t.stackOffsetNone=none;t.stackOffsetSilhouette=silhouette;t.stackOffsetWiggle=wiggle;t.stackOrderAppearance=appearance;t.stackOrderAscending=ascending;t.stackOrderDescending=descending$1;t.stackOrderInsideOut=insideOut;t.stackOrderNone=none$1;t.stackOrderReverse=reverse;t.symbol=symbol;t.symbolCircle=v;t.symbolCross=m;t.symbolDiamond=b;t.symbolSquare=S;t.symbolStar=M;t.symbolTriangle=O;t.symbolWye=B;t.symbols=q;Object.defineProperty(t,"__esModule",{value:true})}));const e=i.arc,a=i.area,s=i.areaRadial,o=i.curveBasis,r=i.curveBasisClosed,l=i.curveBasisOpen,h=i.curveBundle,c=i.curveCardinal,_=i.curveCardinalClosed,u=i.curveCardinalOpen,f=i.curveCatmullRom,p=i.curveCatmullRomClosed,d=i.curveCatmullRomOpen,v=i.curveLinear,m=i.curveLinearClosed,k=i.curveMonotoneX,g=i.curveMonotoneY,b=i.curveNatural,T=i.curveStep,R=i.curveStepAfter,C=i.curveStepBefore,w=i.line,M=i.lineRadial,S=i.linkHorizontal,N=i.linkRadial,O=i.linkVertical,A=i.pie,E=i.pointRadial,P=i.radialArea,$=i.radialLine,B=i.stack,q=i.stackOffsetDiverging,z=i.stackOffsetExpand,L=i.stackOffsetNone,X=i.stackOffsetSilhouette,Y=i.stackOffsetWiggle,V=i.stackOrderAppearance,I=i.stackOrderAscending,D=i.stackOrderDescending,H=i.stackOrderInsideOut,W=i.stackOrderNone,j=i.stackOrderReverse,F=i.symbol,G=i.symbolCircle,J=i.symbolCross,K=i.symbolDiamond,Q=i.symbolSquare,U=i.symbolStar,Z=i.symbolTriangle,tt=i.symbolWye,nt=i.symbols,it=i.__esModule;export default i;export{it as __esModule,e as arc,a as area,s as areaRadial,o as curveBasis,r as curveBasisClosed,l as curveBasisOpen,h as curveBundle,c as curveCardinal,_ as curveCardinalClosed,u as curveCardinalOpen,f as curveCatmullRom,p as curveCatmullRomClosed,d as curveCatmullRomOpen,v as curveLinear,m as curveLinearClosed,k as curveMonotoneX,g as curveMonotoneY,b as curveNatural,T as curveStep,R as curveStepAfter,C as curveStepBefore,w as line,M as lineRadial,S as linkHorizontal,N as linkRadial,O as linkVertical,A as pie,E as pointRadial,P as radialArea,$ as radialLine,B as stack,q as stackOffsetDiverging,z as stackOffsetExpand,L as stackOffsetNone,X as stackOffsetSilhouette,Y as stackOffsetWiggle,V as stackOrderAppearance,I as stackOrderAscending,D as stackOrderDescending,H as stackOrderInsideOut,W as stackOrderNone,j as stackOrderReverse,F as symbol,G as symbolCircle,J as symbolCross,K as symbolDiamond,Q as symbolSquare,U as symbolStar,Z as symbolTriangle,tt as symbolWye,nt as symbols};

