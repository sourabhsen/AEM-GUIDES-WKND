

export default {
  title: 'pageAuthoring/Content-fragment',
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
import Example_1_TemplatePath from '../../storybook-assets/components/pageAuthoring/content-fragment/Elements.html';

export const Elements = () => `${Example_1_TemplatePath}`

Elements.story = {
  name: 'Elements',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_2_TemplatePath from '../../storybook-assets/components/pageAuthoring/content-fragment/Standard.html';

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
import Example_3_TemplatePath from '../../storybook-assets/components/pageAuthoring/content-fragment/Structured-Content-Fragment.html';

export const StructuredContentFragment = () => `${Example_3_TemplatePath}`

StructuredContentFragment.story = {
  name: 'Structured Content Fragment',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_4_TemplatePath from '../../storybook-assets/components/pageAuthoring/content-fragment/Variations.html';

export const Variations = () => `${Example_4_TemplatePath}`

Variations.story = {
  name: 'Variations',
  parameters: {
    design: {
      
    }
  }
};

// End of story

