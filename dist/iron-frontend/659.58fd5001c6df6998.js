"use strict";(self.webpackChunkiron_frontend=self.webpackChunkiron_frontend||[]).push([[659],{1659:(wt,b,i)=>{i.r(b),i.d(b,{LazyRoutingModule:()=>At});var g=i(1303),t=i(9212),l=i(5195);let E=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-index-component"]],decls:3,vars:0,consts:[[1,"example-card"],["mat-card-image","","src","https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/activities-fun/10-great-small-dog-breeds/maltese-portrait.jpg","alt","Photo"]],template:function(n,o){1&n&&(t.TgZ(0,"mat-card",0)(1,"mat-card-content"),t._UZ(2,"img",1),t.qZA()())},dependencies:[l.a8,l.dn,l.G2]})}return e})();var f=i(5861),s=i(6223),_=i(304),Z=i(6814),T=i(2296),x=i(2032),p=i(9157);function J(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Please enter a name greater than and equal to 4 characters "),t.qZA())}function S(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Name is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA()())}function Q(e,a){if(1&e&&(t.TgZ(0,"span")(1,"mat-error"),t._uU(2),t.qZA()()),2&e){const r=t.oxw();t.xp6(2),t.Oqu(r.registerForm.getError("name"))}}function M(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Please enter a valid email address "),t.qZA())}function N(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Email is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA()())}function P(e,a){if(1&e&&(t.TgZ(0,"span")(1,"mat-error"),t._uU(2),t.qZA()()),2&e){const r=t.oxw();t.xp6(2),t.Oqu(r.registerForm.getError("email"))}}function L(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Please enter a password greater than and equal to 8 characters "),t.qZA())}function k(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Password is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA()())}function O(e,a){if(1&e&&(t.TgZ(0,"span")(1,"mat-error"),t._uU(2),t.qZA()()),2&e){const r=t.oxw();t.xp6(2),t.Oqu(r.registerForm.getError("password"))}}function Y(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Please enter a password greater than and equal to 8 characters "),t.qZA())}function j(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Password is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA()())}function D(e,a){if(1&e&&(t.TgZ(0,"span")(1,"mat-error"),t._uU(2),t.qZA()()),2&e){const r=t.oxw();t.xp6(2),t.Oqu(r.registerForm.getError("password_confirmation"))}}function R(e,a){if(1&e&&(t.TgZ(0,"div")(1,"mat-error"),t._uU(2),t.qZA()()),2&e){const r=t.oxw();t.xp6(2),t.Oqu(r.registerForm.getError("backend"))}}class G{isErrorState(a,r){return!!(a&&a.invalid&&(a.dirty||a.touched||r&&r.submitted))}}let $=(()=>{class e{constructor(r,n){this.fb=r,this.authService=n,this.matcher=new G,this.error=null,this.submitEM=new t.vpe,this.registerForm=this.fb.group({name:this.fb.control("",s.kI.compose([s.kI.required,s.kI.minLength(3)])),email:this.fb.control("",s.kI.compose([s.kI.required,s.kI.email])),password:this.fb.control("",s.kI.compose([s.kI.required,s.kI.minLength(8),s.kI.pattern("^(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]+$")])),password_confirmation:this.fb.control("",s.kI.compose([s.kI.required,s.kI.minLength(8),s.kI.pattern("^(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]+$")]))})}onSubmit(){var r=this;return(0,f.Z)(function*(){try{r.success=yield r.authService.register(r.registerForm)}catch(n){console.log(n)}})()}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(s.qu),t.Y36(_.e))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-register-component"]],inputs:{error:"error"},outputs:{submitEM:"submitEM"},decls:44,vars:20,consts:[[1,"example-form",3,"formGroup","ngSubmit"],[1,"block"],["type","text","matInput","","formControlName","name","placeholder","your name",3,"errorStateMatcher"],[4,"ngIf"],["type","email","matInput","","formControlName","email","placeholder","Ex. pat@example.com",3,"errorStateMatcher"],["type","password","matInput","","formControlName","password","placeholder","your password",3,"errorStateMatcher"],["type","password","matInput","","formControlName","password_confirmation","placeholder","password confirm",3,"errorStateMatcher"],[1,"button"],["type","submit","mat-button","",3,"disabled"],[2,"margin","20px 0px"],[1,"example-accordion-item-body",2,"color","green"]],template:function(n,o){if(1&n&&(t.TgZ(0,"mat-card")(1,"mat-card-title"),t._uU(2,"Register"),t.qZA(),t.TgZ(3,"mat-card-content")(4,"form",0),t.NdJ("ngSubmit",function(){return o.onSubmit()}),t.TgZ(5,"div",1)(6,"mat-form-field")(7,"mat-label"),t._uU(8,"Name"),t.qZA(),t._UZ(9,"input",2),t.qZA(),t.YNc(10,J,2,0,"mat-error",3)(11,S,4,0,"mat-error",3)(12,Q,3,1,"span",3),t.qZA(),t.TgZ(13,"div",1)(14,"mat-form-field")(15,"mat-label"),t._uU(16,"Email"),t.qZA(),t._UZ(17,"input",4),t.qZA(),t.YNc(18,M,2,0,"mat-error",3)(19,N,4,0,"mat-error",3)(20,P,3,1,"span",3),t.qZA(),t.TgZ(21,"div",1)(22,"mat-form-field")(23,"mat-label"),t._uU(24,"Password"),t.qZA(),t._UZ(25,"input",5),t.qZA(),t.YNc(26,L,2,0,"mat-error",3)(27,k,4,0,"mat-error",3)(28,O,3,1,"span",3),t.qZA(),t.TgZ(29,"div",1)(30,"mat-form-field")(31,"mat-label"),t._uU(32,"Password Confirmation"),t.qZA(),t._UZ(33,"input",6),t.qZA(),t.YNc(34,Y,2,0,"mat-error",3)(35,j,4,0,"mat-error",3)(36,D,3,1,"span",3),t.qZA(),t.YNc(37,R,3,1,"div",3),t.TgZ(38,"div",7)(39,"button",8),t._uU(40,"Register"),t.qZA()()(),t.TgZ(41,"div",9)(42,"span",10),t._uU(43),t.qZA()()()()),2&n){let m,d,c,h,A,w,F,I;t.xp6(4),t.Q6J("formGroup",o.registerForm),t.xp6(5),t.Q6J("errorStateMatcher",o.matcher),t.xp6(1),t.Q6J("ngIf",null==(m=o.registerForm.get("name"))?null:m.hasError("minlength")),t.xp6(1),t.Q6J("ngIf",(null==(d=o.registerForm.get("name"))?null:d.hasError("required"))&&o.registerForm.controls.name.touched),t.xp6(1),t.Q6J("ngIf",o.registerForm.errors&&o.registerForm.getError("name")),t.xp6(5),t.Q6J("errorStateMatcher",o.matcher),t.xp6(1),t.Q6J("ngIf",(null==(c=o.registerForm.get("email"))?null:c.hasError("email"))&&!(null!=(c=o.registerForm.get("email"))&&c.hasError("required"))),t.xp6(1),t.Q6J("ngIf",(null==(h=o.registerForm.get("email"))?null:h.hasError("required"))&&o.registerForm.controls.email.touched),t.xp6(1),t.Q6J("ngIf",o.registerForm.errors&&o.registerForm.getError("email")),t.xp6(5),t.Q6J("errorStateMatcher",o.matcher),t.xp6(1),t.Q6J("ngIf",null==(A=o.registerForm.get("password"))?null:A.hasError("minlength")),t.xp6(1),t.Q6J("ngIf",(null==(w=o.registerForm.get("password"))?null:w.hasError("required"))&&o.registerForm.controls.password.touched),t.xp6(1),t.Q6J("ngIf",o.registerForm.errors&&o.registerForm.getError("password")),t.xp6(5),t.Q6J("errorStateMatcher",o.matcher),t.xp6(1),t.Q6J("ngIf",null==(F=o.registerForm.get("password_confirmation"))?null:F.hasError("minlength")),t.xp6(1),t.Q6J("ngIf",(null==(I=o.registerForm.get("password_confirmation"))?null:I.hasError("required"))&&o.registerForm.controls.password_confirmation.touched),t.xp6(1),t.Q6J("ngIf",o.registerForm.errors&&o.registerForm.getError("password_confirmation")),t.xp6(1),t.Q6J("ngIf",o.registerForm.errors&&o.registerForm.getError("backend")),t.xp6(2),t.Q6J("disabled",o.registerForm.invalid),t.xp6(4),t.hij(" ",null==o.success?null:o.success.success," ")}},dependencies:[Z.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,T.lW,l.a8,l.dn,l.n5,x.Nt,p.KE,p.hX,p.TO],styles:[".mat-form-field[_ngcontent-%COMP%], for[_ngcontent-%COMP%]{width:1000px}mat-card-title[_ngcontent-%COMP%], mat-card-content[_ngcontent-%COMP%]{display:block;text-align:center}.button[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.block[_ngcontent-%COMP%]{padding-bottom:4px}"]})}return e})();const C=(e,a)=>!(0,t.f3M)(_.e).checkAuthToken;function X(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Please enter a valid email address "),t.qZA())}function z(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Email is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA()())}function B(e,a){if(1&e&&(t.TgZ(0,"span")(1,"mat-error"),t._uU(2),t.qZA()()),2&e){const r=t.oxw();t.xp6(2),t.Oqu(r.loginForm.getError("email"))}}function V(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Please enter a password greater than and equal to 8 characters "),t.qZA())}function K(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Password is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA()())}function H(e,a){if(1&e&&(t.TgZ(0,"span")(1,"mat-error"),t._uU(2),t.qZA()()),2&e){const r=t.oxw();t.xp6(2),t.Oqu(r.loginForm.getError("email"))}}function W(e,a){if(1&e&&(t.TgZ(0,"div")(1,"mat-error"),t._uU(2),t.qZA()()),2&e){const r=t.oxw();t.xp6(2),t.Oqu(r.loginForm.getError("backend").message)}}class tt{isErrorState(a,r){return!!(a&&a.invalid&&(a.dirty||a.touched||r&&r.submitted))}}let et=(()=>{class e{constructor(r){this.authService=r,this.loginForm=new s.cw({email:new s.NI("",s.kI.compose([s.kI.required,s.kI.email])),password:new s.NI("",s.kI.compose([s.kI.required,s.kI.minLength(8)]))}),this.matcher=new tt,this.error=null,this.submitEM=new t.vpe}onSubmit(){var r=this;return(0,f.Z)(function*(){try{const n=yield r.authService.login(r.loginForm);console.log(n)}catch(n){console.log(n)}})()}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(_.e))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-login-component"]],inputs:{error:"error"},outputs:{submitEM:"submitEM"},decls:25,vars:11,consts:[[1,"example-form",3,"formGroup","ngSubmit"],["type","email","matInput","","formControlName","email","placeholder","Ex. pat@example.com",3,"errorStateMatcher"],[4,"ngIf"],["type","password","matInput","","formControlName","password","placeholder","your password",3,"errorStateMatcher"],[1,"button"],["type","submit","mat-button","",3,"disabled"]],template:function(n,o){if(1&n&&(t.TgZ(0,"mat-card")(1,"mat-card-title"),t._uU(2,"Login"),t.qZA(),t.TgZ(3,"mat-card-content")(4,"form",0),t.NdJ("ngSubmit",function(){return o.onSubmit()}),t.TgZ(5,"div")(6,"mat-form-field")(7,"mat-label"),t._uU(8,"Email"),t.qZA(),t._UZ(9,"input",1),t.YNc(10,X,2,0,"mat-error",2)(11,z,4,0,"mat-error",2),t.qZA(),t.YNc(12,B,3,1,"span",2),t.qZA(),t.TgZ(13,"div")(14,"mat-form-field")(15,"mat-label"),t._uU(16,"Password"),t.qZA(),t._UZ(17,"input",3),t.YNc(18,V,2,0,"mat-error",2)(19,K,4,0,"mat-error",2),t.qZA(),t.YNc(20,H,3,1,"span",2),t.qZA(),t.YNc(21,W,3,1,"div",2),t.TgZ(22,"div",4)(23,"button",5),t._uU(24,"Login"),t.qZA()()()()()),2&n){let m,d,c,h;t.xp6(4),t.Q6J("formGroup",o.loginForm),t.xp6(5),t.Q6J("errorStateMatcher",o.matcher),t.xp6(1),t.Q6J("ngIf",(null==(m=o.loginForm.get("email"))?null:m.hasError("email"))&&!(null!=(m=o.loginForm.get("email"))&&m.hasError("required"))),t.xp6(1),t.Q6J("ngIf",null==(d=o.loginForm.get("email"))?null:d.hasError("required")),t.xp6(1),t.Q6J("ngIf",o.loginForm.errors&&o.loginForm.getError("email")),t.xp6(5),t.Q6J("errorStateMatcher",o.matcher),t.xp6(1),t.Q6J("ngIf",null==(c=o.loginForm.get("password"))?null:c.hasError("minlength")),t.xp6(1),t.Q6J("ngIf",null==(h=o.loginForm.get("password"))?null:h.hasError("required")),t.xp6(1),t.Q6J("ngIf",o.loginForm.errors&&o.loginForm.getError("email")),t.xp6(1),t.Q6J("ngIf",o.loginForm.errors&&o.loginForm.getError("backend")),t.xp6(2),t.Q6J("disabled",o.loginForm.invalid)}},dependencies:[Z.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,T.lW,l.a8,l.dn,l.n5,x.Nt,p.KE,p.hX,p.TO],styles:["mat-card-title[_ngcontent-%COMP%], mat-card-content[_ngcontent-%COMP%]{display:block;text-align:center}.error[_ngcontent-%COMP%]{padding:16px;width:300px;color:#fff;background-color:red}.button[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}"]})}return e})();var rt=i(9476),U=i(5592),q=i(8189),ot=i(676),u=i(9538),nt=i(6283);function at(e,a){1&e&&(t.TgZ(0,"th",11),t._uU(1," No. "),t.qZA())}function st(e,a){if(1&e&&(t.TgZ(0,"td",12),t._uU(1),t.qZA()),2&e){const r=a.index;t.xp6(1),t.hij(" ",r+1," ")}}function it(e,a){1&e&&(t.TgZ(0,"th",11),t._uU(1," Name "),t.qZA())}function mt(e,a){if(1&e&&(t.TgZ(0,"td",12),t._uU(1),t.qZA()),2&e){const r=a.$implicit;t.xp6(1),t.hij(" ",r.name," ")}}function lt(e,a){1&e&&(t.TgZ(0,"th",11),t._uU(1," Email "),t.qZA())}function ct(e,a){if(1&e&&(t.TgZ(0,"td",12),t._uU(1),t.qZA()),2&e){const r=a.$implicit;t.xp6(1),t.hij(" ",r.email," ")}}function ut(e,a){1&e&&(t.TgZ(0,"th",11),t._uU(1," Verified "),t.qZA())}function pt(e,a){if(1&e&&(t.TgZ(0,"td",12),t._uU(1),t.qZA()),2&e){const r=a.$implicit;t.xp6(1),t.hij(" ",r.verified?"Yes":"No"," ")}}function dt(e,a){1&e&&(t.TgZ(0,"th",11),t._uU(1," Created "),t.qZA())}function gt(e,a){if(1&e&&(t.TgZ(0,"td",12),t._uU(1),t.qZA()),2&e){const r=a.$implicit;t.xp6(1),t.hij(" ",r.created," ")}}function ft(e,a){1&e&&t._UZ(0,"tr",13)}function _t(e,a){1&e&&t._UZ(0,"tr",14)}function ht(e,a){1&e&&t._uU(0," Loading users...\n")}const v=()=>["position","name","email","verified","created"];let Zt=(()=>{class e{constructor(r){this.store=r,this.user$=new U.y,this.pagination$=new U.y,this.currentPage=0,this.lastPage=0}ngOnInit(){this.loadUsers(this.currentPage),this.user$=this.store.select(q.YN),this.pagination$=this.store.select(q.aT),this.loadUsersSuccessSubscription()}loadUsers(r){this.store.dispatch((0,rt.p_)({page:r}))}onScroll(){this.currentPage++,this.currentPage<=this.lastPage&&this.loadUsers(this.currentPage)}loadUsersSuccessSubscription(){this.user$.subscribe(r=>{console.log(r)}),this.pagination$.subscribe(r=>{this.currentPage=r.current_page,this.lastPage=r.last_page})}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(ot.yh))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-users-list"]],decls:20,vars:7,consts:[["mat-table","","infiniteScroll","",1,"mat-elevation-z8",3,"dataSource","infiniteScrollDistance","infiniteScrollThrottle","scrolled"],["matColumnDef","position"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","email"],["matColumnDef","verified"],["matColumnDef","created"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["loading",""],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(n,o){1&n&&(t.TgZ(0,"table",0),t.NdJ("scrolled",function(){return o.onScroll()}),t.ynx(1,1),t.YNc(2,at,2,0,"th",2)(3,st,2,1,"td",3),t.BQk(),t.ynx(4,4),t.YNc(5,it,2,0,"th",2)(6,mt,2,1,"td",3),t.BQk(),t.ynx(7,5),t.YNc(8,lt,2,0,"th",2)(9,ct,2,1,"td",3),t.BQk(),t.ynx(10,6),t.YNc(11,ut,2,0,"th",2)(12,pt,2,1,"td",3),t.BQk(),t.ynx(13,7),t.YNc(14,dt,2,0,"th",2)(15,gt,2,1,"td",3),t.BQk(),t.YNc(16,ft,1,0,"tr",8)(17,_t,1,0,"tr",9),t.qZA(),t.YNc(18,ht,1,0,"ng-template",null,10,t.W1O)),2&n&&(t.Q6J("dataSource",o.user$)("infiniteScrollDistance",1)("infiniteScrollThrottle",50),t.xp6(16),t.Q6J("matHeaderRowDef",t.DdM(5,v)),t.xp6(1),t.Q6J("matRowDefColumns",t.DdM(6,v)))},dependencies:[u.BZ,u.fO,u.as,u.w1,u.Dz,u.nj,u.ge,u.ev,u.XQ,u.Gk,nt.Ry]})}return e})();const y=(e,a)=>{const r=(0,t.f3M)(_.e),n=(0,t.f3M)(g.F0);return!!r.checkAuthToken||(n.navigate(["/login"]),!1)};var Tt=i(3934);function xt(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Count is "),t.TgZ(2,"strong"),t._uU(3,"required"),t.qZA()())}function bt(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," The count field must be at least "),t.TgZ(2,"strong"),t._uU(3,"10"),t.qZA()())}function Ct(e,a){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," The count field must not be greater than "),t.TgZ(2,"strong"),t._uU(3,"500"),t.qZA()())}function Ut(e,a){if(1&e&&(t.TgZ(0,"div")(1,"mat-error"),t._uU(2),t.qZA()()),2&e){const r=t.oxw(2);t.xp6(2),t.hij(" ",r.dashboardForm.getError("count")," ")}}function qt(e,a){if(1&e&&(t.TgZ(0,"div")(1,"mat-error"),t._uU(2),t.qZA()()),2&e){const r=t.oxw(2);t.xp6(2),t.hij(" ",r.dashboardForm.getError("backend").error," ")}}function vt(e,a){if(1&e){const r=t.EpF();t.TgZ(0,"mat-card")(1,"form",3),t.NdJ("ngSubmit",function(){t.CHM(r);const o=t.oxw();return t.KtG(o.onSubmit())}),t.TgZ(2,"mat-card-content")(3,"mat-form-field")(4,"mat-label"),t._uU(5,"Count"),t.qZA(),t._UZ(6,"input",4),t.YNc(7,xt,4,0,"mat-error",2)(8,bt,4,0,"mat-error",2)(9,Ct,4,0,"mat-error",2),t.qZA(),t.YNc(10,Ut,3,1,"div",2)(11,qt,3,1,"div",2),t.TgZ(12,"div",5)(13,"span",6),t._uU(14),t.qZA()(),t.TgZ(15,"div",7)(16,"button",8),t._uU(17,"Create"),t.qZA()()()()()}if(2&e){const r=t.oxw();let n,o,m;t.xp6(1),t.Q6J("formGroup",r.dashboardForm),t.xp6(6),t.Q6J("ngIf",null==(n=r.dashboardForm.get("count"))?null:n.hasError("required")),t.xp6(1),t.Q6J("ngIf",null==(o=r.dashboardForm.get("count"))?null:o.hasError("min")),t.xp6(1),t.Q6J("ngIf",null==(m=r.dashboardForm.get("count"))?null:m.hasError("max")),t.xp6(1),t.Q6J("ngIf",r.dashboardForm.errors&&r.dashboardForm.getError("count")),t.xp6(1),t.Q6J("ngIf",r.dashboardForm.errors&&r.dashboardForm.getError("backend")),t.xp6(3),t.hij(" ",null==r.success?null:r.success.success," "),t.xp6(2),t.Q6J("disabled",r.dashboardForm.invalid)}}const yt=[{path:"",component:E},{path:"register",component:$,canActivate:[C]},{path:"login",component:et,canActivate:[C]},{path:"list-users",component:Zt,canActivate:[y]},{path:"dashboard",component:(()=>{class e{constructor(r){this.userService=r,this.showInputNum=!1,this.dashboardForm=new s.cw({count:new s.NI("",s.kI.compose([s.kI.required,s.kI.max(500),s.kI.min(10)]))})}onSubmit(){var r=this;return(0,f.Z)(function*(){try{r.success=yield r.userService.seedUsers(r.dashboardForm)}catch(n){console.log(n)}})()}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(Tt.K))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-dashboard"]],decls:6,vars:1,consts:[[1,"section"],["mat-raised-button","","color","primary",3,"click"],[4,"ngIf"],[1,"example-form",3,"formGroup","ngSubmit"],["matInput","","type","number","formControlName","count","placeholder","Enter count of users"],[2,"margin","20px 0px"],[1,"example-accordion-item-body",2,"color","green"],[1,"button"],["type","submit","mat-button","",3,"disabled"]],template:function(n,o){1&n&&(t.TgZ(0,"section",0)(1,"mat-card")(2,"button",1),t.NdJ("click",function(){return o.showInputNum=!o.showInputNum}),t._uU(3,"Generate Sample Users"),t.qZA()(),t._UZ(4,"br"),t.YNc(5,vt,18,8,"mat-card",2),t.qZA()),2&n&&(t.xp6(5),t.Q6J("ngIf",o.showInputNum))},dependencies:[Z.O5,s._Y,s.Fj,s.wV,s.JJ,s.JL,s.sg,s.u,T.lW,l.a8,l.dn,x.Nt,p.KE,p.hX,p.TO],styles:[".question[_ngcontent-%COMP%]{display:block;justify-content:center;text-align:center}[_nghost-%COMP%]{display:block;width:35vw;justify-content:center;justify-items:center}.error[_ngcontent-%COMP%]{padding:16px;width:300px;color:#fff;background-color:red}.button[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}"]})}return e})(),canActivate:[y]},{path:"verify-email/:id/:hash",component:(()=>{class e{constructor(r,n,o){this.route=r,this.authService=n,this.router=o,this.message={required:!1},this.showColor=!1}ngOnInit(){var r=this;return(0,f.Z)(function*(){r.route.queryParams.subscribe(function(){var n=(0,f.Z)(function*(o){const m=r.route.snapshot.paramMap.get("id")||"",d=r.route.snapshot.paramMap.get("hash")||"";try{const c=yield r.authService.emailVerification(m,d);r.message=c.success,r.showColor=!0}catch(c){r.message=c.error.error,r.showColor=!1}});return function(o){return n.apply(this,arguments)}}())})()}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(g.gz),t.Y36(_.e),t.Y36(g.F0))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-email-verification"]],decls:8,vars:5,consts:[[3,"hidden"],[2,"color","green","padding","8px 8px",3,"hidden"],[2,"color","red","padding","8px 8px",3,"hidden"]],template:function(n,o){1&n&&(t.TgZ(0,"mat-card")(1,"div",0)(2,"div",1)(3,"strong"),t._uU(4),t.qZA()(),t.TgZ(5,"div",2)(6,"strong"),t._uU(7),t.qZA()()()()),2&n&&(t.xp6(1),t.Q6J("hidden",o.message.required),t.xp6(1),t.Q6J("hidden",!o.showColor),t.xp6(2),t.hij(" ",o.message," "),t.xp6(1),t.Q6J("hidden",o.showColor),t.xp6(2),t.hij(" ",o.message," "))},dependencies:[l.a8],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;justify-items:center}"]})}return e})()},{path:"**",component:(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-error404"]],decls:4,vars:0,consts:[[2,"color","red"]],template:function(n,o){1&n&&(t.TgZ(0,"mat-card")(1,"span",0)(2,"strong"),t._uU(3," Page not found! "),t.qZA()()())},dependencies:[l.a8],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;justify-items:center;padding:12px}mat-card[_ngcontent-%COMP%]{padding:12px}"]})}return e})()}];let At=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.oAB({type:e});static#r=this.\u0275inj=t.cJS({imports:[g.Bz.forRoot(yt),g.Bz]})}return e})()}}]);