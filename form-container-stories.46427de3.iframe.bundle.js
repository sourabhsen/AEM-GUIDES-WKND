"use strict";(self.webpackChunkaem_wknd_theme=self.webpackChunkaem_wknd_theme||[]).push([[523],{"./stories/form/container.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CoreFormContainer:function(){return CoreFormContainer},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return container_stories}});var container=__webpack_require__("./storybook-assets/policies/container.json"),container_stories={title:"form/Container",tags:["autodocs"],decorators:[],parameters:{myAddonParameter:{policy:container}}};window.addEventListener("message",(function(detail){var _JSON_parse_event,detailsObj=(null==detail?void 0:detail.data)||{};if("storybook/style-system/change"===(null===(_JSON_parse_event=JSON.parse(detailsObj).event)||void 0===_JSON_parse_event?void 0:_JSON_parse_event.type)){var styleClasses=JSON.parse(detailsObj).event.args[0].selectedStyle,getHtml=document.querySelector("#storybook-root"),isWrapper=document.querySelector("#storybook-root .sb-wrapper"),updatedHTML='<div class="sb-wrapper '.concat(styleClasses,'">').concat(getHtml.innerHTML,"</div>");isWrapper?(document.querySelector("#storybook-root .sb-wrapper").classList.forEach((function(className){"sb-wrapper"!==className&&document.querySelector("#storybook-root .sb-wrapper").classList.remove(className)})),document.querySelector("#storybook-root .sb-wrapper").classList.add(styleClasses)):getHtml.innerHTML=updatedHTML}}));var CoreFormContainer=function(){return"".concat('<form method="POST" action="/content/core-components-examples/library/form/container.html" id="new_form" name="new_form" enctype="multipart/form-data" class="cmp-form aem-Grid aem-Grid--12 aem-Grid--default--12"> <input type="hidden" name=":formstart" value="/content/core-components-examples/library/form/container/jcr:content/root/responsivegrid/demo_665944747/component/container"/> <input type="hidden" name="_charset_" value="utf-8"/> <div class="text cmp-examples-form-text--search aem-GridColumn aem-GridColumn--default--12"> <div class="cmp-form-text" data-cmp-is="formText"> <label for="form-text-1104835627">E-Mail</label> <input class="cmp-form-text__text" data-cmp-hook-form-text="input" type="email" id="form-text-1104835627" placeholder="E-Mail" name="email" spellcheck="true" aria-describedby="form-text-1104835627-helpMessage"/> </div> </div> <div class="text aem-GridColumn aem-GridColumn--default--12"> <div class="cmp-form-text" data-cmp-is="formText"> <label for="form-text-1788423476">Set Password</label> <input class="cmp-form-text__text" data-cmp-hook-form-text="input" type="password" id="form-text-1788423476" placeholder="password" name="pw" required spellcheck="true" aria-describedby="form-text-1788423476-helpMessage"/> </div> </div> <div class="cmp cmp-options aem-GridColumn aem-GridColumn--default--12"> <fieldset class="form-group radio"> <legend>Newsletter</legend> <div class="radio-item"> <label> <input type="radio" name="newsletter" value="true" checked="checked"/> <span>Do you want to get notified about News and Sales?</span> </label> </div> <div class="radio-item"> <label> <input type="radio" name="newsletter" value="false"/> <span>No</span> </label> </div> </fieldset> </div> <div class="hidden aem-GridColumn aem-GridColumn--default--12"> <input type="hidden" id="asset-url" name="Asset URl" value="/assets/marketing/q3/female/hiking"/> </div> <div class="button aem-GridColumn aem-GridColumn--default--12"> <button type="SUBMIT" id="form-button-1390778470" class="cmp-form-button" name="register"> Register </button> </div> </form> ')};CoreFormContainer.story={name:"Core Form Container",parameters:{design:{}}},CoreFormContainer.parameters={...CoreFormContainer.parameters,docs:{...CoreFormContainer.parameters?.docs,source:{originalSource:"() => `${Example_1_TemplatePath}`",...CoreFormContainer.parameters?.docs?.source}}};const __namedExportsOrder=["CoreFormContainer"]},"./storybook-assets/policies/container.json":function(module){module.exports=JSON.parse('{"jcr:primaryType":"nt:unstructured","policy_1559057070844":{"jcr:primaryType":"nt:unstructured","jcr:title":"Core Components Examples - Container","backgroundImageEnabled":"true","backgroundColorEnabled":"true","sling:resourceType":"wcm/core/components/policy/policy","jcr:content":{"jcr:primaryType":"nt:unstructured"},"cq:styleGroups":{"jcr:primaryType":"nt:unstructured","item0":{"jcr:primaryType":"nt:unstructured","cq:styles":{"jcr:primaryType":"nt:unstructured","item0":{"jcr:primaryType":"nt:unstructured","cq:styleClasses":"cmp-examples-container--component-group","cq:styleId":"1579016386576","cq:styleLabel":"Component Group"}}}}}}')}}]);