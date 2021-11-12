(this.webpackJsonpstamina=this.webpackJsonpstamina||[]).push([[0],{356:function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),s=a(24),n=a(96),i=a(97),h=a(98),d=a(108),c=a(380),l=a(26),u=a(377),p=a(383),m=a(382),g=a(385),f=a(371),w=a(372),y=a(376),b=a(191),v=a(192),k=a(87),j=a(198),x=a(4),T=function(e){var t=e.data;return Object(x.jsx)(f.a,{minWidth:1e3,minHeight:400,children:Object(x.jsxs)(w.a,{width:500,height:300,data:t,margin:{top:30,right:30,left:10,bottom:30},children:[Object(x.jsx)(y.a,{strokeDasharray:"3 3"}),Object(x.jsx)(b.a,{dataKey:"seconds"}),Object(x.jsx)(v.a,{yAxisId:"left"}),Object(x.jsx)(v.a,{yAxisId:"right",orientation:"right",domain:[0,100]}),Object(x.jsx)(k.a,{}),Object(x.jsx)(j.a,{yAxisId:"right",type:"monotone",dataKey:"mistakes",stroke:"#e34f26",dot:{r:0},activeDot:{r:5}}),Object(x.jsx)(j.a,{yAxisId:"left",type:"monotone",dataKey:"speed",stroke:"#00b0ff",dot:{r:0}})]})})},S=a(378),C=Object(u.a)({root:{padding:10,fontSize:20},strong:{color:"#fff"},em:{color:"#d7ef00"}}),O=function(e){var t=e.text,a=e.data,r=C();return Object(x.jsxs)(S.a,{className:r.root,children:[Object(x.jsxs)("strong",{className:r.strong,children:[t,": "]}),Object(x.jsx)("em",{className:r.em,children:a})]})},B="Escape",M="SPACE - START ",A=" ESC - PAUSE / EXIT",I="MODE_PRESTART",R="MODE_START",F="MODE_PROGRESS",N="MODE_PAUSE",D="MODE_MODAL",H="Complete",P="Start over",U="Resume",W=function(e,t){return t<=0?0:Math.floor(e/t*60)},E=function(e,t){var a=e,r=t;return 0===r?0:a>r?Math.round((a-r)/a*100):Math.round((r-a)/a*100)},J=Object(u.a)({root:{background:"#3C5E9D66"},box:{position:"absolute",padding:25,top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"fit-content",height:"fit-content",background:"rgb(24,26,27)",boxShadow:"0 0 10px cyan"},btn:{background:"whitesmoke",margin:10}}),q=function(e){var t=e.typedChars,a=e.typedCorrectChars,r=e.chartData,o=e.open,s=e.onClose,n=e.handleClickButton,i=J(),h=function(e){return{minutes:Math.floor(e%3600/60),seconds:Math.floor(e%3600%60)}}(r.length),d=function(e,t){return 60*e+t}(h.minutes,h.seconds),c=W(a,d),l=function(e,t){if(0===e)return 0;var a=100-E(e,t);return Math.trunc(a)-a===0?Math.trunc(a):a}(t,a);return Object(x.jsx)(p.a,{open:o,onClose:s,className:i.root,children:Object(x.jsxs)(m.a,{className:i.box,children:[Object(x.jsx)(O,{text:"Typed chars",data:a+" signs"}),Object(x.jsx)(O,{text:"Speed",data:c+" signs/minute"}),Object(x.jsx)(O,{text:"Accuracy",data:l+"%"}),Object(x.jsx)(T,{data:r}),Object(x.jsx)(g.a,{id:H,className:i.btn,onClick:n,children:H}),Object(x.jsx)(g.a,{id:P,className:i.btn,onClick:n,children:P}),Object(x.jsx)(g.a,{id:U,className:i.btn,onClick:n,disabled:0===a,children:U})]})})},z=Object(u.a)({root:{display:"flex",padding:"3%",marginTop:"3%"},left:{padding:"15px 0 15px 15px",background:"#E3E6E9",color:"#CBC9CD",border:"solid #99B4D1",borderWidth:"5px 0 5px 5px",borderRadius:"26px 0 0 26px",textAlign:"right",float:"left",width:"50%",whiteSpace:"nowrap",overflow:"hidden"},right:{padding:"15px 15px 15px 0",background:"#FFFFFF",color:"#333333",border:"solid #99B4D1",borderWidth:"5px 5px 5px 0",borderRadius:"0 26px 26px 0",float:"right",width:"50%",whiteSpace:"nowrap",overflow:"hidden"},pre:{fontSize:50,margin:"8px 0"}}),G=function(e){var t=e.leftText,a=e.rightText,r=e.typedChars,o=e.typedCorrectChars,s=e.open,n=e.chartData,i=e.onClose,h=e.handleClickButton,d=z();return Object(x.jsxs)("div",{className:d.root,children:[Object(x.jsx)("div",{className:d.left,children:Object(x.jsx)("pre",{style:{float:"right"},className:d.pre,children:t})}),Object(x.jsx)("div",{className:d.right,children:Object(x.jsx)("pre",{className:d.pre,children:a})}),Object(x.jsx)(q,{typedChars:r,typedCorrectChars:o,chartData:n,open:s,onClose:i,handleClickButton:h})]})},V=a(387),L=Object(u.a)({root:{background:"#35b0ff2e",boxShadow:"0 0 2px whitesmoke"},typo:{fontSize:25,fontWeight:600}}),Y=function(){var e=L();return Object(x.jsx)(V.a,{className:e.root,children:Object(x.jsx)(c.a,{children:Object(x.jsx)(S.a,{className:e.typo,children:"Stamina"})})})},_=a(110),K=a.n(_),X=a(381),Z=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).timerStartButton=o.a.createRef(),r.timerStopButton=o.a.createRef(),r.timerPauseButton=o.a.createRef(),r.timerResumeButton=o.a.createRef(),r.timerResetButton=o.a.createRef(),r}return Object(i.a)(a,[{key:"startTimer",value:function(e){e()}},{key:"stopTimer",value:function(e){e()}},{key:"pauseTimer",value:function(e){e()}},{key:"resumeTimer",value:function(e){e()}},{key:"resetTimer",value:function(e){e()}},{key:"componentDidUpdate",value:function(e){var t=!1===e.start&&!1===e.pause&&!1===e.resume&&!0===e.stop&&!1===e.reset,a=!1===e.start&&!1===e.pause&&!1===e.resume&&!1===e.stop&&!0===e.reset,r=!0===e.start&&!1===e.pause&&!1===e.resume&&!1===e.stop&&!1===e.reset,o=!1===e.start&&!1===e.pause&&!0===e.resume&&!1===e.stop&&!1===e.reset,s=!1===e.start&&!0===e.pause&&!1===e.resume&&!1===e.stop&&!1===e.reset;(t||a)&&!0===this.props.start&&this.timerStartButton.current.click(),(r||s||o)&&!0===this.props.stop&&this.timerStopButton.current.click(),(r||o)&&!0===this.props.pause&&this.timerPauseButton.current.click(),s&&!0===this.props.resume&&this.timerResumeButton.current.click(),(r||s||o)&&!0===this.props.reset&&this.timerResetButton.current.click()}},{key:"render",value:function(){var e=this,t=this.props,a=t.addDataToChart,r=t.classes;return Object(x.jsx)(K.a,{initialTime:0,formatValue:function(e){return"".concat((t=e)<10?"0".concat(t):t);var t},startImmediately:!1,checkpoints:new Array(180).fill(0).map((function(e,t){return{time:1e3*t,callback:a}})),children:function(t){var a=t.start,s=t.resume,n=t.pause,i=t.stop,h=t.reset;return Object(x.jsxs)(o.a.Fragment,{children:[Object(x.jsx)(X.a,{className:r.root,children:Object(x.jsxs)(S.a,{className:r.typo,children:[Object(x.jsx)(K.a.Minutes,{})," : ",Object(x.jsx)(K.a.Seconds,{})]})}),Object(x.jsxs)("div",{children:[Object(x.jsx)("button",{hidden:!0,ref:e.timerStartButton,onClick:function(){return e.startTimer(a)},children:"Start"}),Object(x.jsx)("button",{hidden:!0,ref:e.timerPauseButton,onClick:function(){return e.pauseTimer(n)},children:"Pause"}),Object(x.jsx)("button",{hidden:!0,ref:e.timerResumeButton,onClick:function(){return e.resumeTimer(s)},children:"Resume"}),Object(x.jsx)("button",{hidden:!0,ref:e.timerStopButton,onClick:function(){return e.stopTimer(i)},children:"Stop"}),Object(x.jsx)("button",{hidden:!0,ref:e.timerResetButton,onClick:function(){return e.resetTimer(h)},children:"Reset"})]})]})}})}}]),a}(o.a.Component),Q=Object(l.a)((function(){return{root:{paddingTop:"8%",inlineSize:"fit-content"},typo:{textAlign:"center",background:"#FFFFFF",color:"#333333",border:"3px solid #99B4D1",borderRadius:20,width:100,padding:10,fontSize:20}}}))(Z),$="In this book, we invite you join us on a whirlwind ride through ten years of laughing, playing, working, and learning together. We think it's important for you to realize how these ideas came together and to know that they have been refined through experiences with real students in real classrooms. The ideas in this book come, for the most part, out of our explorations together as we tried to integrate what we know about good literacy practices with what we know about vocabulary learning. A group of us, including the three authors, were part of a teacher research project with a focus on vocabulary that met for dinners, discussion, and brainstorming sessions for almost a decade. These meetings were part of what we call a think tank model of professional development and exploration (Henry et al., 1999). In this model, teachers and researchers come together, each bringing a high level of expertise in his or her own area. The combined expertise in our meeting room was amazing. Bonnie had taught for 30 years, served as the social studies helping teacher for her district, and, as a faculty associate (on loan from her district to supervise student teachers), taught the language arts methodology course for Simon Fraser University. At the time of this project, Bonnie was both a grade 6/7 teacher and the principal of an urban elementary school where students came from a variety of cultures and spoke several different languages. Jan had been a teacher for 23 years, the reading consultant for a large urban metropolitan district in Ontario, and a faculty associate who taught both the reading and the language arts methodology courses for Simon Fraser University. She was a grade 4/5 teacher at the time of the project and later became the primary literacy consultant for the Vancouver School Board. Both Bonnie and Jan had taught several different grades, from primary to intermediate, throughout their careers. Judy was an assistant and later associate professor in reading and literacy at Simon Fraser University after finishing her dissertation in educational psychology/curriculum and instruction/ reading/vocabulary at the University of Illinois at Urbana-Champaign. Prior to that she had been a teacher and graduated with a Reading Specialist credential from the University of California at Davis. Other core members of the group mentioned throughout the book were a band of exemplary classroom teachers: Teresa Blackstone, Alan Jones, and Susie Cross. Cindy Butler was the main behind-the-scenes research assistant for the project, and she entered the teaching profession during this project. Our common connection came through Simon Fraser University, where several members of the group had served as faculty associates, took classes, or taught classes on literacy. From the outset, it was clear that the members of the vocabulary group shared a common vision and theoretical frame. In particular, we were informed by Lev Vygotsky's notion of sociocultural interactions and the power of discussion as a means to create new understandings and expand our horizons (Vygotsky, 1978). When Judy received a grant to explore alternatives to traditional vocabulary instruction, she invited members of the group to join her as teacher researchers who combined their expertise in teaching with her knowledge of vocabulary research. The diversity of perspectives was celebrated as essential in their construction of new understandings about effective vocabulary instruction. Coming together as a group of experts alleviated many of the issues associated with collaborative projects, such as hierarchy, credibility, and ownership (Henry et al., 1999). Because their expertise as teachers brought them to the group, the teachers didn't feel as though they were unequal partners. Instead, their expertise was explicitly valued and encouraged to flourish. The university participants were also acknowledged as experts in the research community who could offer a different set of skills and abilities to the group. Our unique strengths contributed to our abilities to learn from each other, help each other, reflect on our practices, engage in shared critique of those practices, and support one another in making professional choices and change. In one paper written about this project, we identif1ed these elements of the group dynamic as essential in contributing to the sense of community: (a) safety, built on respect, (b) engaging dialogue, (c) collaboration among equals, (d) personal commitment, and (e) time. The topic, vocabulary learning, was defined, but how we explored it together and what we were not. The teacher researchers and university researchers all acknowledge that they changed and benefited from their involvement in the project (Henry et al., 1999). We were all energized by the opportunity to discuss ideas, practice, and problems with each other. Bonnie gave a workshop for a local school, the principal, Grant Mcintosh, thanked her by presenting her with this story: She was arriving at school feeling bored and listless. The spectre of another morning reading her students' stories, dripping with mindless violence and populated by mundane characters, was daunting. She needed a teaching makeover desperately! She yearned to hear real children's voices in their writing, real emotion, real people, the imagination that kids have. Where could she go? It wasn't as if there was a shop like a beauty salon where one can go for this kind of service. Mud mask? Hair color? Nails? Style? Massage? New way of teaching writing? Just when her life was at its darkest, when she was considering a career in real estate, she got a call that was to change her life-well, her teaching life, anyway. She joined a group of teachers who shared some of the same feelings about kids' writing. They talked about it, they laughed, they cried, and they looked for ways to help children tap into their rich imaginations. She brought real stories with powerful language to the students and let them borrow and steal words and characters and ideas for their writing. She developed all kinds of strategies to help kids discover, enjoy, and play with language. They wrote poems, memories, adventure stories, and picture books. They wrote like readers and read like writers! It was like a renaissance in her classroom. Now every day she rushes to school, flushed with excitement at the prospect of reading her children's stories and seeing the fruits of her labors. Right? Get real! But at least now there is a possibility that she will be able to read some writing that is fresh, interesting, dynamic, imaginative. She'll settle for just one of these. This humorous essay shows why we did what we did. In the workshop, Bonnie conveyed her previous sense of despair as a teacher of writing and the excitement she felt as her students began to become conscious of the power of words as tools of communication. Many teachers share her struggle. Perhaps you are one of them. If so, we hope our explanations of struggles and successes will enable you to ponder your own practice and help you with the vital job of teaching students to be better readers, writers, and word users.In this book, we invite you join us on a whirlwind ride through ten years of laughing, playing, working, and learning together. We think it's important for you to realize how these ideas came together and to know that they have been refined through experiences with real students in real classrooms. The ideas in this book come, for the most part, out of our explorations together as we tried to integrate what we know about good literacy practices with what we know about vocabulary learning. A group of us, including the three authors, were part of a teacher research project with a focus on vocabulary that met for dinners, discussion, and brainstorming sessions for almost a decade. These meetings were part of what we call a think tank model of professional development and exploration (Henry et al., 1999). In this model, teachers and researchers come together, each bringing a high level of expertise in his or her own area. The combined expertise in our meeting room was amazing. Bonnie had taught for 30 years, served as the social studies helping teacher for her district, and, as a faculty associate (on loan from her district to supervise student teachers), taught the language arts methodology course for Simon Fraser University. At the time of this project, Bonnie was both a grade 6/7 teacher and the principal of an urban elementary school where students came from a variety of cultures and spoke several different languages. Jan had been a teacher for 23 years, the reading consultant for a large urban metropolitan district in Ontario, and a faculty associate who taught both the reading and the language arts methodology courses for Simon Fraser University. She was a grade 4/5 teacher at the time of the project and later became the primary literacy consultant for the Vancouver School Board. Both Bonnie and Jan had taught several different grades, from primary to intermediate, throughout their careers. Judy was an assistant and later associate professor in reading and literacy at Simon Fraser University after finishing her dissertation in educational psychology/curriculum and instruction/ reading/vocabulary at the University of Illinois at Urbana-Champaign. Prior to that she had been a teacher and graduated with a Reading Specialist credential from the University of California at Davis. Other core members of the group mentioned throughout the book were a band of exemplary classroom teachers: Teresa Blackstone, Alan Jones, and Susie Cross. Cindy Butler was the main behind-the-scenes research assistant for the project, and she entered the teaching profession during this project. Our common connection came through Simon Fraser University, where several members of the group had served as faculty associates, took classes, or taught classes on literacy. From the outset, it was clear that the members of the vocabulary group shared a common vision and theoretical frame. In particular, we were informed by Lev Vygotsky's notion of sociocultural interactions and the power of discussion as a means to create new understandings and expand our horizons (Vygotsky, 1978). When Judy received a grant to explore alternatives to traditional vocabulary instruction, she invited members of the group to join her as teacher researchers who combined their expertise in teaching with her knowledge of vocabulary research. The diversity of perspectives was celebrated as essential in their construction of new understandings about effective vocabulary instruction. Coming together as a group of experts alleviated many of the issues associated with collaborative projects, such as hierarchy, credibility, and ownership (Henry et al., 1999). Because their expertise as teachers brought them to the group, the teachers didn'stories feel as though they were unequal partners. Instead, their expertise was explicitly valued and encouraged to flourish. The university participants were also acknowledged as experts in the research community who could offer a different set of skills and abilities to the group. Our unique strengths contributed to our abilities to learn from each other, help each other, reflect on our practices, engage in shared critique of those practices, and support one another in making professional choices and change. In one paper written about this project, we identif1ed these elements of the group dynamic as essential in contributing to the sense of community: (a) safety, built on respect, (b) engaging dialogue, (c) collaboration among equals, (d) personal commitment, and (e) time. The topic, vocabulary learning, was defined, but how we explored it together and what we were not. The teacher researchers and university researchers all acknowledge that they changed and benefited from their involvement in the project (Henry et al., 1999). We were all energized by the opportunity to discuss ideas, practice, and problems with each other. Bonnie gave a workshop for a local school, the principal, Grant Mcintosh, thanked her by presenting her with this story: She was arriving at school feeling bored and listless. The spectre of another morning reading her students' stories, dripping with mindless violence and populated by mundane characters, was daunting. She needed a teaching makeover desperately! She yearned to hear real children's voices in their writing, real emotion, real people, the imagination that kids have. Where could she go? It wasn'stories as if there was a shop like a beauty salon where one can go for this kind of service. Mud mask? Hair color? Nails? Style? Massage? New way of teaching writing? Just when her life was at its darkest, when she was considering a career in real estate, she got a call that was to change her life-well, her teaching life, anyway. She joined a group of teachers who shared some of the same feelings about kids' writing. They talked about it, they laughed, they cried, and they looked for ways to help children tap into their rich imaginations. She brought real stories with powerful language to the students and let them borrow and steal words and characters and ideas for their writing. She developed all kinds of strategies to help kids discover, enjoy, and play with language. They wrote poems, memories, adventure stories, and picture books. They wrote like readers and read like writers! It was like a renaissance in her classroom. Now every day she rushes to school, flushed with excitement at the prospect of reading her children's stories and seeing the fruits of her labors. Right? Get real! But at least now there is a possibility that she will be able to read some writing that is fresh, interesting, dynamic, imaginative. She'll settle for just one of these. This humorous essay shows why we did what we did. In the workshop, Bonnie conveyed her previous sense of despair as a teacher of writing and the excitement she felt as her students began to become conscious of the power of words as tools of communication. Many teachers share her struggle. Perhaps you are one of them. If so, we hope our explanations of struggles and successes will enable you to ponder your own practice and help you with the vital job of teaching students to be better readers, writers, and word users. If you read this story you'll be able to find a common language with any American. All of them are very proud of their Constitution. The USA Constitution was written by fifty-five men who met at Philadelphia Convention in 1787. In four months they wrote the Constitution which has lasted over 200 years!All were white men. The average age was forty-two. Many of these men had been leaders during the American Revolution. About three-fourths of them had served in Congress. Most were leaders in their states. Some were rich, but most were not. None were poor. There were no native Americans among the delegates. There were no women. There were no black men or slaves. Poor farmers were not present either. George Washington, James Madison, and Benjamin Franklin were the three important delegates to the Convention. George Washington came from Virginia. He was probably the most respected man in the country. As the commander-in-chief of the American army during the Revolution, he was a great hero to most people. Then he had retired to his plantation and would have liked to remain there. However, his friends told him he should attend the convention. They said his support was necessary to get a new constitution accepted by the people. Since Washington thought a stronger national government was necessary, he came to Philadelphia. James Madison is often called the \"Father of the Constitution\". His ideas about government greatly influenced the other delegates. He had already developed a written plan for the new government which he brought to Philadelphia. It was known as the Virginia plan and it called for a strong national government. Madison took notes during the meetings. Much of what we know about the Philadelphia Convention is based on his notes. Benjamin Franklin attended the convention as a delegate from Pennsylvania. He was 81 years old and in poor health. Like Washington, he was highly respected by the Americans. He had been a printer, inventor and writer. He had also helped the country develop good relations with other nations. At the convention, he encouraged the delegates to cooperate with each other and work hard to settle their differences. His support of the Constitution was important to the other delegates. Once the Framers reached these agreements, it was time to get down to work and create a constitution. Delegates from states with large populations believed that a state with more people should have more votes in Congress. During the long debates, the Framers could not reach a decision on this issue. Neither side was willing to give in. The delegates were almost ready to quit and go home. A special committee of one delegate from each state was formed to try and find a solution. The members of the committee worked hard to find a compromise a majority of the delegates would accept. The result of the committee's work is known as the Great Compromise. The main parts of this compromise were: 1) Congress would have two parts, or houses. These houses would be the Senate and the House of Representatives. 2) Each state, large or small, would have 2 representatives in the Senate. 3) In the House, the number of representatives of each state would be based on the number of people living in that state. By May 25, 1787, the delegates from over half of the states had arrived in Philadelphia. From the start, the Framers agreed on 4 things: 1. George Washington would serve as president of the convention. 2. Each state, large or small, would have one vote at the convention. 3. They would not follow the instructions Congress had given them. They would not even try to improve the Articles of confederation. They thought the Articles had too many weaknesses. Instead, they decided to write an entirely new constitution. 4. They wo.uld keep their discussions private. They also decided that what they said at the convention would remain a secret for 30 years. There were 2 reasons for this: 1) They believed they needed to speak freely to create the best possible constitution. If people could listen to them and tell others what they said, they would not feel as free to discuss their ideas. 2) They wanted the new constitution to be accepted by the people. They were afraid that the people might not accept it if they knew all the disagreements the Framers had. The agreement meant that each state would have equal power in the Senate. The states with more people would have more power in the House of Representatives. However, no law could be passed unless a majority of both the Senate and the House of Representatives voted for it. Because of this compromise large and small states could check each other's power and protect their own interests. When it comes to American newspapers, a lot of people outside the United States think of  that slender, serious paper, the International Herald Tribune, said to be on the daily reading list of many world leaders. The Herald Tribune, however, is not really an American paper. It is published in Paris (and printed simultaneously in Paris, London, Zurich, Hongkong, Singapore, The Hague, Marseille, and Miami) as an international digest of news, most of it taken from its much-larger parents. The New York Times and The Washington Post. Many people in America have never heard of it. And few Americans would read it when they can get the real thing, that is, the full-sized daily newspapers. In 1986, a total of 9,144 newspapers (daily, Sunday, weekly, etc.) appeared in 6,516 towns in the United States. Most of the daily newspapers are published rain or shine, on Christmas, Thanksgiving, or the Fourth of July (Independence Day). Including the 85 foreign-language newspapers published in 34 different languages, the daily newspapers in the United States sell over 63 million copies a day. The 762 Sunday papers are usually much larger than the regular editions. The record for a Sunday paper is held by The New York Times. One issue on a Sunday in 1965 contained 946 pages, weighed 36 pounds, and cost 50 cents. Reading the Sunday paper is an American tradition, for some people an alternative to going to church. Getting through all of the sections can take most of the day, leaving just enough time for the leisurely Sunday dinner. The Sunday newspapers have an average circulation of 57 million copies. There are also more than 7,000 newspapers which are published weekly, semi-weekly or monthly. Most daily newspapers are of the \"quality\" rather than the \"popular\" (that is, non-quality) variety. Among the twenty newspapers with the largest circulation only two or three regularly feature crime, sex, and scandal. The paper with the largest circulation, The Wall Street Journal, is a very serious newspaper indeed. It is often said that there is no \"national press\" in the United States as there is in Great Britain, for instance, where five popular followed by three quality newspapers dominate the circulation figures and are read nationwide. In one sense this is true. Most daily newspapers are distributed locally, or regionally, people buying one of the big city newspapers in addition to the smaller local ones. A few of the best-known newspapers such as The Wall Street Journal can be found throughout the country. Yet, one wouldn'stories expect The Milwaukee Journal to be read: in Boston, or The Boston Globe in Houston. There has been one attempt to publish a truly national newspaper, USA: Today. But it still has only a circulation of 1.2 million and, in its popular form, can only offer news of general interest. This is not enough in a country where state, city, and local news and political developments most deeply affect readers and are therefore especially interesting to them. In another sense, however, there is a national press, one that comes from influence and the sharing of news. Some of the largest newspapers are at the same time news-gathering businesses. They not only print newspapers, they also collect and sell news, news features, and photographs to hundreds of other papers in the U.S. and abroad. Three of the better-known of these are The New York Times', The Washington Post's, and the Los Angeles Times' news services. In one famous example, an expose of the CIA published in The New York Times also appeared in 400 other American papers and was picked up or used in some way by hundreds more overseas. \"Picked up\" is not quite right. Such stories are copyrighted and other newspapers must pay for their use. Often newspapers try to avoid paying for this news by using the original newspaper's story and quoting the story indirectly (\"The Washington Post reported today that...\"). Because so many other newspapers print (or \"borrow\") news stories from the major American newspapers and magazines, they have great national and international influence. This influence spreads far beyond their own readers.",ee=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={start:!1,pause:!1,resume:!1,stop:!1,reset:!1,open:!1,chartData:[],leftText:M,rightText:A,typedChars:0,typedCorrectChars:0,mode:I,prevMode:""},r}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=this.state,r=a.start,o=a.pause,s=a.resume,n=a.stop,i=a.reset,h=a.open,d=a.chartData,l=a.leftText,u=a.rightText,p=a.typedChars,m=a.typedCorrectChars,g=a.mode,f=a.prevMode,w=function(){e.setState({typedChars:0,typedCorrectChars:0,chartData:[]})},y=function(t){e.setState({leftText:e.state.leftText+t,rightText:e.state.rightText.slice(1),typedChars:e.state.typedChars+1,typedCorrectChars:e.state.typedCorrectChars+1})},b=function(){e.setState({mode:I,prevMode:D,open:!1})},v=function(){e.setState({mode:R,prevMode:D,open:!1})},k=function(t){var a=u[0],r=t.key,o=t.code,s=t.currentTarget.id;g===I&&"Space"===o?(e.setState({mode:R,prevMode:I,start:!1,reset:!0,pause:!1,resume:!1,stop:!1}),e.setState({leftText:"",rightText:$})):g===I&&r===B?e.setState({mode:D,prevMode:I,open:!0,start:!1,reset:!0,pause:!1,resume:!1,stop:!1}):g===R&&r===a?(e.setState({mode:F,prevMode:R,start:!0,stop:!1,pause:!1,resume:!1,reset:!1}),y(r)):g===R&&r===B?e.setState({mode:D,prevMode:R,open:!0,start:!1,reset:!0,pause:!1,resume:!1,stop:!1}):g===F&&r===B?e.setState({mode:D,prevMode:F,open:!0,start:!1,pause:!0,resume:!1,stop:!1,reset:!1}):g===F&&r===a?y(r):g===F&&r!==a&&t.keyCode>=32&&t.keyCode<=122?e.setState({typedChars:e.state.typedChars+1}):g===N&&r===B?e.setState({mode:D,prevMode:N,open:!0}):g===N&&r===a?(e.setState({mode:F,prevMode:N,start:!1,resume:!0,pause:!1,stop:!1,reset:!1}),y(r)):g===D&&s===H?(b(),e.setState({leftText:M,rightText:A,start:!1,reset:!0,pause:!1,resume:!1,stop:!1}),w()):g===D&&s===P?(v(),e.setState({leftText:"",rightText:$,start:!1,reset:!0,pause:!1,resume:!1,stop:!1}),w()):g===D&&f===I&&r===B?b():g===D&&f===N&&r===B?e.setState({mode:N,prevMode:D,open:!1,start:!1,pause:!0,resume:!1,stop:!1,reset:!1}):g===D&&f===R&&r===B?v():(g===D&&f===F&&r===B||g===D&&s===U)&&e.setState({mode:N,prevMode:D,open:!1})};return window.onkeydown=function(e){k(e)},Object(x.jsxs)("div",{className:t.root,children:[Object(x.jsx)(Y,{}),Object(x.jsx)(c.a,{}),Object(x.jsx)(Q,{start:r,pause:o,resume:s,stop:n,reset:i,addDataToChart:function(){var t=d.length;d.push({seconds:t,speed:W(e.state.typedCorrectChars,t),mistakes:E(e.state.typedChars,e.state.typedCorrectChars)})}}),Object(x.jsx)(G,{leftText:l,rightText:u,typedChars:p,typedCorrectChars:m,chartData:d,open:h,onClose:function(e){k(e)},handleClickButton:k})]})}}]),a}(o.a.Component),te=Object(l.a)({root:{paddingTop:"8%"}})(ee);var ae=function(){return Object(x.jsx)("div",{children:Object(x.jsx)(te,{})})};Object(s.render)(Object(x.jsx)(ae,{}),document.getElementById("root"))}},[[356,1,2]]]);
//# sourceMappingURL=main.c0698c76.chunk.js.map