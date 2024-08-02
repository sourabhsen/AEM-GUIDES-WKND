

export default {
  title: 'pageAuthoring/List',
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
import Example_1_TemplatePath from '../../storybook-assets/components/pageAuthoring/list/Built-from-Child-Pages.html';

export const BuiltFromChildPages = () => `${Example_1_TemplatePath}`

BuiltFromChildPages.story = {
  name: 'Built From Child Pages',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_2_TemplatePath from '../../storybook-assets/components/pageAuthoring/list/Built-from-Fixed-List.html';

export const BuiltFromFixedList = () => `${Example_2_TemplatePath}`

BuiltFromFixedList.story = {
  name: 'Built From Fixed List',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_3_TemplatePath from '../../storybook-assets/components/pageAuthoring/list/Built-from-Search.html';

export const BuiltFromSearch = () => `${Example_3_TemplatePath}`

BuiltFromSearch.story = {
  name: 'Built From Search',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_4_TemplatePath from '../../storybook-assets/components/pageAuthoring/list/Built-from-Tags.html';

export const BuiltFromTags = () => `${Example_4_TemplatePath}`

BuiltFromTags.story = {
  name: 'Built From Tags',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_5_TemplatePath from '../../storybook-assets/components/pageAuthoring/list/Items-displayed-as-Teasers.html';

export const ItemsDisplayedasTeasers = () => `${Example_5_TemplatePath}`

ItemsDisplayedasTeasers.story = {
  name: 'Items Displayed as Teasers',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_6_TemplatePath from '../../storybook-assets/components/pageAuthoring/list/Items-with-Link-Description-and-Date.html';

export const ItemswithLinkDescriptionandDate = () => `${Example_6_TemplatePath}`

ItemswithLinkDescriptionandDate.story = {
  name: 'Items with Link Description and Date',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_7_TemplatePath from '../../storybook-assets/components/pageAuthoring/list/Max-Items.html';

export const MaxItems = () => `${Example_7_TemplatePath}`

MaxItems.story = {
  name: 'Max Items',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_8_TemplatePath from '../../storybook-assets/components/pageAuthoring/list/Order.html';

export const Order = () => `${Example_8_TemplatePath}`

Order.story = {
  name: 'Order',
  parameters: {
    design: {
      
    }
  }
};

// End of story

