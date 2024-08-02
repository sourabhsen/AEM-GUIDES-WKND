
import titlePolicy from '../../storybook-assets/policies/title.json';


export default {
  title: 'pageAuthoring/Title',
  tags: ['autodocs'],
  decorators: [],
  parameters: { 
    myAddonParameter: {
      policy: titlePolicy 
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
import Example_1_TemplatePath from '../../storybook-assets/components/pageAuthoring/title/Heading-Type.html';

export const HeadingType = () => `${Example_1_TemplatePath}`

HeadingType.story = {
  name: 'Heading Type',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_2_TemplatePath from '../../storybook-assets/components/pageAuthoring/title/Link-Label-and-Title.html';

export const LinkLabelandTitle = () => `${Example_2_TemplatePath}`

LinkLabelandTitle.story = {
  name: 'Link Label and Title',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_3_TemplatePath from '../../storybook-assets/components/pageAuthoring/title/Linked.html';

export const Linked = () => `${Example_3_TemplatePath}`

Linked.story = {
  name: 'Linked',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_4_TemplatePath from '../../storybook-assets/components/pageAuthoring/title/Standard.html';

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
import Example_5_TemplatePath from '../../storybook-assets/components/pageAuthoring/title/Title-Text.html';

export const TitleText = () => `${Example_5_TemplatePath}`

TitleText.story = {
  name: 'Title Text',
  parameters: {
    design: {
      
    }
  }
};

// End of story

