// js/pages/modules.js
import { courseData, userProfile } from '../data/courseData.js';

export function renderModules() {
    let html = `
        <div class="mb-8">
            <h1 class="text-3xl font-bold text-slate-800">Silabus Pembelajaran 📚</h1>
            <p class="text-slate-500 mt-2">Pilih modul untuk mulai belajar konsep Python, Teknik Elektro, dan Data Science untuk IoT.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    `;

    courseData.forEach(mod => {
        const isCompleted = userProfile.completedModules.includes(mod.id);
        
        let iconClass = 'fa-microchip';
        if(mod.id === 'mod1') iconClass = 'fa-code';
        else if (mod.id === 'mod2') iconClass = 'fa-bolt';
        else if (mod.id === 'mod4') iconClass = 'fa-table';
        else if (mod.id === 'mod5') iconClass = 'fa-chart-line';

        html += `
            <div class="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col group cursor-pointer" onclick="window.navigate('module', '${mod.id}')">
                <div class="h-1.5 w-full ${isCompleted ? 'bg-emerald-500' : 'bg-slate-200'}"></div>
                <div class="p-6 flex-1 flex flex-col">
                    <div class="flex justify-between items-start mb-5">
                        <div class="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <i class="fa-solid ${iconClass}"></i>
                        </div>
                        ${isCompleted ? '<span class="px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold rounded-full"><i class="fa-solid fa-check mr-1"></i>Selesai</span>' : ''}
                    </div>
                    <h3 class="text-lg font-bold text-slate-800 mb-2 leading-snug">${mod.title}</h3>
                    <p class="text-slate-500 text-sm mb-6 flex-1 line-clamp-3">${mod.desc}</p>
                    <button class="w-full py-2.5 border border-slate-200 group-hover:border-blue-600 group-hover:bg-blue-50 group-hover:text-blue-700 font-medium rounded-lg transition-colors text-slate-700 text-sm flex justify-center items-center">
                        Buka Modul <i class="fa-solid fa-arrow-right ml-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all"></i>
                    </button>
                </div>
            </div>
        `;
    });

    html += `</div>`;
    return html;
}
