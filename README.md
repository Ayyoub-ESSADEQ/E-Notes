# E-Notes

## Introduction :
E-Notes est une application web destinée exclusivement aux professeurs et aux coordinateurs pour enregistrer et suivre les remarques des séances assistées. Cette application offre un moyen efficace et centralisé de collecter et de gérer les informations importantes liées aux séances de cours.

L'objectif principal d'E-Notes est de simplifier le processus de suivi des séances assistées en fournissant aux professeurs un outil convivial et intuitif pour enregistrer et consulter les remarques pertinentes. Les professeurs peuvent entrer des remarques détaillées sur le déroulement de chaque séance, les points importants abordés, les difficultés rencontrées, les progrès des étudiants, etc.

En plus des professeurs, E-Notes permet également aux coordinateurs tels que les coordinateurs de filière, les coordinateurs de module et les coordinateurs adjoints d'avoir une vision globale du suivi des cours. Ces coordinateurs peuvent accéder aux remarques enregistrées par les professeurs, obtenir des informations sur les séances passées et les progrès des étudiants, et prendre des décisions éclairées pour améliorer la qualité de l'enseignement.

Grâce à E-Notes, les professeurs peuvent consigner de manière précise et structurée les détails importants de chaque séance assistée, ce qui facilite la révision, la préparation des cours futurs et la communication avec les coordinateurs. L'application offre une vue d'ensemble du suivi des cours, permettant aux coordinateurs de mieux comprendre les défis et les progrès de chaque cours et de prendre des mesures appropriées pour améliorer la qualité de l'enseignement.

En résumé, E-Notes est une application web développée qui vise à fournir aux professeurs un moyen efficace de saisir et de suivre les remarques des séances assistées. Elle permet également aux coordinateurs d'avoir une vision globale du suivi des cours, favorisant ainsi une meilleure coordination et une prise de décision éclairée pour améliorer l'expérience d'apprentissage des étudiants.
## I.	L'architecture MVC pour une structure efficace dans notre projet
Lors du développement de notre projet, nous avons choisi d'utiliser l'architecture Modèle-Vue-Contrôleur (MVC) pour organiser et structurer notre code de manière efficace. L'architecture MVC est largement utilisée dans le développement logiciel pour séparer les différentes responsabilités des composants d'une application, ce qui facilite la maintenance, l'évolutivité et la collaboration entre les membres de l'équipe.

Le modèle (Model) représente la logique métier de notre application. Il s'agit de la couche responsable de la gestion des données, des algorithmes et des règles de l'application. Le modèle encapsule les données et fournit des méthodes pour les manipuler, les valider et les rendre accessibles à d'autres parties de l'application.

La vue (View) est responsable de l'interface utilisateur de notre application. Elle se charge de la présentation des données au travers d'une interface graphique ou d'une interface utilisateur web. La vue n'a pas de logique métier, elle se contente d'afficher les informations fournies par le modèle et d'interagir avec l'utilisateur.

Le contrôleur (Controller) agit comme l'intermédiaire entre le modèle et la vue. Il reçoit les entrées de l'utilisateur à travers la vue, interagit avec le modèle pour effectuer les actions nécessaires et met à jour la vue en conséquence. Le contrôleur gère également les événements, les requêtes et les actions de l'utilisateur, et assure la synchronisation entre la vue et le modèle.

En utilisant l'architecture MVC, nous pouvons séparer clairement les différentes responsabilités de notre projet, ce qui facilite la compréhension du code, la maintenance et les tests. De plus, l'architecture MVC favorise la réutilisation du code, car les différents composants sont indépendants les uns des autres et peuvent être modifiés ou remplacés sans affecter le reste de l'application.

En résumé, l'utilisation de l'architecture MVC dans notre projet permet de diviser notre application en trois parties distinctes (Modèle, Vue, Contrôleur), offrant ainsi une structure claire et modulaire. Cela facilite la collaboration entre les membres de l'équipe, l'évolutivité du projet et la création d'une interface utilisateur réactive et intuitive. 

