# Playwright + TypeScript Training

Учебный проект для отработки **современного подхода** к автоматизации на Playwright + TypeScript:

- API‑тесты с клиентским слоем
- фикстуры как DI (dependency injection)
- типобезопасность через TypeScript
- работа с env и конфигурацией

---

## 🚀 Цели проекта

**Этот репозиторий — не просто “набор тестов”, а учебный каркас.**

Он показывает, как:

- строить **API‑слой** через клиентов (`BaseClient`, `UserClient`)
- использовать **фикстуры Playwright** для DI (`userApi`)
- расширять **типы Playwright** через `module augmentation`
- работать с **переменными окружения** через `dotenv`
- писать **читаемые тесты**, где доменная логика отделена от инфраструктуры

---

## 📁 Структура проекта

``` text
pw_ts_training/
├── api/
│   ├── clients/
│   │   ├── baseClient.ts      # Базовый HTTP‑клиент (GET/POST/PUT/DELETE)
│   │   └── userClient.ts      # Клиент для работы с /users
│   ├── fixtures/
│   │   └── apiFixtures.ts     # Расширенный test() с фикстурой userApi
│   └── tests/
│       └── users.spec.ts      # Пример API‑теста
├── types/
│   └── fixtures.d.ts          # Расширение типов Playwright (userApi в PlaywrightTestArgs)
├── utils/
│   └── env.ts                 # Загрузка и централизованный доступ к переменным окружения
├── playwright.config.ts       # Конфигурация Playwright
├── tsconfig.json              # Конфигурация TypeScript
├── .env                       # Переменные окружения (локально, не коммитится)
└── package.json
```