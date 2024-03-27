"use strict";(self.webpackChunktestspeedsheet=self.webpackChunktestspeedsheet||[]).push([[592],{324:(y,h,n)=>{n.d(h,{p:()=>L});var l=n(95),_=n(6814),C=n(2352),v=n(707),T=n(5431),d=n(3506),e=n(3714),u=n(1423),f=n(7213),g=n(9291);let L=(()=>{class x{static#e=this.\u0275fac=function(E){return new(E||x)};static#t=this.\u0275mod=g.oAB({type:x});static#n=this.\u0275inj=g.cJS({imports:[l.UX,l.u5,_.ez,C.kW,v.hJ,T.U$,d._8,e.j,u.gz,f.S]})}return x})()},9584:(y,h,n)=>{n.d(h,{y:()=>w});var l=n(95),_=n(6097);class d{}var e=n(9291),u=n(28),f=n(5219),g=n(1108);const L=g._+"/get-exam-question-to-lock-unlock",x=g._+"/lock-unlock-exam-question";var U=n(3792);let E=(()=>{class i extends U.b{constructor(){super()}searchQuestionToLockUnlock(o){return this.http.post(L,o)}lockUnlockQuestion(o){return this.http.post(x,o)}static#e=this.\u0275fac=function(s){return new(s||i)};static#t=this.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var A=n(6792),a=n(6814),p=n(2352),r=n(707),k=n(5431),M=n(1423),O=n(7213);function S(i,b){1&i&&(e.TgZ(0,"tr")(1,"th"),e._uU(2,"Subject"),e.qZA(),e.TgZ(3,"th"),e._uU(4,"Date"),e.qZA(),e.TgZ(5,"th"),e._uU(6,"Start Time"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"End Time"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"Password"),e.qZA(),e.TgZ(11,"th",26),e._uU(12,"Action"),e.qZA()())}function D(i,b){if(1&i){const o=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.ALo(5,"date"),e.qZA(),e.TgZ(6,"td"),e._uU(7),e.ALo(8,"date"),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.ALo(11,"date"),e.qZA(),e.TgZ(12,"td")(13,"p-password",27),e.NdJ("ngModelChange",function(t){const c=e.CHM(o).$implicit;return e.KtG(c.lockPassword=t)}),e.qZA()(),e.TgZ(14,"td")(15,"p-button",28),e.NdJ("onClick",function(){const m=e.CHM(o).$implicit,c=e.oxw();return e.KtG(c.lockUnlock(m))}),e.qZA()()()}if(2&i){const o=b.$implicit;e.xp6(2),e.Oqu(o.subjectName),e.xp6(2),e.Oqu(e.xi3(5,9,o.examDate,"dd-MMM-yy")),e.xp6(3),e.Oqu(e.xi3(8,12,o.examStartsAt,"HH:mm")),e.xp6(3),e.Oqu(e.xi3(11,15,o.examEndsAt,"HH:mm")),e.xp6(3),e.Q6J("feedback",!1)("toggleMask",!0)("ngModel",o.lockPassword),e.xp6(2),e.Q6J("text",!0)("label",o.isLock?"Unlock":"Lock")}}function I(i,b){if(1&i){const o=e.EpF();e.TgZ(0,"p-button",29),e.NdJ("onClick",function(){e.CHM(o);const t=e.oxw();return t.inputPasswordDialogVisible=!0,t.isLock=!0,e.KtG(t.lockPassword="")}),e.qZA()}2&i&&e.Q6J("text",!0)("outlined",!0)("label","Lock All")}function P(i,b){if(1&i){const o=e.EpF();e.TgZ(0,"p-button",30),e.NdJ("onClick",function(){e.CHM(o);const t=e.oxw();return t.inputPasswordDialogVisible=!0,t.isLock=!1,e.KtG(t.lockPassword="")}),e.qZA()}2&i&&e.Q6J("text",!0)("outlined",!0)("label","Unlock All")}const Q=function(){return{"min-width":"50rem"}};let w=(()=>{class i extends _.H{constructor(o,s,t,m,c,J){super(),this.router=o,this.activatedRoute=s,this.messageService=t,this.lockQuestionService=m,this.adminService=c,this.formBuilder=J,this.examLevelOptions=[],this.sessionOptions=[],this.yearOptions=[],this.required_field={examLevel:"Exam Level",session:"Session",year:"Year"},this.examList=[],this.inputPasswordDialogVisible=!1,this.prepareCreateQuestionForm(),this.fetchConfiguration()}ngOnInit(){}prepareCreateQuestionForm(){this.examSearchForm=this.formBuilder.group({examLevel:[null,l.kI.required],session:[null,l.kI.required],year:[null,[l.kI.required]]})}searchExams(){this.examSearchForm.value.actionCode=this.actionCode,!this.formInvalid()&&this.lockQuestionService.searchQuestionToLockUnlock(this.examSearchForm.value).subscribe(s=>{s.result&&(this.examList=s.data,this.examList.forEach(t=>{t.examDate=t.examDate?new Date(t.examDate):t.examDate,t.examStartsAt=t.examStartsAt?new Date(t.examStartsAt):t.examStartsAt,t.examEndsAt=t.examEndsAt?new Date(t.examEndsAt):t.examEndsAt}))})}formInvalid(){return this.markFormGroupAsTouched(this.examSearchForm),this.showRequiredErrorMessage(this.examSearchForm,this.required_field),this.examSearchForm.invalid}fetchConfiguration(){this.subscribers.confSubs=this.adminService.fetchConfiguration().subscribe(o=>{o.result&&(this.examLevelOptions=o.data.examLevelList,this.sessionOptions=o.data.examSessionList,this.yearOptions=o.data.examYearList)})}clearExamList(o){this.examList=[]}onExamLevelClear(){this.examList=[]}batchLockUnlock(){let o=this.examList.map(s=>{let t=new d;return t.quesId=s.id,t.isLock=this.isLock,t.password=this.lockPassword,t});this.lockQuestionService.lockUnlockQuestion(o).subscribe(s=>{s.result&&(this.examList=[],this.messageService.add(this.isLock?{summary:"Locked",detail:"Exam Questions are locked!",severity:"success"}:{summary:"Uhocked",detail:"Exam Questions are unlocked!",severity:"success"}),this.searchExams())}),this.inputPasswordDialogVisible=!1}lockUnlock(o){let s=new d;s.quesId=o.id,s.isLock=!o.isLock,s.password=o.lockPassword,this.lockQuestionService.lockUnlockQuestion([s]).subscribe(t=>{t.result&&(this.examList=[],this.messageService.add(s.isLock?{summary:"Locked",detail:"Exam Question is locked!",severity:"success"}:{summary:"Uhocked",detail:"Exam Question is unlocked!",severity:"success"}),this.searchExams())})}static#e=this.\u0275fac=function(s){return new(s||i)(e.Y36(u.F0),e.Y36(u.gz),e.Y36(f.ez),e.Y36(E),e.Y36(A.l),e.Y36(l.qu))};static#t=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-lock-unlock"]],inputs:{header:"header",actionCode:"actionCode"},features:[e.qOj],decls:33,vars:20,consts:[[1,"grid"],[1,"col-12","md:col-12"],[1,"card","p-fluid"],[1,"p-5",3,"formGroup"],[1,"formgrid","grid"],[1,"field","col"],["for","exam-level"],["id","exam-level","formControlName","examLevel","placeholder","Select Exam Level","optionLabel","name","optionValue","code",3,"showClear","options","onChange","onClear"],["for","session"],["id","session","placeholder","Select Session","formControlName","session","optionLabel","name","optionValue","code",3,"showClear","options","onChange"],["for","year"],["id","year","placeholder","Select Year","formControlName","year","optionLabel","name","optionValue","code",3,"showClear","options","onChange"],[1,"flex","justify-content-end"],["icon","pi pi-search","label","Find",3,"onClick"],[1,"mt-5"],[3,"value","tableStyle"],["pTemplate","header"],["pTemplate","body"],[1,"flex","justify-content-end","mt-3","p-5"],[1,"flex","flex-row","justify-content-around","gap-2"],["severity","warning",3,"text","outlined","label","onClick",4,"ngIf"],[3,"text","outlined","label","onClick",4,"ngIf"],[3,"header","modal","visible","visibleChange"],[1,"flex","flex-column","flex-wrap"],[1,"mb-2",3,"ngModel","feedback","toggleMask","ngModelChange"],[3,"label","onClick"],[1,"text-center"],[3,"feedback","toggleMask","ngModel","ngModelChange"],[3,"text","label","onClick"],["severity","warning",3,"text","outlined","label","onClick"],[3,"text","outlined","label","onClick"]],template:function(s,t){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5"),e._uU(4),e.qZA(),e.TgZ(5,"form",3)(6,"div",4)(7,"div",5)(8,"label",6),e._uU(9,"Exam Level"),e.qZA(),e.TgZ(10,"p-dropdown",7),e.NdJ("onChange",function(c){return t.clearExamList(c.value)})("onClear",function(){return t.onExamLevelClear()}),e.qZA()(),e.TgZ(11,"div",5)(12,"label",8),e._uU(13,"Session"),e.qZA(),e.TgZ(14,"p-dropdown",9),e.NdJ("onChange",function(c){return t.clearExamList(c.value)}),e.qZA()(),e.TgZ(15,"div",5)(16,"label",10),e._uU(17,"Year"),e.qZA(),e.TgZ(18,"p-dropdown",11),e.NdJ("onChange",function(c){return t.clearExamList(c.value)}),e.qZA()()(),e.TgZ(19,"div",12)(20,"p-button",13),e.NdJ("onClick",function(){return t.searchExams()}),e.qZA()()(),e.TgZ(21,"div",14)(22,"p-table",15),e.YNc(23,S,13,0,"ng-template",16),e.YNc(24,D,16,18,"ng-template",17),e.qZA(),e.TgZ(25,"div",18)(26,"div",19),e.YNc(27,I,1,3,"p-button",20),e.YNc(28,P,1,3,"p-button",21),e.qZA()()()()()(),e.TgZ(29,"p-dialog",22),e.NdJ("visibleChange",function(c){return t.inputPasswordDialogVisible=c}),e.TgZ(30,"div",23)(31,"p-password",24),e.NdJ("ngModelChange",function(c){return t.lockPassword=c}),e.qZA(),e.TgZ(32,"p-button",25),e.NdJ("onClick",function(){return t.batchLockUnlock()}),e.qZA()()()),2&s&&(e.xp6(4),e.Oqu(t.header),e.xp6(1),e.Q6J("formGroup",t.examSearchForm),e.xp6(5),e.Q6J("showClear",!0)("options",t.examLevelOptions),e.xp6(4),e.Q6J("showClear",!0)("options",t.sessionOptions),e.xp6(4),e.Q6J("showClear",!0)("options",t.yearOptions),e.xp6(4),e.Q6J("value",t.examList)("tableStyle",e.DdM(19,Q)),e.xp6(5),e.Q6J("ngIf",t.examList.length),e.xp6(1),e.Q6J("ngIf",t.examList.length),e.xp6(1),e.Q6J("header","Insert password to "+(t.isLock?"Lock":"Unlock"))("modal",!0)("visible",t.inputPasswordDialogVisible),e.xp6(2),e.Q6J("ngModel",t.lockPassword)("feedback",!1)("toggleMask",!0),e.xp6(1),e.Q6J("label",t.isLock?"Lock":"Unlock"))},dependencies:[l._Y,l.JJ,l.JL,l.sg,l.u,l.On,a.O5,p.Lt,f.jx,r.zx,k.iA,M.ro,O.V,a.uU]})}return i})()},647:(y,h,n)=>{n.d(h,{q:()=>T});const _=n(1108)._+"/search-exam-question";var C=n(3792),v=n(9291);let T=(()=>{class d extends C.b{constructor(){super()}searchQuestion(u){return this.http.post(_,u)}static#e=this.\u0275fac=function(f){return new(f||d)};static#t=this.\u0275prov=v.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})()},4532:(y,h,n)=>{n.d(h,{d:()=>A});var l=n(6814),_=n(9291),C=n(5219);let A=(()=>{class a{static \u0275fac=function(k){return new(k||a)};static \u0275mod=_.oAB({type:a});static \u0275inj=_.cJS({imports:[l.ez,C.m8]})}return a})()}}]);