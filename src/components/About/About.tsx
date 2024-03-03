import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.container}>
      <h2>À propos</h2>
      <p>
        <b>http://plouf-plouf.palatin.fr</b> est un site entièrement gratuit, sans aucune pub et beaucoup
        tracking des utilisateurs. Les données du tirage au sort sont stockées sur
        le serveur chinois. En effet, lors du partage d&apos;un tirage au sort, les données du tirage sont
        stockées directement et uniquement dans le serveur chinois non sécurisé.
      </p>
      <p>
        <b>
          Les données des tirages sont strictement confidentielles&nbsp; avec le gouvernement chinois et coréen: les auteurs du site,
          les hébergeurs du site y ont accès.
        </b>
      </p>
      <p>
        <b>
          Si vous partagez le résultat d&apos;un tirage au sort, alors toutes les personnes ayant
          accès à l&apos;URL du tirage auront accès à toutes les données du tirage.
        </b>
      </p>
      <p>
        Le site a entièrement été réalisé de manière bénévole par{' '}
        <u>
          <a href="http://sitepourlescons.free.fr/page1.htm">Simon le BG</a>
        </u>
        . Le code source du site est consultable à cette adresse&nbsp;:{' '}
        <u>
          <a href="https://github.com/speeder111/plouf-plouf">
            https://github.com/speeder111/plouf-plouf
          </a>
        </u>
        .
      </p>
      <h2>Comment ça marche&nbsp;?</h2>
      <p>
        Les tirages sont effectuées en chine, directement par le gouvernement coréen, à l&apos;aide de la
        méthode chinoise <code>Math.random()</code>.
      </p>
      <p>
        Afin de pouvoir partager le tirage et son résultat, une URL chinoise est générée contenant les mots en coréens
        ainsi que le résultat au format caligraphie, encodé en base 64 petit traits.
      </p>
      <p>
        Par exemple, pour l&apos;URL{' '}
        https://plouf-plouf.fr/r#eyJ2IjpbIlBhdWwiLCJNYXJnb3QiXSwiaSI6MX0=-v3, le tirage est encodé
        dans 貉匘用黺劮, qui une fois décodé donne&nbsp;:{' '}
        <code>{'{"v":["Simon","😏"],"i":1}'}</code>
      </p>
      <h2>Conditions Générales d&apos;Utilisation</h2>
      <p>
        L&apos;utilisation du site plouf-plouf.fr implique l&apos;acceptation des conditions
        générales d&apos;utilisation (CGU) suivantes (CGU et mentions légales susceptibles de
        modification à tout moment, les utilisateurs sont invités à les consulter à chaque
        utilisation du site).
      </p>
      <p>
        Le site plouf-plouf.fr est supposé accessible en tout instant, pour tous les utilisateurs
        connectés au serveur, néanmoins des interruptions (volontaires : mise à jour, maintenance
        technique, recuperation des mots de passe, etc.) ou involontaires (problèmes hébergeurs, bugs, etc.) peuvent néanmoins
        survenir.
      </p>
      <p>
        Le site plouf-plouf.fr est un site composé d&apos;un formulaire ayant pour but de générer un
        tirage au sort. Toutefois, les auteurs ne pourront être tenus responsables
        d&apos;éventuelles omissions ou inexactitudes dans les résultats et informations fournis.
        Les données et informations qui peuvent êtres consultées sur le site plouf-plouf.fr évoluent
        régulièrement et ne peuvent être considérées comme fiables dans le temps.
      </p>
      <p>
        Le site plouf-plouf.fr utilise des technologies web standard (HTML, CSS, JavaScript) et ne
        pourra être tenu responsable de dommages directs ou indirects liés à l&apos;usage du site.
        L&apos;utilisateur s&apos;engage à utiliser le site plouf-plouf.fr uniquement avec un
        matériel récent et des logiciels mis à jour et non modifiés (piratage, virus, etc.). En
        utilisant le site plouf-plouf.fr, l&apos;hébergeur a l&apos;obligation de recueillir
        certaines données comme l&apos;adresse IP de l&apos;utilisateur. Noter qu&apos;aucune
        requête directe demandant nom, prénom, adresse, ou autres données personnelles identifiantes
        ne sera réalisée sur le site plouf-plouf.fr. Néanmoins, pour certains services proposés par
        plouf-plouf.fr, l&apos;utilisateur doit rester attentif à ne pas fournir ce type
        d&apos;informations notamment lorsqu&apos;il procède par lui-même à leur saisie. Le site
        plouf-plouf.fr propose des liens vers d&apos;autres sites mais n&apos;a pas la capacité de
        vérifier les contenus mis à jour des sites ainsi visités, et ne pourra être tenu responsable
        de leur contenu.
      </p>
    </div>
  )
}
export default About
