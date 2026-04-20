// js/router.js
import { renderDashboard } from './pages/dashboard.js';
import { renderModules } from './pages/modules.js';
import { renderModuleViewer } from './pages/module_viewer.js';
import { renderIoTDashboard, initIoTDashboard, clearIoTDashboard } from './pages/iot_dashboard.js';
import { renderMiniProjects, initProjects } from './pages/projects.js';

export class Router {
    constructor(contentAreaId) {
        this.contentArea = document.getElementById(contentAreaId);
        this.currentView = null;
    }

    navigate(view, params = null) {
        // Update styling
        document.querySelectorAll('#nav-menu a').forEach(el => {
            el.classList.remove('menu-active', 'text-blue-600');
            el.classList.add('text-slate-600');
        });
        
        const activeNavId = view === 'module' ? 'modules' : view;
        const activeMenu = document.getElementById(`nav-${activeNavId}`);
        if(activeMenu) {
            activeMenu.classList.add('menu-active');
            activeMenu.classList.remove('text-slate-600');
        }

        // Cleanup before navigating
        if(this.currentView === 'iot') {
            clearIoTDashboard();
        }

        this.currentView = view;

        // Render matching view
        switch(view) {
            case 'dashboard':
                this.contentArea.innerHTML = renderDashboard();
                break;
            case 'modules':
                this.contentArea.innerHTML = renderModules();
                break;
            case 'module':
                this.contentArea.innerHTML = renderModuleViewer(params);
                break;
            case 'iot':
                this.contentArea.innerHTML = renderIoTDashboard();
                initIoTDashboard();
                break;
            case 'projects':
                this.contentArea.innerHTML = renderMiniProjects();
                setTimeout(() => initProjects(), 100);
                break;
            default:
                this.contentArea.innerHTML = renderDashboard();
        }
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
