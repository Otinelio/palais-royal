━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROMPT LOVABLE — PALAIS ROYAL DES SAVEURS
Gastronomie africaine & européenne · Lomé, Togo
Un festin royal au cœur du quartier de Bè Kpota
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

---

DONNÉES VÉRIFIÉES

- Nom exact : Palais Royal des Saveurs
- Adresse : Face au Collège Saint Michel, Djifa Kpota (Bè Kpota), Lomé, Togo
- WhatsApp : [À CONFIRMER — format +228XXXXXXXX]
- Horaires : 10h00 – 00h00, ouvert midi et soir
- Instagram : @palaisroyaldessaveurs [À CONFIRMER — à intégrer en footer]
- TikTok : Actif (contenu plats et ambiance) [À CONFIRMER — handle exact]
- Cuisine : Africaine (togolaise, yassa, gboma, fufu), européenne, pizzas, grillades, gastronomie du monde
- Ambiance observée : Restaurant chic et chaleureux, tonalités royales, plats généreux et soignés
- Positionnement : Mid-premium — chic et accessible, ouvert à une clientèle locale diverse
- Slogan : "Le goût qui fait la différence"
- Concurrents identifiés : Vivi Royal (spécialités togolaises), Le Gourmet Lomé (gastronomique bar craft), Olympe Café Bar Restaurant (Agoè)
- Ce qui différencie : Le nom "Palais Royal" positionne immédiatement le restaurant comme une adresse de prestige. La combinaison cuisine africaine + européenne + pizzas dans un cadre chic à Bè Kpota, quartier animé près du Collège Saint Michel, est une proposition forte et mémorable.
- Devise : FCFA (Franc CFA de l'Afrique de l'Ouest)

---

— VISION GLOBALE —

Le visiteur arrive sur le site et il ressent immédiatement qu'il n'est pas dans un restaurant ordinaire — il entre dans un palais. La page s'ouvre sur une image plein écran d'un plat africain somptueux, éclairé comme une œuvre d'art, sur un fond de salle dorée et tamisée. Les premiers mots qu'il lit ne sont pas un slogan publicitaire — c'est une invitation : "Le goût qui fait la différence". À Lomé, où la gastronomie est une affaire de convivialité profonde, de sauces mijotées au feu de bois et de tables qui réunissent les familles, ce site incarne cette chaleur sans jamais renoncer à l'élégance. Le fond crème chaud rappelle les murs en pisé des grandes demeures togolaises ; les dorures évoquent l'artisanat d'Agbodrafo et les tissus kente du marché d'Assigamé. Chaque scroll révèle un nouveau plat, une nouvelle promesse. Avant même d'arriver au menu, le visiteur a faim — et il sait exactement où il veut aller dîner ce soir.

---

— ARCHITECTURE GLOBALE — MÊME PROJET REACT, MÊME CODEBASE

```
PAGES DE L'APPLICATION

━ PUBLIC (navigation principale) ━
  /           → Home     : hero cinématique, sections ambiance + spécialités, CTA vers /menu
  /about      → À propos : histoire du restaurant, valeurs, équipe, localisation
  /contact    → Contact  : adresse, horaires, WhatsApp, carte Google Maps embed
  /menu       → Menu     : catalogue complet, panier, commande WhatsApp sans numéro de table

━ ACCÈS RESTREINT (aucun lien dans la navigation publique) ━
  /admin      → Dashboard admin : protégé par mot de passe hardcodé
  /menu/scan  → Menu sur place  : identique à /menu + modal numéro de table bloquant

NAVIGATION PUBLIQUE :
  Mobile  : bottom navigation bar fixe (Home | Menu | À propos | Contact)
            icônes lucide-react, label texte sous chaque icône
  Desktop : top navbar horizontale, fond transparent scrollé → fond #1A1A1A/90 + blur 12px
  → NE PAS créer de lien vers /admin ni /menu/scan dans la navigation
  → Ces pages sont accessibles uniquement en tapant l'URL directement

CONSTANTE ADMIN (à déclarer en haut du fichier auth) :
  const ADMIN_PASSWORD = "palais2025"  // ⚠ À changer avant déploiement
```

---

— DIRECTION ESTHÉTIQUE —

Nom de la direction : "Royal Terroir — Gastronomie africaine de prestige, chaleur de Lomé"

Ce que le site N'EST PAS :
1. Pas un site générique "food delivery" avec fond blanc, cartes plates et boutons bleu vif — l'esthétique Uber Eats / Jumia Food est l'ennemi.
2. Pas un site occidental froid et minimaliste copié-collé depuis Paris ou Lagos — ce site sent Lomé, le quartier de Bè, les parfums de la mer toute proche.
3. Pas une accumulation de motifs africains kitsch (masques, drapeaux, animaux) — la référence africaine est dans la texture, la chaleur des couleurs, la générosité des visuels, pas dans les clichés.

