(this.webpackJsonpdoctorsgame=this.webpackJsonpdoctorsgame||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('[{"id":1,"clicked":false,"name":"Beverly Crusher","image":"drcrusher.jpg","actor":"Gates McFadden","notes":"Dr. Crusher, chief medical officer of USS Enterprise, NCC-1701-D, is the mother of Wesley Crusher. She is also the occasional love interest of Captain Jean-Luc Picard while they were serving together on Enterprise-D. "},{"id":2,"clicked":false,"name":"Hugh Culber","image":"drculber.jpg","actor":"Wilson Cruz","notes":"Dr. Culber, chief medical officer of USS Discovery, died tragically at the hands of a man not himself, only to be resurrected, and agreed to leave for an unknown future. He was also half of the 2nd gay couple in Star Trek hsitory."},{"id":3,"clicked":false,"name":"Leonard McCoy","image":"drmccoy.jpg","actor":"DeForest Kelley","notes":"Dr. McCoy, chief medical officer of USS Enterprise, NCC-1701 (no bloody A, B, C or D), is best known for his verbal barbs with Commander Spock, and his various \'I am a doctor, not a ______\' ascerbic replies.  "},{"id":4,"clicked":false,"name":"Phil Boyce","image":"drboyce.jpg","actor":"John Hoyt","notes":"Dr. Boyce, chief medical officer of USS Enterprise, NCC-1701 under Captain Christopher Pike, was known to sometimes carry a Martini kit with him. He believes that a man tells more to his bartender than his doctor. "},{"id":5,"clicked":false,"name":"EMH Mark I","image":"thedoctor.jpg","actor":"Robert Picardo","notes":"Emergency Medical Hologram, usually just called the E-M-H, became the chief medical officer onboard USS Voyager when the ship was transported to the other end of the galaxy. Normally forced to stay in sickbay, he later gained full ship mobility through a mobile emitter."},{"id":6,"clicked":false,"name":"Katherine Pulaski","image":"drpulaski.jpg","actor":"Diana Muldaur","notes":"Dr. Pulaski was assigned to USS Enterprise-D to when Dr. Crusher was reassigned to Starfleet Medical for a fellowship position. Dr. Pulaski has a phobia of transporters, preferring to take shuttlecraft if possible."},{"id":7,"clicked":false,"name":"Noonian Soong","image":"soong.jpg","actor":"Brent Spiner","notes":"Not a medical doctor, Dr. Noonian Soong is a brilliant cyberneticist, and the creator of Soong family of androids using a positronic matrix brain. Members of the Soong family includes Data, Lore, B-4, among others. "},{"id":8,"clicked":false,"name":"Julian Bashir","image":"drbashir.jpg","actor":"Alexander Siddig","notes":"Dr. Bashir, chief medical officer of Deep Space Nine, is one of the youngest doctors in Starfleet. He is actually an augmented human though he was not aware of that until his parents\' confession decades later. "},{"id":9,"clicked":false,"name":"Phlox","image":"drphlox.jpg","actor":"John Billingsley","notes":"Dr. Phlox. had been working xeno-medicine for decades before moving to Earth to work at Starfleet Medical. He enjoys experiencing xeno-cultures, and was invited to serve onboard the NX-01 Enterprise as its chief medical officer. "},{"id":10,"clicked":false,"name":"Christine Chapel","image":"drchapel.jpg","actor":"Majel Barrett Roddenberry","notes":"Dr. Chapel was originally a nurse serving onboard USS Enterprise with Captain Kirk, Commander Spock, and Doctor McCoy. She came back to serve on the refitted USS Enterprise during the V\'Ger incident. "},{"id":11,"clicked":false,"name":"Ira Graves","image":"graves.jpg","actor":"William Sheppard","notes":"Ira Grave is not a doctor, but a cyberneticist that helped Noonian Soong develope the Soong family of androids. In many ways, he could be called Data\'s \'grandpa\', which he did insist Data call him so when he finally met Data. "},{"id":12,"clicked":false,"name":"EMH Mark II","image":"emhmk2.jpg","actor":"Andy Dick","notes":"Emergency Medical Hologram Mark II was a improved version with better bedside manners, and used a more pleasant exterior. It was usually deployed to ships with full interior holographic projectors so it can move about the ship freely."}]')},,,function(e,a,t){e.exports=t(15)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(2),c=t.n(o),i=(t(13),t(3)),s=t(4),l=t(7),d=t(6);var h=function(e){return n.a.createElement("div",{className:"card "+(e.Clicked?"animate":""),onClick:function(){return e.handleClick(e.id)}},n.a.createElement("div",{className:"img-container"},n.a.createElement("img",{alt:e.name,src:e.image})),n.a.createElement("div",{className:"img-content"},n.a.createElement("p",null,n.a.createElement("strong",null,"Name: "),e.name),n.a.createElement("p",null,n.a.createElement("strong",null,"Actor: "),e.actor)))};var m=function(e){return n.a.createElement("div",{className:"wrapper"},e.children)};var u=function(e){return n.a.createElement("div",Object.assign({className:"row".concat(e.fluid?"-fluid":"")},e))};var f=function(e){var a=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return n.a.createElement("div",Object.assign({className:a},e))};var g=function(e){return n.a.createElement("header",{className:"container-fluid fixed-top"},n.a.createElement("div",{className:"row"},n.a.createElement("h1",{className:"col-sm-8"},"Star Trek Doctors Memory Game"),n.a.createElement("nav",{className:"col-sm-4"},n.a.createElement("p",null,"Score: ",n.a.createElement("span",null,e.currentScore))," \xa0\xa0\xa0",n.a.createElement("p",null,"Top Score: ",n.a.createElement("span",null,e.highScore)," "),e.children)))};var p=function(e){return n.a.createElement("div",{className:"jumbotron jumbotron-fluid"},n.a.createElement("div",{className:"container"},e.children,n.a.createElement("p",{className:"lead"},"Choose the doctors of Star Trek, but do not repeat... Or your score will be ZEROED! Max score possible is 12. ")))},S=t(5),k=(t(14),function(e){Object(l.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=a.call.apply(a,[this].concat(n))).state={characters:S,highScore:0,currentScore:0,Clicked:!1},e.handleClick=function(a){e.shuffleArray(),e.handleScore(a)},e.handleScore=function(a){e.state.characters.forEach((function(t){a===t.id&&!1===t.clicked?(t.clicked=!0,e.setState({Clicked:!1}),e.handleIncrement()):a===t.id&&!0===t.clicked&&(e.state.currentScore>e.state.highScore&&e.setState({highScore:e.state.currentScore}),e.resetGame())}))},e.resetGame=function(){e.setState({currentScore:0}),e.setState({Clicked:!0}),e.state.characters.forEach((function(e){return e.clicked=!1}))},e.shuffleArray=function(){var a=e.shuffle(e.state.characters);e.setState({shuffledArr:a})},e.handleIncrement=function(){e.setState({currentScore:e.state.currentScore+1}),console.log("CurScore = ",e.state.currentScore),console.log("MaxScore = ",e.state.characters.length),e.state.currentScore+1===e.state.characters.length&&(e.setState({highScore:e.state.characters.length}),alert("Congratulations! You achieved the max possible score of ".concat(e.state.characters.length)),e.resetGame())},e.shuffle=function(e){for(var a,t,r=e.length;0!==r;)t=Math.floor(Math.random()*r),a=e[r-=1],e[r]=e[t],e[t]=a;return e},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(m,null,n.a.createElement(g,{currentScore:this.state.currentScore,highScore:this.state.highScore}),n.a.createElement(p,null),n.a.createElement(u,null,this.state.characters.map((function(a){return n.a.createElement(f,{size:"sm-6 md-4 lg-3",key:"col"+a.id},n.a.createElement(h,{Clicked:e.state.Clicked,handleClick:e.handleClick,id:a.id,key:a.id,name:a.name,image:a.image,actor:a.actor,notes:a.notes}))}))))}}]),t}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.62416715.chunk.js.map