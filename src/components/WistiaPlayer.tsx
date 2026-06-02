import { useEffect } from 'react';

export default function WistiaPlayer() {
  useEffect(() => {
    const script1Id = 'wistia-player-base-script';
    const script2Id = 'wistia-player-embed-script';

    if (!document.getElementById(script1Id)) {
      const script1 = document.createElement('script');
      script1.id = script1Id;
      script1.src = 'https://fast.wistia.com/player.js';
      script1.async = true;
      document.head.appendChild(script1);
    }

    if (!document.getElementById(script2Id)) {
      const script2 = document.createElement('script');
      script2.id = script2Id;
      script2.src = 'https://fast.wistia.com/embed/s2ni44xfbi.js';
      script2.async = true;
      script2.type = 'module';
      document.head.appendChild(script2);
    }
  }, []);

  return (
    <div className="w-full max-w-[350px] mx-auto">
      <div 
        dangerouslySetInnerHTML={{
          __html: `
            <style>
              wistia-player[media-id='s2ni44xfbi']:not(:defined) { 
                background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/s2ni44xfbi/swatch'); 
                display: block; 
                filter: blur(5px); 
                padding-top: 177.78%; 
              }
            </style> 
            <wistia-player media-id="s2ni44xfbi" aspect="0.5625">
              <div class="wistia_preload_transcript_outer_wrapper" style="width: 100%; height: 100%; display:flex; justify-content:center; align-items: center; margin-top:-177.78%;">
                <div class="wistia_preload_transcript_inner_wrapper" style="overflow: auto;">
                  <p class="wistia_preload_transcript_text" aria-hidden="true" tabindex="-1" style="text-align: justify; font-size: 5px !important;">
                    Professora, mãe ou pai, se toda semana você perde tempo precioso tentando procurar ou criar atividades de alfabetização do zero para as crianças, assista esse vídeo até o final. Você já sabe ensinar e cuidar do desenvolvimento delas. O seu problema não é falta de conhecimento. O problema é o cansaço de ter que planejar tudo sozinho, toda semana. Principalmente quando o tempo é curto e a rotina é puxada. E, preste atenção, isso não significa que você não está fazendo bom trabalho. Significa apenas que você precisa de mais praticidade no seu dia a dia. Foi exatamente por isso que criamos o alfabetização e letramento na prática. Pacote com mais de três mil e setecentos atividades prontas para imprimir, criado para ajudar você a economizar horas de planejamento e aplicar atividades de forma rápida e eficiente. Dentro dele você encontra, sílabas simples e complexas, coordenação motora completa, vogais e consciência fonológica, alfabeto, silábico, de a a z, formação de palavras e frases, caligrafia inicial e cursiva, matemática, ensino religioso e artes, além de cinco bônus gratuitos exclusivos que você pagaria mais de duzentos e setenta e cinco reais comprando por fora, e hoje leva de graça ao adquirir esse kit. Acesso vitalício e todas as atualizações futuras inclusas. Funciona assim, você acessa o material, escolhe a atividade, imprime e aplica com a criança. Simples assim, sem precisar criar tudo do zero, sem passar horas procurando atividades na internet, sem o desgaste de ter que inventar novas ideias todos os dias. O material se adapta a diferentes níveis de aprendizagem, funciona tanto em casa quanto em sala de aula, e ajuda a tornar o processo de alfabetização mais leve, organizado e produtivo. Se você quer economizar tempo, ter mais tranquilidade na sua rotina e ajudar no desenvolvimento das crianças com mais segurança e resultado, clique no botão abaixo e garanta agora o seu acesso ao alfabetização e letramento na prática.
                  </p>
                </div>
              </div>
            </wistia-player>
          `
        }}
      />
    </div>
  );
}

