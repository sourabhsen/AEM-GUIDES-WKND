
import containerPolicy from '../../storybook-assets/policies/container.json';


export default {
  title: 'form/Container',
  tags: ['autodocs'],
  decorators: [],
  parameters: { 
    myAddonParameter: {
      policy: containerPolicy 
    } 
  }
};

window.addEventListener('message', (detail) => {
  const detailsObj = detail?.data || {};
  const eventType = JSON.parse(detailsObj).event?.type;
  
  if (eventType === 'storybook/style-system/change') {
    const val = JSON.parse(detailsObj).event;
    const styleClasses = val.args[0].selectedStyle;
    const getHtml = document.querySelector('#storybook-root');
    const isWrapper = document.querySelector('#storybook-root .sb-wrapper');
    
    const updatedHTML = `<div class="sb-wrapper ${styleClasses}">${getHtml.innerHTML}</div>`;
    
    if (isWrapper) {
      document.querySelector('#storybook-root .sb-wrapper').classList.forEach(className => {
        if (className !== 'sb-wrapper') {
          document.querySelector('#storybook-root .sb-wrapper').classList.remove(className);
        }
      });
      document.querySelector('#storybook-root .sb-wrapper').classList.add(styleClasses);
    } else {
      getHtml.innerHTML = updatedHTML;
    }
  }
});

// Start of story
import Example_1_TemplatePath from '../../storybook-assets/components/form/container/Core-Form-Container.html';

export const CoreFormContainer = () => `${Example_1_TemplatePath}`

CoreFormContainer.story = {
  name: 'Core Form Container',
  parameters: {
    design: {
      
    }
  }
};

// End of story

