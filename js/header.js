let header = document.querySelectorAll('.header');
let footer = document.querySelectorAll('.footer');
let popupWindow = document.querySelectorAll('.popup_fade');

let head = `
    <nav class="nav">
        <div class="my_container">
            <div class="nav_content">
                <a href="tel:77073485069" class="nav_info nav_call">+7 707 348 50 69</a>
                <a href="mailto:mail@mail.kz" class="nav_info nav_email">mail@mail.kz</a>
                <a href="" class="nav_info nav_address">Физический адрес компании</a>
            </div>
        </div>
    </nav>
    <nav class="navbar">
        <div class="my_container">
            <div class="navbar_content">
                <a href="index.html" class="logo" id="logo"><img src="img/01.svg" alt="logo"></a>
                <div class="navbar_body">
                    <ul id="nav_list" class="nav_list">
                        <li><a href="about.html" class="nav_link">О нас</a></li>
                        <li><a href="milking.html" class="nav_link">Наши проекты</a></li>
                        <li><a href="praduct.html" class="nav_link">Услуги</a></li>
                        <li id="nav_link_arrow" class="nav_link_arrow">Комфорт коров</li>
                        <li class="nav_li_last"><a href="сontacts.html" class="nav_link">Контакты</a></li>
                        <li class="li">
                            <span class="lispan"></span>
                            <div class="li_left">
                                <ul class="li_left_list">
                                    <li class="li_left_li open">Вентиляционные панели</li>
                                    <li class="li_left_li">Ветрозащитные шторы</li>
                                    <li class="li_left_li">Стойловое оборудование</li>
                                    <li class="li_left_li">Разгонные вентиляторы</li>
                                    <li class="li_left_li">Роботизированное доение</li>
                                </ul>
                            </div>
                            <div class="li_right">
                                <ul class="li_right_list open">
                                    <li><a href="praduct.html" class="li_right_link">Вентиляционные панели 1</a></li>
                                    <li><a href="praduct.html" class="li_right_link">Вентиляционные панели 2</a></li>
                                    <li><a href="praduct.html" class="li_right_link">Вентиляционные панели 3</a></li>
                                </ul>
                                <ul class="li_right_list">
                                    <li><a href="praduct.html" class="li_right_link">Ветрозащитные шторы 1</a></li>
                                    <li><a href="praduct.html" class="li_right_link">Ветрозащитные шторы 2</a></li>
                                    <li><a href="praduct.html" class="li_right_link">Ветрозащитные шторы 3</a></li>
                                </ul>
                                <ul class="li_right_list">
                                    <li><a href="praduct.html" class="li_right_link">Стойловое оборудование 1</a></li>
                                    <li><a href="praduct.html" class="li_right_link">Стойловое оборудование 2</a></li>
                                    <li><a href="praduct.html" class="li_right_link">Стойловое оборудование 3</a></li>
                                </ul>
                                <ul class="li_right_list">
                                    <li><a href="praduct.html" class="li_right_link">Разгонные вентиляторы 1</a></li>
                                    <li><a href="praduct.html" class="li_right_link">Разгонные вентиляторы 2</a></li>
                                    <li><a href="praduct.html" class="li_right_link">Разгонные вентиляторы 3</a></li>
                                </ul>
                                <ul class="li_right_list">
                                    <li><a href="praduct.html" class="li_right_link">Роботизированное доение 1</a></li>
                                    <li><a href="praduct.html" class="li_right_link">Роботизированное доение 2</a></li>
                                    <li><a href="praduct.html" class="li_right_link">Роботизированное доение 3</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="nav_btns">
                    <button id="search_btn" class="search_btn"></button>
                    <button id="search_button" class="search_button"></button>
                    <button id="call_btn" class="call_btn popup_open">Обратный звонок</button>
                    <div class="menu_burger">
                        <span class="burger_line burger_1_line"></span>
                        <span class="burger_line burger_2_line"></span>
                        <span class="burger_line burger_3_line"></span>
                    </div>
                </div>
                <div class="navbar_foot">
                    <ul id="nav_listic" class="nav_list">
                        <li><a href="" class="nav_link">О нас</a></li>
                        <li><a href="" class="nav_link">Наши проекты</a></li>
                        <li><a href="" class="nav_link">Услуги</a></li>
                        <li id="nav_adaptive_arrow" class="nav_link_arrow">Комфорт коров</li>
                        <li><a href="" class="nav_link">Контакты</a></li>
                        <li class="nav_li_last"><button id="call_button" class="call_button popup_open">Обратный звонок</button></li>
                        <li class="lim">
                            <span class="lispan"></span>
                            <div class="li_top">
                                <ul class="li_top_list">
                                    <li class="li_top_li open">Вентиляционные панели</li>
                                    <ul class="li_bottom_list open">
                                        <li><a href="praduct.html" class="li_bottom_link">Вентиляционные панели 1</a></li>
                                        <li><a href="praduct.html" class="li_bottom_link">Вентиляционные панели 2</a></li>
                                        <li><a href="praduct.html" class="li_bottom_link">Вентиляционные панели 3</a></li>
                                    </ul>
                                    <li class="li_top_li">Ветрозащитные шторы</li>
                                    <ul class="li_bottom_list">
                                        <li><a href="praduct.html" class="li_bottom_link">Ветрозащитные шторы 1</a></li>
                                        <li><a href="praduct.html" class="li_bottom_link">Ветрозащитные шторы 2</a></li>
                                        <li><a href="praduct.html" class="li_bottom_link">Ветрозащитные шторы 3</a></li>
                                    </ul>
                                    <li class="li_top_li">Стойловое оборудование</li>
                                    <ul class="li_bottom_list">
                                        <li><a href="praduct.html" class="li_bottom_link">Стойловое оборудование 1</a></li>
                                        <li><a href="praduct.html" class="li_bottom_link">Стойловое оборудование 2</a></li>
                                        <li><a href="praduct.html" class="li_bottom_link">Стойловое оборудование 3</a></li>
                                    </ul>
                                    <li class="li_top_li">Разгонные вентиляторы</li>
                                    <ul class="li_bottom_list">
                                        <li><a href="praduct.html" class="li_bottom_link">Разгонные вентиляторы 1</a></li>
                                        <li><a href="praduct.html" class="li_bottom_link">Разгонные вентиляторы 2</a></li>
                                        <li><a href="praduct.html" class="li_bottom_link">Разгонные вентиляторы 3</a></li>
                                    </ul>
                                    <li class="li_top_li">Роботизированное доение</li>
                                    <ul class="li_bottom_list">
                                        <li><a href="praduct.html" class="li_bottom_link">Роботизированное доение 1</a></li>
                                        <li><a href="praduct.html" class="li_bottom_link">Роботизированное доение 2</a></li>
                                        <li><a href="praduct.html" class="li_bottom_link">Роботизированное доение 3</a></li>
                                    </ul>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <nav class="nav_bottom">
        <div class="my_container">
            <div class="nav_bottom_content">
                <form id="nav_bottom_form" class="nav_bottom_form" name="nav_bottom_form">
                    <input type="text" class="nav_form_input" id="nav_form_input" name="nav_form_input" placeholder="Введите запрос по продуктам" autocomplete="off" required>
                    <button class="nav_form_btn" id="nav_form_btn"></button>
                    <span id="nav_form_span" class="nav_form_span"></span>
                </form>
            </div>
        </div>
    </nav>
`;

