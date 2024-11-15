# Form Login Tests

Этот проект предназначен для тестирования формы входа. Он использует WebDriverIO для автоматизации тестов и выполнения проверок.

### Требования

Перед тем, как запустить проект, необходимо установить [Node.js](https://nodejs.org/en)(если еще не установлен)

### Клонирование репозитория

1. Клонируйте репозиторий на свой локальный компьютер:

   ```bash
   git clone https://github.com/AlexMoren1664/form-login-tests.git
   ```

2. Перейдите в директорию проекта:

   ```bash
   cd form-login-tests
   ```

### Установка зависимостей

1. Установите все зависимости, указанные в `package.json`:

   ```bash
   npm install
   ```

2. Установите WebDriverIO CLI (если еще не установлен):

   ```bash
   npm install --save-dev @wdio/cli
   ```

### Запуск тестов

Проект включает несколько команд для запуска тестов:

- **Запуск всех тестов**:

  ```bash
  npm run test:all
  ```

- **Запуск только позитивных тестов**:

  ```bash
  npm run test:positive
  ```

- **Запуск только негативных тестов**:

  ```bash
  npm run test:negative
  ```

---
