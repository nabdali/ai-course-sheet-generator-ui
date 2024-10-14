import React, { useState } from 'react';
import axios from 'axios';
import { Loader2, Download } from 'lucide-react';

function App() {
  const [template, setTemplate] = useState(`
Titre du cours : [Titre]
Objectifs du cours :
- Objectif 1
- Objectif 2

Contenu :
- Introduction
- Partie principale
- Conclusion

Durée : [Durée]
`);
  const [documentData, setDocumentData] = useState(
    `Anatomie et Physiologie Humaines. Des notions de cours, de nombreux schémas, des exercices : tout ce dont il est nécessaire pour apprendre connaître et maitriser rapidement l'essentiel de l'anatomie et de la physiologie humaine. Sommaire. Introduction au corps humain La chimie de la cellule. La cellule : structure et fonction. Les tissus. Le système tégumentaire. Le squelette. Le tissu musculaire et le mécanisme de la contraction. Le tissu nerveux. Le système nerveux central. Le système nerveux périphérique. Les organes sensoriels. Le système endocrinien. Le système cardiovasculaire : le sang. Le système cardiovasculaire : le cœur. Le système cardiovasculaire : Le système lymphatique et l'immunité. Le système respiratoire. Les processus digestifs. Le métabolisme et la régulation de la température corporelle. Le système urinaire. La balance hydrique et électrolytique. La formation des gamètes. 7Chapitre 1 Introduction au corps humain. •L'être humain, organisme vivant. •Les niveaux d'organisation du corps humain. •L'homéostasie. • Position anatomique et terminologie. • Les régions du corps et cavités. •Exercices et corrigés. L'anatomie et la physiologie sont les disciplines complémentaires de la biologie, la science qui étudie les organes vivants. L'anatomie humaine étudie la structure du corps et les relations entre les structures du corps. La physiologie humaine s'intéresse au fonctionnement des différentes parties du corps. De manière générale, c'est la structure qui détermine la fonction. L'être humain, organisme vivant. Les êtres humains, (homo sapiens) sont des organismes vivants. Comme pour tous les organismes vivants, les besoins physiques de base des êtres humains sont l'eau, pour assurer l'ensemble des processus métabolismes ; la nourriture, pour fournir de l'énergie : les matériaux de base pour construire la matière vivante, et des composés chimiques nécessaires aux réactions vitales : l'oxygène pour produire de l'énergie à partir des nutriments : la chaleur pour favoriser les réactions chimiques ; et la pression pour permettre la respiration. 8Les niveaux d'organisation du corps humain. Les niveaux d'organisation du corps humain sont, du plus simple au plus complexe : chimique, cellulaire, tissulaire, organique, systémique et enfin le niveau de l'organisme. Chaque niveau représente l'association d'unités du niveau inférieur. Les niveaux chimique et cellulaire sont les niveaux de base. Un tissu est un groupe de cellules semblables qui assurent la même fonction spécialisée. L'organisme humain comporte quatre type de tissus . •SAVOIR Les différents types de tissus. 1. Le tissu épithélial : couvre le corps et la surface des organes, tapisse les cavités du corps et participe à la formation des glandes. Rôle de protection, d'absorption, d'excrétion, de sécrétion de diffusion et de filtration. 2. Le tissu conjonctif : relie, soutient et protège les différentes parties du corps, stocke l'énergie et les sels minéraux. 3. Le tissu musculaire : contractile, pour produire le mouvement. 4. Le tissu nerveux : produit et transmet les influx nerveux qui coordonnent les activités du corps. 9Unorgane est composé de plusieurs types de tissus qui assurent, de façon coordonnée, une fonction déterminée. Unsystème est composé de 2 organes ou plus et de tissus, qui constituent une unité assurant la même fonction ou un ensemble de fonctions. Les systèmes du corps sont : • Les système musculaire et squelettique, qui assurent le soutien du corps et la locomotion. • Les systèmes endocrinien, et neveux qui ont des fonctions d'intégration et de coordination, pour assurer un fonctionnement cohérent du corps. • Les système, digestif, respiratoire, circulatoire, lymphatique et urinaire qui assurent le transport et la transformation des substances du corps. • Le système digestif assure la dégradation mécanique et chimique des aliments pour qu'ils puissent être utilisés par les cellules et élimine les déchets. • Le système respiratoire assure l'oxygénation du sang, élimine la dioxyde d carbone, et participe à la régulation de la balance acido-basique. • Le système circulatoire transporte les gaz respiratoires, les nutriments, les déchets et les hormones : il participe à la régulation de la température du corps et de l'équilibre acido-basique, et protège l'organisme des pertes d'eau et des maladies. • Le système lymphatique transporte la lymphe en provenance des tissus jusqu'au courant sanguin, participe à la défense contre les infections et à l'absorption des graisses. • Le système urinaire élimine les déchets transportés par le sang : régule la composition chimique, le volume, et la balance électrolytique du sang, et participe au maintien de l'équilibre acido-basique de l'organisme. • Le système tégumentaire à un rôle de protection du corps , de régulation de la température corporelle , d'élimination des déchets , de réception des stimuli sensoriels. • Le système reproducteur ou génital assure la production des hormones sexuelles et des gamètes, pour la reproduction. 10 L'homéostasie. L'homéostasie est le processus par lequel une stabilité relative du milieu intérieur du corps est maintenue, de façon à ce que les fonctions métaboliques cellulaires se déroulent avec le maximum d'efficacité. L'homéostasie est assurée par les muscles et les glandes, dont le fonctionnement est régulé par les informations sensorielles provenant du milieu intérieur. Position anatomique et terminologie. Tous les termes permettant de décrire la position d'une partie du corps par rapport à une autre, sont définis par rapport à une position anatomique de référence. Dans cette position, le sujet est debout, les pieds sont parallèles et maintenus à plat sur le sol, le regard dirigé vers l'avant, et les bras sont tendus le long du corps, la paume des mains est tournée vers l'avant et les doigts pointent vers le sol. Des termes anatomiques relatifs à l'orientation permettent de décrire la position des structures, des surfaces et des régions du corps selon la position anatomique. Les termes anatomiques les plus courants sont regroupés et définis dans le tableau 1.1. En plus de ce terme notés dans le tableau 1 .2, trois plans de référence sont utilisés pour décrire l'orientation des structures du corps . Le plan sagittal médian est le plan de symétrie qui divise le corps en ses parties droite et gauche. Le plan frontal ou coronal, divise le corps en ses parties antérieure et postérieure, et le plan transverse (horizontale ou en coupe transversale) divise le corps en ses parties supérieure et inférieure. Tableau1.1. Terme Les termes anatomiques et d'orientation les plus courants. Définition Supérieur (crânien) Inférieur (caudal) Ventral (antérieur) Dorsal (antérieur) Médian ou médial Latéral Interne (profond) Externe (superficiel) Proximal Distal Viscéral Pariétal Vers la tête Vers le bas, à l'opposé de la tête. Vers l'avant (devant) Vers le dos (derrière) Vers ou sur le plan médian du corps Opposé au plan médian du corps Eloigné de la surface du corps Vers ou à la surface du corps Le plus près de l'origine d'une structure Le plus éloigné de l'origine d'une structure Réfère aux organes internes. Réfère aux parois du corps 11 Les régions du corps et cavités. Les principales régions du corps sont : la tête, le cou, le tronc (thorax et abdomen), les deux membres supérieurs et les deux membres inférieurs. Les cavités du corps sont des espaces confinés dans lesquels les organes sont protégés, séparés et maintenus par des membranes. . La cavité dorsale ou postérieure, est composée de la cavité crânienne qui contient l'encéphale et de la cavité vertébrale qui contient la moelle épinière. La cavité ventrale, ou antérieure, comprend les cavités thoracique, abdominale et pelvienne, qui contiennent les organes viscéraux. On regroupe les cavités abdominale et pelvienne sous le nom de cavité abdomino-pelvienne, parce qu'il n'y a pas de barrière physique entre elles Les organes viscéraux de la cavité thoracique sont le cœur et les poumons. La cavité thoracique est divisée en deux cavités pleurales, chacune entourant un poumon, et une cavité péricardique entourant le cœur. Le médiastin est la région située entre les deux poumons. Les viscères de la cavité abdominale sont l'estomac, le gros intestin, l'intestin grêles, la rate, le foie, la vésicule biliaire. Les cavités du corps permettent la séparation fonctionnelle des organes et des systèmes, la plus grande partie du système nerveux occupe la cavité supérieure ; les principaux organes de des systèmes respiratoire et circulatoire se trouvent dans la cavité thoracique ; les principaux organes de la digestion sont situés dans la cavité abdominale, et les organes reproducteurs se trouvent dans la cavité pelvienne. Les membranes du corps, composés de fines couches de tissus épithélial et de tissu conjonctif, permettent de recouvrit, protéger, lubrifier séparer ou maintenir les organes viscéraux et de tapisser les cavités du corps. Les deux principaux types de membranes sont les membranes muqueuses et les membranes séreuses. Les membranes muqueuses secrètent une substance épaisse et visqueuse appelée mucus qui libère et protège les organes. Les membranes épithéliales qui tapissent la cavité nasale, la trachée et la cavité buccale sont des exemples de membranes muqueuses. Les membranes muqueuses tapissent les parois internes de nombreux organes. Les membranes séreuses tapissent les cavités thoracique et abdomino-pelvienne et recouvrent les organes viscéraux (décrits ci-dessus). Elles sont constituées de fines couches de tissu épithélial qui lubrifient, maintiennent et compartimentent les organes viscéraux. Elles sécrètent un lubrifiant aqueux, la séreuse. Le feuillet pariétal et le feuillet viscéral de la plèvre sont des membranes séreuses de la cavité thoracique qui tapissent les parois thoraciques, le diaphragme et la surface externe des poumons. Les feuillets pariétal et viscéral du péricarde sont des membranes séreuses qui entourent le cœur. Le péritoine pariétal qui tapisse la paroi abdominale et le péritoine viscéral qui recouvre les viscères abdominaux, sont les membranes séreuses de la cavité abdomino-pelvienne. Le mésentère un double feuillet ou péritoine, maintient les viscères et permet leur ancrage souple à la paroi abdominale. 12 Rappelez vous ! Les niveaux d'organisation du corps humain. • Les systèmes du corps et leurs fonctions. • La définition de l'homéostasie. • La position anatomique de référence. • La signification des termes anatomiques. • Les cavités du corps et les membranes qui les tapissent . Exercices Vrai ou faux ? 1. Un groupe de cellules qui coopèrent pour assurer une fonction déterminée est appelée un tissu ? 2. Le terme pariétal fait référence aux parois du corps, et le terme viscéral fait référence aux organes internes du corps. 3. Le pouce est en position latérale par rapport aux autres doigts de la main et en position distale par rapport à l'avant bras ? 4. Dans la position anatomique, le sujet se tient debout les pieds joints et les bras relâchés le long du corps, les pouces tournés vers l'avant ? 5. Le mésentère rattache fermement les organes viscéraux à la paroi interne du corps de façon à les protéger de mouvements excessifs. 6. L'augmentation de la température du corps pendant l'exercice est un exemple de mécanisme de feedback de l'homéostasie ? Solutions 1. 2. 3. 4. 5. 6. Vrai Vrai Vrai Faux Faux Faux `
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [fileUrl, setFileUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setFileUrl('');

    try {
      const response = await axios.post(
        'https://ai-course-sheet-generator-production.up.railway.app/generer_fiche_cours',
        {
          document_data: documentData,
          template: template,
        },
        {
          responseType: 'blob',
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data]));
      setFileUrl(url);
    } catch (err) {
      setError(
        'An error occurred while processing your request. Please try again.'
      );
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto w-full px-4 sm:px-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold mb-5">
                Générateur fiche de cours (Preuve de concept)
              </h1>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <label
                    htmlFor="template"
                    className="text-sm font-medium text-gray-700 block mb-2"
                  >
                    Modèle de la fiche
                  </label>
                  <textarea
                    id="template"
                    value={template}
                    onChange={(e) => setTemplate(e.target.value)}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-64 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
                <div className="relative">
                  <label
                    htmlFor="documentData"
                    className="text-sm font-medium text-gray-700 block mb-2"
                  >
                    Données du cours (Veuillez copier / coller le contenu d'un
                    document)
                  </label>
                  <textarea
                    id="documentData"
                    value={documentData}
                    onChange={(e) => setDocumentData(e.target.value)}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-64 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                      Veuillez patienter ...
                    </>
                  ) : (
                    'Generate Document'
                  )}
                </button>
              </div>
            </form>
            {error && <div className="mt-4 text-sm text-red-600">{error}</div>}
            {fileUrl && (
              <div className="mt-4">
                <a
                  href={fileUrl}
                  download="generated_document.docx"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  <Download className="mr-2" />
                  Télécharger la fiche
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
