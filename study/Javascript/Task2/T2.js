<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Мой сайт</title>
  <!-- Подключение CSS -->
  <link rel="stylesheet" href="../../../css/base.css">
  <link rel="stylesheet" href="../../../css/main.css">
  <link rel="stylesheet" href="../../../css/header.css">
</head>
<body>
  <header id="site-header">
    <div class="header-inner">
      <h1 class="site-title">Laggorithm</h1>

      <!-- Дропбокс с навигацией -->
      <label for="header-select" class="visually-hidden">Navigation</label>
      <select id="header-select" name="header-select" aria-label="Выберите раздел">
        <option value="">— Navigation —</option>
        <option value="../../../index.html">Main</option>
        <option value="../JSStudy.html">Back to modules</option>
      </select>
      <script>
        const headerSelect = document.getElementById('header-select');
        headerSelect.addEventListener('change', function() {
          const selectedValue = this.value;
          if (selectedValue) {
            window.location.href = selectedValue;
          }
        });
      </script>
    </div>
  </header>

  <div style="margin: 3%;">Внешний отступ</div>
  <h1 id="greeting" class="greeting">HelloWorld("print")</h1>

  <button onclick="">3 digits calculator Task 3</button>
  <p id="result" class="feature">Here will be your result from calculator program</p>

  <button onclick="">Magical Hat from Harry Potter Task 4</button>
  <p id="hatResult" class="feature">To which magic school you'd be assigned?</p>

  <button onclick="">Leap Year Checker Task 5</button>
  <p id="leapYearResult" class="feature">Are you sure this year is a leap one? Test it!</p>

  <button onclick="">Check for all leap years from one year, till another! Task 8</button>
  <p id="allLeapYearsResult" class="feature">Lets see which ones are leap</p>

  <script src="script.js"></script>
</body>
</html>