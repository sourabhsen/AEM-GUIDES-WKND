
import teaserPolicy from '../../storybook-assets/policies/teaser.json';


export default {
  title: 'pageAuthoring/Teaser',
  tags: ['autodocs'],
  decorators: [],
  parameters: { 
    myAddonParameter: {
      policy: teaserPolicy 
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
import Example_1_TemplatePath from '../../storybook-assets/components/pageAuthoring/teaser/Call-To-Action-Button.html';

export const CalltoActionButton = () => `${Example_1_TemplatePath}`

CalltoActionButton.story = {
  name: 'Call to Action Button',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_2_TemplatePath from '../../storybook-assets/components/pageAuthoring/teaser/Image-Pretitle-Title-and-Description.html';

export const ImagePretitleTitleandDescription = () => `${Example_2_TemplatePath}`

ImagePretitleTitleandDescription.story = {
  name: 'Image Pretitle Title and Description',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_3_TemplatePath from '../../storybook-assets/components/pageAuthoring/teaser/Linked.html';

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
import Example_4_TemplatePath from '../../storybook-assets/components/pageAuthoring/teaser/Multiple-Call-To-Action-Buttons.html';

export const MultipleCalltoActionButtons = () => `${Example_4_TemplatePath}`

MultipleCalltoActionButtons.story = {
  name: 'Multiple Call to Action Buttons',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_5_TemplatePath from '../../storybook-assets/components/pageAuthoring/teaser/Pretitle-Title-and-Description.html';

export const PretitleTitleandDescription = () => `${Example_5_TemplatePath}`

PretitleTitleandDescription.story = {
  name: 'Pretitle Title and Description',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_6_TemplatePath from '../../storybook-assets/components/pageAuthoring/teaser/Title-Description-and-Image-from-Linked-Page.html';

export const TitleDescriptionandImageFromLinkedPage = () => `${Example_6_TemplatePath}`

TitleDescriptionandImageFromLinkedPage.story = {
  name: 'Title Description and Image From Linked Page',
  parameters: {
    design: {
      
    }
  }
};

// End of story

