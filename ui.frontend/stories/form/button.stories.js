
import buttonPolicy from '../../storybook-assets/policies/button.json';


export default {
  title: 'form/Button',
  tags: ['autodocs'],
  decorators: [],
  parameters: { 
    myAddonParameter: {
      policy: buttonPolicy 
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
import Example_1_TemplatePath from '../../storybook-assets/components/form/button/Form-Button.html';

export const FormButton = () => `${Example_1_TemplatePath}`

FormButton.story = {
  name: 'Form Button',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_2_TemplatePath from '../../storybook-assets/components/form/button/Form-Submit-Button.html';

export const FormSubmitButton = () => `${Example_2_TemplatePath}`

FormSubmitButton.story = {
  name: 'Form Submit Button',
  parameters: {
    design: {
      
    }
  }
};

// End of story

