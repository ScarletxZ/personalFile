# Created by ScarletxZ, all rights reserved
<?php
# Cookie framework for PHP
# bakeCookie(name,value,time) - create a new cookie
function bakeCookie(name,value,time) {
 setcookie(name,value,time+$int());
}

# readCookie(name) - read a cookie, returns the value of the cookie
function readCookie(name) {
 return $_COOKIE[name];
}

# moreCookie(name,value) - updating cookie
function moreCookie(name,value) {
 bakeCookie(name,value);
 readCookie(name);
}

# eatCookie(name) - delete cookie
function eatCookie(name) {
 unset($_COOKIE[name]);
}
