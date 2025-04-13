"use strict";(self["webpackChunkskillspot"]=self["webpackChunkskillspot"]||[]).push([[426],{116:function(e,t,s){var a=s(6518),o=s(2652),i=s(9306),l=s(8551),n=s(1767);a({target:"Iterator",proto:!0,real:!0},{find:function(e){l(this),i(e);var t=n(this),s=0;return o(t,(function(t,a){if(e(t,s++))return a(t)}),{IS_RECORD:!0,INTERRUPTED:!0}).result}})},713:function(e,t,s){var a=s(9565),o=s(9306),i=s(8551),l=s(1767),n=s(9462),r=s(6319),d=n((function(){var e=this.iterator,t=i(a(this.next,e)),s=this.done=!!t.done;if(!s)return r(e,this.mapper,[t.value,this.counter++],!0)}));e.exports=function(e){return i(this),o(e),new d(l(this),{mapper:e})}},1701:function(e,t,s){var a=s(6518),o=s(713),i=s(6395);a({target:"Iterator",proto:!0,real:!0,forced:i},{map:o})},7198:function(e,t,s){s.d(t,{A:function(){return X}});var a=s(641),o=s(33),i=s(3751),l=s(75);const n={class:"sidebar-header"},r={class:"header-content"},d={src:l,alt:"Logo",class:"sidebar-logo2"},c={class:"sidebar-content"},u={class:"nav-section"},m={class:"nav-menu"},k=["onClick"],f={class:"nav-icon"},p={key:1,class:"tooltip"},h=["onClick"],b={class:"dropdown-icon"},g={class:"dropdown-text"},v={key:0,class:"tooltip"},L={class:"sidebar-footer"},w={key:0,class:"tooltip"},T={class:"mobile-nav-container"},C={key:0,class:"mobile-nav-scroll-indicator left"},y=["onClick"],M={class:"mobile-nav-icon"},S={class:"mobile-nav-text"},D={key:0,class:"mobile-dropdown"},E=["onClick"],x={key:1,class:"mobile-nav-scroll-indicator right"};function I(e,t,s,l,I,A){const $=(0,a.g2)("modal");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.bo)((0,a.Lk)("div",{class:(0,o.C4)(["sidebar",{collapsed:I.isCollapsed,"dark-sidebar":I.isDarkMode}])},[(0,a.Lk)("div",n,[(0,a.Lk)("div",r,[(0,a.bo)((0,a.Lk)("img",d,null,512),[[i.aG,!I.isCollapsed]]),(0,a.Lk)("button",{class:"toggle-button",onClick:t[0]||(t[0]=(...e)=>A.toggleSidebar&&A.toggleSidebar(...e)),"aria-label":"Toggle Sidebar"},[(0,a.Lk)("i",{class:(0,o.C4)(["fas",I.isCollapsed?"fa-chevron-right":"fa-chevron-left"])},null,2)])])]),(0,a.Lk)("div",c,[(0,a.Lk)("div",u,[(0,a.Lk)("nav",m,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(I.navItems,((e,t)=>((0,a.uX)(),(0,a.CE)("div",{key:`item-${t}`,class:"nav-item-container"},[(0,a.Lk)("div",{class:(0,o.C4)(["nav-item",{active:I.currentRoute===e.route,"has-dropdown-open":e.dropdown&&I.expandedDropdowns.includes(t),"system-management":"System Management"===e.title}]),onClick:s=>e.dropdown?A.toggleDropdown(t):A.navigateTo(e.route)},[(0,a.Lk)("div",f,[(0,a.Lk)("i",{class:(0,o.C4)(e.icon)},null,2)]),(0,a.Lk)("span",{class:(0,o.C4)(["nav-text",{"system-text":"System Management"===e.title}])},(0,o.v_)(e.title),3),e.dropdown&&!I.isCollapsed?((0,a.uX)(),(0,a.CE)("i",{key:0,class:(0,o.C4)(["fas dropdown-arrow",I.expandedDropdowns.includes(t)?"fa-chevron-up":"fa-chevron-down"])},null,2)):(0,a.Q3)("",!0),I.isCollapsed?((0,a.uX)(),(0,a.CE)("div",p,(0,o.v_)(e.title),1)):(0,a.Q3)("",!0)],10,k),(0,a.bF)(i.eB,{name:"dropdown"},{default:(0,a.k6)((()=>[e.dropdown&&I.expandedDropdowns.includes(t)?((0,a.uX)(),(0,a.CE)("div",{key:0,class:(0,o.C4)(["dropdown-container",{"side-dropdown":I.isCollapsed}])},[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.dropdownItems,((e,s)=>((0,a.uX)(),(0,a.CE)("div",{key:`drop-${t}-${s}`,class:(0,o.C4)(["dropdown-item",{active:I.currentRoute===e.route}]),onClick:t=>A.navigateTo(e.route)},[(0,a.Lk)("div",b,[(0,a.Lk)("i",{class:(0,o.C4)(e.icon)},null,2)]),(0,a.Lk)("span",g,(0,o.v_)(e.title),1),I.isCollapsed?((0,a.uX)(),(0,a.CE)("div",v,(0,o.v_)(e.title),1)):(0,a.Q3)("",!0)],10,h)))),128))],2)):(0,a.Q3)("",!0)])),_:2},1024)])))),128))])])]),(0,a.Lk)("div",L,[(0,a.Lk)("div",{class:"nav-item",onClick:t[1]||(t[1]=(...e)=>A.logout&&A.logout(...e))},[t[5]||(t[5]=(0,a.Lk)("div",{class:"nav-icon"},[(0,a.Lk)("i",{class:"fas fa-sign-out-alt"})],-1)),t[6]||(t[6]=(0,a.Lk)("span",{class:"nav-text"},"Logout",-1)),I.isCollapsed?((0,a.uX)(),(0,a.CE)("div",w,"Logout")):(0,a.Q3)("",!0)])])],2),[[i.aG,!I.isMobile]]),(0,a.bo)((0,a.Lk)("div",T,[I.hasMoreItemsLeft?((0,a.uX)(),(0,a.CE)("div",C,t[7]||(t[7]=[(0,a.Lk)("i",{class:"fas fa-chevron-left"},null,-1)]))):(0,a.Q3)("",!0),(0,a.Lk)("div",{class:"mobile-nav",ref:"mobileNav",onScroll:t[2]||(t[2]=(...e)=>A.checkScrollPosition&&A.checkScrollPosition(...e))},[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(A.mobileNavItems,((e,t)=>((0,a.uX)(),(0,a.CE)(a.FK,{key:t},[(0,a.Lk)("div",{class:(0,o.C4)(["mobile-nav-item",{active:I.currentRoute===e.route}]),onClick:t=>e.dropdown?A.toggleMobileDropdown(e):A.navigateTo(e.route)},[(0,a.Lk)("div",M,[(0,a.Lk)("i",{class:(0,o.C4)(e.icon)},null,2)]),(0,a.Lk)("span",S,(0,o.v_)("System Management"===e.title?"System":e.title),1)],10,y),(0,a.bF)(i.eB,{name:"dropdown"},{default:(0,a.k6)((()=>[e.dropdown&&I.mobileExpanded.includes(e.title)?((0,a.uX)(),(0,a.CE)("div",D,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(e.dropdownItems,((e,t)=>((0,a.uX)(),(0,a.CE)("div",{class:"dropdown-item",key:`mobile-drop-${t}`,onClick:t=>A.navigateTo(e.route)},(0,o.v_)(e.title),9,E)))),128))])):(0,a.Q3)("",!0)])),_:2},1024)],64)))),128))],544),I.hasMoreItemsRight?((0,a.uX)(),(0,a.CE)("div",x,t[8]||(t[8]=[(0,a.Lk)("i",{class:"fas fa-chevron-right"},null,-1)]))):(0,a.Q3)("",!0)],512),[[i.aG,I.isMobile]]),I.showSettingsModal?((0,a.uX)(),(0,a.Wv)($,{key:0,onClose:t[4]||(t[4]=e=>I.showSettingsModal=!1)},{header:(0,a.k6)((()=>t[9]||(t[9]=[(0,a.Lk)("h3",null,"Settings",-1)]))),body:(0,a.k6)((()=>t[10]||(t[10]=[(0,a.Lk)("div",null,[(0,a.Lk)("label",{for:"setting1"},"Setting 1"),(0,a.Lk)("select",{id:"setting1"},[(0,a.Lk)("option",{value:"option1"},"Option 1"),(0,a.Lk)("option",{value:"option2"},"Option 2")]),(0,a.Lk)("label",{for:"setting2"},"Setting 2"),(0,a.Lk)("select",{id:"setting2"},[(0,a.Lk)("option",{value:"option1"},"Option 1"),(0,a.Lk)("option",{value:"option2"},"Option 2")])],-1)]))),footer:(0,a.k6)((()=>[(0,a.Lk)("button",{onClick:t[3]||(t[3]=e=>I.showSettingsModal=!1)},"Close")])),_:1})):(0,a.Q3)("",!0),(0,a.RG)(e.$slots,"default",{},void 0,!0)])}s(4114),s(8111),s(7588),s(3579);var A={name:"ResponsiveSidebar",data(){return{isCollapsed:!1,isDarkMode:!1,isMobile:!1,currentRoute:"",expandedDropdowns:[],mobileExpanded:[],showSettingsModal:!1,hasMoreItemsLeft:!1,hasMoreItemsRight:!0,navItems:[{title:"Dashboard",icon:"fas fa-tachometer-alt",route:"/dashboard"},{title:"Create Task",icon:"fas fa-tasks",route:"/create-task"},{title:"Evaluate",icon:"fas fa-users",route:"/evaluate-task"},{title:"System Management",icon:"fas fa-cog",dropdown:!0,dropdownItems:[{title:"Manage users",icon:"fas fa-user-cog",route:"/ManageUsers"},{title:"Profile",icon:"fas fa-sliders-h",route:"/Profile"}]},{title:"View",icon:"fas fa-eye",route:"/view-evaluations"},{title:"Export",icon:"fa-solid fa-download",route:"/export"}]}},computed:{mobileNavItems(){let e=[];return this.navItems.forEach((t=>{t.dropdown,e.push(t)})),e}},mounted(){this.checkScreenSize(),window.addEventListener("resize",this.checkScreenSize),this.currentRoute=this.$route.path,this.$router.afterEach((e=>{this.currentRoute=e.path,this.handleRouteChange(e)}))},beforeDestroy(){window.removeEventListener("resize",this.checkScreenSize)},methods:{toggleSidebar(){this.isCollapsed=!this.isCollapsed,localStorage.setItem("sidebarCollapsed",this.isCollapsed)},toggleDropdown(e){const t=this.expandedDropdowns.indexOf(e);-1===t?this.expandedDropdowns.push(e):this.expandedDropdowns.splice(t,1)},checkScreenSize(){this.isMobile=window.innerWidth<768;const e=localStorage.getItem("sidebarCollapsed");this.isCollapsed=null!==e?"true"===e:window.innerWidth<992&&window.innerWidth>=768},navigateTo(e){this.$router.push(e)},logout(){console.log("Logging out...")},checkScrollPosition(){if(!this.$refs.mobileNav)return;const e=this.$refs.mobileNav;this.hasMoreItemsLeft=e.scrollLeft>10;const t=Math.abs(e.scrollWidth-e.clientWidth-e.scrollLeft)<10;this.hasMoreItemsRight=!t},toggleMobileDropdown(e){const t=this.mobileExpanded.indexOf(e.title);-1===t?this.mobileExpanded.push(e.title):this.mobileExpanded.splice(t,1)},handleRouteChange(e){this.navItems.forEach(((t,s)=>{if(t.dropdown){const a=t.dropdownItems.some((t=>t.route===e.path));a&&!this.expandedDropdowns.includes(s)&&this.expandedDropdowns.push(s)}}))}}},$=s(6262);const _=(0,$.A)(A,[["render",I],["__scopeId","data-v-0f3fbe0a"]]);var X=_},8426:function(e,t,s){s.r(t),s.d(t,{default:function(){return Ce}});s(8111),s(1701);var a=s(641),o=s(33),i=s(3751);const l={class:"wrapper"},n={class:"content-wrapper"},r={class:"dashboard-container"},d={class:"card team-card"},c={class:"card-header"},u={class:"card-content"},m={key:0,class:"table-container"},k=["onClick"],f={class:"member-info"},p={class:"avatar"},h={class:"task-count"},b={class:"stat pending"},g={class:"stat completed"},v={class:"stat postponed"},L={class:"action-buttons"},w=["onClick"],T=["onClick"],C={key:1},y={class:"dashboard-grid"},M={class:"card task-card"},S={class:"card-content"},D={class:"form-group"},E={class:"form-group"},x={class:"form-row"},I={class:"form-group"},A=["value"],$={class:"form-group"},_={class:"form-group"},X={class:"priority-selector"},B=["onClick"],N={class:"card activity-card"},O={class:"card-content"},R={class:"activity-timeline"},P={class:"activity-content"},J={class:"activity-title"},F={class:"activity-meta"},W={class:"activity-user"},Q={class:"activity-timestamp"},U={key:0,class:"modal"},K={class:"modal-content"},V={class:"form-group"},q={class:"form-group"},z={class:"form-actions"},Y={type:"submit",class:"btn-primary"},j={key:1,class:"modal"},G={class:"modal-content task-details-modal"},H={class:"member-task-header"},Z={class:"member-info-large"},ee={class:"avatar large"},te={class:"member-details"},se={class:"member-role"},ae={class:"task-stats"},oe={class:"stat-value"},ie={key:0,class:"tasks-list"},le={class:"task-header"},ne={class:"task-title-section"},re={class:"task-creation-date"},de={class:"task-badges"},ce={class:"task-description"},ue={class:"task-meta"},me={class:"task-dates"},ke={class:"task-actions"},fe=["onClick"],pe=["onClick"],he=["onClick"],be={key:1,class:"no-tasks"};function ge(e,t,s,ge,ve,Le){const we=(0,a.g2)("ResponsiveSidebar");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.Lk)("div",l,[(0,a.bF)(we),(0,a.Lk)("div",n,[(0,a.Lk)("div",r,[t[29]||(t[29]=(0,a.Lk)("div",{class:"dashboard-header sticky-header"},[(0,a.Lk)("h1",null,"Team Management & Task Creation"),(0,a.Lk)("p",{class:"description"},"Manage your team members and create new tasks efficiently.")],-1)),(0,a.Lk)("div",d,[(0,a.Lk)("div",c,[t[12]||(t[12]=(0,a.Lk)("h3",null,"Team Members",-1)),(0,a.Lk)("button",{class:"btn-primary",onClick:t[0]||(t[0]=(...e)=>Le.showAddMemberModal&&Le.showAddMemberModal(...e))},t[11]||(t[11]=[(0,a.Lk)("i",{class:"fas fa-plus"},null,-1),(0,a.eW)(" Add Member ")]))]),(0,a.Lk)("div",u,[ve.teamMembers.length>0?((0,a.uX)(),(0,a.CE)("div",m,[(0,a.Lk)("table",null,[t[18]||(t[18]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th",null,"Name"),(0,a.Lk)("th",null,"Role"),(0,a.Lk)("th",null,"Total Tasks"),(0,a.Lk)("th",null,"Pending"),(0,a.Lk)("th",null,"Completed"),(0,a.Lk)("th",null,"Postponed"),(0,a.Lk)("th",null,"Status"),(0,a.Lk)("th",null,"Actions")])],-1)),(0,a.Lk)("tbody",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(ve.teamMembers,(e=>((0,a.uX)(),(0,a.CE)("tr",{key:e.name,onClick:t=>Le.showMemberTasks(e),class:"member-row"},[(0,a.Lk)("td",null,[(0,a.Lk)("div",f,[(0,a.Lk)("div",p,(0,o.v_)(e.name.split(" ").map((e=>e[0])).join("")),1),(0,a.Lk)("span",null,(0,o.v_)(e.name),1)])]),(0,a.Lk)("td",null,(0,o.v_)(e.role),1),(0,a.Lk)("td",null,[(0,a.Lk)("div",h,(0,o.v_)(e.tasks),1)]),(0,a.Lk)("td",null,[(0,a.Lk)("div",b,[t[13]||(t[13]=(0,a.Lk)("i",{class:"fas fa-clock"},null,-1)),(0,a.eW)(" "+(0,o.v_)(Le.getTaskStats(e.id).pending),1)])]),(0,a.Lk)("td",null,[(0,a.Lk)("div",g,[t[14]||(t[14]=(0,a.Lk)("i",{class:"fas fa-check"},null,-1)),(0,a.eW)(" "+(0,o.v_)(Le.getTaskStats(e.id).completed),1)])]),(0,a.Lk)("td",null,[(0,a.Lk)("div",v,[t[15]||(t[15]=(0,a.Lk)("i",{class:"fas fa-clock"},null,-1)),(0,a.eW)(" "+(0,o.v_)(Le.getTaskStats(e.id).postponed),1)])]),(0,a.Lk)("td",null,[(0,a.Lk)("span",{class:(0,o.C4)(["status-badge",Le.getMemberStatus(e).class])},(0,o.v_)(Le.getMemberStatus(e).text),3)]),(0,a.Lk)("td",null,[(0,a.Lk)("div",L,[(0,a.Lk)("button",{class:"btn-icon",onClick:(0,i.D$)((t=>Le.editMember(e)),["stop"])},t[16]||(t[16]=[(0,a.Lk)("i",{class:"fas fa-edit"},null,-1)]),8,w),(0,a.Lk)("button",{class:"btn-icon btn-danger",onClick:(0,i.D$)((t=>Le.deleteMember(e)),["stop"])},t[17]||(t[17]=[(0,a.Lk)("i",{class:"fas fa-trash"},null,-1)]),8,T)])])],8,k)))),128))])])])):((0,a.uX)(),(0,a.CE)("div",C,t[19]||(t[19]=[(0,a.Lk)("p",null,"No team members found. Please add members to manage tasks.",-1)])))])]),(0,a.Lk)("div",y,[(0,a.Lk)("div",M,[t[27]||(t[27]=(0,a.Lk)("div",{class:"card-header"},[(0,a.Lk)("h3",null,"Create New Task")],-1)),(0,a.Lk)("div",S,[(0,a.Lk)("form",{onSubmit:t[5]||(t[5]=(0,i.D$)(((...e)=>Le.createTask&&Le.createTask(...e)),["prevent"]))},[(0,a.Lk)("div",D,[t[20]||(t[20]=(0,a.Lk)("label",null,"Task Title",-1)),(0,a.bo)((0,a.Lk)("input",{type:"text",class:"form-input","onUpdate:modelValue":t[1]||(t[1]=e=>ve.newTask.title=e),required:"",placeholder:"Enter task title"},null,512),[[i.Jo,ve.newTask.title]])]),(0,a.Lk)("div",E,[t[21]||(t[21]=(0,a.Lk)("label",null,"Description",-1)),(0,a.bo)((0,a.Lk)("textarea",{class:"form-input",rows:"3","onUpdate:modelValue":t[2]||(t[2]=e=>ve.newTask.description=e),required:"",placeholder:"Describe the task details"},null,512),[[i.Jo,ve.newTask.description]])]),(0,a.Lk)("div",x,[(0,a.Lk)("div",I,[t[23]||(t[23]=(0,a.Lk)("label",null,"Assign To",-1)),(0,a.bo)((0,a.Lk)("select",{class:"form-input dropdown-red-black","onUpdate:modelValue":t[3]||(t[3]=e=>ve.newTask.assignedTo=e),required:""},[t[22]||(t[22]=(0,a.Lk)("option",{value:"",disabled:"",selected:""},"Select team member",-1)),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(ve.teamMembers,(e=>((0,a.uX)(),(0,a.CE)("option",{key:e.id,value:e.name},(0,o.v_)(e.name)+" ("+(0,o.v_)(e.tasks)+" tasks) ",9,A)))),128))],512),[[i.u1,ve.newTask.assignedTo]])]),(0,a.Lk)("div",$,[t[24]||(t[24]=(0,a.Lk)("label",null,"Due Date",-1)),(0,a.bo)((0,a.Lk)("input",{type:"date",class:"form-input","onUpdate:modelValue":t[4]||(t[4]=e=>ve.newTask.dueDate=e),required:""},null,512),[[i.Jo,ve.newTask.dueDate]])])]),(0,a.Lk)("div",_,[t[25]||(t[25]=(0,a.Lk)("label",null,"Priority Level",-1)),(0,a.Lk)("div",X,[((0,a.uX)(),(0,a.CE)(a.FK,null,(0,a.pI)(["minor","mid","major"],(e=>(0,a.Lk)("div",{key:e,class:(0,o.C4)(["priority-option",{active:ve.newTask.priority===e}]),onClick:t=>ve.newTask.priority=e},[(0,a.Lk)("div",{class:(0,o.C4)(["priority-indicator",e])},null,2),(0,a.Lk)("span",null,(0,o.v_)(e.charAt(0).toUpperCase()+e.slice(1)),1)],10,B))),64))])]),t[26]||(t[26]=(0,a.Lk)("div",{class:"form-actions"},[(0,a.Lk)("button",{type:"button",class:"btn-secondary"}," Cancel "),(0,a.Lk)("button",{type:"submit",class:"btn-primary"},[(0,a.Lk)("i",{class:"fas fa-plus"}),(0,a.eW)(" Create Task ")])],-1))],32)])]),(0,a.Lk)("div",N,[t[28]||(t[28]=(0,a.Lk)("div",{class:"card-header"},[(0,a.Lk)("h3",null,"Recent Activity")],-1)),(0,a.Lk)("div",O,[(0,a.Lk)("div",R,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(ve.activities,((e,t)=>((0,a.uX)(),(0,a.CE)("div",{key:t,class:"activity-item"},[(0,a.Lk)("div",{class:(0,o.C4)(["activity-icon",Le.getActivityIcon(e.type)])},[(0,a.Lk)("i",{class:(0,o.C4)(Le.getActivityIconClass(e.type))},null,2)],2),(0,a.Lk)("div",P,[(0,a.Lk)("div",J,[(0,a.eW)((0,o.v_)(e.title)+" ",1),"task"===e.type||"delete"===e.type?((0,a.uX)(),(0,a.CE)("span",{key:0,class:(0,o.C4)(["activity-badge",Le.getTaskStatusClass(e)])},(0,o.v_)(Le.getTaskStatusText(e)),3)):(0,a.Q3)("",!0)]),(0,a.Lk)("div",F,[(0,a.Lk)("span",W,(0,o.v_)(e.user),1),(0,a.Lk)("span",Q,(0,o.v_)(Le.formatTimeAgo(e.time)),1)])])])))),128))])])])])])])]),ve.showModal?((0,a.uX)(),(0,a.CE)("div",U,[(0,a.Lk)("div",K,[(0,a.Lk)("span",{class:"close",onClick:t[6]||(t[6]=(...e)=>Le.closeModal&&Le.closeModal(...e))},"×"),(0,a.Lk)("h2",null,(0,o.v_)(ve.isEditing?"Edit Team Member":"Add Team Member"),1),(0,a.Lk)("form",{onSubmit:t[9]||(t[9]=(0,i.D$)(((...e)=>Le.handleSubmit&&Le.handleSubmit(...e)),["prevent"]))},[(0,a.Lk)("div",V,[t[30]||(t[30]=(0,a.Lk)("label",null,"Name",-1)),(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":t[7]||(t[7]=e=>ve.newMember.name=e),type:"text",class:"form-input",required:"",placeholder:"Enter member name"},null,512),[[i.Jo,ve.newMember.name]])]),(0,a.Lk)("div",q,[t[31]||(t[31]=(0,a.Lk)("label",null,"Role",-1)),(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":t[8]||(t[8]=e=>ve.newMember.role=e),type:"text",class:"form-input",required:"",placeholder:"Enter member role"},null,512),[[i.Jo,ve.newMember.role]])]),(0,a.Lk)("div",z,[(0,a.Lk)("button",Y,(0,o.v_)(ve.isEditing?"Update Member":"Add Member"),1)])],32)])])):(0,a.Q3)("",!0),ve.showTasksModal?((0,a.uX)(),(0,a.CE)("div",j,[(0,a.Lk)("div",G,[(0,a.Lk)("span",{class:"close",onClick:t[10]||(t[10]=(...e)=>Le.closeTasksModal&&Le.closeTasksModal(...e))},"×"),(0,a.Lk)("div",H,[(0,a.Lk)("div",Z,[(0,a.Lk)("div",ee,(0,o.v_)(ve.selectedMember?.name.split(" ").map((e=>e[0])).join("")),1),(0,a.Lk)("div",te,[(0,a.Lk)("h2",null,(0,o.v_)(ve.selectedMember?.name),1),(0,a.Lk)("span",se,(0,o.v_)(ve.selectedMember?.role),1)])]),(0,a.Lk)("div",ae,[t[32]||(t[32]=(0,a.Lk)("span",{class:"stat-label"},"Total Tasks",-1)),(0,a.Lk)("span",oe,(0,o.v_)(ve.selectedMember?.tasks||0),1)])]),ve.memberTasks.length>0?((0,a.uX)(),(0,a.CE)("div",ie,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(ve.memberTasks,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e.id,class:"task-item"},[(0,a.Lk)("div",le,[(0,a.Lk)("div",ne,[(0,a.Lk)("h3",null,(0,o.v_)(e.title),1),(0,a.Lk)("span",re,"Created: "+(0,o.v_)(Le.formatDate(e.createdAt)),1)]),(0,a.Lk)("div",de,[(0,a.Lk)("span",{class:(0,o.C4)(["task-priority",e.priority])},[t[33]||(t[33]=(0,a.Lk)("i",{class:"fas fa-flag"},null,-1)),(0,a.eW)(" "+(0,o.v_)(e.priority),1)],2),(0,a.Lk)("span",{class:(0,o.C4)(["task-status",e.status])},(0,o.v_)(e.status),3)])]),(0,a.Lk)("div",ce,[(0,a.Lk)("p",null,(0,o.v_)(e.description),1)]),(0,a.Lk)("div",ue,[(0,a.Lk)("div",me,[(0,a.Lk)("span",{class:(0,o.C4)(["countdown",Le.getTimeStatus(e.dueDate)])},(0,o.v_)(Le.getTimeRemaining(e.dueDate)),3)]),(0,a.Lk)("div",ke,["completed"!==e.status?((0,a.uX)(),(0,a.CE)("button",{key:0,class:"action-btn complete",onClick:t=>Le.completeTask(e)},t[34]||(t[34]=[(0,a.Lk)("i",{class:"fas fa-check"},null,-1),(0,a.eW)(" Complete ")]),8,fe)):(0,a.Q3)("",!0),"pending"===e.status?((0,a.uX)(),(0,a.CE)("button",{key:1,class:"action-btn postpone",onClick:t=>Le.postponeTask(e)},t[35]||(t[35]=[(0,a.Lk)("i",{class:"fas fa-clock"},null,-1),(0,a.eW)(" Postpone ")]),8,pe)):(0,a.Q3)("",!0),(0,a.Lk)("button",{class:"action-btn delete",onClick:t=>Le.deleteTask(e)},t[36]||(t[36]=[(0,a.Lk)("i",{class:"fas fa-trash"},null,-1),(0,a.eW)(" Delete ")]),8,he)])])])))),128))])):((0,a.uX)(),(0,a.CE)("div",be,t[37]||(t[37]=[(0,a.Lk)("i",{class:"fas fa-clipboard-list no-tasks-icon"},null,-1),(0,a.Lk)("p",{class:"no-tasks-title"},"No Tasks Yet",-1),(0,a.Lk)("p",{class:"no-tasks-message"},"This team member hasn't been assigned any tasks.",-1)])))])])):(0,a.Q3)("",!0)],64)}s(4114),s(2489),s(116);var ve=s(7198),Le={name:"CreateTask",components:{ResponsiveSidebar:ve.A},data(){return{teamMembers:[],showModal:!1,isEditing:!1,selectedMember:null,newMember:{name:"",role:"",tasks:0},showDeleteModal:!1,memberToDelete:null,newTask:{title:"",description:"",assignedTo:"",dueDate:"",priority:"mid",status:"pending"},showTasksModal:!1,memberTasks:[],activities:[]}},created(){this.loadTeamMembers(),this.loadActivities()},methods:{loadTeamMembers(){const e=localStorage.getItem("teamMembers");this.teamMembers=e?JSON.parse(e):[]},saveTeamMembers(){localStorage.setItem("teamMembers",JSON.stringify(this.teamMembers))},showAddMemberModal(){this.isEditing=!1,this.selectedMember=null,this.newMember={name:"",role:"",tasks:0},this.showModal=!0},editMember(e){this.isEditing=!0,this.selectedMember=e,this.newMember={...e},this.showModal=!0},async deleteMember(e){const t=await Swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#ff0000",cancelButtonColor:"#1a1a1a",confirmButtonText:"Yes, delete it!",background:"#1a1a1a",color:"#ffffff"});if(t.isConfirmed){this.teamMembers=this.teamMembers.filter((t=>t.name!==e.name)),this.saveTeamMembers(),Swal.fire({icon:"success",title:"Deleted!",text:"Team member has been deleted.",background:"#1a1a1a",color:"#ffffff",confirmButtonColor:"#ff0000"});const t={type:"delete",title:`Team member ${e.name} removed`,user:"Admin",time:(new Date).toISOString(),isNew:!0};this.addActivity(t)}},handleSubmit(){if(!this.newMember.name||!this.newMember.role)return void Swal.fire({icon:"error",title:"Error!",text:"Please fill in all fields",background:"#1a1a1a",color:"#ffffff",confirmButtonColor:"#ff0000"});const e={id:Date.now(),name:this.newMember.name,role:this.newMember.role,tasks:0,createdAt:(new Date).toISOString()};if(this.isEditing&&this.selectedMember){const t=this.teamMembers.findIndex((e=>e.id===this.selectedMember.id));-1!==t&&(this.teamMembers[t]={...this.teamMembers[t],...e})}else this.teamMembers.push(e);this.saveTeamMembers(),this.closeModal(),Swal.fire({icon:"success",title:"Success!",text:"Team member updated successfully",background:"#1a1a1a",color:"#ffffff",confirmButtonColor:"#ff0000"});const t={type:"member",title:`${this.isEditing?"Updated":"Added new"} team member ${this.newMember.name}`,user:"Admin",time:(new Date).toISOString(),isNew:!0};this.addActivity(t)},async createTask(){try{const t=this.teamMembers.find((e=>e.name===this.newTask.assignedTo));if(!t)return void Swal.fire({icon:"error",title:"Error!",text:"Please select a valid team member",background:"#1a1a1a",color:"#ffffff",confirmButtonColor:"#ff0000"});const s={id:Date.now(),title:this.newTask.title,description:this.newTask.description,priority:this.newTask.priority,dueDate:this.newTask.dueDate,assignedTo:t.id,status:"pending",createdAt:(new Date).toISOString()};let a=[];try{a=JSON.parse(localStorage.getItem("allTasks"))||[]}catch(e){console.error("Error parsing existing tasks:",e),a=[]}const o=[...a,s];localStorage.setItem("allTasks",JSON.stringify(o));const i=this.teamMembers.findIndex((e=>e.id===t.id));-1!==i&&(this.teamMembers[i].tasks++,this.saveTeamMembers()),await Swal.fire({icon:"success",title:"Task Created Successfully!",html:`\n            <div style="text-align: left; color: #ffffff;">\n              <p style="margin: 10px 0;"><span style="color: #10b981;">✓</span> Title: ${s.title}</p>\n              <p style="margin: 10px 0;"><span style="color: #10b981;">✓</span> Assigned to: ${t.name}</p>\n              <p style="margin: 10px 0;"><span style="color: #10b981;">✓</span> Priority: ${s.priority}</p>\n              <p style="margin: 10px 0;"><span style="color: #10b981;">✓</span> Due date: ${new Date(s.dueDate).toLocaleDateString()}</p>\n            </div>\n          `,background:"#1a1a1a",color:"#ffffff",confirmButtonColor:"#10b981",confirmButtonText:"Done"}),this.newTask={title:"",description:"",assignedTo:"",dueDate:"",priority:"mid",status:"pending"},this.addActivity({type:"task",title:`New task "${s.title}" assigned to ${t.name}`,user:"System",time:(new Date).toISOString(),status:"pending"}),this.$emit("task-created",s)}catch(t){console.error("Error creating task:",t),Swal.fire({icon:"error",title:"Error Creating Task",text:"There was a problem creating the task. Please try again.",background:"#1a1a1a",color:"#ffffff",confirmButtonColor:"#ff0000"})}},closeModal(){this.showModal=!1,this.selectedMember=null,this.newMember={name:"",role:"",tasks:0},this.isEditing=!1},closeDeleteModal(){this.showDeleteModal=!1,this.memberToDelete=null},showMemberTasks(e){this.selectedMember=e,this.memberTasks=this.loadMemberTasks(e.id),this.memberTaskStats=this.getTaskStats(e.id),this.showTasksModal=!0},loadMemberTasks(e){try{const t=JSON.parse(localStorage.getItem("allTasks"))||[],s=t.filter((t=>Number(t.assignedTo)===Number(e)));return console.log(`Loading tasks for member ${e}:`,s),s.sort(((e,t)=>new Date(t.createdAt)-new Date(e.createdAt)))}catch(t){return console.error("Error loading member tasks:",t),[]}},closeTasksModal(){this.showTasksModal=!1,this.selectedMember=null,this.memberTasks=[]},formatDate(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})},getTimeRemaining(e){const t=new Date,s=new Date(e),a=s-t;if(a<0){const e=Math.abs(a),t=Math.floor(e/864e5),s=Math.floor(e%864e5/36e5),o=Math.floor(e%36e5/6e4);return`${t}d ${s}h ${o}m overdue`}const o=Math.floor(a/864e5),i=Math.floor(a%864e5/36e5),l=Math.floor(a%36e5/6e4);return 0===o&&0===i&&0===l?"Due now":0===o?`${i}h ${l}m remaining`:`${o}d ${i}h ${l}m remaining`},getTimeStatus(e){const t=new Date,s=new Date(e),a=s-t,o=Math.floor(a/864e5);return a<0?"overdue":o<=1?"urgent":o<=3?"warning":"normal"},async completeTask(e){const t=await Swal.fire({title:"Complete Task",text:"Are you sure you want to mark this task as completed?",icon:"question",showCancelButton:!0,confirmButtonColor:"#10b981",cancelButtonColor:"#1a1a1a",confirmButtonText:"Yes, complete it!",background:"#1a1a1a",color:"#ffffff"});t.isConfirmed&&(this.updateTaskStatus(e,"completed"),await Swal.fire({icon:"success",title:"Task Completed!",text:"The task has been marked as completed.",background:"#1a1a1a",color:"#ffffff",confirmButtonColor:"#10b981"}))},async postponeTask(e){const{value:t}=await Swal.fire({title:"Postpone Task",html:'\n          <div class="postpone-form">\n            <input type="datetime-local" id="postpone-date" class="swal2-input" style="background: #1a1a1a; color: #fff; border: 1px solid rgba(141, 0, 0, 0.519);">\n          </div>\n        ',background:"#1a1a1a",color:"#ffffff",confirmButtonColor:"#f59e0b",showCancelButton:!0,cancelButtonColor:"#1a1a1a",preConfirm:()=>{const e=document.getElementById("postpone-date").value;return e||(Swal.showValidationMessage("Please select a date and time"),!1)}});if(t){const s=new Date(t);e.dueDate=s.toISOString(),e.status="postponed",this.updateTaskStatus(e,"postponed"),await Swal.fire({icon:"success",title:"Task Postponed!",text:`The task has been postponed to ${this.formatDate(s)}`,background:"#1a1a1a",color:"#ffffff",confirmButtonColor:"#f59e0b"})}},async cancelTask(e){const t=await Swal.fire({title:"Cancel Task",text:"Are you sure you want to cancel this task?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#ef4444",cancelButtonColor:"#1a1a1a",confirmButtonText:"Yes, cancel it!",background:"#1a1a1a",color:"#ffffff"});if(t.isConfirmed){this.updateTaskStatus(e,"cancelled");const t=this.teamMembers.findIndex((t=>t.name===e.assignedTo));-1!==t&&(this.teamMembers[t].tasks--,this.saveTeamMembers()),await Swal.fire({icon:"success",title:"Task Cancelled!",text:"The task has been cancelled.",background:"#1a1a1a",color:"#ffffff",confirmButtonColor:"#ef4444"})}},async deleteTask(e){try{const t=await Swal.fire({title:"Delete Task",text:"Are you sure you want to delete this task? This action cannot be undone.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#ef4444",cancelButtonColor:"#1a1a1a",confirmButtonText:"Yes, delete it!",background:"#1a1a1a",color:"#ffffff"});if(t.isConfirmed){const t=JSON.parse(localStorage.getItem("allTasks")||"[]"),s=t.filter((t=>t.id!==e.id));localStorage.setItem("allTasks",JSON.stringify(s));const a=JSON.parse(localStorage.getItem("teamMembers")||"[]"),o=a.findIndex((t=>t.id===e.assignedTo));-1!==o&&(a[o].tasks=Math.max(0,a[o].tasks-1),localStorage.setItem("teamMembers",JSON.stringify(a)),this.teamMembers=a,this.selectedMember&&this.selectedMember.id===e.assignedTo&&(this.selectedMember=a[o])),this.memberTasks=this.memberTasks.filter((t=>t.id!==e.id)),this.addActivity({type:"delete",title:`Task "${e.title}" deleted`,user:"System",time:(new Date).toISOString(),status:"deleted"}),await Swal.fire({icon:"success",title:"Task Deleted!",text:"The task has been permanently deleted.",background:"#1a1a1a",color:"#ffffff",confirmButtonColor:"#ef4444"})}}catch(t){console.error("Error deleting task:",t),Swal.fire({icon:"error",title:"Error",text:"Failed to delete task. Please try again.",background:"#1a1a1a",color:"#ffffff",confirmButtonColor:"#ff0000"})}},updateTaskStatus(e,t){try{const s=JSON.parse(localStorage.getItem("allTasks")||"[]"),a=s.findIndex((t=>t.id===e.id));if(-1!==a){s[a]={...e,status:t},localStorage.setItem("allTasks",JSON.stringify(s));const o=this.memberTasks.findIndex((t=>t.id===e.id));-1!==o&&(this.memberTasks[o]={...e,status:t});const i=this.teamMembers.find((t=>t.id===e.assignedTo));if(i){const e=this.getTaskStats(i.id);this.$nextTick((()=>{this.loadTeamMembers(),this.memberTaskStats=e}))}const l={type:"task",title:`Task "${e.title}" ${t}`,status:t,user:"Admin",time:(new Date).toISOString()};this.addActivity(l)}}catch(s){console.error("Error updating task status:",s),Swal.fire({icon:"error",title:"Error",text:"Failed to update task status. Please try again.",background:"#1a1a1a",color:"#ffffff",confirmButtonColor:"#ff0000"})}},getTaskStats(e){try{const t=this.loadMemberTasks(e);return{completed:t.filter((e=>"completed"===e.status)).length,pending:t.filter((e=>"pending"===e.status)).length,postponed:t.filter((e=>"postponed"===e.status)).length,total:t.length}}catch(t){return console.error("Error getting task stats:",t),{completed:0,pending:0,postponed:0,total:0}}},getMemberStatus(e){try{const t=this.loadMemberTasks(e.id),s=t.filter((e=>"pending"===e.status)).length;return s>0?{class:"busy",text:"Busy"}:{class:"available",text:"Available"}}catch(t){return console.error("Error getting member status:",t),{class:"available",text:"Available"}}},loadActivities(){const e=JSON.parse(localStorage.getItem("activities")||"[]");this.activities=e},getActivityIcon(e){const t={task:"task",member:"member",status:"status",edit:"update",delete:"alert"};return t[e]||"info"},getActivityIconClass(e){const t={task:"fas fa-tasks",member:"fas fa-user",status:"fas fa-info-circle",edit:"fas fa-edit",delete:"fas fa-trash"};return t[e]||"fas fa-info"},formatTimeAgo(e){const t=new Date,s=new Date(e),a=Math.floor((t-s)/1e3);return a<60?"just now":a<3600?`${Math.floor(a/60)}m ago`:a<86400?`${Math.floor(a/3600)}h ago`:a<604800?`${Math.floor(a/86400)}d ago`:this.formatDate(e)},addActivity(e){try{const t={...e,title:this.formatActivityTitle(e),user:"Admin"===e.user?"System":e.user,time:(new Date).toISOString()},s=JSON.parse(localStorage.getItem("activities")||"[]");s.unshift(t),s.length>15&&(s.length=15),localStorage.setItem("activities",JSON.stringify(s)),this.loadActivities()}catch(t){console.error("Error in addActivity:",t)}},formatActivityTitle(e){switch(e.type){case"task":return"completed"===e.status?`Task Completed: ${e.title}`:"postponed"===e.status?`Task Postponed: ${e.title}`:`New Task: ${e.title}`;case"member":return`Team Update: ${e.title}`;case"delete":return`Removed: ${e.title}`;default:return e.title}},isPendingTask(e){return"task"===e.type&&(!e.status||"pending"===e.status)},getTaskStatusClass(e){return"delete"===e.type?"status-deleted":"completed"===e.status?"status-completed":"postponed"===e.status?"status-postponed":e.status&&"pending"!==e.status?"":"status-pending"},getTaskStatusText(e){return"delete"===e.type?"Deleted":e.status&&"pending"!==e.status?e.status.charAt(0).toUpperCase()+e.status.slice(1):"Pending"}}},we=s(6262);const Te=(0,we.A)(Le,[["render",ge],["__scopeId","data-v-4ebc822a"]]);var Ce=Te}}]);
//# sourceMappingURL=426.a2c0dc4d.js.map