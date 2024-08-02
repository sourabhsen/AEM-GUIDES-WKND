

export default {
  title: 'form/Options',
  tags: ['autodocs'],
  decorators: [],
  parameters: { 
    myAddonParameter: {
      policy: []
      
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
import Example_1_TemplatePath from '../../storybook-assets/components/form/options/Checkbox.html';

export const Checkbox = () => `${Example_1_TemplatePath}`

Checkbox.story = {
  name: 'Checkbox',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_2_TemplatePath from '../../storybook-assets/components/form/options/Drop-Down.html';

export const DropDown = () => `${Example_2_TemplatePath}`

DropDown.story = {
  name: 'Drop Down',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_3_TemplatePath from '../../storybook-assets/components/form/options/Multi-select-Drop-Down.html';

export const MultiSelectDropDown = () => `${Example_3_TemplatePath}`

MultiSelectDropDown.story = {
  name: 'Multi Select Drop Down',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_4_TemplatePath from '../../storybook-assets/components/form/options/Radio-Button.html';

export const RadioButton = () => `${Example_4_TemplatePath}`

RadioButton.story = {
  name: 'Radio Button',
  parameters: {
    design: {
      
    }
  }
};

// End of story

