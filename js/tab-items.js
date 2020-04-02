const tabsItems = document.getElementsByClassName("tabs-item");
const tabsContent = document.querySelector(".tabs-content");

const descriptionTab = document.getElementById("description-tab");
const reviewsTab = document.getElementById("reviews-tab");
const premieresTab = document.getElementById("premiers-tab");
const actorsTab = document.getElementById("actors-tab");
const awardsTab = document.getElementById("awards-tab");
const factsTab = document.getElementById("facts-tab");
const sitesTab = document.getElementById("sites-tab");

function ClearActiveTab() {
  for (var i = 0; i < tabsItems.length; i++) {
    tabsItems[i].classList.remove("tabs-item-active");
  }
}

function ShowDescription() {
  ClearActiveTab();
  let description = `<p class="text">
                Предстоящий американский супергеройский фильм, основанный на одноимённых комиксах издательства DC
                Comics. Картина будет выпущена компанией Warner Bros. и будет перезагрузкой всех фильмов о Бэтмене.
              </p>
              <p class="text">
                Фильм является десятым по счёту фильмом из Расширенной вселенной DC. Режиссёром и сценаристом фильма
                выступит Мэтт Ривз, а главную роль исполнит Роберт Паттинсон
              </p>
              <h4 class="text-title">
                Разработка
              </h4>
              <p class="text">
                В октябре 2014 года студия Warner Bros. объявила, что в разработке находится сольный фильм о Бэтмене,
                роль которого вновь исполнит Бен Аффлек. В июле 2015 года сообщалось, что Аффлек ведёт переговоры со
                студией по поводу постановки фильма и совместного написания сценария с Джеффом Джонсом.
              </p>
              <p class="text">
                После выхода фильма «Бэтмен против Супермена: На заре справедливости» руководитель агентства WME Патрик
                Уайтсел подтвердил, что Аффлек написал сценарий для сольного фильма о Бэтмене и в настоящий момент его
                рассматривают студия и DC. В мае 2016 года Джереми Айронс подтвердил, что он появится в фильме про
                Тёмного Рыцаря.
              </p>
              <p class="text">
                На Comic-Con в Сан-Диего в июле 2016 года было официально подтверждено, что Аффлек станет режиссёром
                картины. В августе 2016 года на одной из страниц Аффлека в социальных сетях был опубликован тестовый
                материал, в котором был показан персонаж Детстроук. 8 сентября 2016 года Джефф Джонс подтвердил, что Джо
                Манганьелло сыграет наёмника Слейда Уилсона, который, возможно, станет главным злодеем фильма.
              </p>`;
  descriptionTab.classList.add("tabs-item-active");
  tabsContent.innerHTML = description;
}

function ShowReviews() {
  ClearActiveTab();
  reviewsTab.classList.add("tabs-item-active");
  let reviews = `<p class="text"> Reviews will be available soon.</p>`;
  tabsContent.innerHTML = reviews;
}

function ShowPremieres() {
  ClearActiveTab();
  premieresTab.classList.add("tabs-item-active");
  let premiers = `<p class="text">Premieres will be available soon.</p>`;
  tabsContent.innerHTML = premiers;
}

function ShowActors() {
  ClearActiveTab();
  actorsTab.classList.add("tabs-item-active");
  let actors = `<p class="text">Actors will be available soon.</p>`;
  tabsContent.innerHTML = actors;
}

function ShowAwards() {
  ClearActiveTab();
  awardsTab.classList.add("tabs-item-active");
  let awards = `<p class="text">Awards will be available soon.</p>`;
  tabsContent.innerHTML = awards;
}

function ShowFacts() {
  ClearActiveTab();
  factsTab.classList.add("tabs-item-active");
  let facts = `<p class="text"> Facts will be available soon.</p>`;
  tabsContent.innerHTML = facts;
}

function ShowSites() {
  ClearActiveTab();
  sitesTab.classList.add("tabs-item-active");
  let sites = `<p class="text">Sites will be available soon.</p>`;
  tabsContent.innerHTML = sites;
}

descriptionTab.addEventListener("click", ShowDescription);
reviewsTab.addEventListener("click", ShowReviews);
premieresTab.addEventListener("click", ShowPremieres);
actorsTab.addEventListener("click", ShowActors);
awardsTab.addEventListener("click", ShowAwards);
factsTab.addEventListener("click", ShowFacts);
sitesTab.addEventListener("click", ShowSites);