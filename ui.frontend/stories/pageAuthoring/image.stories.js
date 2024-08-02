

export default {
  title: 'pageAuthoring/Image',
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
import Example_1_TemplatePath from '../../storybook-assets/components/pageAuthoring/image/Caption.html';

export const Caption = () => `${Example_1_TemplatePath}`

Caption.story = {
  name: 'Caption',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_2_TemplatePath from '../../storybook-assets/components/pageAuthoring/image/Empty-Image.html';

export const EmptyImage = () => `${Example_2_TemplatePath}`

EmptyImage.story = {
  name: 'Empty Image',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_3_TemplatePath from '../../storybook-assets/components/pageAuthoring/image/Linked.html';

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
import Example_4_TemplatePath from '../../storybook-assets/components/pageAuthoring/image/SVG-and-GIF-Images.html';

export const SvgandGifImages = () => `${Example_4_TemplatePath}`

SvgandGifImages.story = {
  name: 'Svg and Gif Images',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_5_TemplatePath from '../../storybook-assets/components/pageAuthoring/image/Standard.html';

export const Standard = () => `${Example_5_TemplatePath}`

Standard.story = {
  name: 'Standard',
  parameters: {
    design: {
      
    }
  }
};

// End of story

