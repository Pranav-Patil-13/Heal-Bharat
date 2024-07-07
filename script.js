document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.listItem');
    const contentItems = document.querySelectorAll('.content-item');
  
    document.getElementById('home').classList.add('active');
    document.getElementById('Home').classList.add('active');
    
    menuItems.forEach(item => {
      item.addEventListener('click', function() {
        contentItems.forEach(content => content.classList.remove('active'));

        menuItems.forEach(menuItem => menuItem.classList.remove('active'));

        const targetId = this.getAttribute('data-target');
  
        document.getElementById(targetId).classList.add('active');

        this.classList.add('active');
      });
    });
  });