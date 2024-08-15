import React from 'react';
import FeaturesSection from '../FeaturesSection/FeaturesSection';
import AdditionalImage from '../../components/AdditionalImage/AdditionalImage';
import LogoReplacements from '../../components/LogoReplacements/LogoReplacements';
import { cardsData1, cardsData2, cardsData3, cardsData4 } from '../../data/cardData';
import { logosData1, logosData2, logosData3 } from '../../data/logosData';

const BodySection = () => {
  return (
    <>
      <FeaturesSection
        cardsData={cardsData1}
        label="Escribir"
        mainTitle="Encuentra la palabra que buscas"
        description="Plasma ideas, recopila comentarios de tus compañeros de equipo y pídele a la IA que aporte los toques finales."
        linkText="Explora documentos y notas →"
        linkHref="#"
      />
      <AdditionalImage
        src="\src\assets\img\write-v5.png"
        alt="Additional img"
      />
      <LogoReplacements logos={logosData1} />

      <FeaturesSection
        cardsData={cardsData2}
        label="Planificar"
        mainTitle="Tu flujo de trabajo. A tu manera."
        description="Hay muchas tareas que necesitan seguimiento. Las páginas flexibles de Notion te permiten diseñar tu flujo de trabajo ideal y monitorearlo por tarea, equipo, cronograma o progreso."
        linkText="Explora los proyectos →"
        linkHref="#"
      />
      <AdditionalImage
        src="\src\assets\img\plan-v5.png"
        alt="Additional img"
      />
      <LogoReplacements logos={logosData2} />

      <FeaturesSection
        cardsData={cardsData3}
        label="Organizar"
        mainTitle="Recuerda cada detalle"
        description="Olvídate de esas búsquedas interminables para encontrar la información que necesitas. Podrás acceder al instante a todo lo que tú y tu equipo guardáis en Notion."
        linkText="Explora la gestión del conocimiento →"
        linkHref="#"
      />
      <AdditionalImage
        src="\src\assets\img\organize-v6.png"
        alt="Additional img"
      />
      <LogoReplacements logos={logosData3} />

      <img src="\src\assets\img\img-recorte.PNG" alt="img" />

      <FeaturesSection
        cardsData={cardsData4}
        label="IA de Notion"
        mainTitle="Potencia tus ideas"
        description="La IA de Notion está integrada en tu espacio de trabajo y lista para generar ideas, resumir, ayudarte a escribir o encontrar lo que estás buscando."
        linkText="Prueba la IA de Notion →"
        linkHref="#"
      />
      <AdditionalImage
        src="\src\assets\img\ai-v6.png"
        alt="Additional img"
      />
    </>
  );
};

export default BodySection;