## II.	Les modèles utilisés dans le projet :
Dans la couche modèle de notre application, nous utilisons plusieurs modèles qui jouent un rôle essentiel dans la gestion des données et la logique métier. Ces modèles sont conçus pour représenter différentes entités et relations au sein de notre système. Voici une brève introduction de chacun de ces modèles :

1.	Prof : Le modèle "Prof" représente les enseignants ou professeurs dans notre application. Il contient les informations pertinentes telles que le nom, l'adresse email, les qualifications et éventuellement d'autres attributs spécifiques à chaque professeur. Ce modèle est utilisé pour gérer les données des professeurs, leur attribution à des cours spécifiques, et d'autres fonctionnalités liées à leur rôle dans notre système.

2.	Compte : Le modèle "Compte" représente les comptes utilisateur dans notre application. Il peut contenir des informations telles que le nom d'utilisateur, l'adresse email, le mot de passe et éventuellement d'autres données de profil. Ce modèle est utilisé pour gérer l'authentification, l'autorisation et les fonctionnalités liées à la gestion des comptes utilisateur.

3.	Cours : Le modèle "Cours" représente les cours disponibles dans notre système. Il contient des informations telles que le titre du cours, la description, l'horaire et éventuellement d'autres détails pertinents. Ce modèle est utilisé pour gérer la création, la modification et la consultation des cours proposés dans notre application.

4.	CoursProf : Le modèle "CoursProf" est une relation entre les modèles "Cours" et "Prof". Il représente l'attribution d'un professeur à un cours spécifique. Ce modèle permet de gérer les relations entre les professeurs et les cours, notamment pour l'assignation des professeurs à des cours et la récupération des informations associées.

5.	Séance : Le modèle "Séance" représente les séances ou sessions de cours dans notre application. Il contient des informations telles que la date, l'heure, la durée et d'autres détails pertinents pour chaque séance de cours. Ce modèle est utilisé pour planifier et gérer les différentes sessions d'un cours donné.

6.	CoursSeance : Le modèle "CoursSeance" est une relation entre les modèles "Cours" et "Séance". Il représente l'association d'une séance de cours à un cours spécifique. Ce modèle permet de gérer les relations entre les cours et les séances, notamment pour la planification et la récupération des informations associées.

Ces différents modèles dans la couche modèle de notre application nous permettent de structurer et de gérer efficacement les données liées aux professeurs, aux comptes utilisateur, aux cours et aux séances. Chaque modèle joue un rôle spécifique dans notre système, contribuant ainsi à la logique métier et à la manipulation des données de manière cohérente et organisée.

Voici une implémentation du modèle « Séance » en utilisant le module « Sequelize » :
 
Le code fourni présente un module Sequelize qui définit le modèle d'un professeur (`Prof`). Sequelize est un ORM (Object-Relational Mapping) pour Node.js, qui facilite l'interaction avec les bases de données relationnelles. Ce module utilise les fonctionnalités de Sequelize pour définir les attributs d'un professeur, tels que son identifiant, sa filière, son coordinateur de filière, son nom et son prénom. Chaque attribut est associé à un type de données spécifique, tel que `INTEGER` et `STRING`, et peut avoir des valeurs par défaut. De plus, le module inclut des configurations supplémentaires, comme le gel de la table correspondante en utilisant `freezeTableName:true`. Cette structure de code permet de créer et manipuler facilement des objets Prof dans une base de données relationnelle en utilisant Sequelize.

 
Nous avons également créé un utilitaire appelé `connection.js` qui facilite la connexion à la base de données en utilisant le pilote MySQL2. Cette fonction utilitaire nous permet d'éviter la répétition de code chaque fois que nous souhaitons créer un modèle Sequelize.

La fonction `connection.js` contient la configuration nécessaire pour établir la connexion avec la base de données, tels que l'hôte, le port, le nom d'utilisateur, le mot de passe et le nom de la base de données. En regroupant ces informations de connexion dans un seul endroit, nous simplifions la gestion des connexions à la base de données et évitons la duplication de code.

En utilisant `connection.js`, nous importons la connexion établie dans notre module `Prof`, ce qui nous permet de l'utiliser directement pour créer notre modèle de professeur. Cette approche modulaire améliore la lisibilité du code, facilite la maintenance et favorise la réutilisation des connexions à la base de données dans d'autres modules.

