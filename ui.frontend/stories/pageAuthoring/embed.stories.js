
import embedPolicy from '../../storybook-assets/policies/embed.json';


export default {
  title: 'pageAuthoring/Embed',
  tags: ['autodocs'],
  decorators: [],
  parameters: { 
    myAddonParameter: {
      policy: embedPolicy 
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
import Example_1_TemplatePath from '../../storybook-assets/components/pageAuthoring/embed/Embeddable.html';

export const Embeddable = () => `${Example_1_TemplatePath}`

Embeddable.story = {
  name: 'Embeddable',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_2_TemplatePath from '../../storybook-assets/components/pageAuthoring/embed/HTML.html';

export const Html = () => `${Example_2_TemplatePath}`

Html.story = {
  name: 'Html',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_3_TemplatePath from '../../storybook-assets/components/pageAuthoring/embed/URL.html';

export const Url = () => `${Example_3_TemplatePath}`

Url.story = {
  name: 'Url',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_4_TemplatePath from '../../storybook-assets/components/pageAuthoring/embed/oEmbed-URL.html';

export const OEmbedUrl = () => `${Example_4_TemplatePath}`

OEmbedUrl.story = {
  name: 'O Embed Url',
  parameters: {
    design: {
      
    }
  }
};

// End of story

