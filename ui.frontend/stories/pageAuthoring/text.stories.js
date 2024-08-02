
import textPolicy from '../../storybook-assets/policies/text.json';


export default {
  title: 'pageAuthoring/Text',
  tags: ['autodocs'],
  decorators: [],
  parameters: { 
    myAddonParameter: {
      policy: textPolicy 
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
import Example_1_TemplatePath from '../../storybook-assets/components/pageAuthoring/text/Lists.html';

export const Lists = () => `${Example_1_TemplatePath}`

Lists.story = {
  name: 'Lists',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_2_TemplatePath from '../../storybook-assets/components/pageAuthoring/text/Standard.html';

export const Standard = () => `${Example_2_TemplatePath}`

Standard.story = {
  name: 'Standard',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_3_TemplatePath from '../../storybook-assets/components/pageAuthoring/text/Table.html';

export const Table = () => `${Example_3_TemplatePath}`

Table.story = {
  name: 'Table',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_4_TemplatePath from '../../storybook-assets/components/pageAuthoring/text/Type-Formatting.html';

export const TypeFormatting = () => `${Example_4_TemplatePath}`

TypeFormatting.story = {
  name: 'Type Formatting',
  parameters: {
    design: {
      
    }
  }
};

// End of story

