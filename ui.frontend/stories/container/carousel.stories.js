

export default {
  title: 'container/Carousel',
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
import Example_1_TemplatePath from '../../storybook-assets/components/container/carousel/Auto-pause-on-Hover-Disabled.html';

export const AutoPauseonHoverDisabled = () => `${Example_1_TemplatePath}`

AutoPauseonHoverDisabled.story = {
  name: 'Auto Pause on Hover Disabled',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_2_TemplatePath from '../../storybook-assets/components/container/carousel/Automatic-Transitioning.html';

export const AutomaticTransitioning = () => `${Example_2_TemplatePath}`

AutomaticTransitioning.story = {
  name: 'Automatic Transitioning',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_3_TemplatePath from '../../storybook-assets/components/container/carousel/Image-Slides.html';

export const ImageSlides = () => `${Example_3_TemplatePath}`

ImageSlides.story = {
  name: 'Image Slides',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_4_TemplatePath from '../../storybook-assets/components/container/carousel/Teaser-Slides.html';

export const TeaserSlides = () => `${Example_4_TemplatePath}`

TeaserSlides.story = {
  name: 'Teaser Slides',
  parameters: {
    design: {
      
    }
  }
};

// End of story

