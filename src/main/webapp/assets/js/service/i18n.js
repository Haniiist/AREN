const dateTimeFormats = {
  'fr-FR': {
    short: {
      year: 'numeric', month: 'short', day: 'numeric'
    },
    long: {
      year: 'numeric', month: 'short', day: 'numeric',
      weekday: 'short', hour: 'numeric', minute: 'numeric'
    }
  },
}

const messages = {
  'fr-FR': {
    password_forgotten: "Mot de passe oublié",
    with_dots: "Avec...",
    on_the_doc: "Sur le document...",
    recapitulative: "Récapitulatif",
    by: "Par",
    proposed_by: "Proposé par",
    'with': "Avec",
    print: "Imprimer",
    connection: "Se connecter à AREN",
    connect: "Se connecter",
    cas_connection: "Connexion CAS",
    cancel: "Annuler",
    validate: "Valider",
    close: "Fermer",
    yes: "Oui",
    no: "Non",
    i_am: "Je suis",
    debate: "Débat",
    debate_tree: "Arbre du débat",
    comment_repartition: "Répartition des arguments",
    debate_sunburst: "Topologie",
    odt_export: "Export du débat",
    nb_comment: "{count} argument|{count} arguments",
    nb_letter: "{count} lettre|{count} lettres",
    by_comment_count: "Par nombre d'arguments",
    by_letter_count: "Par nombre de lettres",
    by_user: "Par utilisateur⋅rice",
    by_opinion: "Par opinion",
    display_labels: "Afficher les légendes",
    display_arguments: "Afficher les arguments",
    tags_edition: "Édition des mots-clefs",
    tags: "Mots-clefs",
    proposed_tags: "Mots-clefs proposés",
    no_tags_yet: "En recherche de proposition",
    category_edition: "Édition de catégorie",
    category_creation: "Création de catégorie",
    team_edition: "Édition de groupe",
    team_creation: "Création de groupe",
    image: "Image",
    user_creation: "Création d'un⋅e untilisateur⋅rice",
    username: "Pseudonyme",
    email: "E-mail",
    first_name: "Prénom",
    last_name: "Nom de famille",
    password: "Mot de passe",
    remember_me: "Se souvenir de moi",
    old_password: "Mot de passe actuel",
    new_password: "Nouveau mot de passe",
    password_check: "Vérification du mot de passe",
    change_password: "Changer de mot de passe",
    theme: "Thème",
    scraps: "Selections",
    display: "Afficher",
    sort_by: "Trier par",
    date: "Date",
    position: "Position",
    creation_success: "Création réussie",
    import_success: "Importation réussie",
    update_success: "Mise à jour réussie",
    display_team: "Afficher et modifier le groupe",
    new_team: "Nouveau groupe",
    new_user: "Nouvel⋅le utilisateur⋅rice",
    add_user: "Ajouter un⋅e utilisateur⋅rice",
    team_managment: "Gestion des groupes",
    user_managment: "Gestion des utilisateur⋅rices",
    user_created: "Utilisateur⋅rice enregistré⋅e",
    user_activated: "Utilisateur⋅rice activé⋅e",
    anonymous_user: "Anonyme",
    save: "Sauvegarder",
    modify: "Modifier",
    nb_users: "Aucun utilisateur⋅rice|{count} utilisateur⋅rice|{count} utilisateur⋅rices",
    nb_teams: "Aucun groupe|{count} groupe|{count} groupes",
    nb_debates: "Aucun débat|{count} débat|{count} débats",
    nb_comments: "Aucun argument|{count} argument|{count} arguments",
    last_post_the: "Dernier post le",
    no_post: "Aucun post",
    category: "Catégorie",
    title: "Titre",
    author: "Auteur⋅e",
    restitution: "Restitution",
    posts: "Posts",
    last_post: "Dernier post",
    document: "Document",
    teams: "Groupes",
    moderators: "Modérateur⋅rice.s",
    authority: "Status",
    users: "Utilisateur⋅rices",
    guests: "Invité⋅es",
    debates: "Débats",
    new_debate: "Nouveau débat",
    invite_in_debate: "Inviter au débat",
    SUPERADMIN: "Super administrateur⋅rice",
    ADMIN: "Administrateur⋅rice",
    MODO: "Modérateur⋅rice",
    USER: "Utilisateur⋅rice",
    GUEST: "Invité⋅e",
    DELETED: "Supprimé",
    report: "Signalement",
    select_all: "Selectionner tout",
    unselect_all: "Déselectionner tout",
    advanced_options: "Options avancées",
    modo_request: "Demande d'autorisation pour créer des débats",
    public_debate: "Débat public",
    reformulation_check: "Assistant de reformulation",
    idefix_link: "Lien IDEFIX",
    with_hypostases: "Avec hypostase",
    reformulation_mandatory: "Reformulation obligatoire",
    active: "Actif",
    open_public: "Publique",
    without_institution: "Sans établissement",
    running: "En cours...",
    import: "Importer",
    not_connected: "Vous n'êtes pas connecté⋅e",
    tutorials: "Tutoriels",
    argue: "Argumenter",
    aaf_import: "Import AAF",
    update_tags: "Mise à jour des tags",
    start: "Lancer",
    application_settings: "Configuration",
    invite_to_debate: "Inviter à débatre",
    configuration: {
      advanced: "Avancée",
      base: {
        title: "Paramètres généraux",
      },
      production: "En production",
      "admin-mail": "Email d'administration <small>vous pouvez en saisir plusieurs, séparées par une virgule</small>",
      initialization: "Date d'initialisation",
      "reverse-proxy": "Reverse Proxy <small>(l'URL racine de la plateforme)</small>",
      platform: "Identifiant de la plateforme <small>(habituellement l'adresse ip)</small>",
      default: {
        title: "Paramètres génériques",
        "institution-id": "Id de l'institution par défault"
      },
      authentication: {
        title: "Paramètres de sécurité",
        jwt: {
          secret: "JWT secret <small>(si changé tous le sutilisateur⋅ices seront déconecté⋅es)</small>",
          issuer: "JWT issuer <small>(par défault, identique au reverse proxy)</small>",
          audience: "JWT audience <small>(par défault, identique au reverse proxy)</small>",
          validFor: "JWT temps de validité en secondes <small>(1 an = 31536000s)</small>",
          clockSkew: "JWT clock skew en minutes",
        }
      },
      smtp: {
        title: "Paramètres SMTP",
        server: "Serveur",
        sender: "Adresse d'envoie",
        auth: "Authentification requise",
        port: "Port",
        tls: "Connexion TLS",
        ssl: "Connexion SSL",
        username: "Utilisateur",
        password: "Mot de passe",
      },
      url: {
        title: "Paramètres des outils",
        cas: "Central Authentication Service",
        scalar: "Serveur de calcul scalaire",
        theme: "Serveur de calcul des thèmes",
        idefix: "Serveur Idéfix",
      },
      rules: {
        title: "Règles",
        remove: {
          categoryWithDocuments: "Autoriser suppression de catégorie avec documents",
          documentWithDebates: "Autoriser suppression de document avec débats",
          debatesWithComments: "Autoriser suppression de débat avec commentaires",
        }
      }
    },
    helper: {
      welcome: "Bienvenue sur la plateforme AREN (Argumentation & Numérique)<br>Il s'agit d’un espace numérique de débat pour pratiquer l’argumentation.<br>Prendre en compte les arguments des autres et justifier son opinion pour mieux argumenter et exercer son esprit critique !",
      creating_user: "Création en cours, veuillez patienter...",
      not_connected: "Vous devez être inscrit⋅e et connecté⋅e pour réaliser cette action",
      mark_as_read: "Marquer comme lue",
      mark_as_unread: "Marquer comme non lue",
      cas_login: "Connectez-vous via le system CAS de l'ENT",
      add_document: "Ajouter un document",
      edit_category: "Modifier la catégorie",
      remove_category: "Supprimer la catégorie",
      cannot_remove_category: "Vous ne pouvez pas supprimer une catégorie contenant un document",
      copy_document: "Dupliquer le document",
      remove_debate: "Supprimer le débat",
      cannot_remove_debate: "Vous ne pouvez pas supprimer un débat contenant des arguments",
      remove_document: "Supprimer le document",
      cannot_edit_document: "Vous ne pouvez pas modifier un document contenant un débat",
      cannot_remove_document: "Vous ne pouvez pas supprimer un document contenant un débat",
      edit_team: "Renomer le groupe",
      cannot_edit_institution_team: "Vous ne pouvez pas modifier un groupe appartenant à une institution",
      remove_team: "Supprimer le groupe",
      cannot_remove_institution_team: "Vous ne pouvez pas supprimer un groupe appartenant à une institution",
      cannot_remove_team: "Vous ne pouvez pas supprimer un groupe lié à un débat",
      add_user_in_team: "Ajouter l'utilisateur⋅rice au groupe",
      remove_user_from_team: "Supprimer l'utilisateur⋅rice du groupe",
      cannot_add_institution_user: "Vous ne pouvez pas ajouter un utilisateur⋅rice d'un groupe institutionel",
      remove_user: "Supprimer l'utilisateur⋅rice",
      remove_permanent_user: "Supprimer définitivement l'utilisateur⋅rice",
      cannot_remove_institution_user: "Vous ne pouvez pas supprimer un⋅¢ utilisateur⋅rice d'un groupe institutionel",
      cannot_create_institution_user: "Vous ne pouvez pas créer un⋅e utilisateur⋅rice dans un établissemnt",
      cannot_create_institution_team: "Vous ne pouvez pas ajouter un groupe dans un établissement",
      user_already_in_team: "L'utilisateur⋅rice fait déjà partie du groupe",
      add_user_to_debate: "Ajouter l'utilisateur⋅rice au débat",
      user_already_in_debate: "L'utilisateur⋅rice fait déjà partie du débat",
      add_team_to_debate: "Ajouter le groupe au débat",
      team_already_in_debate: "Le groupe fait déjà parti du débat",
      used_for_connection: "Utilisé pour la connexion",
      not_an_email: "Ce n'est pas une adresse e-mail",
      different_passwords: "Mots de passes différents",
      title_placeholder: "Un titre pertinent",
      image_url_placeholder: "L'url d'une image",
      restitution_display_details: "Survolez une tranche du graphique pour afficher ses données",
      debate_created: "Votre débat a bien été créé sur le document '{documentName}' de la catégorie '{categoryName}'<br>Voulez-vous y accéder ?",
      delete_category: "Vous êtes sur le point de supprimer la catégorie '{categoryName}'",
      delete_category_warning: "Tous les documents qu'elle contient seront effacés ; tous les débats de ces documents seront également effacés.",
      delete_document: "Vous êtes sur le point de supprimer le document '{documentName}'",
      delete_document_warning: "Tous les débats qui lui sont lié seront également effacés.",
      delete_debate: "Vous êtes sur le point de supprimer le débat '{debateName}'",
      not_cancelable: "<b>Cette action n'est pas réversible.</b>",
      delete_team: "Vous êtes sur le point de supprimer le groupe '{teamName}'",
      delete_user: "Vous êtes sur le point de supprimer l'utilisateur⋅rice '{userName}'",
      delete_permanent_user: "Vous êtes sur le point de définitivement supprimer l'utilisateur⋅rice '{userName}'",
      delete_permanent_user_warning: "Cette action est irréversible<br>Si l'utilisateur⋅rice a déja posté des arguments, cette action échouera.<br>Êtes vous sûr⋅e de vouloir continuer ?",
      do_continue: "Êtes vous sûr⋅e de vouloir continuer ?",
      password_changed: "Mot de passe mis à jour avec succès",
      password_changed_loged_out: "Veuillez vous reconnecter avec votre nouveau mot de passe",
      user_created_email: "Un e-mail à été envoyé à l'adresse saisie, cliquez sur le lien fourni pour activer votre compte",
      user_activated: "Votre adresse e-mail a bien été vérifiée, vous pouvez fermer cette fenêtre et vous connecter",
      username_exists: "Nom d'utilisateur⋅rice déjà existant",
      email_exists: "Mail déjà existant",
      tag_explanations: "Cliquez sur les mots-clefs cohérents.",
      tag_input_explanations: "Presser Entrée pour valider",
      report_comment: "Signaler l'argument",
      report_details: "Vous vous apprétez à signaler un message à la modération.<p>Un message doit être signalé pour les raisons suivantes : <ul class='browser-default'><li>propos inappropriés ou insultants (par ex. : atteinte à la dignité, discours haineux, menaces)</li><li>opression systémique (par ex. : racisme, sexisme, homophobie)</li><li>contenu commercial (par ex. : publicité, promotion, appel d'offre)</li><li>autres propos sans lien aucun avec le débat en cours</li></ul></p>Êtes vous sûr⋅e de vouloir continuer ?",
      export: "Votre téléchargement va débuter... Si rien ne se passe <a href='ws/debates/{debateId}/export'>cliquez ici</a>",
      password_forgotten: "<p>Vous avez oubié votre mot de passe ? Pas de problème !</p><p>Saisissez votre adresse e-mail ou votre pseudonyme.</p>",
      password_forgotten_email: "<p>Si vous êtes enregistré⋅e, un e-mail expliquant la procédure de réinitialisation sera envoyé à l'adresse associée à votre compte.</p><p>Vérifiez votre boite mail.</p>",
      theme_not_found: "Aucun résultat pour ce thème",
      theme_already_set: "Thème déjà saisi",
      reformulation_check: "Affiche un smiley lors de la reformulation",
      idefix_link: "Ajoute des tags aux documents et arguments pour les utiliser avec IDEFIX",
      with_hypostases: "Propose une selection d'hypostase pour les arguments",
      reformulation_mandatory: "Active / Désactive la reformulation dans le débat",
      aaf_import_success: "Les données AAF ont bien été importées, vous pouvez fermer cette fenêtre.",
      update_all_tags: "Veuillez patienter, ce processus peut-être très long.<br><b>Ne fermez pas cette fenêtre</b>",
      update_tags: "<p>Ce processus peut-être long, il sera executé en arrière plan et vous n'aurez pas la possibilité de modifier les tags pendant ce temps.</p><p>Voulez-vous continuer ?</p>",
      tag_update_success: "La mise à jour des tags est un succès.",
      active: "Le débat peut être commenté",
      open_public: "Le débat sera accessible par n'importe quel utilisateur⋅ice, même non coonnecté⋅e",
      404: "Après long débat, il est avéré que cette page n'existe pas.",
      redirect_home: "Vous allez être automatiquement regirigé vers la page daccueil dans..."
    },
    notification: {
      team_added_to_debate: "Votre groupe {teamName} participe au débat {debateName}.",
      invited_to_debate: "Vous êtes invité⋅e sur le débat {debateName}.",
      comment_answered: "{firstName} {lastName} à répondu à votre argument.",
      comment_moderated: "Votre argument à été modéré sur le débat {debateName}.",
      comment_signaled: "Votre argument à été signalé sur le débat {debateName}."
    },
    error: {
      'Insertion error': "Erreur d'enregistrement",
      'HTTP 404 Not Found': "HTTP 404 non trouvé",
      'Resource not found': "Resource non trouvée",
      'Authentication error': "Erreur d'authentification",
      "Access denied": "Accès refusé",
      "Invalid token": "Erreur d'authentification",
      permission_missing: "Vous n'avez pas les droits",
      invalid_token: "Authentification invalide<br>Veuillez vous reconnecter et réessayer",
      unmutable_object: "Impossible de supprimer l'objet",
      bad_credentials: "Identifiants incorrects",
      duplicate_key: "La clef {keyName} avec la valeur {keyValue} existe déjà.",
      mandatory_property: "La valeur {propertyName} est nécessaire.",
      internal: "ERREUR INTERNE",
      expired_token: "Jeton d'authentification expiré",
      internal_message: "<p>Toutes nos excuses, une erreur s'est produite sur nos serveurs.</p><p>Veuillez réessayer ou contacter un administrateur⋅trice si l'erreur persiste.</p>",
      aaf_import: "<p>Erreur lors de l'import AAF.</p><p>Il est probable que votre fichier soit corompu ou n'entre pas dans les standard de l'application.</p>",
      tag_update_success: "<p>Erreur lors de la mise à jour des tags.</p><p>Contacter un admin.</p>"
    },
    menu: {
      open: "Ouvrir un débat",
      users: "Utilisateur⋅rices",
      teams: "Groupes",
      documents: "Documents",
      my_debates: "Mes débats",
      public_debates: "Débats publics",
      logout: "Déconnexion",
      login: "Se connecter",
      signin: "S'enregistrer"
    },
    comment: {
      add_argument: "Ajouter un argument",
      reformulation: "Reformulation",
      argumentation: "Argumentation",
      against: "Plutôt pas d'accord",
      for: "Plutôt d'accord",
      neutral: "Pas compris",
      is_argument: "Il s'agit d'un argument",
      is_opinion: "Il s'agit d'une opinion",
      opinion: "Opinion",
      nb_answer: " |{count} réponse|{count} réponses",
      select_hypostases: "Selectionnez une ou plusieurs hypostases dans la liste",
      expert: "Expert"
    },
    argumentation_check: {
      waiting: "Attente de saisie",
      loading: "Analyse en cours",
      off_topic: "Reformulation hors sujet",
      close: "Reformulation un peu éloignée",
      nice: "Belle reformulation !",
      identical: "Reformulation identique !"
    },
    hypostase: {
      qualitative: "Qualitatif",
      quantitative: "Quantitatif",
      structural: "Structurel",
      difficulty: "Difficulté",
      explanation: "Explicatif",
      variance: "Variance",
      mode: "Mode",
      axiom: "Axiome",
      hypothesis: "Hypothèse",
      principle: "Principe",
      classification: "Classification",
      variation: "Variation",
      value: "Valeur",
      definition: "Définition",
      paradigme: "Paradigme",
      paradoxe: "Paradoxe",
      clue: "Indice",
      conjecture: "Conjecture",
      problem: "Problème",
      domain: "Domaine",
      formalism: "Formalisme",
      data: "Donnée",
      belief: "Croyance",
      theory: "Théorie",
      law: "Loi",
      aporia: "Aporie",
      variable: "Variable",
      dimension: "Dimension",
      structure: "Structure",
      object: "Objet",
      approximation: "Approximation",
      phenomenon: "Phénomène",
      event: "Évènement",
      invariant: "Invariant",
      method: "Méthode"
    },
    documentation: {
      help: "<h1>Aide</h1><p>Cliquez sur la flèche pour passer à l'aide suivante, ou survolez les éléments qui vous questionnent.</p>",
      user_panel: "<h1>Panneau d'utilisateur⋅ice</h1><p>Vous permet de changer de mot de passe et de vous déconnecter</p>",
      notification_panel: "<h1>Restez informé des débats auxquels vous participez.</h1><p>Vous recevrez une notification lorsqu'une réponse est postée à un de vos arguments et lorsque vous avez été invité⋅e à un nouveau débat.</p>",
      create_debate_with: "<h1>Débatre avec</h1><p>Sélectionnez les personnes et groupes qui pouront participer au débat. Si rien n'est sélectioné le débat sera public, accessible à tou⋅tes</p>",
      create_debate_document: "<h1>Débatre sur</h1><p>Sélectionnez le document sur lequel vous désirez porter le débat</p>",
      create_debate_recap: "<h1>Récapitulatif</h1><p>Vérifiez les informations saisies et selectionez des paramètres avancés</p>",
      debate_display: "<h1>Informations supplémentaires</h1><p>Sélectionnez <b>Document</b> pour afficher le document à débattre.<br>Sélectionnez <b>Thème</b> pour retrouver les arguments en lien avec une thématique donnée.<br>Sélectionnez <b>Sélections</b> pour afficher les parties de texte les plus argumentées.</p>",
      debate_sort: "<h1>Tri des arguments</h1><p>Triez les arguments par <b>date</b> de rédaction ou par <b>position</b> dans le document.</p>",
      debate_document: "<h1>Document à débattre</h1><p>Ici s'affiche le texte à débattre, lisez-le attentivement avant de proposer des arguments.</p><p>Sélectionnez une partie du texte sur laquelle vous souhaitez intervenir, une icône apparaîtra pour vous permettre d'argumenter.</p><p>Vous êtes sur une plateforme dédiée au débat, n'hésitez pas à défendre votre opinion avec des arguments : s’appuyer sur des données, utiliser des connaissances, donner des exemples, préciser vos sources, etc.</p>",
      debate_bulets: "<h1>Puces d'arguments</h1><p>Les puces indiquent les sélections du texte sur lesquelles des arguments ont été produits. Les couleurs permettent de savoir si les arguments sont pour ou contre la sélection.</p><p>Au survol, la partie argumentée est mise en surbrillance.<br>Au clic, l'argument est sélectionné dans le panneau de droite.</p>",
      debate_themes: "<h1>Thèmes du débat</h1><p>Saisissez un mot ou un groupe de mot définissant un thème et pressez <b>Entrée</p> pour valier. Les argument savec le thème saisis seront alors calculé et mis en lien avec celui-ci.</p><p>Vous pouvez supprimer un thème an cliquant sur <i class='close material-icons'>delete_forever</i></p>",
      debate_scraps: "<h1>Textes les plus selectioné</h1><p>Voici la liste des portions de texte du document les plus sélectionnées pour argumenter. Chaque seletion est relier aux arguments qui la contienne.</p>",
      debate_spaghettis: "<h1>Spaghettis</h1><p></p>"
    },
    footer: {
      collaborators: "Partenaires",
      useful_links: "Liens utiles",
      contact: "Contact",
      about: "À propos",
      contribute: "Contribuer sur GitHub",
    }
  }
}


const i18n = new VueI18n({
  locale: 'fr-FR',
  fallbackLocale: 'fr-FR',
  messages,
  dateTimeFormats
})
