"use strict";(self["webpackChunkskillspot"]=self["webpackChunkskillspot"]||[]).push([[619],{116:function(e,t,s){var a=s(6518),i=s(2652),o=s(9306),l=s(8551),n=s(1767);a({target:"Iterator",proto:!0,real:!0},{find:function(e){l(this),o(e);var t=n(this),s=0;return i(t,(function(t,a){if(e(t,s++))return a(t)}),{IS_RECORD:!0,INTERRUPTED:!0}).result}})},713:function(e,t,s){var a=s(9565),i=s(9306),o=s(8551),l=s(1767),n=s(9462),r=s(6319),c=n((function(){var e=this.iterator,t=o(a(this.next,e)),s=this.done=!!t.done;if(!s)return r(e,this.mapper,[t.value,this.counter++],!0)}));e.exports=function(e){return o(this),i(e),new c(l(this),{mapper:e})}},1701:function(e,t,s){var a=s(6518),i=s(713),o=s(6395);a({target:"Iterator",proto:!0,real:!0,forced:o},{map:i})},9857:function(e,t,s){s.r(t),s.d(t,{default:function(){return we}});s(8111),s(1701);var a=s(641),i=s(33),o=s(3751);const l={class:"wrapper"},n={class:"content-wrapper"},r={class:"dashboard-container"},c={class:"card team-card"},d={class:"card-header"},m={class:"card-content"},u={key:0,class:"table-container"},k=["onClick"],f={class:"member-info"},p={class:"avatar"},b={class:"task-count"},h={class:"stat pending"},g={class:"stat completed"},v={class:"stat postponed"},T={class:"action-buttons"},L=["onClick"],y=["onClick"],w={key:1},M={class:"dashboard-grid"},C={class:"card task-card"},S={class:"card-content"},D={class:"form-group"},A={class:"form-group"},E={class:"form-row"},x={class:"form-group"},I=["value"],$={class:"form-group"},B={class:"form-group"},_={class:"priority-selector"},N=["onClick"],O={class:"card activity-card"},J={class:"card-content"},X={class:"activity-timeline"},P={class:"activity-content"},U={class:"activity-title"},R={class:"activity-meta"},W={class:"activity-user"},F={class:"activity-timestamp"},q={key:0,class:"modal"},V={class:"modal-content"},K={class:"form-group"},Y={class:"form-group"},Q={class:"form-actions"},j={type:"submit",class:"btn-primary"},z={key:1,class:"modal"},G={class:"modal-content task-details-modal"},H={class:"member-task-header"},Z={class:"member-info-large"},ee={class:"avatar large"},te={class:"member-details"},se={class:"member-role"},ae={class:"task-stats"},ie={class:"stat-value"},oe={key:0,class:"tasks-list"},le={class:"task-header"},ne={class:"task-title-section"},re={class:"task-creation-date"},ce={class:"task-badges"},de={class:"task-description"},me={class:"task-meta"},ue={class:"task-dates"},ke={class:"task-actions"},fe=["onClick"],pe=["onClick"],be=["onClick"],he={key:1,class:"no-tasks"};function ge(e,t,s,ge,ve,Te){const Le=(0,a.g2)("ResponsiveSidebar");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.Lk)("div",l,[(0,a.bF)(Le),(0,a.Lk)("div",n,[(0,a.Lk)("div",r,[t[30]||(t[30]=(0,a.Lk)("div",{class:"dashboard-header sticky-header"},[(0,a.Lk)("h1",null,"Team Management & Task Creation"),(0,a.Lk)("p",{class:"description"},"Manage your team members and create new tasks efficiently.")],-1)),(0,a.Lk)("div",c,[(0,a.Lk)("div",d,[t[13]||(t[13]=(0,a.Lk)("h3",null,"Team Members",-1)),(0,a.Lk)("button",{class:"btn-primary",onClick:t[0]||(t[0]=(...e)=>Te.showAddMemberModal&&Te.showAddMemberModal(...e))},t[12]||(t[12]=[(0,a.Lk)("i",{class:"fas fa-plus"},null,-1),(0,a.eW)(" Add Member ")]))]),(0,a.Lk)("div",m,[ve.teamMembers.length>0?((0,a.uX)(),(0,a.CE)("div",u,[(0,a.Lk)("table",null,[t[19]||(t[19]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th",null,"Name"),(0,a.Lk)("th",null,"Role"),(0,a.Lk)("th",null,"Total Tasks"),(0,a.Lk)("th",null,"Pending"),(0,a.Lk)("th",null,"Completed"),(0,a.Lk)("th",null,"Postponed"),(0,a.Lk)("th",null,"Status"),(0,a.Lk)("th",null,"Actions")])],-1)),(0,a.Lk)("tbody",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(ve.teamMembers,(e=>((0,a.uX)(),(0,a.CE)("tr",{key:e.name,onClick:t=>Te.showMemberTasks(e),class:"member-row"},[(0,a.Lk)("td",null,[(0,a.Lk)("div",f,[(0,a.Lk)("div",p,(0,i.v_)(e.name.split(" ").map((e=>e[0])).join("")),1),(0,a.Lk)("span",null,(0,i.v_)(e.name),1)])]),(0,a.Lk)("td",null,(0,i.v_)(e.role),1),(0,a.Lk)("td",null,[(0,a.Lk)("div",b,(0,i.v_)(e.tasks),1)]),(0,a.Lk)("td",null,[(0,a.Lk)("div",h,[t[14]||(t[14]=(0,a.Lk)("i",{class:"fas fa-clock"},null,-1)),(0,a.eW)(" "+(0,i.v_)(Te.getTaskStats(e.id).pending),1)])]),(0,a.Lk)("td",null,[(0,a.Lk)("div",g,[t[15]||(t[15]=(0,a.Lk)("i",{class:"fas fa-check"},null,-1)),(0,a.eW)(" "+(0,i.v_)(Te.getTaskStats(e.id).completed),1)])]),(0,a.Lk)("td",null,[(0,a.Lk)("div",v,[t[16]||(t[16]=(0,a.Lk)("i",{class:"fas fa-clock"},null,-1)),(0,a.eW)(" "+(0,i.v_)(Te.getTaskStats(e.id).postponed),1)])]),(0,a.Lk)("td",null,[(0,a.Lk)("span",{class:(0,i.C4)(["status-badge",Te.getMemberStatus(e).class])},(0,i.v_)(Te.getMemberStatus(e).text),3)]),(0,a.Lk)("td",null,[(0,a.Lk)("div",T,[(0,a.Lk)("button",{class:"btn-icon",onClick:(0,o.D$)((t=>Te.editMember(e)),["stop"])},t[17]||(t[17]=[(0,a.Lk)("i",{class:"fas fa-edit"},null,-1)]),8,L),(0,a.Lk)("button",{class:"btn-icon btn-danger",onClick:(0,o.D$)((t=>Te.deleteMember(e)),["stop"])},t[18]||(t[18]=[(0,a.Lk)("i",{class:"fas fa-trash"},null,-1)]),8,y)])])],8,k)))),128))])])])):((0,a.uX)(),(0,a.CE)("div",w,t[20]||(t[20]=[(0,a.Lk)("p",null,"No team members found. Please add members to manage tasks.",-1)])))])]),(0,a.Lk)("div",M,[(0,a.Lk)("div",C,[t[28]||(t[28]=(0,a.Lk)("div",{class:"card-header"},[(0,a.Lk)("h3",null,"Create New Task")],-1)),(0,a.Lk)("div",S,[(0,a.Lk)("form",{onSubmit:t[5]||(t[5]=(0,o.D$)(((...e)=>Te.createTask&&Te.createTask(...e)),["prevent"]))},[(0,a.Lk)("div",D,[t[21]||(t[21]=(0,a.Lk)("label",null,"Task Title",-1)),(0,a.bo)((0,a.Lk)("input",{type:"text",class:"form-input","onUpdate:modelValue":t[1]||(t[1]=e=>ve.newTask.title=e),required:"",placeholder:"Enter task title"},null,512),[[o.Jo,ve.newTask.title]])]),(0,a.Lk)("div",A,[t[22]||(t[22]=(0,a.Lk)("label",null,"Description",-1)),(0,a.bo)((0,a.Lk)("textarea",{class:"form-input",rows:"3","onUpdate:modelValue":t[2]||(t[2]=e=>ve.newTask.description=e),required:"",placeholder:"Describe the task details"},null,512),[[o.Jo,ve.newTask.description]])]),(0,a.Lk)("div",E,[(0,a.Lk)("div",x,[t[24]||(t[24]=(0,a.Lk)("label",null,"Assign To",-1)),(0,a.bo)((0,a.Lk)("select",{class:"form-input dropdown-red-black","onUpdate:modelValue":t[3]||(t[3]=e=>ve.newTask.assignedTo=e),required:""},[t[23]||(t[23]=(0,a.Lk)("option",{value:"",disabled:"",selected:""},"Select team member",-1)),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(ve.teamMembers,(e=>((0,a.uX)(),(0,a.CE)("option",{key:e.id,value:e.name},(0,i.v_)(e.name)+" ("+(0,i.v_)(e.tasks)+" tasks) ",9,I)))),128))],512),[[o.u1,ve.newTask.assignedTo]])]),(0,a.Lk)("div",$,[t[25]||(t[25]=(0,a.Lk)("label",null,"Due Date",-1)),(0,a.bo)((0,a.Lk)("input",{type:"date",class:"form-input","onUpdate:modelValue":t[4]||(t[4]=e=>ve.newTask.dueDate=e),required:""},null,512),[[o.Jo,ve.newTask.dueDate]])])]),(0,a.Lk)("div",B,[t[26]||(t[26]=(0,a.Lk)("label",null,"Priority Level",-1)),(0,a.Lk)("div",_,[((0,a.uX)(),(0,a.CE)(a.FK,null,(0,a.pI)(["minor","mid","major"],(e=>(0,a.Lk)("div",{key:e,class:(0,i.C4)(["priority-option",{active:ve.newTask.priority===e}]),onClick:t=>ve.newTask.priority=e},[(0,a.Lk)("div",{class:(0,i.C4)(["priority-indicator",e])},null,2),(0,a.Lk)("span",null,(0,i.v_)(e.charAt(0).toUpperCase()+e.slice(1)),1)],10,N))),64))])]),t[27]||(t[27]=(0,a.Lk)("div",{class:"form-actions"},[(0,a.Lk)("button",{type:"button",class:"btn-secondary"}," Cancel "),(0,a.Lk)("button",{type:"submit",class:"btn-primary"},[(0,a.Lk)("i",{class:"fas fa-plus"}),(0,a.eW)(" Create Task ")])],-1))],32)])]),(0,a.Lk)("div",O,[t[29]||(t[29]=(0,a.Lk)("div",{class:"card-header"},[(0,a.Lk)("h3",null,"Recent Activity")],-1)),(0,a.Lk)("div",J,[(0,a.Lk)("div",X,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(ve.activities,((e,t)=>((0,a.uX)(),(0,a.CE)("div",{key:t,class:"activity-item"},[(0,a.Lk)("div",{class:(0,i.C4)(["activity-icon",Te.getActivityIcon(e.type)])},[(0,a.Lk)("i",{class:(0,i.C4)(Te.getActivityIconClass(e.type))},null,2)],2),(0,a.Lk)("div",P,[(0,a.Lk)("div",U,[(0,a.eW)((0,i.v_)(e.title)+" ",1),"task"===e.type||"delete"===e.type?((0,a.uX)(),(0,a.CE)("span",{key:0,class:(0,i.C4)(["activity-badge",Te.getTaskStatusClass(e)])},(0,i.v_)(Te.getTaskStatusText(e)),3)):(0,a.Q3)("",!0)]),(0,a.Lk)("div",R,[(0,a.Lk)("span",W,(0,i.v_)(e.user),1),(0,a.Lk)("span",F,(0,i.v_)(Te.formatTimeAgo(e.time)),1)])])])))),128))])])])])])])]),ve.showModal?((0,a.uX)(),(0,a.CE)("div",q,[(0,a.Lk)("div",V,[(0,a.Lk)("span",{class:"close",onClick:t[6]||(t[6]=(...e)=>Te.closeModal&&Te.closeModal(...e))},"×"),(0,a.Lk)("h2",null,(0,i.v_)(ve.isEditing?"Edit Team Member":"Add Team Member"),1),(0,a.Lk)("form",{onSubmit:t[10]||(t[10]=(0,o.D$)(((...e)=>Te.handleSubmit&&Te.handleSubmit(...e)),["prevent"]))},[(0,a.Lk)("div",K,[t[31]||(t[31]=(0,a.Lk)("label",null,"Name",-1)),(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":t[7]||(t[7]=e=>ve.newMember.name=e),type:"text",class:"form-input",required:"",placeholder:"Enter member name"},null,512),[[o.Jo,ve.newMember.name]])]),(0,a.Lk)("div",Y,[t[32]||(t[32]=(0,a.Lk)("label",null,"Role",-1)),(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":t[8]||(t[8]=e=>ve.newMember.role=e),type:"text",class:"form-input",required:"",placeholder:"Enter member role"},null,512),[[o.Jo,ve.newMember.role]])]),(0,a.Lk)("div",Q,[(0,a.Lk)("button",{type:"button",class:"btn-secondary",onClick:t[9]||(t[9]=(...e)=>Te.closeModal&&Te.closeModal(...e))},"Cancel"),(0,a.Lk)("button",j,(0,i.v_)(ve.isEditing?"Update Member":"Add Member"),1)])],32)])])):(0,a.Q3)("",!0),ve.showTasksModal?((0,a.uX)(),(0,a.CE)("div",z,[(0,a.Lk)("div",G,[(0,a.Lk)("span",{class:"close",onClick:t[11]||(t[11]=(...e)=>Te.closeTasksModal&&Te.closeTasksModal(...e))},"×"),(0,a.Lk)("div",H,[(0,a.Lk)("div",Z,[(0,a.Lk)("div",ee,(0,i.v_)(ve.selectedMember?.name.split(" ").map((e=>e[0])).join("")),1),(0,a.Lk)("div",te,[(0,a.Lk)("h2",null,(0,i.v_)(ve.selectedMember?.name),1),(0,a.Lk)("span",se,(0,i.v_)(ve.selectedMember?.role),1)])]),(0,a.Lk)("div",ae,[t[33]||(t[33]=(0,a.Lk)("span",{class:"stat-label"},"Total Tasks",-1)),(0,a.Lk)("span",ie,(0,i.v_)(ve.selectedMember?.tasks||0),1)])]),ve.memberTasks.length>0?((0,a.uX)(),(0,a.CE)("div",oe,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(ve.memberTasks,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e.id,class:"task-item"},[(0,a.Lk)("div",le,[(0,a.Lk)("div",ne,[(0,a.Lk)("h3",null,(0,i.v_)(e.title),1),(0,a.Lk)("span",re,"Created: "+(0,i.v_)(Te.formatDate(e.createdAt)),1)]),(0,a.Lk)("div",ce,[(0,a.Lk)("span",{class:(0,i.C4)(["task-priority",e.priority])},[t[34]||(t[34]=(0,a.Lk)("i",{class:"fas fa-flag"},null,-1)),(0,a.eW)(" "+(0,i.v_)(e.priority),1)],2),(0,a.Lk)("span",{class:(0,i.C4)(["task-status",e.status])},(0,i.v_)(e.status),3)])]),(0,a.Lk)("div",de,[(0,a.Lk)("p",null,(0,i.v_)(e.description),1)]),(0,a.Lk)("div",me,[(0,a.Lk)("div",ue,[(0,a.Lk)("span",{class:(0,i.C4)(["countdown",Te.getTimeStatus(e.dueDate)])},(0,i.v_)(Te.getTimeRemaining(e.dueDate)),3)]),(0,a.Lk)("div",ke,["completed"!==e.status?((0,a.uX)(),(0,a.CE)("button",{key:0,class:"action-btn complete",onClick:t=>Te.completeTask(e)},t[35]||(t[35]=[(0,a.Lk)("i",{class:"fas fa-check"},null,-1),(0,a.eW)(" Complete ")]),8,fe)):(0,a.Q3)("",!0),"pending"===e.status?((0,a.uX)(),(0,a.CE)("button",{key:1,class:"action-btn postpone",onClick:t=>Te.postponeTask(e)},t[36]||(t[36]=[(0,a.Lk)("i",{class:"fas fa-clock"},null,-1),(0,a.eW)(" Postpone ")]),8,pe)):(0,a.Q3)("",!0),(0,a.Lk)("button",{class:"action-btn delete",onClick:t=>Te.deleteTask(e)},t[37]||(t[37]=[(0,a.Lk)("i",{class:"fas fa-trash"},null,-1),(0,a.eW)(" Delete ")]),8,be)])])])))),128))])):((0,a.uX)(),(0,a.CE)("div",he,t[38]||(t[38]=[(0,a.Lk)("i",{class:"fas fa-clipboard-list no-tasks-icon"},null,-1),(0,a.Lk)("p",{class:"no-tasks-title"},"No Tasks Yet",-1),(0,a.Lk)("p",{class:"no-tasks-message"},"This team member hasn't been assigned any tasks.",-1)])))])])):(0,a.Q3)("",!0)],64)}s(4114),s(2489),s(116);var ve=s(5393),Te={name:"CreateTask",components:{ResponsiveSidebar:ve.A},data(){return{teamMembers:[],showModal:!1,isEditing:!1,selectedMember:null,newMember:{name:"",role:"",tasks:0},showDeleteModal:!1,memberToDelete:null,newTask:{title:"",description:"",assignedTo:"",dueDate:"",priority:"mid",status:"pending"},showTasksModal:!1,memberTasks:[],activities:[]}},created(){this.loadTeamMembers(),this.loadActivities()},methods:{loadTeamMembers(){const e=localStorage.getItem("teamMembers");this.teamMembers=e?JSON.parse(e):[]},saveTeamMembers(){localStorage.setItem("teamMembers",JSON.stringify(this.teamMembers))},showAddMemberModal(){this.isEditing=!1,this.selectedMember=null,this.newMember={name:"",role:"",tasks:0},this.showModal=!0},editMember(e){this.isEditing=!0,this.selectedMember=e,this.newMember={...e},this.showModal=!0},async deleteMember(e){const t=await Swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#ff0000",cancelButtonColor:"#1a1a1a",confirmButtonText:"Yes, delete it!",background:"#1a1a1a",color:"#ffffff"});if(t.isConfirmed){this.teamMembers=this.teamMembers.filter((t=>t.name!==e.name)),this.saveTeamMembers(),Swal.fire({icon:"success",title:"Deleted!",text:"Team member has been deleted.",background:"#1a1a1a",color:"#ffffff",confirmButtonColor:"#ff0000"});const t={type:"delete",title:`Team member ${e.name} removed`,user:"Admin",time:(new Date).toISOString(),isNew:!0};this.addActivity(t)}},handleSubmit(){if(!this.newMember.name||!this.newMember.role)return void Swal.fire({icon:"error",title:"Error!",text:"Please fill in all fields",background:"#1a1a1a",color:"#ffffff",confirmButtonColor:"#ff0000"});const e={id:Date.now(),name:this.newMember.name,role:this.newMember.role,tasks:0,createdAt:(new Date).toISOString()};if(this.isEditing&&this.selectedMember){const t=this.teamMembers.findIndex((e=>e.id===this.selectedMember.id));-1!==t&&(this.teamMembers[t]={...this.teamMembers[t],...e})}else this.teamMembers.push(e);this.saveTeamMembers(),this.closeModal(),Swal.fire({icon:"success",title:"Success!",text:"Team member updated successfully",background:"#1a1a1a",color:"#ffffff",confirmButtonColor:"#ff0000"});const t={type:"member",title:`${this.isEditing?"Updated":"Added new"} team member ${this.newMember.name}`,user:"Admin",time:(new Date).toISOString(),isNew:!0};this.addActivity(t)},async createTask(){try{const t=this.teamMembers.find((e=>e.name===this.newTask.assignedTo));if(!t)return void Swal.fire({icon:"error",title:"Error!",text:"Please select a valid team member",background:"#1a1a1a",color:"#ffffff",confirmButtonColor:"#ff0000"});const s={id:Date.now(),title:this.newTask.title,description:this.newTask.description,priority:this.newTask.priority,dueDate:this.newTask.dueDate,assignedTo:t.id,status:"pending",createdAt:(new Date).toISOString()};let a=[];try{a=JSON.parse(localStorage.getItem("allTasks"))||[]}catch(e){console.error("Error parsing existing tasks:",e),a=[]}const i=[...a,s];localStorage.setItem("allTasks",JSON.stringify(i));const o=this.teamMembers.findIndex((e=>e.id===t.id));-1!==o&&(this.teamMembers[o].tasks++,this.saveTeamMembers()),await Swal.fire({icon:"success",title:"Task Created Successfully!",html:`\n            <div style="text-align: left; color: #ffffff;">\n              <p style="margin: 10px 0;"><span style="color: #10b981;">✓</span> Title: ${s.title}</p>\n              <p style="margin: 10px 0;"><span style="color: #10b981;">✓</span> Assigned to: ${t.name}</p>\n              <p style="margin: 10px 0;"><span style="color: #10b981;">✓</span> Priority: ${s.priority}</p>\n              <p style="margin: 10px 0;"><span style="color: #10b981;">✓</span> Due date: ${new Date(s.dueDate).toLocaleDateString()}</p>\n            </div>\n          `,background:"#1a1a1a",color:"#ffffff",confirmButtonColor:"#10b981",confirmButtonText:"Done"}),this.newTask={title:"",description:"",assignedTo:"",dueDate:"",priority:"mid",status:"pending"},this.addActivity({type:"task",title:`New task "${s.title}" assigned to ${t.name}`,user:"System",time:(new Date).toISOString(),status:"pending"}),this.$emit("task-created",s)}catch(t){console.error("Error creating task:",t),Swal.fire({icon:"error",title:"Error Creating Task",text:"There was a problem creating the task. Please try again.",background:"#1a1a1a",color:"#ffffff",confirmButtonColor:"#ff0000"})}},closeModal(){this.showModal=!1,this.selectedMember=null,this.newMember={name:"",role:"",tasks:0},this.isEditing=!1},closeDeleteModal(){this.showDeleteModal=!1,this.memberToDelete=null},showMemberTasks(e){this.selectedMember=e,this.memberTasks=this.loadMemberTasks(e.id),this.memberTaskStats=this.getTaskStats(e.id),this.showTasksModal=!0},loadMemberTasks(e){try{const t=JSON.parse(localStorage.getItem("allTasks"))||[],s=t.filter((t=>Number(t.assignedTo)===Number(e)));return console.log(`Loading tasks for member ${e}:`,s),s.sort(((e,t)=>new Date(t.createdAt)-new Date(e.createdAt)))}catch(t){return console.error("Error loading member tasks:",t),[]}},closeTasksModal(){this.showTasksModal=!1,this.selectedMember=null,this.memberTasks=[]},formatDate(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})},getTimeRemaining(e){const t=new Date,s=new Date(e),a=s-t;if(a<0){const e=Math.abs(a),t=Math.floor(e/864e5),s=Math.floor(e%864e5/36e5),i=Math.floor(e%36e5/6e4);return`${t}d ${s}h ${i}m overdue`}const i=Math.floor(a/864e5),o=Math.floor(a%864e5/36e5),l=Math.floor(a%36e5/6e4);return 0===i&&0===o&&0===l?"Due now":0===i?`${o}h ${l}m remaining`:`${i}d ${o}h ${l}m remaining`},getTimeStatus(e){const t=new Date,s=new Date(e),a=s-t,i=Math.floor(a/864e5);return a<0?"overdue":i<=1?"urgent":i<=3?"warning":"normal"},async completeTask(e){const t=await Swal.fire({title:"Complete Task",text:"Are you sure you want to mark this task as completed?",icon:"question",showCancelButton:!0,confirmButtonColor:"#10b981",cancelButtonColor:"#1a1a1a",confirmButtonText:"Yes, complete it!",background:"#1a1a1a",color:"#ffffff"});t.isConfirmed&&(this.updateTaskStatus(e,"completed"),await Swal.fire({icon:"success",title:"Task Completed!",text:"The task has been marked as completed.",background:"#1a1a1a",color:"#ffffff",confirmButtonColor:"#10b981"}))},async postponeTask(e){const{value:t}=await Swal.fire({title:"Postpone Task",html:'\n          <div class="postpone-form">\n            <input type="datetime-local" id="postpone-date" class="swal2-input" style="background: #1a1a1a; color: #fff; border: 1px solid rgba(141, 0, 0, 0.519);">\n          </div>\n        ',background:"#1a1a1a",color:"#ffffff",confirmButtonColor:"#f59e0b",showCancelButton:!0,cancelButtonColor:"#1a1a1a",preConfirm:()=>{const e=document.getElementById("postpone-date").value;return e||(Swal.showValidationMessage("Please select a date and time"),!1)}});if(t){const s=new Date(t);e.dueDate=s.toISOString(),e.status="postponed",this.updateTaskStatus(e,"postponed"),await Swal.fire({icon:"success",title:"Task Postponed!",text:`The task has been postponed to ${this.formatDate(s)}`,background:"#1a1a1a",color:"#ffffff",confirmButtonColor:"#f59e0b"})}},async cancelTask(e){const t=await Swal.fire({title:"Cancel Task",text:"Are you sure you want to cancel this task?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#ef4444",cancelButtonColor:"#1a1a1a",confirmButtonText:"Yes, cancel it!",background:"#1a1a1a",color:"#ffffff"});if(t.isConfirmed){this.updateTaskStatus(e,"cancelled");const t=this.teamMembers.findIndex((t=>t.name===e.assignedTo));-1!==t&&(this.teamMembers[t].tasks--,this.saveTeamMembers()),await Swal.fire({icon:"success",title:"Task Cancelled!",text:"The task has been cancelled.",background:"#1a1a1a",color:"#ffffff",confirmButtonColor:"#ef4444"})}},async deleteTask(e){try{const t=await Swal.fire({title:"Delete Task",text:"Are you sure you want to delete this task? This action cannot be undone.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#ef4444",cancelButtonColor:"#1a1a1a",confirmButtonText:"Yes, delete it!",background:"#1a1a1a",color:"#ffffff"});if(t.isConfirmed){const t=JSON.parse(localStorage.getItem("allTasks")||"[]"),s=t.filter((t=>t.id!==e.id));localStorage.setItem("allTasks",JSON.stringify(s));const a=JSON.parse(localStorage.getItem("teamMembers")||"[]"),i=a.findIndex((t=>t.id===e.assignedTo));-1!==i&&(a[i].tasks=Math.max(0,a[i].tasks-1),localStorage.setItem("teamMembers",JSON.stringify(a)),this.teamMembers=a,this.selectedMember&&this.selectedMember.id===e.assignedTo&&(this.selectedMember=a[i])),this.memberTasks=this.memberTasks.filter((t=>t.id!==e.id)),this.addActivity({type:"delete",title:`Task "${e.title}" deleted`,user:"System",time:(new Date).toISOString(),status:"deleted"}),await Swal.fire({icon:"success",title:"Task Deleted!",text:"The task has been permanently deleted.",background:"#1a1a1a",color:"#ffffff",confirmButtonColor:"#ef4444"})}}catch(t){console.error("Error deleting task:",t),Swal.fire({icon:"error",title:"Error",text:"Failed to delete task. Please try again.",background:"#1a1a1a",color:"#ffffff",confirmButtonColor:"#ff0000"})}},updateTaskStatus(e,t){try{const s=JSON.parse(localStorage.getItem("allTasks")||"[]"),a=s.findIndex((t=>t.id===e.id));if(-1!==a){s[a]={...e,status:t},localStorage.setItem("allTasks",JSON.stringify(s));const i=this.memberTasks.findIndex((t=>t.id===e.id));-1!==i&&(this.memberTasks[i]={...e,status:t});const o=this.teamMembers.find((t=>t.id===e.assignedTo));if(o){const e=this.getTaskStats(o.id);this.$nextTick((()=>{this.loadTeamMembers(),this.memberTaskStats=e}))}const l={type:"task",title:`Task "${e.title}" ${t}`,status:t,user:"Admin",time:(new Date).toISOString()};this.addActivity(l)}}catch(s){console.error("Error updating task status:",s),Swal.fire({icon:"error",title:"Error",text:"Failed to update task status. Please try again.",background:"#1a1a1a",color:"#ffffff",confirmButtonColor:"#ff0000"})}},getTaskStats(e){try{const t=this.loadMemberTasks(e);return{completed:t.filter((e=>"completed"===e.status)).length,pending:t.filter((e=>"pending"===e.status)).length,postponed:t.filter((e=>"postponed"===e.status)).length,total:t.length}}catch(t){return console.error("Error getting task stats:",t),{completed:0,pending:0,postponed:0,total:0}}},getMemberStatus(e){try{const t=this.loadMemberTasks(e.id),s=t.filter((e=>"pending"===e.status)).length;return s>0?{class:"busy",text:"Busy"}:{class:"available",text:"Available"}}catch(t){return console.error("Error getting member status:",t),{class:"available",text:"Available"}}},loadActivities(){const e=JSON.parse(localStorage.getItem("activities")||"[]");this.activities=e},getActivityIcon(e){const t={task:"task",member:"member",status:"status",edit:"update",delete:"alert"};return t[e]||"info"},getActivityIconClass(e){const t={task:"fas fa-tasks",member:"fas fa-user",status:"fas fa-info-circle",edit:"fas fa-edit",delete:"fas fa-trash"};return t[e]||"fas fa-info"},formatTimeAgo(e){const t=new Date,s=new Date(e),a=Math.floor((t-s)/1e3);return a<60?"just now":a<3600?`${Math.floor(a/60)}m ago`:a<86400?`${Math.floor(a/3600)}h ago`:a<604800?`${Math.floor(a/86400)}d ago`:this.formatDate(e)},addActivity(e){try{const t={...e,title:this.formatActivityTitle(e),user:"Admin"===e.user?"System":e.user,time:(new Date).toISOString()},s=JSON.parse(localStorage.getItem("activities")||"[]");s.unshift(t),s.length>15&&(s.length=15),localStorage.setItem("activities",JSON.stringify(s)),this.loadActivities()}catch(t){console.error("Error in addActivity:",t)}},formatActivityTitle(e){switch(e.type){case"task":return"completed"===e.status?`Task Completed: ${e.title}`:"postponed"===e.status?`Task Postponed: ${e.title}`:`New Task: ${e.title}`;case"member":return`Team Update: ${e.title}`;case"delete":return`Removed: ${e.title}`;default:return e.title}},isPendingTask(e){return"task"===e.type&&(!e.status||"pending"===e.status)},getTaskStatusClass(e){return"delete"===e.type?"status-deleted":"completed"===e.status?"status-completed":"postponed"===e.status?"status-postponed":e.status&&"pending"!==e.status?"":"status-pending"},getTaskStatusText(e){return"delete"===e.type?"Deleted":e.status&&"pending"!==e.status?e.status.charAt(0).toUpperCase()+e.status.slice(1):"Pending"}}},Le=s(6262);const ye=(0,Le.A)(Te,[["render",ge],["__scopeId","data-v-188f9196"]]);var we=ye}}]);
//# sourceMappingURL=619.6e5cd13a.js.map