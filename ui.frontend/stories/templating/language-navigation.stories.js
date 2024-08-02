

export default {
  title: 'templating/Language-navigation',
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
import Example_1_TemplatePath from '../../storybook-assets/components/templating/language-navigation/Beispiele.html';

export const Beispiele = () => `${Example_1_TemplatePath}`

Beispiele.story = {
  name: 'Beispiele',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_2_TemplatePath from '../../storybook-assets/components/templating/language-navigation/Examples.html';

export const Examples = () => `${Example_2_TemplatePath}`

Examples.story = {
  name: 'Examples',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_3_TemplatePath from '../../storybook-assets/components/templating/language-navigation/M-ltiples-niveles.html';

export const MLtiplesNiveles = () => `${Example_3_TemplatePath}`

MLtiplesNiveles.story = {
  name: 'M Ltiples Niveles',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_4_TemplatePath from '../../storybook-assets/components/templating/language-navigation/Mehrere-Ebenen.html';

export const MehrereEbenen = () => `${Example_4_TemplatePath}`

MehrereEbenen.story = {
  name: 'Mehrere Ebenen',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_5_TemplatePath from '../../storybook-assets/components/templating/language-navigation/Niveaux-Multiples.html';

export const NiveauxMultiples = () => `${Example_5_TemplatePath}`

NiveauxMultiples.story = {
  name: 'Niveaux Multiples',
  parameters: {
    design: {
      
    }
  }
};

// End of story


// Start of story
import Example_6_TemplatePath from '../../storybook-assets/components/templating/language-navigation/Nivel-nico.html';

export const NivelNico = () => `${Example_6_TemplatePath}`

NivelNico.story = {
  name: 'Nivel Nico',
  parameters: {
    design: {
      
    }
  }
};

// End of story

