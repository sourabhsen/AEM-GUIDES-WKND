"use strict";(self.webpackChunkaem_wknd_theme=self.webpackChunkaem_wknd_theme||[]).push([[360],{"./stories/pageAuthoring/title.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{HeadingType:function(){return HeadingType},LinkLabelandTitle:function(){return LinkLabelandTitle},Linked:function(){return title_stories_Linked},Standard:function(){return title_stories_Standard},TitleText:function(){return TitleText},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return title_stories}});var title_stories={title:"pageAuthoring/Title",tags:["autodocs"],decorators:[],parameters:{myAddonParameter:{policy:JSON.parse('{"jcr:primaryType":"nt:unstructured","policy_1544759499870":{"jcr:primaryType":"nt:unstructured","jcr:title":"Core Components Examples - Title","allowedTypes":["h1","h2","h3","h4","h5","h6"],"type":"h1","sling:resourceType":"wcm/core/components/policy/policy","linkDisabled":"false","jcr:content":{"jcr:primaryType":"nt:unstructured"},"cq:styleGroups":{"jcr:primaryType":"nt:unstructured","item0":{"jcr:primaryType":"nt:unstructured","cq:styleGroupLabel":"Heading","cq:styles":{"jcr:primaryType":"nt:unstructured","item0":{"jcr:primaryType":"nt:unstructured","cq:styleClasses":"cmp-examples-title--heading1","cq:styleId":"1544759629303","cq:styleLabel":"Heading 1"},"item1":{"jcr:primaryType":"nt:unstructured","cq:styleClasses":"cmp-examples-title--heading2","cq:styleId":"1544759664489","cq:styleLabel":"Heading 2"},"item2":{"jcr:primaryType":"nt:unstructured","cq:styleClasses":"cmp-examples-title--heading3","cq:styleId":"1544759676459","cq:styleLabel":"Heading 3"}}}}}}')}}};window.addEventListener("message",(function(detail){var _JSON_parse_event,detailsObj=(null==detail?void 0:detail.data)||{};if("storybook/style-system/change"===(null===(_JSON_parse_event=JSON.parse(detailsObj).event)||void 0===_JSON_parse_event?void 0:_JSON_parse_event.type)){var styleClasses=JSON.parse(detailsObj).event.args[0].selectedStyle,getHtml=document.querySelector("#storybook-root"),isWrapper=document.querySelector("#storybook-root .sb-wrapper"),updatedHTML='<div class="sb-wrapper '.concat(styleClasses,'">').concat(getHtml.innerHTML,"</div>");isWrapper?(document.querySelector("#storybook-root .sb-wrapper").classList.forEach((function(className){"sb-wrapper"!==className&&document.querySelector("#storybook-root .sb-wrapper").classList.remove(className)})),document.querySelector("#storybook-root .sb-wrapper").classList.add(styleClasses)):getHtml.innerHTML=updatedHTML}}));var HeadingType=function(){return"".concat('<div data-cmp-data-layer="{&#34;title-fb961975b2&#34;:{&#34;@type&#34;:&#34;core-components-examples/components/title&#34;,&#34;dc:title&#34;:&#34;Heading 3&#34;}}" id="title-fb961975b2" class="cmp-title"> <h3 class="cmp-title__text">Heading 3</h3> </div> ')};HeadingType.story={name:"Heading Type",parameters:{design:{}}};var LinkLabelandTitle=function(){return"".concat('<div data-cmp-data-layer="{&#34;title-144a64b39c&#34;:{&#34;@type&#34;:&#34;core-components-examples/components/title&#34;,&#34;dc:title&#34;:&#34;Title&#34;,&#34;xdm:linkURL&#34;:&#34;/content/core-components-examples/library/page-authoring/title.html&#34;}}" id="title-144a64b39c" class="cmp-title"> <h1 class="cmp-title__text"> <a class="cmp-title__link" data-cmp-clickable href="/content/core-components-examples/library/page-authoring/title.html" title="This is the title attribute" aria-label="This is the accessibility label">Title</a> </h1> </div> ')};LinkLabelandTitle.story={name:"Link Label and Title",parameters:{design:{}}};var title_stories_Linked=function(){return"".concat('<div data-cmp-data-layer="{&#34;title-aca6b2bbfb&#34;:{&#34;@type&#34;:&#34;core-components-examples/components/title&#34;,&#34;dc:title&#34;:&#34;Title&#34;,&#34;xdm:linkURL&#34;:&#34;/content/core-components-examples/library/page-authoring/title.html&#34;}}" id="title-aca6b2bbfb" class="cmp-title"> <h1 class="cmp-title__text"> <a class="cmp-title__link" data-cmp-clickable href="/content/core-components-examples/library/page-authoring/title.html">Title</a> </h1> </div> ')};title_stories_Linked.story={name:"Linked",parameters:{design:{}}};var title_stories_Standard=function(){return"".concat('<div data-cmp-data-layer="{&#34;title-e8a4f1e792&#34;:{&#34;@type&#34;:&#34;core-components-examples/components/title&#34;,&#34;dc:title&#34;:&#34;Title&#34;}}" id="title-e8a4f1e792" class="cmp-title"> <h1 class="cmp-title__text">Title</h1> </div> ')};title_stories_Standard.story={name:"Standard",parameters:{design:{}}};var TitleText=function(){return"".concat('<div data-cmp-data-layer="{&#34;title-b358cbbf54&#34;:{&#34;@type&#34;:&#34;core-components-examples/components/title&#34;,&#34;dc:title&#34;:&#34;Lorem Ipsum&#34;}}" id="title-b358cbbf54" class="cmp-title"> <h1 class="cmp-title__text">Lorem Ipsum</h1> </div> ')};TitleText.story={name:"Title Text",parameters:{design:{}}},HeadingType.parameters={...HeadingType.parameters,docs:{...HeadingType.parameters?.docs,source:{originalSource:"() => `${Example_1_TemplatePath}`",...HeadingType.parameters?.docs?.source}}},LinkLabelandTitle.parameters={...LinkLabelandTitle.parameters,docs:{...LinkLabelandTitle.parameters?.docs,source:{originalSource:"() => `${Example_2_TemplatePath}`",...LinkLabelandTitle.parameters?.docs?.source}}},title_stories_Linked.parameters={...title_stories_Linked.parameters,docs:{...title_stories_Linked.parameters?.docs,source:{originalSource:"() => `${Example_3_TemplatePath}`",...title_stories_Linked.parameters?.docs?.source}}},title_stories_Standard.parameters={...title_stories_Standard.parameters,docs:{...title_stories_Standard.parameters?.docs,source:{originalSource:"() => `${Example_4_TemplatePath}`",...title_stories_Standard.parameters?.docs?.source}}},TitleText.parameters={...TitleText.parameters,docs:{...TitleText.parameters?.docs,source:{originalSource:"() => `${Example_5_TemplatePath}`",...TitleText.parameters?.docs?.source}}};const __namedExportsOrder=["HeadingType","LinkLabelandTitle","Linked","Standard","TitleText"]}}]);