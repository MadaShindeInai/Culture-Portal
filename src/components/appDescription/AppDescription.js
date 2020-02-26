import React from 'react';
import './AppDescription.scss';

const AppDescription = ({ language }) => {
  let appDescriptionText;
  if (language === 'RU') {
    appDescriptionText = 'Архитекту́ра, или зо́дчество — искусство и наука строить, проектировать здания и сооружения (включая их комплексы), а также сама совокупность зданий и сооружений, создающих пространственную среду для жизни и деятельности человека. Архитектура непременно создает материально организованную среду, необходимую людям для их жизни и деятельности, в соответствии с их устремлениями, а также современными техническими возможностями и эстетическими воззрениями. В архитектуре взаимосвязаны функциональные (назначение, польза), технические (прочность, долговечность) и эстетические (красота) свойства объектов.';
  } else if (language === 'EN') {
    appDescriptionText = 'Architecture, or architecture - the art and science of building, designing buildings and structures (including their complexes), as well as the totality of buildings and structures that create a spatial environment for human life and activity. Architecture certainly creates a materially organized environment that people need for their life and work, in accordance with their aspirations, as well as modern technical capabilities and aesthetic views. In architecture, the functional (purpose, benefit), technical (strength, durability) and aesthetic (beauty) properties of objects are interconnected.';
  } else if (language === 'BE') {
    appDescriptionText = 'Архітэктура, або дойлідства - мастацтва і навука будаваць, праектаваць будынкі і збудаванні (уключаючы іх комплексы), а таксама сама сукупнасць будынкаў і збудаванняў, якія ствараюць прасторавую асяроддзе для жыцця і дзейнасці чалавека. Архітэктура абавязкова стварае матэрыяльна арганізаваную сераду, неабходную людзям для іх жыцця і дзейнасці, у адпаведнасці з іх памкненнямі, а таксама сучаснымі тэхнічнымі магчымасцямі і эстэтычнымі поглядамі. У архітэктуры ўзаемазвязаны функцыянальныя (прызначэнне, карысць), тэхнічныя (трываласць, даўгавечнасць) і эстэтычныя (прыгажосць) ўласцівасці аб`ектаў.';
  }
  return (
    <div>
      {appDescriptionText}
    </div>
  )

}

export default AppDescription;