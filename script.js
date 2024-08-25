window.addEventListener('scroll', () => 
{
    const navbar = document.getElementById('navbar');
    if (window.scroll > 50) 
    {
        navbar.classList.add('scrolled');
    } 
    else 
    {
        navbar.classList.remove('scrolled');
    }
});