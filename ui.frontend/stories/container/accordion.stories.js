

export default {
  title: 'container/Accordion',
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
import Example_1_TemplatePath from '../../storybook-assets/components/container/accordion/Expanded-Item.html';

export const ExpandedItem = () => `${Example_1_TemplatePath}`

ExpandedItem.story = {
  name: 'Expanded Item',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_2_TemplatePath from '../../storybook-assets/components/container/accordion/Expanded-Items.html';

export const ExpandedItems = () => `${Example_2_TemplatePath}`

ExpandedItems.story = {
  name: 'Expanded Items',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_3_TemplatePath from '../../storybook-assets/components/container/accordion/Nested.html';

export const Nested = () => `${Example_3_TemplatePath}`

Nested.story = {
  name: 'Nested',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_4_TemplatePath from '../../storybook-assets/components/container/accordion/Sample-Content.html';

export const SampleContent = () => `${Example_4_TemplatePath}`

SampleContent.story = {
  name: 'Sample Content',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_5_TemplatePath from '../../storybook-assets/components/container/accordion/Single-Expansion.html';

export const SingleExpansion = () => `${Example_5_TemplatePath}`

SingleExpansion.story = {
  name: 'Single Expansion',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_6_TemplatePath from '../../storybook-assets/components/container/accordion/Standard.html';

export const Standard = () => `${Example_6_TemplatePath}`

Standard.story = {
  name: 'Standard',
  parameters: {
    design: {
      
    }
  }
};

// End of story

