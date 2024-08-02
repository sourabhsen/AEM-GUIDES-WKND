

export default {
  title: 'templating/Navigation',
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
import Example_1_TemplatePath from '../../storybook-assets/components/templating/navigation/Accessibility-Landmark.html';

export const AccessibilityLandmark = () => `${Example_1_TemplatePath}`

AccessibilityLandmark.story = {
  name: 'Accessibility Landmark',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_2_TemplatePath from '../../storybook-assets/components/templating/navigation/Disable-Shadowing.html';

export const DisableShadowing = () => `${Example_2_TemplatePath}`

DisableShadowing.story = {
  name: 'Disable Shadowing',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_3_TemplatePath from '../../storybook-assets/components/templating/navigation/Show-Root-Page.html';

export const ShowRootPage = () => `${Example_3_TemplatePath}`

ShowRootPage.story = {
  name: 'Show Root Page',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_4_TemplatePath from '../../storybook-assets/components/templating/navigation/Standard.html';

export const Standard = () => `${Example_4_TemplatePath}`

Standard.story = {
  name: 'Standard',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_5_TemplatePath from '../../storybook-assets/components/templating/navigation/Starting-Level.html';

export const StartingLevel = () => `${Example_5_TemplatePath}`

StartingLevel.story = {
  name: 'Starting Level',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_6_TemplatePath from '../../storybook-assets/components/templating/navigation/Structure-Depth.html';

export const StructureDepth = () => `${Example_6_TemplatePath}`

StructureDepth.story = {
  name: 'Structure Depth',
  parameters: {
    design: {
      
    }
  }
};

// End of story

