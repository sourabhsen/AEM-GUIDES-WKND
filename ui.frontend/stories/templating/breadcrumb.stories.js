

export default {
  title: 'templating/Breadcrumb',
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
import Example_1_TemplatePath from '../../storybook-assets/components/templating/breadcrumb/Disable-Shadowing.html';

export const DisableShadowing = () => `${Example_1_TemplatePath}`

DisableShadowing.story = {
  name: 'Disable Shadowing',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_2_TemplatePath from '../../storybook-assets/components/templating/breadcrumb/Hide-Current-Page.html';

export const HideCurrentPage = () => `${Example_2_TemplatePath}`

HideCurrentPage.story = {
  name: 'Hide Current Page',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_3_TemplatePath from '../../storybook-assets/components/templating/breadcrumb/Navigation-Start-Level.html';

export const NavigationStartLevel = () => `${Example_3_TemplatePath}`

NavigationStartLevel.story = {
  name: 'Navigation Start Level',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_4_TemplatePath from '../../storybook-assets/components/templating/breadcrumb/Show-Hidden-Navigation-Items.html';

export const ShowHiddenNavigationItems = () => `${Example_4_TemplatePath}`

ShowHiddenNavigationItems.story = {
  name: 'Show Hidden Navigation Items',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_5_TemplatePath from '../../storybook-assets/components/templating/breadcrumb/Standard.html';

export const Standard = () => `${Example_5_TemplatePath}`

Standard.story = {
  name: 'Standard',
  parameters: {
    design: {
      
    }
  }
};

// End of story

