var $navbar = ''
  + '<nav class="navbar">'
  + '  <div class="navbar-container">'
  + '    <a href="./index.html" class="navbar-logo">'
  + '      <img src="./img/logo.png" alt="Wellington City Libraries logo" />'
  + '    </a>'
  + '    <ul class="navbar-nav sm-hide">'
  + '      <li class="nav-dropdown">'
  + '        <a data-translate="Pukapuka">Books</a>'
  + '        <ul>'
  + '          <li><a href="./browse.html?t=books&amp;c=fiction" data-translate="Kōrero Paki">Fiction</a></li>'
  + '        </ul>'
  + '      </li>'
  + '      <li class="nav-dropdown">'
  + '        <a data-translate="Kōpae Ataata">DVDs</a>'
  + '        <ul>'
  + '          <li><a href="./browse.html?t=dvds&amp;c=documentary" data-translate="Pakipūmeka">Documentary</a></li>'
  + '        </ul>'
  + '      </li>'
  + '    </ul>'
  + '    <div class="navbar-right">'
  + '      <form action="search-results.html" class="navbar-search sm-hide">'
  + '        <input type="text" name="q" placeholder="Search...">'
  + '        <button type="submit">'
  + '          <i class="fa fa-search"></i>'
  + '          <i class="fa fa-chevron-right"></i>'
  + '        </button>'
  + '      </form>'
  + '      <ul class="navbar-nav navbar-me">'
  + '        <li class="nav-dropdown nav-button sm-show">'
  + '          <a>'
  + '            <i class="fa fa-search"></i>'
  + '            <i class="fa fa-close"></i>'
  + '          </a>'
  + '          <ul>'
  + '            <li>'
  + '              <form action="search-results.html" class="navbar-search">'
  + '                <input type="text" name="q" placeholder="Search...">'
  + '                <button type="submit">'
  + '                  <i class="fa fa-search"></i>'
  + '                  <i class="fa fa-chevron-right"></i>'
  + '                </button>'
  + '              </form>'
  + '            </li>'
  + '          </ul>'
  + '        </li>'
  + '        <li class="nav-dropdown nav-button">'
  + '          <a class="sm-hide li-show">My Account</a>'
  + '          <a class="sm-hide li-hide" href="./account.html" data-translate="Takiuru">Log In</a>'
  + '          <a class="sm-show">'
  + '            <i class="fa fa-bars"></i>'
  + '            <i class="fa fa-close"></i>'
  + '          </a>'
  + '          <ul>'
  + '            <li class="sm-show"><a href="./browse.html" data-translate="Whakaraparapa">Browse</a></li>'
  + '            <li class="hide"></li>'
  + '            <li class="li-show"><a href="./account.html"><strong><i class="fa fa-user margin-right-5"></i> Mathew Boyles</strong></a></li>'
  + '            <li class="li-hide"><a href="./account.html" data-translate="Takiuru">Log In</a></li>'
  + '            <li class="hide"></li>'
  + '            <li class="li-show"><a href="./account.html?p=items" data-translate="Tōku">My Items</a></li>'
  + '            <li class="li-show"><a href="./account.html?p=borrowed" data-translate="Nama">Borrowed</a></li>'
  + '            <li class="li-show"><a href="./account.html?p=reviews">Reviews</a></li>'
  + '            <!--li class="li-show"><a href="./account.html?p=settings">Settings</a></li-->'
  + '            <li class="li-show"><a href="#logout" data-translate="Takiputa">Log Out</a></li>'
  + '          </ul>'
  + '        </li>'
  + '      </ul>'
  + '    </div>'
  + '  </div>'
  + '</nav>'
;
$('body').addClass('has-navbar').prepend($navbar);
