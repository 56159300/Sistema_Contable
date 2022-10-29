"use strict";(self.webpackChunkSistema_Contable=self.webpackChunkSistema_Contable||[]).push([[694],{6694:(at,b,a)=>{a.r(b),a.d(b,{CentroCostoModule:()=>rt});var u=a(9299),p=a(5861),x=a(8739),h=a(6308),l=a(7155),A=a(7120),t=a(4650),I=a(5938),T=a(2628),D=a(2391),g=a(4859),S=a(7392),U=a(4850),d=a(3546),v=a(8255),F=a(7506),_=a(6706);function N(o,r){1&o&&(t.TgZ(0,"th",27),t._uU(1,"ID"),t.qZA())}function Q(o,r){if(1&o&&(t.TgZ(0,"td",28),t._uU(1),t.qZA()),2&o){const e=r.$implicit;t.xp6(1),t.hij(" ",e.centroCostoID," ")}}function J(o,r){1&o&&(t.TgZ(0,"th",27),t._uU(1,"Nombre"),t.qZA())}function Y(o,r){if(1&o&&(t.TgZ(0,"td",28),t._uU(1),t.qZA()),2&o){const e=r.$implicit;t.xp6(1),t.hij(" ",e.nombre," ")}}function L(o,r){1&o&&(t.TgZ(0,"th",27),t._uU(1,"Responsable"),t.qZA())}function w(o,r){if(1&o&&(t.TgZ(0,"td",28),t._uU(1),t.qZA()),2&o){const e=r.$implicit;t.xp6(1),t.hij(" ",e.responsable," ")}}function j(o,r){1&o&&(t.TgZ(0,"th",27),t._uU(1,"Empresa"),t.qZA())}function M(o,r){if(1&o&&(t.TgZ(0,"td",28),t._uU(1),t.qZA()),2&o){const e=r.$implicit;t.xp6(1),t.hij(" ",e.empresa.nombre," ")}}function q(o,r){1&o&&(t.TgZ(0,"th",29),t._uU(1,"Acciones"),t.qZA())}function O(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"td",30)(1,"div",31)(2,"button",32)(3,"mat-icon"),t._uU(4,"more_vert"),t.qZA()(),t.TgZ(5,"mat-menu",null,33)(7,"button",34),t.NdJ("click",function(){const m=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.edit(m))}),t._uU(8,"Editar"),t.qZA(),t._UZ(9,"mat-divider"),t.TgZ(10,"button",35),t.NdJ("click",function(){const m=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.delete(m))}),t._uU(11," Eliminar "),t.qZA()()()()}if(2&o){const e=t.MAs(6);t.xp6(2),t.Q6J("matMenuTriggerFor",e)}}function R(o,r){1&o&&t._UZ(0,"tr",36)}function E(o,r){1&o&&t._UZ(0,"tr",37)}const B=function(){return[25,50,100]};let G=(()=>{class o{constructor(e,n,i,m){this.router=e,this.dialog=n,this.notificationsService=i,this.centroCostoService=m,this.dataSource=new l.by,this.columns=["centroCostoID","nombre","responsable","empresa","actions"]}ngOnInit(){this.getData()}getData(){var e=this;return(0,p.Z)(function*(){e.listCentroCosto=yield e.centroCostoService.getAll(),e.dataSource=new l.by(e.listCentroCosto)})()}new(){this.router.navigate(["/workspace/catalogos/centros/nuevo"])}edit(e){this.router.navigate(["/workspace/catalogos/centros/edit",e.centroCostoID])}delete(e){var n=this;this.dialog.open(A.$,{width:"95%",maxWidth:"500px",data:{message:"\xbfEsta seguro que desea eliminarlo?",submit:"Aceptar",cancel:"Cancelar"}}).afterClosed().subscribe(function(){var m=(0,p.Z)(function*(c){c&&(yield n.centroCostoService.delete(e.centroCostoID).then(()=>{n.notificationsService.success(),n.getData()}).catch(Z=>n.notificationsService.errorCatched(Z)))});return function(c){return m.apply(this,arguments)}}())}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.F0),t.Y36(I.uw),t.Y36(T.T),t.Y36(D.k))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-list"]],viewQuery:function(e,n){if(1&e&&(t.Gf(x.NW,7),t.Gf(h.YE,7)),2&e){let i;t.iGM(i=t.CRH())&&(n.paginator=i.first),t.iGM(i=t.CRH())&&(n.sort=i.first)}},decls:38,vars:8,consts:[[1,"container-fluid"],[1,"d-flex","flex-wrap","justify-content-between"],[1,"d-flex","align-items-center","txt-blue2","mb-4"],[1,"title"],[1,"row"],[1,"col-md-10"],[3,"dataSource"],[1,"col-md-2","d-flex","justify-content-end"],["mat-raised-button","",1,"bg-blue3","txt-white","squared-button","w-auto",3,"click"],[3,"loading"],[1,"row",3,"hidden"],[1,"col-sm-12"],[1,"table-container"],["mat-table","","matSort","","matSortActive","key","matSortDirection","asc","appTableQuery","",1,"table-responsive-sm","table-hover",3,"dataSource"],["matColumnDef","centroCostoID"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nombre"],["matColumnDef","responsable"],["matColumnDef","empresa"],["matColumnDef","actions"],["mat-header-cell","","class","text-center",4,"matHeaderCellDef"],["mat-cell","","class","text-center",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"d-flex","flex-column-reverse","flex-md-row","align-items-center","justify-content-between"],["showFirstLastButtons","",3,"pageSizeOptions"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell","",1,"text-center"],["mat-cell","",1,"text-center"],[1,"d-flex","justify-content-center"],["mat-icon-button","",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","",3,"click"],["mat-menu-item","",1,"txt-red3",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),t._uU(4," Centros de Costo "),t.qZA()()(),t.TgZ(5,"div",4)(6,"div",5),t._UZ(7,"app-search-bar",6),t.qZA(),t.TgZ(8,"div",7)(9,"button",8),t.NdJ("click",function(){return n.new()}),t._uU(10," Crear nuevo "),t.qZA()()(),t._UZ(11,"app-circular-loading",9),t.TgZ(12,"div",10)(13,"div",11)(14,"mat-card")(15,"mat-card-content")(16,"div")(17,"div",12)(18,"table",13),t.ynx(19,14),t.YNc(20,N,2,0,"th",15),t.YNc(21,Q,2,1,"td",16),t.BQk(),t.ynx(22,17),t.YNc(23,J,2,0,"th",15),t.YNc(24,Y,2,1,"td",16),t.BQk(),t.ynx(25,18),t.YNc(26,L,2,0,"th",15),t.YNc(27,w,2,1,"td",16),t.BQk(),t.ynx(28,19),t.YNc(29,j,2,0,"th",15),t.YNc(30,M,2,1,"td",16),t.BQk(),t.ynx(31,20),t.YNc(32,q,2,0,"th",21),t.YNc(33,O,12,1,"td",22),t.BQk(),t.YNc(34,R,1,0,"tr",23),t.YNc(35,E,1,0,"tr",24),t.qZA()(),t.TgZ(36,"div",25),t._UZ(37,"mat-paginator",26),t.qZA()()()()()()()),2&e&&(t.xp6(7),t.Q6J("dataSource",n.dataSource),t.xp6(4),t.Q6J("loading",n.loading),t.xp6(1),t.Q6J("hidden",n.loading),t.xp6(6),t.Q6J("dataSource",n.dataSource),t.xp6(16),t.Q6J("matHeaderRowDef",n.columns),t.xp6(1),t.Q6J("matRowDefColumns",n.columns),t.xp6(2),t.Q6J("pageSizeOptions",t.DdM(7,B)))},dependencies:[g.lW,S.Hw,U.d,d.a8,d.dn,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,h.YE,h.nU,x.NW,v.VK,v.OP,v.p6,F.s,_.N]}),o})();var s=a(4006);const H=JSON.parse('[{"empresaID":1,"codigo":"1","nombre":"UMG","direccion":"Guatemala","nit":"1234567-6"}]');var C=a(6895),f=a(9549),z=a(4144),$=a(4385),k=a(3238),K=a(9429);function W(o,r){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"formErrorHandler"),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Oqu(t.lcZ(2,1,e.nombreField))}}function X(o,r){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"formErrorHandler"),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Oqu(t.lcZ(2,1,e.responsableField))}}function P(o,r){if(1&o&&(t.TgZ(0,"mat-option",21),t._uU(1),t.qZA()),2&o){const e=r.$implicit;t.Q6J("value",e.empresaID),t.xp6(1),t.hij(" ",e.nombre," ")}}function V(o,r){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.ALo(2,"formErrorHandler"),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.hij(" ",t.lcZ(2,1,e.empresaIDField)," ")}}const tt=function(){return["/workspace/catalogos/centros"]};let y=(()=>{class o{constructor(e,n,i,m,c){this.centroCostoService=e,this.formBuilder=n,this.activeRoute=i,this.router=m,this.notificationsService=c,this.loading=!0,this.buildForm(),this.router.url.includes("/nuevo")?(this.edit=!1,this.baseKey="nuevo"):(this.activeRoute.params.subscribe(Z=>{this.centroCostoID=Number(Z.ID)}),this.edit=!0,this.baseKey="edit",this.patchForm()),this.listEmpresas=H}ngOnInit(){this.loading=!1}create(e){e.preventDefault(),this.edit?this.update():this.save(),this.edit=!1}save(){var e=this;return(0,p.Z)(function*(){if(!0===e.form.valid){const n={empresaID:e.empresaIDField.value,nombre:e.nombreField.value,responsable:e.responsableField.value};yield e.centroCostoService.save(n).then(()=>{e.notificationsService.success(),e.router.navigate(["/workspace/catalogos/centros"])}).catch(i=>e.notificationsService.errorCatched(i)).finally(()=>e.loading=!1)}})()}update(){var e=this;return(0,p.Z)(function*(){if(!0===e.form.valid){const n={centroCostoID:e.centroCostoID,empresaID:e.empresaIDField.value,nombre:e.nombreField.value,responsable:e.responsableField.value};yield e.centroCostoService.update(e.centroCostoID,n).then(()=>{e.notificationsService.success(),e.router.navigate(["/workspace/catalogos/centros"])}).catch(i=>e.notificationsService.errorCatched(i)).finally(()=>e.loading=!1)}})()}buildForm(){this.form=this.formBuilder.group({empresaID:["",[s.kI.required]],nombre:["",[s.kI.required]],responsable:["",[s.kI.required]]})}patchForm(){var e=this;return(0,p.Z)(function*(){e.centroCosto=yield e.centroCostoService.getByID(e.centroCostoID),e.form.patchValue({empresaID:e.centroCosto.empresaID,nombre:e.centroCosto.nombre,responsable:e.centroCosto.responsable})})()}get empresaIDField(){return this.form.get("empresaID")}get nombreField(){return this.form.get("nombre")}get responsableField(){return this.form.get("responsable")}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(D.k),t.Y36(s.QS),t.Y36(u.gz),t.Y36(u.F0),t.Y36(T.T))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-form"]],decls:47,vars:14,consts:[[1,"container-fluid"],[1,"d-flex","flex-wrap","justify-content-between"],[1,"d-flex","align-items-center","txt-blue2","mb-4"],[1,"title"],[3,"loading"],[1,"row",3,"hidden"],[1,"col-sm-12"],["form","form",3,"formGroup","ngSubmit"],[1,"subheader"],[1,"row"],[1,"form-group"],["appearance","outline"],["appTrim","","matInput","","type","text","formControlName","nombre","minlength","1","maxlength","50",3,"formControl"],[4,"ngIf"],["align","end"],["appTrim","","matInput","","type","text","formControlName","responsable","minlength","1","maxlength","100",3,"formControl"],["formControlName","empresaID","required",""],[3,"value",4,"ngFor","ngForOf"],[1,"form-group",2,"text-align","right !important"],["mat-button","",1,"w-auto",3,"routerLink"],["mat-raised-button","","type","submit",1,"bg-blue3","txt-white","squared-button","w-auto"],[3,"value"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),t._uU(4," Centro de Costo "),t.qZA()()(),t._UZ(5,"app-circular-loading",4),t.TgZ(6,"div",5)(7,"div",6)(8,"form",7),t.NdJ("ngSubmit",function(m){return n.create(m)}),t.TgZ(9,"mat-card")(10,"mat-card-header")(11,"mat-card-title")(12,"span",8),t._uU(13),t.qZA()()(),t.TgZ(14,"mat-card-content")(15,"div",9)(16,"div",6)(17,"div",10)(18,"mat-form-field",11)(19,"mat-label"),t._uU(20," Nombre "),t.qZA(),t._UZ(21,"input",12),t.YNc(22,W,3,3,"mat-error",13),t.TgZ(23,"mat-hint",14),t._uU(24),t.qZA()()()(),t.TgZ(25,"div",6)(26,"div",10)(27,"mat-form-field",11)(28,"mat-label"),t._uU(29," Responsable "),t.qZA(),t._UZ(30,"input",15),t.YNc(31,X,3,3,"mat-error",13),t.TgZ(32,"mat-hint",14),t._uU(33),t.qZA()()()(),t.TgZ(34,"div",6)(35,"div",10)(36,"mat-form-field",11)(37,"mat-label"),t._uU(38," Empresa "),t.qZA(),t.TgZ(39,"mat-select",16),t.YNc(40,P,2,2,"mat-option",17),t.qZA(),t.YNc(41,V,3,3,"mat-error",13),t.qZA()()()()(),t.TgZ(42,"mat-card-actions",18)(43,"a",19),t._uU(44," Cancelar "),t.qZA(),t.TgZ(45,"button",20),t._uU(46," Guardar "),t.qZA()()()()()()()),2&e&&(t.xp6(5),t.Q6J("loading",n.loading),t.xp6(1),t.Q6J("hidden",n.loading),t.xp6(2),t.Q6J("formGroup",n.form),t.xp6(5),t.Oqu("nuevo"===n.baseKey?"Nuevo Centro de Costo":"Editar Centro de Costo"),t.xp6(8),t.Q6J("formControl",n.nombreField),t.xp6(1),t.Q6J("ngIf",n.nombreField.errors),t.xp6(2),t.hij("",null==n.nombreField.value?null:n.nombreField.value.length," / 50"),t.xp6(6),t.Q6J("formControl",n.responsableField),t.xp6(1),t.Q6J("ngIf",n.responsableField.errors),t.xp6(2),t.hij("",null==n.responsableField.value?null:n.responsableField.value.length," / 100"),t.xp6(7),t.Q6J("ngForOf",n.listEmpresas),t.xp6(1),t.Q6J("ngIf",n.empresaIDField.errors),t.xp6(2),t.Q6J("routerLink",t.DdM(13,tt)))},dependencies:[C.sg,C.O5,s._Y,s.Fj,s.JJ,s.JL,s.Q7,s.wO,s.nD,s.oH,s.sg,s.u,g.lW,g.zs,d.a8,d.dk,d.dn,d.n5,d.hq,f.TO,f.KE,f.bx,f.hX,z.Nt,$.gD,k.ey,F.s,u.yS,K.P]}),o})();const et=[{path:"",component:G},{path:"nuevo",component:y},{path:"edit/:ID",component:y}];let ot=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.Bz.forChild(et),u.Bz]}),o})();var nt=a(4185);let rt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[C.ez,nt.m,ot]}),o})()}}]);