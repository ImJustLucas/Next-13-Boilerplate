# Ma stack technique

Cette documentation consiste à lister tout les outils que je maitrise / déjà utiliser lors de projet fronted

## Framework

- React / Next.js

## Linting et Formattage

- Prettier (config disponible dans le projet)
- ESLint (Config relative dans le projet, sans plugin react/vue)
- Husky & Lint-staged pour vérifier les commits

## Styles

- Dans un écosystème react, utilisation de Styled Components
- Sass par défaut pour tout les projets

⚠️ Attention à injecter seulement des variables css native dans le projets. Les variables scss servent à modifier ces dernières seulement

## Typescript

L'utilisation de TS est recommandé, afin de typer ses interfaces et DTO.

## Commits

Beaucoup d'entreprise ne font pas ou peu attention aux commits conventionnels. Il est toujours appréciable d'avoir un historique de projet clean et un workflow agréable à lire.
J'utilise GitMoji, une extension qui me permet de lire l'historique de git sous forme de graphique.
Notre convention de commit prendra pour référence Conventionnal Commit 1.0.0 avec une légère touche amusante 🤩

### Structure

La structure des messages de commit doit respecter la forme suivante, doivent être en lowercase et en anglais :

```
<gitmoji> <type> <description> [(#<issue number>)]

[optional body]

[optional footer(s)]
```

Exemple :

```
📝 update documentation contributors

- Add @imjustlucas as a contributor
- Add @JohnDoe as a contributor

Co-authored-by: Laurent <laurent@email.team>
```

Mais le plus souvent, pour éviter les pertes de temps, les commits ressemblent a ça :

```
📝 update documentation contributors
```

## Tests

## Packages utiles

- Dayjs pour la gestion des dates
- Fontawesome pour les icones
- Axios pour les requêtes HTTP
