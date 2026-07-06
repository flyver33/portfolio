# Портфолио

Личный сайт-портфолио. Стек: Vite + React + TypeScript + Tailwind CSS.

## Структура

- `src/components/Hero` — главный экран
- `src/components/About` — блок «о себе»
- `src/components/Projects` — проекты/кейсы
- `src/components/Contacts` — контакты

## Разработка

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
npm run preview
```

## Деплой

Пуш в `main` запускает GitHub Actions (`.github/workflows/deploy.yml`), который собирает
проект и публикует его на GitHub Pages. Репозиторий ожидается под именем `portfolio`,
поэтому base path в `vite.config.ts` задан как `/portfolio/` — сайт будет доступен по адресу
`https://<username>.github.io/portfolio/`.

В настройках репозитория на GitHub: Settings → Pages → Source → **GitHub Actions**.
