# Invitation de mariage – Arpha & Maryam

Site statique (HTML / CSS / JS), sans build. Déploiement direct sur Vercel.

## Mise en ligne
1. Créez un dépôt GitHub et envoyez-y tout le contenu de ce dossier.
2. Sur vercel.com : **Add New → Project → Import** votre dépôt. Framework : **Other**. Laissez tout par défaut puis **Deploy**.

## Musique
Un lien Apple Music ne peut pas être lu directement dans un site. Placez un fichier MP3 (dont vous avez les droits) dans `assets/musique.mp3`. Le bouton disque fait lecture / pause.

## Photos
Ajoutez vos images dans `assets/photos/` puis listez-les dans `script.js` : `photos: ["assets/photos/1.jpg", ...]`.

## RSVP + Livre d'or partagé (Supabase, gratuit)
Sans configuration, les messages ne sont enregistrés que sur l'appareil de l'invité (mode démo). Pour qu'ils apparaissent chez tous :
1. Créez un projet sur supabase.com, puis **SQL Editor** et exécutez :
```sql
create table messages (
  id bigint generated always as identity primary key,
  name text not null check (char_length(name) <= 80),
  present boolean not null,
  message text check (char_length(message) <= 600),
  created_at timestamptz default now()
);
alter table messages enable row level security;
create policy "lecture" on messages for select using (true);
create policy "ajout" on messages for insert with check (true);
```
2. **Project Settings → API** : copiez l'URL et la clé `anon public`, collez-les dans `supabaseUrl` et `supabaseKey` au début de `script.js`.
3. Les réponses se consultent dans **Table Editor → messages**.

## Modifier les infos
Tout (date, programme, lien WhatsApp, Maps, histoire) est dans le bloc `CFG` de `script.js`. Les noms des familles sont dans `index.html`.