let foot = `
    <div class="my_container">
        <div class="footer_content">
            <div class="footer_top">
                <div class="footer_top_address">
                    <a href="" class="footer_logo" id="footer_logo"><img src="img/02.svg" alt="logo"></a>
                    <ul class="footer_top_list">
                        <li>Физический адрес компании</li>
                        <li><a href="tel:77073485069" class="footer_top_link phone">+7 707 348 50 69</a></li>
                        <li><a href="mailto:mail@mail.kz" class="footer_top_link">mail@mail.kz</a></li>
                    </ul>
                </div>
                <div class="footer_top_menu">
                    <h5 class="footer_top_title">Меню</h5>
                    <ul class="footer_top_list footer_top_list_menu">
                        <li><a href="index.html" class="footer_top_link">Главная</a></li>
                        <li><a href="about.html" class="footer_top_link">О нас</a></li>
                        <li><a href="milking.html" class="footer_top_link">Наши проекты</a></li>
                        <li><a href="сontacts.html" class="footer_top_link">Контакты</a></li>
                    </ul>
                </div>
                <div class="footer_top_comfort">
                    <h5 class="footer_top_title">Комфорт коров</h5>
                    <ul class="footer_top_list footer_top_list_comfort">
                        <li><a href="praduct.html" class="footer_top_link">Вентиляционные панели</a></li>
                        <li><a href="praduct.html" class="footer_top_link">Ветрозащитные шторы</a></li>
                        <li><a href="praduct.html" class="footer_top_link">Стойловое оборудование</a></li>
                        <li><a href="praduct.html" class="footer_top_link">Разгонные вентиляторы</a></li>
                        <li><a href="praduct.html" class="footer_top_link">Фонари светоаэрационные</a></li>
                        <li><a href="praduct.html" class="footer_top_link">Щетка маятниковая</a></li>
                    </ul>
                </div>
                <div class="footer_top_follow">
                    <h5 class="footer_top_title">Подписаться на рассылку</h5>
                    <form id="footer_top_form" class="footer_top_form" name="footer_top_form">
                        <input type="text" id="footer_top_input" class="footer_top_input" name="footer_top_input" placeholder="Введите почту" maxlength="50" autocomplete="off" required>
                        <button id="footer_top_btn" class="footer_top_btn"></button>
                    </form>
                </div>
            </div>
            <div class="footer_bottom">
                <p class="footer_boot_text">Все права защищены</p>
                <a href="https://bestsolutions.kz/" class="footer_boot_link">Создание сайтов: BestSolutions</a>
            </div>
        </div>
    </div>
`;

