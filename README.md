HELP
https://beget.com/ru/articles/webapp_nodejs

ssh -i id_rsa akuznetsov@akuznetsov.beget.tech

cd andreykuznetsov.ru/

в папке сайта создаем 
mkdir -p Project/tmp
touch tmp/restart.txt

Для корректной отдачи статического контента средствами Nginx создается ссылка public, указывающая на public_html
ln -s public_html public

Структура
andreykuznetsov.ru/   
  - Project/
    - views/
    - tmp/
      - restart.txt (пустой)
    - routes/
    - node_modules/ (npm i)
    - app.js
    - package.json
    ...
  - public_html/
    - css/
      -style.css
    ...
  - publiс/ (ссылка на public_html)
  - .htaccess


.htaccess
  PassengerNodejs /home/a/akuznetsov/.local/bin/node
  PassengerAppRoot /home/a/akuznetsov/andreykuznetsov.ru/Project
  PassengerAppType node
  PassengerStartupFile app.js


Все статические файлы размещаем в public_html