En résumé, grâce à la fonction utilitaire `connection.js`, nous avons centralisé la logique de connexion à la base de données, ce qui nous permet de créer facilement des modèles Sequelize sans répéter le code de connexion à chaque fois.
III.	Les contrôleurs utilisés dans le projet :
Dans la couche de contrôle de notre application, nous avons mis en place différents contrôleurs qui jouent un rôle central dans la gestion des actions et des interactions entre les utilisateurs, les modèles et les vues. Ces contrôleurs sont responsables de l'exécution des différentes fonctionnalités de notre application et de la coordination des opérations nécessaires pour répondre aux demandes des utilisateurs. Voici une brève introduction de certains des contrôleurs que nous utilisons :

1.	retrieveMyLesson : Ce contrôleur est chargé de récupérer les leçons associées à un utilisateur spécifique. Il interagit avec le modèle "Cours" et récupère les cours attribués à l'utilisateur actuel. Ce contrôleur est utilisé pour afficher les leçons personnalisées d'un utilisateur, facilitant ainsi son accès aux cours auxquels il est inscrit.


2.	addSession : Ce contrôleur est responsable de l'ajout d'une nouvelle séance de cours à un cours existant. Il reçoit les informations relatives à la séance de cours, telles que la date, l'heure et la durée, et les enregistre dans le modèle "Seance". Ce contrôleur assure également la mise à jour des relations entre les modèles "Cours" et "Seance", en associant la nouvelle séance au cours approprié.

3.	removeSession : Ce contrôleur gère la suppression d'une séance de cours existante. Il reçoit l'identifiant de la séance à supprimer et effectue les opérations nécessaires pour supprimer cette séance du modèle "Seance". De plus, ce contrôleur met à jour les relations dans le modèle "CoursSeance" en dissociant la séance du cours correspondant.

4.	updateSession : Ce contrôleur est chargé de mettre à jour les détails d'une séance de cours existante. Il reçoit les informations mises à jour, telles que la date, l'heure ou la durée, et les applique au modèle "Seance". Ce contrôleur assure également la synchronisation des informations avec les autres composants liés, tels que les vues et les modèles associés.

Ces contrôleurs, parmi d'autres, jouent un rôle essentiel dans le flux de travail de notre application. Ils permettent d'intercepter les demandes des utilisateurs, de coordonner les opérations nécessaires dans les modèles correspondants et de mettre à jour les vues en conséquence. En utilisant ces contrôleurs, nous assurons une manipulation cohérente et structurée des données, tout en offrant une expérience utilisateur fluide et réactive.
Voici une implémentation du contrôleur « removeSession » : 


 

 
Ce code présente un contrôleur permettant de supprimer une session dans un contexte spécifique. Le contrôleur utilise les modèles Sequelize `sessions` et `lessonsSessions` pour interagir avec la base de données. 

Lorsqu'une requête de suppression de session est reçue, le contrôleur commence par vérifier si l'utilisateur connecté est autorisé à supprimer la session. Il effectue cette vérification en utilisant les attributs `idProf`, `idCours` et `idSeance` provenant des paramètres de la requête et en interrogeant la table `lessonsSessions`.

Si l'utilisateur est autorisé à supprimer la session, le contrôleur utilise le modèle `sessions` pour effectuer la suppression dans la base de données. En cas de succès, un message indiquant que l'opération a réussi est renvoyé. Si une erreur survient lors de la suppression, un message d'erreur est renvoyé à la place.

Dans le cas où l'utilisateur n'est pas autorisé à supprimer la session, un message spécifiant que la session ne lui correspond pas est renvoyé.

Le contrôleur gère également les exceptions en utilisant des blocs `catch` pour capturer les erreurs potentielles lors de l'exécution des requêtes Sequelize. Si une erreur survient, un message d'erreur approprié est renvoyé en réponse.

Ce code offre une fonctionnalité de suppression de session robuste et sécurisée, avec une gestion adéquate des autorisations et des erreurs potentielles.