Ce que le site EST :
1. Un mélange entre un grand hôtel de Lomé des années dorées et un restaurant gastronomique contemporain — comme si le Grand Hôtel du Bénin avait ouvert une table privée.
2. Une direction éditoriale proche des grandes maisons de gastronomie africaine montante (Ikoyi London, Neni Berlin) : photos en grand format, typographie élégante, peu de texte, images qui parlent.
3. L'incarnation numérique du mot "palais" — architecturé, soigné, royal — sans jamais être froid ou inaccessible.

Comportement de la grille : Asymétrique et éditorial — alternance de sections pleine largeur et de grilles 60/40, créant une tension visuelle élégante comme un magazine de gastronomie.

Caractère général : Fond clair crème (#F5F0E8) en mode jour, sections sombres anthracite (#1A1A1A) pour les spécialités et le footer. Dense en visuels, aéré en typographie. Animé sur scroll uniquement — jamais d'animations auto-play agressives.

---

— PALETTE —

| Rôle | Description évocatrice | HEX | Règle d'usage stricte |
|------|----------------------|-----|----------------------|
| Or Royal | L'or des couronnes ashanti, chaud comme le soleil de 17h sur la Corniche de Lomé | `#D4AF37` | Uniquement sur : logo, prix, CTA principal, séparateurs décoratifs, badge panier. Maximum 15% de l'interface. |
| Anthracite Palais | Le noir profond d'une salle à manger aux bougies, intense et élégant | `#1A1A1A` | Fond des sections "immersives" (spécialités, footer), textes sur fond clair |
| Crème Ivoire | La nappe blanche légèrement dorée d'une belle table, chaleur et pureté | `#F5F0E8` | Fond principal des pages publiques — jamais utilisé sur fond sombre |
| Bourgogne Grenat | Le rouge profond d'une sauce gboma au piment, riche et appétissant | `#8B1A2F` | Accents d'urgence (promotions, tags "Populaire"), hover sur certains éléments secondaires |
| Vert Émeraude | La fraîcheur des feuilles de taro du marché d'Hédzranawoé, vivant et naturel | `#2E7D59` | Tags catégories végétariennes/salades, hover des liens de navigation secondaire |

---

— TYPOGRAPHIE —

Font principale : Playfair Display (Google Fonts)
Pourquoi : Serif élégante à fort contraste entre pleins et déliés, elle incarne le côté "palais" et gastronomique haut de gamme sans paraître froide. Référence des restaurants étoilés et des hotels de luxe.

| Usage | Taille | Weight | Tracking | Casse |
|-------|--------|--------|----------|-------|
| Hero title | 72px desktop / 44px mobile | 700 | -0.02em | Normale |
| Nom du restaurant (nav/logo) | 24px | 700 | 0.05em | MAJUSCULES |
| Titres de section | 48px desktop / 32px mobile | 600 | -0.01em | Normale |
| Noms des plats | 20px | 600 | 0 | Normale |
| Sous-titres / accroche | 22px | 400 italic | 0 | Normale |

Font secondaire : Poppins (Google Fonts)
Pourquoi : Sans-serif géométrique moderne, parfaite pour les descriptions, les prix, les labels et tout le contenu fonctionnel — contraste élégant avec Playfair.

| Usage | Taille | Weight | Line-height | Letter-spacing |
|-------|--------|--------|-------------|---------------|
| Descriptions plats | 14px | 400 | 1.6 | 0.01em |
| Prix | 18px | 700 | 1 | 0 |
| Labels catégories | 11px | 600 | 1 | 0.12em MAJUSCULES |
| Boutons CTA | 14px | 600 | 1 | 0.08em MAJUSCULES |
| Body / paragraphes | 16px | 400 | 1.7 | 0.01em |
| Navigation links | 13px | 500 | 1 | 0.06em |

---

— SYSTÈME D'ICÔNES —

Règle absolue : ZÉRO emoji dans toute l'interface. Aucun. Nulle part. Jamais.
Toute représentation visuelle est assurée par des icônes vectorielles.

Librairie : `lucide-react` — trait fin, cohérent, élégant.
Stroke width global : `1.5` (registre élégant, cohérent avec la direction haut de gamme)
Couleur par défaut : hérite de la couleur du texte courant
Couleur accent : `#D4AF37` sur les icônes CTA et le badge panier uniquement

```
Mapping complet :

Navigation publique :
  Home          → Home (20px)
  Menu          → UtensilsCrossed (20px)
  À propos      → Info (20px)
  Contact       → MapPin (20px)

Informations pratiques :
  Adresse       → MapPin (18px)
  Horaires      → Clock (18px)
  Téléphone     → Phone (18px)
  WhatsApp CTA  → MessageCircle (18px, couleur #25D366)

Panier et commande :
  CartFab       → ShoppingCart (24px)
  Ajouter       → Plus (16px)
  Réduire       → Minus (16px)
  Supprimer     → Trash2 (16px)
  Envoyer       → Send (18px)

Spécialités et menu :
  Catégories    → ChefHat (18px)
  Étoile        → Star (16px, pour "populaire")
  Livraison     → Truck (18px)
  Sur place     → UtensilsCrossed (18px)
  Événements    → CalendarDays (18px)

Modal numéro de table :
  Icône table   → Hash (40px, #D4AF37)

Admin dashboard :
  Login         → Lock (24px)
  Déconnexion   → LogOut (18px)
  Sauvegarder   → Save (18px)
  Modifier       → Pencil (16px)
  Supprimer     → Trash2 (16px)
  Export JSON   → Download (18px)
  Catégorie     → Layers (16px)
  Paramètres    → Settings (18px)

Footer réseaux sociaux :
  Instagram     → Instagram (18px) — depuis lucide-react
  TikTok        → Music2 (18px) — fallback si TikTok non disponible
  WhatsApp      → MessageCircle (18px, #25D366)
```

---

— ÉCRAN DE CHARGEMENT —

Séquence sur fond `#1A1A1A` (anthracite), durée totale 2.2 secondes.

1. 0ms : Fond noir, tout invisible
2. 200ms : Icône couronne SVG minimaliste (or `#D4AF37`, 48px) apparaît au centre — fade in + scale de 0.8→1.0, durée 400ms, easing `cubic-bezier(0.16, 1, 0.3, 1)`
3. 700ms : Nom "PALAIS ROYAL" apparaît sous la couronne — fade in, durée 350ms, easing `ease-out`
4. 1100ms : Sous-titre "DES SAVEURS" apparaît en lettres espacées — fade in + translateY de 8px→0, durée 300ms
5. 1600ms : Mince ligne horizontale or se déploie de gauche à droite sous le texte, 300ms, `linear`
6. 2000ms : Tout disparaît avec fade out 200ms → page principale apparaît

Pas de spinner. Pas de barre de progression. Pas de points clignotants. Uniquement couronne + nom + ligne.

---

— NAVIGATION —

Desktop :
- Position : fixed top, `z-index: 100`
- État initial (haut de page) : fond transparent, texte `#F5F0E8`
- État scrollé (>80px) : fond `rgba(26, 26, 26, 0.92)` + `backdrop-filter: blur(12px)`, transition 300ms `ease`
- Logo : "PALAIS ROYAL" en Playfair Display 700, 22px, lettre-spacing 0.06em, couleur `#D4AF37`
- Suivi "DES SAVEURS" en Poppins 400, 11px, `#F5F0E8` opacity 0.7, MAJUSCULES
- Liens : Poppins 13px 500, `#F5F0E8`, lettre-spacing 0.05em, MAJUSCULES
- Hover lien : couleur `#D4AF37`, transition 200ms ease, pas de soulignement
- CTA "Commander" à droite : fond `#D4AF37`, texte `#1A1A1A`, Poppins 12px 700, padding 10px 20px, border-radius 4px, hover: fond `#B8960F`, transition 150ms ease

Mobile :
- Navigation : bottom bar fixe, fond `#1A1A1A`, hauteur 60px, `border-top: 1px solid rgba(212, 175, 55, 0.2)`
- 4 icônes centrées (Home, UtensilsCrossed, Info, MapPin) — lucide-react 22px
- Label sous icône : Poppins 10px 500, MAJUSCULES, lettre-spacing 0.06em
- Icône active : couleur `#D4AF37`, label `#D4AF37`
- Icône inactive : couleur `#F5F0E8` opacity 0.5
- Header mobile : logo "PALAIS ROYAL" centré, fond `#1A1A1A`, hauteur 52px

---

— VOLET 1 : SITE VITRINE PUBLIC —

PAGE HOME ( / )

HERO — Premier écran, plein écran (100vh)

Image plein fond : grand plat de grillades africaines fumantes sur braise, éclairage chaud latéral, tons ambrés. Overlay gradient directionnel : `linear-gradient(to bottom, rgba(26,26,26,0.3) 0%, rgba(26,26,26,0.7) 100%)`.

Au centre, légèrement vers le bas (60% de la hauteur) :
- Surtexte : "RESTAURANT GASTRONOMIQUE · LOMÉ" — Poppins 11px 600, `#D4AF37`, lettre-spacing 0.2em, MAJUSCULES, fade in 400ms délai 300ms
- Titre : "Le goût qui fait la différence" — Playfair Display 700 72px desktop / 44px mobile, `#F5F0E8`, fade in 400ms délai 500ms
- Sous-titre : "Gastronomie africaine & européenne, face au Collège Saint Michel" — Poppins 18px 400 italic, `#F5F0E8` opacity 0.85, fade in 400ms délai 700ms
- Deux boutons côte à côte : "Voir le menu" (fond `#D4AF37`, texte `#1A1A1A`) + "Réserver via WhatsApp" (bord `#F5F0E8`, texte `#F5F0E8`), apparition translateY 20px→0, 400ms délai 900ms

Élément signature hero : particules dorées flottantes très légères (8 points, opacité 0.15, mouvement sinusoïdal lent 6s) — évoquent des braises ou des épices — implémentation canvas simple, jamais intrusif.

SECTION 2 — "Une expérience royale" (fond `#F5F0E8`)

Grille asymétrique 60/40 desktop. Côté gauche : image verticale 4:3 de l'intérieur du restaurant, cadre élégant avec padding, border-radius 8px, ombre douce `0 20px 60px rgba(0,0,0,0.12)`. Côté droit : texte éditorial.

- Label supérieur : "NOTRE HISTOIRE" Poppins 11px 600 `#D4AF37` lettre-spacing 0.15em
- Titre : "Un palais au cœur de Bè Kpota" Playfair 48px 600 `#1A1A1A`
- Paragraphe : 3-4 lignes évoquant le concept restaurant, l'emplacement face au Collège Saint Michel, la gastronomie mêlant tradition togolaise et influences internationales
- Séparateur horizontal doré : ligne 1px `#D4AF37`, largeur 60px, margin-top 24px
- Statistiques sous le séparateur : "10h–00h" | "Africain & Européen" | "Sur place · Livraison · Événements" — Poppins 13px 600 `#1A1A1A`, labels Poppins 11px `#1A1A1A` opacity 0.5

SECTION 3 — "Nos spécialités" (fond `#1A1A1A`)

Titre centré : "Ce qui nous rend royaux" Playfair 48px `#F5F0E8`. Grille de 3 cards, fond `rgba(255,255,255,0.04)`, border `1px solid rgba(212,175,55,0.2)`, border-radius 12px, padding 32px.

Chaque card :
- Icône lucide-react 32px `#D4AF37` en haut
- Titre Playfair 22px `#F5F0E8`
- Description Poppins 14px `#F5F0E8` opacity 0.7

Cards :
1. ChefHat — "Cuisine africaine authentique" — Fufu, gboma dessi, yassa, grillades togolaises
2. Globe — "Saveurs du monde" — Pizzas, plats européens, gastronomie internationale
3. Truck — "Livraison & Sur place" — Commandez depuis chez vous ou venez vivre l'expérience

SECTION 4 — "Nos plats phares" (fond `#F5F0E8`)

Label : "LE MENU EN IMAGES" Poppins 11px 600 `#D4AF37` centré.
Titre : "Chaque assiette, une promesse" Playfair 48px `#1A1A1A` centré.

Grille de 4 images en mosaïque asymétrique (2 grandes, 2 petites). Chaque image avec overlay sombre au hover (opacity 0→0.6, 300ms ease) + nom du plat apparaissant en Playfair 20px `#F5F0E8`.

Queries Unsplash par case :
- Grande 1 : `african grilled chicken yassa rice close up golden light`
- Grande 2 : `west african fufu soup tomato stew garnished elegant`
- Petite 1 : `pizza wood fired neapolitan close up artisan restaurant`
- Petite 2 : `african restaurant elegant table setting candle warm light`

Élément signature de la page home : Au scroll de cette section, les 4 images entrent en stagger (délai 80ms entre chaque), chacune avec une légère rotation initiale de 2° qui se corrige à 0° — effet de "pose d'assiette" subtil et mémorable.

SECTION 5 — "Nos services" (fond `#1A1A1A`)

Titre : "Toutes les façons de savourer" Playfair 42px `#F5F0E8`.

3 colonnes : "Sur place" (UtensilsCrossed) + "À emporter" (ShoppingBag) + "Événements" (CalendarDays). Chaque colonne : icône 28px `#D4AF37`, titre Playfair 24px `#F5F0E8`, texte Poppins 14px opacity 0.7.

SECTION 6 — CTA livraison (fond `#D4AF37`)

Fond entièrement doré. Texte centré :
- Titre : "Commandez maintenant" Playfair 48px `#1A1A1A`
- Sous-titre : "Recevez votre repas royal directement chez vous" Poppins 18px `#1A1A1A` opacity 0.75
- Bouton : "Commander via WhatsApp" — fond `#1A1A1A`, texte `#D4AF37`, icône MessageCircle 18px `#25D366` à gauche, Poppins 14px 700

---

PAGE MENU ( /menu )

Sticky CategoryNav : bandeau horizontal fond `#1A1A1A` ou `#F5F0E8` selon thème, scroll horizontal sur mobile. Pills avec catégories : Entrées | Plats Africains | Plats Européens | Pizzas & Grillades | Desserts | Boissons. Pill active : fond `#D4AF37`, texte `#1A1A1A`. Pill inactive : fond transparent, texte courant, bord `rgba(212,175,55,0.3)`. Clic → scroll fluide vers la section correspondante (`scroll-behavior: smooth`).

MenuItemCard :
- Image ratio 4:3, border-radius 12px, `object-fit: cover`
- Fond card : `#FFFFFF`, border-radius 16px, ombre `0 4px 20px rgba(0,0,0,0.08)`
- Nom du plat : Playfair 18px 600 `#1A1A1A`
- Description : Poppins 13px `#1A1A1A` opacity 0.6, max 2 lignes, `text-overflow: ellipsis`
- Prix : Poppins 18px 700 `#D4AF37`
- Bouton "+" : rond 36px, fond `#D4AF37`, texte `#1A1A1A`, icône Plus 16px, hover scale 1.08 150ms ease
- Si dans panier : row `[Minus | count Poppins 16px 600 | Plus]` — animation du count: scale 1→1.3→1, 200ms spring
- Tag "Populaire" : badge fond `#8B1A2F`, texte `#F5F0E8` Poppins 10px 700 MAJUSCULES, border-radius 4px, positionné coin supérieur gauche

CartFab (visible si panier non vide) :
- Fixed bottom-right, margin 24px depuis bas (au-dessus de bottom nav mobile + 16px)
- 60px x 60px, border-radius 50%, fond `#D4AF37`, ombre `0 8px 24px rgba(212,175,55,0.4)`
- Icône ShoppingCart 24px `#1A1A1A`
- Badge compteur : fond `#8B1A2F`, texte blanc Poppins 11px 700, positionné coin supérieur droit. Animation au changement : scale 1→1.4→1, 250ms `cubic-bezier(0.34, 1.56, 0.64, 1)`

CartDrawer :
- Mobile : bottom sheet, translateY depuis hors écran, 380ms `cubic-bezier(0.32, 0.72, 0, 1)`. Hauteur max 80vh, handle de drag en haut.
- Desktop : drawer droit fixe, largeur 400px, translateX depuis hors écran, 320ms ease-out
- Fond drawer : `#FAFAF8`, border-radius 20px 20px 0 0 (mobile) / 0 (desktop)
- Titre : "Votre commande" Playfair 22px `#1A1A1A`
- Chaque article : nom Poppins 15px 600, prix Poppins 14px `#D4AF37`, row [Minus | count | Plus | Trash2]
- Overlay derrière : `rgba(26,26,26,0.5)`, clic ferme le drawer
- Champ note : textarea Poppins 13px, placeholder "Instructions spéciales...", fond `#F5F0E8`, border-radius 8px
- Sous-total : Playfair 20px 700 `#1A1A1A`, label Poppins 12px opacity 0.5
- Bouton WhatsApp CTA : fond `#25D366`, texte blanc Poppins 14px 700, icône MessageCircle 18px, border-radius 12px, pleine largeur
- État vide : icône ShoppingCart 56px opacity 0.2 centré + texte "Votre palais culinaire vous attend..." Poppins 14px italic opacity 0.5 — aucun emoji

Données du menu (DEFAULT_DATA hardcodées dans le code) :
```javascript
const DEFAULT_DATA = {
  restaurant: {
    name: "Palais Royal des Saveurs",
    tagline: "Le goût qui fait la différence",
    whatsapp: "[À CONFIRMER]",
    address: "Face au Collège Saint Michel, Djifa Kpota, Lomé",
    hours: "10h00 – 00h00",
    instagram: "@palaisroyaldessaveurs",
    currency: "FCFA"
  },
  categories: [
    "Entrées", "Plats Africains", "Plats Européens",
    "Pizzas & Grillades", "Desserts", "Boissons"
  ],
  items: [
    { id: 1, name: "Salade du Palais", category: "Entrées", price: 3500, description: "Salade fraîche, tomates, avocat, vinaigrette maison", available: true, popular: false, image: "" },
    { id: 2, name: "Fufu & Gboma Dessi", category: "Plats Africains", price: 5500, description: "Fufu de manioc, sauce épinards au poisson fumé", available: true, popular: true, image: "" },
    { id: 3, name: "Yassa Poulet", category: "Plats Africains", price: 6000, description: "Poulet mariné aux oignons et citron, riz parfumé", available: true, popular: true, image: "" },
    { id: 4, name: "Grillades Royales", category: "Pizzas & Grillades", price: 8500, description: "Assortiment de viandes grillées, sauce pimentée, plantains", available: true, popular: true, image: "" },
    { id: 5, name: "Pizza Reine", category: "Pizzas & Grillades", price: 7000, description: "Jambon, champignons, mozzarella, sauce tomate maison", available: true, popular: false, image: "" },
    { id: 6, name: "Poulet Bicyclette Grillé", category: "Plats Africains", price: 7500, description: "Poulet local grillé, épices du terroir, sauce arachide", available: true, popular: true, image: "" },
    { id: 7, name: "Tilapia Braisé", category: "Plats Africains", price: 6500, description: "Tilapia du lac, marinade citron-piment, attiéké maison", available: true, popular: false, image: "" },
    { id: 8, name: "Entrecôte Palais", category: "Plats Européens", price: 12000, description: "Entrecôte grillée, sauce poivre, frites dorées", available: true, popular: false, image: "" },
    { id: 9, name: "Jus de Bissap", category: "Boissons", price: 1500, description: "Hibiscus frais, sucré léger, servi glacé", available: true, popular: true, image: "" },
    { id: 10, name: "Bière locale", category: "Boissons", price: 1500, description: "Bière pression ou en bouteille", available: true, popular: false, image: "" }
  ]
}
```

`getRestaurantData()` : lire localStorage["restaurantData"], parser JSON, fallback sur DEFAULT_DATA si vide ou erreur.

---

PAGE À PROPOS ( /about )

Hero section : image panoramique de la salle du restaurant, overlay sombre, titre "Notre histoire" Playfair 56px `#F5F0E8` centré, fade in au chargement.

Section histoire : grille 50/50, texte à gauche, image de l'équipe à droite. Texte : naissance du concept, l'ambition de créer un espace royal et accessible à Lomé, la fusion des cuisines africaine et européenne.

Section valeurs : 3 piliers en cards fond `#F5F0E8` : "Authenticité" (Heart) · "Excellence" (Star) · "Convivialité" (Users) — icônes lucide-react 28px `#D4AF37`.

Section localisation : texte d'invitation + bloc adresse complet, icône MapPin `#D4AF37`. "Face au Collège Saint Michel, Djifa Kpota (Bè Kpota), Lomé, Togo."

Élément signature : à l'entrée dans la section histoire, les deux colonnes s'ouvrent de l'intérieur : la gauche translateX(-40px)→0 et la droite translateX(40px)→0 simultanément, 600ms `cubic-bezier(0.16, 1, 0.3, 1)`.

---

PAGE CONTACT ( /contact )

Fond `#F5F0E8`. Deux colonnes desktop.

Colonne gauche : informations pratiques
- Titre : "Venez nous rendre visite" Playfair 42px `#1A1A1A`
- Bloc adresse : MapPin 20px `#D4AF37` + "Face au Collège Saint Michel, Djifa Kpota, Lomé, Togo"
- Bloc horaires : Clock 20px `#D4AF37` + "Ouvert de 10h00 à 00h00, midi et soir"
- Bloc WhatsApp : MessageCircle 20px `#25D366` + bouton "Nous contacter sur WhatsApp" → `wa.me/[NUMÉRO]`
- Instagram : Instagram 20px `#D4AF37` + "@palaisroyaldessaveurs" → lien externe

Colonne droite : embed Google Maps iframe (quartier Djifa Kpota, Bè Kpota, Lomé), border-radius 12px, hauteur 400px, ombre douce.

Élément signature : icône MapPin `#D4AF37` sur la carte pulse doucement (scale 1→1.15→1, 2s infini) pour attirer l'attention sur la localisation.

---

— VOLET 2 : DASHBOARD ADMIN ( /admin ) —

Mot de passe : `const ADMIN_PASSWORD = "palais2025"` — ⚠ À CHANGER avant déploiement.

Écran de login (si non authentifié) :
- Fond `#F8F9FA`, carte centrale 400px max-width
- Logo "Palais Royal" Playfair 24px `#1A1A1A` centré
- Label "Accès administration" Poppins 13px opacity 0.5
- Input mot de passe : Poppins 15px, fond blanc, bord `#E0E0E0`, focus bord `#D4AF37`
- Bouton "Accéder" : fond `#1A1A1A`, texte blanc, Poppins 14px 600
- Icône Lock 24px `#1A1A1A` au-dessus du titre

Dashboard authentifié — 4 tabs (tabs horizontaux desktop, menu dropdown mobile) :

TAB 1 — MENU (défaut)
- Liste tous les plats groupés par catégorie, chargés depuis `getRestaurantData()`
- Toggle disponible/indisponible par plat (Switch component, couleur accent `#D4AF37` si actif)
- Bouton "Ajouter un plat" : fond `#D4AF37`, icône Plus 16px. Formulaire : nom, description, prix (FCFA), catégorie (select), URL image (optionnel), toggle populaire
- Bouton "Modifier" (Pencil 16px) et "Supprimer" (Trash2 16px, rouge `#8B1A2F` avec confirmation)
- Toutes les modifications sauvegardées dans `localStorage["restaurantData"]`

TAB 2 — CATÉGORIES
- Liste des catégories avec nombre de plats associés
- Ajouter (Plus) / Renommer (Pencil) / Supprimer (Trash2)
- Réordonner : flèches ChevronUp / ChevronDown par catégorie

TAB 3 — PARAMÈTRES
- Champs : Nom du restaurant, Tagline, WhatsApp, Adresse, Horaires, Instagram URL, TikTok URL
- Bouton "Sauvegarder" : fond `#1A1A1A`, icône Save 18px

TAB 4 — EXPORT
- Bouton "Copier la config JSON" : icône Download 18px. Copie dans le presse-papier.
- Instruction visible : "Partagez ce JSON avec votre développeur pour mettre à jour les données par défaut"
- Bouton "Réinitialiser aux données par défaut" : bord rouge, Trash2, confirmation requise

Design dashboard : sobre et fonctionnel, distinct du site public. Fond `#F8F9FA`, bords `#E5E7EB`, typographie Poppins uniquement (sans Playfair), accents bleu-gris `#374151`. Bouton déconnexion en haut à droite (LogOut 18px, Poppins 13px). Mobile-first : le restaurateur gère depuis son téléphone.

---

— VOLET 3 : MENU SUR PLACE ( /menu/scan ) —

```
COMPOSANT PARTAGÉ : <MenuPage scanMode={boolean} />
  → /menu       → <MenuPage scanMode={false} />
  → /menu/scan  → <MenuPage scanMode={true}  />
```

Comportement /menu/scan :
1. Au chargement : lire `localStorage["tableNumber"]`
2. Si vide → afficher TableModal bloquant (non-dismissable)
3. Client saisit son numéro de table → valide → stocker dans `localStorage["tableNumber"]`
4. Déverrouiller le menu — aucune interaction possible avant cette étape
5. Le numéro de table apparaît dans le header de la page en mode scan : "Table 12" — Poppins 13px `#D4AF37`

TableModal — RÈGLES STRICTES :
- Non-dismissable : pas de croix, pas d'Escape, overlay non-cliquable
- Saisie TOUJOURS manuelle — NE PAS lire de paramètre `?table=` dans l'URL
- Fond modal : `#1A1A1A`, border-radius 20px, padding 48px
- Icône Hash 40px `#D4AF37` centré en haut
- Titre : "Votre numéro de table ?" Playfair 28px `#F5F0E8` centré
- Sous-titre : "Entrez le numéro inscrit sur votre table" Poppins 14px `#F5F0E8` opacity 0.6
- Input : hauteur 56px, Poppins 24px centré, fond `#2A2A2A`, bord `rgba(212,175,55,0.3)`, focus bord `#D4AF37`, placeholder "ex : 12"
- Bouton "Confirmer" : fond `#D4AF37`, texte `#1A1A1A` Poppins 15px 700, pleine largeur, border-radius 12px
- Animation d'entrée : fade in + scale 0.9→1.0, 300ms `ease-out`

Message WhatsApp — mode scan :
```javascript
const items = cart.map(i => `• ${i.name} x${i.qty} — ${i.price * i.qty} FCFA`).join('\n')
const message = `Commande — Table ${tableNumber} :\n\n${items}\n\nTotal : ${total} FCFA`
window.open(`https://wa.me/[NUMÉRO]?text=${encodeURIComponent(message)}`, '_blank')
```

---

— ANIMATIONS SYSTÈME —

Scroll reveals (appliquer à toutes les sections) :
- Entrée : `translateY(32px) → translateY(0)` + `opacity 0 → 1`
- Durée : 600ms
- Easing : `cubic-bezier(0.16, 1, 0.3, 1)`
- Stagger entre éléments d'une même section : 80ms
- Seuil IntersectionObserver : 0.15

Transitions inter-pages :
- Sortie : fade out 200ms `ease-in`
- Entrée : fade in 300ms `ease-out`
- Pas de clip-path — trop lourd sur mobile togolais à connectivité variable

Micro-interactions :
- Bouton CTA principal : hover → scale 1.03 + ombre `0 8px 20px rgba(212,175,55,0.3)`, 150ms ease
- Card plat : hover → translateY(-4px) + ombre renforcée, 200ms ease. Pas de scale.
- Lien de navigation : couleur → `#D4AF37`, 200ms ease. Pas de soulignement.
- Pill catégorie : active → fond `#D4AF37` + scale 1.04, 150ms `cubic-bezier(0.34, 1.56, 0.64, 1)`
- CartFab : apparition → scale 0→1, 300ms `cubic-bezier(0.34, 1.56, 0.64, 1)`. Disparition : scale 1→0, 200ms ease-in.
- Badge panier change : scale 1→1.45→1, 280ms `cubic-bezier(0.34, 1.56, 0.64, 1)`

Ce qui est INTERDIT : bounce excessif, spring élastique visible, parallax horizontal sur images, animations d'entrée page simultanées sur >5 éléments sans stagger.

---

— IMAGES —

Traitement CSS global uniforme (appliquer via une classe `.img-palais`) :
```css
.img-palais {
  filter: saturate(1.15) contrast(1.05);
  transition: filter 300ms ease;
}
.img-palais:hover {
  filter: saturate(1.25) contrast(1.08);
}
```

Format des clips : rectangles droits uniquement, border-radius 8–16px selon contexte. Pas de clip-path organique — contraire à la direction "palais" architecturé.

Overlays : gradients directionnels `linear-gradient(to bottom, transparent 40%, rgba(26,26,26,0.75) 100%)` sur les images hero et galerie.

Queries Unsplash précises :
- Hero home : `african grilled meat restaurant dark dramatic smoke warm light`
- Section histoire : `elegant african restaurant interior warm candle lighting`
- Plat 1 (Fufu) : `west african fufu soup stew elegant presentation close up`
- Plat 2 (Yassa) : `yassa chicken rice west african dish lemon onion garnished`
- Plat 3 (Grillades) : `grilled meat african barbecue restaurant platter close up`
- Plat 4 (Pizza) : `neapolitan pizza artisan wood fired restaurant close up golden`
- About équipe : `african restaurant team chef kitchen smiling professional`
- Contact ambiance : `lomé togo restaurant terrace evening warm lights`

---

— FOOTER —

Fond `#111111` (plus sombre que l'anthracite principal). 3 colonnes desktop, empilement mobile.

Colonne 1 — Identité :
- Logo "PALAIS ROYAL DES SAVEURS" Playfair 20px `#D4AF37`
- Slogan "Le goût qui fait la différence" Poppins 13px italic `#F5F0E8` opacity 0.6
- Ligne de séparation dorée 40px, margin 16px 0

Colonne 2 — Navigation
- Titre "Navigation" Poppins 11px 600 `#D4AF37` MAJUSCULES lettre-spacing 0.1em
- Liens : Accueil · Menu · À propos · Contact — Poppins 14px `#F5F0E8` opacity 0.7, hover opacity 1 + couleur `#D4AF37`, 150ms ease

Colonne 3 — Contact & réseaux
- Titre "Nous retrouver" Poppins 11px 600 `#D4AF37` MAJUSCULES
- MapPin 16px + adresse Poppins 13px `#F5F0E8` opacity 0.7
- Clock 16px + "10h00 – 00h00" Poppins 13px opacity 0.7
- MessageCircle 16px `#25D366` + "WhatsApp" → lien direct
- Icônes sociales : Instagram 20px + Music2 20px (TikTok) — hover couleur `#D4AF37`, transition 150ms

Ligne légale : fond `#0D0D0D`, Poppins 11px `#F5F0E8` opacity 0.3, centré. "© 2025 Palais Royal des Saveurs — Lomé, Togo. Tous droits réservés."

Animation footer : l'ensemble du footer entre en translateY(24px)→0 + opacity 0→1, 600ms, une seule fois au scroll.

---

— DONNÉES À CONFIRMER AVANT DÉPLOIEMENT —

1. Numéro WhatsApp format international : +228XXXXXXXX — à remplacer partout dans le code
2. Handle Instagram exact : @palaisroyaldessaveurs à vérifier
3. Handle TikTok exact : à fournir par le restaurant
4. Photos réelles du restaurant et des plats : à substituer aux images Unsplash
5. Prix du menu : ajuster dans DEFAULT_DATA selon la carte réelle
6. Mot de passe admin : changer `"palais2025"` avant mise en ligne
7. Embed Google Maps : récupérer l'URL iframe depuis Google Maps pour le quartier Djifa Kpota

---

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COMMENT UTILISER CE PROMPT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Copier l'intégralité du brief ci-dessus (de "PROMPT LOVABLE" jusqu'ici)
2. Ouvrir Lovable (lovable.dev) → Créer un nouveau projet
3. Coller dans le chat de l'agent et lancer la génération
4. Si le résultat est incomplet → générer volet par volet :
   - "Génère maintenant le volet admin /admin"
   - "Génère maintenant le menu scan /menu/scan"
5. Tester /admin en tapant l'URL directement dans le navigateur (pas de lien dans la nav)
6. Tester /menu/scan : ouvrir l'URL → le TableModal DOIT bloquer l'interface complète
7. Vérifier que CartFab n'apparaît que si le panier contient au moins un article
8. ⚠ Changer ADMIN_PASSWORD dans le code avant toute mise en ligne publique

SYNCHRONISATION DES DONNÉES ADMIN :
→ Les modifications faites dans /admin ne sont visibles que sur le même navigateur
→ Pour déployer une mise à jour globale : cliquer "Exporter config" dans /admin,
  partager le JSON avec votre développeur qui met à jour DEFAULT_DATA dans le code source

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Pour modifier ce prompt : précise ce que tu veux changer et je le mets à jour.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━