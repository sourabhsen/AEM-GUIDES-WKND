"use strict";(self.webpackChunkaem_wknd_theme=self.webpackChunkaem_wknd_theme||[]).push([[266],{"./stories/templating/breadcrumb.stories.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DisableShadowing:function(){return DisableShadowing},HideCurrentPage:function(){return HideCurrentPage},NavigationStartLevel:function(){return NavigationStartLevel},ShowHiddenNavigationItems:function(){return ShowHiddenNavigationItems},Standard:function(){return breadcrumb_stories_Standard},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return breadcrumb_stories}});var breadcrumb_stories={title:"templating/Breadcrumb",tags:["autodocs"],decorators:[],parameters:{myAddonParameter:{policy:[]}}};window.addEventListener("message",(function(detail){var _JSON_parse_event,detailsObj=(null==detail?void 0:detail.data)||{};if("storybook/style-system/change"===(null===(_JSON_parse_event=JSON.parse(detailsObj).event)||void 0===_JSON_parse_event?void 0:_JSON_parse_event.type)){var styleClasses=JSON.parse(detailsObj).event.args[0].selectedStyle,getHtml=document.querySelector("#storybook-root"),isWrapper=document.querySelector("#storybook-root .sb-wrapper"),updatedHTML='<div class="sb-wrapper '.concat(styleClasses,'">').concat(getHtml.innerHTML,"</div>");isWrapper?(document.querySelector("#storybook-root .sb-wrapper").classList.forEach((function(className){"sb-wrapper"!==className&&document.querySelector("#storybook-root .sb-wrapper").classList.remove(className)})),document.querySelector("#storybook-root .sb-wrapper").classList.add(styleClasses)):getHtml.innerHTML=updatedHTML}}));var DisableShadowing=function(){return"".concat('<nav id="breadcrumb-39f99b6c5d" class="cmp-breadcrumb" aria-label="Breadcrumb" data-cmp-data-layer="{&#34;breadcrumb-39f99b6c5d&#34;:{&#34;@type&#34;:&#34;core-components-examples/components/breadcrumb&#34;}}"> <ol class="cmp-breadcrumb__list" itemscope itemtype="http://schema.org/BreadcrumbList"> <li class="cmp-breadcrumb__item" data-cmp-data-layer="{&#34;breadcrumb-39f99b6c5d-item-9bee4d4454&#34;:{&#34;@type&#34;:&#34;core-components-examples/components/breadcrumb/item&#34;,&#34;repo:modifyDate&#34;:&#34;2021-09-17T20:37:43Z&#34;,&#34;dc:title&#34;:&#34;Component Library&#34;,&#34;xdm:linkURL&#34;:&#34;/content/core-components-examples/library.html&#34;}}" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"> <a class="cmp-breadcrumb__item-link" itemprop="item" data-cmp-clickable href="/content/core-components-examples/library.html"> <span itemprop="name">Component Library</span> </a> <meta itemprop="position" content="1"/> </li> <li class="cmp-breadcrumb__item" data-cmp-data-layer="{&#34;breadcrumb-39f99b6c5d-item-1d32a567a9&#34;:{&#34;@type&#34;:&#34;core-components-examples/components/breadcrumb/item&#34;,&#34;dc:title&#34;:&#34;Templating&#34;,&#34;xdm:linkURL&#34;:&#34;/content/core-components-examples/library/templating.html&#34;}}" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"> <a class="cmp-breadcrumb__item-link" itemprop="item" data-cmp-clickable href="/content/core-components-examples/library/templating.html"> <span itemprop="name">Templating</span> </a> <meta itemprop="position" content="2"/> </li> <li class="cmp-breadcrumb__item" data-cmp-data-layer="{&#34;breadcrumb-39f99b6c5d-item-35671d6884&#34;:{&#34;@type&#34;:&#34;core-components-examples/components/breadcrumb/item&#34;,&#34;dc:title&#34;:&#34;Breadcrumb&#34;,&#34;xdm:linkURL&#34;:&#34;/content/core-components-examples/library/templating/breadcrumb.html&#34;}}" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"> <a class="cmp-breadcrumb__item-link" itemprop="item" data-cmp-clickable href="/content/core-components-examples/library/templating/breadcrumb.html"> <span itemprop="name">Breadcrumb</span> </a> <meta itemprop="position" content="3"/> </li> <li class="cmp-breadcrumb__item" data-cmp-data-layer="{&#34;breadcrumb-39f99b6c5d-item-eae3a9359d&#34;:{&#34;@type&#34;:&#34;core-components-examples/components/breadcrumb/item&#34;,&#34;repo:modifyDate&#34;:&#34;2024-05-02T21:30:37Z&#34;,&#34;dc:title&#34;:&#34;Level 1&#34;,&#34;xdm:linkURL&#34;:&#34;/content/core-components-examples/library/templating/breadcrumb/hidden/level-1.html&#34;}}" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"> <a class="cmp-breadcrumb__item-link" itemprop="item" data-cmp-clickable href="/content/core-components-examples/library/templating/breadcrumb/hidden/level-1.html"> <span itemprop="name">Level 1</span> </a> <meta itemprop="position" content="4"/> </li> <li class="cmp-breadcrumb__item" data-cmp-data-layer="{&#34;breadcrumb-39f99b6c5d-item-4ece1d42cb&#34;:{&#34;@type&#34;:&#34;core-components-examples/components/breadcrumb/item&#34;,&#34;repo:modifyDate&#34;:&#34;2024-05-02T21:30:37Z&#34;,&#34;dc:title&#34;:&#34;Level 2&#34;,&#34;xdm:linkURL&#34;:&#34;/content/core-components-examples/library/templating/breadcrumb/hidden/level-1/level-2.html&#34;}}" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"> <a class="cmp-breadcrumb__item-link" itemprop="item" data-cmp-clickable href="/content/core-components-examples/library/templating/breadcrumb/hidden/level-1/level-2.html"> <span itemprop="name">Level 2</span> </a> <meta itemprop="position" content="5"/> </li> </ol> </nav> ')};DisableShadowing.story={name:"Disable Shadowing",parameters:{design:{}}};var HideCurrentPage=function(){return"".concat('<nav id="breadcrumb-cc487f954c" class="cmp-breadcrumb" aria-label="Breadcrumb" data-cmp-data-layer="{&#34;breadcrumb-cc487f954c&#34;:{&#34;@type&#34;:&#34;core-components-examples/components/breadcrumb&#34;}}"> <ol class="cmp-breadcrumb__list" itemscope itemtype="http://schema.org/BreadcrumbList"> <li class="cmp-breadcrumb__item" data-cmp-data-layer="{&#34;breadcrumb-cc487f954c-item-1d32a567a9&#34;:{&#34;@type&#34;:&#34;core-components-examples/components/breadcrumb/item&#34;,&#34;dc:title&#34;:&#34;Component Library&#34;,&#34;xdm:linkURL&#34;:&#34;/content/core-components-examples/library.html&#34;}}" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"> <a class="cmp-breadcrumb__item-link" itemprop="item" data-cmp-clickable href="/content/core-components-examples/library.html"> <span itemprop="name">Component Library</span> </a> <meta itemprop="position" content="1"/> </li> <li class="cmp-breadcrumb__item" data-cmp-data-layer="{&#34;breadcrumb-cc487f954c-item-35671d6884&#34;:{&#34;@type&#34;:&#34;core-components-examples/components/breadcrumb/item&#34;,&#34;dc:title&#34;:&#34;Breadcrumb&#34;,&#34;xdm:linkURL&#34;:&#34;/content/core-components-examples/library/templating/breadcrumb/hidden/level-1/level-2/breadcrumb.html&#34;}}" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"> <a class="cmp-breadcrumb__item-link" itemprop="item" data-cmp-clickable href="/content/core-components-examples/library/templating/breadcrumb/hidden/level-1/level-2/breadcrumb.html"> <span itemprop="name">Breadcrumb</span> </a> <meta itemprop="position" content="2"/> </li> <li class="cmp-breadcrumb__item" data-cmp-data-layer="{&#34;breadcrumb-cc487f954c-item-eae3a9359d&#34;:{&#34;@type&#34;:&#34;core-components-examples/components/breadcrumb/item&#34;,&#34;repo:modifyDate&#34;:&#34;2024-05-02T21:30:37Z&#34;,&#34;dc:title&#34;:&#34;Level 1&#34;,&#34;xdm:linkURL&#34;:&#34;/content/core-components-examples/library/templating/breadcrumb/hidden/level-1.html&#34;}}" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"> <a class="cmp-breadcrumb__item-link" itemprop="item" data-cmp-clickable href="/content/core-components-examples/library/templating/breadcrumb/hidden/level-1.html"> <span itemprop="name">Level 1</span> </a> <meta itemprop="position" content="3"/> </li> <li class="cmp-breadcrumb__item" data-cmp-data-layer="{&#34;breadcrumb-cc487f954c-item-4ece1d42cb&#34;:{&#34;@type&#34;:&#34;core-components-examples/components/breadcrumb/item&#34;,&#34;repo:modifyDate&#34;:&#34;2024-05-02T21:30:37Z&#34;,&#34;dc:title&#34;:&#34;Level 2&#34;,&#34;xdm:linkURL&#34;:&#34;/content/core-components-examples/library/templating/breadcrumb/hidden/level-1/level-2.html&#34;}}" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"> <a class="cmp-breadcrumb__item-link" itemprop="item" data-cmp-clickable href="/content/core-components-examples/library/templating/breadcrumb/hidden/level-1/level-2.html"> <span itemprop="name">Level 2</span> </a> <meta itemprop="position" content="4"/> </li> </ol> </nav> ')};HideCurrentPage.story={name:"Hide Current Page",parameters:{design:{}}};var NavigationStartLevel=function(){return"".concat('<nav id="breadcrumb-e670748b1f" class="cmp-breadcrumb" aria-label="Breadcrumb" data-cmp-data-layer="{&#34;breadcrumb-e670748b1f&#34;:{&#34;@type&#34;:&#34;core-components-examples/components/breadcrumb&#34;}}"> <ol class="cmp-breadcrumb__list" itemscope itemtype="http://schema.org/BreadcrumbList"> <li class="cmp-breadcrumb__item" data-cmp-data-layer="{&#34;breadcrumb-e670748b1f-item-1d32a567a9&#34;:{&#34;@type&#34;:&#34;core-components-examples/components/breadcrumb/item&#34;,&#34;dc:title&#34;:&#34;Component Library&#34;,&#34;xdm:linkURL&#34;:&#34;/content/core-components-examples/library.html&#34;}}" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"> <a class="cmp-breadcrumb__item-link" itemprop="item" data-cmp-clickable href="/content/core-components-examples/library.html"> <span itemprop="name">Component Library</span> </a> <meta itemprop="position" content="1"/> </li> <li class="cmp-breadcrumb__item" data-cmp-data-layer="{&#34;breadcrumb-e670748b1f-item-35671d6884&#34;:{&#34;@type&#34;:&#34;core-components-examples/components/breadcrumb/item&#34;,&#34;dc:title&#34;:&#34;Breadcrumb&#34;,&#34;xdm:linkURL&#34;:&#34;/content/core-components-examples/library/templating/breadcrumb/hidden/level-1/level-2/breadcrumb.html&#34;}}" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"> <a class="cmp-breadcrumb__item-link" itemprop="item" data-cmp-clickable href="/content/core-components-examples/library/templating/breadcrumb/hidden/level-1/level-2/breadcrumb.html"> <span itemprop="name">Breadcrumb</span> </a> <meta itemprop="position" content="2"/> </li> <li class="cmp-breadcrumb__item" data-cmp-data-layer="{&#34;breadcrumb-e670748b1f-item-eae3a9359d&#34;:{&#34;@type&#34;:&#34;core-components-examples/components/breadcrumb/item&#34;,&#34;repo:modifyDate&#34;:&#34;2024-05-02T21:30:37Z&#34;,&#34;dc:title&#34;:&#34;Level 1&#34;,&#34;xdm:linkURL&#34;:&#34;/content/core-components-examples/library/templating/breadcrumb/hidden/level-1.html&#34;}}" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"> <a class="cmp-breadcrumb__item-link" itemprop="item" data-cmp-clickable href="/content/core-components-examples/library/templating/breadcrumb/hidden/level-1.html"> <span itemprop="name">Level 1</span> </a> <meta itemprop="position" content="3"/> </li> <li class="cmp-breadcrumb__item" data-cmp-data-layer="{&#34;breadcrumb-e670748b1f-item-4ece1d42cb&#34;:{&#34;@type&#34;:&#34;core-components-examples/components/breadcrumb/item&#34;,&#34;repo:modifyDate&#34;:&#34;2024-05-02T21:30:37Z&#34;,&#34;dc:title&#34;:&#34;Level 2&#34;,&#34;xdm:linkURL&#34;:&#34;/content/core-components-examples/library/templating/breadcrumb/hidden/level-1/level-2.html&#34;}}" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"> <a class="cmp-breadcrumb__item-link" itemprop="item" data-cmp-clickable href="/content/core-components-examples/library/templating/breadcrumb/hidden/level-1/level-2.html"> <span itemprop="name">Level 2</span> </a> <meta itemprop="position" content="4"/> </li> <li class="cmp-breadcrumb__item cmp-breadcrumb__item--active" aria-current="page" data-cmp-data-layer="{&#34;breadcrumb-e670748b1f-item-654f395665&#34;:{&#34;@type&#34;:&#34;core-components-examples/components/breadcrumb/item&#34;,&#34;repo:modifyDate&#34;:&#34;2024-05-02T21:30:37Z&#34;,&#34;dc:title&#34;:&#34;Breadcrumb&#34;,&#34;xdm:linkURL&#34;:&#34;/content/core-components-examples/library/templating/breadcrumb/hidden/level-1/level-2/breadcrumb.html&#34;}}" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"> <span itemprop="name">Breadcrumb</span> <meta itemprop="position" content="5"/> </li> </ol> </nav> ')};NavigationStartLevel.story={name:"Navigation Start Level",parameters:{design:{}}};var ShowHiddenNavigationItems=function(){return"".concat('<nav id="breadcrumb-065f714c4a" class="cmp-breadcrumb" aria-label="Breadcrumb" data-cmp-data-layer="{&#34;breadcrumb-065f714c4a&#34;:{&#34;@type&#34;:&#34;core-components-examples/components/breadcrumb&#34;}}"> <ol class="cmp-breadcrumb__list" itemscope itemtype="http://schema.org/BreadcrumbList"> <li class="cmp-breadcrumb__item" data-cmp-data-layer="{&#34;breadcrumb-065f714c4a-item-1d32a567a9&#34;:{&#34;@type&#34;:&#34;core-components-examples/components/breadcrumb/item&#34;,&#34;dc:title&#34;:&#34;Component Library&#34;,&#34;xdm:linkURL&#34;:&#34;/content/core-components-examples/library.html&#34;}}" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"> <a class="cmp-breadcrumb__item-link" itemprop="item" data-cmp-clickable href="/content/core-components-examples/library.html"> <span itemprop="name">Component Library</span> </a> <meta itemprop="position" content="1"/> </li> <li class="cmp-breadcrumb__item" data-cmp-data-layer="{&#34;breadcrumb-065f714c4a-item-35671d6884&#34;:{&#34;@type&#34;:&#34;core-components-examples/components/breadcrumb/item&#34;,&#34;dc:title&#34;:&#34;Breadcrumb&#34;,&#34;xdm:linkURL&#34;:&#34;/content/core-components-examples/library/templating/breadcrumb/hidden/level-1/level-2/breadcrumb.html&#34;}}" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"> <a class="cmp-breadcrumb__item-link" itemprop="item" data-cmp-clickable href="/content/core-components-examples/library/templating/breadcrumb/hidden/level-1/level-2/breadcrumb.html"> <span itemprop="name">Breadcrumb</span> </a> <meta itemprop="position" content="2"/> </li> <li class="cmp-breadcrumb__item" data-cmp-data-layer="{&#34;breadcrumb-065f714c4a-item-a11728d7a6&#34;:{&#34;@type&#34;:&#34;core-components-examples/components/breadcrumb/item&#34;,&#34;dc:title&#34;:&#34;Hidden&#34;,&#34;xdm:linkURL&#34;:&#34;/content/core-components-examples/library/templating/breadcrumb/hidden.html&#34;}}" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"> <a class="cmp-breadcrumb__item-link" itemprop="item" data-cmp-clickable href="/content/core-components-examples/library/templating/breadcrumb/hidden.html"> <span itemprop="name">Hidden</span> </a> <meta itemprop="position" content="3"/> </li> <li class="cmp-breadcrumb__item" data-cmp-data-layer="{&#34;breadcrumb-065f714c4a-item-eae3a9359d&#34;:{&#34;@type&#34;:&#34;core-components-examples/components/breadcrumb/item&#34;,&#34;repo:modifyDate&#34;:&#34;2024-05-02T21:30:37Z&#34;,&#34;dc:title&#34;:&#34;Level 1&#34;,&#34;xdm:linkURL&#34;:&#34;/content/core-components-examples/library/templating/breadcrumb/hidden/level-1.html&#34;}}" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"> <a class="cmp-breadcrumb__item-link" itemprop="item" data-cmp-clickable href="/content/core-components-examples/library/templating/breadcrumb/hidden/level-1.html"> <span itemprop="name">Level 1</span> </a> <meta itemprop="position" content="4"/> </li> <li class="cmp-breadcrumb__item" data-cmp-data-layer="{&#34;breadcrumb-065f714c4a-item-4ece1d42cb&#34;:{&#34;@type&#34;:&#34;core-components-examples/components/breadcrumb/item&#34;,&#34;repo:modifyDate&#34;:&#34;2024-05-02T21:30:37Z&#34;,&#34;dc:title&#34;:&#34;Level 2&#34;,&#34;xdm:linkURL&#34;:&#34;/content/core-components-examples/library/templating/breadcrumb/hidden/level-1/level-2.html&#34;}}" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"> <a class="cmp-breadcrumb__item-link" itemprop="item" data-cmp-clickable href="/content/core-components-examples/library/templating/breadcrumb/hidden/level-1/level-2.html"> <span itemprop="name">Level 2</span> </a> <meta itemprop="position" content="5"/> </li> </ol> </nav> ')};ShowHiddenNavigationItems.story={name:"Show Hidden Navigation Items",parameters:{design:{}}};var breadcrumb_stories_Standard=function(){return"".concat('<nav id="breadcrumb-b2f8c70662" class="cmp-breadcrumb" aria-label="Breadcrumb" data-cmp-data-layer="{&#34;breadcrumb-b2f8c70662&#34;:{&#34;@type&#34;:&#34;core-components-examples/components/breadcrumb&#34;}}"> <ol class="cmp-breadcrumb__list" itemscope itemtype="http://schema.org/BreadcrumbList"> <li class="cmp-breadcrumb__item" data-cmp-data-layer="{&#34;breadcrumb-b2f8c70662-item-9bee4d4454&#34;:{&#34;@type&#34;:&#34;core-components-examples/components/breadcrumb/item&#34;,&#34;repo:modifyDate&#34;:&#34;2021-09-17T20:37:43Z&#34;,&#34;dc:title&#34;:&#34;Component Library&#34;,&#34;xdm:linkURL&#34;:&#34;/content/core-components-examples/library.html&#34;}}" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"> <a class="cmp-breadcrumb__item-link" itemprop="item" data-cmp-clickable href="/content/core-components-examples/library.html"> <span itemprop="name">Component Library</span> </a> <meta itemprop="position" content="1"/> </li> <li class="cmp-breadcrumb__item" data-cmp-data-layer="{&#34;breadcrumb-b2f8c70662-item-1d32a567a9&#34;:{&#34;@type&#34;:&#34;core-components-examples/components/breadcrumb/item&#34;,&#34;dc:title&#34;:&#34;Component Library&#34;,&#34;xdm:linkURL&#34;:&#34;/content/core-components-examples/library.html&#34;}}" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"> <a class="cmp-breadcrumb__item-link" itemprop="item" data-cmp-clickable href="/content/core-components-examples/library.html"> <span itemprop="name">Component Library</span> </a> <meta itemprop="position" content="2"/> </li> <li class="cmp-breadcrumb__item" data-cmp-data-layer="{&#34;breadcrumb-b2f8c70662-item-35671d6884&#34;:{&#34;@type&#34;:&#34;core-components-examples/components/breadcrumb/item&#34;,&#34;dc:title&#34;:&#34;Breadcrumb&#34;,&#34;xdm:linkURL&#34;:&#34;/content/core-components-examples/library/templating/breadcrumb/hidden/level-1/level-2/breadcrumb.html&#34;}}" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"> <a class="cmp-breadcrumb__item-link" itemprop="item" data-cmp-clickable href="/content/core-components-examples/library/templating/breadcrumb/hidden/level-1/level-2/breadcrumb.html"> <span itemprop="name">Breadcrumb</span> </a> <meta itemprop="position" content="3"/> </li> <li class="cmp-breadcrumb__item" data-cmp-data-layer="{&#34;breadcrumb-b2f8c70662-item-eae3a9359d&#34;:{&#34;@type&#34;:&#34;core-components-examples/components/breadcrumb/item&#34;,&#34;repo:modifyDate&#34;:&#34;2024-05-02T21:30:37Z&#34;,&#34;dc:title&#34;:&#34;Level 1&#34;,&#34;xdm:linkURL&#34;:&#34;/content/core-components-examples/library/templating/breadcrumb/hidden/level-1.html&#34;}}" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"> <a class="cmp-breadcrumb__item-link" itemprop="item" data-cmp-clickable href="/content/core-components-examples/library/templating/breadcrumb/hidden/level-1.html"> <span itemprop="name">Level 1</span> </a> <meta itemprop="position" content="4"/> </li> <li class="cmp-breadcrumb__item" data-cmp-data-layer="{&#34;breadcrumb-b2f8c70662-item-4ece1d42cb&#34;:{&#34;@type&#34;:&#34;core-components-examples/components/breadcrumb/item&#34;,&#34;repo:modifyDate&#34;:&#34;2024-05-02T21:30:37Z&#34;,&#34;dc:title&#34;:&#34;Level 2&#34;,&#34;xdm:linkURL&#34;:&#34;/content/core-components-examples/library/templating/breadcrumb/hidden/level-1/level-2.html&#34;}}" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"> <a class="cmp-breadcrumb__item-link" itemprop="item" data-cmp-clickable href="/content/core-components-examples/library/templating/breadcrumb/hidden/level-1/level-2.html"> <span itemprop="name">Level 2</span> </a> <meta itemprop="position" content="5"/> </li> <li class="cmp-breadcrumb__item cmp-breadcrumb__item--active" aria-current="page" data-cmp-data-layer="{&#34;breadcrumb-b2f8c70662-item-654f395665&#34;:{&#34;@type&#34;:&#34;core-components-examples/components/breadcrumb/item&#34;,&#34;repo:modifyDate&#34;:&#34;2024-05-02T21:30:37Z&#34;,&#34;dc:title&#34;:&#34;Breadcrumb&#34;,&#34;xdm:linkURL&#34;:&#34;/content/core-components-examples/library/templating/breadcrumb/hidden/level-1/level-2/breadcrumb.html&#34;}}" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem"> <span itemprop="name">Breadcrumb</span> <meta itemprop="position" content="6"/> </li> </ol> </nav> ')};breadcrumb_stories_Standard.story={name:"Standard",parameters:{design:{}}},DisableShadowing.parameters={...DisableShadowing.parameters,docs:{...DisableShadowing.parameters?.docs,source:{originalSource:"() => `${Example_1_TemplatePath}`",...DisableShadowing.parameters?.docs?.source}}},HideCurrentPage.parameters={...HideCurrentPage.parameters,docs:{...HideCurrentPage.parameters?.docs,source:{originalSource:"() => `${Example_2_TemplatePath}`",...HideCurrentPage.parameters?.docs?.source}}},NavigationStartLevel.parameters={...NavigationStartLevel.parameters,docs:{...NavigationStartLevel.parameters?.docs,source:{originalSource:"() => `${Example_3_TemplatePath}`",...NavigationStartLevel.parameters?.docs?.source}}},ShowHiddenNavigationItems.parameters={...ShowHiddenNavigationItems.parameters,docs:{...ShowHiddenNavigationItems.parameters?.docs,source:{originalSource:"() => `${Example_4_TemplatePath}`",...ShowHiddenNavigationItems.parameters?.docs?.source}}},breadcrumb_stories_Standard.parameters={...breadcrumb_stories_Standard.parameters,docs:{...breadcrumb_stories_Standard.parameters?.docs,source:{originalSource:"() => `${Example_5_TemplatePath}`",...breadcrumb_stories_Standard.parameters?.docs?.source}}};const __namedExportsOrder=["DisableShadowing","HideCurrentPage","NavigationStartLevel","ShowHiddenNavigationItems","Standard"]}}]);