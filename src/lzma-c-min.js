var e=function(){"use strict";function r(e,r){postMessage({action:Or,cbn:r,result:e})}function t(e,r){return e.$b=new Uint8Array(r),e.ec=0,e.Kb=r.length,e}function n(e,r,t,n){return e.ec>=e.Kb?-1:(n=Math.min(n,e.Kb-e.ec),r.set(e.$b.subarray(e.ec,e.ec+n),t),e.ec+=n,n)}function s(e){return e.$bfers=[],e.Kb=0,e.currentByteBuffer=new Uint8Array(1024),e.currentByteCount=0,e}function o(e){0!=e.currentByteCount&&(e.$bfers.push(e.currentByteBuffer.subarray(0,e.currentByteCount)),e.currentByteBuffer=new Uint8Array(1024),e.currentByteCount=0)}function i(e){o(e);for(var r=new Uint8Array(e.Kb),t=0,n=0;e.$bfers.length>t;++t){var s=e.$bfers[t].length;r.set(e.$bfers[t],n),n+=s}return r}function _(e,r){e.currentByteBuffer[e.currentByteCount++]=r,e.Kb++,e.currentByteCount==e.currentByteBuffer.length-1&&o(e)}function a(e,r,t,n){o(e),e.$bfers.push(new Uint8Array(r.subarray(t,t+n))),e.Kb+=n}function c(e,r,t,n,s){var o;for(o=r;t>o;++o)n[s++]=e.charCodeAt(o)}function f(e,r){J(r,1<<e.s),r.j=e.f,Q(r,e.m),r.U=0,r.V=3,r.O=2,r.u=3}function u(r,t,n,s,o){var i,a;if(-1>s||s>=4294967296)throw Error("invalid length "+s);for(r.hc=s,i=x({}),f(o,i),i.Wb=void 0===e.disableEndMark,X(i,n),a=0;64>a;a+=8)_(n,s>>>a);r.Rb=(i.M=0,i.Ib=t,i.Gb=0,O(i),i.c.fc=n,Z(i),N(i),H(i),i.Q.fb=i.j+1-2,cr(i.Q,1<<i.O),i.f.fb=i.j+1-2,cr(i.f,1<<i.O),void(i.z=0),L({},i))}function m(e,r,n){return e.ac=s({}),u(e,t({},r),e.ac,r.length,n),e}function p(e,r,t,n){var s;e.Ob=r,e.wb=t,s=r+t+n,(null==e.d||e.mb!=s)&&(e.mb=s,e.d=new Uint8Array(e.mb)),e.B=e.mb-t}function d(e,r){return e.d[e.e+e.w+r]}function h(e,r,t,n){var s,o;for(e.L&&e.w+r+n>e.q&&(n=e.q-(e.w+r)),++t,o=e.e+e.w+r,s=0;n>s&&e.d[o+s]==e.d[o+s-t];++s);return s}function P(e){return e.q-e.w}function B(e){var r,t;t=e.e+e.w-e.Ob,t>0&&--t,r=e.e+e.q-t,e.d.set(e.d.subarray(t,t+r),0),e.e-=t}function l(e){var r;++e.w,e.w>e.jb&&(r=e.e+e.w,r>e.B&&B(e),v(e))}function v(e){var r,t,s;if(!e.L)for(;;){if(s=-e.e+e.mb-e.q,!s)return;if(r=n(e.bc,e.d,e.e+e.q,s),-1==r)return e.jb=e.q,t=e.e+e.jb,t>e.B&&(e.jb=e.B-e.e),void(e.L=1);e.q+=r,e.q>=e.w+e.wb&&(e.jb=e.q-e.wb)}}function y(e,r){e.e+=r,e.jb-=r,e.w-=r,e.q-=r}function k(e,r,t,n,s){var o,i,_;1073741567>r&&(e.Tb=16+(n>>1),_=~~((r+t+n+s)/2)+256,p(e,r+t,n+s,_),e.cb=n,o=r+1,e.l!=o&&(e.E=new Int32Array(2*(e.l=o))),i=65536,e.eb&&(i=r-1,i|=i>>1,i|=i>>2,i|=i>>4,i|=i>>8,i>>=1,i|=65535,i>16777216&&(i>>=1),e.Ub=i,++i,i+=e.F),i!=e.Eb&&(e.db=new Int32Array(e.Eb=i)))}function S(e,r){var t,n,s,o,i,_,a,c,f,u,m,p,d,h,P,B,l,v,y,k,S;if(e.q>=e.w+e.cb)h=e.cb;else if(h=e.q-e.w,e.ib>h)return E(e),0;for(l=0,P=e.w>e.l?e.w-e.l:0,n=e.e+e.w,B=1,c=0,f=0,e.eb?(S=Hr[e.d[n]]^e.d[n+1],c=1023&S,S^=e.d[n+2]<<8,f=65535&S,u=(S^Hr[e.d[n+3]]<<5)&e.Ub):u=e.d[n]^e.d[n+1]<<8,s=e.db[e.F+u]||0,e.eb&&(o=e.db[c]||0,i=e.db[1024+f]||0,e.db[c]=e.w,e.db[1024+f]=e.w,o>P&&e.d[e.e+o]==e.d[n]&&(r[l++]=B=2,r[l++]=e.w-o-1),i>P&&e.d[e.e+i]==e.d[n]&&(i==o&&(l-=2),r[l++]=B=3,r[l++]=e.w-i-1,o=i),0!=l&&o==s&&(l-=2,B=1)),e.db[e.F+u]=e.w,y=(e.g<<1)+1,k=e.g<<1,p=d=e.s,0!=e.s&&s>P&&e.d[e.e+s+e.s]!=e.d[n+e.s]&&(r[l++]=B=e.s,r[l++]=e.w-s-1),t=e.Tb;;){if(P>=s||0==t--){e.E[y]=e.E[k]=0;break}if(a=e.w-s,_=(e.g>=a?e.g-a:e.g-a+e.l)<<1,v=e.e+s,m=d>p?p:d,e.d[v+m]==e.d[n+m]){for(;++m!=h&&e.d[v+m]==e.d[n+m];);if(m>B&&(r[l++]=B=m,r[l++]=a-1,m==h)){e.E[k]=e.E[_],e.E[y]=e.E[_+1];break}}e.d[n+m]>e.d[v+m]?(e.E[k]=s,k=_+1,s=e.E[k],d=m):(e.E[y]=s,y=_,s=e.E[y],p=m)}return E(e),l}function b(e){e.e=0,e.w=0,e.q=0,e.L=0,v(e),e.g=0,y(e,-1)}function E(e){var r;++e.g>=e.l&&(e.g=0),l(e),1073741823==e.w&&(r=e.w-e.l,g(e.E,2*e.l,r),g(e.db,e.Eb,r),y(e,r))}function g(e,r,t){var n,s;for(n=0;r>n;++n)s=e[n]||0,t>=s?s=0:s-=t,e[n]=s}function M(e,r){e.eb=r>2,e.eb?(e.s=0,e.ib=4,e.F=66560):(e.s=2,e.ib=3,e.F=0)}function R(e,r){var t,n,s,o,i,_,a,c,f,u,m,p,d,h,P,B,l;do{if(e.q>=e.w+e.cb)p=e.cb;else if(p=e.q-e.w,e.ib>p){E(e);continue}for(d=e.w>e.l?e.w-e.l:0,n=e.e+e.w,e.eb?(l=Hr[e.d[n]]^e.d[n+1],_=1023&l,e.db[_]=e.w,l^=e.d[n+2]<<8,a=65535&l,e.db[1024+a]=e.w,c=(l^Hr[e.d[n+3]]<<5)&e.Ub):c=e.d[n]^e.d[n+1]<<8,s=e.db[e.F+c],e.db[e.F+c]=e.w,P=(e.g<<1)+1,B=e.g<<1,u=m=e.s,t=e.Tb;;){if(d>=s||0==t--){e.E[P]=e.E[B]=0;break}if(i=e.w-s,o=(e.g>=i?e.g-i:e.g-i+e.l)<<1,h=e.e+s,f=m>u?u:m,e.d[h+f]==e.d[n+f]){for(;++f!=p&&e.d[h+f]==e.d[n+f];);if(f==p){e.E[B]=e.E[o],e.E[P]=e.E[o+1];break}}e.d[n+f]>e.d[h+f]?(e.E[B]=s,B=o+1,s=e.E[B],m=f):(e.E[P]=s,P=o,s=e.E[P],u=f)}E(e)}while(0!=--r)}function w(e){return e-=2,4>e?e:3}function F(e){return 4>e?0:10>e?e-3:e-6}function L(e,r){return e.Z=r,e.ic=null,e.cc=1,e}function C(e){if(!e.cc)throw Error("bad state");if(!e.Z)throw Error("No decoding");return A(e),e.cc}function A(e){D(e.Z,e.Z.vb,e.Z.Nb,e.Z.Yb),e.Mb=e.Z.vb[0],e.Z.Yb[0]&&(q(e.Z),e.cc=0)}function z(e,r){var t,n,s,o;e.W=r,s=e.a[r].n,n=e.a[r].h;do e.a[r].p&&(Br(e.a[s]),e.a[s].n=s-1,e.a[r].Qb&&(e.a[s-1].p=0,e.a[s-1].n=e.a[r].n2,e.a[s-1].h=e.a[r].h2)),o=s,t=n,n=e.a[o].h,s=e.a[o].n,e.a[o].h=t,e.a[o].n=r,r=o;while(r>0);return e._=e.a[0].h,e.m=e.a[0].n}function I(e){e.i=0,e.C=0;for(var r=0;4>r;++r)e.r[r]=0}function D(e,r,t,n){var s,o,i,_,a,c,f,u,m,p,h,B,l,v,y;if(r[0]=0,t[0]=0,n[0]=1,e.Ib&&(e.b.bc=e.Ib,b(e.b),e.M=1,e.Ib=null),!e.Gb){if(e.Gb=1,v=e.z,0==e.z){if(!P(e.b))return void G(e,e.z);j(e),l=e.z&e.u,Rr(e.c,e.y,(e.i<<4)+l,0),e.i=F(e.i),i=d(e.b,-e.o),pr(ur(e.x,e.z,e.C),e.c,i),e.C=i,--e.o,e.z++}if(!P(e.b))return void G(e,e.z);for(;;){if(f=T(e,e.z),p=e._,l=e.z&e.u,o=(e.i<<4)+l,1==f&&-1==p)Rr(e.c,e.y,o,0),i=d(e.b,-e.o),y=ur(e.x,e.z,e.C),7>e.i?pr(y,e.c,i):(m=d(e.b,-e.r[0]-1-e.o),dr(y,e.c,m,i)),e.C=i,e.i=F(e.i);else{if(Rr(e.c,e.y,o,1),4>p){if(Rr(e.c,e.S,e.i,1),p?(Rr(e.c,e.X,e.i,1),1==p?Rr(e.c,e.rb,e.i,0):(Rr(e.c,e.rb,e.i,1),Rr(e.c,e.Lb,e.i,p-2))):(Rr(e.c,e.X,e.i,0),1==f?Rr(e.c,e.P,o,0):Rr(e.c,e.P,o,1)),1==f?e.i=7>e.i?9:11:(ir(e.f,e.c,f-2,l),e.i=7>e.i?8:11),_=e.r[p],0!=p){for(c=p;c>=1;--c)e.r[c]=e.r[c-1];e.r[0]=_}}else{for(Rr(e.c,e.S,e.i,0),e.i=7>e.i?7:10,ir(e.Q,e.c,f-2,l),p-=4,B=er(p),u=w(f),yr(e.D[u],e.c,B),B>=4&&(a=(B>>1)-1,s=(2|1&B)<<a,h=p-s,14>B?Er(e.qb,s-B-1,e.c,a,h):(wr(e.c,h>>4,a-4),Sr(e.J,e.c,15&h),++e.sb)),_=p,c=3;c>=1;--c)e.r[c]=e.r[c-1];e.r[0]=_,++e.ob}e.C=d(e.b,f-1-e.o)}if(e.o-=f,e.z+=f,!e.o){if(e.ob>=128&&N(e),e.sb>=16&&H(e),r[0]=e.z,t[0]=Fr(e.c),!P(e.b))return void G(e,e.z);if(e.z-v>=4096)return e.Gb=0,void(n[0]=0)}}}}function O(e){var r,t;e.b||(r={},t=4,e.K||(t=2),M(r,t),e.b=r),fr(e.x,e.U,e.V),(e.R!=e.hb||e.kb!=e.j)&&(k(e.b,e.R,4096,e.j,274),e.hb=e.R,e.kb=e.j)}function x(e){var r;for(e.r=new Int32Array(4),e.a=[],e.c={},e.y=new Int16Array(192),e.S=new Int16Array(12),e.X=new Int16Array(12),e.rb=new Int16Array(12),e.Lb=new Int16Array(12),e.P=new Int16Array(192),e.D=[],e.qb=new Int16Array(114),e.J=vr({},4),e.Q=_r({}),e.f=_r({}),e.x={},e.k=new Int32Array(548),e.H=new Int32Array(256),e.Y=new Int32Array(512),e.Fb=new Int32Array(16),e.t=new Int32Array(4),e.I=new Int32Array(4),e.vb=[0],e.Nb=[0],e.Yb=[0],e.Cb=new Uint8Array(5),e.Pb=new Int32Array(128),e.gb=0,e.K=1,e.A=0,e.kb=-1,e._=0,r=0;4096>r;++r)e.a[r]={};for(r=0;4>r;++r)e.D[r]=vr({},6);return e}function H(e){for(var r=0;16>r;++r)e.Fb[r]=br(e.J,r);e.sb=0}function N(e){var r,t,n,s,o,i,_,a;for(s=4;128>s;++s)i=er(s),n=(i>>1)-1,r=(2|1&i)<<n,e.Pb[s]=gr(e.qb,r-i-1,n,s-r);for(o=0;4>o;++o){for(t=e.D[o],_=o<<6,i=0;e.yb>i;++i)e.H[_+i]=kr(t,i);for(i=14;e.yb>i;++i)e.H[_+i]+=(i>>1)-1-4<<6;for(a=128*o,s=0;4>s;++s)e.Y[a+s]=e.H[_+s];for(;128>s;++s)e.Y[a+s]=e.H[_+er(s)]+e.Pb[s]}e.ob=0}function G(e,r){K(e),$(e,r&e.u);for(var t=0;5>t;++t)Cr(e.c)}function T(e,r){var t,n,s,o,i,_,a,c,f,u,m,p,B,l,v,y,k,S,b,E,g,M,R,w,L,C,A,I,D,O,x,H,N,G,T,Z,K,q,J,Q,X,$,er,rr,tr,nr,sr,or,ir,_r;if(e.W!=e.m)return B=e.a[e.m].n-e.m,e._=e.a[e.m].h,e.m=e.a[e.m].n,B;if(e.m=e.W=0,e.G?(p=e.gb,e.G=0):p=j(e),A=e.A,L=P(e.b)+1,2>L)return e._=-1,1;for(L>273&&(L=273),Q=0,f=0;4>f;++f)e.t[f]=e.r[f],e.I[f]=h(e.b,-1,e.t[f],273),e.I[f]>e.I[Q]&&(Q=f);if(e.I[Q]>=e.j)return e._=Q,B=e.I[Q],V(e,B-1),B;if(p>=e.j)return e._=e.k[A-1]+4,V(e,p-1),p;if(a=d(e.b,-1),k=d(e.b,-e.r[0]-1-1),2>p&&a!=k&&2>e.I[Q])return e._=-1,1;if(e.a[0].Xb=e.i,G=r&e.u,e.a[1].v=Gr[e.y[(e.i<<4)+G]>>>2]+Pr(ur(e.x,r,e.C),e.i>=7,k,a),Br(e.a[1]),S=Gr[2048-e.y[(e.i<<4)+G]>>>2],J=S+Gr[2048-e.S[e.i]>>>2],k==a&&(X=J+Y(e,e.i,G),e.a[1].v>X&&(e.a[1].v=X,lr(e.a[1]))),m=p>=e.I[Q]?p:e.I[Q],2>m)return e._=e.a[1].h,1;e.a[1].n=0,e.a[0].Ab=e.t[0],e.a[0].zb=e.t[1],e.a[0].xb=e.t[2],e.a[0].Hb=e.t[3],u=m;do e.a[u--].v=268435455;while(u>=2);for(f=0;4>f;++f)if(q=e.I[f],!(2>q)){Z=J+W(e,f,e.i,G);do o=Z+ar(e.f,q-2,G),x=e.a[q],x.v>o&&(x.v=o,x.n=0,x.h=f,x.p=0);while(--q>=2)}if(w=S+Gr[e.S[e.i]>>>2],u=e.I[0]>=2?e.I[0]+1:2,p>=u){for(I=0;u>e.k[I];)I+=2;for(;c=e.k[I+1],o=w+U(e,c,u,G),x=e.a[u],x.v>o&&(x.v=o,x.n=0,x.h=c+4,x.p=0),u!=e.k[I]||(I+=2,I!=A);++u);}for(t=0;;){if(++t,t==m)return z(e,t);if(b=j(e),A=e.A,b>=e.j)return e.gb=b,e.G=1,z(e,t);if(++r,N=e.a[t].n,e.a[t].p?(--N,e.a[t].Qb?(er=e.a[e.a[t].n2].Xb,er=4>e.a[t].h2?7>er?8:11:7>er?7:10):er=e.a[N].Xb,er=F(er)):er=e.a[N].Xb,N==t-1?er=e.a[t].h?F(er):7>er?9:11:(e.a[t].p&&e.a[t].Qb?(N=e.a[t].n2,H=e.a[t].h2,er=7>er?8:11):(H=e.a[t].h,er=4>H?7>er?8:11:7>er?7:10),O=e.a[N],4>H?H?1==H?(e.t[0]=O.zb,e.t[1]=O.Ab,e.t[2]=O.xb,e.t[3]=O.Hb):2==H?(e.t[0]=O.xb,e.t[1]=O.Ab,e.t[2]=O.zb,e.t[3]=O.Hb):(e.t[0]=O.Hb,e.t[1]=O.Ab,e.t[2]=O.zb,e.t[3]=O.xb):(e.t[0]=O.Ab,e.t[1]=O.zb,e.t[2]=O.xb,e.t[3]=O.Hb):(e.t[0]=H-4,e.t[1]=O.Ab,e.t[2]=O.zb,e.t[3]=O.xb)),e.a[t].Xb=er,e.a[t].Ab=e.t[0],e.a[t].zb=e.t[1],e.a[t].xb=e.t[2],e.a[t].Hb=e.t[3],_=e.a[t].v,a=d(e.b,-1),k=d(e.b,-e.t[0]-1-1),G=r&e.u,n=_+Gr[e.y[(er<<4)+G]>>>2]+Pr(ur(e.x,r,d(e.b,-2)),er>=7,k,a),M=e.a[t+1],E=0,M.v>n&&(M.v=n,M.n=t,M.h=-1,M.p=0,E=1),S=_+Gr[2048-e.y[(er<<4)+G]>>>2],J=S+Gr[2048-e.S[er]>>>2],k!=a||t>M.n&&!M.h||(X=J+(Gr[e.X[er]>>>2]+Gr[e.P[(er<<4)+G]>>>2]),M.v>=X&&(M.v=X,M.n=t,M.h=0,M.p=0,E=1)),C=P(e.b)+1,C=C>4095-t?4095-t:C,L=C,!(2>L)){if(L>e.j&&(L=e.j),!E&&k!=a&&(tr=Math.min(C-1,e.j),v=h(e.b,0,e.t[0],tr),v>=2)){for(rr=F(er),T=r+1&e.u,R=n+Gr[2048-e.y[(rr<<4)+T]>>>2]+Gr[2048-e.S[rr]>>>2],D=t+1+v;D>m;)e.a[++m].v=268435455;o=R+(nr=ar(e.f,v-2,T),nr+W(e,0,rr,T)),x=e.a[D],x.v>o&&(x.v=o,x.n=t+1,x.h=0,x.p=1,x.Qb=0)}for($=2,K=0;4>K;++K)if(l=h(e.b,-1,e.t[K],L),!(2>l)){y=l;do{for(;t+l>m;)e.a[++m].v=268435455;o=J+(sr=ar(e.f,l-2,G),sr+W(e,K,er,G)),x=e.a[t+l],x.v>o&&(x.v=o,x.n=t,x.h=K,x.p=0)}while(--l>=2);if(l=y,K||($=l+1),C>l&&(tr=Math.min(C-1-l,e.j),v=h(e.b,l,e.t[K],tr),v>=2)){for(rr=7>er?8:11,T=r+l&e.u,s=J+(or=ar(e.f,l-2,G),or+W(e,K,er,G))+Gr[e.y[(rr<<4)+T]>>>2]+Pr(ur(e.x,r+l,d(e.b,l-1-1)),1,d(e.b,l-1-(e.t[K]+1)),d(e.b,l-1)),rr=F(rr),T=r+l+1&e.u,g=s+Gr[2048-e.y[(rr<<4)+T]>>>2],R=g+Gr[2048-e.S[rr]>>>2],D=l+1+v;t+D>m;)e.a[++m].v=268435455;o=R+(ir=ar(e.f,v-2,T),ir+W(e,0,rr,T)),x=e.a[t+D],x.v>o&&(x.v=o,x.n=t+l+1,x.h=0,x.p=1,x.Qb=1,x.n2=t,x.h2=K)}}if(b>L){for(b=L,A=0;b>e.k[A];A+=2);e.k[A]=b,A+=2}if(b>=$){for(w=S+Gr[e.S[er]>>>2];t+b>m;)e.a[++m].v=268435455;for(I=0;$>e.k[I];)I+=2;for(l=$;;++l)if(i=e.k[I+1],o=w+U(e,i,l,G),x=e.a[t+l],x.v>o&&(x.v=o,x.n=t,x.h=i+4,x.p=0),l==e.k[I]){if(C>l&&(tr=Math.min(C-1-l,e.j),v=h(e.b,l,i,tr),v>=2)){for(rr=7>er?7:10,T=r+l&e.u,s=o+Gr[e.y[(rr<<4)+T]>>>2]+Pr(ur(e.x,r+l,d(e.b,l-1-1)),1,d(e.b,l-(i+1)-1),d(e.b,l-1)),rr=F(rr),T=r+l+1&e.u,g=s+Gr[2048-e.y[(rr<<4)+T]>>>2],R=g+Gr[2048-e.S[rr]>>>2],D=l+1+v;t+D>m;)e.a[++m].v=268435455;o=R+(_r=ar(e.f,v-2,T),_r+W(e,0,rr,T)),x=e.a[t+D],x.v>o&&(x.v=o,x.n=t+l+1,x.h=0,x.p=1,x.Qb=1,x.n2=t,x.h2=i+4)}if(I+=2,I==A)break}}}}}function U(e,r,t,n){var s,o=w(t);return s=128>r?e.Y[128*o+r]:e.H[(o<<6)+rr(r)]+e.Fb[15&r],s+ar(e.Q,t-2,n)}function W(e,r,t,n){var s;return r?(s=Gr[2048-e.X[t]>>>2],1==r?s+=Gr[e.rb[t]>>>2]:(s+=Gr[2048-e.rb[t]>>>2],s+=Ar(e.Lb[t],r-2))):(s=Gr[e.X[t]>>>2],s+=Gr[2048-e.P[(t<<4)+n]>>>2]),s}function Y(e,r,t){return Gr[e.X[r]>>>2]+Gr[e.P[(r<<4)+t]>>>2]}function Z(e){I(e),Lr(e.c),Mr(e.y),Mr(e.P),Mr(e.S),Mr(e.X),Mr(e.rb),Mr(e.Lb),Mr(e.qb),mr(e.x);for(var r=0;4>r;++r)Mr(e.D[r].bb);sr(e.Q,1<<e.O),sr(e.f,1<<e.O),Mr(e.J.bb),e.G=0,e.W=0,e.m=0,e.o=0}function V(e,r){r>0&&(R(e.b,r),e.o+=r)}function j(e){var r=0;return e.A=S(e.b,e.k),e.A>0&&(r=e.k[e.A-2],r==e.j&&(r+=h(e.b,r-1,e.k[e.A-1],273-r))),++e.o,r}function K(e){e.b&&e.M&&(e.b.bc=null,e.M=0)}function q(e){K(e),e.c.fc=null}function J(e,r){e.R=r;for(var t=0;r>1<<t;++t);e.yb=2*t}function Q(e,r){var t=e.K;e.K=r,e.b&&t!=e.K&&(e.hb=-1,e.b=null)}function X(e,r){e.Cb[0]=9*(5*e.O+e.U)+e.V<<24>>24;for(var t=0;4>t;++t)e.Cb[1+t]=e.R>>8*t;a(r,e.Cb,0,5)}function $(e,r){if(e.Wb){Rr(e.c,e.y,(e.i<<4)+r,1),Rr(e.c,e.S,e.i,0),e.i=7>e.i?7:10,ir(e.Q,e.c,0,r);var t=w(2);yr(e.D[t],e.c,63),wr(e.c,67108863,26),Sr(e.J,e.c,15)}}function er(e){return 2048>e?Nr[e]:2097152>e?Nr[e>>10]+20:Nr[e>>20]+40}function rr(e){return 131072>e?Nr[e>>6]+12:134217728>e?Nr[e>>16]+32:Nr[e>>26]+52}function tr(e,r,t,n){8>t?(Rr(r,e.T,0,0),yr(e.tb[n],r,t)):(t-=8,Rr(r,e.T,0,1),8>t?(Rr(r,e.T,1,0),yr(e.ub[n],r,t)):(Rr(r,e.T,1,1),yr(e.Bb,r,t-8)))}function nr(e){e.T=new Int16Array(2),e.tb=[],e.ub=[],e.Bb=vr({},8);for(var r=0;16>r;++r)e.tb[r]=vr({},3),e.ub[r]=vr({},3);return e}function sr(e,r){Mr(e.T);for(var t=0;r>t;++t)Mr(e.tb[t].bb),Mr(e.ub[t].bb);Mr(e.Bb.bb)}function or(e,r,t,n,s){var o,i,_,a,c;for(o=Gr[e.T[0]>>>2],i=Gr[2048-e.T[0]>>>2],_=i+Gr[e.T[1]>>>2],a=i+Gr[2048-e.T[1]>>>2],c=0,c=0;8>c;++c){if(c>=t)return;n[s+c]=o+kr(e.tb[r],c)}for(;16>c;++c){if(c>=t)return;n[s+c]=_+kr(e.ub[r],c-8)}for(;t>c;++c)n[s+c]=a+kr(e.Bb,c-8-8)}function ir(e,r,t,n){tr(e,r,t,n),0==--e.Jb[n]&&(or(e,n,e.fb,e.Sb,272*n),e.Jb[n]=e.fb)}function _r(e){return nr(e),e.Sb=[],e.Jb=[],e}function ar(e,r,t){return e.Sb[272*t+r]}function cr(e,r){for(var t=0;r>t;++t)or(e,t,e.fb,e.Sb,272*t),e.Jb[t]=e.fb}function fr(e,r,t){var n,s;if(null==e.Db||e.N!=t||e.pb!=r)for(e.pb=r,e.dc=(1<<r)-1,e.N=t,s=1<<e.N+e.pb,e.Db=[],n=0;s>n;++n)e.Db[n]=hr({})}function ur(e,r,t){return e.Db[((r&e.dc)<<e.N)+((255&t)>>>8-e.N)]}function mr(e){var r,t=1<<e.N+e.pb;for(r=0;t>r;++r)Mr(e.Db[r].$)}function pr(e,r,t){var n,s,o=1;for(s=7;s>=0;--s)n=t>>s&1,Rr(r,e.$,o,n),o=o<<1|n}function dr(e,r,t,n){var s,o,i,_,a=1,c=1;for(o=7;o>=0;--o)s=n>>o&1,_=c,a&&(i=t>>o&1,_+=1+i<<8,a=i==s),Rr(r,e.$,_,s),c=c<<1|s}function hr(e){return e.$=new Int16Array(768),e}function Pr(e,r,t,n){var s,o,i=1,_=7,a=0;if(r)for(;_>=0;--_)if(o=t>>_&1,s=n>>_&1,a+=Ar(e.$[(1+o<<8)+i],s),i=i<<1|s,o!=s){--_;break}for(;_>=0;--_)s=n>>_&1,a+=Ar(e.$[i],s),i=i<<1|s;return a}function Br(e){e.h=-1,e.p=0}function lr(e){e.h=0,e.p=0}function vr(e,r){return e.ab=r,e.bb=new Int16Array(1<<r),e}function yr(e,r,t){var n,s,o=1;for(s=e.ab;0!=s;)--s,n=t>>>s&1,Rr(r,e.bb,o,n),o=o<<1|n}function kr(e,r){var t,n,s=1,o=0;for(n=e.ab;0!=n;)--n,t=r>>>n&1,o+=Ar(e.bb[s],t),s=(s<<1)+t;return o}function Sr(e,r,t){var n,s,o=1;for(s=0;e.ab>s;++s)n=1&t,Rr(r,e.bb,o,n),o=o<<1|n,t>>=1}function br(e,r){var t,n,s=1,o=0;for(n=e.ab;0!=n;--n)t=1&r,r>>>=1,o+=Ar(e.bb[s],t),s=s<<1|t;return o}function Er(e,r,t,n,s){var o,i,_=1;for(i=0;n>i;++i)o=1&s,Rr(t,e,r+_,o),_=_<<1|o,s>>=1}function gr(e,r,t,n){var s,o,i=1,_=0;for(o=t;0!=o;--o)s=1&n,n>>>=1,_+=Gr[(2047&(e[r+i]-s^-s))>>>2],i=i<<1|s;return _}function Mr(e){for(var r=e.length-1;r>=0;--r)e[r]=1024}function Rr(e,r,t,n){var s,o=r[t];s=(e.nb>>>11)*o,n?(e.Zb+=s,e.nb-=s,r[t]=o-(o>>>5)):(e.nb=s,r[t]=o+(2048-o>>>5)),4278190080&e.nb||(e.nb<<=8,Cr(e))}function wr(e,r,t){for(var n=t-1;n>=0;--n)e.nb>>>=1,1==(r>>>n&1)&&(e.Zb+=e.nb),4278190080&e.nb||(e.nb<<=8,Cr(e))}function Fr(e){return e.lb+e.Vb+4}function Lr(e){e.Vb=0,e.Zb=0,e.nb=-1,e.lb=1,e.gc=0}function Cr(e){var r,t=e.Zb/4294967296|0;if(0!=t||4278190080>e.Zb){e.Vb+=e.lb,r=e.gc;do _(e.fc,r+t),r=255;while(0!=--e.lb);e.gc=e.Zb>>>24}++e.lb,e.Zb=256*(16777215&e.Zb)}function Ar(e,r){return Gr[(2047&(e-r^-r))>>>2]}function zr(e){var r,t,n,s=[],o=0,i=e.length;if("object"==typeof e)return e;if("undefined"!=typeof TextEncoder)return(new TextEncoder).encode(e);if("undefined"!=typeof Buffer)return new Buffer(e);for(c(e,0,i,s,0),n=0;i>n;++n)r=s[n],r>=1&&127>=r?++o:o+=!r||r>=128&&2047>=r?2:3;for(t=[],o=0,n=0;i>n;++n)r=s[n],r>=1&&127>=r?t[o++]=r:!r||r>=128&&2047>=r?(t[o++]=192|r>>6&31,t[o++]=128|63&r):(t[o++]=224|r>>12&15,t[o++]=128|r>>6&63,t[o++]=128|63&r);return new Uint8Array(t)}function Ir(e,t,n,s){function o(){try{for(var e,r=(new Date).getTime();C(c.c.Rb);)if(_=c.c.Rb.Mb/c.c.hc,(new Date).getTime()-r>200)return s(_),xr(o,0),0;s(1),e=i(c.c.ac),xr(n.bind(null,e),0)}catch(t){n(null,t)}}var _,a,c={},f=void 0===n&&void 0===s;if("function"!=typeof n&&(a=n,n=s=0),s=s||function(e){return void 0!==a?r(e,a):void 0},n=n||function(e,r){return void 0!==a?postMessage({action:Dr,cbn:a,result:e,error:r}):void 0},f){for(c.c=m({},zr(e),Tr(t));C(c.c.Rb););return i(c.c.ac)}try{c.c=m({},zr(e),Tr(t)),s(0)}catch(u){return n(null,u)}xr(o,0)}var Dr=1,Or=3,xr="function"==typeof setImmediate?setImmediate:setTimeout,Hr=function(){var e,r,t,n=[];for(e=0;256>e;++e){for(t=e,r=0;8>r;++r)0!=(1&t)?t=t>>>1^-306674912:t>>>=1;n[e]=t}return n}(),Nr=function(){var e,r,t,n=2,s=new Uint8Array(2048);for(s[0]=0,s[1]=1,t=2;22>t;++t)for(r=1<<(t>>1)-1,e=0;r>e;++e,++n)s[n]=t;return s}(),Gr=function(){var e,r,t,n,s=[];for(r=8;r>=0;--r)for(n=1<<9-r-1,e=1<<9-r,t=n;e>t;++t)s[t]=(r<<6)+(e-t<<6>>>9-r-1);return s}(),Tr=function(){var e=[{s:16,f:64,m:0},{s:20,f:64,m:0},{s:19,f:64,m:1},{s:20,f:64,m:1},{s:21,f:128,m:1},{s:22,f:128,m:1},{s:23,f:128,m:1},{s:24,f:255,m:1},{s:25,f:255,m:1}];return function(r){return e[r-1]||e[6]}}();return"undefined"==typeof onmessage||"undefined"!=typeof window&&void 0!==window.document||!function(){onmessage=function(r){r&&r._b&&r._b.action==Dr&&e.compress(r._b._b,r._b.jc,r._b.cbn)}}(),{compress:Ir}}();this.LZMA=this.LZMA_WORKER=e;