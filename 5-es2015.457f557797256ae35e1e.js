(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{CKRj:function(t,e,n){"use strict";n.r(e),n.d(e,"TrainingModule",(function(){return B}));var a=n("I/3d"),i=n("PCNd"),r=n("tyNb"),c=n("fXoL"),o=n("vEl1"),s=n("ofXK"),b=n("wZkO"),l=n("XiUz"),u=n("3Pt+"),m=n("Wp6s"),p=n("kmnG"),d=n("d3UM"),g=n("bTqV"),f=n("FKr1");function h(t,e){if(1&t&&(c.Vb(0,"mat-option",8),c.Ac(1),c.Ub()),2&t){const t=e.$implicit;c.mc("value",t.id),c.Db(1),c.Cc(" ",t.name," ")}}let v=(()=>{class t{constructor(t){this.trainingService=t}ngOnInit(){this.exSub=this.trainingService.fetchAvailableExercises().subscribe(t=>{this.exercises=t})}ngOnDestroy(){this.exSub&&this.exSub.unsubscribe()}onStartTraining(t){this.trainingService.startEx(t.value.exercise)}}return t.\u0275fac=function(e){return new(e||t)(c.Pb(o.a))},t.\u0275cmp=c.Jb({type:t,selectors:[["app-new-training"]],decls:15,vars:2,consts:[["fxLayout","","fxLayoutAlign","center",1,"new-training"],[3,"ngSubmit"],["f","ngForm"],["fxFlex.xs","100%","fxFlex","400px"],["fxLayoutAlign","center"],["ngModel","","name","exercise","required",""],[3,"value",4,"ngFor","ngForOf"],["type","submit","mat-button","",3,"disabled"],[3,"value"]],template:function(t,e){if(1&t){const t=c.Wb();c.Vb(0,"section",0),c.Vb(1,"form",1,2),c.dc("ngSubmit",(function(){c.tc(t);const n=c.rc(2);return e.onStartTraining(n)})),c.Vb(3,"mat-card",3),c.Vb(4,"mat-card-title",4),c.Ac(5," Time to start a workout! "),c.Ub(),c.Vb(6,"mat-card-content",4),c.Vb(7,"mat-form-field"),c.Vb(8,"mat-label"),c.Ac(9,"Workout"),c.Ub(),c.Vb(10,"mat-select",5),c.zc(11,h,2,2,"mat-option",6),c.Ub(),c.Ub(),c.Ub(),c.Vb(12,"mat-card-actions",4),c.Vb(13,"button",7),c.Ac(14," Start "),c.Ub(),c.Ub(),c.Ub(),c.Ub(),c.Ub()}if(2&t){const t=c.rc(2);c.Db(11),c.mc("ngForOf",e.exercises),c.Db(2),c.mc("disabled",t.invalid)}},directives:[l.c,l.b,u.p,u.k,u.l,m.a,l.a,m.e,m.c,p.c,p.g,d.a,u.j,u.m,u.n,s.l,m.b,g.a,f.n],styles:[".new-training[_ngcontent-%COMP%]{padding:30px 0}"]}),t})();var S=n("+0xr"),U=n("Dh3D"),V=n("M9IT"),D=n("qFsG");function x(t,e){1&t&&(c.Vb(0,"mat-header-cell",14),c.Ac(1,"Date"),c.Ub())}function y(t,e){if(1&t&&(c.Vb(0,"mat-cell"),c.Ac(1),c.ic(2,"date"),c.Ub()),2&t){const t=e.$implicit;c.Db(1),c.Bc(c.jc(2,1,t.date))}}function w(t,e){1&t&&(c.Vb(0,"mat-header-cell",14),c.Ac(1,"Name"),c.Ub())}function A(t,e){if(1&t&&(c.Vb(0,"mat-cell"),c.Ac(1),c.Ub()),2&t){const t=e.$implicit;c.Db(1),c.Bc(t.name)}}function C(t,e){1&t&&(c.Vb(0,"mat-header-cell",14),c.Ac(1,"Calories"),c.Ub())}function z(t,e){if(1&t&&(c.Vb(0,"mat-cell"),c.Ac(1),c.ic(2,"number"),c.Ub()),2&t){const t=e.$implicit;c.Db(1),c.Bc(c.jc(2,1,t.calories))}}function T(t,e){1&t&&(c.Vb(0,"mat-header-cell",14),c.Ac(1,"Duration"),c.Ub())}function O(t,e){if(1&t&&(c.Vb(0,"mat-cell"),c.Ac(1),c.ic(2,"number"),c.Ub()),2&t){const t=e.$implicit;c.Db(1),c.Bc(c.jc(2,1,t.duration))}}function I(t,e){1&t&&(c.Vb(0,"mat-header-cell",14),c.Ac(1,"State"),c.Ub())}function k(t,e){if(1&t&&(c.Vb(0,"mat-cell"),c.Ac(1),c.Ub()),2&t){const t=e.$implicit;c.Db(1),c.Bc(t.state)}}function F(t,e){1&t&&c.Qb(0,"mat-header-row")}function E(t,e){1&t&&c.Qb(0,"mat-row")}const P=function(){return[1,5,10,20]};let R=(()=>{class t{constructor(t){this.trainingService=t,this.displayedColumns=["date","name","duration","calories","state"],this.dataSource=new S.k}ngOnInit(){this.trainingService.fetchCompletedOrCancelledExercises().subscribe(t=>{t&&(this.dataSource.data=t,this.dataSource.sort=this.sort,this.dataSource.paginator=this.paginator)})}doFilter(t){this.dataSource.filter=t.trim().toLowerCase()}}return t.\u0275fac=function(e){return new(e||t)(c.Pb(o.a))},t.\u0275cmp=c.Jb({type:t,selectors:[["app-past-training"]],viewQuery:function(t,e){var n;1&t&&(c.Ec(U.a,!0),c.Ec(V.a,!0)),2&t&&(c.qc(n=c.ec())&&(e.sort=n.first),c.qc(n=c.ec())&&(e.paginator=n.first))},decls:22,vars:6,consts:[["fxLayoutAlign","center center"],["fxFlex","40%"],["matInput","","type","text","placeholder","Filter...",3,"keyup"],["matSort","",3,"dataSource"],["matColumnDef","date"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","name"],["matColumnDef","calories"],["matColumnDef","duration"],["matColumnDef","state"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],[3,"pageSize","pageSizeOptions"],["mat-sort-header",""]],template:function(t,e){1&t&&(c.Vb(0,"div",0),c.Vb(1,"mat-form-field",1),c.Vb(2,"input",2),c.dc("keyup",(function(t){return e.doFilter(t.target.value)})),c.Ub(),c.Ub(),c.Ub(),c.Vb(3,"mat-table",3),c.Tb(4,4),c.zc(5,x,2,0,"mat-header-cell",5),c.zc(6,y,3,3,"mat-cell",6),c.Sb(),c.Tb(7,7),c.zc(8,w,2,0,"mat-header-cell",5),c.zc(9,A,2,1,"mat-cell",6),c.Sb(),c.Tb(10,8),c.zc(11,C,2,0,"mat-header-cell",5),c.zc(12,z,3,3,"mat-cell",6),c.Sb(),c.Tb(13,9),c.zc(14,T,2,0,"mat-header-cell",5),c.zc(15,O,3,3,"mat-cell",6),c.Sb(),c.Tb(16,10),c.zc(17,I,2,0,"mat-header-cell",5),c.zc(18,k,2,1,"mat-cell",6),c.Sb(),c.zc(19,F,1,0,"mat-header-row",11),c.zc(20,E,1,0,"mat-row",12),c.Ub(),c.Qb(21,"mat-paginator",13)),2&t&&(c.Db(3),c.mc("dataSource",e.dataSource),c.Db(16),c.mc("matHeaderRowDef",e.displayedColumns),c.Db(1),c.mc("matRowDefColumns",e.displayedColumns),c.Db(1),c.mc("pageSize",10)("pageSizeOptions",c.nc(5,P)))},directives:[l.b,p.c,l.a,D.b,S.j,U.a,S.c,S.e,S.b,S.g,S.i,V.a,S.d,U.b,S.a,S.f,S.h],pipes:[s.e,s.f],styles:[""]}),t})();var L=n("0IaG");let j=(()=>{class t{constructor(t){this.inputData=t}}return t.\u0275fac=function(e){return new(e||t)(c.Pb(L.a))},t.\u0275cmp=c.Jb({type:t,selectors:[["app-stop-training"]],decls:10,vars:1,consts:[["mat-dialog-title",""],["mat-raised-button","","mat-dialog-close","true","color","primary"],["mat-raised-button","","mat-dialog-close","false","color","warn"]],template:function(t,e){1&t&&(c.Vb(0,"h1",0),c.Ac(1,"Are you sure?"),c.Ub(),c.Vb(2,"mat-dialog-content"),c.Vb(3,"p"),c.Ac(4),c.Ub(),c.Ub(),c.Vb(5,"mat-dialog-actions"),c.Vb(6,"button",1),c.Ac(7," Yes "),c.Ub(),c.Vb(8,"button",2),c.Ac(9," No "),c.Ub(),c.Ub()),2&t&&(c.Db(4),c.Cc("You've already completed ",e.inputData.progress,"%"))},directives:[L.g,L.e,L.c,g.a,L.d],encapsulation:2}),t})();var M=n("Xa2L");let Q=(()=>{class t{constructor(t,e){this.dialog=t,this.trainingService=e,this.progress=0}ngOnInit(){this.startOrResumeTimer()}startOrResumeTimer(){const t=this.trainingService.getRunningEx().duration/100*1e3;this.timer=setInterval(()=>{this.progress=this.progress+1,this.progress>=100&&(this.trainingService.completeEx(),clearInterval(this.timer))},t)}onStop(){clearInterval(this.timer),this.dialog.open(j,{data:{progress:this.progress}}).afterClosed().subscribe(t=>{"true"===t?this.trainingService.cancelEx(this.progress):this.startOrResumeTimer()})}}return t.\u0275fac=function(e){return new(e||t)(c.Pb(L.b),c.Pb(o.a))},t.\u0275cmp=c.Jb({type:t,selectors:[["app-current-training"]],decls:8,vars:2,consts:[["fxLayout","column","fxLayoutAlign","center center",1,"current-training"],["mode","determinate",3,"value"],["mat-raised-button","","color","accent",3,"click"]],template:function(t,e){1&t&&(c.Vb(0,"section",0),c.Qb(1,"mat-progress-spinner",1),c.Vb(2,"h1"),c.Ac(3),c.Ub(),c.Vb(4,"p"),c.Ac(5,"Keep on going, you can do it!"),c.Ub(),c.Vb(6,"button",2),c.dc("click",(function(){return e.onStop()})),c.Ac(7,"Stop"),c.Ub(),c.Ub()),2&t&&(c.Db(1),c.mc("value",e.progress),c.Db(2),c.Cc("",e.progress,"%"))},directives:[l.c,l.b,M.a,g.a],styles:[".current-training[_ngcontent-%COMP%]{padding:30px 0}"]}),t})();function J(t,e){1&t&&(c.Vb(0,"mat-tab-group"),c.Vb(1,"mat-tab",1),c.Qb(2,"app-new-training"),c.Ub(),c.Vb(3,"mat-tab",2),c.Qb(4,"app-past-training"),c.Ub(),c.Ub())}function N(t,e){1&t&&c.Qb(0,"app-current-training")}const $=[{path:"",component:(()=>{class t{constructor(t){this.trainingService=t,this.ongoingTraining=!1}ngOnInit(){this.exSub=this.trainingService.exChanged.subscribe(t=>{this.ongoingTraining=!!t})}ngOnDestroy(){}}return t.\u0275fac=function(e){return new(e||t)(c.Pb(o.a))},t.\u0275cmp=c.Jb({type:t,selectors:[["app-training"]],decls:2,vars:2,consts:[[4,"ngIf"],["label","New Exercise"],["label","Past Exercise"]],template:function(t,e){1&t&&(c.zc(0,J,5,0,"mat-tab-group",0),c.zc(1,N,1,0,"app-current-training",0)),2&t&&(c.mc("ngIf",!e.ongoingTraining),c.Db(1),c.mc("ngIf",e.ongoingTraining))},directives:[s.m,b.b,b.a,v,R,Q],styles:[""]}),t})()}];let q=(()=>{class t{}return t.\u0275mod=c.Nb({type:t}),t.\u0275inj=c.Mb({factory:function(e){return new(e||t)},providers:[],imports:[[r.c.forChild($)],r.c]}),t})(),B=(()=>{class t{}return t.\u0275mod=c.Nb({type:t}),t.\u0275inj=c.Mb({factory:function(e){return new(e||t)},imports:[[q,i.a,a.b]]}),t})()}}]);