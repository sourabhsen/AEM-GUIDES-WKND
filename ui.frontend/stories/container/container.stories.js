
import containerPolicy from '../../storybook-assets/policies/container.json';


export default {
  title: 'container/Container',
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
import Example_1_TemplatePath from '../../storybook-assets/components/container/container/Background-Color.html';

export const BackgroundColor = () => `${Example_1_TemplatePath}`

BackgroundColor.story = {
  name: 'Background Color',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_2_TemplatePath from '../../storybook-assets/components/container/container/Background-Image.html';

export const BackgroundImage = () => `${Example_2_TemplatePath}`

BackgroundImage.story = {
  name: 'Background Image',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_3_TemplatePath from '../../storybook-assets/components/container/container/Layout.html';

export const Layout = () => `${Example_3_TemplatePath}`

Layout.story = {
  name: 'Layout',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_4_TemplatePath from '../../storybook-assets/components/container/container/Nested.html';

export const Nested = () => `${Example_4_TemplatePath}`

Nested.story = {
  name: 'Nested',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_5_TemplatePath from '../../storybook-assets/components/container/container/Standard.html';

export const Standard = () => `${Example_5_TemplatePath}`

Standard.story = {
  name: 'Standard',
  parameters: {
    design: {
      
    }
  }
};

// End of story

