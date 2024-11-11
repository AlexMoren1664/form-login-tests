Feature: Функциональность логина на Saucedemo

  @positive
  Scenario: Вход с правильными данными
    Given я открываю страницу логина
    When я ввожу правильное имя пользователя и пароль
    Then я должен быть перенаправлен на страницу с продуктами

  @negative
  Scenario: Вход с неправильными данными
    Given я открываю страницу логина
    When я ввожу неправильное имя пользователя и пароль
    Then я должен увидеть сообщение об ошибке
  
  @negative
  Scenario: Вход с пустым именем пользователя
    Given я открываю страницу логина
    When я ввожу пустое имя пользователя и правильный пароль
    Then я должен увидеть ошибку о необходимости ввести имя пользователя
  
  @negative
  Scenario: Вход с пустым паролем
    Given я открываю страницу логина
    When я ввожу правильное имя пользователя и пустой пароль
    Then я должен увидеть ошибку о необходимости ввести пароль

  @negative
  Scenario: Вход с пустыми именем пользователя и паролем
    Given я открываю страницу логина
    When я ввожу пустое имя пользователя и пустой пароль
    Then я должен увидеть ошибки для обоих полей

  @negative
  Scenario: Очистка заполненных полей
    Given я открываю страницу логина
    When я ввожу неправильное имя пользователя и пароль, вижу ошибку и жму на очистку полей
    Then я должен увидеть отсутствие ошибки 