document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            document.getElementById('navbar_top').classList.add('bg-white');
            document.getElementById('navbar-brand').classList.remove('text-white');
            document.getElementById('navlink1').classList.add('text-dark');
            document.getElementById('navlink2').classList.add('text-dark');
            document.getElementById('navlink3').classList.add('text-dark');
            document.getElementById('navlink4').classList.add('text-dark');
            document.getElementById('navlink5').classList.add('text-dark');
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
            document.getElementById('navbar_top').classList.remove('bg-white');
            document.getElementById('navbar-brand').classList.add('text-white');
            document.getElementById('navlink1').classList.remove('text-dark');
            document.getElementById('navlink2').classList.remove('text-dark');
            document.getElementById('navlink3').classList.remove('text-dark');
            document.getElementById('navlink4').classList.remove('text-dark');
            document.getElementById('navlink5').classList.remove('text-dark');
            document.body.style.paddingTop = '0';
        }
    });
});

$(document).ready(function () {
    $("#ECommarcebox1").show();
    $("#ECommarcebox2").show();
    $("#Projectbox1").show();
    $("#Projectbox2").show();
    $("#Portfoliobox").show();
    $("#Othersbox").show();
    $("#All").click(function () {
        $("#ECommarcebox1").show(500);
        $("#ECommarcebox2").show(500);
        $("#Projectbox1").show(500);
        $("#Projectbox2").show(500);
        $("#Portfoliobox").show(500);
        $("#Othersbox").show(500);
    });
    $("#ECommarce").click(function () {
        $("#ECommarcebox1").show(500);
        $("#ECommarcebox2").show(500);
        $("#Projectbox1").hide(500);
        $("#Projectbox2").hide(500);
        $("#Portfoliobox").hide(500);
        $("#Othersbox").hide(500);
    });
    $("#Project").click(function () {
        $("#Projectbox1").show(500);
        $("#Projectbox2").show(500);
        $("#ECommarcebox1").hide(500);
        $("#ECommarcebox2").hide(500);
        $("#Portfoliobox").hide(500);
        $("#Othersbox").hide(500);
    });
    $("#Portfolio").click(function () {
        $("#Portfoliobox").show(500);
        $("#Projectbox1").hide(500);
        $("#Projectbox2").hide(500);
        $("#ECommarcebox1").hide(500);
        $("#ECommarcebox2").hide(500);
        $("#Othersbox").hide(500);
    });
    $("#Others").click(function () {
        $("#Othersbox").show(500);
        $("#Portfoliobox").hide(500);
        $("#Projectbox1").hide(500);
        $("#Projectbox2").hide(500);
        $("#ECommarcebox1").hide(500);
        $("#ECommarcebox2").hide(500);
    });
});

