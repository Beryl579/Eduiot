// js/app.js
import { Router } from './router.js';

// Global execution context for mini project scripts
window.navigate = function(view, params) {
    if(window.appRouter) {
        window.appRouter.navigate(view, params);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Router
    window.appRouter = new Router('content-area');
    
    // Bind navigation buttons in sidebar
    const navLinks = [
        { id: 'nav-dashboard', view: 'dashboard' },
        { id: 'nav-modules', view: 'modules' },
        { id: 'nav-iot', view: 'iot' },
        { id: 'nav-projects', view: 'projects' }
    ];

    navLinks.forEach(item => {
        document.getElementById(item.id).addEventListener('click', (e) => { 
            e.preventDefault(); 
            window.navigate(item.view); 
            
            // Auto-close mobile menu when a link is clicked
            const sidebarObj = document.getElementById('sidebar');
            if (window.innerWidth < 768 && sidebarObj && !sidebarObj.classList.contains('-translate-x-full')) {
                if(typeof window.toggleMobileMenu === 'function') {
                    window.toggleMobileMenu();
                }
            }
        });
    });

    // Initial Load
    window.navigate('dashboard');
});
