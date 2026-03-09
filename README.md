# Playwright + TypeScript Training

Учебный проект для отработки **современного подхода** к автоматизации на Playwright + TypeScript:

- API‑тесты через клиентский слой ё
- UI‑тесты через Page Object Model
- фикстуры как DI‑контейнер
- строгая типизация через module augmentation 
- единая конфигурация через `.env

---

## 🚀 Цели проекта

**Этот репозиторий — не просто “набор тестов”, а учебный каркас.**

Он показывает, как:

- строить **API‑слой** через клиентов (`BaseClient`, `UserClient`)
- использовать **фикстуры Playwright** как механизм DI (`userApi`, `loginPage`, `dashboardPage`)
- расширять **типы Playwright** через `module augmentation`, чтобы фикстуры были типобезопасными
- работать с **переменными окружения** через централизованный модуль `env.ts` и `dotenv`
- организовывать **UI‑слой** через Page Object Model (BasePage + страницы)
- разделять **доменную логику** (действия пользователя, сценарии) и **инфраструктуру** (фикстуры, конфигурация, селекторы)
- писать **читаемые тесты**, которые описывают поведение, а не технические детали
- поддерживать **единый стиль архитектуры** между API и UI слоями


---

## 📁 Структура проекта

```text
pw_ts_training/
├── api/
│   ├── clients/
│   │   ├── baseClient.ts      # Базовый HTTP‑клиент (GET/POST/PUT/DELETE)
│   │   └── userClient.ts      # Клиент для работы с /users
│   ├── fixtures/
│   │   └── apiFixtures.ts     # Фикстура userApi (DI для API‑клиентов)
│   └── tests/
│       └── users.spec.ts      # Пример API‑теста
│
├── web/
│   ├── pages/
│   │   ├── basePage.ts        # Базовый класс для UI‑страниц (open, locator)
│   │   ├── loginPage.ts       # Страница логина (локаторы + действия)
│   │   └── dashboardPage.ts   # Страница дашборда
│   ├── fixtures/
│   │   └── auth.ts     # Фикстура для авторизации
│   └── tests/
│       └── web.spec.ts      # Пример UI‑теста
│
├── types/
│   └── fixtures.d.ts          # Расширение типов Playwright (userApi, loginPage, dashboardPage)
│
├── utils/
│   └── env.ts                 # Централизованная загрузка и валидация переменных окружения
│
├── playwright.config.ts       # Конфигурация Playwright
├── tsconfig.json              # Конфигурация TypeScript
├── .env                       # Переменные окружения (локально, не коммитится)
└── package.json
