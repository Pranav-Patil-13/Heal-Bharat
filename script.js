document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.listItem');
    const contentItems = document.querySelectorAll('.content-item');
  
    document.getElementById('home').classList.add('active');
    document.getElementById('Home').classList.add('active');
    
    menuItems.forEach(item => {
      item.addEventListener('click', function() {
        // Remove active class from all content items
        contentItems.forEach(content => content.classList.remove('active'));

        // Remove active class from all menu items
        menuItems.forEach(menuItem => menuItem.classList.remove('active'));
  
        // Get target content ID from data attribute
        const targetId = this.getAttribute('data-target');
  
        // Add active class to target content item
        document.getElementById(targetId).classList.add('active');

        // Add active class to the clicked menu item
        this.classList.add('active');
      });
    });
  });