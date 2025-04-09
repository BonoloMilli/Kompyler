"use strict";(self["webpackChunkskillspot"]=self["webpackChunkskillspot"]||[]).push([[200],{116:function(a,t,e){var s=e(6518),n=e(2652),r=e(9306),i=e(8551),l=e(1767);s({target:"Iterator",proto:!0,real:!0},{find:function(a){i(this),r(a);var t=l(this),e=0;return n(t,(function(t,s){if(a(t,e++))return s(t)}),{IS_RECORD:!0,INTERRUPTED:!0}).result}})},713:function(a,t,e){var s=e(9565),n=e(9306),r=e(8551),i=e(1767),l=e(9462),o=e(6319),d=l((function(){var a=this.iterator,t=r(s(this.next,a)),e=this.done=!!t.done;if(!e)return o(a,this.mapper,[t.value,this.counter++],!0)}));a.exports=function(a){return r(this),n(a),new d(i(this),{mapper:a})}},1701:function(a,t,e){var s=e(6518),n=e(713),r=e(6395);s({target:"Iterator",proto:!0,real:!0,forced:r},{map:n})},2489:function(a,t,e){var s=e(6518),n=e(9565),r=e(9306),i=e(8551),l=e(1767),o=e(9462),d=e(6319),c=e(6395),v=o((function(){var a,t,e,s=this.iterator,r=this.predicate,l=this.next;while(1){if(a=i(n(l,s)),t=this.done=!!a.done,t)return;if(e=a.value,d(s,r,[e,this.counter++],!0))return e}}));s({target:"Iterator",proto:!0,real:!0,forced:c},{filter:function(a){return i(this),r(a),new v(l(this),{predicate:a})}})},2529:function(a){a.exports=function(a,t){return{value:a,done:t}}},2760:function(a,t,e){function s(a){return{all:a=a||new Map,on:function(t,e){var s=a.get(t);s?s.push(e):a.set(t,[e])},off:function(t,e){var s=a.get(t);s&&(e?s.splice(s.indexOf(e)>>>0,1):a.set(t,[]))},emit:function(t,e){var s=a.get(t);s&&s.slice().map((function(a){a(e)})),(s=a.get("*"))&&s.slice().map((function(a){a(t,e)}))}}}e.d(t,{A:function(){return d}});var n=e(6806);const r=s();function i(a){const t={task:"info",member:"success",comment:"info",alert:"warning",tip:"info",update:"success",evaluation:"info",info:"info",system:"info"};return t[a]||"info"}function l(a){const t={task:"Task Activity",member:"Team Update",comment:"New Comment",alert:"System Alert",tip:"Pro Tip",update:"System Update",evaluation:"Evaluation Update",info:"System Info"};return t[a]||"New Activity"}function o(a){const t={info:"System Information",tip:"Productivity Tip",alert:"Important Alert",update:"System Update"};return t[a]||"System Notification"}r.on("task-updated",(a=>{n.x.addNotification({id:Date.now(),type:"info",title:"Task Updated",message:`Task "${a?.title||"Unknown"}" has been updated`})})),r.on("member-deleted",(a=>{n.x.addNotification({id:Date.now(),type:"warning",title:"Team Member Removed",message:`Team member and ${a.taskCount} tasks have been removed`})})),r.on("activity-created",(a=>{n.x.addNotification({id:Date.now(),type:i(a.type),title:l(a.type),message:a.title})})),r.on("system-activity",(a=>{n.x.addNotification({id:Date.now(),type:a.type||"info",title:o(a.type),message:a.title})}));var d=r},5084:function(a,t,e){e.d(t,{A:function(){return I}});var s=e(641),n=e(33),r=e(3751),i=e(75);const l={class:"sidebar-header"},o={class:"header-content"},d={src:i,alt:"Logo",class:"sidebar-logo"},c={class:"sidebar-content"},v={class:"nav-section"},u={class:"nav-menu"},k=["onClick"],f={class:"nav-icon"},p={class:"nav-text"},m={key:0,class:"tooltip"},h={class:"sidebar-footer"},g={key:0,class:"tooltip"},L={class:"mobile-nav"},b=["onClick"],T={class:"mobile-nav-icon"},y={class:"mobile-nav-text"};function C(a,t,e,i,C,w){return(0,s.uX)(),(0,s.CE)("div",null,[(0,s.bo)((0,s.Lk)("div",{class:(0,n.C4)(["sidebar",{collapsed:C.isCollapsed,"dark-sidebar":C.isDarkMode}])},[(0,s.Lk)("div",l,[(0,s.Lk)("div",o,[(0,s.bo)((0,s.Lk)("img",d,null,512),[[r.aG,!C.isCollapsed]]),(0,s.Lk)("button",{class:"toggle-button",onClick:t[0]||(t[0]=(...a)=>w.toggleSidebar&&w.toggleSidebar(...a)),"aria-label":"Toggle Sidebar"},[(0,s.Lk)("i",{class:(0,n.C4)(["fas",C.isCollapsed?"fa-chevron-right":"fa-chevron-left"])},null,2)])])]),(0,s.Lk)("div",c,[(0,s.Lk)("div",v,[(0,s.Lk)("nav",u,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(C.navItems,((a,t)=>((0,s.uX)(),(0,s.CE)("div",{key:t,class:(0,n.C4)(["nav-item",{active:C.currentRoute===a.route}]),onClick:t=>w.navigateTo(a.route)},[(0,s.Lk)("div",f,[(0,s.Lk)("i",{class:(0,n.C4)(a.icon)},null,2)]),(0,s.Lk)("span",p,(0,n.v_)(a.title),1),C.isCollapsed?((0,s.uX)(),(0,s.CE)("div",m,(0,n.v_)(a.title),1)):(0,s.Q3)("",!0)],10,k)))),128))])])]),(0,s.Lk)("div",h,[(0,s.Lk)("div",{class:"nav-item",onClick:t[1]||(t[1]=(...a)=>w.logout&&w.logout(...a))},[t[2]||(t[2]=(0,s.Lk)("div",{class:"nav-icon"},[(0,s.Lk)("i",{class:"fas fa-sign-out-alt"})],-1)),t[3]||(t[3]=(0,s.Lk)("span",{class:"nav-text"},"Logout",-1)),C.isCollapsed?((0,s.uX)(),(0,s.CE)("div",g,"Logout")):(0,s.Q3)("",!0)])])],2),[[r.aG,!C.isMobile]]),(0,s.bo)((0,s.Lk)("div",L,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(C.navItems,((a,t)=>((0,s.uX)(),(0,s.CE)("div",{key:t,class:(0,n.C4)(["mobile-nav-item",{active:C.currentRoute===a.route}]),onClick:t=>w.navigateTo(a.route)},[(0,s.Lk)("div",T,[(0,s.Lk)("i",{class:(0,n.C4)(a.icon)},null,2)]),(0,s.Lk)("span",y,(0,n.v_)(a.title),1)],10,b)))),128))],512),[[r.aG,C.isMobile]]),(0,s.RG)(a.$slots,"default",{},void 0,!0)])}e(4114),e(8111),e(7588);var w={name:"ResponsiveSidebar",data(){return{isCollapsed:!1,isDarkMode:!1,isMobile:!1,currentRoute:"",navItems:[{title:"Dashboard",icon:"fas fa-tachometer-alt",route:"/"},{title:"Create Task",icon:"fas fa-tasks",route:"/create-task"},{title:"Evaluate",icon:"fas fa-users",route:"/evaluate-task"},{title:"View",icon:"fas fa-eye",route:"/view-evaluations"},{title:"Export",icon:"fa-solid fa-download",route:"/export"}]}},mounted(){this.checkScreenSize(),window.addEventListener("resize",this.checkScreenSize),this.currentRoute=this.$route.path,this.$router.afterEach((a=>{this.currentRoute=a.path})),document.querySelectorAll(".nav-item").forEach((a=>{a.addEventListener("mouseenter",(a=>{const t=a.target.getBoundingClientRect();a.target.style.setProperty("--tooltip-y",`${t.top+t.height/2}px`)}))}))},beforeDestroy(){window.removeEventListener("resize",this.checkScreenSize)},methods:{toggleSidebar(){this.isCollapsed=!this.isCollapsed,localStorage.setItem("sidebarCollapsed",this.isCollapsed)},checkScreenSize(){this.isMobile=window.innerWidth<768;const a=localStorage.getItem("sidebarCollapsed");this.isCollapsed=null!==a?"true"===a:window.innerWidth<992&&window.innerWidth>=768},navigateTo(a){this.$router.push(a)},logout(){console.log("Logging out...")}}},S=e(6262);const D=(0,S.A)(w,[["render",C],["__scopeId","data-v-22aa2e71"]]);var I=D},6279:function(a,t,e){var s=e(6840);a.exports=function(a,t,e){for(var n in t)s(a,n,t[n],e);return a}},6319:function(a,t,e){var s=e(8551),n=e(9539);a.exports=function(a,t,e,r){try{return r?t(s(e)[0],e[1]):t(e)}catch(i){n(a,"throw",i)}}},7588:function(a,t,e){var s=e(6518),n=e(2652),r=e(9306),i=e(8551),l=e(1767);s({target:"Iterator",proto:!0,real:!0},{forEach:function(a){i(this),r(a);var t=l(this),e=0;n(t,(function(t){a(t,e++)}),{IS_RECORD:!0})}})},8200:function(a,t,e){e.r(t),e.d(t,{default:function(){return Ca}});var s=e(641),n=e(33);const r={class:"dashboard-container"},i={class:"main-content"},l={class:"dashboard-header"},o={class:"header-right"},d={class:"clock-wrapper"},c={class:"analog-clock"},v={class:"date"},u={class:"dashboard-grid"},k={class:"card overview-card"},f={class:"card-content"},p={class:"chart-container"},m={ref:"performanceChart"},h={class:"card balance-card"},g={class:"card-content"},L={class:"stats-grid"},b={class:"stat-item"},T={class:"stat-info"},y={class:"stat-value"},C={class:"stat-item"},w={class:"stat-info"},S={class:"stat-value"},D={class:"stat-item"},I={class:"stat-info"},M={class:"stat-value"},_={class:"stat-item"},E={class:"stat-info"},A={class:"stat-value"},x={class:"stat-item team"},N={class:"stat-info"},R={class:"stat-value"},P={class:"member-performance"},H={class:"performance-header"},O={class:"performance-stats"},X={class:"performing"},F={class:"struggling"},U={class:"performance-bar"},$={class:"card in-progress-card"},J={class:"card-header"},W={key:0,class:"task-count"},z={class:"card-content"},G={key:0,class:"task-list"},K={class:"task-header"},Q={class:"task-title-row"},V={class:"task-title"},q={class:"task-description"},B={class:"task-footer"},j={class:"task-deadline"},Y={class:"task-assignee"},Z={class:"assignee-avatar"},aa=["onClick"],ta={key:1,class:"no-tasks"},ea={class:"team-performance-section"},sa={class:"team-table"},na={class:"rank-cell"},ra={class:"member-info"},ia={class:"member-details"},la={class:"member-name"},oa={class:"member-role"},da={class:"completion-info"},ca={class:"completion-count"},va={class:"total-tasks"},ua={class:"rate-badge success"},ka={class:"rate-badge ontime"},fa={class:"performance-indicator"},pa={class:"performance-bar"},ma={class:"performance-value"};function ha(a,t,e,ha,ga,La){const ba=(0,s.g2)("ResponsiveSidebar");return(0,s.uX)(),(0,s.CE)("div",r,[(0,s.bF)(ba),(0,s.Lk)("div",i,[(0,s.Lk)("div",l,[t[1]||(t[1]=(0,s.Lk)("div",{class:"header-left"},[(0,s.Lk)("h1",{class:"dashboard-title"},"Overview"),(0,s.Lk)("p",{class:"access-info"},"Effortlessly manage, track, and evaluate tasks with streamlined performance insights on a sleek, user-friendly dashboard.")],-1)),(0,s.Lk)("div",o,[(0,s.Lk)("div",d,[(0,s.Lk)("div",c,[(0,s.Lk)("div",{class:"hand hour-hand",style:(0,n.Tr)(ga.hourHandStyle)},null,4),(0,s.Lk)("div",{class:"hand minute-hand",style:(0,n.Tr)(ga.minuteHandStyle)},null,4),(0,s.Lk)("div",{class:"hand second-hand",style:(0,n.Tr)(ga.secondHandStyle)},null,4),t[0]||(t[0]=(0,s.Lk)("div",{class:"center-dot"},null,-1))]),(0,s.Lk)("div",v,(0,n.v_)(ga.currentDate),1)])])]),(0,s.Lk)("div",u,[(0,s.Lk)("div",k,[t[4]||(t[4]=(0,s.Lk)("div",{class:"card-header"},[(0,s.Lk)("h2",null,"Overview"),(0,s.Lk)("div",{class:"info-icon"},[(0,s.Lk)("i",{class:"fas fa-circle-info"})])],-1)),(0,s.Lk)("div",f,[t[2]||(t[2]=(0,s.Fv)('<div class="metrics" data-v-d50f208c><div class="metric" data-v-d50f208c><span class="metric-label" data-v-d50f208c>Max records</span><span class="metric-value" data-v-d50f208c>2 times increase to the last month</span></div><div class="metric" data-v-d50f208c><span class="metric-label" data-v-d50f208c>Comparative rates</span><span class="metric-value" data-v-d50f208c>+ 12.83 %</span></div></div><div class="time-filters" data-v-d50f208c><button class="time-btn" data-v-d50f208c>24h</button><button class="time-btn" data-v-d50f208c>Week</button><button class="time-btn active" data-v-d50f208c>Month</button></div>',2)),(0,s.Lk)("div",p,[(0,s.Lk)("canvas",m,null,512)]),t[3]||(t[3]=(0,s.Fv)('<div class="chart-footer" data-v-d50f208c><div class="chart-dates" data-v-d50f208c><span data-v-d50f208c>Mar 8</span><span data-v-d50f208c>Mar 18</span><span data-v-d50f208c>Mar 28</span><span data-v-d50f208c>Apr 8</span></div><div class="growth-indicator" data-v-d50f208c><span class="growth-value" data-v-d50f208c>+ 19.23 %</span><div class="update-info" data-v-d50f208c><span data-v-d50f208c>Last updated</span><span data-v-d50f208c>Today, 06:49 AM</span></div></div></div>',1))])]),(0,s.Lk)("div",h,[t[18]||(t[18]=(0,s.Lk)("div",{class:"card-header"},[(0,s.Lk)("div",null,[(0,s.Lk)("h2",null,"Task Statistics"),(0,s.Lk)("p",{class:"subtitle"},"Overall task and team performance metrics")]),(0,s.Lk)("div",{class:"refresh-btn"},[(0,s.Lk)("i",{class:"fas fa-sync-alt"})])],-1)),(0,s.Lk)("div",g,[(0,s.Lk)("div",L,[(0,s.Lk)("div",b,[t[6]||(t[6]=(0,s.Lk)("div",{class:"stat-icon total"},[(0,s.Lk)("i",{class:"fas fa-tasks"})],-1)),(0,s.Lk)("div",T,[t[5]||(t[5]=(0,s.Lk)("span",{class:"stat-label"},"Total Tasks",-1)),(0,s.Lk)("span",y,[(0,s.Lk)("span",{ref:"totalTasks"},(0,n.v_)(ga.stats.totalTasks),513)])])]),(0,s.Lk)("div",C,[t[8]||(t[8]=(0,s.Lk)("div",{class:"stat-icon pending"},[(0,s.Lk)("i",{class:"fas fa-clock"})],-1)),(0,s.Lk)("div",w,[t[7]||(t[7]=(0,s.Lk)("span",{class:"stat-label"},"Pending",-1)),(0,s.Lk)("span",S,[(0,s.Lk)("span",{ref:"pendingTasks"},(0,n.v_)(ga.stats.pendingTasks),513)])])]),(0,s.Lk)("div",D,[t[10]||(t[10]=(0,s.Lk)("div",{class:"stat-icon passed"},[(0,s.Lk)("i",{class:"fas fa-check-circle"})],-1)),(0,s.Lk)("div",I,[t[9]||(t[9]=(0,s.Lk)("span",{class:"stat-label"},"Completed",-1)),(0,s.Lk)("span",M,[(0,s.Lk)("span",{ref:"passedTasks"},(0,n.v_)(ga.stats.passedTasks),513)])])]),(0,s.Lk)("div",_,[t[12]||(t[12]=(0,s.Lk)("div",{class:"stat-icon failed"},[(0,s.Lk)("i",{class:"fas fa-times-circle"})],-1)),(0,s.Lk)("div",E,[t[11]||(t[11]=(0,s.Lk)("span",{class:"stat-label"},"Postponed",-1)),(0,s.Lk)("span",A,[(0,s.Lk)("span",{ref:"failedTasks"},(0,n.v_)(ga.stats.failedTasks),513)])])]),(0,s.Lk)("div",x,[t[14]||(t[14]=(0,s.Lk)("div",{class:"stat-icon team"},[(0,s.Lk)("i",{class:"fas fa-users"})],-1)),(0,s.Lk)("div",N,[t[13]||(t[13]=(0,s.Lk)("span",{class:"stat-label"},"Team Members",-1)),(0,s.Lk)("span",R,[(0,s.Lk)("span",{ref:"teamMembers"},(0,n.v_)(ga.stats.teamMembers),513)])])])]),(0,s.Lk)("div",P,[(0,s.Lk)("div",H,[t[17]||(t[17]=(0,s.Lk)("span",null,"Team Performance",-1)),(0,s.Lk)("div",O,[(0,s.Lk)("span",X,[t[15]||(t[15]=(0,s.Lk)("i",{class:"fas fa-arrow-up"},null,-1)),(0,s.eW)(" "+(0,n.v_)(La.passedMembers),1)]),(0,s.Lk)("span",F,[t[16]||(t[16]=(0,s.Lk)("i",{class:"fas fa-arrow-down"},null,-1)),(0,s.eW)(" "+(0,n.v_)(La.failingMembers),1)])])]),(0,s.Lk)("div",U,[(0,s.Lk)("div",{class:"progress",style:(0,n.Tr)({width:La.performanceRate+"%"})},null,4)])])])]),(0,s.Lk)("div",$,[(0,s.Lk)("div",J,[t[19]||(t[19]=(0,s.Lk)("h2",null,"In Progress Tasks",-1)),La.inProgressTasks.length>0?((0,s.uX)(),(0,s.CE)("div",W,(0,n.v_)(La.inProgressTasks.length)+" Tasks",1)):(0,s.Q3)("",!0)]),(0,s.Lk)("div",z,[La.inProgressTasks.length>0?((0,s.uX)(),(0,s.CE)("div",G,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(La.inProgressTasks,(a=>((0,s.uX)(),(0,s.CE)("div",{key:a.id,class:"task-item"},[(0,s.Lk)("div",K,[(0,s.Lk)("div",Q,[(0,s.Lk)("div",V,(0,n.v_)(a.title),1),(0,s.Lk)("div",{class:(0,n.C4)(["task-priority",a.priority.toLowerCase()])},(0,n.v_)(a.priority),3)])]),(0,s.Lk)("p",q,(0,n.v_)(a.description),1),(0,s.Lk)("div",B,[(0,s.Lk)("div",j,[t[20]||(t[20]=(0,s.Lk)("i",{class:"fas fa-clock"},null,-1)),(0,s.Lk)("span",null,"Due "+(0,n.v_)(La.formatDate(a.dueDate)),1)]),(0,s.Lk)("div",Y,[(0,s.Lk)("div",Z,(0,n.v_)(La.getAssigneeInitials(a.assignedTo)),1),(0,s.Lk)("span",null,(0,n.v_)(La.getAssigneeName(a.assignedTo)),1)]),(0,s.Lk)("button",{onClick:t=>La.deleteTask(a.id),class:"delete-btn"},t[21]||(t[21]=[(0,s.Lk)("i",{class:"fas fa-trash-alt"},null,-1)]),8,aa)])])))),128))])):((0,s.uX)(),(0,s.CE)("div",ta,t[22]||(t[22]=[(0,s.Lk)("i",{class:"fas fa-tasks no-tasks-icon"},null,-1),(0,s.Lk)("p",null,"No tasks in progress",-1),(0,s.Lk)("p",{class:"no-tasks-hint"},"Tasks will appear here when they are created",-1)])))])])]),(0,s.Lk)("div",ea,[t[24]||(t[24]=(0,s.Lk)("div",{class:"section-header"},[(0,s.Lk)("h2",null,"Leading Team Members"),(0,s.Lk)("div",{class:"view-controls"},[(0,s.Lk)("button",{class:"period-btn active"},"This Month"),(0,s.Lk)("button",{class:"period-btn"},"All Time")])],-1)),(0,s.Lk)("div",sa,[(0,s.Lk)("table",null,[t[23]||(t[23]=(0,s.Lk)("thead",null,[(0,s.Lk)("tr",null,[(0,s.Lk)("th",null,"Rank"),(0,s.Lk)("th",null,"Team Member"),(0,s.Lk)("th",null,"Department"),(0,s.Lk)("th",null,"Tasks Completed"),(0,s.Lk)("th",null,"Success Rate"),(0,s.Lk)("th",null,"On-Time Rate"),(0,s.Lk)("th",null,"Performance"),(0,s.Lk)("th",null,"Status")])],-1)),(0,s.Lk)("tbody",null,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(a.leadingMembers,(t=>((0,s.uX)(),(0,s.CE)("tr",{key:t.id},[(0,s.Lk)("td",na,[(0,s.Lk)("span",{class:(0,n.C4)(["rank",{"top-three":t.rank<=3}])},"#"+(0,n.v_)(t.rank),3)]),(0,s.Lk)("td",null,[(0,s.Lk)("div",ra,[(0,s.Lk)("div",{class:"member-avatar",style:(0,n.Tr)({backgroundColor:t.avatarColor})},(0,n.v_)(t.name.charAt(0)),5),(0,s.Lk)("div",ia,[(0,s.Lk)("span",la,(0,n.v_)(t.name),1),(0,s.Lk)("span",oa,(0,n.v_)(t.role),1)])])]),(0,s.Lk)("td",null,(0,n.v_)(t.department),1),(0,s.Lk)("td",null,[(0,s.Lk)("div",da,[(0,s.Lk)("span",ca,(0,n.v_)(t.tasksCompleted),1),(0,s.Lk)("span",va,"/ "+(0,n.v_)(t.totalTasks),1)])]),(0,s.Lk)("td",null,[(0,s.Lk)("div",ua,(0,n.v_)(t.successRate)+"%",1)]),(0,s.Lk)("td",null,[(0,s.Lk)("div",ka,(0,n.v_)(t.onTimeRate)+"%",1)]),(0,s.Lk)("td",null,[(0,s.Lk)("div",fa,[(0,s.Lk)("div",pa,[(0,s.Lk)("div",{class:"performance-fill",style:(0,n.Tr)({width:t.performance+"%",backgroundColor:a.getPerformanceColor(t.performance)})},null,4)]),(0,s.Lk)("span",ma,(0,n.v_)(t.performance)+"%",1)])]),(0,s.Lk)("td",null,[(0,s.Lk)("span",{class:(0,n.C4)(["status-badge",t.status.toLowerCase()])},(0,n.v_)(t.status),3)])])))),128))])])])]),t[25]||(t[25]=(0,s.Fv)('<div class="top-campaigns-section" data-v-d50f208c><div class="section-header" data-v-d50f208c><h2 data-v-d50f208c>My Top Campaigns</h2><div class="pagination" data-v-d50f208c><span data-v-d50f208c>02 of 5</span><div class="pagination-controls" data-v-d50f208c><button data-v-d50f208c><i class="fas fa-chevron-left" data-v-d50f208c></i></button><button data-v-d50f208c><i class="fas fa-chevron-right" data-v-d50f208c></i></button></div></div></div><div class="campaign-cards" data-v-d50f208c><div class="campaign-card" data-v-d50f208c><div class="card-header" data-v-d50f208c><span class="bullet" data-v-d50f208c>•</span><span class="campaign-name" data-v-d50f208c>Pela Design</span><button class="menu-btn" data-v-d50f208c><i class="fas fa-ellipsis" data-v-d50f208c></i></button></div><div class="card-content" data-v-d50f208c><div class="campaign-metrics" data-v-d50f208c><div class="followers-count" data-v-d50f208c>3,074 Followers</div><div class="growth" data-v-d50f208c>+ 9.21</div></div><div class="followers-avatars" data-v-d50f208c></div></div></div><div class="campaign-card" data-v-d50f208c><div class="card-header" data-v-d50f208c><span class="bullet" data-v-d50f208c>•</span><span class="campaign-name" data-v-d50f208c>Elevar Ads</span><button class="menu-btn" data-v-d50f208c><i class="fas fa-ellipsis" data-v-d50f208c></i></button></div><div class="card-content" data-v-d50f208c><div class="campaign-metrics" data-v-d50f208c><div class="followers-count" data-v-d50f208c>2,931 Followers</div><div class="growth" data-v-d50f208c>+ 7.59</div></div><div class="followers-avatars" data-v-d50f208c></div></div></div></div></div>',1))])])}e(8111),e(2489),e(116),e(1701);var ga=e(5084),La=e(2760),ba={name:"Dashboard",components:{ResponsiveSidebar:ga.A},data(){return{hourHandStyle:"",minuteHandStyle:"",secondHandStyle:"",currentDate:"",timer:null,stats:{totalTasks:0,pendingTasks:0,passedTasks:0,failedTasks:0,teamMembers:0}}},computed:{inProgressTasks(){try{const a=JSON.parse(localStorage.getItem("allTasks"))||[],t=JSON.parse(localStorage.getItem("teamMembers"))||[],e=t.map((a=>a.id)),s=a.filter((a=>{const t=e.includes(Number(a.assignedTo));return"pending"===a.status&&t}));return console.log("All team members pending tasks:",s),s.sort(((a,t)=>new Date(t.dueDate)-new Date(a.dueDate)))}catch(a){return console.error("Error loading tasks:",a),[]}},taskStats(){try{const a=JSON.parse(localStorage.getItem("allTasks"))||[],t=JSON.parse(localStorage.getItem("teamMembers"))||[],e=a.filter((a=>{const e=t.map((a=>a.id)).includes(Number(a.assignedTo));return e}));console.log("Dashboard - Member tasks:",e);const s={totalTasks:e.length,pendingTasks:e.filter((a=>"pending"===a.status)).length,passedTasks:e.filter((a=>"completed"===a.status)).length,failedTasks:e.filter((a=>"postponed"===a.status)).length,teamMembers:t.length};return this.stats=s,s}catch(a){return console.error("Error calculating stats:",a),{totalTasks:0,pendingTasks:0,passedTasks:0,failedTasks:0,teamMembers:0}}},passedMembers(){return this.teamMembers.filter((a=>{const t=this.getTaskStats(a.id);return t.completed/(t.total||1)>.5})).length},failingMembers(){return this.teamMembers.length-this.passedMembers},performanceRate(){return this.passedMembers/(this.teamMembers.length||1)*100}},methods:{updateClock(){const a=new Date,t=a.getHours()%12,e=a.getMinutes(),s=a.getSeconds(),n=30*t+e/2,r=6*e,i=6*s;this.hourHandStyle=`transform: rotate(${n}deg)`,this.minuteHandStyle=`transform: rotate(${r}deg)`,this.secondHandStyle=`transform: rotate(${i}deg)`,this.currentDate=a.toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric"})},deleteTask(a){try{const t=JSON.parse(localStorage.getItem("allTasks"))||[],e=t.filter((t=>t.id!==a));localStorage.setItem("allTasks",JSON.stringify(e)),this.refreshData(),La.A.emit("task-deleted",a)}catch(t){console.error("Error deleting task:",t)}},refreshData(){this.$nextTick((()=>{this.stats=this.taskStats,this.inProgressTasks=this.getInProgressTasks()}))},getInProgressTasks(){try{const a=JSON.parse(localStorage.getItem("allTasks"))||[];return a.filter((a=>"pending"===a.status)).sort(((a,t)=>new Date(t.dueDate)-new Date(a.dueDate)))}catch(a){return console.error("Error loading tasks:",a),[]}},handleTaskCreated(){console.log("New task created, refreshing dashboard stats"),this.refreshData()},getAssigneeName(a){if(!a)return"Unassigned";const t=JSON.parse(localStorage.getItem("teamMembers"))||[],e=t.find((t=>t.id===Number(a)));return e?e.name:"Unknown"},getAssigneeInitials(a){if(!a)return"?";const t=JSON.parse(localStorage.getItem("teamMembers"))||[],e=t.find((t=>t.id===Number(a)));return e?e.name.charAt(0):"?"},formatDate(a){if(!a)return"No date";const t=new Date(a),e=new Date;return t.toDateString()===e.toDateString()?"Today":t.toLocaleDateString("en-US",{month:"short",day:"numeric"})},handleTaskDelete(a){console.log("Task deleted, refreshing dashboard:",a),this.refreshData()}},created(){this.refreshData(),La.A.on("task-created",this.handleTaskCreated),La.A.on("task-updated",this.refreshData),La.A.on("task-created",this.refreshData),La.A.on("task-deleted",this.refreshData),La.A.on("member-deleted",this.refreshData)},mounted(){this.updateClock(),this.timer=setInterval(this.updateClock,1e3)},beforeUnmount(){clearInterval(this.timer),La.A.off("task-updated",this.refreshData),La.A.off("task-created",this.refreshData),La.A.off("task-deleted",this.handleTaskDelete),La.A.off("member-deleted",this.refreshData),La.A.off("task-created",this.handleTaskCreated)}},Ta=e(6262);const ya=(0,Ta.A)(ba,[["render",ha],["__scopeId","data-v-d50f208c"]]);var Ca=ya},9462:function(a,t,e){var s=e(9565),n=e(2360),r=e(6699),i=e(6279),l=e(8227),o=e(1181),d=e(5966),c=e(7657).IteratorPrototype,v=e(2529),u=e(9539),k=l("toStringTag"),f="IteratorHelper",p="WrapForValidIterator",m=o.set,h=function(a){var t=o.getterFor(a?p:f);return i(n(c),{next:function(){var e=t(this);if(a)return e.nextHandler();if(e.done)return v(void 0,!0);try{var s=e.nextHandler();return e.returnHandlerResult?s:v(s,e.done)}catch(n){throw e.done=!0,n}},return:function(){var e=t(this),n=e.iterator;if(e.done=!0,a){var r=d(n,"return");return r?s(r,n):v(void 0,!0)}if(e.inner)try{u(e.inner.iterator,"normal")}catch(i){return u(n,"throw",i)}return n&&u(n,"normal"),v(void 0,!0)}})},g=h(!0),L=h(!1);r(L,k,"Iterator Helper"),a.exports=function(a,t,e){var s=function(s,n){n?(n.iterator=s.iterator,n.next=s.next):n=s,n.type=t?p:f,n.returnHandlerResult=!!e,n.nextHandler=a,n.counter=0,n.done=!1,m(this,n)};return s.prototype=t?g:L,s}}}]);
//# sourceMappingURL=200.6d1ab740.js.map