let popup = `
    <div class="popup_content">
        <button id="popup_x_btn" class="popup_x_btn"></button>
        <h2 class="popup_title">У вас появились вопросы?</h2>
        <p class="popup_text">Наши консультанты свяжутся с Вами вближайшее время</p>
        <form id="popup_form" class="popup_form" name="popup_form">
            <div class="popup_div popup_div_name">
                <label for="popup_input_name" id="popup_lb_name" class="popup_lb popup_lb_name" name="popup_lb_name">Имя</label>
                <input type="text" id="popup_input_name" class="popup_input popup_input_name" name="popup_input_name" placeholder="Введите имя" maxlength="16" autocomplete="off" required>
            </div>
            <div class="popup_div popup_div_tel">
                <label for="popup_input_tel" id="popup_lb_tel" class="popup_lb popup_lb_tel" name="popup_lb_tel">Тел</label>
                <input type="tel" id="popup_input_tel" class="popup_input popup_input_tel" name="popup_input_tel" placeholder="+7-(___)-___-____." autocomplete="off" required>
            </div>
            <div class="popup_div popup_div_email">
                <label for="popup_input_email" id="popup_lb_email" class="popup_lb popup_lb_email" name="popup_lb_email">Почта</label>
                <input type="email" id="popup_input_email" class="popup_input popup_input_email" name="popup_input_email" placeholder="Введите почту" maxlength="32" autocomplete="off" required>
            </div>
            <p class="popup_form_text">Нажимая на кнопку вы соглашаетесь на обработку персональных данных.</p>
            <div class="popup_btn">
                <button id="popup_button" class="popup_button" name="popup_button">Отправить контакты</button>
            </div>
        </form>
    </div>
`;

for (let i = 0; i < header.length; i++) {
    header[i].innerHTML = head;  
}

for (let j = 0; j < footer.length; j++) {
    footer[j].innerHTML = foot;  
}

for (let k = 0; k < popupWindow.length; k++) {
    popupWindow[k].innerHTML = popup;  
}

