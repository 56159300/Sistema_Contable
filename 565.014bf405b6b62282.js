"use strict";(self.webpackChunkSistema_Contable=self.webpackChunkSistema_Contable||[]).push([[565],{6565:(T,l,n)=>{n.r(l),n.d(l,{AuthModule:()=>y});var s=n(6895),p=n(4185),u=n(9299),e=n(4006),t=n(4650),c=n(3372),f=n(4859),d=n(3546),m=n(9549),h=n(4144),v=n(5010),x=n(9429);function b(o,i){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"formErrorHandler"),t.qZA()),2&o){const r=t.oxw();t.xp6(1),t.hij(" ",t.lcZ(2,1,r.usernameField)," ")}}function F(o,i){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"formErrorHandler"),t.qZA()),2&o){const r=t.oxw();t.xp6(1),t.hij(" ",t.lcZ(2,1,r.passwordField)," ")}}function Z(o,i){1&o&&(t.TgZ(0,"button",15),t._uU(1," Login "),t.qZA())}const A=[{path:"login",component:(()=>{class o{constructor(r,a){this.formBuilder=r,this.utilsService=a,this.submitted=!1,this.error="",this.loading=!1,this.buildForm()}ngOnInit(){}buildForm(){this.loginForm=this.formBuilder.group({username:["",[e.kI.required]],password:["",[e.kI.required]]})}onSubmit(){this.submitted=!0,this.error="",!this.loginForm.invalid&&(this.loading=!0,this.utilsService.setLogin({usuarioID:1,nombre:"William",apellido:"Garcia",userName:this.usernameField.toString(),email:"wgarcia@umg.com"}),window.location.reload())}get usernameField(){return this.loginForm.get("username")}get passwordField(){return this.loginForm.get("password")}}return o.\u0275fac=function(r){return new(r||o)(t.Y36(e.QS),t.Y36(c.F))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-login"]],decls:23,vars:6,consts:[[1,"row","mx-0","justify-content-center","align-items-center","background-fullscreen"],[1,"col-md-8","col-lg-6","col-xl-5","mx-auto"],[1,"mx-auto"],[1,"text-center","my-4"],["src","assets/img/logo.svg","alt","logo","width","200","loading","lazy"],["name","loginForm","novalidate","",1,"needs-validation",3,"formGroup","ngSubmit"],[1,"form-group","mb-2"],["appearance","outline"],["appTrim","","matInput","","formControlName","username","required","","minlength","1","maxlength","30",3,"formControl"],[4,"ngIf"],["matInput","","formControlName","password","required","","minlength","8","maxlength","25",3,"type"],["matSuffix",""],["toggle",""],[1,"form-group","my-3","text-center"],["mat-raised-button","","type","submit","class","bg-blue3 txt-white squared-button w-auto",4,"ngIf"],["mat-raised-button","","type","submit",1,"bg-blue3","txt-white","squared-button","w-auto"]],template:function(r,a){if(1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"mat-card",2)(3,"mat-card-content")(4,"div",3),t._UZ(5,"img",4),t.qZA(),t.TgZ(6,"form",5),t.NdJ("ngSubmit",function(){return a.onSubmit()}),t.TgZ(7,"div",6)(8,"mat-form-field",7)(9,"mat-label"),t._uU(10,"Nombre usuario"),t.qZA(),t._UZ(11,"input",8),t.YNc(12,b,3,3,"mat-error",9),t.qZA()(),t.TgZ(13,"div",6)(14,"mat-form-field",7)(15,"mat-label"),t._uU(16,"Contrase\xf1a"),t.qZA(),t._UZ(17,"input",10)(18,"mat-pass-toggle-visibility",11,12),t.YNc(20,F,3,3,"mat-error",9),t.qZA()(),t.TgZ(21,"div",13),t.YNc(22,Z,2,0,"button",14),t.qZA()()()()()()),2&r){const g=t.MAs(19);t.xp6(6),t.Q6J("formGroup",a.loginForm),t.xp6(5),t.Q6J("formControl",a.usernameField),t.xp6(1),t.Q6J("ngIf",a.usernameField.errors),t.xp6(5),t.Q6J("type",g.type),t.xp6(3),t.Q6J("ngIf",a.passwordField.errors),t.xp6(2),t.Q6J("ngIf",!a.loading)}},dependencies:[s.O5,e._Y,e.Fj,e.JJ,e.JL,e.Q7,e.wO,e.nD,e.oH,e.sg,e.u,f.lW,d.a8,d.dn,m.TO,m.KE,m.hX,m.R9,h.Nt,v.rU,x.P],styles:["mat-card[_ngcontent-%COMP%]{max-width:450px;padding-left:40px!important;padding-right:40px!important;margin-bottom:0}"]}),o})()},{path:"",redirectTo:"/auth/login",pathMatch:"full"}];let C=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.Bz.forChild(A),u.Bz]}),o})(),y=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.ez,C,p.m]}),o})()}}]);