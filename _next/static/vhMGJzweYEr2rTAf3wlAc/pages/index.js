(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/0+H":function(e,t,i){"use strict";var u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=u(i("q1tI")),s=i("lwAK");function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,i=void 0!==t&&t,u=e.hybrid,a=void 0!==u&&u,s=e.hasQuery;return i||a&&(void 0!==s&&s)}t.isInAmpMode=n,t.useAmp=function(){return n(a.default.useContext(s.AmpStateContext))}},"/EDR":function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i("23aj")}])},"23aj":function(e,t,i){"use strict";i.r(t);var u=i("q1tI"),a=i.n(u),s=i("apO0"),n=a.a.createElement,r=function(e){var t=e.data,i=e.RenderItem,u=e.keyExtractor,r=t.flatMap((function(e,t){return[n(i,{item:e,index:t,key:u(e)}),n(s.a,{key:u(e)+"separator"})]}));return r.pop(),n(a.a.Fragment,null,r)},l=i("My0H");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&(e[u]=i[u])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var i,u,a=function(e,t){if(null==e)return{};var i,u,a={},s=Object.keys(e);for(u=0;u<s.length;u++)i=s[u],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(u=0;u<s.length;u++)i=s[u],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var m=i("YFqc"),d=i.n(m),p=a.a.createElement,f=function(e){var t=e.href,i=c(e,["href"]);return p(d.a,o({href:t,as:"".concat("/maycomb-tribune").concat(t).concat(".html")},i))},v=a.a.createElement,g=function(e){var t=e.item,i=e.index;return v("div",null,v(f,{href:"/stories/".concat(i)},v("a",null,v("h2",null,t.name))),v("p",null,t.summary))},q=u.createElement;t.default=function(){return q(s.b,{title:"Home"},q(r,{data:l,RenderItem:g,keyExtractor:function(e){return e.id}}))}},"7W2i":function(e,t,i){var u=i("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}},"8Kt/":function(e,t,i){"use strict";var u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=u(i("q1tI")),s=u(i("Xuae")),n=i("lwAK"),r=i("FYa8"),l=i("/0+H");function o(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function c(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=o;var m=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var i=a.default.Children.toArray(t.props.children);return e.concat(i)}),[]).reduce(c,[]).reverse().concat(o(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,i=new Set,u={};return function(a){var s=!0;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){var n=a.key.slice(a.key.indexOf("$")+1);e.has(n)?s=!1:e.add(n)}switch(a.type){case"title":case"base":t.has(a.type)?s=!1:t.add(a.type);break;case"meta":for(var r=0,l=m.length;r<l;r++){var o=m[r];if(a.props.hasOwnProperty(o))if("charSet"===o)i.has(o)?s=!1:i.add(o);else{var c=a.props[o],d=u[o]||new Set;d.has(c)?s=!1:(d.add(c),u[o]=d)}}}return s}}()).reverse().map((function(e,t){var i=e.key||t;return a.default.cloneElement(e,{key:i})}))}var p=s.default();function f(e){var t=e.children;return a.default.createElement(n.AmpStateContext.Consumer,null,(function(e){return a.default.createElement(r.HeadManagerContext.Consumer,null,(function(i){return a.default.createElement(p,{reduceComponentsToState:d,handleStateChange:i,inAmpMode:l.isInAmpMode(e)},t)}))}))}f.rewind=p.rewind,t.default=f},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},FYa8:function(e,t,i){"use strict";var u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=u(i("q1tI"));t.HeadManagerContext=a.createContext(null)},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,i=new Array(e.length);t<e.length;t++)i[t]=e[t];return i}}},My0H:function(e){e.exports=JSON.parse('[{"name":"Court Scene","summary":"Atticus Finch causes backlash in court","article":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus nunc et arcu pellentesque ullamcorper. Nulla fermentum varius urna, id efficitur mauris luctus id. Donec non varius sapien. Mauris ut est fermentum, interdum nunc et, molestie leo. Nulla massa nisi, suscipit eget fringilla eu, euismod et ligula. Integer a malesuada risus. Quisque consequat urna in rutrum accumsan. %%[\'i\', \'/static/tree.png\', \'a tree\']%% Aliquam malesuada bibendum gravida. Praesent rutrum ipsum vulputate elit semper, vitae consequat urna lacinia. Proin gravida tellus eu turpis pharetra, sit amet finibus nunc tristique. Vestibulum at est pulvinar, accumsan magna eget, fermentum quam. Vivamus sit amet molestie felis, nec accumsan est. Vivamus id elementum felis, non semper est.\\n\\nFusce lorem erat, posuere eu suscipit vel, tristique sed eros. Suspendisse in diam ac neque consequat commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce quis posuere risus. Pellentesque condimentum nunc sit amet tellus dignissim hendrerit. Nam viverra, felis eu auctor imperdiet, arcu est rutrum nisl, eget aliquam leo est tincidunt est. Ut metus est, faucibus ut arcu vel, sollicitudin rhoncus purus. Sed maximus, felis ac ornare dictum, velit ligula vehicula nisl, vitae eleifend ante lectus in dui. In molestie auctor libero. Integer posuere magna odio, sit amet dictum tortor vulputate sit amet.\\nVestibulum vulputate eget tellus sit amet lobortis. Proin eget ipsum in sapien tristique mollis. Pellentesque congue orci accumsan sodales sagittis. Duis quis nisl felis. Morbi ex leo, eleifend ut dolor et, volutpat convallis orci. Nulla nec ornare felis. Nam massa metus, gravida a erat id, blandit consectetur erat. Quisque aliquet sapien arcu, in condimentum est volutpat sed. Nulla malesuada ex bibendum pellentesque sollicitudin. Pellentesque non est tortor. Sed in mauris ac massa semper vestibulum id et orci. Morbi tellus enim, egestas id lectus et, porta ultricies mi. Donec eu quam ut enim tincidunt tempor at in elit. Donec quis neque ullamcorper neque consequat faucibus. Curabitur arcu urna, vulputate sit amet laoreet sed, dictum a sapien. Praesent dapibus, metus non sollicitudin commodo, erat mi ornare nunc, in lacinia tortor mauris eget lacus.\\n\\nDonec id est nec dui aliquam condimentum. Cras iaculis sem odio, vitae fringilla metus congue non. Nulla lacinia dui nec velit elementum, nec tincidunt arcu sodales. Praesent dolor metus, aliquet vel consectetur sit amet, ultricies vitae diam. Mauris vitae rutrum arcu. Sed nec ullamcorper est, nec aliquet nulla. Pellentesque pharetra quam nunc, ac blandit nisl egestas id. Vestibulum condimentum gravida ex vel rutrum. Praesent at urna volutpat, faucibus risus vulputate, sodales ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In tincidunt ante orci, ut suscipit leo placerat sed.\\n\\nAenean ac odio sed sem venenatis laoreet in a lacus. Pellentesque molestie magna fermentum odio blandit laoreet. Aliquam quis porttitor risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas tempor fringilla semper. Maecenas finibus consectetur ipsum vel posuere. Praesent gravida libero id diam pretium, vel faucibus nunc lobortis. Cras felis risus, semper vitae metus a, sodales rhoncus massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent fermentum dolor id sem gravida placerat. Cras cursus quam vitae luctus ultricies. Integer consequat sed nisl sit amet tincidunt.\\n\\nEtiam viverra, magna nec porta rutrum, dolor orci consequat massa, vitae iaculis orci elit in sapien. Suspendisse a ultricies dui. Donec vel elit lacinia, mattis dui nec, volutpat diam. Vestibulum dapibus scelerisque ipsum non tincidunt. Pellentesque a massa quam. Nunc sit amet hendrerit nisi. Curabitur sodales, nunc vel faucibus hendrerit, justo augue tincidunt diam, pharetra dictum quam tellus placerat ex. Aenean sagittis leo vel auctor aliquam. Nunc posuere tincidunt faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum vel turpis id risus luctus lacinia. Suspendisse blandit dolor non aliquam hendrerit. Mauris risus nulla, viverra efficitur euismod nec, volutpat quis neque.\\n\\nQuisque pellentesque urna est, scelerisque aliquet nisl feugiat ut. Sed sit amet nibh dictum, dignissim metus sit amet, vestibulum tellus. Duis mattis sit amet sem a efficitur. Duis et elit id leo pretium hendrerit accumsan ut mi. Morbi ultrices nibh et est rhoncus lacinia. Proin sit amet ex at metus gravida dapibus. Aliquam ac posuere lectus, eget tempus velit. Nam porttitor ligula mauris, eu pellentesque leo aliquet non. Proin pulvinar congue nunc, a venenatis sapien vulputate eget. Morbi nec leo et nisi volutpat malesuada eget sed mauris. Integer pulvinar faucibus tempor. In ornare varius lectus sed laoreet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus mollis orci nec est rhoncus, facilisis eleifend metus gravida.\\n\\nPellentesque eu urna quis urna maximus scelerisque. Quisque ornare hendrerit mauris, ut vehicula elit efficitur nec. In fermentum sollicitudin justo at volutpat. Nunc quis gravida elit. Nulla vulputate nibh eget nisl venenatis porttitor. Pellentesque a sapien nunc. Donec vitae dignissim ipsum, at tempor est. Quisque est tortor, placerat ac tempus sed, suscipit eget augue. Donec sed scelerisque quam. Nullam dapibus, urna in vestibulum sodales, mauris nulla fringilla orci, non porta ante lectus ut enim. Proin tortor nisl, scelerisque nec finibus at, ullamcorper sit amet odio. Maecenas eget eros quis nibh dignissim faucibus. Etiam turpis elit, egestas ut purus non, fringilla elementum magna.\\n\\nNulla placerat, nulla non feugiat mollis, purus justo molestie nunc, ac placerat ex ipsum a dolor. Cras ex lacus, finibus eget consectetur quis, maximus eget massa. Vivamus eget lectus et nibh rutrum accumsan. Donec neque sapien, faucibus a sem ut, cursus aliquam turpis. Ut ut tempus diam. Integer tincidunt porta leo, nec fermentum nibh pellentesque et. Pellentesque sagittis mi sit amet quam fringilla egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim vel nunc non cursus. Donec egestas blandit finibus.\\n\\nNulla interdum ante eget nunc lobortis convallis. Vivamus quis quam enim. Nunc ut euismod urna. Proin fringilla dolor ac dui pellentesque, at viverra tortor efficitur. Pellentesque tristique ex tellus, ut accumsan mauris laoreet ut. Proin vulputate sodales volutpat. Morbi in ultrices augue. Etiam eget mi interdum, viverra eros a, eleifend ex. ","id":"0"},{"name":"Court Scene 2","summary":"Atticus Finch causes more backlash in court","article":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. %%[\'i\', \'/static/tree2.png\', \'a bigs trees\']%% Quisque finibus nunc et arcu pellentesque ullamcorper. Nulla fermentum varius urna, id efficitur mauris luctus id. Donec non varius sapien. Mauris ut est fermentum, interdum nunc et, molestie leo. Nulla massa nisi, suscipit eget fringilla eu, euismod et ligula. Integer a malesuada risus. Quisque consequat urna in rutrum accumsan. Aliquam malesuada bibendum gravida. Praesent rutrum ipsum vulputate elit semper, vitae consequat urna lacinia. Proin gravida tellus eu turpis pharetra, sit amet finibus nunc tristique. Vestibulum at est pulvinar, accumsan magna eget, fermentum quam. Vivamus sit amet molestie felis, nec accumsan est. Vivamus id elementum felis, non semper est.\\n\\nFusce lorem erat, posuere eu suscipit vel, tristique sed eros. Suspendisse in diam ac neque consequat commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce quis posuere risus. Pellentesque condimentum nunc sit amet tellus dignissim hendrerit. Nam viverra, felis eu auctor imperdiet, arcu est rutrum nisl, eget aliquam leo est tincidunt est. Ut metus est, faucibus ut arcu vel, sollicitudin rhoncus purus. Sed maximus, felis ac ornare dictum, velit ligula vehicula nisl, vitae eleifend ante lectus in dui. In molestie auctor libero. Integer posuere magna odio, sit amet dictum tortor vulputate sit amet.\\n\\nVestibulum vulputate eget tellus sit amet lobortis. Proin eget ipsum in sapien tristique mollis. Pellentesque congue orci accumsan sodales sagittis. Duis quis nisl felis. Morbi ex leo, eleifend ut dolor et, volutpat convallis orci. Nulla nec ornare felis. Nam massa metus, gravida a erat id, blandit consectetur erat. Quisque aliquet sapien arcu, in condimentum est volutpat sed. Nulla malesuada ex bibendum pellentesque sollicitudin. Pellentesque non est tortor. Sed in mauris ac massa semper vestibulum id et orci. Morbi tellus enim, egestas id lectus et, porta ultricies mi. Donec eu quam ut enim tincidunt tempor at in elit. Donec quis neque ullamcorper neque consequat faucibus. Curabitur arcu urna, vulputate sit amet laoreet sed, dictum a sapien. Praesent dapibus, metus non sollicitudin commodo, erat mi ornare nunc, in lacinia tortor mauris eget lacus.\\n\\nDonec id est nec dui aliquam condimentum. Cras iaculis sem odio, vitae fringilla metus congue non. Nulla lacinia dui nec velit elementum, nec tincidunt arcu sodales. Praesent dolor metus, aliquet vel consectetur sit amet, ultricies vitae diam. Mauris vitae rutrum arcu. Sed nec ullamcorper est, nec aliquet nulla. Pellentesque pharetra quam nunc, ac blandit nisl egestas id. Vestibulum condimentum gravida ex vel rutrum. Praesent at urna volutpat, faucibus risus vulputate, sodales ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In tincidunt ante orci, ut suscipit leo placerat sed.\\n\\nAenean ac odio sed sem venenatis laoreet in a lacus. Pellentesque molestie magna fermentum odio blandit laoreet. Aliquam quis porttitor risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas tempor fringilla semper. Maecenas finibus consectetur ipsum vel posuere. Praesent gravida libero id diam pretium, vel faucibus nunc lobortis. Cras felis risus, semper vitae metus a, sodales rhoncus massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent fermentum dolor id sem gravida placerat. Cras cursus quam vitae luctus ultricies. Integer consequat sed nisl sit amet tincidunt.\\n\\nEtiam viverra, magna nec porta rutrum, dolor orci consequat massa, vitae iaculis orci elit in sapien. Suspendisse a ultricies dui. Donec vel elit lacinia, mattis dui nec, volutpat diam. Vestibulum dapibus scelerisque ipsum non tincidunt. Pellentesque a massa quam. Nunc sit amet hendrerit nisi. Curabitur sodales, nunc vel faucibus hendrerit, justo augue tincidunt diam, pharetra dictum quam tellus placerat ex. Aenean sagittis leo vel auctor aliquam. Nunc posuere tincidunt faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum vel turpis id risus luctus lacinia. Suspendisse blandit dolor non aliquam hendrerit. Mauris risus nulla, viverra efficitur euismod nec, volutpat quis neque.\\n\\nQuisque pellentesque urna est, scelerisque aliquet nisl feugiat ut. Sed sit amet nibh dictum, dignissim metus sit amet, vestibulum tellus. Duis mattis sit amet sem a efficitur. Duis et elit id leo pretium hendrerit accumsan ut mi. Morbi ultrices nibh et est rhoncus lacinia. Proin sit amet ex at metus gravida dapibus. Aliquam ac posuere lectus, eget tempus velit. Nam porttitor ligula mauris, eu pellentesque leo aliquet non. Proin pulvinar congue nunc, a venenatis sapien vulputate eget. Morbi nec leo et nisi volutpat malesuada eget sed mauris. Integer pulvinar faucibus tempor. In ornare varius lectus sed laoreet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus mollis orci nec est rhoncus, facilisis eleifend metus gravida.\\n\\nPellentesque eu urna quis urna maximus scelerisque. Quisque ornare hendrerit mauris, ut vehicula elit efficitur nec. In fermentum sollicitudin justo at volutpat. Nunc quis gravida elit. Nulla vulputate nibh eget nisl venenatis porttitor. Pellentesque a sapien nunc. Donec vitae dignissim ipsum, at tempor est. Quisque est tortor, placerat ac tempus sed, suscipit eget augue. Donec sed scelerisque quam. Nullam dapibus, urna in vestibulum sodales, mauris nulla fringilla orci, non porta ante lectus ut enim. Proin tortor nisl, scelerisque nec finibus at, ullamcorper sit amet odio. Maecenas eget eros quis nibh dignissim faucibus. Etiam turpis elit, egestas ut purus non, fringilla elementum magna.\\n\\nNulla placerat, nulla non feugiat mollis, purus justo molestie nunc, ac placerat ex ipsum a dolor. Cras ex lacus, finibus eget consectetur quis, maximus eget massa. Vivamus eget lectus et nibh rutrum accumsan. Donec neque sapien, faucibus a sem ut, cursus aliquam turpis. Ut ut tempus diam. Integer tincidunt porta leo, nec fermentum nibh pellentesque et. Pellentesque sagittis mi sit amet quam fringilla egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim vel nunc non cursus. Donec egestas blandit finibus.\\n\\nNulla interdum ante eget nunc lobortis convallis. Vivamus quis quam enim. Nunc ut euismod urna. Proin fringilla dolor ac dui pellentesque, at viverra tortor efficitur. Pellentesque tristique ex tellus, ut accumsan mauris laoreet ut. Proin vulputate sodales volutpat. Morbi in ultrices augue. Etiam eget mi interdum, viverra eros a, eleifend ex. ","id":"1"},{"name":"Court Scene 3","summary":"Atticus Finch causes more backlash in court","article":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus nunc et arcu pellentesque ullamcorper. Nulla fermentum varius urna, id efficitur mauris luctus id. Donec non varius sapien. Mauris ut est fermentum, interdum nunc et, molestie leo. Nulla massa nisi, suscipit eget fringilla eu, euismod et ligula. Integer a malesuada risus. Quisque consequat urna in rutrum accumsan. Aliquam malesuada bibendum gravida. Praesent rutrum ipsum vulputate elit semper, vitae consequat urna lacinia. Proin gravida tellus eu turpis pharetra, sit amet finibus nunc tristique. Vestibulum at est pulvinar, accumsan magna eget, fermentum quam. Vivamus sit amet molestie felis, nec accumsan est. Vivamus id elementum felis, non semper est.\\n\\nFusce lorem erat, posuere eu suscipit vel, tristique sed eros. Suspendisse in diam ac neque consequat commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce quis posuere risus. Pellentesque condimentum nunc sit amet tellus dignissim hendrerit. Nam viverra, felis eu auctor imperdiet, arcu est rutrum nisl, eget aliquam leo est tincidunt est. Ut metus est, faucibus ut arcu vel, sollicitudin rhoncus purus. Sed maximus, felis ac ornare dictum, velit ligula vehicula nisl, vitae eleifend ante lectus in dui. In molestie auctor libero. Integer posuere magna odio, sit amet dictum tortor vulputate sit amet.\\n\\nVestibulum vulputate eget tellus sit amet lobortis. Proin eget ipsum in sapien tristique mollis. Pellentesque congue orci accumsan sodales sagittis. Duis quis nisl felis. Morbi ex leo, eleifend ut dolor et, volutpat convallis orci. Nulla nec ornare felis. Nam massa metus, gravida a erat id, blandit consectetur erat. Quisque aliquet sapien arcu, in condimentum est volutpat sed. Nulla malesuada ex bibendum pellentesque sollicitudin. Pellentesque non est tortor. Sed in mauris ac massa semper vestibulum id et orci. Morbi tellus enim, egestas id lectus et, porta ultricies mi. Donec eu quam ut enim tincidunt tempor at in elit. Donec quis neque ullamcorper neque consequat faucibus. Curabitur arcu urna, vulputate sit amet laoreet sed, dictum a sapien. Praesent dapibus, metus non sollicitudin commodo, erat mi ornare nunc, in lacinia tortor mauris eget lacus.\\n\\nDonec id est nec dui aliquam condimentum. Cras iaculis sem odio, vitae fringilla metus congue non. Nulla lacinia dui nec velit elementum, nec tincidunt arcu sodales. Praesent dolor metus, aliquet vel consectetur sit amet, ultricies vitae diam. Mauris vitae rutrum arcu. Sed nec ullamcorper est, nec aliquet nulla. Pellentesque pharetra quam nunc, ac blandit nisl egestas id. Vestibulum condimentum gravida ex vel rutrum. Praesent at urna volutpat, faucibus risus vulputate, sodales ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In tincidunt ante orci, ut suscipit leo placerat sed.\\n\\nAenean ac odio sed sem venenatis laoreet in a lacus. Pellentesque molestie magna fermentum odio blandit laoreet. Aliquam quis porttitor risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas tempor fringilla semper. Maecenas finibus consectetur ipsum vel posuere. Praesent gravida libero id diam pretium, vel faucibus nunc lobortis. Cras felis risus, semper vitae metus a, sodales rhoncus massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent fermentum dolor id sem gravida placerat. Cras cursus quam vitae luctus ultricies. Integer consequat sed nisl sit amet tincidunt.\\n\\nEtiam viverra, magna nec porta rutrum, dolor orci consequat massa, vitae iaculis orci elit in sapien. Suspendisse a ultricies dui. Donec vel elit lacinia, mattis dui nec, volutpat diam. Vestibulum dapibus scelerisque ipsum non tincidunt. Pellentesque a massa quam. Nunc sit amet hendrerit nisi. Curabitur sodales, nunc vel faucibus hendrerit, justo augue tincidunt diam, pharetra dictum quam tellus placerat ex. Aenean sagittis leo vel auctor aliquam. Nunc posuere tincidunt faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum vel turpis id risus luctus lacinia. Suspendisse blandit dolor non aliquam hendrerit. Mauris risus nulla, viverra efficitur euismod nec, volutpat quis neque.\\n\\nQuisque pellentesque urna est, scelerisque aliquet nisl feugiat ut. Sed sit amet nibh dictum, dignissim metus sit amet, vestibulum tellus. Duis mattis sit amet sem a efficitur. Duis et elit id leo pretium hendrerit accumsan ut mi. Morbi ultrices nibh et est rhoncus lacinia. Proin sit amet ex at metus gravida dapibus. Aliquam ac posuere lectus, eget tempus velit. Nam porttitor ligula mauris, eu pellentesque leo aliquet non. Proin pulvinar congue nunc, a venenatis sapien vulputate eget. Morbi nec leo et nisi volutpat malesuada eget sed mauris. Integer pulvinar faucibus tempor. In ornare varius lectus sed laoreet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus mollis orci nec est rhoncus, facilisis eleifend metus gravida.\\n\\nPellentesque eu urna quis urna maximus scelerisque. Quisque ornare hendrerit mauris, ut vehicula elit efficitur nec. In fermentum sollicitudin justo at volutpat. Nunc quis gravida elit. Nulla vulputate nibh eget nisl venenatis porttitor. Pellentesque a sapien nunc. Donec vitae dignissim ipsum, at tempor est. Quisque est tortor, placerat ac tempus sed, suscipit eget augue. Donec sed scelerisque quam. Nullam dapibus, urna in vestibulum sodales, mauris nulla fringilla orci, non porta ante lectus ut enim. Proin tortor nisl, scelerisque nec finibus at, ullamcorper sit amet odio. Maecenas eget eros quis nibh dignissim faucibus. Etiam turpis elit, egestas ut purus non, fringilla elementum magna.\\n\\nNulla placerat, nulla non feugiat mollis, purus justo molestie nunc, ac placerat ex ipsum a dolor. Cras ex lacus, finibus eget consectetur quis, maximus eget massa. Vivamus eget lectus et nibh rutrum accumsan. Donec neque sapien, faucibus a sem ut, cursus aliquam turpis. Ut ut tempus diam. Integer tincidunt porta leo, nec fermentum nibh pellentesque et. Pellentesque sagittis mi sit amet quam fringilla egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim vel nunc non cursus. Donec egestas blandit finibus.\\n\\nNulla interdum ante eget nunc lobortis convallis. Vivamus quis quam enim. Nunc ut euismod urna. Proin fringilla dolor ac dui pellentesque, at viverra tortor efficitur. Pellentesque tristique ex tellus, ut accumsan mauris laoreet ut. Proin vulputate sodales volutpat. Morbi in ultrices augue. Etiam eget mi interdum, viverra eros a, eleifend ex. ","id":"2"},{"name":"Court Scene 4","summary":"Atticus Finch causes more backlash in court","article":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus nunc et arcu pellentesque ullamcorper. Nulla fermentum varius urna, id efficitur mauris luctus id. Donec non varius sapien. Mauris ut est fermentum, interdum nunc et, molestie leo. Nulla massa nisi, suscipit eget fringilla eu, euismod et ligula. Integer a malesuada risus. Quisque consequat urna in rutrum accumsan. Aliquam malesuada bibendum gravida. Praesent rutrum ipsum vulputate elit semper, vitae consequat urna lacinia. Proin gravida tellus eu turpis pharetra, sit amet finibus nunc tristique. Vestibulum at est pulvinar, accumsan magna eget, fermentum quam. Vivamus sit amet molestie felis, nec accumsan est. Vivamus id elementum felis, non semper est.\\n\\nFusce lorem erat, posuere eu suscipit vel, tristique sed eros. Suspendisse in diam ac neque consequat commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce quis posuere risus. Pellentesque condimentum nunc sit amet tellus dignissim hendrerit. Nam viverra, felis eu auctor imperdiet, arcu est rutrum nisl, eget aliquam leo est tincidunt est. Ut metus est, faucibus ut arcu vel, sollicitudin rhoncus purus. Sed maximus, felis ac ornare dictum, velit ligula vehicula nisl, vitae eleifend ante lectus in dui. In molestie auctor libero. Integer posuere magna odio, sit amet dictum tortor vulputate sit amet.\\n\\nVestibulum vulputate eget tellus sit amet lobortis. Proin eget ipsum in sapien tristique mollis. Pellentesque congue orci accumsan sodales sagittis. Duis quis nisl felis. Morbi ex leo, eleifend ut dolor et, volutpat convallis orci. Nulla nec ornare felis. Nam massa metus, gravida a erat id, blandit consectetur erat. Quisque aliquet sapien arcu, in condimentum est volutpat sed. Nulla malesuada ex bibendum pellentesque sollicitudin. Pellentesque non est tortor. Sed in mauris ac massa semper vestibulum id et orci. Morbi tellus enim, egestas id lectus et, porta ultricies mi. Donec eu quam ut enim tincidunt tempor at in elit. Donec quis neque ullamcorper neque consequat faucibus. Curabitur arcu urna, vulputate sit amet laoreet sed, dictum a sapien. Praesent dapibus, metus non sollicitudin commodo, erat mi ornare nunc, in lacinia tortor mauris eget lacus.\\n\\nDonec id est nec dui aliquam condimentum. Cras iaculis sem odio, vitae fringilla metus congue non. Nulla lacinia dui nec velit elementum, nec tincidunt arcu sodales. Praesent dolor metus, aliquet vel consectetur sit amet, ultricies vitae diam. Mauris vitae rutrum arcu. Sed nec ullamcorper est, nec aliquet nulla. Pellentesque pharetra quam nunc, ac blandit nisl egestas id. Vestibulum condimentum gravida ex vel rutrum. Praesent at urna volutpat, faucibus risus vulputate, sodales ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In tincidunt ante orci, ut suscipit leo placerat sed.\\n\\nAenean ac odio sed sem venenatis laoreet in a lacus. Pellentesque molestie magna fermentum odio blandit laoreet. Aliquam quis porttitor risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas tempor fringilla semper. Maecenas finibus consectetur ipsum vel posuere. Praesent gravida libero id diam pretium, vel faucibus nunc lobortis. Cras felis risus, semper vitae metus a, sodales rhoncus massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent fermentum dolor id sem gravida placerat. Cras cursus quam vitae luctus ultricies. Integer consequat sed nisl sit amet tincidunt.\\n\\nEtiam viverra, magna nec porta rutrum, dolor orci consequat massa, vitae iaculis orci elit in sapien. Suspendisse a ultricies dui. Donec vel elit lacinia, mattis dui nec, volutpat diam. Vestibulum dapibus scelerisque ipsum non tincidunt. Pellentesque a massa quam. Nunc sit amet hendrerit nisi. Curabitur sodales, nunc vel faucibus hendrerit, justo augue tincidunt diam, pharetra dictum quam tellus placerat ex. Aenean sagittis leo vel auctor aliquam. Nunc posuere tincidunt faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum vel turpis id risus luctus lacinia. Suspendisse blandit dolor non aliquam hendrerit. Mauris risus nulla, viverra efficitur euismod nec, volutpat quis neque.\\n\\nQuisque pellentesque urna est, scelerisque aliquet nisl feugiat ut. Sed sit amet nibh dictum, dignissim metus sit amet, vestibulum tellus. Duis mattis sit amet sem a efficitur. Duis et elit id leo pretium hendrerit accumsan ut mi. Morbi ultrices nibh et est rhoncus lacinia. Proin sit amet ex at metus gravida dapibus. Aliquam ac posuere lectus, eget tempus velit. Nam porttitor ligula mauris, eu pellentesque leo aliquet non. Proin pulvinar congue nunc, a venenatis sapien vulputate eget. Morbi nec leo et nisi volutpat malesuada eget sed mauris. Integer pulvinar faucibus tempor. In ornare varius lectus sed laoreet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus mollis orci nec est rhoncus, facilisis eleifend metus gravida.\\n\\nPellentesque eu urna quis urna maximus scelerisque. Quisque ornare hendrerit mauris, ut vehicula elit efficitur nec. In fermentum sollicitudin justo at volutpat. Nunc quis gravida elit. Nulla vulputate nibh eget nisl venenatis porttitor. Pellentesque a sapien nunc. Donec vitae dignissim ipsum, at tempor est. Quisque est tortor, placerat ac tempus sed, suscipit eget augue. Donec sed scelerisque quam. Nullam dapibus, urna in vestibulum sodales, mauris nulla fringilla orci, non porta ante lectus ut enim. Proin tortor nisl, scelerisque nec finibus at, ullamcorper sit amet odio. Maecenas eget eros quis nibh dignissim faucibus. Etiam turpis elit, egestas ut purus non, fringilla elementum magna.\\n\\nNulla placerat, nulla non feugiat mollis, purus justo molestie nunc, ac placerat ex ipsum a dolor. Cras ex lacus, finibus eget consectetur quis, maximus eget massa. Vivamus eget lectus et nibh rutrum accumsan. Donec neque sapien, faucibus a sem ut, cursus aliquam turpis. Ut ut tempus diam. Integer tincidunt porta leo, nec fermentum nibh pellentesque et. Pellentesque sagittis mi sit amet quam fringilla egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim vel nunc non cursus. Donec egestas blandit finibus.\\n\\nNulla interdum ante eget nunc lobortis convallis. Vivamus quis quam enim. Nunc ut euismod urna. Proin fringilla dolor ac dui pellentesque, at viverra tortor efficitur. Pellentesque tristique ex tellus, ut accumsan mauris laoreet ut. Proin vulputate sodales volutpat. Morbi in ultrices augue. Etiam eget mi interdum, viverra eros a, eleifend ex. ","id":"3"}]')},Nsbk:function(e,t){function i(t){return e.exports=i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},i(t)}e.exports=i},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,i){var u=i("Ijbi"),a=i("EbDI"),s=i("Bnag");e.exports=function(e){return u(e)||a(e)||s()}},Xuae:function(e,t,i){"use strict";var u=i("lwsE"),a=i("PJYZ"),s=i("W8MJ"),n=i("7W2i"),r=i("a1gu"),l=i("Nsbk"),o=i("RIqP");function c(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}Object.defineProperty(t,"__esModule",{value:!0});var m=i("q1tI"),d=!1;t.default=function(){var e,t=new Set;function i(i){e=i.props.reduceComponentsToState(o(t),i.props),i.props.handleStateChange&&i.props.handleStateChange(e)}return function(o){n(f,o);var m,p=(m=f,function(){var e,t=l(m);if(c()){var i=l(this).constructor;e=Reflect.construct(t,arguments,i)}else e=t.apply(this,arguments);return r(this,e)});function f(e){var s;return u(this,f),s=p.call(this,e),d&&(t.add(a(s)),i(a(s))),s}return s(f,null,[{key:"rewind",value:function(){var i=e;return e=void 0,t.clear(),i}}]),s(f,[{key:"componentDidMount",value:function(){t.add(this),i(this)}},{key:"componentDidUpdate",value:function(){i(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),i(this)}},{key:"render",value:function(){return null}}]),f}(m.Component)}},YFqc:function(e,t,i){e.exports=i("cTJO")},ZWax:function(e,t,i){e.exports={logo:"Layout_logo__1gfUS",separator:"Layout_separator__1HU5Q",container:"Layout_container__oiF2U",logocontainer:"Layout_logocontainer__2pSud"}},a1gu:function(e,t,i){var u=i("cDf5"),a=i("PJYZ");e.exports=function(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?a(e):t}},apO0:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var u=i("q1tI"),a=i("8Kt/"),s=i.n(a),n=i("ZWax"),r=i.n(n),l=u.createElement,o=function(){return l("div",{className:r.a.separator})};t.b=function(e){var t=e.children,i=e.Footer,a=e.title;return l(u.Fragment,null,l(s.a,null,l("title",null,a),l("meta",{charSet:"utf-8"}),l("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),l("link",{rel:"icon",href:"".concat("/maycomb-tribune","/favicon.svg"),color:"#000"}),l("link",{rel:"alternate icon",href:"".concat("/maycomb-tribune","/favicon.ico")})),l("div",{className:r.a.container},l("div",{className:r.a.logocontainer},l("div",{style:{flex:1}}),l("img",{className:r.a.logo,src:"".concat("/maycomb-tribune","/static/logo.png")}),l("div",{style:{flex:1}})),l(o,null),l("div",null,t),l(o,null),i&&l(i,null)))}},cTJO:function(e,t,i){"use strict";var u=i("lwsE"),a=i("W8MJ"),s=i("7W2i"),n=i("a1gu"),r=i("Nsbk");function l(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var o=i("TqRt"),c=i("284h");t.__esModule=!0,t.default=void 0;var m,d=c(i("q1tI")),p=i("QmWs"),f=i("g/15"),v=o(i("nOHt")),g=i("elyg");function q(e){return e&&"object"===typeof e?(0,f.formatWithValidation)(e):e}var b=new Map,h=window.IntersectionObserver,P={};function y(){return m||(h?m=new h((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(m.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var x=function(e){s(o,e);var t,i=(t=o,function(){var e,i=r(t);if(l()){var u=r(this).constructor;e=Reflect.construct(i,arguments,u)}else e=i.apply(this,arguments);return n(this,e)});function o(e){var t;return u(this,o),(t=i.call(this,e)).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var t=null,i=null,u=null;return function(a,s){if(u&&a===t&&s===i)return u;var n=e(a,s);return t=a,i=s,u=n,n}}((function(e,t){return{href:(0,g.addBasePath)(q(e)),as:t?(0,g.addBasePath)(q(t)):t}})),t.linkClicked=function(e){var i=e.currentTarget,u=i.nodeName,a=i.target;if("A"!==u||!(a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var s=t.formatUrls(t.props.href,t.props.as),n=s.href,r=s.as;if(function(e){var t=(0,p.parse)(e,!1,!0),i=(0,p.parse)((0,f.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===i.protocol&&t.host===i.host}(n)){var l=window.location.pathname;n=(0,p.resolve)(l,n),r=r?(0,p.resolve)(l,r):n,e.preventDefault();var o=t.props.scroll;null==o&&(o=r.indexOf("#")<0),v.default[t.props.replace?"replace":"push"](n,r,{shallow:t.props.shallow}).then((function(e){e&&o&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==e.prefetch,t}return a(o,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),i=t.href,u=t.as,a=(0,p.resolve)(e,i);return[a,u?(0,p.resolve)(e,u):a]}},{key:"handleRef",value:function(e){var t=this;this.p&&h&&e&&e.tagName&&(this.cleanUpListeners(),P[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var i=y();return i?(i.observe(e),b.set(e,t),function(){try{i.unobserve(e)}catch(t){console.error(t)}b.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();v.default.prefetch(t[0],t[1],e).catch((function(e){0})),P[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,i=this.formatUrls(this.props.href,this.props.as),u=i.href,a=i.as;"string"===typeof t&&(t=d.default.createElement("a",null,t));var s=d.Children.only(t),n={ref:function(t){e.handleRef(t),s&&"object"===typeof s&&s.ref&&("function"===typeof s.ref?s.ref(t):"object"===typeof s.ref&&(s.ref.current=t))},onMouseEnter:function(t){s.props&&"function"===typeof s.props.onMouseEnter&&s.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){s.props&&"function"===typeof s.props.onClick&&s.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==s.type||"href"in s.props)||(n.href=a||u),d.default.cloneElement(s,n)}}]),o}(d.Component);t.default=x},lwAK:function(e,t,i){"use strict";var u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var a=u(i("q1tI"));t.AmpStateContext=a.createContext({})}},[["/EDR",0,1,2]]]);