# React search Artist
Permet de rechercher des infos sur l'artist, ses titres les plus écoutés ainsi que ses albums

## API
J'ai utilisé l'API de Spotify pour les 3 appel de données.

## Librairies
Pour le design, j'ai utilisé la librairie Material UI.
http://www.material-ui.com/#/

## Améliorations
- Afficher les albums sous forme de Grid List.
- Afficher les artists similaires sur la fiche artist
- Afficher la liste des concerts à venir du groupe (On n'avais pas pu car l'API ne voulait pas renvoyer de résultat via les appel en JS, voir erreur ci-dessous)

## Erreur 
Pour ajouter la liste des concerts à venir 
```console
No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:8080' is therefore not allowed access. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
```